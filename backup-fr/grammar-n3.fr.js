/* =========================================================================
   N3 道場 — Base de données de grammaire JLPT N3
   -------------------------------------------------------------------------
   Schéma d'un point de grammaire :
     id, g (forme), m (sens FR), f (formation), c (catégorie), lv (palier),
     rel (ids proches), note (nuance FR), ex [{jp,fr}], qs [{t,q,fr,o,a,e}]
       t = "fill" | "meaning" | "usage" | "nuance"
   ========================================================================= */

const CATEGORIES = {
  particle:  { label: "Particules & locutions", icon: "の", color: "#5b9cff" },
  contrast:  { label: "Concession & contraste",  icon: "対", color: "#ff8a5b" },
  time:      { label: "Temps & séquence",         icon: "時", color: "#43c97f" },
  condition: { label: "Condition & cause",        icon: "因", color: "#c98cff" },
  modality:  { label: "Modalité & jugement",      icon: "判", color: "#ffd24d" },
  express:   { label: "Expressions & emphase",    icon: "強", color: "#ff5c8a" },
};

const TIERS = { 1: "Essentiel", 2: "Fréquent", 3: "Avancé" };

const N3_GRAMMAR = [

  /* ===================== PARTICULES & LOCUTIONS — g001 à g016 ===================== */

  {
    id: "g001", g: "〜をはじめ（として）", m: "à commencer par, notamment", f: "Nom + をはじめ（として）／をはじめとする＋Nom",
    c: "particle", lv: 2, rel: ["g074"],
    note: "Cite un exemple représentatif en tête d'une série. « X をはじめ » = « X, et d'autres du même genre ». Souvent suivi d'une énumération.",
    ex: [
      { jp: "校長先生をはじめ、多くの先生が出席した。", fr: "À commencer par le directeur, de nombreux professeurs étaient présents." },
      { jp: "日本はラーメンをはじめとする麺料理が豊富だ。", fr: "Le Japon est riche en plats de nouilles, à commencer par les rāmen." },
    ],
    qs: [
      { t: "fill", q: "東京＿＿＿、日本には大きな都市がたくさんある。", fr: "À commencer par Tokyo, le Japon compte de nombreuses grandes villes.",
        o: ["をはじめ", "について", "によって", "に対して"], a: 0,
        e: "〜をはじめ cite un représentant en tête d'une série (Tokyo, puis d'autres villes)." },
      { t: "meaning", q: "「社長をはじめ、社員全員が参加した」— sens de をはじめ ?",
        o: ["à commencer par le PDG (lui en tête, puis les autres)", "à propos du PDG", "à cause du PDG", "contrairement au PDG"], a: 0,
        e: "〜をはじめ désigne l'élément le plus représentatif placé en tête d'une énumération." },
    ],
  },

  {
    id: "g002", g: "〜にかかわらず／に関わらず", m: "indépendamment de, quel que soit", f: "Nom／V-dict＋V-ない + にかかわらず",
    c: "particle", lv: 2, rel: ["g003"],
    note: "Indique que le résultat ne change pas selon les variations de X. Souvent avec des couples opposés (V-る／V-ない, 多い少ない…) ou des noms de variation (天気, 年齢).",
    ex: [
      { jp: "天候にかかわらず、試合は行われる。", fr: "Quel que soit le temps, le match aura lieu." },
      { jp: "参加するしないにかかわらず、連絡してください。", fr: "Que vous participiez ou non, contactez-nous." },
    ],
    qs: [
      { t: "fill", q: "経験の有無＿＿＿、誰でも応募できます。", fr: "Avec ou sans expérience, tout le monde peut postuler.",
        o: ["にかかわらず", "について", "によって", "にとって"], a: 0,
        e: "〜にかかわらず = le résultat ne dépend pas de la variation considérée (ici, avoir ou non de l'expérience)." },
      { t: "nuance", q: "〜にかかわらず vs 〜にもかかわらず : quelle différence ?",
        o: ["にかかわらず = peu importe (quelle que soit la variation) ; にもかかわらず = malgré (concession sur un fait précis)", "elles sont identiques", "にもかかわらず exprime une variation", "にかかわらず exprime une concession"], a: 0,
        e: "〜にかかわらず : indépendamment des variations. 〜にもかかわらず : « bien que / malgré » un fait établi." },
    ],
  },

  {
    id: "g003", g: "〜を問わず", m: "sans distinction de, quel que soit", f: "Nom + を問わず",
    c: "particle", lv: 2, rel: ["g002"],
    note: "Registre un peu formel. « Sans tenir compte de X » : la chose s'applique uniformément. Souvent avec 年齢, 性別, 経験, 昼夜.",
    ex: [
      { jp: "年齢を問わず、誰でも参加できる。", fr: "Sans distinction d'âge, tout le monde peut participer." },
      { jp: "昼夜を問わず、機械は動き続けている。", fr: "Jour et nuit sans distinction, les machines continuent de tourner." },
    ],
    qs: [
      { t: "fill", q: "経験の有無＿＿＿、やる気のある人を募集します。", fr: "Sans distinction d'expérience, nous recrutons des personnes motivées.",
        o: ["を問わず", "をはじめ", "について", "において"], a: 0,
        e: "〜を問わず = sans tenir compte de la distinction citée. S'applique uniformément." },
      { t: "meaning", q: "「国籍を問わず採用する」— sens ?",
        o: ["recruter sans distinction de nationalité", "recruter en interrogeant sur la nationalité", "recruter selon la nationalité", "recruter à propos de la nationalité"], a: 0,
        e: "〜を問わず = on ne pose pas la question de X ; X n'entre pas en ligne de compte." },
    ],
  },

  {
    id: "g004", g: "〜をもとに（して）", m: "sur la base de, en s'appuyant sur", f: "Nom + をもとに（して）／をもとにした＋Nom",
    c: "particle", lv: 2, rel: ["g006"],
    note: "Indique le matériau/la source à partir de laquelle on crée ou élabore quelque chose. « En prenant X comme point de départ ».",
    ex: [
      { jp: "この映画は実話をもとに作られた。", fr: "Ce film a été réalisé d'après une histoire vraie." },
      { jp: "アンケートの結果をもとに、商品を改良した。", fr: "Sur la base des résultats du sondage, on a amélioré le produit." },
    ],
    qs: [
      { t: "fill", q: "集めたデータ＿＿＿、レポートを書いた。", fr: "J'ai écrit le rapport en m'appuyant sur les données recueillies.",
        o: ["をもとに", "に対して", "について", "を問わず"], a: 0,
        e: "〜をもとに = à partir de (matériau/source servant de base à une création)." },
      { t: "nuance", q: "〜をもとに vs 〜に基づいて : nuance ?",
        o: ["をもとに insiste sur le matériau de départ d'une création ; に基づいて insiste sur la conformité à une règle/un principe", "identiques", "をもとに est plus formel", "に基づいて concerne uniquement les histoires"], a: 0,
        e: "をもとに = matière première d'une élaboration. に基づいて = en conformité avec une norme, une loi, un principe." },
    ],
  },

  {
    id: "g005", g: "〜を通じて／を通して", m: "à travers ; durant toute la période de", f: "Nom + を通じて／を通して",
    c: "particle", lv: 2, rel: [],
    note: "Deux emplois : (1) le moyen/l'intermédiaire (« par l'intermédiaire de ») ; (2) l'étendue temporelle ou spatiale continue (« tout au long de »).",
    ex: [
      { jp: "友人を通じて彼と知り合った。", fr: "J'ai fait sa connaissance par l'intermédiaire d'un ami." },
      { jp: "この地方は一年を通して暖かい。", fr: "Cette région est chaude toute l'année." },
    ],
    qs: [
      { t: "fill", q: "インターネット＿＿＿、世界中の人と交流できる。", fr: "Par l'intermédiaire d'Internet, on peut échanger avec le monde entier.",
        o: ["を通じて", "に対して", "をはじめ", "に反して"], a: 0,
        e: "〜を通じて = par le moyen / par l'intermédiaire de (canal de communication)." },
      { t: "meaning", q: "「一年を通して雨が多い」— sens de を通して ?",
        o: ["durant toute l'année (étendue continue)", "à travers une année particulière", "à cause de l'année", "à propos de l'année"], a: 0,
        e: "Ici 〜を通して exprime l'étendue temporelle continue : « tout au long de »." },
    ],
  },

  {
    id: "g006", g: "〜に基づいて／に基づく", m: "sur la base de, d'après, conformément à", f: "Nom + に基づいて／に基づく＋Nom",
    c: "particle", lv: 2, rel: ["g004"],
    note: "Action menée en conformité avec une règle, une donnée, un principe. Plus formel que をもとに ; insiste sur le respect du fondement.",
    ex: [
      { jp: "法律に基づいて処理する。", fr: "Traiter conformément à la loi." },
      { jp: "事実に基づく報道が求められる。", fr: "On exige un reportage fondé sur les faits." },
    ],
    qs: [
      { t: "fill", q: "規則＿＿＿、厳正に審査します。", fr: "Conformément au règlement, nous examinerons avec rigueur.",
        o: ["に基づいて", "をはじめ", "にかかわらず", "について"], a: 0,
        e: "〜に基づいて = en conformité avec une règle / un fondement." },
      { t: "usage", q: "Quelle phrase est la plus naturelle ?",
        o: ["調査結果に基づいて対策を立てる", "調査結果をはじめ対策を立てる", "調査結果を問わず対策を立てる", "調査結果にとって対策を立てる"], a: 0,
        e: "On élabore une mesure « sur la base de » résultats : 〜に基づいて convient." },
    ],
  },

  {
    id: "g007", g: "〜に応じて／に応じた", m: "selon, en fonction de (variation adaptée)", f: "Nom + に応じて／に応じた＋Nom",
    c: "particle", lv: 1, rel: ["g015"],
    note: "Indique une adaptation à une variation : « X varie, et Y s'ajuste en conséquence ». Souvent avec 収入, 場合, 状況, 能力.",
    ex: [
      { jp: "収入に応じて税金が決まる。", fr: "L'impôt est fixé en fonction des revenus." },
      { jp: "客の要望に応じて対応する。", fr: "On répond selon les demandes du client." },
    ],
    qs: [
      { t: "fill", q: "季節＿＿＿、メニューを変える。", fr: "On change le menu selon les saisons.",
        o: ["に応じて", "に反して", "をはじめ", "について"], a: 0,
        e: "〜に応じて = adaptation à une variation (les saisons varient, le menu s'ajuste)." },
      { t: "nuance", q: "〜に応じて vs 〜によって（変化） : nuance ?",
        o: ["に応じて insiste sur l'adaptation active à une variation ; によって constate simplement que ça varie selon les cas", "identiques", "に応じて est familier", "によって ne marque jamais la variation"], a: 0,
        e: "に応じて = on s'ajuste activement. によって = simple constat de variation « selon »." },
    ],
  },

  {
    id: "g008", g: "〜に沿って／に沿った", m: "le long de ; conformément à", f: "Nom + に沿って／に沿った＋Nom",
    c: "particle", lv: 3, rel: ["g006"],
    note: "Sens concret (« le long de » une rivière, une route) ou abstrait (« conformément à » un plan, des attentes, une politique).",
    ex: [
      { jp: "川に沿って道が続いている。", fr: "La route longe la rivière." },
      { jp: "計画に沿って仕事を進める。", fr: "Faire avancer le travail conformément au plan." },
    ],
    qs: [
      { t: "fill", q: "マニュアル＿＿＿作業を進めてください。", fr: "Veuillez procéder conformément au manuel.",
        o: ["に沿って", "を問わず", "に反して", "をはじめ"], a: 0,
        e: "〜に沿って (abstrait) = en suivant / conformément à (un manuel, un plan)." },
      { t: "meaning", q: "「海岸に沿って歩く」— sens de に沿って ?",
        o: ["marcher le long de la côte", "marcher contre la côte", "marcher à propos de la côte", "marcher sans tenir compte de la côte"], a: 0,
        e: "Sens concret : 〜に沿って = le long de." },
    ],
  },

  {
    id: "g009", g: "〜にわたって／にわたる", m: "sur une étendue de, durant toute la durée de", f: "Nom (durée/quantité/espace) + にわたって／にわたる＋Nom",
    c: "particle", lv: 2, rel: ["g005"],
    note: "Souligne l'ampleur d'une étendue temporelle ou spatiale. « Pendant 3 ans », « sur 10 km », « dans tous les domaines ».",
    ex: [
      { jp: "工事は三年にわたって続いた。", fr: "Les travaux ont duré (pas moins de) trois ans." },
      { jp: "広い範囲にわたる調査を行った。", fr: "On a mené une enquête couvrant un large éventail." },
    ],
    qs: [
      { t: "fill", q: "会議は五時間＿＿＿行われた。", fr: "La réunion s'est tenue durant cinq heures (durée notable).",
        o: ["にわたって", "において", "に応じて", "をもとに"], a: 0,
        e: "〜にわたって souligne l'ampleur d'une étendue temporelle (cinq heures entières)." },
      { t: "nuance", q: "〜にわたって vs 〜を通して : nuance ?",
        o: ["にわたって souligne l'ampleur/l'étendue ; を通して insiste sur la continuité « tout au long »", "identiques", "を通して ne s'emploie pas pour le temps", "にわたって est familier"], a: 0,
        e: "にわたって met l'accent sur la grande étendue ; を通して sur la continuité de bout en bout." },
    ],
  },

  {
    id: "g010", g: "〜において／における", m: "dans, en matière de (registre formel)", f: "Nom + において／における＋Nom",
    c: "particle", lv: 1, rel: ["g032"],
    note: "Équivalent formel de で pour le lieu, le domaine ou l'époque. Fréquent à l'écrit et dans les discours.",
    ex: [
      { jp: "会議は東京において開かれた。", fr: "La réunion s'est tenue à Tokyo." },
      { jp: "現代社会における問題を考える。", fr: "Réfléchir aux problèmes de la société contemporaine." },
    ],
    qs: [
      { t: "fill", q: "この分野＿＿＿、彼は第一人者だ。", fr: "Dans ce domaine, il fait autorité.",
        o: ["において", "に応じて", "を問わず", "をはじめ"], a: 0,
        e: "〜において = dans (domaine/lieu/époque), registre formel équivalent à で." },
      { t: "usage", q: "Registre le plus formel pour « lors de la cérémonie » ?",
        o: ["式典において", "式典で", "式典をはじめ", "式典について"], a: 0,
        e: "〜において est la forme la plus formelle pour situer un événement (≈ で écrit/oral soutenu)." },
    ],
  },

  {
    id: "g011", g: "〜に際して／に際し", m: "à l'occasion de, au moment de (formel)", f: "Nom／V-dict + に際して",
    c: "particle", lv: 2, rel: ["g032"],
    note: "Registre formel pour un moment important/spécial : début, départ, signature… Souvent dans les discours et annonces.",
    ex: [
      { jp: "卒業に際して、一言申し上げます。", fr: "À l'occasion de la remise des diplômes, je voudrais dire un mot." },
      { jp: "契約に際して、注意事項を確認する。", fr: "Au moment de signer le contrat, on vérifie les clauses." },
    ],
    qs: [
      { t: "fill", q: "開会＿＿＿、会長があいさつをした。", fr: "À l'occasion de l'ouverture, le président a prononcé un discours.",
        o: ["に際して", "に応じて", "にわたって", "を問わず"], a: 0,
        e: "〜に際して = au moment de (occasion formelle et importante)." },
      { t: "nuance", q: "〜に際して vs 〜際（に） : nuance ?",
        o: ["に際して est plus solennel et concerne un moment marquant ; 際に est plus neutre (« lors de »)", "identiques", "際に est plus formel", "に際して concerne le passé seulement"], a: 0,
        e: "に際して a une coloration solennelle ; 際に sert simplement à dater « lors de »." },
    ],
  },

  {
    id: "g012", g: "〜に反して／に反する", m: "contrairement à, à l'encontre de", f: "Nom + に反して／に反する＋Nom",
    c: "particle", lv: 2, rel: [],
    note: "Indique qu'un résultat va à l'inverse d'une attente, d'une prévision, d'une règle. Souvent avec 予想, 期待, 規則.",
    ex: [
      { jp: "予想に反して、試合に負けた。", fr: "Contrairement aux prévisions, nous avons perdu le match." },
      { jp: "親の期待に反する進路を選んだ。", fr: "Il a choisi une voie contraire aux attentes de ses parents." },
    ],
    qs: [
      { t: "fill", q: "予想＿＿＿、彼は試験に合格した。", fr: "Contrairement aux prévisions, il a réussi l'examen.",
        o: ["に反して", "に応じて", "に基づいて", "をもとに"], a: 0,
        e: "〜に反して = à l'opposé d'une attente/prévision." },
      { t: "meaning", q: "「規則に反する行為」— sens ?",
        o: ["un acte contraire au règlement", "un acte conforme au règlement", "un acte à propos du règlement", "un acte fondé sur le règlement"], a: 0,
        e: "〜に反する = qui va à l'encontre de (règle, attente)." },
    ],
  },

  {
    id: "g013", g: "〜に先立って／に先立ち", m: "avant, en préalable à (formel)", f: "Nom／V-dict + に先立って",
    c: "particle", lv: 3, rel: ["g019"],
    note: "Registre formel : une action préparatoire effectuée AVANT un événement important. ≈ « préalablement à ».",
    ex: [
      { jp: "開店に先立って、関係者を招いた。", fr: "Avant l'ouverture, on a invité les parties prenantes." },
      { jp: "出発に先立ち、注意事項を説明する。", fr: "Préalablement au départ, on explique les consignes." },
    ],
    qs: [
      { t: "fill", q: "試合＿＿＿、選手たちが入場した。", fr: "Avant le match, les joueurs ont fait leur entrée.",
        o: ["に先立って", "に応じて", "に反して", "を問わず"], a: 0,
        e: "〜に先立って = en préalable à un événement important (formel)." },
      { t: "nuance", q: "〜に先立って vs 〜前に : nuance ?",
        o: ["に先立って est formel et implique une préparation à un événement marquant ; 前に est neutre et général", "identiques", "前に est plus formel", "に先立って concerne le futur uniquement"], a: 0,
        e: "に先立って : préalable solennel à un grand événement. 前に : « avant » au sens large." },
    ],
  },

  {
    id: "g014", g: "〜に伴って／に伴い", m: "en même temps que, au fur et à mesure de", f: "Nom／V-dict + に伴って",
    c: "particle", lv: 2, rel: ["g077", "g078"],
    note: "Indique qu'un changement en entraîne un autre, simultanément. Registre semi-formel. Souvent avec des phénomènes graduels.",
    ex: [
      { jp: "人口の増加に伴って、住宅が不足している。", fr: "Avec l'augmentation de la population, les logements manquent." },
      { jp: "気温の上昇に伴い、海面が上がる。", fr: "À mesure que la température monte, le niveau de la mer s'élève." },
    ],
    qs: [
      { t: "fill", q: "技術の進歩＿＿＿、生活が便利になった。", fr: "Avec le progrès technique, la vie est devenue plus pratique.",
        o: ["に伴って", "に反して", "を問わず", "に際して"], a: 0,
        e: "〜に伴って = un changement en accompagne un autre simultanément." },
      { t: "nuance", q: "〜に伴って vs 〜につれて : nuance ?",
        o: ["に伴って accepte aussi des changements ponctuels et est plus formel ; につれて exige une variation graduelle et continue", "identiques", "につれて est formel", "に伴って ne marque jamais le changement"], a: 0,
        e: "につれて = progression continue obligatoire. に伴って = plus large, accepte aussi des événements et est plus formel." },
    ],
  },

  {
    id: "g015", g: "〜に従って／に従い", m: "conformément à ; au fur et à mesure que", f: "Nom／V-dict + に従って",
    c: "particle", lv: 1, rel: ["g078", "g007"],
    note: "Deux emplois : (1) « conformément à » une règle/instruction ; (2) « à mesure que » (progression parallèle).",
    ex: [
      { jp: "指示に従って行動する。", fr: "Agir conformément aux instructions." },
      { jp: "山を登るに従って、寒くなってきた。", fr: "À mesure que l'on montait, il faisait plus froid." },
    ],
    qs: [
      { t: "fill", q: "係員の指示＿＿＿、避難してください。", fr: "Évacuez conformément aux instructions de l'agent.",
        o: ["に従って", "に反して", "をはじめ", "を問わず"], a: 0,
        e: "〜に従って (emploi 1) = en suivant / conformément à une instruction." },
      { t: "meaning", q: "「年を取るに従って、体力が落ちる」— sens de に従って ?",
        o: ["à mesure que l'on vieillit", "contrairement au vieillissement", "à cause du vieillissement précis", "avant de vieillir"], a: 0,
        e: "〜に従って (emploi 2) = à mesure que (progression parallèle)." },
    ],
  },

  {
    id: "g016", g: "〜にとって", m: "pour, du point de vue de", f: "Nom + にとって（は／も／の）",
    c: "particle", lv: 1, rel: [],
    note: "Présente le point de vue depuis lequel on juge (« pour X, c'est… »). Le prédicat est souvent une évaluation (大切, 難しい, 必要).",
    ex: [
      { jp: "私にとって、家族が一番大切だ。", fr: "Pour moi, la famille est ce qu'il y a de plus important." },
      { jp: "子供にとって、遊びは学びだ。", fr: "Pour les enfants, le jeu est apprentissage." },
    ],
    qs: [
      { t: "fill", q: "外国人＿＿＿、日本の漢字は難しい。", fr: "Pour les étrangers, les kanji japonais sont difficiles.",
        o: ["にとって", "に対して", "について", "によって"], a: 0,
        e: "〜にとって = du point de vue de (suivi d'une évaluation : difficile)." },
      { t: "nuance", q: "〜にとって vs 〜に対して : nuance ?",
        o: ["にとって = point de vue/évaluation (« pour X ») ; に対して = action dirigée vers une cible (« envers X »)", "identiques", "にとって marque une opposition", "に対して exprime un point de vue"], a: 0,
        e: "にとって introduit un jugement « pour X » ; に対して une attitude/action « envers X »." },
    ],
  },

  /* ===================== CONCESSION & CONTRASTE — g017 à g024 ===================== */

  {
    id: "g017", g: "〜くせに", m: "alors que pourtant (reproche)", f: "V-plain／A-い／A-な＋な／N＋の + くせに",
    c: "contrast", lv: 1, rel: ["g018", "g020"],
    note: "Exprime un reproche ou de la surprise face à un écart entre l'attendu et le réel. Toujours critique envers le sujet, ton familier.",
    ex: [
      { jp: "知っているくせに、教えてくれない。", fr: "Il le sait pourtant, mais il ne me le dit pas." },
      { jp: "子供のくせに、生意気なことを言う。", fr: "Pour un enfant, il dit des choses arrogantes." },
    ],
    qs: [
      { t: "fill", q: "彼は自分が悪い＿＿＿、謝ろうとしない。", fr: "Pourtant c'est lui le fautif, mais il refuse de s'excuser.",
        o: ["くせに", "おかげで", "ために", "とおりに"], a: 0,
        e: "〜くせに = reproche : il est en tort ET refuse de s'excuser." },
      { t: "meaning", q: "「できないくせに、口だけは達者だ」— sens de くせに ?",
        o: ["bien qu'il en soit incapable (critique)", "parce qu'il en est incapable", "même si on peut", "dès qu'on peut"], a: 0,
        e: "〜くせに = reproche envers qqn qui parle sans agir. Toujours critique." },
      { t: "nuance", q: "〜くせに vs 〜のに : différence ?",
        o: ["くせに contient un reproche personnel marqué ; のに exprime une contradiction/déception plus neutre", "identiques", "のに est toujours un reproche", "くせに ne s'emploie pas avec des personnes"], a: 0,
        e: "くせに = jugement négatif ciblé sur le sujet ; のに = simple contradiction/déception." },
    ],
  },

  {
    id: "g018", g: "〜割に（は）", m: "pour ce que c'est, contrairement à ce qu'on attendrait", f: "V-plain／A／N＋の + 割に（は）",
    c: "contrast", lv: 1, rel: ["g017"],
    note: "Compare un fait à ce qu'on en attendrait normalement : « X, et pourtant Y ne correspond pas à ce que X laisserait prévoir ».",
    ex: [
      { jp: "この店は値段の割においしい。", fr: "Pour son prix, ce restaurant est bon (meilleur qu'attendu)." },
      { jp: "彼は年齢の割に若く見える。", fr: "Pour son âge, il fait jeune." },
    ],
    qs: [
      { t: "fill", q: "よく勉強した＿＿＿、点数が悪かった。", fr: "Pour avoir beaucoup étudié, il a eu une mauvaise note.",
        o: ["割に", "ために", "おかげで", "とおりに"], a: 0,
        e: "〜割に = contraste avec l'attente : beaucoup étudié → on attendrait une bonne note." },
      { t: "meaning", q: "「この仕事は大変な割に給料が安い」— sens de 割に ?",
        o: ["pour la difficulté que c'est, le salaire est bas (décalage)", "grâce à la difficulté", "à cause de la difficulté", "à propos de la difficulté"], a: 0,
        e: "〜割に souligne un décalage avec ce que l'effort laisserait attendre." },
    ],
  },

  {
    id: "g019", g: "〜ものの", m: "bien que, certes… mais", f: "V-plain／A／N＋である + ものの",
    c: "contrast", lv: 2, rel: ["g020", "g022"],
    note: "Concession écrite/formelle : on admet un fait, mais la suite va dans un sens contraire ou décevant. Registre soutenu.",
    ex: [
      { jp: "免許は取ったものの、車がない。", fr: "J'ai certes obtenu le permis, mais je n'ai pas de voiture." },
      { jp: "やってみるとは言ったものの、自信はない。", fr: "J'ai dit que j'essaierais, mais je manque de confiance." },
    ],
    qs: [
      { t: "fill", q: "薬を飲んだ＿＿＿、なかなか熱が下がらない。", fr: "J'ai bien pris le médicament, mais la fièvre ne baisse pas.",
        o: ["ものの", "おかげで", "ために", "とたんに"], a: 0,
        e: "〜ものの = concession soutenue : on admet l'action, mais le résultat attendu manque." },
      { t: "nuance", q: "〜ものの vs 〜のに : nuance ?",
        o: ["ものの est plus écrit/posé ; のに ajoute souvent un sentiment de déception ou de reproche", "identiques", "のに est plus formel", "ものの exprime une cause"], a: 0,
        e: "ものの = concession neutre, soignée. のに = concession + émotion (déception)." },
    ],
  },

  {
    id: "g020", g: "〜ながら（も）", m: "tout en, bien que, malgré", f: "V-ます stem／A-い／A-な／N + ながら（も）",
    c: "contrast", lv: 2, rel: ["g017", "g019"],
    note: "Concession : deux états coexistent alors qu'on s'attendrait à une contradiction. À distinguer du ながら de simultanéité d'actions.",
    ex: [
      { jp: "狭いながらも、楽しい我が家だ。", fr: "Bien que petite, notre maison est agréable." },
      { jp: "悪いと知りながら、やめられない。", fr: "Tout en sachant que c'est mal, je ne peux pas arrêter." },
    ],
    qs: [
      { t: "fill", q: "残念＿＿＿、今回は参加できません。", fr: "Bien que ce soit regrettable, je ne peux pas participer cette fois.",
        o: ["ながら", "おかげで", "とたんに", "ために"], a: 0,
        e: "〜ながら（も）= concession : « malgré le regret ». (残念ながら est figé.)" },
      { t: "nuance", q: "Dans «歩きながら話す» et «狭いながらも快適だ», le sens de ながら est :",
        o: ["1er = simultanéité d'actions ; 2e = concession (« bien que »)", "les deux sont concession", "les deux sont simultanéité", "le 1er est concession"], a: 0,
        e: "ながら a deux valeurs : simultanéité (verbe d'action) et concession (état/qualité)." },
    ],
  },

  {
    id: "g021", g: "〜一方（で）", m: "d'un côté… de l'autre ; en revanche ; pendant ce temps", f: "V-plain／A／N＋である + 一方（で）",
    c: "contrast", lv: 1, rel: [],
    note: "Met deux aspects en parallèle ou en contraste. Aussi : « tout en faisant X, par ailleurs Y ».",
    ex: [
      { jp: "都会は便利な一方で、物価が高い。", fr: "La ville est pratique, mais en revanche la vie y est chère." },
      { jp: "輸出が伸びる一方、輸入は減った。", fr: "Tandis que les exportations augmentent, les importations ont baissé." },
    ],
    qs: [
      { t: "fill", q: "彼は厳しい＿＿＿、優しいところもある。", fr: "Il est sévère, mais d'un autre côté il a aussi de la gentillesse.",
        o: ["一方で", "ために", "おかげで", "ものだから"], a: 0,
        e: "〜一方で met en parallèle deux facettes contrastées (sévère / gentil)." },
      { t: "meaning", q: "「収入が増える一方で、支出も増えた」— sens ?",
        o: ["tandis que les revenus augmentent, les dépenses aussi", "grâce à l'augmentation des revenus", "à cause des revenus", "avant l'augmentation des revenus"], a: 0,
        e: "〜一方で = mise en parallèle/contraste de deux évolutions." },
    ],
  },

  {
    id: "g022", g: "〜とはいえ", m: "cela dit, bien que, encore que", f: "V-plain／A／N + とはいえ",
    c: "contrast", lv: 2, rel: ["g019", "g023"],
    note: "On admet un fait ou un principe, mais on nuance aussitôt : « certes X, mais en réalité… ». Registre plutôt écrit/soutenu.",
    ex: [
      { jp: "春とはいえ、まだ寒い。", fr: "On a beau être au printemps, il fait encore froid." },
      { jp: "プロとはいえ、ミスもある。", fr: "Même un professionnel, cela dit, peut commettre des erreurs." },
    ],
    qs: [
      { t: "fill", q: "休日＿＿＿、やることが多くて休めない。", fr: "C'est jour de congé, certes, mais j'ai tant à faire que je ne me repose pas.",
        o: ["とはいえ", "おかげで", "につれて", "に際して"], a: 0,
        e: "〜とはいえ = « on a beau dire que… », on admet puis on nuance." },
      { t: "meaning", q: "「便利になったとはいえ、問題も多い」— sens de とはいえ ?",
        o: ["c'est certes devenu pratique, mais il y a aussi des problèmes", "parce que c'est pratique", "afin que ce soit pratique", "dès que c'est pratique"], a: 0,
        e: "〜とはいえ = concession nuancée : on reconnaît un fait puis on le tempère." },
    ],
  },

  {
    id: "g023", g: "〜にもかかわらず", m: "malgré, quoique, en dépit de", f: "Nom／V-plain／A + にもかかわらず",
    c: "contrast", lv: 2, rel: ["g002", "g022"],
    note: "Concession forte : un résultat survient contre toute attente liée au fait précédent. Plus formel que のに.",
    ex: [
      { jp: "雨にもかかわらず、試合は行われた。", fr: "En dépit de la pluie, le match a eu lieu." },
      { jp: "努力したにもかかわらず、失敗した。", fr: "Malgré ses efforts, il a échoué." },
    ],
    qs: [
      { t: "fill", q: "忠告した＿＿＿、彼は計画を強行した。", fr: "Malgré mes avertissements, il a mené son projet de force.",
        o: ["にもかかわらず", "にかかわらず", "に応じて", "をはじめ"], a: 0,
        e: "〜にもかかわらず = malgré (concession). (Ne pas confondre avec にかかわらず = « peu importe ».)" },
      { t: "nuance", q: "〜にもかかわらず vs 〜にかかわらず : différence ?",
        o: ["にもかかわらず = malgré (un fait précis) ; にかかわらず = quelle que soit la variation", "identiques", "にかかわらず = malgré", "にもかかわらず = peu importe"], a: 0,
        e: "Le も de にもかかわらず ajoute la valeur concessive « malgré »." },
    ],
  },

  {
    id: "g024", g: "〜それなのに", m: "et pourtant, malgré ça (connecteur)", f: "Phrase。それなのに、Phrase",
    c: "contrast", lv: 2, rel: ["g017"],
    note: "Connecteur en début de phrase exprimant la surprise ou le mécontentement face à une suite inattendue.",
    ex: [
      { jp: "彼は約束した。それなのに、来なかった。", fr: "Il avait promis. Et pourtant, il n'est pas venu." },
      { jp: "薬を飲んだ。それなのに、治らない。", fr: "J'ai pris le médicament. Malgré ça, je ne guéris pas." },
    ],
    qs: [
      { t: "fill", q: "たくさん練習した。＿＿＿、本番で失敗した。", fr: "Je me suis beaucoup entraîné. Et pourtant, j'ai raté le jour J.",
        o: ["それなのに", "そのため", "それで", "つまり"], a: 0,
        e: "〜それなのに = connecteur de contradiction/déception en tête de phrase." },
      { t: "usage", q: "Quel connecteur exprime une déception après une cause favorable ?",
        o: ["それなのに", "そのため", "したがって", "それゆえ"], a: 0,
        e: "それなのに introduit un résultat contraire à l'attente ; les autres sont causaux/logiques." },
    ],
  },

  /* ===================== TEMPS & SÉQUENCE — g025 à g032 ===================== */

  {
    id: "g025", g: "〜たびに", m: "chaque fois que", f: "V-dict／N＋の + たびに",
    c: "time", lv: 1, rel: ["g027"],
    note: "« À chaque occurrence de X, Y se produit ». Souligne la régularité de la coïncidence.",
    ex: [
      { jp: "この写真を見るたびに、故郷を思い出す。", fr: "Chaque fois que je vois cette photo, je pense à mon pays natal." },
      { jp: "彼は会うたびに文句を言う。", fr: "Chaque fois qu'on le voit, il se plaint." },
    ],
    qs: [
      { t: "fill", q: "旅行に行く＿＿＿、お土産を買ってくる。", fr: "Chaque fois qu'il part en voyage, il rapporte un souvenir.",
        o: ["たびに", "うちに", "とたんに", "次第"], a: 0,
        e: "〜たびに = à chaque fois que (répétition régulière)." },
      { t: "meaning", q: "「季節が変わるたびに服を買う」— sens ?",
        o: ["à chaque changement de saison, j'achète des vêtements", "avant que la saison change", "dès que la saison a changé", "pendant que la saison change"], a: 0,
        e: "〜たびに = chaque occurrence déclenche l'action." },
    ],
  },

  {
    id: "g026", g: "〜おきに", m: "tous les… (à intervalles de)", f: "Durée／Nombre + おきに",
    c: "time", lv: 2, rel: ["g027"],
    note: "Marque l'intervalle SÉPARANT deux occurrences. 一日おき = un jour d'intervalle (= tous les deux jours).",
    ex: [
      { jp: "バスは十分おきに来る。", fr: "Le bus passe toutes les dix minutes (dix minutes d'intervalle)." },
      { jp: "一日おきにジムに行く。", fr: "Je vais à la salle un jour sur deux." },
    ],
    qs: [
      { t: "fill", q: "この薬は四時間＿＿＿飲んでください。", fr: "Prenez ce médicament toutes les quatre heures.",
        o: ["おきに", "ごとに", "うちに", "たびに"], a: 0,
        e: "〜おきに = à intervalles de (espace séparant les prises)." },
      { t: "nuance", q: "「一週間おきに」signifie le plus naturellement :",
        o: ["une semaine d'intervalle (donc une semaine sur deux)", "chaque semaine sans faute", "moins d'une semaine", "plus d'un mois"], a: 0,
        e: "おきに insiste sur l'intervalle vide entre deux occurrences." },
    ],
  },

  {
    id: "g027", g: "〜ごとに", m: "chaque, à chaque, tous les", f: "Durée／Nombre／N + ごとに",
    c: "time", lv: 1, rel: ["g026", "g025"],
    note: "« Pour chaque X » : régularité ou répartition. 一年ごと = chaque année. Avec un nom : 国ごと = pour chaque pays.",
    ex: [
      { jp: "オリンピックは四年ごとに開かれる。", fr: "Les Jeux olympiques ont lieu tous les quatre ans." },
      { jp: "国ごとに習慣が違う。", fr: "Les coutumes diffèrent d'un pays à l'autre." },
    ],
    qs: [
      { t: "fill", q: "三十分＿＿＿、休憩を取る。", fr: "On fait une pause toutes les trente minutes.",
        o: ["ごとに", "に際して", "うちに", "とたんに"], a: 0,
        e: "〜ごとに = à chaque intervalle (régularité)." },
      { t: "nuance", q: "「二日ごとに」vs「二日おきに」— quelle paire est correcte ?",
        o: ["ごとに = tous les 2 jours ; おきに = avec 2 jours d'intervalle (= tous les 3 jours)", "elles sont identiques", "おきに = tous les 2 jours", "ごとに implique un intervalle vide"], a: 0,
        e: "ごとに compte l'unité elle-même ; おきに compte l'intervalle entre deux." },
    ],
  },

  {
    id: "g028", g: "〜うちに", m: "pendant que ; avant que (ne change)", f: "V-plain／A-い／A-な＋な／N＋の + うちに",
    c: "time", lv: 1, rel: ["g025"],
    note: "Profiter d'un état tant qu'il dure : « pendant que… (avant qu'il ne change) ». Avec une négation : « avant que… ne ».",
    ex: [
      { jp: "熱いうちに食べてください。", fr: "Mangez tant que c'est chaud." },
      { jp: "忘れないうちにメモしておく。", fr: "Je le note avant de l'oublier." },
    ],
    qs: [
      { t: "fill", q: "明るい＿＿＿、家に帰ろう。", fr: "Rentrons tant qu'il fait encore jour.",
        o: ["うちに", "とたんに", "たびに", "次第"], a: 0,
        e: "〜うちに = pendant que l'état favorable dure (avant qu'il ne change)." },
      { t: "meaning", q: "「子供が寝ているうちに掃除する」— sens de うちに ?",
        o: ["pendant que les enfants dorment (j'en profite)", "après que les enfants se réveillent", "chaque fois que les enfants dorment", "dès que les enfants dorment"], a: 0,
        e: "〜うちに = on profite de la durée d'un état." },
    ],
  },

  {
    id: "g029", g: "〜たとたん（に）", m: "au moment même où (et aussitôt)", f: "V-た + とたん（に）",
    c: "time", lv: 2, rel: ["g030", "g087"],
    note: "Deux événements quasi simultanés : à peine X accompli, Y survient — souvent de façon inattendue. La principale est au passé.",
    ex: [
      { jp: "立ち上がったとたん、めまいがした。", fr: "À peine m'étais-je levé que j'ai eu un vertige." },
      { jp: "ドアを開けたとたん、猫が飛び出した。", fr: "Au moment où j'ai ouvert la porte, le chat a bondi dehors." },
    ],
    qs: [
      { t: "fill", q: "家を出た＿＿＿、雨が降り出した。", fr: "À peine étais-je sorti qu'il s'est mis à pleuvoir.",
        o: ["とたんに", "うちに", "たびに", "おきに"], a: 0,
        e: "〜たとたん = juste après X, Y survient brusquement (souvent imprévu)." },
      { t: "nuance", q: "〜たとたん vs 〜次第 : différence ?",
        o: ["とたん : Y arrive de façon spontanée/imprévue après X (passé) ; 次第 : on fait Y volontairement dès que X (souvent futur)", "identiques", "次第 est familier", "とたん exprime une volonté"], a: 0,
        e: "とたん = survenue automatique/surprise ; 次第 = action volontaire « dès que »." },
    ],
  },

  {
    id: "g030", g: "〜次第", m: "dès que (et aussitôt) ; selon", f: "V-ます stem + 次第 ／ N + 次第（だ／で）",
    c: "time", lv: 2, rel: ["g029"],
    note: "(1) « Dès que X (sera fait), je ferai Y » — Y est une action volontaire, souvent future, pas de passé. (2) N + 次第 = « cela dépend de N ».",
    ex: [
      { jp: "詳細が分かり次第、連絡します。", fr: "Dès que j'aurai les détails, je vous contacterai." },
      { jp: "成功するかどうかは努力次第だ。", fr: "Le succès dépend des efforts." },
    ],
    qs: [
      { t: "fill", q: "準備ができ＿＿＿、出発します。", fr: "Dès que les préparatifs seront terminés, nous partirons.",
        o: ["次第", "とたんに", "うちに", "たびに"], a: 0,
        e: "V-ます stem + 次第 = dès que X (action future volontaire ensuite)." },
      { t: "meaning", q: "「結果は君の頑張り次第だ」— sens de 次第 ?",
        o: ["le résultat dépend de tes efforts", "le résultat survient dès tes efforts", "le résultat est contraire à tes efforts", "le résultat est avant tes efforts"], a: 0,
        e: "N + 次第 = « cela dépend de N »." },
    ],
  },

  {
    id: "g031", g: "〜てからでないと／てからでなければ", m: "pas avant d'avoir, seulement après", f: "V-て + からでないと／からでなければ",
    c: "time", lv: 3, rel: ["g020"],
    note: "Une condition préalable indispensable : tant que X n'est pas fait, Y est impossible. La principale est souvent négative.",
    ex: [
      { jp: "登録してからでないと、利用できません。", fr: "On ne peut l'utiliser qu'après s'être inscrit." },
      { jp: "確認してからでなければ、返事できない。", fr: "Je ne peux pas répondre sans avoir vérifié d'abord." },
    ],
    qs: [
      { t: "fill", q: "許可をもらって＿＿＿、入ってはいけない。", fr: "On ne peut pas entrer sans avoir obtenu l'autorisation.",
        o: ["からでないと", "とたんに", "うちに", "たびに"], a: 0,
        e: "〜てからでないと = condition préalable obligatoire avant l'action principale (souvent négative)." },
      { t: "meaning", q: "「予約してからでないと入れない」— sens ?",
        o: ["on ne peut entrer qu'après avoir réservé", "on entre dès qu'on réserve", "on entre avant de réserver", "on entre chaque fois qu'on réserve"], a: 0,
        e: "〜てからでないと + négation = impossible tant que la condition n'est pas remplie." },
    ],
  },

  {
    id: "g032", g: "〜際（に）", m: "au moment de, lors de (formel)", f: "V-dict／V-た／N＋の + 際（に）",
    c: "time", lv: 2, rel: ["g011", "g010"],
    note: "Équivalent formel de とき. Pour une occasion particulière. Fréquent dans les consignes et annonces.",
    ex: [
      { jp: "お降りの際は、足元にご注意ください。", fr: "À votre descente, prenez garde où vous mettez les pieds." },
      { jp: "申し込みの際に、身分証が必要です。", fr: "Lors de l'inscription, une pièce d'identité est requise." },
    ],
    qs: [
      { t: "fill", q: "ご利用の＿＿＿、注意事項をお読みください。", fr: "Lors de l'utilisation, veuillez lire les consignes.",
        o: ["際に", "うちに", "たびに", "とたんに"], a: 0,
        e: "〜際に = au moment de / lors de (registre formel, ≈ とき)." },
      { t: "nuance", q: "〜際に vs 〜とき : nuance ?",
        o: ["際に est plus formel (consignes, annonces) ; とき est neutre et courant", "identiques", "とき est plus formel", "際に est familier"], a: 0,
        e: "際に = registre soutenu ; とき = usage quotidien." },
    ],
  },

  /* ===================== CONDITION & CAUSE — g033 à g042 ===================== */

  {
    id: "g033", g: "〜おかげで", m: "grâce à (cause positive)", f: "V-plain／A／N＋の + おかげで",
    c: "condition", lv: 1, rel: ["g034"],
    note: "Cause d'un résultat HEUREUX. Reconnaissance. À l'opposé de せいで (résultat négatif).",
    ex: [
      { jp: "先生のおかげで合格できた。", fr: "C'est grâce au professeur que j'ai réussi." },
      { jp: "薬を飲んだおかげで、よく眠れた。", fr: "Grâce au médicament, j'ai bien dormi." },
    ],
    qs: [
      { t: "fill", q: "あなたの助け＿＿＿、間に合いました。", fr: "Grâce à ton aide, je suis arrivé à temps.",
        o: ["のおかげで", "のせいで", "のために", "のくせに"], a: 0,
        e: "〜おかげで = grâce à (cause d'un bon résultat)." },
      { t: "nuance", q: "〜おかげで vs 〜せいで : différence ?",
        o: ["おかげで = cause d'un résultat positif (gratitude) ; せいで = cause d'un résultat négatif (reproche)", "identiques", "せいで est positif", "おかげで est négatif"], a: 0,
        e: "おかげで → bon résultat ; せいで → mauvais résultat." },
    ],
  },

  {
    id: "g034", g: "〜せいで／せいか", m: "à cause de (cause négative) ; sans doute parce que", f: "V-plain／A／N＋の + せいで／せいか",
    c: "condition", lv: 1, rel: ["g033"],
    note: "Cause d'un résultat NÉGATIF, avec souvent une nuance de reproche. せいか = « peut-être à cause de » (cause incertaine).",
    ex: [
      { jp: "寝不足のせいで、頭が痛い。", fr: "À cause du manque de sommeil, j'ai mal à la tête." },
      { jp: "年のせいか、疲れやすい。", fr: "Peut-être à cause de l'âge, je me fatigue vite." },
    ],
    qs: [
      { t: "fill", q: "彼のミス＿＿＿、計画が失敗した。", fr: "À cause de son erreur, le plan a échoué.",
        o: ["のせいで", "のおかげで", "のために", "について"], a: 0,
        e: "〜せいで = cause d'un mauvais résultat (souvent reproche)." },
      { t: "meaning", q: "「気のせいか、音が聞こえた」— sens de せいか ?",
        o: ["peut-être est-ce une impression (cause incertaine)", "grâce à mon attention", "à cause certaine de mon humeur", "à propos de mon humeur"], a: 0,
        e: "〜せいか = cause supposée/incertaine (« peut-être à cause de »)." },
    ],
  },

  {
    id: "g035", g: "〜ので", m: "parce que, car (poli, logique)", f: "V-plain／A-い + ので ／ A-な＋な／N＋な + ので",
    c: "condition", lv: 1, rel: [],
    note: "Cause présentée comme objective et naturelle, ton plus poli et moins abrupt que から. Très fréquent dans les demandes polies.",
    ex: [
      { jp: "雨が降っているので、出かけません。", fr: "Comme il pleut, je ne sors pas." },
      { jp: "用事があるので、お先に失礼します。", fr: "Comme j'ai à faire, je me permets de partir avant vous." },
    ],
    qs: [
      { t: "fill", q: "体調が悪い＿＿＿、今日は休みます。", fr: "Comme je ne me sens pas bien, je me repose aujourd'hui.",
        o: ["ので", "のに", "くせに", "ものの"], a: 0,
        e: "〜ので = cause objective, ton poli." },
      { t: "nuance", q: "〜ので vs 〜から : nuance ?",
        o: ["ので = cause présentée comme objective, plus poli ; から = cause plus subjective/assertive", "identiques", "から est plus poli", "ので exprime une concession"], a: 0,
        e: "ので adoucit et objective la cause ; から peut sembler plus catégorique." },
    ],
  },

  {
    id: "g036", g: "〜からには", m: "puisque, maintenant que, dès lors que", f: "V-plain + からには",
    c: "condition", lv: 2, rel: ["g037"],
    note: "Puisqu'un fait est établi, on en tire une conséquence/résolution forte (« alors il faut absolument… »).",
    ex: [
      { jp: "約束したからには、必ず守る。", fr: "Puisque j'ai promis, je tiendrai parole sans faute." },
      { jp: "やるからには、全力でやる。", fr: "Du moment que je le fais, je le fais à fond." },
    ],
    qs: [
      { t: "fill", q: "引き受けた＿＿＿、最後まで責任を持つ。", fr: "Puisque j'ai accepté, j'assumerai jusqu'au bout.",
        o: ["からには", "おかげで", "とたんに", "うちに"], a: 0,
        e: "〜からには = puisque (suivi d'une résolution/conséquence forte)." },
      { t: "meaning", q: "「日本に来たからには、日本語を勉強しよう」— sens ?",
        o: ["maintenant que je suis venu au Japon, étudions le japonais", "à cause de ma venue au Japon", "avant de venir au Japon", "dès que je viens au Japon"], a: 0,
        e: "〜からには = à partir du moment où un fait est établi, résolution logique." },
    ],
  },

  {
    id: "g037", g: "〜以上（は）", m: "puisque, étant donné que, du moment que", f: "V-plain／A／N＋である + 以上（は）",
    c: "condition", lv: 2, rel: ["g036", "g038"],
    note: "Très proche de からには : un fait étant donné, on en tire une obligation/conclusion. Registre un peu plus écrit.",
    ex: [
      { jp: "学生である以上、勉強するのは当然だ。", fr: "Du moment qu'on est étudiant, il est normal d'étudier." },
      { jp: "引き受けた以上、最後までやる。", fr: "Étant donné que j'ai accepté, je vais jusqu'au bout." },
    ],
    qs: [
      { t: "fill", q: "プロである＿＿＿、結果を出さなければならない。", fr: "Étant donné qu'on est professionnel, il faut produire des résultats.",
        o: ["以上", "おかげで", "とたんに", "うちに"], a: 0,
        e: "〜以上（は）= puisque (un fait établi entraîne une obligation/conclusion)." },
      { t: "nuance", q: "〜以上は vs 〜からには : nuance ?",
        o: ["sens très proche ; 以上は est un peu plus écrit/logique, からには plus tourné vers la résolution personnelle", "totalement opposés", "以上は exprime le temps", "からには exprime une concession"], a: 0,
        e: "Quasi-synonymes ; nuance de registre et d'accent (logique vs résolution)." },
    ],
  },

  {
    id: "g038", g: "〜上は", m: "maintenant que, puisqu'on en est là (décision ferme)", f: "V-plain + 上は",
    c: "condition", lv: 3, rel: ["g037"],
    note: "Registre formel/écrit. Une fois un fait décisif posé, on adopte une attitude résolue. Proche de 以上は mais plus solennel.",
    ex: [
      { jp: "こうなった上は、やるしかない。", fr: "Maintenant qu'on en est là, il ne reste qu'à le faire." },
      { jp: "辞表を出した上は、後戻りできない。", fr: "Une fois la démission remise, on ne peut plus revenir en arrière." },
    ],
    qs: [
      { t: "fill", q: "決心した＿＿＿、迷わず進もう。", fr: "Maintenant que je suis décidé, avançons sans hésiter.",
        o: ["上は", "おきに", "たびに", "うちに"], a: 0,
        e: "〜上は = puisqu'on en est là (décision ferme, registre soutenu)." },
      { t: "usage", q: "Quelle phrase exprime le mieux une résolution après un fait irréversible ?",
        o: ["引き受けた上は、全力を尽くす", "引き受けたうちに、全力を尽くす", "引き受けたたびに、全力を尽くす", "引き受けたおきに、全力を尽くす"], a: 0,
        e: "〜上は = résolution ferme une fois le fait posé." },
    ],
  },

  {
    id: "g039", g: "〜さえ〜ば", m: "du moment que, si seulement", f: "Nom／V-ます stem + さえ + V-ば／A-ければ",
    c: "condition", lv: 2, rel: ["g066"],
    note: "Pose une condition unique et suffisante : « il suffit que X pour que Y ». Met l'accent sur le caractère décisif de cette seule condition.",
    ex: [
      { jp: "お金さえあれば、何でも買える。", fr: "Du moment qu'on a de l'argent, on peut tout acheter." },
      { jp: "君さえよければ、それでいい。", fr: "Du moment que ça te convient, c'est parfait." },
    ],
    qs: [
      { t: "fill", q: "薬を飲み＿＿＿、すぐ治るよ。", fr: "Il suffit de prendre le médicament pour guérir vite.",
        o: ["さえすれば", "ばかりで", "おきに", "たびに"], a: 0,
        e: "〜さえ〜ば = condition unique et suffisante (« il suffit de »)." },
      { t: "meaning", q: "「天気さえよければ、出かけよう」— sens de さえ〜ば ?",
        o: ["du moment que le temps est beau (seule condition)", "même si le temps est beau", "chaque fois qu'il fait beau", "à cause du beau temps"], a: 0,
        e: "〜さえ〜ば met en avant une condition unique suffisante." },
    ],
  },

  {
    id: "g040", g: "〜てこそ", m: "c'est seulement en faisant que, c'est grâce à cela que", f: "V-て + こそ",
    c: "condition", lv: 2, rel: ["g069", "g070"],
    note: "Souligne qu'un résultat n'est atteint qu'À CONDITION de faire X. Ton appréciatif/sentencieux.",
    ex: [
      { jp: "努力してこそ、成功できる。", fr: "Ce n'est qu'en faisant des efforts qu'on peut réussir." },
      { jp: "経験してこそ分かることがある。", fr: "Il y a des choses qu'on ne comprend qu'en les vivant." },
    ],
    qs: [
      { t: "fill", q: "助け合っ＿＿＿、本当のチームと言える。", fr: "C'est seulement en s'entraidant qu'on peut parler d'une vraie équipe.",
        o: ["てこそ", "たびに", "てから", "ながら"], a: 0,
        e: "〜てこそ = c'est uniquement en faisant X que Y devient possible." },
      { t: "meaning", q: "「健康があってこそ、仕事もできる」— sens de てこそ ?",
        o: ["c'est seulement parce qu'on a la santé qu'on peut travailler", "même si on a la santé", "chaque fois qu'on a la santé", "avant d'avoir la santé"], a: 0,
        e: "〜てこそ insiste sur la condition indispensable au résultat." },
    ],
  },

  {
    id: "g041", g: "〜ためには", m: "pour, afin de (but exigeant un effort)", f: "V-dict／N＋の + ためには",
    c: "condition", lv: 1, rel: ["g079"],
    note: "Présente un objectif puis ce qu'il faut faire pour l'atteindre. Le sujet a un contrôle volontaire sur l'action.",
    ex: [
      { jp: "合格するためには、毎日勉強する必要がある。", fr: "Pour réussir, il faut étudier tous les jours." },
      { jp: "健康のためには、運動が大切だ。", fr: "Pour la santé, l'exercice est important." },
    ],
    qs: [
      { t: "fill", q: "夢を実現する＿＿＿、努力を続けよう。", fr: "Pour réaliser son rêve, continuons à faire des efforts.",
        o: ["ためには", "おかげで", "とたんに", "うちに"], a: 0,
        e: "〜ためには = afin de (but volontaire), suivi des moyens nécessaires." },
      { t: "nuance", q: "〜ために (but) vs 〜ように (but) : quand emploie-t-on ように ?",
        o: ["ように s'emploie avec des verbes non volontaires/potentiels (見えるように) ; ために avec des verbes volontaires (合格するために)", "identiques", "ために concerne les états", "ように exprime une cause"], a: 0,
        e: "Verbe volontaire → ために ; verbe potentiel/non volontaire → ように." },
    ],
  },

  {
    id: "g042", g: "〜かわりに", m: "à la place de ; en échange de ; mais en contrepartie", f: "V-plain／N＋の + かわりに",
    c: "condition", lv: 1, rel: [],
    note: "Trois emplois : substitution (« au lieu de »), compensation (« en échange »), contrepartie (« certes X, mais Y »).",
    ex: [
      { jp: "母のかわりに、私が行く。", fr: "J'y vais à la place de ma mère." },
      { jp: "この店は安いかわりに、味は普通だ。", fr: "Ce restaurant est bon marché, mais en contrepartie le goût est ordinaire." },
    ],
    qs: [
      { t: "fill", q: "外食する＿＿＿、家で料理した。", fr: "Au lieu de manger dehors, j'ai cuisiné à la maison.",
        o: ["かわりに", "おかげで", "とたんに", "うちに"], a: 0,
        e: "〜かわりに = à la place de (substitution)." },
      { t: "meaning", q: "「手伝うかわりに、お昼をおごってね」— sens ?",
        o: ["je t'aide, mais en échange paie-moi le déjeuner", "je t'aide grâce au déjeuner", "je t'aide avant le déjeuner", "je t'aide chaque fois au déjeuner"], a: 0,
        e: "〜かわりに peut exprimer la contrepartie/l'échange." },
    ],
  },

  /* ===================== MODALITÉ & JUGEMENT — g043 à g065 ===================== */

  {
    id: "g043", g: "〜に違いない", m: "c'est sûrement, sans aucun doute", f: "V-plain／A／N + に違いない",
    c: "modality", lv: 1, rel: ["g044"],
    note: "Conviction forte fondée sur des indices. « Ça ne peut être que… ». Plus posé/écrit que に決まっている.",
    ex: [
      { jp: "電気が消えている。留守に違いない。", fr: "La lumière est éteinte. Il doit être absent, à coup sûr." },
      { jp: "あの様子では、合格したに違いない。", fr: "Vu son air, il a sûrement réussi." },
    ],
    qs: [
      { t: "fill", q: "彼は顔色が悪い。具合が悪い＿＿＿。", fr: "Il a mauvaise mine. Il doit sûrement être souffrant.",
        o: ["に違いない", "はずがない", "わけがない", "に過ぎない"], a: 0,
        e: "〜に違いない = conviction forte fondée sur des indices." },
      { t: "nuance", q: "〜に違いない vs 〜に決まっている : nuance ?",
        o: ["に違いない = conviction raisonnée (posé) ; に決まっている = certitude subjective tranchée (familier)", "identiques", "に決まっている est formel", "に違いない exprime un doute"], a: 0,
        e: "に決まっている est plus catégorique et oral ; に違いない est plus mesuré." },
    ],
  },

  {
    id: "g044", g: "〜に決まっている", m: "c'est forcément, pour sûr (ton tranché)", f: "V-plain／A／N + に決まっている",
    c: "modality", lv: 1, rel: ["g043"],
    note: "Certitude subjective et catégorique, ton familier. « Évidemment que… / forcément… ».",
    ex: [
      { jp: "こんな簡単な問題、できるに決まっている。", fr: "Un problème aussi simple, évidemment que je sais le faire." },
      { jp: "無理に決まっているよ。", fr: "C'est forcément impossible, voyons." },
    ],
    qs: [
      { t: "fill", q: "あんなに練習したんだから、上手に＿＿＿。", fr: "Avec tout cet entraînement, il est forcément bon.",
        o: ["決まっている", "違いない", "過ぎない", "ほかならない"], a: 0,
        e: "〜に決まっている = certitude subjective et tranchée (ton familier)." },
      { t: "meaning", q: "「子供が喜ぶに決まっている」— sens ?",
        o: ["les enfants seront forcément contents", "les enfants pourraient être contents", "les enfants ne seront pas contents", "les enfants sont à propos contents"], a: 0,
        e: "〜に決まっている = « c'est sûr et certain » (conviction forte)." },
    ],
  },

  {
    id: "g045", g: "〜はずだ", m: "devrait, normalement c'est ainsi", f: "V-plain／A／N＋の + はずだ",
    c: "modality", lv: 1, rel: ["g046"],
    note: "Déduction logique fondée sur une raison objective : « selon toute logique, ça devrait être ainsi ».",
    ex: [
      { jp: "彼は今日来るはずだ。", fr: "Il devrait venir aujourd'hui (logiquement)." },
      { jp: "この時間なら、店は開いているはずだ。", fr: "À cette heure, le magasin devrait être ouvert." },
    ],
    qs: [
      { t: "fill", q: "もう手紙を出したから、明日届く＿＿＿。", fr: "Comme j'ai posté la lettre, elle devrait arriver demain.",
        o: ["はずだ", "わけがない", "に過ぎない", "ことはない"], a: 0,
        e: "〜はずだ = déduction logique fondée sur une raison." },
      { t: "nuance", q: "〜はずだ vs 〜に違いない : nuance ?",
        o: ["はずだ = attente logique objective ; に違いない = conviction subjective forte", "identiques", "はずだ est plus subjectif", "に違いない est une déduction neutre"], a: 0,
        e: "はずだ s'appuie sur la logique/les faits ; に違いない sur une forte conviction." },
    ],
  },

  {
    id: "g046", g: "〜はずがない", m: "il est impossible que, ça ne peut pas être", f: "V-plain／A／N＋の + はずがない",
    c: "modality", lv: 1, rel: ["g045", "g050"],
    note: "Négation logique forte : « il n'y a aucune raison pour que ce soit ainsi ». Opposé de はずだ.",
    ex: [
      { jp: "彼がそんな嘘をつくはずがない。", fr: "Il est impossible qu'il mente ainsi." },
      { jp: "こんな時間に電話が来るはずがない。", fr: "Il ne peut pas y avoir d'appel à cette heure." },
    ],
    qs: [
      { t: "fill", q: "あんな真面目な人が遅刻する＿＿＿。", fr: "Il est impossible qu'une personne aussi sérieuse soit en retard.",
        o: ["はずがない", "はずだ", "に違いない", "に決まっている"], a: 0,
        e: "〜はずがない = négation logique forte (« ça ne peut pas être »)." },
      { t: "nuance", q: "〜はずがない vs 〜わけがない : nuance ?",
        o: ["sens très proche (« impossible ») ; わけがない est souvent plus oral/emphatique", "totalement opposés", "はずがない est positif", "わけがない exprime une cause"], a: 0,
        e: "Quasi-synonymes ; わけがない est un peu plus familier/insistant." },
    ],
  },

  {
    id: "g047", g: "〜べきだ", m: "devrait, il faut (obligation morale)", f: "V-dict + べきだ （する→すべき／するべき）",
    c: "modality", lv: 1, rel: ["g048"],
    note: "Devoir moral ou conseil fort : « c'est ce qu'il convient de faire ». Pas pour les lois/règlements (utiliser なければならない).",
    ex: [
      { jp: "約束は守るべきだ。", fr: "On doit tenir ses promesses." },
      { jp: "もっと早く相談すべきだった。", fr: "J'aurais dû consulter plus tôt." },
    ],
    qs: [
      { t: "fill", q: "間違ったら、すぐ謝る＿＿＿。", fr: "Quand on se trompe, on doit s'excuser tout de suite.",
        o: ["べきだ", "はずがない", "に過ぎない", "わけではない"], a: 0,
        e: "〜べきだ = devoir moral / conseil fort." },
      { t: "nuance", q: "〜べきだ vs 〜なければならない : nuance ?",
        o: ["べきだ = jugement moral/conseil (« il convient de ») ; なければならない = obligation factuelle/règle", "identiques", "べきだ concerne les lois", "なければならない est un conseil"], a: 0,
        e: "べきだ = devoir moral ; なければならない = nécessité/règle concrète." },
    ],
  },

  {
    id: "g048", g: "〜べきではない", m: "ne devrait pas, il ne faut pas (moral)", f: "V-dict + べきではない",
    c: "modality", lv: 1, rel: ["g047"],
    note: "Interdiction morale / déconseil fort. Négation de べきだ.",
    ex: [
      { jp: "人の悪口を言うべきではない。", fr: "On ne devrait pas médire d'autrui." },
      { jp: "そんなことで諦めるべきではない。", fr: "Tu ne devrais pas abandonner pour si peu." },
    ],
    qs: [
      { t: "fill", q: "感情だけで判断する＿＿＿。", fr: "On ne devrait pas juger uniquement sur l'émotion.",
        o: ["べきではない", "に違いない", "はずだ", "わけだ"], a: 0,
        e: "〜べきではない = déconseil/interdiction morale." },
      { t: "meaning", q: "「秘密を漏らすべきではない」— sens ?",
        o: ["on ne devrait pas divulguer le secret", "il faut divulguer le secret", "on divulgue forcément le secret", "on a divulgué le secret"], a: 0,
        e: "〜べきではない = « il ne faut pas (moralement) »." },
    ],
  },

  {
    id: "g049", g: "〜わけだ", m: "c'est donc logique que, voilà pourquoi", f: "V-plain／A／N＋な／である + わけだ",
    c: "modality", lv: 1, rel: ["g050", "g051", "g056"],
    note: "Conclusion logique tirée d'une cause : « ça explique que… / c'est donc pour ça que… ». Aussi pour exprimer qu'on vient de comprendre.",
    ex: [
      { jp: "彼は十年も日本にいた。道理で日本語が上手なわけだ。", fr: "Il a vécu dix ans au Japon. Pas étonnant qu'il parle si bien." },
      { jp: "三時間も寝ていない。眠いわけだ。", fr: "Je n'ai pas dormi trois heures. Forcément que j'ai sommeil." },
    ],
    qs: [
      { t: "fill", q: "エアコンが壊れている。暑い＿＿＿だ。", fr: "La clim est en panne. Voilà pourquoi il fait chaud.",
        o: ["わけ", "はず", "つもり", "もの"], a: 0,
        e: "〜わけだ = conclusion logique « voilà pourquoi / forcément »." },
      { t: "meaning", q: "「フランスに住んでいたのか。フランス語が話せるわけだ」— sens de わけだ ?",
        o: ["ça explique qu'il sache parler français", "il ne sait pas le français", "il devrait parler français", "il veut parler français"], a: 0,
        e: "〜わけだ relie une cause apprise à une conséquence comprise." },
    ],
  },

  {
    id: "g050", g: "〜わけがない", m: "il est impossible que, ça ne peut pas être", f: "V-plain／A／N＋な／である + わけがない",
    c: "modality", lv: 2, rel: ["g049", "g046"],
    note: "Nie fortement une possibilité : « il n'y a aucune raison que ce soit vrai ». Ton souvent oral et emphatique.",
    ex: [
      { jp: "あんなに練習して、負けるわけがない。", fr: "Avec un tel entraînement, il ne peut pas perdre." },
      { jp: "彼が知らないわけがない。", fr: "Il ne peut pas ne pas le savoir." },
    ],
    qs: [
      { t: "fill", q: "そんなうまい話が本当である＿＿＿。", fr: "Une histoire aussi belle ne peut pas être vraie.",
        o: ["わけがない", "わけだ", "わけではない", "はずだ"], a: 0,
        e: "〜わけがない = impossibilité forte (« ça ne peut pas être »)." },
      { t: "nuance", q: "〜わけがない vs 〜わけではない : différence ?",
        o: ["わけがない = totalement impossible ; わけではない = pas nécessairement / ce n'est pas que", "identiques", "わけがない = partiellement vrai", "わけではない = totalement impossible"], a: 0,
        e: "わけがない nie en bloc ; わけではない nie partiellement." },
    ],
  },

  {
    id: "g051", g: "〜わけではない", m: "ce n'est pas que, pas nécessairement", f: "V-plain／A／N＋という + わけではない",
    c: "modality", lv: 2, rel: ["g049", "g050"],
    note: "Négation partielle/nuancée : on corrige une conclusion hâtive. « Ce n'est pas (entièrement) le cas que… ».",
    ex: [
      { jp: "嫌いなわけではないが、あまり食べない。", fr: "Ce n'est pas que je n'aime pas, mais je n'en mange pas beaucoup." },
      { jp: "全部分かったわけではない。", fr: "Je n'ai pas tout compris pour autant." },
    ],
    qs: [
      { t: "fill", q: "お金がない＿＿＿が、無駄遣いはしたくない。", fr: "Ce n'est pas que je n'ai pas d'argent, mais je ne veux pas le gaspiller.",
        o: ["わけではない", "わけがない", "に違いない", "はずだ"], a: 0,
        e: "〜わけではない = négation partielle/nuancée (« ce n'est pas que… »)." },
      { t: "meaning", q: "「日本語が話せないわけではない」— sens ?",
        o: ["ce n'est pas que je ne sache pas parler japonais (je sais un peu)", "je ne sais absolument pas parler", "je dois parler japonais", "je parle forcément japonais"], a: 0,
        e: "〜わけではない atténue : la négation n'est pas totale." },
    ],
  },

  {
    id: "g052", g: "〜わけにはいかない", m: "ne pas pouvoir se permettre de (moralement/socialement)", f: "V-dict + わけにはいかない ／ V-ない + わけにはいかない",
    c: "modality", lv: 2, rel: ["g049"],
    note: "Impossibilité non physique mais morale/sociale : on ne peut pas faire X à cause de circonstances, d'un devoir. À la forme négative : « on ne peut pas ne pas… » (= il faut).",
    ex: [
      { jp: "大事な会議だから、休むわけにはいかない。", fr: "C'est une réunion importante, je ne peux pas me permettre d'être absent." },
      { jp: "約束したから、行かないわけにはいかない。", fr: "J'ai promis, je ne peux pas ne pas y aller." },
    ],
    qs: [
      { t: "fill", q: "みんなが待っているので、今やめる＿＿＿。", fr: "Tout le monde attend, je ne peux pas me permettre d'arrêter maintenant.",
        o: ["わけにはいかない", "わけがない", "はずがない", "に過ぎない"], a: 0,
        e: "〜わけにはいかない = impossibilité morale/sociale de faire X." },
      { t: "meaning", q: "「秘密を話さないわけにはいかなかった」— sens ?",
        o: ["je n'ai pas pu faire autrement que de révéler le secret", "je n'ai jamais révélé le secret", "je pouvais facilement le taire", "je devais le taire"], a: 0,
        e: "V-ない + わけにはいかない = on ne peut pas s'abstenir de faire (= obligation)." },
    ],
  },

  {
    id: "g053", g: "〜ものだ", m: "c'est la norme / on est censé ; autrefois (nostalgie)", f: "V-dict／V-た／A + ものだ",
    c: "modality", lv: 1, rel: ["g054"],
    note: "Vérité générale / norme sociale (« c'est ainsi qu'on fait »). Avec V-た : souvenir nostalgique récurrent.",
    ex: [
      { jp: "年を取ると、忘れっぽくなるものだ。", fr: "En vieillissant, on devient distrait, c'est dans l'ordre des choses." },
      { jp: "子供の頃はよく川で遊んだものだ。", fr: "Enfant, je jouais souvent à la rivière (nostalgie)." },
    ],
    qs: [
      { t: "fill", q: "誰でも失敗はする＿＿＿。気にするな。", fr: "Tout le monde fait des erreurs, c'est normal. Ne t'en fais pas.",
        o: ["ものだ", "はずがない", "に過ぎない", "わけがない"], a: 0,
        e: "〜ものだ = vérité générale / norme." },
      { t: "meaning", q: "「昔はよく映画を見たものだ」— sens de ものだ ?",
        o: ["évocation nostalgique d'une habitude passée", "obligation présente", "impossibilité", "supposition"], a: 0,
        e: "V-た + ものだ = souvenir nostalgique d'actions répétées." },
    ],
  },

  {
    id: "g054", g: "〜ものだから", m: "c'est parce que (excuse, justification)", f: "V-plain／A／N＋な + ものだから",
    c: "modality", lv: 2, rel: ["g053"],
    note: "Donne une raison/excuse en insistant sur le caractère involontaire ou inévitable. Souvent pour se justifier.",
    ex: [
      { jp: "道が込んでいたものだから、遅れました。", fr: "C'est parce que la route était bouchée que je suis en retard." },
      { jp: "あまりに眠かったものだから、寝てしまった。", fr: "J'avais tellement sommeil que je me suis endormi." },
    ],
    qs: [
      { t: "fill", q: "急いでいた＿＿＿、つい忘れてしまった。", fr: "Comme j'étais pressé, j'ai fini par oublier.",
        o: ["ものだから", "わけがない", "べきだ", "とはいえ"], a: 0,
        e: "〜ものだから = justification insistant sur une raison subie." },
      { t: "nuance", q: "〜ものだから vs 〜から : nuance ?",
        o: ["ものだから insiste sur une excuse/raison involontaire et forte ; から est neutre", "identiques", "から est une excuse", "ものだから exprime un but"], a: 0,
        e: "ものだから = ton justificatif appuyé ; から = simple cause." },
    ],
  },

  {
    id: "g055", g: "〜かのようだ／かのように", m: "comme si, on dirait que", f: "V-plain／A／N＋である + かのようだ",
    c: "modality", lv: 2, rel: ["g037"],
    note: "Comparaison avec une situation irréelle/fictive : « comme si (alors que ce n'est pas le cas) ».",
    ex: [
      { jp: "彼はまるで何も知らないかのように振る舞った。", fr: "Il s'est comporté comme s'il ne savait rien." },
      { jp: "夢を見ているかのようだった。", fr: "C'était comme si je rêvais." },
    ],
    qs: [
      { t: "fill", q: "彼女はまるで女王＿＿＿振る舞う。", fr: "Elle se comporte comme si elle était une reine.",
        o: ["であるかのように", "に違いなく", "に過ぎず", "どころか"], a: 0,
        e: "〜かのように = comme si (comparaison avec une situation fictive)." },
      { t: "meaning", q: "「まるで時間が止まったかのようだった」— sens ?",
        o: ["c'était comme si le temps s'était arrêté (irréel)", "le temps s'est vraiment arrêté", "le temps devrait s'arrêter", "le temps s'arrête chaque fois"], a: 0,
        e: "〜かのようだ = analogie avec une situation contraire à la réalité." },
    ],
  },

  {
    id: "g056", g: "〜というわけだ", m: "c'est donc que, en somme, voilà pourquoi", f: "Phrase + というわけだ",
    c: "modality", lv: 2, rel: ["g049"],
    note: "Conclut un raisonnement en reformulant : « cela revient à dire que… / c'est donc pour ça que… ».",
    ex: [
      { jp: "つまり、彼は嘘をついていたというわけだ。", fr: "Autrement dit, c'est qu'il mentait." },
      { jp: "道が混んでいて、遅れたというわけだ。", fr: "Bref, la route était bouchée, voilà pourquoi je suis en retard." },
    ],
    qs: [
      { t: "fill", q: "全員が反対した。つまり計画は中止という＿＿＿。", fr: "Tous étaient contre. En somme, le projet est annulé.",
        o: ["わけだ", "はずがない", "つもりだ", "ものだ"], a: 0,
        e: "〜というわけだ = conclusion reformulée d'un raisonnement." },
      { t: "usage", q: "Quelle expression conclut un raisonnement en reformulant ?",
        o: ["というわけだ", "に過ぎない", "に違いない", "どころか"], a: 0,
        e: "〜というわけだ sert à récapituler/conclure logiquement." },
    ],
  },

  {
    id: "g057", g: "〜に過ぎない", m: "ne fait que, n'est rien de plus que, seulement", f: "Nom／V-dict + に過ぎない",
    c: "modality", lv: 2, rel: ["g058"],
    note: "Minimise : « ce n'est rien d'autre que… / juste… ». Souligne le caractère limité, peu important.",
    ex: [
      { jp: "それは噂に過ぎない。", fr: "Ce n'est qu'une rumeur." },
      { jp: "私は意見を述べたに過ぎない。", fr: "Je n'ai fait que donner mon avis." },
    ],
    qs: [
      { t: "fill", q: "今の成功は始まり＿＿＿。油断は禁物だ。", fr: "Le succès actuel n'est qu'un début. Pas de relâchement.",
        o: ["に過ぎない", "に違いない", "に決まっている", "に反する"], a: 0,
        e: "〜に過ぎない = ce n'est rien de plus que (minimisation)." },
      { t: "meaning", q: "「彼は一社員に過ぎない」— sens ?",
        o: ["il n'est qu'un simple employé (rien de plus)", "il est sûrement un employé", "il devrait être employé", "il n'est pas employé"], a: 0,
        e: "〜に過ぎない réduit à « seulement, rien de plus »." },
    ],
  },

  {
    id: "g058", g: "〜に他ならない", m: "n'est rien d'autre que, c'est précisément", f: "Nom + に他ならない",
    c: "modality", lv: 3, rel: ["g057"],
    note: "Affirme une identification exclusive et catégorique : « c'est exactement cela et rien d'autre ». Registre soutenu.",
    ex: [
      { jp: "成功は努力の結果に他ならない。", fr: "Le succès n'est rien d'autre que le fruit des efforts." },
      { jp: "それは愛情の表れに他ならない。", fr: "Ce n'est rien d'autre qu'une marque d'affection." },
    ],
    qs: [
      { t: "fill", q: "この勝利はチーム全員の努力の成果＿＿＿。", fr: "Cette victoire n'est rien d'autre que le fruit des efforts de toute l'équipe.",
        o: ["に他ならない", "に過ぎない", "に違いない", "に反する"], a: 0,
        e: "〜に他ならない = identification exclusive et forte (« c'est précisément cela »)." },
      { t: "nuance", q: "〜に他ならない vs 〜に過ぎない : nuance ?",
        o: ["に他ならない met en valeur (« c'est précisément X ») ; に過ぎない minimise (« ce n'est que X »)", "identiques", "に他ならない minimise", "に過ぎない valorise"], a: 0,
        e: "Sens opposés en intensité : valorisation vs minimisation." },
    ],
  },

  {
    id: "g059", g: "〜てたまらない", m: "tellement que c'est insupportable (sensation/émotion)", f: "V-て／A-くて + たまらない",
    c: "modality", lv: 1, rel: ["g060", "g061"],
    note: "Exprime une sensation ou un désir si fort qu'on ne peut le supporter. Sentiment spontané et intense.",
    ex: [
      { jp: "暑くてたまらない。", fr: "Il fait une chaleur insupportable." },
      { jp: "彼女に会いたくてたまらない。", fr: "J'ai tellement envie de la voir que je n'en peux plus." },
    ],
    qs: [
      { t: "fill", q: "新しいゲームがやりたく＿＿＿。", fr: "J'ai tellement envie de jouer au nouveau jeu que je n'y tiens plus.",
        o: ["てたまらない", "ものだ", "に過ぎない", "わけがない"], a: 0,
        e: "〜てたまらない = sensation/désir intense « insupportable »." },
      { t: "nuance", q: "〜てたまらない vs 〜てしょうがない : nuance ?",
        o: ["sens très proche ; しょうがない est plus familier/oral", "totalement opposés", "たまらない est familier", "しょうがない exprime une obligation"], a: 0,
        e: "Quasi-synonymes ; てしょうがない est plus relâché." },
    ],
  },

  {
    id: "g060", g: "〜てしょうがない／てしようがない", m: "tellement que c'est insupportable (familier)", f: "V-て／A-くて + しょうがない",
    c: "modality", lv: 1, rel: ["g059"],
    note: "Variante orale et courante de てたまらない. « C'est à n'en plus pouvoir ».",
    ex: [
      { jp: "退屈でしょうがない。", fr: "Je m'ennuie à mourir." },
      { jp: "気になってしょうがない。", fr: "Ça me préoccupe au point de ne plus pouvoir penser à autre chose." },
    ],
    qs: [
      { t: "fill", q: "足が痛く＿＿＿、もう歩けない。", fr: "J'ai tellement mal au pied que je ne peux plus marcher.",
        o: ["てしょうがない", "に違いない", "わけだ", "ものの"], a: 0,
        e: "〜てしょうがない = sensation intense, registre familier." },
      { t: "meaning", q: "「眠くてしょうがない」— sens ?",
        o: ["j'ai un sommeil irrépressible", "je devrais dormir", "je ne dors jamais", "je dors chaque fois"], a: 0,
        e: "〜てしょうがない = état/sensation qu'on ne maîtrise plus." },
    ],
  },

  {
    id: "g061", g: "〜てならない", m: "tellement que, au plus haut point (naturel, inévitable)", f: "V-て／A-くて + ならない",
    c: "modality", lv: 2, rel: ["g059"],
    note: "Comme てたまらない mais plus écrit ; souvent avec des sentiments spontanés (心配, 残念, 気になる).",
    ex: [
      { jp: "試験の結果が心配でならない。", fr: "Je suis terriblement inquiet du résultat de l'examen." },
      { jp: "彼の将来が案じられてならない。", fr: "Je ne peux m'empêcher de me faire du souci pour son avenir." },
    ],
    qs: [
      { t: "fill", q: "故郷のことが思い出され＿＿＿。", fr: "Je ne peux m'empêcher de penser à mon pays natal.",
        o: ["てならない", "に過ぎない", "わけがない", "ものだから"], a: 0,
        e: "〜てならない = sentiment spontané intense (registre soutenu)." },
      { t: "nuance", q: "〜てならない s'emploie surtout avec :",
        o: ["des sentiments/sensations spontanés (心配だ、気になる…)", "des ordres", "des interdictions", "des prévisions météo"], a: 0,
        e: "てならない privilégie les émotions involontaires." },
    ],
  },

  {
    id: "g062", g: "〜ことなく", m: "sans faire, sans jamais", f: "V-dict + ことなく",
    c: "modality", lv: 3, rel: [],
    note: "Registre écrit pour « sans (jamais) faire X » : équivalent soutenu de 〜ないで.",
    ex: [
      { jp: "彼は休むことなく働き続けた。", fr: "Il a continué à travailler sans jamais se reposer." },
      { jp: "最後まで諦めることなく戦った。", fr: "Il s'est battu sans abandonner jusqu'au bout." },
    ],
    qs: [
      { t: "fill", q: "立ち止まる＿＿＿、前へ進んだ。", fr: "Il a avancé sans s'arrêter.",
        o: ["ことなく", "ながらも", "わけで", "おかげで"], a: 0,
        e: "〜ことなく = sans faire X (registre écrit, ≈ ないで)." },
      { t: "nuance", q: "〜ことなく vs 〜ないで : nuance ?",
        o: ["même sens ; ことなく est plus formel/écrit", "opposés", "ないで est plus formel", "ことなく exprime une cause"], a: 0,
        e: "ことなく = variante soutenue de ないで." },
    ],
  },

  {
    id: "g063", g: "〜ことから", m: "de par le fait que, c'est de là que", f: "V-plain／A／N＋である + ことから",
    c: "modality", lv: 3, rel: ["g049"],
    note: "Indique le fait/l'indice d'où découle un jugement, un nom ou une conclusion. Souvent pour expliquer une origine (de nom, de surnom).",
    ex: [
      { jp: "煙が出ていることから、火事だと分かった。", fr: "Comme de la fumée s'échappait, on a compris qu'il y avait le feu." },
      { jp: "富士山に似ていることから、「○○富士」と呼ばれる。", fr: "Parce qu'il ressemble au mont Fuji, on l'appelle « le Fuji de ○○ »." },
    ],
    qs: [
      { t: "fill", q: "足跡が残っている＿＿＿、誰かが来たと分かる。", fr: "Au vu des traces de pas, on comprend que quelqu'un est venu.",
        o: ["ことから", "ものだから", "とはいえ", "うちに"], a: 0,
        e: "〜ことから = à partir de cet indice/fait, on tire une conclusion." },
      { t: "meaning", q: "「赤いことから『赤橋』と名付けられた」— sens de ことから ?",
        o: ["c'est de sa couleur rouge que vient le nom « pont rouge »", "malgré sa couleur rouge", "à propos du rouge", "avant d'être rouge"], a: 0,
        e: "〜ことから explique l'origine d'un nom/jugement à partir d'un fait." },
    ],
  },

  {
    id: "g064", g: "〜ことになっている", m: "il est prévu / convenu / la règle veut que", f: "V-dict／V-ない + ことになっている",
    c: "modality", lv: 1, rel: [],
    note: "Indique une règle, un usage ou un arrangement déjà établi qui s'impose. « C'est ainsi qu'il est prévu/convenu ».",
    ex: [
      { jp: "会議は十時に始まることになっている。", fr: "La réunion est censée commencer à dix heures." },
      { jp: "ここでは靴を脱ぐことになっている。", fr: "Ici, la règle veut qu'on enlève ses chaussures." },
    ],
    qs: [
      { t: "fill", q: "校内では携帯を使わない＿＿＿。", fr: "Dans l'école, il est convenu de ne pas utiliser son téléphone.",
        o: ["ことになっている", "ことはない", "ものだ", "に過ぎない"], a: 0,
        e: "〜ことになっている = règle/arrangement établi qui s'impose." },
      { t: "nuance", q: "〜ことになっている vs 〜ことにしている : différence ?",
        o: ["ことになっている = règle externe/convenue ; ことにしている = règle qu'on s'impose à soi-même", "identiques", "ことにしている = règle externe", "ことになっている = habitude personnelle"], a: 0,
        e: "なっている : décidé/établi de l'extérieur. している : décision/habitude personnelle." },
    ],
  },

  {
    id: "g065", g: "〜ことはない", m: "ce n'est pas la peine de, inutile de", f: "V-dict + ことはない",
    c: "modality", lv: 2, rel: ["g064"],
    note: "Rassure ou conseille : « il n'est pas nécessaire de faire X ». Souvent pour calmer une inquiétude.",
    ex: [
      { jp: "そんなに心配することはない。", fr: "Il n'y a pas de quoi t'inquiéter autant." },
      { jp: "わざわざ来ることはないよ。", fr: "Ce n'est pas la peine de te déplacer exprès." },
    ],
    qs: [
      { t: "fill", q: "まだ時間があるから、急ぐ＿＿＿。", fr: "Il reste du temps, ce n'est pas la peine de se presser.",
        o: ["ことはない", "ことになっている", "に違いない", "べきだ"], a: 0,
        e: "〜ことはない = il n'est pas nécessaire de (conseil rassurant)." },
      { t: "meaning", q: "「君が謝ることはない」— sens ?",
        o: ["ce n'est pas à toi de t'excuser / inutile que tu t'excuses", "tu dois absolument t'excuser", "tu t'excuses toujours", "tu t'es excusé"], a: 0,
        e: "〜ことはない = inutilité/absence de nécessité." },
    ],
  },

  /* ===================== EXPRESSIONS & EMPHASE — g066 à g090 ===================== */

  {
    id: "g066", g: "〜さえ", m: "même, ne serait-ce que (emphase)", f: "N（＋助詞）+ さえ ／ V-ます stem + さえ",
    c: "express", lv: 2, rel: ["g067", "g039"],
    note: "Cite un exemple extrême pour souligner (« même X, c'est dire »). Aussi dans la structure さえ〜ば (condition unique).",
    ex: [
      { jp: "専門家でさえ間違えることがある。", fr: "Même les experts peuvent se tromper." },
      { jp: "水さえあれば、しばらく生きられる。", fr: "Du moment qu'on a de l'eau, on peut survivre un temps." },
    ],
    qs: [
      { t: "fill", q: "忙しくて、食事をする時間＿＿＿ない。", fr: "Je suis si occupé que je n'ai même pas le temps de manger.",
        o: ["さえ", "こそ", "ばかり", "ながら"], a: 0,
        e: "〜さえ cite un cas extrême pour souligner (« même pas le temps de manger »)." },
      { t: "nuance", q: "〜さえ vs 〜すら : nuance ?",
        o: ["sens proche (« même ») ; すら est plus écrit/littéraire et plus emphatique", "opposés", "すら est familier", "さえ est uniquement conditionnel"], a: 0,
        e: "さえ et すら = « même » ; すら est plus soutenu." },
    ],
  },

  {
    id: "g067", g: "〜すら", m: "même (encore plus fort que さえ)", f: "N（＋助詞）+ すら",
    c: "express", lv: 3, rel: ["g066"],
    note: "Variante littéraire et emphatique de さえ. Cite un cas extrême : « même… (à plus forte raison le reste) ».",
    ex: [
      { jp: "彼は自分の名前すら書けなかった。", fr: "Il ne savait même pas écrire son propre nom." },
      { jp: "そんなことは子供ですら知っている。", fr: "Même un enfant sait cela." },
    ],
    qs: [
      { t: "fill", q: "疲れすぎて、立つことすら＿＿＿。", fr: "Tellement épuisé qu'il ne pouvait même pas se tenir debout.",
        o: ["できなかった", "できた", "したかった", "するつもりだ"], a: 0,
        e: "〜すら cite un minimum extrême ; le prédicat est souvent négatif (« même pas »)." },
      { t: "meaning", q: "「挨拶すらしない」— sens de すら ?",
        o: ["il ne fait même pas les salutations (le strict minimum)", "il fait seulement les salutations", "il fait toujours les salutations", "il devrait saluer"], a: 0,
        e: "〜すら souligne qu'on n'atteint même pas le minimum attendu." },
    ],
  },

  {
    id: "g068", g: "〜だって", m: "même ; il paraît que (familier)", f: "N + だって",
    c: "express", lv: 2, rel: ["g066"],
    note: "Familier. (1) « même X » (comme でも) ; (2) « il paraît que / on dit que » (ouï-dire oral).",
    ex: [
      { jp: "子供だってそのくらい分かる。", fr: "Même un enfant comprend ça." },
      { jp: "彼、来月結婚するんだって。", fr: "Il paraît qu'il se marie le mois prochain." },
    ],
    qs: [
      { t: "fill", q: "私＿＿＿、たまには休みたい。", fr: "Même moi, j'aimerais me reposer de temps en temps.",
        o: ["だって", "こそ", "さえば", "ながら"], a: 0,
        e: "〜だって (familier) = « même » (≈ でも)." },
      { t: "meaning", q: "「明日は雨だって」— sens de だって ?",
        o: ["il paraît qu'il pleuvra demain (ouï-dire)", "même demain il pleut", "demain c'est sûr la pluie", "à propos de demain"], a: 0,
        e: "〜だって en fin de phrase = ouï-dire familier (« il paraît que »)." },
    ],
  },

  {
    id: "g069", g: "〜からこそ", m: "c'est précisément parce que, justement parce que", f: "V-plain／A／N＋だ + からこそ",
    c: "express", lv: 2, rel: ["g070", "g040"],
    note: "Met l'accent sur la raison véritable et exclusive : « c'est justement à cause de cela (et de rien d'autre) que… ».",
    ex: [
      { jp: "君のことを思うからこそ、厳しく言うのだ。", fr: "C'est justement parce que je tiens à toi que je suis sévère." },
      { jp: "努力したからこそ、成功した。", fr: "C'est précisément parce qu'il a fait des efforts qu'il a réussi." },
    ],
    qs: [
      { t: "fill", q: "難しい＿＿＿、挑戦する価値がある。", fr: "C'est justement parce que c'est difficile que ça vaut la peine de relever le défi.",
        o: ["からこそ", "からには", "ものだから", "とはいえ"], a: 0,
        e: "〜からこそ = c'est précisément pour cette raison-là (raison soulignée)." },
      { t: "nuance", q: "〜からこそ vs 〜から : nuance ?",
        o: ["からこそ insiste fortement sur la raison exclusive ; から est neutre", "identiques", "から est emphatique", "からこそ exprime une concession"], a: 0,
        e: "こそ ajoute l'emphase « c'est justement parce que »." },
    ],
  },

  {
    id: "g070", g: "〜こそ", m: "c'est bien X que (renforcement)", f: "N／Particule + こそ",
    c: "express", lv: 2, rel: ["g069"],
    note: "Met en relief l'élément qui précède : « c'est X (et pas un autre) ». 今度こそ = cette fois-ci pour de bon.",
    ex: [
      { jp: "今度こそ成功させたい。", fr: "Cette fois-ci, je veux vraiment réussir." },
      { jp: "こちらこそ、よろしくお願いします。", fr: "C'est moi (à mon tour) qui vous remercie de votre bienveillance." },
    ],
    qs: [
      { t: "fill", q: "今＿＿＿、本気を出すときだ。", fr: "C'est maintenant, et pas un autre moment, qu'il faut se donner à fond.",
        o: ["こそ", "さえ", "ばかり", "ながら"], a: 0,
        e: "〜こそ met en relief (« c'est maintenant que… »)." },
      { t: "meaning", q: "「来年こそ合格する」— sens de こそ ?",
        o: ["c'est l'an prochain (cette fois pour de bon) que je réussirai", "même l'an prochain", "seulement l'an prochain", "à propos de l'an prochain"], a: 0,
        e: "〜こそ insiste sur l'élément choisi (« cette fois-ci, vraiment »)." },
    ],
  },

  {
    id: "g071", g: "〜どころか", m: "loin de, bien au contraire, et même", f: "V-plain／A／N + どころか",
    c: "express", lv: 2, rel: [],
    note: "Contredit fortement une attente : « non seulement pas X, mais même le contraire ». Souvent surprise/intensification.",
    ex: [
      { jp: "彼は謝るどころか、怒り出した。", fr: "Loin de s'excuser, il s'est mis en colère." },
      { jp: "一万円どころか、千円もない。", fr: "Loin d'avoir dix mille yens, je n'ai même pas mille yens." },
    ],
    qs: [
      { t: "fill", q: "病気は治る＿＿＿、悪化してしまった。", fr: "Loin de guérir, la maladie s'est aggravée.",
        o: ["どころか", "からこそ", "とはいえ", "ものの"], a: 0,
        e: "〜どころか = bien au contraire (renverse l'attente)." },
      { t: "meaning", q: "「休むどころか、もっと忙しくなった」— sens ?",
        o: ["loin de me reposer, je suis devenu encore plus occupé", "grâce au repos, je suis occupé", "je me repose puis je suis occupé", "je me repose comme avant"], a: 0,
        e: "〜どころか intensifie en contredisant l'attente." },
    ],
  },

  {
    id: "g072", g: "〜ばかり", m: "ne faire que, uniquement (excès)", f: "V-て + ばかり ／ N + ばかり",
    c: "express", lv: 1, rel: ["g073"],
    note: "Indique une répétition/exclusivité excessive, souvent avec une nuance critique : « ne faire que… ».",
    ex: [
      { jp: "彼は遊んでばかりいる。", fr: "Il ne fait que s'amuser." },
      { jp: "文句ばかり言わないで。", fr: "Arrête de ne faire que te plaindre." },
    ],
    qs: [
      { t: "fill", q: "ゲームをして＿＿＿で、勉強しない。", fr: "Il ne fait que jouer et n'étudie pas.",
        o: ["ばかり", "こそ", "さえ", "ながら"], a: 0,
        e: "〜てばかり = ne faire que (excès, souvent critique)." },
      { t: "meaning", q: "「泣いてばかりいる」— sens ?",
        o: ["ne faire que pleurer (excès)", "pleurer une seule fois", "pleurer après tout", "ne jamais pleurer"], a: 0,
        e: "〜ばかり = exclusivité/excès." },
    ],
  },

  {
    id: "g073", g: "〜ばかりか", m: "non seulement… mais encore", f: "V-plain／A／N + ばかりか",
    c: "express", lv: 2, rel: ["g072", "g074"],
    note: "Ajoute un élément encore plus marquant : « non seulement X, mais en plus Y (qui surprend) ».",
    ex: [
      { jp: "彼は英語ばかりか、中国語も話せる。", fr: "Non seulement il parle anglais, mais aussi chinois." },
      { jp: "雨ばかりか、風まで強くなった。", fr: "Non seulement il pleut, mais en plus le vent a forci." },
    ],
    qs: [
      { t: "fill", q: "彼女は歌がうまい＿＿＿、ダンスも得意だ。", fr: "Non seulement elle chante bien, mais elle danse aussi très bien.",
        o: ["ばかりか", "どころか", "からこそ", "とはいえ"], a: 0,
        e: "〜ばかりか = non seulement… mais en plus (ajout marquant)." },
      { t: "nuance", q: "〜ばかりか vs 〜どころか : nuance ?",
        o: ["ばかりか = ajout dans le même sens (« en plus ») ; どころか = renversement (« au contraire »)", "identiques", "ばかりか renverse l'attente", "どころか ajoute"], a: 0,
        e: "ばかりか additionne ; どころか contredit." },
    ],
  },

  {
    id: "g074", g: "〜だけでなく", m: "non seulement… mais aussi", f: "V-plain／A／N + だけでなく（〜も）",
    c: "express", lv: 1, rel: ["g073", "g001"],
    note: "Structure additive courante : « pas seulement X, mais aussi Y ». Souvent suivi de も.",
    ex: [
      { jp: "この本は子供だけでなく、大人にも人気だ。", fr: "Ce livre est populaire non seulement chez les enfants, mais aussi chez les adultes." },
      { jp: "彼は頭がいいだけでなく、性格もいい。", fr: "Non seulement il est intelligent, mais il a aussi bon caractère." },
    ],
    qs: [
      { t: "fill", q: "彼は日本語＿＿＿、英語も話せる。", fr: "Il parle non seulement japonais, mais aussi anglais.",
        o: ["だけでなく", "どころか", "に過ぎず", "ものの"], a: 0,
        e: "〜だけでなく（〜も）= non seulement… mais aussi." },
      { t: "usage", q: "Quel mot suit souvent 〜だけでなく ?",
        o: ["も (« aussi »)", "を", "が", "へ"], a: 0,
        e: "〜だけでなく…も = structure additive typique." },
    ],
  },

  {
    id: "g075", g: "〜のみならず", m: "non seulement… (registre formel)", f: "V-plain／N + のみならず",
    c: "express", lv: 3, rel: ["g074"],
    note: "Équivalent écrit/soutenu de だけでなく. « Non seulement X, mais aussi Y ».",
    ex: [
      { jp: "国内のみならず、海外でも評価された。", fr: "Il a été reconnu non seulement à l'intérieur du pays, mais aussi à l'étranger." },
      { jp: "本人のみならず、家族も苦しんだ。", fr: "Non seulement l'intéressé, mais sa famille aussi a souffert." },
    ],
    qs: [
      { t: "fill", q: "この問題は日本＿＿＿、世界全体に関わる。", fr: "Ce problème concerne non seulement le Japon, mais le monde entier.",
        o: ["のみならず", "どころか", "ばかり", "に過ぎず"], a: 0,
        e: "〜のみならず = non seulement… (registre formel, ≈ だけでなく)." },
      { t: "nuance", q: "〜のみならず vs 〜だけでなく : nuance ?",
        o: ["même sens ; のみならず est plus écrit/formel", "opposés", "だけでなく est plus formel", "のみならず renverse l'attente"], a: 0,
        e: "のみならず = registre soutenu de だけでなく." },
    ],
  },

  {
    id: "g076", g: "〜とともに", m: "avec ; en même temps que ; au fur et à mesure", f: "Nom／V-dict + とともに",
    c: "express", lv: 2, rel: ["g014", "g077"],
    note: "(1) « ensemble avec » ; (2) simultanéité/évolution parallèle (« à mesure que »). Registre plutôt écrit.",
    ex: [
      { jp: "家族とともに新年を迎えた。", fr: "J'ai accueilli la nouvelle année avec ma famille." },
      { jp: "年を取るとともに、記憶力が衰える。", fr: "À mesure qu'on vieillit, la mémoire décline." },
    ],
    qs: [
      { t: "fill", q: "経済の発展＿＿＿、環境問題も深刻になった。", fr: "Avec le développement économique, les problèmes environnementaux se sont aggravés.",
        o: ["とともに", "に反して", "を問わず", "に際して"], a: 0,
        e: "〜とともに = évolution parallèle (« à mesure que / en même temps que »)." },
      { t: "meaning", q: "「仲間とともに戦う」— sens de とともに ?",
        o: ["combattre avec ses camarades (ensemble)", "combattre contre ses camarades", "combattre à propos des camarades", "combattre après les camarades"], a: 0,
        e: "〜とともに (emploi 1) = « ensemble avec »." },
    ],
  },

  {
    id: "g077", g: "〜につれて／につれ", m: "au fur et à mesure de (progression)", f: "Nom／V-dict + につれて",
    c: "express", lv: 2, rel: ["g078", "g014"],
    note: "Deux changements progressent en parallèle de manière continue : « plus X avance, plus Y change ». Pas pour des événements ponctuels.",
    ex: [
      { jp: "時間がたつにつれて、痛みが和らいだ。", fr: "À mesure que le temps passait, la douleur s'est atténuée." },
      { jp: "上に行くにつれて、景色がよくなる。", fr: "Plus on monte, plus le paysage est beau." },
    ],
    qs: [
      { t: "fill", q: "練習を重ねる＿＿＿、上手になっていった。", fr: "À mesure qu'il accumulait les entraînements, il progressait.",
        o: ["につれて", "とたんに", "うちに", "次第"], a: 0,
        e: "〜につれて = progression continue parallèle." },
      { t: "nuance", q: "〜につれて s'emploie-t-il avec un changement ponctuel ?",
        o: ["non : il exige une variation graduelle et continue", "oui, surtout ponctuel", "oui, comme とたんに", "uniquement au passé"], a: 0,
        e: "につれて = progression continue, pas un événement unique soudain." },
    ],
  },

  {
    id: "g078", g: "〜にしたがって／にしたがい", m: "à mesure que ; en suivant", f: "Nom／V-dict + にしたがって",
    c: "express", lv: 2, rel: ["g077", "g015"],
    note: "Progression parallèle (comme につれて) avec en plus une nuance de « en suivant/conformément ». Registre un peu plus formel.",
    ex: [
      { jp: "経済が発展するにしたがって、生活が変わった。", fr: "À mesure que l'économie se développait, la vie a changé." },
      { jp: "南へ行くにしたがって、暖かくなる。", fr: "À mesure qu'on va vers le sud, il fait plus chaud." },
    ],
    qs: [
      { t: "fill", q: "年齢が上がる＿＿＿、責任も重くなる。", fr: "À mesure que l'âge augmente, les responsabilités s'alourdissent.",
        o: ["にしたがって", "に反して", "をはじめ", "に際して"], a: 0,
        e: "〜にしたがって = progression parallèle (registre soutenu)." },
      { t: "nuance", q: "〜にしたがって et 〜につれて sont :",
        o: ["très proches (progression parallèle) ; にしたがって est un peu plus formel et garde l'idée de « suivre »", "opposés", "につれて est formel", "にしたがって est ponctuel"], a: 0,
        e: "Quasi-synonymes de progression ; にしたがって est plus soutenu." },
    ],
  },

  {
    id: "g079", g: "〜ように", m: "pour que, de sorte que (but/souhait)", f: "V-dict／V-ない／V-potentiel + ように",
    c: "express", lv: 1, rel: ["g041"],
    note: "But avec un verbe non volontaire ou potentiel (« pour pouvoir / pour ne pas »). Aussi pour les souhaits et prières.",
    ex: [
      { jp: "後ろの人にも聞こえるように、大きな声で話す。", fr: "Pour que ceux du fond entendent aussi, je parle fort." },
      { jp: "風邪をひかないように、気をつけてね。", fr: "Fais attention à ne pas attraper froid." },
    ],
    qs: [
      { t: "fill", q: "忘れない＿＿＿、メモしておこう。", fr: "Pour ne pas oublier, prenons une note.",
        o: ["ように", "ために", "からこそ", "とともに"], a: 0,
        e: "〜ように = but avec verbe non volontaire/négatif (« pour ne pas oublier »)." },
      { t: "nuance", q: "Quand emploie-t-on ように plutôt que ために pour le but ?",
        o: ["avec un verbe potentiel/non volontaire ou une négation (見えるように、忘れないように)", "toujours", "jamais avec négation", "uniquement avec des noms"], a: 0,
        e: "ように : but involontaire/potentiel ; ために : but volontaire." },
    ],
  },

  {
    id: "g080", g: "〜ようとする", m: "essayer de, être sur le point de", f: "V-volitif（〜よう／おう）+ とする",
    c: "express", lv: 2, rel: ["g081"],
    note: "Tentative ou imminence d'une action : « tenter de faire » ou « être sur le point de faire ».",
    ex: [
      { jp: "立ち上がろうとしたが、足が痛くて動けなかった。", fr: "J'ai tenté de me lever, mais la douleur m'en a empêché." },
      { jp: "電車が出ようとしている。", fr: "Le train est sur le point de partir." },
    ],
    qs: [
      { t: "fill", q: "ドアを開け＿＿＿としたとき、電話が鳴った。", fr: "Au moment où j'allais ouvrir la porte, le téléphone a sonné.",
        o: ["よう", "ばかり", "こそ", "さえ"], a: 0,
        e: "V-volitif + とする = être sur le point de / tenter de." },
      { t: "meaning", q: "「赤ちゃんが歩こうとしている」— sens ?",
        o: ["le bébé essaie de marcher", "le bébé marche déjà bien", "le bébé refuse de marcher", "le bébé a marché"], a: 0,
        e: "〜ようとする = tentative d'une action." },
    ],
  },

  {
    id: "g081", g: "〜ようとしない", m: "refuser de, ne pas vouloir essayer de", f: "V-volitif + としない",
    c: "express", lv: 2, rel: ["g080"],
    note: "Indique un refus volontaire/une absence d'effort d'autrui : « il ne fait aucun effort pour… ».",
    ex: [
      { jp: "彼は私の話を聞こうとしない。", fr: "Il refuse d'écouter ce que je dis." },
      { jp: "子供が薬を飲もうとしない。", fr: "L'enfant ne veut pas prendre son médicament." },
    ],
    qs: [
      { t: "fill", q: "彼は何度言っても、考えを変え＿＿＿。", fr: "On a beau le répéter, il ne veut pas changer d'avis.",
        o: ["ようとしない", "ようとする", "ことになる", "ばかりだ"], a: 0,
        e: "〜ようとしない = refus / absence d'effort." },
      { t: "meaning", q: "「真実を認めようとしない」— sens ?",
        o: ["il refuse d'admettre la vérité", "il essaie d'admettre la vérité", "il a admis la vérité", "il doit admettre la vérité"], a: 0,
        e: "〜ようとしない = ne fait aucun effort pour / refuse de." },
    ],
  },

  {
    id: "g082", g: "〜てもかまわない", m: "ça ne dérange pas si, il est permis de", f: "V-て／A-くて／N＋でも + かまわない",
    c: "express", lv: 2, rel: [],
    note: "Permission ou indifférence : « cela ne pose pas de problème si… ». Proche de てもいい mais insiste sur l'absence de gêne.",
    ex: [
      { jp: "ここに座ってもかまいませんか。", fr: "Cela vous dérange-t-il que je m'asseye ici ?" },
      { jp: "雨でもかまわない、予定通り行く。", fr: "Même s'il pleut, peu importe, on y va comme prévu." },
    ],
    qs: [
      { t: "fill", q: "明日まで待って＿＿＿よ。急がなくていい。", fr: "Ça ne me dérange pas d'attendre jusqu'à demain. Pas besoin de te presser.",
        o: ["もかまわない", "ばかりだ", "どころか", "こそ"], a: 0,
        e: "〜てもかまわない = ça ne dérange pas / c'est permis." },
      { t: "nuance", q: "〜てもかまわない vs 〜てもいい : nuance ?",
        o: ["sens proche ; かまわない insiste sur « peu importe / sans gêne »", "opposés", "てもいい exprime une interdiction", "かまわない est une obligation"], a: 0,
        e: "Quasi-synonymes ; かまわない souligne l'indifférence/l'absence de problème." },
    ],
  },

  {
    id: "g083", g: "〜ほど〜ない", m: "pas autant que, moins… que", f: "N／V-dict + ほど + （…）ない",
    c: "express", lv: 1, rel: ["g084"],
    note: "Comparaison négative : « ce n'est pas au point de / pas autant que ». Sert aussi à exprimer un degré (« au point de »).",
    ex: [
      { jp: "今年は去年ほど寒くない。", fr: "Cette année, il ne fait pas aussi froid que l'an dernier." },
      { jp: "彼ほど親切な人はいない。", fr: "Il n'y a personne d'aussi gentil que lui." },
    ],
    qs: [
      { t: "fill", q: "この問題は思った＿＿＿難しくなかった。", fr: "Ce problème n'était pas aussi difficile que je le pensais.",
        o: ["ほど", "こそ", "さえ", "ばかり"], a: 0,
        e: "〜ほど〜ない = comparaison négative (« pas autant que »)." },
      { t: "meaning", q: "「死ぬほど疲れた」— sens de ほど ?",
        o: ["fatigué au point d'en mourir (degré extrême)", "moins fatigué que la mort", "pas du tout fatigué", "fatigué chaque fois"], a: 0,
        e: "〜ほど exprime aussi le degré (« au point de »)." },
    ],
  },

  {
    id: "g084", g: "〜ば〜ほど", m: "plus… plus (corrélation)", f: "V-ば + V-dict + ほど ／ A-ければ + A-い + ほど",
    c: "express", lv: 2, rel: ["g083"],
    note: "Corrélation progressive : « plus X, plus Y ». On répète le même verbe/adjectif.",
    ex: [
      { jp: "考えれば考えるほど、分からなくなる。", fr: "Plus j'y réfléchis, moins je comprends." },
      { jp: "練習すればするほど、上手になる。", fr: "Plus on s'entraîne, plus on progresse." },
    ],
    qs: [
      { t: "fill", q: "値段が高けれ＿＿、品質がいいとは限らない。", fr: "Ce n'est pas parce que c'est plus cher que c'est forcément de meilleure qualité.",
        o: ["ば高いほど", "ばかり高い", "こそ高い", "さえ高い"], a: 0,
        e: "〜ば〜ほど = corrélation « plus… plus » (répétition de l'adjectif)." },
      { t: "usage", q: "Forme correcte de la corrélation « plus on lit, plus on comprend » ?",
        o: ["読めば読むほど分かる", "読むほど読めば分かる", "読みさえ読むほど分かる", "読むばかり読めば分かる"], a: 0,
        e: "Structure : V-ば + V-dict + ほど." },
    ],
  },

  {
    id: "g085", g: "〜だけ（〜できるだけ）", m: "autant que, dans la mesure de", f: "V-dict／V-た／V-potentiel + だけ",
    c: "express", lv: 2, rel: ["g074"],
    note: "Exprime la limite/l'étendue maximale d'une action : « autant que possible / tout ce que ».",
    ex: [
      { jp: "できるだけ早く来てください。", fr: "Venez aussi vite que possible." },
      { jp: "好きなだけ食べていいよ。", fr: "Tu peux manger autant que tu veux." },
    ],
    qs: [
      { t: "fill", q: "言いたい＿＿＿言ってすっきりした。", fr: "J'ai dit tout ce que je voulais dire, ça m'a soulagé.",
        o: ["だけ", "ほど", "こそ", "さえ"], a: 0,
        e: "〜だけ = autant que / tout ce que (étendue maximale)." },
      { t: "meaning", q: "「できるだけ手伝う」— sens de だけ ?",
        o: ["aider autant que possible", "aider seulement une fois", "aider à peine", "ne pas aider"], a: 0,
        e: "できるだけ = « autant que possible »." },
    ],
  },

  {
    id: "g086", g: "〜なり", m: "aussitôt que, dès que (et tout de suite)", f: "V-dict + なり",
    c: "express", lv: 3, rel: ["g029", "g087"],
    note: "Registre littéraire. Une action suit immédiatement et de façon inattendue une autre, souvent menée par autrui. La principale est au passé.",
    ex: [
      { jp: "彼は部屋に入るなり、泣き出した。", fr: "À peine entré dans la pièce, il s'est mis à pleurer." },
      { jp: "電話を切るなり、家を飛び出した。", fr: "Dès qu'il a raccroché, il s'est précipité hors de la maison." },
    ],
    qs: [
      { t: "fill", q: "彼女は私の顔を見る＿＿＿、笑い出した。", fr: "À peine m'a-t-elle vu qu'elle a éclaté de rire.",
        o: ["なり", "ながら", "うちに", "たびに"], a: 0,
        e: "〜なり = aussitôt X, Y survient (littéraire, souvent surprise)." },
      { t: "nuance", q: "〜なり vs 〜たとたん : nuance ?",
        o: ["très proches ; なり est plus littéraire et la 2e action est souvent une action de la même personne menée de façon impulsive", "opposés", "なり est familier", "たとたん exprime une volonté"], a: 0,
        e: "なり = registre soutenu, enchaînement immédiat et souvent volontaire/impulsif." },
    ],
  },

  {
    id: "g087", g: "〜か〜ないかのうちに", m: "à peine… que, au moment même", f: "V-dict + か + V-ない + かのうちに",
    c: "express", lv: 3, rel: ["g029", "g086"],
    note: "Deux événements presque simultanés : la première action n'est même pas achevée que la seconde commence.",
    ex: [
      { jp: "ベルが鳴るか鳴らないかのうちに、教室を飛び出した。", fr: "À peine la sonnerie a-t-elle retenti qu'il a filé de la classe." },
      { jp: "横になるかならないかのうちに、眠ってしまった。", fr: "À peine allongé, il s'est endormi." },
    ],
    qs: [
      { t: "fill", q: "言い終わる＿＿＿、彼は席を立った。", fr: "À peine avais-je fini de parler qu'il s'est levé.",
        o: ["か終わらないかのうちに", "とともに", "に際して", "につれて"], a: 0,
        e: "〜か〜ないかのうちに = à peine X (pas encore fini) que Y survient." },
      { t: "meaning", q: "「着くか着かないかのうちに」— sens ?",
        o: ["au moment même où l'on arrive (pas tout à fait arrivé)", "longtemps après l'arrivée", "avant de partir", "chaque fois qu'on arrive"], a: 0,
        e: "Quasi-simultanéité : la 1re action est à peine entamée." },
    ],
  },

  {
    id: "g088", g: "〜をよそに", m: "sans tenir compte de, en ignorant", f: "Nom + をよそに",
    c: "express", lv: 3, rel: ["g089"],
    note: "Agir en ignorant délibérément les sentiments/préoccupations d'autrui. Ton souvent critique. Registre écrit.",
    ex: [
      { jp: "親の心配をよそに、彼は危険な旅に出た。", fr: "Ignorant l'inquiétude de ses parents, il est parti pour un voyage dangereux." },
      { jp: "周囲の反対をよそに、計画を進めた。", fr: "Au mépris de l'opposition générale, il a poursuivi son projet." },
    ],
    qs: [
      { t: "fill", q: "世間の批判＿＿＿、彼は自分の道を貫いた。", fr: "Ignorant les critiques du public, il a suivi sa propre voie.",
        o: ["をよそに", "に応じて", "に基づいて", "をはじめ"], a: 0,
        e: "〜をよそに = en ignorant (les préoccupations d'autrui)." },
      { t: "nuance", q: "〜をよそに vs 〜もかまわず : nuance ?",
        o: ["をよそに = ignorer les préoccupations d'autrui ; もかまわず = ne pas se soucier d'une gêne (souvent pour soi)", "identiques", "もかまわず concerne autrui", "をよそに concerne soi-même"], a: 0,
        e: "をよそに → entourage ignoré ; もかまわず → gêne ignorée." },
    ],
  },

  {
    id: "g089", g: "〜もかまわず", m: "sans se soucier de, sans égard pour", f: "Nom／V-plain＋の + もかまわず",
    c: "express", lv: 3, rel: ["g088"],
    note: "Faire quelque chose sans prêter attention à une circonstance gênante (le regard des autres, ses vêtements, etc.).",
    ex: [
      { jp: "彼は服が汚れるのもかまわず、子供と遊んだ。", fr: "Sans se soucier de salir ses vêtements, il a joué avec l'enfant." },
      { jp: "人目もかまわず泣いた。", fr: "Il a pleuré sans se soucier du regard des autres." },
    ],
    qs: [
      { t: "fill", q: "彼女は涙が流れるの＿＿＿、話し続けた。", fr: "Sans se soucier de ses larmes qui coulaient, elle a continué à parler.",
        o: ["もかまわず", "をはじめ", "に応じて", "に反して"], a: 0,
        e: "〜もかまわず = sans se soucier de (une gêne)." },
      { t: "meaning", q: "「危険もかまわず助けに行った」— sens ?",
        o: ["il est allé porter secours sans se soucier du danger", "il a évité le danger", "à cause du danger", "à propos du danger"], a: 0,
        e: "〜もかまわず = sans tenir compte d'un obstacle/d'une gêne." },
    ],
  },

  {
    id: "g090", g: "〜を込めて", m: "avec (sentiment/énergie), plein de", f: "Nom + を込めて",
    c: "express", lv: 2, rel: [],
    note: "Faire quelque chose en y mettant un sentiment, une intention. Souvent avec 心, 愛, 感謝, 願い.",
    ex: [
      { jp: "心を込めて手紙を書いた。", fr: "J'ai écrit la lettre de tout mon cœur." },
      { jp: "感謝を込めてプレゼントを贈る。", fr: "J'offre ce cadeau en signe de gratitude." },
    ],
    qs: [
      { t: "fill", q: "愛＿＿＿料理を作った。", fr: "J'ai cuisiné avec amour.",
        o: ["を込めて", "について", "に応じて", "をはじめ"], a: 0,
        e: "〜を込めて = en y mettant (un sentiment)." },
      { t: "meaning", q: "「願いを込めて鐘を鳴らす」— sens de を込めて ?",
        o: ["faire sonner la cloche en y mettant un vœu", "faire sonner la cloche à propos du vœu", "faire sonner la cloche sans vœu", "faire sonner la cloche contre le vœu"], a: 0,
        e: "〜を込めて = en chargeant l'acte d'un sentiment/d'une intention." },
    ],
  },

  /* ===================== AJOUTS — g091 à g182 ===================== */

  {
    id: "g091", g: "〜あげく(に)", m: "au bout du compte, finalement (après des efforts)", f: "V-た／N＋の + あげく(に)",
    c: "time", lv: 2, rel: ["g092"],
    note: "Après un long processus pénible, un résultat (souvent négatif/décevant) survient.",
    ex: [
      { jp: "さんざん迷ったあげく、何も買わなかった。", fr: "Après avoir longuement hésité, je n'ai finalement rien acheté." },
      { jp: "口論のあげく、彼は出て行った。", fr: "Au terme de la dispute, il est parti." },
    ],
    qs: [
      { t: "fill", q: "長時間話し合った＿＿＿、結論は出なかった。", fr: "Après une longue discussion, on n'est arrivés à aucune conclusion.",
        o: ["あげく", "うえで", "うちに", "とたん"], a: 0,
        e: "〜あげく = au bout d'un long processus (souvent issue négative)." },
      { t: "nuance", q: "〜あげく vs 〜末に : nuance ?",
        o: ["あげく a souvent une issue négative/regrettable ; 末に est plus neutre (« finalement, après »)", "identiques", "末に est négatif", "あげく est positif"], a: 0,
        e: "あげく = aboutissement souvent fâcheux ; 末に = simple « au terme de »." },
    ],
  },

  {
    id: "g092", g: "〜末(に)", m: "à l'issue de, finalement après", f: "V-た／N＋の + 末(に)",
    c: "time", lv: 2, rel: ["g091"],
    note: "Après mûre réflexion ou de longs efforts, on aboutit à un résultat (souvent une décision).",
    ex: [
      { jp: "よく考えた末に、留学を決めた。", fr: "Après mûre réflexion, j'ai décidé de partir étudier à l'étranger." },
      { jp: "激しい議論の末、結論が出た。", fr: "À l'issue d'un vif débat, une conclusion a été tirée." },
    ],
    qs: [
      { t: "fill", q: "悩んだ＿＿＿、転職することにした。", fr: "Après bien des hésitations, j'ai décidé de changer de travail.",
        o: ["末に", "とたんに", "うちに", "たびに"], a: 0,
        e: "〜末に = au terme d'un processus de réflexion/effort." },
      { t: "meaning", q: "「苦労の末に成功した」— sens ?",
        o: ["réussir au bout de bien des peines", "réussir sans effort", "échouer après des peines", "avant de souffrir"], a: 0,
        e: "〜末に = à l'issue de (souvent après des efforts)." },
    ],
  },

  {
    id: "g093", g: "〜上で", m: "après avoir / lors de / pour", f: "V-た／N＋の + 上で",
    c: "time", lv: 2, rel: ["g094"],
    note: "(1) « après avoir fait X (et sur cette base) » ; (2) « dans le cadre de / pour » (目的上).",
    ex: [
      { jp: "よく相談した上で、決めましょう。", fr: "Décidons après en avoir bien discuté." },
      { jp: "契約の上で問題が生じた。", fr: "Un problème s'est posé dans le cadre du contrat." },
    ],
    qs: [
      { t: "fill", q: "資料をよく読んだ＿＿＿、質問してください。", fr: "Après avoir bien lu les documents, posez vos questions.",
        o: ["上で", "上に", "あげく", "末に"], a: 0,
        e: "V-た + 上で = après avoir fait X (comme préalable)." },
      { t: "nuance", q: "〜上で vs 〜てから : nuance ?",
        o: ["上で insiste sur « sur la base de X (étape réfléchie) » ; てから = simple succession temporelle", "identiques", "てから est formel", "上で = avant"], a: 0,
        e: "上で = étape préalable réfléchie ; てから = ordre chronologique simple." },
    ],
  },

  {
    id: "g094", g: "〜上に", m: "en plus de, qui plus est", f: "V-plain／A／N＋である + 上に",
    c: "contrast", lv: 2, rel: ["g093", "g074"],
    note: "Ajoute un élément de même orientation : « non seulement X, mais en plus Y ».",
    ex: [
      { jp: "この店は安い上に、おいしい。", fr: "Ce restaurant est bon marché et, en plus, délicieux." },
      { jp: "道に迷った上に、雨まで降ってきた。", fr: "Non seulement je me suis perdu, mais en plus il s'est mis à pleuvoir." },
    ],
    qs: [
      { t: "fill", q: "彼は頭がいい＿＿＿、性格もいい。", fr: "Il est intelligent et, en plus, a bon caractère.",
        o: ["上に", "上で", "あげく", "反面"], a: 0,
        e: "〜上に = ajout de même sens (« en plus de »)." },
      { t: "nuance", q: "〜上に vs 〜反面 : différence ?",
        o: ["上に ajoute un élément de même orientation ; 反面 introduit un aspect opposé", "identiques", "上に = opposition", "反面 = addition"], a: 0,
        e: "上に additionne ; 反面 contraste." },
    ],
  },

  {
    id: "g095", g: "〜得る／〜得ない", m: "pouvoir / ne pas pouvoir (possibilité)", f: "V-ます stem + 得る（うる／える）／得ない（えない）",
    c: "modality", lv: 3, rel: ["g096"],
    note: "Exprime la possibilité théorique qu'une chose se produise (≠ capacité personnelle). 起こり得る = peut arriver.",
    ex: [
      { jp: "そんなことは十分あり得る。", fr: "Une telle chose est tout à fait possible." },
      { jp: "それは考え得ない事態だ。", fr: "C'est une situation inconcevable." },
    ],
    qs: [
      { t: "fill", q: "誰にでも起こり＿＿＿事故だ。", fr: "C'est un accident qui peut arriver à n'importe qui.",
        o: ["得る", "がたい", "かねない", "ようがない"], a: 0,
        e: "V-stem + 得る = possibilité (起こり得る = peut survenir)." },
      { t: "meaning", q: "「あり得ない」— sens ?",
        o: ["impossible / inconcevable", "tout à fait possible", "facile à faire", "obligatoire"], a: 0,
        e: "〜得ない = ne peut pas se produire (impossibilité théorique)." },
    ],
  },

  {
    id: "g096", g: "〜かねる", m: "ne pas pouvoir se résoudre à, avoir du mal à", f: "V-ます stem + かねる",
    c: "modality", lv: 3, rel: ["g097", "g095"],
    note: "Registre poli/formel : on ne peut pas faire X (par scrupule, difficulté). Souvent dans le service client (わかりかねます).",
    ex: [
      { jp: "その件についてはお答えしかねます。", fr: "Je ne suis pas en mesure de répondre sur ce point." },
      { jp: "見るに見かねて、手を貸した。", fr: "Ne pouvant rester à regarder, j'ai prêté main-forte." },
    ],
    qs: [
      { t: "fill", q: "個人情報はお教えし＿＿＿ます。", fr: "Je ne peux pas vous communiquer d'informations personnelles.",
        o: ["かね", "がち", "ぎみ", "きり"], a: 0,
        e: "V-stem + かねる = ne pas pouvoir (poliment) faire (お教えしかねます)." },
      { t: "nuance", q: "〜かねる vs 〜かねない : relation ?",
        o: ["かねる = ne peut pas faire ; かねない = risque de (pourrait bien arriver)", "synonymes", "かねる = risque", "かねない = ne peut pas"], a: 0,
        e: "かねる (ne peut pas) ≠ かねない (risque de, négatif)." },
    ],
  },

  {
    id: "g097", g: "〜かねない", m: "risquer de, pourrait bien (issue négative)", f: "V-ます stem + かねない",
    c: "modality", lv: 3, rel: ["g096"],
    note: "Indique qu'une issue indésirable est possible : « il se pourrait bien que… (mauvais) ».",
    ex: [
      { jp: "そんな生活では病気になりかねない。", fr: "Avec un tel mode de vie, on risque de tomber malade." },
      { jp: "彼ならやりかねない。", fr: "Lui, il en serait bien capable (de faire ça)." },
    ],
    qs: [
      { t: "fill", q: "スピードを出しすぎると、事故を起こし＿＿＿。", fr: "En roulant trop vite, on risque de provoquer un accident.",
        o: ["かねない", "かねる", "得ない", "がたい"], a: 0,
        e: "〜かねない = risque (négatif) de (起こしかねない)." },
      { t: "meaning", q: "「うそをつきかねない人だ」— sens ?",
        o: ["c'est quelqu'un qui pourrait bien mentir", "quelqu'un qui ne ment jamais", "quelqu'un incapable de mentir", "quelqu'un qui a menti"], a: 0,
        e: "〜かねない = capable du pire / risque de." },
    ],
  },

  {
    id: "g098", g: "〜がたい", m: "difficile à, presque impossible de", f: "V-ます stem + がたい",
    c: "modality", lv: 3, rel: ["g096"],
    note: "Registre soutenu : il est psychologiquement difficile de faire X (信じがたい, 理解しがたい).",
    ex: [
      { jp: "彼の話は信じがたい。", fr: "Son histoire est difficile à croire." },
      { jp: "忘れがたい思い出だ。", fr: "C'est un souvenir inoubliable." },
    ],
    qs: [
      { t: "fill", q: "あの優しい人がそんなことをするとは想像し＿＿＿。", fr: "Difficile d'imaginer qu'une personne aussi douce fasse cela.",
        o: ["がたい", "やすい", "かねない", "得る"], a: 0,
        e: "〜がたい = difficile à (想像しがたい), registre écrit." },
      { t: "nuance", q: "〜がたい vs 〜にくい : nuance ?",
        o: ["がたい = difficulté psychologique/abstraite (soutenu) ; にくい = difficulté pratique/physique", "identiques", "にくい est soutenu", "がたい est familier"], a: 0,
        e: "がたい (croire, imaginer…) ≠ にくい (lire, manger…)." },
    ],
  },

  {
    id: "g099", g: "〜きり", m: "seulement / depuis (et plus rien)", f: "V-た + きり ／ N + きり",
    c: "express", lv: 2, rel: [],
    note: "(1) « seulement / rien que » (二人きり) ; (2) après V-た : « depuis X, plus rien ne s'est passé » (出かけたきり帰らない).",
    ex: [
      { jp: "彼とは一度会ったきりだ。", fr: "Je ne l'ai rencontré qu'une seule fois (et plus depuis)." },
      { jp: "二人きりで話した。", fr: "Nous avons parlé en tête-à-tête (rien que tous les deux)." },
    ],
    qs: [
      { t: "fill", q: "兄は朝出かけた＿＿＿、まだ帰らない。", fr: "Mon frère est sorti ce matin et n'est toujours pas rentré depuis.",
        o: ["きり", "ばかり", "ながら", "ところ"], a: 0,
        e: "V-た + きり = depuis X, plus rien (出かけたきり)." },
      { t: "meaning", q: "「寝たきりの生活」— sens ?",
        o: ["une vie alité (rien que couché)", "une vie active", "se coucher une fois", "avant de se coucher"], a: 0,
        e: "〜きり = limité à ce seul état (寝たきり = grabataire)." },
    ],
  },

  {
    id: "g100", g: "〜げ", m: "l'air de, qui semble (apparence)", f: "A-stem（感情）／V-ます stem + げ",
    c: "modality", lv: 3, rel: ["g105"],
    note: "Suffixe littéraire indiquant l'apparence extérieure d'un sentiment (寂しげ, 不安げ).",
    ex: [
      { jp: "彼女は寂しげな表情をしていた。", fr: "Elle avait un air mélancolique." },
      { jp: "意味ありげに笑った。", fr: "Il a souri d'un air entendu." },
    ],
    qs: [
      { t: "fill", q: "子供が不安＿＿＿に母親を見た。", fr: "L'enfant a regardé sa mère d'un air inquiet.",
        o: ["げ", "がち", "ぎみ", "っぽい"], a: 0,
        e: "〜げ = apparence d'un sentiment (不安げに)." },
      { t: "meaning", q: "「自信ありげな態度」— sens ?",
        o: ["une attitude qui respire la confiance", "une attitude sans confiance", "une attitude inconnue", "une attitude future"], a: 0,
        e: "〜げ = qui a l'air de (ありげ = qui semble avoir)." },
    ],
  },

  {
    id: "g101", g: "〜ことだ", m: "il faut / le mieux est de (conseil fort)", f: "V-dict／V-ない + ことだ",
    c: "modality", lv: 2, rel: ["g047"],
    note: "Conseil appuyé adressé à quelqu'un : « ce qu'il faut faire, c'est… ».",
    ex: [
      { jp: "上手になりたければ、毎日練習することだ。", fr: "Si tu veux progresser, l'important est de t'entraîner chaque jour." },
      { jp: "風邪のときは、ゆっくり休むことだ。", fr: "Quand on est enrhumé, le mieux est de bien se reposer." },
    ],
    qs: [
      { t: "fill", q: "成功したければ、あきらめない＿＿＿。", fr: "Si tu veux réussir, il ne faut pas abandonner.",
        o: ["ことだ", "ものだ", "ところだ", "わけだ"], a: 0,
        e: "〜ことだ = conseil fort (あきらめないことだ)." },
      { t: "nuance", q: "〜ことだ vs 〜ものだ : nuance ?",
        o: ["ことだ = conseil ciblé à un interlocuteur ; ものだ = vérité générale/norme", "identiques", "ものだ = conseil", "ことだ = nostalgie"], a: 0,
        e: "ことだ (conseil personnel) ≠ ものだ (généralité/norme)." },
    ],
  },

  {
    id: "g102", g: "〜ことだから", m: "étant donné que (c'est typique de…)", f: "N＋の + ことだから",
    c: "condition", lv: 2, rel: ["g054"],
    note: "On se fonde sur le caractère bien connu de quelqu'un pour faire une prévision.",
    ex: [
      { jp: "彼のことだから、きっと時間どおりに来るよ。", fr: "Le connaissant, il viendra sûrement à l'heure." },
      { jp: "几帳面な彼女のことだから、忘れないだろう。", fr: "Méticuleuse comme elle est, elle n'oubliera pas." },
    ],
    qs: [
      { t: "fill", q: "やさしいあなた＿＿＿、助けてくれるでしょう。", fr: "Gentil comme tu es, tu m'aideras sûrement.",
        o: ["のことだから", "のことなのに", "について", "にとって"], a: 0,
        e: "N＋のことだから = prévision fondée sur le caractère connu (あなたのことだから)." },
      { t: "meaning", q: "「子供のことだから、すぐ飽きるよ」— sens ?",
        o: ["ce sont des enfants, donc ils se lasseront vite", "à propos des enfants", "contrairement aux enfants", "pour les enfants seulement"], a: 0,
        e: "〜ことだから = « connaissant X / typique de X »." },
    ],
  },

  {
    id: "g103", g: "〜ことに(は)", m: "chose (étonnante/heureuse/regrettable) que…", f: "A／V-た + ことに(は)",
    c: "modality", lv: 3, rel: [],
    note: "Place en tête de phrase un sentiment du locuteur sur ce qui suit (驚いたことに, 残念なことに).",
    ex: [
      { jp: "驚いたことに、彼は試験に合格した。", fr: "Chose étonnante, il a réussi l'examen." },
      { jp: "残念なことに、雨で中止になった。", fr: "Malheureusement, ça a été annulé à cause de la pluie." },
    ],
    qs: [
      { t: "fill", q: "うれしい＿＿＿、彼女が遊びに来てくれた。", fr: "Chose réjouissante, elle est venue me rendre visite.",
        o: ["ことに", "もので", "わけで", "ながら"], a: 0,
        e: "〜ことに = met en avant le sentiment du locuteur (うれしいことに)." },
      { t: "meaning", q: "「困ったことに、鍵をなくした」— sens ?",
        o: ["chose embêtante, j'ai perdu ma clé", "j'ai trouvé ma clé", "à propos de la clé", "à cause de la clé seulement"], a: 0,
        e: "〜ことに = annonce une émotion devant le fait qui suit." },
    ],
  },

  {
    id: "g104", g: "〜最中(に)", m: "en plein milieu de, au moment même où", f: "V-ている／N＋の + 最中(に)",
    c: "time", lv: 2, rel: ["g028"],
    note: "Un événement (souvent gênant) survient pendant qu'une action bat son plein.",
    ex: [
      { jp: "食事の最中に電話が鳴った。", fr: "Le téléphone a sonné en plein repas." },
      { jp: "会議の最中に居眠りしてしまった。", fr: "Je me suis assoupi en pleine réunion." },
    ],
    qs: [
      { t: "fill", q: "話している＿＿＿に、急に停電した。", fr: "En pleine conversation, il y a soudain eu une coupure de courant.",
        o: ["最中", "うち", "とたん", "ところ"], a: 0,
        e: "〜最中に = en plein milieu de (話している最中に)." },
      { t: "nuance", q: "〜最中に vs 〜ているうちに : nuance ?",
        o: ["最中に = au point culminant de l'action (souvent interruption) ; うちに = profiter de la durée", "identiques", "うちに = interruption", "最中に = profiter"], a: 0,
        e: "最中 souligne le « plein milieu » (interrompu) ; うちに = pendant que ça dure." },
    ],
  },

  {
    id: "g105", g: "〜ざるを得ない", m: "ne pas pouvoir faire autrement que de", f: "V-ない radical + ざるを得ない（する→せざるを得ない）",
    c: "condition", lv: 3, rel: ["g106", "g107"],
    note: "On est contraint de faire X malgré soi (circonstances). する → せざるを得ない.",
    ex: [
      { jp: "上司の命令だから、従わざるを得ない。", fr: "C'est un ordre du supérieur, je n'ai d'autre choix que d'obéir." },
      { jp: "証拠がある以上、認めざるを得ない。", fr: "Puisqu'il y a des preuves, force est de l'admettre." },
    ],
    qs: [
      { t: "fill", q: "終電がないので、タクシーで帰ら＿＿＿。", fr: "Il n'y a plus de train, je suis bien obligé de rentrer en taxi.",
        o: ["ざるを得ない", "ないことはない", "かねない", "得ない"], a: 0,
        e: "V-ない radical + ざるを得ない = être contraint de (帰らざるを得ない)." },
      { t: "usage", q: "Forme en ざるを得ない de する ?",
        o: ["せざるを得ない", "しざるを得ない", "さざるを得ない", "するざるを得ない"], a: 0,
        e: "する est irrégulier → せざるを得ない." },
    ],
  },

  {
    id: "g106", g: "〜しかない", m: "n'avoir d'autre choix que de", f: "V-dict + しかない",
    c: "condition", lv: 2, rel: ["g105"],
    note: "Une seule option reste possible : « il ne reste qu'à… ». Avec un nom : « il n'y a que… ».",
    ex: [
      { jp: "バスがないので、歩くしかない。", fr: "Il n'y a pas de bus, il ne reste qu'à marcher." },
      { jp: "もう、やるしかない。", fr: "Maintenant, il n'y a plus qu'à le faire." },
    ],
    qs: [
      { t: "fill", q: "助けがないなら、自分でやる＿＿＿。", fr: "S'il n'y a pas d'aide, il ne reste qu'à le faire soi-même.",
        o: ["しかない", "ことはない", "わけがない", "かねない"], a: 0,
        e: "V-dict + しかない = il ne reste qu'à (やるしかない)." },
      { t: "nuance", q: "〜しかない vs 〜ざるを得ない : nuance ?",
        o: ["sens proche ; ざるを得ない est plus formel et insiste sur la contrainte extérieure", "opposés", "しかない est formel", "ざるを得ない = libre choix"], a: 0,
        e: "Quasi-synonymes de résignation ; ざるを得ない est plus soutenu." },
    ],
  },

  {
    id: "g107", g: "〜ずにはいられない", m: "ne pas pouvoir s'empêcher de", f: "V-ない radical + ずにはいられない（する→せずに）",
    c: "condition", lv: 3, rel: ["g105"],
    note: "Impossible de retenir une action/un sentiment spontané : « on ne peut s'empêcher de… ».",
    ex: [
      { jp: "あの映画は泣かずにはいられない。", fr: "Devant ce film, on ne peut s'empêcher de pleurer." },
      { jp: "彼の冗談には笑わずにはいられない。", fr: "Ses blagues, impossible de ne pas en rire." },
    ],
    qs: [
      { t: "fill", q: "困っている人を見ると、助け＿＿＿。", fr: "Quand je vois quelqu'un en difficulté, je ne peux m'empêcher de l'aider.",
        o: ["ずにはいられない", "かねない", "得ない", "がたい"], a: 0,
        e: "〜ずにはいられない = ne pas pouvoir s'empêcher de (助けずにはいられない)." },
      { t: "meaning", q: "「感動せずにはいられない」— sens ?",
        o: ["on ne peut s'empêcher d'être ému", "on ne doit pas s'émouvoir", "on n'est jamais ému", "on choisit d'être ému"], a: 0,
        e: "〜ずにはいられない = réaction spontanée irrépressible." },
    ],
  },

  {
    id: "g108", g: "〜だけあって", m: "comme on peut l'attendre de, à juste titre", f: "V-plain／A／N + だけあって",
    c: "express", lv: 3, rel: ["g109"],
    note: "Un résultat positif est conforme à ce qu'on attend d'un statut/effort. Ton appréciatif.",
    ex: [
      { jp: "プロだけあって、演技がすばらしい。", fr: "En vrai professionnel, son jeu est magnifique." },
      { jp: "よく勉強しただけあって、合格した。", fr: "Comme il a bien étudié (et c'est mérité), il a réussi." },
    ],
    qs: [
      { t: "fill", q: "人気店＿＿＿、いつも混んでいる。", fr: "Comme c'est un restaurant réputé (à juste titre), il est toujours bondé.",
        o: ["だけあって", "だけに", "どころか", "ばかりに"], a: 0,
        e: "〜だけあって = résultat conforme/mérité à un statut (人気店だけあって)." },
      { t: "meaning", q: "「留学しただけあって、英語が上手だ」— sens ?",
        o: ["comme il a étudié à l'étranger, son anglais est bon (logique)", "bien qu'il ait étudié à l'étranger", "à cause de l'étranger seulement", "avant de partir à l'étranger"], a: 0,
        e: "〜だけあって souligne un résultat à la hauteur des attentes." },
    ],
  },

  {
    id: "g109", g: "〜だけに", m: "d'autant plus que, précisément parce que", f: "V-plain／A／N + だけに",
    c: "express", lv: 3, rel: ["g108", "g069"],
    note: "La cause étant ce qu'elle est, le résultat/le sentiment est renforcé (souvent émotionnel).",
    ex: [
      { jp: "期待していただけに、結果が残念だ。", fr: "Comme j'avais beaucoup espéré, le résultat est d'autant plus décevant." },
      { jp: "ベテランだけに、ミスが目立つ。", fr: "Précisément parce que c'est un vétéran, ses erreurs se remarquent." },
    ],
    qs: [
      { t: "fill", q: "苦労した＿＿＿、合格の喜びは大きい。", fr: "Comme j'ai peiné, la joie de réussir est d'autant plus grande.",
        o: ["だけに", "だけあって", "どころか", "ものの"], a: 0,
        e: "〜だけに = d'autant plus que (苦労しただけに)." },
      { t: "nuance", q: "〜だけに vs 〜だけあって : nuance ?",
        o: ["だけに renforce souvent un sentiment (positif OU négatif) ; だけあって souligne un résultat mérité (positif)", "identiques", "だけに est toujours positif", "だけあって est négatif"], a: 0,
        e: "だけに = « d'autant plus » (émotion) ; だけあって = « à juste titre » (mérite)." },
    ],
  },

  {
    id: "g110", g: "〜たところで", m: "même si (en vain), quand bien même", f: "V-た + ところで",
    c: "condition", lv: 3, rel: ["g022"],
    note: "Même en faisant X, le résultat espéré n'arrivera pas : « ça ne servirait à rien de… ».",
    ex: [
      { jp: "今から急いだところで、間に合わない。", fr: "Même en me dépêchant maintenant, je n'arriverai pas à temps." },
      { jp: "謝ったところで、許してくれないだろう。", fr: "Quand bien même je m'excuserais, il ne me pardonnerait pas." },
    ],
    qs: [
      { t: "fill", q: "いくら考え＿＿＿、答えは出ないよ。", fr: "Tu auras beau réfléchir, tu ne trouveras pas la réponse.",
        o: ["たところで", "たとたん", "たうえで", "たきり"], a: 0,
        e: "〜たところで = même si (en vain) (考えたところで)." },
      { t: "nuance", q: "〜たところで vs 〜ても : nuance ?",
        o: ["たところで souligne l'inutilité/le faible effet ; ても = simple concession", "identiques", "ても = inutilité", "たところで = cause"], a: 0,
        e: "たところで = « même si… ça ne changera rien »." },
    ],
  },

  {
    id: "g111", g: "〜つつ(も)", m: "tout en / bien que (concession soutenue)", f: "V-ます stem + つつ(も)",
    c: "contrast", lv: 3, rel: ["g020"],
    note: "Registre écrit. (1) simultanéité (≈ ながら) ; (2) avec も : concession (« tout en sachant que… mais »).",
    ex: [
      { jp: "悪いと知りつつも、やめられない。", fr: "Tout en sachant que c'est mal, je ne peux m'arrêter." },
      { jp: "景色を楽しみつつ歩いた。", fr: "J'ai marché tout en profitant du paysage." },
    ],
    qs: [
      { t: "fill", q: "体に悪いと思い＿＿＿、つい食べてしまう。", fr: "Tout en sachant que c'est mauvais pour la santé, j'en mange quand même.",
        o: ["つつも", "ながらに", "どころか", "あげく"], a: 0,
        e: "〜つつも = concession soutenue (思いつつも)." },
      { t: "nuance", q: "〜つつ vs 〜ながら : nuance ?",
        o: ["même sens ; つつ est plus écrit/littéraire", "opposés", "ながら est littéraire", "つつ = cause"], a: 0,
        e: "つつ = registre écrit de ながら." },
    ],
  },

  {
    id: "g112", g: "〜つつある", m: "être en train de (évolution graduelle)", f: "V-ます stem + つつある",
    c: "time", lv: 3, rel: ["g111"],
    note: "Registre écrit : un changement progresse de façon continue vers son terme (回復しつつある).",
    ex: [
      { jp: "景気は回復しつつある。", fr: "La conjoncture est en train de se redresser." },
      { jp: "問題は解決しつつある。", fr: "Le problème est en voie de résolution." },
    ],
    qs: [
      { t: "fill", q: "地球の環境は悪化し＿＿＿。", fr: "L'environnement de la planète est en train de se dégrader.",
        o: ["つつある", "きりだ", "ばかりだ", "得る"], a: 0,
        e: "〜つつある = évolution en cours (悪化しつつある)." },
      { t: "nuance", q: "〜つつある vs 〜ている : nuance ?",
        o: ["つつある = écrit, insiste sur l'évolution vers un terme ; ている = état/action en cours (neutre)", "identiques", "ている est littéraire", "つつある = état figé"], a: 0,
        e: "つつある souligne la progression continue (soutenu)." },
    ],
  },

  {
    id: "g113", g: "〜っこない", m: "il n'y a aucune chance que (familier)", f: "V-ます stem + っこない",
    c: "modality", lv: 2, rel: ["g050"],
    note: "Forme familière niant catégoriquement une possibilité : « jamais de la vie ça n'arrivera ».",
    ex: [
      { jp: "そんな難しい問題、できっこない。", fr: "Un problème aussi dur, jamais je n'y arriverai." },
      { jp: "彼が来るなんて、あるっこない。", fr: "Qu'il vienne ? Aucune chance." },
    ],
    qs: [
      { t: "fill", q: "一日で全部覚えられ＿＿＿よ。", fr: "Tout mémoriser en un jour, c'est impossible.",
        o: ["っこない", "かねない", "得る", "がたい"], a: 0,
        e: "〜っこない = impossibilité catégorique familière (覚えられっこない)." },
      { t: "nuance", q: "〜っこない équivaut à :",
        o: ["〜わけがない／はずがない (familier)", "〜かもしれない", "〜に違いない", "〜ことになる"], a: 0,
        e: "っこない = « aucune chance », registre oral." },
    ],
  },

  {
    id: "g114", g: "〜っぱなし", m: "laisser (tel quel) / sans arrêt (négligence)", f: "V-ます stem + っぱなし",
    c: "express", lv: 3, rel: ["g125"],
    note: "(1) laisser un état sans le corriger (つけっぱなし) ; (2) action continue sans interruption (立ちっぱなし).",
    ex: [
      { jp: "電気をつけっぱなしで出かけた。", fr: "Je suis sorti en laissant la lumière allumée." },
      { jp: "一日中立ちっぱなしで疲れた。", fr: "Je suis resté debout toute la journée, épuisé." },
    ],
    qs: [
      { t: "fill", q: "水を出し＿＿＿にしないでください。", fr: "Ne laissez pas l'eau couler sans arrêt.",
        o: ["っぱなし", "がち", "ぎみ", "っこ"], a: 0,
        e: "〜っぱなし = laisser dans un état (négligence) : 出しっぱなし." },
      { t: "meaning", q: "「窓を開けっぱなしだ」— sens ?",
        o: ["la fenêtre est restée ouverte (laissée ainsi)", "la fenêtre vient d'être ouverte", "on ferme la fenêtre", "la fenêtre s'ouvre toute seule"], a: 0,
        e: "〜っぱなし = état laissé tel quel (souvent reproche)." },
    ],
  },

  {
    id: "g115", g: "〜て以来", m: "depuis que", f: "V-て + 以来",
    c: "time", lv: 2, rel: ["g020"],
    note: "Depuis un événement passé, une situation se maintient jusqu'à présent.",
    ex: [
      { jp: "日本に来て以来、一度も国に帰っていない。", fr: "Depuis que je suis venu au Japon, je ne suis pas rentré une seule fois." },
      { jp: "卒業して以来、彼に会っていない。", fr: "Depuis que j'ai obtenu mon diplôme, je ne l'ai pas revu." },
    ],
    qs: [
      { t: "fill", q: "引っ越して＿＿＿、近所の人と話していない。", fr: "Depuis que j'ai déménagé, je n'ai pas parlé aux voisins.",
        o: ["以来", "以上", "以前", "以後"], a: 0,
        e: "V-て + 以来 = depuis que (引っ越して以来)." },
      { t: "nuance", q: "〜て以来 vs 〜てから : nuance ?",
        o: ["以来 = depuis un point de départ, état durable jusqu'à présent (soutenu) ; てから = simple succession", "identiques", "てから est soutenu", "以来 = avant"], a: 0,
        e: "以来 souligne la continuité depuis un événement marquant." },
    ],
  },

  {
    id: "g116", g: "〜というと／といえば", m: "à propos de, quand on parle de", f: "N／Phrase + というと／といえば",
    c: "express", lv: 2, rel: ["g056"],
    note: "Reprend un mot évoqué pour développer ou réagir par association (« en parlant de… »).",
    ex: [
      { jp: "京都というと、お寺を思い出す。", fr: "Quand on parle de Kyoto, je pense aux temples." },
      { jp: "夏といえば、海だね。", fr: "L'été, ça évoque la mer." },
    ],
    qs: [
      { t: "fill", q: "日本の料理＿＿＿、やっぱり寿司でしょう。", fr: "Quand on parle de cuisine japonaise, ce sont quand même les sushi.",
        o: ["というと", "について", "にとって", "に対して"], a: 0,
        e: "〜というと = « en parlant de… » (réaction par association)." },
      { t: "meaning", q: "「先生といえば、来週来るそうだ」— rôle de といえば ?",
        o: ["rebondir sur le mot « professeur » pour ajouter une info", "exprimer une cause", "poser une condition", "marquer un contraste"], a: 0,
        e: "〜といえば = rebondir par association sur un sujet évoqué." },
    ],
  },

  {
    id: "g117", g: "〜というものだ", m: "voilà ce que c'est que, c'est cela même", f: "V-plain／A／N + というものだ",
    c: "express", lv: 3, rel: ["g056"],
    note: "Affirme avec emphase une vérité générale ou un jugement (« c'est précisément ça, le… »).",
    ex: [
      { jp: "困ったときに助け合うのが友情というものだ。", fr: "S'entraider dans l'épreuve, voilà ce qu'est l'amitié." },
      { jp: "それは甘えというものだ。", fr: "Ça, ça s'appelle se laisser aller." },
    ],
    qs: [
      { t: "fill", q: "努力が報われないのも人生＿＿＿。", fr: "Que les efforts ne soient pas récompensés, c'est ça aussi, la vie.",
        o: ["というものだ", "というわけだ", "に違いない", "ことだ"], a: 0,
        e: "〜というものだ = affirmation emphatique d'une vérité (人生というものだ)." },
      { t: "nuance", q: "〜というものだ vs 〜というわけだ : nuance ?",
        o: ["というものだ = définition/jugement général emphatique ; というわけだ = conclusion logique d'un raisonnement", "identiques", "というわけだ = définition", "というものだ = conclusion"], a: 0,
        e: "ものだ = « voilà ce qu'est… » ; わけだ = « voilà pourquoi… »." },
    ],
  },

  {
    id: "g118", g: "〜というより", m: "plutôt que de dire, ou plutôt", f: "V-plain／A／N + というより",
    c: "contrast", lv: 2, rel: ["g116"],
    note: "Corrige une formulation par une plus juste : « plus que X, c'est plutôt Y ».",
    ex: [
      { jp: "彼は優しいというより、お人好しだ。", fr: "Il est gentil, ou plutôt trop bon." },
      { jp: "趣味というより、生きがいだ。", fr: "Plus qu'un loisir, c'est une raison de vivre." },
    ],
    qs: [
      { t: "fill", q: "今日は涼しい＿＿＿、むしろ寒い。", fr: "Aujourd'hui, plutôt que frais, c'est carrément froid.",
        o: ["というより", "といっても", "どころか", "ものの"], a: 0,
        e: "〜というより = rectification (« plutôt que… c'est… »), souvent + むしろ." },
      { t: "meaning", q: "「青というより緑だ」— sens ?",
        o: ["plus que bleu, c'est plutôt vert", "à la fois bleu et vert", "ni bleu ni vert", "bleu donc vert"], a: 0,
        e: "〜というより = choisir la formulation la plus exacte." },
    ],
  },

  {
    id: "g119", g: "〜といっても", m: "même si l'on dit que, certes… mais", f: "V-plain／A／N + といっても",
    c: "contrast", lv: 2, rel: ["g022"],
    note: "Tempère une affirmation : ce que le mot laisse imaginer est en réalité plus modeste.",
    ex: [
      { jp: "料理ができるといっても、卵焼きぐらいだ。", fr: "Je sais cuisiner, certes, mais tout juste une omelette." },
      { jp: "近いといっても、歩いて三十分かかる。", fr: "C'est proche, soi-disant, mais ça fait trente minutes à pied." },
    ],
    qs: [
      { t: "fill", q: "社長＿＿＿、社員は三人だけの小さな会社だ。", fr: "Président, certes, mais d'une petite société de trois employés.",
        o: ["といっても", "というと", "といえば", "どころか"], a: 0,
        e: "〜といっても = « même si on dit X, en réalité… »." },
      { t: "meaning", q: "「休みといっても、仕事の連絡が来る」— sens ?",
        o: ["c'est censé être un jour de congé, mais le travail me contacte", "c'est un vrai congé tranquille", "il n'y a pas de congé", "le congé arrive après le travail"], a: 0,
        e: "〜といっても tempère ce que le mot fait attendre." },
    ],
  },

  {
    id: "g120", g: "〜どおり(に)", m: "conformément à, exactement comme", f: "N + どおり(に) ／ V-dict＋とおり",
    c: "express", lv: 2, rel: [],
    note: "Collé à un nom : どおり (予定どおり, 期待どおり). Le résultat correspond exactement au modèle.",
    ex: [
      { jp: "計画どおりに進んだ。", fr: "Cela s'est déroulé conformément au plan." },
      { jp: "予想どおりの結果だった。", fr: "Le résultat fut conforme aux prévisions." },
    ],
    qs: [
      { t: "fill", q: "彼は約束＿＿＿に来てくれた。", fr: "Il est venu comme promis.",
        o: ["どおり", "ばかり", "ながら", "あげく"], a: 0,
        e: "N + どおり = conformément à (約束どおり)." },
      { t: "meaning", q: "「思いどおりにならない」— sens ?",
        o: ["ça ne se passe pas comme je veux", "ça se passe comme prévu", "je pense toujours pareil", "à propos de mes pensées"], a: 0,
        e: "〜どおりにならない = ne pas tourner comme on le souhaite." },
    ],
  },

  {
    id: "g121", g: "〜とか", m: "il paraît que ; des choses comme (vague)", f: "Phrase／N + とか",
    c: "express", lv: 2, rel: ["g116"],
    note: "(1) rapport incertain (« il paraît que ») ; (2) énumération floue d'exemples.",
    ex: [
      { jp: "彼は来月引っ越すとか。", fr: "Il paraît qu'il déménage le mois prochain." },
      { jp: "果物、りんごとかみかんとかを買った。", fr: "J'ai acheté des fruits, des pommes, des mandarines, ce genre de choses." },
    ],
    qs: [
      { t: "fill", q: "天気予報では、明日は雪が降る＿＿＿。", fr: "D'après la météo, il paraît qu'il neigera demain.",
        o: ["とか", "から", "ので", "のに"], a: 0,
        e: "〜とか (fin de phrase) = rapport incertain (« il paraît que »)." },
      { t: "nuance", q: "〜とか (ouï-dire) est plus… que 〜そうだ :",
        o: ["incertain/vague (l'info est moins assurée)", "formel et précis", "obligatoire", "négatif"], a: 0,
        e: "〜とか marque une information vague, non garantie." },
    ],
  },

  {
    id: "g122", g: "〜ところに／〜ところへ", m: "juste au moment où (arrive…)", f: "V-ている／V-た + ところに／ところへ",
    c: "time", lv: 2, rel: ["g123"],
    note: "Un événement survient pile au moment d'une situation, souvent en l'interrompant.",
    ex: [
      { jp: "出かけようとしたところに、電話がかかってきた。", fr: "Juste au moment où j'allais sortir, on m'a téléphoné." },
      { jp: "困っているところへ、友達が来てくれた。", fr: "Pile quand j'étais embêté, un ami est arrivé." },
    ],
    qs: [
      { t: "fill", q: "寝ようとした＿＿＿、地震が起きた。", fr: "Juste au moment de me coucher, il y a eu un séisme.",
        o: ["ところに", "うちに", "あげく", "以来"], a: 0,
        e: "〜ところに = pile au moment où (寝ようとしたところに)." },
      { t: "meaning", q: "「いいところに来たね」— sens ?",
        o: ["tu tombes bien (tu arrives au bon moment)", "tu es venu trop tôt", "tu es au mauvais endroit", "tu n'es pas venu"], a: 0,
        e: "〜ところに = moment précis (ici, opportun)." },
    ],
  },

  {
    id: "g123", g: "〜ところを", m: "alors que (malgré la situation), au moment où", f: "V-plain／A／N＋の + ところを",
    c: "time", lv: 3, rel: ["g122"],
    note: "(1) formule de politesse : « alors que vous êtes occupé… » ; (2) être surpris en plein moment (見られる).",
    ex: [
      { jp: "お忙しいところをすみません。", fr: "Désolé de vous déranger alors que vous êtes occupé." },
      { jp: "サボっているところを先生に見つかった。", fr: "Le professeur m'a surpris alors que je traînais." },
    ],
    qs: [
      { t: "fill", q: "お休みの＿＿＿、申し訳ありません。", fr: "Je suis désolé de vous déranger pendant votre repos.",
        o: ["ところを", "うちに", "あげく", "以来"], a: 0,
        e: "〜ところを = formule polie « alors que (vous êtes…) »." },
      { t: "meaning", q: "「逃げるところを捕まえた」— sens ?",
        o: ["on l'a attrapé au moment où il s'enfuyait", "on l'a laissé fuir", "il a attrapé quelqu'un", "avant qu'il ne fuie"], a: 0,
        e: "〜ところを = saisir au moment précis de l'action." },
    ],
  },

  {
    id: "g124", g: "〜としても", m: "même si (on suppose que)", f: "V-plain／A／N + としても",
    c: "condition", lv: 2, rel: ["g125"],
    note: "Concession hypothétique : « en admettant même que X, Y reste vrai ».",
    ex: [
      { jp: "本当だとしても、信じられない。", fr: "Même si c'était vrai, je n'arrive pas à y croire." },
      { jp: "行くとしても、来週になる。", fr: "Même si j'y vais, ce sera la semaine prochaine." },
    ],
    qs: [
      { t: "fill", q: "失敗した＿＿＿、いい経験になる。", fr: "Même si j'échoue, ce sera une bonne expérience.",
        o: ["としても", "とすると", "からには", "ものの"], a: 0,
        e: "〜としても = même en supposant que (失敗したとしても)." },
      { t: "nuance", q: "〜としても vs 〜とすれば : différence ?",
        o: ["としても = concession (« même si ») ; とすれば = hypothèse-conséquence (« si l'on suppose, alors »)", "identiques", "としても = hypothèse simple", "とすれば = concession"], a: 0,
        e: "としても (concession) ≠ とすれば (supposition → conclusion)." },
    ],
  },

  {
    id: "g125", g: "〜とすれば／〜としたら", m: "si l'on suppose que, à supposer que", f: "V-plain／A／N + とすれば／としたら",
    c: "condition", lv: 2, rel: ["g124"],
    note: "Pose une hypothèse pour en tirer une conséquence logique.",
    ex: [
      { jp: "宝くじが当たったとしたら、何を買う？", fr: "Si tu gagnais à la loterie, qu'achèterais-tu ?" },
      { jp: "これが事実だとすれば、大問題だ。", fr: "Si c'est un fait, c'est un grave problème." },
    ],
    qs: [
      { t: "fill", q: "全員が反対する＿＿＿、計画は中止だ。", fr: "À supposer que tous s'y opposent, le projet sera annulé.",
        o: ["とすれば", "としても", "といっても", "どころか"], a: 0,
        e: "〜とすれば = hypothèse → conséquence (反対するとすれば)." },
      { t: "meaning", q: "「君がやらないとしたら、誰がやる？」— sens ?",
        o: ["si l'on suppose que tu ne le fais pas, qui le fera ?", "même si tu ne le fais pas", "parce que tu ne le fais pas", "dès que tu le fais"], a: 0,
        e: "〜としたら = supposition de départ d'un raisonnement." },
    ],
  },

  {
    id: "g126", g: "〜とは", m: "le fait que… (surprise) ; cela signifie que (définition)", f: "V-plain／A／N + とは",
    c: "contrast", lv: 3, rel: ["g117"],
    note: "(1) marque la surprise/l'indignation devant un fait ; (2) introduit une définition.",
    ex: [
      { jp: "彼が裏切るとは、思わなかった。", fr: "Je n'aurais jamais pensé qu'il trahirait." },
      { jp: "「常識」とは何かを考える。", fr: "Réfléchir à ce qu'est le « bon sens »." },
    ],
    qs: [
      { t: "fill", q: "こんなに難しい＿＿＿、想像もしなかった。", fr: "Que ce soit aussi difficile, je ne l'aurais jamais imaginé.",
        o: ["とは", "には", "では", "とも"], a: 0,
        e: "〜とは = surprise devant un fait (難しいとは)." },
      { t: "meaning", q: "「合格するとは驚きだ」— sens de とは ?",
        o: ["qu'il réussisse, c'est une surprise", "il doit réussir", "il réussit toujours", "à propos de la réussite"], a: 0,
        e: "〜とは = étonnement/émotion face à un fait." },
    ],
  },

  {
    id: "g127", g: "〜ないことには", m: "à moins de, tant que… ne… pas", f: "V-ない + ことには",
    c: "condition", lv: 3, rel: ["g031"],
    note: "Condition indispensable : sans réaliser X, rien (souvent négatif) ne peut suivre.",
    ex: [
      { jp: "実際に見ないことには、判断できない。", fr: "Tant que je ne l'aurai pas vu de mes yeux, je ne peux juger." },
      { jp: "やってみないことには、分からない。", fr: "À moins d'essayer, on ne peut savoir." },
    ],
    qs: [
      { t: "fill", q: "予約し＿＿＿、入れませんよ。", fr: "À moins de réserver, on ne peut pas entrer.",
        o: ["ないことには", "ないうちに", "ないでは", "なくては"], a: 0,
        e: "〜ないことには + (négatif) = condition indispensable (予約しないことには)." },
      { t: "meaning", q: "「お金がないことには、何もできない」— sens ?",
        o: ["tant qu'on n'a pas d'argent, on ne peut rien faire", "grâce à l'argent on peut tout", "même sans argent on peut", "à cause de l'argent"], a: 0,
        e: "〜ないことには = sans cette condition, rien n'est possible." },
    ],
  },

  {
    id: "g128", g: "〜ないことはない", m: "ce n'est pas qu'on ne puisse pas, il n'est pas exclu de", f: "V-ない／A-くない + ことはない",
    c: "modality", lv: 3, rel: ["g051"],
    note: "Double négation atténuée : on admet une possibilité avec réserve (« si, on peut, mais… »).",
    ex: [
      { jp: "辛い物も食べないことはない。", fr: "Ce n'est pas que je ne mange pas de plats épicés (j'en mange un peu)." },
      { jp: "急げば間に合わないことはない。", fr: "En se dépêchant, il n'est pas exclu d'arriver à temps." },
    ],
    qs: [
      { t: "fill", q: "難しいが、できない＿＿＿。", fr: "C'est difficile, mais ce n'est pas qu'on ne puisse pas le faire.",
        o: ["ことはない", "ことだ", "ものだ", "わけだ"], a: 0,
        e: "〜ないことはない = possibilité admise avec réserve (できないことはない)." },
      { t: "nuance", q: "Nuance de 〜ないことはない ?",
        o: ["affirmation prudente/réservée (« si, un peu, mais… »)", "négation totale", "obligation", "interdiction"], a: 0,
        e: "Double négation = concession nuancée." },
    ],
  },

  {
    id: "g129", g: "〜にあたって／〜にあたり", m: "à l'occasion de, au moment d'entreprendre (formel)", f: "V-dict／N + にあたって",
    c: "particle", lv: 3, rel: ["g011"],
    note: "Registre formel : au moment d'entamer une action importante. Tourné vers l'action à venir.",
    ex: [
      { jp: "開会にあたって、一言ごあいさつ申し上げます。", fr: "À l'occasion de l'ouverture, permettez-moi quelques mots." },
      { jp: "新生活を始めるにあたり、引っ越した。", fr: "Au moment d'entamer une nouvelle vie, j'ai déménagé." },
    ],
    qs: [
      { t: "fill", q: "卒業する＿＿＿、お世話になった先生に感謝した。", fr: "À l'occasion de l'obtention du diplôme, j'ai remercié mes professeurs.",
        o: ["にあたって", "に際して", "において", "について"], a: 0,
        e: "〜にあたって = au moment d'entreprendre (qqch d'important), formel." },
      { t: "nuance", q: "〜にあたって vs 〜に際して : nuance ?",
        o: ["très proches (occasion formelle) ; にあたって est tourné vers une action qu'on va entreprendre", "opposés", "に際して = familier", "にあたって = passé"], a: 0,
        e: "Quasi-synonymes formels ; にあたって accompagne une action en préparation." },
    ],
  },

  {
    id: "g130", g: "〜に応えて", m: "en réponse à, pour répondre à (attente, demande)", f: "N + に応えて",
    c: "particle", lv: 2, rel: ["g007"],
    note: "Agir conformément à une attente, une demande, un soutien (期待, 要望, 声援).",
    ex: [
      { jp: "ファンの期待に応えて、優勝した。", fr: "Répondant aux attentes des fans, il a remporté le titre." },
      { jp: "要望に応えて、営業時間を延ばした。", fr: "Pour répondre aux demandes, on a prolongé les horaires." },
    ],
    qs: [
      { t: "fill", q: "観客の声援＿＿＿、選手は全力を尽くした。", fr: "Répondant aux encouragements du public, le joueur a tout donné.",
        o: ["に応えて", "に応じて", "に反して", "について"], a: 0,
        e: "〜に応えて = en réponse à une attente/un soutien (声援に応えて)." },
      { t: "nuance", q: "〜に応えて vs 〜に応じて : nuance ?",
        o: ["に応えて = répondre à une attente/demande ; に応じて = s'adapter à une variation/condition", "identiques", "に応じて = répondre à une attente", "に応えて = variation"], a: 0,
        e: "応えて (répondre à un souhait) ≠ 応じて (s'ajuster selon)." },
    ],
  },

  {
    id: "g131", g: "〜にかけては", m: "pour ce qui est de, en matière de (point fort)", f: "N + にかけては",
    c: "particle", lv: 3, rel: ["g016"],
    note: "Met en avant un domaine où quelqu'un excelle : « quand il s'agit de X, personne ne le bat ».",
    ex: [
      { jp: "料理にかけては、彼の右に出る者はいない。", fr: "En matière de cuisine, personne ne le surpasse." },
      { jp: "記憶力にかけては自信がある。", fr: "Pour ce qui est de la mémoire, j'ai confiance en moi." },
    ],
    qs: [
      { t: "fill", q: "速さ＿＿＿、彼がチームで一番だ。", fr: "Pour ce qui est de la vitesse, c'est lui le meilleur de l'équipe.",
        o: ["にかけては", "において", "について", "に対して"], a: 0,
        e: "〜にかけては = domaine d'excellence (速さにかけては)." },
      { t: "meaning", q: "「歌にかけては誰にも負けない」— sens ?",
        o: ["pour le chant, je ne perds contre personne", "je perds toujours au chant", "à propos du chant", "je ne chante pas"], a: 0,
        e: "〜にかけては souligne un point fort." },
    ],
  },

  {
    id: "g132", g: "〜に加えて", m: "en plus de, outre", f: "N + に加えて",
    c: "particle", lv: 2, rel: ["g094"],
    note: "Ajoute un élément à un autre : « à X s'ajoute Y ».",
    ex: [
      { jp: "強風に加えて、大雨も降ってきた。", fr: "Au vent violent s'est ajoutée une forte pluie." },
      { jp: "実力に加えて、運も必要だ。", fr: "Outre le talent, il faut aussi de la chance." },
    ],
    qs: [
      { t: "fill", q: "授業料＿＿＿、教材費もかかる。", fr: "En plus des frais de scolarité, il y a les frais de matériel.",
        o: ["に加えて", "に反して", "に応じて", "について"], a: 0,
        e: "〜に加えて = en plus de (授業料に加えて)." },
      { t: "meaning", q: "「経験に加えて知識も豊富だ」— sens ?",
        o: ["en plus de l'expérience, il a aussi de vastes connaissances", "à la place de l'expérience", "contrairement à l'expérience", "à cause de l'expérience"], a: 0,
        e: "〜に加えて = addition de deux éléments." },
    ],
  },

  {
    id: "g133", g: "〜にかわって／〜に代わり", m: "à la place de, au nom de", f: "N + にかわって",
    c: "particle", lv: 2, rel: ["g042"],
    note: "(1) remplacer quelqu'un/quelque chose ; (2) agir au nom de.",
    ex: [
      { jp: "社長に代わって、副社長が出席した。", fr: "À la place du PDG, le vice-président a assisté." },
      { jp: "現金にかわって、電子マネーが普及した。", fr: "À la place du liquide, la monnaie électronique s'est répandue." },
    ],
    qs: [
      { t: "fill", q: "病気の父＿＿＿、私が店を継いだ。", fr: "À la place de mon père malade, j'ai repris le magasin.",
        o: ["にかわって", "について", "に応じて", "に加えて"], a: 0,
        e: "〜にかわって = à la place de / au nom de (父にかわって)." },
      { t: "meaning", q: "「手紙にかわってメールが使われる」— sens ?",
        o: ["le mail est utilisé à la place du courrier", "le mail s'ajoute au courrier", "le courrier remplace le mail", "à propos du courrier"], a: 0,
        e: "〜にかわって = substitution." },
    ],
  },

  {
    id: "g134", g: "〜に比べて", m: "comparé à, par rapport à", f: "N + に比べて／比べると",
    c: "particle", lv: 1, rel: ["g021"],
    note: "Établit une comparaison entre deux éléments.",
    ex: [
      { jp: "去年に比べて、今年は暑い。", fr: "Comparé à l'an dernier, il fait chaud cette année." },
      { jp: "都会に比べて、田舎は物価が安い。", fr: "Par rapport à la ville, la vie est moins chère à la campagne." },
    ],
    qs: [
      { t: "fill", q: "兄＿＿＿、弟のほうが背が高い。", fr: "Par rapport à l'aîné, le cadet est plus grand.",
        o: ["に比べて", "に応じて", "に反して", "に加えて"], a: 0,
        e: "〜に比べて = comparé à (兄に比べて)." },
      { t: "meaning", q: "「以前に比べて元気になった」— sens ?",
        o: ["comparé à avant, il va mieux", "comme avant", "contrairement à avant en pire", "à cause d'avant"], a: 0,
        e: "〜に比べて = mise en comparaison." },
    ],
  },

  {
    id: "g135", g: "〜にしては", m: "pour (contrairement à ce qu'on attendrait)", f: "V-plain／N + にしては",
    c: "contrast", lv: 2, rel: ["g018"],
    note: "Le résultat ne correspond pas à ce que le critère laisserait attendre (« pour un X, c'est étonnamment… »).",
    ex: [
      { jp: "初めてにしては、上手だ。", fr: "Pour une première fois, c'est bien fait." },
      { jp: "子供が描いたにしては、すごい絵だ。", fr: "Pour un dessin d'enfant, c'est impressionnant." },
    ],
    qs: [
      { t: "fill", q: "冬＿＿＿、暖かい日だ。", fr: "Pour un jour d'hiver, il fait doux.",
        o: ["にしては", "として", "にとって", "について"], a: 0,
        e: "〜にしては = contrairement à l'attente liée au critère (冬にしては)." },
      { t: "nuance", q: "〜にしては vs 〜割に : nuance ?",
        o: ["sens proche (décalage avec l'attente) ; にしては part d'un critère/standard précis", "opposés", "割に = standard précis", "にしては = pas de décalage"], a: 0,
        e: "Tous deux marquent un décalage ; にしては s'appuie sur un standard nommé." },
    ],
  },

  {
    id: "g136", g: "〜にしろ／〜にせよ", m: "que ce soit… ou, même si", f: "V-plain／A／N + にしろ／にせよ",
    c: "contrast", lv: 3, rel: ["g002"],
    note: "Concession formelle, souvent répétée (Xにしろ Yにしろ = que ce soit X ou Y).",
    ex: [
      { jp: "行くにせよ行かないにせよ、連絡してください。", fr: "Que vous y alliez ou non, prévenez-moi." },
      { jp: "冗談にしろ、言ってはいけない。", fr: "Même si c'est une blague, il ne faut pas le dire." },
    ],
    qs: [
      { t: "fill", q: "賛成する＿＿＿反対する＿＿＿、理由を述べてください。", fr: "Que vous soyez pour ou contre, exposez vos raisons.",
        o: ["にせよ…にせよ", "ばかり…ばかり", "から…から", "ので…ので"], a: 0,
        e: "〜にせよ〜にせよ = « que ce soit… ou… » (formel)." },
      { t: "nuance", q: "〜にしろ／にせよ équivaut à :",
        o: ["〜にしても (concession formelle)", "〜から (cause)", "〜ために (but)", "〜ながら (simultanéité)"], a: 0,
        e: "にしろ/にせよ = variantes écrites de にしても." },
    ],
  },

  {
    id: "g137", g: "〜に相違ない", m: "il ne fait aucun doute que (formel)", f: "V-plain／A／N + に相違ない",
    c: "modality", lv: 3, rel: ["g043"],
    note: "Équivalent écrit et soutenu de に違いない : forte conviction.",
    ex: [
      { jp: "犯人はこの男に相違ない。", fr: "Le coupable est sans aucun doute cet homme." },
      { jp: "彼の話は本当に相違ない。", fr: "Son récit est sans nul doute véridique." },
    ],
    qs: [
      { t: "fill", q: "これは彼の筆跡＿＿＿。", fr: "C'est sans aucun doute son écriture.",
        o: ["に相違ない", "に過ぎない", "に限る", "にすぎず"], a: 0,
        e: "〜に相違ない = forte conviction (formel) : 筆跡に相違ない." },
      { t: "nuance", q: "〜に相違ない vs 〜に違いない : nuance ?",
        o: ["même sens ; に相違ない est plus écrit/formel", "opposés", "に違いない est formel", "に相違ない exprime un doute"], a: 0,
        e: "相違ない = registre soutenu de 違いない." },
    ],
  },

  {
    id: "g138", g: "〜につき", m: "par (unité) ; en raison de ; concernant", f: "N + につき",
    c: "particle", lv: 2, rel: ["g034"],
    note: "Trois emplois : (1) « par » (一人につき) ; (2) cause formelle (« en raison de ») ; (3) « au sujet de ».",
    ex: [
      { jp: "一人につき二枚まで。", fr: "Deux billets maximum par personne." },
      { jp: "工事中につき、通行止めです。", fr: "En raison de travaux, la circulation est interdite." },
    ],
    qs: [
      { t: "fill", q: "本日は祝日＿＿＿、休業いたします。", fr: "En raison du jour férié, nous sommes fermés aujourd'hui.",
        o: ["につき", "について", "にとって", "に応じて"], a: 0,
        e: "〜につき (cause formelle) = en raison de (祝日につき)." },
      { t: "meaning", q: "「一個につき百円」— sens ?",
        o: ["cent yens par pièce", "cent yens en tout", "cent yens à propos de la pièce", "moins de cent yens"], a: 0,
        e: "〜につき (emploi « par ») = par unité." },
    ],
  },

  {
    id: "g139", g: "〜につけ(て)", m: "chaque fois que, à chaque", f: "V-dict + につけ(て) ／ 何かにつけ",
    c: "express", lv: 3, rel: ["g025"],
    note: "Un stimulus entraîne à chaque fois un sentiment/une pensée spontanés (見るにつけ, 何かにつけ).",
    ex: [
      { jp: "この歌を聞くにつけ、故郷を思い出す。", fr: "Chaque fois que j'entends cette chanson, je pense à mon pays." },
      { jp: "何かにつけて文句を言う。", fr: "À la moindre occasion, il se plaint." },
    ],
    qs: [
      { t: "fill", q: "彼の成功を見る＿＿＿、自分の努力不足を感じる。", fr: "Chaque fois que je vois son succès, je ressens mon manque d'efforts.",
        o: ["につけ", "につき", "にして", "において"], a: 0,
        e: "〜につけ = chaque fois que (見るにつけ), réaction spontanée." },
      { t: "meaning", q: "「何かにつけ世話になる」— sens ?",
        o: ["être aidé en toute occasion", "n'être jamais aidé", "aider quelqu'un", "à propos d'aide"], a: 0,
        e: "何かにつけ = « en toute occasion / à tout propos »." },
    ],
  },

  {
    id: "g140", g: "〜によらず", m: "indépendamment de, sans se limiter à", f: "N + によらず",
    c: "particle", lv: 3, rel: ["g002"],
    note: "Le résultat ne dépend pas du critère cité (年齢によらず = quel que soit l'âge).",
    ex: [
      { jp: "年齢によらず、誰でも応募できる。", fr: "Indépendamment de l'âge, tout le monde peut postuler." },
      { jp: "見かけによらず、力が強い。", fr: "Contrairement à son apparence, il est très fort." },
    ],
    qs: [
      { t: "fill", q: "国籍＿＿＿、実力で評価する。", fr: "Indépendamment de la nationalité, on évalue sur la compétence.",
        o: ["によらず", "によって", "に応じて", "に加えて"], a: 0,
        e: "〜によらず = indépendamment de (国籍によらず)." },
      { t: "meaning", q: "「人は見かけによらない」— sens ?",
        o: ["on ne peut juger les gens sur leur apparence", "les gens sont conformes à leur apparence", "à propos de l'apparence", "grâce à l'apparence"], a: 0,
        e: "〜によらない = ne dépend pas de / ne correspond pas à." },
    ],
  },

  {
    id: "g141", g: "〜のもとで／〜のもとに", m: "sous (la direction, la condition de)", f: "N + のもとで／のもとに",
    c: "particle", lv: 3, rel: ["g010"],
    note: "Sous l'influence, la direction ou la condition de quelque chose/quelqu'un.",
    ex: [
      { jp: "先生の指導のもとで研究を続けた。", fr: "J'ai poursuivi mes recherches sous la direction du professeur." },
      { jp: "法のもとに、人は平等だ。", fr: "Devant la loi, les hommes sont égaux." },
    ],
    qs: [
      { t: "fill", q: "親の保護＿＿＿、子供は育つ。", fr: "Sous la protection de leurs parents, les enfants grandissent.",
        o: ["のもとで", "について", "に応じて", "をめぐって"], a: 0,
        e: "〜のもとで = sous (la protection/direction de) : 保護のもとで." },
      { t: "meaning", q: "「厳しい規則のもとで働く」— sens ?",
        o: ["travailler sous des règles strictes", "travailler sans règles", "créer des règles", "à propos des règles"], a: 0,
        e: "〜のもとで = sous l'autorité/la condition de." },
    ],
  },

  {
    id: "g142", g: "〜ばかりに", m: "uniquement parce que (conséquence fâcheuse)", f: "V-plain／A／N＋である + ばかりに",
    c: "condition", lv: 3, rel: ["g034"],
    note: "Une seule cause entraîne un résultat regrettable : « c'est seulement parce que X que (malheureusement) Y ».",
    ex: [
      { jp: "うそをついたばかりに、信用を失った。", fr: "C'est seulement pour avoir menti que j'ai perdu la confiance." },
      { jp: "お金がないばかりに、進学をあきらめた。", fr: "C'est uniquement faute d'argent que j'ai renoncé aux études." },
    ],
    qs: [
      { t: "fill", q: "一言多かった＿＿＿、けんかになった。", fr: "C'est juste pour un mot de trop qu'on s'est disputés.",
        o: ["ばかりに", "からこそ", "おかげで", "だけに"], a: 0,
        e: "〜ばかりに = cause unique d'un résultat fâcheux (多かったばかりに)." },
      { t: "nuance", q: "〜ばかりに vs 〜せいで : nuance ?",
        o: ["ばかりに insiste sur une cause unique aux conséquences regrettables ; せいで = simple cause négative", "identiques", "ばかりに = résultat positif", "せいで = cause unique"], a: 0,
        e: "ばかりに souligne « rien que pour ça » → malheur." },
    ],
  },

  {
    id: "g143", g: "〜はもちろん", m: "sans parler de, non seulement", f: "N + はもちろん（〜も）",
    c: "express", lv: 2, rel: ["g074"],
    note: "X va de soi, et Y aussi : « non seulement X (évident), mais aussi Y ».",
    ex: [
      { jp: "漢字はもちろん、ひらがなも書けない。", fr: "Sans parler des kanji, il ne sait même pas écrire les hiragana." },
      { jp: "国内はもちろん、海外でも有名だ。", fr: "Célèbre dans le pays, sans parler de l'étranger." },
    ],
    qs: [
      { t: "fill", q: "週末＿＿＿、平日も忙しい。", fr: "Sans parler du week-end, même en semaine je suis occupé.",
        o: ["はもちろん", "どころか", "に反して", "に応じて"], a: 0,
        e: "〜はもちろん…も = « non seulement (évidemment)… mais aussi »." },
      { t: "meaning", q: "「子供はもちろん、大人も楽しめる」— sens ?",
        o: ["les enfants bien sûr, mais aussi les adultes peuvent s'amuser", "seuls les enfants s'amusent", "ni enfants ni adultes", "les adultes contre les enfants"], a: 0,
        e: "〜はもちろん = X (évident) + Y (en plus)." },
    ],
  },

  {
    id: "g144", g: "〜はともかく", m: "laissons de côté, quoi qu'il en soit de", f: "N + はともかく(として)",
    c: "express", lv: 3, rel: ["g143"],
    note: "On met X de côté pour se concentrer sur Y, jugé plus important.",
    ex: [
      { jp: "値段はともかく、デザインがいい。", fr: "Le prix mis à part, le design est beau." },
      { jp: "勝ち負けはともかく、楽しもう。", fr: "Victoire ou défaite mises à part, amusons-nous." },
    ],
    qs: [
      { t: "fill", q: "結果＿＿＿、よく頑張った。", fr: "Quel que soit le résultat, tu t'es bien battu.",
        o: ["はともかく", "はもちろん", "に加えて", "どころか"], a: 0,
        e: "〜はともかく = mettre X de côté (結果はともかく)." },
      { t: "meaning", q: "「冗談はともかく、本題に入ろう」— sens ?",
        o: ["blague à part, entrons dans le vif du sujet", "continuons les blagues", "à cause des blagues", "grâce aux blagues"], a: 0,
        e: "〜はともかく = « laissons X de côté »." },
    ],
  },

  {
    id: "g145", g: "〜反面", m: "en revanche, d'un autre côté", f: "V-plain／A／N＋である + 反面",
    c: "contrast", lv: 2, rel: ["g021", "g094"],
    note: "Présente deux aspects opposés d'une même chose.",
    ex: [
      { jp: "この仕事は給料がいい反面、忙しい。", fr: "Ce travail est bien payé, mais en revanche prenant." },
      { jp: "便利な反面、危険もある。", fr: "C'est pratique, mais comporte aussi des dangers." },
    ],
    qs: [
      { t: "fill", q: "都会は刺激が多い＿＿＿、ストレスもたまる。", fr: "La ville est stimulante, mais en revanche stressante.",
        o: ["反面", "上に", "だけに", "あげく"], a: 0,
        e: "〜反面 = aspect opposé (多い反面)." },
      { t: "nuance", q: "〜反面 vs 〜上に : différence ?",
        o: ["反面 oppose deux aspects ; 上に additionne deux aspects de même sens", "identiques", "反面 = addition", "上に = opposition"], a: 0,
        e: "反面 (contraste) ≠ 上に (addition)." },
    ],
  },

  {
    id: "g146", g: "〜べく", m: "afin de, dans le but de (formel)", f: "V-dict + べく（する→すべく）",
    c: "express", lv: 3, rel: ["g041"],
    note: "Registre écrit/littéraire pour exprimer un but. する devient すべく.",
    ex: [
      { jp: "真相を究明すべく、調査を始めた。", fr: "Afin d'élucider la vérité, on a lancé une enquête." },
      { jp: "夢を実現すべく、努力している。", fr: "Pour réaliser mon rêve, je fais des efforts." },
    ],
    qs: [
      { t: "fill", q: "試合に勝つ＿＿＿、毎日厳しい練習をした。", fr: "Afin de gagner le match, je me suis entraîné dur chaque jour.",
        o: ["べく", "ように", "ために", "うえで"], a: 0,
        e: "V-dict + べく = afin de (勝つべく), registre soutenu." },
      { t: "usage", q: "Forme en べく de する ?",
        o: ["すべく", "しべく", "するべく も可", "せべく"], a: 0,
        e: "する → すべく (forme classique) ; するべく existe aussi." },
    ],
  },

  {
    id: "g147", g: "〜まい", m: "ne… probablement pas ; je ne… jamais (volonté négative)", f: "V-dict + まい（する→するまい／すまい）",
    c: "modality", lv: 3, rel: ["g097"],
    note: "(1) supposition négative (« ça ne… sans doute pas ») ; (2) volonté négative ferme (« je ne… plus jamais »).",
    ex: [
      { jp: "あの店はもう二度と行くまい。", fr: "Cette boutique, je n'y remettrai plus jamais les pieds." },
      { jp: "彼はもう来まい。", fr: "Il ne viendra sans doute plus." },
    ],
    qs: [
      { t: "fill", q: "二度と同じ失敗はする＿＿＿と心に誓った。", fr: "Je me suis juré de ne plus jamais commettre la même erreur.",
        o: ["まい", "べき", "そう", "らしい"], a: 0,
        e: "V-dict + まい = volonté négative ferme (するまい)." },
      { t: "meaning", q: "「雨は降るまい」— sens ?",
        o: ["il ne pleuvra probablement pas", "il va sûrement pleuvoir", "il faut qu'il pleuve", "il pleut toujours"], a: 0,
        e: "〜まい = supposition négative (« sans doute pas »)." },
    ],
  },

  {
    id: "g148", g: "〜向き", m: "adapté à, orienté vers / qui convient à", f: "N + 向き",
    c: "express", lv: 2, rel: ["g149"],
    note: "Indique ce qui convient naturellement à une catégorie, ou une orientation (南向き = exposé au sud).",
    ex: [
      { jp: "この本は初心者向きだ。", fr: "Ce livre convient aux débutants." },
      { jp: "南向きの部屋は明るい。", fr: "Une pièce exposée au sud est lumineuse." },
    ],
    qs: [
      { t: "fill", q: "この料理は子供＿＿＿で、辛くない。", fr: "Ce plat convient aux enfants, il n'est pas épicé.",
        o: ["向き", "向け", "ながら", "だらけ"], a: 0,
        e: "〜向き = qui convient naturellement à (子供向き)." },
      { t: "nuance", q: "〜向き vs 〜向け : nuance ?",
        o: ["向き = qui convient/est adapté (spontanément) ; 向け = conçu spécialement pour (intention)", "identiques", "向き = conçu pour", "向け = exposition"], a: 0,
        e: "向き (adéquation naturelle) ≠ 向け (destination voulue)." },
    ],
  },

  {
    id: "g149", g: "〜向け", m: "destiné à, conçu pour", f: "N + 向け",
    c: "express", lv: 2, rel: ["g148"],
    note: "Quelque chose est fabriqué/conçu spécifiquement pour une cible.",
    ex: [
      { jp: "これは輸出向けの製品だ。", fr: "C'est un produit destiné à l'exportation." },
      { jp: "子供向けの番組を作る。", fr: "Réaliser une émission destinée aux enfants." },
    ],
    qs: [
      { t: "fill", q: "初心者＿＿＿の教材を開発した。", fr: "On a développé un support destiné aux débutants.",
        o: ["向け", "向き", "だらけ", "ながら"], a: 0,
        e: "〜向け = conçu spécialement pour (初心者向け)." },
      { t: "meaning", q: "「海外向けに作られた」— sens ?",
        o: ["fabriqué à destination de l'étranger", "fabriqué par hasard à l'étranger", "qui convient par nature", "venu de l'étranger"], a: 0,
        e: "〜向け = production intentionnelle pour une cible." },
    ],
  },

  {
    id: "g150", g: "〜も〜ば〜も", m: "et… et / non seulement… mais aussi", f: "N + も + V-ば／A-ければ + N + も",
    c: "express", lv: 3, rel: ["g074"],
    note: "Énumère deux éléments coexistants (souvent pour appuyer une appréciation globale).",
    ex: [
      { jp: "彼は頭もよければ、性格もいい。", fr: "Il est non seulement intelligent, mais aussi de bon caractère." },
      { jp: "お金もなければ、暇もない。", fr: "Je n'ai ni argent ni temps." },
    ],
    qs: [
      { t: "fill", q: "この町は交通も便利なら、自然＿＿＿豊かだ。", fr: "Cette ville a des transports pratiques et, de plus, une nature riche.",
        o: ["も", "しか", "だけ", "より"], a: 0,
        e: "〜も〜ば〜も = énumération (便利なら…自然も豊かだ)." },
      { t: "meaning", q: "「雨も降れば風も吹く」— sens ?",
        o: ["il pleut et en plus il vente", "soit il pleut soit il vente", "ni pluie ni vent", "il pleut donc il vente"], a: 0,
        e: "〜も〜ば〜も = coexistence de deux éléments." },
    ],
  },

  {
    id: "g151", g: "〜ものか", m: "jamais de la vie ! (négation rhétorique)", f: "V-plain／A + ものか（もんか familier）",
    c: "modality", lv: 3, rel: ["g050"],
    note: "Question rhétorique exprimant un refus/une négation catégorique et émotive.",
    ex: [
      { jp: "あんな店、二度と行くものか。", fr: "Cette boutique ? Jamais je n'y retournerai !" },
      { jp: "彼に負けるものか。", fr: "Pas question que je perde contre lui !" },
    ],
    qs: [
      { t: "fill", q: "こんな失敗、二度とする＿＿＿。", fr: "Une telle erreur, jamais je ne la referai !",
        o: ["ものか", "ことか", "ものを", "ばかり"], a: 0,
        e: "〜ものか = négation rhétorique catégorique (するものか)." },
      { t: "meaning", q: "「泣くものか」— sens ?",
        o: ["jamais je ne pleurerai ! (refus déterminé)", "je vais pleurer", "je pleure souvent", "pourquoi pleurer ?"], a: 0,
        e: "〜ものか = « il est hors de question que… »." },
    ],
  },

  {
    id: "g152", g: "〜ものがある", m: "il y a quelque chose de, on ressent un certain…", f: "V-dict／A + ものがある",
    c: "modality", lv: 3, rel: ["g053"],
    note: "Exprime une impression forte ressentie par le locuteur devant quelque chose.",
    ex: [
      { jp: "彼の演奏には心を打つものがある。", fr: "Son interprétation a quelque chose de touchant." },
      { jp: "その言葉には考えさせるものがある。", fr: "Ces mots ont quelque chose qui fait réfléchir." },
    ],
    qs: [
      { t: "fill", q: "彼女の努力には、目を見張る＿＿＿。", fr: "Ses efforts ont quelque chose d'épatant.",
        o: ["ものがある", "ことがある", "わけがある", "はずがある"], a: 0,
        e: "〜ものがある = impression forte ressentie (見張るものがある)." },
      { t: "meaning", q: "「彼の決意には固いものがある」— sens ?",
        o: ["sa détermination a quelque chose de solide (ressenti)", "sa détermination est fausse", "il n'a pas de détermination", "à propos de la détermination"], a: 0,
        e: "〜ものがある = « il y a un certain… (qu'on ressent) »." },
    ],
  },

  {
    id: "g153", g: "〜やら〜やら", m: "entre… et… (pêle-mêle, confusion)", f: "N／V-plain + やら + N／V-plain + やら",
    c: "express", lv: 3, rel: [],
    note: "Énumère des éléments dans le désordre, souvent pour exprimer un débordement de choses/d'émotions.",
    ex: [
      { jp: "うれしいやら恥ずかしいやら、複雑な気分だ。", fr: "Entre joie et gêne, j'avais des sentiments mêlés." },
      { jp: "掃除やら洗濯やらで、忙しい。", fr: "Entre le ménage, la lessive et tout le reste, je suis débordé." },
    ],
    qs: [
      { t: "fill", q: "泣く＿＿＿笑う＿＿＿、大変な一日だった。", fr: "Entre les pleurs et les rires, ce fut une journée mouvementée.",
        o: ["やら…やら", "ば…ば", "ても…ても", "から…から"], a: 0,
        e: "〜やら〜やら = énumération pêle-mêle (泣くやら笑うやら)." },
      { t: "meaning", q: "「何やらかんやら」— nuance ?",
        o: ["ceci, cela, et tout un tas de choses (vague)", "rien du tout", "une seule chose précise", "exactement deux choses"], a: 0,
        e: "〜やら〜やら exprime un ensemble flou et abondant." },
    ],
  },

  {
    id: "g154", g: "〜ゆえ(に)", m: "par conséquent, en raison de (littéraire)", f: "V-plain／A／N（＋である／の）+ ゆえ(に)",
    c: "condition", lv: 3, rel: ["g035"],
    note: "Cause/conséquence en registre littéraire et soutenu (« du fait de »).",
    ex: [
      { jp: "経験が浅いゆえの失敗だ。", fr: "C'est une erreur due au manque d'expérience." },
      { jp: "貧しさゆえに、進学を諦めた。", fr: "En raison de la pauvreté, il a renoncé aux études." },
    ],
    qs: [
      { t: "fill", q: "若さ＿＿＿の過ちもある。", fr: "Il y a aussi des fautes dues à la jeunesse.",
        o: ["ゆえ", "ばかり", "どころか", "ながら"], a: 0,
        e: "〜ゆえ = cause littéraire (若さゆえ)." },
      { t: "nuance", q: "〜ゆえに équivaut, en plus soutenu, à :",
        o: ["〜から／ので (cause)", "〜ても (concession)", "〜ように (but)", "〜たり (énumération)"], a: 0,
        e: "ゆえに = « par conséquent / du fait de », registre littéraire." },
    ],
  },

  {
    id: "g155", g: "〜をきっかけに", m: "à l'occasion de, ce qui a déclenché", f: "N／V-た＋の + をきっかけに(して)",
    c: "particle", lv: 2, rel: ["g156"],
    note: "Un événement sert de déclencheur à un changement.",
    ex: [
      { jp: "入院をきっかけに、たばこをやめた。", fr: "Mon hospitalisation a été l'occasion d'arrêter de fumer." },
      { jp: "彼との出会いをきっかけに、人生が変わった。", fr: "Ma rencontre avec lui a changé ma vie." },
    ],
    qs: [
      { t: "fill", q: "留学＿＿＿、語学に興味を持った。", fr: "Mon séjour d'études a déclenché mon intérêt pour les langues.",
        o: ["をきっかけに", "について", "に応じて", "に反して"], a: 0,
        e: "〜をきっかけに = élément déclencheur (留学をきっかけに)." },
      { t: "meaning", q: "「事故をきっかけに安全対策を見直した」— sens ?",
        o: ["l'accident a été l'occasion de revoir la sécurité", "malgré l'accident", "à propos de l'accident", "avant l'accident"], a: 0,
        e: "〜をきっかけに = « ce qui a déclenché… »." },
    ],
  },

  {
    id: "g156", g: "〜を契機に", m: "saisissant l'occasion de (formel)", f: "N／V-た＋の + を契機に(して)",
    c: "particle", lv: 3, rel: ["g155"],
    note: "Équivalent formel de をきっかけに : un événement marque un tournant.",
    ex: [
      { jp: "定年を契機に、田舎へ移住した。", fr: "À l'occasion de sa retraite, il s'est installé à la campagne." },
      { jp: "この事件を契機に、法律が改正された。", fr: "Cet incident a été l'occasion de réformer la loi." },
    ],
    qs: [
      { t: "fill", q: "オリンピック＿＿＿、町が整備された。", fr: "Les Jeux olympiques ont été l'occasion d'aménager la ville.",
        o: ["を契機に", "を込めて", "を問わず", "をはじめ"], a: 0,
        e: "〜を契機に = tournant formel (オリンピックを契機に)." },
      { t: "nuance", q: "〜を契機に vs 〜をきっかけに : nuance ?",
        o: ["même sens ; を契機に est plus formel/écrit", "opposés", "をきっかけに est formel", "を契機に = familier"], a: 0,
        e: "契機 = registre soutenu de きっかけ." },
    ],
  },

  {
    id: "g157", g: "〜を中心に", m: "centré sur, autour de, principalement", f: "N + を中心に(して)／を中心として",
    c: "particle", lv: 2, rel: [],
    note: "X est le centre/le point focal autour duquel s'organise l'action.",
    ex: [
      { jp: "若者を中心に、人気が広がった。", fr: "La popularité s'est répandue surtout chez les jeunes." },
      { jp: "駅を中心に町が発展した。", fr: "La ville s'est développée autour de la gare." },
    ],
    qs: [
      { t: "fill", q: "リーダー＿＿＿、チームがまとまった。", fr: "Autour du leader, l'équipe s'est soudée.",
        o: ["を中心に", "について", "に反して", "をよそに"], a: 0,
        e: "〜を中心に = centré sur (リーダーを中心に)." },
      { t: "meaning", q: "「環境問題を中心に議論した」— sens ?",
        o: ["on a débattu principalement des questions environnementales", "on a évité l'environnement", "à cause de l'environnement", "malgré l'environnement"], a: 0,
        e: "〜を中心に = « en se concentrant sur »." },
    ],
  },

  {
    id: "g158", g: "〜をめぐって", m: "concernant, autour de (débat, conflit)", f: "N + をめぐって／をめぐる＋N",
    c: "particle", lv: 3, rel: ["g157"],
    note: "Un sujet de controverse autour duquel s'opposent plusieurs avis/parties.",
    ex: [
      { jp: "遺産をめぐって、争いが起きた。", fr: "Un conflit a éclaté autour de l'héritage." },
      { jp: "ダム建設をめぐる議論が続いている。", fr: "Le débat sur la construction du barrage se poursuit." },
    ],
    qs: [
      { t: "fill", q: "新しい法律＿＿＿、賛否が分かれている。", fr: "Au sujet de la nouvelle loi, les avis sont partagés.",
        o: ["をめぐって", "を込めて", "をはじめ", "をよそに"], a: 0,
        e: "〜をめぐって = autour d'un sujet de controverse (法律をめぐって)." },
      { t: "nuance", q: "〜をめぐって vs 〜について : nuance ?",
        o: ["をめぐって implique plusieurs parties qui s'opposent/débattent ; について = simple thème", "identiques", "について = conflit", "をめぐって = thème neutre"], a: 0,
        e: "をめぐって = thème de discorde/débat entre plusieurs camps." },
    ],
  },

  {
    id: "g159", g: "〜をもって", m: "par, au moyen de ; à compter de (formel)", f: "N + をもって",
    c: "particle", lv: 3, rel: ["g003"],
    note: "Registre formel : (1) moyen (« par, grâce à ») ; (2) limite temporelle (« à compter de / à la date de »).",
    ex: [
      { jp: "本日をもって閉店いたします。", fr: "Nous fermons définitivement à compter de ce jour." },
      { jp: "全力をもって取り組む。", fr: "S'y consacrer de toutes ses forces." },
    ],
    qs: [
      { t: "fill", q: "これ＿＿＿、説明会を終わります。", fr: "Sur ce, nous clôturons la réunion d'information.",
        o: ["をもって", "について", "に応じて", "をよそに"], a: 0,
        e: "〜をもって (temps) = à compter de / sur ce (これをもって)." },
      { t: "meaning", q: "「誠意をもって対応する」— sens ?",
        o: ["répondre avec sincérité (au moyen de la sincérité)", "sans sincérité", "à propos de sincérité", "malgré la sincérité"], a: 0,
        e: "〜をもって (moyen) = « avec / au moyen de »." },
    ],
  },

  {
    id: "g160", g: "〜抜きで／〜抜きに", m: "sans, en omettant", f: "N + 抜きで／抜きに(して)",
    c: "express", lv: 2, rel: ["g161"],
    note: "Faire quelque chose en se passant d'un élément habituel.",
    ex: [
      { jp: "朝食抜きで出かけた。", fr: "Je suis sorti sans petit-déjeuner." },
      { jp: "冗談抜きで、真剣な話だ。", fr: "Blague à part, c'est sérieux." },
    ],
    qs: [
      { t: "fill", q: "わさび＿＿＿で寿司を注文した。", fr: "J'ai commandé les sushi sans wasabi.",
        o: ["抜き", "込め", "ばかり", "だらけ"], a: 0,
        e: "〜抜きで = sans (en omettant) : わさび抜きで." },
      { t: "meaning", q: "「形式抜きで話そう」— sens ?",
        o: ["parlons sans chichis (sans formalités)", "parlons avec formalité", "à propos des formalités", "grâce aux formalités"], a: 0,
        e: "〜抜きで = en se passant de." },
    ],
  },

  {
    id: "g161", g: "〜ぬきには", m: "sans… (impossible)", f: "N + ぬきには／なしには",
    c: "express", lv: 3, rel: ["g160"],
    note: "Sans cet élément, quelque chose ne peut pas se faire (suivi d'une impossibilité).",
    ex: [
      { jp: "彼の協力ぬきには、成功しなかっただろう。", fr: "Sans sa coopération, on n'aurait pas réussi." },
      { jp: "努力ぬきには成功はない。", fr: "Pas de succès sans effort." },
    ],
    qs: [
      { t: "fill", q: "彼の存在＿＿＿、このチームは語れない。", fr: "Sans lui, on ne peut parler de cette équipe.",
        o: ["ぬきには", "込めては", "ばかりに", "どころか"], a: 0,
        e: "〜ぬきには + (impossibilité) = sans X, impossible (存在ぬきには)." },
      { t: "nuance", q: "〜ぬきには vs 〜抜きで : nuance ?",
        o: ["ぬきには = sans X c'est impossible (suivi de négation) ; 抜きで = sans X (simple omission)", "identiques", "抜きで = impossibilité", "ぬきには = omission simple"], a: 0,
        e: "ぬきには souligne l'impossibilité ; 抜きで = simple « sans »." },
    ],
  },

  {
    id: "g162", g: "〜ばかりだ", m: "ne faire qu'(empirer), aller toujours plus vers", f: "V-dict + ばかりだ",
    c: "modality", lv: 3, rel: ["g072"],
    note: "Une évolution unilatérale et continue, souvent négative (« ça ne fait que… »).",
    ex: [
      { jp: "病状は悪くなるばかりだ。", fr: "Son état ne fait qu'empirer." },
      { jp: "物価は上がるばかりだ。", fr: "Les prix ne font que monter." },
    ],
    qs: [
      { t: "fill", q: "練習しないと、下手になる＿＿＿。", fr: "Sans s'entraîner, on ne fait que régresser.",
        o: ["ばかりだ", "ものだ", "ことだ", "わけだ"], a: 0,
        e: "V-dict + ばかりだ = évolution unilatérale (なるばかりだ)." },
      { t: "nuance", q: "〜ばかりだ (évolution) se distingue de 〜てばかり (excès) car :",
        o: ["ばかりだ = tendance qui ne fait que progresser dans un sens ; てばかり = ne faire que (répétition)", "identiques", "ばかりだ = répétition", "てばかり = évolution"], a: 0,
        e: "V-dict + ばかりだ = changement unidirectionnel continu." },
    ],
  },

  {
    id: "g163", g: "〜ずじまい", m: "finir sans avoir (pu) faire", f: "V-ない radical + ずじまい（する→せずじまい）",
    c: "time", lv: 3, rel: ["g090"],
    note: "Une intention n'a finalement jamais été réalisée, avec une nuance de regret.",
    ex: [
      { jp: "結局、彼には会えずじまいだった。", fr: "Finalement, je n'ai pas pu le voir." },
      { jp: "本を借りたが、読まずじまいだった。", fr: "J'ai emprunté le livre, mais je ne l'ai jamais lu." },
    ],
    qs: [
      { t: "fill", q: "忙しくて、旅行は行か＿＿＿だった。", fr: "Trop occupé, je ne suis finalement pas parti en voyage.",
        o: ["ずじまい", "ないまま", "ながら", "きり"], a: 0,
        e: "〜ずじまい = ne jamais avoir fait (regret) : 行かずじまい." },
      { t: "meaning", q: "「お礼を言えずじまいだった」— sens ?",
        o: ["je n'ai finalement pas pu dire merci (regret)", "j'ai dit merci", "je dois dire merci", "je dis toujours merci"], a: 0,
        e: "〜ずじまい = intention non réalisée, avec regret." },
    ],
  },

  {
    id: "g164", g: "〜ことなしに", m: "sans (faire), à moins de", f: "V-dict + ことなしに",
    c: "express", lv: 3, rel: ["g062"],
    note: "Registre soutenu : « sans réaliser X » (souvent suivi d'une impossibilité). Proche de ことなく.",
    ex: [
      { jp: "努力することなしに、成功は得られない。", fr: "Sans faire d'efforts, on n'obtient pas le succès." },
      { jp: "人を傷つけることなしに、真実を伝えたい。", fr: "Je veux dire la vérité sans blesser personne." },
    ],
    qs: [
      { t: "fill", q: "誰の助けも借りる＿＿＿、やり遂げた。", fr: "Sans l'aide de personne, il a mené à bien la tâche.",
        o: ["ことなしに", "ことにして", "ばかりに", "どころか"], a: 0,
        e: "〜ことなしに = sans faire (借りることなしに), registre soutenu." },
      { t: "nuance", q: "〜ことなしに vs 〜ことなく : nuance ?",
        o: ["sens très proche ; ことなしに est souvent suivi d'une impossibilité/condition", "opposés", "ことなく = impossibilité", "ことなしに = familier"], a: 0,
        e: "Quasi-synonymes soutenus de « sans (faire) »." },
    ],
  },

  {
    id: "g165", g: "〜とあって", m: "étant donné (situation spéciale)", f: "V-plain／A／N + とあって",
    c: "condition", lv: 3, rel: ["g035"],
    note: "Une situation particulière justifie naturellement une conséquence (registre écrit, souvent journalistique).",
    ex: [
      { jp: "連休とあって、観光地は混雑している。", fr: "Étant donné le pont, les sites touristiques sont bondés." },
      { jp: "有名歌手が来るとあって、会場は満員だ。", fr: "Comme un chanteur célèbre vient, la salle est comble." },
    ],
    qs: [
      { t: "fill", q: "優勝がかかった試合＿＿＿、観客が殺到した。", fr: "S'agissant d'un match décisif pour le titre, les spectateurs ont afflué.",
        o: ["とあって", "ところで", "といっても", "ながら"], a: 0,
        e: "〜とあって = situation spéciale → conséquence naturelle (試合とあって)." },
      { t: "meaning", q: "「初公開とあって、行列ができた」— sens ?",
        o: ["comme c'était la première présentation, une file s'est formée", "bien que ce soit la première fois", "à propos de la première fois", "sans première fois"], a: 0,
        e: "〜とあって = « vu que / étant donné que »." },
    ],
  },

  {
    id: "g166", g: "〜とあれば", m: "si c'est pour, si tel est le cas", f: "V-plain／A／N + とあれば",
    c: "condition", lv: 3, rel: ["g165"],
    note: "Si une condition spéciale est remplie, on est prêt à faire quelque chose (souvent un sacrifice).",
    ex: [
      { jp: "子供のためとあれば、何でもする。", fr: "Si c'est pour mes enfants, je ferais n'importe quoi." },
      { jp: "必要とあれば、すぐ行きます。", fr: "Si c'est nécessaire, j'y vais tout de suite." },
    ],
    qs: [
      { t: "fill", q: "君の頼み＿＿＿、断れない。", fr: "Si c'est toi qui le demandes, je ne peux pas refuser.",
        o: ["とあれば", "とあって", "どころか", "ながら"], a: 0,
        e: "〜とあれば = « si c'est pour / si tel est le cas » (頼みとあれば)." },
      { t: "nuance", q: "〜とあれば vs 〜とあって : différence ?",
        o: ["とあれば = hypothèse (« si c'est le cas ») ; とあって = fait établi (« étant donné que »)", "identiques", "とあって = hypothèse", "とあれば = fait établi"], a: 0,
        e: "あれば (hypothétique) ≠ あって (factuel)." },
    ],
  },

  {
    id: "g167", g: "〜たりとも", m: "pas même un(e) seul(e)", f: "一＋compteur + たりとも（＋négation）",
    c: "express", lv: 3, rel: ["g067"],
    note: "Registre soutenu : nie l'existence ne serait-ce que d'une seule unité (一日たりとも = pas même un jour).",
    ex: [
      { jp: "一日たりとも忘れたことはない。", fr: "Pas un seul jour je ne l'ai oublié." },
      { jp: "一円たりとも無駄にできない。", fr: "On ne peut gaspiller le moindre yen." },
    ],
    qs: [
      { t: "fill", q: "一瞬＿＿＿油断はできない。", fr: "On ne peut se relâcher ne serait-ce qu'un instant.",
        o: ["たりとも", "ばかり", "どころか", "なり"], a: 0,
        e: "一＋compteur + たりとも + négation = pas même un(e) seul(e) (一瞬たりとも)." },
      { t: "meaning", q: "「一人たりとも逃さない」— sens ?",
        o: ["ne laisser échapper pas même une seule personne", "laisser tout le monde partir", "à propos d'une personne", "une personne suffit"], a: 0,
        e: "〜たりとも = emphase « pas même un(e) seul(e) »." },
    ],
  },

  {
    id: "g168", g: "〜であれ／〜であろうと", m: "quel que soit, même si c'est", f: "（疑問詞＋）N + であれ",
    c: "contrast", lv: 3, rel: ["g136"],
    note: "Concession formelle : « quel que soit X / même si c'est X ». Souvent avec un mot interrogatif.",
    ex: [
      { jp: "どんな理由であれ、暴力は許されない。", fr: "Quelle qu'en soit la raison, la violence est inacceptable." },
      { jp: "たとえ子供であれ、責任はある。", fr: "Même s'il s'agit d'un enfant, il y a une responsabilité." },
    ],
    qs: [
      { t: "fill", q: "結果がどう＿＿＿、全力を尽くす。", fr: "Quel que soit le résultat, je donne tout.",
        o: ["であれ", "として", "について", "ながら"], a: 0,
        e: "疑問詞 + であれ = « quel que soit » (どうであれ)." },
      { t: "meaning", q: "「誰であれ、ルールは守るべきだ」— sens ?",
        o: ["qui que ce soit, on doit respecter les règles", "personne ne respecte les règles", "à propos des règles", "grâce aux règles"], a: 0,
        e: "〜であれ = concession « quel que soit »." },
    ],
  },

  {
    id: "g169", g: "〜てでも", m: "quitte à, même au prix de", f: "V-て + でも",
    c: "condition", lv: 3, rel: ["g040"],
    note: "On est prêt à employer un moyen extrême pour atteindre un but.",
    ex: [
      { jp: "借金してでも、留学したい。", fr: "Quitte à m'endetter, je veux partir étudier à l'étranger." },
      { jp: "徹夜してでも、終わらせる。", fr: "Même en passant une nuit blanche, je finirai." },
    ],
    qs: [
      { t: "fill", q: "どんな手段を使っ＿＿＿、彼を助ける。", fr: "Quel que soit le moyen, je l'aiderai.",
        o: ["てでも", "たので", "たから", "ながら"], a: 0,
        e: "〜てでも = quitte à (moyen extrême) : 使ってでも." },
      { t: "meaning", q: "「無理してでもやり遂げる」— sens ?",
        o: ["mener à bien quitte à se forcer", "abandonner sans forcer", "à cause de l'effort", "sans aucun effort"], a: 0,
        e: "〜てでも = « même au prix de »." },
    ],
  },

  {
    id: "g170", g: "〜限り(は)", m: "tant que, aussi longtemps que / dans la mesure de", f: "V-dict／V-ている／A／N＋である + 限り(は)",
    c: "condition", lv: 2, rel: ["g171"],
    note: "(1) « tant que » (condition qui perdure) ; (2) « dans la mesure où je sais » (知る限り).",
    ex: [
      { jp: "体が健康な限り、働き続けたい。", fr: "Tant que je suis en bonne santé, je veux continuer à travailler." },
      { jp: "私が知る限り、彼は正直だ。", fr: "Pour autant que je sache, il est honnête." },
    ],
    qs: [
      { t: "fill", q: "あきらめない＿＿＿、可能性はある。", fr: "Tant qu'on n'abandonne pas, il y a une possibilité.",
        o: ["限り", "あげく", "ばかり", "うえで"], a: 0,
        e: "〜限り = tant que (あきらめない限り)." },
      { t: "meaning", q: "「見渡す限り、海だ」— sens ?",
        o: ["à perte de vue, c'est la mer", "on ne voit pas la mer", "à propos de la mer", "grâce à la mer"], a: 0,
        e: "〜限り = « dans toute l'étendue de » (見渡す限り)." },
    ],
  },

  {
    id: "g171", g: "〜限りだ", m: "on ne peut plus…, au plus haut point (sentiment)", f: "A／N＋の + 限りだ",
    c: "modality", lv: 3, rel: ["g170"],
    note: "Exprime un sentiment poussé à son comble (うれしい限りだ = on ne peut plus heureux).",
    ex: [
      { jp: "合格できて、うれしい限りだ。", fr: "Avoir réussi, je ne peux être plus heureux." },
      { jp: "一人で過ごす正月は、寂しい限りだ。", fr: "Passer le Nouvel An seul, c'est on ne peut plus triste." },
    ],
    qs: [
      { t: "fill", q: "君に会えて、心強い＿＿＿。", fr: "Te rencontrer, c'est on ne peut plus rassurant.",
        o: ["限りだ", "ものだ", "ことだ", "ばかりだ"], a: 0,
        e: "A + 限りだ = sentiment à son comble (心強い限りだ)." },
      { t: "nuance", q: "〜限りだ s'emploie surtout avec :",
        o: ["des adjectifs de sentiment (うれしい、寂しい…)", "des verbes d'action", "des nombres", "des interdictions"], a: 0,
        e: "限りだ exprime un sentiment porté à son maximum." },
    ],
  },

  {
    id: "g172", g: "〜とは限らない", m: "ne… pas forcément, pas nécessairement", f: "V-plain／A／N + とは限らない",
    c: "modality", lv: 2, rel: ["g051"],
    note: "Nie une généralisation : « ce n'est pas toujours le cas que… ». Souvent avec 必ずしも.",
    ex: [
      { jp: "高い物が必ずしもいいとは限らない。", fr: "Ce qui est cher n'est pas forcément bon." },
      { jp: "努力すれば成功するとは限らない。", fr: "Faire des efforts ne garantit pas le succès." },
    ],
    qs: [
      { t: "fill", q: "勉強した人が必ず合格する＿＿＿。", fr: "Ceux qui étudient ne réussissent pas nécessairement.",
        o: ["とは限らない", "に違いない", "に決まっている", "はずだ"], a: 0,
        e: "〜とは限らない = pas forcément (合格するとは限らない)." },
      { t: "meaning", q: "「年上が正しいとは限らない」— sens ?",
        o: ["les aînés n'ont pas forcément raison", "les aînés ont toujours raison", "les aînés ont tort", "à propos des aînés"], a: 0,
        e: "〜とは限らない = exception possible à une règle générale." },
    ],
  },

  {
    id: "g173", g: "〜に限らず", m: "pas seulement, sans se limiter à", f: "N + に限らず",
    c: "particle", lv: 2, rel: ["g074", "g172"],
    note: "Ce qui suit s'applique au-delà du seul cas cité : « non seulement X, mais aussi… ».",
    ex: [
      { jp: "子供に限らず、大人も楽しめる。", fr: "Pas seulement les enfants, les adultes aussi peuvent s'amuser." },
      { jp: "日本に限らず、世界中で問題だ。", fr: "Pas seulement au Japon, c'est un problème dans le monde entier." },
    ],
    qs: [
      { t: "fill", q: "週末＿＿＿、平日も営業している。", fr: "Pas seulement le week-end, nous sommes ouverts en semaine aussi.",
        o: ["に限らず", "に限り", "に応じて", "に反して"], a: 0,
        e: "〜に限らず = pas seulement (週末に限らず)." },
      { t: "nuance", q: "〜に限らず vs 〜はもちろん : nuance ?",
        o: ["sens proche (élargissement) ; に限らず = « sans se limiter à X »", "opposés", "に限らず = restriction", "はもちろん = exclusion"], a: 0,
        e: "に限らず élargit au-delà du cas mentionné." },
    ],
  },

  {
    id: "g174", g: "〜に限る", m: "rien de tel que, le mieux c'est", f: "V-dict／V-ない／N + に限る",
    c: "modality", lv: 2, rel: ["g101"],
    note: "Exprime une préférence forte : « il n'y a rien de mieux que X ».",
    ex: [
      { jp: "疲れたときは寝るに限る。", fr: "Quand on est fatigué, rien de tel que dormir." },
      { jp: "夏はやっぱりビールに限る。", fr: "L'été, rien ne vaut une bière." },
    ],
    qs: [
      { t: "fill", q: "風邪のときは、温かくして休む＿＿＿。", fr: "Quand on est enrhumé, rien de tel que se couvrir et se reposer.",
        o: ["に限る", "に限らず", "に反する", "に過ぎる"], a: 0,
        e: "〜に限る = rien de tel que (休むに限る)." },
      { t: "meaning", q: "「安全第一に限る」— nuance ?",
        o: ["le mieux, c'est de privilégier la sécurité (préférence forte)", "la sécurité est secondaire", "à propos de la sécurité", "sans sécurité"], a: 0,
        e: "〜に限る = « il n'y a rien de mieux que »." },
    ],
  },

  {
    id: "g175", g: "〜ことか", m: "combien… ! (exclamation)", f: "（疑問詞＋）V-plain／A + ことか",
    c: "modality", lv: 3, rel: ["g103"],
    note: "Exclamation emphatique sur un degré élevé (どんなに〜ことか = combien… !).",
    ex: [
      { jp: "この日をどんなに待っていたことか。", fr: "Combien j'ai attendu ce jour !" },
      { jp: "何度注意したことか。", fr: "Combien de fois l'ai-je prévenu !" },
    ],
    qs: [
      { t: "fill", q: "君が来てくれて、どんなにうれしい＿＿＿。", fr: "Que tu sois venu, combien cela me réjouit !",
        o: ["ことか", "ものか", "ところか", "ばかりか"], a: 0,
        e: "どんなに〜ことか = exclamation de degré (うれしいことか)." },
      { t: "meaning", q: "「何度泣いたことか」— sens ?",
        o: ["combien de fois j'ai pleuré ! (beaucoup)", "je n'ai jamais pleuré", "pourquoi pleurer ?", "je pleure une fois"], a: 0,
        e: "〜ことか = emphase exclamative sur l'intensité/la fréquence." },
    ],
  },

  {
    id: "g176", g: "〜あまり(に)", m: "tellement… que (excès → conséquence)", f: "V-plain／A-stem＋さ／N＋の + あまり(に)",
    c: "condition", lv: 3, rel: ["g059"],
    note: "Un excès d'émotion/d'état entraîne une conséquence (souvent imprévue).",
    ex: [
      { jp: "緊張のあまり、声が震えた。", fr: "À force de nervosité, ma voix tremblait." },
      { jp: "驚きのあまり、言葉を失った。", fr: "Sous le coup de la surprise, je suis resté sans voix." },
    ],
    qs: [
      { t: "fill", q: "うれしさの＿＿＿、跳び上がった。", fr: "Tellement heureux que j'ai bondi.",
        o: ["あまり", "ばかり", "うえで", "ところ"], a: 0,
        e: "〜あまり = excès d'un sentiment → conséquence (うれしさのあまり)." },
      { t: "meaning", q: "「働きすぎたあまり、倒れた」— sens ?",
        o: ["à force de trop travailler, il s'est effondré", "il n'a pas travaillé", "il a travaillé un peu", "à propos du travail"], a: 0,
        e: "〜あまり = « tellement… que » (issue souvent négative)." },
    ],
  },

  {
    id: "g177", g: "〜だらけ", m: "couvert de, plein de (en désordre/négatif)", f: "N + だらけ",
    c: "express", lv: 2, rel: ["g178"],
    note: "Indique une abondance excessive et désagréable (泥だらけ, 間違いだらけ).",
    ex: [
      { jp: "子供は泥だらけになって遊んだ。", fr: "L'enfant a joué jusqu'à être couvert de boue." },
      { jp: "この作文は間違いだらけだ。", fr: "Cette rédaction est pleine de fautes." },
    ],
    qs: [
      { t: "fill", q: "部屋がごみ＿＿＿で、足の踏み場もない。", fr: "La pièce est jonchée de déchets, on ne sait où mettre les pieds.",
        o: ["だらけ", "向き", "ぎみ", "がち"], a: 0,
        e: "〜だらけ = couvert de (négatif) : ごみだらけ." },
      { t: "nuance", q: "〜だらけ vs 〜まみれ : nuance ?",
        o: ["だらけ = plein de (objets, fautes, partout) ; まみれ = recouvert d'une substance (sueur, sang, boue)", "identiques", "まみれ = fautes", "だらけ = substance liquide"], a: 0,
        e: "だらけ (abondance générale) ≠ まみれ (enduit d'une matière)." },
    ],
  },

  {
    id: "g178", g: "〜まみれ", m: "maculé de, couvert de (substance)", f: "N（substance）+ まみれ",
    c: "express", lv: 3, rel: ["g177"],
    note: "Le corps/un objet est recouvert d'une matière collante ou salissante (汗まみれ, 血まみれ).",
    ex: [
      { jp: "汗まみれになって練習した。", fr: "Il s'est entraîné jusqu'à être trempé de sueur." },
      { jp: "泥まみれの靴を洗った。", fr: "J'ai lavé les chaussures maculées de boue." },
    ],
    qs: [
      { t: "fill", q: "作業の後、彼は油＿＿＿だった。", fr: "Après le travail, il était couvert d'huile.",
        o: ["まみれ", "だらけ", "ぎみ", "向け"], a: 0,
        e: "〜まみれ = recouvert d'une substance (油まみれ)." },
      { t: "meaning", q: "「ほこりまみれの本」— sens ?",
        o: ["un livre couvert de poussière", "un livre tout neuf", "un livre sans poussière", "à propos de la poussière"], a: 0,
        e: "〜まみれ = enduit/maculé d'une matière." },
    ],
  },

  {
    id: "g179", g: "〜がてら", m: "à l'occasion de, tout en (faisant d'une pierre deux coups)", f: "V-ます stem／N + がてら",
    c: "time", lv: 3, rel: ["g020"],
    note: "Profiter d'une action pour en faire une autre par la même occasion.",
    ex: [
      { jp: "散歩がてら、買い物をした。", fr: "J'ai fait des courses tout en me promenant." },
      { jp: "運動がてら、駅まで歩いた。", fr: "J'ai marché jusqu'à la gare, histoire de faire de l'exercice." },
    ],
    qs: [
      { t: "fill", q: "見物＿＿＿、友人を訪ねた。", fr: "J'ai rendu visite à un ami, en profitant pour faire du tourisme.",
        o: ["がてら", "ながら", "とともに", "つつ"], a: 0,
        e: "〜がてら = profiter d'une occasion pour (見物がてら)." },
      { t: "nuance", q: "〜がてら vs 〜ながら : nuance ?",
        o: ["がてら = profiter d'une sortie pour faire une 2e chose (but secondaire) ; ながら = deux actions strictement simultanées", "identiques", "ながら = occasion", "がてら = simultanéité stricte"], a: 0,
        e: "がてら = « par la même occasion » ; ながら = « en même temps »." },
    ],
  },

  {
    id: "g180", g: "〜そばから", m: "à peine… que déjà (de nouveau)", f: "V-dict／V-た + そばから",
    c: "time", lv: 3, rel: ["g029"],
    note: "Une action est aussitôt annulée/répétée juste après avoir été faite (souvent agacement).",
    ex: [
      { jp: "片づけるそばから、子供が散らかす。", fr: "À peine ai-je rangé que les enfants remettent le désordre." },
      { jp: "習うそばから忘れてしまう。", fr: "À peine appris, aussitôt oublié." },
    ],
    qs: [
      { t: "fill", q: "注意する＿＿＿、また同じ間違いをする。", fr: "À peine l'ai-je repris qu'il refait la même erreur.",
        o: ["そばから", "とたんに", "ながら", "あげく"], a: 0,
        e: "〜そばから = aussitôt fait, aussitôt re-défait (注意するそばから)." },
      { t: "nuance", q: "〜そばから vs 〜たとたん : nuance ?",
        o: ["そばから = répétition agaçante immédiate ; たとたん = un seul événement survenant juste après", "identiques", "たとたん = répétition", "そばから = unique"], a: 0,
        e: "そばから insiste sur la répétition immédiate (agacement)." },
    ],
  },

  {
    id: "g181", g: "〜ことだし", m: "étant donné aussi que (raison parmi d'autres)", f: "V-plain／A／N＋な + ことだし",
    c: "condition", lv: 3, rel: ["g035"],
    note: "Donne une raison (parmi d'autres possibles) pour justifier une décision, ton souple.",
    ex: [
      { jp: "天気もいいことだし、散歩に行こう。", fr: "Vu qu'il fait beau (entre autres), allons nous promener." },
      { jp: "もう遅いことだし、そろそろ帰ろう。", fr: "Comme il est tard aussi, rentrons." },
    ],
    qs: [
      { t: "fill", q: "みんな集まった＿＿＿、始めましょう。", fr: "Puisque tout le monde est là (notamment), commençons.",
        o: ["ことだし", "ことか", "ものの", "どころか"], a: 0,
        e: "〜ことだし = raison souple parmi d'autres (集まったことだし)." },
      { t: "nuance", q: "Nuance de 〜ことだし par rapport à 〜から ?",
        o: ["présente une raison parmi plusieurs, de façon souple/suggestive", "raison unique et catégorique", "exprime un but", "exprime une concession"], a: 0,
        e: "ことだし = « vu que… (entre autres) », ton léger." },
    ],
  },

  {
    id: "g182", g: "〜や否や／〜やいなや", m: "dès que, à peine… que (littéraire)", f: "V-dict + や否や",
    c: "time", lv: 3, rel: ["g029", "g087"],
    note: "Registre littéraire : la seconde action suit immédiatement la première.",
    ex: [
      { jp: "ベルが鳴るや否や、生徒たちは教室を出た。", fr: "À peine la cloche a-t-elle sonné que les élèves ont quitté la classe." },
      { jp: "彼は座るや否や、話し始めた。", fr: "À peine assis, il s'est mis à parler." },
    ],
    qs: [
      { t: "fill", q: "ドアを開ける＿＿＿、犬が飛び出した。", fr: "À peine la porte ouverte, le chien a bondi dehors.",
        o: ["や否や", "ことから", "うちに", "ながら"], a: 0,
        e: "〜や否や = dès que (littéraire) : 開けるや否や." },
      { t: "nuance", q: "〜や否や est, en plus littéraire, proche de :",
        o: ["〜とたんに／〜なり (immédiateté)", "〜ながら (simultanéité longue)", "〜ために (but)", "〜ので (cause)"], a: 0,
        e: "や否や = enchaînement immédiat, registre soutenu." },
    ],
  },

];

if (typeof window !== "undefined") { window.N3_GRAMMAR = N3_GRAMMAR; window.CATEGORIES = CATEGORIES; window.TIERS = TIERS; }
