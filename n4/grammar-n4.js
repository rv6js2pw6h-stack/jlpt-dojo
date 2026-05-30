/* =========================================================================
   N4 道場 — Base de données de grammaire JLPT N4
   -------------------------------------------------------------------------
   Schéma d'un point de grammaire :
     id, g (forme), m (sens FR), f (formation), c (catégorie), lv (palier),
     rel (ids proches), note (nuance FR), ex [{jp,fr}], qs [{t,q,fr,o,a,e}]
       t = "fill" | "meaning" | "usage" | "nuance"
   ========================================================================= */

const CATEGORIES = {
  particle:  { label: "Particles & locutions", icon: "の", color: "#5b9cff" },
  contrast:  { label: "Concession & contrast",  icon: "対", color: "#ff8a5b" },
  time:      { label: "Time & sequence",         icon: "時", color: "#43c97f" },
  condition: { label: "Condition & cause",        icon: "因", color: "#c98cff" },
  modality:  { label: "Modality & judgement",      icon: "判", color: "#ffd24d" },
  express:   { label: "Expressions & emphasis",    icon: "強", color: "#ff5c8a" },
};

const TIERS = { 1: "Essential", 2: "Common", 3: "Advanced" };

const N4_GRAMMAR = [

  /* ===================== PARTICULES & LOCUTIONS — g001 à g010 ===================== */

  {
    id: "g001", g: "〜について", m: "about, concerning", f: "Nom + について（は／も／の）",
    c: "particle", lv: 1, rel: ["g008"],
    note: "Introduces the theme you're talking, thinking or writing about. Neutral and very common.",
    ex: [
      { jp: "日本の文化について話します。", fr: "I'm going to talk about Japanese culture." },
      { jp: "その問題について考えた。", fr: "I've been thinking about this problem." },
    ],
    qs: [
      { t: "fill", q: "先生は試験＿＿＿説明した。", fr: "The teacher explained the exam.",
        o: ["について", "に対して", "によって", "にとって"], a: 0,
        e: "〜について = the topic being discussed (here, the exam)." },
      { t: "meaning", q: "「歴史について調べる」— sens de について ?",
        o: ["research history", "against history", "because of history", "for history"], a: 0,
        e: "〜について = about / concerning (the theme)." },
    ],
  },

  {
    id: "g002", g: "〜に対して／に対する", m: "envers, face à; contrary to", f: "Nom + に対して／に対する＋Nom",
    c: "particle", lv: 1, rel: ["g003"],
    note: "(1) an action/attitude directed towards a target; (2) a contrast between two elements.",
    ex: [
      { jp: "先生に対して失礼な態度を取ってはいけない。", fr: "Don't be rude to your teacher." },
      { jp: "兄が社交的なのに対して、弟は内気だ。", fr: "Unlike the eldest, who is sociable, the youngest is shy." },
    ],
    qs: [
      { t: "fill", q: "質問＿＿＿、丁寧に答えた。", fr: "He answered the question politely.",
        o: ["に対して", "について", "にとって", "によって"], a: 0,
        e: "〜に対して = action directed at a target (answer the question)." },
      { t: "nuance", q: "〜に対して vs 〜について : différence ?",
        o: ["に対して = action/attitude dirigée vers une cible ; について = simple thème dont on parle", "identical", "について exprime une opposition", "に対して exprime un thème neutre"], a: 0,
        e: "に対して = \"towards\" (with direction); について = \"about\" (theme)." },
    ],
  },

  {
    id: "g003", g: "〜によって／による", m: "by (agent); according to; because of; by means of", f: "Nom + によって／による＋Nom",
    c: "particle", lv: 1, rel: ["g002"],
    note: "Versatile: passive agent, variation \"according to\", cause, means. によると = \"according to (a source)\".",
    ex: [
      { jp: "この小説は有名な作家によって書かれた。", fr: "This novel was written by a famous author." },
      { jp: "国によって、習慣が違う。", fr: "Different countries have different customs." },
    ],
    qs: [
      { t: "fill", q: "事故＿＿＿、電車が遅れた。", fr: "Due to an accident, the train was delayed.",
        o: ["によって", "にとって", "について", "に対して"], a: 0,
        e: "〜によって can express the cause of an event." },
      { t: "nuance", q: "Pour rapporter une information (« d'après la météo… »), on dit 天気予報＿＿＿…",
        o: ["によると", "によって", "について", "にとって"], a: 0,
        e: "〜によると = source of reported information (\"according to\")." },
    ],
  },

  {
    id: "g004", g: "〜のために／ため（に）", m: "for (purpose); because (cause)", f: "V-dict／N＋の + ために",
    c: "particle", lv: 1, rel: [],
    note: "(1) Purpose: \"in order to\"; (2) cause: \"because of / because of\".",
    ex: [
      { jp: "家族のために働く。", fr: "I work for my family." },
      { jp: "事故のために遅れた。", fr: "I was delayed due to an accident." },
    ],
    qs: [
      { t: "fill", q: "将来＿＿＿、貯金している。", fr: "I'm saving for the future.",
        o: ["のために", "について", "によると", "に対して"], a: 0,
        e: "〜のために (purpose) = in order to / in view of." },
      { t: "meaning", q: "「大雨のために試合が中止になった」— sens de ために ?",
        o: ["due to heavy rain (cause)", "for heavy rain (goal)", "about the rain", "despite the rain"], a: 0,
        e: "Here 〜ために expresses cause (\"because of\")." },
    ],
  },

  {
    id: "g005", g: "〜にとって", m: "for, from the point of view of", f: "Nom + にとって（は／も／の）",
    c: "particle", lv: 1, rel: ["g002"],
    note: "Presents the point of view from which one is evaluating (\"for X, it's...\"). Followed by an evaluation.",
    ex: [
      { jp: "私にとって、家族が一番大切だ。", fr: "For me, family is the most important thing." },
      { jp: "学生にとって、この本は役に立つ。", fr: "For students, this is a useful book." },
    ],
    qs: [
      { t: "fill", q: "子供＿＿＿、遊びはとても大切だ。", fr: "For children, play is very important.",
        o: ["にとって", "について", "によって", "に対して"], a: 0,
        e: "〜にとって = from the point of view of (followed by an assessment)." },
      { t: "nuance", q: "〜にとって vs 〜に対して : différence ?",
        o: ["にとって = point de vue/évaluation ; に対して = action dirigée vers une cible", "identical", "にとって marque une opposition", "に対して exprime un point de vue"], a: 0,
        e: "にとって introduces a judgment \"for X\"; に対して an attitude \"towards X\"." },
    ],
  },

  {
    id: "g006", g: "〜として", m: "as, as (role, quality)", f: "Nom + として",
    c: "particle", lv: 1, rel: [],
    note: "Indicates the role, function or quality under which someone/something is considered.",
    ex: [
      { jp: "彼は医者として働いている。", fr: "He works as a doctor." },
      { jp: "趣味として絵を描く。", fr: "I draw as a hobby." },
    ],
    qs: [
      { t: "fill", q: "留学生＿＿＿日本に来た。", fr: "I came to Japan as a foreign student.",
        o: ["として", "について", "にとって", "によって"], a: 0,
        e: "〜として = as / under the status of." },
      { t: "meaning", q: "「記念として写真を撮る」— sens de として ?",
        o: ["take a photo as a souvenir", "about remembrance", "because of the memory", "for memories only"], a: 0,
        e: "〜として = as / in the capacity of." },
    ],
  },

  {
    id: "g007", g: "〜において／における", m: "in, in (place or domain, semi-formal)", f: "Nom + において／における＋Nom",
    c: "particle", lv: 2, rel: [],
    note: "Formal equivalent of で for place, time or domain. Common in writing.",
    ex: [
      { jp: "会議は東京において行われた。", fr: "The meeting took place in Tokyo." },
      { jp: "現代社会における問題を考える。", fr: "Reflect on the problems of modern society." },
    ],
    qs: [
      { t: "fill", q: "この分野＿＿＿、彼は有名だ。", fr: "In this field, he is famous.",
        o: ["において", "にとって", "について", "によると"], a: 0,
        e: "〜において = in (place/domain), formal register (≈ で)." },
      { t: "nuance", q: "〜において vs 〜で : nuance ?",
        o: ["において est plus formel/écrit ; で est neutre et courant", "identical", "で est plus formel", "において est familier"], a: 0,
        e: "において = supported register of で." },
    ],
  },

  {
    id: "g008", g: "〜に関して／に関する", m: "concerning, about (formal)", f: "Nom + に関して／に関する＋Nom",
    c: "particle", lv: 2, rel: ["g001"],
    note: "More formal than について. Introduces a topic neatly.",
    ex: [
      { jp: "事件に関して、詳しい情報はまだない。", fr: "Detailed information on the case is not yet available." },
      { jp: "環境問題に関する本を読んだ。", fr: "I read a book on environmental issues." },
    ],
    qs: [
      { t: "fill", q: "この件＿＿＿、後で詳しく説明します。", fr: "I'll explain this in detail later.",
        o: ["に関して", "にとって", "によって", "に対して"], a: 0,
        e: "〜に関して = about (formal register, ≈ について)." },
      { t: "nuance", q: "〜に関して vs 〜について : nuance ?",
        o: ["même sens (« à propos de ») ; に関して est plus formel/écrit", "opposite", "について est plus formel", "に関して exprime une cause"], a: 0,
        e: "に関して = supported variant of について." },
    ],
  },

  {
    id: "g009", g: "〜を通して／を通じて", m: "through", f: "Nom + を通して／を通じて",
    c: "particle", lv: 2, rel: [],
    note: "(1) means/intermediary; (2) continuous scope (\"throughout\").",
    ex: [
      { jp: "友達を通して彼を知った。", fr: "I met this person through a friend." },
      { jp: "一年を通して暖かい。", fr: "It's warm all year round." },
    ],
    qs: [
      { t: "fill", q: "テレビ＿＿＿、ニュースを知った。", fr: "I heard the news on television.",
        o: ["を通して", "について", "にとって", "に対して"], a: 0,
        e: "〜を通して = via (channel/medium)." },
      { t: "meaning", q: "「一年を通して観光客が多い」— sens de を通して ?",
        o: ["year-round (continuous scope)", "through a specific year", "because of the year", "for the year"], a: 0,
        e: "〜を通して also expresses continuous temporal extent." },
    ],
  },

  {
    id: "g010", g: "〜をもとに（して）", m: "from, based on", f: "Nom + をもとに（して）",
    c: "particle", lv: 2, rel: [],
    note: "Indicates the material/source used as a starting point for a creation.",
    ex: [
      { jp: "この映画は実話をもとに作られた。", fr: "This film is based on a true story." },
      { jp: "データをもとに、グラフを作った。", fr: "I created a graph from the data." },
    ],
    qs: [
      { t: "fill", q: "アンケートの結果＿＿＿、商品を改良した。", fr: "We improved the product based on the survey results.",
        o: ["をもとに", "にとって", "について", "に対して"], a: 0,
        e: "〜をもとに = from (starting material/source)." },
      { t: "meaning", q: "「経験をもとに本を書いた」— sens ?",
        o: ["write a book based on his experience", "writing a book against experience", "writing about experience", "writing in spite of experience"], a: 0,
        e: "〜をもとに = taking X as base/raw material." },
    ],
  },

  /* ===================== CONCESSION & CONTRASTE — g011 à g017 ===================== */

  {
    id: "g011", g: "〜が（逆接）", m: "but, however (soft)", f: "Phrase1 + が、 + Phrase2",
    c: "contrast", lv: 1, rel: ["g012"],
    note: "Linking conjunction within a sentence, polite and gentle tone. Connect two contrasting statements.",
    ex: [
      { jp: "この店は安いが、あまりおいしくない。", fr: "This restaurant is cheap, but not very good." },
      { jp: "電話しましたが、誰も出ませんでした。", fr: "I phoned, but nobody answered." },
    ],
    qs: [
      { t: "fill", q: "頑張りました＿＿、失敗しました。", fr: "I tried, but I failed.",
        o: ["が", "ので", "から", "ために"], a: 0,
        e: "〜が = but (soft contrast between two propositions)." },
      { t: "nuance", q: "〜が vs 〜けど : nuance ?",
        o: ["même sens (« mais ») ; が est un peu plus formel/écrit, けど plus familier", "opposite", "けど est plus formel", "が exprime une cause"], a: 0,
        e: "が = supported register; けど = current register." },
    ],
  },

  {
    id: "g012", g: "〜けれど／けれども／けど", m: "but, although, still", f: "V-plain／A／N＋だ + けれど",
    c: "contrast", lv: 1, rel: ["g011", "g013"],
    note: "Very common contrast/concession. けれども (polite/written) → けれど → けど (colloquial).",
    ex: [
      { jp: "高いけれど、品質がいい。", fr: "Expensive, but good quality." },
      { jp: "行きたいけど、時間がない。", fr: "I'd like to go, but I don't have the time." },
    ],
    qs: [
      { t: "fill", q: "勉強した＿＿、よく分からなかった。", fr: "I studied, but I didn't quite understand.",
        o: ["けど", "ので", "から", "ために"], a: 0,
        e: "〜けど = but / still (contrast, colloquial)." },
      { t: "usage", q: "Forme la plus polie/écrite parmi : けど / けれど / けれども ?",
        o: ["けれども", "けど", "けれど", "they are equivalent in register"], a: 0,
        e: "けれども is the most polished form; けど the most colloquial." },
    ],
  },

  {
    id: "g013", g: "〜のに", m: "although, despite this", f: "V-plain／A-い + のに ／ A-な＋な／N＋な + のに",
    c: "contrast", lv: 1, rel: ["g012"],
    note: "Concession with a hint of disappointment, surprise or reproach: the result is the opposite of what was expected.",
    ex: [
      { jp: "薬を飲んだのに、まだ痛い。", fr: "Even though I've taken the medicine, it still hurts." },
      { jp: "約束したのに、来なかった。", fr: "He had promised, and yet he didn't come." },
    ],
    qs: [
      { t: "fill", q: "一生懸命練習した＿＿、負けてしまった。", fr: "Although I trained hard, I lost.",
        o: ["のに", "ので", "から", "ために"], a: 0,
        e: "〜のに = although (with disappointment/surprise)." },
      { t: "nuance", q: "〜のに vs 〜けど : nuance ?",
        o: ["のに ajoute une déception/un reproche ; けど est un simple contraste neutre", "identical", "けど exprime une déception", "のに exprime une cause"], a: 0,
        e: "のに = contrast + emotion (disappointment). けど = neutral contrast." },
    ],
  },

  {
    id: "g014", g: "〜ても／でも", m: "even if", f: "V-て + も ／ A-くて + も ／ N／A-な + でも",
    c: "contrast", lv: 1, rel: [],
    note: "Hypothetical concession: \"even if...\". The result remains the same.",
    ex: [
      { jp: "雨が降っても、出かけます。", fr: "Even if it rains, I'll go out." },
      { jp: "高くても買います。", fr: "Even if it's expensive, I'll buy it." },
    ],
    qs: [
      { t: "fill", q: "いくら呼ん＿＿、返事がない。", fr: "No matter how many times I call him, there's no answer.",
        o: ["でも", "から", "ので", "のに"], a: 0,
        e: "〜ても/でも = even if (concession). (呼んでも)" },
      { t: "meaning", q: "「失敗しても、また挑戦する」— sens de ても ?",
        o: ["even if I fail, I'll try again", "because I fail", "when I fail", "as soon as I fail"], a: 0,
        e: "〜ても = even if / even so." },
    ],
  },

  {
    id: "g015", g: "〜のに対して", m: "as opposed to", f: "V-plain／A／N＋な／である + のに対して",
    c: "contrast", lv: 2, rel: ["g002"],
    note: "Contrast two parallel facts: \"X, while Y\".",
    ex: [
      { jp: "兄は文系なのに対して、弟は理系だ。", fr: "While the elder is literary, the younger is scientific." },
      { jp: "去年は雨が多かったのに対して、今年は少ない。", fr: "Whereas last year it rained a lot, this year it's only a little." },
    ],
    qs: [
      { t: "fill", q: "都会は便利な＿＿＿、田舎は静かだ。", fr: "While the city is convenient, the countryside is tranquil.",
        o: ["のに対して", "について", "によって", "にとって"], a: 0,
        e: "〜のに対して = contrasting two facts (city ↔ countryside)." },
      { t: "meaning", q: "「収入が増えたのに対して、支出も増えた」— sens ?",
        o: ["while revenues have risen, so have expenses", "thanks to revenues", "because of income", "about revenues"], a: 0,
        e: "〜のに対して = contrast between two parallel facts." },
    ],
  },

  {
    id: "g016", g: "〜一方（で）", m: "on the other hand, during this time", f: "V-plain／A／N＋である + 一方（で）",
    c: "contrast", lv: 2, rel: ["g015"],
    note: "Presents two aspects in parallel or in contrast.",
    ex: [
      { jp: "都会は便利な一方で、物価が高い。", fr: "The city is convenient, but life is expensive." },
      { jp: "輸出が増える一方で、輸入は減った。", fr: "While exports rose, imports fell." },
    ],
    qs: [
      { t: "fill", q: "彼は厳しい＿＿＿、優しいところもある。", fr: "He's stern, but on the other hand he's kind.",
        o: ["一方で", "ために", "ので", "のに"], a: 0,
        e: "〜一方で = parallels two contrasting facets." },
      { t: "meaning", q: "「働く一方で、勉強も続けている」— sens de 一方で ?",
        o: ["while working, he also continues to study", "because of work", "after work", "despite work"], a: 0,
        e: "〜一方で = \"elsewhere / at the same time\"." },
    ],
  },

  {
    id: "g017", g: "〜ながら（逆接）", m: "while at the same time", f: "V-ます stem／A-い／A-な／N + ながら",
    c: "contrast", lv: 1, rel: [],
    note: "Two values: (1) simultaneity of two actions; (2) concession (\"although\") with a state/quality.",
    ex: [
      { jp: "音楽を聞きながら勉強する。", fr: "I study while listening to music." },
      { jp: "残念ながら、参加できません。", fr: "Although it's unfortunate, I can't participate." },
    ],
    qs: [
      { t: "fill", q: "テレビを見＿＿＿、ご飯を食べる。", fr: "I eat while watching TV.",
        o: ["ながら", "から", "ので", "のに"], a: 0,
        e: "〜ながら (job 1) = simultaneity of two actions." },
      { t: "nuance", q: "Dans «歩きながら» et «知っていながら», ながら signifie :",
        o: ["1st = simultaneity; 2nd = concession (\"although\")", "both = simultaneity", "both = concession", "1st = concession"], a: 0,
        e: "ながら has two values depending on the context: simultaneity or concession." },
    ],
  },

  /* ===================== TEMPS & SÉQUENCE — g018 à g025 ===================== */

  {
    id: "g018", g: "〜ているうちに", m: "while, in the course of (change)", f: "V-ている／A／N＋の + うちに",
    c: "time", lv: 2, rel: ["g025"],
    note: "Taking advantage of a period of time, or a change that occurs during that period (\"à force de...\").",
    ex: [
      { jp: "話しているうちに、仲良くなった。", fr: "By talking, we became friends." },
      { jp: "聞いているうちに、眠くなった。", fr: "As I listened, I became sleepy." },
    ],
    qs: [
      { t: "fill", q: "本を読んでいる＿＿＿、寝てしまった。", fr: "While I was reading, I fell asleep.",
        o: ["うちに", "ばかりに", "までに", "とおりに"], a: 0,
        e: "〜ているうちに = while / during (with a change)." },
      { t: "meaning", q: "「住んでいるうちに、町が好きになった」— sens ?",
        o: ["the longer I lived there, the more I came to love the city", "before living there", "because of living there", "as soon as I lived there"], a: 0,
        e: "〜うちに = gradual change occurring over time." },
    ],
  },

  {
    id: "g019", g: "〜たばかり", m: "just done", f: "V-た + ばかり",
    c: "time", lv: 1, rel: [],
    note: "Indicates that an action has just occurred (from the subjective point of view of the speaker). Different from たところ (objectively at the moment).",
    ex: [
      { jp: "さっき食べたばかりだ。", fr: "I just ate." },
      { jp: "日本に来たばかりで、まだ慣れていない。", fr: "I've just arrived in Japan, so I'm not used to it yet." },
    ],
    qs: [
      { t: "fill", q: "この携帯は先月買った＿＿＿なのに、もう壊れた。", fr: "I just bought it last month, and it's already broken.",
        o: ["ばかり", "うちに", "ながら", "までに"], a: 0,
        e: "〜たばかり = just come from (subjectively recent)." },
      { t: "nuance", q: "〜たばかり vs 〜たところ : nuance ?",
        o: ["ばかり = subjectivement récent (peut faire plusieurs jours) ; ところ = objectivement à l'instant même", "identical", "ところ = il y a longtemps", "ばかり = futur"], a: 0,
        e: "ばかり = feeling of \"recently\"; ところ = just now." },
    ],
  },

  {
    id: "g020", g: "〜てから", m: "after making", f: "V-て + から",
    c: "time", lv: 1, rel: ["g023"],
    note: "Indicates the order of actions: \"after doing X, (then) Y\". Emphasizes succession.",
    ex: [
      { jp: "手を洗ってから、食べます。", fr: "I eat after washing my hands." },
      { jp: "日本に来てから、三年たった。", fr: "It's been three years since I arrived in Japan." },
    ],
    qs: [
      { t: "fill", q: "宿題をやっ＿＿＿、遊びに行く。", fr: "I'll go and play after I've done my homework.",
        o: ["てから", "までに", "うちに", "ながら"], a: 0,
        e: "〜てから = after having done (succession of actions)." },
      { t: "meaning", q: "「卒業してから、ずっと働いている」— sens de てから ?",
        o: ["since graduation", "before graduation", "during graduation", "because of the diploma"], a: 0,
        e: "〜てから also indicates the temporal starting point (\"since\")." },
    ],
  },

  {
    id: "g021", g: "〜たら（時間）", m: "when, once (completed future moment)", f: "V-た + ら",
    c: "time", lv: 1, rel: ["g027"],
    note: "Marks the moment when, once X has been completed, Y occurs. Very common. See also conditional use.",
    ex: [
      { jp: "家に帰ったら、電話します。", fr: "When I get home, I'll phone." },
      { jp: "春になったら、花が咲く。", fr: "When spring comes, the flowers will open." },
    ],
    qs: [
      { t: "fill", q: "駅に着い＿＿、連絡してください。", fr: "When you get to the station, contact me.",
        o: ["たら", "ながら", "までに", "うちに"], a: 0,
        e: "〜たら = once X accomplished (future moment). (着いたら)" },
      { t: "meaning", q: "「窓を開けたら、鳥がいた」— sens ?",
        o: ["when I opened the window, there was a bird (discovery)", "before opening the window", "to open the window", "despite the open window"], a: 0,
        e: "〜たら can mark a discovery at the moment of the completed action." },
    ],
  },

  {
    id: "g022", g: "〜までに", m: "by, before (deadline)", f: "Nom／V-dict + までに",
    c: "time", lv: 1, rel: [],
    note: "Indicates the date/time limit before which a specific action must be taken. To be distinguished from まで (continuity until).",
    ex: [
      { jp: "五時までに帰ってください。", fr: "Be home by five." },
      { jp: "明日までにレポートを出す。", fr: "I'll deliver the report by tomorrow." },
    ],
    qs: [
      { t: "fill", q: "金曜日＿＿＿、申し込んでください。", fr: "Register by Friday.",
        o: ["までに", "まで", "から", "ながら"], a: 0,
        e: "〜までに = deadline for a one-off action." },
      { t: "nuance", q: "〜までに vs 〜まで : différence ?",
        o: ["までに = avant une échéance (action ponctuelle) ; まで = jusqu'à (action continue)", "identical", "まで = échéance", "までに = continuité"], a: 0,
        e: "5時まで待つ (continuous until 5am) ≠ 5時までに来る (before 5am)." },
    ],
  },

  {
    id: "g023", g: "〜ところ", m: "about to / coming from", f: "V-dict／V-ている／V-た + ところ（だ）",
    c: "time", lv: 2, rel: ["g020"],
    note: "Marks the phase of an action: 〜るところ (just before), 〜ているところ (right in the middle), 〜たところ (just after).",
    ex: [
      { jp: "今から出かけるところだ。", fr: "I'm on my way out." },
      { jp: "ちょうど食べているところです。", fr: "I'm just eating." },
    ],
    qs: [
      { t: "fill", q: "今、駅に着いた＿＿＿です。", fr: "I've just arrived at the station.",
        o: ["ところ", "ばかりに", "うちに", "までに"], a: 0,
        e: "V-た + ところ = just coming from (right now)." },
      { t: "meaning", q: "「これから始めるところだ」— sens ?",
        o: ["I'm about to start", "I've already finished", "I'm right in the middle", "I start every time"], a: 0,
        e: "V-dict + ところ = just before doing." },
    ],
  },

  {
    id: "g024", g: "〜たとき", m: "when, when (past action)", f: "V-た／V-dict／A／N＋の + とき",
    c: "time", lv: 1, rel: [],
    note: "Indicates the moment of an action or state. The verb tense before とき specifies anteriority/posteriority.",
    ex: [
      { jp: "子供のとき、よく海で泳いだ。", fr: "When I was a child, I often swam in the sea." },
      { jp: "日本に行ったとき、写真をたくさん撮った。", fr: "When I went to Japan, I took a lot of photos." },
    ],
    qs: [
      { t: "fill", q: "国を出る＿＿＿、両親が泣いた。", fr: "As I left the country, my parents cried.",
        o: ["とき", "までに", "ながら", "うちに"], a: 0,
        e: "〜とき = when." },
      { t: "nuance", q: "「日本に行くとき」vs「日本に行ったとき」— différence ?",
        o: ["行くとき = avant/au moment de partir ; 行ったとき = une fois arrivé là-bas", "identical", "行くとき = après arrivée", "行ったとき = avant le départ"], a: 0,
        e: "The verb tense before とき indicates the order of the actions." },
    ],
  },

  {
    id: "g025", g: "〜あいだ／あいだに", m: "while, between", f: "V-plain／A／N＋の + あいだ（に）",
    c: "time", lv: 1, rel: ["g018"],
    note: "あいだ = for the entire duration (continuous action); あいだに = at some point within this interval (one-off action).",
    ex: [
      { jp: "夏休みのあいだ、毎日泳いだ。", fr: "During the summer vacations, I swam every day." },
      { jp: "留守のあいだに、誰か来た。", fr: "While I was away, someone came by." },
    ],
    qs: [
      { t: "fill", q: "母が出かけている＿＿＿、掃除をした。", fr: "While my mother was out, I cleaned the house.",
        o: ["あいだに", "までに", "ながら", "とき"], a: 0,
        e: "〜あいだに = at some point during this interval (one-off action)." },
      { t: "nuance", q: "〜あいだ vs 〜あいだに : différence ?",
        o: ["あいだ = action continue sur toute la durée ; あいだに = action ponctuelle à un moment de l'intervalle", "identical", "あいだに = action continue", "あいだ = action ponctuelle"], a: 0,
        e: "あいだ (continuous) ≠ あいだに (one-off)." },
    ],
  },

  /* ===================== CONDITION & CAUSE — g026 à g033 ===================== */

  {
    id: "g026", g: "〜ば", m: "if (hypothetical conditional)", f: "V-ば形 ／ A-ければ ／ N／A-な＋であれば",
    c: "condition", lv: 1, rel: ["g027", "g029"],
    note: "General hypothetical condition, often for general truths. Avoids a request/order in the main (prefer たら).",
    ex: [
      { jp: "春になれば、桜が咲く。", fr: "When spring arrives, the cherry trees blossom." },
      { jp: "練習すれば、上手になる。", fr: "If you practice, you'll progress." },
    ],
    qs: [
      { t: "fill", q: "急げ＿＿、間に合うよ。", fr: "If you hurry, you'll be in time.",
        o: ["ば", "たら", "なら", "から"], a: 0,
        e: "〜ば = hypothetical condition (急げば)." },
      { t: "nuance", q: "Quelle phrase est NATURELLE avec ば ?",
        o: ["ボタンを押せば、ドアが開く（vérité générale）", "雨が降れば、傘を貸してあげる（demande/offre）", "暑ければ、窓を開けてください（ordre）", "高ければ、買ってください（demande）"], a: 0,
        e: "ば is suitable for general truths; for a principal request/offer, we prefer たら." },
    ],
  },

  {
    id: "g027", g: "〜たら", m: "if, when (hypothesis or completed moment)", f: "V-た + ら ／ A-かったら ／ N／A-な＋だったら",
    c: "condition", lv: 1, rel: ["g026"],
    note: "The most flexible and common condition. Works for hypothesis, supposition or completed future moment. Compatible with requests/orders.",
    ex: [
      { jp: "雨が降ったら、行きません。", fr: "If it rains, I won't go." },
      { jp: "暇だったら、手伝ってください。", fr: "If you have time, help me." },
    ],
    qs: [
      { t: "fill", q: "もし時間があっ＿＿、映画を見たい。", fr: "If I have time, I want to see a movie.",
        o: ["たら", "ば", "と", "なら"], a: 0,
        e: "〜たら = flexible condition, compatible with a desire/request (あったら)." },
      { t: "nuance", q: "〜たら vs 〜ば : nuance principale ?",
        o: ["たら accepte demandes/ordres/désirs en principale ; ば les évite (vérités générales)", "identical", "ば est plus souple", "たら ne marque jamais le futur"], a: 0,
        e: "たら is the most flexible; ば favors general truths." },
    ],
  },

  {
    id: "g028", g: "〜と（条件）", m: "when, if (automatic result)", f: "V-dict／A／N＋だ + と",
    c: "condition", lv: 1, rel: ["g027"],
    note: "Automatic, systematic or natural consequence: \"whenever / as soon as X, then Y\". No will/request in the principal.",
    ex: [
      { jp: "春になると、暖かくなる。", fr: "When spring arrives, it's warmer." },
      { jp: "このボタンを押すと、お湯が出る。", fr: "When this button is pressed, hot water flows." },
    ],
    qs: [
      { t: "fill", q: "右に曲がる＿＿、駅があります。", fr: "If you turn right, there's the station.",
        o: ["と", "たら", "ば", "なら"], a: 0,
        e: "〜と = automatic/systematic result (曲がると)." },
      { t: "nuance", q: "Peut-on dire « 春になると、出かけてください » ?",
        o: ["non : la principale de と ne peut pas être une demande/un ordre", "yes, that's correct", "oui, comme たら", "only in the past tense"], a: 0,
        e: "と excludes will, request or order in the main proposition." },
    ],
  },

  {
    id: "g029", g: "〜なら", m: "if it's the case of, if we're talking about", f: "N／V-plain／A + なら",
    c: "condition", lv: 1, rel: ["g026"],
    note: "Places a condition based on a context/information given by the interlocutor: \"if (really) X, then...\". Often to advise.",
    ex: [
      { jp: "日本へ行くなら、京都がおすすめだ。", fr: "If you go to Japan, I recommend Kyoto." },
      { jp: "君が行かないなら、私も行かない。", fr: "If you don't go, I won't either." },
    ],
    qs: [
      { t: "fill", q: "パソコンを買う＿＿、あの店が安いよ。", fr: "If you're buying a computer, this store is cheap.",
        o: ["なら", "と", "ば", "たら"], a: 0,
        e: "〜なら = condition based on a given context, often to advise (買うなら)." },
      { t: "nuance", q: "「日本に行ったら写真を撮る」vs「日本に行くなら、カメラを買う」— rôle de なら ?",
        o: ["なら : l'action principale précède ou conseille à propos de la condition ; たら : l'action suit la condition réalisée", "identical", "なら = action après", "たら = conseil avant"], a: 0,
        e: "なら reacts to a theme/context; the action may precede the condition." },
    ],
  },

  {
    id: "g030", g: "〜おかげで", m: "thanks to (positive result)", f: "V-plain／A／N＋の + おかげで",
    c: "condition", lv: 1, rel: ["g031"],
    note: "Cause of a happy outcome, with gratitude.",
    ex: [
      { jp: "先生のおかげで、合格できた。", fr: "Thanks to the teacher, I succeeded." },
      { jp: "天気がよかったおかげで、楽しめた。", fr: "Thanks to the fine weather, we were able to enjoy ourselves." },
    ],
    qs: [
      { t: "fill", q: "君の助け＿＿＿、助かったよ。", fr: "Thanks to your help, I was saved.",
        o: ["のおかげで", "のせいで", "について", "によると"], a: 0,
        e: "〜おかげで = thanks to (good result, gratitude)." },
      { t: "nuance", q: "〜おかげで vs 〜せいで : différence ?",
        o: ["おかげで = résultat positif (gratitude) ; せいで = résultat négatif (reproche)", "identical", "せいで = positif", "おかげで = négatif"], a: 0,
        e: "おかげで → good; せいで → bad." },
    ],
  },

  {
    id: "g031", g: "〜せいで", m: "because of (negative result)", f: "V-plain／A／N＋の + せいで",
    c: "condition", lv: 1, rel: ["g030"],
    note: "Cause of a negative result, often with a hint of reproach.",
    ex: [
      { jp: "寝不足のせいで、頭が痛い。", fr: "Because of the lack of sleep, I have a headache." },
      { jp: "君のせいで、負けた。", fr: "You're the reason we lost." },
    ],
    qs: [
      { t: "fill", q: "渋滞＿＿＿、遅刻した。", fr: "Because of traffic jams, I was late.",
        o: ["のせいで", "のおかげで", "について", "によると"], a: 0,
        e: "〜せいで = cause of a bad result (reproach)." },
      { t: "meaning", q: "「機械の故障のせいで作業が止まった」— sens ?",
        o: ["due to machine breakdown, work stopped", "thanks to the", "about the breakdown", "despite the breakdown"], a: 0,
        e: "〜せいで attributes a bad result to a cause." },
    ],
  },

  {
    id: "g032", g: "〜ために（原因・目的）", m: "for (purpose); because (cause)", f: "V-dict／N＋の + ために",
    c: "condition", lv: 1, rel: ["g004"],
    note: "Purpose (deliberate verb) or cause (often objective fact, somewhat formal register).",
    ex: [
      { jp: "健康のために、運動する。", fr: "I exercise for my health." },
      { jp: "台風のために、電車が止まった。", fr: "The typhoon brought trains to a standstill." },
    ],
    qs: [
      { t: "fill", q: "試験に合格する＿＿＿、毎日勉強する。", fr: "To pass the exam, I study every day.",
        o: ["ために", "せいで", "のに", "けれど"], a: 0,
        e: "〜ために (but) = in order to (with purposeful verb)." },
      { t: "meaning", q: "「雪のために道が閉鎖された」— sens de ために ?",
        o: ["because of snow (cause)", "for snow (goal)", "despite the snow", "about snow"], a: 0,
        e: "Here 〜ために expresses the objective cause." },
    ],
  },

  {
    id: "g033", g: "〜てもしかたない／てもしょうがない", m: "it's useless even if it's a dead end", f: "V-て／A-くて／N＋でも + しかたない／しょうがない",
    c: "condition", lv: 2, rel: [],
    note: "Expresses resignation: it's pointless/vain to do X, or X is inevitable. しょうがない is more familiar.",
    ex: [
      { jp: "今さら後悔してもしかたない。", fr: "There's no point regretting it now." },
      { jp: "終わったことを悩んでもしょうがない。", fr: "No need to worry about what's past." },
    ],
    qs: [
      { t: "fill", q: "起きてしまったことを怒っ＿＿＿。", fr: "There's no point getting upset about what happened.",
        o: ["てもしかたない", "なければならない", "たほうがいい", "てはいけない"], a: 0,
        e: "〜てもしかたない = uselessness/resignation (\"it doesn't change anything\")." },
      { t: "meaning", q: "「心配してもしょうがない」— sens ?",
        o: ["there's no point in worrying", "we have to worry", "we never worry", "we worry every time"], a: 0,
        e: "〜てもしょうがない = resignation, uselessness of action." },
    ],
  },

  /* ===================== MODALITÉ & JUGEMENT — g034 à g043 ===================== */

  {
    id: "g034", g: "〜そうだ（様態）", m: "to look like, to seem (appearance)", f: "V-ます stem／A-stem + そうだ （いい→よさそう）",
    c: "modality", lv: 1, rel: ["g035"],
    note: "Visual/immediate impression: \"it looks...\". We remove い from adjectives (おいしい→おいしそう).",
    ex: [
      { jp: "このケーキはおいしそうだ。", fr: "This cake looks delicious." },
      { jp: "雨が降りそうだ。", fr: "It looks like it's going to rain." },
    ],
    qs: [
      { t: "fill", q: "空が暗い。雨が降り＿＿＿だ。", fr: "The sky is dark. It looks like it's going to rain.",
        o: ["そう", "よう", "らしい", "みたい"], a: 0,
        e: "〜そうだ (様態) = immediate printing (降りそう)." },
      { t: "nuance", q: "〜そうだ (様態) vs 〜そうだ (伝聞) : différence de forme ?",
        o: ["様態 : V-ます stem + そう (降りそう) ; 伝聞 : forme plaine + そう (降るそうだ)", "identical", "伝聞 enlève le radical", "様態 utilise la forme plaine"], a: 0,
        e: "Appearance: radical + そう; hearsay: plain form + そうだ." },
    ],
  },

  {
    id: "g035", g: "〜そうだ（伝聞）", m: "it is said that", f: "V-plain／A／N＋だ + そうだ",
    c: "modality", lv: 1, rel: ["g034"],
    note: "Hearsay: one reports information heard, without modifying it. Often with によると.",
    ex: [
      { jp: "天気予報によると、明日は雨だそうだ。", fr: "According to the weather forecast, it will rain tomorrow." },
      { jp: "彼は来月結婚するそうだ。", fr: "They say he's getting married next month." },
    ],
    qs: [
      { t: "fill", q: "ニュースによると、地震があった＿＿＿。", fr: "According to the news, there was an earthquake.",
        o: ["そうだ", "ようだ", "らしい", "みたいだ"], a: 0,
        e: "〜そうだ (伝聞) = reported information (\"it is said that\")." },
      { t: "meaning", q: "「彼は元気だそうだ」— sens ?",
        o: ["I hear he's doing well (overheard)", "he looks good (seen)", "he should be fine", "he wants to be well"], a: 0,
        e: "Plain form + そうだ = hearsay." },
    ],
  },

  {
    id: "g036", g: "〜らしい", m: "it would seem that, apparently; typical of", f: "V-plain／A／N + らしい",
    c: "modality", lv: 1, rel: ["g037"],
    note: "(1) Inference based on external information (\"apparently\"); (2) \"worthy of / typical of\" (男らしい).",
    ex: [
      { jp: "外は寒いらしい。みんなコートを着ている。", fr: "I hear it's cold outside. Everyone is wearing a coat." },
      { jp: "彼は本当に学生らしい。", fr: "He really is a model student (typical)." },
    ],
    qs: [
      { t: "fill", q: "あの店は人気がある＿＿＿。いつも行列ができている。", fr: "This store seems popular. There's always a line.",
        o: ["らしい", "そうな", "ような", "つもり"], a: 0,
        e: "〜らしい = deduction based on external clues." },
      { t: "meaning", q: "「春らしい天気だ」— sens de らしい ?",
        o: ["spring-like weather / typically spring-like", "I hear it's springtime", "spring should come", "about spring"], a: 0,
        e: "〜らしい (job 2) = characteristic/typical of." },
    ],
  },

  {
    id: "g037", g: "〜ようだ／みたいだ", m: "to look like, to seem (sensory deduction)", f: "V-plain／A／N＋の + ようだ ／ 〜みたいだ（familier）",
    c: "modality", lv: 1, rel: ["g036"],
    note: "Conjecture based on one's own sensations/observations. みたいだ is the colloquial version. Also used for comparison (\"like\").",
    ex: [
      { jp: "誰かいるようだ。物音がする。", fr: "Sounds like someone's home. I hear noises." },
      { jp: "氷のように冷たい手。", fr: "Hands as cold as ice." },
    ],
    qs: [
      { t: "fill", q: "熱がある。風邪をひいた＿＿＿だ。", fr: "I've got a fever. I seem to have caught a cold.",
        o: ["よう", "そう", "らしく", "つもり"], a: 0,
        e: "〜ようだ = conjecture based on one's own sensations (ひいたようだ)." },
      { t: "nuance", q: "〜ようだ vs 〜らしい : nuance ?",
        o: ["ようだ = déduction basée sur ses propres observations ; らしい = info plutôt extérieure/entendue", "identical", "らしい = sensation directe", "ようだ = ouï-dire"], a: 0,
        e: "ようだ relies on self; らしい on external sources." },
    ],
  },

  {
    id: "g038", g: "〜はずだ", m: "should be, normally it is", f: "V-plain／A／N＋の + はずだ",
    c: "modality", lv: 1, rel: [],
    note: "Logical deduction based on objective reason: \"according to all logic, this is how it should be\".",
    ex: [
      { jp: "彼は今日来るはずだ。", fr: "He should be here today." },
      { jp: "メールを送ったから、もう着いているはずだ。", fr: "I've sent the e-mail, it should have arrived by now." },
    ],
    qs: [
      { t: "fill", q: "彼は鍵を持っているから、開けられる＿＿＿。", fr: "He has the key, so he should be able to open it.",
        o: ["はずだ", "つもりだ", "ようだ", "そうだ"], a: 0,
        e: "〜はずだ = logical deduction based on a reason." },
      { t: "nuance", q: "〜はずだ vs 〜つもりだ : différence ?",
        o: ["はずだ = attente logique objective ; つもりだ = intention personnelle de faire", "identical", "はずだ = intention", "つもりだ = déduction"], a: 0,
        e: "はずだ = it should logically; つもりだ = I intend to." },
    ],
  },

  {
    id: "g039", g: "〜つもりだ", m: "intend to, plan to", f: "V-dict／V-ない + つもりだ",
    c: "modality", lv: 1, rel: [],
    note: "Expresses a decided personal intention/project. V-ない + つもり = intend not to do.",
    ex: [
      { jp: "来年、留学するつもりだ。", fr: "Next year, I plan to study abroad." },
      { jp: "もうタバコは吸わないつもりだ。", fr: "I intend to stop smoking." },
    ],
    qs: [
      { t: "fill", q: "夏休みに国へ帰る＿＿＿です。", fr: "I plan to return to my country during the summer vacations.",
        o: ["つもり", "はず", "そう", "らしい"], a: 0,
        e: "〜つもりだ = personal intention/project." },
      { t: "meaning", q: "「彼に会わないつもりだ」— sens ?",
        o: ["I intend not to meet him", "I have to meet him", "I hear I'm meeting him", "I always meet him"], a: 0,
        e: "V-ない + つもりだ = intention not to do." },
    ],
  },

  {
    id: "g040", g: "〜かもしれない", m: "it may be that", f: "V-plain／A／N + かもしれない",
    c: "modality", lv: 1, rel: ["g041"],
    note: "Uncertain, low to medium possibility. \"It's possible that...\".",
    ex: [
      { jp: "明日は雨かもしれない。", fr: "It may rain tomorrow." },
      { jp: "彼はもう帰ったかもしれない。", fr: "Maybe he's back already." },
    ],
    qs: [
      { t: "fill", q: "道が混んでいるから、遅れる＿＿＿。", fr: "The road is congested, so I may be late.",
        o: ["かもしれない", "に違いない", "はずがない", "つもりだ"], a: 0,
        e: "〜かもしれない = uncertain possibility (\"maybe\")." },
      { t: "nuance", q: "〜かもしれない vs 〜にちがいない : différence de certitude ?",
        o: ["かもしれない = faible certitude ; にちがいない = forte certitude", "identical", "かもしれない = forte certitude", "にちがいない = doute"], a: 0,
        e: "かもしれない (~30-50%) ≪ にちがいない (~90%)." },
    ],
  },

  {
    id: "g041", g: "〜にちがいない", m: "without a doubt, it's", f: "V-plain／A／N + にちがいない",
    c: "modality", lv: 2, rel: ["g040"],
    note: "Strong conviction based on clues. \"It can only be...\".",
    ex: [
      { jp: "電気が消えている。留守にちがいない。", fr: "The light's out. He must be away." },
      { jp: "この絵は高いにちがいない。", fr: "This painting is certainly expensive." },
    ],
    qs: [
      { t: "fill", q: "あんなに練習したのだから、勝つ＿＿＿。", fr: "With all this training, he's bound to win.",
        o: ["にちがいない", "かもしれない", "つもりだ", "ことになる"], a: 0,
        e: "〜にちがいない = strong conviction based on indices." },
      { t: "meaning", q: "「彼は知っているにちがいない」— sens ?",
        o: ["he surely knows (strong conviction)", "he might know", "he should know by logic", "he intends to find out"], a: 0,
        e: "〜にちがいない = \"it can only be true\"." },
    ],
  },

  {
    id: "g042", g: "〜べきだ", m: "should, must (moral obligation)", f: "V-dict + べきだ（する→すべき／するべき）",
    c: "modality", lv: 2, rel: ["g043"],
    note: "Moral duty/strong advice: \"this is the right thing to do\". Not for official regulations.",
    ex: [
      { jp: "約束は守るべきだ。", fr: "We have to keep our promises." },
      { jp: "もっと早く来るべきだった。", fr: "I should have come sooner." },
    ],
    qs: [
      { t: "fill", q: "困っている人は助ける＿＿＿。", fr: "We should be helping people in difficulty.",
        o: ["べきだ", "かもしれない", "つもりだ", "ようだ"], a: 0,
        e: "〜べきだ = moral duty / strong advice." },
      { t: "nuance", q: "〜べきだ vs 〜なければならない : nuance ?",
        o: ["べきだ = jugement moral ; なければならない = nécessité/règle concrète", "identical", "べきだ = règle officielle", "なければならない = conseil moral"], a: 0,
        e: "べきだ = moral duty; なければならない = factual obligation." },
    ],
  },

  {
    id: "g043", g: "〜わけだ／わけではない", m: "it's logical that / it's not that", f: "V-plain／A／N＋な + わけだ ／ 〜わけではない",
    c: "modality", lv: 2, rel: [],
    note: "わけだ = logical conclusion (\"that's why\"); わけではない = partial negation (\"it's not that\").",
    ex: [
      { jp: "十年も住んでいたのか。日本語が上手なわけだ。", fr: "You lived there for ten years? No wonder you speak so well." },
      { jp: "嫌いなわけではないが、あまり食べない。", fr: "It's not that I don't like it, but I don't eat much of it." },
    ],
    qs: [
      { t: "fill", q: "エアコンが壊れている。暑い＿＿＿だ。", fr: "The air conditioning is broken. That's why it's so hot.",
        o: ["わけ", "はず", "つもり", "らしい"], a: 0,
        e: "〜わけだ = logical conclusion (\"necessarily / that's why\")." },
      { t: "nuance", q: "〜わけではない signifie :",
        o: ["it is not (entirely) the case that... (partial negation)", "it's totally impossible", "it makes sense", "I intend to"], a: 0,
        e: "わけではない = nuanced attenuation/negation." },
    ],
  },

  /* ===================== EXPRESSIONS & EMPHASE — g044 à g075 ===================== */

  {
    id: "g044", g: "〜てしまう／ちゃう", m: "finish by (regret); completely (completion)", f: "V-て + しまう （〜ちゃう familier）",
    c: "express", lv: 1, rel: [],
    note: "(1) Regret/involuntary (\"I ended up...\"); (2) complete completion. Contracted form: てしまう→ちゃう, でしまう→じゃう.",
    ex: [
      { jp: "大事な書類をなくしてしまった。", fr: "I have (unfortunately) lost an important document." },
      { jp: "宿題はもうやってしまった。", fr: "I've already finished all my homework." },
    ],
    qs: [
      { t: "fill", q: "ケーキを全部食べ＿＿＿。", fr: "I ended up eating the whole cake.",
        o: ["てしまった", "ておいた", "てみた", "ている"], a: 0,
        e: "〜てしまう = regret/completion complete (食べてしまった)." },
      { t: "meaning", q: "「電車が行ってしまった」— sens de てしまう ?",
        o: ["the train has left (sorry, too late)", "the train is about to leave", "the train leaves every time", "the train is ready to go"], a: 0,
        e: "〜てしまう here expresses regret for an irreversible fait accompli." },
    ],
  },

  {
    id: "g045", g: "〜ておく", m: "make in advance; leave as is", f: "V-て + おく （〜とく familier）",
    c: "express", lv: 1, rel: [],
    note: "(1) Preparation for later; (2) to leave something in a state. Colloquial form: ておく→とく.",
    ex: [
      { jp: "旅行の前に切符を買っておく。", fr: "I buy tickets in advance of the trip." },
      { jp: "そのままにしておいてください。", fr: "Please leave it as it is." },
    ],
    qs: [
      { t: "fill", q: "客が来る前に、部屋を掃除し＿＿＿。", fr: "I clean the room before guests arrive.",
        o: ["ておく", "てしまう", "てみる", "ている"], a: 0,
        e: "〜ておく = prepare in advance (掃除しておく)." },
      { t: "meaning", q: "「窓を開けておく」— sens ?",
        o: ["leave the window open (voluntarily maintained state)", "open window by mistake", "try to open the window", "be opening"], a: 0,
        e: "〜ておく = to leave in a state (voluntarily)." },
    ],
  },

  {
    id: "g046", g: "〜てみる", m: "try to do (to see)", f: "V-て + みる",
    c: "express", lv: 1, rel: [],
    note: "Do something on a trial basis, to see what happens.",
    ex: [
      { jp: "新しい店に行ってみた。", fr: "I tried to go to the new restaurant." },
      { jp: "この服を着てみてもいいですか。", fr: "May I try on this garment?" },
    ],
    qs: [
      { t: "fill", q: "おいしそうだから、食べ＿＿＿。", fr: "It looks good, so I'll try it and see.",
        o: ["てみる", "ておく", "てしまう", "てある"], a: 0,
        e: "〜てみる = try to do to see (食べてみる)." },
      { t: "meaning", q: "「考えてみます」— sens ?",
        o: ["I'll try to think about it (to see)", "I've already thought about it", "I'm still thinking", "I need to think"], a: 0,
        e: "〜てみる = try / try." },
    ],
  },

  {
    id: "g047", g: "〜ていく", m: "continue to (towards the future); go and do", f: "V-て + いく",
    c: "express", lv: 1, rel: ["g048"],
    note: "(1) gradual, future-oriented change; (2) moving away in space; (3) doing then leaving.",
    ex: [
      { jp: "これからも日本語を勉強していく。", fr: "I will continue to study Japanese from now on." },
      { jp: "鳥が飛んでいった。", fr: "The bird flew away." },
    ],
    qs: [
      { t: "fill", q: "これから寒くなっ＿＿＿でしょう。", fr: "It's likely to get colder from now on.",
        o: ["ていく", "てくる", "ておく", "てみる"], a: 0,
        e: "〜ていく = gradual evolution into the future (なっていく)." },
      { t: "nuance", q: "〜ていく vs 〜てくる (changement) : nuance ?",
        o: ["ていく = évolution vers le futur (à partir de maintenant) ; てくる = évolution depuis le passé jusqu'à maintenant", "identical", "ていく = vers le passé", "てくる = vers le futur"], a: 0,
        e: "ていく: now → future; てくる: past → now." },
    ],
  },

  {
    id: "g048", g: "〜てくる", m: "start to (from the past); come back; go do and come back", f: "V-て + くる",
    c: "express", lv: 1, rel: ["g047"],
    note: "(1) gradual change from past to present; (2) getting closer; (3) going to X and back.",
    ex: [
      { jp: "だんだん暖かくなってきた。", fr: "It started to get hotter and hotter." },
      { jp: "ちょっと買い物に行ってくる。", fr: "I'm going to run an errand (and I'll be back)." },
    ],
    qs: [
      { t: "fill", q: "雨が降っ＿＿＿。傘を持って行こう。", fr: "It's started to rain. Let's take an umbrella.",
        o: ["てきた", "ていった", "ておいた", "てみた"], a: 0,
        e: "〜てくる = appearance/beginning of a phenomenon (降ってきた)." },
      { t: "meaning", q: "「日本語が分かってきた」— sens ?",
        o: ["I've started to understand Japanese (progress so far)", "I'll understand in the future", "I need to understand", "I forgot the Japanese"], a: 0,
        e: "〜てくる = gradual change leading up to the present." },
    ],
  },

  {
    id: "g049", g: "〜てある", m: "condition resulting from intentional action", f: "V-transitif-て + ある",
    c: "express", lv: 1, rel: [],
    note: "Describes the state left by a voluntary action taken by someone (often for a purpose). The object takes が.",
    ex: [
      { jp: "壁に絵がかけてある。", fr: "A picture hangs on the wall (someone has hung it)." },
      { jp: "もう予約してあります。", fr: "It's already booked (I made sure to reserve)." },
    ],
    qs: [
      { t: "fill", q: "テーブルに食事が用意し＿＿＿。", fr: "The meal is prepared on the table (by someone, intentionally).",
        o: ["てある", "ておく", "ている", "てしまう"], a: 0,
        e: "〜てある = state resulting from intentional action (用意してある)." },
      { t: "nuance", q: "「窓が開けてある」vs「窓が開いている」— différence ?",
        o: ["開けてある = quelqu'un l'a ouverte volontairement (état résultant) ; 開いている = simple état (sans agent implicite)", "identical", "開けてある = état naturel", "開いている = action volontaire"], a: 0,
        e: "てある implies an intention/agent; 〜ている (intransitive) describes the raw state." },
    ],
  },

  {
    id: "g050", g: "〜てほしい", m: "want someone to do", f: "V-て + ほしい",
    c: "express", lv: 1, rel: [],
    note: "Expresses a wish for someone else to do something. Negative form: V-ないでほしい.",
    ex: [
      { jp: "もっと早く来てほしい。", fr: "I'd like you to come earlier." },
      { jp: "嘘をつかないでほしい。", fr: "I wish you wouldn't lie." },
    ],
    qs: [
      { t: "fill", q: "手伝っ＿＿＿んだけど、いい？", fr: "I'd like you to help me, is that possible?",
        o: ["てほしい", "てみたい", "ておきたい", "てしまいたい"], a: 0,
        e: "〜てほしい = wanting the other to do (手伝ってほしい)." },
      { t: "nuance", q: "〜てほしい vs 〜たい : différence ?",
        o: ["てほしい = vouloir que QUELQU'UN D'AUTRE fasse ; たい = vouloir faire SOI-MÊME", "identical", "てほしい = soi-même", "たい = autrui"], a: 0,
        e: "てほしい → action of others; たい → action of the speaker." },
    ],
  },

  {
    id: "g051", g: "〜させる（使役）", m: "causative: make do / let do", f: "V-causatif （Gr1 〜あせる ／ Gr2 〜させる ／ する→させる）",
    c: "express", lv: 1, rel: ["g052"],
    note: "Make do (constraint) or let do (permission). The forced agent takes に (sometimes を for intransitive verbs).",
    ex: [
      { jp: "先生は学生に本を読ませた。", fr: "The teacher had the students read a book." },
      { jp: "子供を公園で遊ばせる。", fr: "I let the child play in the park." },
    ],
    qs: [
      { t: "fill", q: "母は弟＿＿野菜を食べさせた。", fr: "My mother made my little brother eat vegetables.",
        o: ["に", "が", "は", "で"], a: 0,
        e: "In the causative of a transitive verb, the forced agent takes に (弟に食べさせた)." },
      { t: "meaning", q: "「子供を遊ばせる」— sens ?",
        o: ["letting the child play", "playing with children", "the child plays alone", "the child wants to play"], a: 0,
        e: "〜させる = causative (make/let make)." },
    ],
  },

  {
    id: "g052", g: "〜させてください", m: "allow me to, let me do", f: "V-causatif stem + てください",
    c: "express", lv: 1, rel: ["g051"],
    note: "Polite request for permission to do an action yourself (causative + てください).",
    ex: [
      { jp: "ちょっと休ませてください。", fr: "Let me rest a while." },
      { jp: "私に説明させてください。", fr: "Allow me to explain." },
    ],
    qs: [
      { t: "fill", q: "その仕事は私に＿＿＿ください。", fr: "Let me do the work.",
        o: ["やらせて", "やられて", "やって", "やらされて"], a: 0,
        e: "〜させてください = request for permission to do-it-yourself (やらせてください)." },
      { t: "meaning", q: "「考えさせてください」— sens ?",
        o: ["allow me to reflect", "make me think forcibly", "think for me", "I'll make you think"], a: 0,
        e: "〜させてください = \"let me (do it)\"." },
    ],
  },

  {
    id: "g053", g: "〜られる（受身・可能）", m: "passive: to be done; potential: to be able to do", f: "Gr1 〜あれる ／ Gr2 〜られる ／ する→される／できる",
    c: "express", lv: 1, rel: [],
    note: "Same form for passive and potential (Gr2). Passive: subject undergoes the action (agent in に). Potential: capacity.",
    ex: [
      { jp: "先生に名前を呼ばれた。", fr: "I was called by name by the teacher (passive)." },
      { jp: "刺身が食べられますか。", fr: "Can you eat sashimi? (potential)" },
    ],
    qs: [
      { t: "fill", q: "弟にケーキを食べ＿＿＿。", fr: "My little brother ate my cake (adversity passive).",
        o: ["られた", "させた", "ておいた", "てみた"], a: 0,
        e: "〜られる (passive): to undergo someone's action (食べられた)." },
      { t: "nuance", q: "「食べられる」peut signifier :",
        o: ["either \"to be able to eat\" (potential) or \"to be eaten\" (passive) depending on the context", "only the potential", "liabilities only", "neither"], a: 0,
        e: "For Gr2 verbs, passive and potential have the same られる form." },
    ],
  },

  {
    id: "g054", g: "〜ようにする", m: "make sure of, strive for", f: "V-dict／V-ない + ようにする",
    c: "express", lv: 1, rel: ["g055"],
    note: "Conscious, regular effort to adopt a habit or achieve a state. V-ない + ようにする = strive not to.",
    ex: [
      { jp: "毎日運動するようにしている。", fr: "I try to exercise every day." },
      { jp: "甘いものを食べないようにする。", fr: "I try not to eat sweets." },
    ],
    qs: [
      { t: "fill", q: "健康のため、早く寝る＿＿＿している。", fr: "For my health, I try to go to bed early.",
        o: ["ように", "ことに", "ために", "つもりに"], a: 0,
        e: "〜ようにする = strive to (make a habit)." },
      { t: "nuance", q: "〜ようにする vs 〜ことにする : nuance ?",
        o: ["ようにする = effort progressif/habitude ; ことにする = décision ponctuelle ferme", "identical", "ことにする = effort graduel", "ようにする = décision unique"], a: 0,
        e: "ようにする: continuous effort; ことにする: clear-cut decision." },
    ],
  },

  {
    id: "g055", g: "〜ようになる", m: "come to, become capable of (change)", f: "V-dict／V-potentiel／V-ない + ようになる",
    c: "express", lv: 1, rel: ["g054"],
    note: "Progressive change of state or capacity: \"eventually (able to) do\". Often with potential.",
    ex: [
      { jp: "日本語が話せるようになった。", fr: "I became able to speak Japanese." },
      { jp: "野菜を食べるようになった。", fr: "I started eating vegetables." },
    ],
    qs: [
      { t: "fill", q: "練習して、泳げる＿＿＿なった。", fr: "Through training, I became able to swim.",
        o: ["ように", "ことに", "ために", "つもりに"], a: 0,
        e: "〜ようになる = progressive capacity change (泳げるようになった)." },
      { t: "nuance", q: "〜ようになる vs 〜ようにする : différence ?",
        o: ["ようになる = changement subi/résultat (« devenir ») ; ようにする = effort volontaire (« s'efforcer »)", "identical", "ようになる = volontaire", "ようにする = subi"], a: 0,
        e: "なる = change of state; する = voluntary action." },
    ],
  },

  {
    id: "g056", g: "〜ことにする", m: "decide to", f: "V-dict／V-ない + ことにする",
    c: "express", lv: 1, rel: ["g057"],
    note: "Personal decision made by the speaker. V-ない + ことにする = decide not to.",
    ex: [
      { jp: "明日から早く起きることにする。", fr: "I've decided to get up early tomorrow." },
      { jp: "今年は旅行に行かないことにした。", fr: "I've decided not to travel this year." },
    ],
    qs: [
      { t: "fill", q: "体のために、お酒をやめる＿＿＿した。", fr: "For my health, I've decided to give up alcohol.",
        o: ["ことに", "ように", "ために", "つもりに"], a: 0,
        e: "〜ことにする = personal decision (やめることにした)." },
      { t: "nuance", q: "〜ことにする vs 〜ことになる : différence ?",
        o: ["ことにする = je décide moi-même ; ことになる = c'est décidé par les circonstances/autrui", "identical", "ことになる = décision personnelle", "ことにする = décision externe"], a: 0,
        e: "する = own decision; なる = external decision/result." },
    ],
  },

  {
    id: "g057", g: "〜ことになる", m: "it was decided that this would result in", f: "V-dict／V-ない + ことになる",
    c: "express", lv: 1, rel: ["g056"],
    note: "Decision made by others/circumstances, or logical consequence. Often to announce an official change.",
    ex: [
      { jp: "来月、大阪へ転勤することになった。", fr: "It has been decided that I will be transferred to Osaka next month." },
      { jp: "会議は中止ということになった。", fr: "It was decided that the meeting would be cancelled." },
    ],
    qs: [
      { t: "fill", q: "会社の都合で、転勤する＿＿＿なった。", fr: "For company reasons, it was decided that I would be transferred.",
        o: ["ことに", "ように", "ために", "はずに"], a: 0,
        e: "〜ことになる = external/official decision (転勤することになった)." },
      { t: "meaning", q: "「結婚することになりました」— nuance par rapport à «結婚することにしました» ?",
        o: ["なる présente le mariage comme un aboutissement/une annonce (moins centré sur la décision personnelle)", "なる = décision strictement personnelle", "なる et する sont identiques ici", "なる = refus de se marier"], a: 0,
        e: "ことになる presents the thing as decided/completed (more modest tone than with する)." },
    ],
  },

  {
    id: "g058", g: "〜ことにしている", m: "to have made a rule of, to be in the habit of", f: "V-dict／V-ない + ことにしている",
    c: "express", lv: 2, rel: ["g056"],
    note: "A habit that is voluntarily imposed and maintained over time.",
    ex: [
      { jp: "毎朝、ジョギングすることにしている。", fr: "I've made it a rule to jog every morning." },
      { jp: "夜は食べすぎないことにしている。", fr: "I try not to eat too much in the evening." },
    ],
    qs: [
      { t: "fill", q: "健康のため、毎日歩く＿＿＿いる。", fr: "For my health, I make a habit of walking every day.",
        o: ["ことにして", "ようにして", "ことになって", "つもりにして"], a: 0,
        e: "〜ことにしている = self-imposed habit (歩くことにしている)." },
      { t: "nuance", q: "〜ことにしている vs 〜ことになっている : différence ?",
        o: ["している = règle personnelle ; なっている = règle externe/convenue", "identical", "している = règle externe", "なっている = habitude personnelle"], a: 0,
        e: "している = I impose it on myself; なっている = it's the established rule." },
    ],
  },

  {
    id: "g059", g: "〜ことがある", m: "sometimes, having already done", f: "V-dict／V-た + ことがある",
    c: "express", lv: 1, rel: [],
    note: "V-dict + ことがある = it sometimes happens that. V-た + ことがある = have already done (past experience).",
    ex: [
      { jp: "たまに学校に遅れることがある。", fr: "Sometimes I'm late for school." },
      { jp: "日本へ行ったことがある。", fr: "I've already been to Japan." },
    ],
    qs: [
      { t: "fill", q: "富士山に登った＿＿＿がありますか。", fr: "Have you ever climbed Mount Fuji?",
        o: ["こと", "もの", "つもり", "はず"], a: 0,
        e: "V-た + ことがある = past experience (登ったことがある)." },
      { t: "nuance", q: "「行くことがある」vs「行ったことがある」— différence ?",
        o: ["行くことがある = il arrive que j'y aille (parfois) ; 行ったことがある = j'y suis déjà allé (expérience)", "identical", "行くことがある = expérience passée", "行ったことがある = habitude future"], a: 0,
        e: "V-dict = occasional frequency; V-た = past experience." },
    ],
  },

  {
    id: "g060", g: "〜やすい", m: "easy to, tend to", f: "V-ます stem + やすい",
    c: "express", lv: 1, rel: ["g061"],
    note: "Ease of doing the action, or propensity. Conjugates as an adjective in い.",
    ex: [
      { jp: "このペンは書きやすい。", fr: "This pen writes easily (is pleasant to write with)." },
      { jp: "彼の説明は分かりやすい。", fr: "His explanations are easy to understand." },
    ],
    qs: [
      { t: "fill", q: "この道は広くて運転し＿＿＿。", fr: "This road is wide and easy to drive.",
        o: ["やすい", "にくい", "がたい", "づらい"], a: 0,
        e: "〜やすい = easy to (運転しやすい)." },
      { t: "meaning", q: "「風邪をひきやすい」— sens ?",
        o: ["tend to catch cold easily", "difficult to catch cold", "never catch a cold", "catching a cold"], a: 0,
        e: "〜やすい = propensity/facility." },
    ],
  },

  {
    id: "g061", g: "〜にくい", m: "difficult to, inconvenient to", f: "V-ます stem + にくい",
    c: "express", lv: 1, rel: ["g060"],
    note: "Difficulty doing the action. Opposite of やすい. Conjugates as an adjective in い.",
    ex: [
      { jp: "この字は小さくて読みにくい。", fr: "These characters are small and difficult to read." },
      { jp: "この肉は硬くて食べにくい。", fr: "This meat is tough and difficult to eat." },
    ],
    qs: [
      { t: "fill", q: "この薬は苦くて飲み＿＿＿。", fr: "This medicine is bitter and difficult to swallow.",
        o: ["にくい", "やすい", "たい", "そう"], a: 0,
        e: "〜にくい = difficult to (飲みにくい)." },
      { t: "nuance", q: "〜にくい et 〜やすい sont :",
        o: ["antonyms (difficult to / easy to)", "synonyms", "both \"easy to", "both \"difficult to"], a: 0,
        e: "やすい = easy; にくい = difficult." },
    ],
  },

  {
    id: "g062", g: "〜すぎる", m: "too much", f: "V-ます stem／A-stem + すぎる",
    c: "express", lv: 1, rel: [],
    note: "Indicates excess. For adjectives: remove い (高い→高すぎる) and な (静か→静かすぎる).",
    ex: [
      { jp: "昨日は食べすぎた。", fr: "I ate too much yesterday." },
      { jp: "この問題は難しすぎる。", fr: "This problem is too difficult." },
    ],
    qs: [
      { t: "fill", q: "お酒を飲み＿＿＿て、頭が痛い。", fr: "I've had too much to drink and my head hurts.",
        o: ["すぎ", "やすく", "にくく", "たく"], a: 0,
        e: "〜すぎる = excess (飲みすぎて)." },
      { t: "usage", q: "Forme correcte de « trop cher » avec すぎる ?",
        o: ["高すぎる", "高いすぎる", "高くすぎる", "高さすぎる"], a: 0,
        e: "Adjective in い: remove い → 高 + すぎる." },
    ],
  },

  {
    id: "g063", g: "〜方（かた）", m: "way of, way of", f: "V-ます stem + 方",
    c: "express", lv: 1, rel: [],
    note: "Expresses the way/method of doing an action. The object of the verb takes の (使い方).",
    ex: [
      { jp: "この漢字の読み方が分からない。", fr: "I don't know how to read this kanji." },
      { jp: "料理の作り方を教えてください。", fr: "Teach me how to prepare this dish." },
    ],
    qs: [
      { t: "fill", q: "この機械の使い＿＿＿を説明します。", fr: "I'll explain how to use this machine.",
        o: ["方", "やすい", "すぎ", "ながら"], a: 0,
        e: "V-ます stem + 方 = the way of (使い方)." },
      { t: "meaning", q: "「考え方が違う」— sens de 方 ?",
        o: ["the way of thinking is different", "the direction is different", "the thinker is different", "about thinking"], a: 0,
        e: "〜方 = way/method (here, the way of thinking)." },
    ],
  },

  {
    id: "g064", g: "〜まま", m: "as is, remaining in the same state", f: "V-た／V-ない／A／N＋の + まま",
    c: "express", lv: 2, rel: [],
    note: "A state remains unchanged while another action takes place: \"leaving as is\".",
    ex: [
      { jp: "靴を履いたまま、入らないでください。", fr: "Don't enter with your shoes on." },
      { jp: "テレビをつけたまま寝てしまった。", fr: "I fell asleep with the TV on." },
    ],
    qs: [
      { t: "fill", q: "窓を開けた＿＿＿出かけてしまった。", fr: "I went out, leaving the window open.",
        o: ["まま", "ながら", "うちに", "ばかり"], a: 0,
        e: "〜まま = leaving in state (開けたまま)." },
      { t: "meaning", q: "「立ったまま食べる」— sens ?",
        o: ["eating standing up", "eating after getting up", "eating to get up", "eat every time standing up"], a: 0,
        e: "〜まま = state maintained during action." },
    ],
  },

  {
    id: "g065", g: "〜ほど", m: "to the point of, so that; about", f: "V-plain／A／N + ほど",
    c: "express", lv: 2, rel: [],
    note: "(1) Degree (\"to the point of\"); (2) approximate quantity (\"about\").",
    ex: [
      { jp: "立てないほど疲れた。", fr: "I was so tired I couldn't get out of bed." },
      { jp: "一時間ほど待った。", fr: "I waited about an hour." },
    ],
    qs: [
      { t: "fill", q: "涙が出る＿＿＿感動した。", fr: "I was moved to tears.",
        o: ["ほど", "まま", "ながら", "ばかり"], a: 0,
        e: "〜ほど = degree (\"at the point of\")." },
      { t: "meaning", q: "「三日ほどかかる」— sens de ほど ?",
        o: ["takes about three days (approximate)", "it takes exactly three days", "it takes more than three days", "takes less than a day"], a: 0,
        e: "〜ほど (job 2) = approximation (\"about\")." },
    ],
  },

  {
    id: "g066", g: "〜だけ", m: "only, only", f: "N／V-dict + だけ",
    c: "express", lv: 1, rel: ["g067"],
    note: "Limited to one thing: \"only X (and nothing else)\".",
    ex: [
      { jp: "見るだけで、買わない。", fr: "I only look, I don't buy." },
      { jp: "一人だけ来なかった。", fr: "Only one person didn't show up." },
    ],
    qs: [
      { t: "fill", q: "水＿＿＿あれば、しばらく生きられる。", fr: "With only water, you can survive for a while.",
        o: ["だけ", "しか", "ほど", "ばかり"], a: 0,
        e: "〜だけ = only (limitation, affirmative sentence)." },
      { t: "nuance", q: "〜だけ vs 〜しか : différence ?",
        o: ["だけ se construit avec l'affirmatif (ton neutre) ; しか exige le négatif (insiste sur le « rien de plus »)", "identical", "だけ exige le négatif", "しか se construit avec l'affirmatif"], a: 0,
        e: "だけ + affirmative; しか + negative." },
    ],
  },

  {
    id: "g067", g: "〜しか〜ない", m: "only, only (emphasis)", f: "N／V-dict + しか + （…）ない",
    c: "express", lv: 1, rel: ["g066"],
    note: "Always followed by a negation. Insists on the limited/insufficient character: \"il n'y a que...\".",
    ex: [
      { jp: "百円しか持っていない。", fr: "I only have a hundred yen." },
      { jp: "野菜しか食べない。", fr: "I only eat vegetables." },
    ],
    qs: [
      { t: "fill", q: "あと五分＿＿＿時間がない。", fr: "Only five minutes left.",
        o: ["しか", "だけ", "ほど", "ばかり"], a: 0,
        e: "〜しか + negation = ne... que (emphasizes lack). (しか...ない)" },
      { t: "meaning", q: "「一回しか会ったことがない」— sens ?",
        o: ["I only met him once", "I met him at least once", "I meet him often", "I've never met him"], a: 0,
        e: "〜しか〜ない = limitation to a single occurrence." },
    ],
  },

  {
    id: "g068", g: "〜ほうがいい", m: "it would be better to", f: "V-た／V-ない + ほうがいい",
    c: "express", lv: 1, rel: [],
    note: "Tip. In the affirmative we often use V-た (食べたほうがいい); in the negative V-ない (食べないほうがいい).",
    ex: [
      { jp: "早く寝たほうがいい。", fr: "You'd better go to bed early." },
      { jp: "無理しないほうがいい。", fr: "It's best not to force yourself." },
    ],
    qs: [
      { t: "fill", q: "熱があるなら、病院に行っ＿＿＿いい。", fr: "If you have a fever, you'd better go to hospital.",
        o: ["たほうが", "るほうが", "ないほうが", "てほうが"], a: 0,
        e: "Affirmative tip: V-た + ほうがいい (行ったほうがいい)." },
      { t: "meaning", q: "「タバコは吸わないほうがいい」— sens ?",
        o: ["it's better not to smoke", "you have to smoke", "we sometimes smoke", "we quit smoking"], a: 0,
        e: "V-ない + ほうがいい = negative advice." },
    ],
  },

  {
    id: "g069", g: "〜てもいい", m: "have the right to, it's allowed", f: "V-て／A-くて／N＋でも + いい",
    c: "express", lv: 1, rel: ["g070"],
    note: "Permission: \"you may / it is permitted to\". In question: ask permission.",
    ex: [
      { jp: "ここに座ってもいいですか。", fr: "May I sit here?" },
      { jp: "もう帰ってもいいよ。", fr: "You can go home now." },
    ],
    qs: [
      { t: "fill", q: "写真を撮っ＿＿＿ですか。", fr: "Can I take photos?",
        o: ["てもいい", "てはいけない", "なければならない", "ないといけない"], a: 0,
        e: "〜てもいい = permission (撮ってもいい)." },
      { t: "nuance", q: "〜てもいい vs 〜てはいけない : relation ?",
        o: ["てもいい = permission ; てはいけない = interdiction (opposés)", "synonyms", "both = permission", "both = prohibition"], a: 0,
        e: "てもいい (permitted) ↔ てはいけない (prohibited)." },
    ],
  },

  {
    id: "g070", g: "〜なければならない／なくてはならない", m: "must (obligation)", f: "V-ない radical + なければならない／なくてはならない",
    c: "express", lv: 1, rel: ["g071"],
    note: "Obligation/necessity. Colloquial forms: なきゃ(いけない), なくちゃ(いけない). We can also have 〜ないといけない.",
    ex: [
      { jp: "明日までに宿題を出さなければならない。", fr: "The homework is due tomorrow." },
      { jp: "薬を飲まなくてはならない。", fr: "I have to take my medicine." },
    ],
    qs: [
      { t: "fill", q: "ビザを取るために、書類を出さ＿＿＿。", fr: "To obtain a visa, I have to submit documents.",
        o: ["なければならない", "てもいい", "ないほうがいい", "なくてもいい"], a: 0,
        e: "〜なければならない = obligation (出さなければならない)." },
      { t: "usage", q: "Forme familière courante de なければならない ?",
        o: ["〜なきゃ（いけない）", "〜てもいい", "〜たほうがいい", "〜てある"], a: 0,
        e: "なければ → なきゃ (oral); なくては → なくちゃ." },
    ],
  },

  {
    id: "g071", g: "〜なくてもいい", m: "not to have to, not obliged to", f: "V-ない radical + くてもいい",
    c: "express", lv: 1, rel: ["g070"],
    note: "Absence of obligation: \"it is not necessary to\". Negation of なければならない.",
    ex: [
      { jp: "明日は来なくてもいいです。", fr: "You don't have to come tomorrow." },
      { jp: "全部食べなくてもいい。", fr: "You don't have to eat everything." },
    ],
    qs: [
      { t: "fill", q: "急がない仕事だから、今日やら＿＿＿。", fr: "It's a non-urgent job, you don't need to do it today.",
        o: ["なくてもいい", "なければならない", "てはいけない", "たほうがいい"], a: 0,
        e: "〜なくてもいい = no obligation (やらなくてもいい)." },
      { t: "nuance", q: "〜なくてもいい vs 〜なければならない : relation ?",
        o: ["なくてもいい = pas obligé ; なければならない = obligatoire (opposés)", "synonyms", "both = mandatory", "both = optional"], a: 0,
        e: "なくてもいい (optional) ↔ なければならない (mandatory)." },
    ],
  },

  {
    id: "g072", g: "〜という", m: "which is called ; the fact that ; says that", f: "N／Phrase + という",
    c: "express", lv: 1, rel: ["g073"],
    note: "(1) Presents a noun (\"named...\"); (2) reports/quotes; (3) nominalizes an idea (ということ).",
    ex: [
      { jp: "「すし」という日本料理が好きだ。", fr: "I like a Japanese dish called \"sushi\"." },
      { jp: "彼が来ないという連絡があった。", fr: "I was told he wouldn't be coming." },
    ],
    qs: [
      { t: "fill", q: "田中さん＿＿＿人から電話があった。", fr: "A person by the name of Tanaka called.",
        o: ["という", "といった", "について", "によると"], a: 0,
        e: "N + という + N = \"(one) X named...\" (田中さんという人)." },
      { t: "meaning", q: "「最近、忙しいということだ」— sens de ということだ ?",
        o: ["they say / they say he's been busy lately", "he wants to be busy", "it must be occupied", "it is rarely occupied"], a: 0,
        e: "〜ということだ can report information (\"it seems that\")." },
    ],
  },

  {
    id: "g073", g: "〜といった", m: "such as (examples)", f: "N + や + N + といった + N",
    c: "express", lv: 2, rel: ["g072"],
    note: "Introduces representative, non-exhaustive examples: \"such as X and Y\".",
    ex: [
      { jp: "サッカーやテニスといったスポーツが人気だ。", fr: "Sports such as soccer and tennis are popular." },
      { jp: "りんごやみかんといった果物を買った。", fr: "I bought fruit like apples and tangerines." },
    ],
    qs: [
      { t: "fill", q: "京都や奈良＿＿＿古い町を訪ねた。", fr: "I visited old cities such as Kyoto and Nara.",
        o: ["といった", "という", "について", "によると"], a: 0,
        e: "〜といった = introduces representative examples (といった町)." },
      { t: "nuance", q: "〜といった vs 〜という : différence ?",
        o: ["といった = donne des exemples (« tels que ») ; という = nomme/cite (« appelé »)", "identical", "という = exemples", "といった = nom propre"], a: 0,
        e: "といった = examples; という = appellation/citation." },
    ],
  },

  {
    id: "g074", g: "〜てもらう", m: "to be done by, to benefit from the action of", f: "V-て + もらう（〜ていただく poli）",
    c: "express", lv: 1, rel: ["g075"],
    note: "The speaker (or his group) benefits from an action performed by another. The agent who renders the service takes に.",
    ex: [
      { jp: "友達に宿題を手伝ってもらった。", fr: "I had a friend help me with my homework." },
      { jp: "先生に間違いを直していただいた。", fr: "I had my mistakes corrected by the (polite) teacher." },
    ],
    qs: [
      { t: "fill", q: "兄＿＿＿駅まで送ってもらった。", fr: "My older brother accompanied me to the station.",
        o: ["に", "が", "は", "を"], a: 0,
        e: "With 〜てもらう, the benefactor takes に (兄に送ってもらった)." },
      { t: "nuance", q: "〜てもらう vs 〜てくれる : différence de perspective ?",
        o: ["てもらう = perspective du bénéficiaire (« je me fais faire ») ; てくれる = perspective du donneur (« il fait pour moi »)", "identical", "てもらう = donneur", "てくれる = bénéficiaire forcé"], a: 0,
        e: "もらう focuses on the receiver; くれる on the giver." },
    ],
  },

  {
    id: "g075", g: "〜てあげる", m: "do for someone (favor granted)", f: "V-て + あげる（〜てやる familier ／ 〜てさしあげる poli）",
    c: "express", lv: 1, rel: ["g074"],
    note: "The speaker (or his group) does something for someone else. Use with tact (may sound condescending to a superior).",
    ex: [
      { jp: "友達に本を貸してあげた。", fr: "I lent a book to a friend (as a favor)." },
      { jp: "妹に料理を作ってあげた。", fr: "I prepared a dish for my little sister." },
    ],
    qs: [
      { t: "fill", q: "道が分からない人に、地図を見せ＿＿＿。", fr: "To one person who couldn't find his way, I showed a map (to help him).",
        o: ["てあげた", "てもらった", "てくれた", "ておいた"], a: 0,
        e: "〜てあげる = do someone a favor (見せてあげた)." },
      { t: "nuance", q: "〜てあげる vs 〜てくれる : différence ?",
        o: ["てあげる = je fais POUR autrui ; てくれる = autrui fait POUR moi", "identical", "てあげる = autrui pour moi", "てくれる = moi pour autrui"], a: 0,
        e: "あげる: favor given by the speaker; くれる: favor received by the speaker." },
    ],
  },

  /* ===================== AJOUTS — g076 à g132 ===================== */

  {
    id: "g076", g: "〜てくれる", m: "someone does (for me/my group)", f: "V-て + くれる（〜てくださる poli）",
    c: "express", lv: 1, rel: ["g074", "g075"],
    note: "Someone else does something for me (beneficiary perspective = me).",
    ex: [
      { jp: "友達が宿題を手伝ってくれた。", fr: "A friend helped me with my homework." },
      { jp: "先生が説明してくださった。", fr: "The teacher was kind enough to explain (polite)." },
    ],
    qs: [
      { t: "fill", q: "母がセーターを編んで＿＿＿。", fr: "My mother knitted me a sweater.",
        o: ["くれた", "あげた", "もらった", "おいた"], a: 0,
        e: "〜てくれる = others do for me (編んでくれた)." },
      { t: "nuance", q: "〜てくれる vs 〜てあげる : différence ?",
        o: ["てくれる = autrui fait POUR MOI ; てあげる = je fais POUR autrui", "identical", "てくれる = je fais pour autrui", "てあげる = autrui fait pour moi"], a: 0,
        e: "くれる: favor received; あげる: favor given by me." },
    ],
  },

  {
    id: "g077", g: "〜ていただく／〜てくださる", m: "receive/give a favor (polite register)", f: "V-て + いただく（humble）／くださる（honorifique）",
    c: "express", lv: 2, rel: ["g074", "g076"],
    note: "Polite versions: いただく (I humbly receive) ↔ くださる (a superior made for me).",
    ex: [
      { jp: "先生に推薦状を書いていただいた。", fr: "The professor was kind enough to write a letter of recommendation." },
      { jp: "部長が教えてくださった。", fr: "The department manager was kind enough to explain." },
    ],
    qs: [
      { t: "fill", q: "社長に空港まで送って＿＿＿。", fr: "The president was kind enough to drive me to the airport.",
        o: ["くださった", "あげた", "やった", "おいた"], a: 0,
        e: "〜てくださる = honorific form of くれる (a superior made for me)." },
      { t: "nuance", q: "Forme humble de 〜てもらう ?",
        o: ["〜ていただく", "〜てくださる", "〜てあげる", "〜てやる"], a: 0,
        e: "もらう → いただく (humble); くれる → くださる (honorific)." },
    ],
  },

  {
    id: "g078", g: "〜てやる", m: "do for (inferior, animal, plant)", f: "V-て + やる",
    c: "express", lv: 2, rel: ["g075"],
    note: "Variant of てあげる towards an inferior, a child, an animal or a plant. Can also mark a determination.",
    ex: [
      { jp: "犬を散歩に連れて行ってやる。", fr: "I take the dog for a walk (for him)." },
      { jp: "花に水をやる。", fr: "I water the flowers." },
    ],
    qs: [
      { t: "fill", q: "弟の宿題を見て＿＿＿。", fr: "I check my little brother's homework (for him).",
        o: ["やった", "くれた", "もらった", "いただいた"], a: 0,
        e: "〜てやる = favor towards an inferior (見てやった)." },
      { t: "nuance", q: "Quand emploie-t-on 〜てやる plutôt que 〜てあげる ?",
        o: ["towards an inferior, a child, an animal or a plant", "towards a superior", "towards oneself", "never oral"], a: 0,
        e: "てやる is addressed to an inferior (or non-human) recipient." },
    ],
  },

  {
    id: "g079", g: "〜（よ）う（意志形）", m: "volitive form - allez / faisons (plain)", f: "Gr1 : お段＋う（書こう）／ Gr2 : 〜よう（食べよう）／ する→しよう・来る→こよう",
    c: "modality", lv: 1, rel: ["g080"],
    note: "Colloquial equivalent of ましょう: expresses its will or proposes to do.",
    ex: [
      { jp: "そろそろ行こう。", fr: "Let's go now." },
      { jp: "今日は早く寝よう。", fr: "Let's go to bed early today." },
    ],
    qs: [
      { t: "fill", q: "疲れたから、少し休＿＿＿。", fr: "We're tired, let's get some rest.",
        o: ["もう", "む", "みる", "んだ"], a: 0,
        e: "休む (Gr1) → 休もう (familiar volitive)." },
      { t: "usage", q: "Forme volitive de 食べる ?",
        o: ["食べよう", "食べろう", "食べるう", "食べこう"], a: 0,
        e: "Gr2: radical + よう (食べよう)." },
    ],
  },

  {
    id: "g080", g: "〜（よ）うと思う", m: "intend to, think of doing", f: "V-volitif + と思う",
    c: "modality", lv: 1, rel: ["g079", "g039"],
    note: "Expresses an intention decided in the moment (思う) or reflected (思っている).",
    ex: [
      { jp: "来年、留学しようと思う。", fr: "I'm thinking of studying abroad next year." },
      { jp: "週末は家でゆっくりしようと思っている。", fr: "I plan to rest at home this weekend." },
    ],
    qs: [
      { t: "fill", q: "明日から運動を始めよう＿＿＿思います。", fr: "I'm thinking of starting sport tomorrow.",
        o: ["と", "に", "で", "が"], a: 0,
        e: "V-volitive + と思う = intention (始めようと思う)." },
      { t: "nuance", q: "〜ようと思う vs 〜つもりだ : nuance ?",
        o: ["ようと思う = intention décidée à l'instant (plus souple) ; つもりだ = projet ferme et arrêté", "identical", "つもりだ est plus spontané", "ようと思う exprime une obligation"], a: 0,
        e: "つもり = more established decision than ようと思う." },
    ],
  },

  {
    id: "g081", g: "〜予定だ", m: "to be programmed for", f: "V-dict／N＋の + 予定だ",
    c: "modality", lv: 2, rel: ["g039"],
    note: "Indicates a program/planning objective already set (more neutral than つもり, which is a personal intention).",
    ex: [
      { jp: "来週、出張する予定です。", fr: "I have to go away next week (it's planned)." },
      { jp: "会議は三時の予定だ。", fr: "The meeting is scheduled for three hours." },
    ],
    qs: [
      { t: "fill", q: "飛行機は十時に着く＿＿＿です。", fr: "The plane is due to arrive at ten.",
        o: ["予定", "つもり", "はず", "らしい"], a: 0,
        e: "〜予定だ = fixed schedule (着く予定)." },
      { t: "nuance", q: "〜予定だ vs 〜つもりだ : nuance ?",
        o: ["予定 = programme objectif fixé ; つもり = intention personnelle", "identical", "予定 = intention personnelle", "つもり = horaire officiel"], a: 0,
        e: "予定 = agenda/planning; つもり = own will." },
    ],
  },

  {
    id: "g082", g: "〜つもりはない", m: "have no intention of", f: "V-dict + つもりはない",
    c: "modality", lv: 2, rel: ["g039"],
    note: "Firmly denies intent. More emphatic than つもりがない.",
    ex: [
      { jp: "彼を許すつもりはない。", fr: "I have no intention of forgiving him." },
      { jp: "今やめるつもりはありません。", fr: "I have no intention of stopping now." },
    ],
    qs: [
      { t: "fill", q: "うそをつく＿＿＿はなかった。", fr: "I had no intention of lying.",
        o: ["つもり", "よう", "はず", "ところ"], a: 0,
        e: "〜つもりはない = firm absence of intent (つくつもりはなかった)." },
      { t: "meaning", q: "「謝るつもりはない」— sens ?",
        o: ["I have no intention of apologizing", "I intend to apologize", "I must apologize", "I apologized"], a: 0,
        e: "〜つもりはない = clear refusal to do the action." },
    ],
  },

  {
    id: "g083", g: "可能形（〜られる／〜える）", m: "potential form - to be able, to be able to", f: "Gr1 : え段＋る（読める）／ Gr2 : 〜られる（食べられる）／ する→できる・来る→来られる",
    c: "express", lv: 1, rel: ["g039"],
    note: "Expresses ability or possibility. The object often changes from を to が.",
    ex: [
      { jp: "私は漢字が読めます。", fr: "I can read kanji." },
      { jp: "朝早く起きられない。", fr: "I can't get up early in the morning." },
    ],
    qs: [
      { t: "fill", q: "彼は日本語が話＿＿＿。", fr: "He knows how to speak Japanese.",
        o: ["せる", "す", "した", "そう"], a: 0,
        e: "話す (Gr1) → 話せる (potential)." },
      { t: "usage", q: "Forme potentielle de 食べる ?",
        o: ["食べられる", "食べれる (familier)", "食べさせる", "食べる"], a: 0,
        e: "Gr2: radical + られる (食べられる). 食べれる exists orally (ら抜き)." },
    ],
  },

  {
    id: "g084", g: "〜はじめる", m: "begin to, start to", f: "V-ます stem + はじめる",
    c: "express", lv: 1, rel: ["g086", "g087"],
    note: "Compound verb indicating the start of an action.",
    ex: [
      { jp: "去年から日本語を習いはじめた。", fr: "I started learning Japanese last year." },
      { jp: "雨が降りはじめた。", fr: "It started to rain." },
    ],
    qs: [
      { t: "fill", q: "赤ちゃんが歩き＿＿＿。", fr: "The baby started walking.",
        o: ["はじめた", "おわった", "つづけた", "だした"], a: 0,
        e: "〜はじめる = start of an action (歩きはじめた)." },
      { t: "nuance", q: "〜はじめる vs 〜だす : nuance ?",
        o: ["はじめる = début neutre ; だす = début soudain/imprévu", "identical", "だす = fin", "はじめる = soudain"], a: 0,
        e: "だす emphasizes suddenness; はじめる is neutral." },
    ],
  },

  {
    id: "g085", g: "〜つづける", m: "continue to", f: "V-ます stem + つづける",
    c: "express", lv: 1, rel: ["g084"],
    note: "A compound verb indicating the continuation of an action.",
    ex: [
      { jp: "三時間も歩きつづけた。", fr: "I kept walking for three hours." },
      { jp: "彼は努力しつづけている。", fr: "He continues to make efforts." },
    ],
    qs: [
      { t: "fill", q: "雨が一日中降り＿＿＿。", fr: "It continued to rain all day.",
        o: ["つづけた", "はじめた", "おわった", "やすい"], a: 0,
        e: "〜つづける = continuation (降りつづけた)." },
      { t: "meaning", q: "「待ちつづける」— sens ?",
        o: ["keep waiting", "start waiting", "finish waiting", "don't wait"], a: 0,
        e: "〜つづける = continue the action." },
    ],
  },

  {
    id: "g086", g: "〜おわる", m: "to finish, to complete", f: "V-ます stem + おわる",
    c: "express", lv: 1, rel: ["g084"],
    note: "A compound verb indicating the completion of an action.",
    ex: [
      { jp: "この本を読みおわった。", fr: "I've finished reading this book." },
      { jp: "食べおわったら、皿を洗ってね。", fr: "When you've finished eating, do the dishes." },
    ],
    qs: [
      { t: "fill", q: "レポートを書き＿＿＿。", fr: "I've finished writing the report.",
        o: ["おわった", "はじめた", "つづけた", "だした"], a: 0,
        e: "〜おわる = completion (書きおわった)." },
      { t: "nuance", q: "〜おわる et 〜はじめる sont :",
        o: ["antonyms (finish / start)", "synonyms", "both = continue", "unrelated"], a: 0,
        e: "はじめる (start) ↔ おわる (end)." },
    ],
  },

  {
    id: "g087", g: "〜だす", m: "suddenly burst into", f: "V-ます stem + だす",
    c: "express", lv: 2, rel: ["g084"],
    note: "The sudden, often involuntary start of an action.",
    ex: [
      { jp: "急に泣きだした。", fr: "He suddenly started crying." },
      { jp: "みんなが笑いだした。", fr: "Everyone burst out laughing." },
    ],
    qs: [
      { t: "fill", q: "空が暗くなって、突然雨が降り＿＿＿。", fr: "The sky darkened and it suddenly began to rain.",
        o: ["だした", "おわった", "つづけた", "やすい"], a: 0,
        e: "〜だす = sudden/unexpected start (降りだした)." },
      { t: "meaning", q: "「走りだす」— sens ?",
        o: ["start running (suddenly)", "finish running", "keep running", "want to run"], a: 0,
        e: "〜だす = sudden release." },
    ],
  },

  {
    id: "g088", g: "〜たがる", m: "(a third party) wants to make", f: "V-ます stem + たがる",
    c: "modality", lv: 2, rel: ["g089"],
    note: "Expresses the desire of a 3rd person, observed from the outside (≠ たい, reserved for oneself).",
    ex: [
      { jp: "子供は外で遊びたがる。", fr: "The kids want to play outside." },
      { jp: "彼は何でも知りたがる。", fr: "He wants to know everything." },
    ],
    qs: [
      { t: "fill", q: "弟は新しいゲームを買い＿＿＿いる。", fr: "My little brother wants to buy the new game.",
        o: ["たがって", "たくて", "たければ", "たがり"], a: 0,
        e: "〜たがる (3rd person) → 〜たがっている (買いたがっている)." },
      { t: "nuance", q: "〜たい vs 〜たがる : qui ?",
        o: ["たい = mon propre désir ; たがる = le désir observé d'autrui", "identical", "たい = autrui", "たがる = soi-même"], a: 0,
        e: "たい (1st person); たがる (3rd person, observed)." },
    ],
  },

  {
    id: "g089", g: "〜がる", m: "show signs of (feeling for others)", f: "A-stem（emotion）+ がる",
    c: "modality", lv: 2, rel: ["g088"],
    note: "Transforms a feeling adjective into a verb describing the visible behavior of others (寂しい→寂しがる).",
    ex: [
      { jp: "子供が暗い部屋を怖がる。", fr: "The child is afraid of the dark room (shows it)." },
      { jp: "彼女は新しい服を欲しがっている。", fr: "She wants new clothes (you can see it)." },
    ],
    qs: [
      { t: "fill", q: "犬が寒＿＿＿いる。", fr: "The dog looks cold.",
        o: ["がって", "くて", "そうで", "がる"], a: 0,
        e: "寒い → 寒がる (show you're cold) → 寒がっている." },
      { t: "nuance", q: "Pourquoi dit-on 「彼は寂しがっている」et non「彼は寂しい」?",
        o: ["les sentiments d'autrui se décrivent de l'extérieur avec がる", "寂しい n'existe pas", "がる est plus poli", "both are impossible"], a: 0,
        e: "Feeling adjectives + がる are used to talk about a third person's emotions." },
    ],
  },

  {
    id: "g090", g: "〜ずに", m: "without doing (written register)", f: "V-ない radical + ずに（する→せずに）",
    c: "express", lv: 2, rel: ["g091"],
    note: "Neat equivalent of ないで. Please note: する becomes せずに.",
    ex: [
      { jp: "朝ご飯を食べずに出かけた。", fr: "I went out without breakfast." },
      { jp: "何も言わずに帰った。", fr: "He returned without saying a word." },
    ],
    qs: [
      { t: "fill", q: "辞書を使わ＿＿＿読んでみた。", fr: "I tried to read without using a dictionary.",
        o: ["ずに", "ないに", "なくに", "ずで"], a: 0,
        e: "〜ずに = without doing (使わずに), written register." },
      { t: "usage", q: "Forme en ずに de する ?",
        o: ["せずに", "しずに", "さずに", "すずに"], a: 0,
        e: "する is irregular → せずに." },
    ],
  },

  {
    id: "g091", g: "〜ないで", m: "without doing / instead of", f: "V-ない radical + ないで",
    c: "express", lv: 1, rel: ["g090"],
    note: "Indicates that one action takes place without another, or in place of another.",
    ex: [
      { jp: "電気を消さないで寝た。", fr: "I went to bed without turning out the light." },
      { jp: "バスに乗らないで歩いた。", fr: "I walked instead of taking the bus." },
    ],
    qs: [
      { t: "fill", q: "傘を持た＿＿＿出かけて、雨にぬれた。", fr: "I went out without an umbrella and got wet.",
        o: ["ないで", "なくて", "ずつ", "ながら"], a: 0,
        e: "〜ないで = without doing (持たないで)." },
      { t: "nuance", q: "〜ないで vs 〜なくて : différence d'emploi ?",
        o: ["ないで = manière (« sans faire ») ; なくて = cause/état (« comme ne… pas »)", "identical", "なくて = manière", "ないで = cause"], a: 0,
        e: "ないで connects two actions; なくて expresses a cause or state." },
    ],
  },

  {
    id: "g092", g: "〜なくて", m: "don't and / because don't (cause)", f: "V-ない radical + くて ／ A-くない→くなくて",
    c: "contrast", lv: 2, rel: ["g091"],
    note: "て form of negation, especially for a cause or state (often with emotions: 心配だ, 困る).",
    ex: [
      { jp: "バスが来なくて、遅刻した。", fr: "The bus didn't arrive, so I was late." },
      { jp: "意味が分からなくて困った。", fr: "Not understanding the meaning, I was baffled." },
    ],
    qs: [
      { t: "fill", q: "子供が帰ってこ＿＿＿、心配した。", fr: "When the child didn't come home, I got worried.",
        o: ["なくて", "ないで", "ずに", "ないと"], a: 0,
        e: "〜なくて = negation expressing cause (こなくて → 心配した)." },
      { t: "nuance", q: "Pour exprimer « comme je ne comprenais pas, j'étais embêté », on emploie :",
        o: ["分からなくて (cause)", "分からないで", "分からずつ", "分からなければ"], a: 0,
        e: "Cause/negative condition → なくて." },
    ],
  },

  {
    id: "g093", g: "〜な（禁止）", m: "DON'T! (strong prohibition)", f: "V-dict + な",
    c: "express", lv: 2, rel: ["g094"],
    note: "Abrupt, colloquial prohibition (often masculine, signs, orders). Not to be confused with な from なさい.",
    ex: [
      { jp: "ここに入るな。", fr: "Don't come in here." },
      { jp: "うそをつくな。", fr: "Don't lie." },
    ],
    qs: [
      { t: "fill", q: "危ないから、触る＿＿＿！", fr: "It's dangerous, don't touch!",
        o: ["な", "ね", "よ", "の"], a: 0,
        e: "V-dict + な = strong ban (触るな)." },
      { t: "meaning", q: "「動くな」— sens ?",
        o: ["don't move! (ban)", "get moving!", "are you moving?", "do you want to move?"], a: 0,
        e: "〜な = direct ban." },
    ],
  },

  {
    id: "g094", g: "命令形（〜ろ／〜え）", m: "imperative form (order)", f: "Gr1 : え段（書け）／ Gr2 : 〜ろ（食べろ）／ する→しろ・来る→こい",
    c: "express", lv: 2, rel: ["g093"],
    note: "Direct, abrupt command. Rare in polite everyday life, but common in instructions, sports and emergency situations.",
    ex: [
      { jp: "早く起きろ！", fr: "Get up quickly!" },
      { jp: "がんばれ！", fr: "Hang in there / Courage!" },
    ],
    qs: [
      { t: "fill", q: "応援するとき、「がんば＿＿＿！」と言う。", fr: "To encourage, we say \"がんばれ!\".",
        o: ["れ", "る", "ろう", "って"], a: 0,
        e: "がんばる (Gr1) → がんばれ (imperative)." },
      { t: "usage", q: "Impératif de 食べる ?",
        o: ["食べろ", "食べれ", "食べよ (écrit)", "食べな"], a: 0,
        e: "Gr2: radical + ろ (食べろ). 食べよ exists in writing." },
    ],
  },

  {
    id: "g095", g: "〜とおり(に)／〜どおり", m: "exactly as, in accordance with", f: "V-dict／V-た／N＋の + とおり(に) ／ N + どおり",
    c: "express", lv: 2, rel: [],
    note: "Do something identical to a template/instruction. After a directly attached name: 〜どおり (予定どおり).",
    ex: [
      { jp: "私が言うとおりに書いてください。", fr: "Write exactly as I say." },
      { jp: "計画どおりに進んだ。", fr: "This went according to plan." },
    ],
    qs: [
      { t: "fill", q: "説明書の＿＿＿に組み立てた。", fr: "I assembled it according to the instructions.",
        o: ["とおり", "ながら", "ばかり", "ところ"], a: 0,
        e: "N＋の + とおりに = in accordance with (説明書のとおりに)." },
      { t: "usage", q: "Forme correcte après 予定 (nom) ?",
        o: ["予定どおり", "予定のとおり も可", "予定とおり", "the first two"], a: 0,
        e: "After a pasted name: どおり (予定どおり); with の: 予定のとおり." },
    ],
  },

  {
    id: "g096", g: "〜ように（目的）", m: "so that, so that (goal)", f: "V-dict／V-ない／V-potentiel + ように",
    c: "express", lv: 1, rel: ["g054", "g032"],
    note: "Goal achieved without direct voluntary control (potential, negation, state). Often: 〜ように + 〜する／なる.",
    ex: [
      { jp: "よく見えるように、前に座った。", fr: "To get a good look, I sat in front of it." },
      { jp: "忘れないようにメモする。", fr: "I take notes so I don't forget." },
    ],
    qs: [
      { t: "fill", q: "後ろの人にも聞こえる＿＿＿、大きい声で話した。", fr: "So that those at the back could hear, I spoke loudly.",
        o: ["ように", "ために", "ところに", "とおりに"], a: 0,
        e: "Potential verb (聞こえる) → ように (unintended purpose)." },
      { t: "nuance", q: "Quand utilise-t-on ように plutôt que ために pour le but ?",
        o: ["avec un potentiel/non-volontaire ou une négation (見えるように、忘れないように)", "always", "never", "only with a name"], a: 0,
        e: "ように = non-voluntary purpose; ために = voluntary purpose." },
    ],
  },

  {
    id: "g097", g: "〜ような／〜みたいな", m: "like, like (comparison/example)", f: "Nom + の + ような ／ V-plain + ような ／ 〜みたいな（familier）",
    c: "express", lv: 1, rel: [],
    note: "Used to compare (\"like\") or give an example (\"like...\"). Before a noun: ような; before a verb/adjective: adverb ように.",
    ex: [
      { jp: "天使のような笑顔。", fr: "An angel's smile (like an angel)." },
      { jp: "りんごみたいな赤いほっぺ。", fr: "Apple-red cheeks." },
    ],
    qs: [
      { t: "fill", q: "彼は子供＿＿＿ような性格だ。", fr: "He's childlike (like a child).",
        o: ["の", "が", "に", "を"], a: 0,
        e: "Name + の + ような (子供のような)." },
      { t: "nuance", q: "〜ような vs 〜みたいな : nuance ?",
        o: ["même sens (« comme ») ; みたいな est plus familier", "opposite", "みたいな est plus formel", "ような est familier"], a: 0,
        e: "ような (neutral/written); みたいな (oral)." },
    ],
  },

  {
    id: "g098", g: "〜ばよかった", m: "I should have / if only (regret)", f: "V-ば + よかった ／ V- なければ + よかった",
    c: "condition", lv: 2, rel: ["g026"],
    note: "Expresses regret at not having done (or having done) something.",
    ex: [
      { jp: "もっと勉強すればよかった。", fr: "I should have studied more." },
      { jp: "あんなことを言わなければよかった。", fr: "I shouldn't have said such a thing." },
    ],
    qs: [
      { t: "fill", q: "傘を持って来れ＿＿＿よかった。", fr: "I should have brought an umbrella.",
        o: ["ば", "たら", "ても", "ので"], a: 0,
        e: "V-ば + よかった = regret (来ればよかった)." },
      { t: "meaning", q: "「買わなければよかった」— sens ?",
        o: ["I shouldn't have bought it (regret)", "I have to buy it", "I'm going to buy it", "I always buy it"], a: 0,
        e: "V-なければよかった = regret to have done." },
    ],
  },

  {
    id: "g099", g: "〜たらどう(ですか)", m: "and if you...? why don't you...? (suggestion)", f: "V-た + らどう（ですか）",
    c: "condition", lv: 2, rel: ["g027"],
    note: "Polite suggestion/advice addressed to others. May appear insistent depending on tone.",
    ex: [
      { jp: "疲れているなら、少し休んだらどう？", fr: "If you're tired, why not get some rest?" },
      { jp: "先生に聞いてみたらどうですか。", fr: "Why not ask the teacher?" },
    ],
    qs: [
      { t: "fill", q: "分からないなら、辞書で調べ＿＿＿どう？", fr: "If you don't know, why don't you look it up in the dictionary?",
        o: ["たら", "ても", "ながら", "ので"], a: 0,
        e: "V-た + らどう = suggestion (調べたらどう)." },
      { t: "meaning", q: "「医者に行ったらどうですか」— sens ?",
        o: ["How about a visit to the doctor?", "have you been to the doctor?", "don't go to the doctor", "I go to the doctor"], a: 0,
        e: "〜たらどうですか = proposal/advice." },
    ],
  },

  {
    id: "g100", g: "〜場合(は)", m: "in case of", f: "V-plain／A／N＋の + 場合(は)",
    c: "condition", lv: 2, rel: [],
    note: "Presents a hypothetical situation and its consequences. Common in instructions and regulations.",
    ex: [
      { jp: "火事の場合は、エレベーターを使わないでください。", fr: "In the event of fire, do not use the elevator." },
      { jp: "遅れる場合は連絡してください。", fr: "If you're running late, just let us know." },
    ],
    qs: [
      { t: "fill", q: "雨の＿＿＿は、試合は中止です。", fr: "In the event of rain, the match is cancelled.",
        o: ["場合", "ながら", "ばかり", "ところ"], a: 0,
        e: "N＋の + 場合は = in case of (雨の場合は)." },
      { t: "meaning", q: "「分からない場合は質問してください」— sens ?",
        o: ["if you don't understand, ask a question", "because you don't understand", "even though you don't understand", "as soon as you understand"], a: 0,
        e: "〜場合は = hypothetical situation (\"if...\")." },
    ],
  },

  {
    id: "g101", g: "〜ところだった", m: "it was a close call, I almost", f: "V-dict + ところだった",
    c: "time", lv: 2, rel: ["g023"],
    note: "Expresses that an event (often negative) has almost occurred but was narrowly avoided.",
    ex: [
      { jp: "もう少しで転ぶところだった。", fr: "I almost fell." },
      { jp: "危なく事故に遭うところだった。", fr: "I almost had an accident." },
    ],
    qs: [
      { t: "fill", q: "目覚ましが鳴らなくて、遅刻する＿＿＿だった。", fr: "The alarm didn't go off, I was almost late.",
        o: ["ところ", "ばかり", "ながら", "とおり"], a: 0,
        e: "V-dict + ところだった = to have failed (遅刻するところだった)." },
      { t: "meaning", q: "「忘れるところだった」— sens ?",
        o: ["I almost forgot (but then I remembered)", "I forgot", "I'm going to forget", "I always forget"], a: 0,
        e: "〜ところだった = the event was narrowly avoided." },
    ],
  },

  {
    id: "g102", g: "〜と言う／〜と言った", m: "say that (quote)", f: "Phrase + と + 言う／思う／聞く…",
    c: "express", lv: 1, rel: ["g072"],
    note: "と marks the content of a quoted word or thought. Direct quotation (「...」と) or indirect (plain + と).",
    ex: [
      { jp: "彼は「行きません」と言った。", fr: "He said, \"I'm not going." },
      { jp: "母は早く帰ると言った。", fr: "My mother said she'd be home early." },
    ],
    qs: [
      { t: "fill", q: "彼は行く＿＿言いました。", fr: "He said he was going.",
        o: ["と", "を", "に", "で"], a: 0,
        e: "Quoted content + と + 言う (行くと言いました)." },
      { t: "meaning", q: "「来ないと言っていた」— sens ?",
        o: ["he said he wouldn't come", "he said to come", "he came", "Come on!"], a: 0,
        e: "〜と言う = report a word." },
    ],
  },

  {
    id: "g103", g: "〜かどうか", m: "if... or not (indirect questioning)", f: "V-plain／A／N + かどうか",
    c: "express", lv: 1, rel: ["g104"],
    note: "Introduces an indirect yes/no question within a sentence.",
    ex: [
      { jp: "彼が来るかどうか分からない。", fr: "I don't know if he'll come or not." },
      { jp: "正しいかどうか確認してください。", fr: "Check if it's correct or not." },
    ],
    qs: [
      { t: "fill", q: "この答えが合っている＿＿＿、先生に聞こう。", fr: "Let's ask the teacher if this answer is right or wrong.",
        o: ["かどうか", "ように", "ながら", "ばかり"], a: 0,
        e: "〜かどうか = indirect yes/no questioning (合っているかどうか)." },
      { t: "meaning", q: "「行けるかどうか分からない」— sens ?",
        o: ["I don't know if I'll be able to go or not", "I know I'm going", "I never go", "I'm sure I'll be there"], a: 0,
        e: "〜かどうか = \"whether yes or no\"." },
    ],
  },

  {
    id: "g104", g: "疑問詞＋か（embedded）", m: "indirect questioning (who/what/where... )", f: "疑問詞 + V-plain + か",
    c: "express", lv: 1, rel: ["g103"],
    note: "With an interrogative word, introduces an indirect question embedded in the sentence (何を...か, どこに...か).",
    ex: [
      { jp: "何を食べるか決めた？", fr: "Have you decided what to eat?" },
      { jp: "どこで会うか教えてください。", fr: "Tell me where to meet." },
    ],
    qs: [
      { t: "fill", q: "彼がいつ来る＿＿＿分からない。", fr: "I don't know when he'll come.",
        o: ["か", "を", "に", "が"], a: 0,
        e: "疑問詞 + ... + か = indirect questioning (いつ来るか)." },
      { t: "nuance", q: "〜かどうか vs 疑問詞＋か : différence ?",
        o: ["かどうか = question oui/non ; 疑問詞＋か = question ouverte (qui/quoi/où…)", "identical", "かどうか = question ouverte", "疑問詞か = oui/non"], a: 0,
        e: "かどうか (yes/no) ≠ 何/どこ...か (open question)." },
    ],
  },

  {
    id: "g105", g: "〜そうに／そうな", m: "d'un air..., who looks... (appearance)", f: "（様態）そう + に（adverbe）／な（+ Nom）",
    c: "modality", lv: 2, rel: ["g034"],
    note: "Adverbial/adnominal form of the そう of appearance: 楽しそうに笑う, おいしそうなケーキ.",
    ex: [
      { jp: "子供が楽しそうに遊んでいる。", fr: "The children play happily." },
      { jp: "おいしそうなケーキだ。", fr: "It's a delicious-looking cake." },
    ],
    qs: [
      { t: "fill", q: "彼は眠＿＿＿な顔をしている。", fr: "He looks sleepy.",
        o: ["そう", "ろう", "よう", "らし"], a: 0,
        e: "眠い → 眠そう(な) (looks sleepy)." },
      { t: "usage", q: "Pour « marcher d'un air heureux » (幸せ) :",
        o: ["幸せそうに歩く", "幸せそうな歩く", "幸せに歩くそう", "幸せ歩きそう"], a: 0,
        e: "そうに modifies a verb (adverbial); そうな modifies a noun." },
    ],
  },

  {
    id: "g106", g: "〜だけで", m: "simply by...", f: "V-dict／N + だけで",
    c: "express", lv: 2, rel: ["g066"],
    note: "\"Du seul fait de\": a minimal condition is sufficient to produce an effect.",
    ex: [
      { jp: "考えるだけで怖くなる。", fr: "Just thinking about it scares me." },
      { jp: "見ているだけで楽しい。", fr: "Just looking at it is fun." },
    ],
    qs: [
      { t: "fill", q: "君がいる＿＿＿安心する。", fr: "Just your presence reassures me.",
        o: ["だけで", "までで", "ながら", "ところで"], a: 0,
        e: "〜だけで = due to (いるだけで) alone." },
      { t: "meaning", q: "「名前を聞いただけで分かった」— sens ?",
        o: ["just by hearing the name, I understood", "I didn't hear the name", "after listening for a long time", "because of the name only not"], a: 0,
        e: "〜だけで = it only took (a little) to..." },
    ],
  },

  {
    id: "g107", g: "〜さ（名詞化）", m: "-té, -eur (nominalizes an adjective)", f: "A-い→さ ／ A-な→さ（高さ、便利さ）",
    c: "express", lv: 2, rel: ["g108"],
    note: "Transforms an adjective into a measurable/objective noun: 高い→高さ (the height).",
    ex: [
      { jp: "山の高さを測る。", fr: "Measure the height of the mountain." },
      { jp: "この道具の便利さに驚いた。", fr: "I was surprised by the convenience of this tool." },
    ],
    qs: [
      { t: "fill", q: "この箱の重＿＿＿はどのくらいですか。", fr: "How heavy is this box?",
        o: ["さ", "み", "く", "そう"], a: 0,
        e: "重い → 重さ (the weight), objective nominalization." },
      { t: "usage", q: "Nominalisation de 長い (long) ?",
        o: ["長さ (la longueur)", "長み", "長く", "長そう"], a: 0,
        e: "A-い → さ (長さ)." },
    ],
  },

  {
    id: "g108", g: "〜み（名詞化）", m: "-heart (more subjective, perceived quality)", f: "A-stem + み（楽しみ、痛み、深み）",
    c: "express", lv: 3, rel: ["g107"],
    note: "Nominalises an adjective by focusing on the feeling/state, on a limited number of adjectives.",
    ex: [
      { jp: "傷の痛みが消えない。", fr: "The pain of the wound doesn't go away." },
      { jp: "旅行を楽しみにしている。", fr: "I'm looking forward to the trip." },
    ],
    qs: [
      { t: "fill", q: "この絵には深＿＿＿がある。", fr: "This painting has (felt) depth.",
        o: ["み", "さ", "く", "そう"], a: 0,
        e: "深い → 深み (felt, subjective depth)." },
      { t: "nuance", q: "〜さ vs 〜み : nuance ?",
        o: ["さ = mesure objective ; み = qualité ressentie/subjective (et moins productif)", "identical", "み = objectif", "さ = subjectif"], a: 0,
        e: "高さ (measure) ≠ 高み (heights, figurative sense felt)." },
    ],
  },

  {
    id: "g109", g: "〜っぽい", m: "who does..., who tends to", f: "N／A-stem／V-ます stem + っぽい",
    c: "express", lv: 2, rel: ["g110"],
    note: "Familiar: \"-esque / that looks like / that tends to\" (子供っぽい, 忘れっぽい).",
    ex: [
      { jp: "彼は子供っぽい。", fr: "He's childish." },
      { jp: "最近、忘れっぽくなった。", fr: "These days, I've become a bit of an airhead." },
    ],
    qs: [
      { t: "fill", q: "この水は白＿＿＿。", fr: "This water is whitish.",
        o: ["っぽい", "がち", "ぎみ", "らしい"], a: 0,
        e: "〜っぽい = \"-aster / which makes...\" (白っぽい)." },
      { t: "meaning", q: "「怒りっぽい」— sens ?",
        o: ["easily angered", "who never gets angry", "who's angry now", "that makes people angry"], a: 0,
        e: "V-stem + っぽい = tendency (怒りっぽい = short-tempered)." },
    ],
  },

  {
    id: "g110", g: "〜がち", m: "tend to (often negative)", f: "V-ます stem／N + がち",
    c: "express", lv: 2, rel: ["g109", "g111"],
    note: "Frequent trend, usually with negative connotations (病気がち, 忘れがち).",
    ex: [
      { jp: "冬は風邪をひきがちだ。", fr: "In winter, we tend to catch a cold." },
      { jp: "彼は遅れがちだ。", fr: "He tends to be late." },
    ],
    qs: [
      { t: "fill", q: "疲れていると、ミスをし＿＿＿になる。", fr: "When you're tired, you tend to make mistakes.",
        o: ["がち", "っぽい", "ぎみ", "むき"], a: 0,
        e: "〜がち = frequent trend (often negative) : しがち." },
      { t: "meaning", q: "「曇りがちの天気」— sens ?",
        o: ["rather cloudy weather (trend)", "always clear weather", "once cloudy", "sunny weather"], a: 0,
        e: "〜がち = which tends to be (曇りがち)." },
    ],
  },

  {
    id: "g111", g: "〜ぎみ", m: "a slight tendency to", f: "V-ます stem／N + ぎみ",
    c: "express", lv: 2, rel: ["g110"],
    note: "Indicates a slight manifestation/leaning (風邪ぎみ, 疲れぎみ).",
    ex: [
      { jp: "ちょっと風邪ぎみです。", fr: "I've got a bit of a cold." },
      { jp: "最近、太りぎみだ。", fr: "These days, I have a tendency to put on weight." },
    ],
    qs: [
      { t: "fill", q: "睡眠不足で、疲れ＿＿＿だ。", fr: "Due to lack of sleep, I'm a bit tired.",
        o: ["ぎみ", "がち", "っぽい", "むけ"], a: 0,
        e: "〜ぎみ = slight tendency/symptom (疲れぎみ)." },
      { t: "nuance", q: "〜ぎみ vs 〜がち : nuance ?",
        o: ["ぎみ = léger symptôme ponctuel ; がち = tendance habituelle fréquente", "identical", "ぎみ = fréquent", "がち = léger"], a: 0,
        e: "ぎみ (a little, now) ≠ がち (often, usual)." },
    ],
  },

  {
    id: "g112", g: "〜中（ちゅう／じゅう）", m: "during / everywhere in / during", f: "N + 中（ちゅう＝en cours／じゅう＝durant tout, partout）",
    c: "time", lv: 2, rel: [],
    note: "ちゅう = in the process of / within the limit of (仕事中, 今日中); じゅう = throughout / everywhere in (一日中, 世界中).",
    ex: [
      { jp: "会議中は電話に出られません。", fr: "During the meeting, I can't answer the phone." },
      { jp: "一日中、雨だった。", fr: "It rained all day." },
    ],
    qs: [
      { t: "fill", q: "今、仕事＿＿＿だから、後でかけ直す。", fr: "I'm in the middle of work right now, so I'll call you back later.",
        o: ["中（ちゅう）", "中（じゅう）", "ごろ", "まで"], a: 0,
        e: "仕事中（ちゅう）= working." },
      { t: "nuance", q: "「世界中」se lit et signifie :",
        o: ["せかいじゅう = partout dans le monde", "せかいちゅう = en train de monde", "se lit ちゅう = limite", "does not exist"], a: 0,
        e: "じゅう = \"all along / everywhere in\" (世界中, 一日中)." },
    ],
  },

  {
    id: "g113", g: "〜とか", m: "like, or, things like (fuzzy enumeration)", f: "Nom／Phrase + とか",
    c: "express", lv: 2, rel: ["g073"],
    note: "Familiar: lists examples vaguely (\"like...\"), or reports uncertainly.",
    ex: [
      { jp: "週末は映画とか見に行く。", fr: "On weekends, I go to a movie or something like that." },
      { jp: "明日は雨が降るとか。", fr: "I hear it's going to rain tomorrow." },
    ],
    qs: [
      { t: "fill", q: "りんご＿＿＿バナナとか、果物を買った。", fr: "I bought fruit, like apples and bananas.",
        o: ["とか", "ばかり", "しか", "ながら"], a: 0,
        e: "〜とか〜とか = fuzzy enumeration (colloquial)." },
      { t: "meaning", q: "「忙しいとか言っていた」— sens de とか ?",
        o: ["he'd say something like \"I'm busy\" (vague report)", "he's probably busy", "it is not occupied", "be busy"], a: 0,
        e: "〜とか can introduce a vaguely reported statement." },
    ],
  },

  {
    id: "g114", g: "〜なんて／〜なんか", m: "things like... (contempt, surprise)", f: "Nom／Phrase + なんて ／ Nom + なんか",
    c: "express", lv: 2, rel: ["g113"],
    note: "Marks disdain, modesty or surprise (\"how can we...!\"). なんか is more oral.",
    ex: [
      { jp: "野菜なんか食べたくない。", fr: "I don't want vegetables (and all that)." },
      { jp: "彼が嘘をつくなんて信じられない。", fr: "That he should lie is incredible!" },
    ],
    qs: [
      { t: "fill", q: "宿題＿＿＿やりたくない。", fr: "Homework (and that sort of thing), I don't feel like it.",
        o: ["なんか", "ばかり", "しか", "こそ"], a: 0,
        e: "〜なんか = disdain/disinterest (宿題なんか)." },
      { t: "meaning", q: "「あきらめるなんて！」— nuance ?",
        o: ["surprise/indignation: \"give up, and then what!\"", "simple observation", "order to abandon", "permission to abandon"], a: 0,
        e: "〜なんて expresses indignant surprise here." },
    ],
  },

  {
    id: "g115", g: "〜って", m: "(colloquial) we say that / as for / named", f: "Nom／Phrase + って",
    c: "express", lv: 2, rel: ["g102", "g072"],
    note: "Very oral: equivalent to という, と言っていた, or は (theme) depending on context.",
    ex: [
      { jp: "田中さんって優しいね。", fr: "Tanaka, he's nice, isn't he?" },
      { jp: "明日は休みだって。", fr: "I hear tomorrow's a vacation." },
    ],
    qs: [
      { t: "fill", q: "彼、来月は来ない＿＿＿。", fr: "I hear he's not coming next month.",
        o: ["って", "から", "ので", "のに"], a: 0,
        e: "〜って (colloquial) = \"it seems that / he said that\" (来ないって)." },
      { t: "meaning", q: "「日本語の勉強って楽しい」— rôle de って ?",
        o: ["marque le thème (= は) à l'oral", "expresses a cause", "imposes a ban", "marks the object"], a: 0,
        e: "〜って can replace は (theme) in colloquial speech." },
    ],
  },

  {
    id: "g116", g: "〜じゃない(か)", m: "isn't it? / but it's... ! (observation)", f: "V-plain／A／N + じゃない（か）",
    c: "express", lv: 2, rel: ["g070"],
    note: "Seeks agreement or expresses a discovery/ reproach (\"but that's...!\"). To be distinguished from the negative copula じゃない.",
    ex: [
      { jp: "いい天気じゃない。散歩しよう。", fr: "It's a beautiful day, isn't it? Let's go for a walk." },
      { jp: "ほら、言ったじゃないか。", fr: "See, I told you!" },
    ],
    qs: [
      { t: "fill", q: "これ、君のかばん＿＿＿。", fr: "This is your bag, isn't it?",
        o: ["じゃない", "ではない", "ないか", "ますか"], a: 0,
        e: "〜じゃない (rising intonation) = seeking agreement (\"no?\")." },
      { t: "nuance", q: "Comment distinguer « 学生じゃない » (négation) de « 学生じゃない！» (constat) ?",
        o: ["by intonation/context: rising = observation (\"he's a student, isn't he?\")", "they are always identical", "le constat prend です", "la négation prend か"], a: 0,
        e: "Intonation and context distinguish the negative copula from the confirmation tag." },
    ],
  },

  {
    id: "g117", g: "〜まで(も)", m: "even to (surprising extension)", f: "Nom + まで",
    c: "express", lv: 2, rel: ["g082"],
    note: "Emphasizes an extreme element reached, against all odds (\"even...\").",
    ex: [
      { jp: "子供までその秘密を知っていた。", fr: "Even the children knew this secret." },
      { jp: "親友にまで裏切られた。", fr: "I was even betrayed by my best friend." },
    ],
    qs: [
      { t: "fill", q: "先生＿＿＿その問題が解けなかった。", fr: "Even the teacher couldn't solve the problem.",
        o: ["まで", "しか", "だけ", "ごろ"], a: 0,
        e: "〜まで = \"same\" (extreme extension: 先生まで)." },
      { t: "meaning", q: "「そんなことまで言われた」— sens de まで ?",
        o: ["I've even been told such things (extreme)", "I was told only this", "no one told me", "until someone tells me"], a: 0,
        e: "〜まで emphasizes an unexpected degree." },
    ],
  },

  {
    id: "g118", g: "〜くらい／〜ぐらい", m: "to the point of, roughly, as much as", f: "V-plain／A／N + くらい／ぐらい",
    c: "express", lv: 2, rel: ["g065"],
    note: "Expresses a degree (\"to the point of\"), an approximation (\"about\") or a minimum (\"at least that\").",
    ex: [
      { jp: "歩けないくらい疲れた。", fr: "I was so tired I couldn't walk." },
      { jp: "自分の部屋ぐらい掃除しなさい。", fr: "At least tidy up your own room." },
    ],
    qs: [
      { t: "fill", q: "泣きたい＿＿＿悔しかった。", fr: "I was so disappointed I wanted to cry.",
        o: ["くらい", "ところ", "ばかり", "まで"], a: 0,
        e: "〜くらい = degree (\"to the point of\"): 泣きたいくらい." },
      { t: "meaning", q: "「挨拶ぐらいしなさい」— nuance ?",
        o: ["at least say hello (the minimum)", "does not greet", "many greetings", "you said hello"], a: 0,
        e: "〜ぐらい can mark an expected minimum." },
    ],
  },

  {
    id: "g119", g: "〜ように言う", m: "tell/request to (indirect order)", f: "V-dict／V-ない + ように + 言う／頼む／伝える",
    c: "express", lv: 2, rel: ["g096"],
    note: "Reports an order, request or advice indirectly.",
    ex: [
      { jp: "先生は静かにするように言った。", fr: "The teacher said to be quiet." },
      { jp: "母に早く帰るように頼まれた。", fr: "My mother asked me to come home early." },
    ],
    qs: [
      { t: "fill", q: "医者は無理をしない＿＿＿言った。", fr: "The doctor said not to overexert yourself.",
        o: ["ように", "ことに", "ために", "そうに"], a: 0,
        e: "〜ように言う = indirect order/request (しないように言った)." },
      { t: "meaning", q: "「待つように伝えてください」— sens ?",
        o: ["tell him (from me) to wait", "wait for yourself", "ask if we're waiting", "he waited"], a: 0,
        e: "〜ように伝える = transmit a setpoint." },
    ],
  },

  {
    id: "g120", g: "〜ないうちに", m: "before (happens)", f: "V-ない + うちに ／ A-くない + うちに",
    c: "time", lv: 2, rel: ["g018"],
    note: "Do something before a change (often unfavorable) occurs.",
    ex: [
      { jp: "暗くならないうちに帰ろう。", fr: "Let's get home before it gets dark." },
      { jp: "忘れないうちにメモしておく。", fr: "I'll make a note of it before I forget." },
    ],
    qs: [
      { t: "fill", q: "雨が降ら＿＿＿うちに、洗濯物を取り込もう。", fr: "Let's get the laundry in before it rains.",
        o: ["ない", "た", "る", "て"], a: 0,
        e: "〜ないうちに = before (does): 降らないうちに." },
      { t: "nuance", q: "〜ないうちに vs 〜まえに : nuance ?",
        o: ["ないうちに = avant qu'un changement non voulu survienne (profiter du moment) ; まえに = simple antériorité", "identical", "まえに implique un danger", "ないうちに = après"], a: 0,
        e: "ないうちに insists on \"as long as it hasn't happened yet\"." },
    ],
  },

  {
    id: "g121", g: "〜もう〜ない", m: "don't... more", f: "もう + V-ない／négatif",
    c: "time", lv: 1, rel: ["g122"],
    note: "Indicates the cessation of a state/action: \"from now on, don't... anymore\".",
    ex: [
      { jp: "もう子供じゃない。", fr: "I'm no longer a child." },
      { jp: "もうお酒は飲みません。", fr: "I don't drink alcohol anymore." },
    ],
    qs: [
      { t: "fill", q: "おなかがいっぱいで、＿＿＿食べられない。", fr: "I'm full, I can't eat any more.",
        o: ["もう", "まだ", "ずっと", "また"], a: 0,
        e: "もう + negation = \"don't... anymore\" (もう食べられない)." },
      { t: "nuance", q: "「もう寝ない」vs「まだ寝ない」— différence ?",
        o: ["もう寝ない = je ne dors plus ; まだ寝ない = je ne dors pas encore", "identical", "もう = pas encore", "まだ = ne plus"], a: 0,
        e: "もう〜ない (no longer) ≠ まだ〜ない (not yet)." },
    ],
  },

  {
    id: "g122", g: "〜まだ〜ている", m: "still / always", f: "まだ + V-ている",
    c: "time", lv: 1, rel: ["g121"],
    note: "Indicates that a status/action is still in progress.",
    ex: [
      { jp: "まだ雨が降っている。", fr: "It's still raining." },
      { jp: "彼はまだ働いている。", fr: "He's always working." },
    ],
    qs: [
      { t: "fill", q: "弟は＿＿＿ゲームをしている。", fr: "My little brother is still playing.",
        o: ["まだ", "もう", "また", "ずっと"], a: 0,
        e: "まだ + ている = action that continues (まだしている)." },
      { t: "meaning", q: "「まだ起きている」— sens ?",
        o: ["I'm still awake", "I'm no longer awake", "I got up", "I'll get up"], a: 0,
        e: "まだ〜ている = state that still lasts." },
    ],
  },

  {
    id: "g123", g: "〜たところ", m: "just come from (just now)", f: "V-た + ところ（だ）",
    c: "time", lv: 2, rel: ["g101", "g124"],
    note: "The action has just been completed, objectively at the present moment.",
    ex: [
      { jp: "今、駅に着いたところだ。", fr: "I've just arrived at the station." },
      { jp: "ちょうど食べ終わったところです。", fr: "I've just finished eating." },
    ],
    qs: [
      { t: "fill", q: "今、家に帰った＿＿＿だ。", fr: "I just got home.",
        o: ["ところ", "ばかり", "とおり", "うち"], a: 0,
        e: "V-た + ところ = just now (帰ったところ)." },
      { t: "nuance", q: "〜たところ vs 〜たばかり : nuance ?",
        o: ["たところ = objectivement à l'instant même ; たばかり = subjectivement récent (peut dater de plusieurs jours)", "identical", "たばかり = à l'instant", "たところ = il y a longtemps"], a: 0,
        e: "ところ = precise moment; ばかり = feeling of \"recently\"." },
    ],
  },

  {
    id: "g124", g: "〜ているところ", m: "be in the middle of", f: "V-ている + ところ（だ）",
    c: "time", lv: 2, rel: ["g123"],
    note: "The action is underway, right now.",
    ex: [
      { jp: "今、宿題をしているところだ。", fr: "I'm just doing my homework." },
      { jp: "原因を調べているところです。", fr: "We are currently investigating the cause." },
    ],
    qs: [
      { t: "fill", q: "電話は今、話している＿＿＿です。", fr: "Right now I'm in the middle of a phone conversation.",
        o: ["ところ", "ばかり", "とおり", "まま"], a: 0,
        e: "V-ている + ところ = right in the middle of the action (話しているところ)." },
      { t: "meaning", q: "「準備しているところだ」— sens ?",
        o: ["I'm preparing (right in the middle)", "I have just prepared", "I'm going to prepare", "I almost prepared"], a: 0,
        e: "〜ているところ = action in progress." },
    ],
  },

  {
    id: "g125", g: "〜たまま", m: "remaining (as is), as is", f: "V-た + まま",
    c: "express", lv: 2, rel: ["g064"],
    note: "A state resulting from an action remains unchanged while we do something else.",
    ex: [
      { jp: "電気をつけたまま出かけた。", fr: "I went out and left the light on." },
      { jp: "靴を履いたまま上がってしまった。", fr: "I went upstairs with my shoes on." },
    ],
    qs: [
      { t: "fill", q: "窓を開け＿＿＿寝てしまった。", fr: "I fell asleep with the window open.",
        o: ["たまま", "ながら", "たところ", "ばかり"], a: 0,
        e: "V-た + まま = maintained state (開けたまま)." },
      { t: "nuance", q: "〜たまま vs 〜ながら : nuance ?",
        o: ["たまま = un état figé persiste ; ながら = deux actions simultanées actives", "identical", "たまま = simultanéité active", "ながら = état figé"], a: 0,
        e: "まま = state left as is; ながら = doing two things at once." },
    ],
  },

  {
    id: "g126", g: "〜きる／〜きれない", m: "do it all / can't finish", f: "V-ます stem + きる／きれない",
    c: "express", lv: 2, rel: [],
    note: "Indicates complete completion (使いきる) or, in negation, the impossibility of doing everything (食べきれない).",
    ex: [
      { jp: "マラソンを最後まで走りきった。", fr: "I ran the marathon to the end." },
      { jp: "量が多くて食べきれない。", fr: "There's too much, I can't finish it all." },
    ],
    qs: [
      { t: "fill", q: "この本を一日で読み＿＿＿。", fr: "I read this entire book in one day.",
        o: ["きった", "だした", "つづけた", "やすい"], a: 0,
        e: "〜きる = do completely (読みきった)." },
      { t: "meaning", q: "「数えきれない」— sens ?",
        o: ["impossible to count (too many)", "easy to count", "already counted", "count completely"], a: 0,
        e: "〜きれない = not able to complete (数えきれない)." },
    ],
  },

  {
    id: "g127", g: "〜なおす", m: "redo, start again", f: "V-ます stem + なおす",
    c: "express", lv: 2, rel: [],
    note: "Redo an action from the beginning, often to correct it.",
    ex: [
      { jp: "間違えたので、書きなおした。", fr: "Since I'd made a mistake, I rewrote it." },
      { jp: "計画を立てなおす必要がある。", fr: "The plan needs to be revised/redone." },
    ],
    qs: [
      { t: "fill", q: "答えが違ったので、考え＿＿＿。", fr: "Since the answer was wrong, I reconsidered.",
        o: ["なおした", "だした", "つづけた", "おわった"], a: 0,
        e: "〜なおす = redo (考えなおした)." },
      { t: "meaning", q: "「やり直す」— sens ?",
        o: ["start again / redo", "finish", "starting out for the first time", "give up"], a: 0,
        e: "〜なおす = start from the beginning." },
    ],
  },

  {
    id: "g128", g: "〜あう", m: "do mutually (to each other)", f: "V-ます stem + あう",
    c: "express", lv: 2, rel: [],
    note: "Reciprocal action between several people (助け合う, 話し合う).",
    ex: [
      { jp: "困ったときは助け合う。", fr: "When we're in trouble, we help each other out." },
      { jp: "問題について話し合った。", fr: "We discussed the problem together." },
    ],
    qs: [
      { t: "fill", q: "お互いを理解し＿＿＿ことが大切だ。", fr: "It's important to understand each other.",
        o: ["あう", "なおす", "きる", "だす"], a: 0,
        e: "〜あう = reciprocal action (理解しあう)." },
      { t: "meaning", q: "「愛し合う」— sens ?",
        o: ["love each other", "love once", "stop loving", "love completely"], a: 0,
        e: "〜あう = \"each other\"." },
    ],
  },

  {
    id: "g129", g: "〜ぶり", m: "for the first time since", f: "期間 + ぶり（に）／久しぶり",
    c: "time", lv: 2, rel: [],
    note: "Indicates the time elapsed since the last occurrence of an event.",
    ex: [
      { jp: "三年ぶりに故郷に帰った。", fr: "I returned home after a three-year absence." },
      { jp: "久しぶりに友達に会った。", fr: "I saw a friend again after a long time." },
    ],
    qs: [
      { t: "fill", q: "十年＿＿＿に彼に会った。", fr: "I saw him again after ten years.",
        o: ["ぶり", "おき", "ごと", "ながら"], a: 0,
        e: "期間 + ぶり = after (十年ぶり)." },
      { t: "meaning", q: "「一週間ぶりの晴れ」— sens ?",
        o: ["the first fine weather in a week", "the sun shines every week", "it's been raining for a week", "in a week's time the weather will be fine"], a: 0,
        e: "〜ぶり = first time since (some time)." },
    ],
  },

  {
    id: "g130", g: "疑問詞＋ても", m: "no matter / whatever", f: "疑問詞 + V-て + も ／ A-くても",
    c: "contrast", lv: 2, rel: ["g014"],
    note: "With an interrogative word, expresses \"no matter...\" (何を食べても, 誰が来ても).",
    ex: [
      { jp: "何を食べても太らない。", fr: "Whatever I eat, I don't get fat." },
      { jp: "いくら呼んでも返事がない。", fr: "No matter how many times I call, there's no answer." },
    ],
    qs: [
      { t: "fill", q: "＿＿＿練習しても、上手にならない。", fr: "No matter how hard I train, I don't progress.",
        o: ["いくら", "どれ", "なに", "いつ"], a: 0,
        e: "いくら〜ても = \"I have beautiful...\" (いくら練習しても)." },
      { t: "meaning", q: "「誰が来ても断る」— sens ?",
        o: ["whoever comes, I refuse", "nobody comes", "someone comes", "when he comes I accept"], a: 0,
        e: "疑問詞 + ても = \"whatever/whatever\"." },
    ],
  },

  {
    id: "g131", g: "〜たって／〜だって（仮定）", m: "even if (colloquial)", f: "V-た + って ／ A-く + たって ／ N・A-な + だって",
    c: "contrast", lv: 2, rel: ["g014"],
    note: "Colloquial equivalent of ても / でも for concession (\"even if\").",
    ex: [
      { jp: "急いだって、もう間に合わない。", fr: "Even if I hurry, I won't make it in time." },
      { jp: "高くたって買う。", fr: "Even if it's expensive, I'll buy it." },
    ],
    qs: [
      { t: "fill", q: "謝っ＿＿＿、許してくれないだろう。", fr: "Even if I apologize, he probably won't forgive me.",
        o: ["たって", "ても いい", "ながら", "ところ"], a: 0,
        e: "〜たって (familiar) = even if (謝ったって)." },
      { t: "nuance", q: "〜たって équivaut à :",
        o: ["〜ても (même si), registre familier", "〜から (parce que)", "〜ので (car)", "〜ために (pour)"], a: 0,
        e: "たって = oral variant of ても." },
    ],
  },

  {
    id: "g132", g: "〜てばかりいる", m: "do nothing but, spend your time", f: "V-て + ばかりいる",
    c: "express", lv: 2, rel: [],
    note: "Criticizes an action repeated excessively, to the exclusion of all else.",
    ex: [
      { jp: "弟はゲームをしてばかりいる。", fr: "My little brother only plays video games." },
      { jp: "泣いてばかりいないで、頑張ろう。", fr: "Don't stay crying, make an effort." },
    ],
    qs: [
      { t: "fill", q: "彼は文句を言っ＿＿＿いる。", fr: "All he does is complain.",
        o: ["てばかり", "たばかり", "ながら", "てから"], a: 0,
        e: "〜てばかりいる = do only (言ってばかりいる)." },
      { t: "nuance", q: "〜てばかりいる vs 〜たばかり : différence ?",
        o: ["てばかりいる = ne faire que (excès) ; たばかり = venir juste de faire", "identical", "てばかりいる = venir de faire", "たばかり = excès"], a: 0,
        e: "Don't confuse excess (てばかりいる) with recent (たばかり)." },
    ],
  },

];

if (typeof window !== "undefined") { window.N4_GRAMMAR = N4_GRAMMAR; window.CATEGORIES = CATEGORIES; window.TIERS = TIERS; }
