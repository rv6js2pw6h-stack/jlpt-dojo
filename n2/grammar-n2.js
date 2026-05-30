/* =========================================================================
   N2 道場 — Base de données de grammaire JLPT N2
   -------------------------------------------------------------------------
   Schéma d'un point de grammaire :
     id   : identifiant unique
     g    : la forme grammaticale
     m    : sens (français)
     f    : formation / connexion
     c    : catégorie (clé de CATEGORIES)
     lv   : palier d'importance 1 (essentiel) → 3 (plus rare)
     rel  : ids de points proches (discrimination)
     note : nuance d'usage (français)
     ex   : exemples [{ jp, fr }]
     qs   : exercices [{ t, q, fr, frame, o, a, e }]
              t = "fill" | "meaning" | "usage" | "nuance" | "order"
              q = énoncé          o = 4 options
              a = index réponse   e = explication
              fr = traduction/contexte (optionnel)
              frame = phrase à trous pour t="order"
   ========================================================================= */

const CATEGORIES = {
  particle:  { label: "Particles & locutions", icon: "の", color: "#5b9cff" },
  contrast:  { label: "Concession & contrast", icon: "対", color: "#ff8a5b" },
  time:      { label: "Time & sequence",        icon: "時", color: "#43c97f" },
  condition: { label: "Condition & cause",       icon: "因", color: "#c98cff" },
  modality:  { label: "Modality & judgement",     icon: "判", color: "#ffd24d" },
  express:   { label: "Expressions & emphasis",   icon: "強", color: "#ff5c8a" },
};

const TIERS = {
  1: "Essential",
  2: "Common",
  3: "Advanced",
};

