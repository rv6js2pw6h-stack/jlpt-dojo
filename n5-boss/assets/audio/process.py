#!/usr/bin/env python3
"""Nettoie un enregistrement de musique (capté depuis des HP de PC) :
EQ par FFT (coupe le rumble + le souffle, un peu de corps), normalisation
loudness + soft-limiter, et boucle sans couture (crossfade)."""
import wave, numpy as np

# lecture manuelle du WAV (afconvert sort du WAVE_FORMAT_EXTENSIBLE)
buf = open("/tmp/bg_in.wav", "rb").read()
SR = 48000; ch = 2; data = None; i = 12
while i + 8 <= len(buf):
    cid = buf[i:i+4]; sz = int.from_bytes(buf[i+4:i+8], "little"); body = buf[i+8:i+8+sz]
    if cid == b"fmt ":
        ch = int.from_bytes(body[2:4], "little"); SR = int.from_bytes(body[4:8], "little")
    elif cid == b"data":
        data = body
    i += 8 + sz + (sz & 1)
raw = np.frombuffer(data, dtype=np.int16).astype(np.float64) / 32768.0
x = raw.reshape(-1, ch) if ch > 1 else raw.reshape(-1, 1)
N = x.shape[0]

# ---- EQ par FFT (phase nulle) ----
freqs = np.fft.rfftfreq(N, 1.0 / SR)
g = np.ones_like(freqs)
# passe-haut ~80 Hz (enlève le ronflement / manipulation)
fc = 80.0
g *= freqs**2 / np.sqrt(freqs**4 + fc**4 + 1e-9)
# léger low-shelf : +2 dB sous 160 Hz (corps)
low = 10**(2/20); g *= 1 + (low - 1) / (1 + (freqs / 160.0)**2)
# high-shelf : -5 dB au-dessus de 9 kHz (souffle / dureté des HP)
hs = 10**(-5/20); g *= 1 + (hs - 1) * (1 / (1 + (9000.0 / np.maximum(freqs, 1))**3))
# coupe le très aigu > 15 kHz (souffle résiduel)
g *= 1 / np.sqrt(1 + (np.maximum(freqs - 15000, 0) / 2500.0)**2)

y = np.zeros_like(x)
for c in range(x.shape[1]):
    X = np.fft.rfft(x[:, c]) * g
    y[:, c] = np.fft.irfft(X, n=N)

# ---- normalisation loudness + soft limiter ----
rms = np.sqrt(np.mean(y**2)) + 1e-9
y *= 10**(-15/20) / rms          # vise ~ -15 dBFS RMS
y = np.tanh(y * 1.1) / np.tanh(1.1)  # soft-clip doux (évite l'écrêtage dur)
peak = np.max(np.abs(y)) + 1e-9
y *= 0.97 / peak                 # marge anti-clip

# ---- boucle sans couture : crossfade de la fin sur le début ----
f = int(0.5 * SR)
ramp = np.linspace(0, 1, f)[:, None]
core = y[:-f].copy()
core[:f] = y[-f:] * (1 - ramp) + y[:f] * ramp

out = np.clip(core, -1, 1)
out16 = (out * 32767).astype(np.int16)
o = wave.open("/tmp/bg_out.wav", "wb")
o.setnchannels(out.shape[1]); o.setsampwidth(2); o.setframerate(SR)
o.writeframes(out16.tobytes()); o.close()
print("traité:", round(out.shape[0] / SR, 1), "s,", out.shape[1], "ch")
