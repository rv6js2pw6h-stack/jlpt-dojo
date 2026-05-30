/* =========================================================================
   N3 道場 — Base de données de grammaire JLPT N3
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

const N3_GRAMMAR = [

  /* ===================== PARTICULES & LOCUTIONS — g001 à g016 ===================== */

  {
    id: "g001", g: "〜をはじめ（として）", m: "starting with", f: "Nom + をはじめ（として）／をはじめとする＋Nom",
    c: "particle", lv: 2, rel: ["g074"],
    note: "Name a representative example at the top of a series. \"X をはじめ\" = \"X, and others like it\". Often followed by an enumeration.",
    ex: [
      { jp: "校長先生をはじめ、多くの先生が出席した。", fr: "Starting with the director, many teachers were present." },
      { jp: "日本はラーメンをはじめとする麺料理が豊富だ。", fr: "Japan is rich in noodle dishes, starting with rāmen." },
    ],
    qs: [
      { t: "fill", q: "東京＿＿＿、日本には大きな都市がたくさんある。", fr: "Starting with Tokyo, Japan has many large cities.",
        o: ["をはじめ", "について", "によって", "に対して"], a: 0,
        e: "〜をはじめ cites a representative at the top of a series (Tokyo, then other cities)." },
      { t: "meaning", q: "「社長をはじめ、社員全員が参加した」— sens de をはじめ ?",
        o: ["starting with the CEO (him first, then the others)", "About the CEO", "because of the CEO", "unlike the CEO"], a: 0,
        e: "〜をはじめ designates the most representative element placed at the head of an enumeration." },
    ],
  },

  {
    id: "g002", g: "〜にかかわらず／に関わらず", m: "regardless of", f: "Nom／V-dict＋V-ない + にかかわらず",
    c: "particle", lv: 2, rel: ["g003"],
    note: "Indicates that the result does not change according to variations in X. Often with opposite pairs (V-る／V-ない, 多い少ない...) or variation names (天気, 年齢).",
    ex: [
      { jp: "天候にかかわらず、試合は行われる。", fr: "Whatever the weather, the match will go ahead." },
      { jp: "参加するしないにかかわらず、連絡してください。", fr: "Whether or not you wish to participate, please contact us." },
    ],
    qs: [
      { t: "fill", q: "経験の有無＿＿＿、誰でも応募できます。", fr: "With or without experience, anyone can apply.",
        o: ["にかかわらず", "について", "によって", "にとって"], a: 0,
        e: "〜にかかわらず = the result does not depend on the variation considered (here, having or not having experience)." },
      { t: "nuance", q: "〜にかかわらず vs 〜にもかかわらず : quelle différence ?",
        o: ["にかかわらず = peu importe (quelle que soit la variation) ; にもかかわらず = malgré (concession sur un fait précis)", "they are identical", "にもかかわらず exprime une variation", "にかかわらず exprime une concession"], a: 0,
        e: "〜にかかわらず: regardless of variations. 〜にもかかわらず: \"although / despite\" an established fact." },
    ],
  },

  {
    id: "g003", g: "〜を問わず", m: "regardless of", f: "Nom + を問わず",
    c: "particle", lv: 2, rel: ["g002"],
    note: "A slightly formal register. \"Regardless of X\": the thing applies uniformly. Often with 年齢, 性別, 経験, 昼夜.",
    ex: [
      { jp: "年齢を問わず、誰でも参加できる。", fr: "Regardless of age, everyone can take part." },
      { jp: "昼夜を問わず、機械は動き続けている。", fr: "Day and night, without distinction, the machines continue to run." },
    ],
    qs: [
      { t: "fill", q: "経験の有無＿＿＿、やる気のある人を募集します。", fr: "Regardless of experience, we recruit motivated people.",
        o: ["を問わず", "をはじめ", "について", "において"], a: 0,
        e: "〜を問わず = without regard to the distinction cited. Applies uniformly." },
      { t: "meaning", q: "「国籍を問わず採用する」— sens ?",
        o: ["recruit without distinction of nationality", "recruiting by asking about nationality", "recruiting by nationality", "recruiting about nationality"], a: 0,
        e: "〜を問わず = we don't ask about X; X doesn't come into it." },
    ],
  },

  {
    id: "g004", g: "〜をもとに（して）", m: "based on, relying on", f: "Nom + をもとに（して）／をもとにした＋Nom",
    c: "particle", lv: 2, rel: ["g006"],
    note: "Indicates the material/source from which something is created or elaborated. \"Taking X as a starting point\".",
    ex: [
      { jp: "この映画は実話をもとに作られた。", fr: "This film is based on a true story." },
      { jp: "アンケートの結果をもとに、商品を改良した。", fr: "Based on the survey results, we improved the product." },
    ],
    qs: [
      { t: "fill", q: "集めたデータ＿＿＿、レポートを書いた。", fr: "I wrote the report based on the data collected.",
        o: ["をもとに", "に対して", "について", "を問わず"], a: 0,
        e: "〜をもとに = from (material/source used as basis for a creation)." },
      { t: "nuance", q: "〜をもとに vs 〜に基づいて : nuance ?",
        o: ["をもとに insiste sur le matériau de départ d'une création ; に基づいて insiste sur la conformité à une règle/un principe", "identical", "をもとに est plus formel", "に基づいて concerne uniquement les histoires"], a: 0,
        e: "をもとに = raw material for an elaboration. に基づいて = in compliance with a standard, a law, a principle." },
    ],
  },

  {
    id: "g005", g: "〜を通じて／を通して", m: "through; during the entire", f: "Nom + を通じて／を通して",
    c: "particle", lv: 2, rel: [],
    note: "Two uses: (1) means/intermediary (\"through\"); (2) continuous temporal or spatial extent (\"throughout\").",
    ex: [
      { jp: "友人を通じて彼と知り合った。", fr: "I met him through a friend." },
      { jp: "この地方は一年を通して暖かい。", fr: "This region is warm all year round." },
    ],
    qs: [
      { t: "fill", q: "インターネット＿＿＿、世界中の人と交流できる。", fr: "Via the Internet, we can exchange information with the whole world.",
        o: ["を通じて", "に対して", "をはじめ", "に反して"], a: 0,
        e: "〜を通じて = by means of / through (communication channel)." },
      { t: "meaning", q: "「一年を通して雨が多い」— sens de を通して ?",
        o: ["year-round (continuous range)", "through a special year", "because of the year", "about the year"], a: 0,
        e: "Here 〜を通して expresses continuous temporal extent: \"throughout\"." },
    ],
  },

  {
    id: "g006", g: "〜に基づいて／に基づく", m: "based on, according to, in accordance with", f: "Nom + に基づいて／に基づく＋Nom",
    c: "particle", lv: 2, rel: ["g004"],
    note: "Action taken in accordance with a rule, a datum, a principle. More formal than をもとに; emphasizes respect for the foundation.",
    ex: [
      { jp: "法律に基づいて処理する。", fr: "Treat in accordance with the law." },
      { jp: "事実に基づく報道が求められる。", fr: "We demand fact-based reporting." },
    ],
    qs: [
      { t: "fill", q: "規則＿＿＿、厳正に審査します。", fr: "In accordance with the regulations, we will examine the matter rigorously.",
        o: ["に基づいて", "をはじめ", "にかかわらず", "について"], a: 0,
        e: "〜に基づいて = in accordance with a rule/foundation." },
      { t: "usage", q: "Quelle phrase est la plus naturelle ?",
        o: ["調査結果に基づいて対策を立てる", "調査結果をはじめ対策を立てる", "調査結果を問わず対策を立てる", "調査結果にとって対策を立てる"], a: 0,
        e: "A measurement \"based on\" results: 〜に基づいて fits." },
    ],
  },

  {
    id: "g007", g: "〜に応じて／に応じた", m: "according to, depending on (adapted variation)", f: "Nom + に応じて／に応じた＋Nom",
    c: "particle", lv: 1, rel: ["g015"],
    note: "Indicates adaptation to variation: \"X varies, and Y adjusts accordingly\". Often with 収入, 場合, 状況, 能力.",
    ex: [
      { jp: "収入に応じて税金が決まる。", fr: "Tax is based on income." },
      { jp: "客の要望に応じて対応する。", fr: "We respond to customer requests." },
    ],
    qs: [
      { t: "fill", q: "季節＿＿＿、メニューを変える。", fr: "We change the menu according to the season.",
        o: ["に応じて", "に反して", "をはじめ", "について"], a: 0,
        e: "〜に応じて = adapting to a variation (seasons vary, menu adjusts)." },
      { t: "nuance", q: "〜に応じて vs 〜によって（変化） : nuance ?",
        o: ["に応じて insiste sur l'adaptation active à une variation ; によって constate simplement que ça varie selon les cas", "identical", "に応じて est familier", "によって ne marque jamais la variation"], a: 0,
        e: "に応じて = actively adjusting. によって = simple observation of variation \"according to\"." },
    ],
  },

  {
    id: "g008", g: "〜に沿って／に沿った", m: "along ; in accordance with", f: "Nom + に沿って／に沿った＋Nom",
    c: "particle", lv: 3, rel: ["g006"],
    note: "Concrete meaning (\"along\" a river, a road) or abstract (\"in accordance with\" a plan, expectations, policy).",
    ex: [
      { jp: "川に沿って道が続いている。", fr: "The road runs alongside the river." },
      { jp: "計画に沿って仕事を進める。", fr: "Move work forward according to plan." },
    ],
    qs: [
      { t: "fill", q: "マニュアル＿＿＿作業を進めてください。", fr: "Please proceed according to the manual.",
        o: ["に沿って", "を問わず", "に反して", "をはじめ"], a: 0,
        e: "〜に沿って (abstract) = following / in accordance with (a manual, a plan)." },
      { t: "meaning", q: "「海岸に沿って歩く」— sens de に沿って ?",
        o: ["walk along the coast", "walk against the coast", "walk the coast", "walk without taking the coast into account"], a: 0,
        e: "Concrete meaning: 〜に沿って = along." },
    ],
  },

  {
    id: "g009", g: "〜にわたって／にわたる", m: "over an area of, for the entire duration of the", f: "Nom (durée/quantité/espace) + にわたって／にわたる＋Nom",
    c: "particle", lv: 2, rel: ["g005"],
    note: "Emphasizes the magnitude of a temporal or spatial extent. \"For 3 years\", \"over 10 km\", \"in all areas\".",
    ex: [
      { jp: "工事は三年にわたって続いた。", fr: "The work took (no less than) three years." },
      { jp: "広い範囲にわたる調査を行った。", fr: "We conducted a wide-ranging survey." },
    ],
    qs: [
      { t: "fill", q: "会議は五時間＿＿＿行われた。", fr: "The meeting lasted a notable five hours.",
        o: ["にわたって", "において", "に応じて", "をもとに"], a: 0,
        e: "〜にわたって emphasizes the breadth of a temporal expanse (five whole hours)." },
      { t: "nuance", q: "〜にわたって vs 〜を通して : nuance ?",
        o: ["にわたって souligne l'ampleur/l'étendue ; を通して insiste sur la continuité « tout au long »", "identical", "を通して ne s'emploie pas pour le temps", "にわたって est familier"], a: 0,
        e: "にわたって emphasizes the wide expanse; を通して the end-to-end continuity." },
    ],
  },

  {
    id: "g010", g: "〜において／における", m: "in, about (formal register)", f: "Nom + において／における＋Nom",
    c: "particle", lv: 1, rel: ["g032"],
    note: "Formal equivalent of で for place, domain or time. Common in writing and speech.",
    ex: [
      { jp: "会議は東京において開かれた。", fr: "The meeting was held in Tokyo." },
      { jp: "現代社会における問題を考える。", fr: "Reflect on the problems of contemporary society." },
    ],
    qs: [
      { t: "fill", q: "この分野＿＿＿、彼は第一人者だ。", fr: "In this field, he is an authority.",
        o: ["において", "に応じて", "を問わず", "をはじめ"], a: 0,
        e: "〜において = in (domain/place/time), formal register equivalent to で." },
      { t: "usage", q: "Registre le plus formel pour « lors de la cérémonie » ?",
        o: ["式典において", "式典で", "式典をはじめ", "式典について"], a: 0,
        e: "〜において is the most formal form for situating an event (≈ で written/supported speech)." },
    ],
  },

  {
    id: "g011", g: "〜に際して／に際し", m: "on the occasion of, at the time of (formal)", f: "Nom／V-dict + に際して",
    c: "particle", lv: 2, rel: ["g032"],
    note: "Formal register for an important/special moment: beginning, departure, signature... Often in speeches and announcements.",
    ex: [
      { jp: "卒業に際して、一言申し上げます。", fr: "On the occasion of the graduation ceremony, I'd like to say a few words." },
      { jp: "契約に際して、注意事項を確認する。", fr: "When signing the contract, we check the clauses." },
    ],
    qs: [
      { t: "fill", q: "開会＿＿＿、会長があいさつをした。", fr: "The President gave a speech at the opening.",
        o: ["に際して", "に応じて", "にわたって", "を問わず"], a: 0,
        e: "〜に際して = at the time of (formal, important occasion)." },
      { t: "nuance", q: "〜に際して vs 〜際（に） : nuance ?",
        o: ["に際して est plus solennel et concerne un moment marquant ; 際に est plus neutre (« lors de »)", "identical", "際に est plus formel", "に際して concerne le passé seulement"], a: 0,
        e: "に際して has a solemn coloration; 際に is simply used to date \"during\"." },
    ],
  },

  {
    id: "g012", g: "〜に反して／に反する", m: "as opposed to", f: "Nom + に反して／に反する＋Nom",
    c: "particle", lv: 2, rel: [],
    note: "Indicates that a result goes against an expectation, prediction, rule. Often used with 予想, 期待, 規則.",
    ex: [
      { jp: "予想に反して、試合に負けた。", fr: "Contrary to expectations, we lost the match." },
      { jp: "親の期待に反する進路を選んだ。", fr: "He chose a path contrary to his parents' expectations." },
    ],
    qs: [
      { t: "fill", q: "予想＿＿＿、彼は試験に合格した。", fr: "Contrary to expectations, he passed the exam.",
        o: ["に反して", "に応じて", "に基づいて", "をもとに"], a: 0,
        e: "〜に反して = the opposite of an expectation/prediction." },
      { t: "meaning", q: "「規則に反する行為」— sens ?",
        o: ["an act contrary to the regulations", "a regulation-compliant act", "an act concerning the regulations", "an act based on regulations"], a: 0,
        e: "〜に反する = which goes against (rule, expectation)." },
    ],
  },

  {
    id: "g013", g: "〜に先立って／に先立ち", m: "before, prior to (formal)", f: "Nom／V-dict + に先立って",
    c: "particle", lv: 3, rel: ["g019"],
    note: "Formal register: a preparatory action performed BEFORE an important event. ≈ \"prior to\".",
    ex: [
      { jp: "開店に先立って、関係者を招いた。", fr: "Before the opening, we invited all stakeholders." },
      { jp: "出発に先立ち、注意事項を説明する。", fr: "Prior to departure, instructions are explained." },
    ],
    qs: [
      { t: "fill", q: "試合＿＿＿、選手たちが入場した。", fr: "Before the match, the players made their entrances.",
        o: ["に先立って", "に応じて", "に反して", "を問わず"], a: 0,
        e: "〜に先立って = prior to an important (formal) event." },
      { t: "nuance", q: "〜に先立って vs 〜前に : nuance ?",
        o: ["に先立って est formel et implique une préparation à un événement marquant ; 前に est neutre et général", "identical", "前に est plus formel", "に先立って concerne le futur uniquement"], a: 0,
        e: "に先立って: solemn preliminary to a major event. 前に: \"before\" in the broadest sense." },
    ],
  },

  {
    id: "g014", g: "〜に伴って／に伴い", m: "at the same time that, as the", f: "Nom／V-dict + に伴って",
    c: "particle", lv: 2, rel: ["g077", "g078"],
    note: "Indicates that one change leads to another, simultaneously. Semi-formal register. Often with gradual phenomena.",
    ex: [
      { jp: "人口の増加に伴って、住宅が不足している。", fr: "With the growing population, there's a shortage of housing." },
      { jp: "気温の上昇に伴い、海面が上がる。", fr: "As temperatures rise, so do sea levels." },
    ],
    qs: [
      { t: "fill", q: "技術の進歩＿＿＿、生活が便利になった。", fr: "Technical progress has made life more practical.",
        o: ["に伴って", "に反して", "を問わず", "に際して"], a: 0,
        e: "〜に伴って = one change accompanies another simultaneously." },
      { t: "nuance", q: "〜に伴って vs 〜につれて : nuance ?",
        o: ["に伴って accepte aussi des changements ponctuels et est plus formel ; につれて exige une variation graduelle et continue", "identical", "につれて est formel", "に伴って ne marque jamais le changement"], a: 0,
        e: "につれて = compulsory continuous progression. に伴って = broader, also accepts events and is more formal." },
    ],
  },

  {
    id: "g015", g: "〜に従って／に従い", m: "in accordance with ; as", f: "Nom／V-dict + に従って",
    c: "particle", lv: 1, rel: ["g078", "g007"],
    note: "Two uses: (1) \"in accordance with\" a rule/instruction; (2) \"as\" (parallel progression).",
    ex: [
      { jp: "指示に従って行動する。", fr: "Follow instructions." },
      { jp: "山を登るに従って、寒くなってきた。", fr: "The higher we climbed, the colder it got." },
    ],
    qs: [
      { t: "fill", q: "係員の指示＿＿＿、避難してください。", fr: "Evacuate according to agent's instructions.",
        o: ["に従って", "に反して", "をはじめ", "を問わず"], a: 0,
        e: "〜に従って (job 1) = following / in accordance with an instruction." },
      { t: "meaning", q: "「年を取るに従って、体力が落ちる」— sens de に従って ?",
        o: ["as we age", "unlike aging", "due to precise aging", "before aging"], a: 0,
        e: "〜に従って (job 2) = as (parallel progression)." },
    ],
  },

  {
    id: "g016", g: "〜にとって", m: "for, from the point of view of", f: "Nom + にとって（は／も／の）",
    c: "particle", lv: 1, rel: [],
    note: "Presents the point of view from which one judges (\"for X, it is...\"). The predicate is often an evaluation (大切, 難しい, 必要).",
    ex: [
      { jp: "私にとって、家族が一番大切だ。", fr: "For me, family is the most important thing." },
      { jp: "子供にとって、遊びは学びだ。", fr: "For children, play is learning." },
    ],
    qs: [
      { t: "fill", q: "外国人＿＿＿、日本の漢字は難しい。", fr: "For foreigners, Japanese kanji are difficult.",
        o: ["にとって", "に対して", "について", "によって"], a: 0,
        e: "〜にとって = from the point of view of (followed by an assessment: difficult)." },
      { t: "nuance", q: "〜にとって vs 〜に対して : nuance ?",
        o: ["にとって = point de vue/évaluation (« pour X ») ; に対して = action dirigée vers une cible (« envers X »)", "identical", "にとって marque une opposition", "に対して exprime un point de vue"], a: 0,
        e: "にとって introduces a judgment \"for X\"; に対して an attitude/action \"towards X\"." },
    ],
  },

  /* ===================== CONCESSION & CONTRASTE — g017 à g024 ===================== */

  {
    id: "g017", g: "〜くせに", m: "yet (reproach)", f: "V-plain／A-い／A-な＋な／N＋の + くせに",
    c: "contrast", lv: 1, rel: ["g018", "g020"],
    note: "Expresses reproach or surprise at a discrepancy between the expected and the actual. Always critical of the subject, familiar tone.",
    ex: [
      { jp: "知っているくせに、教えてくれない。", fr: "He knows it, but he doesn't tell me." },
      { jp: "子供のくせに、生意気なことを言う。", fr: "For a child, he says arrogant things." },
    ],
    qs: [
      { t: "fill", q: "彼は自分が悪い＿＿＿、謝ろうとしない。", fr: "Yet he's the one at fault, but he refuses to apologize.",
        o: ["くせに", "おかげで", "ために", "とおりに"], a: 0,
        e: "〜くせに = reproach: he is at fault AND refuses to apologize." },
      { t: "meaning", q: "「できないくせに、口だけは達者だ」— sens de くせに ?",
        o: ["even though he's incapable (review)", "because he can't", "even though", "as soon as we can"], a: 0,
        e: "〜くせに = reproach towards sb who speaks without acting. Always critical." },
      { t: "nuance", q: "〜くせに vs 〜のに : différence ?",
        o: ["くせに contient un reproche personnel marqué ; のに exprime une contradiction/déception plus neutre", "identical", "のに est toujours un reproche", "くせに ne s'emploie pas avec des personnes"], a: 0,
        e: "くせに = targeted negative judgment on the subject; のに = simple contradiction/disappointment." },
    ],
  },

  {
    id: "g018", g: "〜割に（は）", m: "for what it is, contrary to what you'd expect", f: "V-plain／A／N＋の + 割に（は）",
    c: "contrast", lv: 1, rel: ["g017"],
    note: "Compare a fact with what would normally be expected: \"X, and yet Y does not correspond to what X would suggest\".",
    ex: [
      { jp: "この店は値段の割においしい。", fr: "For its price, this restaurant is good (better than expected)." },
      { jp: "彼は年齢の割に若く見える。", fr: "For his age, he looks young." },
    ],
    qs: [
      { t: "fill", q: "よく勉強した＿＿＿、点数が悪かった。", fr: "For studying a lot, he got a bad grade.",
        o: ["割に", "ために", "おかげで", "とおりに"], a: 0,
        e: "〜割に = contrast with expectation: studied a lot → would expect a good grade." },
      { t: "meaning", q: "「この仕事は大変な割に給料が安い」— sens de 割に ?",
        o: ["for the difficulty it is, the salary is low (lag)", "thanks to the difficulty", "because of the difficulty", "about difficulty"], a: 0,
        e: "〜割に highlights a gap with what the effort would suggest." },
    ],
  },

  {
    id: "g019", g: "〜ものの", m: "although, of course... but", f: "V-plain／A／N＋である + ものの",
    c: "contrast", lv: 2, rel: ["g020", "g022"],
    note: "Written/formal concession: a fact is admitted, but the rest goes in the opposite or disappointing direction. Sustained register.",
    ex: [
      { jp: "免許は取ったものの、車がない。", fr: "I've got my driving license, but I don't have a car." },
      { jp: "やってみるとは言ったものの、自信はない。", fr: "I said I'd try, but I lack confidence." },
    ],
    qs: [
      { t: "fill", q: "薬を飲んだ＿＿＿、なかなか熱が下がらない。", fr: "I've taken the medicine, but the fever isn't going down.",
        o: ["ものの", "おかげで", "ために", "とたんに"], a: 0,
        e: "〜ものの = sustained concession: the action is admitted, but the expected result is missing." },
      { t: "nuance", q: "〜ものの vs 〜のに : nuance ?",
        o: ["ものの est plus écrit/posé ; のに ajoute souvent un sentiment de déception ou de reproche", "identical", "のに est plus formel", "ものの exprime une cause"], a: 0,
        e: "ものの = neutral, neat concession. のに = concession + emotion (disappointment)." },
    ],
  },

  {
    id: "g020", g: "〜ながら（も）", m: "although, despite", f: "V-ます stem／A-い／A-な／N + ながら（も）",
    c: "contrast", lv: 2, rel: ["g017", "g019"],
    note: "Concession: two states coexist when one would expect a contradiction. To be distinguished from the ながら of simultaneity of actions.",
    ex: [
      { jp: "狭いながらも、楽しい我が家だ。", fr: "Although small, our house is pleasant." },
      { jp: "悪いと知りながら、やめられない。", fr: "Even though I know it's wrong, I can't stop." },
    ],
    qs: [
      { t: "fill", q: "残念＿＿＿、今回は参加できません。", fr: "Although it's unfortunate, I can't take part this time.",
        o: ["ながら", "おかげで", "とたんに", "ために"], a: 0,
        e: "〜ながら（も）= concession: \"despite regret\". (残念ながら is frozen.)" },
      { t: "nuance", q: "Dans «歩きながら話す» et «狭いながらも快適だ», le sens de ながら est :",
        o: ["1st = simultaneity of actions; 2nd = concession (\"although\")", "both are concessions", "both are simultaneous", "the 1st is a concession"], a: 0,
        e: "ながら has two values: simultaneity (action verb) and concession (state/quality)." },
    ],
  },

  {
    id: "g021", g: "〜一方（で）", m: "on one side... on the other; on the other hand; meanwhile", f: "V-plain／A／N＋である + 一方（で）",
    c: "contrast", lv: 1, rel: [],
    note: "Puts two aspects in parallel or in contrast. Also: \"while doing X, on the other hand Y\".",
    ex: [
      { jp: "都会は便利な一方で、物価が高い。", fr: "The city is convenient, but life is expensive." },
      { jp: "輸出が伸びる一方、輸入は減った。", fr: "While exports rose, imports fell." },
    ],
    qs: [
      { t: "fill", q: "彼は厳しい＿＿＿、優しいところもある。", fr: "He's stern, but on the other hand he's also kind.",
        o: ["一方で", "ために", "おかげで", "ものだから"], a: 0,
        e: "〜一方で parallels two contrasting facets (severe / kind)." },
      { t: "meaning", q: "「収入が増える一方で、支出も増えた」— sens ?",
        o: ["as revenues rise, so do expenses", "thanks to increased revenues", "because of income", "before the increase in income"], a: 0,
        e: "〜一方で = paralleling/contrasting two developments." },
    ],
  },

  {
    id: "g022", g: "〜とはいえ", m: "that said, although", f: "V-plain／A／N + とはいえ",
    c: "contrast", lv: 2, rel: ["g019", "g023"],
    note: "We admit a fact or a principle, but then qualify it: \"certainly X, but in reality...\". Written/substantiated register.",
    ex: [
      { jp: "春とはいえ、まだ寒い。", fr: "It may be spring, but it's still cold." },
      { jp: "プロとはいえ、ミスもある。", fr: "Even a professional, however, can make mistakes." },
    ],
    qs: [
      { t: "fill", q: "休日＿＿＿、やることが多くて休めない。", fr: "It's a day off, of course, but I've got so much to do that I can't rest.",
        o: ["とはいえ", "おかげで", "につれて", "に際して"], a: 0,
        e: "〜とはいえ = \"we may say that...\", we admit and then qualify." },
      { t: "meaning", q: "「便利になったとはいえ、問題も多い」— sens de とはいえ ?",
        o: ["it's certainly become practical, but there are also problems", "because it's practical", "to make it practical", "as soon as it's convenient"], a: 0,
        e: "〜とはいえ = nuanced concession: we acknowledge a fact and then temper it." },
    ],
  },

  {
    id: "g023", g: "〜にもかかわらず", m: "in spite of", f: "Nom／V-plain／A + にもかかわらず",
    c: "contrast", lv: 2, rel: ["g002", "g022"],
    note: "Strong concession: a result occurs against all expectations related to the previous fact. More formal than のに.",
    ex: [
      { jp: "雨にもかかわらず、試合は行われた。", fr: "Despite the rain, the match went ahead." },
      { jp: "努力したにもかかわらず、失敗した。", fr: "Despite his best efforts, he failed." },
    ],
    qs: [
      { t: "fill", q: "忠告した＿＿＿、彼は計画を強行した。", fr: "Despite my warnings, he pushed ahead with his project.",
        o: ["にもかかわらず", "にかかわらず", "に応じて", "をはじめ"], a: 0,
        e: "〜にもかかわらず = despite (concession). (Not to be confused with にかかわらず = \"whatever\")." },
      { t: "nuance", q: "〜にもかかわらず vs 〜にかかわらず : différence ?",
        o: ["にもかかわらず = malgré (un fait précis) ; にかかわらず = quelle que soit la variation", "identical", "にかかわらず = malgré", "にもかかわらず = peu importe"], a: 0,
        e: "The も of にもかかわらず adds the concessive value \"despite\"." },
    ],
  },

  {
    id: "g024", g: "〜それなのに", m: "and yet, despite this (connector)", f: "Phrase。それなのに、Phrase",
    c: "contrast", lv: 2, rel: ["g017"],
    note: "A connector at the beginning of a sentence expressing surprise or displeasure at an unexpected outcome.",
    ex: [
      { jp: "彼は約束した。それなのに、来なかった。", fr: "He had promised. And yet he didn't come." },
      { jp: "薬を飲んだ。それなのに、治らない。", fr: "I took the medicine. Despite that, I'm not cured." },
    ],
    qs: [
      { t: "fill", q: "たくさん練習した。＿＿＿、本番で失敗した。", fr: "I trained hard. And yet I missed the big day.",
        o: ["それなのに", "そのため", "それで", "つまり"], a: 0,
        e: "〜それなのに = contradiction/deception connector at the head of the sentence." },
      { t: "usage", q: "Quel connecteur exprime une déception après une cause favorable ?",
        o: ["それなのに", "そのため", "したがって", "それゆえ"], a: 0,
        e: "それなのに introduces a result contrary to expectation; the others are causal/logical." },
    ],
  },

  /* ===================== TEMPS & SÉQUENCE — g025 à g032 ===================== */

  {
    id: "g025", g: "〜たびに", m: "whenever", f: "V-dict／N＋の + たびに",
    c: "time", lv: 1, rel: ["g027"],
    note: "\"Every time X occurs, Y occurs\". Emphasizes the regularity of the coincidence.",
    ex: [
      { jp: "この写真を見るたびに、故郷を思い出す。", fr: "Every time I see this photo, I think of my homeland." },
      { jp: "彼は会うたびに文句を言う。", fr: "Every time we see him, he complains." },
    ],
    qs: [
      { t: "fill", q: "旅行に行く＿＿＿、お土産を買ってくる。", fr: "Every time he goes on a trip, he brings back a souvenir.",
        o: ["たびに", "うちに", "とたんに", "次第"], a: 0,
        e: "〜たびに = whenever (regular repetition)." },
      { t: "meaning", q: "「季節が変わるたびに服を買う」— sens ?",
        o: ["every time the season changes, I buy new clothes", "before the season changes", "as soon as the season changes", "as the season changes"], a: 0,
        e: "〜たびに = each occurrence triggers the action." },
    ],
  },

  {
    id: "g026", g: "〜おきに", m: "every... (at intervals of)", f: "Durée／Nombre + おきに",
    c: "time", lv: 2, rel: ["g027"],
    note: "Marks the interval SEPARATING two occurrences. 一日おき = one day apart (= every other day).",
    ex: [
      { jp: "バスは十分おきに来る。", fr: "The bus runs every ten minutes (ten-minute intervals)." },
      { jp: "一日おきにジムに行く。", fr: "I go to the gym every other day." },
    ],
    qs: [
      { t: "fill", q: "この薬は四時間＿＿＿飲んでください。", fr: "Take this medication every four hours.",
        o: ["おきに", "ごとに", "うちに", "たびに"], a: 0,
        e: "〜おきに = at intervals of (space between sockets)." },
      { t: "nuance", q: "「一週間おきに」signifie le plus naturellement :",
        o: ["one week apart (i.e. every other week)", "every week without fail", "less than a week", "more than one month"], a: 0,
        e: "おきに emphasizes the empty interval between two occurrences." },
    ],
  },

  {
    id: "g027", g: "〜ごとに", m: "every, every, every", f: "Durée／Nombre／N + ごとに",
    c: "time", lv: 1, rel: ["g026", "g025"],
    note: "\"For each X\": regularity or distribution. 一年ごと = every year. With a noun: 国ごと = for every country.",
    ex: [
      { jp: "オリンピックは四年ごとに開かれる。", fr: "The Olympic Games are held every four years." },
      { jp: "国ごとに習慣が違う。", fr: "Customs differ from country to country." },
    ],
    qs: [
      { t: "fill", q: "三十分＿＿＿、休憩を取る。", fr: "We take a break every thirty minutes.",
        o: ["ごとに", "に際して", "うちに", "とたんに"], a: 0,
        e: "〜ごとに = at each interval (regularity)." },
      { t: "nuance", q: "「二日ごとに」vs「二日おきに」— quelle paire est correcte ?",
        o: ["ごとに = tous les 2 jours ; おきに = avec 2 jours d'intervalle (= tous les 3 jours)", "they are identical", "おきに = tous les 2 jours", "ごとに implique un intervalle vide"], a: 0,
        e: "ごとに counts the unit itself; おきに counts the interval between two." },
    ],
  },

  {
    id: "g028", g: "〜うちに", m: "while; before (does not change)", f: "V-plain／A-い／A-な＋な／N＋の + うちに",
    c: "time", lv: 1, rel: ["g025"],
    note: "To enjoy a state while it lasts: \"while... (before it changes)\". With a negation: \"before... doesn't\".",
    ex: [
      { jp: "熱いうちに食べてください。", fr: "Eat while it's hot." },
      { jp: "忘れないうちにメモしておく。", fr: "I'll make a note of it before I forget." },
    ],
    qs: [
      { t: "fill", q: "明るい＿＿＿、家に帰ろう。", fr: "Let's go home while it's still light.",
        o: ["うちに", "とたんに", "たびに", "次第"], a: 0,
        e: "〜うちに = while the favorable state lasts (before it changes)." },
      { t: "meaning", q: "「子供が寝ているうちに掃除する」— sens de うちに ?",
        o: ["while the kids are asleep (I take advantage)", "after the children wake up", "whenever the children are asleep", "as soon as the children are asleep"], a: 0,
        e: "〜うちに = we take advantage of the duration of a state." },
    ],
  },

  {
    id: "g029", g: "〜たとたん（に）", m: "at the very moment when (and immediately)", f: "V-た + とたん（に）",
    c: "time", lv: 2, rel: ["g030", "g087"],
    note: "Two almost simultaneous events: as soon as X is completed, Y occurs - often unexpectedly. The principal is in the past tense.",
    ex: [
      { jp: "立ち上がったとたん、めまいがした。", fr: "No sooner had I stood up than I felt dizzy." },
      { jp: "ドアを開けたとたん、猫が飛び出した。", fr: "The moment I opened the door, the cat jumped out." },
    ],
    qs: [
      { t: "fill", q: "家を出た＿＿＿、雨が降り出した。", fr: "No sooner had I stepped outside than it started raining.",
        o: ["とたんに", "うちに", "たびに", "おきに"], a: 0,
        e: "〜たとたん = just after X, Y occurs suddenly (often unexpectedly)." },
      { t: "nuance", q: "〜たとたん vs 〜次第 : différence ?",
        o: ["とたん : Y arrive de façon spontanée/imprévue après X (passé) ; 次第 : on fait Y volontairement dès que X (souvent futur)", "identical", "次第 est familier", "とたん exprime une volonté"], a: 0,
        e: "とたん = automatic/surprise occurrence; 次第 = voluntary \"as soon as\" action." },
    ],
  },

  {
    id: "g030", g: "〜次第", m: "as soon as (and immediately); according to", f: "V-ます stem + 次第 ／ N + 次第（だ／で）",
    c: "time", lv: 2, rel: ["g029"],
    note: "(1) \"As soon as X (is done), I will do Y\" - Y is a voluntary action, often future, not past tense. (2) N + 次第 = \"it depends on N\".",
    ex: [
      { jp: "詳細が分かり次第、連絡します。", fr: "As soon as I have the details, I'll be in touch." },
      { jp: "成功するかどうかは努力次第だ。", fr: "Success depends on effort." },
    ],
    qs: [
      { t: "fill", q: "準備ができ＿＿＿、出発します。", fr: "As soon as the preparations are complete, we'll be off.",
        o: ["次第", "とたんに", "うちに", "たびに"], a: 0,
        e: "V-ます stem + 次第 = as soon as X (voluntary future action next)." },
      { t: "meaning", q: "「結果は君の頑張り次第だ」— sens de 次第 ?",
        o: ["the result depends on your efforts", "the results come as soon as you try", "the result is the opposite of your efforts", "the result is before your efforts"], a: 0,
        e: "N + 次第 = \"it depends on N\"." },
    ],
  },

  {
    id: "g031", g: "〜てからでないと／てからでなければ", m: "not before having, only after", f: "V-て + からでないと／からでなければ",
    c: "time", lv: 3, rel: ["g020"],
    note: "An indispensable prerequisite: until X is done, Y is impossible. The principal is often negative.",
    ex: [
      { jp: "登録してからでないと、利用できません。", fr: "It can only be used after registration." },
      { jp: "確認してからでなければ、返事できない。", fr: "I can't answer without checking first." },
    ],
    qs: [
      { t: "fill", q: "許可をもらって＿＿＿、入ってはいけない。", fr: "You can't get in without permission.",
        o: ["からでないと", "とたんに", "うちに", "たびに"], a: 0,
        e: "〜てからでないと = mandatory precondition before the main action (often negative)." },
      { t: "meaning", q: "「予約してからでないと入れない」— sens ?",
        o: ["you can only enter after making a reservation", "enter as soon as you book", "enter before booking", "we enter every time we book"], a: 0,
        e: "〜てからでないと + negation = impossible until condition is met." },
    ],
  },

  {
    id: "g032", g: "〜際（に）", m: "at the time of, at the time of (formal)", f: "V-dict／V-た／N＋の + 際（に）",
    c: "time", lv: 2, rel: ["g011", "g010"],
    note: "Formal equivalent of とき. For a special occasion. Common in instructions and announcements.",
    ex: [
      { jp: "お降りの際は、足元にご注意ください。", fr: "As you descend, watch your step." },
      { jp: "申し込みの際に、身分証が必要です。", fr: "ID is required for registration." },
    ],
    qs: [
      { t: "fill", q: "ご利用の＿＿＿、注意事項をお読みください。", fr: "Please read the instructions for use.",
        o: ["際に", "うちに", "たびに", "とたんに"], a: 0,
        e: "〜際に = at the time of / at the time of (formal register, ≈ とき)." },
      { t: "nuance", q: "〜際に vs 〜とき : nuance ?",
        o: ["際に est plus formel (consignes, annonces) ; とき est neutre et courant", "identical", "とき est plus formel", "際に est familier"], a: 0,
        e: "際に = sustained register; とき = everyday use." },
    ],
  },

  /* ===================== CONDITION & CAUSE — g033 à g042 ===================== */

  {
    id: "g033", g: "〜おかげで", m: "thanks to (positive cause)", f: "V-plain／A／N＋の + おかげで",
    c: "condition", lv: 1, rel: ["g034"],
    note: "Cause of a HAPPY outcome. Recognition. As opposed to せいで (negative result).",
    ex: [
      { jp: "先生のおかげで合格できた。", fr: "It's thanks to the teacher that I succeeded." },
      { jp: "薬を飲んだおかげで、よく眠れた。", fr: "Thanks to the medication, I slept well." },
    ],
    qs: [
      { t: "fill", q: "あなたの助け＿＿＿、間に合いました。", fr: "Thanks to your help, I got here just in time.",
        o: ["のおかげで", "のせいで", "のために", "のくせに"], a: 0,
        e: "〜おかげで = thanks to (cause of a good result)." },
      { t: "nuance", q: "〜おかげで vs 〜せいで : différence ?",
        o: ["おかげで = cause d'un résultat positif (gratitude) ; せいで = cause d'un résultat négatif (reproche)", "identical", "せいで est positif", "おかげで est négatif"], a: 0,
        e: "おかげで → good result; せいで → bad result." },
    ],
  },

  {
    id: "g034", g: "〜せいで／せいか", m: "because of (negative cause); probably because", f: "V-plain／A／N＋の + せいで／せいか",
    c: "condition", lv: 1, rel: ["g033"],
    note: "Cause of a NEGATIVE result, often with a nuance of reproach. せいか = \"perhaps because of\" (uncertain cause).",
    ex: [
      { jp: "寝不足のせいで、頭が痛い。", fr: "Because of the lack of sleep, I have a headache." },
      { jp: "年のせいか、疲れやすい。", fr: "Maybe because of my age, I tire quickly." },
    ],
    qs: [
      { t: "fill", q: "彼のミス＿＿＿、計画が失敗した。", fr: "Because of his mistake, the plan failed.",
        o: ["のせいで", "のおかげで", "のために", "について"], a: 0,
        e: "〜せいで = cause of a bad result (often blame)." },
      { t: "meaning", q: "「気のせいか、音が聞こえた」— sens de せいか ?",
        o: ["perhaps an impression (cause uncertain)", "thanks to my attention", "because of my mood", "about my mood"], a: 0,
        e: "〜せいか = supposed/uncertain cause (\"perhaps because of\")." },
    ],
  },

  {
    id: "g035", g: "〜ので", m: "because, because (polite, logical)", f: "V-plain／A-い + ので ／ A-な＋な／N＋な + ので",
    c: "condition", lv: 1, rel: [],
    note: "Cause presented as objective and natural, tone more polite and less abrupt than から. Very common in polite requests.",
    ex: [
      { jp: "雨が降っているので、出かけません。", fr: "As it's raining, I'm not going out." },
      { jp: "用事があるので、お先に失礼します。", fr: "As I'm busy, I'll take the liberty of leaving before you do." },
    ],
    qs: [
      { t: "fill", q: "体調が悪い＿＿＿、今日は休みます。", fr: "As I'm not feeling well, I'm resting today.",
        o: ["ので", "のに", "くせに", "ものの"], a: 0,
        e: "〜ので = objective cause, polite tone." },
      { t: "nuance", q: "〜ので vs 〜から : nuance ?",
        o: ["ので = cause présentée comme objective, plus poli ; から = cause plus subjective/assertive", "identical", "から est plus poli", "ので exprime une concession"], a: 0,
        e: "ので softens and objectifies the cause; から can seem more categorical." },
    ],
  },

  {
    id: "g036", g: "〜からには", m: "since, now that, since", f: "V-plain + からには",
    c: "condition", lv: 2, rel: ["g037"],
    note: "Since a fact has been established, we draw a strong consequence/resolution from it (\"so we absolutely must...\").",
    ex: [
      { jp: "約束したからには、必ず守る。", fr: "Since I promised, I'll keep my word without fail." },
      { jp: "やるからには、全力でやる。", fr: "As long as I do it, I do it thoroughly." },
    ],
    qs: [
      { t: "fill", q: "引き受けた＿＿＿、最後まで責任を持つ。", fr: "Since I've accepted, I'll see it through to the end.",
        o: ["からには", "おかげで", "とたんに", "うちに"], a: 0,
        e: "〜からには = since (followed by a strong resolution/sequence)." },
      { t: "meaning", q: "「日本に来たからには、日本語を勉強しよう」— sens ?",
        o: ["now that I've come to Japan, let's study Japanese", "because of my visit to Japan", "before coming to Japan", "as soon as I come to Japan"], a: 0,
        e: "〜からには = from the moment a fact is established, logical resolution." },
    ],
  },

  {
    id: "g037", g: "〜以上（は）", m: "since, given that", f: "V-plain／A／N＋である + 以上（は）",
    c: "condition", lv: 2, rel: ["g036", "g038"],
    note: "Very close to からには: a fact being given, an obligation/conclusion is drawn from it. A little more written register.",
    ex: [
      { jp: "学生である以上、勉強するのは当然だ。", fr: "As long as you're a student, it's normal to study." },
      { jp: "引き受けた以上、最後までやる。", fr: "Since I've accepted, I'm going all the way." },
    ],
    qs: [
      { t: "fill", q: "プロである＿＿＿、結果を出さなければならない。", fr: "Being a professional, you have to produce results.",
        o: ["以上", "おかげで", "とたんに", "うちに"], a: 0,
        e: "〜以上（は）= since (an established fact entails an obligation/conclusion)." },
      { t: "nuance", q: "〜以上は vs 〜からには : nuance ?",
        o: ["sens très proche ; 以上は est un peu plus écrit/logique, からには plus tourné vers la résolution personnelle", "totally opposed", "以上は exprime le temps", "からには exprime une concession"], a: 0,
        e: "Quasi-synonyms; nuances of register and accent (logic vs. resolution)." },
    ],
  },

  {
    id: "g038", g: "〜上は", m: "now that we've reached this point (firm decision)", f: "V-plain + 上は",
    c: "condition", lv: 3, rel: ["g037"],
    note: "Formal/written register. Once a decisive fact has been established, a resolute attitude is adopted. Similar to 以上は but more solemn.",
    ex: [
      { jp: "こうなった上は、やるしかない。", fr: "Now that we've reached that point, we just have to do it." },
      { jp: "辞表を出した上は、後戻りできない。", fr: "Once you've resigned, there's no going back." },
    ],
    qs: [
      { t: "fill", q: "決心した＿＿＿、迷わず進もう。", fr: "Now that I've made up my mind, let's get on with it.",
        o: ["上は", "おきに", "たびに", "うちに"], a: 0,
        e: "〜上は = since we're there (firm decision, sustained register)." },
      { t: "usage", q: "Quelle phrase exprime le mieux une résolution après un fait irréversible ?",
        o: ["引き受けた上は、全力を尽くす", "引き受けたうちに、全力を尽くす", "引き受けたたびに、全力を尽くす", "引き受けたおきに、全力を尽くす"], a: 0,
        e: "〜上は = firm resolution once the fact has been established." },
    ],
  },

  {
    id: "g039", g: "〜さえ〜ば", m: "since, if only", f: "Nom／V-ます stem + さえ + V-ば／A-ければ",
    c: "condition", lv: 2, rel: ["g066"],
    note: "Establishes a single, sufficient condition: \"X is sufficient for Y to exist\". Emphasizes the decisive nature of this single condition.",
    ex: [
      { jp: "お金さえあれば、何でも買える。", fr: "As long as you have money, you can buy anything." },
      { jp: "君さえよければ、それでいい。", fr: "As long as it suits you, that's fine." },
    ],
    qs: [
      { t: "fill", q: "薬を飲み＿＿＿、すぐ治るよ。", fr: "Just take the medicine and you'll be cured in no time.",
        o: ["さえすれば", "ばかりで", "おきに", "たびに"], a: 0,
        e: "〜さえ〜ば = unique and sufficient condition (\"it is enough to\")." },
      { t: "meaning", q: "「天気さえよければ、出かけよう」— sens de さえ〜ば ?",
        o: ["as long as the weather is fine (the only condition)", "even if the weather's fine", "whenever the weather's nice", "because of the good weather"], a: 0,
        e: "〜さえ〜ば puts forward a single sufficient condition." },
    ],
  },

  {
    id: "g040", g: "〜てこそ", m: "it's only by doing that, it's thanks to that that", f: "V-て + こそ",
    c: "condition", lv: 2, rel: ["g069", "g070"],
    note: "Emphasize that a result can only be achieved PROVIDED X is done. Appreciative/sententious tone.",
    ex: [
      { jp: "努力してこそ、成功できる。", fr: "It's only through hard work that you can succeed." },
      { jp: "経験してこそ分かることがある。", fr: "Some things can only be understood by living them." },
    ],
    qs: [
      { t: "fill", q: "助け合っ＿＿＿、本当のチームと言える。", fr: "It's only by helping each other that we can talk about a real team.",
        o: ["てこそ", "たびに", "てから", "ながら"], a: 0,
        e: "〜てこそ = it's only by doing X that Y becomes possible." },
      { t: "meaning", q: "「健康があってこそ、仕事もできる」— sens de てこそ ?",
        o: ["it's only because we're healthy that we can work", "even if you're healthy", "every time you have your health", "before you have your health"], a: 0,
        e: "〜てこそ insists on the essential condition for the result." },
    ],
  },

  {
    id: "g041", g: "〜ためには", m: "for, in order to (goal requiring effort)", f: "V-dict／N＋の + ためには",
    c: "condition", lv: 1, rel: ["g079"],
    note: "Presents an objective and then what needs to be done to achieve it. The subject has voluntary control over the action.",
    ex: [
      { jp: "合格するためには、毎日勉強する必要がある。", fr: "To succeed, you have to study every day." },
      { jp: "健康のためには、運動が大切だ。", fr: "Exercise is important for good health." },
    ],
    qs: [
      { t: "fill", q: "夢を実現する＿＿＿、努力を続けよう。", fr: "To make his dream come true, let's keep striving.",
        o: ["ためには", "おかげで", "とたんに", "うちに"], a: 0,
        e: "〜ためには = in order to (voluntary goal), followed by the necessary means." },
      { t: "nuance", q: "〜ために (but) vs 〜ように (but) : quand emploie-t-on ように ?",
        o: ["ように s'emploie avec des verbes non volontaires/potentiels (見えるように) ; ために avec des verbes volontaires (合格するために)", "identical", "ために concerne les états", "ように exprime une cause"], a: 0,
        e: "Voluntary verb → ために; potential/non-voluntary verb → ように." },
    ],
  },

  {
    id: "g042", g: "〜かわりに", m: "instead of ; in exchange for ; but in return for", f: "V-plain／N＋の + かわりに",
    c: "condition", lv: 1, rel: [],
    note: "Three uses: substitution (\"instead of\"), compensation (\"in exchange\"), counterparty (\"certainly X, but Y\").",
    ex: [
      { jp: "母のかわりに、私が行く。", fr: "I'm going instead of my mother." },
      { jp: "この店は安いかわりに、味は普通だ。", fr: "This restaurant is cheap, but the taste is ordinary." },
    ],
    qs: [
      { t: "fill", q: "外食する＿＿＿、家で料理した。", fr: "Instead of eating out, I cooked at home.",
        o: ["かわりに", "おかげで", "とたんに", "うちに"], a: 0,
        e: "〜かわりに = in place of (substitution)." },
      { t: "meaning", q: "「手伝うかわりに、お昼をおごってね」— sens ?",
        o: ["I'll help you, but in exchange you pay for my lunch", "I help you with lunch", "I'll help you before lunch", "I help you every time at lunch"], a: 0,
        e: "〜かわりに can express the counterparty/exchange." },
    ],
  },

  /* ===================== MODALITÉ & JUGEMENT — g043 à g065 ===================== */

  {
    id: "g043", g: "〜に違いない", m: "it's surely, without a doubt", f: "V-plain／A／N + に違いない",
    c: "modality", lv: 1, rel: ["g044"],
    note: "Strong conviction based on clues. \"It can only be...\". More composed/written than に決まっている.",
    ex: [
      { jp: "電気が消えている。留守に違いない。", fr: "The light's out. He must be absent." },
      { jp: "あの様子では、合格したに違いない。", fr: "From the look on his face, he surely succeeded." },
    ],
    qs: [
      { t: "fill", q: "彼は顔色が悪い。具合が悪い＿＿＿。", fr: "He looks terrible. He must be unwell.",
        o: ["に違いない", "はずがない", "わけがない", "に過ぎない"], a: 0,
        e: "〜に違いない = strong conviction based on indices." },
      { t: "nuance", q: "〜に違いない vs 〜に決まっている : nuance ?",
        o: ["に違いない = conviction raisonnée (posé) ; に決まっている = certitude subjective tranchée (familier)", "identical", "に決まっている est formel", "に違いない exprime un doute"], a: 0,
        e: "に決まっている is more emphatic and oral; に違いない is more measured." },
    ],
  },

  {
    id: "g044", g: "〜に決まっている", m: "it has to be, for sure (clear-cut tone)", f: "V-plain／A／N + に決まっている",
    c: "modality", lv: 1, rel: ["g043"],
    note: "Subjective, categorical certainty, familiar tone. \"Obviously... / necessarily...\".",
    ex: [
      { jp: "こんな簡単な問題、できるに決まっている。", fr: "Such a simple problem, of course I can do it." },
      { jp: "無理に決まっているよ。", fr: "It's impossible, of course." },
    ],
    qs: [
      { t: "fill", q: "あんなに練習したんだから、上手に＿＿＿。", fr: "With all that training, he's bound to be good.",
        o: ["決まっている", "違いない", "過ぎない", "ほかならない"], a: 0,
        e: "〜に決まっている = subjective, clear-cut certainty (colloquial tone)." },
      { t: "meaning", q: "「子供が喜ぶに決まっている」— sens ?",
        o: ["kids are bound to be happy", "children could be happy", "kids won't be happy", "the kids are quite happy"], a: 0,
        e: "〜に決まっている = \"it's certain and certain\" (strong conviction)." },
    ],
  },

  {
    id: "g045", g: "〜はずだ", m: "should be, normally it is", f: "V-plain／A／N＋の + はずだ",
    c: "modality", lv: 1, rel: ["g046"],
    note: "Logical deduction based on objective reason: \"according to all logic, this is how it should be\".",
    ex: [
      { jp: "彼は今日来るはずだ。", fr: "He should come today (logically)." },
      { jp: "この時間なら、店は開いているはずだ。", fr: "By now, the store should be open." },
    ],
    qs: [
      { t: "fill", q: "もう手紙を出したから、明日届く＿＿＿。", fr: "As I've posted the letter, it should arrive tomorrow.",
        o: ["はずだ", "わけがない", "に過ぎない", "ことはない"], a: 0,
        e: "〜はずだ = logical deduction based on a reason." },
      { t: "nuance", q: "〜はずだ vs 〜に違いない : nuance ?",
        o: ["はずだ = attente logique objective ; に違いない = conviction subjective forte", "identical", "はずだ est plus subjectif", "に違いない est une déduction neutre"], a: 0,
        e: "はずだ relies on logic/facts; に違いない on strong conviction." },
    ],
  },

  {
    id: "g046", g: "〜はずがない", m: "it's impossible that, it can't be", f: "V-plain／A／N＋の + はずがない",
    c: "modality", lv: 1, rel: ["g045", "g050"],
    note: "Strong logical negation: \"there is no reason why it should be this way\". Opposite of はずだ.",
    ex: [
      { jp: "彼がそんな嘘をつくはずがない。", fr: "It's impossible for him to lie like that." },
      { jp: "こんな時間に電話が来るはずがない。", fr: "There can be no calls at this time." },
    ],
    qs: [
      { t: "fill", q: "あんな真面目な人が遅刻する＿＿＿。", fr: "It's impossible for someone so serious to be late.",
        o: ["はずがない", "はずだ", "に違いない", "に決まっている"], a: 0,
        e: "〜はずがない = strong logical negation (\"it can't be\")." },
      { t: "nuance", q: "〜はずがない vs 〜わけがない : nuance ?",
        o: ["sens très proche (« impossible ») ; わけがない est souvent plus oral/emphatique", "totally opposed", "はずがない est positif", "わけがない exprime une cause"], a: 0,
        e: "Quasi-synonyms; わけがない is a little more familiar/insistent." },
    ],
  },

  {
    id: "g047", g: "〜べきだ", m: "should, must (moral obligation)", f: "V-dict + べきだ （する→すべき／するべき）",
    c: "modality", lv: 1, rel: ["g048"],
    note: "Moral duty or strong advice: \"this is the right thing to do\". Not for laws/regulations (use なければならない).",
    ex: [
      { jp: "約束は守るべきだ。", fr: "We have to keep our promises." },
      { jp: "もっと早く相談すべきだった。", fr: "I should have consulted sooner." },
    ],
    qs: [
      { t: "fill", q: "間違ったら、すぐ謝る＿＿＿。", fr: "When you make a mistake, you have to apologize right away.",
        o: ["べきだ", "はずがない", "に過ぎない", "わけではない"], a: 0,
        e: "〜べきだ = moral duty / strong advice." },
      { t: "nuance", q: "〜べきだ vs 〜なければならない : nuance ?",
        o: ["べきだ = jugement moral/conseil (« il convient de ») ; なければならない = obligation factuelle/règle", "identical", "べきだ concerne les lois", "なければならない est un conseil"], a: 0,
        e: "べきだ = moral duty; なければならない = concrete necessity/rule." },
    ],
  },

  {
    id: "g048", g: "〜べきではない", m: "should not, must not (moral)", f: "V-dict + べきではない",
    c: "modality", lv: 1, rel: ["g047"],
    note: "Moral prohibition / strong discouragement. Denial of べきだ.",
    ex: [
      { jp: "人の悪口を言うべきではない。", fr: "We shouldn't speak ill of others." },
      { jp: "そんなことで諦めるべきではない。", fr: "You shouldn't give up so easily." },
    ],
    qs: [
      { t: "fill", q: "感情だけで判断する＿＿＿。", fr: "We shouldn't judge on emotion alone.",
        o: ["べきではない", "に違いない", "はずだ", "わけだ"], a: 0,
        e: "〜べきではない = moral advice/prohibition." },
      { t: "meaning", q: "「秘密を漏らすべきではない」— sens ?",
        o: ["the secret should not be divulged", "the secret must be out", "we inevitably divulge the secret", "the secret is out"], a: 0,
        e: "〜べきではない = \"you mustn't (morally)\"." },
    ],
  },

  {
    id: "g049", g: "〜わけだ", m: "so it's only logical that", f: "V-plain／A／N＋な／である + わけだ",
    c: "modality", lv: 1, rel: ["g050", "g051", "g056"],
    note: "Logical conclusion drawn from a cause: \"that explains why... / that's why...\". Also to express that we've just understood.",
    ex: [
      { jp: "彼は十年も日本にいた。道理で日本語が上手なわけだ。", fr: "He lived in Japan for ten years. No wonder he speaks so well." },
      { jp: "三時間も寝ていない。眠いわけだ。", fr: "I haven't slept three hours. Of course I'm sleepy." },
    ],
    qs: [
      { t: "fill", q: "エアコンが壊れている。暑い＿＿＿だ。", fr: "The air conditioning is broken. That's why it's so hot.",
        o: ["わけ", "はず", "つもり", "もの"], a: 0,
        e: "〜わけだ = logical conclusion \"that's why / necessarily\"." },
      { t: "meaning", q: "「フランスに住んでいたのか。フランス語が話せるわけだ」— sens de わけだ ?",
        o: ["That explains why he can speak French", "he doesn't know French", "he should speak French", "he wants to speak French"], a: 0,
        e: "〜わけだ connects a learned cause with an understood consequence." },
    ],
  },

  {
    id: "g050", g: "〜わけがない", m: "it's impossible that, it can't be", f: "V-plain／A／N＋な／である + わけがない",
    c: "modality", lv: 2, rel: ["g049", "g046"],
    note: "Strongly denies a possibility: \"there's no reason for it to be true\". Tone often oral and emphatic.",
    ex: [
      { jp: "あんなに練習して、負けるわけがない。", fr: "With this kind of training, he can't lose." },
      { jp: "彼が知らないわけがない。", fr: "He can't not know." },
    ],
    qs: [
      { t: "fill", q: "そんなうまい話が本当である＿＿＿。", fr: "A story this beautiful can't be true.",
        o: ["わけがない", "わけだ", "わけではない", "はずだ"], a: 0,
        e: "〜わけがない = strong impossibility (\"it can't be\")." },
      { t: "nuance", q: "〜わけがない vs 〜わけではない : différence ?",
        o: ["わけがない = totalement impossible ; わけではない = pas nécessairement / ce n'est pas que", "identical", "わけがない = partiellement vrai", "わけではない = totalement impossible"], a: 0,
        e: "わけがない denies en bloc; わけではない partially denies." },
    ],
  },

  {
    id: "g051", g: "〜わけではない", m: "it's not that, not necessarily", f: "V-plain／A／N＋という + わけではない",
    c: "modality", lv: 2, rel: ["g049", "g050"],
    note: "Partial negation: correcting a hasty conclusion. \"It is not (entirely) the case that...\".",
    ex: [
      { jp: "嫌いなわけではないが、あまり食べない。", fr: "It's not that I don't like it, but I don't eat much of it." },
      { jp: "全部分かったわけではない。", fr: "But that doesn't mean I understood everything." },
    ],
    qs: [
      { t: "fill", q: "お金がない＿＿＿が、無駄遣いはしたくない。", fr: "It's not that I don't have money, but I don't want to waste it.",
        o: ["わけではない", "わけがない", "に違いない", "はずだ"], a: 0,
        e: "〜わけではない = partial/nuanced negation (\"it's not that...\")." },
      { t: "meaning", q: "「日本語が話せないわけではない」— sens ?",
        o: ["it's not that I can't speak Japanese (I know a little)", "I can't speak at all", "I need to speak Japanese", "I necessarily speak Japanese"], a: 0,
        e: "〜わけではない attenuates: the negation is not total." },
    ],
  },

  {
    id: "g052", g: "〜わけにはいかない", m: "can't afford to (morally/socially)", f: "V-dict + わけにはいかない ／ V-ない + わけにはいかない",
    c: "modality", lv: 2, rel: ["g049"],
    note: "Not physical, but moral/social impossibility: we can't do X because of circumstances, a duty. In the negative form: \"we can't not...\" (= we must).",
    ex: [
      { jp: "大事な会議だから、休むわけにはいかない。", fr: "This is an important meeting, and I can't afford to be absent." },
      { jp: "約束したから、行かないわけにはいかない。", fr: "I promised, I can't not go." },
    ],
    qs: [
      { t: "fill", q: "みんなが待っているので、今やめる＿＿＿。", fr: "Everyone's waiting, I can't afford to stop now.",
        o: ["わけにはいかない", "わけがない", "はずがない", "に過ぎない"], a: 0,
        e: "〜わけにはいかない = moral/social impossibility of doing X." },
      { t: "meaning", q: "「秘密を話さないわけにはいかなかった」— sens ?",
        o: ["I had no choice but to reveal the secret", "I never revealed the secret", "I could easily keep my mouth shut", "I had to keep it quiet"], a: 0,
        e: "V-ない + わけにはいかない = we can't refrain from doing (= obligation)." },
    ],
  },

  {
    id: "g053", g: "〜ものだ", m: "it's the norm / we're supposed to; in the old days (nostalgia)", f: "V-dict／V-た／A + ものだ",
    c: "modality", lv: 1, rel: ["g054"],
    note: "General truth / social norm (\"that's the way it's done\"). With V-た : recurring nostalgic memory.",
    ex: [
      { jp: "年を取ると、忘れっぽくなるものだ。", fr: "As we get older, we become distracted - it's the natural order of things." },
      { jp: "子供の頃はよく川で遊んだものだ。", fr: "As a child, I often played by the river (nostalgia)." },
    ],
    qs: [
      { t: "fill", q: "誰でも失敗はする＿＿＿。気にするな。", fr: "Everyone makes mistakes, it's normal. Don't worry about it.",
        o: ["ものだ", "はずがない", "に過ぎない", "わけがない"], a: 0,
        e: "〜ものだ = general truth / standard." },
      { t: "meaning", q: "「昔はよく映画を見たものだ」— sens de ものだ ?",
        o: ["nostalgic evocation of a past habit", "present obligation", "impossible", "assumption"], a: 0,
        e: "V-た + ものだ = nostalgic memory of repeated actions." },
    ],
  },

  {
    id: "g054", g: "〜ものだから", m: "it's because (excuse, justification)", f: "V-plain／A／N＋な + ものだから",
    c: "modality", lv: 2, rel: ["g053"],
    note: "Gives a reason/excuse, insisting on involuntariness or inevitability. Often to justify oneself.",
    ex: [
      { jp: "道が込んでいたものだから、遅れました。", fr: "It's because the road was blocked that I'm late." },
      { jp: "あまりに眠かったものだから、寝てしまった。", fr: "I was so sleepy that I fell asleep." },
    ],
    qs: [
      { t: "fill", q: "急いでいた＿＿＿、つい忘れてしまった。", fr: "As I was in a hurry, I ended up forgetting.",
        o: ["ものだから", "わけがない", "べきだ", "とはいえ"], a: 0,
        e: "〜ものだから = justification insisting on a reason suffered." },
      { t: "nuance", q: "〜ものだから vs 〜から : nuance ?",
        o: ["ものだから insiste sur une excuse/raison involontaire et forte ; から est neutre", "identical", "から est une excuse", "ものだから exprime un but"], a: 0,
        e: "ものだから = supported justification tone; から = simple cause." },
    ],
  },

  {
    id: "g055", g: "〜かのようだ／かのように", m: "as if", f: "V-plain／A／N＋である + かのようだ",
    c: "modality", lv: 2, rel: ["g037"],
    note: "Comparison with an unreal/fictional situation: \"as if (when it's not)\".",
    ex: [
      { jp: "彼はまるで何も知らないかのように振る舞った。", fr: "He behaved as if he knew nothing." },
      { jp: "夢を見ているかのようだった。", fr: "It was as if I were dreaming." },
    ],
    qs: [
      { t: "fill", q: "彼女はまるで女王＿＿＿振る舞う。", fr: "She behaves as if she were a queen.",
        o: ["であるかのように", "に違いなく", "に過ぎず", "どころか"], a: 0,
        e: "〜かのように = as if (comparison with a fictitious situation)." },
      { t: "meaning", q: "「まるで時間が止まったかのようだった」— sens ?",
        o: ["it was as if time had stopped (unreal)", "time really has stood still", "time should stand still", "time stops every time"], a: 0,
        e: "〜かのようだ = analogy with a situation contrary to reality." },
    ],
  },

  {
    id: "g056", g: "〜というわけだ", m: "is that, in short, this is why", f: "Phrase + というわけだ",
    c: "modality", lv: 2, rel: ["g049"],
    note: "Concludes a line of reasoning by rephrasing: \"that means that... / that's why...\".",
    ex: [
      { jp: "つまり、彼は嘘をついていたというわけだ。", fr: "In other words, he was lying." },
      { jp: "道が混んでいて、遅れたというわけだ。", fr: "Anyway, the road was clogged, which is why I'm late." },
    ],
    qs: [
      { t: "fill", q: "全員が反対した。つまり計画は中止という＿＿＿。", fr: "Everyone was against it. In short, the project was cancelled.",
        o: ["わけだ", "はずがない", "つもりだ", "ものだ"], a: 0,
        e: "〜というわけだ = reformulated conclusion of a reasoning." },
      { t: "usage", q: "Quelle expression conclut un raisonnement en reformulant ?",
        o: ["というわけだ", "に過ぎない", "に違いない", "どころか"], a: 0,
        e: "〜というわけだ is used to logically summarize/conclude." },
    ],
  },

  {
    id: "g057", g: "〜に過ぎない", m: "only, is nothing more than, only", f: "Nom／V-dict + に過ぎない",
    c: "modality", lv: 2, rel: ["g058"],
    note: "Minimizes: \"it's nothing more than... / just...\". Emphasizes the limited, unimportant character.",
    ex: [
      { jp: "それは噂に過ぎない。", fr: "It's just a rumor." },
      { jp: "私は意見を述べたに過ぎない。", fr: "All I did was give my opinion." },
    ],
    qs: [
      { t: "fill", q: "今の成功は始まり＿＿＿。油断は禁物だ。", fr: "Today's success is just the beginning. No slacking off.",
        o: ["に過ぎない", "に違いない", "に決まっている", "に反する"], a: 0,
        e: "〜に過ぎない = it's nothing more than (minimization)." },
      { t: "meaning", q: "「彼は一社員に過ぎない」— sens ?",
        o: ["he's just an employee (nothing more)", "he's probably an employee", "it should be used", "it is not used"], a: 0,
        e: "〜に過ぎない reduced to \"only, nothing more\"." },
    ],
  },

  {
    id: "g058", g: "〜に他ならない", m: "is nothing other than, it's precisely", f: "Nom + に他ならない",
    c: "modality", lv: 3, rel: ["g057"],
    note: "Asserts an exclusive and categorical identification: \"it's exactly that and nothing else\". Sustained register.",
    ex: [
      { jp: "成功は努力の結果に他ならない。", fr: "Success is nothing more than the fruit of effort." },
      { jp: "それは愛情の表れに他ならない。", fr: "It's nothing more than a token of affection." },
    ],
    qs: [
      { t: "fill", q: "この勝利はチーム全員の努力の成果＿＿＿。", fr: "This victory is nothing more than the fruit of the efforts of the whole team.",
        o: ["に他ならない", "に過ぎない", "に違いない", "に反する"], a: 0,
        e: "〜に他ならない = exclusive, strong identification (\"that's precisely it\")." },
      { t: "nuance", q: "〜に他ならない vs 〜に過ぎない : nuance ?",
        o: ["に他ならない met en valeur (« c'est précisément X ») ; に過ぎない minimise (« ce n'est que X »)", "identical", "に他ならない minimise", "に過ぎない valorise"], a: 0,
        e: "Opposite meanings in intensity: valorization vs. minimization." },
    ],
  },

  {
    id: "g059", g: "〜てたまらない", m: "so much that it's unbearable (sensation/emotion)", f: "V-て／A-くて + たまらない",
    c: "modality", lv: 1, rel: ["g060", "g061"],
    note: "Expresses a sensation or desire so strong that it cannot be borne. Spontaneous, intense feeling.",
    ex: [
      { jp: "暑くてたまらない。", fr: "It's unbearably hot." },
      { jp: "彼女に会いたくてたまらない。", fr: "I want to see her so badly I can't stand it." },
    ],
    qs: [
      { t: "fill", q: "新しいゲームがやりたく＿＿＿。", fr: "I want to play the new game so badly that I can't stand it.",
        o: ["てたまらない", "ものだ", "に過ぎない", "わけがない"], a: 0,
        e: "〜てたまらない = intense \"unbearable\" sensation/desire." },
      { t: "nuance", q: "〜てたまらない vs 〜てしょうがない : nuance ?",
        o: ["sens très proche ; しょうがない est plus familier/oral", "totally opposed", "たまらない est familier", "しょうがない exprime une obligation"], a: 0,
        e: "Quasi-synonyms; てしょうがない is more relaxed." },
    ],
  },

  {
    id: "g060", g: "〜てしょうがない／てしようがない", m: "so much that it's unbearable (colloquial)", f: "V-て／A-くて + しょうがない",
    c: "modality", lv: 1, rel: ["g059"],
    note: "Oral and common variant of てたまらない. \"It's as good as it gets\".",
    ex: [
      { jp: "退屈でしょうがない。", fr: "I'm bored out of my mind." },
      { jp: "気になってしょうがない。", fr: "It preoccupies me to the point where I can't think of anything else." },
    ],
    qs: [
      { t: "fill", q: "足が痛く＿＿＿、もう歩けない。", fr: "My foot hurts so much I can't walk.",
        o: ["てしょうがない", "に違いない", "わけだ", "ものの"], a: 0,
        e: "〜てしょうがない = intense sensation, colloquial register." },
      { t: "meaning", q: "「眠くてしょうがない」— sens ?",
        o: ["I can't stop sleeping", "I should sleep", "I never sleep", "I sleep every time"], a: 0,
        e: "〜てしょうがない = state/sensation no longer under control." },
    ],
  },

  {
    id: "g061", g: "〜てならない", m: "so much so that, at the highest point (natural, inevitable)", f: "V-て／A-くて + ならない",
    c: "modality", lv: 2, rel: ["g059"],
    note: "Like てたまらない but more written; often with spontaneous feelings (心配, 残念, 気になる).",
    ex: [
      { jp: "試験の結果が心配でならない。", fr: "I'm terribly worried about the outcome of the exam." },
      { jp: "彼の将来が案じられてならない。", fr: "I can't help worrying about his future." },
    ],
    qs: [
      { t: "fill", q: "故郷のことが思い出され＿＿＿。", fr: "I can't stop thinking about my homeland.",
        o: ["てならない", "に過ぎない", "わけがない", "ものだから"], a: 0,
        e: "〜てならない = intense spontaneous feeling (sustained register)." },
      { t: "nuance", q: "〜てならない s'emploie surtout avec :",
        o: ["des sentiments/sensations spontanés (心配だ、気になる…)", "orders", "bans", "weather forecasts"], a: 0,
        e: "てならない focuses on involuntary emotions." },
    ],
  },

  {
    id: "g062", g: "〜ことなく", m: "without doing, without ever", f: "V-dict + ことなく",
    c: "modality", lv: 3, rel: [],
    note: "Register written for \"without (ever) doing X\": sustained equivalent of 〜ないで.",
    ex: [
      { jp: "彼は休むことなく働き続けた。", fr: "He kept on working and never rested." },
      { jp: "最後まで諦めることなく戦った。", fr: "He fought without giving up until the end." },
    ],
    qs: [
      { t: "fill", q: "立ち止まる＿＿＿、前へ進んだ。", fr: "He moved forward without stopping.",
        o: ["ことなく", "ながらも", "わけで", "おかげで"], a: 0,
        e: "〜ことなく = without doing X (written register, ≈ ないで)." },
      { t: "nuance", q: "〜ことなく vs 〜ないで : nuance ?",
        o: ["même sens ; ことなく est plus formel/écrit", "opposite", "ないで est plus formel", "ことなく exprime une cause"], a: 0,
        e: "ことなく = supported variant of ないで." },
    ],
  },

  {
    id: "g063", g: "〜ことから", m: "by the fact that this is where", f: "V-plain／A／N＋である + ことから",
    c: "modality", lv: 3, rel: ["g049"],
    note: "Indicates the fact/clue from which a judgment, name or conclusion is derived. Often used to explain the origin of a name or nickname.",
    ex: [
      { jp: "煙が出ていることから、火事だと分かった。", fr: "Smoke was pouring out, and we knew there was a fire." },
      { jp: "富士山に似ていることから、「○○富士」と呼ばれる。", fr: "Because it resembles Mount Fuji, it's called \"the Fuji of ○○\"." },
    ],
    qs: [
      { t: "fill", q: "足跡が残っている＿＿＿、誰かが来たと分かる。", fr: "From the footprints, it's clear that someone has been there.",
        o: ["ことから", "ものだから", "とはいえ", "うちに"], a: 0,
        e: "〜ことから = from this clue/fact, we draw a conclusion." },
      { t: "meaning", q: "「赤いことから『赤橋』と名付けられた」— sens de ことから ?",
        o: ["the name \"pont rouge\" (red bridge) comes from its red color", "despite its red color", "about red", "before being red"], a: 0,
        e: "〜ことから explains the origin of a name/judgment from a fact." },
    ],
  },

  {
    id: "g064", g: "〜ことになっている", m: "it is planned / agreed / the rule is that", f: "V-dict／V-ない + ことになっている",
    c: "modality", lv: 1, rel: [],
    note: "Indicates an established rule, usage or arrangement that is binding. \"C'est ainsi qu'il est prévu/convenvenu\".",
    ex: [
      { jp: "会議は十時に始まることになっている。", fr: "The meeting is scheduled to start at ten." },
      { jp: "ここでは靴を脱ぐことになっている。", fr: "Here, the rule is to take off your shoes." },
    ],
    qs: [
      { t: "fill", q: "校内では携帯を使わない＿＿＿。", fr: "In the school, it is agreed not to use the telephone.",
        o: ["ことになっている", "ことはない", "ものだ", "に過ぎない"], a: 0,
        e: "〜ことになっている = established rule/arrangement that is binding." },
      { t: "nuance", q: "〜ことになっている vs 〜ことにしている : différence ?",
        o: ["ことになっている = règle externe/convenue ; ことにしている = règle qu'on s'impose à soi-même", "identical", "ことにしている = règle externe", "ことになっている = habitude personnelle"], a: 0,
        e: "なっている: externally decided/established. している: personal decision/habit." },
    ],
  },

  {
    id: "g065", g: "〜ことはない", m: "no need to, no need to", f: "V-dict + ことはない",
    c: "modality", lv: 2, rel: ["g064"],
    note: "Reassures or advises: \"it's not necessary to do X\". Often to calm a concern.",
    ex: [
      { jp: "そんなに心配することはない。", fr: "There's no need to worry so much." },
      { jp: "わざわざ来ることはないよ。", fr: "You don't have to go out of your way." },
    ],
    qs: [
      { t: "fill", q: "まだ時間があるから、急ぐ＿＿＿。", fr: "There's still time, there's no need to rush.",
        o: ["ことはない", "ことになっている", "に違いない", "べきだ"], a: 0,
        e: "〜ことはない = there's no need to (reassuring advice)." },
      { t: "meaning", q: "「君が謝ることはない」— sens ?",
        o: ["it's not your place to apologize / there's no need for you to apologize", "you absolutely must apologize", "you're always apologizing", "you apologized"], a: 0,
        e: "〜ことはない = uselessness/absence of necessity." },
    ],
  },

  /* ===================== EXPRESSIONS & EMPHASE — g066 à g090 ===================== */

  {
    id: "g066", g: "〜さえ", m: "even if only (emphasis)", f: "N（＋助詞）+ さえ ／ V-ます stem + さえ",
    c: "express", lv: 2, rel: ["g067", "g039"],
    note: "Cites an extreme example for emphasis (\"even X is saying\"). Also in the さえ〜ば structure (single condition).",
    ex: [
      { jp: "専門家でさえ間違えることがある。", fr: "Even the experts can be wrong." },
      { jp: "水さえあれば、しばらく生きられる。", fr: "As long as we have water, we can survive for a while." },
    ],
    qs: [
      { t: "fill", q: "忙しくて、食事をする時間＿＿＿ない。", fr: "I'm so busy I don't even have time to eat.",
        o: ["さえ", "こそ", "ばかり", "ながら"], a: 0,
        e: "〜さえ cites an extreme case to emphasize (\"not even time to eat\")." },
      { t: "nuance", q: "〜さえ vs 〜すら : nuance ?",
        o: ["sens proche (« même ») ; すら est plus écrit/littéraire et plus emphatique", "opposite", "すら est familier", "さえ est uniquement conditionnel"], a: 0,
        e: "さえ and すら = \"same\"; すら is more sustained." },
    ],
  },

  {
    id: "g067", g: "〜すら", m: "even (even stronger than さえ)", f: "N（＋助詞）+ すら",
    c: "express", lv: 3, rel: ["g066"],
    note: "Literary and emphatic variant of さえ. Cites an extreme case: \"even... (let alone the rest)\".",
    ex: [
      { jp: "彼は自分の名前すら書けなかった。", fr: "He couldn't even write his own name." },
      { jp: "そんなことは子供ですら知っている。", fr: "Even a child knows that." },
    ],
    qs: [
      { t: "fill", q: "疲れすぎて、立つことすら＿＿＿。", fr: "So exhausted he couldn't even stand up.",
        o: ["できなかった", "できた", "したかった", "するつもりだ"], a: 0,
        e: "〜すら cites an extreme minimum; the predicate is often negative (\"not even\")." },
      { t: "meaning", q: "「挨拶すらしない」— sens de すら ?",
        o: ["he doesn't even say hello (the bare minimum)", "he only says hello", "he always says hello", "he should salute"], a: 0,
        e: "〜すら points out that we don't even reach the expected minimum." },
    ],
  },

  {
    id: "g068", g: "〜だって", m: "even; it seems that (colloquial)", f: "N + だって",
    c: "express", lv: 2, rel: ["g066"],
    note: "Familiar. (1) \"same X\" (as でも); (2) \"il paraît que / on dit que\" (oral hearsay).",
    ex: [
      { jp: "子供だってそのくらい分かる。", fr: "Even a child understands that." },
      { jp: "彼、来月結婚するんだって。", fr: "I hear he's getting married next month." },
    ],
    qs: [
      { t: "fill", q: "私＿＿＿、たまには休みたい。", fr: "Even I'd like a rest now and then.",
        o: ["だって", "こそ", "さえば", "ながら"], a: 0,
        e: "〜だって (colloquial) = \"same\" (≈ でも)." },
      { t: "meaning", q: "「明日は雨だって」— sens de だって ?",
        o: ["it's supposed to rain tomorrow (hearsay)", "even tomorrow it rains", "tomorrow is sure to rain", "about tomorrow"], a: 0,
        e: "〜だって at end of sentence = colloquial hearsay (\"il paraît que\")." },
    ],
  },

  {
    id: "g069", g: "〜からこそ", m: "is precisely because, precisely because", f: "V-plain／A／N＋だ + からこそ",
    c: "express", lv: 2, rel: ["g070", "g040"],
    note: "Emphasizes the true and exclusive reason: \"it is precisely because of this (and nothing else) that...\".",
    ex: [
      { jp: "君のことを思うからこそ、厳しく言うのだ。", fr: "It's precisely because I care about you that I'm strict." },
      { jp: "努力したからこそ、成功した。", fr: "It's precisely because he made the effort that he succeeded." },
    ],
    qs: [
      { t: "fill", q: "難しい＿＿＿、挑戦する価値がある。", fr: "It's precisely because it's difficult that it's worth the challenge.",
        o: ["からこそ", "からには", "ものだから", "とはいえ"], a: 0,
        e: "〜からこそ = it's precisely for that reason (reason underlined)." },
      { t: "nuance", q: "〜からこそ vs 〜から : nuance ?",
        o: ["からこそ insiste fortement sur la raison exclusive ; から est neutre", "identical", "から est emphatique", "からこそ exprime une concession"], a: 0,
        e: "こそ adds the emphasis \"it's precisely because\"." },
    ],
  },

  {
    id: "g070", g: "〜こそ", m: "it is X that (reinforcement)", f: "N／Particule + こそ",
    c: "express", lv: 2, rel: ["g069"],
    note: "Emphasizes the preceding element: \"it's X (and not someone else)\". 今度こそ = this time for good.",
    ex: [
      { jp: "今度こそ成功させたい。", fr: "This time, I really want to succeed." },
      { jp: "こちらこそ、よろしくお願いします。", fr: "It's my turn to thank you for your kindness." },
    ],
    qs: [
      { t: "fill", q: "今＿＿＿、本気を出すときだ。", fr: "The time to give it your all is now, not any other time.",
        o: ["こそ", "さえ", "ばかり", "ながら"], a: 0,
        e: "〜こそ highlights (\"it's now that...\")." },
      { t: "meaning", q: "「来年こそ合格する」— sens de こそ ?",
        o: ["it's next year (this time for good) that I'll succeed.", "even next year", "only next year", "about next year"], a: 0,
        e: "〜こそ emphasizes the chosen element (\"this time, really\")." },
    ],
  },

  {
    id: "g071", g: "〜どころか", m: "far from, on the contrary, and even", f: "V-plain／A／N + どころか",
    c: "express", lv: 2, rel: [],
    note: "Strongly contradicts an expectation: \"not only not X, but even the opposite\". Often surprise/intensification.",
    ex: [
      { jp: "彼は謝るどころか、怒り出した。", fr: "Instead of apologizing, he got angry." },
      { jp: "一万円どころか、千円もない。", fr: "Far from having ten thousand yen, I don't even have a thousand yen." },
    ],
    qs: [
      { t: "fill", q: "病気は治る＿＿＿、悪化してしまった。", fr: "Far from curing, the disease has worsened.",
        o: ["どころか", "からこそ", "とはいえ", "ものの"], a: 0,
        e: "〜どころか = quite the opposite (reverses expectation)." },
      { t: "meaning", q: "「休むどころか、もっと忙しくなった」— sens ?",
        o: ["far from resting, I became even busier", "thanks to rest, I'm busy", "I rest and then I get busy", "I rest as before"], a: 0,
        e: "〜どころか intensifies by contradicting expectation." },
    ],
  },

  {
    id: "g072", g: "〜ばかり", m: "do only, only (excess)", f: "V-て + ばかり ／ N + ばかり",
    c: "express", lv: 1, rel: ["g073"],
    note: "Indicates excessive repetition/exclusivity, often with a critical nuance: \"only do...\".",
    ex: [
      { jp: "彼は遊んでばかりいる。", fr: "He's just having fun." },
      { jp: "文句ばかり言わないで。", fr: "Stop complaining." },
    ],
    qs: [
      { t: "fill", q: "ゲームをして＿＿＿で、勉強しない。", fr: "He just plays and doesn't study.",
        o: ["ばかり", "こそ", "さえ", "ながら"], a: 0,
        e: "〜てばかり = do only (excess, often critical)." },
      { t: "meaning", q: "「泣いてばかりいる」— sens ?",
        o: ["do nothing but cry (excess)", "cry just once", "cry after all", "never cry"], a: 0,
        e: "〜ばかり = exclusivity/excess." },
    ],
  },

  {
    id: "g073", g: "〜ばかりか", m: "not only... but also", f: "V-plain／A／N + ばかりか",
    c: "express", lv: 2, rel: ["g072", "g074"],
    note: "Add an even more striking element: \"not only X, but also Y (which surprises)\".",
    ex: [
      { jp: "彼は英語ばかりか、中国語も話せる。", fr: "Not only does he speak English, he also speaks Chinese." },
      { jp: "雨ばかりか、風まで強くなった。", fr: "Not only is it raining, but the wind has picked up." },
    ],
    qs: [
      { t: "fill", q: "彼女は歌がうまい＿＿＿、ダンスも得意だ。", fr: "Not only does she sing well, she also dances very well.",
        o: ["ばかりか", "どころか", "からこそ", "とはいえ"], a: 0,
        e: "〜ばかりか = not only... but in addition (striking addition)." },
      { t: "nuance", q: "〜ばかりか vs 〜どころか : nuance ?",
        o: ["ばかりか = ajout dans le même sens (« en plus ») ; どころか = renversement (« au contraire »)", "identical", "ばかりか renverse l'attente", "どころか ajoute"], a: 0,
        e: "ばかりか adds up; どころか contradicts." },
    ],
  },

  {
    id: "g074", g: "〜だけでなく", m: "not only... but also", f: "V-plain／A／N + だけでなく（〜も）",
    c: "express", lv: 1, rel: ["g073", "g001"],
    note: "Common additive structure: \"not only X, but also Y\". Often followed by も.",
    ex: [
      { jp: "この本は子供だけでなく、大人にも人気だ。", fr: "This book is popular not only with children, but also with adults." },
      { jp: "彼は頭がいいだけでなく、性格もいい。", fr: "Not only is he smart, he's also good-natured." },
    ],
    qs: [
      { t: "fill", q: "彼は日本語＿＿＿、英語も話せる。", fr: "He speaks not only Japanese, but also English.",
        o: ["だけでなく", "どころか", "に過ぎず", "ものの"], a: 0,
        e: "〜だけでなく（〜も）= not only... but also." },
      { t: "usage", q: "Quel mot suit souvent 〜だけでなく ?",
        o: ["も (« aussi »)", "を", "が", "へ"], a: 0,
        e: "〜だけでなく...も = typical additive structure." },
    ],
  },

  {
    id: "g075", g: "〜のみならず", m: "not only... (formal register)", f: "V-plain／N + のみならず",
    c: "express", lv: 3, rel: ["g074"],
    note: "Written/subtended equivalent of だけでなく. \"Not only X, but also Y\".",
    ex: [
      { jp: "国内のみならず、海外でも評価された。", fr: "It has been recognized not only at home, but also abroad." },
      { jp: "本人のみならず、家族も苦しんだ。", fr: "Not only the person concerned, but also his family suffered." },
    ],
    qs: [
      { t: "fill", q: "この問題は日本＿＿＿、世界全体に関わる。", fr: "This problem concerns not only Japan, but the whole world.",
        o: ["のみならず", "どころか", "ばかり", "に過ぎず"], a: 0,
        e: "〜のみならず = not only... (formal register, ≈ だけでなく)." },
      { t: "nuance", q: "〜のみならず vs 〜だけでなく : nuance ?",
        o: ["même sens ; のみならず est plus écrit/formel", "opposite", "だけでなく est plus formel", "のみならず renverse l'attente"], a: 0,
        e: "のみならず = supported register of だけでなく." },
    ],
  },

  {
    id: "g076", g: "〜とともに", m: "with; at the same time as; as you go along", f: "Nom／V-dict + とともに",
    c: "express", lv: 2, rel: ["g014", "g077"],
    note: "(1) \"together with\"; (2) simultaneity/parallel evolution (\"as\"). Written register.",
    ex: [
      { jp: "家族とともに新年を迎えた。", fr: "I welcomed the New Year with my family." },
      { jp: "年を取るとともに、記憶力が衰える。", fr: "As we age, our memory declines." },
    ],
    qs: [
      { t: "fill", q: "経済の発展＿＿＿、環境問題も深刻になった。", fr: "With economic development, environmental problems have worsened.",
        o: ["とともに", "に反して", "を問わず", "に際して"], a: 0,
        e: "〜とともに = parallel evolution (\"as / at the same time as\")." },
      { t: "meaning", q: "「仲間とともに戦う」— sens de とともに ?",
        o: ["fight with comrades (together)", "fight against your comrades", "fighting about comrades", "fighting after comrades"], a: 0,
        e: "〜とともに (job 1) = \"together with\"." },
    ],
  },

  {
    id: "g077", g: "〜につれて／につれ", m: "as it progresses", f: "Nom／V-dict + につれて",
    c: "express", lv: 2, rel: ["g078", "g014"],
    note: "Two changes progress continuously in parallel: \"the more X advances, the more Y changes\". Not for one-off events.",
    ex: [
      { jp: "時間がたつにつれて、痛みが和らいだ。", fr: "As time passed, the pain eased." },
      { jp: "上に行くにつれて、景色がよくなる。", fr: "The higher you go, the more beautiful the scenery." },
    ],
    qs: [
      { t: "fill", q: "練習を重ねる＿＿＿、上手になっていった。", fr: "As he accumulated training sessions, he progressed.",
        o: ["につれて", "とたんに", "うちに", "次第"], a: 0,
        e: "〜につれて = parallel continuous progression." },
      { t: "nuance", q: "〜につれて s'emploie-t-il avec un changement ponctuel ?",
        o: ["no: it requires gradual, continuous variation", "yes, especially punctual", "oui, comme とたんに", "only in the past tense"], a: 0,
        e: "につれて = continuous progression, not a sudden single event." },
    ],
  },

  {
    id: "g078", g: "〜にしたがって／にしたがい", m: "as; following", f: "Nom／V-dict + にしたがって",
    c: "express", lv: 2, rel: ["g077", "g015"],
    note: "Parallel progression (like につれて) with the added nuance of \"en suivant/conformément\". Slightly more formal register.",
    ex: [
      { jp: "経済が発展するにしたがって、生活が変わった。", fr: "As the economy developed, life changed." },
      { jp: "南へ行くにしたがって、暖かくなる。", fr: "As we head south, it gets hotter." },
    ],
    qs: [
      { t: "fill", q: "年齢が上がる＿＿＿、責任も重くなる。", fr: "As age increases, so do responsibilities.",
        o: ["にしたがって", "に反して", "をはじめ", "に際して"], a: 0,
        e: "〜にしたがって = parallel progression (sustained register)." },
      { t: "nuance", q: "〜にしたがって et 〜につれて sont :",
        o: ["très proches (progression parallèle) ; にしたがって est un peu plus formel et garde l'idée de « suivre »", "opposite", "につれて est formel", "にしたがって est ponctuel"], a: 0,
        e: "Quasi-synonyms for progression; にしたがって is more sustained." },
    ],
  },

  {
    id: "g079", g: "〜ように", m: "so that, so that (goal/wish)", f: "V-dict／V-ない／V-potentiel + ように",
    c: "express", lv: 1, rel: ["g041"],
    note: "Purpose with a non-voluntary or potential verb (\"to be able to / not to\"). Also for wishes and prayers.",
    ex: [
      { jp: "後ろの人にも聞こえるように、大きな声で話す。", fr: "So that those at the back can also hear, I speak loudly." },
      { jp: "風邪をひかないように、気をつけてね。", fr: "Be careful not to catch a cold." },
    ],
    qs: [
      { t: "fill", q: "忘れない＿＿＿、メモしておこう。", fr: "So we don't forget, let's take a note.",
        o: ["ように", "ために", "からこそ", "とともに"], a: 0,
        e: "〜ように = goal with non-voluntary/negative verb (\"so as not to forget\")." },
      { t: "nuance", q: "Quand emploie-t-on ように plutôt que ために pour le but ?",
        o: ["avec un verbe potentiel/non volontaire ou une négation (見えるように、忘れないように)", "always", "never with negation", "only with names"], a: 0,
        e: "ように: involuntary/potential goal; ために: voluntary goal." },
    ],
  },

  {
    id: "g080", g: "〜ようとする", m: "trying to, about to", f: "V-volitif（〜よう／おう）+ とする",
    c: "express", lv: 2, rel: ["g081"],
    note: "Tentative or imminent action: \"to attempt to do\" or \"to be about to do\".",
    ex: [
      { jp: "立ち上がろうとしたが、足が痛くて動けなかった。", fr: "I tried to get up, but the pain prevented me." },
      { jp: "電車が出ようとしている。", fr: "The train is about to depart." },
    ],
    qs: [
      { t: "fill", q: "ドアを開け＿＿＿としたとき、電話が鳴った。", fr: "Just as I was about to open the door, the phone rang.",
        o: ["よう", "ばかり", "こそ", "さえ"], a: 0,
        e: "V-volitive + とする = to be about to / attempt to." },
      { t: "meaning", q: "「赤ちゃんが歩こうとしている」— sens ?",
        o: ["baby tries to walk", "the baby is already walking well", "baby refuses to walk", "the baby walked"], a: 0,
        e: "〜ようとする = attempted action." },
    ],
  },

  {
    id: "g081", g: "〜ようとしない", m: "refuse to, unwilling to try to", f: "V-volitif + としない",
    c: "express", lv: 2, rel: ["g080"],
    note: "Indicates a voluntary refusal/absence of effort on the part of others: \"he makes no effort to...\".",
    ex: [
      { jp: "彼は私の話を聞こうとしない。", fr: "He refuses to listen to anything I say." },
      { jp: "子供が薬を飲もうとしない。", fr: "The child does not want to take his medication." },
    ],
    qs: [
      { t: "fill", q: "彼は何度言っても、考えを変え＿＿＿。", fr: "No matter how many times we tell him, he won't change his mind.",
        o: ["ようとしない", "ようとする", "ことになる", "ばかりだ"], a: 0,
        e: "〜ようとしない = refusal / lack of effort." },
      { t: "meaning", q: "「真実を認めようとしない」— sens ?",
        o: ["he refuses to admit the truth", "he tries to admit the truth", "he admitted the truth", "he has to admit the truth"], a: 0,
        e: "〜ようとしない = makes no effort to / refuses to." },
    ],
  },

  {
    id: "g082", g: "〜てもかまわない", m: "It doesn't matter if it's allowed to", f: "V-て／A-くて／N＋でも + かまわない",
    c: "express", lv: 2, rel: [],
    note: "Permission or indifference: \"it's okay if...\". Close to てもいい but insists on the absence of discomfort.",
    ex: [
      { jp: "ここに座ってもかまいませんか。", fr: "Do you mind if I sit here?" },
      { jp: "雨でもかまわない、予定通り行く。", fr: "It doesn't matter if it's raining, we're going as planned." },
    ],
    qs: [
      { t: "fill", q: "明日まで待って＿＿＿よ。急がなくていい。", fr: "I don't mind waiting until tomorrow. No need to rush.",
        o: ["もかまわない", "ばかりだ", "どころか", "こそ"], a: 0,
        e: "〜てもかまわない = it doesn't bother / it's allowed." },
      { t: "nuance", q: "〜てもかまわない vs 〜てもいい : nuance ?",
        o: ["sens proche ; かまわない insiste sur « peu importe / sans gêne »", "opposite", "てもいい exprime une interdiction", "かまわない est une obligation"], a: 0,
        e: "Quasi-synonyms; かまわない emphasizes indifference/no problem." },
    ],
  },

  {
    id: "g083", g: "〜ほど〜ない", m: "not as much as, less than", f: "N／V-dict + ほど + （…）ない",
    c: "express", lv: 1, rel: ["g084"],
    note: "Negative comparison: \"it's not to the point of / not as much as\". Also used to express degree (\"to the point of\").",
    ex: [
      { jp: "今年は去年ほど寒くない。", fr: "This year, it's not as cold as last year." },
      { jp: "彼ほど親切な人はいない。", fr: "There's no one nicer than him." },
    ],
    qs: [
      { t: "fill", q: "この問題は思った＿＿＿難しくなかった。", fr: "This problem wasn't as difficult as I thought.",
        o: ["ほど", "こそ", "さえ", "ばかり"], a: 0,
        e: "〜ほど〜ない = negative comparison (\"not as much as\")." },
      { t: "meaning", q: "「死ぬほど疲れた」— sens de ほど ?",
        o: ["tired to the point of death (extreme degree)", "less tired than death", "not at all tired", "tired every time"], a: 0,
        e: "〜ほど also expresses degree (\"to the point of\")." },
    ],
  },

  {
    id: "g084", g: "〜ば〜ほど", m: "more... more (correlation)", f: "V-ば + V-dict + ほど ／ A-ければ + A-い + ほど",
    c: "express", lv: 2, rel: ["g083"],
    note: "Progressive correlation: \"the more X, the more Y\". The same verb/adjective is repeated.",
    ex: [
      { jp: "考えれば考えるほど、分からなくなる。", fr: "The more I think about it, the less I understand." },
      { jp: "練習すればするほど、上手になる。", fr: "The more you train, the more you progress." },
    ],
    qs: [
      { t: "fill", q: "値段が高けれ＿＿、品質がいいとは限らない。", fr: "Just because it's more expensive doesn't necessarily mean it's of better quality.",
        o: ["ば高いほど", "ばかり高い", "こそ高い", "さえ高い"], a: 0,
        e: "〜ば〜ほど = correlation \"more... more\" (repetition of adjective)." },
      { t: "usage", q: "Forme correcte de la corrélation « plus on lit, plus on comprend » ?",
        o: ["読めば読むほど分かる", "読むほど読めば分かる", "読みさえ読むほど分かる", "読むばかり読めば分かる"], a: 0,
        e: "Structure : V-ば + V-dict + ほど." },
    ],
  },

  {
    id: "g085", g: "〜だけ（〜できるだけ）", m: "insofar as", f: "V-dict／V-た／V-potentiel + だけ",
    c: "express", lv: 2, rel: ["g074"],
    note: "Expresses the maximum limit/extent of an action: \"as much as possible / all that\".",
    ex: [
      { jp: "できるだけ早く来てください。", fr: "Come as soon as you can." },
      { jp: "好きなだけ食べていいよ。", fr: "You can eat as much as you like." },
    ],
    qs: [
      { t: "fill", q: "言いたい＿＿＿言ってすっきりした。", fr: "I said everything I wanted to say, and it was a relief.",
        o: ["だけ", "ほど", "こそ", "さえ"], a: 0,
        e: "〜だけ = as much as / all that (maximum extent)." },
      { t: "meaning", q: "「できるだけ手伝う」— sens de だけ ?",
        o: ["help as much as you can", "help only once", "barely help", "not to help"], a: 0,
        e: "できるだけ = \"as much as possible\"." },
    ],
  },

  {
    id: "g086", g: "〜なり", m: "as soon as, as soon as (and right away)", f: "V-dict + なり",
    c: "express", lv: 3, rel: ["g029", "g087"],
    note: "Literary register. One action immediately and unexpectedly follows another, often carried out by another. The main action is in the past tense.",
    ex: [
      { jp: "彼は部屋に入るなり、泣き出した。", fr: "As soon as he entered the room, he started crying." },
      { jp: "電話を切るなり、家を飛び出した。", fr: "As soon as he hung up, he rushed out of the house." },
    ],
    qs: [
      { t: "fill", q: "彼女は私の顔を見る＿＿＿、笑い出した。", fr: "As soon as she saw me, she burst out laughing.",
        o: ["なり", "ながら", "うちに", "たびに"], a: 0,
        e: "〜なり = as soon as X, Y happens (literary, often surprise)." },
      { t: "nuance", q: "〜なり vs 〜たとたん : nuance ?",
        o: ["très proches ; なり est plus littéraire et la 2e action est souvent une action de la même personne menée de façon impulsive", "opposite", "なり est familier", "たとたん exprime une volonté"], a: 0,
        e: "なり = sustained register, immediate and often voluntary/impulsive sequence." },
    ],
  },

  {
    id: "g087", g: "〜か〜ないかのうちに", m: "that, at the very moment", f: "V-dict + か + V-ない + かのうちに",
    c: "express", lv: 3, rel: ["g029", "g086"],
    note: "Two almost simultaneous events: the first action has not even been completed before the second begins.",
    ex: [
      { jp: "ベルが鳴るか鳴らないかのうちに、教室を飛び出した。", fr: "No sooner had the bell rung than he bolted from the classroom." },
      { jp: "横になるかならないかのうちに、眠ってしまった。", fr: "As soon as he lay down, he fell asleep." },
    ],
    qs: [
      { t: "fill", q: "言い終わる＿＿＿、彼は席を立った。", fr: "No sooner had I finished speaking than he stood up.",
        o: ["か終わらないかのうちに", "とともに", "に際して", "につれて"], a: 0,
        e: "〜か〜ないかのうちに = barely X (not yet finished) before Y occurs." },
      { t: "meaning", q: "「着くか着かないかのうちに」— sens ?",
        o: ["at the very moment of arrival (not quite there yet)", "long after arrival", "before you leave", "every time we arrive"], a: 0,
        e: "Quasi-simultaneity: the 1st action has barely begun." },
    ],
  },

  {
    id: "g088", g: "〜をよそに", m: "disregarding, ignoring", f: "Nom + をよそに",
    c: "express", lv: 3, rel: ["g089"],
    note: "Acting in deliberate disregard of others' feelings/concerns. Often critical tone. Written register.",
    ex: [
      { jp: "親の心配をよそに、彼は危険な旅に出た。", fr: "Ignoring his parents' concerns, he set off on a dangerous journey." },
      { jp: "周囲の反対をよそに、計画を進めた。", fr: "In defiance of general opposition, he went ahead with his project." },
    ],
    qs: [
      { t: "fill", q: "世間の批判＿＿＿、彼は自分の道を貫いた。", fr: "Ignoring public criticism, he went his own way.",
        o: ["をよそに", "に応じて", "に基づいて", "をはじめ"], a: 0,
        e: "〜をよそに = ignoring (other people's concerns)." },
      { t: "nuance", q: "〜をよそに vs 〜もかまわず : nuance ?",
        o: ["をよそに = ignorer les préoccupations d'autrui ; もかまわず = ne pas se soucier d'une gêne (souvent pour soi)", "identical", "もかまわず concerne autrui", "をよそに concerne soi-même"], a: 0,
        e: "をよそに → entourage ignored; もかまわず → discomfort ignored." },
    ],
  },

  {
    id: "g089", g: "〜もかまわず", m: "with no regard for", f: "Nom／V-plain＋の + もかまわず",
    c: "express", lv: 3, rel: ["g088"],
    note: "Do something without paying attention to a distracting circumstance (other people's gaze, your clothes, etc.).",
    ex: [
      { jp: "彼は服が汚れるのもかまわず、子供と遊んだ。", fr: "Without worrying about getting his clothes dirty, he played with the child." },
      { jp: "人目もかまわず泣いた。", fr: "He cried without worrying about other people's gaze." },
    ],
    qs: [
      { t: "fill", q: "彼女は涙が流れるの＿＿＿、話し続けた。", fr: "Oblivious to her tears, she continued talking.",
        o: ["もかまわず", "をはじめ", "に応じて", "に反して"], a: 0,
        e: "〜もかまわず = without worrying about (an annoyance)." },
      { t: "meaning", q: "「危険もかまわず助けに行った」— sens ?",
        o: ["he went to the rescue, unaware of the danger", "he avoided danger", "because of the danger", "about danger"], a: 0,
        e: "〜もかまわず = disregarding an obstacle/obstacle." },
    ],
  },

  {
    id: "g090", g: "〜を込めて", m: "with (feeling/energy), full of", f: "Nom + を込めて",
    c: "express", lv: 2, rel: [],
    note: "To do something by putting a feeling, an intention into it. Often with 心, 愛, 感謝, 願い.",
    ex: [
      { jp: "心を込めて手紙を書いた。", fr: "I wrote the letter with all my heart." },
      { jp: "感謝を込めてプレゼントを贈る。", fr: "I offer this gift in gratitude." },
    ],
    qs: [
      { t: "fill", q: "愛＿＿＿料理を作った。", fr: "I cooked with love.",
        o: ["を込めて", "について", "に応じて", "をはじめ"], a: 0,
        e: "〜を込めて = by putting (a feeling) into it." },
      { t: "meaning", q: "「願いを込めて鐘を鳴らす」— sens de を込めて ?",
        o: ["ring the bell with a wish", "ring the bell about the wish", "ring the bell without a vow", "to ring the bell against the wish"], a: 0,
        e: "〜を込めて = by charging the act with a feeling/intention." },
    ],
  },

  /* ===================== AJOUTS — g091 à g182 ===================== */

  {
    id: "g091", g: "〜あげく(に)", m: "in the end (after much effort)", f: "V-た／N＋の + あげく(に)",
    c: "time", lv: 2, rel: ["g092"],
    note: "After a long and arduous process, a (often negative/disappointing) result is achieved.",
    ex: [
      { jp: "さんざん迷ったあげく、何も買わなかった。", fr: "After hesitating for a long time, I finally didn't buy anything." },
      { jp: "口論のあげく、彼は出て行った。", fr: "At the end of the argument, he left." },
    ],
    qs: [
      { t: "fill", q: "長時間話し合った＿＿＿、結論は出なかった。", fr: "After a long discussion, we came to no conclusion.",
        o: ["あげく", "うえで", "うちに", "とたん"], a: 0,
        e: "〜あげく = at the end of a long process (often negative outcome)." },
      { t: "nuance", q: "〜あげく vs 〜末に : nuance ?",
        o: ["あげく a souvent une issue négative/regrettable ; 末に est plus neutre (« finalement, après »)", "identical", "末に est négatif", "あげく est positif"], a: 0,
        e: "あげく = often unfortunate outcome; 末に = simple \"at the end of\"." },
    ],
  },

  {
    id: "g092", g: "〜末(に)", m: "at the end of, finally after", f: "V-た／N＋の + 末(に)",
    c: "time", lv: 2, rel: ["g091"],
    note: "After much thought and effort, we arrive at a result (often a decision).",
    ex: [
      { jp: "よく考えた末に、留学を決めた。", fr: "After careful consideration, I decided to study abroad." },
      { jp: "激しい議論の末、結論が出た。", fr: "After a lively debate, a conclusion was reached." },
    ],
    qs: [
      { t: "fill", q: "悩んだ＿＿＿、転職することにした。", fr: "After much hesitation, I decided to change jobs.",
        o: ["末に", "とたんに", "うちに", "たびに"], a: 0,
        e: "〜末に = at the end of a thought/effort process." },
      { t: "meaning", q: "「苦労の末に成功した」— sens ?",
        o: ["to succeed after much toil", "effortless success", "to fail after a hard time", "before suffering"], a: 0,
        e: "〜末に = at the end of (often after effort)." },
    ],
  },

  {
    id: "g093", g: "〜上で", m: "after / when / for", f: "V-た／N＋の + 上で",
    c: "time", lv: 2, rel: ["g094"],
    note: "(1) \"after doing X (and on that basis)\"; (2) \"as part of / for\" (目的上).",
    ex: [
      { jp: "よく相談した上で、決めましょう。", fr: "Let's discuss it and decide." },
      { jp: "契約の上で問題が生じた。", fr: "A problem arose with the contract." },
    ],
    qs: [
      { t: "fill", q: "資料をよく読んだ＿＿＿、質問してください。", fr: "After reading the documents, ask your questions.",
        o: ["上で", "上に", "あげく", "末に"], a: 0,
        e: "V-た + 上で = after making X (as a prerequisite)." },
      { t: "nuance", q: "〜上で vs 〜てから : nuance ?",
        o: ["上で insiste sur « sur la base de X (étape réfléchie) » ; てから = simple succession temporelle", "identical", "てから est formel", "上で = avant"], a: 0,
        e: "上で = thoughtful pre-step; てから = simple chronological order." },
    ],
  },

  {
    id: "g094", g: "〜上に", m: "in addition to", f: "V-plain／A／N＋である + 上に",
    c: "contrast", lv: 2, rel: ["g093", "g074"],
    note: "Add an element with the same orientation: \"not only X, but also Y\".",
    ex: [
      { jp: "この店は安い上に、おいしい。", fr: "This restaurant is inexpensive and, what's more, delicious." },
      { jp: "道に迷った上に、雨まで降ってきた。", fr: "Not only did I get lost, but it started raining." },
    ],
    qs: [
      { t: "fill", q: "彼は頭がいい＿＿＿、性格もいい。", fr: "He's intelligent and, what's more, good-natured.",
        o: ["上に", "上で", "あげく", "反面"], a: 0,
        e: "〜上に = addition of same meaning (\"in addition to\")." },
      { t: "nuance", q: "〜上に vs 〜反面 : différence ?",
        o: ["上に ajoute un élément de même orientation ; 反面 introduit un aspect opposé", "identical", "上に = opposition", "反面 = addition"], a: 0,
        e: "上に adds up; 反面 contrasts." },
    ],
  },

  {
    id: "g095", g: "〜得る／〜得ない", m: "can / can't (possibility)", f: "V-ます stem + 得る（うる／える）／得ない（えない）",
    c: "modality", lv: 3, rel: ["g096"],
    note: "Expresses the theoretical possibility of something happening (≠ personal capacity). 起こり得る = can happen.",
    ex: [
      { jp: "そんなことは十分あり得る。", fr: "Such a thing is entirely possible." },
      { jp: "それは考え得ない事態だ。", fr: "It's an inconceivable situation." },
    ],
    qs: [
      { t: "fill", q: "誰にでも起こり＿＿＿事故だ。", fr: "It's an accident that can happen to anyone.",
        o: ["得る", "がたい", "かねない", "ようがない"], a: 0,
        e: "V-stem + 得る = possibility (起こり得る = may occur)." },
      { t: "meaning", q: "「あり得ない」— sens ?",
        o: ["impossible / inconceivable", "quite possible", "easy to make", "mandatory"], a: 0,
        e: "〜得ない = can't happen (theoretical impossibility)." },
    ],
  },

  {
    id: "g096", g: "〜かねる", m: "can't bring themselves to, find it hard to", f: "V-ます stem + かねる",
    c: "modality", lv: 3, rel: ["g097", "g095"],
    note: "Polite/formal register: we can't do X (out of scruples, difficulty). Often in customer service (わかりかねます).",
    ex: [
      { jp: "その件についてはお答えしかねます。", fr: "I'm not in a position to answer that." },
      { jp: "見るに見かねて、手を貸した。", fr: "Unable to stand by and watch, I lent a hand." },
    ],
    qs: [
      { t: "fill", q: "個人情報はお教えし＿＿＿ます。", fr: "I can't give you any personal information.",
        o: ["かね", "がち", "ぎみ", "きり"], a: 0,
        e: "V-stem + かねる = can't (politely) do (お教えしかねます)." },
      { t: "nuance", q: "〜かねる vs 〜かねない : relation ?",
        o: ["かねる = ne peut pas faire ; かねない = risque de (pourrait bien arriver)", "synonyms", "かねる = risque", "かねない = ne peut pas"], a: 0,
        e: "かねる (can't) ≠ かねない (risk of, negative)." },
    ],
  },

  {
    id: "g097", g: "〜かねない", m: "risk, may (negative outcome)", f: "V-ます stem + かねない",
    c: "modality", lv: 3, rel: ["g096"],
    note: "Indicates that an undesirable outcome is possible: \"it could well be that... (bad)\".",
    ex: [
      { jp: "そんな生活では病気になりかねない。", fr: "With such a lifestyle, you run the risk of getting sick." },
      { jp: "彼ならやりかねない。", fr: "He could do it." },
    ],
    qs: [
      { t: "fill", q: "スピードを出しすぎると、事故を起こし＿＿＿。", fr: "Driving too fast can cause an accident.",
        o: ["かねない", "かねる", "得ない", "がたい"], a: 0,
        e: "〜かねない = (negative) risk of (起こしかねない)." },
      { t: "meaning", q: "「うそをつきかねない人だ」— sens ?",
        o: ["he's someone who could be lying", "someone who never lies", "someone incapable of lying", "someone who lied"], a: 0,
        e: "〜かねない = capable of the worst / risk of." },
    ],
  },

  {
    id: "g098", g: "〜がたい", m: "difficult to, almost impossible to", f: "V-ます stem + がたい",
    c: "modality", lv: 3, rel: ["g096"],
    note: "Sustained register: it's psychologically difficult to do X (信じがたい, 理解しがたい).",
    ex: [
      { jp: "彼の話は信じがたい。", fr: "His story is hard to believe." },
      { jp: "忘れがたい思い出だ。", fr: "It's an unforgettable memory." },
    ],
    qs: [
      { t: "fill", q: "あの優しい人がそんなことをするとは想像し＿＿＿。", fr: "It's hard to imagine such a gentle person doing this.",
        o: ["がたい", "やすい", "かねない", "得る"], a: 0,
        e: "〜がたい = difficult to (想像しがたい), written register." },
      { t: "nuance", q: "〜がたい vs 〜にくい : nuance ?",
        o: ["がたい = difficulté psychologique/abstraite (soutenu) ; にくい = difficulté pratique/physique", "identical", "にくい est soutenu", "がたい est familier"], a: 0,
        e: "がたい (believe, imagine...) ≠ にくい (read, eat...)." },
    ],
  },

  {
    id: "g099", g: "〜きり", m: "only / since (and no more)", f: "V-た + きり ／ N + きり",
    c: "express", lv: 2, rel: [],
    note: "(1) \"only / nothing but\" (二人きり); (2) after V-た: \"since X, nothing more has happened\" (出かけたきり帰らない).",
    ex: [
      { jp: "彼とは一度会ったきりだ。", fr: "I've only met him once (and not since)." },
      { jp: "二人きりで話した。", fr: "We spoke face-to-face (just the two of us)." },
    ],
    qs: [
      { t: "fill", q: "兄は朝出かけた＿＿＿、まだ帰らない。", fr: "My brother went out this morning and hasn't been home since.",
        o: ["きり", "ばかり", "ながら", "ところ"], a: 0,
        e: "V-た + きり = since X, nothing (出かけたきり)." },
      { t: "meaning", q: "「寝たきりの生活」— sens ?",
        o: ["a life in bed (just lying down)", "an active life", "go to bed once", "before going to bed"], a: 0,
        e: "〜きり = limited to this state only (寝たきり = bedridden)." },
    ],
  },

  {
    id: "g100", g: "〜げ", m: "the look of, which seems (appearance)", f: "A-stem（感情）／V-ます stem + げ",
    c: "modality", lv: 3, rel: ["g105"],
    note: "Literary suffix indicating the outward appearance of a sentiment (寂しげ, 不安げ).",
    ex: [
      { jp: "彼女は寂しげな表情をしていた。", fr: "She had a melancholy air." },
      { jp: "意味ありげに笑った。", fr: "He smiled knowingly." },
    ],
    qs: [
      { t: "fill", q: "子供が不安＿＿＿に母親を見た。", fr: "The child looked worriedly at his mother.",
        o: ["げ", "がち", "ぎみ", "っぽい"], a: 0,
        e: "〜げ = appearance of a feeling (不安げに)." },
      { t: "meaning", q: "「自信ありげな態度」— sens ?",
        o: ["a confident attitude", "an attitude devoid of confidence", "an unknown attitude", "a future attitude"], a: 0,
        e: "〜げ = which looks like (ありげ = which seems to have)." },
    ],
  },

  {
    id: "g101", g: "〜ことだ", m: "you must / it's best to (strong advice)", f: "V-dict／V-ない + ことだ",
    c: "modality", lv: 2, rel: ["g047"],
    note: "Strong advice to someone: \"What you need to do is...\".",
    ex: [
      { jp: "上手になりたければ、毎日練習することだ。", fr: "If you want to progress, the most important thing is to train every day." },
      { jp: "風邪のときは、ゆっくり休むことだ。", fr: "When you've got a cold, the best thing to do is get plenty of rest." },
    ],
    qs: [
      { t: "fill", q: "成功したければ、あきらめない＿＿＿。", fr: "If you want to succeed, you can't give up.",
        o: ["ことだ", "ものだ", "ところだ", "わけだ"], a: 0,
        e: "〜ことだ = strong advice (あきらめないことだ)." },
      { t: "nuance", q: "〜ことだ vs 〜ものだ : nuance ?",
        o: ["ことだ = conseil ciblé à un interlocuteur ; ものだ = vérité générale/norme", "identical", "ものだ = conseil", "ことだ = nostalgie"], a: 0,
        e: "ことだ (personal advice) ≠ ものだ (generality/standard)." },
    ],
  },

  {
    id: "g102", g: "〜ことだから", m: "given that (typical of...)", f: "N＋の + ことだから",
    c: "condition", lv: 2, rel: ["g054"],
    note: "We base our predictions on someone's well-known character.",
    ex: [
      { jp: "彼のことだから、きっと時間どおりに来るよ。", fr: "Knowing him, he'll surely come on time." },
      { jp: "几帳面な彼女のことだから、忘れないだろう。", fr: "Meticulous as she is, she won't forget." },
    ],
    qs: [
      { t: "fill", q: "やさしいあなた＿＿＿、助けてくれるでしょう。", fr: "Kind as you are, you'll surely help me.",
        o: ["のことだから", "のことなのに", "について", "にとって"], a: 0,
        e: "N＋のことだから = forecast based on known character (あなたのことだから)." },
      { t: "meaning", q: "「子供のことだから、すぐ飽きるよ」— sens ?",
        o: ["they're children, so they'll get bored quickly", "about children", "unlike children", "for children only"], a: 0,
        e: "〜ことだから = \"knowing X / typical of X\"." },
    ],
  },

  {
    id: "g103", g: "〜ことに(は)", m: "thing (surprising/happy/regrettable) that...", f: "A／V-た + ことに(は)",
    c: "modality", lv: 3, rel: [],
    note: "Place a speaker's sentiment about what follows at the top of a sentence (驚いたことに, 残念なことに).",
    ex: [
      { jp: "驚いたことに、彼は試験に合格した。", fr: "Amazingly, he passed the exam." },
      { jp: "残念なことに、雨で中止になった。", fr: "Unfortunately, it was cancelled due to rain." },
    ],
    qs: [
      { t: "fill", q: "うれしい＿＿＿、彼女が遊びに来てくれた。", fr: "Happily, she came to visit me.",
        o: ["ことに", "もので", "わけで", "ながら"], a: 0,
        e: "〜ことに = emphasizes the speaker's feeling (うれしいことに)." },
      { t: "meaning", q: "「困ったことに、鍵をなくした」— sens ?",
        o: ["annoyingly, I've lost my key", "I've found my key", "about the key", "only because of the key"], a: 0,
        e: "〜ことに = announces an emotion before the fact that follows." },
    ],
  },

  {
    id: "g104", g: "〜最中(に)", m: "in the middle of, at the very moment", f: "V-ている／N＋の + 最中(に)",
    c: "time", lv: 2, rel: ["g028"],
    note: "An event (often embarrassing) occurs while an action is in full swing.",
    ex: [
      { jp: "食事の最中に電話が鳴った。", fr: "The phone rang in the middle of the meal." },
      { jp: "会議の最中に居眠りしてしまった。", fr: "I dozed off in the middle of a meeting." },
    ],
    qs: [
      { t: "fill", q: "話している＿＿＿に、急に停電した。", fr: "In the middle of our conversation, the power suddenly went out.",
        o: ["最中", "うち", "とたん", "ところ"], a: 0,
        e: "〜最中に = right in the middle of (話している最中に)." },
      { t: "nuance", q: "〜最中に vs 〜ているうちに : nuance ?",
        o: ["最中に = au point culminant de l'action (souvent interruption) ; うちに = profiter de la durée", "identical", "うちに = interruption", "最中に = profiter"], a: 0,
        e: "最中 emphasizes the \"middle\" (interrupted); うちに = while it lasts." },
    ],
  },

  {
    id: "g105", g: "〜ざるを得ない", m: "not be able to do otherwise than", f: "V-ない radical + ざるを得ない（する→せざるを得ない）",
    c: "condition", lv: 3, rel: ["g106", "g107"],
    note: "One is forced to do X in spite of oneself (circumstances). する → せざるを得ない.",
    ex: [
      { jp: "上司の命令だから、従わざるを得ない。", fr: "It's an order from my superior, I have no choice but to obey." },
      { jp: "証拠がある以上、認めざるを得ない。", fr: "Since there's proof, we have to admit it." },
    ],
    qs: [
      { t: "fill", q: "終電がないので、タクシーで帰ら＿＿＿。", fr: "There are no more trains, so I have to take a cab home.",
        o: ["ざるを得ない", "ないことはない", "かねない", "得ない"], a: 0,
        e: "V-ない radical + ざるを得ない = to be forced to (帰らざるを得ない)." },
      { t: "usage", q: "Forme en ざるを得ない de する ?",
        o: ["せざるを得ない", "しざるを得ない", "さざるを得ない", "するざるを得ない"], a: 0,
        e: "する is irregular → せざるを得ない." },
    ],
  },

  {
    id: "g106", g: "〜しかない", m: "have no choice but to", f: "V-dict + しかない",
    c: "condition", lv: 2, rel: ["g105"],
    note: "Only one option remains: \"il ne reste qu'à...\". With a noun: \"il n'y a que...\".",
    ex: [
      { jp: "バスがないので、歩くしかない。", fr: "There are no buses, so all you can do is walk." },
      { jp: "もう、やるしかない。", fr: "Now you just have to do it." },
    ],
    qs: [
      { t: "fill", q: "助けがないなら、自分でやる＿＿＿。", fr: "If there's no help, you just have to do it yourself.",
        o: ["しかない", "ことはない", "わけがない", "かねない"], a: 0,
        e: "V-dict + しかない = all that's left is (やるしかない)." },
      { t: "nuance", q: "〜しかない vs 〜ざるを得ない : nuance ?",
        o: ["sens proche ; ざるを得ない est plus formel et insiste sur la contrainte extérieure", "opposite", "しかない est formel", "ざるを得ない = libre choix"], a: 0,
        e: "Quasi-synonyms for resignation; ざるを得ない is more sustained." },
    ],
  },

  {
    id: "g107", g: "〜ずにはいられない", m: "can't help but feel", f: "V-ない radical + ずにはいられない（する→せずに）",
    c: "condition", lv: 3, rel: ["g105"],
    note: "Can't hold back a spontaneous action/feeling: \"can't help but...\".",
    ex: [
      { jp: "あの映画は泣かずにはいられない。", fr: "When you see this film, you can't help but cry." },
      { jp: "彼の冗談には笑わずにはいられない。", fr: "It's impossible not to laugh at his jokes." },
    ],
    qs: [
      { t: "fill", q: "困っている人を見ると、助け＿＿＿。", fr: "When I see someone in difficulty, I can't help but help them.",
        o: ["ずにはいられない", "かねない", "得ない", "がたい"], a: 0,
        e: "〜ずにはいられない = can't help but (助けずにはいられない)." },
      { t: "meaning", q: "「感動せずにはいられない」— sens ?",
        o: ["you can't help but be moved", "there's no need to get emotional", "we're never moved", "we choose to be moved"], a: 0,
        e: "〜ずにはいられない = irrepressible spontaneous reaction." },
    ],
  },

  {
    id: "g108", g: "〜だけあって", m: "as you would expect from, quite rightly", f: "V-plain／A／N + だけあって",
    c: "express", lv: 3, rel: ["g109"],
    note: "A positive result is what is expected of a status/effort. Appreciative tone.",
    ex: [
      { jp: "プロだけあって、演技がすばらしい。", fr: "A true professional, his playing is magnificent." },
      { jp: "よく勉強しただけあって、合格した。", fr: "Because he studied hard (and deservedly so), he succeeded." },
    ],
    qs: [
      { t: "fill", q: "人気店＿＿＿、いつも混んでいる。", fr: "As it's a well-known restaurant (and rightly so), it's always packed.",
        o: ["だけあって", "だけに", "どころか", "ばかりに"], a: 0,
        e: "〜だけあって = result conforms/deserves a status (人気店だけあって)." },
      { t: "meaning", q: "「留学しただけあって、英語が上手だ」— sens ?",
        o: ["since he studied abroad, his English is good (logical)", "even though he studied abroad", "from abroad only", "before going abroad"], a: 0,
        e: "〜だけあって highlights a result that lives up to expectations." },
    ],
  },

  {
    id: "g109", g: "〜だけに", m: "especially since, precisely because", f: "V-plain／A／N + だけに",
    c: "express", lv: 3, rel: ["g108", "g069"],
    note: "The cause being what it is, the result/feeling is reinforced (often emotionally).",
    ex: [
      { jp: "期待していただけに、結果が残念だ。", fr: "As I had high hopes, the result is all the more disappointing." },
      { jp: "ベテランだけに、ミスが目立つ。", fr: "Precisely because he's a veteran, his mistakes are noticeable." },
    ],
    qs: [
      { t: "fill", q: "苦労した＿＿＿、合格の喜びは大きい。", fr: "As I've struggled, the joy of succeeding is all the greater.",
        o: ["だけに", "だけあって", "どころか", "ものの"], a: 0,
        e: "〜だけに = as much as (苦労しただけに)." },
      { t: "nuance", q: "〜だけに vs 〜だけあって : nuance ?",
        o: ["だけに renforce souvent un sentiment (positif OU négatif) ; だけあって souligne un résultat mérité (positif)", "identical", "だけに est toujours positif", "だけあって est négatif"], a: 0,
        e: "だけに = \"all the more\" (emotion); だけあって = \"justly\" (merit)." },
    ],
  },

  {
    id: "g110", g: "〜たところで", m: "even if (in vain), even if", f: "V-た + ところで",
    c: "condition", lv: 3, rel: ["g022"],
    note: "Even if you do X, the desired result won't happen: \"it wouldn't do any good to...\".",
    ex: [
      { jp: "今から急いだところで、間に合わない。", fr: "Even if I hurry now, I won't make it in time." },
      { jp: "謝ったところで、許してくれないだろう。", fr: "Even if I apologized, he wouldn't forgive me." },
    ],
    qs: [
      { t: "fill", q: "いくら考え＿＿＿、答えは出ないよ。", fr: "No matter how hard you think, you won't find the answer.",
        o: ["たところで", "たとたん", "たうえで", "たきり"], a: 0,
        e: "〜たところで = even if (in vain) (考えたところで)." },
      { t: "nuance", q: "〜たところで vs 〜ても : nuance ?",
        o: ["たところで souligne l'inutilité/le faible effet ; ても = simple concession", "identical", "ても = inutilité", "たところで = cause"], a: 0,
        e: "たところで = \"even if... it won't change anything\"." },
    ],
  },

  {
    id: "g111", g: "〜つつ(も)", m: "while / although (sustained concession)", f: "V-ます stem + つつ(も)",
    c: "contrast", lv: 3, rel: ["g020"],
    note: "Written register. (1) simultaneity (≈ ながら); (2) with も: concession (\"while knowing that... but\").",
    ex: [
      { jp: "悪いと知りつつも、やめられない。", fr: "Even though I know it's wrong, I can't stop." },
      { jp: "景色を楽しみつつ歩いた。", fr: "I walked along enjoying the scenery." },
    ],
    qs: [
      { t: "fill", q: "体に悪いと思い＿＿＿、つい食べてしまう。", fr: "Even though I know it's bad for you, I eat it anyway.",
        o: ["つつも", "ながらに", "どころか", "あげく"], a: 0,
        e: "〜つつも = sustained concession (思いつつも)." },
      { t: "nuance", q: "〜つつ vs 〜ながら : nuance ?",
        o: ["même sens ; つつ est plus écrit/littéraire", "opposite", "ながら est littéraire", "つつ = cause"], a: 0,
        e: "つつ = written register of ながら." },
    ],
  },

  {
    id: "g112", g: "〜つつある", m: "be in the process of (gradual evolution)", f: "V-ます stem + つつある",
    c: "time", lv: 3, rel: ["g111"],
    note: "Written register: a change progresses steadily towards its end (回復しつつある).",
    ex: [
      { jp: "景気は回復しつつある。", fr: "The economy is on the mend." },
      { jp: "問題は解決しつつある。", fr: "The problem is in the process of being resolved." },
    ],
    qs: [
      { t: "fill", q: "地球の環境は悪化し＿＿＿。", fr: "The planet's environment is deteriorating.",
        o: ["つつある", "きりだ", "ばかりだ", "得る"], a: 0,
        e: "〜つつある = evolution in progress (悪化しつつある)." },
      { t: "nuance", q: "〜つつある vs 〜ている : nuance ?",
        o: ["つつある = écrit, insiste sur l'évolution vers un terme ; ている = état/action en cours (neutre)", "identical", "ている est littéraire", "つつある = état figé"], a: 0,
        e: "つある underlines the continuous progression (sustained)." },
    ],
  },

  {
    id: "g113", g: "〜っこない", m: "there's no way (colloquial)", f: "V-ます stem + っこない",
    c: "modality", lv: 2, rel: ["g050"],
    note: "A colloquial form categorically denying a possibility: \"It'll never happen.",
    ex: [
      { jp: "そんな難しい問題、できっこない。", fr: "I'll never be able to cope with such a tough problem." },
      { jp: "彼が来るなんて、あるっこない。", fr: "Come? Not a chance." },
    ],
    qs: [
      { t: "fill", q: "一日で全部覚えられ＿＿＿よ。", fr: "It's impossible to memorize everything in one day.",
        o: ["っこない", "かねない", "得る", "がたい"], a: 0,
        e: "〜っこない = familiar categorical impossibility (覚えられっこない)." },
      { t: "nuance", q: "〜っこない équivaut à :",
        o: ["〜わけがない／はずがない (familier)", "〜かもしれない", "〜に違いない", "〜ことになる"], a: 0,
        e: "っこない = \"no chance\", oral register." },
    ],
  },

  {
    id: "g114", g: "〜っぱなし", m: "leave (as is) / without stopping (neglect)", f: "V-ます stem + っぱなし",
    c: "express", lv: 3, rel: ["g125"],
    note: "(1) leaving a state without correcting it (つけっぱなし); (2) continuous action without interruption (立ちっぱなし).",
    ex: [
      { jp: "電気をつけっぱなしで出かけた。", fr: "I went out and left the light on." },
      { jp: "一日中立ちっぱなしで疲れた。", fr: "I stayed up all day, exhausted." },
    ],
    qs: [
      { t: "fill", q: "水を出し＿＿＿にしないでください。", fr: "Don't let the water run continuously.",
        o: ["っぱなし", "がち", "ぎみ", "っこ"], a: 0,
        e: "〜っぱなし = to leave in a state (neglect): 出しっぱなし." },
      { t: "meaning", q: "「窓を開けっぱなしだ」— sens ?",
        o: ["window left open (left like this)", "the window has just been opened", "close the window", "window opens by itself"], a: 0,
        e: "〜っぱなし = state left as is (often reproached)." },
    ],
  },

  {
    id: "g115", g: "〜て以来", m: "since", f: "V-て + 以来",
    c: "time", lv: 2, rel: ["g020"],
    note: "From a past event, a situation is maintained until the present.",
    ex: [
      { jp: "日本に来て以来、一度も国に帰っていない。", fr: "Since I came to Japan, I haven't been back once." },
      { jp: "卒業して以来、彼に会っていない。", fr: "I haven't seen him since I graduated." },
    ],
    qs: [
      { t: "fill", q: "引っ越して＿＿＿、近所の人と話していない。", fr: "Since I moved out, I haven't talked to the neighbors.",
        o: ["以来", "以上", "以前", "以後"], a: 0,
        e: "V-て + 以来 = since (引っ越して以来)." },
      { t: "nuance", q: "〜て以来 vs 〜てから : nuance ?",
        o: ["以来 = depuis un point de départ, état durable jusqu'à présent (soutenu) ; てから = simple succession", "identical", "てから est soutenu", "以来 = avant"], a: 0,
        e: "以来 emphasizes continuity since a landmark event." },
    ],
  },

  {
    id: "g116", g: "〜というと／といえば", m: "about, when we talk about", f: "N／Phrase + というと／といえば",
    c: "express", lv: 2, rel: ["g056"],
    note: "Takes up an evoked word to develop or react by association (\"speaking of...\").",
    ex: [
      { jp: "京都というと、お寺を思い出す。", fr: "When I think of Kyoto, I think of temples." },
      { jp: "夏といえば、海だね。", fr: "Summer evokes the sea." },
    ],
    qs: [
      { t: "fill", q: "日本の料理＿＿＿、やっぱり寿司でしょう。", fr: "When it comes to Japanese cuisine, it's all about sushi.",
        o: ["というと", "について", "にとって", "に対して"], a: 0,
        e: "〜というと = \"speaking of...\" (reaction by association)." },
      { t: "meaning", q: "「先生といえば、来週来るそうだ」— rôle de といえば ?",
        o: ["bounce on the word \"teacher\" to add information", "express a cause", "set a condition", "contrast"], a: 0,
        e: "〜といえば = rebounding by association on an evoked topic." },
    ],
  },

  {
    id: "g117", g: "〜というものだ", m: "that's what it is, that's what it is", f: "V-plain／A／N + というものだ",
    c: "express", lv: 3, rel: ["g056"],
    note: "Emphatically asserts a general truth or judgment (\"that's just it, the...\").",
    ex: [
      { jp: "困ったときに助け合うのが友情というものだ。", fr: "Helping each other in times of trial, that's what friendship is all about." },
      { jp: "それは甘えというものだ。", fr: "Now that's letting go." },
    ],
    qs: [
      { t: "fill", q: "努力が報われないのも人生＿＿＿。", fr: "That efforts go unrewarded is also part of life.",
        o: ["というものだ", "というわけだ", "に違いない", "ことだ"], a: 0,
        e: "〜というものだ = emphatic assertion of a truth (人生というものだ)." },
      { t: "nuance", q: "〜というものだ vs 〜というわけだ : nuance ?",
        o: ["というものだ = définition/jugement général emphatique ; というわけだ = conclusion logique d'un raisonnement", "identical", "というわけだ = définition", "というものだ = conclusion"], a: 0,
        e: "ものだ = \"this is what...\"; わけだ = \"this is why...\"." },
    ],
  },

  {
    id: "g118", g: "〜というより", m: "rather than say, or rather", f: "V-plain／A／N + というより",
    c: "contrast", lv: 2, rel: ["g116"],
    note: "Correct a formulation with a more accurate one: \"more than X, it's rather Y\".",
    ex: [
      { jp: "彼は優しいというより、お人好しだ。", fr: "He's kind, or rather too kind." },
      { jp: "趣味というより、生きがいだ。", fr: "More than a hobby, it's a reason for living." },
    ],
    qs: [
      { t: "fill", q: "今日は涼しい＿＿＿、むしろ寒い。", fr: "Today, rather than cool, it's downright cold.",
        o: ["というより", "といっても", "どころか", "ものの"], a: 0,
        e: "〜というより = rectification (\"rather than... it's...\"), often + むしろ." },
      { t: "meaning", q: "「青というより緑だ」— sens ?",
        o: ["more than blue, it's green", "both blue and green", "neither blue nor green", "blue therefore green"], a: 0,
        e: "〜というより = choose the most exact formulation." },
    ],
  },

  {
    id: "g119", g: "〜といっても", m: "even if we say that, of course... but", f: "V-plain／A／N + といっても",
    c: "contrast", lv: 2, rel: ["g022"],
    note: "Temper a statement: what the word suggests is actually more modest.",
    ex: [
      { jp: "料理ができるといっても、卵焼きぐらいだ。", fr: "I can cook, of course, but only an omelette." },
      { jp: "近いといっても、歩いて三十分かかる。", fr: "It's close, supposedly, but it's a thirty-minute walk." },
    ],
    qs: [
      { t: "fill", q: "社長＿＿＿、社員は三人だけの小さな会社だ。", fr: "President of a small company with three employees.",
        o: ["といっても", "というと", "といえば", "どころか"], a: 0,
        e: "〜といっても = \"even if we say X, in reality...\"." },
      { t: "meaning", q: "「休みといっても、仕事の連絡が来る」— sens ?",
        o: ["it's supposed to be a day off, but work contacts me", "it's a real quiet vacation", "there is no vacation", "leave arrives after work"], a: 0,
        e: "〜といっても tempers what the word makes you expect." },
    ],
  },

  {
    id: "g120", g: "〜どおり(に)", m: "in accordance with, exactly as", f: "N + どおり(に) ／ V-dict＋とおり",
    c: "express", lv: 2, rel: [],
    note: "Pasted to a name: どおり (予定どおり, 期待どおり). The result corresponds exactly to the model.",
    ex: [
      { jp: "計画どおりに進んだ。", fr: "This went according to plan." },
      { jp: "予想どおりの結果だった。", fr: "The result was in line with expectations." },
    ],
    qs: [
      { t: "fill", q: "彼は約束＿＿＿に来てくれた。", fr: "He came as promised.",
        o: ["どおり", "ばかり", "ながら", "あげく"], a: 0,
        e: "N + どおり = in accordance with (約束どおり)." },
      { t: "meaning", q: "「思いどおりにならない」— sens ?",
        o: ["it's not going my way", "it's going as planned", "I still think the same", "about my thoughts"], a: 0,
        e: "〜どおりにならない = not turning as desired." },
    ],
  },

  {
    id: "g121", g: "〜とか", m: "it seems that; things like (vague)", f: "Phrase／N + とか",
    c: "express", lv: 2, rel: ["g116"],
    note: "(1) uncertain relationship (\"il paraît que\"); (2) vague enumeration of examples.",
    ex: [
      { jp: "彼は来月引っ越すとか。", fr: "I hear he's moving next month." },
      { jp: "果物、りんごとかみかんとかを買った。", fr: "I bought fruit, apples, tangerines, that sort of thing." },
    ],
    qs: [
      { t: "fill", q: "天気予報では、明日は雪が降る＿＿＿。", fr: "According to the weather forecast, it will snow tomorrow.",
        o: ["とか", "から", "ので", "のに"], a: 0,
        e: "〜とか (end of sentence) = uncertain relationship (\"il paraît que\")." },
      { t: "nuance", q: "〜とか (ouï-dire) est plus… que 〜そうだ :",
        o: ["uncertain/vague (information is less certain)", "formal and precise", "mandatory", "negative"], a: 0,
        e: "〜とか marks vague information, not guaranteed." },
    ],
  },

  {
    id: "g122", g: "〜ところに／〜ところへ", m: "just as (arrives...)", f: "V-ている／V-た + ところに／ところへ",
    c: "time", lv: 2, rel: ["g123"],
    note: "An event occurs right at the moment of a situation, often interrupting it.",
    ex: [
      { jp: "出かけようとしたところに、電話がかかってきた。", fr: "Just as I was about to go out, I got a phone call." },
      { jp: "困っているところへ、友達が来てくれた。", fr: "Just when I was in a fix, a friend came along." },
    ],
    qs: [
      { t: "fill", q: "寝ようとした＿＿＿、地震が起きた。", fr: "Just as I was about to go to bed, there was an earthquake.",
        o: ["ところに", "うちに", "あげく", "以来"], a: 0,
        e: "〜ところに = stack at time (寝ようとしたところに)." },
      { t: "meaning", q: "「いいところに来たね」— sens ?",
        o: ["you've come at the right time.", "you came too soon", "you're in the wrong place", "you didn't come"], a: 0,
        e: "〜ところに = precise moment (here, opportune)." },
    ],
  },

  {
    id: "g123", g: "〜ところを", m: "while (despite the situation), at the moment when", f: "V-plain／A／N＋の + ところを",
    c: "time", lv: 3, rel: ["g122"],
    note: "(1) polite phrase: \"while you're busy...\"; (2) being caught in the moment (見られる).",
    ex: [
      { jp: "お忙しいところをすみません。", fr: "Sorry to bother you while you're busy." },
      { jp: "サボっているところを先生に見つかった。", fr: "The teacher caught me hanging around." },
    ],
    qs: [
      { t: "fill", q: "お休みの＿＿＿、申し訳ありません。", fr: "I'm sorry to bother you while you're resting.",
        o: ["ところを", "うちに", "あげく", "以来"], a: 0,
        e: "〜ところを = polite formula \"whereas (you are...)\"." },
      { t: "meaning", q: "「逃げるところを捕まえた」— sens ?",
        o: ["we caught him as he was running away", "we let him get away", "he caught someone", "before it runs away"], a: 0,
        e: "〜ところを = enter at the precise moment of action." },
    ],
  },

  {
    id: "g124", g: "〜としても", m: "even if (we assume)", f: "V-plain／A／N + としても",
    c: "condition", lv: 2, rel: ["g125"],
    note: "Hypothetical concession: \"even assuming that X, Y remains true\".",
    ex: [
      { jp: "本当だとしても、信じられない。", fr: "Even if it were true, I can't believe it." },
      { jp: "行くとしても、来週になる。", fr: "Even if I go, it'll be next week." },
    ],
    qs: [
      { t: "fill", q: "失敗した＿＿＿、いい経験になる。", fr: "Even if I fail, it will be a good experience.",
        o: ["としても", "とすると", "からには", "ものの"], a: 0,
        e: "〜としても = even assuming (失敗したとしても)." },
      { t: "nuance", q: "〜としても vs 〜とすれば : différence ?",
        o: ["としても = concession (« même si ») ; とすれば = hypothèse-conséquence (« si l'on suppose, alors »)", "identical", "としても = hypothèse simple", "とすれば = concession"], a: 0,
        e: "としても (concession) ≠ とすれば (supposition → conclusion)." },
    ],
  },

  {
    id: "g125", g: "〜とすれば／〜としたら", m: "assuming that", f: "V-plain／A／N + とすれば／としたら",
    c: "condition", lv: 2, rel: ["g124"],
    note: "Pose a hypothesis to draw a logical consequence.",
    ex: [
      { jp: "宝くじが当たったとしたら、何を買う？", fr: "If you won the lottery, what would you buy?" },
      { jp: "これが事実だとすれば、大問題だ。", fr: "If it's a fact, it's a serious problem." },
    ],
    qs: [
      { t: "fill", q: "全員が反対する＿＿＿、計画は中止だ。", fr: "Assuming that everyone objects, the project will be cancelled.",
        o: ["とすれば", "としても", "といっても", "どころか"], a: 0,
        e: "〜とすれば = hypothesis → consequence (反対するとすれば)." },
      { t: "meaning", q: "「君がやらないとしたら、誰がやる？」— sens ?",
        o: ["assuming you don't, who will?", "even if you don't", "because you don't", "as soon as you do"], a: 0,
        e: "〜としたら = starting assumption of a reasoning." },
    ],
  },

  {
    id: "g126", g: "〜とは", m: "the fact that... (surprise); it means that (definition)", f: "V-plain／A／N + とは",
    c: "contrast", lv: 3, rel: ["g117"],
    note: "(1) expresses surprise/indignation at a fact; (2) introduces a definition.",
    ex: [
      { jp: "彼が裏切るとは、思わなかった。", fr: "I never thought he'd betray us." },
      { jp: "「常識」とは何かを考える。", fr: "Think about what \"common sense\" is." },
    ],
    qs: [
      { t: "fill", q: "こんなに難しい＿＿＿、想像もしなかった。", fr: "I never imagined it would be so difficult.",
        o: ["とは", "には", "では", "とも"], a: 0,
        e: "〜とは = surprise at a fact (難しいとは)." },
      { t: "meaning", q: "「合格するとは驚きだ」— sens de とは ?",
        o: ["that he succeeds, it's a surprise", "he must succeed", "he always succeeds", "about success"], a: 0,
        e: "〜とは = astonishment/emotion at a fact." },
    ],
  },

  {
    id: "g127", g: "〜ないことには", m: "unless, as long as... does not...", f: "V-ない + ことには",
    c: "condition", lv: 3, rel: ["g031"],
    note: "Essential condition: without achieving X, nothing (often negative) can follow.",
    ex: [
      { jp: "実際に見ないことには、判断できない。", fr: "Until I see it with my own eyes, I can't judge." },
      { jp: "やってみないことには、分からない。", fr: "Unless you try, you never know." },
    ],
    qs: [
      { t: "fill", q: "予約し＿＿＿、入れませんよ。", fr: "Unless you make a reservation, you can't get in.",
        o: ["ないことには", "ないうちに", "ないでは", "なくては"], a: 0,
        e: "〜ないことには + (negative) = indispensable condition (予約しないことには)." },
      { t: "meaning", q: "「お金がないことには、何もできない」— sens ?",
        o: ["as long as you don't have money, you can't do anything", "money can do anything", "even without money you can", "because of money"], a: 0,
        e: "〜ないことには = without this condition, nothing is possible." },
    ],
  },

  {
    id: "g128", g: "〜ないことはない", m: "it's not that we can't, it's not that we can't", f: "V-ない／A-くない + ことはない",
    c: "modality", lv: 3, rel: ["g051"],
    note: "Attenuated double negation: we admit a possibility with reservations (\"yes, we can, but...\").",
    ex: [
      { jp: "辛い物も食べないことはない。", fr: "It's not that I don't eat spicy food (I do a bit)." },
      { jp: "急げば間に合わないことはない。", fr: "If you hurry, it's possible to get there in time." },
    ],
    qs: [
      { t: "fill", q: "難しいが、できない＿＿＿。", fr: "It's difficult, but it's not that we can't do it.",
        o: ["ことはない", "ことだ", "ものだ", "わけだ"], a: 0,
        e: "〜ないことはない = possibility admitted with reservation (できないことはない)." },
      { t: "nuance", q: "Nuance de 〜ないことはない ?",
        o: ["cautious/reserved affirmation (\"if, a little, but...\")", "total negation", "obligation", "ban"], a: 0,
        e: "Double negation = nuanced concession." },
    ],
  },

  {
    id: "g129", g: "〜にあたって／〜にあたり", m: "on the occasion of, at the time of undertaking (formal)", f: "V-dict／N + にあたって",
    c: "particle", lv: 3, rel: ["g011"],
    note: "Formal register: at the start of an important action. Focused on the action to come.",
    ex: [
      { jp: "開会にあたって、一言ごあいさつ申し上げます。", fr: "On the occasion of the opening, allow me to say a few words." },
      { jp: "新生活を始めるにあたり、引っ越した。", fr: "When it came time to start a new life, I moved." },
    ],
    qs: [
      { t: "fill", q: "卒業する＿＿＿、お世話になった先生に感謝した。", fr: "When I graduated, I thanked my teachers.",
        o: ["にあたって", "に際して", "において", "について"], a: 0,
        e: "〜にあたって = at the time of undertaking (sth important), formal." },
      { t: "nuance", q: "〜にあたって vs 〜に際して : nuance ?",
        o: ["très proches (occasion formelle) ; にあたって est tourné vers une action qu'on va entreprendre", "opposite", "に際して = familier", "にあたって = passé"], a: 0,
        e: "Formal quasi-synonyms; にあたって accompanies an action in preparation." },
    ],
  },

  {
    id: "g130", g: "〜に応えて", m: "in response to, to meet (expectation, request)", f: "N + に応えて",
    c: "particle", lv: 2, rel: ["g007"],
    note: "Act in accordance with an expectation, a request, a support (期待, 要望, 声援).",
    ex: [
      { jp: "ファンの期待に応えて、優勝した。", fr: "Living up to fans' expectations, he won the title." },
      { jp: "要望に応えて、営業時間を延ばした。", fr: "To meet demand, we have extended opening hours." },
    ],
    qs: [
      { t: "fill", q: "観客の声援＿＿＿、選手は全力を尽くした。", fr: "Answering the cheers of the crowd, the player gave it his all.",
        o: ["に応えて", "に応じて", "に反して", "について"], a: 0,
        e: "〜に応えて = in response to an expectation/support (声援に応えて)." },
      { t: "nuance", q: "〜に応えて vs 〜に応じて : nuance ?",
        o: ["に応えて = répondre à une attente/demande ; に応じて = s'adapter à une variation/condition", "identical", "に応じて = répondre à une attente", "に応えて = variation"], a: 0,
        e: "応えて (respond to a wish) ≠ 応じて (adjust according to)." },
    ],
  },

  {
    id: "g131", g: "〜にかけては", m: "in terms of (strong point)", f: "N + にかけては",
    c: "particle", lv: 3, rel: ["g016"],
    note: "Highlights an area where someone excels: \"when it comes to X, nobody beats him\".",
    ex: [
      { jp: "料理にかけては、彼の右に出る者はいない。", fr: "When it comes to cooking, no one surpasses him." },
      { jp: "記憶力にかけては自信がある。", fr: "When it comes to memory, I'm confident." },
    ],
    qs: [
      { t: "fill", q: "速さ＿＿＿、彼がチームで一番だ。", fr: "In terms of speed, he's the best in the team.",
        o: ["にかけては", "において", "について", "に対して"], a: 0,
        e: "〜にかけては = area of excellence (速さにかけては)." },
      { t: "meaning", q: "「歌にかけては誰にも負けない」— sens ?",
        o: ["for singing, I don't lose to anyone", "I always lose at singing", "about singing", "je ne chante pas"], a: 0,
        e: "〜にかけては highlights a strong point." },
    ],
  },

  {
    id: "g132", g: "〜に加えて", m: "in addition to", f: "N + に加えて",
    c: "particle", lv: 2, rel: ["g094"],
    note: "Adds one element to another: \"to X is added Y\".",
    ex: [
      { jp: "強風に加えて、大雨も降ってきた。", fr: "The strong wind was compounded by heavy rain." },
      { jp: "実力に加えて、運も必要だ。", fr: "In addition to talent, you also need luck." },
    ],
    qs: [
      { t: "fill", q: "授業料＿＿＿、教材費もかかる。", fr: "In addition to tuition, there are material costs.",
        o: ["に加えて", "に反して", "に応じて", "について"], a: 0,
        e: "〜に加えて = in addition to (授業料に加えて)." },
      { t: "meaning", q: "「経験に加えて知識も豊富だ」— sens ?",
        o: ["in addition to experience, he also has a wealth of knowledge", "instead of experience", "contrary to experience", "because of experience"], a: 0,
        e: "〜に加えて = addition of two elements." },
    ],
  },

  {
    id: "g133", g: "〜にかわって／〜に代わり", m: "instead of, in the name of", f: "N + にかわって",
    c: "particle", lv: 2, rel: ["g042"],
    note: "(1) to replace someone/something; (2) to act on behalf of.",
    ex: [
      { jp: "社長に代わって、副社長が出席した。", fr: "Instead of the CEO, the vice-president attended." },
      { jp: "現金にかわって、電子マネーが普及した。", fr: "Instead of cash, electronic money has become widespread." },
    ],
    qs: [
      { t: "fill", q: "病気の父＿＿＿、私が店を継いだ。", fr: "In my sick father's place, I took over the store.",
        o: ["にかわって", "について", "に応じて", "に加えて"], a: 0,
        e: "〜にかわって = instead of / on behalf of (父にかわって)." },
      { t: "meaning", q: "「手紙にかわってメールが使われる」— sens ?",
        o: ["mail is used instead of post", "e-mail is added to mail", "mail replaces e-mail", "about mail"], a: 0,
        e: "〜にかわって = substitution." },
    ],
  },

  {
    id: "g134", g: "〜に比べて", m: "compared to, compared to", f: "N + に比べて／比べると",
    c: "particle", lv: 1, rel: ["g021"],
    note: "Makes a comparison between two elements.",
    ex: [
      { jp: "去年に比べて、今年は暑い。", fr: "Compared to last year, it's hot this year." },
      { jp: "都会に比べて、田舎は物価が安い。", fr: "Compared to the city, life is cheaper in the countryside." },
    ],
    qs: [
      { t: "fill", q: "兄＿＿＿、弟のほうが背が高い。", fr: "Compared to the eldest, the youngest is taller.",
        o: ["に比べて", "に応じて", "に反して", "に加えて"], a: 0,
        e: "〜に比べて = compared to (兄に比べて)." },
      { t: "meaning", q: "「以前に比べて元気になった」— sens ?",
        o: ["compared to before, he's doing better", "as before", "unlike before, only worse", "because of before"], a: 0,
        e: "〜に比べて = comparison." },
    ],
  },

  {
    id: "g135", g: "〜にしては", m: "for (contrary to expectations)", f: "V-plain／N + にしては",
    c: "contrast", lv: 2, rel: ["g018"],
    note: "The result is not what the criterion would suggest (\"for an X, it's surprisingly...\").",
    ex: [
      { jp: "初めてにしては、上手だ。", fr: "For a first time, it's well done." },
      { jp: "子供が描いたにしては、すごい絵だ。", fr: "For a child's drawing, it's impressive." },
    ],
    qs: [
      { t: "fill", q: "冬＿＿＿、暖かい日だ。", fr: "For a winter's day, it's mild.",
        o: ["にしては", "として", "にとって", "について"], a: 0,
        e: "〜にしては = contrary to criterion-related expectation (冬にしては)." },
      { t: "nuance", q: "〜にしては vs 〜割に : nuance ?",
        o: ["sens proche (décalage avec l'attente) ; にしては part d'un critère/standard précis", "opposite", "割に = standard précis", "にしては = pas de décalage"], a: 0,
        e: "Both mark a shift; にしては relies on a named standard." },
    ],
  },

  {
    id: "g136", g: "〜にしろ／〜にせよ", m: "whatever... or, even if", f: "V-plain／A／N + にしろ／にせよ",
    c: "contrast", lv: 3, rel: ["g002"],
    note: "Formal, often-repeated concession (Xにしろ Yにしろ = whether X or Y).",
    ex: [
      { jp: "行くにせよ行かないにせよ、連絡してください。", fr: "Whether you go or not, let me know." },
      { jp: "冗談にしろ、言ってはいけない。", fr: "Even if it's a joke, don't say it." },
    ],
    qs: [
      { t: "fill", q: "賛成する＿＿＿反対する＿＿＿、理由を述べてください。", fr: "Whether you're for or against, give your reasons.",
        o: ["にせよ…にせよ", "ばかり…ばかり", "から…から", "ので…ので"], a: 0,
        e: "〜にせよ〜にせよ = \"whether... or...\" (formal)." },
      { t: "nuance", q: "〜にしろ／にせよ équivaut à :",
        o: ["〜にしても (concession formelle)", "〜から (cause)", "〜ために (but)", "〜ながら (simultanéité)"], a: 0,
        e: "にしろ/にせよ = written variants of にしても." },
    ],
  },

  {
    id: "g137", g: "〜に相違ない", m: "there is no doubt that (formal)", f: "V-plain／A／N + に相違ない",
    c: "modality", lv: 3, rel: ["g043"],
    note: "Written and supported equivalent of に違いない: strong conviction.",
    ex: [
      { jp: "犯人はこの男に相違ない。", fr: "The culprit is undoubtedly this man." },
      { jp: "彼の話は本当に相違ない。", fr: "His story is undoubtedly true." },
    ],
    qs: [
      { t: "fill", q: "これは彼の筆跡＿＿＿。", fr: "It's definitely his writing.",
        o: ["に相違ない", "に過ぎない", "に限る", "にすぎず"], a: 0,
        e: "〜に相違ない = strong conviction (formal): 筆跡に相違ない." },
      { t: "nuance", q: "〜に相違ない vs 〜に違いない : nuance ?",
        o: ["même sens ; に相違ない est plus écrit/formel", "opposite", "に違いない est formel", "に相違ない exprime un doute"], a: 0,
        e: "相違ない = sustained register of 違いない." },
    ],
  },

  {
    id: "g138", g: "〜につき", m: "by (unit); because of; concerning", f: "N + につき",
    c: "particle", lv: 2, rel: ["g034"],
    note: "Three uses: (1) \"by\" (一人につき); (2) formal cause (\"because of\"); (3) \"about\".",
    ex: [
      { jp: "一人につき二枚まで。", fr: "Maximum two tickets per person." },
      { jp: "工事中につき、通行止めです。", fr: "Due to construction work, traffic is prohibited." },
    ],
    qs: [
      { t: "fill", q: "本日は祝日＿＿＿、休業いたします。", fr: "Due to the public holiday, we are closed today.",
        o: ["につき", "について", "にとって", "に応じて"], a: 0,
        e: "〜につき (formal cause) = because of (祝日につき)." },
      { t: "meaning", q: "「一個につき百円」— sens ?",
        o: ["hundred yen per piece", "hundred yen in all", "cent yens about the piece", "less than one hundred yen"], a: 0,
        e: "〜につき (use \"by\") = per unit." },
    ],
  },

  {
    id: "g139", g: "〜につけ(て)", m: "every time, every", f: "V-dict + につけ(て) ／ 何かにつけ",
    c: "express", lv: 3, rel: ["g025"],
    note: "A stimulus always leads to a spontaneous feeling/thought (見るにつけ, 何かにつけ).",
    ex: [
      { jp: "この歌を聞くにつけ、故郷を思い出す。", fr: "Every time I hear this song, I think of my country." },
      { jp: "何かにつけて文句を言う。", fr: "At the slightest opportunity, he complains." },
    ],
    qs: [
      { t: "fill", q: "彼の成功を見る＿＿＿、自分の努力不足を感じる。", fr: "Every time I see his success, I feel my lack of effort.",
        o: ["につけ", "につき", "にして", "において"], a: 0,
        e: "〜につけ = whenever (見るにつけ), spontaneous reaction." },
      { t: "meaning", q: "「何かにつけ世話になる」— sens ?",
        o: ["help at every opportunity", "never to be helped", "help someone", "ABOUT HELP"], a: 0,
        e: "何かにつけ = \"on any occasion / about anything\"." },
    ],
  },

  {
    id: "g140", g: "〜によらず", m: "independently of, but not limited to", f: "N + によらず",
    c: "particle", lv: 3, rel: ["g002"],
    note: "The result does not depend on the criterion cited (年齢によらず = regardless of age).",
    ex: [
      { jp: "年齢によらず、誰でも応募できる。", fr: "Regardless of age, anyone can apply." },
      { jp: "見かけによらず、力が強い。", fr: "Contrary to his appearance, he's very strong." },
    ],
    qs: [
      { t: "fill", q: "国籍＿＿＿、実力で評価する。", fr: "Regardless of nationality, we assess competence.",
        o: ["によらず", "によって", "に応じて", "に加えて"], a: 0,
        e: "〜によらず = independently of (国籍によらず)." },
      { t: "meaning", q: "「人は見かけによらない」— sens ?",
        o: ["you can't judge people by the way they look", "people conform to their appearance", "about appearance", "through appearance"], a: 0,
        e: "〜によらない = does not depend on / does not correspond to." },
    ],
  },

  {
    id: "g141", g: "〜のもとで／〜のもとに", m: "under (the direction, condition of)", f: "N + のもとで／のもとに",
    c: "particle", lv: 3, rel: ["g010"],
    note: "Under the influence, direction or condition of something/someone.",
    ex: [
      { jp: "先生の指導のもとで研究を続けた。", fr: "I continued my research under the guidance of Professor." },
      { jp: "法のもとに、人は平等だ。", fr: "All men are equal before the law." },
    ],
    qs: [
      { t: "fill", q: "親の保護＿＿＿、子供は育つ。", fr: "Children grow up under the protection of their parents.",
        o: ["のもとで", "について", "に応じて", "をめぐって"], a: 0,
        e: "〜のもとで = under (the protection/direction of): 保護のもとで." },
      { t: "meaning", q: "「厳しい規則のもとで働く」— sens ?",
        o: ["working under strict rules", "working without rules", "create rules", "about the rules"], a: 0,
        e: "〜のもとで = under the authority/condition of." },
    ],
  },

  {
    id: "g142", g: "〜ばかりに", m: "only because (unfortunate consequence)", f: "V-plain／A／N＋である + ばかりに",
    c: "condition", lv: 3, rel: ["g034"],
    note: "A single cause leads to an unfortunate result: \"it's only because X that (unfortunately) Y\".",
    ex: [
      { jp: "うそをついたばかりに、信用を失った。", fr: "It's only by lying that I've lost trust." },
      { jp: "お金がないばかりに、進学をあきらめた。", fr: "It's only for lack of money that I gave up my studies." },
    ],
    qs: [
      { t: "fill", q: "一言多かった＿＿＿、けんかになった。", fr: "It was just one word too many that got us into an argument.",
        o: ["ばかりに", "からこそ", "おかげで", "だけに"], a: 0,
        e: "〜ばかりに = single cause of an unfortunate outcome (多かったばかりに)." },
      { t: "nuance", q: "〜ばかりに vs 〜せいで : nuance ?",
        o: ["ばかりに insiste sur une cause unique aux conséquences regrettables ; せいで = simple cause négative", "identical", "ばかりに = résultat positif", "せいで = cause unique"], a: 0,
        e: "ばかりに underlines \"just for that\" → misfortune." },
    ],
  },

  {
    id: "g143", g: "〜はもちろん", m: "not to mention", f: "N + はもちろん（〜も）",
    c: "express", lv: 2, rel: ["g074"],
    note: "X is self-evident, and so is Y: \"not only X (self-evident), but also Y\".",
    ex: [
      { jp: "漢字はもちろん、ひらがなも書けない。", fr: "Not to mention kanji, he can't even write hiragana." },
      { jp: "国内はもちろん、海外でも有名だ。", fr: "Famous at home, not to mention abroad." },
    ],
    qs: [
      { t: "fill", q: "週末＿＿＿、平日も忙しい。", fr: "Not to mention weekends, even during the week I'm busy.",
        o: ["はもちろん", "どころか", "に反して", "に応じて"], a: 0,
        e: "〜はもちろん...も = \"not only (obviously)... but also\"." },
      { t: "meaning", q: "「子供はもちろん、大人も楽しめる」— sens ?",
        o: ["children, of course, but also adults can have fun", "only children have fun", "neither children nor adults", "adults versus children"], a: 0,
        e: "〜はもちろん = X (obvious) + Y (in addition)." },
    ],
  },

  {
    id: "g144", g: "〜はともかく", m: "let's leave aside, whatever the case may be", f: "N + はともかく(として)",
    c: "express", lv: 3, rel: ["g143"],
    note: "X is put aside to focus on Y, which is considered more important.",
    ex: [
      { jp: "値段はともかく、デザインがいい。", fr: "Price aside, the design is beautiful." },
      { jp: "勝ち負けはともかく、楽しもう。", fr: "Victory or defeat aside, let's have some fun." },
    ],
    qs: [
      { t: "fill", q: "結果＿＿＿、よく頑張った。", fr: "Whatever the result, you put up a good fight.",
        o: ["はともかく", "はもちろん", "に加えて", "どころか"], a: 0,
        e: "〜はともかく = set X aside (結果はともかく)." },
      { t: "meaning", q: "「冗談はともかく、本題に入ろう」— sens ?",
        o: ["Joking aside, let's get to the heart of the matter", "let's keep the jokes going", "because of the jokes", "thanks to jokes"], a: 0,
        e: "〜はともかく = \"let's leave X out\"." },
    ],
  },

  {
    id: "g145", g: "〜反面", m: "on the other hand", f: "V-plain／A／N＋である + 反面",
    c: "contrast", lv: 2, rel: ["g021", "g094"],
    note: "Presents two opposite aspects of the same thing.",
    ex: [
      { jp: "この仕事は給料がいい反面、忙しい。", fr: "The work is well-paid, but demanding." },
      { jp: "便利な反面、危険もある。", fr: "It's convenient, but also dangerous." },
    ],
    qs: [
      { t: "fill", q: "都会は刺激が多い＿＿＿、ストレスもたまる。", fr: "The city is stimulating, but also stressful.",
        o: ["反面", "上に", "だけに", "あげく"], a: 0,
        e: "〜反面 = opposite aspect (多い反面)." },
      { t: "nuance", q: "〜反面 vs 〜上に : différence ?",
        o: ["反面 oppose deux aspects ; 上に additionne deux aspects de même sens", "identical", "反面 = addition", "上に = opposition"], a: 0,
        e: "反面 (contrast) ≠ 上に (addition)." },
    ],
  },

  {
    id: "g146", g: "〜べく", m: "in order to, in order to (formal)", f: "V-dict + べく（する→すべく）",
    c: "express", lv: 3, rel: ["g041"],
    note: "Written/literary register to express a purpose. する becomes すべく.",
    ex: [
      { jp: "真相を究明すべく、調査を始めた。", fr: "To find out the truth, we launched an investigation." },
      { jp: "夢を実現すべく、努力している。", fr: "To make my dream come true, I make an effort." },
    ],
    qs: [
      { t: "fill", q: "試合に勝つ＿＿＿、毎日厳しい練習をした。", fr: "To win the match, I trained hard every day.",
        o: ["べく", "ように", "ために", "うえで"], a: 0,
        e: "V-dict + べく = in order to (勝つべく), sustained register." },
      { t: "usage", q: "Forme en べく de する ?",
        o: ["すべく", "しべく", "するべく も可", "せべく"], a: 0,
        e: "する → すべく (classic form); するべく also exists." },
    ],
  },

  {
    id: "g147", g: "〜まい", m: "probably won't; I'll never (negative will)", f: "V-dict + まい（する→するまい／すまい）",
    c: "modality", lv: 3, rel: ["g097"],
    note: "(1) negative supposition (\"it probably won't...\"); (2) firm negative will (\"I won't... ever again\").",
    ex: [
      { jp: "あの店はもう二度と行くまい。", fr: "I'll never set foot in that store again." },
      { jp: "彼はもう来まい。", fr: "He probably won't come again." },
    ],
    qs: [
      { t: "fill", q: "二度と同じ失敗はする＿＿＿と心に誓った。", fr: "I vowed never to make the same mistake again.",
        o: ["まい", "べき", "そう", "らしい"], a: 0,
        e: "V-dict + まい = firm negative will (するまい)." },
      { t: "meaning", q: "「雨は降るまい」— sens ?",
        o: ["it probably won't rain", "it's bound to rain", "it has to rain", "it's still raining"], a: 0,
        e: "〜まい = negative assumption (\"probably not\")." },
    ],
  },

  {
    id: "g148", g: "〜向き", m: "adapted to, oriented towards / suitable for", f: "N + 向き",
    c: "express", lv: 2, rel: ["g149"],
    note: "Indicates what naturally suits a category, or orientation (南向き = south-facing).",
    ex: [
      { jp: "この本は初心者向きだ。", fr: "This book is suitable for beginners." },
      { jp: "南向きの部屋は明るい。", fr: "A south-facing room is bright." },
    ],
    qs: [
      { t: "fill", q: "この料理は子供＿＿＿で、辛くない。", fr: "This dish is suitable for children, and is not spicy.",
        o: ["向き", "向け", "ながら", "だらけ"], a: 0,
        e: "〜向き = naturally suited to (子供向き)." },
      { t: "nuance", q: "〜向き vs 〜向け : nuance ?",
        o: ["向き = qui convient/est adapté (spontanément) ; 向け = conçu spécialement pour (intention)", "identical", "向き = conçu pour", "向け = exposition"], a: 0,
        e: "向き (natural fit) ≠ 向け (intended destination)." },
    ],
  },

  {
    id: "g149", g: "〜向け", m: "intended for, designed to", f: "N + 向け",
    c: "express", lv: 2, rel: ["g148"],
    note: "Something is made/designed specifically for a target.",
    ex: [
      { jp: "これは輸出向けの製品だ。", fr: "It's an export product." },
      { jp: "子供向けの番組を作る。", fr: "Produce a program for children." },
    ],
    qs: [
      { t: "fill", q: "初心者＿＿＿の教材を開発した。", fr: "We have developed a support system for beginners.",
        o: ["向け", "向き", "だらけ", "ながら"], a: 0,
        e: "〜向け = specially designed for (初心者向け)." },
      { t: "meaning", q: "「海外向けに作られた」— sens ?",
        o: ["manufactured for foreign markets", "accidentally made abroad", "that's right by nature", "from abroad"], a: 0,
        e: "〜向け = intentional production for a target." },
    ],
  },

  {
    id: "g150", g: "〜も〜ば〜も", m: "and... and / not only... but also", f: "N + も + V-ば／A-ければ + N + も",
    c: "express", lv: 3, rel: ["g074"],
    note: "Lists two coexisting elements (often to support an overall assessment).",
    ex: [
      { jp: "彼は頭もよければ、性格もいい。", fr: "He's not only intelligent, but also good-natured." },
      { jp: "お金もなければ、暇もない。", fr: "I have no money and no time." },
    ],
    qs: [
      { t: "fill", q: "この町は交通も便利なら、自然＿＿＿豊かだ。", fr: "The city has convenient transport links and, what's more, a rich natural environment.",
        o: ["も", "しか", "だけ", "より"], a: 0,
        e: "〜も〜ば〜も = enumeration (便利なら...自然も豊かだ)." },
      { t: "meaning", q: "「雨も降れば風も吹く」— sens ?",
        o: ["it's raining and windy", "either it's raining or it's windy", "neither rain nor wind", "it rains so it sells"], a: 0,
        e: "〜も〜ば〜も = coexistence of two elements." },
    ],
  },

  {
    id: "g151", g: "〜ものか", m: "never in your life! (rhetorical negation)", f: "V-plain／A + ものか（もんか familier）",
    c: "modality", lv: 3, rel: ["g050"],
    note: "Rhetorical question expressing a categorical, emotional refusal/denial.",
    ex: [
      { jp: "あんな店、二度と行くものか。", fr: "This store? I'll never go back!" },
      { jp: "彼に負けるものか。", fr: "I'm not going to lose to him!" },
    ],
    qs: [
      { t: "fill", q: "こんな失敗、二度とする＿＿＿。", fr: "I'll never make that mistake again!",
        o: ["ものか", "ことか", "ものを", "ばかり"], a: 0,
        e: "〜ものか = categorical rhetorical negation (するものか)." },
      { t: "meaning", q: "「泣くものか」— sens ?",
        o: ["I'll never cry! (determined refusal)", "I'm going to cry", "I often cry", "why cry?"], a: 0,
        e: "〜ものか = \"it's out of the question that...\"." },
    ],
  },

  {
    id: "g152", g: "〜ものがある", m: "there's something, you feel a certain...", f: "V-dict／A + ものがある",
    c: "modality", lv: 3, rel: ["g053"],
    note: "Expresses a strong impression felt by the speaker in front of something.",
    ex: [
      { jp: "彼の演奏には心を打つものがある。", fr: "There's something touching about his performance." },
      { jp: "その言葉には考えさせるものがある。", fr: "There's something sobering about these words." },
    ],
    qs: [
      { t: "fill", q: "彼女の努力には、目を見張る＿＿＿。", fr: "There's something amazing about his efforts.",
        o: ["ものがある", "ことがある", "わけがある", "はずがある"], a: 0,
        e: "〜ものがある = strong impression felt (見張るものがある)." },
      { t: "meaning", q: "「彼の決意には固いものがある」— sens ?",
        o: ["his determination is solid (felt)", "its determination is wrong", "it has no determination", "about determination"], a: 0,
        e: "〜ものがある = \"there's a certain... (we feel)\"." },
    ],
  },

  {
    id: "g153", g: "〜やら〜やら", m: "between... and... (jumble, confusion)", f: "N／V-plain + やら + N／V-plain + やら",
    c: "express", lv: 3, rel: [],
    note: "Lists items out of order, often to express an overflow of things/emotions.",
    ex: [
      { jp: "うれしいやら恥ずかしいやら、複雑な気分だ。", fr: "Between joy and embarrassment, I had mixed feelings." },
      { jp: "掃除やら洗濯やらで、忙しい。", fr: "Between cleaning, laundry and everything else, I'm swamped." },
    ],
    qs: [
      { t: "fill", q: "泣く＿＿＿笑う＿＿＿、大変な一日だった。", fr: "Between tears and laughter, it was an eventful day.",
        o: ["やら…やら", "ば…ば", "ても…ても", "から…から"], a: 0,
        e: "〜やら〜やら = jumbled enumeration (泣くやら笑うやら)." },
      { t: "meaning", q: "「何やらかんやら」— nuance ?",
        o: ["this, that, and a whole lot more (vague)", "nothing at all", "one thing in particular", "exactly two things"], a: 0,
        e: "〜やら〜やら expresses a fuzzy, abundant whole." },
    ],
  },

  {
    id: "g154", g: "〜ゆえ(に)", m: "therefore, because of (literary)", f: "V-plain／A／N（＋である／の）+ ゆえ(に)",
    c: "condition", lv: 3, rel: ["g035"],
    note: "Cause/consequence in literary and sustained register (\"du fait de\").",
    ex: [
      { jp: "経験が浅いゆえの失敗だ。", fr: "It's a mistake due to lack of experience." },
      { jp: "貧しさゆえに、進学を諦めた。", fr: "Because of poverty, he gave up his studies." },
    ],
    qs: [
      { t: "fill", q: "若さ＿＿＿の過ちもある。", fr: "There are also mistakes due to youth.",
        o: ["ゆえ", "ばかり", "どころか", "ながら"], a: 0,
        e: "〜ゆえ = literary cause (若さゆえ)." },
      { t: "nuance", q: "〜ゆえに équivaut, en plus soutenu, à :",
        o: ["〜から／ので (cause)", "〜ても (concession)", "〜ように (but)", "〜たり (énumération)"], a: 0,
        e: "ゆえに = \"consequently / because of\", literary register." },
    ],
  },

  {
    id: "g155", g: "〜をきっかけに", m: "on the occasion of, which triggered", f: "N／V-た＋の + をきっかけに(して)",
    c: "particle", lv: 2, rel: ["g156"],
    note: "An event triggers a change.",
    ex: [
      { jp: "入院をきっかけに、たばこをやめた。", fr: "My hospitalization was an opportunity to quit smoking." },
      { jp: "彼との出会いをきっかけに、人生が変わった。", fr: "Meeting him changed my life." },
    ],
    qs: [
      { t: "fill", q: "留学＿＿＿、語学に興味を持った。", fr: "My study trip triggered my interest in languages.",
        o: ["をきっかけに", "について", "に応じて", "に反して"], a: 0,
        e: "〜をきっかけに = triggering element (留学をきっかけに)." },
      { t: "meaning", q: "「事故をきっかけに安全対策を見直した」— sens ?",
        o: ["the accident was an opportunity to review safety", "despite the accident", "about the accident", "before the accident"], a: 0,
        e: "〜をきっかけに = \"what triggered...\"." },
    ],
  },

  {
    id: "g156", g: "〜を契機に", m: "taking the opportunity to (formal)", f: "N／V-た＋の + を契機に(して)",
    c: "particle", lv: 3, rel: ["g155"],
    note: "Formal equivalent of をきっかけに: an event marks a turning point.",
    ex: [
      { jp: "定年を契機に、田舎へ移住した。", fr: "When he retired, he moved to the countryside." },
      { jp: "この事件を契機に、法律が改正された。", fr: "This incident was an opportunity to reform the law." },
    ],
    qs: [
      { t: "fill", q: "オリンピック＿＿＿、町が整備された。", fr: "The Olympic Games were an opportunity to develop the city.",
        o: ["を契機に", "を込めて", "を問わず", "をはじめ"], a: 0,
        e: "〜を契機に = formal turn (オリンピックを契機に)." },
      { t: "nuance", q: "〜を契機に vs 〜をきっかけに : nuance ?",
        o: ["même sens ; を契機に est plus formel/écrit", "opposite", "をきっかけに est formel", "を契機に = familier"], a: 0,
        e: "契機 = sustained register of きっかけ." },
    ],
  },

  {
    id: "g157", g: "〜を中心に", m: "focused on, around, mainly", f: "N + を中心に(して)／を中心として",
    c: "particle", lv: 2, rel: [],
    note: "X is the center/focal point around which the action is organized.",
    ex: [
      { jp: "若者を中心に、人気が広がった。", fr: "Popularity has spread, especially among young people." },
      { jp: "駅を中心に町が発展した。", fr: "The town grew up around the station." },
    ],
    qs: [
      { t: "fill", q: "リーダー＿＿＿、チームがまとまった。", fr: "The team rallied around the leader.",
        o: ["を中心に", "について", "に反して", "をよそに"], a: 0,
        e: "〜を中心に = centered on (リーダーを中心に)." },
      { t: "meaning", q: "「環境問題を中心に議論した」— sens ?",
        o: ["we mainly discussed environmental issues", "we avoided the environment", "because of the environment", "despite the environment"], a: 0,
        e: "〜を中心に = \"focusing on\"." },
    ],
  },

  {
    id: "g158", g: "〜をめぐって", m: "concerning, around (debate, conflict)", f: "N + をめぐって／をめぐる＋N",
    c: "particle", lv: 3, rel: ["g157"],
    note: "A controversial subject with many opposing views.",
    ex: [
      { jp: "遺産をめぐって、争いが起きた。", fr: "A dispute broke out over inheritance." },
      { jp: "ダム建設をめぐる議論が続いている。", fr: "The debate on dam construction continues." },
    ],
    qs: [
      { t: "fill", q: "新しい法律＿＿＿、賛否が分かれている。", fr: "Opinions on the new law are divided.",
        o: ["をめぐって", "を込めて", "をはじめ", "をよそに"], a: 0,
        e: "〜をめぐって = around a controversial topic (法律をめぐって)." },
      { t: "nuance", q: "〜をめぐって vs 〜について : nuance ?",
        o: ["をめぐって implique plusieurs parties qui s'opposent/débattent ; について = simple thème", "identical", "について = conflit", "をめぐって = thème neutre"], a: 0,
        e: "をめぐって = theme of discord/debate between several camps." },
    ],
  },

  {
    id: "g159", g: "〜をもって", m: "by, through; from (formal)", f: "N + をもって",
    c: "particle", lv: 3, rel: ["g003"],
    note: "Formal register: (1) means (\"by, thanks to\"); (2) time limit (\"from / to the date of\").",
    ex: [
      { jp: "本日をもって閉店いたします。", fr: "We are permanently closed as of today." },
      { jp: "全力をもって取り組む。", fr: "Dedicate yourself to it with all your might." },
    ],
    qs: [
      { t: "fill", q: "これ＿＿＿、説明会を終わります。", fr: "With that, we close the briefing.",
        o: ["をもって", "について", "に応じて", "をよそに"], a: 0,
        e: "〜をもって (time) = from / on this (これをもって)." },
      { t: "meaning", q: "「誠意をもって対応する」— sens ?",
        o: ["answer with sincerity (by means of sincerity)", "insincere", "about sincerity", "despite sincerity"], a: 0,
        e: "〜をもって (means) = \"with / by means of\"." },
    ],
  },

  {
    id: "g160", g: "〜抜きで／〜抜きに", m: "without, omitting", f: "N + 抜きで／抜きに(して)",
    c: "express", lv: 2, rel: ["g161"],
    note: "Doing something without the usual element.",
    ex: [
      { jp: "朝食抜きで出かけた。", fr: "I went out without breakfast." },
      { jp: "冗談抜きで、真剣な話だ。", fr: "All kidding aside, this is serious." },
    ],
    qs: [
      { t: "fill", q: "わさび＿＿＿で寿司を注文した。", fr: "I ordered the sushi without wasabi.",
        o: ["抜き", "込め", "ばかり", "だらけ"], a: 0,
        e: "〜抜きで = without (omitting): わさび抜きで." },
      { t: "meaning", q: "「形式抜きで話そう」— sens ?",
        o: ["let's talk without fuss (without formalities)", "speak with formality", "about formalities", "thanks to formalities"], a: 0,
        e: "〜抜きで = doing without." },
    ],
  },

  {
    id: "g161", g: "〜ぬきには", m: "without... (impossible)", f: "N + ぬきには／なしには",
    c: "express", lv: 3, rel: ["g160"],
    note: "Without this element, something cannot be done (followed by impossibility).",
    ex: [
      { jp: "彼の協力ぬきには、成功しなかっただろう。", fr: "Without his cooperation, we wouldn't have succeeded." },
      { jp: "努力ぬきには成功はない。", fr: "No success without effort." },
    ],
    qs: [
      { t: "fill", q: "彼の存在＿＿＿、このチームは語れない。", fr: "Without him, we can't talk about this team.",
        o: ["ぬきには", "込めては", "ばかりに", "どころか"], a: 0,
        e: "〜ぬきには + (impossibility) = without X, impossible (存在ぬきには)." },
      { t: "nuance", q: "〜ぬきには vs 〜抜きで : nuance ?",
        o: ["ぬきには = sans X c'est impossible (suivi de négation) ; 抜きで = sans X (simple omission)", "identical", "抜きで = impossibilité", "ぬきには = omission simple"], a: 0,
        e: "ぬきには emphasizes impossibility; 抜きで = simple \"without\"." },
    ],
  },

  {
    id: "g162", g: "〜ばかりだ", m: "get worse, go further and further towards", f: "V-dict + ばかりだ",
    c: "modality", lv: 3, rel: ["g072"],
    note: "A one-sided, continuous and often negative evolution (\"it only does...\").",
    ex: [
      { jp: "病状は悪くなるばかりだ。", fr: "His condition is getting worse." },
      { jp: "物価は上がるばかりだ。", fr: "Prices just keep going up." },
    ],
    qs: [
      { t: "fill", q: "練習しないと、下手になる＿＿＿。", fr: "Without training, you only regress.",
        o: ["ばかりだ", "ものだ", "ことだ", "わけだ"], a: 0,
        e: "V-dict + ばかりだ = one-sided evolution (なるばかりだ)." },
      { t: "nuance", q: "〜ばかりだ (évolution) se distingue de 〜てばかり (excès) car :",
        o: ["ばかりだ = tendance qui ne fait que progresser dans un sens ; てばかり = ne faire que (répétition)", "identical", "ばかりだ = répétition", "てばかり = évolution"], a: 0,
        e: "V-dict + ばかりだ = continuous unidirectional change." },
    ],
  },

  {
    id: "g163", g: "〜ずじまい", m: "finish without (being able to) do", f: "V-ない radical + ずじまい（する→せずじまい）",
    c: "time", lv: 3, rel: ["g090"],
    note: "In the end, one intention was never realized, with a tinge of regret.",
    ex: [
      { jp: "結局、彼には会えずじまいだった。", fr: "In the end, I didn't get to see it." },
      { jp: "本を借りたが、読まずじまいだった。", fr: "I borrowed the book, but never read it." },
    ],
    qs: [
      { t: "fill", q: "忙しくて、旅行は行か＿＿＿だった。", fr: "Too busy, I didn't go on the trip after all.",
        o: ["ずじまい", "ないまま", "ながら", "きり"], a: 0,
        e: "〜ずじまい = never to have done (regret): 行かずじまい." },
      { t: "meaning", q: "「お礼を言えずじまいだった」— sens ?",
        o: ["in the end I couldn't say thank you (regret)", "I said thank you", "I must say thank you", "I always say thank you"], a: 0,
        e: "〜ずじまい = intention not realized, with regret." },
    ],
  },

  {
    id: "g164", g: "〜ことなしに", m: "without (do), unless", f: "V-dict + ことなしに",
    c: "express", lv: 3, rel: ["g062"],
    note: "Sustained register: \"without realizing X\" (often followed by impossibility). Close to ことなく.",
    ex: [
      { jp: "努力することなしに、成功は得られない。", fr: "Without effort, success is impossible." },
      { jp: "人を傷つけることなしに、真実を伝えたい。", fr: "I want to tell the truth without hurting anyone." },
    ],
    qs: [
      { t: "fill", q: "誰の助けも借りる＿＿＿、やり遂げた。", fr: "With no help from anyone, he completed the task.",
        o: ["ことなしに", "ことにして", "ばかりに", "どころか"], a: 0,
        e: "〜ことなしに = without doing (借りることなしに), sustained register." },
      { t: "nuance", q: "〜ことなしに vs 〜ことなく : nuance ?",
        o: ["sens très proche ; ことなしに est souvent suivi d'une impossibilité/condition", "opposite", "ことなく = impossibilité", "ことなしに = familier"], a: 0,
        e: "Supported quasi-synonyms for \"without (doing)\"." },
    ],
  },

  {
    id: "g165", g: "〜とあって", m: "given (special situation)", f: "V-plain／A／N + とあって",
    c: "condition", lv: 3, rel: ["g035"],
    note: "A particular situation naturally justifies a consequence (written, often journalistic register).",
    ex: [
      { jp: "連休とあって、観光地は混雑している。", fr: "Given the bridge, the tourist sites are crowded." },
      { jp: "有名歌手が来るとあって、会場は満員だ。", fr: "As a famous singer comes, the room is packed." },
    ],
    qs: [
      { t: "fill", q: "優勝がかかった試合＿＿＿、観客が殺到した。", fr: "As this was a decisive match for the title, spectators flocked to the venue.",
        o: ["とあって", "ところで", "といっても", "ながら"], a: 0,
        e: "〜とあって = special situation → natural consequence (試合とあって)." },
      { t: "meaning", q: "「初公開とあって、行列ができた」— sens ?",
        o: ["as this was the first presentation, a line formed", "although this is the first time", "about the first time", "without a first time"], a: 0,
        e: "〜とあって = \"given that / étant donné que\"." },
    ],
  },

  {
    id: "g166", g: "〜とあれば", m: "if it's for, if it's for", f: "V-plain／A／N + とあれば",
    c: "condition", lv: 3, rel: ["g165"],
    note: "If a special condition is met, we're ready to do something (often a sacrifice).",
    ex: [
      { jp: "子供のためとあれば、何でもする。", fr: "If it's for my children, I'll do anything." },
      { jp: "必要とあれば、すぐ行きます。", fr: "If it's necessary, I'll go right away." },
    ],
    qs: [
      { t: "fill", q: "君の頼み＿＿＿、断れない。", fr: "If you ask, I can't refuse.",
        o: ["とあれば", "とあって", "どころか", "ながら"], a: 0,
        e: "〜とあれば = \"if it is for / if such is the case\" (頼みとあれば)." },
      { t: "nuance", q: "〜とあれば vs 〜とあって : différence ?",
        o: ["とあれば = hypothèse (« si c'est le cas ») ; とあって = fait établi (« étant donné que »)", "identical", "とあって = hypothèse", "とあれば = fait établi"], a: 0,
        e: "あれば (hypothetical) ≠ あって (factual)." },
    ],
  },

  {
    id: "g167", g: "〜たりとも", m: "not even one", f: "一＋compteur + たりとも（＋négation）",
    c: "express", lv: 3, rel: ["g067"],
    note: "Sustained register: denies the existence of even a single unit (一日たりとも = not even a day).",
    ex: [
      { jp: "一日たりとも忘れたことはない。", fr: "I haven't forgotten it for a single day." },
      { jp: "一円たりとも無駄にできない。", fr: "We can't waste a single yen." },
    ],
    qs: [
      { t: "fill", q: "一瞬＿＿＿油断はできない。", fr: "You can't relax for even a moment.",
        o: ["たりとも", "ばかり", "どころか", "なり"], a: 0,
        e: "一＋counter + たりとも + negation = not even one (一瞬たりとも)." },
      { t: "meaning", q: "「一人たりとも逃さない」— sens ?",
        o: ["let not even one person escape", "let everyone go", "about a person", "one person is enough"], a: 0,
        e: "〜たりとも = emphasis \"not even a single one\"." },
    ],
  },

  {
    id: "g168", g: "〜であれ／〜であろうと", m: "whatever, even if it's", f: "（疑問詞＋）N + であれ",
    c: "contrast", lv: 3, rel: ["g136"],
    note: "Formal concession: \"whatever X is / even if it is X\". Often with an interrogative word.",
    ex: [
      { jp: "どんな理由であれ、暴力は許されない。", fr: "Whatever the reason, violence is unacceptable." },
      { jp: "たとえ子供であれ、責任はある。", fr: "Even if it's a child, there's a responsibility." },
    ],
    qs: [
      { t: "fill", q: "結果がどう＿＿＿、全力を尽くす。", fr: "Whatever the result, I'll give it my all.",
        o: ["であれ", "として", "について", "ながら"], a: 0,
        e: "疑問詞 + であれ = \"whatever\" (どうであれ)." },
      { t: "meaning", q: "「誰であれ、ルールは守るべきだ」— sens ?",
        o: ["whoever you are, you have to respect the rules", "no one respects the rules", "about the rules", "thanks to the rules"], a: 0,
        e: "〜であれ = \"whatever\" concession." },
    ],
  },

  {
    id: "g169", g: "〜てでも", m: "even at the cost of", f: "V-て + でも",
    c: "condition", lv: 3, rel: ["g040"],
    note: "We're prepared to use extreme means to achieve a goal.",
    ex: [
      { jp: "借金してでも、留学したい。", fr: "Even if it means going into debt, I want to study abroad." },
      { jp: "徹夜してでも、終わらせる。", fr: "Even if I pull an all-nighter, I'll finish." },
    ],
    qs: [
      { t: "fill", q: "どんな手段を使っ＿＿＿、彼を助ける。", fr: "Whatever it takes, I'll help him.",
        o: ["てでも", "たので", "たから", "ながら"], a: 0,
        e: "〜てでも = even (extreme middle): 使ってでも." },
      { t: "meaning", q: "「無理してでもやり遂げる」— sens ?",
        o: ["even if it means forcing yourself", "give up without forcing", "because of the effort", "effortless"], a: 0,
        e: "〜てでも = \"even at the price of\"." },
    ],
  },

  {
    id: "g170", g: "〜限り(は)", m: "as long as / to the extent of", f: "V-dict／V-ている／A／N＋である + 限り(は)",
    c: "condition", lv: 2, rel: ["g171"],
    note: "(1) \"as long as\" (an enduring condition); (2) \"as far as I know\" (知る限り).",
    ex: [
      { jp: "体が健康な限り、働き続けたい。", fr: "As long as I'm healthy, I want to keep working." },
      { jp: "私が知る限り、彼は正直だ。", fr: "As far as I know, he's honest." },
    ],
    qs: [
      { t: "fill", q: "あきらめない＿＿＿、可能性はある。", fr: "As long as we don't give up, there's a chance.",
        o: ["限り", "あげく", "ばかり", "うえで"], a: 0,
        e: "〜限り = as long as (あきらめない限り)." },
      { t: "meaning", q: "「見渡す限り、海だ」— sens ?",
        o: ["as far as the eye can see, it's the sea", "you can't see the sea", "about the sea", "thanks to the sea"], a: 0,
        e: "〜限り = \"in the whole extent of\" (見渡す限り)." },
    ],
  },

  {
    id: "g171", g: "〜限りだ", m: "couldn't be better (feeling)", f: "A／N＋の + 限りだ",
    c: "modality", lv: 3, rel: ["g170"],
    note: "Expresses a feeling pushed to the limit (うれしい限りだ = couldn't be happier).",
    ex: [
      { jp: "合格できて、うれしい限りだ。", fr: "Having succeeded, I couldn't be happier." },
      { jp: "一人で過ごす正月は、寂しい限りだ。", fr: "Spending New Year's Eve alone couldn't be sadder." },
    ],
    qs: [
      { t: "fill", q: "君に会えて、心強い＿＿＿。", fr: "Meeting you could not be more reassuring.",
        o: ["限りだ", "ものだ", "ことだ", "ばかりだ"], a: 0,
        e: "A + 限りだ = feeling at its peak (心強い限りだ)." },
      { t: "nuance", q: "〜限りだ s'emploie surtout avec :",
        o: ["des adjectifs de sentiment (うれしい、寂しい…)", "action verbs", "numbers", "bans"], a: 0,
        e: "限りだ expresses a feeling taken to the extreme." },
    ],
  },

  {
    id: "g172", g: "〜とは限らない", m: "not necessarily, not necessarily", f: "V-plain／A／N + とは限らない",
    c: "modality", lv: 2, rel: ["g051"],
    note: "Denies a generalization: \"it's not always the case that...\". Often with 必ずしも.",
    ex: [
      { jp: "高い物が必ずしもいいとは限らない。", fr: "What's expensive isn't necessarily good." },
      { jp: "努力すれば成功するとは限らない。", fr: "Effort does not guarantee success." },
    ],
    qs: [
      { t: "fill", q: "勉強した人が必ず合格する＿＿＿。", fr: "Those who study don't necessarily succeed.",
        o: ["とは限らない", "に違いない", "に決まっている", "はずだ"], a: 0,
        e: "〜とは限らない = not necessarily (合格するとは限らない)." },
      { t: "meaning", q: "「年上が正しいとは限らない」— sens ?",
        o: ["seniors aren't necessarily right", "elders are always right", "seniors are wrong", "about seniors"], a: 0,
        e: "〜とは限らない = possible exception to a general rule." },
    ],
  },

  {
    id: "g173", g: "〜に限らず", m: "not only, but not only", f: "N + に限らず",
    c: "particle", lv: 2, rel: ["g074", "g172"],
    note: "The following applies beyond the single case quoted: \"not only X, but also...\".",
    ex: [
      { jp: "子供に限らず、大人も楽しめる。", fr: "It's not just for kids, but for adults too." },
      { jp: "日本に限らず、世界中で問題だ。", fr: "Not just in Japan, it's a worldwide problem." },
    ],
    qs: [
      { t: "fill", q: "週末＿＿＿、平日も営業している。", fr: "Not just at weekends, we're open on weekdays too.",
        o: ["に限らず", "に限り", "に応じて", "に反して"], a: 0,
        e: "〜に限らず = not only (週末に限らず)." },
      { t: "nuance", q: "〜に限らず vs 〜はもちろん : nuance ?",
        o: ["sens proche (élargissement) ; に限らず = « sans se limiter à X »", "opposite", "に限らず = restriction", "はもちろん = exclusion"], a: 0,
        e: "に限らず expands beyond the case mentioned." },
    ],
  },

  {
    id: "g174", g: "〜に限る", m: "there's nothing like it.", f: "V-dict／V-ない／N + に限る",
    c: "modality", lv: 2, rel: ["g101"],
    note: "Expresses a strong preference: \"there's nothing better than X\".",
    ex: [
      { jp: "疲れたときは寝るに限る。", fr: "When you're tired, there's nothing like a good night's sleep." },
      { jp: "夏はやっぱりビールに限る。", fr: "In summer, nothing beats a beer." },
    ],
    qs: [
      { t: "fill", q: "風邪のときは、温かくして休む＿＿＿。", fr: "When you've got a cold, there's nothing like covering up and resting.",
        o: ["に限る", "に限らず", "に反する", "に過ぎる"], a: 0,
        e: "〜に限る = nothing like (休むに限る)." },
      { t: "meaning", q: "「安全第一に限る」— nuance ?",
        o: ["the best thing is to opt for safety (strong preference)", "safety is secondary", "about safety", "without security"], a: 0,
        e: "〜に限る = \"there's nothing better than\"." },
    ],
  },

  {
    id: "g175", g: "〜ことか", m: "how much...! (exclamation)", f: "（疑問詞＋）V-plain／A + ことか",
    c: "modality", lv: 3, rel: ["g103"],
    note: "Emphatic exclamation on a high degree (どんなに〜ことか = how much...!).",
    ex: [
      { jp: "この日をどんなに待っていたことか。", fr: "How I've waited for this day!" },
      { jp: "何度注意したことか。", fr: "How many times have I warned him!" },
    ],
    qs: [
      { t: "fill", q: "君が来てくれて、どんなにうれしい＿＿＿。", fr: "I'm so glad you came!",
        o: ["ことか", "ものか", "ところか", "ばかりか"], a: 0,
        e: "どんなに〜ことか = degree exclamation (うれしいことか)." },
      { t: "meaning", q: "「何度泣いたことか」— sens ?",
        o: ["how many times I cried! (a lot)", "I never cried", "why cry?", "I cry once"], a: 0,
        e: "〜ことか = exclamatory emphasis on intensity/frequency." },
    ],
  },

  {
    id: "g176", g: "〜あまり(に)", m: "so much that (excess → consequence)", f: "V-plain／A-stem＋さ／N＋の + あまり(に)",
    c: "condition", lv: 3, rel: ["g059"],
    note: "An excess of emotion/state leads to a consequence (often unforeseen).",
    ex: [
      { jp: "緊張のあまり、声が震えた。", fr: "My voice trembled with nervousness." },
      { jp: "驚きのあまり、言葉を失った。", fr: "Surprised, I was speechless." },
    ],
    qs: [
      { t: "fill", q: "うれしさの＿＿＿、跳び上がった。", fr: "So happy I jumped.",
        o: ["あまり", "ばかり", "うえで", "ところ"], a: 0,
        e: "〜あまり = excess of a feeling → consequence (うれしさのあまり)." },
      { t: "meaning", q: "「働きすぎたあまり、倒れた」— sens ?",
        o: ["by working too hard, he collapsed", "he didn't work", "he worked a little", "about work"], a: 0,
        e: "〜あまり = \"so... that\" (often negative outcome)." },
    ],
  },

  {
    id: "g177", g: "〜だらけ", m: "covered with, full of (messy/negative)", f: "N + だらけ",
    c: "express", lv: 2, rel: ["g178"],
    note: "Indicates excessive and unpleasant abundance (泥だらけ, 間違いだらけ).",
    ex: [
      { jp: "子供は泥だらけになって遊んだ。", fr: "The child played until he was covered in mud." },
      { jp: "この作文は間違いだらけだ。", fr: "This essay is full of mistakes." },
    ],
    qs: [
      { t: "fill", q: "部屋がごみ＿＿＿で、足の踏み場もない。", fr: "The room is littered with garbage, and we don't know where to put our feet.",
        o: ["だらけ", "向き", "ぎみ", "がち"], a: 0,
        e: "〜だらけ = covered with (negative): ごみだらけ." },
      { t: "nuance", q: "〜だらけ vs 〜まみれ : nuance ?",
        o: ["だらけ = plein de (objets, fautes, partout) ; まみれ = recouvert d'une substance (sueur, sang, boue)", "identical", "まみれ = fautes", "だらけ = substance liquide"], a: 0,
        e: "だらけ (general abundance) ≠ まみれ (coated with a material)." },
    ],
  },

  {
    id: "g178", g: "〜まみれ", m: "stained with, covered with (substance)", f: "N（substance）+ まみれ",
    c: "express", lv: 3, rel: ["g177"],
    note: "The body/an object is covered with a sticky or messy material (汗まみれ, 血まみれ).",
    ex: [
      { jp: "汗まみれになって練習した。", fr: "He trained until he was drenched in sweat." },
      { jp: "泥まみれの靴を洗った。", fr: "I washed the mud-soaked shoes." },
    ],
    qs: [
      { t: "fill", q: "作業の後、彼は油＿＿＿だった。", fr: "After work, he was covered in oil.",
        o: ["まみれ", "だらけ", "ぎみ", "向け"], a: 0,
        e: "〜まみれ = covered with a substance (油まみれ)." },
      { t: "meaning", q: "「ほこりまみれの本」— sens ?",
        o: ["a book covered in dust", "a brand-new book", "a dust-free book", "about dust"], a: 0,
        e: "〜まみれ = coating/maculate of a material." },
    ],
  },

  {
    id: "g179", g: "〜がてら", m: "on the occasion of, while (killing two birds with one stone)", f: "V-ます stem／N + がてら",
    c: "time", lv: 3, rel: ["g020"],
    note: "Take advantage of one action to do another at the same time.",
    ex: [
      { jp: "散歩がてら、買い物をした。", fr: "I did some shopping while walking around." },
      { jp: "運動がてら、駅まで歩いた。", fr: "I walked to the station for a bit of exercise." },
    ],
    qs: [
      { t: "fill", q: "見物＿＿＿、友人を訪ねた。", fr: "I visited a friend, taking the opportunity to do some sightseeing.",
        o: ["がてら", "ながら", "とともに", "つつ"], a: 0,
        e: "〜がてら = take advantage of an opportunity to (見物がてら)." },
      { t: "nuance", q: "〜がてら vs 〜ながら : nuance ?",
        o: ["がてら = profiter d'une sortie pour faire une 2e chose (but secondaire) ; ながら = deux actions strictement simultanées", "identical", "ながら = occasion", "がてら = simultanéité stricte"], a: 0,
        e: "がてら = \"on the same occasion\"; ながら = \"at the same time\"." },
    ],
  },

  {
    id: "g180", g: "〜そばから", m: "barely... and already (again)", f: "V-dict／V-た + そばから",
    c: "time", lv: 3, rel: ["g029"],
    note: "An action is immediately cancelled/repeated after it has been performed (often due to annoyance).",
    ex: [
      { jp: "片づけるそばから、子供が散らかす。", fr: "No sooner have I tidied up than the kids make a mess again." },
      { jp: "習うそばから忘れてしまう。", fr: "No sooner learned than forgotten." },
    ],
    qs: [
      { t: "fill", q: "注意する＿＿＿、また同じ間違いをする。", fr: "No sooner had I taken him back than he made the same mistake again.",
        o: ["そばから", "とたんに", "ながら", "あげく"], a: 0,
        e: "〜そばから = aussitôt fait, aussitôt re-défait (注意するそばから)." },
      { t: "nuance", q: "〜そばから vs 〜たとたん : nuance ?",
        o: ["そばから = répétition agaçante immédiate ; たとたん = un seul événement survenant juste après", "identical", "たとたん = répétition", "そばから = unique"], a: 0,
        e: "そばから insists on immediate repetition (annoyance)." },
    ],
  },

  {
    id: "g181", g: "〜ことだし", m: "given that (among other reasons)", f: "V-plain／A／N＋な + ことだし",
    c: "condition", lv: 3, rel: ["g035"],
    note: "Give one reason (among others) to justify a decision, your flexibility.",
    ex: [
      { jp: "天気もいいことだし、散歩に行こう。", fr: "As the weather is fine (among other things), let's go for a walk." },
      { jp: "もう遅いことだし、そろそろ帰ろう。", fr: "It's late too, so let's go home." },
    ],
    qs: [
      { t: "fill", q: "みんな集まった＿＿＿、始めましょう。", fr: "Since everyone's here (including me), let's get started.",
        o: ["ことだし", "ことか", "ものの", "どころか"], a: 0,
        e: "〜ことだし = flexible reason among others (集まったことだし)." },
      { t: "nuance", q: "Nuance de 〜ことだし par rapport à 〜から ?",
        o: ["presents one reason among several, in a flexible/suggestive way", "single, categorical reason", "expresses a goal", "expresses a concession"], a: 0,
        e: "ことだし = \"given that... (among other things)\", light tone." },
    ],
  },

  {
    id: "g182", g: "〜や否や／〜やいなや", m: "as soon as (literary)", f: "V-dict + や否や",
    c: "time", lv: 3, rel: ["g029", "g087"],
    note: "Literary register: the second action immediately follows the first.",
    ex: [
      { jp: "ベルが鳴るや否や、生徒たちは教室を出た。", fr: "As soon as the bell rang, the students left the classroom." },
      { jp: "彼は座るや否や、話し始めた。", fr: "As soon as he sat down, he started talking." },
    ],
    qs: [
      { t: "fill", q: "ドアを開ける＿＿＿、犬が飛び出した。", fr: "No sooner had the door been opened than the dog leapt out.",
        o: ["や否や", "ことから", "うちに", "ながら"], a: 0,
        e: "〜や否や = as soon as (literary): 開けるや否や." },
      { t: "nuance", q: "〜や否や est, en plus littéraire, proche de :",
        o: ["〜とたんに／〜なり (immédiateté)", "〜ながら (simultanéité longue)", "〜ために (but)", "〜ので (cause)"], a: 0,
        e: "や否や = immediate sequence, sustained register." },
    ],
  },

];

if (typeof window !== "undefined") { window.N3_GRAMMAR = N3_GRAMMAR; window.CATEGORIES = CATEGORIES; window.TIERS = TIERS; }