const N2_GRAMMAR = [

  /* ===================== PARTICULES & LOCUTIONS ===================== */

  {
    id: "g001", g: "〜について", m: "about, concerning", f: "Nom + について（は／も／の）",
    c: "particle", lv: 1, rel: ["g010", "g002"],
    note: "Introduces the theme of a word, thought or research. Neutral and very common. Distinguishable from 〜に対して (attitude directed toward) and 〜に関して (more formal).",
    ex: [
      { jp: "日本の歴史について、レポートを書いた。", fr: "I wrote a report on the history of Japan." },
      { jp: "その事件については、まだ分からないことが多い。", fr: "Much remains unclear about this case." },
    ],
    qs: [
      { t: "fill", q: "先生は試験の範囲＿＿＿詳しく説明してくれた。", fr: "The teacher explained in detail the scope of the test.",
        o: ["について", "に対して", "において", "によって"], a: 0,
        e: "The theme of the explanation is \"the scope of the review\". 〜について marks the topic/theme being discussed." },
      { t: "meaning", q: "「地球温暖化について、様々な意見が出た」— sens de について ?",
        o: ["about, concerning", "towards, against (attitude)", "because of, by means of", "at the time of"], a: 0,
        e: "〜について = the topic covered. Here: \"various opinions have been expressed on warming\"." },
      { t: "nuance", q: "「住民は建設計画＿＿＿強く反対した」— quelle particule pour exprimer une opposition dirigée CONTRE le projet ?",
        o: ["に対して", "について", "にわたって", "において"], a: 0,
        e: "When an emotion/action (反対 = oppose) is DIRECTED towards a target, we use 〜に対して. 〜について would simply pose the theme, without the nuance of active opposition." },
    ],
  },

  {
    id: "g002", g: "〜に対して", m: "envers, towards; face à; contrary to", f: "Nom + に対して／に対する＋Nom",
    c: "particle", lv: 1, rel: ["g001", "g020"],
    note: "Two uses: (1) an attitude/action directed towards a target (towards sb); (2) a contrast between two elements (X に対して Y = X, whereas Y).",
    ex: [
      { jp: "目上の人に対して、そんな話し方をしてはいけない。", fr: "This is not the way to speak to a superior." },
      { jp: "兄が社交的なのに対して、弟は内気だ。", fr: "Unlike the eldest, who is sociable, the youngest is shy." },
    ],
    qs: [
      { t: "fill", q: "彼の失礼な発言＿＿＿、みんなが腹を立てた。", fr: "Everyone got angry at his rude remarks.",
        o: ["に対して", "について", "にとって", "によって"], a: 0,
        e: "Anger (腹を立てる) is directed TO his words: we use 〜に対して (attitude/reaction towards a target)." },
      { t: "fill", q: "都会の生活は便利な＿＿＿、家賃が高いという欠点がある。", fr: "City life is convenient, but the rent is high.",
        o: ["のに対して", "について", "に応じて", "に際して"], a: 0,
        e: "Contrastive use: \"practical\" ↔ \"high rent\". 〜のに対して contrasts two propositions. (After a verb/adjective we keep の.)" },
      { t: "meaning", q: "「収入が増えたのに対して、支出も増えた」— sens de のに対して ?",
        o: ["while, in contrast to", "about", "thanks to", "as soon as"], a: 0,
        e: "Here 〜に対して contrasts two parallel facts (income ↔ expenditure)." },
    ],
  },

  {
    id: "g003", g: "〜によって／による", m: "by (agent); according to; because of; by means of", f: "Nom + によって／による＋Nom",
    c: "particle", lv: 1, rel: ["g006", "g007"],
    note: "Versatile: (1) agent of the passive; (2) variation \"according to\" (人によって); (3) cause/reason; (4) means. 〜によると = \"according to (a source)\" for hearsay.",
    ex: [
      { jp: "この小説は夏目漱石によって書かれた。", fr: "This novel was written by Natsume Sōseki." },
      { jp: "国によって、文化や習慣が異なる。", fr: "Culture and customs differ from country to country." },
    ],
    qs: [
      { t: "fill", q: "電車の遅れ＿＿＿、会議に間に合わなかった。", fr: "Because of the train delay, I didn't get to the meeting on time.",
        o: ["によって", "にとって", "について", "に際して"], a: 0,
        e: "Cause/reason: the delay is the cause. 〜によって can express the cause of an event." },
      { t: "fill", q: "人＿＿＿、考え方は様々だ。", fr: "Different people have different ways of thinking.",
        o: ["によって", "について", "に対して", "において"], a: 0,
        e: "Variation \"according to\": 人によって = \"according to people\". Indicates that the result varies from case to case." },
      { t: "nuance", q: "Pour rapporter une information de seconde main (« d'après la météo… »), on dit 天気予報＿＿＿…",
        o: ["によると", "によって", "について", "にとって"], a: 0,
        e: "〜によると + 〜そうだ／らしい is used for hearsay: \"according to...\". 〜によって does not have this sense of source of information." },
    ],
  },

  {
    id: "g004", g: "〜において／における", m: "at, in, during (place, time, domain - formal)", f: "Nom + において／における＋Nom",
    c: "particle", lv: 2, rel: ["g001"],
    note: "Formal, written equivalent of で to situate a place, time, situation or domain. Common in writing and speech.",
    ex: [
      { jp: "会議は本社において行われる。", fr: "The meeting will be held at head office." },
      { jp: "現代社会における情報の役割は大きい。", fr: "The role of information in modern society is considerable." },
    ],
    qs: [
      { t: "fill", q: "オリンピックは東京＿＿＿開催された。", fr: "The Olympic Games were held in Tokyo.",
        o: ["において", "にとって", "について", "によって"], a: 0,
        e: "〜において locates the place of an event, in a formal register (≈ で)." },
      { t: "meaning", q: "「研究の分野において優れた成果を上げた」— sens de において ?",
        o: ["in (the field of)", "about", "because of", "for (sb)"], a: 0,
        e: "Here において designates the domain/framework: \"in the field of research\"." },
      { t: "usage", q: "Quelle phrase est la plus naturelle (registre formel d'un communiqué) ?",
        o: ["式典は大ホールにおいて執り行われます。", "式典は大ホールについて執り行われます。", "式典は大ホールにとって執り行われます。", "式典は大ホールに対して執り行われます。"], a: 0,
        e: "To announce the location of a ceremony in a sustained style, 〜において is correct." },
    ],
  },

  {
    id: "g005", g: "〜として（は／も）", m: "as a", f: "Nom + として",
    c: "particle", lv: 1, rel: ["g006"],
    note: "Indicates a role, quality, status or category. 〜としては = \"as far as (this status) is concerned\"; 〜としても = \"even as\".",
    ex: [
      { jp: "彼は医者として尊敬されている。", fr: "He is respected as a doctor." },
      { jp: "この量は、子供向けとしては多すぎる。", fr: "For a portion intended for children, it's too much." },
    ],
    qs: [
      { t: "fill", q: "私は留学生＿＿＿日本に来ました。", fr: "I came to Japan as a foreign student.",
        o: ["として", "について", "によって", "に対して"], a: 0,
        e: "〜として expresses status/role: \"as a foreign student\"." },
      { t: "meaning", q: "「専門家として意見を述べた」— sens de として ?",
        o: ["as a", "about", "according to", "despite"], a: 0,
        e: "〜として = in the role/quality of: \"he gave his opinion as an expert\"." },
      { t: "fill", q: "新人＿＿＿、彼の仕事ぶりは立派だ。", fr: "For a beginner, the way he works is remarkable.",
        o: ["としては", "について", "に際して", "にわたって"], a: 0,
        e: "〜としては = \"from the point of view of this status\": in view of the fact that he is a beginner." },
    ],
  },

  {
    id: "g006", g: "〜にとって（は／も）", m: "for, from the point of view of", f: "Nom + にとって",
    c: "particle", lv: 1, rel: ["g005", "g003"],
    note: "Adopts the point of view of a person/group to make a judgment (important, difficult, valuable...). Not used for an objective (≠ ために).",
    ex: [
      { jp: "私にとって、家族が一番大切だ。", fr: "For me, family is the most important thing." },
      { jp: "この経験は学生にとって貴重だった。", fr: "This experience was invaluable for the students." },
    ],
    qs: [
      { t: "fill", q: "外国人＿＿＿、日本の敬語は難しい。", fr: "For foreigners, Japanese honorific language is difficult.",
        o: ["にとって", "について", "によって", "に対して"], a: 0,
        e: "Judgment adopted from the point of view of foreigners: 〜にとって（は）." },
      { t: "nuance", q: "「この辞書は私＿＿＿宝物だ」— quelle forme pour « pour moi, c'est un trésor » ?",
        o: ["にとって", "に対して", "として", "について"], a: 0,
        e: "Subjective evaluation from a point of view → 〜にとって. 〜に対して would express directed action, which is not appropriate here." },
      { t: "usage", q: "Laquelle est correcte pour « j'étudie POUR réussir l'examen » (objectif) ?",
        o: ["合格するために勉強する。", "合格するにとって勉強する。", "合格するについて勉強する。", "合格するとして勉強する。"], a: 0,
        e: "An OBJECTIVE is said with 〜ために, not 〜にとって (which serves the point of view, not the purpose)." },
    ],
  },

  {
    id: "g007", g: "〜に基づいて／に基づく", m: "on the basis of, based on", f: "Nom + に基づいて／に基づく＋Nom",
    c: "particle", lv: 2, rel: ["g008", "g003"],
    note: "Rely on a basis that serves as a foundation, standard or reference (law, data, experience, principle). More rigorous than をもとに.",
    ex: [
      { jp: "この映画は実話に基づいて作られた。", fr: "This film is based on a true story." },
      { jp: "規則に基づいて処分が決定された。", fr: "The penalty was decided in accordance with the regulations." },
    ],
    qs: [
      { t: "fill", q: "調査の結果＿＿＿、新しい方針が立てられた。", fr: "Based on the results of the survey, a new direction has been defined.",
        o: ["に基づいて", "にとって", "について", "に反して"], a: 0,
        e: "We rely on the results (foundation/reference): 〜に基づいて." },
      { t: "meaning", q: "「事実に基づく報道」— sens de に基づく ?",
        o: ["based on (the facts)", "contrary to", "about", "despite"], a: 0,
        e: "〜に基づく + Name = \"(report) based on facts\"." },
      { t: "nuance", q: "Pour « décider CONFORMÉMENT au règlement » (norme stricte), on préfère :",
        o: ["規則に基づいて", "規則をもとに", "規則について", "規則にとって"], a: 0,
        e: "When the basis is a binding NORM (law, regulation), 〜に基づいて is the most accurate. をもとに suggests more of a starting material that's being reworked." },
    ],
  },

  {
    id: "g008", g: "〜をもとに（して）", m: "from, based on", f: "Nom + をもとに（して）／をもとにした＋Nom",
    c: "particle", lv: 2, rel: ["g007"],
    note: "Take a material/source as a starting point for creating or elaborating something else (story, drawing, hypothesis). The emphasis is on the raw material.",
    ex: [
      { jp: "アンケートの結果をもとに、商品を改良した。", fr: "We improved the product based on the survey results." },
      { jp: "この物語は古い伝説をもとにしている。", fr: "This story is based on an old legend." },
    ],
    qs: [
      { t: "fill", q: "集めた資料＿＿＿、論文を書いた。", fr: "I wrote the article based on the documents I collected.",
        o: ["をもとに", "に対して", "について", "に際して"], a: 0,
        e: "The documents are the starting material for the essay: 〜をもとに." },
      { t: "nuance", q: "« Un film TIRÉ d'un roman » (matériau adapté en œuvre) :",
        o: ["小説をもとに作られた映画", "小説に基づいて守られた映画", "小説について作られた映画", "小説に対して作られた映画"], a: 0,
        e: "For a work ELABORATED from creative material, をもとに is natural. に基づいて would insist on conformity to a standard." },
      { t: "meaning", q: "「経験をもとにアドバイスする」— sens ?",
        o: ["advisor, drawing on the experience", "advisor versus experience", "experience advisor", "experience consultant"], a: 0,
        e: "〜をもとに = taking (the experiment) as a basis/starting point." },
    ],
  },

  {
    id: "g009", g: "〜をはじめ（として）", m: "starting with (and many others)", f: "Nom + をはじめ（として）／をはじめとする＋Nom",
    c: "particle", lv: 2, rel: ["g010"],
    note: "Cite a representative example (the most striking) and then imply a list of other elements of the same type. \"X in mind, as well as...\".",
    ex: [
      { jp: "東京をはじめ、日本の大都市は人口が多い。", fr: "Starting with Tokyo, Japan's major cities are densely populated." },
      { jp: "校長先生をはじめ、多くの先生が出席した。", fr: "Starting with the principal, many teachers were present." },
    ],
    qs: [
      { t: "fill", q: "この店では、寿司＿＿＿、様々な和食が楽しめる。", fr: "Starting with sushi, this restaurant serves a variety of Japanese dishes.",
        o: ["をはじめ", "について", "に対して", "にとって"], a: 0,
        e: "We give a leading example (sushi) representative of a whole: 〜をはじめ." },
      { t: "meaning", q: "「社長をはじめ、社員全員が参加した」— sens ?",
        o: ["starting with the CEO (and all the others)", "except the CEO", "instead of the CEO", "according to CEO"], a: 0,
        e: "〜をはじめ cites the representative element and then encompasses the rest: \"CEO first, all employees\"." },
      { t: "order", q: "Reconstituez la phrase. Quel segment va à la place ★ ?",
        frame: "この地方は ＿＿ ＿★＿ ＿＿ 名産品が多い。",
        o: ["りんご", "を", "はじめ", "とする"], a: 2,
        e: "Correct order: りんご → を → はじめ → とする → 名産品。「りんごをはじめとする名産品」= \"reputable products starting with apples\". TO ★: はじめ." },
    ],
  },

  {
    id: "g010", g: "〜に関して／に関する", m: "concerning, relating to (formal)", f: "Nom + に関して／に関する＋Nom",
    c: "particle", lv: 2, rel: ["g001"],
    note: "Formal equivalent of 〜について. Very common in writing and administrative contexts. に関する precedes a noun.",
    ex: [
      { jp: "事故に関して、詳しい調査が行われた。", fr: "The accident has been thoroughly investigated." },
      { jp: "環境に関する法律が改正された。", fr: "The law on the environment has been revised." },
    ],
    qs: [
      { t: "fill", q: "個人情報＿＿＿問い合わせは、こちらの窓口へ。", fr: "For all requests relating to personal information, please contact this counter.",
        o: ["に関する", "にとって", "に対する", "における"], a: 0,
        e: "〜に関する + Name = \"(request) concerning personal information\". Formal register." },
      { t: "nuance", q: "Dans un document officiel, « concernant ce dossier » s'écrit le plus naturellement :",
        o: ["本件に関して", "本件について", "本件にとって", "本件によって"], a: 0,
        e: "に関して and について are close; in a sustained administrative register, に関して is preferred. (について remains correct but more neutral.)" },
      { t: "meaning", q: "「健康に関する情報」— sens de に関する ?",
        o: ["related to (health)", "contrary to", "thanks to", "for"], a: 0,
        e: "〜に関する = pertaining to, concerning." },
    ],
  },

  {
    id: "g011", g: "〜に応じて／に応じた", m: "according to, in function of, in response to", f: "Nom + に応じて／に応じた＋Nom",
    c: "particle", lv: 2, rel: ["g003", "g012"],
    note: "Something varies/adapts IN ACCORDANCE with a variable factor (need, income, situation, demand). Idea of flexible adaptation.",
    ex: [
      { jp: "収入に応じて、税金の額が変わる。", fr: "The amount of tax varies according to income." },
      { jp: "お客様の希望に応じて、対応いたします。", fr: "We respond according to the customer's wishes." },
    ],
    qs: [
      { t: "fill", q: "季節や天候＿＿＿、メニューを変えている。", fr: "We change the menu according to the season and the weather.",
        o: ["に応じて", "について", "に対して", "にとって"], a: 0,
        e: "The menu ADAPTS to a variable factor (season, weather): 〜に応じて." },
      { t: "meaning", q: "「能力に応じた仕事を与える」— sens de に応じた ?",
        o: ["adapted to (the skill)", "against competence", "about competence", "despite competence"], a: 0,
        e: "〜に応じた + Name = \"(a job) tailored to skills\"." },
      { t: "nuance", q: "Comparé à 〜によって (« selon »), 〜に応じて insiste surtout sur :",
        o: ["flexible adaptation to a variable factor", "the agent of a passive action", "the formal venue for an event", "one person's point of view"], a: 0,
        e: "〜に応じて emphasizes the idea of RESPONDING/ADAPTING to a factor (needs, demand). によって is more neutral (\"it varies according to\")." },
    ],
  },

  {
    id: "g012", g: "〜に際して／に際し", m: "on the occasion of, during, at the time of (formal)", f: "Nom／Verbe-dico + に際して",
    c: "particle", lv: 2, rel: ["g013", "g004"],
    note: "At the time of an important/exceptional event (departure, registration, opening). Sustained register, often in speeches and announcements.",
    ex: [
      { jp: "卒業に際して、一言お礼を申し上げます。", fr: "On the occasion of the graduation ceremony, I'd like to say a word of thanks." },
      { jp: "契約に際し、注意事項をご確認ください。", fr: "When signing the contract, please check the most important points." },
    ],
    qs: [
      { t: "fill", q: "入学＿＿＿、校長先生が挨拶をした。", fr: "On the occasion of the school's entrance, the principal gave a speech.",
        o: ["に際して", "について", "にとって", "によって"], a: 0,
        e: "〜に際して = at the time of a milestone event (starting school), formal register." },
      { t: "meaning", q: "「開会に際してご挨拶申し上げます」— sens de に際して ?",
        o: ["on the occasion of (the opening)", "about", "because of", "unlike"], a: 0,
        e: "〜に際して = during / on the occasion of (a solemn event)." },
      { t: "nuance", q: "Pour une circonstance QUOTIDIENNE et banale, 〜に際して est :",
        o: ["inadapté (trop formel) ; on dirait 〜とき", "the only correct choice", "mandatory", "identique à 〜たとたん"], a: 0,
        e: "〜に際して is reserved for important/formal occasions. For mundane daily life, we use 〜とき." },
    ],
  },

  {
    id: "g013", g: "〜に先立って／に先立ち", m: "prior to, before (an event)", f: "Nom／Verbe-dico + に先立って",
    c: "time", lv: 2, rel: ["g012"],
    note: "To do sth IN PREPARATION, before an important upcoming event. More formal and marked than 〜前に (idea of preceding in view of).",
    ex: [
      { jp: "開店に先立って、関係者を招いた式が行われた。", fr: "Prior to the opening, a ceremony brought together the parties concerned." },
      { jp: "出発に先立ち、注意事項を説明します。", fr: "Before we set off, I'll explain the instructions." },
    ],
    qs: [
      { t: "fill", q: "試合＿＿＿、選手たちは入念に準備運動をした。", fr: "Before the match, the players warmed up thoroughly.",
        o: ["に先立って", "について", "に応じて", "にとって"], a: 0,
        e: "Action taken BEFORE an event (the match): 〜に先立って." },
      { t: "nuance", q: "〜に先立って se distingue de 〜前に surtout parce qu'il :",
        o: ["is formal and implies preparation for a significant event", "indicates a cause", "expresses a contrast", "marks the point of view"], a: 0,
        e: "〜前に is neutral (\"before\"). 〜に先立って is sustained and suggests acting IN VIEW of an important event." },
      { t: "meaning", q: "「会議に先立ち、資料が配られた」— quand les documents ont-ils été distribués ?",
        o: ["before the meeting (in preparation)", "during the meeting", "after the meeting", "at the meeting place"], a: 0,
        e: "〜に先立って = prior to: the documents were distributed BEFORE the meeting." },
    ],
  },

  {
    id: "g014", g: "〜をめぐって／をめぐる", m: "around, about (debate, conflict)", f: "Nom + をめぐって／をめぐる＋Nom",
    c: "particle", lv: 2, rel: ["g001"],
    note: "A subject AROUND WHICH many people debate, oppose or agitate. Often with 議論・対立・争い (debate, conflict, dispute).",
    ex: [
      { jp: "新しい税制をめぐって、激しい議論が続いている。", fr: "A heated debate continues over the new tax system." },
      { jp: "遺産をめぐる争いが起きた。", fr: "A dispute broke out over inheritance." },
    ],
    qs: [
      { t: "fill", q: "原発の建設＿＿＿、住民の意見が対立している。", fr: "When it comes to building the power plant, residents' opinions are divided.",
        o: ["をめぐって", "について", "にとって", "に応じて"], a: 0,
        e: "A DISCORDE subject around which opinions clash: 〜をめぐって." },
      { t: "nuance", q: "On préfère 〜をめぐって à 〜について lorsque :",
        o: ["several parties debate/oppose on the subject", "calmly study a theme on your own", "an objective is indicated", "we locate a place"], a: 0,
        e: "〜をめぐって implies a PLURALITY of actors in debate/conflict around the topic. について is neutral and suitable even for a topic studied on its own." },
      { t: "meaning", q: "「その発言をめぐって騒ぎになった」— sens ?",
        o: ["an uproar erupted around these words", "these words have disappeared", "we talked about these words", "these words have changed"], a: 0,
        e: "〜をめぐって = around (a topic that stirs up agitation/debate)." },
    ],
  },

  {
    id: "g015", g: "〜に伴って／に伴い", m: "as, at the same time as, as a result of", f: "Nom／Verbe-dico + に伴って",
    c: "time", lv: 2, rel: ["g016", "g017"],
    note: "One change leads to another at the same time: \"as A changes, so does B\". Often with large-scale developments (society, technology).",
    ex: [
      { jp: "人口の増加に伴って、住宅が不足してきた。", fr: "As the population grows, so does the need for housing." },
      { jp: "技術の進歩に伴い、生活が便利になった。", fr: "Technical progress has made life more practical." },
    ],
    qs: [
      { t: "fill", q: "気温の上昇＿＿＿、海面も少しずつ高くなっている。", fr: "As temperatures rise, so do sea levels.",
        o: ["に伴って", "について", "にとって", "に際して"], a: 0,
        e: "One change (temperature) leads to another simultaneously (sea level): 〜に伴って." },
      { t: "meaning", q: "「都市化に伴う問題」— sens de に伴う ?",
        o: ["accompanying problems (urbanization)", "problems related to urbanization", "urbanization issues", "problems for urban development"], a: 0,
        e: "〜に伴う + Noun = \"(the problems) that accompany urbanization\"." },
      { t: "nuance", q: "Différence principale entre 〜に伴って et 〜につれて :",
        o: ["伴って accepte aussi des changements ponctuels/de grande ampleur ; つれて exige une progression graduelle continue", "伴って exprime une cause directe unique", "つれて est plus formel", "they are never interchangeable"], a: 0,
        e: "〜につれて requires two linked GRADUAL and continuous changes. 〜に伴って is broader: it also accepts more one-off or large-scale changes." },
    ],
  },

  {
    id: "g016", g: "〜につれて／につれ", m: "as, over time", f: "Nom／Verbe-dico + につれて",
    c: "time", lv: 2, rel: ["g015", "g017"],
    note: "Two GRADUAL and proportional changes: the more A progresses, the more B progresses. Both sides must express a continuous evolution.",
    ex: [
      { jp: "年を取るにつれて、体力が衰えてきた。", fr: "As I grow older, my strength declines." },
      { jp: "山を登るにつれ、空気が薄くなった。", fr: "As I climbed the mountain, the air became increasingly thin." },
    ],
    qs: [
      { t: "fill", q: "時間がたつ＿＿＿、彼の不安は大きくなっていった。", fr: "As time passed, his concern grew.",
        o: ["につれて", "にとって", "について", "に際して"], a: 0,
        e: "Two parallel gradual evolutions (time passes / concern grows ) : 〜につれて." },
      { t: "usage", q: "Quelle phrase emploie 〜につれて correctement (changement graduel des DEUX côtés) ?",
        o: ["練習を重ねるにつれて、上手になった。", "ボタンを押すにつれて、ドアが開いた。", "駅に着くにつれて、電車に乗った。", "朝になるにつれて、目覚ましが鳴った。"], a: 0,
        e: "\"As the exercises accumulate, we progress\": two gradual evolutions. The others describe one-off actions, incompatible with につれて." },
      { t: "meaning", q: "「品質が上がるにつれて、値段も上がる」— sens ?",
        o: ["the higher the quality, the higher the price", "quality goes up but the price goes down", "despite quality, the price goes up", "price rises on quality"], a: 0,
        e: "〜につれて = proportional relationship: both increase together." },
    ],
  },

  {
    id: "g017", g: "〜にしたがって／にしたがい", m: "as; in accordance with, following", f: "Nom／Verbe-dico + にしたがって",
    c: "time", lv: 2, rel: ["g016", "g015"],
    note: "Two meanings: (1) proportional change (≈ につれて); (2) \"following / in accordance with\" an instruction, a rule, a will (従う = obey).",
    ex: [
      { jp: "南へ行くにしたがって、気候が暖かくなる。", fr: "The further south you go, the warmer the climate." },
      { jp: "係員の指示にしたがって、避難してください。", fr: "Please evacuate in accordance with staff instructions." },
    ],
    qs: [
      { t: "fill", q: "矢印＿＿＿進むと、出口に着きます。", fr: "Follow the arrows to reach the exit.",
        o: ["にしたがって", "につれて", "にとって", "について"], a: 0,
        e: "Direction \"following / in accordance with\" (the arrows): 〜にしたがって. (〜につれて has only the proportional sense.)" },
      { t: "nuance", q: "Lequel des deux sens 〜につれて NE possède PAS ?",
        o: ["\"in accordance with (a rule/instruction)\".", "\"as \"", "\"proportionally", "\"as we go along"], a: 0,
        e: "〜につれて expresses ONLY proportional change. The meaning \"in accordance with / in obedience to\" is specific to 〜にしたがって (from 従う)." },
      { t: "meaning", q: "「規則にしたがって行動する」— sens ?",
        o: ["act in accordance with the regulations", "act against the regulation", "act as you settle", "act on the regulations"], a: 0,
        e: "Here 〜にしたがって = following / in accordance with (the regulation)." },
    ],
  },

  {
    id: "g018", g: "〜に反して／に反する", m: "as opposed to", f: "Nom + に反して／に反する＋Nom",
    c: "particle", lv: 2, rel: ["g002"],
    note: "The result is CONTRARY to an expectation, forecast, rule or will. Often with 予想・期待・命令・規則 (forecast, expectation, order, rule).",
    ex: [
      { jp: "大方の予想に反して、彼が優勝した。", fr: "Contrary to most predictions, he won." },
      { jp: "親の期待に反して、彼は進学しなかった。", fr: "Contrary to his parents' expectations, he did not pursue his studies." },
    ],
    qs: [
      { t: "fill", q: "予想＿＿＿、試験は易しかった。", fr: "Contrary to expectations, the exam was easy.",
        o: ["に反して", "に応じて", "に基づいて", "について"], a: 0,
        e: "The result goes AGAINST the forecast: 〜に反して." },
      { t: "meaning", q: "「命令に反する行為」— sens de に反する ?",
        o: ["an act contrary to (order)", "an orderly act", "an act about order", "an act thanks to the order"], a: 0,
        e: "〜に反する + Noun = \"(an act) that goes against the order\"." },
      { t: "nuance", q: "Avec quel type de noms 〜に反して s'emploie-t-il typiquement ?",
        o: ["予想・期待・規則 (attente, prévision, règle)", "place names", "personal names only", "material names"], a: 0,
        e: "〜に反して contradicts a norm or expectation: 予想・期待・命令・規則 are typical companions." },
    ],
  },

  {
    id: "g019", g: "〜を通じて／を通して", m: "through, via; throughout", f: "Nom + を通じて／を通して",
    c: "particle", lv: 2, rel: ["g020"],
    note: "(1) means/intermediary through which something passes (a person, a medium, an experience); (2) temporal or spatial extent covered \"from one end to the other\".",
    ex: [
      { jp: "友人を通じて、彼女と知り合った。", fr: "I met him through a friend." },
      { jp: "この地方は一年を通して雨が多い。", fr: "This region is rainy all year round." },
    ],
    qs: [
      { t: "fill", q: "インターネット＿＿＿、世界中の情報が手に入る。", fr: "The Internet brings us information from all over the world.",
        o: ["を通じて", "について", "に対して", "に反して"], a: 0,
        e: "The Internet is the MEANS/channel through which information is obtained: 〜を通じて." },
      { t: "meaning", q: "「一週間を通して晴れの日が続いた」— sens ?",
        o: ["all week long", "about the week", "because of the week", "unlike the week"], a: 0,
        e: "Meaning (2): temporal extent, \"throughout the week\"." },
      { t: "usage", q: "Pour « j'ai beaucoup appris À TRAVERS cette expérience » :",
        o: ["この経験を通じて、多くを学んだ。", "この経験に反して、多くを学んだ。", "この経験について、多くを学んだ。", "この経験にとって、多くを学んだ。"], a: 0,
        e: "Experience is the vector of learning: 〜を通じて (\"through\")." },
    ],
  },

  {
    id: "g020", g: "〜にわたって／にわたる", m: "on (the whole extent of), during all, covering", f: "Nom (durée/étendue) + にわたって／にわたる＋Nom",
    c: "time", lv: 2, rel: ["g019"],
    note: "Underlines the AMPLEUR of a scope (time, space, domains) covered from end to end: \"over 10 years\", \"over 3 regions\". The name indicates a scope.",
    ex: [
      { jp: "工事は三年にわたって続いた。", fr: "The work took three years to complete." },
      { jp: "広い範囲にわたる被害が報告された。", fr: "Damage covering a vast area was reported." },
    ],
    qs: [
      { t: "fill", q: "話し合いは十時間＿＿＿行われた。", fr: "The talks lasted ten hours.",
        o: ["にわたって", "を通じて", "について", "に応じて"], a: 0,
        e: "We emphasize the magnitude of a duration (ten hours): 〜にわたって." },
      { t: "nuance", q: "Différence entre 〜にわたって et 〜を通して (sens temporel) :",
        o: ["わたって insiste sur l'ampleur/l'étendue couverte ; 通して insiste sur « du début à la fin sans interruption »", "they are strictly identical", "わたって ne s'emploie qu'avec des lieux", "通して exprime un moyen uniquement"], a: 0,
        e: "〜にわたって highlights the BIG scope (duration, space, number of domains). 〜を通して emphasizes continuity \"from one end to the other\"." },
      { t: "meaning", q: "「三回にわたる交渉」— sens ?",
        o: ["negotiations spread over three", "negotiations against three people", "negotiations about three things", "negotiations thanks to three"], a: 0,
        e: "〜にわたる + Name = \"(negotiations) covering three occasions\"." },
    ],
  },

  {
    id: "g021", g: "〜をきっかけに（して）／がきっかけで", m: "as a result of, what triggered, the opportunity that made", f: "Nom／普通形＋の + をきっかけに",
    c: "condition", lv: 2, rel: ["g022"],
    note: "An event serves as a Trigger for a change (often positive/personal): an encounter, a trip, an incident that starts something off.",
    ex: [
      { jp: "病気をきっかけに、生活習慣を見直した。", fr: "Following my illness, I reviewed my lifestyle." },
      { jp: "ある映画をきっかけにして、日本語の勉強を始めた。", fr: "It was a certain film that led me to start learning Japanese." },
    ],
    qs: [
      { t: "fill", q: "留学＿＿＿、彼の人生は大きく変わった。", fr: "The study trip triggered a major change in her life.",
        o: ["をきっかけに", "について", "に反して", "にわたって"], a: 0,
        e: "An event TRIGGERS a change: 〜をきっかけに." },
      { t: "meaning", q: "「友人の一言をきっかけに、考えが変わった」— rôle de la « parole de l'ami » ?",
        o: ["the trigger for change", "the obstacle to change", "the purpose of change", "the result of change"], a: 0,
        e: "〜をきっかけに = the triggering event at the origin of the sequence." },
      { t: "order", q: "Reconstituez la phrase. Quel segment va à la place ★ ?",
        frame: "入院した ＿＿ ＿★＿ ＿＿ 考えるようになった。",
        o: ["こと", "を", "きっかけに", "健康について"], a: 2,
        e: "Order: こと → を → きっかけに → 健康について。「入院したことをきっかけに、健康について考えるようになった」. TO ★: きっかけに." },
    ],
  },

  {
    id: "g022", g: "〜を契機に（して）", m: "in favor of, taking the opportunity (formal)", f: "Nom／普通形＋の + を契機に",
    c: "condition", lv: 3, rel: ["g021"],
    note: "SUPPORTED equivalent of 〜をきっかけに. A landmark event becomes the starting point for significant change (often on a company-wide scale).",
    ex: [
      { jp: "オイルショックを契機に、省エネが進んだ。", fr: "Thanks to the oil crisis, energy savings have progressed." },
      { jp: "創立百周年を契機として、新事業を始めた。", fr: "Taking the centenary as an occasion, the company launched a new activity." },
    ],
    qs: [
      { t: "fill", q: "震災＿＿＿、防災意識が高まった。", fr: "In the wake of the earthquake, awareness of disaster prevention has grown.",
        o: ["を契機に", "について", "に応じて", "にとって"], a: 0,
        e: "Milestone event serving as a starting point for societal change: 〜を契機に (sustained register)." },
      { t: "nuance", q: "Entre 〜を契機に et 〜をきっかけに, lequel est le plus FORMEL/écrit ?",
        o: ["を契機に", "をきっかけに", "they're both familiar", "none is formal"], a: 0,
        e: "〜を契機に is the sustained register; 〜をきっかけに is more common/daily. The meaning is very similar." },
      { t: "meaning", q: "「転職を契機に、家族で引っ越した」— sens ?",
        o: ["the job change was the occasion for the move", "they moved against job change", "they've moved about work", "work prevented the move"], a: 0,
        e: "〜を契機に = taking (the job change) as an occasion/starting point." },
    ],
  },

  /* ===================== CONCESSION & CONTRASTE ===================== */

  {
    id: "g023", g: "〜ものの", m: "although, of course... but", f: "普通形（な形＝な／である・名＝である）+ ものの",
    c: "contrast", lv: 1, rel: ["g024", "g025"],
    note: "Concession: A is admitted, but what follows is not as expected. The speaker acknowledges a fact, then tempers it. Slightly written style.",
    ex: [
      { jp: "買ったものの、一度も使っていない。", fr: "I bought it, but never used it." },
      { jp: "日本語が話せるとはいうものの、敬語は苦手だ。", fr: "I know how to speak Japanese, but I have trouble with the honorific forms." },
    ],
    qs: [
      { t: "fill", q: "免許は取った＿＿＿、運転する機会がない。", fr: "I've got my license, but I don't get to drive.",
        o: ["ものの", "ために", "とおりに", "ばかりに"], a: 0,
        e: "We admit a fact (having the license) then temper it (not the opportunity): 〜ものの (concession)." },
      { t: "meaning", q: "「約束したものの、守れなかった」— sens ?",
        o: ["although I promised, I couldn't deliver", "because I promised, I could deliver", "if I promise, I'll keep", "as soon as I promised, I delivered"], a: 0,
        e: "〜ものの = \"although / certainly... but\": a fact is acknowledged, the sequel disappoints the expectation." },
      { t: "nuance", q: "Différence entre 〜ものの et 〜のに :",
        o: ["ものの est plus écrit/posé ; のに ajoute souvent un reproche ou une déception affective", "のに est plus formel", "they have nothing to do", "ものの exprime une cause"], a: 0,
        e: "Both are concessive, but 〜のに often conveys a sense of dissatisfaction/surprise, whereas 〜ものの is more neutral and literary." },
    ],
  },

  {
    id: "g024", g: "〜とはいえ", m: "that said, even though it's said that", f: "普通形 + とはいえ（名・な形は直接可）",
    c: "contrast", lv: 2, rel: ["g023", "g025"],
    note: "We admit a statement (often a general one) and then qualify it: \"certainly X, nevertheless...\". Reality doesn't quite match X's expectations.",
    ex: [
      { jp: "春とはいえ、まだ寒い日が続く。", fr: "Although it's spring, the cold days continue." },
      { jp: "仕事とはいえ、休みなしでは体がもたない。", fr: "Even if it's work, the body can't stand up without rest." },
    ],
    qs: [
      { t: "fill", q: "便利になった＿＿＿、問題がないわけではない。", fr: "It's convenient, but not without its problems.",
        o: ["とはいえ", "からこそ", "おかげで", "ところで"], a: 0,
        e: "We concede (\"it's become practical\") then qualify: 〜とはいえ." },
      { t: "meaning", q: "「プロとはいえ、ミスをすることもある」— sens ?",
        o: ["even if he's a pro, he sometimes makes mistakes", "because he's a pro, he never makes mistakes", "if he was a pro, he'd be wrong", "as soon as he turned pro, he made a mistake"], a: 0,
        e: "〜とはいえ = \"even if we say it's X, in reality...\". We temper the expectation linked to \"pro\"." },
      { t: "nuance", q: "〜とはいえ se place typiquement :",
        o: ["taking an accepted idea and immediately qualifying it", "to express a goal", "to indicate a direct cause", "to locate a formal place"], a: 0,
        e: "〜とはいえ introduces a concession to an idea just admitted (or taken for granted)." },
    ],
  },

  {
    id: "g025", g: "〜にもかかわらず", m: "despite, in spite of, even though", f: "普通形／名 + にもかかわらず",
    c: "contrast", lv: 1, rel: ["g023", "g024"],
    note: "Strong concession: an unexpected result occurs DESPITE a circumstance that should have prevented it. Often a hint of surprise or criticism.",
    ex: [
      { jp: "雨にもかかわらず、試合は行われた。", fr: "Despite the rain, the match went ahead." },
      { jp: "努力したにもかかわらず、結果が出なかった。", fr: "Despite my best efforts, I didn't get any results." },
    ],
    qs: [
      { t: "fill", q: "何度も注意した＿＿＿、彼は同じ失敗を繰り返した。", fr: "Although I warned him repeatedly, he repeated the same mistake.",
        o: ["にもかかわらず", "に応じて", "に基づいて", "をめぐって"], a: 0,
        e: "Result contrary to expectation DESPITE warnings: 〜にもかかわらず." },
      { t: "meaning", q: "「忠告したにもかかわらず」— sens ?",
        o: ["although I advised / despite my advice", "thanks to my advice", "about my advice", "according to my advice"], a: 0,
        e: "〜にもかかわらず = despite / in spite of, with a result contrary to expectation." },
      { t: "nuance", q: "Par rapport à 〜のに, 〜にもかかわらず est :",
        o: ["plus formel/écrit, sans la forte coloration émotionnelle de のに", "more familiar", "for oral use only", "synonyme de から"], a: 0,
        e: "〜にもかかわらず belongs to a sustained register; 〜のに is more oral and often tinged with reproach/disappointment." },
    ],
  },

  {
    id: "g026", g: "〜ながら（も）", m: "while, although (contrast)", f: "Verbe-ます語幹／い形／な形（であり）／名（であり）+ ながら（も）",
    c: "contrast", lv: 2, rel: ["g027"],
    note: "Concessive meaning (not to be confused with the simultaneous ながら \"in doing\"). \"Although A is the case, against all odds B\". Often reinforced by も.",
    ex: [
      { jp: "狭いながらも、楽しい我が家だ。", fr: "Though small, it's our happy home." },
      { jp: "悪いと知りながら、嘘をついてしまった。", fr: "Even though I knew it was wrong, I lied." },
    ],
    qs: [
      { t: "fill", q: "残念＿＿＿、今回は参加を見送ります。", fr: "Although it's regrettable, I'm not taking part this time.",
        o: ["ながら", "によって", "について", "に際して"], a: 0,
        e: "Concession with a な-adjective: 残念ながら = \"although regrettable / with regret\". 〜ながら(も) marks the contrast here." },
      { t: "usage", q: "Dans laquelle 〜ながら a-t-il le sens CONCESSIF (« bien que »), et non « en même temps » ?",
        o: ["体に悪いと知りながら、吸い続けている。", "音楽を聞きながら、勉強する。", "歩きながら、電話する。", "笑いながら、話す。"], a: 0,
        e: "\"Even though he knows it's bad, he continues to smoke\": contrast/concession. The others express two simultaneous actions." },
      { t: "meaning", q: "「小さいながらも、力強い」— sens ?",
        o: ["small but mighty", "small is mighty", "small by making the mighty", "a little about the mighty"], a: 0,
        e: "〜ながらも = concession: \"small though he is, he is nevertheless powerful\"." },
    ],
  },

  {
    id: "g027", g: "〜つつ（も）", m: "while; although (written)", f: "Verbe-ます語幹 + つつ（も）",
    c: "contrast", lv: 2, rel: ["g026"],
    note: "Written register. (1) つつ = two simultaneous actions (≈ ながら); (2) つつも = concession \"while... yet\" (≈ ながらも). 〜つつある = \"to be in the process of\" (evolving).",
    ex: [
      { jp: "悪いと思いつつも、つい食べてしまう。", fr: "Although I think it's bad, I end up eating it." },
      { jp: "景気は回復しつつある。", fr: "The economy is on the road to recovery." },
    ],
    qs: [
      { t: "fill", q: "体に良くないと知り＿＿＿、夜更かしをやめられない。", fr: "Even though I know it's bad for my health, I can't stop staying up.",
        o: ["つつも", "によって", "に応じて", "とともに"], a: 0,
        e: "Concession in written register: 〜つつも = \"all in... yet\"." },
      { t: "meaning", q: "「人口は減少しつつある」— sens de つつある ?",
        o: ["the population is shrinking (evolution in progress)", "the population has finished shrinking", "the population may be shrinking", "the population is not shrinking"], a: 0,
        e: "〜つつある = \"to be in the process of / on the way to\": a gradual process in progress." },
      { t: "nuance", q: "Comparé à 〜ながら, 〜つつ appartient à un registre :",
        o: ["more written/literary", "more familiar and oral", "only for children", "identical at all points"], a: 0,
        e: "〜つつ(も) is the written/outlined equivalent of 〜ながら(も)." },
    ],
  },

  {
    id: "g028", g: "〜くせに", m: "while (yet), while (reproach)", f: "普通形（な形＝な／名＝の）+ くせに",
    c: "contrast", lv: 2, rel: ["g023"],
    note: "Concession with a strong CRITICAL or reproachful/disdainful tone. The subject of the main and subordinate clauses is usually the same. Avoid in polite contexts.",
    ex: [
      { jp: "知っているくせに、教えてくれない。", fr: "He knows, but he won't tell me." },
      { jp: "下手なくせに、いつも自慢している。", fr: "Even though he's bad, he's always bragging." },
    ],
    qs: [
      { t: "fill", q: "自分が悪い＿＿＿、謝ろうとしない。", fr: "Even though he's the one at fault, he won't apologize.",
        o: ["くせに", "おかげで", "ために", "とおりに"], a: 0,
        e: "Concession with reproach (\"he is at fault, and yet...\"): 〜くせに." },
      { t: "nuance", q: "Quelle nuance 〜くせに ajoute-t-il par rapport à 〜のに ?",
        o: ["criticism/blame of the subject", "increased politeness", "a sense of time", "a neutral cause"], a: 0,
        e: "〜くせに is more emotionally charged: it expresses reproach, contempt or irritation, unlike the more neutral 〜のに." },
      { t: "usage", q: "Dans quel cas 〜くせに est-il DÉCONSEILLÉ ?",
        o: ["in a polite message to a superior", "to criticize someone close to you orally", "in a friendly dispute", "in inner monologue"], a: 0,
        e: "Because of its critical nuance, 〜くせに is inappropriate in polite/formal situations (towards a superior, a customer...)." },
    ],
  },

  {
    id: "g029", g: "〜わりに（は）", m: "for, compared to what would be expected, given", f: "普通形（な形＝な／名＝の）+ わりに（は）",
    c: "contrast", lv: 2, rel: ["g023"],
    note: "The result isn't what you'd expect based on some criterion (age, price, effort...). \"For an X, it's surprisingly Y\".",
    ex: [
      { jp: "このレストランは、値段のわりにおいしい。", fr: "This restaurant is good for the price." },
      { jp: "彼は年齢のわりに若く見える。", fr: "He looks young for his age." },
    ],
    qs: [
      { t: "fill", q: "あまり勉強しなかった＿＿＿、いい点が取れた。", fr: "I didn't study much, but I got a good grade.",
        o: ["わりに", "とおりに", "ものなら", "ばかりに"], a: 0,
        e: "The result (good score) is out of keeping with the criterion (few studies): 〜わりに." },
      { t: "meaning", q: "「給料が高いわりに、仕事は楽だ」— sens ?",
        o: ["for a high salary, the work is surprisingly easy", "high wages mean hard work", "despite low wages, the work is hard", "the salary is high for the job"], a: 0,
        e: "〜わりに confronts a criterion (high salary) with an unexpected outcome (easy work)." },
      { t: "nuance", q: "Différence entre 〜わりに et 〜にしては :",
        o: ["très proches ; にしては part d'un standard explicite donné, わりに compare à une attente générale", "わりに exprime une cause", "にしては est familier", "they are opposed"], a: 0,
        e: "Related meanings. 〜にしては relies on an explicitly named standard (\"for a beginner...\"), 〜わりに compares to the level expected in general." },
    ],
  },

  {
    id: "g030", g: "〜一方（で）", m: "one side... the other; while; on the other hand", f: "普通形（な形＝な／である・名＝である）+ 一方（で）",
    c: "contrast", lv: 1, rel: ["g031", "g002"],
    note: "Presents two parallel aspects/trends, often opposed or complementary. Can also mark a simultaneous evolution in two directions.",
    ex: [
      { jp: "都市の人口が増える一方で、地方は過疎化している。", fr: "While the population of the cities was growing, the countryside was being depopulated." },
      { jp: "彼は厳しい一方で、優しい面もある。", fr: "He's stern, but he also has a gentle side." },
    ],
    qs: [
      { t: "fill", q: "輸出が伸びる＿＿＿、輸入は減少している。", fr: "While exports rose, imports fell.",
        o: ["一方で", "おかげで", "ものの", "ながら"], a: 0,
        e: "Two opposing parallel trends (export / import ↘): 〜一方で." },
      { t: "meaning", q: "「彼女は仕事に厳しい一方で、部下思いだ」— sens ?",
        o: ["on the one hand hard-working, on the other caring", "strict, so attentive", "neither severe nor caring", "strict about subordinates"], a: 0,
        e: "〜一方で juxtaposes two facets (severe / considerate)." },
      { t: "nuance", q: "Outre le contraste, 〜一方（だ） peut aussi signifier :",
        o: ["an evolution that's only (getting worse/increasing) in one direction", "a cause", "an order", "a hypothesis"], a: 0,
        e: "〜一方だ at end of sentence = \"only do + V\": 物価は上がる一方だ (\"prices only go up\")." },
    ],
  },

  {
    id: "g031", g: "〜反面／半面", m: "on the other hand (the other side of the same coin)", f: "普通形（な形＝な／である・名＝である）+ 反面",
    c: "contrast", lv: 2, rel: ["g030"],
    note: "Underlines the TWO contradictory FACES of the same subject: a linked advantage and disadvantage. The subject remains the same on both sides.",
    ex: [
      { jp: "この仕事は給料がいい反面、責任が重い。", fr: "The job pays well, but the responsibilities are heavy." },
      { jp: "便利になった反面、人と人のつながりが薄れた。", fr: "It's become practical, but on the other hand, human ties have become weaker." },
    ],
    qs: [
      { t: "fill", q: "この薬はよく効く＿＿＿、副作用も強い。", fr: "This drug is very effective, but has strong side effects.",
        o: ["反面", "おかげで", "うちに", "ながら"], a: 0,
        e: "Two opposite sides of the same coin (effective ↔ side effects): 〜反面." },
      { t: "nuance", q: "Nuance qui distingue 〜反面 de 〜一方で :",
        o: ["反面 oppose deux faces d'UN MÊME sujet ; 一方で peut aussi opposer deux sujets/tendances distincts", "反面 exprime une cause", "一方で est familier", "they are identical in every way"], a: 0,
        e: "〜反面 contrasts two contradictory aspects of one and the same subject. 〜一方で is broader (can compare two different entities)." },
      { t: "meaning", q: "「自由が増えた反面、責任も増えた」— sens ?",
        o: ["more freedom, but also more responsibility", "more freedom, less responsibility", "neither freedom nor responsibility", "freedom from responsibility"], a: 0,
        e: "〜反面 = the counterpart: the advantage is matched by the disadvantage." },
    ],
  },

  {
    id: "g032", g: "〜かと思うと／かと思ったら", m: "hardly... that, and then (sudden change)", f: "Verbe-た／普通形 + かと思うと",
    c: "time", lv: 2, rel: ["g036", "g037"],
    note: "Two almost simultaneous and contrasting events: no sooner has A happened than B occurs (rapid and often unexpected change). Not used for one's own voluntary actions.",
    ex: [
      { jp: "赤ちゃんは泣いたかと思うと、もう笑っている。", fr: "No sooner has the baby cried than he's already laughing." },
      { jp: "空が暗くなったかと思ったら、大雨が降ってきた。", fr: "The sky had barely darkened when a heavy rain fell." },
    ],
    qs: [
      { t: "fill", q: "彼は帰ってきた＿＿＿、すぐにまた出かけた。", fr: "No sooner had he returned than he was out again.",
        o: ["かと思うと", "うちに", "おかげで", "わりに"], a: 0,
        e: "Two almost simultaneous and contrasting actions (go in / come out immediately): 〜かと思うと." },
      { t: "meaning", q: "「泣いていたかと思ったら、もう笑っている」— sens ?",
        o: ["no sooner had he cried than he was already laughing", "he cries because he laughs", "if he cries, he'll laugh", "he cries for laughs"], a: 0,
        e: "〜かと思ったら = sudden change: \"I thought he was crying, and here he is already laughing\"." },
      { t: "usage", q: "Pourquoi « 私は家に着いたかと思うと、すぐに寝た » est-il bizarre ?",
        o: ["かと思うと décrit un changement observé chez autrui, pas une action volontaire du locuteur", "the verb is incorrectly conjugated", "a particle is missing", "meaning is temporal impossible"], a: 0,
        e: "〜かと思うと is used for an observed change (often in someone else), not to describe one's own voluntary action." },
    ],
  },

  /* ===================== TEMPS & SÉQUENCE ===================== */

  {
    id: "g033", g: "〜うちに", m: "while, as long as (take advantage of a state)", f: "Verbe-dico／ている／ない／い形／な形な／名の + うちに",
    c: "time", lv: 1, rel: ["g034"],
    note: "Do something WHILE a favorable state lasts (before it changes). With a verb of state/duration. Also: gradual change \"by dint of...\" (見ているうちに).",
    ex: [
      { jp: "熱いうちに、召し上がってください。", fr: "Eat while it's hot." },
      { jp: "話しているうちに、緊張がほぐれてきた。", fr: "The more I talked, the more my tension dissipated." },
    ],
    qs: [
      { t: "fill", q: "明るい＿＿＿、家に帰りましょう。", fr: "Let's go home while it's still light.",
        o: ["うちに", "あいだに", "とたんに", "うえに"], a: 0,
        e: "Enjoying a state while it lasts (daylight): 〜うちに." },
      { t: "meaning", q: "「考えているうちに、眠ってしまった」— sens ?",
        o: ["while I was thinking, I fell asleep", "because I've been thinking, I've been sleeping", "after thinking, I slept", "I thought about sleeping"], a: 0,
        e: "〜うちに = while (this state lasts); here, a change occurs within this duration." },
      { t: "nuance", q: "Différence entre 〜うちに et 〜あいだに :",
        o: ["うちに insiste sur « avant que l'état ne change » ; あいだに délimite simplement une période donnée", "they are identical", "あいだに exprime une cause", "うちに est familier uniquement"], a: 0,
        e: "〜あいだに = \"during the interval\" (well-defined period). 〜うちに adds the nuance \"let's make the most of it before it changes\"." },
    ],
  },

  {
    id: "g034", g: "〜ないうちに", m: "before (doesn't... happen), as long as doesn't... yet", f: "Verbe-ない + うちに",
    c: "time", lv: 2, rel: ["g033"],
    note: "Act BEFORE a (often undesirable) change occurs. \"As long as it hasn't happened yet.",
    ex: [
      { jp: "雨が降らないうちに、洗濯物を取り込もう。", fr: "Let's get the laundry in before it rains." },
      { jp: "忘れないうちに、メモしておこう。", fr: "Let's make a note of it before we forget." },
    ],
    qs: [
      { t: "fill", q: "暗くなら＿＿＿、帰った方がいい。", fr: "Better get home before it gets dark.",
        o: ["ないうちに", "るうちに", "たうちに", "ないあいだ"], a: 0,
        e: "Act BEFORE an unwanted change happens (at night): 〜ないうちに." },
      { t: "meaning", q: "「冷めないうちに食べてください」— sens ?",
        o: ["eat before it (gets) cold", "eat after it has cooled", "eat because it's cold", "eat while it's cold"], a: 0,
        e: "〜ないうちに = before (cooling) occurs." },
      { t: "order", q: "Reconstituez la phrase. Quel segment va à la place ★ ?",
        frame: "若くて ＿＿ ＿★＿ ＿＿ 始めた方がいい。",
        o: ["元気な", "うちに", "新しいこと", "を"], a: 1,
        e: "Order: 元気な → うちに → 新しいこと → を。「若くて元気なうちに、新しいことを始めた方がいい」. TO ★: うちに." },
    ],
  },

  {
    id: "g035", g: "〜次第", m: "as soon as, as soon as (formal)", f: "Verbe-ます語幹／動作性名詞 + 次第",
    c: "time", lv: 2, rel: ["g036"],
    note: "As soon as a precondition is met, the next action is taken. Formal/polite register. The 2nd part is voluntary (≠ past facts; no past tense after 次第).",
    ex: [
      { jp: "詳細が分かり次第、ご連絡いたします。", fr: "As soon as I have the details, I'll be in touch." },
      { jp: "雨がやみ次第、出発します。", fr: "As soon as the rain stops, we'll be off." },
    ],
    qs: [
      { t: "fill", q: "準備ができ＿＿＿、始めましょう。", fr: "Let's get started as soon as preparations are complete.",
        o: ["次第", "うちに", "とたんに", "あいだに"], a: 0,
        e: "\"As soon as (the preparation is done)\" in polite register: Verbe-ます語幹 + 次第." },
      { t: "usage", q: "Quelle phrase est CORRECTE avec 次第 ?",
        o: ["到着し次第、電話します。", "到着した次第、電話しました。", "到着する次第、電話する。", "到着し次第、電話した。"], a: 0,
        e: "次第 is built on the base ます (到着し+次第) and the continuation is NOT in the past tense (action to come, voluntary). So 到着し次第、電話します。" },
      { t: "meaning", q: "「結果が出次第、お知らせします」— quand l'avertira-t-on ?",
        o: ["as soon as the result is available", "before income", "long after the result", "only if the result is good"], a: 0,
        e: "〜次第 = immediately after the condition is met." },
    ],
  },

  {
    id: "g036", g: "〜たとたん（に）", m: "at the very moment when, just as", f: "Verbe-た + とたん（に）",
    c: "time", lv: 2, rel: ["g037", "g032"],
    note: "At the precise moment when A ends, B (often unexpected, involuntary) occurs immediately. B is an observed fact, not an intention. Builds on Verbe-た.",
    ex: [
      { jp: "立ち上がったとたん、めまいがした。", fr: "The moment I stood up, I felt dizzy." },
      { jp: "ドアを開けたとたんに、猫が飛び出した。", fr: "Just as I opened the door, the cat jumped out." },
    ],
    qs: [
      { t: "fill", q: "電車を降り＿＿＿、雨が降り出した。", fr: "The moment I got off the train, it started raining.",
        o: ["たとたん", "ないうちに", "次第", "あいだに"], a: 0,
        e: "At the precise moment when the action ends, an unexpected fact occurs: Verbe-た + とたん." },
      { t: "usage", q: "Pourquoi « 家に帰ったとたん、宿題をしよう » est-il incorrect ?",
        o: ["とたん exige un fait constaté/involontaire en 2e partie, pas une volonté/un ordre", "the verb is misplaced", "you need a name in front", "とたん ne se met jamais en début"], a: 0,
        e: "After 〜たとたん, the 2nd proposition describes an involuntary/constant event. An intention (〜しよう) or an order is impossible: we'd say 〜次第 or 〜たら instead." },
      { t: "meaning", q: "「彼の顔を見たとたん、泣き出した」— sens ?",
        o: ["the moment I saw his face, I burst into tears", "before I saw his face, I cried", "I cried to see his face", "I saw his face because I cried"], a: 0,
        e: "〜たとたん = at the precise moment of the action, immediate and spontaneous triggering of the sequel." },
    ],
  },

  {
    id: "g037", g: "〜か〜ないかのうちに", m: "hardly... that, almost even before", f: "Verbe-dico か + Verbe-ない かのうちに",
    c: "time", lv: 3, rel: ["g036", "g032"],
    note: "Two almost simultaneous events: B occurs just as A is barely begun/completed. Even tighter than 〜たとたん.",
    ex: [
      { jp: "ベルが鳴るか鳴らないかのうちに、彼は教室を出た。", fr: "The bell had hardly rung before he was out of the classroom." },
      { jp: "横になるかならないかのうちに、眠ってしまった。", fr: "As soon as I lay down, I fell asleep." },
    ],
    qs: [
      { t: "fill", q: "「いただきます」と言う＿＿＿、彼はもう食べ始めた。", fr: "No sooner had he said \"itadakimasu\" than he began to eat.",
        o: ["か言わないかのうちに", "ないうちに", "とたんで", "次第に"], a: 0,
        e: "Structure 〜か〜ないかのうちに: \"no sooner had he said X than...\". Form: 言うか言わないかのうちに." },
      { t: "meaning", q: "「駅に着くか着かないかのうちに、電車が来た」— sens ?",
        o: ["no sooner arrived (or almost not yet) at the station than the train came", "long after arriving", "before leaving for the station", "because he arrived at the station"], a: 0,
        e: "〜か〜ないかのうちに = near-perfect simultaneity: the 2nd event occurs at the exact instant of the 1st." },
      { t: "nuance", q: "Par rapport à 〜たとたん, 〜か〜ないかのうちに insiste sur :",
        o: ["even closer simultaneity (Has barely begun)", "a cause", "a contrast", "a long life"], a: 0,
        e: "〜か〜ないかのうちに emphasizes that B arrives BEFORE A is even fully completed: almost total overlap." },
    ],
  },

  {
    id: "g038", g: "〜て以来", m: "since, since then", f: "Verbe-て + 以来（名詞＋以来も可）",
    c: "time", lv: 2, rel: ["g033"],
    note: "From a past event, a state/habit continues uninterrupted until now. Not for the future or a short period of time.",
    ex: [
      { jp: "日本に来て以来、毎日日記をつけている。", fr: "Since I came to Japan, I've kept a diary every day." },
      { jp: "卒業以来、彼には会っていない。", fr: "I haven't seen him since I graduated." },
    ],
    qs: [
      { t: "fill", q: "引っ越して＿＿＿、近所付き合いが増えた。", fr: "Since I've moved, my neighborly relationships have multiplied.",
        o: ["以来", "うちに", "とたん", "次第"], a: 0,
        e: "State that has lasted since a past event: Verbe-て + 以来." },
      { t: "usage", q: "Quelle phrase est INCORRECTE avec 〜て以来 ?",
        o: ["来週会って以来、連絡します。", "入社して以来、休んでいない。", "けがをして以来、運動していない。", "別れて以来、会っていない。"], a: 0,
        e: "〜て以来 starts from a PAST event to now; a future (来週 = next week) is impossible." },
      { t: "meaning", q: "「あの事件以来、町は静かになった」— sens ?",
        o: ["since this incident, the town has become calm", "before this incident", "during this incident", "because of the tranquillity, an incident"], a: 0,
        e: "〜以来 = since (this event), with a state that endures." },
    ],
  },

  {
    id: "g039", g: "〜てからでないと／てからでなければ", m: "as long as... not first, unless... beforehand", f: "Verbe-て + からでないと／からでなければ",
    c: "condition", lv: 2, rel: ["g040"],
    note: "A precondition is ESSENTIAL: without first accomplishing A, B is impossible. The 2nd part is often negative or expresses impossibility.",
    ex: [
      { jp: "予約してからでないと、入れません。", fr: "You can't get in without a reservation." },
      { jp: "実物を見てからでなければ、買うかどうか決められない。", fr: "Until I see the real thing, I can't decide whether to buy or not." },
    ],
    qs: [
      { t: "fill", q: "手を洗って＿＿＿、食べてはいけません。", fr: "You mustn't eat without washing your hands first.",
        o: ["からでないと", "以来", "うちに", "とたんに"], a: 0,
        e: "Essential prerequisite (wash hands) before action: 〜てからでないと + (impossibility/prohibition)." },
      { t: "meaning", q: "「許可を取ってからでなければ、使えない」— sens ?",
        o: ["impossible to use without first obtaining authorization", "can be used even without authorization", "we use and then request authorization", "authorization prevents use"], a: 0,
        e: "〜てからでなければ = without first completing A, B is impossible." },
      { t: "nuance", q: "La 2e proposition après 〜てからでないと est typiquement :",
        o: ["négative / d'impossibilité (〜ない・できない)", "an affirmative order", "a question", "an exclamation"], a: 0,
        e: "The reason \"the precondition is missing\" almost always leads to a negative or impossible outcome." },
    ],
  },

  {
    id: "g040", g: "〜てはじめて", m: "it's only after... that, only once...", f: "Verbe-て + はじめて",
    c: "time", lv: 2, rel: ["g039"],
    note: "Awareness/realization only occurs AFTER A has been experienced. Often: \"it's only by doing A that we understand/realize B\".",
    ex: [
      { jp: "親になってはじめて、親のありがたみが分かった。", fr: "It wasn't until I became a parent that I understood the gratitude owed to parents." },
      { jp: "失ってはじめて、その大切さに気づく。", fr: "It's only once you've lost it that you realize how important it is." },
    ],
    qs: [
      { t: "fill", q: "病気になっ＿＿＿、健康の大切さが分かった。", fr: "It wasn't until I fell ill that I understood the importance of health.",
        o: ["てはじめて", "てからでないと", "たとたん", "て以来"], a: 0,
        e: "Realization that happens ONLY AFTER the experience (getting sick): 〜てはじめて." },
      { t: "meaning", q: "「外国に住んではじめて、母国のよさが分かった」— sens ?",
        o: ["it was only after living abroad that I understood the qualities of my country", "before living abroad", "while I was living abroad without understanding anything", "I've lived abroad to understand"], a: 0,
        e: "〜てはじめて = understanding occurs only AFTER the lived experience." },
      { t: "nuance", q: "〜てはじめて se distingue de 〜てから (« après ») car il :",
        o: ["underlines an awareness that wasn't possible before", "indicates a simple neutral succession", "expresses a cause", "marks the future"], a: 0,
        e: "〜てから notes a simple succession. 〜てはじめて insists, \"NOT before that; it's only then that...\"." },
    ],
  },

  /* ===================== CONDITION & CAUSE ===================== */

  {
    id: "g041", g: "〜限り（は）／ない限り", m: "as long as / unless ; insofar as", f: "Verbe-dico／ている／ない／名である + 限り",
    c: "condition", lv: 1, rel: ["g042", "g044"],
    note: "(1) 〜限り(は) = as long as (this condition lasts); (2) 〜ない限り = unless/unless; (3) 〜限り = \"as far as\" (見る限り, 知る限り = as far as I know/see).",
    ex: [
      { jp: "体が丈夫な限り、働き続けたい。", fr: "As long as I'm healthy, I want to keep working." },
      { jp: "謝らない限り、許さない。", fr: "Until he apologizes, I won't forgive him." },
    ],
    qs: [
      { t: "fill", q: "練習しない＿＿＿、上達しない。", fr: "Unless you practice, you won't progress.",
        o: ["限り", "うちに", "とたん", "以来"], a: 0,
        e: "〜ない限り = unless / as long as not... not. Without training, no progress." },
      { t: "meaning", q: "「私の知る限り、彼は正直な人だ」— sens de 知る限り ?",
        o: ["as far as I know", "as far as I know", "as soon as I know", "because I know"], a: 0,
        e: "〜限り after 知る／見る = \"within the limit of what I know/see\" = as far as I know." },
      { t: "fill", q: "学生である＿＿＿、勉強が本分だ。", fr: "As long as you're a student, study is your primary duty.",
        o: ["限り", "ながら", "わりに", "ものの"], a: 0,
        e: "〜限り(は) = as long as this condition (being a student) is true." },
    ],
  },

  {
    id: "g042", g: "〜からには／からは", m: "since, as long as (so it must be...)", f: "普通形（名・な形＝である）+ からには",
    c: "condition", lv: 2, rel: ["g044", "g043"],
    note: "Since something is established/decided, a resolution, obligation or strong expectation logically follows. What follows often expresses a determination (〜べきだ・〜つもりだ・〜なければならない).",
    ex: [
      { jp: "やると言ったからには、最後までやる。", fr: "As long as I say I'll do it, I'll do it all the way." },
      { jp: "引き受けたからには、責任を持ってやります。", fr: "Since I've accepted, I'll take it seriously." },
    ],
    qs: [
      { t: "fill", q: "試合に出る＿＿＿、勝ちたい。", fr: "As long as I'm involved in the match, I want to win.",
        o: ["からには", "うちに", "とたん", "わりに"], a: 0,
        e: "As a decision is made, a resolution follows: 〜からには + determination." },
      { t: "usage", q: "Quelle suite convient le MIEUX après 「約束したからには」 ?",
        o: ["必ず守るべきだ。", "守れないかもしれない。", "守るかどうか分からない。", "守りたくない。"], a: 0,
        e: "〜からには calls for a resolution/obligation sequence: \"we MUST keep our word\". A hesitant sequence contradicts the logic of からには." },
      { t: "meaning", q: "「日本に来たからには、日本語を覚えたい」— sens ?",
        o: ["since I came to Japan, I want to learn Japanese", "although I came to Japan", "before coming to Japan", "if I come to Japan"], a: 0,
        e: "〜からには = \"as long as (this is the case), then logically...\"." },
    ],
  },

  {
    id: "g043", g: "〜ことだから", m: "given that it is (such and such a person), knowing...", f: "名詞＋の + ことだから",
    c: "condition", lv: 2, rel: ["g042"],
    note: "We make an assumption based on the well-known character of a person (or group). \"Knowing X (who is always like this), he will surely...\". The noun is almost always a person.",
    ex: [
      { jp: "まじめな彼のことだから、きっと約束を守るだろう。", fr: "Knowing how serious he is, he's sure to keep his word." },
      { jp: "時間に正確な田中さんのことだから、もう着いているはずだ。", fr: "Tanaka is always punctual, so he must have arrived by now." },
    ],
    qs: [
      { t: "fill", q: "心配性の母＿＿＿、何度も電話してくるだろう。", fr: "Knowing my anxious mother, she'll probably call several times.",
        o: ["のことだから", "について", "にとって", "に対して"], a: 0,
        e: "Assumption based on a person's known character: 名詞＋の + ことだから." },
      { t: "meaning", q: "「努力家の彼のことだから、合格するでしょう」— sur quoi se fonde la supposition ?",
        o: ["on the well-known hard-working nature of the person", "on a settlement", "about chance", "on a statistic"], a: 0,
        e: "〜ことだから relies on the subject's known personality/habits to predict behavior." },
      { t: "nuance", q: "Le nom placé devant 〜ことだから est presque toujours :",
        o: ["a person (or group) whose character is known", "a place", "a date", "an abstract object"], a: 0,
        e: "〜ことだから is used to infer the behavior of a PERSON based on what we know about them." },
    ],
  },

  {
    id: "g044", g: "〜以上（は）", m: "since, since, since", f: "普通形（名・な形＝である）+ 以上（は）",
    c: "condition", lv: 2, rel: ["g042"],
    note: "Very close to 〜からには. Since a fact is established, a logical consequence (obligation, resolution, expectation) is required. Slightly more formal and categorical.",
    ex: [
      { jp: "約束した以上は、守らなければならない。", fr: "Once you've made a promise, you have to keep it." },
      { jp: "学生である以上、規則に従うべきだ。", fr: "As long as you're a student, you have to follow the rules." },
    ],
    qs: [
      { t: "fill", q: "引き受けた＿＿＿、途中で投げ出すわけにはいかない。", fr: "Once I've accepted, I can't give up along the way.",
        o: ["以上", "うちに", "わりに", "とたん"], a: 0,
        e: "A fact being established (having accepted), a logical obligation follows: 〜以上（は）." },
      { t: "nuance", q: "Entre 〜以上（は） et 〜からには :",
        o: ["sens très proche ; 以上 est un peu plus formel/logique, からには insiste sur la détermination personnelle", "they are opposed", "以上 exprime le temps", "からには est uniquement écrit"], a: 0,
        e: "Quasi-synonyms: both connect an established fact with an obligatory consequence. 〜以上 sounds more formal/reasoned." },
      { t: "meaning", q: "「日本で働く以上、ビザが必要だ」— sens ?",
        o: ["as long as you work in Japan, a visa is required", "before working in Japan", "even though we work in Japan", "if we ever worked in Japan"], a: 0,
        e: "〜以上 = since (this fact is stated), it necessarily follows that...." },
    ],
  },

  {
    id: "g045", g: "〜だけに", m: "precisely because, all the more so since", f: "普通形（名・な形＝な／である）+ だけに",
    c: "condition", lv: 2, rel: ["g046"],
    note: "A cause being marked, the effect is all the more accentuated (often a reinforced feeling). Also: a result contrary to the expectation linked to this cause (increased disappointment).",
    ex: [
      { jp: "期待していただけに、結果が残念だった。", fr: "Precisely because I was counting on it, the result was all the more disappointing." },
      { jp: "プロだけに、技術が違う。", fr: "Precisely because he's a pro, the technique is different." },
    ],
    qs: [
      { t: "fill", q: "一生懸命練習した＿＿＿、負けて悔しい。", fr: "It's precisely because I've been training so hard that defeat is all the more galling.",
        o: ["だけに", "うちに", "とたん", "わりに"], a: 0,
        e: "The cause (having trained hard) accentuates the feeling (frustration) all the more: 〜だけに." },
      { t: "meaning", q: "「責任者だけに、彼の発言は重い」— sens ?",
        o: ["precisely because he is responsible, his words carry weight", "although he is responsible", "about the manager", "unless he is responsible"], a: 0,
        e: "〜だけに = the quality (being responsible) reinforces the consequence (the weight of one's words)." },
      { t: "nuance", q: "〜だけに peut aussi exprimer :",
        o: ["a disappointment/effect all the more marked when the result runs counter to expectations", "a goal", "a simple succession", "a ban"], a: 0,
        e: "When the expectation linked to the cause is disappointed, 〜だけに emphasizes that the reaction (regret, surprise) is reinforced." },
    ],
  },

  {
    id: "g046", g: "〜ばかりに", m: "just because, for the sole (bad) reason that", f: "普通形（な形＝な／である・名＝である）+ ばかりに",
    c: "condition", lv: 2, rel: ["g045"],
    note: "A single cause (often minor or regrettable) leads to a NEGATIVE consequence. The speaker regrets this causal link. ≠ だけに (which is not especially negative).",
    ex: [
      { jp: "一言多く言ったばかりに、けんかになった。", fr: "Just for saying one word too many, we had a fight." },
      { jp: "保証書をなくしたばかりに、修理が有料になった。", fr: "Just for having lost the warranty, repairs have become costly." },
    ],
    qs: [
      { t: "fill", q: "うっかりサインした＿＿＿、大変なことになった。", fr: "I've put myself in a difficult situation just by signing up carelessly.",
        o: ["ばかりに", "だけに", "うちに", "わりに"], a: 0,
        e: "A single, regretted cause leads to a bad result: 〜ばかりに." },
      { t: "nuance", q: "Quelle différence entre 〜ばかりに et 〜だけに ?",
        o: ["ばかりに = cause unique menant à un résultat NÉGATIF regretté ; だけに = « d'autant plus », pas forcément négatif", "they are identical", "だけに est familier", "ばかりに exprime le temps"], a: 0,
        e: "〜ばかりに insists on the regrettable cause of a bad result. 〜だけに reinforces an effect (positive or negative) without this systematic regret." },
      { t: "meaning", q: "「油断したばかりに、試合に負けた」— sens ?",
        o: ["just for letting my guard down, I lost the game", "although I let my guard down", "precisely because I'm strong", "before lowering your guard"], a: 0,
        e: "〜ばかりに = for the sole (and unfortunate) reason that..., hence an unfortunate result." },
    ],
  },

  {
    id: "g047", g: "〜せいで／せいか／せいだ", m: "because of (negative result); perhaps because of", f: "普通形（な形＝な／名＝の）+ せいで／せいか",
    c: "condition", lv: 1, rel: ["g048"],
    note: "Attributes a NEGATIVE result to a cause (often to reject fault). 〜せいか = \"perhaps because of\" (uncertain cause). Contrast with 〜おかげで (cause of a good result).",
    ex: [
      { jp: "寝不足のせいで、頭が痛い。", fr: "Because of the lack of sleep, I have a headache." },
      { jp: "年のせいか、最近疲れやすい。", fr: "Maybe it's my age, I get tired easily these days." },
    ],
    qs: [
      { t: "fill", q: "台風の＿＿＿、電車が止まってしまった。", fr: "The typhoon brought trains to a standstill.",
        o: ["せいで", "おかげで", "ために", "ように"], a: 0,
        e: "Cause of NEGATIVE result (trains stopped): 〜せいで." },
      { t: "nuance", q: "Pour un BON résultat (« grâce à vous, j'ai réussi »), on emploie :",
        o: ["おかげで", "せいで", "せいか", "ばかりに"], a: 0,
        e: "〜おかげで attributes a good result to a cause (recognition). 〜せいで is reserved for negative results." },
      { t: "meaning", q: "「暑さのせいか、食欲がない」— que signale か ?",
        o: ["the cause is assumed, uncertain", "that the cause is certain", "that there is no cause", "a good result"], a: 0,
        e: "〜せいか = \"perhaps because of\": the speaker isn't sure of the cause." },
    ],
  },

  /* ===================== MODALITÉ & JUGEMENT ===================== */

  {
    id: "g048", g: "〜はずだ", m: "it should (logically), I'm pretty sure that", f: "普通形（な形＝な／名＝の）+ はずだ",
    c: "modality", lv: 1, rel: ["g049", "g050"],
    note: "Belief based on reasoning/clues: \"according to all logic, it must be so\". Also 〜はずだった = \"it was supposed to be... (but it wasn't)\".",
    ex: [
      { jp: "彼は約束したから、来るはずだ。", fr: "He promised, so he should come." },
      { jp: "この時間なら、店はまだ開いているはずだ。", fr: "By now, the store should still be open." },
    ],
    qs: [
      { t: "fill", q: "メールを送ったのだから、もう届いている＿＿＿。", fr: "Since I've sent the e-mail, it should have arrived by now.",
        o: ["はずだ", "わけがない", "ものだ", "ことだ"], a: 0,
        e: "Logical conclusion based on a fact (email sent): 〜はずだ." },
      { t: "meaning", q: "「鍵をかけたはずなのに、開いている」— sens de はず ?",
        o: ["I'm (logically) sure I locked the door.", "I hope I closed", "I want to close", "I have to close"], a: 0,
        e: "〜はず = logical conviction. Here contradicted by the facts (\"and yet it's open\")." },
      { t: "nuance", q: "Différence entre 〜はずだ et 〜べきだ :",
        o: ["はずだ = prévision logique (« ça doit être ») ; べきだ = obligation morale (« on doit »)", "they are identical", "はずだ est un ordre", "べきだ est une supposition"], a: 0,
        e: "〜はずだ reasons about what IS probably true; 〜べきだ is about what SHOULD be done (should)." },
    ],
  },

  {
    id: "g049", g: "〜はずがない／はずはない", m: "it's impossible that, it can't be", f: "普通形（な形＝な／名＝の）+ はずがない",
    c: "modality", lv: 1, rel: ["g048", "g051"],
    note: "Firmly denies a possibility on the basis of reasoning: \"there is no logical reason why this should be the case\". More reasoned than わけがない (often more emotional).",
    ex: [
      { jp: "あんなに練習した彼が、負けるはずがない。", fr: "Having trained so hard, it's impossible for him to lose." },
      { jp: "そんな高い物が売れるはずがない。", fr: "It's impossible for something this expensive to sell." },
    ],
    qs: [
      { t: "fill", q: "正直な彼が、嘘をつく＿＿＿。", fr: "As an honest man, it's impossible for him to lie.",
        o: ["はずがない", "はずだ", "に違いない", "ものだ"], a: 0,
        e: "Strong logical negation: 〜はずがない = \"there's no reason why...\"." },
      { t: "meaning", q: "「彼女がそんなことを言うはずがない」— sens ?",
        o: ["it's impossible for her to say such a thing", "she should say that", "she must have said", "she has to say it"], a: 0,
        e: "〜はずがない = logical exclusion of a possibility." },
      { t: "nuance", q: "〜はずがない vs 〜に違いない :",
        o: ["はずがない nie (impossible) ; に違いない affirme avec certitude (« ce doit forcément être »)", "they are synonymous", "はずがない affirme", "に違いない nie"], a: 0,
        e: "These are two opposite poles of conviction: 〜に違いない (necessarily true) ↔ 〜はずがない (necessarily false)." },
    ],
  },

  {
    id: "g050", g: "〜わけだ", m: "so it's that, which explains that, that's why", f: "普通形（な形＝な／である・名＝である／な／という）+ わけだ",
    c: "modality", lv: 1, rel: ["g051", "g052"],
    note: "Draws a natural logical conclusion from the above (\"this means that...\", \"this explains that...\"). Often a realization: \"ah, so that's why!",
    ex: [
      { jp: "3年も日本にいたのか。日本語が上手なわけだ。", fr: "You were in Japan for 3 years? No wonder your Japanese is good." },
      { jp: "計算すると、一人千円払えばいいわけだ。", fr: "If you do the math, that works out at a thousand yen per person." },
    ],
    qs: [
      { t: "fill", q: "エアコンが壊れているのか。どうりで暑い＿＿＿。", fr: "Air conditioning on the blink? That's why it's so hot.",
        o: ["わけだ", "わけがない", "わけにはいかない", "はずがない"], a: 0,
        e: "Logical conclusion/explanation of what we've just learned: 〜わけだ (\"this is why...\"). Underlined by どうりで." },
      { t: "meaning", q: "「彼はパリ育ちだ。フランス語が話せるわけだ」— sens de わけだ ?",
        o: ["which explains why he speaks French", "he can't speak French", "he shouldn't speak French", "he has to speak French"], a: 0,
        e: "〜わけだ = natural logical consequence: \"hence the fact that...\"." },
      { t: "nuance", q: "Quel mot accompagne souvent 〜わけだ pour marquer « voilà pourquoi » ?",
        o: ["どうりで", "もしかして", "まさか", "せめて"], a: 0,
        e: "どうりで（道理で）+ 〜わけだ expresses \"so that explains it; no wonder that...\"." },
    ],
  },

  {
    id: "g051", g: "〜わけではない／わけでもない", m: "it's not (necessarily) that, it doesn't mean that", f: "普通形（な形＝な／という・名＝という）+ わけではない",
    c: "modality", lv: 1, rel: ["g050", "g052"],
    note: "Partially denies an inference or impression: \"it is not (totally) the case that...\". Nuanced negation, not absolute (≠ ない which denies completely).",
    ex: [
      { jp: "嫌いなわけではないが、あまり食べない。", fr: "It's not that I don't like it, but I don't eat much of it." },
      { jp: "高ければ必ず良いというわけではない。", fr: "Just because it's expensive doesn't mean it's good." },
    ],
    qs: [
      { t: "fill", q: "毎日料理をするが、料理が好きという＿＿＿。", fr: "I cook every day, but that doesn't mean I love cooking.",
        o: ["わけではない", "わけにはいかない", "に違いない", "はずだ"], a: 0,
        e: "Nuanced negation of an inference (\"to cook ≠ to like to cook\"): 〜わけではない." },
      { t: "meaning", q: "「お金がないわけではないが、無駄遣いはしたくない」— sens ?",
        o: ["it's not that I don't have money, but I don't want to waste it.", "I have absolutely no money", "I have to spend money", "it's impossible for me to have money"], a: 0,
        e: "〜わけではない attenuates: \"it's not (exactly) that...\"." },
      { t: "nuance", q: "Quelle est la différence entre 「行きたくない」 et 「行きたくないわけではない」 ?",
        o: ["the 1st clearly denies envy; the 2nd says \"it's not that I don't want to\" (partial/nuanced envy)", "they are identical", "the 2nd is an obligation", "the 2nd is more negative"], a: 0,
        e: "〜わけではない transforms a trenchant negation into an attenuated/partial one." },
    ],
  },

  {
    id: "g052", g: "〜わけにはいかない", m: "we can't (afford to), it's not feasible to", f: "Verbe-dico／ない + わけにはいかない",
    c: "modality", lv: 1, rel: ["g055", "g056"],
    note: "SOCIAL, MORAL or psychological impossibility (not a physical incapacity): we can't do it because of circumstances, obligations, conscience. In the negative form: 〜ないわけにはいかない = we can't NOT (we must).",
    ex: [
      { jp: "大事な会議だから、休むわけにはいかない。", fr: "This is an important meeting, and I can't afford to be absent." },
      { jp: "約束したから、行かないわけにはいかない。", fr: "I promised, so I can't not go." },
    ],
    qs: [
      { t: "fill", q: "みんなが頑張っているのに、自分だけ帰る＿＿＿。", fr: "While everyone's working hard, I can't go home alone.",
        o: ["わけにはいかない", "わけではない", "に違いない", "はずだ"], a: 0,
        e: "Moral/social impossibility (for the sake of others): 〜わけにはいかない." },
      { t: "nuance", q: "「泳げないので、わけにはいかない」 est INCORRECT. Pourquoi ?",
        o: ["わけにはいかない exprime une impossibilité morale/sociale, pas une incapacité physique", "the verb is misplaced", "you need a name in front", "it's too polite"], a: 0,
        e: "For INCAPACITY (not being able to swim), we say 泳げない. 〜わけにはいかない refers to an impossibility due to circumstances/awareness, not lack of ability." },
      { t: "meaning", q: "「秘密だから、教えるわけにはいかない」— sens ?",
        o: ["it's a secret, I can't (allow myself to) say it", "it's a secret, I must say", "it's no secret", "I can tell easily"], a: 0,
        e: "〜わけにはいかない = it's not feasible (morally/socially) to do so." },
    ],
  },

  {
    id: "g053", g: "〜に違いない", m: "it has to be, without a doubt", f: "普通形（な形・名は語幹）+ に違いない",
    c: "modality", lv: 1, rel: ["g049"],
    note: "Strong subjective conviction based on clues: \"I'm almost certain\". More assertive than 〜だろう, less categorical than objective certainty.",
    ex: [
      { jp: "電気が消えている。もう寝たに違いない。", fr: "The light's out. He must be asleep already." },
      { jp: "この字は彼女が書いたに違いない。", fr: "This writing is necessarily his." },
    ],
    qs: [
      { t: "fill", q: "あんなに荷物が多いのだから、旅行に行く＿＿＿。", fr: "With so much luggage, he's bound to take a trip.",
        o: ["に違いない", "わけにはいかない", "はずがない", "わけではない"], a: 0,
        e: "Strong belief based on an index (luggage): 〜に違いない." },
      { t: "meaning", q: "「彼は何か隠しているに違いない」— sens ?",
        o: ["he must be hiding something (I'm convinced)", "he hides nothing", "he should be hiding something", "he's got to be hiding something"], a: 0,
        e: "〜に違いない = subjective certainty: \"beyond doubt\"." },
      { t: "nuance", q: "Classez du plus au moins sûr : だろう / に違いない / かもしれない.",
        o: ["に違いない > だろう > かもしれない", "かもしれない > だろう > に違いない", "だろう > に違いない > かもしれない", "all equivalent"], a: 0,
        e: "Decreasing degree of conviction: 〜に違いない (almost certain) > 〜だろう (probable) > 〜かもしれない (possible)." },
    ],
  },

  {
    id: "g054", g: "〜べきだ／べきではない", m: "one should, one should not / one should not", f: "Verbe-dico + べきだ（するべき＝すべきも可）",
    c: "modality", lv: 1, rel: ["g048"],
    note: "Moral duty, strong advice based on what is right/normal in society. Does not express an absolute legal rule (≠ なければならない). Not for oneself with a nuance of external order.",
    ex: [
      { jp: "約束は守るべきだ。", fr: "We should keep our promises." },
      { jp: "人の悪口を言うべきではない。", fr: "We shouldn't speak ill of others." },
    ],
    qs: [
      { t: "fill", q: "風邪なら、無理せず休む＿＿＿。", fr: "If you have a cold, you should rest without straining yourself.",
        o: ["べきだ", "わけにはいかない", "に違いない", "はずがない"], a: 0,
        e: "Moral advice/duty: 〜べきだ." },
      { t: "nuance", q: "Différence entre 〜べきだ et 〜なければならない :",
        o: ["べきだ = devoir moral/conseil (« il faudrait ») ; なければならない = nécessité/obligation incontournable (« il faut absolument »)", "they are identical", "べきだ est plus fort", "なければならない est un conseil"], a: 0,
        e: "〜べきだ comes under moral judgment (what is right). 〜なければならない expresses a concrete/unavoidable obligation." },
      { t: "usage", q: "Forme correcte de la négation de 〜べきだ :",
        o: ["言うべきではない", "言わないべきだ", "言うべきだない", "言うまいべき"], a: 0,
        e: "The negation is べき: 〜べきではない. (We don't put the verb in the negative before べき.)" },
    ],
  },

  {
    id: "g055", g: "〜ざるを得ない", m: "not being able to do otherwise than, being forced to", f: "Verbe-ない形の語幹 + ざるを得ない（する→せざるを得ない）",
    c: "modality", lv: 2, rel: ["g056", "g052"],
    note: "We are compelled by circumstances to do something we didn't want to do. Written/formal register. Exception: する → せざるを得ない.",
    ex: [
      { jp: "台風のため、試合は中止せざるを得ない。", fr: "The typhoon forced us to cancel the match." },
      { jp: "上司の命令だから、従わざるを得ない。", fr: "It's an order from my superior, so I'm forced to obey." },
    ],
    qs: [
      { t: "fill", q: "証拠がこれだけあれば、認め＿＿＿。", fr: "With so much evidence, we're forced to admit it.",
        o: ["ざるを得ない", "わけにはいかない", "に違いない", "はずがない"], a: 0,
        e: "Constraint imposed by circumstances (evidence): 〜ざるを得ない." },
      { t: "usage", q: "Forme correcte de する avec 〜ざるを得ない :",
        o: ["せざるを得ない", "しざるを得ない", "するざるを得ない", "さざるを得ない"], a: 0,
        e: "Irregular exception: する → せざるを得ない." },
      { t: "meaning", q: "「赤字続きで、閉店せざるを得なかった」— sens ?",
        o: ["repeated deficits: we were forced to close down", "we closed with pleasure", "we didn't close", "we almost closed"], a: 0,
        e: "〜ざるを得ない = to be obliged/contracted (with no other choice possible)." },
    ],
  },

  {
    id: "g056", g: "〜ないわけにはいかない", m: "you can't not, you have to.", f: "Verbe-ない + わけにはいかない",
    c: "modality", lv: 2, rel: ["g052", "g055"],
    note: "Double negation = obligation due to a social/moral duty: \"it's not possible NOT to do it\". Often reluctantly, out of duty.",
    ex: [
      { jp: "招待されたから、出席しないわけにはいかない。", fr: "As I'm invited, I can't not attend." },
      { jp: "親に頼まれては、手伝わないわけにはいかない。", fr: "My parents asked me to, so I can't not help." },
    ],
    qs: [
      { t: "fill", q: "世話になった人の頼みだから、引き受け＿＿＿。", fr: "It's a request from someone to whom I owe a lot, so I can't refuse.",
        o: ["ないわけにはいかない", "るわけにはいかない", "るはずがない", "ないことはない"], a: 0,
        e: "Moral obligation (through recognition): 〜ないわけにはいかない = \"I am obliged to accept\"." },
      { t: "meaning", q: "「みんなの前で約束した以上、守らないわけにはいかない」— sens ?",
        o: ["I am obliged to keep my word (impossible not to keep)", "I can break my word", "I don't have to keep my word", "it's impossible to keep your word"], a: 0,
        e: "Double negation 〜ないわけにはいかない = obligation: \"impossible not to...\"." },
      { t: "nuance", q: "〜ないわけにはいかない et 〜ざるを得ない : différence de registre/nuance ?",
        o: ["ないわけにはいかない insiste sur le devoir social ; ざるを得ない est plus écrit et insiste sur la contrainte des circonstances", "they are identical in every way", "ざるを得ない est familier", "the first expresses a free choice"], a: 0,
        e: "Close meaning (obligation). 〜ないわけにはいかない = moral/social duty (often reluctantly). 〜ざるを得ない = constraint of circumstances, more written register." },
    ],
  },

  {
    id: "g057", g: "〜かねない", m: "risk of, could well (unfortunate result)", f: "Verbe-ます語幹 + かねない",
    c: "modality", lv: 2, rel: ["g058"],
    note: "Expresses the FEAR that a bad outcome will occur: \"it could well be that... (and that would be serious)\". Only used with negative consequences.",
    ex: [
      { jp: "そんな無理をすると、体を壊しかねない。", fr: "By pushing yourself so hard, you run the risk of ruining your health." },
      { jp: "うわさを信じると、誤解を招きかねない。", fr: "Believing rumors can lead to misunderstandings." },
    ],
    qs: [
      { t: "fill", q: "スピードを出しすぎると、事故を起こし＿＿＿。", fr: "If you drive too fast, you run the risk of causing an accident.",
        o: ["かねない", "かねる", "得る", "わけがない"], a: 0,
        e: "Fear of a bad result (accident) : Verbe-ます語幹 + かねない." },
      { t: "nuance", q: "Pourquoi 「合格しかねない」 sonne-t-il bizarre ?",
        o: ["かねない ne s'emploie que pour un résultat NÉGATIF/redouté", "the verb is incorrectly conjugated", "a particle is missing", "かねない est trop poli"], a: 0,
        e: "〜かねない only accompanies unfortunate consequences. Success being positive, the sentence is incoherent." },
      { t: "meaning", q: "「この問題は大事故につながりかねない」— sens ?",
        o: ["this problem could well lead to a serious accident", "this problem will never lead to an accident", "this problem caused an accident", "this problem must cause an accident"], a: 0,
        e: "〜かねない = there is a real risk that (the bad result) will occur." },
    ],
  },

  {
    id: "g058", g: "〜かねる", m: "not to be able to bring oneself to, to have difficulty in (polite)", f: "Verbe-ます語幹 + かねる",
    c: "modality", lv: 2, rel: ["g057"],
    note: "POLITE/psychological inability to do sth (even if physically possible). Very common in customer service to refuse tactfully: 〜かねます.",
    ex: [
      { jp: "その件については、私では判断しかねます。", fr: "It's hard for me to say." },
      { jp: "そのご要望にはお応えしかねます。", fr: "It is difficult for us to respond to this request. (polite refusal)" },
    ],
    qs: [
      { t: "fill", q: "申し訳ございませんが、返品はお受けし＿＿＿。", fr: "We're sorry, but it's difficult for us to accept returns.",
        o: ["かねます", "かねません", "得ます", "ざるを得ません"], a: 0,
        e: "Polite refusal/unable to resolve to : Verbe-ます語幹 + かねます." },
      { t: "nuance", q: "Attention au piège : 〜かねる et 〜かねない ont des sens…",
        o: ["opposés : かねる = « ne pas pouvoir faire » ; かねない = « risquer de faire (qqch de mal) »", "identical", "both positive", "both refusals"], a: 0,
        e: "Classic N2 trap: 〜かねる = impossibility (polite); 〜かねない = risk of harm happening. Opposite meanings!" },
      { t: "meaning", q: "「賛成しかねる」— sens ?",
        o: ["I find it hard to approve / I can't bring myself to approve", "I may approve", "I must approve", "I gladly approve"], a: 0,
        e: "〜かねる = polite impossibility: \"I can't really approve\"." },
    ],
  },

  /* ===================== EXPRESSIONS & EMPHASE ===================== */

  {
    id: "g059", g: "〜どころか", m: "far from it, on the contrary; and even (even more so)", f: "普通形（な形＝な／名は直接）+ どころか",
    c: "express", lv: 1, rel: ["g060", "g066"],
    note: "Reverses expectations: reality is the opposite of what we assumed, often even more so. \"Far from being A, it's actually B (the opposite).",
    ex: [
      { jp: "謝るどころか、彼は逆に怒り出した。", fr: "Instead of apologizing, he got angry." },
      { jp: "貯金どころか、借金まである。", fr: "Far from having savings, he even has debts." },
    ],
    qs: [
      { t: "fill", q: "薬を飲んだのに、よくなる＿＿＿、症状が悪化した。", fr: "Although I took the medication, far from getting better, my symptoms worsened.",
        o: ["どころか", "わりに", "ものの", "うえに"], a: 0,
        e: "Reversal of expectation (instead of getting better, it gets worse): 〜どころか." },
      { t: "meaning", q: "「彼は英語どころか、日本語も話せない」— sens ?",
        o: ["far from (speaking) English, he doesn't even know Japanese", "he speaks English and Japanese", "he speaks English but not Japanese", "he prefers English to Japanese"], a: 0,
        e: "〜どころか accentuates: \"far from X, even Y (more basic) is not the case\"." },
      { t: "nuance", q: "L'idée centrale de 〜どころか est :",
        o: ["contradict/exceed expectations, often in the opposite direction", "express a cause", "mark time", "ask permission"], a: 0,
        e: "〜どころか points out that reality is very different (often opposite) to what was expected." },
    ],
  },

  {
    id: "g060", g: "〜にすぎない", m: "to be nothing more than, only, simply", f: "普通形（名・な形は語幹）+ にすぎない",
    c: "express", lv: 1, rel: ["g061", "g059"],
    note: "Minimizes: \"it's nothing more than...\", \"it's only a...\". Emphasizes the minor, limited or insignificant nature of sth.",
    ex: [
      { jp: "それは言い訳にすぎない。", fr: "It's nothing but an excuse." },
      { jp: "私は事実を述べたにすぎない。", fr: "All I did was state the facts." },
    ],
    qs: [
      { t: "fill", q: "彼はただの知り合い＿＿＿、友達ではない。", fr: "He's just an acquaintance, not a friend.",
        o: ["にすぎない", "に違いない", "にほかならない", "わけがない"], a: 0,
        e: "Minimization (\"nothing more than knowledge\"): 〜にすぎない." },
      { t: "meaning", q: "「これは個人的な意見にすぎません」— sens ?",
        o: ["this is nothing more than a personal opinion", "this is necessarily a personal opinion", "this is not a personal opinion", "is precisely the personal opinion"], a: 0,
        e: "〜にすぎない = \"it's only a...\", to relativize/minimize." },
      { t: "nuance", q: "〜にすぎない et 〜にほかならない sont :",
        o: ["opposés en effet : すぎない minimise ; にほかならない affirme avec force « c'est exactement cela »", "synonyms", "both minimizations", "both temporal"], a: 0,
        e: "〜にすぎない belittles (\"ce n'est que...\"); 〜にほかならない insists (\"ce n'est rien d'autre que CELA\")." },
    ],
  },

  {
    id: "g061", g: "〜にほかならない", m: "is nothing other than, it is precisely, it is indeed", f: "名詞 + にほかならない",
    c: "express", lv: 2, rel: ["g060"],
    note: "Asserts the identity of a thing with force and conviction: \"this is exactly / nothing other than...\". Sustained register, often part of an argument.",
    ex: [
      { jp: "成功は努力の結果にほかならない。", fr: "Success is nothing other than the fruit of effort." },
      { jp: "この決定は責任逃れにほかならない。", fr: "This decision is nothing more than an evasion of responsibility." },
    ],
    qs: [
      { t: "fill", q: "彼が成功できたのは、努力の賜物＿＿＿。", fr: "If he has succeeded, it is nothing other than the fruit of his efforts.",
        o: ["にほかならない", "にすぎない", "わけがない", "おそれがある"], a: 0,
        e: "Strong affirmation of identity/single cause: 〜にほかならない." },
      { t: "meaning", q: "「健康こそ財産にほかならない」— sens ?",
        o: ["health is precisely (nothing more than) wealth", "health is not wealth", "health is just a little bit of wealth", "health risks being wealth"], a: 0,
        e: "〜にほかならない = emphatic identification: \"X is indeed Y\"." },
      { t: "nuance", q: "Le ton de 〜にほかならない est :",
        o: ["affirmative, convincing, argumentative (sustained)", "hesitant", "familiar", "interrogative"], a: 0,
        e: "A sustained form of categorical assertion, common in argumentative writing." },
    ],
  },

  {
    id: "g062", g: "〜ものだ", m: "it is so (general truth); one should; formerly (reminiscence)", f: "Verbe-dico／た／い形／な形な + ものだ",
    c: "express", lv: 1, rel: ["g063"],
    note: "Versatile: (1) general truth/law of nature (年を取ると忘れっぽくなるものだ); (2) what is socially due (挨拶はするものだ); (3) with V-た: nostalgia (よく遊んだものだ). 〜ものではない = \"we shouldn't\".",
    ex: [
      { jp: "時間が経てば、悲しみも薄れるものだ。", fr: "With time, grief fades, that's how it is." },
      { jp: "子供の頃、よくこの川で泳いだものだ。", fr: "As a child, I often swam in this river (nostalgia)." },
    ],
    qs: [
      { t: "fill", q: "年を取ると、昔のことが懐かしくなる＿＿＿。", fr: "As we get older, we become nostalgic for the past, that's just the way it is.",
        o: ["ものだ", "ことだ", "わけだ", "ところだ"], a: 0,
        e: "General truth about human nature: 〜ものだ." },
      { t: "meaning", q: "「学生時代はよく徹夜したものだ」— sens de ものだ ici ?",
        o: ["reminiscence: \"I used to...\" (nostalgia) (nostalgia)", "present obligation", "scientific truth", "order"], a: 0,
        e: "With a verb in the past tense (徹夜した), 〜ものだ expresses the nostalgic memory of a bygone habit." },
      { t: "nuance", q: "「人の物を黙って使うものではない」— sens de ものではない ?",
        o: ["one should not (do that) - moral rule", "it's not an object", "this is not possible", "it's not nostalgic"], a: 0,
        e: "〜ものではない = \"it's not done / we shouldn't\", social/moral norm." },
    ],
  },

  {
    id: "g063", g: "〜ことだ", m: "it's best to, you should (advice); how it's...! (emotion)", f: "Verbe-dico／ない + ことだ",
    c: "express", lv: 2, rel: ["g062"],
    note: "(1) Direct advice based on a specific situation: \"the best thing for you is to...\". More personal/ponctual than べきだ. (2) い形／な形 + ことだ = affective exclamation (なんて美しいことだ).",
    ex: [
      { jp: "上手になりたければ、毎日練習することだ。", fr: "If you want to progress, it's best to train every day." },
      { jp: "嫌なら、はっきり断ることだ。", fr: "If you don't like it, it's best to clearly refuse." },
    ],
    qs: [
      { t: "fill", q: "風邪を早く治したいなら、ゆっくり休む＿＿＿。", fr: "If you want to get over your cold quickly, it's best to get plenty of rest.",
        o: ["ことだ", "ものだ", "わけだ", "ところだ"], a: 0,
        e: "Advice tailored to a specific situation: 〜ことだ." },
      { t: "nuance", q: "Différence entre 〜ことだ (conseil) et 〜ものだ (vérité générale) :",
        o: ["ことだ = conseil ponctuel à qqn dans une situation donnée ; ものだ = vérité/norme générale", "they are identical", "ことだ exprime la nostalgie", "ものだ est un ordre"], a: 0,
        e: "〜ことだ aims at concrete, personal advice; 〜ものだ states a generality or standard valid for all." },
      { t: "meaning", q: "「合格したいなら、努力することだ」— sens ?",
        o: ["if you want to succeed, it's best to make an effort", "you must have made an effort", "you make an effort out of habit", "you remember making an effort"], a: 0,
        e: "〜ことだ = direct recommendation: \"what you need to do is...\"." },
    ],
  },

  {
    id: "g064", g: "〜ずにはいられない／ないではいられない", m: "can't help but feel", f: "Verbe-ない形の語幹 + ずにはいられない（する→せず）",
    c: "express", lv: 2, rel: ["g057"],
    note: "An irrepressible emotion/impulse drives us to act: \"impossible not to...\". Action is beyond voluntary control. Exception: する → せずにはいられない.",
    ex: [
      { jp: "あの映画を見ると、泣かずにはいられない。", fr: "When I see this film, I can't help crying." },
      { jp: "あまりにおかしくて、笑わずにはいられなかった。", fr: "It was so funny I couldn't stop laughing." },
    ],
    qs: [
      { t: "fill", q: "困っている人を見ると、助け＿＿＿。", fr: "When I see someone in difficulty, I can't help but help them.",
        o: ["ずにはいられない", "かねない", "わけにはいかない", "ざるを得ない"], a: 0,
        e: "Irrepressible impulse (help): 〜ずにはいられない." },
      { t: "usage", q: "Forme correcte de する avec 〜ずにはいられない :",
        o: ["せずにはいられない", "しずにはいられない", "せざるにはいられない", "するずにはいられない"], a: 0,
        e: "Exception: する → せず → せずにはいられない." },
      { t: "nuance", q: "Différence de nuance entre 〜ずにはいられない et 〜ざるを得ない :",
        o: ["ずにはいられない = impulsion émotionnelle interne ; ざるを得ない = contrainte externe des circonstances", "they are identical", "the first is formal/written", "the second is emotional"], a: 0,
        e: "〜ずにはいられない comes from an uncontrollable inner impulse; 〜ざるを得ない comes from an external constraint (\"no choice\")." },
    ],
  },

  {
    id: "g065", g: "〜というより", m: "rather than say...; or rather", f: "普通形（名・な形は語幹も可）+ というより",
    c: "express", lv: 2, rel: ["g060"],
    note: "Correct a formulation by proposing a more accurate description: \"rather than A, it would be more accurate to say B\".",
    ex: [
      { jp: "彼は優しいというより、優柔不断だ。", fr: "Rather than kind, he's indecisive." },
      { jp: "今日は涼しいというより、寒いくらいだ。", fr: "Today, rather than cool, it's almost cold." },
    ],
    qs: [
      { t: "fill", q: "あれは趣味＿＿＿、もう仕事のレベルだ。", fr: "This, rather than a hobby, is already professional.",
        o: ["というより", "にすぎず", "どころか", "に限らず"], a: 0,
        e: "Correction to a more accurate description: 〜というより." },
      { t: "meaning", q: "「青というより、緑に近い色だ」— sens ?",
        o: ["rather than blue, it's a color close to green", "it's blue and green", "neither blue nor green", "it's blue so it's green"], a: 0,
        e: "〜というより proposes a more accurate formulation than the first (\"green\" rather than \"blue\")." },
      { t: "order", q: "Reconstituez la phrase. Quel segment va à la place ★ ?",
        frame: "彼の態度は ＿＿ ＿★＿ ＿＿ 失礼だ。",
        o: ["正直", "という", "より", "むしろ"], a: 2,
        e: "Order: 正直 → という → より → むしろ。「正直というより、むしろ失礼だ」= \"rather than honest, it's downright rude\". TO ★: より." },
    ],
  },

  {
    id: "g066", g: "〜どころではない", m: "it's not the time to, we're in no state to", f: "Verbe-dico／名 + どころではない",
    c: "express", lv: 2, rel: ["g059"],
    note: "Circumstances make it impossible/displaced to do sth: \"with what's going on, there's no way...\". The situation is far too serious/pressing for that.",
    ex: [
      { jp: "仕事が忙しくて、旅行どころではない。", fr: "I'm too busy with work: traveling is out of the question." },
      { jp: "試験前で、遊んでいるどころではない。", fr: "With the exam coming up, this is no time for fun." },
    ],
    qs: [
      { t: "fill", q: "親が風邪で寝込んでいて、お正月を祝う＿＿＿。", fr: "With my parents bedridden with a cold, this is no time to celebrate New Year's Eve.",
        o: ["どころではない", "どころか", "ものだ", "ことだ"], a: 0,
        e: "Circumstances prohibit activity: 〜どころではない." },
      { t: "meaning", q: "「お金がなくて、外食どころではない」— sens ?",
        o: ["without money, eating out is out of the question", "I still eat out", "I prefer to eat out", "eating out is best"], a: 0,
        e: "〜どころではない = the situation makes the thing unthinkable/displaced." },
      { t: "nuance", q: "Distinguer 〜どころではない de 〜どころか :",
        o: ["どころではない = « pas le moment de » (situation qui empêche) ; どころか = « loin de…, au contraire » (renversement d'attente)", "they are identical", "どころか est plus poli", "どころではない exprime le temps futur"], a: 0,
        e: "〜どころではない insists on impossibility due to circumstances; 〜どころか reverses an expectation (\"quite the contrary\")." },
    ],
  },

  /* ===================== AJOUTS — PARTICULES & LOCUTIONS ===================== */

  {
    id: "g067", g: "〜に沿って", m: "along ; in accordance with", f: "Nom + に沿って／に沿った＋Nom",
    c: "particle", lv: 2, rel: ["g007", "g011"],
    note: "Two meanings: (1) spatial, \"along\" (川に沿って); (2) abstract, \"following\" a guideline, regulation, expectations (方針に沿って).",
    ex: [
      { jp: "川に沿って、桜並木が続いている。", fr: "An avenue of cherry trees stretches along the river." },
      { jp: "会社の方針に沿って、計画を立て直した。", fr: "I revised the plan in line with company policy." },
    ],
    qs: [
      { t: "fill", q: "お客様のご要望＿＿＿、商品を改良いたしました。", fr: "We have improved the product in line with our customers' wishes.",
        o: ["に沿って", "において", "について", "に際して"], a: 0,
        e: "\"Following / in accordance with wishes\" → 〜に沿って (follow a guideline)." },
      { t: "meaning", q: "「線路に沿って歩いた」— sens de に沿って ?",
        o: ["along (the railroad)", "because of", "about", "despite"], a: 0,
        e: "Spatial use: walk \"along\" the track." },
      { t: "nuance", q: "Choisir « conformément aux directives » :",
        o: ["ガイドラインに沿って", "ガイドラインについて", "ガイドラインとして", "ガイドラインにとって"], a: 0,
        e: "Follow/respect a directive → に沿って." },
    ],
  },

  {
    id: "g068", g: "〜のもとで／〜のもとに", m: "under (the direction, influence, condition of)", f: "Nom + のもとで／のもとに",
    c: "particle", lv: 2, rel: ["g005", "g069"],
    note: "Indicates the environment, condition or authority under which an action takes place. のもとで = place/framework of action (指導のもとで); のもとに = condition/principle (合意のもとに).",
    ex: [
      { jp: "先生の指導のもとで、研究を進めた。", fr: "I conducted my research under the guidance of my teacher." },
      { jp: "両者の合意のもとに、契約が結ばれた。", fr: "The contract was concluded by mutual agreement." },
    ],
    qs: [
      { t: "fill", q: "厳しい規則＿＿＿、選手たちは生活している。", fr: "Athletes live under strict rules.",
        o: ["のもとで", "について", "において", "に際して"], a: 0,
        e: "\"Under (the authority of) rules\" → 〜のもとで." },
      { t: "meaning", q: "「青空のもとで運動会が開かれた」— sens ?",
        o: ["sous un ciel bleu (frame)", "about blue sky", "despite the blue sky", "because of the blue sky"], a: 0,
        e: "のもとで indicates the setting/environment of the action." },
      { t: "order", q: "Reconstituez la phrase. Quel segment va à la place ★ ?",
        frame: "親 ＿＿ ＿★＿ ＿＿ 子どもは育った。",
        o: ["の", "保護", "のもとで", "温かい"], a: 1,
        e: "Order: 温かい → 親 → の → 保護のもとで ...「温かい親の保護のもとで」. AT ★: 保護." },
    ],
  },

  {
    id: "g069", g: "〜を込めて", m: "with (a feeling), by putting (all his...)", f: "Nom + を込めて／を込めた＋Nom",
    c: "particle", lv: 2, rel: ["g068"],
    note: "Used with a feeling/intention noun (心, 愛, 感謝, 願い, 力): act \"putting\" that feeling into it.",
    ex: [
      { jp: "感謝の気持ちを込めて、手紙を書いた。", fr: "I wrote a letter expressing my gratitude." },
      { jp: "心を込めて作った料理です。", fr: "It's a dish prepared with all my heart." },
    ],
    qs: [
      { t: "fill", q: "母への愛＿＿＿、セーターを編んだ。", fr: "I knitted a sweater with all my love for my mother.",
        o: ["を込めて", "について", "に沿って", "として"], a: 0,
        e: "\"By putting a feeling (love) into it.\" → 〜を込めて." },
      { t: "meaning", q: "「願いを込めて鐘を鳴らす」— sens ?",
        o: ["ring the bell with a wish", "ringing about a wish", "ringing in spite of a wish", "ringing because of a wish"], a: 0,
        e: "を込めて = putting the feeling/wish into it." },
      { t: "usage", q: "Avec quel type de nom 〜を込めて s'emploie-t-il typiquement ?",
        o: ["un sentiment / une intention (心, 感謝, 力)", "a place", "a date", "a number"], a: 0,
        e: "を込めて is combined with a feeling or intention noun." },
    ],
  },

  {
    id: "g070", g: "〜に加えて", m: "in addition to", f: "Nom + に加えて／に加え",
    c: "particle", lv: 2, rel: ["g075", "g078"],
    note: "Adds an element of the same kind: \"to X is added Y\". Often an accumulation of circumstances (風に加えて雨も = to the wind is added the rain).",
    ex: [
      { jp: "強い風に加えて、雨も降り出した。", fr: "In addition to the strong wind, it started to rain." },
      { jp: "彼は英語に加えて、フランス語も話せる。", fr: "He speaks French as well as English." },
    ],
    qs: [
      { t: "fill", q: "授業料＿＿＿、教材費も必要だ。", fr: "In addition to tuition fees, you also have to pay for materials.",
        o: ["に加えて", "に対して", "に反して", "について"], a: 0,
        e: "Cumulative \"X plus Y\" → 〜に加えて." },
      { t: "meaning", q: "「経験に加えて、知識も豊富だ」— sens ?",
        o: ["in addition to the experience, rich in knowledge", "contrary to experience", "about the experience", "despite experience"], a: 0,
        e: "に加えて = in addition to, addition." },
      { t: "nuance", q: "Distinguer 〜に加えて de 〜に反して :",
        o: ["に加えて = addition (en plus) ; に反して = opposition (contrairement à)", "they are identical", "に加えて exprime une cause", "に反して exprime une addition"], a: 0,
        e: "に加えて adds; に反して contradicts expectations." },
    ],
  },

  {
    id: "g071", g: "〜を問わず", m: "regardless of", f: "Nom + を問わず（は不要）",
    c: "particle", lv: 2, rel: ["g072", "g080"],
    note: "\"Without X coming into play\". Used with nouns evoking two poles or a variety: 年齢, 男女, 経験, 昼夜, 国内外. Often in pairs (経験の有無を問わず).",
    ex: [
      { jp: "年齢を問わず、誰でも参加できる。", fr: "Anyone can take part, regardless of age." },
      { jp: "昼夜を問わず、機械は動き続ける。", fr: "Day and night, the machine keeps on turning." },
    ],
    qs: [
      { t: "fill", q: "経験の有無＿＿＿、応募を歓迎します。", fr: "We welcome applications, with or without experience.",
        o: ["を問わず", "にかかわって", "について", "に応じて"], a: 0,
        e: "\"Without distinction (of experience or not)\" → 〜を問わず." },
      { t: "meaning", q: "「男女を問わず採用する」— sens ?",
        o: ["gender-neutral hiring", "hiring only men", "ask about sex", "hiring by gender"], a: 0,
        e: "を問わず = the distinction (here male/female) is not taken into account." },
      { t: "usage", q: "Quel nom convient le mieux avec 〜を問わず ?",
        o: ["国の内外（deux pôles / variété）", "私の弟（personne précise）", "明日（date unique）", "この本（objet unique）"], a: 0,
        e: "を問わず asks for a name evoking poles/variety (内外, 男女, 年齢...)." },
    ],
  },

  {
    id: "g072", g: "〜にかかわらず／〜にかかわりなく", m: "regardless of", f: "Nom／V-辞書+V-ない／A-くてもなくても + にかかわらず",
    c: "particle", lv: 2, rel: ["g071", "g073"],
    note: "The result does not depend on X. Often with antonyms or alternatives: 天候にかかわらず, 行く行かないにかかわらず. Not to be confused with 〜にもかかわらず (\"although\").",
    ex: [
      { jp: "天候にかかわらず、試合は行われる。", fr: "The match will take place whatever the weather." },
      { jp: "経験のあるなしにかかわらず、研修を受けてもらう。", fr: "With or without experience, everyone can take the course." },
    ],
    qs: [
      { t: "fill", q: "金額の大小＿＿＿、寄付は受け付けます。", fr: "Donations of any amount are accepted.",
        o: ["にかかわらず", "にもかかわらず", "について", "に際して"], a: 0,
        e: "\"Regardless of (large or small)\" → 〜にかかわらず." },
      { t: "nuance", q: "Distinguer 〜にかかわらず de 〜にもかかわらず :",
        o: ["にかかわらず = « peu importe X » (X ne compte pas) ; にもかかわらず = « bien que X » (malgré un fait constaté)", "they are identical", "にかかわらず exprime une cause", "にもかかわらず exprime une variété"], a: 0,
        e: "にかかわらず neutralizes a parameter; にもかかわらず concedes an actual fact." },
      { t: "usage", q: "Quelle construction est typique de 〜にかかわらず ?",
        o: ["行く行かないにかかわらず（alternatives）", "雨にもかかわらず（fait constaté）", "失礼にあたる", "彼について"], a: 0,
        e: "にかかわらず likes pairs of alternatives (X か X-ない)." },
    ],
  },

  {
    id: "g073", g: "〜もかまわず", m: "without worrying about, without paying attention to", f: "Nom／V-辞書＋の + もかまわず",
    c: "particle", lv: 2, rel: ["g072"],
    note: "To act while ignoring what one should normally care about (other people's gaze, one's clothes, the rain). Nuance of impropriety or determination.",
    ex: [
      { jp: "人目もかまわず、彼女は泣き出した。", fr: "Unconcerned, she burst into tears." },
      { jp: "服が汚れるのもかまわず、子どもは遊んでいる。", fr: "Without worrying about getting his clothes dirty, the child plays." },
    ],
    qs: [
      { t: "fill", q: "周りの迷惑＿＿＿、大声で電話している。", fr: "Without worrying about disturbing the others, he calls out loud.",
        o: ["もかまわず", "を問わず", "に沿って", "に加えて"], a: 0,
        e: "\"Regardless of (the inconvenience caused)\" → 〜もかまわず." },
      { t: "meaning", q: "「雨にぬれるのもかまわず走った」— sens ?",
        o: ["run without worrying about getting caught in the rain", "running in the rain", "running in the rain for a reason", "don't run in the rain"], a: 0,
        e: "もかまわず = regardless of what should be in the way." },
      { t: "nuance", q: "Quelle nuance porte souvent 〜もかまわず ?",
        o: ["impropriety / ignoring what should concern us", "extreme politeness", "uncertainty", "addition of elements"], a: 0,
        e: "Often a tinge of impropriety or fierce determination." },
    ],
  },

  {
    id: "g074", g: "〜はもちろん", m: "not to mention, of course... but also", f: "Nom + はもちろん（のこと）",
    c: "particle", lv: 1, rel: ["g075", "g078"],
    note: "X is obvious/obvious, and Y is added to it. \"Not only X (that goes without saying) but also Y\". Tone a little more common than はもとより.",
    ex: [
      { jp: "漢字はもちろん、ひらがなも書けない。", fr: "He can't write hiragana, let alone kanji." },
      { jp: "国内はもちろん、海外でも人気がある。", fr: "It's popular in Japan, of course, but also abroad." },
    ],
    qs: [
      { t: "fill", q: "この店は味＿＿＿、サービスもいい。", fr: "In this restaurant, taste goes without saying, but the service is good too.",
        o: ["はもちろん", "に反して", "を問わず", "に際して"], a: 0,
        e: "\"X (obvious) and also Y\" → 〜はもちろん." },
      { t: "meaning", q: "「子どもはもちろん、大人も楽しめる」— sens ?",
        o: ["children, of course, but adults can have fun too.", "only children have fun", "neither children nor adults", "about children"], a: 0,
        e: "はもちろん : X acquired + Y added." },
      { t: "nuance", q: "Différence de registre entre はもちろん et はもとより :",
        o: ["はもとmore soutenu/écrit ; はもちろん plus courant", "はもちろん est vulgaire", "they are used with different verbs", "はもとより exprime le contraire"], a: 0,
        e: "Same meaning; はもとより is more formal/literary." },
    ],
  },

  {
    id: "g075", g: "〜はもとより", m: "not to mention, not only... but also (supported)", f: "Nom + はもとより",
    c: "particle", lv: 2, rel: ["g074", "g078"],
    note: "Supported synonym for はもちろん. X is self-evident, Y is added. Written/formal register.",
    ex: [
      { jp: "本人はもとより、家族も喜んでいる。", fr: "The person concerned is delighted, of course, but so is his family." },
      { jp: "国内はもとより、世界中で知られている。", fr: "Known in Japan, of course, but also around the world." },
    ],
    qs: [
      { t: "fill", q: "新人＿＿＿、ベテランもこの研修に参加する。", fr: "Newcomers, of course, but seasoned veterans are also trained.",
        o: ["はもとより", "にかかわらず", "を込めて", "に沿って"], a: 0,
        e: "\"X (obvious) + Y too\", sustained register → 〜はもとより." },
      { t: "meaning", q: "「平日はもとより、週末も営業する」— sens ?",
        o: ["weekdays, of course, but weekends too", "neither weekdays nor weekends", "only at weekends", "despite the week"], a: 0,
        e: "はもとより = X acquired + Y." },
      { t: "usage", q: "Dans quel registre 〜はもとより est-il privilégié ?",
        o: ["written / formal", "youth slang", "children's language", "onomatopoeia"], a: 0,
        e: "はもとより belongs to the sustained register." },
    ],
  },

  {
    id: "g076", g: "〜抜きで／〜抜きに／〜は抜きにして", m: "without, dispensing with, putting aside", f: "Nom + 抜きで／抜きに／は抜きにして",
    c: "particle", lv: 2, rel: ["g073"],
    note: "Make sth by eliminating a usual element. 〜抜きには〜ない = \"without X, no Y\" (X indispensable). 冗談は抜きにして = \"joke aside\".",
    ex: [
      { jp: "今日は仕事の話は抜きにして、楽しみましょう。", fr: "Today, let's put work aside and have some fun." },
      { jp: "彼の協力抜きには、成功しなかっただろう。", fr: "Without his cooperation, we wouldn't have succeeded." },
    ],
    qs: [
      { t: "fill", q: "朝食＿＿＿出かけたので、お腹がすいた。", fr: "I left without breakfast, so I'm hungry.",
        o: ["抜きで", "を問わず", "に加えて", "に沿って"], a: 0,
        e: "\"Without (breakfast)\" → 〜抜きで." },
      { t: "meaning", q: "「冗談は抜きにして、本題に入ろう」— sens ?",
        o: ["Joking aside, let's get to the heart of the matter", "let's add a joke", "about the joke", "because of the joke"], a: 0,
        e: "は抜きにして = setting aside." },
      { t: "nuance", q: "「援助抜きには成功しない」exprime :",
        o: ["help is essential (without it, failure)", "help is useless", "we refuse help", "help goes a long way"], a: 0,
        e: "〜抜きには〜ない emphasizes X's indispensability." },
    ],
  },

  {
    id: "g077", g: "〜に限らず", m: "not only, but not only", f: "Nom + に限らず",
    c: "particle", lv: 2, rel: ["g041", "g071"],
    note: "\"X is not the only case; the same applies to the rest\". Extends the scope beyond X.",
    ex: [
      { jp: "若者に限らず、高齢者にもこのゲームは人気だ。", fr: "Not just for young people: this game is also popular with seniors." },
      { jp: "この問題は日本に限らず、世界共通だ。", fr: "This problem is not limited to Japan: it's global." },
    ],
    qs: [
      { t: "fill", q: "週末＿＿＿、平日もこの店は混んでいる。", fr: "Not just at weekends: this store is packed on weekdays too.",
        o: ["に限らず", "に限り", "について", "に沿って"], a: 0,
        e: "\"Not just X\" → 〜に限らず." },
      { t: "meaning", q: "「子どもに限らず大人も間違える」— sens ?",
        o: ["not only children, but adults too make mistakes", "only children make mistakes", "adults don't make mistakes", "about children"], a: 0,
        e: "に限らず extends the range beyond X." },
      { t: "nuance", q: "Distinguer 〜に限らず de 〜に限り :",
        o: ["に限らず = « pas seulement X » (élargit) ; に限り = « seulement X / dans le seul cas de X » (restreint)", "they are identical", "に限らず restreint", "に限り élargit"], a: 0,
        e: "Opposite directions: に限らず opens, に限り closes." },
    ],
  },

  {
    id: "g078", g: "〜のみならず", m: "not only... (but also), supported", f: "Nom／普通形 + のみならず",
    c: "particle", lv: 2, rel: ["g074", "g166"],
    note: "Written/formal equivalent of だけでなく. Often followed by も. \"Not only X but also Y\".",
    ex: [
      { jp: "彼は学者であるのみならず、優れた教育者でもある。", fr: "Not only is he a scholar, he's also an excellent teacher." },
      { jp: "本人のみならず、周囲にも影響が及ぶ。", fr: "The effect affects not only the individual concerned, but also those around him." },
    ],
    qs: [
      { t: "fill", q: "この薬は頭痛＿＿＿、肩こりにも効く。", fr: "This drug not only works on headaches, but also on shoulder pain.",
        o: ["のみならず", "に限り", "を問わず", "に際して"], a: 0,
        e: "\"Not only X but also Y\", register supported → 〜のみならず." },
      { t: "meaning", q: "「国内のみならず海外でも」— sens ?",
        o: ["not only at home but also abroad", "only at home", "neither at home nor abroad", "about the country"], a: 0,
        e: "のみならず = not only... but also." },
      { t: "usage", q: "〜のみならず est la version … de だけでなく :",
        o: ["sustained / written", "familiar", "child", "interrogative"], a: 0,
        e: "のみならず is the formal register of だけでなく." },
    ],
  },

  {
    id: "g079", g: "〜を中心に（して）／〜を中心として", m: "around, focused on, mainly", f: "Nom + を中心に（して）／を中心とする＋Nom",
    c: "particle", lv: 2, rel: ["g009", "g005"],
    note: "Refers to the center of a group, movement or activity: \"X at the heart of...\".",
    ex: [
      { jp: "駅を中心に、商店街が広がっている。", fr: "The shopping district extends around the station." },
      { jp: "若者を中心に、その曲が流行している。", fr: "This song is all the rage, especially among young people." },
    ],
    qs: [
      { t: "fill", q: "リーダー＿＿＿、チームがまとまった。", fr: "The team rallied around its leader.",
        o: ["を中心に", "を問わず", "に反して", "に加えて"], a: 0,
        e: "\"Around / centered on X\" → 〜を中心に." },
      { t: "meaning", q: "「家族を中心に生活を考える」— sens ?",
        o: ["thinking about life with the family at the center", "thinking without family", "about the family", "despite the family"], a: 0,
        e: "を中心に = putting X in the heart." },
      { t: "usage", q: "〜を中心に exprime principalement :",
        o: ["the core/central point of a set", "opposition", "a negative condition", "a deadline"], a: 0,
        e: "を中心に designates the center of a set or movement." },
    ],
  },

  /* ===================== AJOUTS — CONCESSION & CONTRASTE ===================== */

  {
    id: "g080", g: "〜にしろ〜にしろ／〜にせよ〜にせよ", m: "whether... or...", f: "Nom／普通形 + にしろ／にせよ（×2）",
    c: "contrast", lv: 2, rel: ["g081", "g072"],
    note: "Two cases considered, same conclusion. にせよ is a little more formal than にしろ. Simple variant: 〜にしろ (only one) = \"even if/whatever\".",
    ex: [
      { jp: "行くにしろ行かないにしろ、連絡してください。", fr: "Whether you go or not, let me know." },
      { jp: "賛成にせよ反対にせよ、理由を述べるべきだ。", fr: "For or against, you have to give your reasons." },
    ],
    qs: [
      { t: "fill", q: "雨＿＿＿雪＿＿＿、試合は中止だ。", fr: "Rain or snow, the match is cancelled.",
        o: ["にしろ／にしろ", "について／について", "に限り／に限り", "として／として"], a: 0,
        e: "Two cases, same consequence → 〜にしろ〜にしろ." },
      { t: "meaning", q: "「成功するにせよ失敗するにせよ、挑戦に意味がある」— sens ?",
        o: ["whether you succeed or fail, trying makes sense", "we always succeed", "we always fail", "we don't try"], a: 0,
        e: "にせよ〜にせよ: two outcomes, same conclusion." },
      { t: "usage", q: "Quelle paire est la plus formelle ?",
        o: ["にせよ〜にせよ", "にしろ〜にしろ", "they are both familiar", "none exist"], a: 0,
        e: "にせよ is more sustained than にしろ (same meaning)." },
    ],
  },

  {
    id: "g081", g: "〜であれ／〜であろうと", m: "whatever, even if it's", f: "Nom／疑問詞 + であれ／であろうと",
    c: "contrast", lv: 3, rel: ["g080"],
    note: "Sustained concession. Often with an interrogative: どんな理由であれ (whatever the reason). たとえ〜であれ reinforces.",
    ex: [
      { jp: "どんな理由であれ、暴力は許されない。", fr: "Whatever the reason, violence is unacceptable." },
      { jp: "子どもであれ大人であれ、ルールは守るべきだ。", fr: "Children and adults alike must respect the rules." },
    ],
    qs: [
      { t: "fill", q: "たとえ社長＿＿＿、規則は守らねばならない。", fr: "Even if it's the CEO, you have to respect the rules.",
        o: ["であれ", "について", "に限り", "に沿って"], a: 0,
        e: "\"Even if/whatever\" → 〜であれ." },
      { t: "meaning", q: "「理由が何であれ、遅刻は遅刻だ」— sens ?",
        o: ["whatever the reason, a delay is a delay", "according to reason", "because of reason", "for no reason"], a: 0,
        e: "であれ = whatever (concession)." },
      { t: "usage", q: "〜であれ se combine souvent avec :",
        o: ["un interrogatif (どんな, 何, 誰)", "a specific number", "un verbe à la forme て", "a date"], a: 0,
        e: "であれ is used with an interrogative word." },
    ],
  },

  {
    id: "g082", g: "〜としても", m: "even if (assumption)", f: "普通形 + としても",
    c: "contrast", lv: 1, rel: ["g024", "g090"],
    note: "Hypothetical concession: \"supposing that X, nevertheless...\". Differs from 〜ても (more factual concession) in its nuance of unproven hypothesis.",
    ex: [
      { jp: "雨が降ったとしても、出かけるつもりだ。", fr: "Even if it rained, I'd still go out." },
      { jp: "本当だとしても、信じられない。", fr: "Even if it's true, I can't believe it." },
    ],
    qs: [
      { t: "fill", q: "彼が謝った＿＿＿、私は許さないだろう。", fr: "Even if he apologized, I probably wouldn't forgive him.",
        o: ["としても", "からこそ", "ことから", "に際して"], a: 0,
        e: "Hypothetical concession \"even if\" → 〜としても." },
      { t: "meaning", q: "「失敗したとしても、経験になる」— sens ?",
        o: ["even if you fail, it's still an experience", "as we failed", "because we fail", "to fail"], a: 0,
        e: "としても = even if (assumption)." },
      { t: "nuance", q: "Nuance de としても par rapport à 〜ても :",
        o: ["としても insiste sur l'hypothèse (à supposer que)", "としても est plus familier", "they have no connection", "としても exprime une cause"], a: 0,
        e: "としても accentuates the hypothetical/supposed character." },
    ],
  },

  {
    id: "g083", g: "〜にしても／〜にしたって", m: "even if, even in the case of ; whatever the case may be", f: "普通形／Nom + にしても",
    c: "contrast", lv: 2, rel: ["g082", "g080"],
    note: "Concession: \"even taking into account X...\". にしたって is the colloquial variant. With a noun: \"even X (who nevertheless...)\".",
    ex: [
      { jp: "忙しいにしても、連絡くらいできるはずだ。", fr: "Even if he was busy, he could at least give some news." },
      { jp: "子どもにしても、それくらいは分かる。", fr: "Even a child could understand that." },
    ],
    qs: [
      { t: "fill", q: "冗談＿＿＿、言っていいことと悪いことがある。", fr: "Even for a joke, there are things you shouldn't say.",
        o: ["にしても", "に限り", "を問わず", "に沿って"], a: 0,
        e: "\"Even in the case of X\" → 〜にしても." },
      { t: "meaning", q: "「高いにしても、買う価値はある」— sens ?",
        o: ["even if it's expensive, it's worth it", "because it's expensive", "how expensive", "if it's expensive"], a: 0,
        e: "にしても = even if (concession)." },
      { t: "usage", q: "〜にしたって est :",
        o: ["la variante familière de にしても", "plus formelle que にしても", "un synonyme de に限り", "an interrogative form"], a: 0,
        e: "にしたって = familiar register of にしても." },
    ],
  },

  {
    id: "g084", g: "〜といっても", m: "although we say..., it's not as much as", f: "普通形／Nom + といっても",
    c: "contrast", lv: 1, rel: ["g024", "g092"],
    note: "Nuance/relativize a statement: \"X, yes, but actually less than the word suggests\". 料理ができるといっても、卵焼きくらいだ.",
    ex: [
      { jp: "金持ちといっても、普通のサラリーマンです。", fr: "Rich, they say, but he's just an ordinary employee." },
      { jp: "近いといっても、駅まで歩いて30分かかる。", fr: "It's \"close\", but it's a 30-minute walk to the station." },
    ],
    qs: [
      { t: "fill", q: "料理ができる＿＿＿、卵焼きくらいだ。", fr: "\"I can cook,\" but just barely an omelette.",
        o: ["といっても", "からこそ", "に際して", "を込めて"], a: 0,
        e: "Relativize an assertion → 〜といっても." },
      { t: "meaning", q: "「暑いといっても、日本ほどではない」— sens ?",
        o: ["it's hot, but not as hot as in Japan", "it's hot like Japan", "it's not hot", "because of the heat"], a: 0,
        e: "といっても puts it into perspective: less than the word suggests." },
      { t: "nuance", q: "Rôle principal de 〜といっても :",
        o: ["qualify/correct a statement deemed excessive", "add an item", "express a cause", "give an order"], a: 0,
        e: "といっても tempers the impression given by the previous word." },
    ],
  },

  {
    id: "g085", g: "〜からといって", m: "it's not because... that (necessarily)", f: "普通形 + からといって（〜ない／とは限らない）",
    c: "contrast", lv: 1, rel: ["g142", "g051"],
    note: "Rejects a hasty conclusion drawn from a reason. Almost always followed by a negation: 高いからといって、いいとは限らない.",
    ex: [
      { jp: "高いからといって、品質がいいとは限らない。", fr: "Just because it's expensive doesn't mean it's quality." },
      { jp: "外国人だからといって、英語が話せるわけではない。", fr: "Just because you're a foreigner doesn't mean you necessarily speak English." },
    ],
    qs: [
      { t: "fill", q: "若い＿＿＿、無理をしてはいけない。", fr: "Just because you're young doesn't mean you have to do too much.",
        o: ["からといって", "からには", "からこそ", "から"], a: 0,
        e: "Rejecting a hasty conclusion → 〜からといって（〜ない）." },
      { t: "meaning", q: "「日本に住んでいたからといって、納豆が好きとは限らない」— sens ?",
        o: ["living in Japan doesn't necessarily mean loving nattō", "as we have lived in Japan, we love nattō", "we haven't lived in Japan", "to live in Japan"], a: 0,
        e: "からといって + とは限らない = no automatic link." },
      { t: "nuance", q: "〜からといって est presque toujours suivi de :",
        o: ["une négation (〜ない／とは限らない)", "a positive imperative", "a question", "a date"], a: 0,
        e: "からといって calls for a denied conclusion." },
    ],
  },

  {
    id: "g086", g: "〜とはいうものの", m: "that being said, although I say that", f: "普通形／Nom + とはいうものの",
    c: "contrast", lv: 2, rel: ["g024", "g023"],
    note: "Acknowledges a fact, then introduces a reservation: \"certainly..., but in reality...\". Close to とはいえ, often at the head of a sentence.",
    ex: [
      { jp: "春とはいうものの、まだ寒い日が続く。", fr: "It's spring, but the cold days continue." },
      { jp: "やめたいとはいうものの、なかなか踏み切れない。", fr: "I say I want to stop, but I just can't seem to take the plunge." },
    ],
    qs: [
      { t: "fill", q: "合格した＿＿＿、油断はできない。", fr: "I've succeeded, of course, but I can't relax.",
        o: ["とはいうものの", "からこそ", "に際して", "を中心に"], a: 0,
        e: "Recognize a fact + reserve → 〜とはいうものの." },
      { t: "meaning", q: "「便利だとはいうものの、欠点もある」— sens ?",
        o: ["it's practical, that said, it also has its faults", "it's practical so perfect", "not practical", "about convenience"], a: 0,
        e: "とはいうものの introduces a reserve after a concession." },
      { t: "usage", q: "とはいうものの est proche de :",
        o: ["とはいえ / ものの", "からこそ", "に限り", "を込めて"], a: 0,
        e: "Same concessive family as とはいえ/ものの." },
    ],
  },

  {
    id: "g087", g: "〜たところで", m: "even if (it's all right), it won't do any good", f: "V-た + ところで（〜ない／無駄だ）",
    c: "contrast", lv: 2, rel: ["g082", "g099"],
    note: "Pessimistic concession: even if you do X, the result is still negative. Often followed by a negation or an idea of uselessness. The verb is in た, but the meaning remains hypothetical.",
    ex: [
      { jp: "今さら謝ったところで、許してもらえない。", fr: "No matter how much we apologize now, we won't be forgiven." },
      { jp: "急いだところで、もう間に合わない。", fr: "Even if we hurry, we won't make it in time." },
    ],
    qs: [
      { t: "fill", q: "いくら頼んだ＿＿＿、彼は来ないだろう。", fr: "No matter how much we beg, he probably won't come.",
        o: ["ところで", "からこそ", "とたんに", "ばかりに"], a: 0,
        e: "\"We may as well... it won't do any good\" → 〜たところで." },
      { t: "meaning", q: "「考えたところで、答えは出ない」— sens ?",
        o: ["no matter how hard you think, you can't find the answer", "since we've thought about it, we have the answer", "to think about the answer", "after some thought"], a: 0,
        e: "たところで = even if we do X, it's futile." },
      { t: "nuance", q: "〜たところで est généralement suivi de :",
        o: ["a negative idea of uselessness", "a positive result guaranteed", "an order", "a simple date"], a: 0,
        e: "The concession is pessimistic (vain result)." },
    ],
  },

  {
    id: "g088", g: "〜に比べて", m: "compared to, compared to", f: "Nom + に比べて／に比べ",
    c: "contrast", lv: 1, rel: ["g030", "g096"],
    note: "Establishes a comparison between two terms. 〜に比べ (without て) is the written variant.",
    ex: [
      { jp: "去年に比べて、今年は雨が多い。", fr: "Compared with last year, it's raining a lot this year." },
      { jp: "都会に比べて、田舎は物価が安い。", fr: "Compared to the city, life is cheaper in the countryside." },
    ],
    qs: [
      { t: "fill", q: "兄＿＿＿、弟のほうが背が高い。", fr: "Compared to the eldest, the youngest is taller.",
        o: ["に比べて", "に反して", "について", "に沿って"], a: 0,
        e: "Comparison between two terms → 〜に比べて." },
      { t: "meaning", q: "「以前に比べて、便利になった」— sens ?",
        o: ["more convenient than before", "despite", "about avant", "because of before"], a: 0,
        e: "に比べて = compared to." },
      { t: "usage", q: "La variante écrite de 〜に比べて est :",
        o: ["に比べ", "に比べたり", "に比べると限り", "に比べさえ"], a: 0,
        e: "に比べ (without て) = written register." },
    ],
  },

  {
    id: "g089", g: "〜にひきかえ", m: "unlike, contrary to (with judgment)", f: "Nom＋に／普通形＋の + にひきかえ",
    c: "contrast", lv: 3, rel: ["g002", "g030"],
    note: "Marked contrast between two elements, often with an appraisal (one valued, the other not). More subjective than に対して.",
    ex: [
      { jp: "去年の不調にひきかえ、今年は絶好調だ。", fr: "In contrast to last year's poor performance, this year has been excellent." },
      { jp: "兄の真面目さにひきかえ、弟は怠け者だ。", fr: "In contrast to the elder's seriousness, the younger is lazy." },
    ],
    qs: [
      { t: "fill", q: "姉の社交的な性格＿＿＿、妹はとても内気だ。", fr: "In contrast to the eldest's sociable character, the youngest is very shy.",
        o: ["にひきかえ", "に加えて", "に沿って", "を込めて"], a: 0,
        e: "Contrast with judgment → 〜にひきかえ." },
      { t: "meaning", q: "「先月の売上にひきかえ、今月は好調だ」— sens ?",
        o: ["in contrast to last month's sales, this month is good", "like last month", "about last month", "in addition to last month's"], a: 0,
        e: "にひきかえ contrasts two situations with appreciation." },
      { t: "nuance", q: "Différence entre にひきかえ et に対して :",
        o: ["にひきかえ ajoute un jugement/appréciation subjective ; に対して est plus neutre", "they are identical", "にひきかえ est plus neutre", "に対して exprime l'addition"], a: 0,
        e: "にひきかえ is subjective (often evaluative)." },
    ],
  },

  {
    id: "g090", g: "〜ならまだしも", m: "it's all right if..., but (then no)", f: "Nom／普通形 + ならまだしも",
    c: "contrast", lv: 3, rel: ["g082", "g083"],
    note: "\"If it were X, it would be acceptable, but in reality it's Y (worse), so it's unacceptable\". Compares a tolerable case with a real case considered excessive.",
    ex: [
      { jp: "一度ならまだしも、三度も遅刻するとは。", fr: "Once is fine, but three times late!" },
      { jp: "子どもならまだしも、大人がそんなことを言うとは。", fr: "It's one thing for a child to say it, but for an adult to say it!" },
    ],
    qs: [
      { t: "fill", q: "謝る＿＿＿、開き直るとは許せない。", fr: "Apologizing is fine, but taking things in stride is unacceptable.",
        o: ["ならまだしも", "に限らず", "とはいえ", "に加えて"], a: 0,
        e: "\"If it were X it would be tolerable, but Y...\" → 〜ならまだしも." },
      { t: "meaning", q: "「少しならまだしも、全部食べるなんて」— sens ?",
        o: ["a little goes a long way, but eat it all!", "eating a little is bad", "eating everything is good", "neither a little nor all"], a: 0,
        e: "ならまだしも contrasts a tolerable case with an excessive one." },
      { t: "usage", q: "〜ならまだしも introduit :",
        o: ["an acceptable hypothetical case, followed by the unacceptable real case", "a cause", "a deadline", "a polite order"], a: 0,
        e: "Structure: X (tolerable) ならまだしも、Y (unacceptable)." },
    ],
  },

  /* ===================== AJOUTS — TEMPS & SÉQUENCE ===================== */

  {
    id: "g091", g: "〜上で", m: "after having..., on the basis of ; for, as part of", f: "V-た／Nom+の + 上で",
    c: "time", lv: 1, rel: ["g100", "g101"],
    note: "(1) With V-た/Nの: \"after doing X (and on that basis), do Y\" - a reflexive two-step approach (確認した上で). (2) With V-辞書/Nの: \"as part of, for\" (生活する上で = to live).",
    ex: [
      { jp: "両親と相談した上で、お返事します。", fr: "I'll get back to you after consulting my parents." },
      { jp: "外国で生活する上で、言葉は欠かせない。", fr: "To live abroad, language is essential." },
    ],
    qs: [
      { t: "fill", q: "契約内容をよく確認した＿＿＿、サインしてください。", fr: "Sign after checking the contents of the contract.",
        o: ["上で", "ところで", "とたんに", "限り"], a: 0,
        e: "\"After doing X (reflected), do Y\" → V-た上で." },
      { t: "meaning", q: "「仕事をする上で大切なこと」— sens ?",
        o: ["what is important for/in the work", "after working", "despite work", "because of work"], a: 0,
        e: "V-辞書 + 上で = within / to make X." },
      { t: "nuance", q: "Distinguer V-た上で de 〜てから :",
        o: ["V-た上で insiste sur une démarche réfléchie en deux étapes ; 〜てから marque une simple succession temporelle", "they are identical", "上で est familier", "てから exprime une cause"], a: 0,
        e: "上で = necessary, considered preliminary step; てから = simple \"after\"." },
    ],
  },

  {
    id: "g092", g: "〜に当たって／〜に当たり", m: "at the time of, on the occasion of (an important event)", f: "V-辞書／Nom + に当たって／に当たり",
    c: "time", lv: 2, rel: ["g012", "g013"],
    note: "Marks an important/sollemn moment when one is undertaking sth (beginning of the year, exam, moving house). More ceremonious than 〜とき. The variant に当たり is written.",
    ex: [
      { jp: "新年を迎えるに当たって、目標を立てた。", fr: "For the New Year, I set myself some goals." },
      { jp: "開会に当たり、一言ご挨拶申し上げます。", fr: "Allow me to say a few words at the start of the session." },
    ],
    qs: [
      { t: "fill", q: "留学する＿＿＿、いろいろな準備が必要だ。", fr: "When it comes to studying abroad, a lot of preparation is required.",
        o: ["に当たって", "に反して", "を込めて", "に比べて"], a: 0,
        e: "Important moment when undertaking sth → 〜に当たって." },
      { t: "meaning", q: "「契約に当たって、注意すべき点」— sens ?",
        o: ["what to look out for when taking out a contract", "despite contract", "about the contract only", "after the contract"], a: 0,
        e: "に当たって = on the (important) occasion of." },
      { t: "nuance", q: "Différence entre に当たって et に際して :",
        o: ["sens très proches (à l'occasion de) ; に際して est légèrement plus formel/écrit", "à当たって est familier vulgaire", "they are opposed", "に当たって exprime la cause"], a: 0,
        e: "Quasi-synonyms; に際して a little more formal. See [[g012]]." },
    ],
  },

  {
    id: "g093", g: "〜ところに／〜ところへ", m: "just when (an interruption occurs)", f: "V-ている／V-た／A + ところに／ところへ",
    c: "time", lv: 2, rel: ["g094", "g032"],
    note: "A new event occurs right during/at a given moment. ところへ often implies an arrival. The event \"falls\" on the current situation.",
    ex: [
      { jp: "出かけようとしたところに、電話が鳴った。", fr: "Just as I was about to go out, the phone rang." },
      { jp: "困っているところへ、友達が助けに来てくれた。", fr: "Just when I was in trouble, a friend came to help me." },
    ],
    qs: [
      { t: "fill", q: "昼寝をしている＿＿＿、来客があった。", fr: "Right during my nap, a visitor arrived.",
        o: ["ところに", "うちに", "に当たって", "限り"], a: 0,
        e: "An event occurs stack during the → 〜ところに／へ situation." },
      { t: "meaning", q: "「家を出たところへ雨が降ってきた」— sens ?",
        o: ["just as I was going out, it started to rain", "before we went out it was raining", "I went out because of the rain", "despite the rain I went out"], a: 0,
        e: "ところへ = just then an event occurs." },
      { t: "usage", q: "〜ところへ suggère souvent :",
        o: ["the arrival/survival of a new element", "a comparison", "a negative condition", "a simple habit"], a: 0,
        e: "ところへ marks the irruption of an event (often an arrival)." },
    ],
  },

  {
    id: "g094", g: "〜ところを", m: "whereas (you are in such a state); on the fact", f: "V／A／Nom+の + ところを",
    c: "time", lv: 2, rel: ["g093"],
    note: "(1) Polite phrase: お忙しいところを = \"while you're busy\". (2) Surprise sb. in the act: 寝ているところを見られた.",
    ex: [
      { jp: "お忙しいところを、お時間をいただき恐縮です。", fr: "I'm sorry to take up your time when you're busy." },
      { jp: "カンニングをしているところを先生に見つかった。", fr: "The teacher caught me cheating." },
    ],
    qs: [
      { t: "fill", q: "お休みの＿＿＿、申し訳ありません。", fr: "I'm sorry to bother you while you're resting.",
        o: ["ところを", "うちに", "に際して", "限り"], a: 0,
        e: "Polite phrase \"while you are...\" → 〜ところを." },
      { t: "meaning", q: "「逃げようとしたところを捕まった」— sens ?",
        o: ["surprised/caught trying to escape", "he fled after being caught", "he didn't run away", "he ran away to be caught"], a: 0,
        e: "ところを = on the spot, right in the action." },
      { t: "usage", q: "「お忙しいところをすみません」: ところを sert ici à :",
        o: ["greeting (while you're busy)", "express a cause", "give an order", "compare"], a: 0,
        e: "Very common polite use." },
    ],
  },

  {
    id: "g095", g: "〜が早いか", m: "that, as soon as (immediately)", f: "V-辞書／V-た + が早いか",
    c: "time", lv: 3, rel: ["g036", "g037", "g096"],
    note: "Two almost simultaneous actions: as soon as the first is over, the second occurs. Written/literary style. The second event is factual (often in the past tense).",
    ex: [
      { jp: "ベルが鳴るが早いか、生徒たちは教室を飛び出した。", fr: "As soon as the bell rang, the students rushed out of the classroom." },
      { jp: "席に着くが早いか、彼は話し始めた。", fr: "As soon as he sat down, he started talking." },
    ],
    qs: [
      { t: "fill", q: "彼は家に着く＿＿＿、ベッドに倒れ込んだ。", fr: "No sooner had he arrived home than he collapsed on the bed.",
        o: ["が早いか", "うちに", "に際して", "とともに"], a: 0,
        e: "Two almost simultaneous actions (literary) → 〜が早いか." },
      { t: "meaning", q: "「ドアが開くが早いか、犬が飛び出した」— sens ?",
        o: ["no sooner had the door been opened than the dog leapt out", "the dog opened the door", "before the door opens", "despite the open door"], a: 0,
        e: "が早いか = as soon as X, immediately Y." },
      { t: "nuance", q: "Registre de 〜が早いか :",
        o: ["written / literary", "slang", "childish", "polite interrogative"], a: 0,
        e: "が早いか belongs to the written style. Close to や否や [[g096]]." },
    ],
  },

  {
    id: "g096", g: "〜や否や／〜や", m: "as soon as, as soon as", f: "V-辞書 + や否や／や",
    c: "time", lv: 3, rel: ["g095", "g037"],
    note: "Literary synonym for が早いか. The short form 〜や is even more scripted. The second event follows immediately and is factual.",
    ex: [
      { jp: "その知らせを聞くや否や、彼女は泣き出した。", fr: "No sooner had she heard the news than she burst into tears." },
      { jp: "彼は立ち上がるや、部屋を出て行った。", fr: "As soon as he was up, he left the room." },
    ],
    qs: [
      { t: "fill", q: "電車のドアが開く＿＿＿、人々はなだれ込んだ。", fr: "As soon as the train doors opened, people poured in.",
        o: ["や否や", "うちに", "限り", "に当たって"], a: 0,
        e: "Immediate reaction (literary) → 〜や否や." },
      { t: "meaning", q: "「顔を見るや否や、怒り出した」— sens ?",
        o: ["as soon as he saw her face, he got angry", "before seeing his face", "despite his face", "he saw after getting angry"], a: 0,
        e: "や否や = as soon as / as soon as... as." },
      { t: "usage", q: "〜や否や et 〜が早いか sont :",
        o: ["literary synonyms (hardly... that)", "opposites", "familiar shapes", "causal markers"], a: 0,
        e: "Same meaning, written register. See [[g095]]." },
    ],
  },

  {
    id: "g097", g: "〜そばから", m: "barely... and already (and it's happening again)", f: "V-辞書／V-た + そばから",
    c: "time", lv: 3, rel: ["g095"],
    note: "Action immediately cancelled/repeated: no sooner has X done it, Y deletes it, again and again. Often a painful, recurring situation (覚えるそばから忘れる).",
    ex: [
      { jp: "覚えるそばから忘れてしまう。", fr: "As soon as I learn, I forget." },
      { jp: "片付けるそばから、子どもが散らかす。", fr: "No sooner have I tidied up than the child makes a mess again." },
    ],
    qs: [
      { t: "fill", q: "注意する＿＿＿、また同じ間違いをする。", fr: "No sooner has he been warned than he makes the same mistake again.",
        o: ["そばから", "が早いか", "に当たって", "うちに"], a: 0,
        e: "Action immediately cancelled and repeated → 〜そばから." },
      { t: "meaning", q: "「稼ぐそばから使ってしまう」— sens ?",
        o: ["no sooner earned than spent (and it's happening again)", "you win after spending", "we don't win", "we spend to win"], a: 0,
        e: "そばから = immediate repeat which cancels the effect." },
      { t: "nuance", q: "Ce qui distingue そばから de が早いか :",
        o: ["そばから implique la répétition (ça recommence sans cesse)", "そばから est plus poli", "が早いか implique la répétition", "they are identical"], a: 0,
        e: "そばから = repetitive and often frustrating." },
    ],
  },

  {
    id: "g098", g: "〜末（に）／〜た末（に）", m: "at the end of, finally (after much effort)", f: "V-た／Nom+の + 末（に）",
    c: "time", lv: 2, rel: ["g108", "g107"],
    note: "Final result after a long process/hesitation. The result can be good or bad. 〜末の＋Name modifies a name (苦労の末の成功).",
    ex: [
      { jp: "悩んだ末に、留学を決めた。", fr: "After much hesitation, I decided to study abroad." },
      { jp: "激しい議論の末、結論が出た。", fr: "After bitter debate, a conclusion was reached." },
    ],
    qs: [
      { t: "fill", q: "長時間話し合った＿＿＿、計画は中止になった。", fr: "After lengthy discussions, the project was cancelled.",
        o: ["末に", "うちに", "とたんに", "限り"], a: 0,
        e: "Final result after a long process → 〜た末に." },
      { t: "meaning", q: "「苦労の末、成功した」— sens ?",
        o: ["after a lot of hard work, we succeeded in", "effortlessly", "despite success", "before penalties"], a: 0,
        e: "末に = the culmination of a long process." },
      { t: "nuance", q: "Distinguer 〜末に de 〜あげく :",
        o: ["末に = résultat (bon ou mauvais) après un processus ; あげく = issue souvent négative après bien des complications", "they are identical", "末に est toujours négatif", "あげく est toujours positif"], a: 0,
        e: "あげく [[g099]] carries a negative nuance; 末に is neutral." },
    ],
  },

  {
    id: "g099", g: "〜あげく（に）／〜たあげく", m: "and finally (after all that), to finish (negative)", f: "V-た／Nom+の + あげく（に）",
    c: "time", lv: 2, rel: ["g098"],
    note: "Final outcome, usually bad/regrettable, after many efforts or complications. 〜あげくの果てに reinforces.",
    ex: [
      { jp: "さんざん迷ったあげく、何も買わなかった。", fr: "After hesitating for a long time, I finally didn't buy anything." },
      { jp: "口論のあげく、二人は別れた。", fr: "After a series of arguments, they finally went their separate ways." },
    ],
    qs: [
      { t: "fill", q: "彼は借金を重ねた＿＿＿、家を失った。", fr: "By accumulating debts, he finally lost his house.",
        o: ["あげく", "末に", "とたんに", "うちに"], a: 0,
        e: "Negative final outcome after many complications → 〜あげく." },
      { t: "meaning", q: "「長時間待たされたあげく、会えなかった」— sens ?",
        o: ["after a long wait, I finally didn't get to see it", "I could see it quickly", "I didn't wait", "I wanted to wait"], a: 0,
        e: "あげく = often disappointing outcome." },
      { t: "nuance", q: "Connotation typique de 〜あげく :",
        o: ["negative / regrettable", "positive and cheerful", "neutral and technical", "interrogative"], a: 0,
        e: "あげく introduces a generally unfortunate outcome. Compare 末に [[g098]]." },
    ],
  },

  {
    id: "g100", g: "〜きり／〜きりだ", m: "since (and nothing more); only, nothing but", f: "V-た／Nom + きり（＋ない）",
    c: "time", lv: 2, rel: ["g038"],
    note: "(1) V-たきり〜ない : after X, nothing more happened (出かけたきり帰ってこない). (2) Limitation: 二人きり = just the two of them; これきり = just this once.",
    ex: [
      { jp: "彼は朝出かけたきり、まだ帰ってこない。", fr: "He went out this morning and hasn't come back yet." },
      { jp: "二人きりで話したい。", fr: "I want to talk one-on-one, just the two of us." },
    ],
    qs: [
      { t: "fill", q: "祖母とは10年前に会った＿＿＿だ。", fr: "I've only seen my grandmother once, ten years ago (and not since).",
        o: ["きり", "ばかり", "うち", "限り"], a: 0,
        e: "\"Since X, nothing\" → V-たきり." },
      { t: "meaning", q: "「寝たきりの生活」— sens ?",
        o: ["bedridden life (unable to get out of bed)", "a pleasant sleep life", "an active life", "a nap"], a: 0,
        e: "寝たきり = bedridden condition (V-たきり = since X, nothing else)." },
      { t: "usage", q: "「これきりにしよう」: きり signifie ici :",
        o: ["only this time (limitation)", "for a long time", "compared to", "because of"], a: 0,
        e: "きり also expresses limitation (nothing but / only)." },
    ],
  },

  {
    id: "g101", g: "〜っぱなし", m: "leave as is (without reconditioning); do not stop", f: "V-ます（語幹） + っぱなし",
    c: "time", lv: 2, rel: ["g100"],
    note: "(1) Leaving a condition without correcting it: 電気をつけっぱなし (leaving the light on). Often a criticism (carelessness). (2) Continuous action: 立ちっぱなし (standing all the time).",
    ex: [
      { jp: "窓を開けっぱなしにして出かけた。", fr: "I left, leaving the window open." },
      { jp: "一日中立ちっぱなしで足が疲れた。", fr: "I've been on my feet all day and my feet hurt." },
    ],
    qs: [
      { t: "fill", q: "水を出し＿＿＿にしないでください。", fr: "Don't let the water run continuously.",
        o: ["っぱなし", "きり", "次第", "ばかり"], a: 0,
        e: "Leave a condition uncorrected → V-ますっぱなし." },
      { t: "meaning", q: "「テレビをつけっぱなしで寝た」— sens ?",
        o: ["falling asleep with the TV on", "turn off the TV to sleep", "watching TV awake", "turn on the TV when you wake up"], a: 0,
        e: "っぱなし = leave in a state (here on) without changing it." },
      { t: "nuance", q: "〜っぱなし porte souvent une nuance de :",
        o: ["neglect / criticism", "courtesy", "uncertainty", "comparison"], a: 0,
        e: "Often blamed for leaving things as they are." },
    ],
  },

  {
    id: "g102", g: "〜最中（に）", m: "in the middle of, just as", f: "V-ている／Nom+の + 最中（に）",
    c: "time", lv: 1, rel: ["g093", "g033"],
    note: "At the climax of an action in progress, when an interruption occurs. Emphasis on \"right at the worst time\".",
    ex: [
      { jp: "会議の最中に、携帯が鳴ってしまった。", fr: "In the middle of the meeting, my cell phone rang." },
      { jp: "食事をしている最中に、来客があった。", fr: "Right during lunch, a visitor arrived." },
    ],
    qs: [
      { t: "fill", q: "シャワーを浴びている＿＿＿、電話が鳴った。", fr: "In the middle of my shower, the phone rang.",
        o: ["最中に", "上で", "限り", "次第"], a: 0,
        e: "\"Stack during action\" → 〜最中に." },
      { t: "meaning", q: "「試験の最中に居眠りした」— sens ?",
        o: ["dozing off in the middle of an exam", "before the exam", "after the exam", "about the test"], a: 0,
        e: "最中に = right in the middle of the action." },
      { t: "nuance", q: "〜最中に insiste sur :",
        o: ["the climax of an action in progress (the worst moment)", "a simple succession", "a comparison", "a condition"], a: 0,
        e: "Nuance \"right on cue\"." },
    ],
  },

  {
    id: "g103", g: "〜かたわら", m: "while (doing X, doing Y in parallel)", f: "V-辞書／Nom+の + かたわら",
    c: "time", lv: 3, rel: ["g104", "g026"],
    note: "Carrying out a secondary activity alongside a main one, over time (career, life). Written style. 仕事のかたわら、小説を書く.",
    ex: [
      { jp: "彼は会社員として働くかたわら、小説を書いている。", fr: "While working as a salaried employee, he wrote novels." },
      { jp: "家事のかたわら、ボランティアもしている。", fr: "Alongside her household chores, she also does voluntary work." },
    ],
    qs: [
      { t: "fill", q: "大学で教える＿＿＿、研究も続けている。", fr: "While teaching at the university, he continued his research.",
        o: ["かたわら", "とたんに", "が早いか", "限り"], a: 0,
        e: "Parallel activity over → time 〜かたわら." },
      { t: "meaning", q: "「主婦業のかたわら、絵を描く」— sens ?",
        o: ["painting alongside her role as housewife", "paint instead of stains", "do not paint", "paint before stains"], a: 0,
        e: "かたわら = secondary activity carried out in parallel." },
      { t: "nuance", q: "Distinguer 〜かたわら de 〜ながら :",
        o: ["かたわら = deux activités sur la durée (vie/carrière) ; ながら = deux actions simultanées dans l'instant", "they are identical", "かたわら est familier", "ながら exprime le temps long"], a: 0,
        e: "かたわら = long scale; ながら = immediate simultaneity. See [[g026]]." },
    ],
  },

  {
    id: "g104", g: "〜がてら", m: "at the same time, making", f: "V-ます（語幹）／Nom + がてら",
    c: "time", lv: 3, rel: ["g103"],
    note: "Taking advantage of one action to do another at the same time (unique dual-purpose action). 散歩がてら買い物する = do the shopping while enjoying the walk.",
    ex: [
      { jp: "散歩がてら、パンを買ってきた。", fr: "I bought some bread while enjoying my walk." },
      { jp: "運動がてら、駅まで歩いた。", fr: "I walked to the station for a bit of exercise." },
    ],
    qs: [
      { t: "fill", q: "気分転換＿＿＿、近所を散歩した。", fr: "I took a walk around the neighborhood to take my mind off things, at the same time.",
        o: ["がてら", "かたわら", "最中に", "限り"], a: 0,
        e: "A dual-purpose action → 〜がてら." },
      { t: "meaning", q: "「買い物がてら友達に会った」— sens ?",
        o: ["see a friend while shopping", "shopping instead of seeing a friend", "don't see the friend", "see the friend before the races"], a: 0,
        e: "がてら = by the same token." },
      { t: "nuance", q: "Différence entre がてら et かたわら :",
        o: ["がてら = une seule sortie/action à double but ; かたわら = deux activités menées durablement en parallèle", "they are identical", "がてら concerne la carrière", "かたわら est ponctuel"], a: 0,
        e: "がてら = one-off; かたわら = over time. See [[g103]]." },
    ],
  },

  /* ===================== AJOUTS — CONDITION & CAUSE ===================== */

  {
    id: "g105", g: "〜さえ〜ば", m: "it is enough that... for that; if only", f: "Nom + さえ＋V-ば／A-ければ／Nならば",
    c: "condition", lv: 1, rel: ["g041", "g119"],
    note: "Minimum sufficient condition: \"one thing is enough\". さえ highlights the keyword, ば introduces the condition.",
    ex: [
      { jp: "君さえいれば、他には何もいらない。", fr: "If only you were here, I wouldn't need anything else." },
      { jp: "健康さえあれば、何でもできる。", fr: "If you're healthy, you can do anything." },
    ],
    qs: [
      { t: "fill", q: "辞書＿＿＿あれば、この翻訳はできる。", fr: "All you need is a dictionary to make this translation.",
        o: ["さえ", "だけ", "しか", "ほど"], a: 0,
        e: "Minimum sufficient condition → 〜さえ〜ば." },
      { t: "meaning", q: "「練習さえすれば上手くなる」— sens ?",
        o: ["practice makes perfect", "practising is pointless", "even without practice, you can improve", "many conditions are required"], a: 0,
        e: "さえ〜ば = only one condition is required." },
      { t: "nuance", q: "〜さえ〜ば insiste sur :",
        o: ["the minimum and only condition", "total impossibility", "a temporal succession", "a comparison"], a: 0,
        e: "さえ emphasizes that this is the one and only necessary condition." },
    ],
  },

  {
    id: "g106", g: "〜としたら／〜とすれば／〜とすると", m: "assuming that", f: "普通形 + としたら／とすれば／とすると",
    c: "condition", lv: 1, rel: ["g082", "g116"],
    note: "Pure hypothesis: reasoning from an assumed case. とすれば emphasizes deduction; とすると/としたら are slightly more neutral.",
    ex: [
      { jp: "このまま行くとしたら、何時間かかりますか。", fr: "If we go like this, how many hours will it take?" },
      { jp: "彼女が本当のことを言っているとすれば、事件は複雑だ。", fr: "Assuming she's telling the truth, the case is complex." },
    ],
    qs: [
      { t: "fill", q: "もし自分が鳥だった＿＿＿、どこへでも飛んで行くのに。", fr: "If I were a bird, I'd fly anywhere.",
        o: ["としたら", "からこそ", "に際して", "に基づいて"], a: 0,
        e: "Fictitious hypothesis → 〜としたら." },
      { t: "meaning", q: "「それが本当だとすれば、大変なことだ」— sens ?",
        o: ["if you assume it's true, it's serious", "because it's true", "although it's true", "after it was true"], a: 0,
        e: "とすれば = assuming / if we assume." },
      { t: "nuance", q: "Parmi les trois variantes, laquelle insiste le plus sur la déduction ?",
        o: ["とすれば", "としたら", "とすると", "they are identical"], a: 0,
        e: "とすれば emphasizes the inferred logical consequence." },
    ],
  },

  {
    id: "g107", g: "〜ものなら", m: "if ever (possible); if by chance (slight threat)", f: "V-可能形 + ものなら（V-辞書）；V-辞書 + ものなら",
    c: "condition", lv: 2, rel: ["g108", "g041"],
    note: "(1) Wishful thinking: できるものならやってみたい (if only that were possible). (2) Veiled threat: そんなことをするものなら、後悔するぞ.",
    ex: [
      { jp: "やり直せるものなら、やり直したい。", fr: "If only I could do it all over again, I would." },
      { jp: "逃げるものなら、逃げてみろ。", fr: "Try to get away, if you dare." },
    ],
    qs: [
      { t: "fill", q: "もし過去に戻れる＿＿＿、あの時の失敗を取り消したい。", fr: "If I could ever go back in time, I would erase this mistake.",
        o: ["ものなら", "からには", "以上は", "限り"], a: 0,
        e: "Almost unattainable wish → 〜ものなら." },
      { t: "meaning", q: "「文句を言うものなら、すぐ首にするぞ」— sens ?",
        o: ["if you ever complain, you're fired on the spot", "you can complain", "despite complaints", "because you complain"], a: 0,
        e: "ものなら (meaning threat): if you dare to do X, beware." },
      { t: "nuance", q: "Distinguer les deux emplois de 〜ものなら :",
        o: ["V-可能形 + ものなら = souhait irréalisable ; V-辞書 + ものなら = défi / menace", "they are always identical", "ものなら = simple condition", "ものなら = cause"], a: 0,
        e: "The verb before ものなら determines the meaning." },
    ],
  },

  {
    id: "g108", g: "〜ようものなら", m: "if we dared (with serious consequences)", f: "V-意向形 + ものなら",
    c: "condition", lv: 3, rel: ["g107"],
    note: "Variant of ものなら which accentuates the serious/disastrous nature of the consequence. Often with an explicit threat.",
    ex: [
      { jp: "上司に反論しようものなら、大変なことになる。", fr: "If you dare to contradict your superior, you're in trouble." },
      { jp: "ここで失敗しようものなら、取り返しがつかない。", fr: "If we fail here, it's irreparable." },
    ],
    qs: [
      { t: "fill", q: "遅刻し＿＿＿、絶対怒られる。", fr: "If you ever allowed yourself to be late, you'd probably get scolded.",
        o: ["ようものなら", "ものなら", "てからでないと", "て以来"], a: 0,
        e: "Serious consequence if we dare X → 〜ようものなら." },
      { t: "meaning", q: "「彼の前で失敗しようものなら、終わりだ」— sens ?",
        o: ["if you ever fail in front of him, it's over", "you can fail", "after failure", "despite failure"], a: 0,
        e: "ようものなら = insured disaster in the event of X." },
      { t: "usage", q: "〜ようものなら s'emploie avec :",
        o: ["V-意向形 (〜よう)", "V-て", "V-た", "V-ない"], a: 0,
        e: "The intentional form ようものなら reinforces the threat." },
    ],
  },

  {
    id: "g109", g: "〜ないことには", m: "unless (don't do X), without X impossible", f: "V-ない／A-くない／Nom+でない + ことには",
    c: "condition", lv: 2, rel: ["g041", "g119"],
    note: "Essential condition for the continuation to be possible: \"without X, Y impossible\". Often followed by a negation or an expression of impossibility.",
    ex: [
      { jp: "実際に試してみないことには、分からない。", fr: "Without actually trying it on, you can't know." },
      { jp: "本人が来ないことには、話し合いにならない。", fr: "Without the presence of the interested party, discussion is impossible." },
    ],
    qs: [
      { t: "fill", q: "予算がわから＿＿＿、計画が立てられない。", fr: "Without knowing the budget, it's impossible to draw up a plan.",
        o: ["ないことには", "なければ", "なくて", "ないで"], a: 0,
        e: "Essential prerequisite → 〜ないことには." },
      { t: "meaning", q: "「勉強しないことには、試験に受からない」— sens ?",
        o: ["without studying, you can't pass the exam", "even without studying you can succeed", "studying is useless", "you can only succeed if you don't study"], a: 0,
        e: "ないことには = X is the sine qua non condition." },
      { t: "nuance", q: "La suite de 〜ないことには est presque toujours :",
        o: ["a negative expression of impossibility", "a positive expression", "an order", "a question"], a: 0,
        e: "ないことには calls 〜ない / 〜にならない / 難しい etc." },
    ],
  },

  {
    id: "g110", g: "〜からこそ", m: "precisely because, it's precisely because", f: "普通形 + からこそ",
    c: "condition", lv: 1, rel: ["g085", "g111"],
    note: "Isolates and emphasizes the real cause, often to explain a positive result or refute a misunderstanding. Strong emphasis.",
    ex: [
      { jp: "苦労したからこそ、今の成功がある。", fr: "It's precisely because I've suffered that today's success exists." },
      { jp: "信頼しているからこそ、厳しいことを言う。", fr: "Precisely because I trust you, I tell you the hard stuff." },
    ],
    qs: [
      { t: "fill", q: "努力した＿＿＿、この結果が得られた。", fr: "It's precisely because you've worked hard that you've achieved this result.",
        o: ["からこそ", "から", "ことから", "ので"], a: 0,
        e: "Insist on real cause → 〜からこそ." },
      { t: "meaning", q: "「子どもだからこそ、純粋なんだ」— sens ?",
        o: ["it's precisely because it's a child that it's pure", "despite his young age", "even though he is a child", "the child is pure for no reason"], a: 0,
        e: "からこそ highlights the cause as an essential element." },
      { t: "nuance", q: "Nuance de からこそ par rapport à から :",
        o: ["からこそ insiste : c'est CETTE raison et pas une autre", "they are identical", "からこそ est négatif", "から insiste davantage"], a: 0,
        e: "こそ (emphasis particle) isolates and enhances the cause." },
    ],
  },

  {
    id: "g111", g: "〜ことから", m: "of the fact that this is where", f: "普通形 + ことから",
    c: "condition", lv: 2, rel: ["g110", "g043"],
    note: "Explanation of an origin or name: \"from the fact that X, we deduce / that's why the name is...\". Different from 〜ので (direct cause).",
    ex: [
      { jp: "葉が三枚あることから、この草は「三葉草」と呼ばれる。", fr: "Because the plant has three leaves, it's called \"clover\"." },
      { jp: "声が大きいことから、彼は「雷」というあだ名がついた。", fr: "His loud voice earned him the nickname \"Thunder\"." },
    ],
    qs: [
      { t: "fill", q: "この地域が霧で有名な＿＿＿、「霧の町」と呼ばれている。", fr: "Because this region is famous for its fog, it's known as the \"city of fog\".",
        o: ["ことから", "ことで", "ことに", "ことだから"], a: 0,
        e: "Origin of a denomination or deduction → 〜ことから." },
      { t: "meaning", q: "「態度が堂々としていることから、リーダーに選ばれた」— sens ?",
        o: ["because of his assertive attitude, he was chosen as the leader", "despite his confident demeanor", "even though he's the leader", "to become a leader"], a: 0,
        e: "ことから = explanatory basis for a deduction/decision." },
      { t: "nuance", q: "〜ことから s'emploie surtout pour :",
        o: ["explain the origin of a name / a deduction based on a fact", "express an immediate direct cause", "express a wish", "express a comparison"], a: 0,
        e: "ことから ≠ ので: it explains the origin or a deduction, not just a cause." },
    ],
  },

  {
    id: "g112", g: "〜だけあって", m: "to live up to its reputation; as you would expect from", f: "普通形／Nom + だけあって",
    c: "condition", lv: 2, rel: ["g045", "g110"],
    note: "The result is logically commensurate with X (merit, status, effort). X positively justifies Y. Positive nuance.",
    ex: [
      { jp: "プロだけあって、仕事が丁寧だ。", fr: "As you'd expect from a pro, the work is meticulous." },
      { jp: "練習しただけあって、上達が早い。", fr: "Progress has been rapid, commensurate with the efforts made." },
    ],
    qs: [
      { t: "fill", q: "有名シェフ＿＿＿、料理の味は最高だ。", fr: "As you'd expect from a renowned chef, the food is excellent.",
        o: ["だけあって", "だけに", "ばかりに", "せいで"], a: 0,
        e: "Result worthy of merit/status → 〜だけあって." },
      { t: "meaning", q: "「長年の経験があるだけあって、判断が的確だ」— sens ?",
        o: ["his long years of experience, his judgement is correct", "despite experience", "because he lacks experience", "although experienced"], a: 0,
        e: "だけあって = merit logically justifies the (positive) result." },
      { t: "nuance", q: "Distinguer だけあって de だけに :",
        o: ["だけあって = résultat positif attendu ; だけに = renforcement (bon ou mauvais)", "they are identical", "だけに est toujours positif", "だけあって est négatif"], a: 0,
        e: "だけあって → rewarding result; だけに [[g045]] can be positive or negative." },
    ],
  },

  {
    id: "g113", g: "〜あまり（に）", m: "so much that", f: "V-辞書＋あまり／Nom+の+あまり",
    c: "condition", lv: 2, rel: ["g046", "g158"],
    note: "An excessive state/feeling leads to an involuntary, often negative consequence. 心配のあまり眠れなかった (worrying so much you can't sleep).",
    ex: [
      { jp: "嬉しさのあまり、涙が出てしまった。", fr: "So happy she cried." },
      { jp: "心配するあまり、食事も喉を通らない。", fr: "All that worrying made it impossible to swallow anything." },
    ],
    qs: [
      { t: "fill", q: "緊張する＿＿＿、頭が真っ白になった。", fr: "So stressed that his mind went blank.",
        o: ["あまり", "ばかりに", "せいで", "からこそ"], a: 0,
        e: "Excessive condition → unintended consequence → 〜あまり." },
      { t: "meaning", q: "「驚きのあまり声が出なかった」— sens ?",
        o: ["so surprised that no sound came out", "despite the surprise", "to be surprised", "after the surprise"], a: 0,
        e: "〜のあまり = by dint of (excessive feeling)." },
      { t: "nuance", q: "〜あまり porte généralement une connotation :",
        o: ["involuntary, often negative (excessive consequences)", "planned", "neutral and technical", "positive and desirable"], a: 0,
        e: "The consequence of あまり is unintended, excessive." },
    ],
  },

  {
    id: "g114", g: "〜につき", m: "because of (formal); by, because of", f: "Nom + につき",
    c: "condition", lv: 2, rel: ["g003"],
    note: "(1) Formal cause (signs, announcements) : 工事中につき通行止め (road blocked for work). (2) Distributive: 一人につき (per person). Formal/written register.",
    ex: [
      { jp: "都合につき、本日は休業します。", fr: "For your convenience, we are closed today." },
      { jp: "一人につき、三枚まで購入できます。", fr: "You can buy up to three tickets per person." },
    ],
    qs: [
      { t: "fill", q: "改装工事＿＿＿、しばらく休館します。", fr: "Due to renovation work, we are temporarily closed.",
        o: ["につき", "にとって", "について", "にわたって"], a: 0,
        e: "Formal cause (sign/announcement) → 〜につき." },
      { t: "meaning", q: "「一個につき500円」— sens ?",
        o: ["500 yen per item (distributive)", "500 yen about an article", "500 yen despite article", "500 yen for all"], a: 0,
        e: "につき (distributive) = per unit." },
      { t: "usage", q: "〜につき s'emploie principalement dans quel registre ?",
        o: ["formal / written (signs, announcements)", "colloquial / oral", "childish", "poetic"], a: 0,
        e: "につき is typical of official signs, notices and writings." },
    ],
  },

  {
    id: "g115", g: "〜とあって", m: "given that (special circumstance), due to the fact that", f: "普通形／Nom + とあって",
    c: "condition", lv: 3, rel: ["g043", "g110"],
    note: "Emphasizes a particular circumstance that explains a situation/reaction. Semi-formal register. The circumstance is often unusual or striking.",
    ex: [
      { jp: "連休とあって、高速道路は渋滞している。", fr: "As it's a long weekend, the freeway is jammed." },
      { jp: "有名人が来るとあって、会場は大にぎわいだ。", fr: "The fact that a celebrity is coming means the room is buzzing with excitement." },
    ],
    qs: [
      { t: "fill", q: "初の海外公演＿＿＿、練習に熱が入っている。", fr: "As this is their first foreign tour, rehearsals are very intense.",
        o: ["とあって", "について", "として", "にとって"], a: 0,
        e: "Special circumstance that explains a → 〜とあって reaction." },
      { t: "meaning", q: "「試験前とあって、図書館は満員だ」— sens ?",
        o: ["as it's before the exam, the library is full", "despite examination", "about the test", "after the exam"], a: 0,
        e: "とあって = special circumstance → explainable state/reaction." },
      { t: "nuance", q: "〜とあって décrit une circonstance qui est :",
        o: ["unusual, which justifies the condition", "ordinary", "hypothetical", "negative only"], a: 0,
        e: "とあって presupposes an unusual circumstance." },
    ],
  },

  {
    id: "g116", g: "〜ては（〜ては）／〜ていては", m: "if (whenever), whenever (and that's bad)", f: "V-て + は／V-ていて + は",
    c: "condition", lv: 2, rel: ["g041", "g109"],
    note: "(1) Alternating repetition: 飲んでは食べ、食べては飲む. (2) Recurring undesirable condition (often followed by 〜ない): 毎日遅刻しては困る.",
    ex: [
      { jp: "毎日そんなに食べていては、太るのは当然だ。", fr: "If you eat so much every day, it's normal to put on weight." },
      { jp: "やっては消し、消してはやり直す。", fr: "We do it, erase it, erase it, do it again." },
    ],
    qs: [
      { t: "fill", q: "そんなに夜更かしし＿＿＿、体に悪い。", fr: "If you stay up this late, it's bad for your health.",
        o: ["ては", "たら", "ても", "なら"], a: 0,
        e: "Recurring undesirable condition → 〜ては." },
      { t: "meaning", q: "「考えては書き、書いては消す」— sens ?",
        o: ["think and write, write and erase (alternating)", "we still think", "we don't write", "only once"], a: 0,
        e: "〜ては〜 expresses an alternation of repeated actions." },
      { t: "nuance", q: "「ミスをしては困る」: 〜ては exprime ici :",
        o: ["an undesirable condition whose recurrence is problematic", "a single cause", "a future wish", "neutral alternation"], a: 0,
        e: "〜ては (+ 困る/いけない) = it's problematic that it repeats." },
    ],
  },

  {
    id: "g117", g: "〜なくしては／〜なしには", m: "without (X indispensable), impossible without", f: "Nom + なくしては／なしには（〜ない）",
    c: "condition", lv: 2, rel: ["g076", "g109"],
    note: "X is an absolutely necessary condition. The negation at the end of the sentence is almost always present.",
    ex: [
      { jp: "努力なくして、成功はない。", fr: "No effort, no success." },
      { jp: "あなたの協力なしには、この仕事は完成しない。", fr: "Without your cooperation, this work will not be completed." },
    ],
    qs: [
      { t: "fill", q: "愛情＿＿＿、子どもは健全に育たない。", fr: "Without love, a child cannot grow up healthy.",
        o: ["なくしては", "について", "にわたって", "として"], a: 0,
        e: "Absolutely necessary condition → 〜なくしては." },
      { t: "meaning", q: "「信頼なしには良い関係は築けない」— sens ?",
        o: ["without trust, it's impossible to build a good relationship", "trust is useless", "despite confidence", "about trust"], a: 0,
        e: "なしには = X is essential." },
      { t: "nuance", q: "〜なくしては et 〜ないことには [[g109]] diffèrent par :",
        o: ["なくしては porte sur un nom (état) ; ないことには porte sur une action à accomplir", "they are identical", "なくしては est positif", "ないことには s'emploie avec des noms"], a: 0,
        e: "なくしては + Name (X absent); ないことには + V-ない (action not taken)." },
    ],
  },

  {
    id: "g118", g: "〜ばこそ", m: "it's precisely because... (formal emphasis)", f: "V-ば + こそ",
    c: "condition", lv: 3, rel: ["g110"],
    note: "Emphatic, formal version of からこそ. Insists on real cause, often to justify a difficult action or defend a decision.",
    ex: [
      { jp: "あなたのことを思えばこそ、厳しく言うのです。", fr: "It's precisely with you in mind that I say harsh things." },
      { jp: "成功を信じればこそ、努力できる。", fr: "It's because we believe in success that we can make the effort." },
    ],
    qs: [
      { t: "fill", q: "将来のことを考えれ＿＿＿、今が大事だ。", fr: "It's precisely in thinking about the future that the present is important.",
        o: ["ばこそ", "ばかりに", "からこそ", "ものの"], a: 0,
        e: "Formal emphasis on cause → 〜ばこそ." },
      { t: "meaning", q: "「信頼すればこそ、任せるのだ」— sens ?",
        o: ["it's precisely because we trust him that we entrust him with the task.", "we confide in him despite our doubts", "it is not entrusted", "because we don't trust it"], a: 0,
        e: "ばこそ = real cause highlighted (formal register)." },
      { t: "usage", q: "〜ばこそ est la version … de からこそ :",
        o: ["formal / literary", "familiar", "interrogative", "negative"], a: 0,
        e: "ばこそ = supported register of からこそ." },
    ],
  },

  {
    id: "g119", g: "〜ことだし", m: "given that, since (reason in context)", f: "普通形 + ことだし",
    c: "condition", lv: 2, rel: ["g043", "g115"],
    note: "Give a practical/contextual reason for what follows. Oral/familiar tone, often implies a decision or suggestion. May follow: 〜ことだし、〜ことだし.",
    ex: [
      { jp: "せっかく来たことだし、もう少しゆっくりしていってください。", fr: "Since you've made the effort to come, please stay a little longer." },
      { jp: "天気もいいことだし、散歩でもしよう。", fr: "Since the weather's fine, let's take a walk." },
    ],
    qs: [
      { t: "fill", q: "時間もある＿＿＿、映画でも見ようか。", fr: "Since we've got time, we could go and see a film.",
        o: ["ことだし", "からこそ", "ことから", "ことに"], a: 0,
        e: "Contextual practical reason → 〜ことだし." },
      { t: "meaning", q: "「新年だることだし、気持ちを切り替えよう」— sens ?",
        o: ["since it's a new year, let's change our mindset", "despite the new year", "about the new year", "after the new year"], a: 0,
        e: "ことだし = \"given the circumstances (X), let's do Y\"." },
      { t: "usage", q: "〜ことだし est de registre :",
        o: ["oral / semi-familiar", "very formal / written", "childish", "poetic"], a: 0,
        e: "ことだし can be heard in natural conversation." },
    ],
  },

  {
    id: "g120", g: "〜てからというもの", m: "since (and everything has changed)", f: "V-て + からというもの",
    c: "time", lv: 2, rel: ["g038"],
    note: "Lasting change since a pivotal event. Insists that since X, things are fundamentally different. More emphatic than 〜てから.",
    ex: [
      { jp: "子どもが生まれてからというもの、生活が一変した。", fr: "Since the birth of my child, my life has changed completely." },
      { jp: "あの映画を見てからというもの、毎日泣いている。", fr: "I've cried every day since I saw this film." },
    ],
    qs: [
      { t: "fill", q: "彼女と付き合い始めて＿＿＿、毎日が楽しい。", fr: "Since I started dating her, every day has been a joy.",
        o: ["からというもの", "から", "て以来", "とともに"], a: 0,
        e: "Lasting change since a pivotal event → 〜てからというもの." },
      { t: "meaning", q: "「転職してからというもの、忙しくなった」— sens ?",
        o: ["since changing jobs, everything has become (permanently) busier", "before changing jobs", "despite change", "to change jobs"], a: 0,
        e: "からというもの emphasizes sustainable transformation." },
      { t: "nuance", q: "Distinguer 〜てからというもの de 〜て以来 [[g038]] :",
        o: ["からというもの insiste sur le changement radical ; て以来 note simplement la continuité depuis X", "they are identical", "て以来 exprime le changement radical", "からというもの est plus formel"], a: 0,
        e: "からというもの = emphasis on lasting disruption." },
    ],
  },

  /* ===================== AJOUTS — MODALITÉ & JUGEMENT ===================== */

  {
    id: "g121", g: "〜ことはない", m: "no need to", f: "V-辞書 + ことはない",
    c: "modality", lv: 1, rel: ["g054", "g131"],
    note: "Discourages or renders unnecessary an action. \"There is no need to...\". Different from 〜ことができない (impossibility) and 〜ないことはない (double negation = possible).",
    ex: [
      { jp: "そんなに急ぐことはない。", fr: "There's no need to get that down." },
      { jp: "一度の失敗で落ち込むことはない。", fr: "Don't be discouraged by a single failure." },
    ],
    qs: [
      { t: "fill", q: "たった一度のミスで謝り続ける＿＿＿。", fr: "No need to apologize endlessly for a single mistake.",
        o: ["ことはない", "わけにはいかない", "はずがない", "べきだ"], a: 0,
        e: "\"Useless to / no need to\" → 〜ことはない." },
      { t: "meaning", q: "「泣くことはない、大丈夫だよ」— sens ?",
        o: ["no need to cry, you'll be fine", "you must be crying", "you can't cry", "if only you'd cry"], a: 0,
        e: "ことはない = advise not to do X (it's useless)." },
      { t: "nuance", q: "Distinguer 〜ことはない de 〜ないことはない :",
        o: ["ことはない = inutile ; ないことはない = double négation (c'est possible, bien que…)", "they are identical", "ないことはない = impossible", "ことはない = il faut faire"], a: 0,
        e: "ないことはない = possible in spite of everything (implied reluctant)." },
    ],
  },

  {
    id: "g122", g: "〜ものではない／〜もんじゃない", m: "you must not (social norm)", f: "V-辞書 + ものではない",
    c: "modality", lv: 2, rel: ["g062", "g054"],
    note: "Prohibits or disapproves on the basis of a moral/social norm. もんじゃない is the colloquial equivalent.",
    ex: [
      { jp: "人の秘密を勝手にしゃべるものではない。", fr: "We're not going to reveal someone's secret without permission." },
      { jp: "食事中にそんな話をするものではない。", fr: "This is not a conversation to be had at the dinner table." },
    ],
    qs: [
      { t: "fill", q: "目上の人に失礼な言葉を使う＿＿＿。", fr: "You mustn't use disrespectful words towards your superiors.",
        o: ["ものではない", "ことはない", "はずがない", "わけにはいかない"], a: 0,
        e: "Standard-based prohibition → 〜ものではない." },
      { t: "meaning", q: "「お世話になった人を裏切るものではない」— sens ?",
        o: ["we must not betray those who have helped us", "it's impossible to betray them", "no need to help them", "we'll betray them for sure"], a: 0,
        e: "ものではない = negative social or moral prescription." },
      { t: "nuance", q: "Registre de 〜もんじゃない :",
        o: ["familier / oral (variante de ものではない)", "very formal", "technical writing", "poetic"], a: 0,
        e: "もんじゃない is the colloquial contracted form of ものではない." },
    ],
  },

  {
    id: "g123", g: "〜というものだ", m: "this is what we really call", f: "普通形 + というものだ",
    c: "modality", lv: 2, rel: ["g050", "g124"],
    note: "Asserts that something perfectly illustrates the definition of a concept. Often after 〜こそ for emphasis. Approving or ironic nuance.",
    ex: [
      { jp: "困ったときに助けてくれる人こそ、本当の友達というものだ。", fr: "A true friend is someone who helps you through difficult times." },
      { jp: "子どもに勉強させるだけでは、教育とはいえない。大切なのは考える力を育てることこそ、真の教育というものだ。", fr: "That's what real education is all about." },
    ],
    qs: [
      { t: "fill", q: "諦めずに続ける、それこそが努力という＿＿＿。", fr: "Keep going without giving up - that's what effort really is.",
        o: ["ものだ", "わけだ", "はずだ", "べきだ"], a: 0,
        e: "Emblematic definition of a concept → 〜というものだ." },
      { t: "meaning", q: "「こんな仕打ちを受けるなんて、理不尽というものだ」— sens ?",
        o: ["that's what we call injustice.", "maybe it's just", "it's supposed to be fair", "you have to endure"], a: 0,
        e: "というものだ claims that X perfectly illustrates the notion." },
      { t: "nuance", q: "〜というものだ vs 〜わけだ :",
        o: ["というものだ = définition emblématique ; わけだ = explication logique d'une situation", "they are identical", "わけだ exprime la définition", "というものだ = cause"], a: 0,
        e: "というものだ = \"this is the true definition\"; わけだ = \"it makes sense\"." },
    ],
  },

  {
    id: "g124", g: "〜というものではない／〜というものでもない", m: "not necessarily, not necessarily", f: "普通形 + というものではない",
    c: "modality", lv: 2, rel: ["g123", "g051"],
    note: "Nuances or corrects a generalization: \"we can't say that X is always true\". Close to とは限らない but more axiomatic.",
    ex: [
      { jp: "謝れば何でも解決するというものではない。", fr: "Just because we say we're sorry doesn't mean we can solve everything." },
      { jp: "高ければ良いというものでもない。", fr: "Just because it's expensive doesn't mean it's good." },
    ],
    qs: [
      { t: "fill", q: "お金があれば幸せになれる＿＿＿。", fr: "It's not necessarily money that makes you happy.",
        o: ["というものではない", "わけだ", "はずがない", "に違いない"], a: 0,
        e: "Nuance a generalization → 〜というものではない." },
      { t: "meaning", q: "「長ければ良い文章というものではない」— sens ?",
        o: ["good text doesn't have to be long", "long texts are always good", "short texts are bad", "you must write long"], a: 0,
        e: "というものではない = rejects generalization." },
      { t: "nuance", q: "〜というものではない et 〜とは限らない [[g142]] :",
        o: ["sens proches (pas forcément) ; というものではない plus axiomatique ; とは限らない plus factuel", "opposite", "というものではない est plus factuel", "they have nothing to do"], a: 0,
        e: "Slight nuance: というものではない denies a principle; とは限らない nuances a fact." },
    ],
  },

  {
    id: "g125", g: "〜まい", m: "not to do (negative intention); improbable (negation of true)", f: "V-辞書（一段: 語幹）+ まい",
    c: "modality", lv: 2, rel: ["g054", "g137"],
    note: "(1) Negative intention in 1st person: もう二度と遅刻するまい (I'll never be late again). (2) Negative probability (3rd pers.): あの人はもう来るまい. Rather formal register.",
    ex: [
      { jp: "あんな思いはもう二度とするまいと誓った。", fr: "I vowed never to go through an experience like that again." },
      { jp: "あれほど失敗したのだから、もう挑戦するまい。", fr: "After such a failure, he probably won't try again." },
    ],
    qs: [
      { t: "fill", q: "彼女を傷つけるようなことは、二度と言う＿＿＿と思った。", fr: "I told myself I'd never say anything that could hurt her again.",
        o: ["まい", "はずがない", "わけにはいかない", "べきでない"], a: 0,
        e: "Firm negative intent (1st person) → 〜まい." },
      { t: "meaning", q: "「あの映画はもう見るまい」— sens ?",
        o: ["I've decided to stop watching this film", "I will see this film", "this film is impossible to see", "I must watch this film"], a: 0,
        e: "まい (1st pers.) = decision not to do." },
      { t: "usage", q: "〜まい appartient à quel registre ?",
        o: ["formal / semi-literary", "very familiar", "childish", "interrogative"], a: 0,
        e: "まい is formal; orally we prefer 〜ないつもり." },
    ],
  },

  {
    id: "g126", g: "〜ようがない／〜ようもない", m: "impossible to, no way to", f: "V-ます（語幹） + ようがない／ようもない",
    c: "modality", lv: 2, rel: ["g055", "g138"],
    note: "Absolute impossibility linked to lack of means or method. 〜ようがない insists more than 〜できない on the absence of a possible way.",
    ex: [
      { jp: "証拠がなければ、証明しようがない。", fr: "Without proof, it's impossible to demonstrate anything." },
      { jp: "これほど難しい問題、解きようがない。", fr: "A problem this difficult, there's no way to solve it." },
    ],
    qs: [
      { t: "fill", q: "連絡先が分からなければ、知らせ＿＿＿。", fr: "Without his contact details, it would be impossible to contact him.",
        o: ["ようがない", "ことはない", "べきでない", "まい"], a: 0,
        e: "No way possible → 〜ようがない." },
      { t: "meaning", q: "「こんな状況では、助け＿＿＿」 — compléter correctement :",
        o: ["ようがない（aucun moyen d'aider）", "ことはない（inutile d'aider）", "まい（je n'aiderai pas）", "べきだ（je dois aider）"], a: 0,
        e: "ようがない = no method possible." },
      { t: "nuance", q: "Différence entre 〜ようがない et 〜できない :",
        o: ["ようがない insiste sur l'absence totale de méthode/voie ; できない énonce simplement l'incapacité", "they are identical", "できない est plus emphatique", "ようがない est plus simple"], a: 0,
        e: "ようがない emphasizes the non-existence of a means." },
    ],
  },

  {
    id: "g127", g: "〜っこない", m: "certainly not, no chance of that (colloquial)", f: "V-ます（語幹） + っこない",
    c: "modality", lv: 2, rel: ["g049", "g126"],
    note: "Colloquial register. Strong negative certainty: \"it's impossible / no chance\". 分かりっこない = no chance of understanding.",
    ex: [
      { jp: "あんな難しい試験、受かりっこない。", fr: "No chance of passing such a difficult exam." },
      { jp: "あの子がそんなことをするはずがない。分かりっこないよ。", fr: "There's no way he'd understand." },
    ],
    qs: [
      { t: "fill", q: "こんな短時間で終わり＿＿＿よ。", fr: "No chance of finishing in such a short time!",
        o: ["っこない", "ことはない", "はずがない", "わけがない"], a: 0,
        e: "Familiar negative certainty → 〜っこない." },
      { t: "meaning", q: "「そんな嘘、信じっこない」— sens ?",
        o: ["no chance of believing such a lie", "I believe the lie", "you have to believe", "maybe I believe"], a: 0,
        e: "っこない = absolute impossibility (colloquial tone)." },
      { t: "usage", q: "〜っこない est de registre :",
        o: ["colloquial / oral", "very strong", "formal/written", "technical neutral"], a: 0,
        e: "っこない is clearly familiar. In writing/formal: はずがない / わけがない." },
    ],
  },

  {
    id: "g128", g: "〜かのようだ／〜かのように", m: "as if", f: "普通形（現在）+ かのようだ／かのように",
    c: "modality", lv: 2, rel: ["g048"],
    note: "Fictitious comparison: something looks/feels like X, but isn't. まるで〜かのようだ (it really looks like...). か reinforces the unreal character.",
    ex: [
      { jp: "まるで夢を見ているかのように、美しい景色だった。", fr: "A landscape so beautiful it was like a dream." },
      { jp: "彼は何もなかったかのように、笑っていた。", fr: "He smiled as if nothing had happened." },
    ],
    qs: [
      { t: "fill", q: "その俳優は本物の武士である＿＿＿演じた。", fr: "The actor performed as if he were a real samurai.",
        o: ["かのように", "ようで", "はずに", "べきに"], a: 0,
        e: "Fictional comparison → 〜かのように." },
      { t: "meaning", q: "「まるで知っているかのように話す」— sens ?",
        o: ["talking as if he knows (when he doesn't)", "because he knows", "don't talk", "talk for knowledge"], a: 0,
        e: "かのように = fictitious resemblance." },
      { t: "usage", q: "Quel adverbe s'associe fréquemment à 〜かのようだ ?",
        o: ["まるで (on dirait vraiment)", "たとえば", "もし", "なぜか"], a: 0,
        e: "まるで〜かのようだ is a very common collocation." },
    ],
  },

  {
    id: "g129", g: "〜に決まっている", m: "is necessarily, surely (subjective certainty)", f: "普通形／Nom + に決まっている",
    c: "modality", lv: 1, rel: ["g053", "g130"],
    note: "Strong subjective certainty, often emotional: \"it can only be this way\". More affective than に違いない. Often oral.",
    ex: [
      { jp: "こんなに頑張ったんだから、合格するに決まっている。", fr: "After so much effort, you're bound to succeed." },
      { jp: "彼が嘘をついているに決まっている。", fr: "I'm sure he's lying." },
    ],
    qs: [
      { t: "fill", q: "あんな値段なら、おいしい＿＿＿よ。", fr: "At this price, it's bound to be good.",
        o: ["に決まっている", "に違いない", "はずがない", "わけではない"], a: 0,
        e: "Strong subjective certainty → 〜に決まっている." },
      { t: "meaning", q: "「もう遅いから、店は閉まっているに決まっている」— sens ?",
        o: ["given the late hour, the store must be closed", "the store may be open", "the store is scheduled to open", "the store is not supposed to close"], a: 0,
        e: "に決まっている = strong subjective conviction." },
      { t: "nuance", q: "〜に決まっている vs 〜に違いない [[g053]] :",
        o: ["に決まっている = plus affectif/oral ; に違いない = plus logique/formel", "they are identical", "に違いない est familier", "に決まっている est logique"], a: 0,
        e: "に決まっている = emotional certainty; に違いない = reasoned deduction." },
    ],
  },

  {
    id: "g130", g: "〜に相違ない", m: "without a doubt, it's undeniably (formal)", f: "普通形／Nom + に相違ない",
    c: "modality", lv: 3, rel: ["g053", "g129"],
    note: "Absolute certainty, formal/legal register. Supported synonym for に違いない.",
    ex: [
      { jp: "この筆跡は彼のものに相違ない。", fr: "This writing is undeniably his." },
      { jp: "その証言は事実に相違ない。", fr: "This testimony is undoubtedly consistent with the facts." },
    ],
    qs: [
      { t: "fill", q: "この指紋は犯人のもの＿＿＿。", fr: "This fingerprint is undeniably that of the suspect.",
        o: ["に相違ない", "に決まっている", "はずだ", "らしい"], a: 0,
        e: "Absolute formal certainty → 〜に相違ない." },
      { t: "meaning", q: "「彼の発言は事実に相違ない」— sens ?",
        o: ["his words are undoubtedly in line with the facts", "his words may not be true", "his words are probably true", "his words are uncertain"], a: 0,
        e: "に相違ない = categorical certainty (formal register)." },
      { t: "usage", q: "〜に相違ない appartient au registre :",
        o: ["formal / legal / written", "colloquial / spoken", "childish", "poetic"], a: 0,
        e: "に相違ない = formal. Oral: に決まっている / に違いない." },
    ],
  },

  {
    id: "g131", g: "〜とは限らない", m: "not necessarily, not necessarily true", f: "普通形 + とは限らない",
    c: "modality", lv: 1, rel: ["g051", "g124"],
    note: "Nuances a generalization: \"it's not systematically true\". Close to 〜わけではない but applies to generalities.",
    ex: [
      { jp: "高い物が良いとは限らない。", fr: "What's expensive isn't necessarily good." },
      { jp: "有名大学を出たからといって、成功するとは限らない。", fr: "Graduating from a top university does not necessarily guarantee success." },
    ],
    qs: [
      { t: "fill", q: "頭がいい人が試験に受かる＿＿＿。", fr: "Intelligent people don't necessarily pass exams.",
        o: ["とは限らない", "わけではない", "はずがない", "べきでない"], a: 0,
        e: "Nuance a generalization → 〜とは限らない." },
      { t: "meaning", q: "「医者が健康とは限らない」— sens ?",
        o: ["a doctor is not necessarily in good health", "doctors are always in good health", "doctors are always sick", "you never know"], a: 0,
        e: "とは限らない = possible exceptions." },
      { t: "nuance", q: "〜とは限らない vs 〜わけではない [[g051]] :",
        o: ["とは限らない nuance une généralité ; わけではない explique une situation spécifique", "they are identical", "わけではない nuance une généralité", "とは限らない explique une situation"], a: 0,
        e: "とは限らない → generality not always true; わけではない → it doesn't mean that." },
    ],
  },

  {
    id: "g132", g: "〜ないものか／〜ないものだろうか", m: "wouldn't there be a way to..., if only we could", f: "V-ない + ものか／ものだろうか",
    c: "modality", lv: 2, rel: ["g064"],
    note: "Desire to see something difficult accomplished. Nuance of aspiration or regret. More emphatic and formal than 〜できないかな.",
    ex: [
      { jp: "この問題、なんとかならないものか。", fr: "Couldn't this problem be solved?" },
      { jp: "もう少し早く来られないものだろうか。", fr: "Couldn't he arrive a little earlier?" },
    ],
    qs: [
      { t: "fill", q: "この騒音、どうにかなら＿＿＿と思う。", fr: "I wonder if there isn't a way of adjusting this noise.",
        o: ["ないものか", "ことはない", "わけにはいかない", "まい"], a: 0,
        e: "Difficult wish → 〜ないものか." },
      { t: "meaning", q: "「一日くらい休めないものだろうか」— sens ?",
        o: ["if only we could take even one day off", "we don't need rest", "we have to work", "rest is impossible"], a: 0,
        e: "ないものだろうか = aspiration to sth difficult." },
      { t: "usage", q: "〜ないものか porte une nuance de :",
        o: ["wish / aspiration for something difficult to achieve", "strict obligation", "certainty", "comparison"], a: 0,
        e: "Desire to see something happen, often out of reach." },
    ],
  },

  {
    id: "g133", g: "〜ことになっている", m: "it is planned that / it is the rule that", f: "V-辞書／V-ない + ことになっている",
    c: "modality", lv: 1, rel: ["g035", "g054"],
    note: "(1) Rule or convention: ここでは禁煙ということになっている (no smoking here, it's the rule). (2) Plan: 来月引っ越すことになっている (we plan to move next month).",
    ex: [
      { jp: "この学校では、制服を着ることになっている。", fr: "In this school, wearing a uniform is compulsory (that's the rule)." },
      { jp: "来週、会議が開かれることになっている。", fr: "A meeting is scheduled for next week." },
    ],
    qs: [
      { t: "fill", q: "このビルでは、午後10時以降はエレベーターを使わない＿＿＿。", fr: "In this building, the rules prohibit the use of the elevator after 10 pm.",
        o: ["ことになっている", "ことにしている", "はずだ", "べきだ"], a: 0,
        e: "Existing rule or convention → 〜ことになっている." },
      { t: "meaning", q: "「明日、代表者が発表されることになっている」— sens ?",
        o: ["representative to be announced tomorrow", "the representative has already been announced", "we don't know who the representative is", "we have to announce now"], a: 0,
        e: "ことになっている (external decision/plan) = it is planned." },
      { t: "nuance", q: "Distinguer ことになっている et ことにしている :",
        o: ["ことになっている = règle externe ou plan décidé ; ことにしている = habitude personnelle volontaire", "they are identical", "ことにしている est externe", "ことになっている est personnel"], a: 0,
        e: "ことに'なっている = external decision; ことに'している = personal decision." },
    ],
  },

  {
    id: "g134", g: "〜得る（うる／える）／〜得ない（えない）", m: "can happen / can't happen (theoretical possibility)", f: "V-ます（語幹） + 得る／得ない",
    c: "modality", lv: 2, rel: ["g057", "g058"],
    note: "(1) 〜得る = it's possible in theory, it can happen. (2) 〜得ない = it's impossible in theory. Formal/written register. To be distinguished from できる (practical ability).",
    ex: [
      { jp: "そのような事故は十分あり得る。", fr: "Such an accident can happen." },
      { jp: "あの誠実な彼が嘘をつくとはあり得ない。", fr: "That such an honest man should lie is impossible." },
    ],
    qs: [
      { t: "fill", q: "どんなことでも起こり＿＿＿のが人生だ。", fr: "Life means that anything can happen.",
        o: ["得る", "かねる", "得ない", "っこない"], a: 0,
        e: "Theoretical possibility → 〜得る." },
      { t: "meaning", q: "「彼が裏切るとはあり得ない」— sens ?",
        o: ["impossible to betray (inconceivable)", "he can betray", "he betrays", "he must betray"], a: 0,
        e: "あり得ない = theoretically impossible, inconceivable." },
      { t: "nuance", q: "〜得る (うる/える) diffère de 〜できる par :",
        o: ["得る = possibilité théorique/logique ; できる = capacité pratique concrète", "they are identical", "できる est formel", "得る = impossibilité"], a: 0,
        e: "得る relates to logical possibility; できる to actual capacity." },
    ],
  },

  {
    id: "g135", g: "〜次第で（は）／〜次第だ", m: "it depends; that's how it happened", f: "Nom + 次第で（は）；〜(た) + 次第だ",
    c: "modality", lv: 2, rel: ["g035", "g050"],
    note: "(1) 次第で = depending on X, the result changes (努力次第で = depending on efforts). (2) 次第だ at the end of the sentence (formal register) = that's why... / that's the situation.",
    ex: [
      { jp: "やる気次第で、何でも変えられる。", fr: "Depending on your motivation, you can change anything." },
      { jp: "以上が、今回ご連絡申し上げた次第です。", fr: "These are my reasons for contacting you." },
    ],
    qs: [
      { t: "fill", q: "結果はあなたの努力＿＿＿だ。", fr: "The result depends on your efforts.",
        o: ["次第", "限り", "ばかり", "ほど"], a: 0,
        e: "\"According to / it depends on X\" → 〜次第で." },
      { t: "meaning", q: "「状況次第では中止になるかもしれない」— sens ?",
        o: ["depending on the situation, this may be cancelled", "whatever happens, it's off", "it's probably cancelled", "the situation remains unchanged"], a: 0,
        e: "〜次第では = depending on circumstances (conditional possibility)." },
      { t: "nuance", q: "「ご連絡した次第です」emploie 次第だ pour :",
        o: ["politely explain the circumstances (formal register)", "express a possibility", "express a comparison", "qualify a generality"], a: 0,
        e: "〜次第です = closing formula explaining context (letters, emails)." },
    ],
  },

  {
    id: "g136", g: "〜ないとも限らない", m: "it can't be ruled out that, we can't say that...not to", f: "V-ない + とも限らない",
    c: "modality", lv: 3, rel: ["g131", "g057"],
    note: "Double restriction: \"it's not guaranteed that X won't happen\". In other words, X is possible even if unlikely. Mitigates negative certainty.",
    ex: [
      { jp: "また同じ事故が起きないとも限らない。", fr: "It's not out of the question that the same accident could happen again." },
      { jp: "彼が来ないとも限らないから、席を取っておこう。", fr: "We can't rule out his visit, so let's reserve a place for him." },
    ],
    qs: [
      { t: "fill", q: "天気予報が外れ、雨が降ら＿＿＿。", fr: "The forecasts could be wrong: rain is not out of the question.",
        o: ["ないとも限らない", "とは限らない", "っこない", "まい"], a: 0,
        e: "Possibility not excluded → 〜ないとも限らない." },
      { t: "meaning", q: "「まだチャンスがないとも限らない」— sens ?",
        o: ["there may still be a chance", "there's certainly no chance", "there's a chance", "there's no chance"], a: 0,
        e: "ないとも限らない = X remains possible despite doubt." },
      { t: "nuance", q: "Distinguer 〜とは限らない de 〜ないとも限らない :",
        o: ["とは限らない nuance une affirmation ; ないとも限らない nuance une négation (X reste possible)", "identical", "ないとも限らない nie plus fortement", "とは限らない exprime la possibilité positive"], a: 0,
        e: "とは限らない = not always true; ないとも限らない = the thing denied remains possible." },
    ],
  },

  /* ===================== AJOUTS — EXPRESSIONS & EMPHASE ===================== */

  {
    id: "g137", g: "〜こそ", m: "justement, precisely (emphasis)", f: "Nom／助詞 + こそ",
    c: "express", lv: 1, rel: ["g110", "g118"],
    note: "Emphasis particle isolating the highlighted word. こそ can replace が or は: あなたこそ (it's you and nobody else). Also in これこそ、今こそ、だからこそ.",
    ex: [
      { jp: "今こそ、行動に移す時だ。", fr: "Now is precisely the time to act." },
      { jp: "失敗こそ、成功への道だ。", fr: "Failure is the path to success." },
    ],
    qs: [
      { t: "fill", q: "こちら＿＿＿お礼を申し上げます。（こちらが感謝する側）", fr: "I should be thanking you.",
        o: ["こそ", "は", "が", "も"], a: 0,
        e: "こそ isolates and emphasizes: \"it's me (and not you) who should be thanking\"." },
      { t: "meaning", q: "「だからこそ、大切にしなければならない」— sens ?",
        o: ["it's precisely for this reason that we should cherish", "that's why we don't need", "despite this reason", "for no particular reason"], a: 0,
        e: "だからこそ = precisely because it (emphasis on cause)." },
      { t: "usage", q: "「これこそ私が探していたものだ」: こそ exprime ici :",
        o: ["emphasis: that's exactly it and nothing else", "opposition", "doubt", "addition"], a: 0,
        e: "こそ = exclusive emphasis (exactly X, not something else)." },
    ],
  },

  {
    id: "g138", g: "〜など／〜なんか／〜なんて", m: "like, such as (depreciative or exemplary value)", f: "Nom + など／なんか／なんて",
    c: "express", lv: 1, rel: ["g060"],
    note: "(1) Non-exhaustive example: 本や辞書など (books, dictionaries, etc.). (2) Depreciation: 失敗なんて怖くない (failure? I'm not afraid of it). なんか / なんて: familiar. など: neutral.",
    ex: [
      { jp: "私なんかに、そんな仕事はできない。", fr: "Someone like me can't do a job like that." },
      { jp: "勉強なんてしたくない。", fr: "Studying? I don't want to!" },
    ],
    qs: [
      { t: "fill", q: "彼女がそんなことをするなんて、信じられない。", fr: "I can't believe she would do such a thing.",
        o: ["なんて（incrédulité dépréciative）", "など（liste neutre）", "こそ（emphase）", "さえ（condition）"], a: 0,
        e: "なんて expresses surprise/incredulity, often disparaging." },
      { t: "meaning", q: "「りんごやみかんなど、フルーツが好きです」— sens de など ?",
        o: ["non-exhaustive example (and others)", "depreciation", "emphasis", "opposition"], a: 0,
        e: "など after a list = examples, there are more." },
      { t: "nuance", q: "Registres de など / なんか / なんて :",
        o: ["など neutre ; なんか familier ; なんて familier + fort sentiment", "など est familier", "なんか est formel", "they are identical"], a: 0,
        e: "など = neutral/formal; なんか ≒ なんて but なんて more expressive." },
    ],
  },

  {
    id: "g139", g: "〜くらい／〜ぐらい", m: "to the point of, so much that; about (degree/quantity)", f: "普通形／Nom + くらい／ぐらい",
    c: "express", lv: 1, rel: ["g152"],
    note: "(1) Extreme degree: 死ぬくらい辛い (so hard to die for). (2) Approximation: 三時間くらい (about three hours). (3) Minimum: これくらいはできる (at least that).",
    ex: [
      { jp: "恥ずかしくて、消えてしまいたいくらいだった。", fr: "I was so ashamed that I wanted to disappear." },
      { jp: "これくらいのことは、誰でもできる。", fr: "At least that's something anyone can do." },
    ],
    qs: [
      { t: "fill", q: "嬉しくて、叫び出したい＿＿＿だ。", fr: "I'm so happy I want to scream.",
        o: ["くらい", "ほど", "だけ", "さえ"], a: 0,
        e: "Extreme degree → 〜くらい." },
      { t: "meaning", q: "「泣きたいくらい悔しい」— sens ?",
        o: ["so frustrated you'd weep", "happy to cry", "you can't cry", "a little frustrated"], a: 0,
        e: "くらい = at the point of (extreme degree)." },
      { t: "usage", q: "〜くらい a combien d'emplois principaux ?",
        o: ["three: extreme degree / approximation / minimum", "only one: approximation", "two: degree and opposition", "no reading at N2"], a: 0,
        e: "くらい/ぐらい: degree, approximation, minimum - all common in N2." },
    ],
  },

  {
    id: "g140", g: "〜ほど", m: "to the point that, to such an extent that; more... more", f: "普通形／Nom + ほど（〜ない：moins que）",
    c: "express", lv: 1, rel: ["g153", "g139"],
    note: "(1) Degree: 死ぬほど (to the point of death). (2) Negative comparison : A はBほど〜ない (A less than B). (3) 〜ば〜ほど: more... more.",
    ex: [
      { jp: "笑いが止まらないほど、おかしかった。", fr: "It was so funny I couldn't stop laughing." },
      { jp: "この映画は思ったほど面白くなかった。", fr: "This film wasn't as interesting as I thought it would be." },
    ],
    qs: [
      { t: "fill", q: "彼のピアノは、プロと間違えられる＿＿＿うまい。", fr: "He plays the piano so well that he could be mistaken for a professional.",
        o: ["ほど", "くらい", "だけ", "さえ"], a: 0,
        e: "Degree: to such an extent that → 〜ほど." },
      { t: "meaning", q: "「この問題は私には手に負えないほど難しい」— sens ?",
        o: ["so difficult that I can't face it", "not so difficult", "I can easily solve it", "about difficult"], a: 0,
        e: "ほど = to the point that (degree)." },
      { t: "usage", q: "「AはBほど〜ない」exprime :",
        o: ["A is less than B", "A is more than B", "A equals B", "A is unrelated to B"], a: 0,
        e: "〜ほど〜ない = negative comparison (A less than B)." },
    ],
  },

  {
    id: "g141", g: "〜ば〜ほど", m: "more... more (proportional)", f: "V-ば／A-ければ + 同V/A-辞書 + ほど",
    c: "express", lv: 1, rel: ["g140"],
    note: "Proportional correlation: as X increases, so does Y. A repeats: 食べれば食べるほど (the more you eat, the more you...).",
    ex: [
      { jp: "練習すればするほど、上手くなる。", fr: "The more you train, the more you progress." },
      { jp: "考えれば考えるほど、分からなくなる。", fr: "The more you think about it, the less you understand." },
    ],
    qs: [
      { t: "fill", q: "日本語は勉強すれ＿＿＿、奥が深いと感じる。", fr: "The more you study Japanese, the more you feel its depth.",
        o: ["ばするほど", "ばするくらい", "ばするだけ", "ばするさえ"], a: 0,
        e: "Proportional → 〜ば〜ほど." },
      { t: "meaning", q: "「高ければ高いほど品質が良いとは限らない」— sens ?",
        o: ["the more expensive, the better the quality is not always true", "the more expensive, the better", "the price is irrelevant", "we have to buy expensive"], a: 0,
        e: "ば〜ほど = proportional (here qualified by とは限らない)." },
      { t: "usage", q: "Structure de 〜ば〜ほど :",
        o: ["V-ばV-辞書ほど (V répété)", "V-ばV-た形ほど", "V-たらV-てほど", "V-ているV-るほど"], a: 0,
        e: "The verb is repeated: 食べれば食べるほど, 話せば話すほど." },
    ],
  },

  {
    id: "g142", g: "〜ことか", m: "how much (exclamation), how it is (exclamative)", f: "疑問詞＋V／A + ことか",
    c: "express", lv: 2, rel: ["g155"],
    note: "Exclamation expressing the intensity of a feeling. Often with an interrogative: どれほど〜ことか, 何度〜ことか. Semi-formal/literary register.",
    ex: [
      { jp: "どれほど心配したことか。", fr: "You don't know how worried I've been." },
      { jp: "何度諦めようと思ったことか。", fr: "How many times have I thought about giving up?" },
    ],
    qs: [
      { t: "fill", q: "あなたに会いたいと、どれだけ思った＿＿＿。", fr: "You can't imagine how much I wanted to see you.",
        o: ["ことか", "ことだ", "ものか", "ものだ"], a: 0,
        e: "Exclamation about the intensity of a feeling → 〜ことか." },
      { t: "meaning", q: "「何度失敗したことか」— sens ?",
        o: ["how many times have I failed (exclamation)", "I failed once", "I've never failed", "you have to fail"], a: 0,
        e: "ことか = exclamation (emotional intensity)." },
      { t: "usage", q: "Quels mots précèdent typiquement 〜ことか ?",
        o: ["interrogatifs : どれほど, 何度, どんなに", "concrete names", "precise figures", "adverbs of time"], a: 0,
        e: "どれほど〜ことか, 何度〜ことか are the most frequent structures." },
    ],
  },

  {
    id: "g143", g: "〜ものか／〜もんか", m: "never in a million years! (categorical refusal)", f: "V-辞書／A + ものか",
    c: "express", lv: 2, rel: ["g155"],
    note: "Total refusal, often emotional: \"I would never do X\". Forms a negative rhetorical question. もんか = colloquial.",
    ex: [
      { jp: "あんなひどいことを言った彼を許すものか。", fr: "Forgive him for saying such things? Never!" },
      { jp: "負けるもんか！", fr: "I won't lose!" },
    ],
    qs: [
      { t: "fill", q: "二度とあの店には行く＿＿＿。", fr: "I'll never set foot in that restaurant again!",
        o: ["ものか", "ことか", "はずか", "わけか"], a: 0,
        e: "Categorical refusal → 〜ものか." },
      { t: "meaning", q: "「そんなこと、できるものか」— sens ?",
        o: ["there's no way I'd do something like that / ever!", "I can do it", "maybe I can", "I have to do it"], a: 0,
        e: "ものか = rhetorical question expressing refusal." },
      { t: "nuance", q: "Différence entre ものか et 〜ことか :",
        o: ["ものか = refus/indignation ; ことか = exclamation sur l'intensité d'un sentiment", "they are identical", "ことか exprime le refus", "ものか est exclamatif positif"], a: 0,
        e: "ものか → refusal; ことか → exclamation of degree." },
    ],
  },

  {
    id: "g144", g: "〜ことに（は）", m: "remarkable thing that (emotional adverb)", f: "A-い／A-な + ことに（は）",
    c: "express", lv: 2, rel: ["g157"],
    note: "Introduces an observation with emotional coloration. Often with adjectives expressing a feeling: 驚いたことに, 残念なことに, 嬉しいことに.",
    ex: [
      { jp: "驚いたことに、彼はすでに知っていた。", fr: "Surprisingly, he already knew." },
      { jp: "残念なことに、試験は中止になった。", fr: "Unfortunately, the exam was cancelled." },
    ],
    qs: [
      { t: "fill", q: "嬉しい＿＿＿、彼女は合格した。", fr: "Pleasingly, it succeeded.",
        o: ["ことに", "ことか", "ものに", "わけに"], a: 0,
        e: "Emotional observation → 〜ことに." },
      { t: "meaning", q: "「不思議なことに、彼はそれを知っていた」— sens ?",
        o: ["strange thing, he knew it", "he's strange so he knew", "because it's strange", "though strange"], a: 0,
        e: "ことに = observation tinged with emotion." },
      { t: "usage", q: "Avec quel type d'adjectif 〜ことに s'emploie-t-il ?",
        o: ["adjectifs de sentiment (驚いた, 残念な, 嬉しい…)", "color adjectives", "size adjectives", "nationality adjectives"], a: 0,
        e: "ことに combines with emotional adjectives." },
    ],
  },

  {
    id: "g145", g: "〜ものがある", m: "there's something (in), you can feel it", f: "普通形 + ものがある",
    c: "express", lv: 2, rel: ["g062"],
    note: "Expresses that a remarkable quality, difficult to define exactly, emerges from sth. Often with 感じさせる, 惹かれる etc. Literary/written register.",
    ex: [
      { jp: "この絵には、人を惹きつけるものがある。", fr: "There's something about this painting that draws people in." },
      { jp: "彼女の話し方には、説得力があるものがある。", fr: "There's something persuasive about the way he talks." },
    ],
    qs: [
      { t: "fill", q: "この曲には、心に染みる＿＿＿。", fr: "In this song, there's something that touches the heart.",
        o: ["ものがある", "ことがある", "わけがある", "はずがある"], a: 0,
        e: "Remarkable quality coming through → 〜ものがある." },
      { t: "meaning", q: "「彼の笑顔には、人を安心させるものがある」— sens ?",
        o: ["there's something about his smile that reassures people", "his smile is not reassuring", "he must reassure", "it is perhaps reassuring"], a: 0,
        e: "ものがある = quality difficult to define but perceptible." },
      { t: "usage", q: "〜ものがある porte typiquement sur :",
        o: ["remarkable intangible quality (writing style)", "a trivial fact", "a direct cause", "a date"], a: 0,
        e: "ものがある belongs to the literary/subtle register." },
    ],
  },

  {
    id: "g146", g: "〜てならない", m: "so much (that it's unbearable), not being able to resist", f: "V-て／A-くて + ならない",
    c: "express", lv: 2, rel: ["g147", "g148", "g064"],
    note: "A feeling or sensation that imposes itself strongly, involuntarily. 気になってならない (it bothers me terribly). Semi-formal register.",
    ex: [
      { jp: "故郷が恋しくてならない。", fr: "I miss my homeland terribly." },
      { jp: "彼のことが心配でならない。", fr: "I'm terribly worried about him." },
    ],
    qs: [
      { t: "fill", q: "あの映画のラストシーンが気になっ＿＿＿。", fr: "The final scene of this film is still terribly fresh in my mind.",
        o: ["てならない", "てたまらない", "てしかたがない", "てしまう"], a: 0,
        e: "A feeling that irresistibly imposes itself → 〜てならない." },
      { t: "meaning", q: "「将来が不安でならない」— sens ?",
        o: ["I feel terribly anxious about the future", "the future is assured", "the future leaves me indifferent", "I'm a little scared"], a: 0,
        e: "てならない = very strong, involuntary feeling." },
      { t: "nuance", q: "てならない, てたまらない, てしかたがない ont en commun :",
        o: ["all express a very intense involuntary feeling/sensation", "all are negative only", "all are formal", "all are used with action verbs"], a: 0,
        e: "All three = intense feeling/sensation. Slight nuances of register." },
    ],
  },

  {
    id: "g147", g: "〜てたまらない", m: "so (unbearable), to the point of insanity", f: "V-て／A-くて + たまらない",
    c: "express", lv: 2, rel: ["g146", "g148"],
    note: "Sensation or emotion so strong it's almost unbearable. More physical/visceral than てならない. お腹が空いてたまらない (I'm ravenously hungry).",
    ex: [
      { jp: "暑くてたまらない。エアコンをつけてもいいですか。", fr: "I'm unbearably hot. Can I turn on the air conditioning?" },
      { jp: "眠くてたまらないのに、仕事が終わらない。", fr: "I fall asleep, but the work goes on and on." },
    ],
    qs: [
      { t: "fill", q: "喉が渇い＿＿＿、水が飲みたい。", fr: "I have a raging thirst, I want water.",
        o: ["てたまらない", "てならない", "てしかたがない", "てばかりいる"], a: 0,
        e: "Very intense physical sensation → 〜てたまらない." },
      { t: "meaning", q: "「彼女のことが好きでたまらない」— sens ?",
        o: ["I love him to pieces (unbearably)", "I don't really like it", "I like it a little", "I don't like it"], a: 0,
        e: "たまらない = so loud it's almost unbearable." },
      { t: "nuance", q: "てたまらない est souvent plus _____ que てならない :",
        o: ["physical / visceral (body sensation)", "cerebral / intellectual", "formal / literary", "neutral"], a: 0,
        e: "てたまらない tends towards physical sensations; てならない towards emotions." },
    ],
  },

  {
    id: "g148", g: "〜てしかたがない／〜てしようがない", m: "so much so that it's embarrassing, unbearable", f: "V-て／A-くて + しかたがない／しようがない",
    c: "express", lv: 2, rel: ["g146", "g147"],
    note: "A near-total synonym for てたまらない. しようがない is the oral variant. Often interchangeable but てしかたがない a little softer.",
    ex: [
      { jp: "あの歌が頭から離れなくてしかたがない。", fr: "I can't get that song out of my head, it's terrible." },
      { jp: "子どもが心配でしょうがない。", fr: "I'm terribly worried about my child." },
    ],
    qs: [
      { t: "fill", q: "試験の結果が気になっ＿＿＿。", fr: "I'm terribly worried about the exam results.",
        o: ["てしかたがない", "てならない", "てたまらない", "てしまう"], a: 0,
        e: "Intense concern → 〜てしかたがない (all three possible here)." },
      { t: "meaning", q: "「眠くてしようがなかった」— sens ?",
        o: ["I had an unbearable sleep", "I couldn't sleep", "I wasn't sleepy", "I slept"], a: 0,
        e: "てしようがない = so much... it's unmanageable." },
      { t: "nuance", q: "しようがない et しかたがない sont :",
        o: ["quasi-synonymes ; しようがない est légèrement plus familier", "opposite", "the first is formal", "unrelated"], a: 0,
        e: "They're used interchangeably; しようがない slightly more oral." },
    ],
  },

  {
    id: "g149", g: "〜始末だ", m: "to the point of (negative outcome)", f: "V-辞書／Nom+の + 始末だ",
    c: "express", lv: 3, rel: ["g099", "g062"],
    note: "Negative outcome, often scandalous or regrettable. こんな始末になった (this is what it's come to). Always pejorative.",
    ex: [
      { jp: "言い訳ばかりして、最後には怒り出す始末だ。", fr: "All he did was justify himself, and ended up getting angry." },
      { jp: "借金を重ね、家まで売る始末になった。", fr: "He had accumulated so much debt that he had to sell his house." },
    ],
    qs: [
      { t: "fill", q: "遅刻したうえ、謝りもしない＿＿＿だ。", fr: "Not only was he late, he didn't even apologize.",
        o: ["始末", "あげく", "末", "最中"], a: 0,
        e: "Negative outcome / scandalous → 〜始末だ." },
      { t: "meaning", q: "「とうとう会社を首になる始末だ」— sens ?",
        o: ["he even got himself fired (a deplorable outcome).", "he was promoted", "he resigned voluntarily", "he continues to work"], a: 0,
        e: "始末だ = negative end result, often outrageous." },
      { t: "nuance", q: "〜始末だ vs 〜あげく [[g099]] :",
        o: ["始末だ insiste sur le caractère scandaleux/honteux ; あげく insiste sur le processus long et pénible", "they are identical", "あげく est plus négatif", "始末だ est neutre"], a: 0,
        e: "始末だ = shameful outcome; あげく = after many twists and turns." },
    ],
  },

  {
    id: "g150", g: "〜限りだ", m: "at the highest point of (extreme feeling)", f: "A-い／A-な + 限りだ",
    c: "express", lv: 3, rel: ["g041", "g144"],
    note: "Maximum intensity of a feeling: \"nothing more X than that\". Used with adjectives of feeling (恥ずかしい, 嬉しい, 頼もしい...). Formal register.",
    ex: [
      { jp: "皆さんに支えていただいて、心強い限りです。", fr: "I'm infinitely grateful for your support." },
      { jp: "このような賞をいただき、光栄の限りです。", fr: "For me, it's the greatest honor to receive this award." },
    ],
    qs: [
      { t: "fill", q: "若い人が頑張っている姿を見ると、頼もしい＿＿＿だ。", fr: "Seeing these young people make the effort is extremely comforting.",
        o: ["限り", "ほど", "くらい", "ばかり"], a: 0,
        e: "Feeling in the highest degree → 〜限りだ." },
      { t: "meaning", q: "「こんな失敗をしてしまい、恥ずかしい限りです」— sens ?",
        o: ["I made such a mistake, I'm ashamed of myself", "I'm a little ashamed", "I'm not ashamed", "I must feel ashamed"], a: 0,
        e: "限りだ = at the peak of sentiment (very formal)." },
      { t: "nuance", q: "〜限りだ s'emploie principalement dans quel registre ?",
        o: ["formal / speeches / letters", "daily familiar", "slang", "childish"], a: 0,
        e: "限りだ is typical of formal speeches, award ceremonies, letters." },
    ],
  },

  {
    id: "g151", g: "〜きらいがある", m: "have a tendency to (annoyingly)", f: "V-辞書／Nom+の + きらいがある",
    c: "express", lv: 3, rel: ["g164"],
    note: "Critical tendency: we have the defect of doing X. Slightly pejorative. Written/formal register.",
    ex: [
      { jp: "彼は物事を大げさに言うきらいがある。", fr: "He tends to exaggerate things." },
      { jp: "この報告書は結論を急ぐきらいがある。", fr: "This report has a tendency to cut corners." },
    ],
    qs: [
      { t: "fill", q: "彼女は感情的になりすぎる＿＿＿。", fr: "She tends to get too emotional.",
        o: ["きらいがある", "ことがある", "ものがある", "わけがある"], a: 0,
        e: "Criticizable trend → 〜きらいがある." },
      { t: "meaning", q: "「完璧主義になりすぎるきらいがある」— sens ?",
        o: ["he has the flaw of being too much of a perfectionist", "it's perfect", "he's not at all a perfectionist", "he must be a perfectionist"], a: 0,
        e: "きらいがある = trend being criticized." },
      { t: "usage", q: "〜きらいがある appartient à quel registre ?",
        o: ["written / formal", "familiar", "childish", "interrogative"], a: 0,
        e: "きらいがある = written register, measured reviews." },
    ],
  },

  {
    id: "g152", g: "〜一方だ", m: "do nothing but (increase), a continuing trend", f: "V-辞書 + 一方だ",
    c: "express", lv: 2, rel: ["g030", "g165"],
    note: "A trend that's only getting stronger, often negatively. The situation is moving in only one direction. Different from 一方で [[g030]] (contrast).",
    ex: [
      { jp: "物価は上がる一方だ。", fr: "Prices are only going up." },
      { jp: "病状は悪化する一方だった。", fr: "His health was getting worse." },
    ],
    qs: [
      { t: "fill", q: "少子化が進む＿＿＿で、対策が急がれる。", fr: "As the birth rate continues to rise, urgent measures are needed.",
        o: ["一方", "うちに", "ばかり", "限り"], a: 0,
        e: "Continuous trend in a single direction → 〜一方だ." },
      { t: "meaning", q: "「借金が増える一方だ」— sens ?",
        o: ["debts only increase", "debts decrease", "debts are stable", "the debts have disappeared"], a: 0,
        e: "一方だ = continuous evolution in one (often wrong) direction." },
      { t: "nuance", q: "Distinguer 〜一方だ de 〜一方で [[g030]] :",
        o: ["一方だ = tendance continue (évolution) ; 一方で = contraste (d'un côté X, de l'autre Y)", "they are identical", "一方で exprime la tendance", "一方だ exprime le contraste"], a: 0,
        e: "一方だ (evolving) ≠ 一方で (contrast). See [[g030]]." },
    ],
  },

  {
    id: "g153", g: "〜ばかりだ", m: "do only (repeated action); get ready to (ばかりだ after V-ta)", f: "V-て + ばかり；V-た + ばかり",
    c: "express", lv: 1, rel: ["g152", "g165"],
    note: "(1) V-てばかり = only doing X (exclusively, often critically): 食べてばかりいる. (2) V-たばかり = just doing X: 来たばかり.",
    ex: [
      { jp: "彼は文句を言ってばかりいる。", fr: "All he does is complain." },
      { jp: "日本に来たばかりで、まだ慣れていない。", fr: "I've just arrived in Japan and I'm not used to it yet." },
    ],
    qs: [
      { t: "fill", q: "子どもが泣いて＿＿＿いて、困っている。", fr: "My child just cries, I don't know what to do.",
        o: ["ばかり", "ほど", "きり", "さえ"], a: 0,
        e: "Exclusive, repeated action (critical) → 〜てばかりいる." },
      { t: "meaning", q: "「仕事を始めたばかりです」— sens ?",
        o: ["I've just started working", "I've been working for a long time", "I'm still working", "I stopped working"], a: 0,
        e: "V-たばかり = action that has just occurred." },
      { t: "nuance", q: "Distinguer 〜てばかりいる de 〜たばかり :",
        o: ["てばかりいる = exclusivité répétée (critique) ; たばかり = juste après l'action", "they are identical", "たばかり est exclusif", "てばかりは positif"], a: 0,
        e: "Two distinct uses: exclusive repetition vs. just after." },
    ],
  },

  {
    id: "g154", g: "〜ばかりか〜（も）", m: "not only... but also", f: "普通形／Nom + ばかりか（〜も／〜まで）",
    c: "express", lv: 2, rel: ["g078", "g074"],
    note: "Escalation: X is already remarkable, but Y is surprisingly added. Often followed by も or まで. Close to のみならず but more oral.",
    ex: [
      { jp: "彼女は英語ばかりか、中国語まで話せる。", fr: "Not only does she speak English, she also speaks Chinese." },
      { jp: "遅刻したばかりか、謝りもしなかった。", fr: "Not only was he late, he didn't apologize." },
    ],
    qs: [
      { t: "fill", q: "彼は仕事ができる＿＿＿、人柄もいい。", fr: "Not only is he competent, he's also good-natured.",
        o: ["ばかりか", "ばかりに", "ばかりで", "ばかりだ"], a: 0,
        e: "Additive climbing → 〜ばかりか〜（も）." },
      { t: "meaning", q: "「貧しいばかりか、病気にもなった」— sens ?",
        o: ["not only poor, but sick as well", "poor, therefore healthy", "neither poor nor sick", "poor, therefore fortunately ill"], a: 0,
        e: "ばかりか = not only X but also Y (often aggravation)." },
      { t: "nuance", q: "〜ばかりか vs 〜ばかりに [[g046]] :",
        o: ["ばかりか = non seulement (addition) ; ばかりに = justement à cause de (conséquence)", "they are identical", "ばかりに = addition", "ばかりか = cause"], a: 0,
        e: "Same radical, opposite meanings. See [[g046]]." },
    ],
  },

  {
    id: "g155", g: "〜とばかりに", m: "as if to say, as if he were saying (without words)", f: "V-辞書／普通形 + とばかりに",
    c: "express", lv: 3, rel: ["g128"],
    note: "Acting as if you were saying X, even though nothing is being said. Attitude or behavior speaks instead of words.",
    ex: [
      { jp: "さあ来いとばかりに、彼は構えた。", fr: "He posed as if to say \"come on\"." },
      { jp: "嫌だとばかりに、犬は首を振った。", fr: "The dog shook his head as if to say \"no\"." },
    ],
    qs: [
      { t: "fill", q: "待ってましたと＿＿＿、彼は立ち上がった。", fr: "He stood up as if to say \"this is what I've been waiting for\".",
        o: ["とばかりに", "というより", "とはいえ", "とともに"], a: 0,
        e: "Attitude that communicates without words → 〜とばかりに." },
      { t: "meaning", q: "「そんなこと知らないとばかりに、彼はそっぽを向いた。」— sens ?",
        o: ["he looked away, as if to say he didn't know.", "he explained that he knew nothing", "he said he knew", "he was surprised"], a: 0,
        e: "とばかりに = attitude that implicitly expresses sth." },
      { t: "usage", q: "〜とばかりに décrit :",
        o: ["non-verbal behaviour that expresses a thought", "an explicit word", "a logical cause", "a comparison"], a: 0,
        e: "Silent but significant act (gesture, attitude)." },
    ],
  },

  {
    id: "g156", g: "〜んばかり（に）", m: "as if (almost) on the verge of", f: "V-ない（語幹） + んばかり（に）",
    c: "express", lv: 3, rel: ["g128", "g155"],
    note: "The action described is so close to happening that we can almost see it. Literary register. 今にも〜んばかり accentuates imminence.",
    ex: [
      { jp: "今にも泣き出さんばかりの表情だった。", fr: "Her expression looked like she was about to burst into tears." },
      { jp: "割れんばかりの拍手が起きた。", fr: "Loud applause rang out." },
    ],
    qs: [
      { t: "fill", q: "彼は怒りで爆発せ＿＿＿の様子だった。", fr: "He looked like he was about to explode with anger.",
        o: ["んばかり", "かのように", "ことに", "ものか"], a: 0,
        e: "Almost on the verge of → 〜んばかり." },
      { t: "meaning", q: "「溢れんばかりの愛情」— sens ?",
        o: ["a love on the verge of boiling over", "an absent love", "average love", "a love that overflowed"], a: 0,
        e: "んばかり = so intense it's like it's going to happen." },
      { t: "usage", q: "〜んばかり est de registre :",
        o: ["literary / sustained", "familiar", "childish", "fluent oral"], a: 0,
        e: "んばかり belongs to the literary style." },
    ],
  },

  {
    id: "g157", g: "〜までもない", m: "no need to go to, no need to", f: "V-辞書 + までもない／までもなく",
    c: "express", lv: 2, rel: ["g121"],
    note: "The intended action is deemed superfluous: the thing is so obvious or easy that it's not worth the effort. Close to ことはない but the emphasis is on \"going as far as\".",
    ex: [
      { jp: "言うまでもなく、安全第一だ。", fr: "It goes without saying that safety comes first." },
      { jp: "この程度のことは、わざわざ説明するまでもない。", fr: "Such a simple thing needs no explanation." },
    ],
    qs: [
      { t: "fill", q: "彼の実力は証明する＿＿＿。", fr: "Its capabilities don't need to be proven.",
        o: ["までもない", "ことはない", "わけにはいかない", "べきでない"], a: 0,
        e: "No need to go as far as → 〜までもない." },
      { t: "meaning", q: "「言うまでもなく、健康は大切だ」— sens ?",
        o: ["it goes without saying that health is important", "we don't have to talk about health", "we ignore health", "health is debatable"], a: 0,
        e: "言うまでもなく = that goes without saying (superlative evidence)." },
      { t: "nuance", q: "〜までもない vs 〜ことはない [[g121]] :",
        o: ["までもない insiste sur « pas besoin d'aller jusqu'à » ; ことはない = simplement inutile", "identical", "ことはない est plus fort", "までもない est familier"], a: 0,
        e: "までもない → the effort threshold is too high for the situation." },
    ],
  },

  {
    id: "g158", g: "〜てまで", m: "to go as far as (to get), even at the cost of", f: "V-て + まで",
    c: "express", lv: 2, rel: ["g055"],
    note: "One does X (an extreme or difficult thing) to achieve a goal. Often a criticism or repugnance: 借金してまで（ = at the cost of a debt）.",
    ex: [
      { jp: "借金してまで、その車を買いたくない。", fr: "I don't want to buy this car to the point of going into debt." },
      { jp: "体を壊してまで、働く必要はない。", fr: "No need to work to the point of ruining your health." },
    ],
    qs: [
      { t: "fill", q: "嘘をつい＿＿＿、認められたくない。", fr: "I don't want to be recognized at the cost of a lie.",
        o: ["てまで", "てからでないと", "ながらも", "つつも"], a: 0,
        e: "Extreme action consented to for a purpose → 〜てまで." },
      { t: "meaning", q: "「人を傷つけてまで、成功したくない」— sens ?",
        o: ["I don't want to succeed at the cost of hurting others", "I want to succeed by hurting others", "hurting is acceptable", "we can't succeed"], a: 0,
        e: "てまで = even at the price of (cost deemed too high)." },
      { t: "usage", q: "〜てまで est souvent suivi de :",
        o: ["negation (refusal to go that far)", "an enthusiastic affirmation", "a question", "a date"], a: 0,
        e: "The costly action is refused: Vてまで〜ない." },
    ],
  },

  {
    id: "g159", g: "〜ものだから", m: "because (personal justification)", f: "普通形／Nom＋な + ものだから",
    c: "express", lv: 2, rel: ["g062"],
    note: "Gives a subjective/personal justification, often to excuse behavior. The cause (ものだから) is perceived as constraining by the speaker. Oral.",
    ex: [
      { jp: "バスが遅れたものだから、遅刻してしまった。", fr: "The bus was late, that's why I was late." },
      { jp: "子どもなものだから、許してやってください。", fr: "He's a child, so forgive him." },
    ],
    qs: [
      { t: "fill", q: "急に具合が悪くなった＿＿＿、早退しました。", fr: "I suddenly felt sick, so I left the office early.",
        o: ["ものだから", "ものの", "ものか", "ものと"], a: 0,
        e: "Subjective justification of one's own behavior → 〜ものだから." },
      { t: "meaning", q: "「つい嬉しかったものだから、言ってしまった」— sens ?",
        o: ["I was so happy I said it without thinking (justification)", "I was sad so I said", "I meant", "I had to say"], a: 0,
        e: "ものだから = personal cause that explains/justifies the act." },
      { t: "nuance", q: "〜ものだから vs 〜ので :",
        o: ["ものだから = justification subjective personnelle (souvent excuse) ; ので = cause neutre/objective", "identical", "ので est plus personnel", "ものだから est plus neutre"], a: 0,
        e: "ものだから colors the cause with a personal excuse or justification." },
    ],
  },

  {
    id: "g160", g: "〜あっての", m: "which exists only thanks to, made possible by", f: "Nom₁ + あっての + Nom₂",
    c: "express", lv: 3, rel: ["g117"],
    note: "X is the essential condition without which Y cannot exist. 命あっての物種 (life is the condition of everything). Semi-formal register.",
    ex: [
      { jp: "お客様あっての商売だ。", fr: "Business only exists because of customers." },
      { jp: "命あっての物種。", fr: "As long as we have life, we can take it all back." },
    ],
    qs: [
      { t: "fill", q: "ファン＿＿＿芸能界だ。", fr: "Showbiz only exists because of the fans.",
        o: ["あっての", "なくしての", "によっての", "についての"], a: 0,
        e: "Essential condition → Name + あっての + Name." },
      { t: "meaning", q: "「努力あっての成功だ」— sens ?",
        o: ["success is only possible through effort", "success comes effortlessly", "effort hinders success", "success comes before effort"], a: 0,
        e: "あっての = condition sine qua non." },
      { t: "usage", q: "〜あっての Nom signifie que :",
        o: ["the first name is the indispensable condition for the second", "the two are opposed", "the second precedes the first", "the first is useless"], a: 0,
        e: "Structure : Cond.あっての Result - without the condition, no result." },
    ],
  },

  {
    id: "g161", g: "〜といった", m: "such as, like (list examples)", f: "Nom₁（、Nom₂）+ といった + Nom-catégorie",
    c: "particle", lv: 2, rel: ["g009", "g079"],
    note: "Introduces representative examples of a category. Close to 〜などの but と言ったが more formal. 東京、大阪といった大都市 = big cities like Tokyo, Osaka.",
    ex: [
      { jp: "音楽や絵画といった芸術に興味がある。", fr: "I'm interested in arts such as music and painting." },
      { jp: "スマホやパソコンといったデジタル機器が普及した。", fr: "Digital devices such as smartphones and computers have become widespread." },
    ],
    qs: [
      { t: "fill", q: "バラやひまわり＿＿＿花が好きです。", fr: "I love flowers like roses and sunflowers.",
        o: ["といった", "というより", "といえば", "というものの"], a: 0,
        e: "Representative examples of a category → 〜といった." },
      { t: "meaning", q: "「東京や大阪といった大都市では家賃が高い」— sens ?",
        o: ["in major cities such as Tokyo and Osaka, rents are high", "in Tokyo and Osaka only", "neither in Tokyo nor Osaka", "despite Tokyo and Osaka"], a: 0,
        e: "といった = such as (examples)." },
      { t: "usage", q: "〜といった précède :",
        o: ["a general category name", "an explanation", "an action verb", "a date"], a: 0,
        e: "Structure: examples + といった + encompassing category." },
    ],
  },

  {
    id: "g162", g: "〜やら〜やら", m: "and... and (messy, often overwhelming list)", f: "Nom／V-辞書 + やら（〜やら）",
    c: "express", lv: 2, rel: ["g080"],
    note: "A list of various things that accumulate, often annoying or overwhelming. Can be used alone to express uncertainty: どうしたやら (I really don't know what has become of him).",
    ex: [
      { jp: "引っ越しで荷物やら手続きやら、大変だった。", fr: "The move, with all the boxes and paperwork, was hell." },
      { jp: "嬉しいやら悲しいやら、複雑な気持ちだ。", fr: "Between joy and sadness, my emotions are mixed." },
    ],
    qs: [
      { t: "fill", q: "試験が近くて、緊張する＿＿＿眠れない＿＿＿、落ち着かない。", fr: "With the exam coming up, I'm nervous, I can't sleep, I have no peace.",
        o: ["やら／やら", "とか／とか", "や／や", "だの／だの"], a: 0,
        e: "Overwhelming accumulation of elements → 〜やら〜やら." },
      { t: "meaning", q: "「嬉しいやら恥ずかしいやら」— sens ?",
        o: ["between joy and shame (mixed emotions)", "neither happy nor ashamed", "only very happy", "very shameful only"], a: 0,
        e: "やら〜やら = several elements mixed together." },
      { t: "usage", q: "〜やら seul (「どうなるやら」) exprime :",
        o: ["the speaker's uncertainty/ignorance", "certainty", "a list", "an order"], a: 0,
        e: "やら alone = expressive uncertainty (sentimental register)." },
    ],
  },

  {
    id: "g163", g: "〜なり〜なり", m: "either... or, or... or (suggest options)", f: "Nom／V-辞書 + なり、（Nom／V）+ なり",
    c: "express", lv: 3, rel: ["g080"],
    note: "Suggests at least two options to choose between, in a slightly insistent or benevolent way. Often as a suggestion: 電話するなりメールするなりして。",
    ex: [
      { jp: "相談するなり電話するなり、何かしてください。", fr: "Consult someone, call, do something." },
      { jp: "パンなりご飯なり、好きなものを食べてください。", fr: "Eat what you like: bread or rice." },
    ],
    qs: [
      { t: "fill", q: "休む＿＿＿病院へ行く＿＿＿、体を大切に。", fr: "Whether you're resting or in hospital, take care of yourself.",
        o: ["なり／なり", "にしろ／にしろ", "か／か", "やら／やら"], a: 0,
        e: "Options available → 〜なり〜なり." },
      { t: "meaning", q: "「謝るなり説明するなりしてほしい」— sens ?",
        o: ["I'd like him to apologize or give an explanation (your choice)", "no need to apologize or explain", "he has to do both", "no options available"], a: 0,
        e: "なり〜なり = offer at least one option from those listed." },
      { t: "nuance", q: "〜なり〜なり vs 〜にしろ〜にしろ [[g080]] :",
        o: ["なり〜なり = propose des options (choisissez) ; にしろ〜にしろ = quelle que soit l'option, la conclusion est identique", "identical", "にしろ propose des options", "なりは fixe une seule option"], a: 0,
        e: "Opposite meanings: なり = choose; にしろ = whatever the answer." },
    ],
  },

  {
    id: "g164", g: "〜からして", m: "judging by, since (the slightest element)", f: "Nom + からして",
    c: "condition", lv: 2, rel: ["g003", "g045"],
    note: "(1) Basis for judgment: 声からして緊張している (judging by his voice, he's tense). (2) Insists on the minimum: 名前からして (even the name already...).",
    ex: [
      { jp: "話し方からして、外国人だとわかった。", fr: "You could tell he was a foreigner just by the way he spoke." },
      { jp: "彼の服装からして、只者ではない。", fr: "His style of dress alone indicates that he is no ordinary man." },
    ],
    qs: [
      { t: "fill", q: "名前＿＿＿、外国人だとわかる。", fr: "From the name alone, you can tell he's a foreigner.",
        o: ["からして", "から", "として", "にして"], a: 0,
        e: "Judging by (the slightest hint) → 〜からして." },
      { t: "meaning", q: "「発音からして、この人は日本語が上手だ」— sens ?",
        o: ["judging by his pronunciation, this person is good at Japanese", "despite the pronunciation", "because of mispronunciation", "pronunciation doesn't indicate anything"], a: 0,
        e: "からして = an element serves as a basis for judgment." },
      { t: "nuance", q: "〜からして peut aussi exprimer :",
        o: ["that even the first/smallest element already suffices to show X", "an exhaustive list", "a neutral comparison", "a concession"], a: 0,
        e: "Meaning 2: right down to the smallest detail (even X, let alone the rest)." },
    ],
  },

  {
    id: "g165", g: "〜にして", m: "at this stage only / and at the same time (double quality)", f: "Nom + にして",
    c: "particle", lv: 3, rel: ["g005", "g137"],
    note: "(1) Temporal singularity: 40歳にしてはじめて (for the first time at 40). (2) Cumulative: 父にして師匠 (both father and master). Sustained register.",
    ex: [
      { jp: "彼女は50歳にして初の小説を書いた。", fr: "She wrote her first novel at the age of 50." },
      { jp: "彼は天才にして努力家だ。", fr: "He is both a genius and a hard worker." },
    ],
    qs: [
      { t: "fill", q: "30歳＿＿＿、独立を果たした。", fr: "He achieved independence at just 30 years of age.",
        o: ["にして", "として", "にとって", "にすぎない"], a: 0,
        e: "\"Only at this stage / for the first time at\" → 〜にして." },
      { t: "meaning", q: "「偉大な芸術家にして思想家であった」— sens ?",
        o: ["he was both a great artist and a thinker", "he was an artist but not a thinker", "he was only an artist", "he was neither"], a: 0,
        e: "にして (double quality) = and at the same time, cumulating both." },
      { t: "nuance", q: "〜にして (double qualité) diffère de 〜として [[g005]] par :",
        o: ["にして = deux qualités simultanées ; として = rôle / capacité dans laquelle on agit", "they are identical", "として = double qualité", "にして = rôle"], a: 0,
        e: "にして accumulates; として denotes function/role." },
    ],
  },

  {
    id: "g166", g: "〜ながらに（して）", m: "while remaining (in this state); even while being (X as is)", f: "V-ます（語幹）／Nom + ながらに（して）",
    c: "time", lv: 3, rel: ["g026"],
    note: "The action or state takes place without change, in the original condition. 生まれながらに (from birth, from birth); 涙ながらに (tears in the eyes).",
    ex: [
      { jp: "彼女は涙ながらに、別れを告げた。", fr: "With tears in her eyes, she said goodbye." },
      { jp: "あの子は生まれながらに才能がある。", fr: "This child has been talented since birth." },
    ],
    qs: [
      { t: "fill", q: "昔＿＿＿の製法で、お菓子を作っています。", fr: "We make these confections the old-fashioned way (as they are).",
        o: ["ながらに", "ながら", "つつ", "かたわら"], a: 0,
        e: "Maintaining an original state → 〜ながらに." },
      { t: "meaning", q: "「居ながらにして世界中の情報が得られる」— sens ?",
        o: ["from the comfort of your own home, you can get news from all over the world", "traveling everywhere", "abroad only", "despite the information"], a: 0,
        e: "居ながらにして = staying where you are." },
      { t: "nuance", q: "Distinguer ながらに de ながら [[g026]] :",
        o: ["ながらに = état maintenu (de naissance, les larmes aux yeux) ; ながら = deux actions simultanées", "identical", "ながらに = deux actions", "ながら = état maintenu"], a: 0,
        e: "ながらに ≠ ながら: state maintenance vs. simultaneity of actions." },
    ],
  },

  {
    id: "g167", g: "〜を契機として／〜をきっかけとして", m: "using as a (formal) trigger", f: "Nom + を契機として／をきっかけとして",
    c: "time", lv: 2, rel: ["g021", "g022"],
    note: "Formal variants of 〜をきっかけに / 〜を契機に, with として. Written record, use in reports or articles.",
    ex: [
      { jp: "この事件を契機として、法律が改正された。", fr: "Using this incident as a trigger, the law was revised." },
      { jp: "留学をきっかけとして、人生観が変わった。", fr: "My stay abroad was the trigger that changed my outlook on life." },
    ],
    qs: [
      { t: "fill", q: "その事故を＿＿＿、安全対策が強化された。", fr: "This accident served as a trigger to reinforce safety measures.",
        o: ["契機として", "契機なので", "契機だから", "契機ながら"], a: 0,
        e: "Formal trigger → 〜を契機として." },
      { t: "meaning", q: "「この出会いをきっかけとして、友情が育まれた」— sens ?",
        o: ["the meeting sparked the blossoming of a friendship", "despite this meeting", "without this meeting, the friendship already existed", "about this event"], a: 0,
        e: "をきっかけとして = formal trigger event." },
      { t: "nuance", q: "〜を契機として est la version _____ de 〜を契機に :",
        o: ["more formal / written", "more familiar", "identical in every respect", "opposite direction"], a: 0,
        e: "として reinforces the formal register." },
    ],
  },

  {
    id: "g168", g: "〜に応えて", m: "in response to, to meet (expectations, requests)", f: "Nom + に応えて／に応えた＋Nom",
    c: "particle", lv: 2, rel: ["g011"],
    note: "Actively respond to expectations, requests or needs. Close to に応じて but に応えて puts more emphasis on responding concretely.",
    ex: [
      { jp: "ファンの声援に応えて、アンコールを演奏した。", fr: "In response to the fans' cheers, they played an encore." },
      { jp: "市民の要望に応えて、公園が整備された。", fr: "In response to citizen requests, the park has been landscaped." },
    ],
    qs: [
      { t: "fill", q: "視聴者のリクエスト＿＿＿、特別番組が放送された。", fr: "In response to viewers' requests, a special program was broadcast.",
        o: ["に応えて", "に関して", "に伴って", "に先立って"], a: 0,
        e: "Meeting expectations in concrete terms → 〜に応えて." },
      { t: "meaning", q: "「期待に応えて、好成績を残した。」— sens ?",
        o: ["by meeting expectations, it has achieved good results", "despite expectations", "about expectations", "with no particular expectations"], a: 0,
        e: "に応えて = active, concrete response to X." },
      { t: "nuance", q: "〜に応えて vs 〜に応じて [[g011]] :",
        o: ["に応えて = répondre activement (effort concret) ; に応じて = adapter selon les circonstances", "identical", "に応じて est plus actif", "に応えて = adaptation"], a: 0,
        e: "に応えて = acting to satisfy; に応じて = adapting to." },
    ],
  },

  {
    id: "g169", g: "〜をめぐる", m: "about, concerning (debate, controversy)", f: "Nom + をめぐる＋Nom／をめぐって",
    c: "particle", lv: 2, rel: ["g014"],
    note: "Adnominal variant of 〜をめぐって. Used as a noun modifier: 〜をめぐる議論 (the debate around...).",
    ex: [
      { jp: "領土をめぐる争いが続いている。", fr: "The conflict over land continues." },
      { jp: "その遺産をめぐる裁判は長引いた。", fr: "The trial surrounding this inheritance dragged on and on." },
    ],
    qs: [
      { t: "fill", q: "新しい政策＿＿＿議論が白熱した。", fr: "The debate surrounding the new policy has heated up.",
        o: ["をめぐる", "をめぐって", "について", "に関する"], a: 0,
        e: "Nominal modifier → 〜をめぐる＋Name." },
      { t: "meaning", q: "「原発をめぐる問題は複雑だ」— sens ?",
        o: ["nuclear issues are complex", "about the history of nuclear power", "despite nuclear power", "nuclear power is simple"], a: 0,
        e: "をめぐる = around (controversy, debate)." },
      { t: "usage", q: "〜をめぐる est la forme _____ de 〜をめぐって :",
        o: ["adnominal (modifies a name)", "verbal", "adverbial", "exclamative"], a: 0,
        e: "をめぐる can be followed directly by a name (attributive form)." },
    ],
  },

  {
    id: "g170", g: "〜をもとにして", m: "based on, from (source, base)", f: "Nom + をもとにして／をもとにした＋Nom",
    c: "particle", lv: 2, rel: ["g008"],
    note: "Formal variant of 〜をもとに with して. Interchangeable. Signifies the source or foundation from which sth is developed.",
    ex: [
      { jp: "実話をもとにして作られた映画だ。", fr: "It's a film based on a true story." },
      { jp: "アンケート結果をもとにして、改善策を講じた。", fr: "Based on the survey results, corrective action was taken." },
    ],
    qs: [
      { t: "fill", q: "この小説は歴史的事実＿＿＿書かれた。", fr: "This novel is based on historical facts.",
        o: ["をもとにして", "をめぐって", "をきっかけに", "を通じて"], a: 0,
        e: "Source relied upon → 〜をもとにして." },
      { t: "meaning", q: "「データをもとにして分析した」— sens ?",
        o: ["analysis based on data", "analyze despite data", "analyze data", "analyze without data"], a: 0,
        e: "をもとにして = take X as the basis for work." },
      { t: "nuance", q: "〜をもとにして et 〜をもとに [[g008]] :",
        o: ["quasi-synonymes ; をもとにして légèrement plus formel", "opposite", "をもとにして est moins formel", "they cannot change a name"], a: 0,
        e: "をもとにして = slightly more explicit form of をもとに." },
    ],
  },

  {
    id: "g171", g: "〜に関する／〜に関した", m: "relating to, concerning (attributive)", f: "Nom + に関する＋Nom",
    c: "particle", lv: 2, rel: ["g010"],
    note: "Adnominal form (modifies a noun) of 〜に関して. 日本の歴史に関する本 (a book on Japanese history). Formal register.",
    ex: [
      { jp: "環境問題に関するレポートを書いた。", fr: "I wrote a report on environmental issues." },
      { jp: "税金に関する法律が改正された。", fr: "The law on taxation has been revised." },
    ],
    qs: [
      { t: "fill", q: "健康＿＿＿情報が増えている。", fr: "Health information is on the increase.",
        o: ["に関する", "についての", "に関して", "に基づく"], a: 0,
        e: "Formal nominal modifier → 〜に関する＋Nom." },
      { t: "meaning", q: "「この法律はプライバシーに関する規定だ」— sens ?",
        o: ["it's a legal provision relating to privacy", "it's an advertising law", "despite privacy", "because of privacy"], a: 0,
        e: "に関する = bearing on, relating to (adjectival)." },
      { t: "usage", q: "〜に関する est la forme adnominale de :",
        o: ["に関して", "について", "に応じて", "に沿って"], a: 0,
        e: "に関して → に関する＋Name (same root). See [[g010]]." },
    ],
  },

  {
    id: "g172", g: "〜に基づく", m: "based on, founded on (attributive)", f: "Nom + に基づく＋Nom",
    c: "particle", lv: 2, rel: ["g007"],
    note: "Nominal form of 〜に基づいて. Changes a name: 法律に基づく処置 (measure based on law). Formal/legal register.",
    ex: [
      { jp: "証拠に基づく判断が重要だ。", fr: "Evidence-based judgment is important." },
      { jp: "規則に基づく処分が下された。", fr: "A penalty based on the regulations was imposed." },
    ],
    qs: [
      { t: "fill", q: "科学的事実＿＿＿政策を立てるべきだ。", fr: "We need to establish policies based on scientific facts.",
        o: ["に基づく", "に基づいて", "に沿って", "に関して"], a: 0,
        e: "Nominal modifier → 〜に基づく＋Name." },
      { t: "meaning", q: "「データに基づく分析」— sens ?",
        o: ["data-driven analysis", "analysis despite data", "data analysis", "analysis without data"], a: 0,
        e: "に基づく = based on (adjectival)." },
      { t: "usage", q: "〜に基づく est la forme adnominale de :",
        o: ["に基づいて", "に関して", "に応じて", "に沿って"], a: 0,
        e: "に基づいて → に基づく＋Name. See [[g007]]." },
    ],
  },

  {
    id: "g173", g: "〜において（の）", m: "in, in (domain/place, attributive)", f: "Nom + における＋Nom",
    c: "particle", lv: 2, rel: ["g004"],
    note: "Adnominal form of 〜において: 〜における＋Nom. Modifies a name. 教育における役割 (the role in education). Formal register.",
    ex: [
      { jp: "日本における少子化は深刻な問題だ。", fr: "Japan's low birth rate is a serious problem." },
      { jp: "スポーツにおける精神力の重要性を語った。", fr: "He talked about the importance of mental strength in sport." },
    ],
    qs: [
      { t: "fill", q: "現代社会＿＿＿テクノロジーの役割は大きい。", fr: "The role of technology in contemporary society is immense.",
        o: ["における", "において", "に関して", "に沿って"], a: 0,
        e: "Nominal modifier → 〜における＋Name." },
      { t: "meaning", q: "「ビジネスにおける信頼の重要性」— sens ?",
        o: ["the importance of trust in business", "about business only", "despite business", "after business"], a: 0,
        e: "における = in (domain), formal attributive." },
      { t: "nuance", q: "〜における est la forme _____ de 〜において [[g004]] :",
        o: ["adnominal (modifies a name)", "verbal", "adverbial", "familiar"], a: 0,
        e: "において → における＋Name. Same formal register." },
    ],
  },

  {
    id: "g174", g: "〜によっては", m: "depending on the case, depending on what it is", f: "Nom + によっては",
    c: "particle", lv: 2, rel: ["g003"],
    note: "Emphasizes that the result varies according to circumstances or the nature of X. Often followed by a conditional construction.",
    ex: [
      { jp: "場合によっては、プロに頼んだほうがいい。", fr: "Depending on the case, it's best to call in a professional." },
      { jp: "考え方によっては、失敗も成功の一部だ。", fr: "Depending on how you look at it, failure is also part of success." },
    ],
    qs: [
      { t: "fill", q: "状況＿＿＿、対応を変える必要がある。", fr: "Depending on the situation, we need to adapt our response.",
        o: ["によっては", "によって", "に関しては", "に対しては"], a: 0,
        e: "Variation according to circumstances → 〜によっては." },
      { t: "meaning", q: "「人によっては賛成しない場合もある」— sens ?",
        o: ["depending on the person, some may not agree", "everyone agrees", "no one agrees", "agreement is impossible"], a: 0,
        e: "によっては = according to X (cases/persons)." },
      { t: "usage", q: "〜によっては vs 〜によって [[g003]] :",
        o: ["によっては = variation possible selon les cas ; によって = cause/moyen/agent", "identical", "によって exprime la variation", "によっては exprime la cause"], a: 0,
        e: "によっては = as the case may be (variation). See [[g003]]." },
    ],
  },

  {
    id: "g175", g: "〜にとっては", m: "for (someone) in particular, seen from the angle of", f: "Nom + にとっては",
    c: "particle", lv: 2, rel: ["g006"],
    note: "Variant of 〜にとって with は of contrast or thematization. Often to emphasize that the effect/judgment is particular to X, not universal.",
    ex: [
      { jp: "子どもにとっては、これが難しいかもしれない。", fr: "For a particular child, this can be difficult." },
      { jp: "私にとっては大した問題ではない。", fr: "For me, it's not a big problem." },
    ],
    qs: [
      { t: "fill", q: "初心者＿＿＿、この教材はとても役立つ。", fr: "For beginners in particular, this teaching material is very useful.",
        o: ["にとっては", "に対しては", "に関しては", "にとって"], a: 0,
        e: "Viewpoint particular to X → 〜にとっては." },
      { t: "meaning", q: "「彼にとっては、お金より時間が大切だ」— sens ?",
        o: ["from his point of view, time is more important than money", "for everyone", "unlike him", "he thinks money is more important"], a: 0,
        e: "にとっては = from X's particular point of view (は of contrast)." },
      { t: "nuance", q: "Différence entre にとって et にとっては :",
        o: ["にとっては ajoute une nuance contrastive (particulièrement pour X)", "identical", "にとっては est plus général", "にとって implique un contraste"], a: 0,
        e: "The は thematizes and contrasts: for X specifically." },
    ],
  },

  {
    id: "g176", g: "〜をはじめとする", m: "starting with, in particular (attributive)", f: "Nom + をはじめとする＋Nom",
    c: "particle", lv: 2, rel: ["g009"],
    note: "Adnominal form of 〜をはじめ: modifies a noun. 東京をはじめとする大都市 (major cities, starting with Tokyo).",
    ex: [
      { jp: "東京をはじめとする大都市では、地価が高い。", fr: "In major metropolises, starting with Tokyo, land prices are high." },
      { jp: "日本をはじめとするアジアの国々が参加した。", fr: "Asian countries, starting with Japan, took part." },
    ],
    qs: [
      { t: "fill", q: "田中先生＿＿＿多くの教師が式典に出席した。", fr: "Many teachers, starting with Ms Tanaka, attended the ceremony.",
        o: ["をはじめとする", "をはじめ", "といった", "をめぐる"], a: 0,
        e: "Adnominal → 〜をはじめとする＋Nom." },
      { t: "meaning", q: "「スマホをはじめとするデジタル機器が普及した」— sens ?",
        o: ["digital devices, starting with the smartphone, have become widespread", "smartphone only", "despite smartphone", "before the smartphone"], a: 0,
        e: "をはじめとする = starting with X (category representative)." },
      { t: "usage", q: "〜をはじめとする est la forme _____ de 〜をはじめ :",
        o: ["adnominal (modifies a name)", "verbal", "interrogative", "negative"], a: 0,
        e: "をはじめ → をはじめとする＋Nom. See [[g009]]." },
    ],
  },

  {
    id: "g177", g: "〜においては", m: "in (thematized), regarding (formal)", f: "Nom + においては",
    c: "particle", lv: 2, rel: ["g004", "g173"],
    note: "〜において with は theming. Emphasizes the setting. 現代においては (in today's world, as for). Formal register.",
    ex: [
      { jp: "現代においては、スマホなしの生活は考えられない。", fr: "In today's world, life without a smartphone is inconceivable." },
      { jp: "教育においては、個性を伸ばすことが重要だ。", fr: "When it comes to education, cultivating each individual's personality is essential." },
    ],
    qs: [
      { t: "fill", q: "医療の分野＿＿＿、AI の活用が進んでいる。", fr: "In the medical field, the use of AI is progressing.",
        o: ["においては", "について", "として", "に基づいて"], a: 0,
        e: "Formal thematic framework → 〜においては." },
      { t: "meaning", q: "「科学においては、証拠が重要だ」— sens ?",
        o: ["in science, proof is everything", "about science in general", "despite science", "unlike science"], a: 0,
        e: "においては = within the framework of (thematized, formal)." },
      { t: "usage", q: "〜においては est :",
        o: ["〜において + は (thématisation)", "an interrogative form", "an adnominal form", "a familiar shape"], a: 0,
        e: "= において + は contrast/theming." },
    ],
  },

  {
    id: "g178", g: "〜だけの", m: "enough to, as much as necessary to", f: "V-辞書 + だけの＋Nom",
    c: "condition", lv: 2, rel: ["g046", "g112"],
    note: "Quantity or degree sufficient to justify/complete X. だけのことはある = \"it's not for nothing\". だけの力がある (have the means to).",
    ex: [
      { jp: "頑張っただけのことはある。", fr: "It was worth all the trouble." },
      { jp: "それだけの準備があれば、大丈夫だ。", fr: "With this much preparation, it should be fine." },
    ],
    qs: [
      { t: "fill", q: "努力した＿＿＿成果が出た。", fr: "The results are well worth the effort.",
        o: ["だけの", "だけに", "ばかりの", "ほどの"], a: 0,
        e: "Sufficient quantity/degree → 〜だけの." },
      { t: "meaning", q: "「苦労しただけのことはある」— sens ?",
        o: ["it was worth it (the reward is worth the effort)", "it wasn't worth it", "efforts were in vain", "we didn't suffer at all"], a: 0,
        e: "だけのことはある = the result justifies the effort (it was worth it)." },
      { t: "nuance", q: "〜だけの vs 〜だけに [[g045]] :",
        o: ["だけの = quantité suffisante pour ; だけに = précisément à cause de (renforcement causal)", "identical", "だけに = quantité", "だけの = cause"], a: 0,
        e: "だけの (量・程度) ≠ だけに (因果関係). See [[g045]]." },
    ],
  },

  {
    id: "g179", g: "〜折（に）", m: "on the occasion of, when the opportunity arises", f: "V-辞書／V-た／Nom+の + 折（に）",
    c: "time", lv: 3, rel: ["g012", "g092"],
    note: "Special occasion, often rare. Polite/formal register: お近くにお越しの折に (if you're ever in the area). Similar to 機会に but more formal.",
    ex: [
      { jp: "お近くにお越しの折には、ぜひお立ち寄りください。", fr: "If you're ever in the area, don't hesitate to stop by." },
      { jp: "先日上京した折に、旧友と再会した。", fr: "On my last trip up to Tokyo, I saw an old friend again." },
    ],
    qs: [
      { t: "fill", q: "次回お会いできる＿＿＿、ぜひご相談ください。", fr: "The next time we meet, don't hesitate to ask me.",
        o: ["折に", "うちに", "最中に", "とたんに"], a: 0,
        e: "Formal occasion → 〜折に." },
      { t: "meaning", q: "「機会のある折に、ぜひ挑戦してください」— sens ?",
        o: ["when the opportunity arises, try", "you must not try", "now's your chance", "despite the opportunity"], a: 0,
        e: "折に = when the occasion arises (polite register)." },
      { t: "usage", q: "〜折に appartient à quel registre ?",
        o: ["formal / polite", "very familiar", "childish", "slang"], a: 0,
        e: "折に is typical of polite language (letters, speeches)." },
    ],
  },

  {
    id: "g180", g: "〜ことだろう", m: "as it should be (empathy, imagination)", f: "普通形 + ことだろう",
    c: "modality", lv: 2, rel: ["g142", "g048"],
    note: "Expression of empathy or imagination: \"how X it must be\". どんなにつらいことだろう (how painful it must be). Semi-formal register.",
    ex: [
      { jp: "どんなに悲しかったことだろう。", fr: "How sad it must have been." },
      { jp: "合格したと知らせが来た時、どれほど嬉しかったことだろう。", fr: "When the news of his success arrived, how happy he must have been." },
    ],
    qs: [
      { t: "fill", q: "一人で海外に行くとは、どれほど心細かった＿＿＿。", fr: "Going abroad on your own, how scary that must have been.",
        o: ["ことだろう", "ことか", "ものか", "はずだ"], a: 0,
        e: "Empathy / imagination about a past state → 〜ことだろう." },
      { t: "meaning", q: "「どんなに苦しかったことだろう」— sens ?",
        o: ["how difficult it must have been (imaginative empathy)", "it was easy", "it's difficult now", "it will be difficult"], a: 0,
        e: "ことだろう = empathic imagination about the intensity of an experience." },
      { t: "nuance", q: "〜ことだろう vs 〜ことか [[g142]] :",
        o: ["ことだろう = empathie (imagination d'un état) ; ことか = exclamation directe du locuteur", "identical", "ことか exprime l'empathie", "ことだろう est une exclamation directe"], a: 0,
        e: "ことだろう = imagination of another's state; ことか = speaker's own emotion." },
    ],
  },

  {
    id: "g181", g: "〜ずじまい", m: "end up not doing, without ever (the opportunity to)", f: "V-ない（語幹） + ずじまい（だった）",
    c: "express", lv: 3, rel: ["g100"],
    note: "We intended to do X but never did. Regret or observation. 会わずじまいだった (I never got to see it after all).",
    ex: [
      { jp: "その本は借りたまま読まずじまいだった。", fr: "I borrowed this book but never got around to reading it." },
      { jp: "結局、彼には会わずじまいで帰国した。", fr: "In the end, I went home without ever having seen it." },
    ],
    qs: [
      { t: "fill", q: "買おうと思っていたのに、結局買わ＿＿＿だった。", fr: "I intended to buy it, but in the end I never did.",
        o: ["ずじまい", "っきり", "ないまま", "ずに"], a: 0,
        e: "Intention not finally realized → 〜ずじまい." },
      { t: "meaning", q: "「伝えたいことが伝えられずじまいだった」— sens ?",
        o: ["in the end I couldn't say what I wanted to say", "I've said it all", "I'll say it", "I said something different"], a: 0,
        e: "ずじまい = we didn't do X after all (regret)." },
      { t: "usage", q: "〜ずじまい s'emploie pour :",
        o: ["an unfulfilled intention / something not done in the end", "repeated action", "future planned action", "a comparison"], a: 0,
        e: "Observation: X should have been done but wasn't." },
    ],
  },

  {
    id: "g182", g: "〜をよそに", m: "disregarding, ignoring", f: "Nom + をよそに",
    c: "contrast", lv: 3, rel: ["g073"],
    note: "Acting while ignoring the concerns/hopes/reactions of others. Nuance often critical. 周囲の心配をよそに (ignoring the concerns of those around).",
    ex: [
      { jp: "親の心配をよそに、彼は無謀な冒険に出た。", fr: "Disregarding his parents' concerns, he embarked on a reckless adventure." },
      { jp: "周囲の批判をよそに、彼女は自分のやり方を貫いた。", fr: "Ignoring the criticism around her, she stuck to her guns." },
    ],
    qs: [
      { t: "fill", q: "世間の非難＿＿＿、彼は計画を続けた。", fr: "Ignoring the public's reproaches, he went ahead with his project.",
        o: ["をよそに", "もかまわず", "にかかわらず", "に反して"], a: 0,
        e: "Ignore other people's reactions → 〜をよそに." },
      { t: "meaning", q: "「私の気持ちをよそに、話は進んだ」— sens ?",
        o: ["without taking my feelings into account, the discussion moved forward", "thanks to my feelings", "about my feelings", "despite my positive feelings"], a: 0,
        e: "をよそに = ignoring (X's feelings/concerns)." },
      { t: "nuance", q: "Distinguer 〜をよそに de 〜もかまわず [[g073]] :",
        o: ["をよそに insiste sur le mépris des préoccupations d'autrui ; もかまわず sur l'indifférence à son propre inconvénient", "identical", "もかまわず concerne autrui", "をよそに concerne soi-même"], a: 0,
        e: "をよそに → ignore the surroundings; もかまわず → ignore an annoyance (to oneself)." },
    ],
  },

  //__APPEND__
];

if (typeof window !== "undefined") { window.N2_GRAMMAR = N2_GRAMMAR; window.CATEGORIES = CATEGORIES; window.TIERS = TIERS; }
