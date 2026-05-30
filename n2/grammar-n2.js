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
  particle:  { label: "Particules & locutions", icon: "の", color: "#5b9cff" },
  contrast:  { label: "Concession & contraste", icon: "対", color: "#ff8a5b" },
  time:      { label: "Temps & séquence",        icon: "時", color: "#43c97f" },
  condition: { label: "Condition & cause",       icon: "因", color: "#c98cff" },
  modality:  { label: "Modalité & jugement",     icon: "判", color: "#ffd24d" },
  express:   { label: "Expressions & emphase",   icon: "強", color: "#ff5c8a" },
};

const TIERS = {
  1: "Essentiel",
  2: "Fréquent",
  3: "Avancé",
};

const N2_GRAMMAR = [

  /* ===================== PARTICULES & LOCUTIONS ===================== */

  {
    id: "g001", g: "〜について", m: "à propos de, concernant", f: "Nom + について（は／も／の）",
    c: "particle", lv: 1, rel: ["g010", "g002"],
    note: "Introduit le thème d'une parole, d'une pensée ou d'une recherche. Neutre et très courant. À distinguer de 〜に対して (attitude dirigée vers) et 〜に関して (plus formel).",
    ex: [
      { jp: "日本の歴史について、レポートを書いた。", fr: "J'ai écrit un rapport sur l'histoire du Japon." },
      { jp: "その事件については、まだ分からないことが多い。", fr: "Concernant cette affaire, beaucoup de choses restent obscures." },
    ],
    qs: [
      { t: "fill", q: "先生は試験の範囲＿＿＿詳しく説明してくれた。", fr: "Le professeur a expliqué en détail à propos de l'étendue de l'examen.",
        o: ["について", "に対して", "において", "によって"], a: 0,
        e: "Le thème de l'explication est « l'étendue de l'examen ». 〜について marque le sujet/thème dont on parle." },
      { t: "meaning", q: "「地球温暖化について、様々な意見が出た」— sens de について ?",
        o: ["à propos de, concernant", "vers, contre (attitude)", "à cause de, par le moyen de", "au moment de"], a: 0,
        e: "〜について = le thème abordé. Ici : « divers avis ont été émis sur le réchauffement »." },
      { t: "nuance", q: "「住民は建設計画＿＿＿強く反対した」— quelle particule pour exprimer une opposition dirigée CONTRE le projet ?",
        o: ["に対して", "について", "にわたって", "において"], a: 0,
        e: "Quand une émotion/action (反対 = s'opposer) est DIRIGÉE vers une cible, on emploie 〜に対して. 〜について se contenterait de poser le thème, sans la nuance d'opposition active." },
    ],
  },

  {
    id: "g002", g: "〜に対して", m: "envers, à l'égard de ; face à ; contrairement à", f: "Nom + に対して／に対する＋Nom",
    c: "particle", lv: 1, rel: ["g001", "g020"],
    note: "Deux emplois : (1) une attitude/action dirigée vers une cible (envers qqn) ; (2) un contraste entre deux éléments (X に対して Y = X, alors que Y).",
    ex: [
      { jp: "目上の人に対して、そんな話し方をしてはいけない。", fr: "On ne doit pas parler ainsi à l'égard d'un supérieur." },
      { jp: "兄が社交的なのに対して、弟は内気だ。", fr: "Contrairement à l'aîné qui est sociable, le cadet est timide." },
    ],
    qs: [
      { t: "fill", q: "彼の失礼な発言＿＿＿、みんなが腹を立てた。", fr: "Tout le monde s'est fâché face à ses propos impolis.",
        o: ["に対して", "について", "にとって", "によって"], a: 0,
        e: "La colère (腹を立てる) est dirigée VERS ses propos : on emploie 〜に対して (attitude/réaction envers une cible)." },
      { t: "fill", q: "都会の生活は便利な＿＿＿、家賃が高いという欠点がある。", fr: "La vie urbaine est pratique, en revanche le loyer est élevé.",
        o: ["のに対して", "について", "に応じて", "に際して"], a: 0,
        e: "Emploi contrastif : « pratique » ↔ « loyer élevé ». 〜のに対して oppose deux propositions. (Après un verbe/adjectif on garde の.)" },
      { t: "meaning", q: "「収入が増えたのに対して、支出も増えた」— sens de のに対して ?",
        o: ["tandis que, par contraste avec", "à propos de", "grâce à", "dès que"], a: 0,
        e: "Ici 〜に対して met en contraste deux faits parallèles (revenus ↔ dépenses)." },
    ],
  },

  {
    id: "g003", g: "〜によって／による", m: "par (agent) ; selon ; à cause de ; au moyen de", f: "Nom + によって／による＋Nom",
    c: "particle", lv: 1, rel: ["g006", "g007"],
    note: "Polyvalent : (1) agent du passif ; (2) variation « selon » (人によって) ; (3) cause/raison ; (4) moyen. 〜によると = « selon (une source) » pour le ouï-dire.",
    ex: [
      { jp: "この小説は夏目漱石によって書かれた。", fr: "Ce roman a été écrit par Natsume Sōseki." },
      { jp: "国によって、文化や習慣が異なる。", fr: "Selon les pays, la culture et les coutumes diffèrent." },
    ],
    qs: [
      { t: "fill", q: "電車の遅れ＿＿＿、会議に間に合わなかった。", fr: "À cause du retard du train, je ne suis pas arrivé à temps à la réunion.",
        o: ["によって", "にとって", "について", "に際して"], a: 0,
        e: "Cause/raison : le retard est la cause. 〜によって peut exprimer la cause d'un événement." },
      { t: "fill", q: "人＿＿＿、考え方は様々だ。", fr: "Selon les personnes, les façons de penser varient.",
        o: ["によって", "について", "に対して", "において"], a: 0,
        e: "Variation « selon » : 人によって = « selon les gens ». Indique que le résultat varie d'un cas à l'autre." },
      { t: "nuance", q: "Pour rapporter une information de seconde main (« d'après la météo… »), on dit 天気予報＿＿＿…",
        o: ["によると", "によって", "について", "にとって"], a: 0,
        e: "〜によると + 〜そうだ／らしい sert au ouï-dire : « d'après… ». 〜によって n'a pas ce sens de source d'information." },
    ],
  },

  {
    id: "g004", g: "〜において／における", m: "à, dans, lors de (lieu, époque, domaine — formel)", f: "Nom + において／における＋Nom",
    c: "particle", lv: 2, rel: ["g001"],
    note: "Équivalent formel et écrit de で pour situer un lieu, une époque, une situation ou un domaine. Fréquent à l'écrit et dans les discours.",
    ex: [
      { jp: "会議は本社において行われる。", fr: "La réunion se tiendra au siège social." },
      { jp: "現代社会における情報の役割は大きい。", fr: "Le rôle de l'information dans la société moderne est considérable." },
    ],
    qs: [
      { t: "fill", q: "オリンピックは東京＿＿＿開催された。", fr: "Les Jeux olympiques se sont tenus à Tokyo.",
        o: ["において", "にとって", "について", "によって"], a: 0,
        e: "〜において situe le lieu d'un événement, dans un registre formel (≈ で)." },
      { t: "meaning", q: "「研究の分野において優れた成果を上げた」— sens de において ?",
        o: ["dans (le domaine de)", "à propos de", "à cause de", "pour (qqn)"], a: 0,
        e: "Ici において désigne le domaine/cadre : « dans le domaine de la recherche »." },
      { t: "usage", q: "Quelle phrase est la plus naturelle (registre formel d'un communiqué) ?",
        o: ["式典は大ホールにおいて執り行われます。", "式典は大ホールについて執り行われます。", "式典は大ホールにとって執り行われます。", "式典は大ホールに対して執り行われます。"], a: 0,
        e: "Pour annoncer le lieu d'une cérémonie dans un style soutenu, 〜において est correct." },
    ],
  },

  {
    id: "g005", g: "〜として（は／も）", m: "en tant que, à titre de", f: "Nom + として",
    c: "particle", lv: 1, rel: ["g006"],
    note: "Indique un rôle, une qualité, un statut ou une catégorie. 〜としては = « pour ce qui est de (ce statut) » ; 〜としても = « même en tant que ».",
    ex: [
      { jp: "彼は医者として尊敬されている。", fr: "Il est respecté en tant que médecin." },
      { jp: "この量は、子供向けとしては多すぎる。", fr: "Pour une portion destinée aux enfants, c'est trop." },
    ],
    qs: [
      { t: "fill", q: "私は留学生＿＿＿日本に来ました。", fr: "Je suis venu au Japon en tant qu'étudiant étranger.",
        o: ["として", "について", "によって", "に対して"], a: 0,
        e: "〜として exprime le statut/rôle : « en tant qu'étudiant étranger »." },
      { t: "meaning", q: "「専門家として意見を述べた」— sens de として ?",
        o: ["en tant que, à titre de", "à propos de", "selon", "malgré"], a: 0,
        e: "〜として = dans le rôle/la qualité de : « il a donné son avis en tant qu'expert »." },
      { t: "fill", q: "新人＿＿＿、彼の仕事ぶりは立派だ。", fr: "Pour un débutant, sa façon de travailler est remarquable.",
        o: ["としては", "について", "に際して", "にわたって"], a: 0,
        e: "〜としては = « du point de vue de ce statut » : compte tenu du fait qu'il est débutant." },
    ],
  },

  {
    id: "g006", g: "〜にとって（は／も）", m: "pour, du point de vue de", f: "Nom + にとって",
    c: "particle", lv: 1, rel: ["g005", "g003"],
    note: "Adopte le point de vue d'une personne/groupe pour porter un jugement (important, difficile, précieux…). Ne s'emploie pas pour un objectif (≠ ために).",
    ex: [
      { jp: "私にとって、家族が一番大切だ。", fr: "Pour moi, la famille est ce qu'il y a de plus important." },
      { jp: "この経験は学生にとって貴重だった。", fr: "Cette expérience a été précieuse pour les étudiants." },
    ],
    qs: [
      { t: "fill", q: "外国人＿＿＿、日本の敬語は難しい。", fr: "Pour les étrangers, le langage honorifique japonais est difficile.",
        o: ["にとって", "について", "によって", "に対して"], a: 0,
        e: "Jugement adopté du point de vue des étrangers : 〜にとって（は）." },
      { t: "nuance", q: "「この辞書は私＿＿＿宝物だ」— quelle forme pour « pour moi, c'est un trésor » ?",
        o: ["にとって", "に対して", "として", "について"], a: 0,
        e: "Évaluation subjective depuis un point de vue → 〜にとって. 〜に対して exprimerait une action dirigée, ce qui ne convient pas ici." },
      { t: "usage", q: "Laquelle est correcte pour « j'étudie POUR réussir l'examen » (objectif) ?",
        o: ["合格するために勉強する。", "合格するにとって勉強する。", "合格するについて勉強する。", "合格するとして勉強する。"], a: 0,
        e: "Un OBJECTIF se dit avec 〜ために, pas 〜にとって (qui sert au point de vue, pas au but)." },
    ],
  },

  {
    id: "g007", g: "〜に基づいて／に基づく", m: "sur la base de, en se fondant sur", f: "Nom + に基づいて／に基づく＋Nom",
    c: "particle", lv: 2, rel: ["g008", "g003"],
    note: "S'appuyer sur une base servant de fondement, de norme ou de référence (loi, données, expérience, principe). Plus rigoureux que をもとに.",
    ex: [
      { jp: "この映画は実話に基づいて作られた。", fr: "Ce film a été réalisé sur la base d'une histoire vraie." },
      { jp: "規則に基づいて処分が決定された。", fr: "La sanction a été décidée conformément au règlement." },
    ],
    qs: [
      { t: "fill", q: "調査の結果＿＿＿、新しい方針が立てられた。", fr: "Sur la base des résultats de l'enquête, une nouvelle orientation a été définie.",
        o: ["に基づいて", "にとって", "について", "に反して"], a: 0,
        e: "On se fonde sur les résultats (fondement/référence) : 〜に基づいて." },
      { t: "meaning", q: "「事実に基づく報道」— sens de に基づく ?",
        o: ["qui se fonde sur (les faits)", "contraire à", "à propos de", "malgré"], a: 0,
        e: "〜に基づく + Nom = « (reportage) fondé sur les faits »." },
      { t: "nuance", q: "Pour « décider CONFORMÉMENT au règlement » (norme stricte), on préfère :",
        o: ["規則に基づいて", "規則をもとに", "規則について", "規則にとって"], a: 0,
        e: "Quand la base est une NORME contraignante (loi, règlement), 〜に基づいて est le plus juste. をもとに suggère plutôt un matériau de départ qu'on réélabore." },
    ],
  },

  {
    id: "g008", g: "〜をもとに（して）", m: "à partir de, en prenant pour base", f: "Nom + をもとに（して）／をもとにした＋Nom",
    c: "particle", lv: 2, rel: ["g007"],
    note: "Prendre un matériau/une source comme point de départ pour créer ou élaborer autre chose (récit, dessin, hypothèse). L'accent est sur la matière première.",
    ex: [
      { jp: "アンケートの結果をもとに、商品を改良した。", fr: "Nous avons amélioré le produit à partir des résultats du sondage." },
      { jp: "この物語は古い伝説をもとにしている。", fr: "Cette histoire est basée sur une vieille légende." },
    ],
    qs: [
      { t: "fill", q: "集めた資料＿＿＿、論文を書いた。", fr: "J'ai écrit l'article à partir des documents rassemblés.",
        o: ["をもとに", "に対して", "について", "に際して"], a: 0,
        e: "Les documents sont le matériau de départ de la rédaction : 〜をもとに." },
      { t: "nuance", q: "« Un film TIRÉ d'un roman » (matériau adapté en œuvre) :",
        o: ["小説をもとに作られた映画", "小説に基づいて守られた映画", "小説について作られた映画", "小説に対して作られた映画"], a: 0,
        e: "Pour une œuvre ÉLABORÉE à partir d'un matériau créatif, をもとに est naturel. に基づいて insisterait sur la conformité à une norme." },
      { t: "meaning", q: "「経験をもとにアドバイスする」— sens ?",
        o: ["conseiller en s'appuyant sur l'expérience", "conseiller contre l'expérience", "conseiller à propos de l'expérience", "conseiller pour l'expérience"], a: 0,
        e: "〜をもとに = en prenant (l'expérience) comme base/point de départ." },
    ],
  },

  {
    id: "g009", g: "〜をはじめ（として）", m: "à commencer par, ainsi que (et bien d'autres)", f: "Nom + をはじめ（として）／をはじめとする＋Nom",
    c: "particle", lv: 2, rel: ["g010"],
    note: "Cite un exemple représentatif (le plus marquant) puis sous-entend une liste d'autres éléments du même type. « X en tête, ainsi que… ».",
    ex: [
      { jp: "東京をはじめ、日本の大都市は人口が多い。", fr: "À commencer par Tokyo, les grandes villes japonaises sont très peuplées." },
      { jp: "校長先生をはじめ、多くの先生が出席した。", fr: "À commencer par le directeur, de nombreux enseignants étaient présents." },
    ],
    qs: [
      { t: "fill", q: "この店では、寿司＿＿＿、様々な和食が楽しめる。", fr: "Dans ce restaurant, à commencer par les sushis, on déguste divers plats japonais.",
        o: ["をはじめ", "について", "に対して", "にとって"], a: 0,
        e: "On donne un exemple-phare (les sushis) représentatif d'un ensemble : 〜をはじめ." },
      { t: "meaning", q: "「社長をはじめ、社員全員が参加した」— sens ?",
        o: ["à commencer par le PDG (et tous les autres)", "sauf le PDG", "au lieu du PDG", "selon le PDG"], a: 0,
        e: "〜をはじめ cite l'élément représentatif puis englobe le reste : « le PDG en tête, tous les employés »." },
      { t: "order", q: "Reconstituez la phrase. Quel segment va à la place ★ ?",
        frame: "この地方は ＿＿ ＿★＿ ＿＿ 名産品が多い。",
        o: ["りんご", "を", "はじめ", "とする"], a: 2,
        e: "Ordre correct : りんご → を → はじめ → とする → 名産品。「りんごをはじめとする名産品」= « des produits réputés à commencer par les pommes ». À ★ : はじめ." },
    ],
  },

  {
    id: "g010", g: "〜に関して／に関する", m: "concernant, relatif à (formel)", f: "Nom + に関して／に関する＋Nom",
    c: "particle", lv: 2, rel: ["g001"],
    note: "Équivalent formel de 〜について. Très fréquent à l'écrit et dans les contextes administratifs. に関する précède un nom.",
    ex: [
      { jp: "事故に関して、詳しい調査が行われた。", fr: "Une enquête approfondie a été menée concernant l'accident." },
      { jp: "環境に関する法律が改正された。", fr: "La loi relative à l'environnement a été révisée." },
    ],
    qs: [
      { t: "fill", q: "個人情報＿＿＿問い合わせは、こちらの窓口へ。", fr: "Pour toute demande relative aux informations personnelles, adressez-vous à ce guichet.",
        o: ["に関する", "にとって", "に対する", "における"], a: 0,
        e: "〜に関する + Nom = « (demande) concernant les informations personnelles ». Registre formel." },
      { t: "nuance", q: "Dans un document officiel, « concernant ce dossier » s'écrit le plus naturellement :",
        o: ["本件に関して", "本件について", "本件にとって", "本件によって"], a: 0,
        e: "に関して et について sont proches ; dans un registre administratif soutenu, に関して est privilégié. (について reste correct mais plus neutre.)" },
      { t: "meaning", q: "「健康に関する情報」— sens de に関する ?",
        o: ["relatif à (la santé)", "contraire à", "grâce à", "pour"], a: 0,
        e: "〜に関する = qui a trait à, concernant." },
    ],
  },

  {
    id: "g011", g: "〜に応じて／に応じた", m: "selon, en fonction de, en réponse à", f: "Nom + に応じて／に応じた＋Nom",
    c: "particle", lv: 2, rel: ["g003", "g012"],
    note: "Quelque chose varie/s'adapte EN FONCTION d'un facteur variable (besoin, revenu, situation, demande). Idée d'adaptation souple.",
    ex: [
      { jp: "収入に応じて、税金の額が変わる。", fr: "Le montant de l'impôt change selon les revenus." },
      { jp: "お客様の希望に応じて、対応いたします。", fr: "Nous répondons en fonction des souhaits des clients." },
    ],
    qs: [
      { t: "fill", q: "季節や天候＿＿＿、メニューを変えている。", fr: "Nous changeons le menu en fonction de la saison et du temps.",
        o: ["に応じて", "について", "に対して", "にとって"], a: 0,
        e: "Le menu s'ADAPTE à un facteur variable (saison, météo) : 〜に応じて." },
      { t: "meaning", q: "「能力に応じた仕事を与える」— sens de に応じた ?",
        o: ["adapté à (la compétence)", "contre la compétence", "à propos de la compétence", "malgré la compétence"], a: 0,
        e: "〜に応じた + Nom = « (un travail) adapté aux compétences »." },
      { t: "nuance", q: "Comparé à 〜によって (« selon »), 〜に応じて insiste surtout sur :",
        o: ["l'adaptation souple à un facteur variable", "l'agent d'une action passive", "le lieu formel d'un événement", "le point de vue d'une personne"], a: 0,
        e: "〜に応じて met l'accent sur l'idée de RÉPONDRE/S'ADAPTER à un facteur (besoins, demande). によって est plus neutre (« cela varie selon »)." },
    ],
  },

  {
    id: "g012", g: "〜に際して／に際し", m: "à l'occasion de, lors de, au moment de (formel)", f: "Nom／Verbe-dico + に際して",
    c: "particle", lv: 2, rel: ["g013", "g004"],
    note: "Au moment d'un événement important/exceptionnel (départ, inscription, ouverture). Registre soutenu, souvent dans les discours et annonces.",
    ex: [
      { jp: "卒業に際して、一言お礼を申し上げます。", fr: "À l'occasion de la remise des diplômes, je tiens à dire un mot de remerciement." },
      { jp: "契約に際し、注意事項をご確認ください。", fr: "Lors de la signature du contrat, veuillez vérifier les points importants." },
    ],
    qs: [
      { t: "fill", q: "入学＿＿＿、校長先生が挨拶をした。", fr: "À l'occasion de l'entrée à l'école, le directeur a prononcé un discours.",
        o: ["に際して", "について", "にとって", "によって"], a: 0,
        e: "〜に際して = au moment d'un événement marquant (l'entrée à l'école), registre formel." },
      { t: "meaning", q: "「開会に際してご挨拶申し上げます」— sens de に際して ?",
        o: ["à l'occasion de (l'ouverture)", "à propos de", "à cause de", "contrairement à"], a: 0,
        e: "〜に際して = lors de / à l'occasion de (un événement solennel)." },
      { t: "nuance", q: "Pour une circonstance QUOTIDIENNE et banale, 〜に際して est :",
        o: ["inadapté (trop formel) ; on dirait 〜とき", "le seul choix correct", "obligatoire", "identique à 〜たとたん"], a: 0,
        e: "〜に際して est réservé aux occasions importantes/formelles. Pour du quotidien banal, on emploie 〜とき." },
    ],
  },

  {
    id: "g013", g: "〜に先立って／に先立ち", m: "préalablement à, avant (un événement)", f: "Nom／Verbe-dico + に先立って",
    c: "time", lv: 2, rel: ["g012"],
    note: "Faire qqch EN PRÉPARATION, avant un événement important à venir. Plus formel et marqué que 〜前に (idée de précéder en vue de).",
    ex: [
      { jp: "開店に先立って、関係者を招いた式が行われた。", fr: "Préalablement à l'ouverture, une cérémonie a réuni les parties concernées." },
      { jp: "出発に先立ち、注意事項を説明します。", fr: "Avant le départ, je vais expliquer les consignes." },
    ],
    qs: [
      { t: "fill", q: "試合＿＿＿、選手たちは入念に準備運動をした。", fr: "Avant le match, les joueurs se sont soigneusement échauffés.",
        o: ["に先立って", "について", "に応じて", "にとって"], a: 0,
        e: "Action menée EN AMONT d'un événement (le match) : 〜に先立って." },
      { t: "nuance", q: "〜に先立って se distingue de 〜前に surtout parce qu'il :",
        o: ["est formel et implique une préparation à un événement notable", "indique une cause", "exprime un contraste", "marque le point de vue"], a: 0,
        e: "〜前に est neutre (« avant »). 〜に先立って est soutenu et suggère qu'on agit EN VUE d'un événement important." },
      { t: "meaning", q: "「会議に先立ち、資料が配られた」— quand les documents ont-ils été distribués ?",
        o: ["avant la réunion (en préparation)", "pendant la réunion", "après la réunion", "à la place de la réunion"], a: 0,
        e: "〜に先立って = préalablement à : les documents ont été distribués AVANT la réunion." },
    ],
  },

  {
    id: "g014", g: "〜をめぐって／をめぐる", m: "autour de, au sujet de (débat, conflit)", f: "Nom + をめぐって／をめぐる＋Nom",
    c: "particle", lv: 2, rel: ["g001"],
    note: "Un sujet AUTOUR DUQUEL plusieurs personnes débattent, s'opposent ou s'agitent. Souvent avec 議論・対立・争い (débat, conflit, dispute).",
    ex: [
      { jp: "新しい税制をめぐって、激しい議論が続いている。", fr: "Un débat houleux se poursuit autour du nouveau système fiscal." },
      { jp: "遺産をめぐる争いが起きた。", fr: "Un conflit a éclaté au sujet de l'héritage." },
    ],
    qs: [
      { t: "fill", q: "原発の建設＿＿＿、住民の意見が対立している。", fr: "Au sujet de la construction de la centrale, les avis des habitants s'opposent.",
        o: ["をめぐって", "について", "にとって", "に応じて"], a: 0,
        e: "Un sujet de DISCORDE autour duquel les opinions s'affrontent : 〜をめぐって." },
      { t: "nuance", q: "On préfère 〜をめぐって à 〜について lorsque :",
        o: ["plusieurs partis débattent/s'opposent sur le sujet", "on étudie calmement un thème seul", "on indique un objectif", "on situe un lieu"], a: 0,
        e: "〜をめぐって implique une PLURALITÉ d'acteurs en débat/conflit autour du sujet. について est neutre et convient même à un thème étudié seul." },
      { t: "meaning", q: "「その発言をめぐって騒ぎになった」— sens ?",
        o: ["un tumulte a éclaté autour de ces propos", "ces propos ont disparu", "on a parlé pour ces propos", "ces propos ont changé"], a: 0,
        e: "〜をめぐって = autour de (un sujet qui suscite agitation/débat)." },
    ],
  },

  {
    id: "g015", g: "〜に伴って／に伴い", m: "à mesure que, parallèlement à, du fait de", f: "Nom／Verbe-dico + に伴って",
    c: "time", lv: 2, rel: ["g016", "g017"],
    note: "Un changement en entraîne un autre simultané : « à mesure que A change, B change aussi ». Souvent avec des évolutions de grande ampleur (société, technologie).",
    ex: [
      { jp: "人口の増加に伴って、住宅が不足してきた。", fr: "Avec l'augmentation de la population, le logement vient à manquer." },
      { jp: "技術の進歩に伴い、生活が便利になった。", fr: "Du fait du progrès technique, la vie est devenue plus pratique." },
    ],
    qs: [
      { t: "fill", q: "気温の上昇＿＿＿、海面も少しずつ高くなっている。", fr: "Parallèlement à la hausse des températures, le niveau de la mer monte peu à peu.",
        o: ["に伴って", "について", "にとって", "に際して"], a: 0,
        e: "Un changement (température) en entraîne un autre simultané (niveau de la mer) : 〜に伴って." },
      { t: "meaning", q: "「都市化に伴う問題」— sens de に伴う ?",
        o: ["les problèmes qui accompagnent (l'urbanisation)", "les problèmes contraires à l'urbanisation", "les problèmes au sujet de l'urbanisation", "les problèmes pour l'urbanisation"], a: 0,
        e: "〜に伴う + Nom = « (les problèmes) qui accompagnent l'urbanisation »." },
      { t: "nuance", q: "Différence principale entre 〜に伴って et 〜につれて :",
        o: ["伴って accepte aussi des changements ponctuels/de grande ampleur ; つれて exige une progression graduelle continue", "伴って exprime une cause directe unique", "つれて est plus formel", "ils ne sont jamais interchangeables"], a: 0,
        e: "〜につれて demande deux changements GRADUELS et continus liés. 〜に伴って est plus large : il accepte aussi des changements plus ponctuels ou de grande échelle." },
    ],
  },

  {
    id: "g016", g: "〜につれて／につれ", m: "à mesure que, au fur et à mesure", f: "Nom／Verbe-dico + につれて",
    c: "time", lv: 2, rel: ["g015", "g017"],
    note: "Deux changements GRADUELS et proportionnels : plus A progresse, plus B progresse. Les deux côtés doivent exprimer une évolution continue.",
    ex: [
      { jp: "年を取るにつれて、体力が衰えてきた。", fr: "À mesure que je vieillis, mes forces déclinent." },
      { jp: "山を登るにつれ、空気が薄くなった。", fr: "Au fur et à mesure que je gravissais la montagne, l'air se raréfiait." },
    ],
    qs: [
      { t: "fill", q: "時間がたつ＿＿＿、彼の不安は大きくなっていった。", fr: "À mesure que le temps passait, son inquiétude grandissait.",
        o: ["につれて", "にとって", "について", "に際して"], a: 0,
        e: "Deux évolutions graduelles parallèles (le temps passe ↗ / l'inquiétude grandit ↗) : 〜につれて." },
      { t: "usage", q: "Quelle phrase emploie 〜につれて correctement (changement graduel des DEUX côtés) ?",
        o: ["練習を重ねるにつれて、上手になった。", "ボタンを押すにつれて、ドアが開いた。", "駅に着くにつれて、電車に乗った。", "朝になるにつれて、目覚ましが鳴った。"], a: 0,
        e: "« À mesure que les exercices s'accumulent, on progresse » : deux évolutions graduelles. Les autres décrivent des actions ponctuelles, incompatibles avec につれて." },
      { t: "meaning", q: "「品質が上がるにつれて、値段も上がる」— sens ?",
        o: ["plus la qualité monte, plus le prix monte", "la qualité monte mais le prix baisse", "malgré la qualité, le prix monte", "le prix monte à propos de la qualité"], a: 0,
        e: "〜につれて = relation proportionnelle : les deux augmentent ensemble." },
    ],
  },

  {
    id: "g017", g: "〜にしたがって／にしたがい", m: "à mesure que ; conformément à, en suivant", f: "Nom／Verbe-dico + にしたがって",
    c: "time", lv: 2, rel: ["g016", "g015"],
    note: "Deux sens : (1) changement proportionnel (≈ につれて) ; (2) « en suivant / conformément à » une instruction, une règle, une volonté (従う = obéir).",
    ex: [
      { jp: "南へ行くにしたがって、気候が暖かくなる。", fr: "À mesure que l'on va vers le sud, le climat se réchauffe." },
      { jp: "係員の指示にしたがって、避難してください。", fr: "Veuillez évacuer conformément aux instructions du personnel." },
    ],
    qs: [
      { t: "fill", q: "矢印＿＿＿進むと、出口に着きます。", fr: "En suivant les flèches, vous arriverez à la sortie.",
        o: ["にしたがって", "につれて", "にとって", "について"], a: 0,
        e: "Sens « en suivant / conformément à » (les flèches) : 〜にしたがって. (〜につれて n'a que le sens proportionnel.)" },
      { t: "nuance", q: "Lequel des deux sens 〜につれて NE possède PAS ?",
        o: ["« conformément à (une règle/instruction) »", "« à mesure que »", "« proportionnellement »", "« au fur et à mesure »"], a: 0,
        e: "〜につれて n'exprime QUE le changement proportionnel. Le sens « conformément à / en obéissant à » est propre à 〜にしたがって (de 従う)." },
      { t: "meaning", q: "「規則にしたがって行動する」— sens ?",
        o: ["agir conformément au règlement", "agir contre le règlement", "agir à mesure du règlement", "agir à propos du règlement"], a: 0,
        e: "Ici 〜にしたがって = en suivant / conformément à (le règlement)." },
    ],
  },

  {
    id: "g018", g: "〜に反して／に反する", m: "contrairement à, à l'encontre de", f: "Nom + に反して／に反する＋Nom",
    c: "particle", lv: 2, rel: ["g002"],
    note: "Le résultat est CONTRAIRE à une attente, une prévision, une règle ou une volonté. Souvent avec 予想・期待・命令・規則 (prévision, attente, ordre, règle).",
    ex: [
      { jp: "大方の予想に反して、彼が優勝した。", fr: "Contrairement à la plupart des pronostics, il a remporté la victoire." },
      { jp: "親の期待に反して、彼は進学しなかった。", fr: "Contrairement aux attentes de ses parents, il n'a pas poursuivi ses études." },
    ],
    qs: [
      { t: "fill", q: "予想＿＿＿、試験は易しかった。", fr: "Contrairement aux prévisions, l'examen était facile.",
        o: ["に反して", "に応じて", "に基づいて", "について"], a: 0,
        e: "Le résultat va à L'ENCONTRE de la prévision : 〜に反して." },
      { t: "meaning", q: "「命令に反する行為」— sens de に反する ?",
        o: ["un acte contraire à (l'ordre)", "un acte conforme à l'ordre", "un acte au sujet de l'ordre", "un acte grâce à l'ordre"], a: 0,
        e: "〜に反する + Nom = « (un acte) qui va à l'encontre de l'ordre »." },
      { t: "nuance", q: "Avec quel type de noms 〜に反して s'emploie-t-il typiquement ?",
        o: ["予想・期待・規則 (attente, prévision, règle)", "noms de lieux", "noms de personnes uniquement", "noms de matériaux"], a: 0,
        e: "〜に反して contredit une norme ou une attente : 予想・期待・命令・規則 sont les compagnons typiques." },
    ],
  },

  {
    id: "g019", g: "〜を通じて／を通して", m: "à travers, par l'intermédiaire de ; tout au long de", f: "Nom + を通じて／を通して",
    c: "particle", lv: 2, rel: ["g020"],
    note: "(1) moyen/intermédiaire par lequel qqch passe (une personne, un média, une expérience) ; (2) étendue temporelle ou spatiale couverte « d'un bout à l'autre ».",
    ex: [
      { jp: "友人を通じて、彼女と知り合った。", fr: "J'ai fait sa connaissance par l'intermédiaire d'un ami." },
      { jp: "この地方は一年を通して雨が多い。", fr: "Cette région est pluvieuse tout au long de l'année." },
    ],
    qs: [
      { t: "fill", q: "インターネット＿＿＿、世界中の情報が手に入る。", fr: "Via Internet, on obtient des informations du monde entier.",
        o: ["を通じて", "について", "に対して", "に反して"], a: 0,
        e: "Internet est le MOYEN/canal par lequel on obtient l'information : 〜を通じて." },
      { t: "meaning", q: "「一週間を通して晴れの日が続いた」— sens ?",
        o: ["tout au long de la semaine", "à propos de la semaine", "à cause de la semaine", "contrairement à la semaine"], a: 0,
        e: "Sens (2) : étendue temporelle, « durant toute la semaine »." },
      { t: "usage", q: "Pour « j'ai beaucoup appris À TRAVERS cette expérience » :",
        o: ["この経験を通じて、多くを学んだ。", "この経験に反して、多くを学んだ。", "この経験について、多くを学んだ。", "この経験にとって、多くを学んだ。"], a: 0,
        e: "L'expérience est le vecteur de l'apprentissage : 〜を通じて (« à travers »)." },
    ],
  },

  {
    id: "g020", g: "〜にわたって／にわたる", m: "sur (toute l'étendue de), pendant tout, couvrant", f: "Nom (durée/étendue) + にわたって／にわたる＋Nom",
    c: "time", lv: 2, rel: ["g019"],
    note: "Souligne l'AMPLEUR d'une étendue (temps, espace, domaines) couverte de bout en bout : « sur 10 ans », « sur 3 régions ». Le nom indique une portée.",
    ex: [
      { jp: "工事は三年にわたって続いた。", fr: "Les travaux ont duré sur trois ans." },
      { jp: "広い範囲にわたる被害が報告された。", fr: "Des dégâts couvrant une vaste zone ont été signalés." },
    ],
    qs: [
      { t: "fill", q: "話し合いは十時間＿＿＿行われた。", fr: "Les pourparlers se sont déroulés sur dix heures.",
        o: ["にわたって", "を通じて", "について", "に応じて"], a: 0,
        e: "On souligne l'ampleur d'une durée (dix heures) : 〜にわたって." },
      { t: "nuance", q: "Différence entre 〜にわたって et 〜を通して (sens temporel) :",
        o: ["わたって insiste sur l'ampleur/l'étendue couverte ; 通して insiste sur « du début à la fin sans interruption »", "ils sont strictement identiques", "わたって ne s'emploie qu'avec des lieux", "通して exprime un moyen uniquement"], a: 0,
        e: "〜にわたって met en avant la GRANDE étendue (durée, espace, nombre de domaines). 〜を通して souligne la continuité « d'un bout à l'autre »." },
      { t: "meaning", q: "「三回にわたる交渉」— sens ?",
        o: ["des négociations s'étalant sur trois fois", "des négociations contre trois personnes", "des négociations à propos de trois choses", "des négociations grâce à trois fois"], a: 0,
        e: "〜にわたる + Nom = « (des négociations) qui couvrent trois reprises »." },
    ],
  },

  {
    id: "g021", g: "〜をきっかけに（して）／がきっかけで", m: "à la suite de, ce qui a déclenché, l'occasion qui a fait que", f: "Nom／普通形＋の + をきっかけに",
    c: "condition", lv: 2, rel: ["g022"],
    note: "Un événement sert de DÉCLENCHEUR à un changement (souvent positif/personnel) : rencontre, voyage, incident qui fait débuter qqch.",
    ex: [
      { jp: "病気をきっかけに、生活習慣を見直した。", fr: "À la suite de ma maladie, j'ai revu mon hygiène de vie." },
      { jp: "ある映画をきっかけにして、日本語の勉強を始めた。", fr: "C'est un certain film qui m'a amené à commencer le japonais." },
    ],
    qs: [
      { t: "fill", q: "留学＿＿＿、彼の人生は大きく変わった。", fr: "Le séjour d'études a été le déclencheur d'un grand changement dans sa vie.",
        o: ["をきっかけに", "について", "に反して", "にわたって"], a: 0,
        e: "Un événement DÉCLENCHE un changement : 〜をきっかけに." },
      { t: "meaning", q: "「友人の一言をきっかけに、考えが変わった」— rôle de la « parole de l'ami » ?",
        o: ["le déclencheur du changement", "l'obstacle au changement", "le but du changement", "le résultat du changement"], a: 0,
        e: "〜をきっかけに = l'événement déclencheur à l'origine de la suite." },
      { t: "order", q: "Reconstituez la phrase. Quel segment va à la place ★ ?",
        frame: "入院した ＿＿ ＿★＿ ＿＿ 考えるようになった。",
        o: ["こと", "を", "きっかけに", "健康について"], a: 2,
        e: "Ordre : こと → を → きっかけに → 健康について。「入院したことをきっかけに、健康について考えるようになった」. À ★ : きっかけに." },
    ],
  },

  {
    id: "g022", g: "〜を契機に（して）", m: "à la faveur de, prenant pour occasion (formel)", f: "Nom／普通形＋の + を契機に",
    c: "condition", lv: 3, rel: ["g021"],
    note: "Équivalent SOUTENU de 〜をきっかけに. Un événement marquant devient le point de départ d'un changement notable (souvent à l'échelle d'une entreprise, d'une société).",
    ex: [
      { jp: "オイルショックを契機に、省エネが進んだ。", fr: "À la faveur du choc pétrolier, les économies d'énergie ont progressé." },
      { jp: "創立百周年を契機として、新事業を始めた。", fr: "Prenant pour occasion le centenaire, l'entreprise a lancé une nouvelle activité." },
    ],
    qs: [
      { t: "fill", q: "震災＿＿＿、防災意識が高まった。", fr: "À la faveur du séisme, la conscience de la prévention des catastrophes s'est accrue.",
        o: ["を契機に", "について", "に応じて", "にとって"], a: 0,
        e: "Événement marquant servant de point de départ à un changement de société : 〜を契機に (registre soutenu)." },
      { t: "nuance", q: "Entre 〜を契機に et 〜をきっかけに, lequel est le plus FORMEL/écrit ?",
        o: ["を契機に", "をきっかけに", "ils sont familiers tous les deux", "aucun n'est formel"], a: 0,
        e: "〜を契機に est le registre soutenu ; 〜をきっかけに est plus courant/quotidien. Le sens est très proche." },
      { t: "meaning", q: "「転職を契機に、家族で引っ越した」— sens ?",
        o: ["le changement d'emploi a été l'occasion du déménagement", "ils ont déménagé contre le changement d'emploi", "ils ont déménagé à propos du travail", "le travail a empêché le déménagement"], a: 0,
        e: "〜を契機に = prenant (le changement d'emploi) pour occasion/point de départ." },
    ],
  },

  /* ===================== CONCESSION & CONTRASTE ===================== */

  {
    id: "g023", g: "〜ものの", m: "bien que, certes… mais", f: "普通形（な形＝な／である・名＝である）+ ものの",
    c: "contrast", lv: 1, rel: ["g024", "g025"],
    note: "Concession : on admet A, mais la suite ne va pas dans le sens attendu. Le locuteur reconnaît un fait puis le tempère. Style un peu écrit.",
    ex: [
      { jp: "買ったものの、一度も使っていない。", fr: "Je l'ai certes acheté, mais je ne m'en suis jamais servi." },
      { jp: "日本語が話せるとはいうものの、敬語は苦手だ。", fr: "Je sais certes parler japonais, mais les formes honorifiques me posent problème." },
    ],
    qs: [
      { t: "fill", q: "免許は取った＿＿＿、運転する機会がない。", fr: "J'ai certes obtenu le permis, mais je n'ai pas l'occasion de conduire.",
        o: ["ものの", "ために", "とおりに", "ばかりに"], a: 0,
        e: "On admet un fait (avoir le permis) puis on le tempère (pas l'occasion) : 〜ものの (concession)." },
      { t: "meaning", q: "「約束したものの、守れなかった」— sens ?",
        o: ["bien que j'aie promis, je n'ai pas pu tenir", "parce que j'ai promis, j'ai pu tenir", "si je promets, je tiendrai", "dès que j'ai promis, j'ai tenu"], a: 0,
        e: "〜ものの = « bien que / certes… mais » : on reconnaît un fait, la suite déçoit l'attente." },
      { t: "nuance", q: "Différence entre 〜ものの et 〜のに :",
        o: ["ものの est plus écrit/posé ; のに ajoute souvent un reproche ou une déception affective", "のに est plus formel", "ils n'ont aucun rapport", "ものの exprime une cause"], a: 0,
        e: "Les deux sont concessifs, mais 〜のに traduit souvent un sentiment de mécontentement/surprise, alors que 〜ものの est plus neutre et littéraire." },
    ],
  },

  {
    id: "g024", g: "〜とはいえ", m: "cela dit, bien que ce soit, même si l'on dit que", f: "普通形 + とはいえ（名・な形は直接可）",
    c: "contrast", lv: 2, rel: ["g023", "g025"],
    note: "On admet une affirmation (souvent générale) puis on la nuance : « certes X, néanmoins… ». La réalité ne correspond pas tout à fait à ce que X laisse attendre.",
    ex: [
      { jp: "春とはいえ、まだ寒い日が続く。", fr: "Bien que ce soit le printemps, les jours froids se poursuivent." },
      { jp: "仕事とはいえ、休みなしでは体がもたない。", fr: "Même si c'est le travail, sans repos le corps ne tient pas." },
    ],
    qs: [
      { t: "fill", q: "便利になった＿＿＿、問題がないわけではない。", fr: "Certes c'est devenu pratique, mais ce n'est pas pour autant sans problème.",
        o: ["とはいえ", "からこそ", "おかげで", "ところで"], a: 0,
        e: "On concède (« c'est devenu pratique ») puis on nuance : 〜とはいえ." },
      { t: "meaning", q: "「プロとはいえ、ミスをすることもある」— sens ?",
        o: ["même si c'est un pro, il lui arrive de se tromper", "parce que c'est un pro, il ne se trompe jamais", "s'il était pro, il se tromperait", "dès qu'il est devenu pro, il s'est trompé"], a: 0,
        e: "〜とはいえ = « même si l'on dit que c'est X, en réalité… ». On tempère l'attente liée à « pro »." },
      { t: "nuance", q: "〜とはいえ se place typiquement :",
        o: ["en reprenant une idée admise pour aussitôt la nuancer", "pour exprimer un objectif", "pour indiquer une cause directe", "pour situer un lieu formel"], a: 0,
        e: "〜とはいえ introduit une concession à une idée que l'on vient d'admettre (ou qui est tenue pour acquise)." },
    ],
  },

  {
    id: "g025", g: "〜にもかかわらず", m: "malgré, en dépit de, alors même que", f: "普通形／名 + にもかかわらず",
    c: "contrast", lv: 1, rel: ["g023", "g024"],
    note: "Concession forte : un résultat inattendu se produit MALGRÉ une circonstance qui aurait dû l'empêcher. Souvent une nuance de surprise ou de critique.",
    ex: [
      { jp: "雨にもかかわらず、試合は行われた。", fr: "Malgré la pluie, le match a eu lieu." },
      { jp: "努力したにもかかわらず、結果が出なかった。", fr: "En dépit de mes efforts, je n'ai pas obtenu de résultat." },
    ],
    qs: [
      { t: "fill", q: "何度も注意した＿＿＿、彼は同じ失敗を繰り返した。", fr: "Bien que je l'aie averti à maintes reprises, il a répété la même erreur.",
        o: ["にもかかわらず", "に応じて", "に基づいて", "をめぐって"], a: 0,
        e: "Résultat contraire à l'attente MALGRÉ les avertissements : 〜にもかかわらず." },
      { t: "meaning", q: "「忠告したにもかかわらず」— sens ?",
        o: ["bien que j'aie conseillé / malgré mes conseils", "grâce à mes conseils", "à propos de mes conseils", "selon mes conseils"], a: 0,
        e: "〜にもかかわらず = malgré / en dépit de, avec un résultat contraire à l'attente." },
      { t: "nuance", q: "Par rapport à 〜のに, 〜にもかかわらず est :",
        o: ["plus formel/écrit, sans la forte coloration émotionnelle de のに", "plus familier", "réservé à l'oral", "synonyme de から"], a: 0,
        e: "〜にもかかわらず appartient à un registre soutenu ; 〜のに est plus oral et souvent teinté de reproche/déception." },
    ],
  },

  {
    id: "g026", g: "〜ながら（も）", m: "tout en, bien que (contraste)", f: "Verbe-ます語幹／い形／な形（であり）／名（であり）+ ながら（も）",
    c: "contrast", lv: 2, rel: ["g027"],
    note: "Sens concessif (à ne pas confondre avec le ながら simultané « en faisant »). « Bien que A soit le cas, contre toute attente B ». Souvent renforcé par も.",
    ex: [
      { jp: "狭いながらも、楽しい我が家だ。", fr: "Bien que petite, c'est notre joyeuse maison." },
      { jp: "悪いと知りながら、嘘をついてしまった。", fr: "Tout en sachant que c'était mal, j'ai menti." },
    ],
    qs: [
      { t: "fill", q: "残念＿＿＿、今回は参加を見送ります。", fr: "Bien que ce soit regrettable, je renonce à participer cette fois.",
        o: ["ながら", "によって", "について", "に際して"], a: 0,
        e: "Concession avec un な-adjectif : 残念ながら = « bien que regrettable / à regret ». 〜ながら(も) marque ici le contraste." },
      { t: "usage", q: "Dans laquelle 〜ながら a-t-il le sens CONCESSIF (« bien que »), et non « en même temps » ?",
        o: ["体に悪いと知りながら、吸い続けている。", "音楽を聞きながら、勉強する。", "歩きながら、電話する。", "笑いながら、話す。"], a: 0,
        e: "« Tout en sachant que c'est mauvais, il continue de fumer » : contraste/concession. Les autres expriment deux actions simultanées." },
      { t: "meaning", q: "「小さいながらも、力強い」— sens ?",
        o: ["bien que petit, il est puissant", "petit donc puissant", "petit en faisant le puissant", "petit à propos du puissant"], a: 0,
        e: "〜ながらも = concession : « tout petit qu'il est, il est néanmoins puissant »." },
    ],
  },

  {
    id: "g027", g: "〜つつ（も）", m: "tout en ; bien que (écrit)", f: "Verbe-ます語幹 + つつ（も）",
    c: "contrast", lv: 2, rel: ["g026"],
    note: "Registre écrit. (1) つつ = deux actions simultanées (≈ ながら) ; (2) つつも = concession « tout en… pourtant » (≈ ながらも). 〜つつある = « être en train de » (en évolution).",
    ex: [
      { jp: "悪いと思いつつも、つい食べてしまう。", fr: "Tout en pensant que c'est mauvais, je finis par en manger." },
      { jp: "景気は回復しつつある。", fr: "L'économie est en voie de redressement." },
    ],
    qs: [
      { t: "fill", q: "体に良くないと知り＿＿＿、夜更かしをやめられない。", fr: "Tout en sachant que c'est mauvais pour la santé, je n'arrive pas à arrêter de veiller.",
        o: ["つつも", "によって", "に応じて", "とともに"], a: 0,
        e: "Concession en registre écrit : 〜つつも = « tout en… pourtant »." },
      { t: "meaning", q: "「人口は減少しつつある」— sens de つつある ?",
        o: ["la population est en train de diminuer (évolution en cours)", "la population a fini de diminuer", "la population va peut-être diminuer", "la population ne diminue pas"], a: 0,
        e: "〜つつある = « être en train de / en voie de » : un processus graduel en cours." },
      { t: "nuance", q: "Comparé à 〜ながら, 〜つつ appartient à un registre :",
        o: ["plus écrit/littéraire", "plus familier et oral", "uniquement enfantin", "identique en tout point"], a: 0,
        e: "〜つつ(も) est l'équivalent écrit/soutenu de 〜ながら(も)." },
    ],
  },

  {
    id: "g028", g: "〜くせに", m: "alors que (pourtant), tout en (reproche)", f: "普通形（な形＝な／名＝の）+ くせに",
    c: "contrast", lv: 2, rel: ["g023"],
    note: "Concession à forte coloration CRITIQUE ou de reproche/mépris. Le sujet de la principale et de la subordonnée est généralement le même. À éviter en contexte poli.",
    ex: [
      { jp: "知っているくせに、教えてくれない。", fr: "Il sait pourtant, mais il ne veut pas me le dire." },
      { jp: "下手なくせに、いつも自慢している。", fr: "Bien qu'il soit mauvais, il se vante tout le temps." },
    ],
    qs: [
      { t: "fill", q: "自分が悪い＿＿＿、謝ろうとしない。", fr: "Alors que c'est lui le fautif, il ne veut pas s'excuser.",
        o: ["くせに", "おかげで", "ために", "とおりに"], a: 0,
        e: "Concession avec reproche (« il est en tort, et pourtant… ») : 〜くせに." },
      { t: "nuance", q: "Quelle nuance 〜くせに ajoute-t-il par rapport à 〜のに ?",
        o: ["une critique / un blâme envers le sujet", "une politesse accrue", "un sens temporel", "une cause neutre"], a: 0,
        e: "〜くせに est plus chargé émotionnellement : il exprime reproche, mépris ou irritation, contrairement au 〜のに plus neutre." },
      { t: "usage", q: "Dans quel cas 〜くせに est-il DÉCONSEILLÉ ?",
        o: ["dans un message poli à un supérieur", "pour critiquer un proche à l'oral", "dans une dispute amicale", "en monologue intérieur"], a: 0,
        e: "À cause de sa nuance critique, 〜くせに est inapproprié en situation polie/formelle (envers un supérieur, un client…)." },
    ],
  },

  {
    id: "g029", g: "〜わりに（は）", m: "pour, comparé à ce qu'on attendrait, eu égard à", f: "普通形（な形＝な／名＝の）+ わりに（は）",
    c: "contrast", lv: 2, rel: ["g023"],
    note: "Le résultat ne correspond pas à ce qu'on attendrait au vu d'un critère (âge, prix, effort…). « Pour un X, c'est étonnamment Y ».",
    ex: [
      { jp: "このレストランは、値段のわりにおいしい。", fr: "Ce restaurant est bon pour le prix." },
      { jp: "彼は年齢のわりに若く見える。", fr: "Il paraît jeune pour son âge." },
    ],
    qs: [
      { t: "fill", q: "あまり勉強しなかった＿＿＿、いい点が取れた。", fr: "Pour avoir peu étudié, j'ai eu une bonne note.",
        o: ["わりに", "とおりに", "ものなら", "ばかりに"], a: 0,
        e: "Le résultat (bonne note) détonne au regard du critère (peu d'études) : 〜わりに." },
      { t: "meaning", q: "「給料が高いわりに、仕事は楽だ」— sens ?",
        o: ["pour un salaire élevé, le travail est étonnamment facile", "le salaire est élevé donc le travail est dur", "malgré un bas salaire, le travail est dur", "le salaire est élevé à propos du travail"], a: 0,
        e: "〜わりに confronte un critère (salaire élevé) à un résultat inattendu (travail facile)." },
      { t: "nuance", q: "Différence entre 〜わりに et 〜にしては :",
        o: ["très proches ; にしては part d'un standard explicite donné, わりに compare à une attente générale", "わりに exprime une cause", "にしては est familier", "ils sont opposés"], a: 0,
        e: "Sens voisins. 〜にしては s'appuie sur un standard explicitement nommé (« pour un débutant… »), 〜わりに compare au niveau attendu en général." },
    ],
  },

  {
    id: "g030", g: "〜一方（で）", m: "d'un côté… de l'autre ; tandis que ; par ailleurs", f: "普通形（な形＝な／である・名＝である）+ 一方（で）",
    c: "contrast", lv: 1, rel: ["g031", "g002"],
    note: "Présente deux aspects/tendances parallèles, souvent opposés ou complémentaires. Peut aussi marquer une évolution simultanée dans deux directions.",
    ex: [
      { jp: "都市の人口が増える一方で、地方は過疎化している。", fr: "Tandis que la population des villes augmente, les campagnes se dépeuplent." },
      { jp: "彼は厳しい一方で、優しい面もある。", fr: "Il est sévère, mais il a aussi un côté gentil." },
    ],
    qs: [
      { t: "fill", q: "輸出が伸びる＿＿＿、輸入は減少している。", fr: "Tandis que les exportations augmentent, les importations diminuent.",
        o: ["一方で", "おかげで", "ものの", "ながら"], a: 0,
        e: "Deux tendances parallèles opposées (export ↗ / import ↘) : 〜一方で." },
      { t: "meaning", q: "「彼女は仕事に厳しい一方で、部下思いだ」— sens ?",
        o: ["d'un côté sévère au travail, de l'autre attentionnée", "sévère donc attentionnée", "ni sévère ni attentionnée", "sévère au sujet de ses subordonnés"], a: 0,
        e: "〜一方で juxtapose deux facettes (sévère / attentionnée)." },
      { t: "nuance", q: "Outre le contraste, 〜一方（だ） peut aussi signifier :",
        o: ["une évolution qui ne fait que (s'aggraver/croître) dans un seul sens", "une cause", "un ordre", "une hypothèse"], a: 0,
        e: "〜一方だ en fin de phrase = « ne faire que + V » : 物価は上がる一方だ (« les prix ne font que monter »)." },
    ],
  },

  {
    id: "g031", g: "〜反面／半面", m: "en revanche, par contre (l'autre face d'une même chose)", f: "普通形（な形＝な／である・名＝である）+ 反面",
    c: "contrast", lv: 2, rel: ["g030"],
    note: "Souligne les DEUX FACES contradictoires d'un même sujet : un avantage et son inconvénient liés. Le sujet reste le même de part et d'autre.",
    ex: [
      { jp: "この仕事は給料がいい反面、責任が重い。", fr: "Ce travail est bien payé, mais en revanche les responsabilités sont lourdes." },
      { jp: "便利になった反面、人と人のつながりが薄れた。", fr: "C'est devenu pratique, mais en contrepartie les liens humains se sont distendus." },
    ],
    qs: [
      { t: "fill", q: "この薬はよく効く＿＿＿、副作用も強い。", fr: "Ce médicament est très efficace, mais en revanche les effets secondaires sont forts.",
        o: ["反面", "おかげで", "うちに", "ながら"], a: 0,
        e: "Deux faces opposées d'une même chose (efficace ↔ effets secondaires) : 〜反面." },
      { t: "nuance", q: "Nuance qui distingue 〜反面 de 〜一方で :",
        o: ["反面 oppose deux faces d'UN MÊME sujet ; 一方で peut aussi opposer deux sujets/tendances distincts", "反面 exprime une cause", "一方で est familier", "ils sont identiques en tout"], a: 0,
        e: "〜反面 met en regard deux aspects contradictoires d'un seul et même sujet. 〜一方で est plus large (peut comparer deux entités différentes)." },
      { t: "meaning", q: "「自由が増えた反面、責任も増えた」— sens ?",
        o: ["plus de liberté, mais en contrepartie plus de responsabilités", "plus de liberté donc moins de responsabilités", "ni liberté ni responsabilité", "la liberté à propos des responsabilités"], a: 0,
        e: "〜反面 = la contrepartie : à l'avantage répond l'inconvénient." },
    ],
  },

  {
    id: "g032", g: "〜かと思うと／かと思ったら", m: "à peine… que, et voilà que (changement soudain)", f: "Verbe-た／普通形 + かと思うと",
    c: "time", lv: 2, rel: ["g036", "g037"],
    note: "Deux événements presque simultanés et contrastés : à peine A est-il arrivé que B se produit (changement rapide et souvent inattendu). Ne s'emploie pas pour ses propres actions volontaires.",
    ex: [
      { jp: "赤ちゃんは泣いたかと思うと、もう笑っている。", fr: "À peine le bébé a-t-il pleuré qu'il rit déjà." },
      { jp: "空が暗くなったかと思ったら、大雨が降ってきた。", fr: "Le ciel s'était à peine assombri qu'une grosse pluie est tombée." },
    ],
    qs: [
      { t: "fill", q: "彼は帰ってきた＿＿＿、すぐにまた出かけた。", fr: "À peine rentré, il est ressorti aussitôt.",
        o: ["かと思うと", "うちに", "おかげで", "わりに"], a: 0,
        e: "Deux actions quasi simultanées et contrastées (rentrer / ressortir aussitôt) : 〜かと思うと." },
      { t: "meaning", q: "「泣いていたかと思ったら、もう笑っている」— sens ?",
        o: ["à peine pleurait-il qu'il rit déjà", "il pleure parce qu'il rit", "s'il pleure, il rira", "il pleure pour rire"], a: 0,
        e: "〜かと思ったら = changement soudain : « je le croyais en train de pleurer, et le voilà déjà qui rit »." },
      { t: "usage", q: "Pourquoi « 私は家に着いたかと思うと、すぐに寝た » est-il bizarre ?",
        o: ["かと思うと décrit un changement observé chez autrui, pas une action volontaire du locuteur", "le verbe est mal conjugué", "il manque une particule", "le sens est temporel impossible"], a: 0,
        e: "〜かと思うと s'emploie pour un changement constaté (souvent chez quelqu'un d'autre), pas pour décrire sa propre action volontaire." },
    ],
  },

  /* ===================== TEMPS & SÉQUENCE ===================== */

  {
    id: "g033", g: "〜うちに", m: "pendant que, tant que (profiter d'un état)", f: "Verbe-dico／ている／ない／い形／な形な／名の + うちに",
    c: "time", lv: 1, rel: ["g034"],
    note: "Faire qqch PENDANT qu'un état favorable dure (avant qu'il ne change). Avec un verbe d'état/durée. Aussi : changement progressif « à force de… » (見ているうちに).",
    ex: [
      { jp: "熱いうちに、召し上がってください。", fr: "Mangez tant que c'est chaud." },
      { jp: "話しているうちに、緊張がほぐれてきた。", fr: "À force de parler, ma tension s'est dissipée." },
    ],
    qs: [
      { t: "fill", q: "明るい＿＿＿、家に帰りましょう。", fr: "Rentrons à la maison tant qu'il fait jour.",
        o: ["うちに", "あいだに", "とたんに", "うえに"], a: 0,
        e: "Profiter d'un état tant qu'il dure (la clarté du jour) : 〜うちに." },
      { t: "meaning", q: "「考えているうちに、眠ってしまった」— sens ?",
        o: ["pendant que je réfléchissais, je me suis endormi", "parce que j'ai réfléchi, j'ai dormi", "après avoir réfléchi, j'ai dormi", "j'ai réfléchi pour dormir"], a: 0,
        e: "〜うちに = pendant que (cet état dure) ; ici, un changement survient à l'intérieur de cette durée." },
      { t: "nuance", q: "Différence entre 〜うちに et 〜あいだに :",
        o: ["うちに insiste sur « avant que l'état ne change » ; あいだに délimite simplement une période donnée", "ils sont identiques", "あいだに exprime une cause", "うちに est familier uniquement"], a: 0,
        e: "〜あいだに = « durant l'intervalle » (période bien délimitée). 〜うちに ajoute la nuance « profitons-en avant que cela ne change »." },
    ],
  },

  {
    id: "g034", g: "〜ないうちに", m: "avant que (ne… ne se produise), tant que ne… pas encore", f: "Verbe-ない + うちに",
    c: "time", lv: 2, rel: ["g033"],
    note: "Agir AVANT qu'un changement (souvent indésirable) ne survienne. « Tant que ce n'est pas encore le cas ».",
    ex: [
      { jp: "雨が降らないうちに、洗濯物を取り込もう。", fr: "Rentrons le linge avant qu'il ne pleuve." },
      { jp: "忘れないうちに、メモしておこう。", fr: "Notons-le avant d'oublier." },
    ],
    qs: [
      { t: "fill", q: "暗くなら＿＿＿、帰った方がいい。", fr: "Mieux vaut rentrer avant qu'il ne fasse nuit.",
        o: ["ないうちに", "るうちに", "たうちに", "ないあいだ"], a: 0,
        e: "Agir AVANT qu'un changement indésirable n'arrive (la nuit) : 〜ないうちに." },
      { t: "meaning", q: "「冷めないうちに食べてください」— sens ?",
        o: ["mangez avant que ça (ne) refroidisse", "mangez après que ça a refroidi", "mangez parce que c'est froid", "mangez tant que c'est froid"], a: 0,
        e: "〜ないうちに = avant que (le refroidissement) ne se produise." },
      { t: "order", q: "Reconstituez la phrase. Quel segment va à la place ★ ?",
        frame: "若くて ＿＿ ＿★＿ ＿＿ 始めた方がいい。",
        o: ["元気な", "うちに", "新しいこと", "を"], a: 1,
        e: "Ordre : 元気な → うちに → 新しいこと → を。「若くて元気なうちに、新しいことを始めた方がいい」. À ★ : うちに." },
    ],
  },

  {
    id: "g035", g: "〜次第", m: "dès que, aussitôt que (formel)", f: "Verbe-ます語幹／動作性名詞 + 次第",
    c: "time", lv: 2, rel: ["g036"],
    note: "Dès qu'une condition préalable est remplie, on fait aussitôt l'action suivante. Registre formel/poli. La 2e partie est volontaire (≠ faits passés ; pas de passé après 次第).",
    ex: [
      { jp: "詳細が分かり次第、ご連絡いたします。", fr: "Dès que j'aurai les détails, je vous contacterai." },
      { jp: "雨がやみ次第、出発します。", fr: "Dès que la pluie aura cessé, nous partirons." },
    ],
    qs: [
      { t: "fill", q: "準備ができ＿＿＿、始めましょう。", fr: "Commençons dès que les préparatifs seront terminés.",
        o: ["次第", "うちに", "とたんに", "あいだに"], a: 0,
        e: "« Dès que (la préparation est faite) » en registre poli : Verbe-ます語幹 + 次第." },
      { t: "usage", q: "Quelle phrase est CORRECTE avec 次第 ?",
        o: ["到着し次第、電話します。", "到着した次第、電話しました。", "到着する次第、電話する。", "到着し次第、電話した。"], a: 0,
        e: "次第 se construit sur la base ます (到着し+次第) et la suite n'est PAS au passé (action à venir, volontaire). Donc 到着し次第、電話します。" },
      { t: "meaning", q: "「結果が出次第、お知らせします」— quand l'avertira-t-on ?",
        o: ["dès que le résultat sortira", "avant le résultat", "longtemps après le résultat", "seulement si le résultat est bon"], a: 0,
        e: "〜次第 = immédiatement après la réalisation de la condition." },
    ],
  },

  {
    id: "g036", g: "〜たとたん（に）", m: "à l'instant même où, juste au moment où", f: "Verbe-た + とたん（に）",
    c: "time", lv: 2, rel: ["g037", "g032"],
    note: "Au moment précis où A s'achève, B (souvent inattendu, involontaire) survient aussitôt. B est un fait constaté, pas une intention. Se construit sur Verbe-た.",
    ex: [
      { jp: "立ち上がったとたん、めまいがした。", fr: "À l'instant où je me suis levé, j'ai eu un vertige." },
      { jp: "ドアを開けたとたんに、猫が飛び出した。", fr: "Juste au moment où j'ai ouvert la porte, le chat a bondi dehors." },
    ],
    qs: [
      { t: "fill", q: "電車を降り＿＿＿、雨が降り出した。", fr: "À l'instant où je suis descendu du train, il s'est mis à pleuvoir.",
        o: ["たとたん", "ないうちに", "次第", "あいだに"], a: 0,
        e: "Au moment précis où l'action s'achève, un fait inattendu survient : Verbe-た + とたん." },
      { t: "usage", q: "Pourquoi « 家に帰ったとたん、宿題をしよう » est-il incorrect ?",
        o: ["とたん exige un fait constaté/involontaire en 2e partie, pas une volonté/un ordre", "le verbe est mal placé", "il faut un nom devant", "とたん ne se met jamais en début"], a: 0,
        e: "Après 〜たとたん, la 2e proposition décrit un événement involontaire/constaté. Une intention (〜しよう) ou un ordre est impossible : on dirait plutôt 〜次第 ou 〜たら." },
      { t: "meaning", q: "「彼の顔を見たとたん、泣き出した」— sens ?",
        o: ["à l'instant où j'ai vu son visage, j'ai fondu en larmes", "avant de voir son visage, j'ai pleuré", "j'ai pleuré pour voir son visage", "j'ai vu son visage car j'ai pleuré"], a: 0,
        e: "〜たとたん = au moment précis de l'action, déclenchement immédiat et spontané de la suite." },
    ],
  },

  {
    id: "g037", g: "〜か〜ないかのうちに", m: "à peine… que, presque avant même que", f: "Verbe-dico か + Verbe-ない かのうちに",
    c: "time", lv: 3, rel: ["g036", "g032"],
    note: "Deux événements quasi simultanés : B se produit à l'instant où A est à peine commencé/achevé. Encore plus serré que 〜たとたん.",
    ex: [
      { jp: "ベルが鳴るか鳴らないかのうちに、彼は教室を出た。", fr: "La sonnerie avait à peine retenti qu'il était déjà sorti de la classe." },
      { jp: "横になるかならないかのうちに、眠ってしまった。", fr: "À peine allongé, je me suis endormi." },
    ],
    qs: [
      { t: "fill", q: "「いただきます」と言う＿＿＿、彼はもう食べ始めた。", fr: "Il avait à peine dit « itadakimasu » qu'il commençait déjà à manger.",
        o: ["か言わないかのうちに", "ないうちに", "とたんで", "次第に"], a: 0,
        e: "Structure 〜か〜ないかのうちに : « à peine eut-il dit X que… ». Forme : 言うか言わないかのうちに." },
      { t: "meaning", q: "「駅に着くか着かないかのうちに、電車が来た」— sens ?",
        o: ["à peine arrivé (ou presque pas encore) à la gare, le train est venu", "longtemps après être arrivé", "avant de partir pour la gare", "parce qu'il est arrivé à la gare"], a: 0,
        e: "〜か〜ないかのうちに = simultanéité quasi parfaite : le 2e événement survient à l'instant exact du 1er." },
      { t: "nuance", q: "Par rapport à 〜たとたん, 〜か〜ないかのうちに insiste sur :",
        o: ["une simultanéité encore plus étroite (A à peine commencé)", "une cause", "un contraste", "une longue durée"], a: 0,
        e: "〜か〜ないかのうちに souligne que B arrive AVANT même que A soit pleinement achevé : recouvrement quasi total." },
    ],
  },

  {
    id: "g038", g: "〜て以来", m: "depuis (que), depuis lors", f: "Verbe-て + 以来（名詞＋以来も可）",
    c: "time", lv: 2, rel: ["g033"],
    note: "Depuis un événement passé, un état/une habitude se poursuit sans interruption jusqu'à maintenant. Ne s'emploie pas pour un futur ni un court laps de temps.",
    ex: [
      { jp: "日本に来て以来、毎日日記をつけている。", fr: "Depuis que je suis venu au Japon, je tiens un journal chaque jour." },
      { jp: "卒業以来、彼には会っていない。", fr: "Depuis l'obtention de mon diplôme, je ne l'ai pas revu." },
    ],
    qs: [
      { t: "fill", q: "引っ越して＿＿＿、近所付き合いが増えた。", fr: "Depuis que j'ai déménagé, mes relations de voisinage se sont multipliées.",
        o: ["以来", "うちに", "とたん", "次第"], a: 0,
        e: "État qui dure depuis un événement passé : Verbe-て + 以来." },
      { t: "usage", q: "Quelle phrase est INCORRECTE avec 〜て以来 ?",
        o: ["来週会って以来、連絡します。", "入社して以来、休んでいない。", "けがをして以来、運動していない。", "別れて以来、会っていない。"], a: 0,
        e: "〜て以来 part d'un événement PASSÉ vers maintenant ; un futur (来週 = la semaine prochaine) est impossible." },
      { t: "meaning", q: "「あの事件以来、町は静かになった」— sens ?",
        o: ["depuis cet incident, la ville est devenue calme", "avant cet incident", "pendant cet incident", "à cause de la tranquillité, un incident"], a: 0,
        e: "〜以来 = depuis (cet événement), avec un état qui perdure." },
    ],
  },

  {
    id: "g039", g: "〜てからでないと／てからでなければ", m: "tant que… pas d'abord, à moins de… au préalable", f: "Verbe-て + からでないと／からでなければ",
    c: "condition", lv: 2, rel: ["g040"],
    note: "Une condition préalable est INDISPENSABLE : sans accomplir A d'abord, B est impossible. La 2e partie est souvent négative ou exprime l'impossibilité.",
    ex: [
      { jp: "予約してからでないと、入れません。", fr: "Sans réservation préalable, on ne peut pas entrer." },
      { jp: "実物を見てからでなければ、買うかどうか決められない。", fr: "Tant que je n'ai pas vu l'objet réel, je ne peux décider d'acheter ou non." },
    ],
    qs: [
      { t: "fill", q: "手を洗って＿＿＿、食べてはいけません。", fr: "Tu ne dois pas manger sans t'être lavé les mains d'abord.",
        o: ["からでないと", "以来", "うちに", "とたんに"], a: 0,
        e: "Condition préalable indispensable (se laver les mains) avant l'action : 〜てからでないと + (impossibilité/interdiction)." },
      { t: "meaning", q: "「許可を取ってからでなければ、使えない」— sens ?",
        o: ["impossible d'utiliser sans avoir d'abord obtenu l'autorisation", "on peut utiliser même sans autorisation", "on utilise puis on demande l'autorisation", "l'autorisation empêche l'utilisation"], a: 0,
        e: "〜てからでなければ = sans accomplir d'abord A, B est impossible." },
      { t: "nuance", q: "La 2e proposition après 〜てからでないと est typiquement :",
        o: ["négative / d'impossibilité (〜ない・できない)", "un ordre affirmatif", "une question", "une exclamation"], a: 0,
        e: "Le motif « la condition préalable manque » entraîne presque toujours une suite négative ou d'impossibilité." },
    ],
  },

  {
    id: "g040", g: "〜てはじめて", m: "ce n'est qu'après… que, seulement une fois que", f: "Verbe-て + はじめて",
    c: "time", lv: 2, rel: ["g039"],
    note: "Une prise de conscience/réalisation n'a lieu QU'APRÈS avoir fait l'expérience de A. Souvent : « ce n'est qu'en faisant A qu'on comprend/réalise B ».",
    ex: [
      { jp: "親になってはじめて、親のありがたみが分かった。", fr: "Ce n'est qu'en devenant parent que j'ai compris la gratitude due aux parents." },
      { jp: "失ってはじめて、その大切さに気づく。", fr: "Ce n'est qu'une fois qu'on l'a perdu qu'on en réalise l'importance." },
    ],
    qs: [
      { t: "fill", q: "病気になっ＿＿＿、健康の大切さが分かった。", fr: "Ce n'est qu'en tombant malade que j'ai compris l'importance de la santé.",
        o: ["てはじめて", "てからでないと", "たとたん", "て以来"], a: 0,
        e: "Réalisation qui n'arrive QU'APRÈS l'expérience (tomber malade) : 〜てはじめて." },
      { t: "meaning", q: "「外国に住んではじめて、母国のよさが分かった」— sens ?",
        o: ["ce n'est qu'après avoir vécu à l'étranger que j'ai compris les qualités de mon pays", "avant de vivre à l'étranger", "pendant que je vivais à l'étranger sans rien comprendre", "j'ai vécu à l'étranger pour comprendre"], a: 0,
        e: "〜てはじめて = la compréhension survient seulement APRÈS l'expérience vécue." },
      { t: "nuance", q: "〜てはじめて se distingue de 〜てから (« après ») car il :",
        o: ["souligne une prise de conscience qui n'était pas possible avant", "indique une simple succession neutre", "exprime une cause", "marque le futur"], a: 0,
        e: "〜てから note une simple succession. 〜てはじめて insiste : « PAS avant cela ; c'est seulement à ce moment que… »." },
    ],
  },

  /* ===================== CONDITION & CAUSE ===================== */

  {
    id: "g041", g: "〜限り（は）／ない限り", m: "tant que / à moins que ; dans la mesure où", f: "Verbe-dico／ている／ない／名である + 限り",
    c: "condition", lv: 1, rel: ["g042", "g044"],
    note: "(1) 〜限り(は) = tant que (cette condition dure) ; (2) 〜ない限り = à moins que / sauf si ; (3) 〜限り = « pour autant que » (見る限り, 知る限り = autant que je sache/vois).",
    ex: [
      { jp: "体が丈夫な限り、働き続けたい。", fr: "Tant que je serai en bonne santé, je veux continuer à travailler." },
      { jp: "謝らない限り、許さない。", fr: "Tant qu'il ne s'excusera pas, je ne lui pardonnerai pas." },
    ],
    qs: [
      { t: "fill", q: "練習しない＿＿＿、上達しない。", fr: "À moins de s'entraîner, on ne progresse pas.",
        o: ["限り", "うちに", "とたん", "以来"], a: 0,
        e: "〜ない限り = à moins que / tant que ne… pas. Sans entraînement, pas de progrès." },
      { t: "meaning", q: "「私の知る限り、彼は正直な人だ」— sens de 知る限り ?",
        o: ["pour autant que je sache", "à moins que je sache", "dès que je saurai", "parce que je sais"], a: 0,
        e: "〜限り après 知る／見る = « dans la limite de ce que je sais/vois » = autant que je sache." },
      { t: "fill", q: "学生である＿＿＿、勉強が本分だ。", fr: "Tant que l'on est étudiant, l'étude est le devoir premier.",
        o: ["限り", "ながら", "わりに", "ものの"], a: 0,
        e: "〜限り(は) = tant que cette condition (être étudiant) est vraie." },
    ],
  },

  {
    id: "g042", g: "〜からには／からは", m: "puisque, du moment que (donc il faut…)", f: "普通形（名・な形＝である）+ からには",
    c: "condition", lv: 2, rel: ["g044", "g043"],
    note: "Puisqu'une chose est établie/décidée, il en découle logiquement une résolution, une obligation ou une attente forte. La suite exprime souvent une détermination (〜べきだ・〜つもりだ・〜なければならない).",
    ex: [
      { jp: "やると言ったからには、最後までやる。", fr: "Du moment que j'ai dit que je le ferais, je le ferai jusqu'au bout." },
      { jp: "引き受けたからには、責任を持ってやります。", fr: "Puisque j'ai accepté, je m'en acquitterai avec sérieux." },
    ],
    qs: [
      { t: "fill", q: "試合に出る＿＿＿、勝ちたい。", fr: "Du moment que je participe au match, je veux gagner.",
        o: ["からには", "うちに", "とたん", "わりに"], a: 0,
        e: "Une décision étant prise, une résolution en découle : 〜からには + détermination." },
      { t: "usage", q: "Quelle suite convient le MIEUX après 「約束したからには」 ?",
        o: ["必ず守るべきだ。", "守れないかもしれない。", "守るかどうか分からない。", "守りたくない。"], a: 0,
        e: "〜からには appelle une suite de résolution/obligation : « il FAUT tenir parole ». Une suite hésitante contredit la logique de からには." },
      { t: "meaning", q: "「日本に来たからには、日本語を覚えたい」— sens ?",
        o: ["puisque je suis venu au Japon, je veux apprendre le japonais", "bien que je sois venu au Japon", "avant de venir au Japon", "si je viens au Japon"], a: 0,
        e: "〜からには = « du moment que (c'est le cas), alors logiquement… »." },
    ],
  },

  {
    id: "g043", g: "〜ことだから", m: "étant donné que c'est (telle personne), connaissant…", f: "名詞＋の + ことだから",
    c: "condition", lv: 2, rel: ["g042"],
    note: "On fait une supposition en s'appuyant sur le caractère bien connu d'une personne (ou d'un groupe). « Connaissant X (qui est toujours ainsi), il va sûrement… ». Le nom est presque toujours une personne.",
    ex: [
      { jp: "まじめな彼のことだから、きっと約束を守るだろう。", fr: "Connaissant son sérieux, il tiendra sûrement parole." },
      { jp: "時間に正確な田中さんのことだから、もう着いているはずだ。", fr: "Tanaka étant toujours ponctuel, il doit déjà être arrivé." },
    ],
    qs: [
      { t: "fill", q: "心配性の母＿＿＿、何度も電話してくるだろう。", fr: "Connaissant ma mère anxieuse, elle va sûrement appeler plusieurs fois.",
        o: ["のことだから", "について", "にとって", "に対して"], a: 0,
        e: "Supposition fondée sur le caractère connu d'une personne : 名詞＋の + ことだから." },
      { t: "meaning", q: "「努力家の彼のことだから、合格するでしょう」— sur quoi se fonde la supposition ?",
        o: ["sur le caractère travailleur, bien connu, de la personne", "sur un règlement", "sur le hasard", "sur une statistique"], a: 0,
        e: "〜ことだから s'appuie sur la personnalité/les habitudes connues du sujet pour prédire son comportement." },
      { t: "nuance", q: "Le nom placé devant 〜ことだから est presque toujours :",
        o: ["une personne (ou un groupe) dont on connaît le caractère", "un lieu", "une date", "un objet abstrait"], a: 0,
        e: "〜ことだから sert à inférer le comportement d'une PERSONNE d'après ce qu'on sait d'elle." },
    ],
  },

  {
    id: "g044", g: "〜以上（は）", m: "du moment que, dès lors que, puisque", f: "普通形（名・な形＝である）+ 以上（は）",
    c: "condition", lv: 2, rel: ["g042"],
    note: "Très proche de 〜からには. Puisqu'un fait est établi, une conséquence logique (obligation, résolution, attente) s'impose. Légèrement plus formel et catégorique.",
    ex: [
      { jp: "約束した以上は、守らなければならない。", fr: "Dès lors que l'on a promis, il faut tenir parole." },
      { jp: "学生である以上、規則に従うべきだ。", fr: "Du moment que l'on est étudiant, on doit suivre le règlement." },
    ],
    qs: [
      { t: "fill", q: "引き受けた＿＿＿、途中で投げ出すわけにはいかない。", fr: "Dès lors que j'ai accepté, je ne peux pas abandonner en cours de route.",
        o: ["以上", "うちに", "わりに", "とたん"], a: 0,
        e: "Un fait étant établi (avoir accepté), une obligation logique en découle : 〜以上（は）." },
      { t: "nuance", q: "Entre 〜以上（は） et 〜からには :",
        o: ["sens très proche ; 以上 est un peu plus formel/logique, からには insiste sur la détermination personnelle", "ils sont opposés", "以上 exprime le temps", "からには est uniquement écrit"], a: 0,
        e: "Quasi-synonymes : tous deux relient un fait établi à une conséquence obligée. 〜以上 sonne plus formel/raisonné." },
      { t: "meaning", q: "「日本で働く以上、ビザが必要だ」— sens ?",
        o: ["du moment que l'on travaille au Japon, un visa est nécessaire", "avant de travailler au Japon", "bien que l'on travaille au Japon", "si jamais on travaillait au Japon"], a: 0,
        e: "〜以上 = puisque (ce fait est posé), il s'ensuit nécessairement que…." },
    ],
  },

  {
    id: "g045", g: "〜だけに", m: "justement parce que, d'autant plus que", f: "普通形（名・な形＝な／である）+ だけに",
    c: "condition", lv: 2, rel: ["g046"],
    note: "Une cause étant marquée, l'effet est d'autant plus accentué (souvent un sentiment renforcé). Aussi : un résultat contraire à l'attente liée à cette cause (déception accrue).",
    ex: [
      { jp: "期待していただけに、結果が残念だった。", fr: "Justement parce que j'y comptais, le résultat a été d'autant plus décevant." },
      { jp: "プロだけに、技術が違う。", fr: "Justement parce que c'est un pro, la technique est différente." },
    ],
    qs: [
      { t: "fill", q: "一生懸命練習した＿＿＿、負けて悔しい。", fr: "Justement parce que je me suis entraîné dur, la défaite est d'autant plus rageante.",
        o: ["だけに", "うちに", "とたん", "わりに"], a: 0,
        e: "La cause (s'être entraîné dur) accentue d'autant le sentiment (frustration) : 〜だけに." },
      { t: "meaning", q: "「責任者だけに、彼の発言は重い」— sens ?",
        o: ["justement parce qu'il est responsable, ses propos pèsent lourd", "bien qu'il soit responsable", "à propos du responsable", "à moins qu'il soit responsable"], a: 0,
        e: "〜だけに = la qualité (être responsable) renforce d'autant la conséquence (poids de ses propos)." },
      { t: "nuance", q: "〜だけに peut aussi exprimer :",
        o: ["une déception/un effet d'autant plus marqué quand le résultat va à l'encontre de l'attente", "un objectif", "une simple succession", "une interdiction"], a: 0,
        e: "Quand l'attente liée à la cause est déçue, 〜だけに souligne que la réaction (regret, surprise) en est renforcée." },
    ],
  },

  {
    id: "g046", g: "〜ばかりに", m: "rien que parce que, pour la seule (mauvaise) raison que", f: "普通形（な形＝な／である・名＝である）+ ばかりに",
    c: "condition", lv: 2, rel: ["g045"],
    note: "Une cause unique (souvent minime ou regrettable) entraîne une conséquence NÉGATIVE. Le locuteur regrette ce lien de cause à effet. ≠ だけに (qui n'est pas spécialement négatif).",
    ex: [
      { jp: "一言多く言ったばかりに、けんかになった。", fr: "Rien que pour avoir dit un mot de trop, on s'est disputés." },
      { jp: "保証書をなくしたばかりに、修理が有料になった。", fr: "Rien que pour avoir perdu la garantie, la réparation est devenue payante." },
    ],
    qs: [
      { t: "fill", q: "うっかりサインした＿＿＿、大変なことになった。", fr: "Rien que pour avoir signé par étourderie, je me suis mis dans une situation difficile.",
        o: ["ばかりに", "だけに", "うちに", "わりに"], a: 0,
        e: "Une cause unique et regrettée entraîne un mauvais résultat : 〜ばかりに." },
      { t: "nuance", q: "Quelle différence entre 〜ばかりに et 〜だけに ?",
        o: ["ばかりに = cause unique menant à un résultat NÉGATIF regretté ; だけに = « d'autant plus », pas forcément négatif", "ils sont identiques", "だけに est familier", "ばかりに exprime le temps"], a: 0,
        e: "〜ばかりに insiste sur la cause regrettable d'un mauvais résultat. 〜だけに renforce un effet (positif ou négatif) sans ce regret systématique." },
      { t: "meaning", q: "「油断したばかりに、試合に負けた」— sens ?",
        o: ["rien que pour avoir baissé la garde, j'ai perdu le match", "bien que j'aie baissé la garde", "justement parce que je suis fort", "avant de baisser la garde"], a: 0,
        e: "〜ばかりに = pour la seule (et regrettable) raison que…, d'où un résultat fâcheux." },
    ],
  },

  {
    id: "g047", g: "〜せいで／せいか／せいだ", m: "à cause de (résultat négatif) ; peut-être à cause de", f: "普通形（な形＝な／名＝の）+ せいで／せいか",
    c: "condition", lv: 1, rel: ["g048"],
    note: "Attribue un résultat NÉGATIF à une cause (souvent pour rejeter la faute). 〜せいか = « peut-être à cause de » (cause incertaine). À opposer à 〜おかげで (cause d'un bon résultat).",
    ex: [
      { jp: "寝不足のせいで、頭が痛い。", fr: "À cause du manque de sommeil, j'ai mal à la tête." },
      { jp: "年のせいか、最近疲れやすい。", fr: "Peut-être à cause de l'âge, je me fatigue facilement ces temps-ci." },
    ],
    qs: [
      { t: "fill", q: "台風の＿＿＿、電車が止まってしまった。", fr: "À cause du typhon, les trains se sont arrêtés.",
        o: ["せいで", "おかげで", "ために", "ように"], a: 0,
        e: "Cause d'un résultat NÉGATIF (trains arrêtés) : 〜せいで." },
      { t: "nuance", q: "Pour un BON résultat (« grâce à vous, j'ai réussi »), on emploie :",
        o: ["おかげで", "せいで", "せいか", "ばかりに"], a: 0,
        e: "〜おかげで attribue un bon résultat à une cause (reconnaissance). 〜せいで est réservé aux résultats négatifs." },
      { t: "meaning", q: "「暑さのせいか、食欲がない」— que signale か ?",
        o: ["que la cause est supposée, incertaine", "que la cause est certaine", "qu'il n'y a pas de cause", "un bon résultat"], a: 0,
        e: "〜せいか = « peut-être à cause de » : le locuteur n'est pas sûr de la cause." },
    ],
  },

  /* ===================== MODALITÉ & JUGEMENT ===================== */

  {
    id: "g048", g: "〜はずだ", m: "ça devrait (logiquement), je suis quasi sûr que", f: "普通形（な形＝な／名＝の）+ はずだ",
    c: "modality", lv: 1, rel: ["g049", "g050"],
    note: "Conviction fondée sur un raisonnement/des indices : « selon toute logique, ça doit être ainsi ». Aussi 〜はずだった = « c'était censé… (mais ce ne fut pas le cas) ».",
    ex: [
      { jp: "彼は約束したから、来るはずだ。", fr: "Il a promis, donc il devrait venir." },
      { jp: "この時間なら、店はまだ開いているはずだ。", fr: "À cette heure-ci, le magasin devrait encore être ouvert." },
    ],
    qs: [
      { t: "fill", q: "メールを送ったのだから、もう届いている＿＿＿。", fr: "Puisque j'ai envoyé le mail, il devrait déjà être arrivé.",
        o: ["はずだ", "わけがない", "ものだ", "ことだ"], a: 0,
        e: "Conclusion logique fondée sur un fait (mail envoyé) : 〜はずだ." },
      { t: "meaning", q: "「鍵をかけたはずなのに、開いている」— sens de はず ?",
        o: ["je suis pourtant certain (logiquement) d'avoir fermé à clé", "j'espère avoir fermé", "je veux fermer", "je dois fermer"], a: 0,
        e: "〜はず = conviction logique. Ici contredite par les faits (« et pourtant c'est ouvert »)." },
      { t: "nuance", q: "Différence entre 〜はずだ et 〜べきだ :",
        o: ["はずだ = prévision logique (« ça doit être ») ; べきだ = obligation morale (« on doit »)", "ils sont identiques", "はずだ est un ordre", "べきだ est une supposition"], a: 0,
        e: "〜はずだ raisonne sur ce qui EST probablement vrai ; 〜べきだ porte sur ce qu'il FAUDRAIT faire (devoir)." },
    ],
  },

  {
    id: "g049", g: "〜はずがない／はずはない", m: "il est impossible que, ça ne peut pas être", f: "普通形（な形＝な／名＝の）+ はずがない",
    c: "modality", lv: 1, rel: ["g048", "g051"],
    note: "Nie fermement une possibilité sur la base d'un raisonnement : « il n'y a aucune raison logique que ce soit le cas ». Plus raisonné que わけがない (souvent plus émotionnel).",
    ex: [
      { jp: "あんなに練習した彼が、負けるはずがない。", fr: "Lui qui s'est tant entraîné, il est impossible qu'il perde." },
      { jp: "そんな高い物が売れるはずがない。", fr: "Il est impossible qu'une chose aussi chère se vende." },
    ],
    qs: [
      { t: "fill", q: "正直な彼が、嘘をつく＿＿＿。", fr: "Lui qui est honnête, il est impossible qu'il mente.",
        o: ["はずがない", "はずだ", "に違いない", "ものだ"], a: 0,
        e: "Négation logique forte : 〜はずがない = « il n'y a aucune raison que… »." },
      { t: "meaning", q: "「彼女がそんなことを言うはずがない」— sens ?",
        o: ["il est impossible qu'elle dise une telle chose", "elle devrait dire cela", "elle doit l'avoir dit", "il faut qu'elle le dise"], a: 0,
        e: "〜はずがない = exclusion logique d'une possibilité." },
      { t: "nuance", q: "〜はずがない vs 〜に違いない :",
        o: ["はずがない nie (impossible) ; に違いない affirme avec certitude (« ce doit forcément être »)", "ils sont synonymes", "はずがない affirme", "に違いない nie"], a: 0,
        e: "Ce sont deux pôles opposés de la conviction : 〜に違いない (forcément vrai) ↔ 〜はずがない (forcément faux)." },
    ],
  },

  {
    id: "g050", g: "〜わけだ", m: "donc c'est que, ce qui explique que, voilà pourquoi", f: "普通形（な形＝な／である・名＝である／な／という）+ わけだ",
    c: "modality", lv: 1, rel: ["g051", "g052"],
    note: "Tire une conclusion logique naturelle de ce qui précède (« cela revient à dire que… », « ça explique que… »). Souvent une prise de conscience : « ah, c'est donc pour ça ! ».",
    ex: [
      { jp: "3年も日本にいたのか。日本語が上手なわけだ。", fr: "Tu es resté 3 ans au Japon ? Pas étonnant que ton japonais soit bon." },
      { jp: "計算すると、一人千円払えばいいわけだ。", fr: "Si on calcule, cela revient donc à payer mille yens par personne." },
    ],
    qs: [
      { t: "fill", q: "エアコンが壊れているのか。どうりで暑い＿＿＿。", fr: "La clim est en panne ? Voilà pourquoi il fait si chaud.",
        o: ["わけだ", "わけがない", "わけにはいかない", "はずがない"], a: 0,
        e: "Conclusion/explication logique de ce qu'on vient d'apprendre : 〜わけだ (« voilà pourquoi… »). Souligné par どうりで." },
      { t: "meaning", q: "「彼はパリ育ちだ。フランス語が話せるわけだ」— sens de わけだ ?",
        o: ["cela explique donc qu'il parle français", "il ne peut pas parler français", "il ne devrait pas parler français", "il faut qu'il parle français"], a: 0,
        e: "〜わけだ = conséquence logique naturelle : « d'où le fait que… »." },
      { t: "nuance", q: "Quel mot accompagne souvent 〜わけだ pour marquer « voilà pourquoi » ?",
        o: ["どうりで", "もしかして", "まさか", "せめて"], a: 0,
        e: "どうりで（道理で）+ 〜わけだ exprime « ça explique donc ; pas étonnant que… »." },
    ],
  },

  {
    id: "g051", g: "〜わけではない／わけでもない", m: "ce n'est pas (forcément) que, cela ne veut pas dire que", f: "普通形（な形＝な／という・名＝という）+ わけではない",
    c: "modality", lv: 1, rel: ["g050", "g052"],
    note: "Nie partiellement une déduction ou une impression : « ce n'est pas (totalement) le cas que… ». Négation nuancée, pas absolue (≠ ない qui nie complètement).",
    ex: [
      { jp: "嫌いなわけではないが、あまり食べない。", fr: "Ce n'est pas que je n'aime pas, mais je n'en mange pas beaucoup." },
      { jp: "高ければ必ず良いというわけではない。", fr: "Ce n'est pas parce que c'est cher que c'est forcément bon." },
    ],
    qs: [
      { t: "fill", q: "毎日料理をするが、料理が好きという＿＿＿。", fr: "Je cuisine tous les jours, mais ce n'est pas pour autant que j'aime cuisiner.",
        o: ["わけではない", "わけにはいかない", "に違いない", "はずだ"], a: 0,
        e: "Négation nuancée d'une déduction (« cuisiner ≠ aimer cuisiner ») : 〜わけではない." },
      { t: "meaning", q: "「お金がないわけではないが、無駄遣いはしたくない」— sens ?",
        o: ["ce n'est pas que je manque d'argent, mais je ne veux pas gaspiller", "je n'ai absolument pas d'argent", "je dois dépenser de l'argent", "il est impossible que j'aie de l'argent"], a: 0,
        e: "〜わけではない atténue : « ce n'est pas (exactement) que… »." },
      { t: "nuance", q: "Quelle est la différence entre 「行きたくない」 et 「行きたくないわけではない」 ?",
        o: ["le 1er nie nettement l'envie ; le 2e dit « ce n'est pas que je ne veux pas » (envie partielle/nuancée)", "ils sont identiques", "le 2e est une obligation", "le 2e est plus négatif"], a: 0,
        e: "〜わけではない transforme une négation tranchée en négation atténuée/partielle." },
    ],
  },

  {
    id: "g052", g: "〜わけにはいかない", m: "on ne peut pas (se permettre de), il n'est pas envisageable de", f: "Verbe-dico／ない + わけにはいかない",
    c: "modality", lv: 1, rel: ["g055", "g056"],
    note: "Impossibilité d'ordre SOCIAL, MORAL ou psychologique (pas une incapacité physique) : on ne peut pas le faire à cause des circonstances, des obligations, de la conscience. À la forme négative : 〜ないわけにはいかない = on ne peut pas NE PAS (il faut).",
    ex: [
      { jp: "大事な会議だから、休むわけにはいかない。", fr: "C'est une réunion importante, je ne peux pas me permettre d'être absent." },
      { jp: "約束したから、行かないわけにはいかない。", fr: "J'ai promis, je ne peux donc pas ne pas y aller." },
    ],
    qs: [
      { t: "fill", q: "みんなが頑張っているのに、自分だけ帰る＿＿＿。", fr: "Alors que tout le monde se donne du mal, je ne peux pas rentrer tout seul.",
        o: ["わけにはいかない", "わけではない", "に違いない", "はずだ"], a: 0,
        e: "Impossibilité morale/sociale (par égard pour les autres) : 〜わけにはいかない." },
      { t: "nuance", q: "「泳げないので、わけにはいかない」 est INCORRECT. Pourquoi ?",
        o: ["わけにはいかない exprime une impossibilité morale/sociale, pas une incapacité physique", "le verbe est mal placé", "il faut un nom devant", "c'est trop poli"], a: 0,
        e: "Pour une INCAPACITÉ (ne pas savoir nager), on dit 泳げない. 〜わけにはいかない vise une impossibilité due aux circonstances/à la conscience, pas au manque de capacité." },
      { t: "meaning", q: "「秘密だから、教えるわけにはいかない」— sens ?",
        o: ["c'est un secret, je ne peux pas (me permettre de) le dire", "c'est un secret, je dois le dire", "ce n'est pas un secret", "je peux le dire facilement"], a: 0,
        e: "〜わけにはいかない = il n'est pas envisageable (moralement/socialement) de le faire." },
    ],
  },

  {
    id: "g053", g: "〜に違いない", m: "ce doit forcément être, à n'en pas douter", f: "普通形（な形・名は語幹）+ に違いない",
    c: "modality", lv: 1, rel: ["g049"],
    note: "Forte conviction subjective fondée sur des indices : « j'en suis quasi certain ». Plus affirmatif que 〜だろう, moins catégorique qu'une certitude objective.",
    ex: [
      { jp: "電気が消えている。もう寝たに違いない。", fr: "La lumière est éteinte. Il doit forcément dormir déjà." },
      { jp: "この字は彼女が書いたに違いない。", fr: "Cette écriture est forcément la sienne." },
    ],
    qs: [
      { t: "fill", q: "あんなに荷物が多いのだから、旅行に行く＿＿＿。", fr: "Avec autant de bagages, il part forcément en voyage.",
        o: ["に違いない", "わけにはいかない", "はずがない", "わけではない"], a: 0,
        e: "Conviction forte fondée sur un indice (les bagages) : 〜に違いない." },
      { t: "meaning", q: "「彼は何か隠しているに違いない」— sens ?",
        o: ["il cache forcément quelque chose (j'en suis convaincu)", "il ne cache rien", "il devrait cacher quelque chose", "il faut qu'il cache quelque chose"], a: 0,
        e: "〜に違いない = certitude subjective : « à n'en pas douter »." },
      { t: "nuance", q: "Classez du plus au moins sûr : だろう / に違いない / かもしれない.",
        o: ["に違いない > だろう > かもしれない", "かもしれない > だろう > に違いない", "だろう > に違いない > かもしれない", "tous équivalents"], a: 0,
        e: "Degré de conviction décroissant : 〜に違いない (quasi certain) > 〜だろう (probable) > 〜かもしれない (possible)." },
    ],
  },

  {
    id: "g054", g: "〜べきだ／べきではない", m: "on devrait, il faudrait / on ne devrait pas", f: "Verbe-dico + べきだ（するべき＝すべきも可）",
    c: "modality", lv: 1, rel: ["g048"],
    note: "Devoir moral, conseil fort fondé sur ce qui est juste/normal en société. N'exprime pas une règle légale absolue (≠ なければならない). Pas pour soi avec une nuance d'ordre extérieur.",
    ex: [
      { jp: "約束は守るべきだ。", fr: "On devrait tenir ses promesses." },
      { jp: "人の悪口を言うべきではない。", fr: "On ne devrait pas dire du mal des autres." },
    ],
    qs: [
      { t: "fill", q: "風邪なら、無理せず休む＿＿＿。", fr: "Si tu es enrhumé, tu devrais te reposer sans forcer.",
        o: ["べきだ", "わけにはいかない", "に違いない", "はずがない"], a: 0,
        e: "Conseil/devoir moral : 〜べきだ." },
      { t: "nuance", q: "Différence entre 〜べきだ et 〜なければならない :",
        o: ["べきだ = devoir moral/conseil (« il faudrait ») ; なければならない = nécessité/obligation incontournable (« il faut absolument »)", "ils sont identiques", "べきだ est plus fort", "なければならない est un conseil"], a: 0,
        e: "〜べきだ relève du jugement moral (ce qui est juste). 〜なければならない exprime une obligation concrète/inévitable." },
      { t: "usage", q: "Forme correcte de la négation de 〜べきだ :",
        o: ["言うべきではない", "言わないべきだ", "言うべきだない", "言うまいべき"], a: 0,
        e: "La négation se fait sur べき : 〜べきではない. (On ne met pas le verbe au négatif devant べき.)" },
    ],
  },

  {
    id: "g055", g: "〜ざるを得ない", m: "ne pas pouvoir faire autrement que, être contraint de", f: "Verbe-ない形の語幹 + ざるを得ない（する→せざるを得ない）",
    c: "modality", lv: 2, rel: ["g056", "g052"],
    note: "On est CONTRAINT par les circonstances de faire qqch qu'on ne souhaitait pas. Registre écrit/formel. Exception : する → せざるを得ない.",
    ex: [
      { jp: "台風のため、試合は中止せざるを得ない。", fr: "À cause du typhon, on est contraint d'annuler le match." },
      { jp: "上司の命令だから、従わざるを得ない。", fr: "C'est un ordre du supérieur, je suis donc forcé d'obéir." },
    ],
    qs: [
      { t: "fill", q: "証拠がこれだけあれば、認め＿＿＿。", fr: "Avec autant de preuves, on est bien forcé de l'admettre.",
        o: ["ざるを得ない", "わけにはいかない", "に違いない", "はずがない"], a: 0,
        e: "Contrainte imposée par les circonstances (les preuves) : 〜ざるを得ない." },
      { t: "usage", q: "Forme correcte de する avec 〜ざるを得ない :",
        o: ["せざるを得ない", "しざるを得ない", "するざるを得ない", "さざるを得ない"], a: 0,
        e: "Exception irrégulière : する → せざるを得ない." },
      { t: "meaning", q: "「赤字続きで、閉店せざるを得なかった」— sens ?",
        o: ["déficits à répétition : on a été contraints de fermer", "on a fermé avec plaisir", "on n'a pas fermé", "on a failli fermer"], a: 0,
        e: "〜ざるを得ない = être obligé/contraint (sans autre choix possible)." },
    ],
  },

  {
    id: "g056", g: "〜ないわけにはいかない", m: "on ne peut pas ne pas, on est bien obligé de", f: "Verbe-ない + わけにはいかない",
    c: "modality", lv: 2, rel: ["g052", "g055"],
    note: "Double négation = obligation due à un devoir social/moral : « il n'est pas possible de NE PAS le faire ». Souvent à contrecœur, par devoir.",
    ex: [
      { jp: "招待されたから、出席しないわけにはいかない。", fr: "Comme je suis invité, je ne peux pas ne pas y assister." },
      { jp: "親に頼まれては、手伝わないわけにはいかない。", fr: "Mes parents me l'ayant demandé, je ne peux pas ne pas aider." },
    ],
    qs: [
      { t: "fill", q: "世話になった人の頼みだから、引き受け＿＿＿。", fr: "C'est la demande d'une personne à qui je dois beaucoup, je ne peux donc pas refuser.",
        o: ["ないわけにはいかない", "るわけにはいかない", "るはずがない", "ないことはない"], a: 0,
        e: "Obligation morale (par reconnaissance) : 〜ないわけにはいかない = « je suis bien obligé d'accepter »." },
      { t: "meaning", q: "「みんなの前で約束した以上、守らないわけにはいかない」— sens ?",
        o: ["je suis obligé de tenir parole (impossible de ne pas tenir)", "je peux ne pas tenir parole", "je ne dois pas tenir parole", "il est impossible de tenir parole"], a: 0,
        e: "Double négation 〜ないわけにはいかない = obligation : « impossible de ne pas… »." },
      { t: "nuance", q: "〜ないわけにはいかない et 〜ざるを得ない : différence de registre/nuance ?",
        o: ["ないわけにはいかない insiste sur le devoir social ; ざるを得ない est plus écrit et insiste sur la contrainte des circonstances", "ils sont identiques en tout", "ざるを得ない est familier", "le premier exprime un choix libre"], a: 0,
        e: "Sens proche (obligation). 〜ないわけにはいかない = devoir moral/social (souvent à contrecœur). 〜ざるを得ない = contrainte des circonstances, registre plus écrit." },
    ],
  },

  {
    id: "g057", g: "〜かねない", m: "risque de, pourrait bien (résultat fâcheux)", f: "Verbe-ます語幹 + かねない",
    c: "modality", lv: 2, rel: ["g058"],
    note: "Exprime la CRAINTE qu'un mauvais résultat se produise : « il se pourrait bien que… (et ce serait grave) ». Ne s'emploie qu'avec des conséquences négatives.",
    ex: [
      { jp: "そんな無理をすると、体を壊しかねない。", fr: "À tant forcer, tu risques bien de te ruiner la santé." },
      { jp: "うわさを信じると、誤解を招きかねない。", fr: "Croire les rumeurs risque de provoquer des malentendus." },
    ],
    qs: [
      { t: "fill", q: "スピードを出しすぎると、事故を起こし＿＿＿。", fr: "À rouler trop vite, on risque bien de provoquer un accident.",
        o: ["かねない", "かねる", "得る", "わけがない"], a: 0,
        e: "Crainte d'un mauvais résultat (accident) : Verbe-ます語幹 + かねない." },
      { t: "nuance", q: "Pourquoi 「合格しかねない」 sonne-t-il bizarre ?",
        o: ["かねない ne s'emploie que pour un résultat NÉGATIF/redouté", "le verbe est mal conjugué", "il manque une particule", "かねない est trop poli"], a: 0,
        e: "〜かねない n'accompagne que des conséquences fâcheuses. Réussir étant positif, la phrase est incohérente." },
      { t: "meaning", q: "「この問題は大事故につながりかねない」— sens ?",
        o: ["ce problème pourrait bien mener à un grave accident", "ce problème ne mènera jamais à un accident", "ce problème a causé un accident", "ce problème doit causer un accident"], a: 0,
        e: "〜かねない = il y a un risque réel que (le mauvais résultat) survienne." },
    ],
  },

  {
    id: "g058", g: "〜かねる", m: "ne pas pouvoir se résoudre à, avoir du mal à (poli)", f: "Verbe-ます語幹 + かねる",
    c: "modality", lv: 2, rel: ["g057"],
    note: "Impossibilité POLIE/psychologique de faire qqch (même si physiquement possible). Très courant dans le service client pour refuser avec tact : 〜かねます.",
    ex: [
      { jp: "その件については、私では判断しかねます。", fr: "Sur ce point, il m'est difficile de me prononcer." },
      { jp: "そのご要望にはお応えしかねます。", fr: "Il nous est difficile de répondre à cette demande. (refus poli)" },
    ],
    qs: [
      { t: "fill", q: "申し訳ございませんが、返品はお受けし＿＿＿。", fr: "Nous sommes désolés, mais il nous est difficile d'accepter les retours.",
        o: ["かねます", "かねません", "得ます", "ざるを得ません"], a: 0,
        e: "Refus poli/impossibilité de se résoudre à : Verbe-ます語幹 + かねます." },
      { t: "nuance", q: "Attention au piège : 〜かねる et 〜かねない ont des sens…",
        o: ["opposés : かねる = « ne pas pouvoir faire » ; かねない = « risquer de faire (qqch de mal) »", "identiques", "tous deux positifs", "tous deux des refus"], a: 0,
        e: "Piège classique du N2 : 〜かねる = impossibilité (poli) ; 〜かねない = risque qu'un mal arrive. Sens opposés !" },
      { t: "meaning", q: "「賛成しかねる」— sens ?",
        o: ["j'ai du mal à approuver / je ne peux me résoudre à approuver", "je risque d'approuver", "je dois approuver", "j'approuve avec joie"], a: 0,
        e: "〜かねる = impossibilité polie : « je ne peux pas vraiment approuver »." },
    ],
  },

  /* ===================== EXPRESSIONS & EMPHASE ===================== */

  {
    id: "g059", g: "〜どころか", m: "loin de, bien au contraire ; et même (à plus forte raison)", f: "普通形（な形＝な／名は直接）+ どころか",
    c: "express", lv: 1, rel: ["g060", "g066"],
    note: "Renverse l'attente : la réalité est à l'opposé de ce qu'on supposait, souvent en plus marqué. « Loin d'être A, c'est même B (le contraire) ».",
    ex: [
      { jp: "謝るどころか、彼は逆に怒り出した。", fr: "Loin de s'excuser, il s'est au contraire mis en colère." },
      { jp: "貯金どころか、借金まである。", fr: "Loin d'avoir des économies, il a même des dettes." },
    ],
    qs: [
      { t: "fill", q: "薬を飲んだのに、よくなる＿＿＿、症状が悪化した。", fr: "Bien que j'aie pris le médicament, loin d'aller mieux, mes symptômes se sont aggravés.",
        o: ["どころか", "わりに", "ものの", "うえに"], a: 0,
        e: "Renversement de l'attente (au lieu d'aller mieux, ça empire) : 〜どころか." },
      { t: "meaning", q: "「彼は英語どころか、日本語も話せない」— sens ?",
        o: ["loin de (parler) anglais, il ne sait même pas le japonais", "il parle anglais et japonais", "il parle anglais mais pas japonais", "il préfère l'anglais au japonais"], a: 0,
        e: "〜どころか accentue : « bien loin de X, même Y (plus basique) n'est pas le cas »." },
      { t: "nuance", q: "L'idée centrale de 〜どころか est :",
        o: ["contredire/dépasser l'attente, souvent dans le sens inverse", "exprimer une cause", "marquer le temps", "demander la permission"], a: 0,
        e: "〜どころか signale que la réalité est bien différente (souvent opposée) de ce qu'on attendait." },
    ],
  },

  {
    id: "g060", g: "〜にすぎない", m: "n'être rien de plus que, ne… que, simplement", f: "普通形（名・な形は語幹）+ にすぎない",
    c: "express", lv: 1, rel: ["g061", "g059"],
    note: "Minimise : « ce n'est rien de plus que… », « ce n'est qu'un(e)… ». Souligne le caractère mineur, limité ou insignifiant de qqch.",
    ex: [
      { jp: "それは言い訳にすぎない。", fr: "Ce n'est rien d'autre qu'une excuse." },
      { jp: "私は事実を述べたにすぎない。", fr: "Je n'ai fait qu'énoncer les faits." },
    ],
    qs: [
      { t: "fill", q: "彼はただの知り合い＿＿＿、友達ではない。", fr: "Il n'est qu'une simple connaissance, pas un ami.",
        o: ["にすぎない", "に違いない", "にほかならない", "わけがない"], a: 0,
        e: "Minimisation (« rien de plus qu'une connaissance ») : 〜にすぎない." },
      { t: "meaning", q: "「これは個人的な意見にすぎません」— sens ?",
        o: ["ce n'est rien de plus qu'un avis personnel", "c'est forcément un avis personnel", "ce n'est pas un avis personnel", "c'est précisément l'avis personnel"], a: 0,
        e: "〜にすぎない = « ce n'est qu'un… », pour relativiser/minimiser." },
      { t: "nuance", q: "〜にすぎない et 〜にほかならない sont :",
        o: ["opposés en effet : すぎない minimise ; にほかならない affirme avec force « c'est exactement cela »", "synonymes", "tous deux des minimisations", "tous deux temporels"], a: 0,
        e: "〜にすぎない rabaisse (« ce n'est que… ») ; 〜にほかならない insiste (« ce n'est rien d'autre que CELA »)." },
    ],
  },

  {
    id: "g061", g: "〜にほかならない", m: "n'est rien d'autre que, c'est précisément, c'est bel et bien", f: "名詞 + にほかならない",
    c: "express", lv: 2, rel: ["g060"],
    note: "Affirme avec force et conviction l'identité d'une chose : « cela, c'est exactement / rien d'autre que… ». Registre soutenu, souvent dans une argumentation.",
    ex: [
      { jp: "成功は努力の結果にほかならない。", fr: "Le succès n'est rien d'autre que le fruit de l'effort." },
      { jp: "この決定は責任逃れにほかならない。", fr: "Cette décision n'est rien d'autre qu'une fuite des responsabilités." },
    ],
    qs: [
      { t: "fill", q: "彼が成功できたのは、努力の賜物＿＿＿。", fr: "S'il a réussi, ce n'est rien d'autre que le fruit de ses efforts.",
        o: ["にほかならない", "にすぎない", "わけがない", "おそれがある"], a: 0,
        e: "Affirmation forte de l'identité/la cause unique : 〜にほかならない." },
      { t: "meaning", q: "「健康こそ財産にほかならない」— sens ?",
        o: ["la santé est précisément (rien d'autre que) la richesse", "la santé n'est pas la richesse", "la santé n'est qu'un peu de richesse", "la santé risque d'être la richesse"], a: 0,
        e: "〜にほかならない = identification emphatique : « X, c'est bel et bien Y »." },
      { t: "nuance", q: "Le ton de 〜にほかならない est :",
        o: ["affirmatif, convaincu, argumentatif (soutenu)", "hésitant", "familier", "interrogatif"], a: 0,
        e: "Tournure soutenue d'affirmation catégorique, fréquente à l'écrit argumentatif." },
    ],
  },

  {
    id: "g062", g: "〜ものだ", m: "c'est ainsi (vérité générale) ; on devrait ; autrefois (réminiscence)", f: "Verbe-dico／た／い形／な形な + ものだ",
    c: "express", lv: 1, rel: ["g063"],
    note: "Polyvalent : (1) vérité générale/loi de la nature (年を取ると忘れっぽくなるものだ) ; (2) ce qui se doit socialement (挨拶はするものだ) ; (3) avec V-た : nostalgie (よく遊んだものだ). 〜ものではない = « on ne devrait pas ».",
    ex: [
      { jp: "時間が経てば、悲しみも薄れるものだ。", fr: "Avec le temps, le chagrin s'estompe, c'est ainsi." },
      { jp: "子供の頃、よくこの川で泳いだものだ。", fr: "Enfant, je nageais souvent dans cette rivière (nostalgie)." },
    ],
    qs: [
      { t: "fill", q: "年を取ると、昔のことが懐かしくなる＿＿＿。", fr: "En vieillissant, on devient nostalgique du passé, c'est ainsi.",
        o: ["ものだ", "ことだ", "わけだ", "ところだ"], a: 0,
        e: "Vérité générale sur la nature humaine : 〜ものだ." },
      { t: "meaning", q: "「学生時代はよく徹夜したものだ」— sens de ものだ ici ?",
        o: ["réminiscence : « j'avais l'habitude de… » (nostalgie)", "obligation présente", "vérité scientifique", "ordre"], a: 0,
        e: "Avec un verbe au passé (徹夜した), 〜ものだ exprime le souvenir nostalgique d'une habitude révolue." },
      { t: "nuance", q: "「人の物を黙って使うものではない」— sens de ものではない ?",
        o: ["on ne devrait pas (faire cela) — règle morale", "ce n'est pas un objet", "ce n'est pas possible", "ce n'est pas nostalgique"], a: 0,
        e: "〜ものではない = « cela ne se fait pas / on ne devrait pas », norme sociale/morale." },
    ],
  },

  {
    id: "g063", g: "〜ことだ", m: "le mieux est de, tu devrais (conseil) ; comme c'est… ! (émotion)", f: "Verbe-dico／ない + ことだ",
    c: "express", lv: 2, rel: ["g062"],
    note: "(1) Conseil direct fondé sur une situation précise : « le mieux pour toi, c'est de… ». Plus personnel/ponctuel que べきだ. (2) い形／な形 + ことだ = exclamation affective (なんて美しいことだ).",
    ex: [
      { jp: "上手になりたければ、毎日練習することだ。", fr: "Si tu veux progresser, le mieux est de t'entraîner chaque jour." },
      { jp: "嫌なら、はっきり断ることだ。", fr: "Si ça ne te plaît pas, le mieux est de refuser clairement." },
    ],
    qs: [
      { t: "fill", q: "風邪を早く治したいなら、ゆっくり休む＿＿＿。", fr: "Si tu veux guérir vite de ton rhume, le mieux est de bien te reposer.",
        o: ["ことだ", "ものだ", "わけだ", "ところだ"], a: 0,
        e: "Conseil adapté à une situation précise : 〜ことだ." },
      { t: "nuance", q: "Différence entre 〜ことだ (conseil) et 〜ものだ (vérité générale) :",
        o: ["ことだ = conseil ponctuel à qqn dans une situation donnée ; ものだ = vérité/norme générale", "ils sont identiques", "ことだ exprime la nostalgie", "ものだ est un ordre"], a: 0,
        e: "〜ことだ vise un conseil concret et personnel ; 〜ものだ énonce une généralité ou une norme valable pour tous." },
      { t: "meaning", q: "「合格したいなら、努力することだ」— sens ?",
        o: ["si tu veux réussir, le mieux est de faire des efforts", "tu as forcément fait des efforts", "tu fais des efforts par habitude", "tu te souviens d'avoir fait des efforts"], a: 0,
        e: "〜ことだ = recommandation directe : « ce qu'il te faut faire, c'est… »." },
    ],
  },

  {
    id: "g064", g: "〜ずにはいられない／ないではいられない", m: "ne pas pouvoir s'empêcher de", f: "Verbe-ない形の語幹 + ずにはいられない（する→せず）",
    c: "express", lv: 2, rel: ["g057"],
    note: "Une émotion/impulsion irrépressible pousse à agir : « impossible de ne pas… ». L'action échappe au contrôle volontaire. Exception : する → せずにはいられない.",
    ex: [
      { jp: "あの映画を見ると、泣かずにはいられない。", fr: "Quand je vois ce film, je ne peux m'empêcher de pleurer." },
      { jp: "あまりにおかしくて、笑わずにはいられなかった。", fr: "C'était si drôle que je n'ai pas pu m'empêcher de rire." },
    ],
    qs: [
      { t: "fill", q: "困っている人を見ると、助け＿＿＿。", fr: "Quand je vois une personne en difficulté, je ne peux m'empêcher de l'aider.",
        o: ["ずにはいられない", "かねない", "わけにはいかない", "ざるを得ない"], a: 0,
        e: "Impulsion irrépressible (aider) : 〜ずにはいられない." },
      { t: "usage", q: "Forme correcte de する avec 〜ずにはいられない :",
        o: ["せずにはいられない", "しずにはいられない", "せざるにはいられない", "するずにはいられない"], a: 0,
        e: "Exception : する → せず → せずにはいられない." },
      { t: "nuance", q: "Différence de nuance entre 〜ずにはいられない et 〜ざるを得ない :",
        o: ["ずにはいられない = impulsion émotionnelle interne ; ざるを得ない = contrainte externe des circonstances", "ils sont identiques", "le premier est formel/écrit", "le second est émotionnel"], a: 0,
        e: "〜ずにはいられない vient d'un élan intérieur incontrôlable ; 〜ざるを得ない vient d'une contrainte extérieure (« pas le choix »)." },
    ],
  },

  {
    id: "g065", g: "〜というより", m: "plutôt que de dire… ; ou plutôt", f: "普通形（名・な形は語幹も可）+ というより",
    c: "express", lv: 2, rel: ["g060"],
    note: "Rectifie une formulation en proposant une description plus exacte : « plutôt que A, ce serait plus juste de dire B ».",
    ex: [
      { jp: "彼は優しいというより、優柔不断だ。", fr: "Plutôt que gentil, il est indécis." },
      { jp: "今日は涼しいというより、寒いくらいだ。", fr: "Aujourd'hui, plutôt que frais, c'est presque froid." },
    ],
    qs: [
      { t: "fill", q: "あれは趣味＿＿＿、もう仕事のレベルだ。", fr: "Ça, plutôt qu'un loisir, c'est déjà du niveau professionnel.",
        o: ["というより", "にすぎず", "どころか", "に限らず"], a: 0,
        e: "Rectification vers une description plus juste : 〜というより." },
      { t: "meaning", q: "「青というより、緑に近い色だ」— sens ?",
        o: ["plutôt que bleu, c'est une couleur proche du vert", "c'est bleu et vert", "ni bleu ni vert", "c'est bleu donc vert"], a: 0,
        e: "〜というより propose une formulation plus exacte que la première (« vert » plutôt que « bleu »)." },
      { t: "order", q: "Reconstituez la phrase. Quel segment va à la place ★ ?",
        frame: "彼の態度は ＿＿ ＿★＿ ＿＿ 失礼だ。",
        o: ["正直", "という", "より", "むしろ"], a: 2,
        e: "Ordre : 正直 → という → より → むしろ。「正直というより、むしろ失礼だ」= « plutôt qu'honnête, c'est carrément impoli ». À ★ : より." },
    ],
  },

  {
    id: "g066", g: "〜どころではない", m: "ce n'est pas le moment de, on n'est pas en état de", f: "Verbe-dico／名 + どころではない",
    c: "express", lv: 2, rel: ["g059"],
    note: "Les circonstances rendent impossible/déplacé de faire qqch : « avec ce qui se passe, pas question de… ». La situation est bien trop grave/pressante pour cela.",
    ex: [
      { jp: "仕事が忙しくて、旅行どころではない。", fr: "Je suis trop occupé par le travail : pas question de voyager." },
      { jp: "試験前で、遊んでいるどころではない。", fr: "Avec l'examen qui approche, ce n'est pas le moment de s'amuser." },
    ],
    qs: [
      { t: "fill", q: "親が風邪で寝込んでいて、お正月を祝う＿＿＿。", fr: "Avec mes parents alités à cause d'un rhume, ce n'est pas le moment de fêter le Nouvel An.",
        o: ["どころではない", "どころか", "ものだ", "ことだ"], a: 0,
        e: "Les circonstances interdisent l'activité : 〜どころではない." },
      { t: "meaning", q: "「お金がなくて、外食どころではない」— sens ?",
        o: ["sans argent, manger dehors est hors de question", "je mange dehors malgré tout", "je préfère manger dehors", "manger dehors est le mieux"], a: 0,
        e: "〜どころではない = la situation rend la chose impensable/déplacée." },
      { t: "nuance", q: "Distinguer 〜どころではない de 〜どころか :",
        o: ["どころではない = « pas le moment de » (situation qui empêche) ; どころか = « loin de…, au contraire » (renversement d'attente)", "ils sont identiques", "どころか est plus poli", "どころではない exprime le temps futur"], a: 0,
        e: "〜どころではない insiste sur l'impossibilité due aux circonstances ; 〜どころか renverse une attente (« bien au contraire »)." },
    ],
  },

  /* ===================== AJOUTS — PARTICULES & LOCUTIONS ===================== */

  {
    id: "g067", g: "〜に沿って", m: "le long de ; conformément à, selon", f: "Nom + に沿って／に沿った＋Nom",
    c: "particle", lv: 2, rel: ["g007", "g011"],
    note: "Deux sens : (1) spatial, « le long de » (川に沿って) ; (2) abstrait, « en suivant » une ligne directrice, un règlement, des attentes (方針に沿って).",
    ex: [
      { jp: "川に沿って、桜並木が続いている。", fr: "Le long de la rivière s'étend une allée de cerisiers." },
      { jp: "会社の方針に沿って、計画を立て直した。", fr: "J'ai revu le plan conformément à la politique de l'entreprise." },
    ],
    qs: [
      { t: "fill", q: "お客様のご要望＿＿＿、商品を改良いたしました。", fr: "Nous avons amélioré le produit conformément aux souhaits de nos clients.",
        o: ["に沿って", "において", "について", "に際して"], a: 0,
        e: "« En suivant / conformément aux souhaits » → 〜に沿って (suivre une ligne directrice)." },
      { t: "meaning", q: "「線路に沿って歩いた」— sens de に沿って ?",
        o: ["le long de (la voie ferrée)", "à cause de", "au sujet de", "malgré"], a: 0,
        e: "Emploi spatial : marcher « le long » de la voie." },
      { t: "nuance", q: "Choisir « conformément aux directives » :",
        o: ["ガイドラインに沿って", "ガイドラインについて", "ガイドラインとして", "ガイドラインにとって"], a: 0,
        e: "Suivre/respecter une directive → に沿って." },
    ],
  },

  {
    id: "g068", g: "〜のもとで／〜のもとに", m: "sous (la direction, l'influence, la condition de)", f: "Nom + のもとで／のもとに",
    c: "particle", lv: 2, rel: ["g005", "g069"],
    note: "Indique l'environnement, la condition ou l'autorité sous laquelle une action a lieu. のもとで = lieu/cadre d'action (指導のもとで) ; のもとに = condition/principe (合意のもとに).",
    ex: [
      { jp: "先生の指導のもとで、研究を進めた。", fr: "J'ai mené ma recherche sous la direction de mon professeur." },
      { jp: "両者の合意のもとに、契約が結ばれた。", fr: "Le contrat a été conclu sur la base d'un accord mutuel." },
    ],
    qs: [
      { t: "fill", q: "厳しい規則＿＿＿、選手たちは生活している。", fr: "Les athlètes vivent sous des règles strictes.",
        o: ["のもとで", "について", "において", "に際して"], a: 0,
        e: "« Sous (l'autorité de) des règles » → 〜のもとで." },
      { t: "meaning", q: "「青空のもとで運動会が開かれた」— sens ?",
        o: ["sous un ciel bleu (cadre)", "à propos du ciel bleu", "malgré le ciel bleu", "à cause du ciel bleu"], a: 0,
        e: "のもとで indique le cadre/environnement de l'action." },
      { t: "order", q: "Reconstituez la phrase. Quel segment va à la place ★ ?",
        frame: "親 ＿＿ ＿★＿ ＿＿ 子どもは育った。",
        o: ["の", "保護", "のもとで", "温かい"], a: 1,
        e: "Ordre : 温かい → 親 → の → 保護のもとで …「温かい親の保護のもとで」. À ★ : 保護." },
    ],
  },

  {
    id: "g069", g: "〜を込めて", m: "avec (un sentiment), en y mettant (tout son…)", f: "Nom + を込めて／を込めた＋Nom",
    c: "particle", lv: 2, rel: ["g068"],
    note: "S'emploie avec un nom de sentiment/intention (心, 愛, 感謝, 願い, 力) : agir « en y mettant » ce sentiment.",
    ex: [
      { jp: "感謝の気持ちを込めて、手紙を書いた。", fr: "J'ai écrit une lettre en y mettant toute ma gratitude." },
      { jp: "心を込めて作った料理です。", fr: "C'est un plat préparé avec tout mon cœur." },
    ],
    qs: [
      { t: "fill", q: "母への愛＿＿＿、セーターを編んだ。", fr: "J'ai tricoté un pull avec tout mon amour pour ma mère.",
        o: ["を込めて", "について", "に沿って", "として"], a: 0,
        e: "« En y mettant un sentiment (l'amour) » → 〜を込めて." },
      { t: "meaning", q: "「願いを込めて鐘を鳴らす」— sens ?",
        o: ["sonner la cloche en y mettant un vœu", "sonner à propos d'un vœu", "sonner malgré un vœu", "sonner à cause d'un vœu"], a: 0,
        e: "を込めて = en y mettant le sentiment/le vœu." },
      { t: "usage", q: "Avec quel type de nom 〜を込めて s'emploie-t-il typiquement ?",
        o: ["un sentiment / une intention (心, 感謝, 力)", "un lieu", "une date", "un nombre"], a: 0,
        e: "を込めて se combine avec un nom de sentiment ou d'intention." },
    ],
  },

  {
    id: "g070", g: "〜に加えて", m: "en plus de, outre", f: "Nom + に加えて／に加え",
    c: "particle", lv: 2, rel: ["g075", "g078"],
    note: "Ajoute un élément de même nature : « à X s'ajoute Y ». Souvent un cumul de circonstances (風に加えて雨も = au vent s'ajoute la pluie).",
    ex: [
      { jp: "強い風に加えて、雨も降り出した。", fr: "En plus du vent fort, il s'est mis à pleuvoir." },
      { jp: "彼は英語に加えて、フランス語も話せる。", fr: "Il parle français en plus de l'anglais." },
    ],
    qs: [
      { t: "fill", q: "授業料＿＿＿、教材費も必要だ。", fr: "Outre les frais de scolarité, il faut aussi payer le matériel.",
        o: ["に加えて", "に対して", "に反して", "について"], a: 0,
        e: "Cumul « X plus Y » → 〜に加えて." },
      { t: "meaning", q: "「経験に加えて、知識も豊富だ」— sens ?",
        o: ["en plus de l'expérience, riche en savoir", "contrairement à l'expérience", "à propos de l'expérience", "malgré l'expérience"], a: 0,
        e: "に加えて = en plus de, addition." },
      { t: "nuance", q: "Distinguer 〜に加えて de 〜に反して :",
        o: ["に加えて = addition (en plus) ; に反して = opposition (contrairement à)", "ils sont identiques", "に加えて exprime une cause", "に反して exprime une addition"], a: 0,
        e: "に加えて ajoute ; に反して contredit les attentes." },
    ],
  },

  {
    id: "g071", g: "〜を問わず", m: "sans distinction de, quel que soit", f: "Nom + を問わず（は不要）",
    c: "particle", lv: 2, rel: ["g072", "g080"],
    note: "« Sans que X entre en ligne de compte ». S'emploie avec des noms évoquant deux pôles ou une variété : 年齢, 男女, 経験, 昼夜, 国内外. Souvent en paire (経験の有無を問わず).",
    ex: [
      { jp: "年齢を問わず、誰でも参加できる。", fr: "Tout le monde peut participer, sans distinction d'âge." },
      { jp: "昼夜を問わず、機械は動き続ける。", fr: "Jour et nuit, la machine continue de tourner." },
    ],
    qs: [
      { t: "fill", q: "経験の有無＿＿＿、応募を歓迎します。", fr: "Nous accueillons les candidatures, avec ou sans expérience.",
        o: ["を問わず", "にかかわって", "について", "に応じて"], a: 0,
        e: "« Sans distinction (de l'expérience ou non) » → 〜を問わず." },
      { t: "meaning", q: "「男女を問わず採用する」— sens ?",
        o: ["embaucher sans distinction de sexe", "embaucher seulement les hommes", "interroger sur le sexe", "embaucher selon le sexe"], a: 0,
        e: "を問わず = la distinction (ici homme/femme) n'est pas prise en compte." },
      { t: "usage", q: "Quel nom convient le mieux avec 〜を問わず ?",
        o: ["国の内外（deux pôles / variété）", "私の弟（personne précise）", "明日（date unique）", "この本（objet unique）"], a: 0,
        e: "を問わず demande un nom évoquant des pôles/une variété (内外, 男女, 年齢…)." },
    ],
  },

  {
    id: "g072", g: "〜にかかわらず／〜にかかわりなく", m: "indépendamment de, peu importe", f: "Nom／V-辞書+V-ない／A-くてもなくても + にかかわらず",
    c: "particle", lv: 2, rel: ["g071", "g073"],
    note: "Le résultat ne dépend pas de X. Souvent avec des antonymes ou alternatives : 天候にかかわらず, 行く行かないにかかわらず. À ne pas confondre avec 〜にもかかわらず (« bien que »).",
    ex: [
      { jp: "天候にかかわらず、試合は行われる。", fr: "Le match aura lieu quel que soit le temps." },
      { jp: "経験のあるなしにかかわらず、研修を受けてもらう。", fr: "Avec ou sans expérience, chacun suivra la formation." },
    ],
    qs: [
      { t: "fill", q: "金額の大小＿＿＿、寄付は受け付けます。", fr: "Quel que soit le montant, les dons sont acceptés.",
        o: ["にかかわらず", "にもかかわらず", "について", "に際して"], a: 0,
        e: "« Indépendamment de (grand ou petit) » → 〜にかかわらず." },
      { t: "nuance", q: "Distinguer 〜にかかわらず de 〜にもかかわらず :",
        o: ["にかかわらず = « peu importe X » (X ne compte pas) ; にもかかわらず = « bien que X » (malgré un fait constaté)", "ils sont identiques", "にかかわらず exprime une cause", "にもかかわらず exprime une variété"], a: 0,
        e: "にかかわらず neutralise un paramètre ; にもかかわらず concède un fait réel." },
      { t: "usage", q: "Quelle construction est typique de 〜にかかわらず ?",
        o: ["行く行かないにかかわらず（alternatives）", "雨にもかかわらず（fait constaté）", "失礼にあたる", "彼について"], a: 0,
        e: "にかかわらず aime les couples d'alternatives (X か X-ない)." },
    ],
  },

  {
    id: "g073", g: "〜もかまわず", m: "sans se soucier de, sans faire cas de", f: "Nom／V-辞書＋の + もかまわず",
    c: "particle", lv: 2, rel: ["g072"],
    note: "Agir en ignorant ce dont on devrait normalement se soucier (le regard d'autrui, ses vêtements, la pluie). Nuance d'inconvenance ou de détermination.",
    ex: [
      { jp: "人目もかまわず、彼女は泣き出した。", fr: "Sans se soucier des regards, elle a fondu en larmes." },
      { jp: "服が汚れるのもかまわず、子どもは遊んでいる。", fr: "Sans se soucier de salir ses habits, l'enfant joue." },
    ],
    qs: [
      { t: "fill", q: "周りの迷惑＿＿＿、大声で電話している。", fr: "Sans se soucier de gêner les autres, il téléphone à voix haute.",
        o: ["もかまわず", "を問わず", "に沿って", "に加えて"], a: 0,
        e: "« Sans faire cas de (la gêne causée) » → 〜もかまわず." },
      { t: "meaning", q: "「雨にぬれるのもかまわず走った」— sens ?",
        o: ["courir sans se soucier de se faire moucher par la pluie", "courir à cause de la pluie", "courir sous la pluie pour une raison", "ne pas courir à cause de la pluie"], a: 0,
        e: "もかまわず = sans tenir compte de ce qui devrait gêner." },
      { t: "nuance", q: "Quelle nuance porte souvent 〜もかまわず ?",
        o: ["inconvenance / on ignore ce qui devrait préoccuper", "politesse extrême", "incertitude", "addition d'éléments"], a: 0,
        e: "Souvent une nuance d'inconvenance ou de détermination farouche." },
    ],
  },

  {
    id: "g074", g: "〜はもちろん", m: "sans parler de, bien entendu… mais aussi", f: "Nom + はもちろん（のこと）",
    c: "particle", lv: 1, rel: ["g075", "g078"],
    note: "X est évident/acquis, et Y s'y ajoute. « Non seulement X (cela va de soi) mais aussi Y ». Ton un peu plus courant que はもとより.",
    ex: [
      { jp: "漢字はもちろん、ひらがなも書けない。", fr: "Il ne sait écrire ni les hiragana, et encore moins les kanji." },
      { jp: "国内はもちろん、海外でも人気がある。", fr: "C'est populaire au Japon, bien sûr, mais aussi à l'étranger." },
    ],
    qs: [
      { t: "fill", q: "この店は味＿＿＿、サービスもいい。", fr: "Dans ce restaurant, le goût va de soi, mais le service est bon aussi.",
        o: ["はもちろん", "に反して", "を問わず", "に際して"], a: 0,
        e: "« X (évident) et aussi Y » → 〜はもちろん." },
      { t: "meaning", q: "「子どもはもちろん、大人も楽しめる」— sens ?",
        o: ["les enfants bien sûr, mais les adultes aussi peuvent s'amuser", "seuls les enfants s'amusent", "ni les enfants ni les adultes", "à propos des enfants"], a: 0,
        e: "はもちろん : X acquis + Y en plus." },
      { t: "nuance", q: "Différence de registre entre はもちろん et はもとより :",
        o: ["はもとmore soutenu/écrit ; はもちろん plus courant", "はもちろん est vulgaire", "ils s'emploient avec des verbes différents", "はもとより exprime le contraire"], a: 0,
        e: "Même sens ; はもとより est plus formel/littéraire." },
    ],
  },

  {
    id: "g075", g: "〜はもとより", m: "sans parler de, non seulement… mais aussi (soutenu)", f: "Nom + はもとより",
    c: "particle", lv: 2, rel: ["g074", "g078"],
    note: "Synonyme soutenu de はもちろん. X va de soi, Y s'y ajoute. Registre écrit/formel.",
    ex: [
      { jp: "本人はもとより、家族も喜んでいる。", fr: "L'intéressé, bien sûr, mais sa famille aussi se réjouit." },
      { jp: "国内はもとより、世界中で知られている。", fr: "Connu au Japon, cela va de soi, mais aussi dans le monde entier." },
    ],
    qs: [
      { t: "fill", q: "新人＿＿＿、ベテランもこの研修に参加する。", fr: "Les nouveaux, cela va de soi, mais les chevronnés aussi suivent cette formation.",
        o: ["はもとより", "にかかわらず", "を込めて", "に沿って"], a: 0,
        e: "« X (évident) + Y aussi », registre soutenu → 〜はもとより." },
      { t: "meaning", q: "「平日はもとより、週末も営業する」— sens ?",
        o: ["en semaine cela va de soi, mais le week-end aussi", "ni en semaine ni le week-end", "seulement le week-end", "malgré la semaine"], a: 0,
        e: "はもとより = X acquis + Y." },
      { t: "usage", q: "Dans quel registre 〜はもとより est-il privilégié ?",
        o: ["écrit / formel", "argot des jeunes", "langue enfantine", "onomatopées"], a: 0,
        e: "はもとより appartient au registre soutenu." },
    ],
  },

  {
    id: "g076", g: "〜抜きで／〜抜きに／〜は抜きにして", m: "sans, en se passant de, en mettant de côté", f: "Nom + 抜きで／抜きに／は抜きにして",
    c: "particle", lv: 2, rel: ["g073"],
    note: "Faire qqch en éliminant un élément habituel. 〜抜きには〜ない = « sans X, pas de Y » (X indispensable). 冗談は抜きにして = « blague à part ».",
    ex: [
      { jp: "今日は仕事の話は抜きにして、楽しみましょう。", fr: "Aujourd'hui, mettons de côté le travail et amusons-nous." },
      { jp: "彼の協力抜きには、成功しなかっただろう。", fr: "Sans sa coopération, nous n'aurions pas réussi." },
    ],
    qs: [
      { t: "fill", q: "朝食＿＿＿出かけたので、お腹がすいた。", fr: "Je suis parti sans petit-déjeuner, alors j'ai faim.",
        o: ["抜きで", "を問わず", "に加えて", "に沿って"], a: 0,
        e: "« Sans (le petit-déjeuner) » → 〜抜きで." },
      { t: "meaning", q: "「冗談は抜きにして、本題に入ろう」— sens ?",
        o: ["blague à part, entrons dans le vif du sujet", "ajoutons une blague", "à propos de la blague", "à cause de la blague"], a: 0,
        e: "は抜きにして = en mettant de côté." },
      { t: "nuance", q: "「援助抜きには成功しない」exprime :",
        o: ["l'aide est indispensable (sans elle, échec)", "l'aide est inutile", "on refuse l'aide", "l'aide vient en plus"], a: 0,
        e: "〜抜きには〜ない souligne le caractère indispensable de X." },
    ],
  },

  {
    id: "g077", g: "〜に限らず", m: "pas seulement, sans se limiter à", f: "Nom + に限らず",
    c: "particle", lv: 2, rel: ["g041", "g071"],
    note: "« X n'est pas le seul cas ; cela vaut aussi pour le reste ». Étend la portée au-delà de X.",
    ex: [
      { jp: "若者に限らず、高齢者にもこのゲームは人気だ。", fr: "Pas seulement chez les jeunes : ce jeu plaît aussi aux seniors." },
      { jp: "この問題は日本に限らず、世界共通だ。", fr: "Ce problème ne se limite pas au Japon : il est mondial." },
    ],
    qs: [
      { t: "fill", q: "週末＿＿＿、平日もこの店は混んでいる。", fr: "Pas seulement le week-end : ce magasin est bondé en semaine aussi.",
        o: ["に限らず", "に限り", "について", "に沿って"], a: 0,
        e: "« Pas seulement X » → 〜に限らず." },
      { t: "meaning", q: "「子どもに限らず大人も間違える」— sens ?",
        o: ["pas seulement les enfants, les adultes aussi se trompent", "seuls les enfants se trompent", "les adultes ne se trompent pas", "à propos des enfants"], a: 0,
        e: "に限らず étend la portée au-delà de X." },
      { t: "nuance", q: "Distinguer 〜に限らず de 〜に限り :",
        o: ["に限らず = « pas seulement X » (élargit) ; に限り = « seulement X / dans le seul cas de X » (restreint)", "ils sont identiques", "に限らず restreint", "に限り élargit"], a: 0,
        e: "Sens opposés : に限らず ouvre, に限り ferme." },
    ],
  },

  {
    id: "g078", g: "〜のみならず", m: "non seulement… (mais aussi), soutenu", f: "Nom／普通形 + のみならず",
    c: "particle", lv: 2, rel: ["g074", "g166"],
    note: "Équivalent écrit/formel de だけでなく. Souvent suivi de も. « Non seulement X mais encore Y ».",
    ex: [
      { jp: "彼は学者であるのみならず、優れた教育者でもある。", fr: "Non seulement il est savant, mais c'est aussi un excellent pédagogue." },
      { jp: "本人のみならず、周囲にも影響が及ぶ。", fr: "L'effet touche non seulement l'intéressé, mais aussi son entourage." },
    ],
    qs: [
      { t: "fill", q: "この薬は頭痛＿＿＿、肩こりにも効く。", fr: "Ce médicament agit non seulement sur les maux de tête, mais aussi sur les douleurs d'épaules.",
        o: ["のみならず", "に限り", "を問わず", "に際して"], a: 0,
        e: "« Non seulement X mais aussi Y », registre soutenu → 〜のみならず." },
      { t: "meaning", q: "「国内のみならず海外でも」— sens ?",
        o: ["non seulement au pays mais aussi à l'étranger", "seulement au pays", "ni au pays ni à l'étranger", "à propos du pays"], a: 0,
        e: "のみならず = non seulement… mais aussi." },
      { t: "usage", q: "〜のみならず est la version … de だけでなく :",
        o: ["soutenue / écrite", "familière", "enfantine", "interrogative"], a: 0,
        e: "のみならず est le registre formel de だけでなく." },
    ],
  },

  {
    id: "g079", g: "〜を中心に（して）／〜を中心として", m: "autour de, centré sur, principalement", f: "Nom + を中心に（して）／を中心とする＋Nom",
    c: "particle", lv: 2, rel: ["g009", "g005"],
    note: "Désigne le centre d'un ensemble, d'un mouvement ou d'une activité : « X au cœur de… ».",
    ex: [
      { jp: "駅を中心に、商店街が広がっている。", fr: "Le quartier commerçant s'étend autour de la gare." },
      { jp: "若者を中心に、その曲が流行している。", fr: "Cette chanson fait fureur, surtout chez les jeunes." },
    ],
    qs: [
      { t: "fill", q: "リーダー＿＿＿、チームがまとまった。", fr: "L'équipe s'est soudée autour de son leader.",
        o: ["を中心に", "を問わず", "に反して", "に加えて"], a: 0,
        e: "« Autour de / centré sur X » → 〜を中心に." },
      { t: "meaning", q: "「家族を中心に生活を考える」— sens ?",
        o: ["penser sa vie en plaçant la famille au centre", "penser sans la famille", "à propos de la famille", "malgré la famille"], a: 0,
        e: "を中心に = en mettant X au cœur." },
      { t: "usage", q: "〜を中心に exprime principalement :",
        o: ["le noyau / point central d'un ensemble", "une opposition", "une condition négative", "une date limite"], a: 0,
        e: "を中心に désigne le centre d'un ensemble ou d'un mouvement." },
    ],
  },

  /* ===================== AJOUTS — CONCESSION & CONTRASTE ===================== */

  {
    id: "g080", g: "〜にしろ〜にしろ／〜にせよ〜にせよ", m: "que ce soit… ou…", f: "Nom／普通形 + にしろ／にせよ（×2）",
    c: "contrast", lv: 2, rel: ["g081", "g072"],
    note: "Deux cas envisagés, même conclusion. にせよ est un peu plus formel que にしろ. Variante simple : 〜にしろ (un seul) = « même si / quoi qu'il en soit ».",
    ex: [
      { jp: "行くにしろ行かないにしろ、連絡してください。", fr: "Que tu y ailles ou non, préviens-moi." },
      { jp: "賛成にせよ反対にせよ、理由を述べるべきだ。", fr: "Pour ou contre, il faut donner ses raisons." },
    ],
    qs: [
      { t: "fill", q: "雨＿＿＿雪＿＿＿、試合は中止だ。", fr: "Qu'il pleuve ou qu'il neige, le match est annulé.",
        o: ["にしろ／にしろ", "について／について", "に限り／に限り", "として／として"], a: 0,
        e: "Deux cas, même conséquence → 〜にしろ〜にしろ." },
      { t: "meaning", q: "「成功するにせよ失敗するにせよ、挑戦に意味がある」— sens ?",
        o: ["qu'on réussisse ou échoue, l'essai a du sens", "on réussit toujours", "on échoue toujours", "on ne tente pas"], a: 0,
        e: "にせよ〜にせよ : deux issues, même conclusion." },
      { t: "usage", q: "Quelle paire est la plus formelle ?",
        o: ["にせよ〜にせよ", "にしろ〜にしろ", "elles sont familières toutes deux", "aucune n'existe"], a: 0,
        e: "にせよ est plus soutenu que にしろ (même sens)." },
    ],
  },

  {
    id: "g081", g: "〜であれ／〜であろうと", m: "quel que soit, même si c'est", f: "Nom／疑問詞 + であれ／であろうと",
    c: "contrast", lv: 3, rel: ["g080"],
    note: "Concession soutenue. Souvent avec un interrogatif : どんな理由であれ (quelle qu'en soit la raison). たとえ〜であれ renforce.",
    ex: [
      { jp: "どんな理由であれ、暴力は許されない。", fr: "Quelle qu'en soit la raison, la violence est inadmissible." },
      { jp: "子どもであれ大人であれ、ルールは守るべきだ。", fr: "Enfant ou adulte, chacun doit respecter les règles." },
    ],
    qs: [
      { t: "fill", q: "たとえ社長＿＿＿、規則は守らねばならない。", fr: "Même s'il s'agit du PDG, il faut respecter le règlement.",
        o: ["であれ", "について", "に限り", "に沿って"], a: 0,
        e: "« Même si c'est / quel que soit » → 〜であれ." },
      { t: "meaning", q: "「理由が何であれ、遅刻は遅刻だ」— sens ?",
        o: ["quelle que soit la raison, un retard reste un retard", "selon la raison", "à cause de la raison", "sans raison"], a: 0,
        e: "であれ = quel que soit (concession)." },
      { t: "usage", q: "〜であれ se combine souvent avec :",
        o: ["un interrogatif (どんな, 何, 誰)", "un nombre précis", "un verbe à la forme て", "une date"], a: 0,
        e: "であれ s'emploie volontiers avec un mot interrogatif." },
    ],
  },

  {
    id: "g082", g: "〜としても", m: "même si (hypothèse)", f: "普通形 + としても",
    c: "contrast", lv: 1, rel: ["g024", "g090"],
    note: "Concession hypothétique : « à supposer que X, néanmoins… ». Diffère de 〜ても (concession plus factuelle) par sa nuance d'hypothèse non avérée.",
    ex: [
      { jp: "雨が降ったとしても、出かけるつもりだ。", fr: "Même s'il pleuvait, je compte sortir." },
      { jp: "本当だとしても、信じられない。", fr: "Même si c'est vrai, je n'arrive pas à y croire." },
    ],
    qs: [
      { t: "fill", q: "彼が謝った＿＿＿、私は許さないだろう。", fr: "Même s'il s'excusait, je ne le pardonnerais sans doute pas.",
        o: ["としても", "からこそ", "ことから", "に際して"], a: 0,
        e: "Concession hypothétique « même si » → 〜としても." },
      { t: "meaning", q: "「失敗したとしても、経験になる」— sens ?",
        o: ["même si on échoue, ça reste une expérience", "comme on a échoué", "parce qu'on échoue", "afin d'échouer"], a: 0,
        e: "としても = même si (hypothèse)." },
      { t: "nuance", q: "Nuance de としても par rapport à 〜ても :",
        o: ["としても insiste sur l'hypothèse (à supposer que)", "としても est plus familier", "ils n'ont aucun lien", "としても exprime une cause"], a: 0,
        e: "としても accentue le caractère hypothétique/supposé." },
    ],
  },

  {
    id: "g083", g: "〜にしても／〜にしたって", m: "même si, même dans le cas de ; quoi qu'il en soit", f: "普通形／Nom + にしても",
    c: "contrast", lv: 2, rel: ["g082", "g080"],
    note: "Concession : « même en tenant compte de X… ». にしたって est la variante familière. Avec un nom : « même X (qui pourtant…) ».",
    ex: [
      { jp: "忙しいにしても、連絡くらいできるはずだ。", fr: "Même occupé, il pourrait au moins donner des nouvelles." },
      { jp: "子どもにしても、それくらいは分かる。", fr: "Même un enfant comprendrait au moins ça." },
    ],
    qs: [
      { t: "fill", q: "冗談＿＿＿、言っていいことと悪いことがある。", fr: "Même pour une plaisanterie, il y a des choses à ne pas dire.",
        o: ["にしても", "に限り", "を問わず", "に沿って"], a: 0,
        e: "« Même dans le cas de X » → 〜にしても." },
      { t: "meaning", q: "「高いにしても、買う価値はある」— sens ?",
        o: ["même si c'est cher, ça vaut l'achat", "parce que c'est cher", "comme c'est cher", "si c'est cher"], a: 0,
        e: "にしても = même si (concession)." },
      { t: "usage", q: "〜にしたって est :",
        o: ["la variante familière de にしても", "plus formelle que にしても", "un synonyme de に限り", "une forme interrogative"], a: 0,
        e: "にしたって = registre familier de にしても." },
    ],
  },

  {
    id: "g084", g: "〜といっても", m: "bien qu'on dise…, ce n'est pas autant que", f: "普通形／Nom + といっても",
    c: "contrast", lv: 1, rel: ["g024", "g092"],
    note: "Nuance/relativise une affirmation : « X, certes, mais en réalité moins que ce que le mot suggère ». 料理ができるといっても、卵焼きくらいだ.",
    ex: [
      { jp: "金持ちといっても、普通のサラリーマンです。", fr: "Riche, on dit, mais ce n'est qu'un salarié ordinaire." },
      { jp: "近いといっても、駅まで歩いて30分かかる。", fr: "« Proche », certes, mais il faut 30 minutes à pied jusqu'à la gare." },
    ],
    qs: [
      { t: "fill", q: "料理ができる＿＿＿、卵焼きくらいだ。", fr: "« Je sais cuisiner », mais juste une omelette à peine.",
        o: ["といっても", "からこそ", "に際して", "を込めて"], a: 0,
        e: "Relativiser une affirmation → 〜といっても." },
      { t: "meaning", q: "「暑いといっても、日本ほどではない」— sens ?",
        o: ["c'est chaud, certes, mais pas autant qu'au Japon", "c'est chaud comme au Japon", "ce n'est pas chaud", "à cause de la chaleur"], a: 0,
        e: "といっても relativise : moins que ce que le mot laisse penser." },
      { t: "nuance", q: "Rôle principal de 〜といっても :",
        o: ["nuancer/corriger une affirmation jugée excessive", "ajouter un élément", "exprimer une cause", "donner un ordre"], a: 0,
        e: "といっても tempère l'impression donnée par le mot précédent." },
    ],
  },

  {
    id: "g085", g: "〜からといって", m: "ce n'est pas parce que… que (forcément)", f: "普通形 + からといって（〜ない／とは限らない）",
    c: "contrast", lv: 1, rel: ["g142", "g051"],
    note: "Rejette une conclusion hâtive tirée d'une raison. Presque toujours suivi d'une négation : 高いからといって、いいとは限らない.",
    ex: [
      { jp: "高いからといって、品質がいいとは限らない。", fr: "Ce n'est pas parce que c'est cher que c'est forcément de qualité." },
      { jp: "外国人だからといって、英語が話せるわけではない。", fr: "Ce n'est pas parce qu'on est étranger qu'on parle forcément anglais." },
    ],
    qs: [
      { t: "fill", q: "若い＿＿＿、無理をしてはいけない。", fr: "Ce n'est pas parce qu'on est jeune qu'on doit en faire trop.",
        o: ["からといって", "からには", "からこそ", "から"], a: 0,
        e: "Rejet d'une conclusion hâtive → 〜からといって（〜ない）." },
      { t: "meaning", q: "「日本に住んでいたからといって、納豆が好きとは限らない」— sens ?",
        o: ["avoir vécu au Japon n'implique pas forcément aimer le nattō", "comme on a vécu au Japon, on aime le nattō", "on n'a pas vécu au Japon", "afin de vivre au Japon"], a: 0,
        e: "からといって + とは限らない = pas de lien automatique." },
      { t: "nuance", q: "〜からといって est presque toujours suivi de :",
        o: ["une négation (〜ない／とは限らない)", "un impératif positif", "une question", "une date"], a: 0,
        e: "からといって appelle une conclusion niée." },
    ],
  },

  {
    id: "g086", g: "〜とはいうものの", m: "cela dit, ceci étant, bien que je dise cela", f: "普通形／Nom + とはいうものの",
    c: "contrast", lv: 2, rel: ["g024", "g023"],
    note: "Reconnaît un fait, puis introduit une réserve : « certes…, mais en réalité… ». Proche de とはいえ, souvent en tête de phrase.",
    ex: [
      { jp: "春とはいうものの、まだ寒い日が続く。", fr: "C'est le printemps, certes, mais les jours froids continuent." },
      { jp: "やめたいとはいうものの、なかなか踏み切れない。", fr: "Je dis vouloir arrêter, mais je n'arrive pas à franchir le pas." },
    ],
    qs: [
      { t: "fill", q: "合格した＿＿＿、油断はできない。", fr: "J'ai réussi, certes, mais je ne peux pas me relâcher.",
        o: ["とはいうものの", "からこそ", "に際して", "を中心に"], a: 0,
        e: "Reconnaître un fait + réserve → 〜とはいうものの." },
      { t: "meaning", q: "「便利だとはいうものの、欠点もある」— sens ?",
        o: ["c'est pratique, cela dit, il y a aussi des défauts", "c'est pratique donc parfait", "ce n'est pas pratique", "à propos de la commodité"], a: 0,
        e: "とはいうものの introduit une réserve après une concession." },
      { t: "usage", q: "とはいうものの est proche de :",
        o: ["とはいえ / ものの", "からこそ", "に限り", "を込めて"], a: 0,
        e: "Même famille concessive que とはいえ/ものの." },
    ],
  },

  {
    id: "g087", g: "〜たところで", m: "même si (on a beau), ça ne servira à rien", f: "V-た + ところで（〜ない／無駄だ）",
    c: "contrast", lv: 2, rel: ["g082", "g099"],
    note: "Concession pessimiste : même en faisant X, le résultat reste négatif/vain. Souvent suivi d'une négation ou d'une idée d'inutilité. Le verbe est au た, mais le sens reste hypothétique.",
    ex: [
      { jp: "今さら謝ったところで、許してもらえない。", fr: "On a beau s'excuser maintenant, on ne sera pas pardonné." },
      { jp: "急いだところで、もう間に合わない。", fr: "Même en se dépêchant, on n'arrivera plus à temps." },
    ],
    qs: [
      { t: "fill", q: "いくら頼んだ＿＿＿、彼は来ないだろう。", fr: "On a beau le supplier, il ne viendra sans doute pas.",
        o: ["ところで", "からこそ", "とたんに", "ばかりに"], a: 0,
        e: "« On a beau… ça ne servira à rien » → 〜たところで." },
      { t: "meaning", q: "「考えたところで、答えは出ない」— sens ?",
        o: ["on a beau réfléchir, on ne trouve pas la réponse", "comme on a réfléchi, on a la réponse", "pour réfléchir à la réponse", "après avoir réfléchi"], a: 0,
        e: "たところで = même si on fait X, c'est vain." },
      { t: "nuance", q: "〜たところで est généralement suivi de :",
        o: ["une idée négative / d'inutilité", "un résultat positif assuré", "un ordre", "une simple date"], a: 0,
        e: "La concession est pessimiste (résultat vain)." },
    ],
  },

  {
    id: "g088", g: "〜に比べて", m: "comparé à, par rapport à", f: "Nom + に比べて／に比べ",
    c: "contrast", lv: 1, rel: ["g030", "g096"],
    note: "Établit une comparaison entre deux termes. 〜に比べ (sans て) est la variante écrite.",
    ex: [
      { jp: "去年に比べて、今年は雨が多い。", fr: "Comparé à l'an dernier, il pleut beaucoup cette année." },
      { jp: "都会に比べて、田舎は物価が安い。", fr: "Par rapport à la ville, la vie est moins chère à la campagne." },
    ],
    qs: [
      { t: "fill", q: "兄＿＿＿、弟のほうが背が高い。", fr: "Comparé à l'aîné, le cadet est plus grand.",
        o: ["に比べて", "に反して", "について", "に沿って"], a: 0,
        e: "Comparaison entre deux termes → 〜に比べて." },
      { t: "meaning", q: "「以前に比べて、便利になった」— sens ?",
        o: ["c'est devenu plus pratique par rapport à avant", "malgré avant", "à propos d'avant", "à cause d'avant"], a: 0,
        e: "に比べて = comparé à." },
      { t: "usage", q: "La variante écrite de 〜に比べて est :",
        o: ["に比べ", "に比べたり", "に比べると限り", "に比べさえ"], a: 0,
        e: "に比べ (sans て) = registre écrit." },
    ],
  },

  {
    id: "g089", g: "〜にひきかえ", m: "à l'inverse de, contrairement à (avec jugement)", f: "Nom＋に／普通形＋の + にひきかえ",
    c: "contrast", lv: 3, rel: ["g002", "g030"],
    note: "Contraste marqué entre deux éléments, souvent avec une appréciation (l'un valorisé, l'autre non). Plus subjectif que に対して.",
    ex: [
      { jp: "去年の不調にひきかえ、今年は絶好調だ。", fr: "Contrairement à la mauvaise passe de l'an dernier, cette année est excellente." },
      { jp: "兄の真面目さにひきかえ、弟は怠け者だ。", fr: "À l'inverse du sérieux de l'aîné, le cadet est paresseux." },
    ],
    qs: [
      { t: "fill", q: "姉の社交的な性格＿＿＿、妹はとても内気だ。", fr: "Contrairement au caractère sociable de l'aînée, la cadette est très timide.",
        o: ["にひきかえ", "に加えて", "に沿って", "を込めて"], a: 0,
        e: "Contraste avec jugement → 〜にひきかえ." },
      { t: "meaning", q: "「先月の売上にひきかえ、今月は好調だ」— sens ?",
        o: ["contrairement aux ventes du mois dernier, ce mois-ci est bon", "comme le mois dernier", "à propos du mois dernier", "en plus du mois dernier"], a: 0,
        e: "にひきかえ oppose deux situations avec appréciation." },
      { t: "nuance", q: "Différence entre にひきかえ et に対して :",
        o: ["にひきかえ ajoute un jugement/appréciation subjective ; に対して est plus neutre", "ils sont identiques", "にひきかえ est plus neutre", "に対して exprime l'addition"], a: 0,
        e: "にひきかえ est subjectif (souvent évaluatif)." },
    ],
  },

  {
    id: "g090", g: "〜ならまだしも", m: "passe encore si…, mais (alors là non)", f: "Nom／普通形 + ならまだしも",
    c: "contrast", lv: 3, rel: ["g082", "g083"],
    note: "« Si c'était X, ce serait acceptable, mais en réalité c'est Y (pire), donc inacceptable ». Compare un cas tolérable à un cas réel jugé excessif.",
    ex: [
      { jp: "一度ならまだしも、三度も遅刻するとは。", fr: "Une fois, passe encore, mais arriver en retard trois fois !" },
      { jp: "子どもならまだしも、大人がそんなことを言うとは。", fr: "Un enfant, passe encore, mais qu'un adulte dise ça !" },
    ],
    qs: [
      { t: "fill", q: "謝る＿＿＿、開き直るとは許せない。", fr: "S'excuser, passe encore, mais prendre les choses de haut, c'est inadmissible.",
        o: ["ならまだしも", "に限らず", "とはいえ", "に加えて"], a: 0,
        e: "« Si c'était X ce serait tolérable, mais Y… » → 〜ならまだしも." },
      { t: "meaning", q: "「少しならまだしも、全部食べるなんて」— sens ?",
        o: ["un peu, passe encore, mais tout manger !", "manger un peu c'est mal", "tout manger c'est bien", "ni un peu ni tout"], a: 0,
        e: "ならまだしも oppose un cas tolérable à un cas excessif." },
      { t: "usage", q: "〜ならまだしも introduit :",
        o: ["un cas hypothétique acceptable, suivi du cas réel inacceptable", "une cause", "une date limite", "un ordre poli"], a: 0,
        e: "Structure : X (tolérable) ならまだしも、Y (inacceptable)." },
    ],
  },

  /* ===================== AJOUTS — TEMPS & SÉQUENCE ===================== */

  {
    id: "g091", g: "〜上で", m: "après avoir…, sur la base de ; pour, dans le cadre de", f: "V-た／Nom+の + 上で",
    c: "time", lv: 1, rel: ["g100", "g101"],
    note: "(1) Avec V-た/Nの : « après avoir fait X (et sur cette base), faire Y » — démarche en deux temps réfléchis (確認した上で). (2) Avec V-辞書/Nの : « dans le cadre de, pour » (生活する上で = pour vivre).",
    ex: [
      { jp: "両親と相談した上で、お返事します。", fr: "Je vous répondrai après avoir consulté mes parents." },
      { jp: "外国で生活する上で、言葉は欠かせない。", fr: "Pour vivre à l'étranger, la langue est indispensable." },
    ],
    qs: [
      { t: "fill", q: "契約内容をよく確認した＿＿＿、サインしてください。", fr: "Signez après avoir bien vérifié le contenu du contrat.",
        o: ["上で", "ところで", "とたんに", "限り"], a: 0,
        e: "« Après avoir fait X (réfléchi), faire Y » → V-た上で." },
      { t: "meaning", q: "「仕事をする上で大切なこと」— sens ?",
        o: ["ce qui est important pour/dans le travail", "après avoir travaillé", "malgré le travail", "à cause du travail"], a: 0,
        e: "V-辞書 + 上で = dans le cadre de / pour faire X." },
      { t: "nuance", q: "Distinguer V-た上で de 〜てから :",
        o: ["V-た上で insiste sur une démarche réfléchie en deux étapes ; 〜てから marque une simple succession temporelle", "ils sont identiques", "上で est familier", "てから exprime une cause"], a: 0,
        e: "上で = étape préalable nécessaire et réfléchie ; てから = simple « après »." },
    ],
  },

  {
    id: "g092", g: "〜に当たって／〜に当たり", m: "au moment de, à l'occasion de (un événement important)", f: "V-辞書／Nom + に当たって／に当たり",
    c: "time", lv: 2, rel: ["g012", "g013"],
    note: "Marque un moment important/solennel où l'on entreprend qqch (début d'année, examen, déménagement). Plus cérémonieux que 〜とき. La variante に当たり est écrite.",
    ex: [
      { jp: "新年を迎えるに当たって、目標を立てた。", fr: "À l'occasion du Nouvel An, je me suis fixé des objectifs." },
      { jp: "開会に当たり、一言ご挨拶申し上げます。", fr: "À l'ouverture de la séance, permettez-moi quelques mots." },
    ],
    qs: [
      { t: "fill", q: "留学する＿＿＿、いろいろな準備が必要だ。", fr: "Au moment de partir étudier à l'étranger, bien des préparatifs sont nécessaires.",
        o: ["に当たって", "に反して", "を込めて", "に比べて"], a: 0,
        e: "Moment important où l'on entreprend qqch → 〜に当たって." },
      { t: "meaning", q: "「契約に当たって、注意すべき点」— sens ?",
        o: ["les points à surveiller au moment de contracter", "malgré le contrat", "à propos du contrat seulement", "après le contrat"], a: 0,
        e: "に当たって = à l'occasion (importante) de." },
      { t: "nuance", q: "Différence entre に当たって et に際して :",
        o: ["sens très proches (à l'occasion de) ; に際して est légèrement plus formel/écrit", "à当たって est familier vulgaire", "ils sont opposés", "に当たって exprime la cause"], a: 0,
        e: "Quasi-synonymes ; に際して un peu plus formel. Voir [[g012]]." },
    ],
  },

  {
    id: "g093", g: "〜ところに／〜ところへ", m: "juste au moment où (survient une interruption)", f: "V-ている／V-た／A + ところに／ところへ",
    c: "time", lv: 2, rel: ["g094", "g032"],
    note: "Un nouvel événement survient pile pendant/à un moment donné. ところへ implique souvent une arrivée. L'événement « tombe » sur la situation en cours.",
    ex: [
      { jp: "出かけようとしたところに、電話が鳴った。", fr: "Juste au moment où j'allais sortir, le téléphone a sonné." },
      { jp: "困っているところへ、友達が助けに来てくれた。", fr: "Pile au moment où j'étais dans l'embarras, un ami est venu m'aider." },
    ],
    qs: [
      { t: "fill", q: "昼寝をしている＿＿＿、来客があった。", fr: "Pile pendant ma sieste, un visiteur est arrivé.",
        o: ["ところに", "うちに", "に当たって", "限り"], a: 0,
        e: "Un événement survient pile pendant la situation → 〜ところに／へ." },
      { t: "meaning", q: "「家を出たところへ雨が降ってきた」— sens ?",
        o: ["pile au moment où je sortais, il s'est mis à pleuvoir", "avant de sortir il pleuvait", "je suis sorti à cause de la pluie", "malgré la pluie je suis sorti"], a: 0,
        e: "ところへ = juste à ce moment-là survient un événement." },
      { t: "usage", q: "〜ところへ suggère souvent :",
        o: ["l'arrivée/survenue d'un nouvel élément", "une comparaison", "une condition négative", "une simple habitude"], a: 0,
        e: "ところへ marque l'irruption d'un événement (souvent une arrivée)." },
    ],
  },

  {
    id: "g094", g: "〜ところを", m: "alors que (vous êtes dans tel état) ; sur le fait", f: "V／A／Nom+の + ところを",
    c: "time", lv: 2, rel: ["g093"],
    note: "(1) Formule de politesse : お忙しいところを = « alors que vous êtes occupé ». (2) Surprendre qqn sur le fait : 寝ているところを見られた.",
    ex: [
      { jp: "お忙しいところを、お時間をいただき恐縮です。", fr: "Je suis confus de vous prendre du temps alors que vous êtes occupé." },
      { jp: "カンニングをしているところを先生に見つかった。", fr: "Le professeur m'a surpris en train de tricher." },
    ],
    qs: [
      { t: "fill", q: "お休みの＿＿＿、申し訳ありません。", fr: "Je suis désolé de vous déranger alors que vous vous reposez.",
        o: ["ところを", "うちに", "に際して", "限り"], a: 0,
        e: "Formule de politesse « alors que vous êtes en train de… » → 〜ところを." },
      { t: "meaning", q: "「逃げようとしたところを捕まった」— sens ?",
        o: ["surpris/attrapé alors qu'il tentait de fuir", "il a fui après avoir été attrapé", "il n'a pas fui", "il a fui pour être attrapé"], a: 0,
        e: "ところを = sur le fait, en plein dans l'action." },
      { t: "usage", q: "「お忙しいところをすみません」: ところを sert ici à :",
        o: ["formule de politesse (alors que vous êtes occupé)", "exprimer une cause", "donner un ordre", "comparer"], a: 0,
        e: "Emploi très courant en politesse." },
    ],
  },

  {
    id: "g095", g: "〜が早いか", m: "à peine… que, dès que (immédiatement)", f: "V-辞書／V-た + が早いか",
    c: "time", lv: 3, rel: ["g036", "g037", "g096"],
    note: "Deux actions quasi simultanées : à peine la première finie, la seconde survient. Style écrit/littéraire. Le second événement est factuel (souvent au passé).",
    ex: [
      { jp: "ベルが鳴るが早いか、生徒たちは教室を飛び出した。", fr: "À peine la sonnerie retentie, les élèves se sont précipités hors de la classe." },
      { jp: "席に着くが早いか、彼は話し始めた。", fr: "À peine assis, il s'est mis à parler." },
    ],
    qs: [
      { t: "fill", q: "彼は家に着く＿＿＿、ベッドに倒れ込んだ。", fr: "À peine arrivé chez lui, il s'est effondré sur le lit.",
        o: ["が早いか", "うちに", "に際して", "とともに"], a: 0,
        e: "Deux actions quasi simultanées (littéraire) → 〜が早いか." },
      { t: "meaning", q: "「ドアが開くが早いか、犬が飛び出した」— sens ?",
        o: ["à peine la porte ouverte, le chien a bondi dehors", "le chien a ouvert la porte", "avant que la porte s'ouvre", "malgré la porte ouverte"], a: 0,
        e: "が早いか = dès que X, aussitôt Y." },
      { t: "nuance", q: "Registre de 〜が早いか :",
        o: ["écrit / littéraire", "argot", "enfantin", "interrogatif poli"], a: 0,
        e: "が早いか appartient au style écrit. Proche de や否や [[g096]]." },
    ],
  },

  {
    id: "g096", g: "〜や否や／〜や", m: "dès que, à peine… que", f: "V-辞書 + や否や／や",
    c: "time", lv: 3, rel: ["g095", "g037"],
    note: "Synonyme littéraire de が早いか. La forme courte 〜や est encore plus écrite. Le second événement suit immédiatement et est factuel.",
    ex: [
      { jp: "その知らせを聞くや否や、彼女は泣き出した。", fr: "À peine eut-elle entendu la nouvelle qu'elle fondit en larmes." },
      { jp: "彼は立ち上がるや、部屋を出て行った。", fr: "À peine debout, il quitta la pièce." },
    ],
    qs: [
      { t: "fill", q: "電車のドアが開く＿＿＿、人々はなだれ込んだ。", fr: "À peine les portes du train ouvertes, les gens se sont engouffrés.",
        o: ["や否や", "うちに", "限り", "に当たって"], a: 0,
        e: "Réaction immédiate (littéraire) → 〜や否や." },
      { t: "meaning", q: "「顔を見るや否や、怒り出した」— sens ?",
        o: ["dès qu'il a vu son visage, il s'est mis en colère", "avant de voir son visage", "malgré son visage", "il a vu après s'être fâché"], a: 0,
        e: "や否や = dès que / à peine… que." },
      { t: "usage", q: "〜や否や et 〜が早いか sont :",
        o: ["des synonymes littéraires (à peine… que)", "des opposés", "des formes familières", "des marqueurs de cause"], a: 0,
        e: "Même sens, registre écrit. Voir [[g095]]." },
    ],
  },

  {
    id: "g097", g: "〜そばから", m: "à peine… que déjà (et cela se répète)", f: "V-辞書／V-た + そばから",
    c: "time", lv: 3, rel: ["g095"],
    note: "Action immédiatement annulée/répétée : à peine X fait, Y l'efface, encore et encore. Souvent une situation pénible et récurrente (覚えるそばから忘れる).",
    ex: [
      { jp: "覚えるそばから忘れてしまう。", fr: "À peine appris, j'oublie déjà." },
      { jp: "片付けるそばから、子どもが散らかす。", fr: "À peine ai-je rangé que l'enfant remet le désordre." },
    ],
    qs: [
      { t: "fill", q: "注意する＿＿＿、また同じ間違いをする。", fr: "À peine l'a-t-on averti qu'il refait la même erreur.",
        o: ["そばから", "が早いか", "に当たって", "うちに"], a: 0,
        e: "Action immédiatement annulée et répétée → 〜そばから." },
      { t: "meaning", q: "「稼ぐそばから使ってしまう」— sens ?",
        o: ["à peine gagné, l'argent est déjà dépensé (et ça se répète)", "on gagne après avoir dépensé", "on ne gagne pas", "on dépense pour gagner"], a: 0,
        e: "そばから = répétition immédiate qui annule l'effet." },
      { t: "nuance", q: "Ce qui distingue そばから de が早いか :",
        o: ["そばから implique la répétition (ça recommence sans cesse)", "そばから est plus poli", "が早いか implique la répétition", "ils sont identiques"], a: 0,
        e: "そばから = caractère répétitif et souvent frustrant." },
    ],
  },

  {
    id: "g098", g: "〜末（に）／〜た末（に）", m: "au terme de, finalement (après bien des efforts)", f: "V-た／Nom+の + 末（に）",
    c: "time", lv: 2, rel: ["g108", "g107"],
    note: "Résultat final après un long processus/des hésitations. Le résultat peut être bon ou mauvais. 〜末の＋Nom modifie un nom (苦労の末の成功).",
    ex: [
      { jp: "悩んだ末に、留学を決めた。", fr: "Après bien des hésitations, j'ai décidé de partir étudier à l'étranger." },
      { jp: "激しい議論の末、結論が出た。", fr: "Au terme d'âpres débats, une conclusion a été atteinte." },
    ],
    qs: [
      { t: "fill", q: "長時間話し合った＿＿＿、計画は中止になった。", fr: "Au terme de longues discussions, le projet a été annulé.",
        o: ["末に", "うちに", "とたんに", "限り"], a: 0,
        e: "Résultat final après un long processus → 〜た末に." },
      { t: "meaning", q: "「苦労の末、成功した」— sens ?",
        o: ["au terme de bien des peines, on a réussi", "sans peine", "malgré le succès", "avant les peines"], a: 0,
        e: "末に = aboutissement d'un long processus." },
      { t: "nuance", q: "Distinguer 〜末に de 〜あげく :",
        o: ["末に = résultat (bon ou mauvais) après un processus ; あげく = issue souvent négative après bien des complications", "ils sont identiques", "末に est toujours négatif", "あげく est toujours positif"], a: 0,
        e: "あげく [[g099]] porte une nuance négative ; 末に est neutre." },
    ],
  },

  {
    id: "g099", g: "〜あげく（に）／〜たあげく", m: "et finalement (après tout ça), pour finir (négatif)", f: "V-た／Nom+の + あげく（に）",
    c: "time", lv: 2, rel: ["g098"],
    note: "Issue finale, généralement mauvaise/regrettable, après bien des efforts ou complications. 〜あげくの果てに renforce.",
    ex: [
      { jp: "さんざん迷ったあげく、何も買わなかった。", fr: "Après avoir longuement hésité, je n'ai finalement rien acheté." },
      { jp: "口論のあげく、二人は別れた。", fr: "Au terme de disputes, ils ont fini par se séparer." },
    ],
    qs: [
      { t: "fill", q: "彼は借金を重ねた＿＿＿、家を失った。", fr: "À force d'accumuler les dettes, il a finalement perdu sa maison.",
        o: ["あげく", "末に", "とたんに", "うちに"], a: 0,
        e: "Issue finale négative après bien des complications → 〜あげく." },
      { t: "meaning", q: "「長時間待たされたあげく、会えなかった」— sens ?",
        o: ["après une longue attente, je n'ai finalement pas pu le voir", "j'ai pu le voir vite", "je n'ai pas attendu", "j'ai voulu attendre"], a: 0,
        e: "あげく = aboutissement souvent décevant." },
      { t: "nuance", q: "Connotation typique de 〜あげく :",
        o: ["négative / regrettable", "positive et joyeuse", "neutre et technique", "interrogative"], a: 0,
        e: "あげく introduit une issue généralement fâcheuse. Comparer 末に [[g098]]." },
    ],
  },

  {
    id: "g100", g: "〜きり／〜きりだ", m: "depuis (et plus rien) ; seulement, rien que", f: "V-た／Nom + きり（＋ない）",
    c: "time", lv: 2, rel: ["g038"],
    note: "(1) V-たきり〜ない : après X, plus rien ne s'est passé (出かけたきり帰ってこない). (2) Limitation : 二人きり = rien que tous les deux ; これきり = juste cette fois.",
    ex: [
      { jp: "彼は朝出かけたきり、まだ帰ってこない。", fr: "Il est sorti ce matin et n'est toujours pas rentré." },
      { jp: "二人きりで話したい。", fr: "Je veux parler en tête-à-tête, rien que tous les deux." },
    ],
    qs: [
      { t: "fill", q: "祖母とは10年前に会った＿＿＿だ。", fr: "Je n'ai vu ma grand-mère qu'une fois, il y a dix ans (et plus depuis).",
        o: ["きり", "ばかり", "うち", "限り"], a: 0,
        e: "« Depuis X, plus rien » → V-たきり." },
      { t: "meaning", q: "「寝たきりの生活」— sens ?",
        o: ["une vie alitée (cloué au lit, sans plus se lever)", "une vie de sommeil agréable", "une vie active", "une sieste"], a: 0,
        e: "寝たきり = état où l'on reste alité (V-たきり = depuis X, rien d'autre)." },
      { t: "usage", q: "「これきりにしよう」: きり signifie ici :",
        o: ["seulement cette fois (limitation)", "depuis longtemps", "comparé à", "à cause de"], a: 0,
        e: "きり exprime aussi la limitation (rien que / seulement)." },
    ],
  },

  {
    id: "g101", g: "〜っぱなし", m: "laisser tel quel (sans remettre en état) ; ne pas arrêter de", f: "V-ます（語幹） + っぱなし",
    c: "time", lv: 2, rel: ["g100"],
    note: "(1) Laisser un état sans le corriger : 電気をつけっぱなし (laisser la lumière allumée). Souvent une critique (négligence). (2) Action continue : 立ちっぱなし (rester debout tout le temps).",
    ex: [
      { jp: "窓を開けっぱなしにして出かけた。", fr: "Je suis parti en laissant la fenêtre ouverte." },
      { jp: "一日中立ちっぱなしで足が疲れた。", fr: "Je suis resté debout toute la journée, j'ai mal aux pieds." },
    ],
    qs: [
      { t: "fill", q: "水を出し＿＿＿にしないでください。", fr: "Ne laissez pas l'eau couler sans arrêt.",
        o: ["っぱなし", "きり", "次第", "ばかり"], a: 0,
        e: "Laisser un état sans le corriger → V-ますっぱなし." },
      { t: "meaning", q: "「テレビをつけっぱなしで寝た」— sens ?",
        o: ["s'endormir en laissant la télé allumée", "éteindre la télé pour dormir", "regarder la télé éveillé", "allumer la télé en se réveillant"], a: 0,
        e: "っぱなし = laisser dans un état (ici allumé) sans le changer." },
      { t: "nuance", q: "〜っぱなし porte souvent une nuance de :",
        o: ["négligence / critique", "politesse", "incertitude", "comparaison"], a: 0,
        e: "Souvent reproche de laisser les choses en l'état." },
    ],
  },

  {
    id: "g102", g: "〜最中（に）", m: "en plein milieu de, juste pendant que", f: "V-ている／Nom+の + 最中（に）",
    c: "time", lv: 1, rel: ["g093", "g033"],
    note: "Au point culminant d'une action en cours, quand survient une interruption. Insiste sur « pile au pire moment ».",
    ex: [
      { jp: "会議の最中に、携帯が鳴ってしまった。", fr: "En plein milieu de la réunion, mon portable a sonné." },
      { jp: "食事をしている最中に、来客があった。", fr: "Pile pendant le repas, un visiteur est arrivé." },
    ],
    qs: [
      { t: "fill", q: "シャワーを浴びている＿＿＿、電話が鳴った。", fr: "En plein milieu de ma douche, le téléphone a sonné.",
        o: ["最中に", "上で", "限り", "次第"], a: 0,
        e: "« Pile pendant l'action » → 〜最中に." },
      { t: "meaning", q: "「試験の最中に居眠りした」— sens ?",
        o: ["s'assoupir en plein examen", "avant l'examen", "après l'examen", "à propos de l'examen"], a: 0,
        e: "最中に = au beau milieu de l'action." },
      { t: "nuance", q: "〜最中に insiste sur :",
        o: ["le point culminant d'une action en cours (le pire moment)", "une simple succession", "une comparaison", "une condition"], a: 0,
        e: "Nuance « pile au moment le plus engagé »." },
    ],
  },

  {
    id: "g103", g: "〜かたわら", m: "tout en (faisant X, faire Y en parallèle)", f: "V-辞書／Nom+の + かたわら",
    c: "time", lv: 3, rel: ["g104", "g026"],
    note: "Mener une activité secondaire en parallèle d'une activité principale, sur la durée (carrière, vie). Style écrit. 仕事のかたわら、小説を書く.",
    ex: [
      { jp: "彼は会社員として働くかたわら、小説を書いている。", fr: "Tout en travaillant comme salarié, il écrit des romans." },
      { jp: "家事のかたわら、ボランティアもしている。", fr: "En parallèle des tâches ménagères, elle fait aussi du bénévolat." },
    ],
    qs: [
      { t: "fill", q: "大学で教える＿＿＿、研究も続けている。", fr: "Tout en enseignant à l'université, il poursuit ses recherches.",
        o: ["かたわら", "とたんに", "が早いか", "限り"], a: 0,
        e: "Activité parallèle sur la durée → 〜かたわら." },
      { t: "meaning", q: "「主婦業のかたわら、絵を描く」— sens ?",
        o: ["peindre en parallèle de son rôle de femme au foyer", "peindre au lieu des tâches", "ne pas peindre", "peindre avant les tâches"], a: 0,
        e: "かたわら = activité secondaire menée en parallèle." },
      { t: "nuance", q: "Distinguer 〜かたわら de 〜ながら :",
        o: ["かたわら = deux activités sur la durée (vie/carrière) ; ながら = deux actions simultanées dans l'instant", "ils sont identiques", "かたわら est familier", "ながら exprime le temps long"], a: 0,
        e: "かたわら = échelle longue ; ながら = simultanéité immédiate. Voir [[g026]]." },
    ],
  },

  {
    id: "g104", g: "〜がてら", m: "par la même occasion, en faisant aussi", f: "V-ます（語幹）／Nom + がてら",
    c: "time", lv: 3, rel: ["g103"],
    note: "Profiter d'une action pour en faire une autre en même temps (action unique à double but). 散歩がてら買い物する = faire les courses en profitant de la promenade.",
    ex: [
      { jp: "散歩がてら、パンを買ってきた。", fr: "J'ai acheté du pain en profitant de ma promenade." },
      { jp: "運動がてら、駅まで歩いた。", fr: "J'ai marché jusqu'à la gare, histoire de faire un peu d'exercice." },
    ],
    qs: [
      { t: "fill", q: "気分転換＿＿＿、近所を散歩した。", fr: "Je me suis promené dans le quartier pour me changer les idées, par la même occasion.",
        o: ["がてら", "かたわら", "最中に", "限り"], a: 0,
        e: "Une action à double but → 〜がてら." },
      { t: "meaning", q: "「買い物がてら友達に会った」— sens ?",
        o: ["voir un ami en profitant des courses", "faire les courses au lieu de voir l'ami", "ne pas voir l'ami", "voir l'ami avant les courses"], a: 0,
        e: "がてら = par la même occasion." },
      { t: "nuance", q: "Différence entre がてら et かたわら :",
        o: ["がてら = une seule sortie/action à double but ; かたわら = deux activités menées durablement en parallèle", "ils sont identiques", "がてら concerne la carrière", "かたわら est ponctuel"], a: 0,
        e: "がてら = ponctuel ; かたわら = sur la durée. Voir [[g103]]." },
    ],
  },

  /* ===================== AJOUTS — CONDITION & CAUSE ===================== */

  {
    id: "g105", g: "〜さえ〜ば", m: "il suffit que… pour que ; si seulement", f: "Nom + さえ＋V-ば／A-ければ／Nならば",
    c: "condition", lv: 1, rel: ["g041", "g119"],
    note: "Condition minimale suffisante : « une seule chose suffit ». さえ met en valeur le mot-clé, ば introduit la condition.",
    ex: [
      { jp: "君さえいれば、他には何もいらない。", fr: "Si seulement tu es là, je n'ai besoin de rien d'autre." },
      { jp: "健康さえあれば、何でもできる。", fr: "Il suffit d'avoir la santé pour tout pouvoir faire." },
    ],
    qs: [
      { t: "fill", q: "辞書＿＿＿あれば、この翻訳はできる。", fr: "Il suffit d'avoir un dictionnaire pour faire cette traduction.",
        o: ["さえ", "だけ", "しか", "ほど"], a: 0,
        e: "Condition minimale suffisante → 〜さえ〜ば." },
      { t: "meaning", q: "「練習さえすれば上手くなる」— sens ?",
        o: ["il suffit de pratiquer pour s'améliorer", "pratiquer ne sert à rien", "même sans pratiquer on s'améliore", "il faut beaucoup de conditions"], a: 0,
        e: "さえ〜ば = une seule condition suffit." },
      { t: "nuance", q: "〜さえ〜ば insiste sur :",
        o: ["la condition minimale et unique", "l'impossibilité totale", "une succession temporelle", "une comparaison"], a: 0,
        e: "さえ met en relief que c'est la seule et unique condition nécessaire." },
    ],
  },

  {
    id: "g106", g: "〜としたら／〜とすれば／〜とすると", m: "à supposer que, si l'on part du principe que", f: "普通形 + としたら／とすれば／とすると",
    c: "condition", lv: 1, rel: ["g082", "g116"],
    note: "Hypothèse pure : raisonnement à partir d'un cas supposé. とすれば insiste sur la déduction ; とすると/としたら sont légèrement plus neutres.",
    ex: [
      { jp: "このまま行くとしたら、何時間かかりますか。", fr: "Si l'on y va comme ça, combien d'heures faudra-t-il ?" },
      { jp: "彼女が本当のことを言っているとすれば、事件は複雑だ。", fr: "À supposer qu'elle dise la vérité, l'affaire est complexe." },
    ],
    qs: [
      { t: "fill", q: "もし自分が鳥だった＿＿＿、どこへでも飛んで行くのに。", fr: "Si j'étais un oiseau, j'irais voler n'importe où.",
        o: ["としたら", "からこそ", "に際して", "に基づいて"], a: 0,
        e: "Hypothèse fictive → 〜としたら." },
      { t: "meaning", q: "「それが本当だとすれば、大変なことだ」— sens ?",
        o: ["si l'on suppose que c'est vrai, c'est grave", "parce que c'est vrai", "bien que ce soit vrai", "après que ce fut vrai"], a: 0,
        e: "とすれば = à supposer que / si l'on part du principe." },
      { t: "nuance", q: "Parmi les trois variantes, laquelle insiste le plus sur la déduction ?",
        o: ["とすれば", "としたら", "とすると", "elles sont identiques"], a: 0,
        e: "とすれば met l'accent sur la conséquence logique déduite." },
    ],
  },

  {
    id: "g107", g: "〜ものなら", m: "si jamais (c'était possible) ; si par hasard (menace légère)", f: "V-可能形 + ものなら（V-辞書）；V-辞書 + ものなら",
    c: "condition", lv: 2, rel: ["g108", "g041"],
    note: "(1) Souhait quasi irréalisable : できるものならやってみたい (si seulement c'était possible). (2) Menace voilée : そんなことをするものなら、後悔するぞ.",
    ex: [
      { jp: "やり直せるものなら、やり直したい。", fr: "Si seulement je pouvais recommencer, je le ferais." },
      { jp: "逃げるものなら、逃げてみろ。", fr: "Essaie un peu de t'enfuir, si tu l'oses." },
    ],
    qs: [
      { t: "fill", q: "もし過去に戻れる＿＿＿、あの時の失敗を取り消したい。", fr: "Si jamais je pouvais retourner dans le passé, j'effacerais cette erreur.",
        o: ["ものなら", "からには", "以上は", "限り"], a: 0,
        e: "Souhait quasi irréalisable → 〜ものなら." },
      { t: "meaning", q: "「文句を言うものなら、すぐ首にするぞ」— sens ?",
        o: ["si jamais tu te plains, tu es viré sur le champ", "tu peux te plaindre", "malgré les plaintes", "parce que tu te plains"], a: 0,
        e: "ものなら (sens menace) : si tu oses faire X, gare à toi." },
      { t: "nuance", q: "Distinguer les deux emplois de 〜ものなら :",
        o: ["V-可能形 + ものなら = souhait irréalisable ; V-辞書 + ものなら = défi / menace", "ils sont toujours identiques", "ものなら = simple condition", "ものなら = cause"], a: 0,
        e: "Le verbe avant ものなら détermine le sens." },
    ],
  },

  {
    id: "g108", g: "〜ようものなら", m: "si jamais on osait (avec conséquence grave)", f: "V-意向形 + ものなら",
    c: "condition", lv: 3, rel: ["g107"],
    note: "Variante de ものなら qui accentue le caractère grave/désastreux de la conséquence. Souvent avec une menace explicite.",
    ex: [
      { jp: "上司に反論しようものなら、大変なことになる。", fr: "Si jamais tu oses contredire ton supérieur, ça va mal se passer." },
      { jp: "ここで失敗しようものなら、取り返しがつかない。", fr: "Si jamais on échoue ici, c'est irréparable." },
    ],
    qs: [
      { t: "fill", q: "遅刻し＿＿＿、絶対怒られる。", fr: "Si jamais tu te permettais d'être en retard, tu te ferais sûrement gronder.",
        o: ["ようものなら", "ものなら", "てからでないと", "て以来"], a: 0,
        e: "Conséquence grave si l'on ose X → 〜ようものなら." },
      { t: "meaning", q: "「彼の前で失敗しようものなら、終わりだ」— sens ?",
        o: ["si jamais tu échoues devant lui, c'est fini", "tu peux échouer", "après l'échec", "malgré l'échec"], a: 0,
        e: "ようものなら = désastre assuré en cas de X." },
      { t: "usage", q: "〜ようものなら s'emploie avec :",
        o: ["V-意向形 (〜よう)", "V-て", "V-た", "V-ない"], a: 0,
        e: "La forme intentionnelle ようものなら renforce la menace." },
    ],
  },

  {
    id: "g109", g: "〜ないことには", m: "à moins que (ne pas faire X), sans X impossible", f: "V-ない／A-くない／Nom+でない + ことには",
    c: "condition", lv: 2, rel: ["g041", "g119"],
    note: "Condition indispensable pour que la suite soit possible : « sans X, Y impossible ». Souvent suivi d'une négation ou d'une expression d'impossibilité.",
    ex: [
      { jp: "実際に試してみないことには、分からない。", fr: "Sans l'essayer réellement, on ne peut pas savoir." },
      { jp: "本人が来ないことには、話し合いにならない。", fr: "Sans la présence de l'intéressé, la discussion est impossible." },
    ],
    qs: [
      { t: "fill", q: "予算がわから＿＿＿、計画が立てられない。", fr: "Sans connaître le budget, impossible d'établir un plan.",
        o: ["ないことには", "なければ", "なくて", "ないで"], a: 0,
        e: "Condition préalable indispensable → 〜ないことには." },
      { t: "meaning", q: "「勉強しないことには、試験に受からない」— sens ?",
        o: ["sans étudier, on ne peut pas réussir l'examen", "même sans étudier on réussit", "étudier est inutile", "on réussit à condition de ne pas étudier"], a: 0,
        e: "ないことには = X est la condition sine qua non." },
      { t: "nuance", q: "La suite de 〜ないことには est presque toujours :",
        o: ["une expression négative / d'impossibilité", "une expression positive", "un ordre", "une question"], a: 0,
        e: "ないことには appelle 〜ない / 〜にならない / 難しい etc." },
    ],
  },

  {
    id: "g110", g: "〜からこそ", m: "justement parce que, c'est précisément parce que", f: "普通形 + からこそ",
    c: "condition", lv: 1, rel: ["g085", "g111"],
    note: "Isole et met en valeur la cause réelle, souvent pour expliquer un résultat positif ou pour réfuter une incompréhension. Emphase forte.",
    ex: [
      { jp: "苦労したからこそ、今の成功がある。", fr: "C'est précisément parce que j'ai souffert que le succès d'aujourd'hui existe." },
      { jp: "信頼しているからこそ、厳しいことを言う。", fr: "Justement parce que j'ai confiance en toi, je te dis des choses dures." },
    ],
    qs: [
      { t: "fill", q: "努力した＿＿＿、この結果が得られた。", fr: "C'est justement parce que tu as travaillé dur que tu as obtenu ce résultat.",
        o: ["からこそ", "から", "ことから", "ので"], a: 0,
        e: "Insister sur la cause réelle → 〜からこそ." },
      { t: "meaning", q: "「子どもだからこそ、純粋なんだ」— sens ?",
        o: ["c'est précisément parce que c'est un enfant qu'il est pur", "malgré son jeune âge", "bien qu'il soit enfant", "l'enfant est pur sans raison"], a: 0,
        e: "からこそ met en valeur la cause comme élément essentiel." },
      { t: "nuance", q: "Nuance de からこそ par rapport à から :",
        o: ["からこそ insiste : c'est CETTE raison et pas une autre", "ils sont identiques", "からこそ est négatif", "から insiste davantage"], a: 0,
        e: "こそ (particule d'emphase) isole et valorise la cause." },
    ],
  },

  {
    id: "g111", g: "〜ことから", m: "du fait que, c'est de là que vient", f: "普通形 + ことから",
    c: "condition", lv: 2, rel: ["g110", "g043"],
    note: "Explication d'une origine ou d'une dénomination : « à partir du fait que X, on en déduit / c'est pour ça que le nom est… ». Différent de 〜ので (cause directe).",
    ex: [
      { jp: "葉が三枚あることから、この草は「三葉草」と呼ばれる。", fr: "Du fait que la plante a trois feuilles, on l'appelle « trèfle »." },
      { jp: "声が大きいことから、彼は「雷」というあだ名がついた。", fr: "Du fait qu'il a une voix forte, il a reçu le surnom de « Tonnerre »." },
    ],
    qs: [
      { t: "fill", q: "この地域が霧で有名な＿＿＿、「霧の町」と呼ばれている。", fr: "Du fait que cette région est réputée pour ses brouillards, on l'appelle « la ville du brouillard ».",
        o: ["ことから", "ことで", "ことに", "ことだから"], a: 0,
        e: "Origine d'une dénomination ou déduction → 〜ことから." },
      { t: "meaning", q: "「態度が堂々としていることから、リーダーに選ばれた」— sens ?",
        o: ["du fait qu'il a une attitude assurée, il a été choisi comme leader", "malgré son attitude assurée", "bien qu'il soit leader", "pour devenir leader"], a: 0,
        e: "ことから = base explicative d'une déduction/décision." },
      { t: "nuance", q: "〜ことから s'emploie surtout pour :",
        o: ["expliquer l'origine d'un nom / une déduction fondée sur un fait", "exprimer une cause directe immédiate", "exprimer un souhait", "exprimer une comparaison"], a: 0,
        e: "ことから ≠ ので : il explique l'origine ou une déduction, pas juste une cause." },
    ],
  },

  {
    id: "g112", g: "〜だけあって", m: "à la hauteur de sa réputation ; comme on peut s'y attendre de la part de", f: "普通形／Nom + だけあって",
    c: "condition", lv: 2, rel: ["g045", "g110"],
    note: "Le résultat est logiquement à la hauteur de X (mérite, statut, efforts). X justifie positivement Y. Nuance positive.",
    ex: [
      { jp: "プロだけあって、仕事が丁寧だ。", fr: "Comme on peut s'y attendre d'un pro, le travail est soigné." },
      { jp: "練習しただけあって、上達が早い。", fr: "À la hauteur des efforts fournis, les progrès sont rapides." },
    ],
    qs: [
      { t: "fill", q: "有名シェフ＿＿＿、料理の味は最高だ。", fr: "Comme on peut s'y attendre d'un chef réputé, la cuisine est excellente.",
        o: ["だけあって", "だけに", "ばかりに", "せいで"], a: 0,
        e: "Résultat à la hauteur du mérite/statut → 〜だけあって." },
      { t: "meaning", q: "「長年の経験があるだけあって、判断が的確だ」— sens ?",
        o: ["à la hauteur de ses longues années d'expérience, son jugement est juste", "malgré l'expérience", "parce qu'il manque d'expérience", "bien qu'il soit expérimenté"], a: 0,
        e: "だけあって = mérite justifie logiquement le résultat (positif)." },
      { t: "nuance", q: "Distinguer だけあって de だけに :",
        o: ["だけあって = résultat positif attendu ; だけに = renforcement (bon ou mauvais)", "ils sont identiques", "だけに est toujours positif", "だけあって est négatif"], a: 0,
        e: "だけあって → résultat valorisant ; だけに [[g045]] peut être positif ou négatif." },
    ],
  },

  {
    id: "g113", g: "〜あまり（に）", m: "tellement (que), à force de trop", f: "V-辞書＋あまり／Nom+の+あまり",
    c: "condition", lv: 2, rel: ["g046", "g158"],
    note: "Un état/sentiment excessif entraîne une conséquence involontaire, souvent négative. 心配のあまり眠れなかった (à force de s'inquiéter, impossible de dormir).",
    ex: [
      { jp: "嬉しさのあまり、涙が出てしまった。", fr: "Tellement contente qu'elle en a pleuré." },
      { jp: "心配するあまり、食事も喉を通らない。", fr: "À force de s'inquiéter, impossible d'avaler quoi que ce soit." },
    ],
    qs: [
      { t: "fill", q: "緊張する＿＿＿、頭が真っ白になった。", fr: "Tellement stressé que son esprit s'est vidé.",
        o: ["あまり", "ばかりに", "せいで", "からこそ"], a: 0,
        e: "État excessif → conséquence involontaire → 〜あまり." },
      { t: "meaning", q: "「驚きのあまり声が出なかった」— sens ?",
        o: ["tellement surpris qu'aucun son ne sortait", "malgré la surprise", "pour être surpris", "après la surprise"], a: 0,
        e: "〜のあまり = à force de (sentiment excessif)." },
      { t: "nuance", q: "〜あまり porte généralement une connotation :",
        o: ["involontaire, souvent négative (conséquence excessive)", "planifiée", "neutre et technique", "positive et souhaitée"], a: 0,
        e: "La conséquence de あまり est non voulue, excessive." },
    ],
  },

  {
    id: "g114", g: "〜につき", m: "en raison de (formel) ; par, à raison de", f: "Nom + につき",
    c: "condition", lv: 2, rel: ["g003"],
    note: "(1) Cause formelle (panneaux, annonces) : 工事中につき通行止め (route barrée pour travaux). (2) Distributif : 一人につき (par personne). Registre formel/écrit.",
    ex: [
      { jp: "都合につき、本日は休業します。", fr: "Pour raison de commodité, nous sommes fermés aujourd'hui." },
      { jp: "一人につき、三枚まで購入できます。", fr: "Vous pouvez acheter jusqu'à trois tickets par personne." },
    ],
    qs: [
      { t: "fill", q: "改装工事＿＿＿、しばらく休館します。", fr: "En raison de travaux de rénovation, nous fermons temporairement.",
        o: ["につき", "にとって", "について", "にわたって"], a: 0,
        e: "Cause formelle (panneau/annonce) → 〜につき." },
      { t: "meaning", q: "「一個につき500円」— sens ?",
        o: ["500 yens par article (distributif)", "500 yens à propos d'un article", "500 yens malgré l'article", "500 yens pour tout"], a: 0,
        e: "につき (distributif) = par unité." },
      { t: "usage", q: "〜につき s'emploie principalement dans quel registre ?",
        o: ["formel / écrit (panneaux, annonces)", "familier / oral", "enfantin", "poétique"], a: 0,
        e: "につき est typique des panneaux, notices et écrits officiels." },
    ],
  },

  {
    id: "g115", g: "〜とあって", m: "étant donné que (circonstance spéciale), du fait que", f: "普通形／Nom + とあって",
    c: "condition", lv: 3, rel: ["g043", "g110"],
    note: "Souligne une circonstance particulière qui explique une situation / une réaction. Registre semi-formel. La circonstance est souvent inhabituelle ou marquante.",
    ex: [
      { jp: "連休とあって、高速道路は渋滞している。", fr: "Étant donné que c'est un long week-end, l'autoroute est embouteillée." },
      { jp: "有名人が来るとあって、会場は大にぎわいだ。", fr: "Du fait qu'une célébrité vient, la salle est en pleine effervescence." },
    ],
    qs: [
      { t: "fill", q: "初の海外公演＿＿＿、練習に熱が入っている。", fr: "Étant donné que c'est leur première tournée à l'étranger, les répétitions sont très intenses.",
        o: ["とあって", "について", "として", "にとって"], a: 0,
        e: "Circonstance spéciale qui explique une réaction → 〜とあって." },
      { t: "meaning", q: "「試験前とあって、図書館は満員だ」— sens ?",
        o: ["étant donné que c'est avant l'examen, la bibliothèque est pleine", "malgré l'examen", "à propos de l'examen", "après l'examen"], a: 0,
        e: "とあって = circonstance particulière → état/réaction explicable." },
      { t: "nuance", q: "〜とあって décrit une circonstance qui est :",
        o: ["particulière / inhabituelle, qui justifie l'état", "ordinaire", "hypothétique", "négative seulement"], a: 0,
        e: "とあって présuppose une circonstance hors du commun." },
    ],
  },

  {
    id: "g116", g: "〜ては（〜ては）／〜ていては", m: "si (chaque fois que), à chaque fois que (et c'est mauvais)", f: "V-て + は／V-ていて + は",
    c: "condition", lv: 2, rel: ["g041", "g109"],
    note: "(1) Répétition alternée : 飲んでは食べ、食べては飲む. (2) Condition indésirable récurrente (souvent suivi de 〜ない) : 毎日遅刻しては困る.",
    ex: [
      { jp: "毎日そんなに食べていては、太るのは当然だ。", fr: "Si on mange autant tous les jours, il est normal de grossir." },
      { jp: "やっては消し、消してはやり直す。", fr: "On fait, on efface, on efface, on recommence." },
    ],
    qs: [
      { t: "fill", q: "そんなに夜更かしし＿＿＿、体に悪い。", fr: "Si tu te couches aussi tard comme ça, c'est mauvais pour ta santé.",
        o: ["ては", "たら", "ても", "なら"], a: 0,
        e: "Condition indésirable récurrente → 〜ては." },
      { t: "meaning", q: "「考えては書き、書いては消す」— sens ?",
        o: ["réfléchir et écrire, écrire et effacer (alternance)", "on réfléchit malgré tout", "on n'écrit pas", "une seule fois"], a: 0,
        e: "〜ては〜 exprime une alternance d'actions répétées." },
      { t: "nuance", q: "「ミスをしては困る」: 〜ては exprime ici :",
        o: ["une condition indésirable dont la répétition est problématique", "une cause unique", "un souhait futur", "une alternance neutre"], a: 0,
        e: "〜ては (+ 困る/いけない) = il est problématique que ça se répète." },
    ],
  },

  {
    id: "g117", g: "〜なくしては／〜なしには", m: "sans (X indispensable), impossible sans", f: "Nom + なくしては／なしには（〜ない）",
    c: "condition", lv: 2, rel: ["g076", "g109"],
    note: "X est une condition absolument nécessaire. La négation en fin de phrase est presque toujours présente.",
    ex: [
      { jp: "努力なくして、成功はない。", fr: "Sans effort, pas de succès." },
      { jp: "あなたの協力なしには、この仕事は完成しない。", fr: "Sans votre coopération, ce travail ne sera pas terminé." },
    ],
    qs: [
      { t: "fill", q: "愛情＿＿＿、子どもは健全に育たない。", fr: "Sans amour, un enfant ne peut pas grandir sainement.",
        o: ["なくしては", "について", "にわたって", "として"], a: 0,
        e: "Condition absolument nécessaire → 〜なくしては." },
      { t: "meaning", q: "「信頼なしには良い関係は築けない」— sens ?",
        o: ["sans confiance, impossible de bâtir une bonne relation", "la confiance est inutile", "malgré la confiance", "à propos de la confiance"], a: 0,
        e: "なしには = X est indispensable." },
      { t: "nuance", q: "〜なくしては et 〜ないことには [[g109]] diffèrent par :",
        o: ["なくしては porte sur un nom (état) ; ないことには porte sur une action à accomplir", "ils sont identiques", "なくしては est positif", "ないことには s'emploie avec des noms"], a: 0,
        e: "なくしては + Nom (X absent) ; ないことには + V-ない (action non faite)." },
    ],
  },

  {
    id: "g118", g: "〜ばこそ", m: "c'est justement parce que… (emphase formelle)", f: "V-ば + こそ",
    c: "condition", lv: 3, rel: ["g110"],
    note: "Version emphatique et formelle de からこそ. Insiste sur la cause réelle, souvent pour justifier une action difficile ou pour défendre une décision.",
    ex: [
      { jp: "あなたのことを思えばこそ、厳しく言うのです。", fr: "C'est précisément en pensant à vous que je dis des choses dures." },
      { jp: "成功を信じればこそ、努力できる。", fr: "C'est parce qu'on croit au succès qu'on peut faire des efforts." },
    ],
    qs: [
      { t: "fill", q: "将来のことを考えれ＿＿＿、今が大事だ。", fr: "C'est justement en pensant à l'avenir que le présent est important.",
        o: ["ばこそ", "ばかりに", "からこそ", "ものの"], a: 0,
        e: "Emphase formelle sur la cause → 〜ばこそ." },
      { t: "meaning", q: "「信頼すればこそ、任せるのだ」— sens ?",
        o: ["c'est précisément parce qu'on lui fait confiance qu'on lui confie la tâche", "on lui confie malgré le doute", "on ne lui confie pas", "parce qu'on ne lui fait pas confiance"], a: 0,
        e: "ばこそ = cause réelle mise en valeur (registre formel)." },
      { t: "usage", q: "〜ばこそ est la version … de からこそ :",
        o: ["formelle / littéraire", "familière", "interrogative", "négative"], a: 0,
        e: "ばこそ = registre soutenu de からこそ." },
    ],
  },

  {
    id: "g119", g: "〜ことだし", m: "étant donné que, puisque (raison dans le contexte)", f: "普通形 + ことだし",
    c: "condition", lv: 2, rel: ["g043", "g115"],
    note: "Donne une raison pratique/contextuelle pour ce qui suit. Ton oral/familier, souvent sous-entend une décision ou une suggestion. Peut s'enchaîner : 〜ことだし、〜ことだし.",
    ex: [
      { jp: "せっかく来たことだし、もう少しゆっくりしていってください。", fr: "Puisque vous avez fait l'effort de venir, restez encore un peu." },
      { jp: "天気もいいことだし、散歩でもしよう。", fr: "Puisque le temps est beau, allons faire une promenade." },
    ],
    qs: [
      { t: "fill", q: "時間もある＿＿＿、映画でも見ようか。", fr: "Puisqu'on a du temps, on pourrait aller voir un film.",
        o: ["ことだし", "からこそ", "ことから", "ことに"], a: 0,
        e: "Raison pratique contextuelle → 〜ことだし." },
      { t: "meaning", q: "「新年だることだし、気持ちを切り替えよう」— sens ?",
        o: ["puisque c'est la nouvelle année, changeons d'état d'esprit", "malgré la nouvelle année", "à propos de la nouvelle année", "après la nouvelle année"], a: 0,
        e: "ことだし = « vu les circonstances (X), faisons Y »." },
      { t: "usage", q: "〜ことだし est de registre :",
        o: ["oral / semi-familier", "très formel / écrit", "enfantin", "poétique"], a: 0,
        e: "ことだし s'entend dans la conversation naturelle." },
    ],
  },

  {
    id: "g120", g: "〜てからというもの", m: "depuis que (et tout a changé)", f: "V-て + からというもの",
    c: "time", lv: 2, rel: ["g038"],
    note: "Changement durable depuis un événement charnière. Insiste sur le fait que depuis X, les choses sont fondamentalement différentes. Plus emphatique que 〜てから.",
    ex: [
      { jp: "子どもが生まれてからというもの、生活が一変した。", fr: "Depuis la naissance de mon enfant, ma vie a complètement changé." },
      { jp: "あの映画を見てからというもの、毎日泣いている。", fr: "Depuis que j'ai vu ce film, je pleure tous les jours." },
    ],
    qs: [
      { t: "fill", q: "彼女と付き合い始めて＿＿＿、毎日が楽しい。", fr: "Depuis que je sors avec elle, chaque jour est une joie.",
        o: ["からというもの", "から", "て以来", "とともに"], a: 0,
        e: "Changement durable depuis un événement charnière → 〜てからというもの." },
      { t: "meaning", q: "「転職してからというもの、忙しくなった」— sens ?",
        o: ["depuis le changement de travail, tout est devenu plus chargé (durablement)", "avant le changement de travail", "malgré le changement", "pour changer de travail"], a: 0,
        e: "からというもの insiste sur la transformation durable." },
      { t: "nuance", q: "Distinguer 〜てからというもの de 〜て以来 [[g038]] :",
        o: ["からというもの insiste sur le changement radical ; て以来 note simplement la continuité depuis X", "ils sont identiques", "て以来 exprime le changement radical", "からというもの est plus formel"], a: 0,
        e: "からというもの = emphase sur le bouleversement durable." },
    ],
  },

  /* ===================== AJOUTS — MODALITÉ & JUGEMENT ===================== */

  {
    id: "g121", g: "〜ことはない", m: "pas besoin de, inutile de", f: "V-辞書 + ことはない",
    c: "modality", lv: 1, rel: ["g054", "g131"],
    note: "Déconseille ou rend inutile une action. « Il n'y a pas lieu de… ». Différent de 〜ことができない (impossibilité) et de 〜ないことはない (double négation = possible).",
    ex: [
      { jp: "そんなに急ぐことはない。", fr: "Pas besoin de se dépresser à ce point." },
      { jp: "一度の失敗で落ち込むことはない。", fr: "Inutile de te décourager pour un seul échec." },
    ],
    qs: [
      { t: "fill", q: "たった一度のミスで謝り続ける＿＿＿。", fr: "Inutile de s'excuser sans fin pour une seule erreur.",
        o: ["ことはない", "わけにはいかない", "はずがない", "べきだ"], a: 0,
        e: "« Inutile de / pas besoin de » → 〜ことはない." },
      { t: "meaning", q: "「泣くことはない、大丈夫だよ」— sens ?",
        o: ["pas besoin de pleurer, ça va aller", "tu dois pleurer", "tu ne peux pas pleurer", "si seulement tu pleurais"], a: 0,
        e: "ことはない = conseille de ne pas faire X (c'est inutile)." },
      { t: "nuance", q: "Distinguer 〜ことはない de 〜ないことはない :",
        o: ["ことはない = inutile ; ないことはない = double négation (c'est possible, bien que…)", "ils sont identiques", "ないことはない = impossible", "ことはない = il faut faire"], a: 0,
        e: "ないことはない = possible malgré tout (sous-entendu réticent)." },
    ],
  },

  {
    id: "g122", g: "〜ものではない／〜もんじゃない", m: "on ne doit pas (norme sociale)", f: "V-辞書 + ものではない",
    c: "modality", lv: 2, rel: ["g062", "g054"],
    note: "Interdit ou désapprouve sur la base d'une norme morale/sociale. もんじゃない est l'équivalent familier.",
    ex: [
      { jp: "人の秘密を勝手にしゃべるものではない。", fr: "On ne va pas révéler le secret de quelqu'un sans permission." },
      { jp: "食事中にそんな話をするものではない。", fr: "Ce n'est pas une conversation à avoir à table." },
    ],
    qs: [
      { t: "fill", q: "目上の人に失礼な言葉を使う＿＿＿。", fr: "On ne doit pas employer des mots irrespectueux envers ses supérieurs.",
        o: ["ものではない", "ことはない", "はずがない", "わけにはいかない"], a: 0,
        e: "Interdiction fondée sur une norme → 〜ものではない." },
      { t: "meaning", q: "「お世話になった人を裏切るものではない」— sens ?",
        o: ["on ne doit pas trahir ceux qui nous ont aidés", "il est impossible de les trahir", "pas besoin de les aider", "c'est sûr qu'on les trahira"], a: 0,
        e: "ものではない = prescription sociale ou morale négative." },
      { t: "nuance", q: "Registre de 〜もんじゃない :",
        o: ["familier / oral (variante de ものではない)", "très formel", "écrit technique", "poétique"], a: 0,
        e: "もんじゃない est la forme contractée familière de ものではない." },
    ],
  },

  {
    id: "g123", g: "〜というものだ", m: "c'est vraiment ça, voilà ce qu'on appelle vraiment", f: "普通形 + というものだ",
    c: "modality", lv: 2, rel: ["g050", "g124"],
    note: "Affirme que quelque chose illustre parfaitement la définition d'un concept. Souvent après 〜こそ pour l'emphase. Nuance approbatrice ou ironique.",
    ex: [
      { jp: "困ったときに助けてくれる人こそ、本当の友達というものだ。", fr: "Celui qui vous aide dans les moments difficiles, voilà ce qu'on appelle un vrai ami." },
      { jp: "子どもに勉強させるだけでは、教育とはいえない。大切なのは考える力を育てることこそ、真の教育というものだ。", fr: "Voilà ce qu'est la vraie éducation." },
    ],
    qs: [
      { t: "fill", q: "諦めずに続ける、それこそが努力という＿＿＿。", fr: "Continuer sans abandonner — voilà ce qu'est vraiment l'effort.",
        o: ["ものだ", "わけだ", "はずだ", "べきだ"], a: 0,
        e: "Définition emblématique d'un concept → 〜というものだ." },
      { t: "meaning", q: "「こんな仕打ちを受けるなんて、理不尽というものだ」— sens ?",
        o: ["subir ça, c'est ce qu'on appelle vraiment l'injustice", "c'est peut-être juste", "c'est supposé être juste", "il faut subir"], a: 0,
        e: "というものだ affirme que X illustre parfaitement la notion." },
      { t: "nuance", q: "〜というものだ vs 〜わけだ :",
        o: ["というものだ = définition emblématique ; わけだ = explication logique d'une situation", "ils sont identiques", "わけだ exprime la définition", "というものだ = cause"], a: 0,
        e: "というものだ = « voilà la vraie définition » ; わけだ = « c'est logique »." },
    ],
  },

  {
    id: "g124", g: "〜というものではない／〜というものでもない", m: "ce n'est pas forcément, pas nécessairement", f: "普通形 + というものではない",
    c: "modality", lv: 2, rel: ["g123", "g051"],
    note: "Nuance ou corrige une généralisation : « on ne peut pas dire que X soit toujours vrai ». Proche de とは限らない mais plus axiomatique.",
    ex: [
      { jp: "謝れば何でも解決するというものではない。", fr: "Ce n'est pas parce qu'on s'excuse que tout se résout forcément." },
      { jp: "高ければ良いというものでもない。", fr: "Ce n'est pas forcément parce que c'est cher que c'est bon." },
    ],
    qs: [
      { t: "fill", q: "お金があれば幸せになれる＿＿＿。", fr: "Ce n'est pas forcément l'argent qui rend heureux.",
        o: ["というものではない", "わけだ", "はずがない", "に違いない"], a: 0,
        e: "Nuancer une généralisation → 〜というものではない." },
      { t: "meaning", q: "「長ければ良い文章というものではない」— sens ?",
        o: ["un bon texte n'est pas forcément long", "les textes longs sont toujours bons", "les textes courts sont mauvais", "on doit écrire long"], a: 0,
        e: "というものではない = rejette la généralisation." },
      { t: "nuance", q: "〜というものではない et 〜とは限らない [[g142]] :",
        o: ["sens proches (pas forcément) ; というものではない plus axiomatique ; とは限らない plus factuel", "opposés", "というものではない est plus factuel", "ils n'ont aucun rapport"], a: 0,
        e: "Nuance légère : というものではない nie un principe ; とは限らない nuance un fait." },
    ],
  },

  {
    id: "g125", g: "〜まい", m: "ne pas faire (intention négative) ; improbable (négation de vrai)", f: "V-辞書（一段: 語幹）+ まい",
    c: "modality", lv: 2, rel: ["g054", "g137"],
    note: "(1) Intention négative à la 1ère personne : もう二度と遅刻するまい (je ne serai plus jamais en retard). (2) Probabilité négative (3ème pers.) : あの人はもう来るまい. Registre assez formel.",
    ex: [
      { jp: "あんな思いはもう二度とするまいと誓った。", fr: "J'ai juré de ne plus jamais vivre une telle expérience." },
      { jp: "あれほど失敗したのだから、もう挑戦するまい。", fr: "Après un tel échec, il ne tentera probablement plus." },
    ],
    qs: [
      { t: "fill", q: "彼女を傷つけるようなことは、二度と言う＿＿＿と思った。", fr: "Je me suis dit que je ne dirais plus jamais rien qui pourrait la blesser.",
        o: ["まい", "はずがない", "わけにはいかない", "べきでない"], a: 0,
        e: "Intention négative ferme (1ère personne) → 〜まい." },
      { t: "meaning", q: "「あの映画はもう見るまい」— sens ?",
        o: ["je décide de ne plus regarder ce film", "je verrai ce film", "ce film est impossible à voir", "je dois regarder ce film"], a: 0,
        e: "まい (1ère pers.) = décision de ne pas faire." },
      { t: "usage", q: "〜まい appartient à quel registre ?",
        o: ["formel / semi-littéraire", "très familier", "enfantin", "interrogatif"], a: 0,
        e: "まい est formel ; à l'oral on préfère 〜ないつもり." },
    ],
  },

  {
    id: "g126", g: "〜ようがない／〜ようもない", m: "impossible de, aucun moyen de", f: "V-ます（語幹） + ようがない／ようもない",
    c: "modality", lv: 2, rel: ["g055", "g138"],
    note: "Impossibilité absolue liée à l'absence de moyens ou de méthode. 〜ようがない insiste plus que 〜できない sur l'absence de voie possible.",
    ex: [
      { jp: "証拠がなければ、証明しようがない。", fr: "Sans preuve, impossible de démontrer quoi que ce soit." },
      { jp: "これほど難しい問題、解きようがない。", fr: "Un problème aussi difficile, il n'y a aucun moyen de le résoudre." },
    ],
    qs: [
      { t: "fill", q: "連絡先が分からなければ、知らせ＿＿＿。", fr: "Sans ses coordonnées, impossible de le prévenir.",
        o: ["ようがない", "ことはない", "べきでない", "まい"], a: 0,
        e: "Aucun moyen possible → 〜ようがない." },
      { t: "meaning", q: "「こんな状況では、助け＿＿＿」 — compléter correctement :",
        o: ["ようがない（aucun moyen d'aider）", "ことはない（inutile d'aider）", "まい（je n'aiderai pas）", "べきだ（je dois aider）"], a: 0,
        e: "ようがない = aucune méthode possible." },
      { t: "nuance", q: "Différence entre 〜ようがない et 〜できない :",
        o: ["ようがない insiste sur l'absence totale de méthode/voie ; できない énonce simplement l'incapacité", "ils sont identiques", "できない est plus emphatique", "ようがない est plus simple"], a: 0,
        e: "ようがない met l'accent sur l'inexistence d'un moyen." },
    ],
  },

  {
    id: "g127", g: "〜っこない", m: "sûrement pas, aucune chance que (familier)", f: "V-ます（語幹） + っこない",
    c: "modality", lv: 2, rel: ["g049", "g126"],
    note: "Registre familier. Certitude négative forte : « c'est impossible / aucune chance ». 分かりっこない = aucune chance de comprendre.",
    ex: [
      { jp: "あんな難しい試験、受かりっこない。", fr: "Aucune chance de réussir un examen aussi difficile." },
      { jp: "あの子がそんなことをするはずがない。分かりっこないよ。", fr: "Aucune chance qu'il comprenne." },
    ],
    qs: [
      { t: "fill", q: "こんな短時間で終わり＿＿＿よ。", fr: "Aucune chance de finir en si peu de temps !",
        o: ["っこない", "ことはない", "はずがない", "わけがない"], a: 0,
        e: "Certitude négative familière → 〜っこない." },
      { t: "meaning", q: "「そんな嘘、信じっこない」— sens ?",
        o: ["aucune chance de croire un tel mensonge", "je crois le mensonge", "il faut croire", "peut-être que je crois"], a: 0,
        e: "っこない = impossibilité absolue (ton familier)." },
      { t: "usage", q: "〜っこない est de registre :",
        o: ["familier / oral", "très soutenu", "formel/écrit", "neutre technique"], a: 0,
        e: "っこない est clairement familier. À l'écrit/formel : はずがない / わけがない." },
    ],
  },

  {
    id: "g128", g: "〜かのようだ／〜かのように", m: "comme si, on dirait que", f: "普通形（現在）+ かのようだ／かのように",
    c: "modality", lv: 2, rel: ["g048"],
    note: "Comparaison fictive : une chose semble/parait être X, mais ne l'est pas. まるで〜かのようだ (on dirait vraiment que…). か renforce le caractère irréel.",
    ex: [
      { jp: "まるで夢を見ているかのように、美しい景色だった。", fr: "Un paysage si beau qu'on aurait dit un rêve." },
      { jp: "彼は何もなかったかのように、笑っていた。", fr: "Il souriait comme si rien ne s'était passé." },
    ],
    qs: [
      { t: "fill", q: "その俳優は本物の武士である＿＿＿演じた。", fr: "L'acteur a joué comme s'il était un vrai samouraï.",
        o: ["かのように", "ようで", "はずに", "べきに"], a: 0,
        e: "Comparaison fictive → 〜かのように." },
      { t: "meaning", q: "「まるで知っているかのように話す」— sens ?",
        o: ["parler comme s'il savait (alors qu'il ne sait pas)", "parler parce qu'il sait", "ne pas parler", "parler pour savoir"], a: 0,
        e: "かのように = ressemblance fictive." },
      { t: "usage", q: "Quel adverbe s'associe fréquemment à 〜かのようだ ?",
        o: ["まるで (on dirait vraiment)", "たとえば", "もし", "なぜか"], a: 0,
        e: "まるで〜かのようだ est une collocation très fréquente." },
    ],
  },

  {
    id: "g129", g: "〜に決まっている", m: "c'est forcément, sûrement (certitude subjective)", f: "普通形／Nom + に決まっている",
    c: "modality", lv: 1, rel: ["g053", "g130"],
    note: "Certitude subjective forte, souvent émotionnelle : « ça ne peut qu'être ainsi ». Plus affectif que に違いない. Souvent oral.",
    ex: [
      { jp: "こんなに頑張ったんだから、合格するに決まっている。", fr: "Après tant d'efforts, tu vas forcément réussir." },
      { jp: "彼が嘘をついているに決まっている。", fr: "Il ment forcément, j'en suis sûre." },
    ],
    qs: [
      { t: "fill", q: "あんな値段なら、おいしい＿＿＿よ。", fr: "À ce prix-là, c'est forcément bon.",
        o: ["に決まっている", "に違いない", "はずがない", "わけではない"], a: 0,
        e: "Certitude subjective forte → 〜に決まっている." },
      { t: "meaning", q: "「もう遅いから、店は閉まっているに決まっている」— sens ?",
        o: ["vu l'heure tardive, le magasin est forcément fermé", "le magasin est peut-être ouvert", "le magasin devrait ouvrir", "le magasin n'est pas censé fermer"], a: 0,
        e: "に決まっている = conviction subjective forte." },
      { t: "nuance", q: "〜に決まっている vs 〜に違いない [[g053]] :",
        o: ["に決まっている = plus affectif/oral ; に違いない = plus logique/formel", "ils sont identiques", "に違いない est familier", "に決まっている est logique"], a: 0,
        e: "に決まっている = certitude émotionnelle ; に違いない = déduction raisonnée." },
    ],
  },

  {
    id: "g130", g: "〜に相違ない", m: "sans aucun doute, c'est indéniablement (formel)", f: "普通形／Nom + に相違ない",
    c: "modality", lv: 3, rel: ["g053", "g129"],
    note: "Certitude absolue, registre formel/juridique. Synonyme soutenu de に違いない.",
    ex: [
      { jp: "この筆跡は彼のものに相違ない。", fr: "Cette écriture est indéniablement la sienne." },
      { jp: "その証言は事実に相違ない。", fr: "Ce témoignage est sans aucun doute conforme aux faits." },
    ],
    qs: [
      { t: "fill", q: "この指紋は犯人のもの＿＿＿。", fr: "Cette empreinte digitale est indéniablement celle du suspect.",
        o: ["に相違ない", "に決まっている", "はずだ", "らしい"], a: 0,
        e: "Certitude absolue formelle → 〜に相違ない." },
      { t: "meaning", q: "「彼の発言は事実に相違ない」— sens ?",
        o: ["ses propos sont sans aucun doute conformes aux faits", "ses propos sont peut-être faux", "ses propos sont probablement vrais", "ses propos sont incertains"], a: 0,
        e: "に相違ない = certitude catégorique (registre formel)." },
      { t: "usage", q: "〜に相違ない appartient au registre :",
        o: ["formel / juridique / écrit", "familier / oral", "enfantin", "poétique"], a: 0,
        e: "に相違ない = formel. À l'oral : に決まっている / に違いない." },
    ],
  },

  {
    id: "g131", g: "〜とは限らない", m: "pas forcément, pas nécessairement vrai", f: "普通形 + とは限らない",
    c: "modality", lv: 1, rel: ["g051", "g124"],
    note: "Nuance une généralisation : « ce n'est pas systématiquement vrai ». Proche de 〜わけではない mais s'applique aux généralités.",
    ex: [
      { jp: "高い物が良いとは限らない。", fr: "Ce qui est cher n'est pas forcément bon." },
      { jp: "有名大学を出たからといって、成功するとは限らない。", fr: "Sortir d'une grande université ne garantit pas forcément le succès." },
    ],
    qs: [
      { t: "fill", q: "頭がいい人が試験に受かる＿＿＿。", fr: "Les gens intelligents ne réussissent pas forcément les examens.",
        o: ["とは限らない", "わけではない", "はずがない", "べきでない"], a: 0,
        e: "Nuancer une généralisation → 〜とは限らない." },
      { t: "meaning", q: "「医者が健康とは限らない」— sens ?",
        o: ["un médecin n'est pas forcément en bonne santé", "les médecins sont toujours en bonne santé", "les médecins sont toujours malades", "on ne peut pas savoir"], a: 0,
        e: "とは限らない = exceptions possibles." },
      { t: "nuance", q: "〜とは限らない vs 〜わけではない [[g051]] :",
        o: ["とは限らない nuance une généralité ; わけではない explique une situation spécifique", "ils sont identiques", "わけではない nuance une généralité", "とは限らない explique une situation"], a: 0,
        e: "とは限らない → généralité pas toujours vraie ; わけではない → ça ne veut pas dire que." },
    ],
  },

  {
    id: "g132", g: "〜ないものか／〜ないものだろうか", m: "n'y aurait-il pas moyen de…, si seulement on pouvait", f: "V-ない + ものか／ものだろうか",
    c: "modality", lv: 2, rel: ["g064"],
    note: "Souhait de voir accomplie une chose difficile. Nuance d'aspiration ou de regret. Plus emphatique et plus formel que 〜できないかな.",
    ex: [
      { jp: "この問題、なんとかならないものか。", fr: "N'y aurait-il pas moyen d'arranger ce problème ?" },
      { jp: "もう少し早く来られないものだろうか。", fr: "Ne pourrait-il pas arriver un peu plus tôt ?" },
    ],
    qs: [
      { t: "fill", q: "この騒音、どうにかなら＿＿＿と思う。", fr: "Je me demande s'il n'y aurait pas moyen de régler ce bruit.",
        o: ["ないものか", "ことはない", "わけにはいかない", "まい"], a: 0,
        e: "Souhait difficile → 〜ないものか." },
      { t: "meaning", q: "「一日くらい休めないものだろうか」— sens ?",
        o: ["si seulement on pouvait prendre ne serait-ce qu'un jour de repos", "on n'a pas besoin de repos", "on doit travailler", "le repos est impossible"], a: 0,
        e: "ないものだろうか = aspiration à qqch de difficile." },
      { t: "usage", q: "〜ないものか porte une nuance de :",
        o: ["souhait / aspiration vers qqch de difficile à réaliser", "obligation stricte", "certitude", "comparaison"], a: 0,
        e: "Désir de voir qqch se produire, souvent hors de portée." },
    ],
  },

  {
    id: "g133", g: "〜ことになっている", m: "il est prévu que / c'est la règle que", f: "V-辞書／V-ない + ことになっている",
    c: "modality", lv: 1, rel: ["g035", "g054"],
    note: "(1) Règle ou convention : ここでは禁煙ということになっている (il est interdit de fumer ici, c'est la règle). (2) Plan prévu : 来月引っ越すことになっている (il est prévu de déménager le mois prochain).",
    ex: [
      { jp: "この学校では、制服を着ることになっている。", fr: "Dans cette école, le port de l'uniforme est obligatoire (c'est le règlement)." },
      { jp: "来週、会議が開かれることになっている。", fr: "Il est prévu qu'une réunion ait lieu la semaine prochaine." },
    ],
    qs: [
      { t: "fill", q: "このビルでは、午後10時以降はエレベーターを使わない＿＿＿。", fr: "Dans cet immeuble, le règlement interdit d'utiliser l'ascenseur après 22 h.",
        o: ["ことになっている", "ことにしている", "はずだ", "べきだ"], a: 0,
        e: "Règle ou convention existante → 〜ことになっている." },
      { t: "meaning", q: "「明日、代表者が発表されることになっている」— sens ?",
        o: ["il est prévu que le représentant soit annoncé demain", "le représentant a déjà été annoncé", "on ne sait pas qui est le représentant", "on doit annoncer maintenant"], a: 0,
        e: "ことになっている (décision/plan externe) = il est prévu." },
      { t: "nuance", q: "Distinguer ことになっている et ことにしている :",
        o: ["ことになっている = règle externe ou plan décidé ; ことにしている = habitude personnelle volontaire", "ils sont identiques", "ことにしている est externe", "ことになっている est personnel"], a: 0,
        e: "ことに'なっている = décision externe ; ことに'している = décision personnelle." },
    ],
  },

  {
    id: "g134", g: "〜得る（うる／える）／〜得ない（えない）", m: "pouvoir se produire / ne pas pouvoir (possibilité théorique)", f: "V-ます（語幹） + 得る／得ない",
    c: "modality", lv: 2, rel: ["g057", "g058"],
    note: "(1) 〜得る = c'est possible en théorie, cela peut arriver. (2) 〜得ない = c'est impossible en théorie. Registre formel/écrit. À distinguer de できる (capacité pratique).",
    ex: [
      { jp: "そのような事故は十分あり得る。", fr: "Un tel accident peut tout à fait se produire." },
      { jp: "あの誠実な彼が嘘をつくとはあり得ない。", fr: "Qu'un homme aussi honnête mente est impossible." },
    ],
    qs: [
      { t: "fill", q: "どんなことでも起こり＿＿＿のが人生だ。", fr: "La vie, c'est que tout peut arriver.",
        o: ["得る", "かねる", "得ない", "っこない"], a: 0,
        e: "Possibilité théorique → 〜得る." },
      { t: "meaning", q: "「彼が裏切るとはあり得ない」— sens ?",
        o: ["il lui est impossible de trahir (inconcevable)", "il peut trahir", "il trahit", "il doit trahir"], a: 0,
        e: "あり得ない = impossible en théorie, inconcevable." },
      { t: "nuance", q: "〜得る (うる/える) diffère de 〜できる par :",
        o: ["得る = possibilité théorique/logique ; できる = capacité pratique concrète", "ils sont identiques", "できる est formel", "得る = impossibilité"], a: 0,
        e: "得る porte sur la possibilité logique ; できる sur la capacité réelle." },
    ],
  },

  {
    id: "g135", g: "〜次第で（は）／〜次第だ", m: "cela dépend de ; c'est ainsi que les choses se sont passées", f: "Nom + 次第で（は）；〜(た) + 次第だ",
    c: "modality", lv: 2, rel: ["g035", "g050"],
    note: "(1) 次第で = selon X, le résultat change (努力次第で = selon les efforts). (2) 次第だ en fin de phrase (registre formel) = c'est pour cette raison que… / voilà la situation.",
    ex: [
      { jp: "やる気次第で、何でも変えられる。", fr: "Selon la motivation, on peut tout changer." },
      { jp: "以上が、今回ご連絡申し上げた次第です。", fr: "Voilà les raisons pour lesquelles je vous contacte." },
    ],
    qs: [
      { t: "fill", q: "結果はあなたの努力＿＿＿だ。", fr: "Le résultat dépend de tes efforts.",
        o: ["次第", "限り", "ばかり", "ほど"], a: 0,
        e: "« Selon / cela dépend de X » → 〜次第で." },
      { t: "meaning", q: "「状況次第では中止になるかもしれない」— sens ?",
        o: ["selon la situation, cela pourrait être annulé", "quoi qu'il arrive, c'est annulé", "c'est sûrement annulé", "la situation ne change rien"], a: 0,
        e: "〜次第では = selon les circonstances (possibilité conditionnelle)." },
      { t: "nuance", q: "「ご連絡した次第です」emploie 次第だ pour :",
        o: ["expliquer poliment les circonstances (registre formel)", "exprimer une possibilité", "exprimer une comparaison", "nuancer une généralité"], a: 0,
        e: "〜次第です = formule de clôture expliquant le contexte (lettres, emails)." },
    ],
  },

  {
    id: "g136", g: "〜ないとも限らない", m: "il n'est pas exclu que, on ne peut pas dire que…ne pas", f: "V-ない + とも限らない",
    c: "modality", lv: 3, rel: ["g131", "g057"],
    note: "Double restriction : « ce n'est pas garanti que X n'arrivera pas ». Autrement dit, X est possible même si peu probable. Atténue une certitude négative.",
    ex: [
      { jp: "また同じ事故が起きないとも限らない。", fr: "Il n'est pas exclu que le même accident se reproduise." },
      { jp: "彼が来ないとも限らないから、席を取っておこう。", fr: "On ne peut pas exclure qu'il vienne, réservons-lui une place." },
    ],
    qs: [
      { t: "fill", q: "天気予報が外れ、雨が降ら＿＿＿。", fr: "Les prévisions pourraient se tromper : il n'est pas exclu qu'il pleuve.",
        o: ["ないとも限らない", "とは限らない", "っこない", "まい"], a: 0,
        e: "Possibilité non exclue → 〜ないとも限らない." },
      { t: "meaning", q: "「まだチャンスがないとも限らない」— sens ?",
        o: ["il n'est pas exclu qu'il reste une chance", "il n'y a certainement plus de chance", "il y a sûrement une chance", "il n'y a aucune chance"], a: 0,
        e: "ないとも限らない = X reste possible malgré le doute." },
      { t: "nuance", q: "Distinguer 〜とは限らない de 〜ないとも限らない :",
        o: ["とは限らない nuance une affirmation ; ないとも限らない nuance une négation (X reste possible)", "identiques", "ないとも限らない nie plus fortement", "とは限らない exprime la possibilité positive"], a: 0,
        e: "とは限らない = pas toujours vrai ; ないとも限らない = la chose niée reste possible." },
    ],
  },

  /* ===================== AJOUTS — EXPRESSIONS & EMPHASE ===================== */

  {
    id: "g137", g: "〜こそ", m: "justement, précisément (emphase)", f: "Nom／助詞 + こそ",
    c: "express", lv: 1, rel: ["g110", "g118"],
    note: "Particule d'emphase isolant le mot mis en relief. こそ peut remplacer が ou は : あなたこそ (c'est toi et personne d'autre). Aussi dans これこそ、今こそ、だからこそ.",
    ex: [
      { jp: "今こそ、行動に移す時だ。", fr: "C'est maintenant, précisément, le moment d'agir." },
      { jp: "失敗こそ、成功への道だ。", fr: "L'échec, justement, est le chemin vers la réussite." },
    ],
    qs: [
      { t: "fill", q: "こちら＿＿＿お礼を申し上げます。（こちらが感謝する側）", fr: "C'est moi qui dois vous remercier.",
        o: ["こそ", "は", "が", "も"], a: 0,
        e: "こそ isole et met en relief : « c'est moi (et pas vous) qui dois remercier »." },
      { t: "meaning", q: "「だからこそ、大切にしなければならない」— sens ?",
        o: ["c'est précisément pour cette raison qu'il faut chérir", "c'est la raison pour laquelle on n'a pas besoin", "malgré cette raison", "sans raison particulière"], a: 0,
        e: "だからこそ = justement parce que ça (emphase sur la cause)." },
      { t: "usage", q: "「これこそ私が探していたものだ」: こそ exprime ici :",
        o: ["emphase : c'est exactement ça et rien d'autre", "opposition", "doute", "addition"], a: 0,
        e: "こそ = emphase exclusive (exactement X, pas autre chose)." },
    ],
  },

  {
    id: "g138", g: "〜など／〜なんか／〜なんて", m: "comme, tel que (valeur dépréciative ou d'exemple)", f: "Nom + など／なんか／なんて",
    c: "express", lv: 1, rel: ["g060"],
    note: "(1) Exemple non exhaustif : 本や辞書など (des livres, des dictionnaires, etc.). (2) Dépréciation : 失敗なんて怖くない (l'échec ? je n'en ai pas peur). なんか / なんて : familier. など : neutre.",
    ex: [
      { jp: "私なんかに、そんな仕事はできない。", fr: "Quelqu'un comme moi ne peut pas faire un tel travail." },
      { jp: "勉強なんてしたくない。", fr: "Étudier ? Je n'en veux pas !" },
    ],
    qs: [
      { t: "fill", q: "彼女がそんなことをするなんて、信じられない。", fr: "Qu'elle fasse une chose pareille, je n'arrive pas à y croire.",
        o: ["なんて（incrédulité dépréciative）", "など（liste neutre）", "こそ（emphase）", "さえ（condition）"], a: 0,
        e: "なんて exprime la surprise/l'incrédulité, souvent dépréciative." },
      { t: "meaning", q: "「りんごやみかんなど、フルーツが好きです」— sens de など ?",
        o: ["exemple non exhaustif (et d'autres)", "dépréciation", "emphase", "opposition"], a: 0,
        e: "など après une liste = exemples, il y en a d'autres." },
      { t: "nuance", q: "Registres de など / なんか / なんて :",
        o: ["など neutre ; なんか familier ; なんて familier + fort sentiment", "など est familier", "なんか est formel", "ils sont identiques"], a: 0,
        e: "など = neutre/formel ; なんか ≒ なんて mais なんて plus expressif." },
    ],
  },

  {
    id: "g139", g: "〜くらい／〜ぐらい", m: "au point de, tellement que ; environ (degré/quantité)", f: "普通形／Nom + くらい／ぐらい",
    c: "express", lv: 1, rel: ["g152"],
    note: "(1) Degré extrême : 死ぬくらい辛い (tellement dur à en mourir). (2) Approximation : 三時間くらい (environ trois heures). (3) Minimum : これくらいはできる (au moins ça).",
    ex: [
      { jp: "恥ずかしくて、消えてしまいたいくらいだった。", fr: "J'avais tellement honte que je voulais disparaître." },
      { jp: "これくらいのことは、誰でもできる。", fr: "Au moins ça, tout le monde peut le faire." },
    ],
    qs: [
      { t: "fill", q: "嬉しくて、叫び出したい＿＿＿だ。", fr: "Je suis tellement content que j'ai envie de crier.",
        o: ["くらい", "ほど", "だけ", "さえ"], a: 0,
        e: "Degré extrême → 〜くらい." },
      { t: "meaning", q: "「泣きたいくらい悔しい」— sens ?",
        o: ["tellement frustré qu'on en pleurerait", "content de pleurer", "on ne peut pas pleurer", "un peu frustré"], a: 0,
        e: "くらい = au point de (degré extrême)." },
      { t: "usage", q: "〜くらい a combien d'emplois principaux ?",
        o: ["trois : degré extrême / approximation / minimum", "un seul : approximation", "deux : degré et opposition", "aucun relevé au N2"], a: 0,
        e: "くらい/ぐらい : degré, approximation, minimum — tous fréquents au N2." },
    ],
  },

  {
    id: "g140", g: "〜ほど", m: "au point que, à tel point que ; plus… plus", f: "普通形／Nom + ほど（〜ない：moins que）",
    c: "express", lv: 1, rel: ["g153", "g139"],
    note: "(1) Degré : 死ぬほど (au point d'en mourir). (2) Comparaison négative : A はBほど〜ない (A moins que B). (3) 〜ば〜ほど : plus… plus.",
    ex: [
      { jp: "笑いが止まらないほど、おかしかった。", fr: "C'était tellement drôle que je ne pouvais plus m'arrêter de rire." },
      { jp: "この映画は思ったほど面白くなかった。", fr: "Ce film n'était pas aussi intéressant que je le pensais." },
    ],
    qs: [
      { t: "fill", q: "彼のピアノは、プロと間違えられる＿＿＿うまい。", fr: "Il joue du piano si bien qu'on pourrait le confondre avec un professionnel.",
        o: ["ほど", "くらい", "だけ", "さえ"], a: 0,
        e: "Degré : à tel point que → 〜ほど." },
      { t: "meaning", q: "「この問題は私には手に負えないほど難しい」— sens ?",
        o: ["tellement difficile que je ne peux pas y faire face", "pas si difficile que ça", "je peux facilement le résoudre", "à peu près difficile"], a: 0,
        e: "ほど = au point que (degré)." },
      { t: "usage", q: "「AはBほど〜ない」exprime :",
        o: ["A est moins que B", "A est plus que B", "A est égal à B", "A est sans rapport avec B"], a: 0,
        e: "〜ほど〜ない = comparaison négative (A inférieur à B)." },
    ],
  },

  {
    id: "g141", g: "〜ば〜ほど", m: "plus… plus (proportionnel)", f: "V-ば／A-ければ + 同V/A-辞書 + ほど",
    c: "express", lv: 1, rel: ["g140"],
    note: "Corrélation proportionnelle : plus X augmente, plus Y augmente. A se répète : 食べれば食べるほど (plus on mange, plus on…).",
    ex: [
      { jp: "練習すればするほど、上手くなる。", fr: "Plus on s'entraîne, plus on progresse." },
      { jp: "考えれば考えるほど、分からなくなる。", fr: "Plus on y réfléchit, moins on comprend." },
    ],
    qs: [
      { t: "fill", q: "日本語は勉強すれ＿＿＿、奥が深いと感じる。", fr: "Plus on étudie le japonais, plus on en ressent la profondeur.",
        o: ["ばするほど", "ばするくらい", "ばするだけ", "ばするさえ"], a: 0,
        e: "Proportionnel → 〜ば〜ほど." },
      { t: "meaning", q: "「高ければ高いほど品質が良いとは限らない」— sens ?",
        o: ["plus c'est cher, plus la qualité est bonne n'est pas toujours vrai", "plus c'est cher, plus c'est sûrement bon", "le prix n'a aucun rapport", "on doit acheter cher"], a: 0,
        e: "ば〜ほど = proportionnel (ici nuancé par とは限らない)." },
      { t: "usage", q: "Structure de 〜ば〜ほど :",
        o: ["V-ばV-辞書ほど (V répété)", "V-ばV-た形ほど", "V-たらV-てほど", "V-ているV-るほど"], a: 0,
        e: "Le verbe se répète : 食べれば食べるほど, 話せば話すほど." },
    ],
  },

  {
    id: "g142", g: "〜ことか", m: "combien (exclamation), comme c'est (exclamatif)", f: "疑問詞＋V／A + ことか",
    c: "express", lv: 2, rel: ["g155"],
    note: "Exclamation exprimant l'intensité d'un sentiment. Souvent avec un interrogatif : どれほど〜ことか, 何度〜ことか. Registre semi-formel/littéraire.",
    ex: [
      { jp: "どれほど心配したことか。", fr: "Tu ne peux pas savoir combien je me suis inquiété." },
      { jp: "何度諦めようと思ったことか。", fr: "Combien de fois ai-je pensé à abandonner." },
    ],
    qs: [
      { t: "fill", q: "あなたに会いたいと、どれだけ思った＿＿＿。", fr: "Tu ne peux pas imaginer combien j'avais envie de te voir.",
        o: ["ことか", "ことだ", "ものか", "ものだ"], a: 0,
        e: "Exclamation sur l'intensité d'un sentiment → 〜ことか." },
      { t: "meaning", q: "「何度失敗したことか」— sens ?",
        o: ["combien de fois ai-je échoué (exclamation)", "j'ai échoué une seule fois", "je n'ai jamais échoué", "il faut échouer"], a: 0,
        e: "ことか = exclamation (intensité émotionnelle)." },
      { t: "usage", q: "Quels mots précèdent typiquement 〜ことか ?",
        o: ["interrogatifs : どれほど, 何度, どんなに", "des noms concrets", "des chiffres précis", "des adverbes de temps"], a: 0,
        e: "どれほど〜ことか, 何度〜ことか sont les structures les plus fréquentes." },
    ],
  },

  {
    id: "g143", g: "〜ものか／〜もんか", m: "jamais de la vie ! (refus catégorique)", f: "V-辞書／A + ものか",
    c: "express", lv: 2, rel: ["g155"],
    note: "Refus total, souvent émotionnel : « je ne ferais jamais X ». Forme une question rhétorique négative. もんか = familier.",
    ex: [
      { jp: "あんなひどいことを言った彼を許すものか。", fr: "Le pardonner lui qui a dit des choses pareilles ? Jamais de la vie !" },
      { jp: "負けるもんか！", fr: "Je ne perdrai pas !" },
    ],
    qs: [
      { t: "fill", q: "二度とあの店には行く＿＿＿。", fr: "Jamais je ne remettrai les pieds dans ce restaurant !",
        o: ["ものか", "ことか", "はずか", "わけか"], a: 0,
        e: "Refus catégorique → 〜ものか." },
      { t: "meaning", q: "「そんなこと、できるものか」— sens ?",
        o: ["impossible que je fasse une chose pareille / jamais !", "je peux le faire", "peut-être que je peux", "il faut que je le fasse"], a: 0,
        e: "ものか = question rhétorique exprimant le refus." },
      { t: "nuance", q: "Différence entre ものか et 〜ことか :",
        o: ["ものか = refus/indignation ; ことか = exclamation sur l'intensité d'un sentiment", "ils sont identiques", "ことか exprime le refus", "ものか est exclamatif positif"], a: 0,
        e: "ものか → refus ; ことか → exclamation de degré." },
    ],
  },

  {
    id: "g144", g: "〜ことに（は）", m: "chose remarquable que (adverbe émotionnel)", f: "A-い／A-な + ことに（は）",
    c: "express", lv: 2, rel: ["g157"],
    note: "Introduit une constatation avec une coloration émotionnelle. Souvent avec des adjectifs exprimant un sentiment : 驚いたことに, 残念なことに, 嬉しいことに.",
    ex: [
      { jp: "驚いたことに、彼はすでに知っていた。", fr: "Chose étonnante, il le savait déjà." },
      { jp: "残念なことに、試験は中止になった。", fr: "Malheureusement (chose regrettable), l'examen a été annulé." },
    ],
    qs: [
      { t: "fill", q: "嬉しい＿＿＿、彼女は合格した。", fr: "Chose réjouissante, elle a réussi.",
        o: ["ことに", "ことか", "ものに", "わけに"], a: 0,
        e: "Constatation émotionnelle → 〜ことに." },
      { t: "meaning", q: "「不思議なことに、彼はそれを知っていた」— sens ?",
        o: ["chose étrange, il le savait", "il est étrange donc il savait", "parce que c'est étrange", "bien qu'étrange"], a: 0,
        e: "ことに = constatation teintée d'émotion." },
      { t: "usage", q: "Avec quel type d'adjectif 〜ことに s'emploie-t-il ?",
        o: ["adjectifs de sentiment (驚いた, 残念な, 嬉しい…)", "adjectifs de couleur", "adjectifs de taille", "adjectifs de nationalité"], a: 0,
        e: "ことに se combine avec des adjectifs émotionnels." },
    ],
  },

  {
    id: "g145", g: "〜ものがある", m: "il y a quelque chose de (dans), on y ressent", f: "普通形 + ものがある",
    c: "express", lv: 2, rel: ["g062"],
    note: "Exprime qu'une qualité remarquable, difficile à définir exactement, se dégage de qqch. Souvent avec 感じさせる, 惹かれる etc. Registre littéraire/écrit.",
    ex: [
      { jp: "この絵には、人を惹きつけるものがある。", fr: "Dans ce tableau, il y a quelque chose qui attire les gens." },
      { jp: "彼女の話し方には、説得力があるものがある。", fr: "Sa façon de parler a quelque chose de persuasif." },
    ],
    qs: [
      { t: "fill", q: "この曲には、心に染みる＿＿＿。", fr: "Dans cette chanson, il y a quelque chose qui touche le cœur.",
        o: ["ものがある", "ことがある", "わけがある", "はずがある"], a: 0,
        e: "Qualité remarquable qui se dégage → 〜ものがある." },
      { t: "meaning", q: "「彼の笑顔には、人を安心させるものがある」— sens ?",
        o: ["son sourire a quelque chose qui rassure les gens", "son sourire ne rassure pas", "il doit rassurer", "il est peut-être rassurant"], a: 0,
        e: "ものがある = qualité difficile à définir mais perceptible." },
      { t: "usage", q: "〜ものがある porte typiquement sur :",
        o: ["une qualité intangible remarquable (style écrit)", "un fait banal", "une cause directe", "une date"], a: 0,
        e: "ものがある appartient au registre littéraire/soutenu." },
    ],
  },

  {
    id: "g146", g: "〜てならない", m: "tellement (que c'est insupportable), ne pas pouvoir s'empêcher de", f: "V-て／A-くて + ならない",
    c: "express", lv: 2, rel: ["g147", "g148", "g064"],
    note: "Sentiment ou sensation qui s'impose fortement, involontairement. 気になってならない (ça me tracasse terriblement). Registre semi-formel.",
    ex: [
      { jp: "故郷が恋しくてならない。", fr: "Mon pays natal me manque terriblement." },
      { jp: "彼のことが心配でならない。", fr: "Je suis terriblement inquiet pour lui." },
    ],
    qs: [
      { t: "fill", q: "あの映画のラストシーンが気になっ＿＿＿。", fr: "La scène finale de ce film me trotte terriblement dans la tête.",
        o: ["てならない", "てたまらない", "てしかたがない", "てしまう"], a: 0,
        e: "Sentiment qui s'impose irrésistiblement → 〜てならない." },
      { t: "meaning", q: "「将来が不安でならない」— sens ?",
        o: ["je me sens terriblement anxieux vis-à-vis de l'avenir", "l'avenir est assuré", "l'avenir me laisse indifférent", "j'ai un peu peur"], a: 0,
        e: "てならない = sentiment très fort, involontaire." },
      { t: "nuance", q: "てならない, てたまらない, てしかたがない ont en commun :",
        o: ["tous expriment un sentiment/sensation très intense involontaire", "tous sont négatifs uniquement", "tous sont formels", "tous s'emploient avec des verbes d'action"], a: 0,
        e: "Les trois = sentiment/sensation intense. Nuances légères de registre." },
    ],
  },

  {
    id: "g147", g: "〜てたまらない", m: "tellement (insupportable), à en devenir fou", f: "V-て／A-くて + たまらない",
    c: "express", lv: 2, rel: ["g146", "g148"],
    note: "Sensation ou émotion tellement forte qu'elle est presque insupportable. Plus physique/viscéral que てならない. お腹が空いてたまらない (j'ai une faim dévorante).",
    ex: [
      { jp: "暑くてたまらない。エアコンをつけてもいいですか。", fr: "J'ai une chaleur insupportable. Je peux allumer la clim ?" },
      { jp: "眠くてたまらないのに、仕事が終わらない。", fr: "Je tombe de sommeil, mais le travail n'en finit pas." },
    ],
    qs: [
      { t: "fill", q: "喉が渇い＿＿＿、水が飲みたい。", fr: "J'ai une soif dévorante, je veux de l'eau.",
        o: ["てたまらない", "てならない", "てしかたがない", "てばかりいる"], a: 0,
        e: "Sensation physique très intense → 〜てたまらない." },
      { t: "meaning", q: "「彼女のことが好きでたまらない」— sens ?",
        o: ["je l'aime à en perdre la tête (insupportablement)", "je ne l'aime pas trop", "je l'aime un peu", "je ne l'aime pas"], a: 0,
        e: "たまらない = tellement fort que c'est presque insupportable." },
      { t: "nuance", q: "てたまらない est souvent plus _____ que てならない :",
        o: ["physique / viscéral (sensation corporelle)", "cérébral / intellectuel", "formel / littéraire", "neutre"], a: 0,
        e: "てたまらない tend vers les sensations physiques ; てならない vers les émotions." },
    ],
  },

  {
    id: "g148", g: "〜てしかたがない／〜てしようがない", m: "tellement que c'est embarrassant, insupportablement", f: "V-て／A-くて + しかたがない／しようがない",
    c: "express", lv: 2, rel: ["g146", "g147"],
    note: "Synonyme quasi-total de てたまらない. しようがない est la variante orale. Souvent interchangeable mais てしかたがない un peu moins fort.",
    ex: [
      { jp: "あの歌が頭から離れなくてしかたがない。", fr: "Cette chanson me trotte dans la tête, c'est terrible." },
      { jp: "子どもが心配でしょうがない。", fr: "Je m'inquiète terriblement pour mon enfant." },
    ],
    qs: [
      { t: "fill", q: "試験の結果が気になっ＿＿＿。", fr: "Je suis terriblement préoccupé par les résultats de l'examen.",
        o: ["てしかたがない", "てならない", "てたまらない", "てしまう"], a: 0,
        e: "Préoccupation intense → 〜てしかたがない (tous trois possibles ici)." },
      { t: "meaning", q: "「眠くてしようがなかった」— sens ?",
        o: ["j'avais un sommeil insupportable", "je ne pouvais pas dormir", "je n'avais pas sommeil", "j'ai dormi"], a: 0,
        e: "てしようがない = tellement… que c'est ingérable." },
      { t: "nuance", q: "しようがない et しかたがない sont :",
        o: ["quasi-synonymes ; しようがない est légèrement plus familier", "opposés", "le premier est formel", "sans rapport"], a: 0,
        e: "Ils s'emploient indifféremment ; しようがない légèrement plus oral." },
    ],
  },

  {
    id: "g149", g: "〜始末だ", m: "au point d'en arriver à (issue négative)", f: "V-辞書／Nom+の + 始末だ",
    c: "express", lv: 3, rel: ["g099", "g062"],
    note: "Aboutissement négatif, souvent scandaleux ou regrettable. こんな始末になった (voilà où on en est arrivé). Toujours péjoratif.",
    ex: [
      { jp: "言い訳ばかりして、最後には怒り出す始末だ。", fr: "Il n'a fait que se justifier, et a fini par se mettre en colère." },
      { jp: "借金を重ね、家まで売る始末になった。", fr: "À force d'accumuler les dettes, il en est arrivé à vendre sa maison." },
    ],
    qs: [
      { t: "fill", q: "遅刻したうえ、謝りもしない＿＿＿だ。", fr: "Non seulement il est arrivé en retard, mais voilà qu'il ne s'excuse même pas.",
        o: ["始末", "あげく", "末", "最中"], a: 0,
        e: "Issue négative / scandaleux → 〜始末だ." },
      { t: "meaning", q: "「とうとう会社を首になる始末だ」— sens ?",
        o: ["il en est même arrivé à se faire virer (issue déplorable)", "il a été promu", "il a démissionné volontairement", "il continue à travailler"], a: 0,
        e: "始末だ = résultat final négatif, souvent scandaleux." },
      { t: "nuance", q: "〜始末だ vs 〜あげく [[g099]] :",
        o: ["始末だ insiste sur le caractère scandaleux/honteux ; あげく insiste sur le processus long et pénible", "ils sont identiques", "あげく est plus négatif", "始末だ est neutre"], a: 0,
        e: "始末だ = issue honteuse ; あげく = après de nombreuses péripéties." },
    ],
  },

  {
    id: "g150", g: "〜限りだ", m: "au plus haut point de (sentiment extrême)", f: "A-い／A-な + 限りだ",
    c: "express", lv: 3, rel: ["g041", "g144"],
    note: "Intensité maximale d'un sentiment : « rien de plus X que ça ». S'emploie avec des adjectifs de sentiment (恥ずかしい, 嬉しい, 頼もしい…). Registre formel.",
    ex: [
      { jp: "皆さんに支えていただいて、心強い限りです。", fr: "Je vous suis infiniment reconnaissant de votre soutien." },
      { jp: "このような賞をいただき、光栄の限りです。", fr: "C'est pour moi le plus grand des honneurs de recevoir ce prix." },
    ],
    qs: [
      { t: "fill", q: "若い人が頑張っている姿を見ると、頼もしい＿＿＿だ。", fr: "En voyant ces jeunes faire des efforts, c'est extrêmement réconfortant.",
        o: ["限り", "ほど", "くらい", "ばかり"], a: 0,
        e: "Sentiment au plus haut degré → 〜限りだ." },
      { t: "meaning", q: "「こんな失敗をしてしまい、恥ずかしい限りです」— sens ?",
        o: ["j'ai fait une telle erreur, j'en suis au comble de la honte", "je suis un peu honteux", "je ne suis pas honteux", "je dois avoir honte"], a: 0,
        e: "限りだ = au sommet du sentiment (très formel)." },
      { t: "nuance", q: "〜限りだ s'emploie principalement dans quel registre ?",
        o: ["formel / discours / lettres", "familier quotidien", "argot", "enfantin"], a: 0,
        e: "限りだ est typique des discours formels, remises de prix, lettres." },
    ],
  },

  {
    id: "g151", g: "〜きらいがある", m: "avoir tendance à (de façon fâcheuse)", f: "V-辞書／Nom+の + きらいがある",
    c: "express", lv: 3, rel: ["g164"],
    note: "Tendance critique : on a le défaut de faire X. Légèrement péjoratif. Registre écrit/formel.",
    ex: [
      { jp: "彼は物事を大げさに言うきらいがある。", fr: "Il a tendance à exagérer les choses." },
      { jp: "この報告書は結論を急ぐきらいがある。", fr: "Ce rapport a tendance à brûler les étapes." },
    ],
    qs: [
      { t: "fill", q: "彼女は感情的になりすぎる＿＿＿。", fr: "Elle a tendance à devenir trop émotive.",
        o: ["きらいがある", "ことがある", "ものがある", "わけがある"], a: 0,
        e: "Tendance critiquable → 〜きらいがある." },
      { t: "meaning", q: "「完璧主義になりすぎるきらいがある」— sens ?",
        o: ["il a le défaut d'être trop perfectionniste", "il est parfait", "il n'est pas du tout perfectionniste", "il doit être perfectionniste"], a: 0,
        e: "きらいがある = tendance que l'on critique." },
      { t: "usage", q: "〜きらいがある appartient à quel registre ?",
        o: ["écrit / formel", "familier", "enfantin", "interrogatif"], a: 0,
        e: "きらいがある = registre écrit, critiques mesurées." },
    ],
  },

  {
    id: "g152", g: "〜一方だ", m: "ne faire que (aller en augmentant), tendance qui continue", f: "V-辞書 + 一方だ",
    c: "express", lv: 2, rel: ["g030", "g165"],
    note: "Tendance qui ne fait que s'accentuer, souvent négativement. La situation évolue dans une seule direction. Différent de 一方で [[g030]] (contraste).",
    ex: [
      { jp: "物価は上がる一方だ。", fr: "Les prix ne font qu'augmenter." },
      { jp: "病状は悪化する一方だった。", fr: "Son état de santé ne faisait qu'empirer." },
    ],
    qs: [
      { t: "fill", q: "少子化が進む＿＿＿で、対策が急がれる。", fr: "La dénatalité ne fait que progresser, des mesures urgentes s'imposent.",
        o: ["一方", "うちに", "ばかり", "限り"], a: 0,
        e: "Tendance continue dans une seule direction → 〜一方だ." },
      { t: "meaning", q: "「借金が増える一方だ」— sens ?",
        o: ["les dettes ne font qu'augmenter", "les dettes diminuent", "les dettes sont stables", "les dettes ont disparu"], a: 0,
        e: "一方だ = évolution continue dans un sens (souvent mauvais)." },
      { t: "nuance", q: "Distinguer 〜一方だ de 〜一方で [[g030]] :",
        o: ["一方だ = tendance continue (évolution) ; 一方で = contraste (d'un côté X, de l'autre Y)", "ils sont identiques", "一方で exprime la tendance", "一方だ exprime le contraste"], a: 0,
        e: "一方だ (evolving) ≠ 一方で (contrast). Voir [[g030]]." },
    ],
  },

  {
    id: "g153", g: "〜ばかりだ", m: "ne faire que (action répétée) ; s'apprêter à (ばかりだ après V-ta)", f: "V-て + ばかり；V-た + ばかり",
    c: "express", lv: 1, rel: ["g152", "g165"],
    note: "(1) V-てばかり = ne faire que X (de façon exclusive, souvent critique) : 食べてばかりいる. (2) V-たばかり = venir juste de faire X : 来たばかり.",
    ex: [
      { jp: "彼は文句を言ってばかりいる。", fr: "Il ne fait que se plaindre." },
      { jp: "日本に来たばかりで、まだ慣れていない。", fr: "Je viens tout juste d'arriver au Japon et je ne suis pas encore habitué." },
    ],
    qs: [
      { t: "fill", q: "子どもが泣いて＿＿＿いて、困っている。", fr: "Mon enfant ne fait que pleurer, je ne sais plus quoi faire.",
        o: ["ばかり", "ほど", "きり", "さえ"], a: 0,
        e: "Action exclusive et répétée (critique) → 〜てばかりいる." },
      { t: "meaning", q: "「仕事を始めたばかりです」— sens ?",
        o: ["je viens tout juste de commencer à travailler", "ça fait longtemps que je travaille", "je travaille encore", "j'ai arrêté de travailler"], a: 0,
        e: "V-たばかり = action qui vient de se produire." },
      { t: "nuance", q: "Distinguer 〜てばかりいる de 〜たばかり :",
        o: ["てばかりいる = exclusivité répétée (critique) ; たばかり = juste après l'action", "ils sont identiques", "たばかり est exclusif", "てばかりは positif"], a: 0,
        e: "Deux emplois distincts : répétition exclusive vs juste après." },
    ],
  },

  {
    id: "g154", g: "〜ばかりか〜（も）", m: "non seulement… mais encore", f: "普通形／Nom + ばかりか（〜も／〜まで）",
    c: "express", lv: 2, rel: ["g078", "g074"],
    note: "Escalade : X est déjà remarquable, mais Y s'y ajoute de façon surprenante. Souvent suivi de も ou まで. Proche de のみならず mais plus oral.",
    ex: [
      { jp: "彼女は英語ばかりか、中国語まで話せる。", fr: "Non seulement elle parle anglais, mais en plus elle parle chinois." },
      { jp: "遅刻したばかりか、謝りもしなかった。", fr: "Non seulement il était en retard, mais en plus il ne s'est pas excusé." },
    ],
    qs: [
      { t: "fill", q: "彼は仕事ができる＿＿＿、人柄もいい。", fr: "Non seulement il est compétent, mais en plus il a un bon caractère.",
        o: ["ばかりか", "ばかりに", "ばかりで", "ばかりだ"], a: 0,
        e: "Escalade additive → 〜ばかりか〜（も）." },
      { t: "meaning", q: "「貧しいばかりか、病気にもなった」— sens ?",
        o: ["non seulement pauvre, mais en plus tombé malade", "pauvre donc en bonne santé", "ni pauvre ni malade", "pauvre, donc malade heureusement"], a: 0,
        e: "ばかりか = non seulement X mais encore Y (souvent aggravation)." },
      { t: "nuance", q: "〜ばかりか vs 〜ばかりに [[g046]] :",
        o: ["ばかりか = non seulement (addition) ; ばかりに = justement à cause de (conséquence)", "ils sont identiques", "ばかりに = addition", "ばかりか = cause"], a: 0,
        e: "Même radical, sens opposés. Voir [[g046]]." },
    ],
  },

  {
    id: "g155", g: "〜とばかりに", m: "comme pour dire, comme s'il disait (sans parole)", f: "V-辞書／普通形 + とばかりに",
    c: "express", lv: 3, rel: ["g128"],
    note: "Agir comme si l'on disait X, bien que rien ne soit dit. L'attitude ou le comportement parle à la place des mots.",
    ex: [
      { jp: "さあ来いとばかりに、彼は構えた。", fr: "Il prit la pose comme pour dire « allez, venez »." },
      { jp: "嫌だとばかりに、犬は首を振った。", fr: "Le chien secoua la tête comme pour dire « non »." },
    ],
    qs: [
      { t: "fill", q: "待ってましたと＿＿＿、彼は立ち上がった。", fr: "Il se leva comme pour dire « c'est ce que j'attendais ».",
        o: ["とばかりに", "というより", "とはいえ", "とともに"], a: 0,
        e: "Attitude qui communique sans mots → 〜とばかりに." },
      { t: "meaning", q: "「そんなこと知らないとばかりに、彼はそっぽを向いた。」— sens ?",
        o: ["il détourna le regard comme pour dire qu'il n'en savait rien", "il expliqua qu'il ne savait rien", "il dit qu'il savait", "il était surpris"], a: 0,
        e: "とばかりに = attitude qui exprime implicitement qqch." },
      { t: "usage", q: "〜とばかりに décrit :",
        o: ["un comportement non-verbal qui exprime une pensée", "une parole explicite", "une cause logique", "une comparaison"], a: 0,
        e: "Acte muet mais signifiant (geste, attitude)." },
    ],
  },

  {
    id: "g156", g: "〜んばかり（に）", m: "comme si allait (presque), sur le point de", f: "V-ない（語幹） + んばかり（に）",
    c: "express", lv: 3, rel: ["g128", "g155"],
    note: "L'action décrite est si proche de se produire qu'on la voit presque. Registre littéraire. 今にも〜んばかり accentue l'imminence.",
    ex: [
      { jp: "今にも泣き出さんばかりの表情だった。", fr: "Elle avait une expression comme si elle allait fondre en larmes." },
      { jp: "割れんばかりの拍手が起きた。", fr: "Des applaudissements à tout rompre retentirent." },
    ],
    qs: [
      { t: "fill", q: "彼は怒りで爆発せ＿＿＿の様子だった。", fr: "Il avait l'air sur le point d'exploser de colère.",
        o: ["んばかり", "かのように", "ことに", "ものか"], a: 0,
        e: "Presque sur le point de → 〜んばかり." },
      { t: "meaning", q: "「溢れんばかりの愛情」— sens ?",
        o: ["un amour comme sur le point de déborder", "un amour absent", "un amour moyen", "un amour qui a débordé"], a: 0,
        e: "んばかり = tellement intense que c'est comme si ça allait se produire." },
      { t: "usage", q: "〜んばかり est de registre :",
        o: ["littéraire / soutenu", "familier", "enfantin", "oral courant"], a: 0,
        e: "んばかり appartient au style littéraire." },
    ],
  },

  {
    id: "g157", g: "〜までもない", m: "pas besoin d'aller jusqu'à, inutile de", f: "V-辞書 + までもない／までもなく",
    c: "express", lv: 2, rel: ["g121"],
    note: "L'action envisagée est jugée superflue : la chose est si évidente ou facile qu'elle ne mérite pas cet effort. Proche de ことはない mais l'accent est sur « aller jusqu'à ».",
    ex: [
      { jp: "言うまでもなく、安全第一だ。", fr: "Il va sans dire que la sécurité passe avant tout." },
      { jp: "この程度のことは、わざわざ説明するまでもない。", fr: "Une chose aussi simple n'a pas besoin d'être expliquée." },
    ],
    qs: [
      { t: "fill", q: "彼の実力は証明する＿＿＿。", fr: "Ses capacités n'ont pas besoin d'être prouvées.",
        o: ["までもない", "ことはない", "わけにはいかない", "べきでない"], a: 0,
        e: "Inutile d'aller jusqu'à → 〜までもない." },
      { t: "meaning", q: "「言うまでもなく、健康は大切だ」— sens ?",
        o: ["il va sans dire que la santé est importante", "on ne doit pas parler de santé", "on ignore la santé", "la santé est discutable"], a: 0,
        e: "言うまでもなく = cela va sans dire (superlative évidence)." },
      { t: "nuance", q: "〜までもない vs 〜ことはない [[g121]] :",
        o: ["までもない insiste sur « pas besoin d'aller jusqu'à » ; ことはない = simplement inutile", "identiques", "ことはない est plus fort", "までもない est familier"], a: 0,
        e: "までもない → le seuil d'effort est trop élevé pour la situation." },
    ],
  },

  {
    id: "g158", g: "〜てまで", m: "jusqu'à aller jusqu'à (pour obtenir), même au prix de", f: "V-て + まで",
    c: "express", lv: 2, rel: ["g055"],
    note: "On fait X (une chose extrême ou difficile) pour atteindre un but. Souvent une critique ou une répugnance : 借金してまで（ = au prix d'une dette）.",
    ex: [
      { jp: "借金してまで、その車を買いたくない。", fr: "Je ne veux pas acheter cette voiture au point de m'endetter." },
      { jp: "体を壊してまで、働く必要はない。", fr: "Inutile de travailler au point de ruiner sa santé." },
    ],
    qs: [
      { t: "fill", q: "嘘をつい＿＿＿、認められたくない。", fr: "Je ne veux pas être reconnu au prix du mensonge.",
        o: ["てまで", "てからでないと", "ながらも", "つつも"], a: 0,
        e: "Action extrême consentie pour un but → 〜てまで." },
      { t: "meaning", q: "「人を傷つけてまで、成功したくない」— sens ?",
        o: ["je ne veux pas réussir au prix de blesser les autres", "je veux réussir en blessant les autres", "blesser est acceptable", "on ne peut pas réussir"], a: 0,
        e: "てまで = même au prix de (coût jugé trop élevé)." },
      { t: "usage", q: "〜てまで est souvent suivi de :",
        o: ["une négation (refus d'aller si loin)", "une affirmation enthousiaste", "une question", "une date"], a: 0,
        e: "L'action coûteuse est refusée : Vてまで〜ない." },
    ],
  },

  {
    id: "g159", g: "〜ものだから", m: "parce que (justification personnelle)", f: "普通形／Nom＋な + ものだから",
    c: "express", lv: 2, rel: ["g062"],
    note: "Donne une justification subjective/personnelle, souvent pour excuser un comportement. La cause (ものだから) est perçue comme contraignante par le locuteur. Oral.",
    ex: [
      { jp: "バスが遅れたものだから、遅刻してしまった。", fr: "Le bus avait du retard, c'est pour ça que j'ai été en retard." },
      { jp: "子どもなものだから、許してやってください。", fr: "C'est un enfant, alors pardonnez-lui." },
    ],
    qs: [
      { t: "fill", q: "急に具合が悪くなった＿＿＿、早退しました。", fr: "Je me suis soudainement senti mal, alors j'ai quitté le bureau tôt.",
        o: ["ものだから", "ものの", "ものか", "ものと"], a: 0,
        e: "Justification subjective de son propre comportement → 〜ものだから." },
      { t: "meaning", q: "「つい嬉しかったものだから、言ってしまった」— sens ?",
        o: ["j'étais tellement content que je l'ai dit sans réfléchir (justification)", "j'étais triste donc j'ai dit", "je voulais dire", "je devais dire"], a: 0,
        e: "ものだから = cause personnelle qui explique/justifie l'acte." },
      { t: "nuance", q: "〜ものだから vs 〜ので :",
        o: ["ものだから = justification subjective personnelle (souvent excuse) ; ので = cause neutre/objective", "identiques", "ので est plus personnel", "ものだから est plus neutre"], a: 0,
        e: "ものだから colore la cause d'une excuse ou d'une justification personnelle." },
    ],
  },

  {
    id: "g160", g: "〜あっての", m: "qui n'existe que grâce à, rendu possible par", f: "Nom₁ + あっての + Nom₂",
    c: "express", lv: 3, rel: ["g117"],
    note: "X est la condition essentielle sans laquelle Y ne peut exister. 命あっての物種 (la vie est la condition de tout). Registre semi-formel.",
    ex: [
      { jp: "お客様あっての商売だ。", fr: "Le commerce n'existe que grâce aux clients." },
      { jp: "命あっての物種。", fr: "Tant qu'on a la vie, on peut tout reprendre." },
    ],
    qs: [
      { t: "fill", q: "ファン＿＿＿芸能界だ。", fr: "Le showbiz n'existe que grâce aux fans.",
        o: ["あっての", "なくしての", "によっての", "についての"], a: 0,
        e: "Condition essentielle → Nom + あっての + Nom." },
      { t: "meaning", q: "「努力あっての成功だ」— sens ?",
        o: ["le succès n'est possible que grâce à l'effort", "le succès vient sans effort", "l'effort nuit au succès", "le succès précède l'effort"], a: 0,
        e: "あっての = condition sine qua non." },
      { t: "usage", q: "〜あっての Nom signifie que :",
        o: ["le premier nom est la condition indispensable du second", "les deux sont opposés", "le second précède le premier", "le premier est inutile"], a: 0,
        e: "Structure : Cond.あっての Résultat — sans la condition, pas de résultat." },
    ],
  },

  {
    id: "g161", g: "〜といった", m: "tel que, comme (énumération d'exemples)", f: "Nom₁（、Nom₂）+ といった + Nom-catégorie",
    c: "particle", lv: 2, rel: ["g009", "g079"],
    note: "Introduit des exemples représentatifs d'une catégorie. Proche de 〜などの mais と言ったが plus formel. 東京、大阪といった大都市 = des grandes villes comme Tokyo, Osaka.",
    ex: [
      { jp: "音楽や絵画といった芸術に興味がある。", fr: "Je m'intéresse aux arts tels que la musique ou la peinture." },
      { jp: "スマホやパソコンといったデジタル機器が普及した。", fr: "Les appareils numériques comme les smartphones et les ordinateurs se sont répandus." },
    ],
    qs: [
      { t: "fill", q: "バラやひまわり＿＿＿花が好きです。", fr: "J'aime les fleurs comme les roses et les tournesols.",
        o: ["といった", "というより", "といえば", "というものの"], a: 0,
        e: "Exemples représentatifs d'une catégorie → 〜といった." },
      { t: "meaning", q: "「東京や大阪といった大都市では家賃が高い」— sens ?",
        o: ["dans des grandes villes telles que Tokyo et Osaka, le loyer est élevé", "à Tokyo et Osaka seulement", "ni à Tokyo ni à Osaka", "malgré Tokyo et Osaka"], a: 0,
        e: "といった = tels que (exemples)." },
      { t: "usage", q: "〜といった précède :",
        o: ["un nom de catégorie générale", "une explication", "un verbe d'action", "une date"], a: 0,
        e: "Structure : exemples + といった + catégorie englobante." },
    ],
  },

  {
    id: "g162", g: "〜やら〜やら", m: "et… et (liste désordonnée, souvent accablante)", f: "Nom／V-辞書 + やら（〜やら）",
    c: "express", lv: 2, rel: ["g080"],
    note: "Liste de choses diverses qui s'accumulent, souvent gênantes ou accablantes. Peut s'employer seul pour exprimer l'incertitude : どうしたやら (je ne sais vraiment pas ce qu'il est devenu).",
    ex: [
      { jp: "引っ越しで荷物やら手続きやら、大変だった。", fr: "Le déménagement avec les cartons et les démarches, c'était l'enfer." },
      { jp: "嬉しいやら悲しいやら、複雑な気持ちだ。", fr: "Entre joie et tristesse, mes émotions sont mélangées." },
    ],
    qs: [
      { t: "fill", q: "試験が近くて、緊張する＿＿＿眠れない＿＿＿、落ち着かない。", fr: "Avec l'examen qui approche, je suis nerveux, je n'arrive pas à dormir, je n'ai pas la paix.",
        o: ["やら／やら", "とか／とか", "や／や", "だの／だの"], a: 0,
        e: "Accumulation accablante d'éléments → 〜やら〜やら." },
      { t: "meaning", q: "「嬉しいやら恥ずかしいやら」— sens ?",
        o: ["entre la joie et la honte (émotions mélangées)", "ni joyeux ni honteux", "très joyeux uniquement", "très honteux uniquement"], a: 0,
        e: "やら〜やら = plusieurs éléments qui se mêlent." },
      { t: "usage", q: "〜やら seul (「どうなるやら」) exprime :",
        o: ["l'incertitude / l'ignorance du locuteur", "la certitude", "une liste", "un ordre"], a: 0,
        e: "やら seul = incertitude expressive (registre sentimental)." },
    ],
  },

  {
    id: "g163", g: "〜なり〜なり", m: "soit… soit, ou bien… ou bien (proposer des options)", f: "Nom／V-辞書 + なり、（Nom／V）+ なり",
    c: "express", lv: 3, rel: ["g080"],
    note: "Propose au moins deux options entre lesquelles choisir, de façon légèrement insistante ou bienveillante. Souvent en suggestion : 電話するなりメールするなりして。",
    ex: [
      { jp: "相談するなり電話するなり、何かしてください。", fr: "Consultez quelqu'un, appelez, faites quelque chose." },
      { jp: "パンなりご飯なり、好きなものを食べてください。", fr: "Mangez ce que vous voulez : du pain ou du riz." },
    ],
    qs: [
      { t: "fill", q: "休む＿＿＿病院へ行く＿＿＿、体を大切に。", fr: "Que tu te reposes ou que tu ailles à l'hôpital, prends soin de toi.",
        o: ["なり／なり", "にしろ／にしろ", "か／か", "やら／やら"], a: 0,
        e: "Options proposées → 〜なり〜なり." },
      { t: "meaning", q: "「謝るなり説明するなりしてほしい」— sens ?",
        o: ["j'aimerais qu'il s'excuse ou donne une explication (au choix)", "il ne faut ni s'excuser ni expliquer", "il doit faire les deux", "aucune option possible"], a: 0,
        e: "なり〜なり = proposer au moins une option parmi celles listées." },
      { t: "nuance", q: "〜なり〜なり vs 〜にしろ〜にしろ [[g080]] :",
        o: ["なり〜なり = propose des options (choisissez) ; にしろ〜にしろ = quelle que soit l'option, la conclusion est identique", "identiques", "にしろ propose des options", "なりは fixe une seule option"], a: 0,
        e: "Sens opposés : なり = choisissez ; にしろ = quelle que soit la réponse." },
    ],
  },

  {
    id: "g164", g: "〜からして", m: "à en juger par, depuis/dès (le moindre élément)", f: "Nom + からして",
    c: "condition", lv: 2, rel: ["g003", "g045"],
    note: "(1) Base de jugement : 声からして緊張している (à en juger par sa voix, il est tendu). (2) Insiste sur le minimum : 名前からして (même le nom déjà…).",
    ex: [
      { jp: "話し方からして、外国人だとわかった。", fr: "Rien qu'à sa façon de parler, on savait que c'était un étranger." },
      { jp: "彼の服装からして、只者ではない。", fr: "Rien que son style vestimentaire indique qu'il n'est pas ordinaire." },
    ],
    qs: [
      { t: "fill", q: "名前＿＿＿、外国人だとわかる。", fr: "Rien que par le nom, on comprend que c'est un étranger.",
        o: ["からして", "から", "として", "にして"], a: 0,
        e: "À en juger par (le moindre indice) → 〜からして." },
      { t: "meaning", q: "「発音からして、この人は日本語が上手だ」— sens ?",
        o: ["à en juger par sa prononciation, cette personne est bonne en japonais", "malgré la prononciation", "à cause d'une mauvaise prononciation", "la prononciation n'indique rien"], a: 0,
        e: "からして = un élément sert de base au jugement." },
      { t: "nuance", q: "〜からして peut aussi exprimer :",
        o: ["que même le premier/plus petit élément déjà suffit à montrer X", "une liste exhaustive", "une comparaison neutre", "une concession"], a: 0,
        e: "Sens 2 : dès le plus petit détail (même X, a fortiori le reste)." },
    ],
  },

  {
    id: "g165", g: "〜にして", m: "à ce stade seulement / et en même temps (double qualité)", f: "Nom + にして",
    c: "particle", lv: 3, rel: ["g005", "g137"],
    note: "(1) Singularité temporelle : 40歳にしてはじめて (pour la première fois à 40 ans). (2) Cumul : 父にして師匠 (à la fois père et maître). Registre soutenu.",
    ex: [
      { jp: "彼女は50歳にして初の小説を書いた。", fr: "Elle a écrit son premier roman à seulement 50 ans." },
      { jp: "彼は天才にして努力家だ。", fr: "Il est à la fois un génie et un grand travailleur." },
    ],
    qs: [
      { t: "fill", q: "30歳＿＿＿、独立を果たした。", fr: "Il a atteint l'indépendance à seulement 30 ans.",
        o: ["にして", "として", "にとって", "にすぎない"], a: 0,
        e: "« Seulement à ce stade / pour la première fois à » → 〜にして." },
      { t: "meaning", q: "「偉大な芸術家にして思想家であった」— sens ?",
        o: ["il était à la fois un grand artiste et un penseur", "il était artiste mais pas penseur", "il était uniquement artiste", "il n'était ni l'un ni l'autre"], a: 0,
        e: "にして (double qualité) = et en même temps, cumulant les deux." },
      { t: "nuance", q: "〜にして (double qualité) diffère de 〜として [[g005]] par :",
        o: ["にして = deux qualités simultanées ; として = rôle / capacité dans laquelle on agit", "ils sont identiques", "として = double qualité", "にして = rôle"], a: 0,
        e: "にして cumule ; として désigne la fonction/rôle." },
    ],
  },

  {
    id: "g166", g: "〜ながらに（して）", m: "tout en restant (dans cet état) ; même en étant (X tel quel)", f: "V-ます（語幹）／Nom + ながらに（して）",
    c: "time", lv: 3, rel: ["g026"],
    note: "L'action ou l'état a lieu sans changer, dans la condition d'origine. 生まれながらに (de naissance, dès la naissance) ; 涙ながらに (les larmes aux yeux).",
    ex: [
      { jp: "彼女は涙ながらに、別れを告げた。", fr: "Les larmes aux yeux, elle a dit au revoir." },
      { jp: "あの子は生まれながらに才能がある。", fr: "Cet enfant a du talent depuis sa naissance." },
    ],
    qs: [
      { t: "fill", q: "昔＿＿＿の製法で、お菓子を作っています。", fr: "Nous fabriquons ces confiseries selon les méthodes d'antan (telles quelles).",
        o: ["ながらに", "ながら", "つつ", "かたわら"], a: 0,
        e: "Maintien d'un état d'origine → 〜ながらに." },
      { t: "meaning", q: "「居ながらにして世界中の情報が得られる」— sens ?",
        o: ["sans bouger de chez soi, on peut obtenir des infos du monde entier", "en voyageant partout", "uniquement à l'étranger", "malgré les informations"], a: 0,
        e: "居ながらにして = en restant où on est." },
      { t: "nuance", q: "Distinguer ながらに de ながら [[g026]] :",
        o: ["ながらに = état maintenu (de naissance, les larmes aux yeux) ; ながら = deux actions simultanées", "identiques", "ながらに = deux actions", "ながら = état maintenu"], a: 0,
        e: "ながらに ≠ ながら : maintien d'état vs simultanéité d'actions." },
    ],
  },

  {
    id: "g167", g: "〜を契機として／〜をきっかけとして", m: "en prenant comme déclencheur (formel)", f: "Nom + を契機として／をきっかけとして",
    c: "time", lv: 2, rel: ["g021", "g022"],
    note: "Variantes formelles de 〜をきっかけに / 〜を契機に, avec として. Registre écrit, emploi dans des rapports ou articles.",
    ex: [
      { jp: "この事件を契機として、法律が改正された。", fr: "En prenant cet incident comme déclencheur, la loi a été révisée." },
      { jp: "留学をきっかけとして、人生観が変わった。", fr: "Mon séjour à l'étranger a servi de déclencheur pour changer ma vision de la vie." },
    ],
    qs: [
      { t: "fill", q: "その事故を＿＿＿、安全対策が強化された。", fr: "Cet accident a servi de déclencheur pour renforcer les mesures de sécurité.",
        o: ["契機として", "契機なので", "契機だから", "契機ながら"], a: 0,
        e: "Déclencheur formel → 〜を契機として." },
      { t: "meaning", q: "「この出会いをきっかけとして、友情が育まれた」— sens ?",
        o: ["cette rencontre a déclenché l'épanouissement d'une amitié", "malgré cette rencontre", "sans cette rencontre, l'amitié existait déjà", "à propos de cette rencontre"], a: 0,
        e: "をきっかけとして = événement déclencheur formel." },
      { t: "nuance", q: "〜を契機として est la version _____ de 〜を契機に :",
        o: ["plus formelle / écrite", "plus familière", "identique en tous points", "opposée en sens"], a: 0,
        e: "として renforce le registre formel." },
    ],
  },

  {
    id: "g168", g: "〜に応えて", m: "en réponse à, pour répondre à (attentes, demandes)", f: "Nom + に応えて／に応えた＋Nom",
    c: "particle", lv: 2, rel: ["g011"],
    note: "Répondre activement à des attentes, des sollicitations ou des besoins. Proche de に応じて mais に応えて met davantage l'accent sur le fait d'y répondre concrètement.",
    ex: [
      { jp: "ファンの声援に応えて、アンコールを演奏した。", fr: "En réponse aux encouragements des fans, ils ont joué un rappel." },
      { jp: "市民の要望に応えて、公園が整備された。", fr: "En réponse aux demandes des citoyens, le parc a été aménagé." },
    ],
    qs: [
      { t: "fill", q: "視聴者のリクエスト＿＿＿、特別番組が放送された。", fr: "En réponse aux demandes des téléspectateurs, une émission spéciale a été diffusée.",
        o: ["に応えて", "に関して", "に伴って", "に先立って"], a: 0,
        e: "Répondre concrètement à des attentes → 〜に応えて." },
      { t: "meaning", q: "「期待に応えて、好成績を残した。」— sens ?",
        o: ["en répondant aux attentes, il a obtenu de bons résultats", "malgré les attentes", "à propos des attentes", "sans attentes particulières"], a: 0,
        e: "に応えて = réponse active et concrète à X." },
      { t: "nuance", q: "〜に応えて vs 〜に応じて [[g011]] :",
        o: ["に応えて = répondre activement (effort concret) ; に応じて = adapter selon les circonstances", "identiques", "に応じて est plus actif", "に応えて = adaptation"], a: 0,
        e: "に応えて = agir pour satisfaire ; に応じて = s'adapter à." },
    ],
  },

  {
    id: "g169", g: "〜をめぐる", m: "autour de, concernant (débat, controverse)", f: "Nom + をめぐる＋Nom／をめぐって",
    c: "particle", lv: 2, rel: ["g014"],
    note: "Variante adnominale de 〜をめぐって. S'emploie comme modificateur de nom : 〜をめぐる議論 (le débat autour de…).",
    ex: [
      { jp: "領土をめぐる争いが続いている。", fr: "Le conflit autour du territoire se poursuit." },
      { jp: "その遺産をめぐる裁判は長引いた。", fr: "Le procès autour de cet héritage a traîné en longueur." },
    ],
    qs: [
      { t: "fill", q: "新しい政策＿＿＿議論が白熱した。", fr: "Le débat autour de la nouvelle politique s'est enflammé.",
        o: ["をめぐる", "をめぐって", "について", "に関する"], a: 0,
        e: "Modificateur nominal → 〜をめぐる＋Nom." },
      { t: "meaning", q: "「原発をめぐる問題は複雑だ」— sens ?",
        o: ["les problèmes autour du nucléaire sont complexes", "à propos de l'histoire du nucléaire", "malgré le nucléaire", "le nucléaire est simple"], a: 0,
        e: "をめぐる = autour de (controverse, débat)." },
      { t: "usage", q: "〜をめぐる est la forme _____ de 〜をめぐって :",
        o: ["adnominale (modifie un nom)", "verbale", "adverbiale", "exclamative"], a: 0,
        e: "をめぐる peut être suivi directement d'un nom (forme attributive)." },
    ],
  },

  {
    id: "g170", g: "〜をもとにして", m: "en se basant sur, à partir de (source, base)", f: "Nom + をもとにして／をもとにした＋Nom",
    c: "particle", lv: 2, rel: ["g008"],
    note: "Variante formelle de 〜をもとに avec して. Interchangeable. Signale la source ou le fondement à partir duquel qqch est élaboré.",
    ex: [
      { jp: "実話をもとにして作られた映画だ。", fr: "C'est un film tiré d'une histoire vraie." },
      { jp: "アンケート結果をもとにして、改善策を講じた。", fr: "En se basant sur les résultats du sondage, des mesures correctives ont été prises." },
    ],
    qs: [
      { t: "fill", q: "この小説は歴史的事実＿＿＿書かれた。", fr: "Ce roman a été écrit en se basant sur des faits historiques.",
        o: ["をもとにして", "をめぐって", "をきっかけに", "を通じて"], a: 0,
        e: "Source sur laquelle on s'appuie → 〜をもとにして." },
      { t: "meaning", q: "「データをもとにして分析した」— sens ?",
        o: ["analyser en se fondant sur les données", "analyser malgré les données", "analyser à propos des données", "analyser sans données"], a: 0,
        e: "をもとにして = prendre X pour base de travail." },
      { t: "nuance", q: "〜をもとにして et 〜をもとに [[g008]] :",
        o: ["quasi-synonymes ; をもとにして légèrement plus formel", "opposés", "をもとにして est moins formel", "ils ne peuvent pas modifier un nom"], a: 0,
        e: "をもとにして = forme un peu plus explicite de をもとに." },
    ],
  },

  {
    id: "g171", g: "〜に関する／〜に関した", m: "relatif à, portant sur (attributif)", f: "Nom + に関する＋Nom",
    c: "particle", lv: 2, rel: ["g010"],
    note: "Forme adnominale (modifie un nom) de 〜に関して. 日本の歴史に関する本 (un livre sur l'histoire du Japon). Registre formel.",
    ex: [
      { jp: "環境問題に関するレポートを書いた。", fr: "J'ai rédigé un rapport portant sur les problèmes environnementaux." },
      { jp: "税金に関する法律が改正された。", fr: "La loi relative à la fiscalité a été révisée." },
    ],
    qs: [
      { t: "fill", q: "健康＿＿＿情報が増えている。", fr: "Les informations relatives à la santé augmentent.",
        o: ["に関する", "についての", "に関して", "に基づく"], a: 0,
        e: "Modificateur nominal formel → 〜に関する＋Nom." },
      { t: "meaning", q: "「この法律はプライバシーに関する規定だ」— sens ?",
        o: ["c'est une disposition légale relative à la vie privée", "c'est une loi sur la publicité", "malgré la vie privée", "à cause de la vie privée"], a: 0,
        e: "に関する = portant sur, relatif à (adjectival)." },
      { t: "usage", q: "〜に関する est la forme adnominale de :",
        o: ["に関して", "について", "に応じて", "に沿って"], a: 0,
        e: "に関して → に関する＋Nom (même racine). Voir [[g010]]." },
    ],
  },

  {
    id: "g172", g: "〜に基づく", m: "basé sur, fondé sur (attributif)", f: "Nom + に基づく＋Nom",
    c: "particle", lv: 2, rel: ["g007"],
    note: "Forme adnominale de 〜に基づいて. Modifie un nom : 法律に基づく処置 (mesure fondée sur la loi). Registre formel/juridique.",
    ex: [
      { jp: "証拠に基づく判断が重要だ。", fr: "Un jugement fondé sur des preuves est important." },
      { jp: "規則に基づく処分が下された。", fr: "Une sanction fondée sur le règlement a été prononcée." },
    ],
    qs: [
      { t: "fill", q: "科学的事実＿＿＿政策を立てるべきだ。", fr: "Il faut établir des politiques fondées sur des faits scientifiques.",
        o: ["に基づく", "に基づいて", "に沿って", "に関して"], a: 0,
        e: "Modificateur nominal → 〜に基づく＋Nom." },
      { t: "meaning", q: "「データに基づく分析」— sens ?",
        o: ["analyse fondée sur les données", "analyse malgré les données", "analyse à propos des données", "analyse sans données"], a: 0,
        e: "に基づく = fondé sur (adjectival)." },
      { t: "usage", q: "〜に基づく est la forme adnominale de :",
        o: ["に基づいて", "に関して", "に応じて", "に沿って"], a: 0,
        e: "に基づいて → に基づく＋Nom. Voir [[g007]]." },
    ],
  },

  {
    id: "g173", g: "〜において（の）", m: "dans, en (domaine/lieu, attributif)", f: "Nom + における＋Nom",
    c: "particle", lv: 2, rel: ["g004"],
    note: "Forme adnominale de 〜において : 〜における＋Nom. Modifie un nom. 教育における役割 (le rôle dans l'éducation). Registre formel.",
    ex: [
      { jp: "日本における少子化は深刻な問題だ。", fr: "La dénatalité au Japon est un problème grave." },
      { jp: "スポーツにおける精神力の重要性を語った。", fr: "Il a parlé de l'importance de la force mentale dans le sport." },
    ],
    qs: [
      { t: "fill", q: "現代社会＿＿＿テクノロジーの役割は大きい。", fr: "Le rôle de la technologie dans la société contemporaine est immense.",
        o: ["における", "において", "に関して", "に沿って"], a: 0,
        e: "Modificateur nominal → 〜における＋Nom." },
      { t: "meaning", q: "「ビジネスにおける信頼の重要性」— sens ?",
        o: ["l'importance de la confiance dans le domaine des affaires", "à propos des affaires seulement", "malgré les affaires", "après les affaires"], a: 0,
        e: "における = dans (domaine), attributif formel." },
      { t: "nuance", q: "〜における est la forme _____ de 〜において [[g004]] :",
        o: ["adnominale (modifie un nom)", "verbale", "adverbiale", "familière"], a: 0,
        e: "において → における＋Nom. Même registre formel." },
    ],
  },

  {
    id: "g174", g: "〜によっては", m: "selon les cas, selon ce que c'est", f: "Nom + によっては",
    c: "particle", lv: 2, rel: ["g003"],
    note: "Souligne que le résultat varie selon les circonstances ou selon la nature de X. Souvent suivi d'une construction conditionnelle.",
    ex: [
      { jp: "場合によっては、プロに頼んだほうがいい。", fr: "Selon les cas, il vaut mieux faire appel à un professionnel." },
      { jp: "考え方によっては、失敗も成功の一部だ。", fr: "Selon la façon de voir les choses, l'échec fait aussi partie du succès." },
    ],
    qs: [
      { t: "fill", q: "状況＿＿＿、対応を変える必要がある。", fr: "Selon la situation, il faut adapter la réponse.",
        o: ["によっては", "によって", "に関しては", "に対しては"], a: 0,
        e: "Variation selon les circonstances → 〜によっては." },
      { t: "meaning", q: "「人によっては賛成しない場合もある」— sens ?",
        o: ["selon les personnes, certaines peuvent ne pas être d'accord", "tout le monde est d'accord", "personne n'est d'accord", "l'accord est impossible"], a: 0,
        e: "によっては = selon X (les cas/personnes)." },
      { t: "usage", q: "〜によっては vs 〜によって [[g003]] :",
        o: ["によっては = variation possible selon les cas ; によって = cause/moyen/agent", "identiques", "によって exprime la variation", "によっては exprime la cause"], a: 0,
        e: "によっては = selon les cas (variation). Voir [[g003]]." },
    ],
  },

  {
    id: "g175", g: "〜にとっては", m: "pour (quelqu'un) en particulier, vu de l'angle de", f: "Nom + にとっては",
    c: "particle", lv: 2, rel: ["g006"],
    note: "Variante de 〜にとって avec は de contraste ou de thématisation. Souvent pour souligner que l'effet/le jugement est particulier à X, pas universel.",
    ex: [
      { jp: "子どもにとっては、これが難しいかもしれない。", fr: "Pour un enfant en particulier, cela peut être difficile." },
      { jp: "私にとっては大した問題ではない。", fr: "Pour moi, ce n'est pas un grand problème." },
    ],
    qs: [
      { t: "fill", q: "初心者＿＿＿、この教材はとても役立つ。", fr: "Pour les débutants en particulier, ce matériel pédagogique est très utile.",
        o: ["にとっては", "に対しては", "に関しては", "にとって"], a: 0,
        e: "Point de vue particulier à X → 〜にとっては." },
      { t: "meaning", q: "「彼にとっては、お金より時間が大切だ」— sens ?",
        o: ["de son point de vue à lui, le temps compte plus que l'argent", "pour tout le monde", "contrairement à lui", "il pense que l'argent est plus important"], a: 0,
        e: "にとっては = du point de vue particulier de X (は de contraste)." },
      { t: "nuance", q: "Différence entre にとって et にとっては :",
        o: ["にとっては ajoute une nuance contrastive (particulièrement pour X)", "identiques", "にとっては est plus général", "にとって implique un contraste"], a: 0,
        e: "Le は thématise et contraste : pour X spécifiquement." },
    ],
  },

  {
    id: "g176", g: "〜をはじめとする", m: "en commençant par, notamment (attributif)", f: "Nom + をはじめとする＋Nom",
    c: "particle", lv: 2, rel: ["g009"],
    note: "Forme adnominale de 〜をはじめ : modifie un nom. 東京をはじめとする大都市 (les grandes villes, à commencer par Tokyo).",
    ex: [
      { jp: "東京をはじめとする大都市では、地価が高い。", fr: "Dans les grandes métropoles, à commencer par Tokyo, le prix du foncier est élevé." },
      { jp: "日本をはじめとするアジアの国々が参加した。", fr: "Les pays asiatiques, à commencer par le Japon, ont participé." },
    ],
    qs: [
      { t: "fill", q: "田中先生＿＿＿多くの教師が式典に出席した。", fr: "De nombreux enseignants, à commencer par Mme Tanaka, ont assisté à la cérémonie.",
        o: ["をはじめとする", "をはじめ", "といった", "をめぐる"], a: 0,
        e: "Adnominal → 〜をはじめとする＋Nom." },
      { t: "meaning", q: "「スマホをはじめとするデジタル機器が普及した」— sens ?",
        o: ["les appareils numériques, à commencer par le smartphone, se sont répandus", "seulement le smartphone", "malgré le smartphone", "avant le smartphone"], a: 0,
        e: "をはじめとする = à commencer par X (représentant de la catégorie)." },
      { t: "usage", q: "〜をはじめとする est la forme _____ de 〜をはじめ :",
        o: ["adnominale (modifie un nom)", "verbale", "interrogative", "négative"], a: 0,
        e: "をはじめ → をはじめとする＋Nom. Voir [[g009]]." },
    ],
  },

  {
    id: "g177", g: "〜においては", m: "dans (thématisé), en ce qui concerne (formel)", f: "Nom + においては",
    c: "particle", lv: 2, rel: ["g004", "g173"],
    note: "〜において avec は de thématisation. Met l'accent sur le cadre. 現代においては (dans le monde actuel, quant à). Registre formel.",
    ex: [
      { jp: "現代においては、スマホなしの生活は考えられない。", fr: "Dans le monde actuel, une vie sans smartphone est inconcevable." },
      { jp: "教育においては、個性を伸ばすことが重要だ。", fr: "En matière d'éducation, cultiver la personnalité de chacun est essentiel." },
    ],
    qs: [
      { t: "fill", q: "医療の分野＿＿＿、AI の活用が進んでいる。", fr: "Dans le domaine médical, l'utilisation de l'IA progresse.",
        o: ["においては", "について", "として", "に基づいて"], a: 0,
        e: "Cadre thématisé formel → 〜においては." },
      { t: "meaning", q: "「科学においては、証拠が重要だ」— sens ?",
        o: ["dans le domaine scientifique, les preuves sont primordiales", "à propos de la science en général", "malgré la science", "contrairement à la science"], a: 0,
        e: "においては = dans le cadre de (thématisé, formel)." },
      { t: "usage", q: "〜においては est :",
        o: ["〜において + は (thématisation)", "une forme interrogative", "une forme adnominale", "une forme familière"], a: 0,
        e: "= において + は de contraste/thématisation." },
    ],
  },

  {
    id: "g178", g: "〜だけの", m: "suffisamment pour, autant que nécessaire pour", f: "V-辞書 + だけの＋Nom",
    c: "condition", lv: 2, rel: ["g046", "g112"],
    note: "Quantité ou degré suffisant pour justifier/accomplir X. だけのことはある = « ce n'est pas pour rien ». だけの力がある (avoir les moyens de).",
    ex: [
      { jp: "頑張っただけのことはある。", fr: "Ça valait la peine de se donner autant de mal." },
      { jp: "それだけの準備があれば、大丈夫だ。", fr: "Avec autant de préparation, ça devrait aller." },
    ],
    qs: [
      { t: "fill", q: "努力した＿＿＿成果が出た。", fr: "Les résultats sont à la hauteur des efforts fournis.",
        o: ["だけの", "だけに", "ばかりの", "ほどの"], a: 0,
        e: "Quantité/degré suffisant → 〜だけの." },
      { t: "meaning", q: "「苦労しただけのことはある」— sens ?",
        o: ["ça valait la peine (la récompense est à la hauteur de l'effort)", "ça n'en valait pas la peine", "les efforts ont été vains", "on n'a pas du tout souffert"], a: 0,
        e: "だけのことはある = le résultat justifie l'effort (ça valait le coup)." },
      { t: "nuance", q: "〜だけの vs 〜だけに [[g045]] :",
        o: ["だけの = quantité suffisante pour ; だけに = précisément à cause de (renforcement causal)", "identiques", "だけに = quantité", "だけの = cause"], a: 0,
        e: "だけの (量・程度) ≠ だけに (因果関係). Voir [[g045]]." },
    ],
  },

  {
    id: "g179", g: "〜折（に）", m: "à l'occasion de, quand l'occasion se présente", f: "V-辞書／V-た／Nom+の + 折（に）",
    c: "time", lv: 3, rel: ["g012", "g092"],
    note: "Occasion particulière, souvent rare. Registre poli/formel : お近くにお越しの折に (si jamais vous passez dans le coin). Proche de 機会に mais plus formel.",
    ex: [
      { jp: "お近くにお越しの折には、ぜひお立ち寄りください。", fr: "Si jamais vous passez dans le coin, n'hésitez pas à vous arrêter." },
      { jp: "先日上京した折に、旧友と再会した。", fr: "Lors de ma dernière montée à Tokyo, j'ai revu un vieil ami." },
    ],
    qs: [
      { t: "fill", q: "次回お会いできる＿＿＿、ぜひご相談ください。", fr: "La prochaine fois que nous nous rencontrerons, n'hésitez pas à me consulter.",
        o: ["折に", "うちに", "最中に", "とたんに"], a: 0,
        e: "Occasion formelle → 〜折に." },
      { t: "meaning", q: "「機会のある折に、ぜひ挑戦してください」— sens ?",
        o: ["quand l'occasion se présentera, essayez donc", "vous ne devez pas essayer", "c'est l'occasion maintenant", "malgré l'occasion"], a: 0,
        e: "折に = quand l'occasion se présente (registre poli)." },
      { t: "usage", q: "〜折に appartient à quel registre ?",
        o: ["formel / poli", "très familier", "enfantin", "argotique"], a: 0,
        e: "折に est typique du langage poli (lettres, discours)." },
    ],
  },

  {
    id: "g180", g: "〜ことだろう", m: "comme ce doit être (empathie, imagination)", f: "普通形 + ことだろう",
    c: "modality", lv: 2, rel: ["g142", "g048"],
    note: "Expression d'empathie ou d'imagination : « combien cela doit être X ». どんなにつらいことだろう (comme ça doit être douloureux). Registre semi-formel.",
    ex: [
      { jp: "どんなに悲しかったことだろう。", fr: "Comme ça a dû être triste." },
      { jp: "合格したと知らせが来た時、どれほど嬉しかったことだろう。", fr: "Quand la nouvelle de sa réussite est arrivée, comme il a dû être heureux." },
    ],
    qs: [
      { t: "fill", q: "一人で海外に行くとは、どれほど心細かった＿＿＿。", fr: "Partir seul à l'étranger, comme ça a dû être angoissant.",
        o: ["ことだろう", "ことか", "ものか", "はずだ"], a: 0,
        e: "Empathie / imagination sur un état passé → 〜ことだろう." },
      { t: "meaning", q: "「どんなに苦しかったことだろう」— sens ?",
        o: ["comme ça a dû être difficile (empathie imaginative)", "c'était facile", "c'est difficile maintenant", "cela sera difficile"], a: 0,
        e: "ことだろう = imagination empathique sur l'intensité d'un vécu." },
      { t: "nuance", q: "〜ことだろう vs 〜ことか [[g142]] :",
        o: ["ことだろう = empathie (imagination d'un état) ; ことか = exclamation directe du locuteur", "identiques", "ことか exprime l'empathie", "ことだろう est une exclamation directe"], a: 0,
        e: "ことだろう = imagination de l'état d'autrui ; ことか = propre émotion du locuteur." },
    ],
  },

  {
    id: "g181", g: "〜ずじまい", m: "finir par ne pas faire, sans jamais (l'occasion de)", f: "V-ない（語幹） + ずじまい（だった）",
    c: "express", lv: 3, rel: ["g100"],
    note: "On avait l'intention de faire X mais on ne l'a finalement jamais fait. Regret ou constat. 会わずじまいだった (je n'ai finalement jamais pu le voir).",
    ex: [
      { jp: "その本は借りたまま読まずじまいだった。", fr: "Ce livre, je l'avais emprunté mais je n'ai jamais réussi à le lire." },
      { jp: "結局、彼には会わずじまいで帰国した。", fr: "Finalement, je suis rentré sans jamais l'avoir vu." },
    ],
    qs: [
      { t: "fill", q: "買おうと思っていたのに、結局買わ＿＿＿だった。", fr: "J'avais l'intention de l'acheter mais finalement je ne l'ai jamais acheté.",
        o: ["ずじまい", "っきり", "ないまま", "ずに"], a: 0,
        e: "Intention non réalisée finalement → 〜ずじまい." },
      { t: "meaning", q: "「伝えたいことが伝えられずじまいだった」— sens ?",
        o: ["je n'ai finalement pas réussi à dire ce que je voulais dire", "j'ai tout dit", "je vais le dire", "j'ai dit quelque chose de different"], a: 0,
        e: "ずじまい = on n'a finalement pas fait X (regret)." },
      { t: "usage", q: "〜ずじまい s'emploie pour :",
        o: ["une intention non réalisée / quelque chose qu'on n'a finalement pas fait", "une action répétée", "une action planifiée future", "une comparaison"], a: 0,
        e: "Constat/regret : X aurait dû se faire mais ne s'est pas fait." },
    ],
  },

  {
    id: "g182", g: "〜をよそに", m: "sans tenir compte de, en ignorant", f: "Nom + をよそに",
    c: "contrast", lv: 3, rel: ["g073"],
    note: "Agir en ignorant les inquiétudes/espoirs/réactions d'autrui. Nuance souvent critique. 周囲の心配をよそに (sans tenir compte des inquiétudes de l'entourage).",
    ex: [
      { jp: "親の心配をよそに、彼は無謀な冒険に出た。", fr: "Sans tenir compte des inquiétudes de ses parents, il s'est lancé dans une aventure imprudente." },
      { jp: "周囲の批判をよそに、彼女は自分のやり方を貫いた。", fr: "Ignorant les critiques autour d'elle, elle a maintenu sa façon de faire." },
    ],
    qs: [
      { t: "fill", q: "世間の非難＿＿＿、彼は計画を続けた。", fr: "Sans tenir compte des reproches du public, il a poursuivi son projet.",
        o: ["をよそに", "もかまわず", "にかかわらず", "に反して"], a: 0,
        e: "Ignorer les réactions d'autrui → 〜をよそに." },
      { t: "meaning", q: "「私の気持ちをよそに、話は進んだ」— sens ?",
        o: ["sans tenir compte de mes sentiments, la discussion a avancé", "grâce à mes sentiments", "à propos de mes sentiments", "malgré mes sentiments positifs"], a: 0,
        e: "をよそに = en ignorant (les sentiments/préoccupations de X)." },
      { t: "nuance", q: "Distinguer 〜をよそに de 〜もかまわず [[g073]] :",
        o: ["をよそに insiste sur le mépris des préoccupations d'autrui ; もかまわず sur l'indifférence à son propre inconvénient", "identiques", "もかまわず concerne autrui", "をよそに concerne soi-même"], a: 0,
        e: "をよそに → ignorer l'entourage ; もかまわず → ignorer une gêne (pour soi)." },
    ],
  },

  //__APPEND__
];

if (typeof window !== "undefined") { window.N2_GRAMMAR = N2_GRAMMAR; window.CATEGORIES = CATEGORIES; window.TIERS = TIERS; }
