/* Cours B2 — base de grammaire (formes du cours uniquement). Généré. */
const CATEGORIES = {
  "particle": {
    "label": "Particules & locutions",
    "icon": "の",
    "color": "#5b9cff"
  },
  "contrast": {
    "label": "Concession & contraste",
    "icon": "対",
    "color": "#ff8a5b"
  },
  "time": {
    "label": "Temps & séquence",
    "icon": "時",
    "color": "#43c97f"
  },
  "condition": {
    "label": "Condition & cause",
    "icon": "因",
    "color": "#c98cff"
  },
  "modality": {
    "label": "Modalité & jugement",
    "icon": "判",
    "color": "#ffd24d"
  },
  "express": {
    "label": "Expressions & emphase",
    "icon": "強",
    "color": "#ff5c8a"
  }
};
const TIERS = {"1": "Essentiel", "2": "Fréquent", "3": "Avancé"};
const N2_GRAMMAR = [
 {
  "id": "c001",
  "g": "～をめぐって ／ ～をめぐる",
  "m": "« au sujet de », « autour de ». Introduit le thème central d'un débat, d'un conflit, d'opinions qui divergent. On tourne autour d'un sujet épineux.",
  "f": "【名詞】＋ をめぐって（＋ 動詞）　／　【名詞】＋ をめぐる ＋ 【名詞】",
  "c": "particle",
  "lv": 1,
  "rel": [],
  "note": "S'emploie surtout avec des sujets de discorde : 意見が分かれる、対立する、議論する、争う…  をめぐって modifie un verbe ; をめぐる modifie directement un nom qui suit (例：環境をめぐる議論).  Plus formel et écrit que について ; について est neutre, をめぐって implique plusieurs points de vue qui s'affrontent.",
  "ex": [
   {
    "jp": "この法律案をめぐって、国民の意見が分かれている。",
    "fr": "Au sujet de ce projet de loi, l'opinion publique est divisée."
   },
   {
    "jp": "遺産（いさん）をめぐって、兄弟が争っている。",
    "fr": "Les frères se disputent au sujet de l'héritage."
   },
   {
    "jp": "環境問題をめぐる議論が活発になっている。",
    "fr": "Le débat autour des questions environnementales s'intensifie."
   }
  ],
  "qs": [
   {
    "t": "fill",
    "q": "この法律案＿＿＿、国民の意見が分かれている。",
    "fr": "Au sujet de ce projet de loi, l'opinion publique est divisée.",
    "o": [
     "べきだ",
     "そこで",
     "なんとか",
     "をめぐって"
    ],
    "a": 3,
    "e": "〜をめぐって : « au sujet de », « autour de »."
   },
   {
    "t": "fill",
    "q": "遺産（いさん）＿＿＿、兄弟が争っている。",
    "fr": "Les frères se disputent au sujet de l'héritage.",
    "o": [
     "だらけ",
     "をめぐって",
     "べきだ",
     "ただ"
    ],
    "a": 1,
    "e": "〜をめぐって : « au sujet de », « autour de »."
   },
   {
    "t": "meaning",
    "q": "「この法律案をめぐって、国民の意見が分かれている。」— que signifie 〜をめぐって ?",
    "o": [
     "« être en train de (changer progressivement) »",
     "« des choses comme… et… (et tout ça) »",
     "« tels que », « comme par exemple »",
     "« au sujet de », « autour de »"
    ],
    "a": 3,
    "e": "〜をめぐって = « au sujet de », « autour de »."
   },
   {
    "t": "meaning",
    "q": "「遺産（いさん）をめぐって、兄弟が争っている。」— que signifie 〜をめぐって ?",
    "o": [
     "« si l'on (fait) trop… (alors) »",
     "« au sujet de », « autour de »",
     "« toutefois », « à condition que », « sauf que »",
     "« comme c'est… ! », « quel(le)… ! »"
    ],
    "a": 1,
    "e": "〜をめぐって = « au sujet de », « autour de »."
   },
   {
    "t": "meaning",
    "q": "「環境問題をめぐる議論が活発になっている。」— que signifie 〜をめぐって ?",
    "o": [
     "« ainsi que », « et » (liaison formelle)",
     "« seulement », « depuis que… (rien ensuite) », « rester à »",
     "« si l'on (fait) trop… (alors) »",
     "« au sujet de », « autour de »"
    ],
    "a": 3,
    "e": "〜をめぐって = « au sujet de », « autour de »."
   },
   {
    "t": "usage",
    "q": "« « au sujet de », « autour de » » se dit en japonais :",
    "o": [
     "のか",
     "をめぐって",
     "において",
     "だけ"
    ],
    "a": 1,
    "e": "→ 〜をめぐって."
   },
   {
    "t": "nuance",
    "q": "Quel est le sens correct de 〜をめぐって ?",
    "o": [
     "« peu importe », « X n'est pas requis / ne compte pas »",
     "« insupportablement », « tellement… que je n'en peux plus »",
     "« au sujet de », « autour de »",
     "« si l'on (fait) trop… (alors) »"
    ],
    "a": 2,
    "e": "S'emploie surtout avec des sujets de discorde : 意見が分かれる、対立する、議論する、争う…"
   },
   {
    "t": "usage",
    "q": "Forme correcte (« au sujet de », « autour de ») ? [7]",
    "o": [
     "をはじめ",
     "はもちろん",
     "をきっかけに",
     "をめぐって"
    ],
    "a": 3,
    "e": "→ 〜をめぐって."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« au sujet de », « autour de ») ? [8]",
    "o": [
     "きり",
     "をめぐって",
     "は問わない",
     "に限る"
    ],
    "a": 1,
    "e": "→ 〜をめぐって."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« au sujet de », « autour de ») ? [9]",
    "o": [
     "やらやら",
     "なんとか",
     "をめぐって",
     "わけがない"
    ],
    "a": 2,
    "e": "→ 〜をめぐって."
   }
  ]
 },
 {
  "id": "c002",
  "g": "～とは",
  "m": "« ce qu'on appelle… (c'est) », « X, c'est… ». Sert à définir un mot ou à donner son sens. Souvent suivi d'une explication ou d'une définition.",
  "f": "【名詞】＋ とは、〜（という意味です／〜ものだ など）",
  "c": "express",
  "lv": 2,
  "rel": [],
  "note": "Sert à poser une définition, à expliquer un terme. Ton plutôt formel/écrit.  Équivaut à というのは mais plus net et catégorique ; idéal pour les définitions de dictionnaire.  Attention : とは a aussi un sens de surprise (〜とは思わなかった), mais ici on parle du « とは » de définition.",
  "ex": [
   {
    "jp": "カタカナ語とは、外来語を表すためにカタカナで書かれる日本語の語彙です。",
    "fr": "Les mots en katakana, ce sont les termes japonais écrits en katakana pour représenter les mots étrangers."
   },
   {
    "jp": "セクハラとは、セクシャルハラスメントという意味です。",
    "fr": "« Sekuhara », cela signifie « harcèlement sexuel »."
   },
   {
    "jp": "幸せとは、お金で得られないものです。",
    "fr": "Le bonheur, c'est quelque chose qui ne s'achète pas."
   }
  ],
  "qs": [
   {
    "t": "fill",
    "q": "カタカナ語＿＿＿、外来語を表すためにカタカナで書かれる日本語の語彙です。",
    "fr": "Les mots en katakana, ce sont les termes japonais écrits en katakana pour représenter les mots étrangers.",
    "o": [
     "当たり",
     "ばかりでなく",
     "とは",
     "に際して"
    ],
    "a": 2,
    "e": "〜とは : « ce qu'on appelle… (c'est) », « X, c'est… »."
   },
   {
    "t": "fill",
    "q": "セクハラ＿＿＿、セクシャルハラスメントという意味です。",
    "fr": "« Sekuhara », cela signifie « harcèlement sexuel ».",
    "o": [
     "わけがない",
     "にしては",
     "にすれば",
     "とは"
    ],
    "a": 3,
    "e": "〜とは : « ce qu'on appelle… (c'est) », « X, c'est… »."
   },
   {
    "t": "fill",
    "q": "幸せ＿＿＿、お金で得られないものです。",
    "fr": "Le bonheur, c'est quelque chose qui ne s'achète pas.",
    "o": [
     "とは",
     "すなわち",
     "なりに",
     "なんてんだろう"
    ],
    "a": 0,
    "e": "〜とは : « ce qu'on appelle… (c'est) », « X, c'est… »."
   },
   {
    "t": "meaning",
    "q": "「カタカナ語とは、外来語を表すためにカタカナで書かれる日本語の語彙です。」— que signifie 〜とは ?",
    "o": [
     "« en même temps que », « avec », « à mesure que »",
     "« ce qu'on appelle… (c'est) », « X, c'est… »",
     "« bien sûr… mais aussi », « non seulement… (cela va de soi) ",
     "« commencer à (sans finir) », « être à moitié… »"
    ],
    "a": 1,
    "e": "〜とは = « ce qu'on appelle… (c'est) », « X, c'est… »."
   },
   {
    "t": "meaning",
    "q": "「セクハラとは、セクシャルハラスメントという意味です。」— que signifie 〜とは ?",
    "o": [
     "« ce qu'on appelle… (c'est) », « X, c'est… »",
     "« ne pas pouvoir s'empêcher de »",
     "« commencer à (sans finir) », « être à moitié… »",
     "« ne faire qu'augmenter/diminuer », « aller toujours plus da"
    ],
    "a": 0,
    "e": "〜とは = « ce qu'on appelle… (c'est) », « X, c'est… »."
   },
   {
    "t": "meaning",
    "q": "「幸せとは、お金で得られないものです。」— que signifie 〜とは ?",
    "o": [
     "« au sujet de », « autour de »",
     "« autant que », « tant que »",
     "« il n'y a pas besoin de », « ce n'est pas la peine de »",
     "« ce qu'on appelle… (c'est) », « X, c'est… »"
    ],
    "a": 3,
    "e": "〜とは = « ce qu'on appelle… (c'est) », « X, c'est… »."
   },
   {
    "t": "usage",
    "q": "« « ce qu'on appelle… (c'est) », « X, c'est… » » se dit en japonais :",
    "o": [
     "て以来",
     "あまり",
     "とは",
     "に限る"
    ],
    "a": 2,
    "e": "→ 〜とは."
   },
   {
    "t": "nuance",
    "q": "Quel est le sens correct de 〜とは ?",
    "o": [
     "« malgré tout », « et pourtant », « même ainsi »",
     "« par (unité) », « pour chaque »",
     "« ce qu'on appelle… (c'est) », « X, c'est… »",
     "« il n'y a pas besoin de », « ce n'est pas la peine de »"
    ],
    "a": 2,
    "e": "Sert à poser une définition, à expliquer un terme. Ton plutôt formel/écrit."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« ce qu'on appelle… (c'est) », « X, c'est… ») ? [8]",
    "o": [
     "そこで",
     "に限る",
     "とは",
     "はもちろん"
    ],
    "a": 2,
    "e": "→ 〜とは."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« ce qu'on appelle… (c'est) », « X, c'est… ») ? [9]",
    "o": [
     "と言えば",
     "によって",
     "上で",
     "とは"
    ],
    "a": 3,
    "e": "→ 〜とは."
   }
  ]
 },
 {
  "id": "c003",
  "g": "～というものは",
  "m": "« ce qu'on appelle X (par nature)… ». Sert à énoncer une vérité générale, une essence, sur la nature profonde d'une chose. Ton réfléchi, un peu solennel.",
  "f": "【名詞】＋ というものは、〜（ものだ／ものではない など）",
  "c": "express",
  "lv": 2,
  "rel": [],
  "note": "Exprime une généralité, une définition essentielle ou une opinion sur la nature des choses.  ≠ とは (simple définition) : というものは ajoute une nuance d'évidence universelle, presque philosophique.  Ne convient PAS pour définir un simple mot technique (×セクハラというものは…意味です). Convient pour des concepts (人生、幸せ、愛…).",
  "ex": [
   {
    "jp": "幸せというものは、お金で得られないものです。",
    "fr": "Le bonheur, par nature, ne s'achète pas."
   },
   {
    "jp": "人生というものは、思い通りにならないものだ。",
    "fr": "La vie, par nature, ne se déroule pas comme on le voudrait."
   },
   {
    "jp": "親というものは、いつまでも子供を心配するものだ。",
    "fr": "Les parents, par nature, s'inquiètent toujours pour leurs enfants."
   }
  ],
  "qs": [
   {
    "t": "fill",
    "q": "幸せ＿＿＿、お金で得られないものです。",
    "fr": "Le bonheur, par nature, ne s'achète pas.",
    "o": [
     "に限り",
     "は問わない",
     "なんてんだろう",
     "というものは"
    ],
    "a": 3,
    "e": "〜というものは : « ce qu'on appelle X (par nature)… »."
   },
   {
    "t": "fill",
    "q": "人生＿＿＿、思い通りにならないものだ。",
    "fr": "La vie, par nature, ne se déroule pas comme on le voudrait.",
    "o": [
     "というものは",
     "きり",
     "わけがない",
     "かける"
    ],
    "a": 0,
    "e": "〜というものは : « ce qu'on appelle X (par nature)… »."
   },
   {
    "t": "fill",
    "q": "親＿＿＿、いつまでも子供を心配するものだ。",
    "fr": "Les parents, par nature, s'inquiètent toujours pour leurs enfants.",
    "o": [
     "というものは",
     "に限る",
     "一方だ",
     "のみ"
    ],
    "a": 0,
    "e": "〜というものは : « ce qu'on appelle X (par nature)… »."
   },
   {
    "t": "meaning",
    "q": "「幸せというものは、お金で得られないものです。」— que signifie 〜というものは ?",
    "o": [
     "« ce qu'on appelle X (par nature)… »",
     "« au sujet de », « autour de »",
     "« tels que », « comme par exemple »",
     "« et si nous…? », « faisons… ! »"
    ],
    "a": 0,
    "e": "〜というものは = « ce qu'on appelle X (par nature)… »."
   },
   {
    "t": "meaning",
    "q": "「人生というものは、思い通りにならないものだ。」— que signifie 〜というものは ?",
    "o": [
     "« sans distinction de », « indépendamment de »",
     "« à sa manière », « selon ses propres moyens »",
     "« certes… mais », « c'est vrai que X, seulement… »",
     "« ce qu'on appelle X (par nature)… »"
    ],
    "a": 3,
    "e": "〜というものは = « ce qu'on appelle X (par nature)… »."
   },
   {
    "t": "meaning",
    "q": "「親というものは、いつまでも子供を心配するものだ。」— que signifie 〜というものは ?",
    "o": [
     "« d'un côté… de l'autre », « tandis que »",
     "« il n'y a pas besoin de », « ce n'est pas la peine de »",
     "« ce qu'on appelle X (par nature)… »",
     "« seulement », « depuis que… (rien ensuite) », « rester à »"
    ],
    "a": 2,
    "e": "〜というものは = « ce qu'on appelle X (par nature)… »."
   },
   {
    "t": "usage",
    "q": "« « ce qu'on appelle X (par nature)… » » se dit en japonais :",
    "o": [
     "によって",
     "というものは",
     "要するに",
     "に限る"
    ],
    "a": 1,
    "e": "→ 〜というものは."
   },
   {
    "t": "nuance",
    "q": "Quel est le sens correct de 〜というものは ?",
    "o": [
     "« peu importe », « X n'est pas requis / ne compte pas »",
     "« finalement », « en fin de compte », « au bout du compte »",
     "« ce qu'on appelle X (par nature)… »",
     "« tellement… que », « à cause de l'excès de… »"
    ],
    "a": 2,
    "e": "Exprime une généralité, une définition essentielle ou une opinion sur la nature des choses."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« ce qu'on appelle X (par nature)… ») ? [8]",
    "o": [
     "そこで",
     "というものは",
     "をめぐって",
     "に限らず"
    ],
    "a": 1,
    "e": "→ 〜というものは."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« ce qu'on appelle X (par nature)… ») ? [9]",
    "o": [
     "というものは",
     "にしても",
     "くらい",
     "ないではいられない"
    ],
    "a": 0,
    "e": "→ 〜というものは."
   }
  ]
 },
 {
  "id": "c004",
  "g": "～といった ＋ 【名詞】",
  "m": "« tels que », « comme par exemple ». Donne deux ou trois exemples représentatifs avant un nom générique.",
  "f": "【名詞A】や【名詞B】（、【名詞C】）＋ といった ＋ 【名詞（カテゴリ）】",
  "c": "particle",
  "lv": 1,
  "rel": [],
  "note": "Toujours suivi d'un nom qui englobe les exemples cités (スキル、果物、問題…).  Proche de など mais といった insiste sur des exemples concrets et choisis ; など est plus neutre.  Souvent combiné avec や entre les exemples : AやBやCといった〜.",
  "ex": [
   {
    "jp": "リーダーシップやコミュニケーションといったスキルは、職場で求められている。",
    "fr": "Des compétences telles que le leadership et la communication sont recherchées au travail."
   },
   {
    "jp": "この地方は、リンゴやブドウといった果物が有名です。",
    "fr": "Cette région est réputée pour des fruits tels que les pommes et le raisin."
   },
   {
    "jp": "地震や台風といった自然災害に備える必要がある。",
    "fr": "Il faut se préparer aux catastrophes naturelles telles que séismes et typhons."
   }
  ],
  "qs": [
   {
    "t": "fill",
    "q": "リーダーシップやコミュニケーション＿＿＿スキルは、職場で求められている。",
    "fr": "Des compétences telles que le leadership et la communication sont recherchées au travail.",
    "o": [
     "といった",
     "にすれば",
     "ただ",
     "かと思う"
    ],
    "a": 0,
    "e": "〜といった : « tels que », « comme par exemple »."
   },
   {
    "t": "fill",
    "q": "この地方は、リンゴやブドウ＿＿＿果物が有名です。",
    "fr": "Cette région est réputée pour des fruits tels que les pommes et le raisin.",
    "o": [
     "といった",
     "とは",
     "に限る",
     "によって"
    ],
    "a": 0,
    "e": "〜といった : « tels que », « comme par exemple »."
   },
   {
    "t": "fill",
    "q": "地震や台風＿＿＿自然災害に備える必要がある。",
    "fr": "Il faut se préparer aux catastrophes naturelles telles que séismes et typhons.",
    "o": [
     "といった",
     "のみ",
     "結局",
     "のか"
    ],
    "a": 0,
    "e": "〜といった : « tels que », « comme par exemple »."
   },
   {
    "t": "meaning",
    "q": "「リーダーシップやコミュニケーションといったスキルは、職場で求められている。」— que signifie 〜といった ?",
    "o": [
     "« rien ne vaut », « le mieux c'est… »",
     "« ce qu'on appelle X (par nature)… »",
     "« tels que », « comme par exemple »",
     "« à commencer par », « notamment »"
    ],
    "a": 2,
    "e": "〜といった = « tels que », « comme par exemple »."
   },
   {
    "t": "meaning",
    "q": "「この地方は、リンゴやブドウといった果物が有名です。」— que signifie 〜といった ?",
    "o": [
     "« lorsqu'on fait X », « dans le cadre / pour les besoins de ",
     "« à travers », « par l'intermédiaire de », « tout au long de",
     "« peut-être à cause de », « sans doute parce que »",
     "« tels que », « comme par exemple »"
    ],
    "a": 3,
    "e": "〜といった = « tels que », « comme par exemple »."
   },
   {
    "t": "meaning",
    "q": "「地震や台風といった自然災害に備える必要がある。」— que signifie 〜といった ?",
    "o": [
     "« à mesure que », « accompagné de », « du fait de »",
     "« tels que », « comme par exemple »",
     "« au sujet de », « autour de »",
     "« sans distinction de », « indépendamment de »"
    ],
    "a": 1,
    "e": "〜といった = « tels que », « comme par exemple »."
   },
   {
    "t": "usage",
    "q": "« « tels que », « comme par exemple » » se dit en japonais :",
    "o": [
     "にしても",
     "とは",
     "といった",
     "を通して"
    ],
    "a": 2,
    "e": "→ 〜といった."
   },
   {
    "t": "nuance",
    "q": "Quel est le sens correct de 〜といった ?",
    "o": [
     "« à l'occasion de », « au moment de (faire quelque chose d'i",
     "« à sa manière », « selon ses propres moyens »",
     "« ce qu'on appelle… (c'est) », « X, c'est… »",
     "« tels que », « comme par exemple »"
    ],
    "a": 3,
    "e": "Toujours suivi d'un nom qui englobe les exemples cités (スキル、果物、問題…)."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« tels que », « comme par exemple ») ? [8]",
    "o": [
     "ものがある",
     "といった",
     "そこで",
     "ではないか"
    ],
    "a": 1,
    "e": "→ 〜といった."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« tels que », « comme par exemple ») ? [9]",
    "o": [
     "をめぐって",
     "すなわち",
     "ばかりでなく",
     "といった"
    ],
    "a": 3,
    "e": "→ 〜といった."
   }
  ]
 },
 {
  "id": "c005",
  "g": "～と言えば（といえば）",
  "m": "« en parlant de », « à propos de », « quand on évoque X (ce qui vient à l'esprit, c'est)… ». Rebondit sur un sujet pour y associer une image typique.",
  "f": "【名詞】＋ といえば、〜（が浮かぶ／思い出す など）",
  "c": "express",
  "lv": 2,
  "rel": [],
  "note": "Deux usages : (1) association d'idées typique (フランス料理といえば…) ; (2) rebondir sur un mot que l'interlocuteur vient de dire.  Introduit ce qui est le plus représentatif/le premier qui vient à l'esprit.  Registre courant à neutre, très fréquent à l'oral.",
  "ex": [
   {
    "jp": "フランス料理といえば、エスカルゴやフォアグラが思い浮かびます。",
    "fr": "Quand on parle de cuisine française, l'escargot et le foie gras viennent à l'esprit."
   },
   {
    "jp": "夏といえば、やっぱり海でしょう。",
    "fr": "L'été, ce qui vient à l'esprit, c'est quand même la mer, non ?"
   },
   {
    "jp": "京都といえば、お寺や紅葉が有名ですね。",
    "fr": "Kyoto, ce qui est célèbre, ce sont les temples et les érables d'automne."
   }
  ],
  "qs": [
   {
    "t": "meaning",
    "q": "「フランス料理といえば、エスカルゴやフォアグラが思い浮かびます。」— que signifie 〜と言えば ?",
    "o": [
     "« dans », « au sein de », « en matière de »",
     "« malgré tout », « et pourtant », « même ainsi »",
     "« en parlant de », « à propos de », « quand on évoque X (ce ",
     "« bien sûr… mais aussi », « non seulement… (cela va de soi) "
    ],
    "a": 2,
    "e": "〜と言えば = « en parlant de », « à propos de », « quand on évoque X (ce ."
   },
   {
    "t": "meaning",
    "q": "「夏といえば、やっぱり海でしょう。」— que signifie 〜と言えば ?",
    "o": [
     "« insupportablement », « tellement… que je n'en peux plus »",
     "« il y a quelque chose de… (qui touche) », « on ressent un c",
     "« il paraît que », « on dit que… (et donc) »",
     "« en parlant de », « à propos de », « quand on évoque X (ce "
    ],
    "a": 3,
    "e": "〜と言えば = « en parlant de », « à propos de », « quand on évoque X (ce ."
   },
   {
    "t": "meaning",
    "q": "「京都といえば、お寺や紅葉が有名ですね。」— que signifie 〜と言えば ?",
    "o": [
     "« tels que », « comme par exemple »",
     "« est-ce parce que…? », « sans doute parce que… »",
     "« en parlant de », « à propos de », « quand on évoque X (ce ",
     "« au sujet de », « autour de »"
    ],
    "a": 2,
    "e": "〜と言えば = « en parlant de », « à propos de », « quand on évoque X (ce ."
   },
   {
    "t": "usage",
    "q": "« « en parlant de », « à propos de », « quand on évoque X (ce  » se dit en japonais :",
    "o": [
     "のか",
     "と言えば",
     "すなわち",
     "きり"
    ],
    "a": 1,
    "e": "→ 〜と言えば."
   },
   {
    "t": "nuance",
    "q": "Quel est le sens correct de 〜と言えば ?",
    "o": [
     "« à la suite de », « l'occasion qui a déclenché… »",
     "« en parlant de », « à propos de », « quand on évoque X (ce ",
     "« en somme », « bref », « pour résumer »",
     "« insupportablement », « tellement… que je n'en peux plus »"
    ],
    "a": 1,
    "e": "Deux usages : (1) association d'idées typique (フランス料理といえば…) ; (2) rebondir sur un mot que l'interlocuteur vient de dire."
   },
   {
    "t": "usage",
    "q": "Complétez avec la forme correcte (sens : « en parlant de », « à propos de », « quand on évoque X (ce ) :",
    "o": [
     "わけがない",
     "結局",
     "一方で",
     "と言えば"
    ],
    "a": 3,
    "e": "→ 〜と言えば."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« en parlant de », « à propos de », « quand on évoque X (ce ) ? [6]",
    "o": [
     "に限る",
     "あまりに",
     "結局",
     "と言えば"
    ],
    "a": 3,
    "e": "→ 〜と言えば."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« en parlant de », « à propos de », « quand on évoque X (ce ) ? [7]",
    "o": [
     "といった",
     "結局",
     "と言えば",
     "でのみ"
    ],
    "a": 2,
    "e": "→ 〜と言えば."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« en parlant de », « à propos de », « quand on évoque X (ce ) ? [8]",
    "o": [
     "要するに",
     "ばかりでなく",
     "あまり",
     "と言えば"
    ],
    "a": 3,
    "e": "→ 〜と言えば."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« en parlant de », « à propos de », « quand on évoque X (ce ) ? [9]",
    "o": [
     "わけがない",
     "を通して",
     "と言えば",
     "ことはが"
    ],
    "a": 2,
    "e": "→ 〜と言えば."
   }
  ]
 },
 {
  "id": "c006",
  "g": "～にすれば ／ ～にしてみれば",
  "m": "« du point de vue de », « pour X (si l'on se met à sa place) ». Adopte le point de vue, les sentiments d'une personne.",
  "f": "【人を表す名詞】＋ にすれば ／ にしてみれば、〜（はずだ／だろう など）",
  "c": "modality",
  "lv": 1,
  "rel": [],
  "note": "Se met à la place de quelqu'un pour expliquer ce qu'il ressent ou pense.  にしてみれば insiste un peu plus sur l'empathie, la mise en situation ; にすれば est légèrement plus neutre. Très proches.  Le sujet est presque toujours une personne (ou un groupe). La phrase finit souvent par はず／だろう／に違いない.",
  "ex": [
   {
    "jp": "彼女は笑っていたけど、彼女にすれば、あなたの考えに納得していないはずだよ。",
    "fr": "Elle souriait, mais de son point de vue, elle n'est sûrement pas convaincue par ton idée."
   },
   {
    "jp": "子供にしてみれば、引っ越しは不安なことだろう。",
    "fr": "Du point de vue de l'enfant, le déménagement doit être source d'angoisse."
   },
   {
    "jp": "外国人にしてみれば、日本の習慣は不思議に感じられるだろう。",
    "fr": "Pour un étranger, les coutumes japonaises doivent sembler étranges."
   }
  ],
  "qs": [
   {
    "t": "fill",
    "q": "彼女は笑っていたけど、彼女＿＿＿、あなたの考えに納得していないはずだよ。",
    "fr": "Elle souriait, mais de son point de vue, elle n'est sûrement pas convaincue par ton idée.",
    "o": [
     "なんてんだろう",
     "一方で",
     "にすれば",
     "べきだ"
    ],
    "a": 2,
    "e": "〜にすれば : « du point de vue de », « pour X (si l'on se met à sa place)."
   },
   {
    "t": "meaning",
    "q": "「彼女は笑っていたけど、彼女にすれば、あなたの考えに納得していないはずだよ。」— que signifie 〜にすれば ?",
    "o": [
     "« à la suite de », « l'occasion qui a déclenché… »",
     "« il n'y a pas besoin de », « ce n'est pas la peine de »",
     "« du point de vue de », « pour X (si l'on se met à sa place)",
     "« certes… mais », « c'est vrai que X, seulement… »"
    ],
    "a": 2,
    "e": "〜にすれば = « du point de vue de », « pour X (si l'on se met à sa place)."
   },
   {
    "t": "meaning",
    "q": "「子供にしてみれば、引っ越しは不安なことだろう。」— que signifie 〜にすれば ?",
    "o": [
     "« du point de vue de », « pour X (si l'on se met à sa place)",
     "Ajoute か à une phrase pour adoucir, exprimer une incertitude",
     "« j'ai cru que… (alors que ce n'était pas le cas) »",
     "« et si nous…? », « faisons… ! »"
    ],
    "a": 0,
    "e": "〜にすれば = « du point de vue de », « pour X (si l'on se met à sa place)."
   },
   {
    "t": "meaning",
    "q": "「外国人にしてみれば、日本の習慣は不思議に感じられるだろう。」— que signifie 〜にすれば ?",
    "o": [
     "« à sa manière », « selon ses propres moyens »",
     "« sans distinction de », « indépendamment de »",
     "« ne pas pouvoir s'empêcher de »",
     "« du point de vue de », « pour X (si l'on se met à sa place)"
    ],
    "a": 3,
    "e": "〜にすれば = « du point de vue de », « pour X (si l'on se met à sa place)."
   },
   {
    "t": "usage",
    "q": "« « du point de vue de », « pour X (si l'on se met à sa place) » se dit en japonais :",
    "o": [
     "に限って",
     "と言えば",
     "にすれば",
     "ただ"
    ],
    "a": 2,
    "e": "→ 〜にすれば."
   },
   {
    "t": "nuance",
    "q": "Quel est le sens correct de 〜にすれば ?",
    "o": [
     "« justement quand… (par malchance) » / « (lui) de tous… ne f",
     "« tels que », « comme par exemple »",
     "« du point de vue de », « pour X (si l'on se met à sa place)",
     "« en même temps que », « avec », « à mesure que »"
    ],
    "a": 2,
    "e": "Se met à la place de quelqu'un pour expliquer ce qu'il ressent ou pense."
   },
   {
    "t": "usage",
    "q": "Complétez avec la forme correcte (sens : « du point de vue de », « pour X (si l'on se met à sa place)) :",
    "o": [
     "で済む",
     "を問わず",
     "にすれば",
     "ことだ"
    ],
    "a": 2,
    "e": "→ 〜にすれば."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« du point de vue de », « pour X (si l'on se met à sa place)) ? [7]",
    "o": [
     "あまりに",
     "ではないか",
     "とともに",
     "にすれば"
    ],
    "a": 3,
    "e": "→ 〜にすれば."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« du point de vue de », « pour X (si l'on se met à sa place)) ? [8]",
    "o": [
     "にすれば",
     "とか",
     "ではないか",
     "かける"
    ],
    "a": 0,
    "e": "→ 〜にすれば."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« du point de vue de », « pour X (si l'on se met à sa place)) ? [9]",
    "o": [
     "にすれば",
     "ただし",
     "とは",
     "はもちろん"
    ],
    "a": 0,
    "e": "→ 〜にすれば."
   }
  ]
 },
 {
  "id": "c007",
  "g": "～にしても",
  "m": "« même pour X », « même si c'est X ». Concède : même en prenant le cas de X (qui pourtant…), le constat tient.",
  "f": "【名詞／普通形】＋ にしても、〜",
  "c": "contrast",
  "lv": 2,
  "rel": [],
  "note": "Sens concessif : « même X (à qui on ne s'attendrait pas) … ».  À distinguer de にすれば (point de vue) : にしても = concession/« même ».  Aussi employé pour « de toute façon, même dans ce cas » : 行くにしても、準備が必要だ。",
  "ex": [
   {
    "jp": "彼女はあんなことを言っていたけど、彼女にしても、あなたが全部間違っているとは思っていないよ。",
    "fr": "Elle a dit ça, mais même elle ne pense pas que tu aies entièrement tort."
   },
   {
    "jp": "両親は厳しい人でした。そんな両親にしても、私のことは心配だったのだろう。",
    "fr": "Mes parents étaient sévères. Même eux devaient malgré tout s'inquiéter pour moi."
   },
   {
    "jp": "先生にしても、かっとなる時はありますよ。",
    "fr": "Même un professeur, il lui arrive de s'emporter."
   }
  ],
  "qs": [
   {
    "t": "fill",
    "q": "彼女はあんなことを言っていたけど、彼女＿＿＿、あなたが全部間違っているとは思っていないよ。",
    "fr": "Elle a dit ça, mais même elle ne pense pas que tu aies entièrement tort.",
    "o": [
     "にしても",
     "と言えば",
     "に限って",
     "とともに"
    ],
    "a": 0,
    "e": "〜にしても : « même pour X », « même si c'est X »."
   },
   {
    "t": "fill",
    "q": "両親は厳しい人でした。そんな両親＿＿＿、私のことは心配だったのだろう。",
    "fr": "Mes parents étaient sévères. Même eux devaient malgré tout s'inquiéter pour moi.",
    "o": [
     "かと思う",
     "といった",
     "に限って",
     "にしても"
    ],
    "a": 3,
    "e": "〜にしても : « même pour X », « même si c'est X »."
   },
   {
    "t": "fill",
    "q": "先生＿＿＿、かっとなる時はありますよ。",
    "fr": "Même un professeur, il lui arrive de s'emporter.",
    "o": [
     "くらい",
     "にしても",
     "あまりに",
     "てしかたがない"
    ],
    "a": 1,
    "e": "〜にしても : « même pour X », « même si c'est X »."
   },
   {
    "t": "meaning",
    "q": "「彼女はあんなことを言っていたけど、彼女にしても、あなたが全部間違っているとは思っていないよ。」— que signifie 〜にしても ?",
    "o": [
     "« même pour X », « même si c'est X »",
     "« à mesure que », « accompagné de », « du fait de »",
     "« en parlant de », « à propos de », « quand on évoque X (ce ",
     "« toutefois », « à condition que », « sauf que »"
    ],
    "a": 0,
    "e": "〜にしても = « même pour X », « même si c'est X »."
   },
   {
    "t": "meaning",
    "q": "「両親は厳しい人でした。そんな両親にしても、私のことは心配だったのだろう。」— que signifie 〜にしても ?",
    "o": [
     "« même pour X », « même si c'est X »",
     "« des choses comme… et… (et tout ça) »",
     "« est-ce parce que…? », « sans doute parce que… »",
     "« seulement », « depuis que… (rien ensuite) », « rester à »"
    ],
    "a": 0,
    "e": "〜にしても = « même pour X », « même si c'est X »."
   },
   {
    "t": "meaning",
    "q": "「先生にしても、かっとなる時はありますよ。」— que signifie 〜にしても ?",
    "o": [
     "« bien sûr… mais aussi », « non seulement… (cela va de soi) ",
     "« même pour X », « même si c'est X »",
     "« justement », « c'est précisément… qui »",
     "« il paraît que », « on dit que… (et donc) »"
    ],
    "a": 1,
    "e": "〜にしても = « même pour X », « même si c'est X »."
   },
   {
    "t": "usage",
    "q": "« « même pour X », « même si c'est X » » se dit en japonais :",
    "o": [
     "やらやら",
     "にしても",
     "べきだ",
     "を通して"
    ],
    "a": 1,
    "e": "→ 〜にしても."
   },
   {
    "t": "nuance",
    "q": "Quel est le sens correct de 〜にしても ?",
    "o": [
     "« est-ce parce que…? », « sans doute parce que… »",
     "« toutefois », « à condition que », « sauf que »",
     "« par », « selon », « à cause de », « grâce à »",
     "« même pour X », « même si c'est X »"
    ],
    "a": 3,
    "e": "Sens concessif : « même X (à qui on ne s'attendrait pas) … »."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« même pour X », « même si c'est X ») ? [8]",
    "o": [
     "かける",
     "一方で",
     "とか",
     "にしても"
    ],
    "a": 3,
    "e": "→ 〜にしても."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« même pour X », « même si c'est X ») ? [9]",
    "o": [
     "に際して",
     "を通して",
     "にしても",
     "つつある"
    ],
    "a": 2,
    "e": "→ 〜にしても."
   }
  ]
 },
 {
  "id": "c008",
  "g": "～とともに",
  "m": "« en même temps que », « avec », « à mesure que ». Indique que deux choses évoluent ou se produisent conjointement.",
  "f": "【名詞】＋ とともに ／ 【動詞辞書形】＋ とともに",
  "c": "time",
  "lv": 2,
  "rel": [],
  "note": "Sens 1 — évolution parallèle : 〜が進むとともに（à mesure que… progresse）.  Sens 2 — accompagnement : 「家族とともに暮らす」（vivre avec sa famille）.  Avec un nom verbal, on peut dire soit 名詞＋とともに soit 名詞＋が＋動詞＋とともに (病気の悪化とともに ／ 病気が悪化するとともに).",
  "ex": [
   {
    "jp": "技術の進歩とともに、私たちの生活スタイルも変わってきた。",
    "fr": "Avec le progrès technique, notre mode de vie a aussi changé."
   },
   {
    "jp": "女性の社会進出が進むとともに、男女平等の考え方が広がってきた。",
    "fr": "À mesure que les femmes accèdent au monde du travail, l'idée d'égalité s'est répandue."
   },
   {
    "jp": "年を取るとともに、体力が落ちてきた。",
    "fr": "En vieillissant, ma forme physique a décliné."
   }
  ],
  "qs": [
   {
    "t": "fill",
    "q": "技術の進歩＿＿＿、私たちの生活スタイルも変わってきた。",
    "fr": "Avec le progrès technique, notre mode de vie a aussi changé.",
    "o": [
     "にしても",
     "とともに",
     "に限らず",
     "で済む"
    ],
    "a": 1,
    "e": "〜とともに : « en même temps que », « avec », « à mesure que »."
   },
   {
    "t": "fill",
    "q": "女性の社会進出が進む＿＿＿、男女平等の考え方が広がってきた。",
    "fr": "À mesure que les femmes accèdent au monde du travail, l'idée d'égalité s'est répandue.",
    "o": [
     "および",
     "を問わず",
     "一方で",
     "とともに"
    ],
    "a": 3,
    "e": "〜とともに : « en même temps que », « avec », « à mesure que »."
   },
   {
    "t": "fill",
    "q": "年を取る＿＿＿、体力が落ちてきた。",
    "fr": "En vieillissant, ma forme physique a décliné.",
    "o": [
     "とは",
     "ことだ",
     "てしかたがない",
     "とともに"
    ],
    "a": 3,
    "e": "〜とともに : « en même temps que », « avec », « à mesure que »."
   },
   {
    "t": "meaning",
    "q": "「技術の進歩とともに、私たちの生活スタイルも変わってきた。」— que signifie 〜とともに ?",
    "o": [
     "« il n'y a pas besoin de », « ce n'est pas la peine de »",
     "« en même temps que », « avec », « à mesure que »",
     "« comme c'est… ! », « quel(le)… ! »",
     "« sans distinction de », « indépendamment de »"
    ],
    "a": 1,
    "e": "〜とともに = « en même temps que », « avec », « à mesure que »."
   },
   {
    "t": "meaning",
    "q": "「女性の社会進出が進むとともに、男女平等の考え方が広がってきた。」— que signifie 〜とともに ?",
    "o": [
     "« en même temps que », « avec », « à mesure que »",
     "« faire complètement », « jusqu'au bout », « à fond »",
     "« ne faire qu'augmenter/diminuer », « aller toujours plus da",
     "« en somme », « bref », « pour résumer »"
    ],
    "a": 0,
    "e": "〜とともに = « en même temps que », « avec », « à mesure que »."
   },
   {
    "t": "meaning",
    "q": "「年を取るとともに、体力が落ちてきた。」— que signifie 〜とともに ?",
    "o": [
     "« en même temps que », « avec », « à mesure que »",
     "« par », « selon », « à cause de », « grâce à »",
     "« non seulement… mais aussi (en plus) »",
     "« ce qu'on appelle X (par nature)… »"
    ],
    "a": 0,
    "e": "〜とともに = « en même temps que », « avec », « à mesure que »."
   },
   {
    "t": "usage",
    "q": "« « en même temps que », « avec », « à mesure que » » se dit en japonais :",
    "o": [
     "にしても",
     "とともに",
     "というものは",
     "やらやら"
    ],
    "a": 1,
    "e": "→ 〜とともに."
   },
   {
    "t": "nuance",
    "q": "Quel est le sens correct de 〜とともに ?",
    "o": [
     "« en même temps que », « avec », « à mesure que »",
     "« des choses comme… et… (et tout ça) »",
     "« peu importe », « X n'est pas requis / ne compte pas »",
     "« après avoir fait X (et sur cette base) »"
    ],
    "a": 0,
    "e": "Sens 1 — évolution parallèle : 〜が進むとともに（à mesure que… progresse）."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« en même temps que », « avec », « à mesure que ») ? [8]",
    "o": [
     "で済む",
     "とともに",
     "ことはない",
     "てしかたがない"
    ],
    "a": 1,
    "e": "→ 〜とともに."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« en même temps que », « avec », « à mesure que ») ? [9]",
    "o": [
     "くらい",
     "あまりに",
     "とともに",
     "を皮切りに"
    ],
    "a": 2,
    "e": "→ 〜とともに."
   }
  ]
 },
 {
  "id": "c009",
  "g": "～てしかたがない ／ ～てしょうがない ／ ～てたまらない",
  "m": "« insupportablement », « tellement… que je n'en peux plus ». Exprime un état (émotion, sensation) si intense qu'on ne peut le contrôler.",
  "f": "【動詞て形／い形容詞くて／な形容詞で】＋ しかたがない／しょうがない／たまらない",
  "c": "express",
  "lv": 2,
  "rel": [],
  "note": "てしかた（が）ない = neutre ; てしょうがない = familier ; てたまらない = familier + emphase forte.  Décrit surtout des sensations/émotions involontaires : 眠い、暑い、心配だ、うれしい、〜たい…  S'utilise pour soi-même au présent ; pour autrui, ajouter らしい／ようだ.",
  "ex": [
   {
    "jp": "子供がうるさくてしょうがない。",
    "fr": "Les enfants sont si bruyants que c'est insupportable."
   },
   {
    "jp": "試験の結果が気になってしかたがない。",
    "fr": "Je suis terriblement anxieux au sujet des résultats de l'examen."
   },
   {
    "jp": "国の家族に会いたくてたまらない。",
    "fr": "J'ai une envie irrépressible de revoir ma famille au pays."
   }
  ],
  "qs": [
   {
    "t": "fill",
    "q": "試験の結果が気になっ＿＿＿。",
    "fr": "Je suis terriblement anxieux au sujet des résultats de l'examen.",
    "o": [
     "なんとか",
     "てしかたがない",
     "それでも",
     "において"
    ],
    "a": 1,
    "e": "〜てしかたがない : « insupportablement », « tellement… que je n'en peux plus »."
   },
   {
    "t": "meaning",
    "q": "「子供がうるさくてしょうがない。」— que signifie 〜てしかたがない ?",
    "o": [
     "« c'est pourquoi », « alors (j'ai décidé de) »",
     "ことだ = « il faut (conseil) » ou exclamation",
     "« du point de vue de », « pour X (si l'on se met à sa place)",
     "« insupportablement », « tellement… que je n'en peux plus »"
    ],
    "a": 3,
    "e": "〜てしかたがない = « insupportablement », « tellement… que je n'en peux plus »."
   },
   {
    "t": "meaning",
    "q": "「試験の結果が気になってしかたがない。」— que signifie 〜てしかたがない ?",
    "o": [
     "« après avoir fait X (et sur cette base) »",
     "« du point de vue de », « pour X (si l'on se met à sa place)",
     "« insupportablement », « tellement… que je n'en peux plus »",
     "« ainsi que », « et » (liaison formelle)"
    ],
    "a": 2,
    "e": "〜てしかたがない = « insupportablement », « tellement… que je n'en peux plus »."
   },
   {
    "t": "meaning",
    "q": "「国の家族に会いたくてたまらない。」— que signifie 〜てしかたがない ?",
    "o": [
     "« insupportablement », « tellement… que je n'en peux plus »",
     "« sans distinction de », « indépendamment de »",
     "« cela dit », « seulement », « toutefois »",
     "« en somme », « bref », « pour résumer »"
    ],
    "a": 0,
    "e": "〜てしかたがない = « insupportablement », « tellement… que je n'en peux plus »."
   },
   {
    "t": "usage",
    "q": "« « insupportablement », « tellement… que je n'en peux plus » » se dit en japonais :",
    "o": [
     "てしかたがない",
     "ただし",
     "をめぐって",
     "ないではいられない"
    ],
    "a": 0,
    "e": "→ 〜てしかたがない."
   },
   {
    "t": "nuance",
    "q": "Quel est le sens correct de 〜てしかたがない ?",
    "o": [
     "« on devrait », « il faut (moralement) » / « on ne devrait p",
     "« uniquement (dans le cas de) », « exclusivement pour »",
     "« insupportablement », « tellement… que je n'en peux plus »",
     "« même pour X », « même si c'est X »"
    ],
    "a": 2,
    "e": "てしかた（が）ない = neutre ; てしょうがない = familier ; てたまらない = familier + emphase forte."
   },
   {
    "t": "usage",
    "q": "Complétez avec la forme correcte (sens : « insupportablement », « tellement… que je n'en peux plus ») :",
    "o": [
     "だけ",
     "てしかたがない",
     "をめぐって",
     "わけがない"
    ],
    "a": 1,
    "e": "→ 〜てしかたがない."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« insupportablement », « tellement… que je n'en peux plus ») ? [7]",
    "o": [
     "とともに",
     "て以来",
     "かのように",
     "てしかたがない"
    ],
    "a": 3,
    "e": "→ 〜てしかたがない."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« insupportablement », « tellement… que je n'en peux plus ») ? [8]",
    "o": [
     "て以来",
     "をはじめ",
     "一方だ",
     "てしかたがない"
    ],
    "a": 3,
    "e": "→ 〜てしかたがない."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« insupportablement », « tellement… que je n'en peux plus ») ? [9]",
    "o": [
     "てしかたがない",
     "せいか",
     "にしても",
     "に限る"
    ],
    "a": 0,
    "e": "→ 〜てしかたがない."
   }
  ]
 },
 {
  "id": "c010",
  "g": "～ことはない",
  "m": "« il n'y a pas besoin de », « ce n'est pas la peine de ». Rassure quelqu'un en lui disant qu'une action n'est pas nécessaire.",
  "f": "【動詞辞書形】＋ ことはない",
  "c": "modality",
  "lv": 1,
  "rel": [],
  "note": "Sert à conseiller, consoler : « inutile de t'inquiéter / de te presser ».  ≠ 必要がない (factuel) : ことはない a une nuance d'encouragement, on rassure l'interlocuteur.  À ne pas confondre avec 〜ことがない (« n'avoir jamais fait »).",
  "ex": [
   {
    "jp": "今すぐ決めることはないよ。もう少し考えてみよう。",
    "fr": "Pas besoin de décider tout de suite. Réfléchissons encore un peu."
   },
   {
    "jp": "そんなに気にすることはないですよ。",
    "fr": "Il n'y a vraiment pas de quoi t'en faire à ce point."
   },
   {
    "jp": "一人で悩むことはない。みんなで考えよう。",
    "fr": "Inutile de te tracasser seul. Réfléchissons-y ensemble."
   }
  ],
  "qs": [
   {
    "t": "fill",
    "q": "今すぐ決める＿＿＿よ。もう少し考えてみよう。",
    "fr": "Pas besoin de décider tout de suite. Réfléchissons encore un peu.",
    "o": [
     "を通して",
     "上で",
     "において",
     "ことはない"
    ],
    "a": 3,
    "e": "〜ことはない : « il n'y a pas besoin de », « ce n'est pas la peine de »."
   },
   {
    "t": "fill",
    "q": "そんなに気にする＿＿＿ですよ。",
    "fr": "Il n'y a vraiment pas de quoi t'en faire à ce point.",
    "o": [
     "ないではいられない",
     "のか",
     "ことはない",
     "きる"
    ],
    "a": 2,
    "e": "〜ことはない : « il n'y a pas besoin de », « ce n'est pas la peine de »."
   },
   {
    "t": "fill",
    "q": "一人で悩む＿＿＿。みんなで考えよう。",
    "fr": "Inutile de te tracasser seul. Réfléchissons-y ensemble.",
    "o": [
     "ことはない",
     "といった",
     "のみ",
     "一方で"
    ],
    "a": 0,
    "e": "〜ことはない : « il n'y a pas besoin de », « ce n'est pas la peine de »."
   },
   {
    "t": "meaning",
    "q": "「今すぐ決めることはないよ。もう少し考えてみよう。」— que signifie 〜ことはない ?",
    "o": [
     "« il n'y a pas besoin de », « ce n'est pas la peine de »",
     "« peut-être à cause de », « sans doute parce que »",
     "« uniquement à/dans/par » (のみ combiné à une particule de lie",
     "« c'est pourquoi », « alors (j'ai décidé de) »"
    ],
    "a": 0,
    "e": "〜ことはない = « il n'y a pas besoin de », « ce n'est pas la peine de »."
   },
   {
    "t": "meaning",
    "q": "「そんなに気にすることはないですよ。」— que signifie 〜ことはない ?",
    "o": [
     "« il n'y a pas besoin de », « ce n'est pas la peine de »",
     "« il paraît que », « on dit que… (et donc) »",
     "« est-ce parce que…? », « sans doute parce que… »",
     "« commencer à (sans finir) », « être à moitié… »"
    ],
    "a": 0,
    "e": "〜ことはない = « il n'y a pas besoin de », « ce n'est pas la peine de »."
   },
   {
    "t": "meaning",
    "q": "「一人で悩むことはない。みんなで考えよう。」— que signifie 〜ことはない ?",
    "o": [
     "« il n'y a pas besoin de », « ce n'est pas la peine de »",
     "« couvert de », « plein de » (souvent quelque chose de négat",
     "« uniquement à/dans/par » (のみ combiné à une particule de lie",
     "« au sujet de », « autour de »"
    ],
    "a": 0,
    "e": "〜ことはない = « il n'y a pas besoin de », « ce n'est pas la peine de »."
   },
   {
    "t": "usage",
    "q": "« « il n'y a pas besoin de », « ce n'est pas la peine de » » se dit en japonais :",
    "o": [
     "きれない",
     "すなわち",
     "て以来",
     "ことはない"
    ],
    "a": 3,
    "e": "→ 〜ことはない."
   },
   {
    "t": "nuance",
    "q": "Quel est le sens correct de 〜ことはない ?",
    "o": [
     "« il est impossible que », « il n'y a aucune chance que »",
     "« il n'y a pas besoin de », « ce n'est pas la peine de »",
     "« d'un côté… de l'autre », « tandis que »",
     "« peut-être à cause de », « sans doute parce que »"
    ],
    "a": 1,
    "e": "Sert à conseiller, consoler : « inutile de t'inquiéter / de te presser »."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« il n'y a pas besoin de », « ce n'est pas la peine de ») ? [8]",
    "o": [
     "で済む",
     "ことはない",
     "かのように",
     "かける"
    ],
    "a": 1,
    "e": "→ 〜ことはない."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« il n'y a pas besoin de », « ce n'est pas la peine de ») ? [9]",
    "o": [
     "あまり",
     "と言えば",
     "ことはない",
     "といった"
    ],
    "a": 2,
    "e": "→ 〜ことはない."
   }
  ]
 },
 {
  "id": "c011",
  "g": "～上で（うえで）〔動詞辞書形〕",
  "m": "« lorsqu'on fait X », « dans le cadre / pour les besoins de X ». Indique le contexte ou la condition nécessaire d'une action, surtout en lien avec un but.",
  "f": "【動詞辞書形】／【名詞の】＋ 上で、〜",
  "c": "time",
  "lv": 2,
  "rel": [],
  "note": "Exprime « au moment de faire X » dans un sens de procédure/condition, pas une simple coïncidence temporelle.  ≠ 時に (simple moment) : 上で a une nuance de « pour réussir / dans le processus de ».  Ne convient pas pour un événement ponctuel concret (×中古車を買う上で、友達が来た). Convient pour : 〜する上で注意すべきこと.",
  "ex": [
   {
    "jp": "中古車を買う上で、注意しなければならないことを教えてください。",
    "fr": "Dites-moi ce à quoi il faut faire attention lorsqu'on achète une voiture d'occasion."
   },
   {
    "jp": "自分の気持ちを伝える上で、話し方も重要になる。",
    "fr": "Pour transmettre ses sentiments, la manière de parler compte aussi."
   },
   {
    "jp": "宣伝はイベントを成功させる上で不可欠だ。",
    "fr": "La publicité est indispensable pour réussir un événement."
   }
  ],
  "qs": [
   {
    "t": "fill",
    "q": "中古車を買う＿＿＿、注意しなければならないことを教えてください。",
    "fr": "Dites-moi ce à quoi il faut faire attention lorsqu'on achète une voiture d'occasion.",
    "o": [
     "に限って",
     "一方だ",
     "をきっかけに",
     "上で"
    ],
    "a": 3,
    "e": "〜上で : « lorsqu'on fait X », « dans le cadre / pour les besoins de ."
   },
   {
    "t": "fill",
    "q": "自分の気持ちを伝える＿＿＿、話し方も重要になる。",
    "fr": "Pour transmettre ses sentiments, la manière de parler compte aussi.",
    "o": [
     "要するに",
     "上で",
     "のか",
     "ことはない"
    ],
    "a": 1,
    "e": "〜上で : « lorsqu'on fait X », « dans le cadre / pour les besoins de ."
   },
   {
    "t": "fill",
    "q": "宣伝はイベントを成功させる＿＿＿不可欠だ。",
    "fr": "La publicité est indispensable pour réussir un événement.",
    "o": [
     "ないではいられない",
     "上で",
     "当たり",
     "といった"
    ],
    "a": 1,
    "e": "〜上で : « lorsqu'on fait X », « dans le cadre / pour les besoins de ."
   },
   {
    "t": "meaning",
    "q": "「中古車を買う上で、注意しなければならないことを教えてください。」— que signifie 〜上で ?",
    "o": [
     "« bien sûr… mais aussi », « non seulement… (cela va de soi) ",
     "« lorsqu'on fait X », « dans le cadre / pour les besoins de ",
     "« uniquement (dans le cas de) », « exclusivement pour »",
     "« en somme », « bref », « pour résumer »"
    ],
    "a": 1,
    "e": "〜上で = « lorsqu'on fait X », « dans le cadre / pour les besoins de ."
   },
   {
    "t": "meaning",
    "q": "「自分の気持ちを伝える上で、話し方も重要になる。」— que signifie 〜上で ?",
    "o": [
     "« lorsqu'on fait X », « dans le cadre / pour les besoins de ",
     "« justement », « c'est précisément… qui »",
     "« ne pas pouvoir s'empêcher de »",
     "« rien ne vaut », « le mieux c'est… »"
    ],
    "a": 0,
    "e": "〜上で = « lorsqu'on fait X », « dans le cadre / pour les besoins de ."
   },
   {
    "t": "meaning",
    "q": "「宣伝はイベントを成功させる上で不可欠だ。」— que signifie 〜上で ?",
    "o": [
     "« lorsqu'on fait X », « dans le cadre / pour les besoins de ",
     "« ce qu'on appelle… (c'est) », « X, c'est… »",
     "« et si nous…? », « faisons… ! »",
     "« peut-être à cause de », « sans doute parce que »"
    ],
    "a": 0,
    "e": "〜上で = « lorsqu'on fait X », « dans le cadre / pour les besoins de ."
   },
   {
    "t": "usage",
    "q": "« « lorsqu'on fait X », « dans le cadre / pour les besoins de  » se dit en japonais :",
    "o": [
     "ことだ",
     "とともに",
     "上で",
     "べきだ"
    ],
    "a": 2,
    "e": "→ 〜上で."
   },
   {
    "t": "nuance",
    "q": "Quel est le sens correct de 〜上で ?",
    "o": [
     "« lorsqu'on fait X », « dans le cadre / pour les besoins de ",
     "« au sujet de », « autour de »",
     "« comme c'est… ! », « quel(le)… ! »",
     "« à travers », « par l'intermédiaire de », « tout au long de"
    ],
    "a": 0,
    "e": "Exprime « au moment de faire X » dans un sens de procédure/condition, pas une simple coïncidence temporelle."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« lorsqu'on fait X », « dans le cadre / pour les besoins de ) ? [8]",
    "o": [
     "あまり",
     "なりに",
     "で済む",
     "上で"
    ],
    "a": 3,
    "e": "→ 〜上で."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« lorsqu'on fait X », « dans le cadre / pour les besoins de ) ? [9]",
    "o": [
     "くらい",
     "はもちろん",
     "上で",
     "当たり"
    ],
    "a": 2,
    "e": "→ 〜上で."
   }
  ]
 },
 {
  "id": "c012",
  "g": "～上で（うえで）〔動詞た形〕",
  "m": "« après avoir fait X (et sur cette base) ». Une action se fait après en avoir accompli une autre, qui en est le préalable réfléchi.",
  "f": "【動詞た形】／【名詞の】＋ 上で、〜",
  "c": "time",
  "lv": 2,
  "rel": [],
  "note": "Met l'accent sur « X d'abord, puis sur cette base, Y ». Plus formel que 〜てから.  Souvent dans des contextes de décision, contrat, démarche : よく相談した上で決める.  Avec un nom : 「面談（めんだん）の上で」「確認の上で」.",
  "ex": [
   {
    "jp": "大学に進学するか就職するか、両親とよく相談した上で決めてください。",
    "fr": "Université ou emploi : décidez après en avoir bien discuté avec vos parents."
   },
   {
    "jp": "自分でよく理解した上で、契約書にサインをした。",
    "fr": "J'ai signé le contrat après l'avoir bien compris moi-même."
   },
   {
    "jp": "詳しいことは、お会いした上でお話しいたします。",
    "fr": "Pour les détails, je vous en parlerai après notre rencontre."
   }
  ],
  "qs": [
   {
    "t": "fill",
    "q": "大学に進学するか就職するか、両親とよく相談した＿＿＿決めてください。",
    "fr": "Université ou emploi : décidez après en avoir bien discuté avec vos parents.",
    "o": [
     "において",
     "ことだ",
     "上で",
     "のか"
    ],
    "a": 2,
    "e": "〜上で : « après avoir fait X (et sur cette base) »."
   },
   {
    "t": "fill",
    "q": "自分でよく理解した＿＿＿、契約書にサインをした。",
    "fr": "J'ai signé le contrat après l'avoir bien compris moi-même.",
    "o": [
     "きる",
     "のみ",
     "上で",
     "ただ"
    ],
    "a": 2,
    "e": "〜上で : « après avoir fait X (et sur cette base) »."
   },
   {
    "t": "fill",
    "q": "詳しいことは、お会いした＿＿＿お話しいたします。",
    "fr": "Pour les détails, je vous en parlerai après notre rencontre.",
    "o": [
     "べきだ",
     "で済む",
     "それでも",
     "上で"
    ],
    "a": 3,
    "e": "〜上で : « après avoir fait X (et sur cette base) »."
   },
   {
    "t": "meaning",
    "q": "「大学に進学するか就職するか、両親とよく相談した上で決めてください。」— que signifie 〜上で ?",
    "o": [
     "« il est impossible que », « il n'y a aucune chance que »",
     "« des choses comme… et… (et tout ça) »",
     "« justement quand… (par malchance) » / « (lui) de tous… ne f",
     "« après avoir fait X (et sur cette base) »"
    ],
    "a": 3,
    "e": "〜上で = « après avoir fait X (et sur cette base) »."
   },
   {
    "t": "meaning",
    "q": "「自分でよく理解した上で、契約書にサインをした。」— que signifie 〜上で ?",
    "o": [
     "« ainsi que », « et » (liaison formelle)",
     "« après avoir fait X (et sur cette base) »",
     "« uniquement (dans le cas de) », « exclusivement pour »",
     "« justement », « c'est précisément… qui »"
    ],
    "a": 1,
    "e": "〜上で = « après avoir fait X (et sur cette base) »."
   },
   {
    "t": "meaning",
    "q": "「詳しいことは、お会いした上でお話しいたします。」— que signifie 〜上で ?",
    "o": [
     "« ne pas pouvoir s'empêcher de »",
     "« après avoir fait X (et sur cette base) »",
     "« toutefois », « à condition que », « sauf que »",
     "« uniquement à/dans/par » (のみ combiné à une particule de lie"
    ],
    "a": 1,
    "e": "〜上で = « après avoir fait X (et sur cette base) »."
   },
   {
    "t": "usage",
    "q": "« « après avoir fait X (et sur cette base) » » se dit en japonais :",
    "o": [
     "きれない",
     "のかと思った",
     "なりに",
     "上で"
    ],
    "a": 3,
    "e": "→ 〜上で."
   },
   {
    "t": "nuance",
    "q": "Quel est le sens correct de 〜上で ?",
    "o": [
     "« tels que », « comme par exemple »",
     "« après avoir fait X (et sur cette base) »",
     "« à la suite de », « l'occasion qui a déclenché… »",
     "« pour un… (étonnamment) », « compte tenu de »"
    ],
    "a": 1,
    "e": "Met l'accent sur « X d'abord, puis sur cette base, Y ». Plus formel que 〜てから."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« après avoir fait X (et sur cette base) ») ? [8]",
    "o": [
     "のかと思った",
     "きれない",
     "ことはが",
     "上で"
    ],
    "a": 3,
    "e": "→ 〜上で."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« après avoir fait X (et sur cette base) ») ? [9]",
    "o": [
     "ないではいられない",
     "あまりに",
     "上で",
     "を問わず"
    ],
    "a": 2,
    "e": "→ 〜上で."
   }
  ]
 },
 {
  "id": "c013",
  "g": "～に際して（にさいして）／ ～にあたって",
  "m": "« à l'occasion de », « au moment de (faire quelque chose d'important) ». Marque un moment formel, solennel, le seuil d'une action notable.",
  "f": "【動詞辞書形】／【名詞】＋ に際して ／ にあたって",
  "c": "time",
  "lv": 2,
  "rel": [],
  "note": "Réservé aux occasions importantes/officielles : début d'un travail, accueil d'invités, départ, mariage…  に際して et にあたって sont quasi interchangeables ; に際して légèrement plus écrit/formel.  Très utilisé dans les discours, annonces, lettres polies.",
  "ex": [
   {
    "jp": "作業を始めるに際して、二、三、注意しておきたいことがあります。",
    "fr": "Au moment de commencer le travail, il y a deux ou trois points à signaler."
   },
   {
    "jp": "大切なお客様を迎えるにあたって、失礼のないよう十分注意する。",
    "fr": "À l'occasion de l'accueil d'invités importants, on veille à ne pas être impoli."
   },
   {
    "jp": "息子の就職に際しては、大変お世話になりました。",
    "fr": "Lors de l'embauche de mon fils, vous nous avez été d'une grande aide."
   }
  ],
  "qs": [
   {
    "t": "fill",
    "q": "作業を始める＿＿＿、二、三、注意しておきたいことがあります。",
    "fr": "Au moment de commencer le travail, il y a deux ou trois points à signaler.",
    "o": [
     "べきだ",
     "に際して",
     "なんてんだろう",
     "やらやら"
    ],
    "a": 1,
    "e": "〜に際して : « à l'occasion de », « au moment de (faire quelque chose d'i."
   },
   {
    "t": "fill",
    "q": "息子の就職＿＿＿は、大変お世話になりました。",
    "fr": "Lors de l'embauche de mon fils, vous nous avez été d'une grande aide.",
    "o": [
     "に際して",
     "一方で",
     "ないではいられない",
     "ばかりでなく"
    ],
    "a": 0,
    "e": "〜に際して : « à l'occasion de », « au moment de (faire quelque chose d'i."
   },
   {
    "t": "meaning",
    "q": "「作業を始めるに際して、二、三、注意しておきたいことがあります。」— que signifie 〜に際して ?",
    "o": [
     "« ne faire qu'augmenter/diminuer », « aller toujours plus da",
     "« à travers », « par l'intermédiaire de », « tout au long de",
     "« à l'occasion de », « au moment de (faire quelque chose d'i",
     "« bien sûr… mais aussi », « non seulement… (cela va de soi) "
    ],
    "a": 2,
    "e": "〜に際して = « à l'occasion de », « au moment de (faire quelque chose d'i."
   },
   {
    "t": "meaning",
    "q": "「大切なお客様を迎えるにあたって、失礼のないよう十分注意する。」— que signifie 〜に際して ?",
    "o": [
     "« à l'occasion de », « au moment de (faire quelque chose d'i",
     "« pour un… (étonnamment) », « compte tenu de »",
     "« dans », « au sein de », « en matière de »",
     "« depuis que… (et jusqu'à maintenant) »"
    ],
    "a": 0,
    "e": "〜に際して = « à l'occasion de », « au moment de (faire quelque chose d'i."
   },
   {
    "t": "meaning",
    "q": "「息子の就職に際しては、大変お世話になりました。」— que signifie 〜に際して ?",
    "o": [
     "« à l'occasion de », « au moment de (faire quelque chose d'i",
     "« est-ce parce que…? », « sans doute parce que… »",
     "« lorsqu'on fait X », « dans le cadre / pour les besoins de ",
     "« tellement… que », « à cause de l'excès de… »"
    ],
    "a": 0,
    "e": "〜に際して = « à l'occasion de », « au moment de (faire quelque chose d'i."
   },
   {
    "t": "usage",
    "q": "« « à l'occasion de », « au moment de (faire quelque chose d'i » se dit en japonais :",
    "o": [
     "あまり",
     "に際して",
     "結局",
     "をはじめ"
    ],
    "a": 1,
    "e": "→ 〜に際して."
   },
   {
    "t": "nuance",
    "q": "Quel est le sens correct de 〜に際して ?",
    "o": [
     "« par », « selon », « à cause de », « grâce à »",
     "« sans distinction de », « indépendamment de »",
     "« à l'occasion de », « au moment de (faire quelque chose d'i",
     "« couvert de », « plein de » (souvent quelque chose de négat"
    ],
    "a": 2,
    "e": "Réservé aux occasions importantes/officielles : début d'un travail, accueil d'invités, départ, mariage…"
   },
   {
    "t": "usage",
    "q": "Forme correcte (« à l'occasion de », « au moment de (faire quelque chose d'i) ? [7]",
    "o": [
     "に際して",
     "にしては",
     "に限り",
     "に限る"
    ],
    "a": 0,
    "e": "→ 〜に際して."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« à l'occasion de », « au moment de (faire quelque chose d'i) ? [8]",
    "o": [
     "はもちろん",
     "かのように",
     "に際して",
     "結局"
    ],
    "a": 2,
    "e": "→ 〜に際して."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« à l'occasion de », « au moment de (faire quelque chose d'i) ? [9]",
    "o": [
     "なりに",
     "に際して",
     "てしかたがない",
     "一方だ"
    ],
    "a": 1,
    "e": "→ 〜に際して."
   }
  ]
 },
 {
  "id": "c014",
  "g": "～て以来（ていらい）／ それ以来 ／ あれ以来",
  "m": "« depuis que… (et jusqu'à maintenant) ». Marque le point de départ d'un état qui dure jusqu'au présent.",
  "f": "【動詞て形】＋ 以来 ／ それ以来 ／ あれ以来",
  "c": "time",
  "lv": 2,
  "rel": [],
  "note": "L'état décrit se prolonge jusqu'au moment présent (continuité).  ≠ 〜てから (simple « après ») : 以来 insiste sur une longue durée ininterrompue, souvent avec une nuance affective.  Ne s'emploie pas pour des actions répétées banales (×会って以来、2〜3回映画に行った → utiliser 会ってから).",
  "ex": [
   {
    "jp": "あの人とは去年の3月に会って以来、一度も連絡をしていません。",
    "fr": "Depuis que je l'ai vu en mars dernier, je ne l'ai pas contacté une seule fois."
   },
   {
    "jp": "日本に来て以来、毎日が新しい発見の連続です。",
    "fr": "Depuis mon arrivée au Japon, chaque jour est une suite de découvertes."
   },
   {
    "jp": "5年前に手紙を書いたら返事が来た。それ以来、文通が続いている。",
    "fr": "Il y a 5 ans j'ai écrit une lettre et reçu une réponse. Depuis, notre correspondance continue."
   }
  ],
  "qs": [
   {
    "t": "fill",
    "q": "あの人とは去年の3月に会っ＿＿＿、一度も連絡をしていません。",
    "fr": "Depuis que je l'ai vu en mars dernier, je ne l'ai pas contacté une seule fois.",
    "o": [
     "くらい",
     "ばかりでなく",
     "て以来",
     "てしかたがない"
    ],
    "a": 2,
    "e": "〜て以来 : « depuis que… (et jusqu'à maintenant) »."
   },
   {
    "t": "fill",
    "q": "日本に来＿＿＿、毎日が新しい発見の連続です。",
    "fr": "Depuis mon arrivée au Japon, chaque jour est une suite de découvertes.",
    "o": [
     "あまりに",
     "をきっかけに",
     "きる",
     "て以来"
    ],
    "a": 3,
    "e": "〜て以来 : « depuis que… (et jusqu'à maintenant) »."
   },
   {
    "t": "meaning",
    "q": "「あの人とは去年の3月に会って以来、一度も連絡をしていません。」— que signifie 〜て以来 ?",
    "o": [
     "« depuis que… (et jusqu'à maintenant) »",
     "« autant que », « tant que »",
     "« peut-être à cause de », « sans doute parce que »",
     "« à sa manière », « selon ses propres moyens »"
    ],
    "a": 0,
    "e": "〜て以来 = « depuis que… (et jusqu'à maintenant) »."
   },
   {
    "t": "meaning",
    "q": "「日本に来て以来、毎日が新しい発見の連続です。」— que signifie 〜て以来 ?",
    "o": [
     "« peu importe », « X n'est pas requis / ne compte pas »",
     "« uniquement à/dans/par » (のみ combiné à une particule de lie",
     "« à la suite de », « l'occasion qui a déclenché… »",
     "« depuis que… (et jusqu'à maintenant) »"
    ],
    "a": 3,
    "e": "〜て以来 = « depuis que… (et jusqu'à maintenant) »."
   },
   {
    "t": "meaning",
    "q": "「5年前に手紙を書いたら返事が来た。それ以来、文通が続いている。」— que signifie 〜て以来 ?",
    "o": [
     "« non seulement… (mais aussi) », « sans se limiter à »",
     "« depuis que… (et jusqu'à maintenant) »",
     "Ajoute か à une phrase pour adoucir, exprimer une incertitude",
     "« autant que », « tant que »"
    ],
    "a": 1,
    "e": "〜て以来 = « depuis que… (et jusqu'à maintenant) »."
   },
   {
    "t": "usage",
    "q": "« « depuis que… (et jusqu'à maintenant) » » se dit en japonais :",
    "o": [
     "に限る",
     "て以来",
     "ことだ",
     "てしかたがない"
    ],
    "a": 1,
    "e": "→ 〜て以来."
   },
   {
    "t": "nuance",
    "q": "Quel est le sens correct de 〜て以来 ?",
    "o": [
     "« depuis que… (et jusqu'à maintenant) »",
     "« en même temps que », « dès que », « à la fois »",
     "« toutefois », « à condition que », « sauf que »",
     "« même pour X », « même si c'est X »"
    ],
    "a": 0,
    "e": "L'état décrit se prolonge jusqu'au moment présent (continuité)."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« depuis que… (et jusqu'à maintenant) ») ? [7]",
    "o": [
     "て以来",
     "せいか",
     "にしては",
     "きれない"
    ],
    "a": 0,
    "e": "→ 〜て以来."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« depuis que… (et jusqu'à maintenant) ») ? [8]",
    "o": [
     "やらやら",
     "て以来",
     "とは",
     "そこで"
    ],
    "a": 1,
    "e": "→ 〜て以来."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« depuis que… (et jusqu'à maintenant) ») ? [9]",
    "o": [
     "て以来",
     "すなわち",
     "において",
     "あまりに"
    ],
    "a": 0,
    "e": "→ 〜て以来."
   }
  ]
 },
 {
  "id": "c015",
  "g": "～において ／ ～における ＋ 【名詞】",
  "m": "« dans », « au sein de », « en matière de ». Indique de façon formelle le lieu, le domaine ou la situation où se passe quelque chose.",
  "f": "【名詞】＋ において（＋ 動詞）　／　【名詞】＋ における ＋ 【名詞】",
  "c": "particle",
  "lv": 1,
  "rel": [],
  "note": "Version écrite/formelle de で (lieu) ou de で／に (domaine).  において modifie un verbe ; における modifie un nom.  Fréquent dans les écrits administratifs, académiques, les annonces officielles.",
  "ex": [
   {
    "jp": "9月1日に市民文化センターにおいて、第1回ふるさとフェスティバルが行われる。",
    "fr": "Le 1er septembre se tiendra au centre culturel municipal le 1er Festival du pays natal."
   },
   {
    "jp": "この作品は国内では高く評価されているが、国外においてはいまひとつだ。",
    "fr": "Cette œuvre est très appréciée au pays, mais à l'étranger elle convainc moins."
   },
   {
    "jp": "学校だけでなく、家庭における教育も見直す必要がある。",
    "fr": "Il faut revoir non seulement l'éducation à l'école, mais aussi celle au sein du foyer."
   }
  ],
  "qs": [
   {
    "t": "fill",
    "q": "9月1日に市民文化センター＿＿＿、第1回ふるさとフェスティバルが行われる。",
    "fr": "Le 1er septembre se tiendra au centre culturel municipal le 1er Festival du pays natal.",
    "o": [
     "べきだ",
     "に限る",
     "要するに",
     "において"
    ],
    "a": 3,
    "e": "〜において : « dans », « au sein de », « en matière de »."
   },
   {
    "t": "fill",
    "q": "この作品は国内では高く評価されているが、国外＿＿＿はいまひとつだ。",
    "fr": "Cette œuvre est très appréciée au pays, mais à l'étranger elle convainc moins.",
    "o": [
     "でのみ",
     "要するに",
     "において",
     "のか"
    ],
    "a": 2,
    "e": "〜において : « dans », « au sein de », « en matière de »."
   },
   {
    "t": "meaning",
    "q": "「9月1日に市民文化センターにおいて、第1回ふるさとフェスティバルが行われる。」— que signifie 〜において ?",
    "o": [
     "« en somme », « bref », « pour résumer »",
     "ことだ = « il faut (conseil) » ou exclamation",
     "« il paraît que », « on dit que… (et donc) »",
     "« dans », « au sein de », « en matière de »"
    ],
    "a": 3,
    "e": "〜において = « dans », « au sein de », « en matière de »."
   },
   {
    "t": "meaning",
    "q": "「この作品は国内では高く評価されているが、国外においてはいまひとつだ。」— que signifie 〜において ?",
    "o": [
     "« à commencer par », « notamment »",
     "« au sujet de », « autour de »",
     "« dans », « au sein de », « en matière de »",
     "« à mesure que », « accompagné de », « du fait de »"
    ],
    "a": 2,
    "e": "〜において = « dans », « au sein de », « en matière de »."
   },
   {
    "t": "meaning",
    "q": "「学校だけでなく、家庭における教育も見直す必要がある。」— que signifie 〜において ?",
    "o": [
     "« par (unité) », « pour chaque »",
     "« dans », « au sein de », « en matière de »",
     "« c'est-à-dire », « à savoir », « autrement dit »",
     "« tels que », « comme par exemple »"
    ],
    "a": 1,
    "e": "〜において = « dans », « au sein de », « en matière de »."
   },
   {
    "t": "usage",
    "q": "« « dans », « au sein de », « en matière de » » se dit en japonais :",
    "o": [
     "やらやら",
     "において",
     "結局",
     "を問わず"
    ],
    "a": 1,
    "e": "→ 〜において."
   },
   {
    "t": "nuance",
    "q": "Quel est le sens correct de 〜において ?",
    "o": [
     "« il n'y a pas besoin de », « ce n'est pas la peine de »",
     "« ce qu'on appelle… (c'est) », « X, c'est… »",
     "ことだ = « il faut (conseil) » ou exclamation",
     "« dans », « au sein de », « en matière de »"
    ],
    "a": 3,
    "e": "Version écrite/formelle de で (lieu) ou de で／に (domaine)."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« dans », « au sein de », « en matière de ») ? [7]",
    "o": [
     "でのみ",
     "において",
     "とは",
     "なんてんだろう"
    ],
    "a": 1,
    "e": "→ 〜において."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« dans », « au sein de », « en matière de ») ? [8]",
    "o": [
     "において",
     "だらけ",
     "上で",
     "をめぐって"
    ],
    "a": 0,
    "e": "→ 〜において."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« dans », « au sein de », « en matière de ») ? [9]",
    "o": [
     "とか",
     "のかと思った",
     "において",
     "きり"
    ],
    "a": 2,
    "e": "→ 〜において."
   }
  ]
 },
 {
  "id": "c016",
  "g": "そこで",
  "m": "« c'est pourquoi », « alors (j'ai décidé de) ». Connecteur : face à une situation, on prend une mesure, une action en conséquence.",
  "f": "〔文〕。＋ そこで、〔とった行動〕。",
  "c": "condition",
  "lv": 2,
  "rel": [],
  "note": "Relie une situation/problème à l'action décidée pour y répondre. La 2e partie est une action volontaire.  ≠ それで (conséquence/résultat naturel) : そこで introduit une décision active prise par le locuteur.  Ne convient pas si la 2e partie est un simple résultat involontaire.",
  "ex": [
   {
    "jp": "最近、太ってきた。そこで、毎朝5キロほどジョギングすることにした。",
    "fr": "J'ai grossi ces derniers temps. Alors, j'ai décidé de courir 5 km chaque matin."
   },
   {
    "jp": "初めの方法ではうまくいかなかった。そこで、もっといい方法がないか話し合った。",
    "fr": "La première méthode n'a pas marché. Alors nous avons discuté d'une meilleure solution."
   },
   {
    "jp": "道に迷ってしまった。そこで、駅員に道を尋ねた。",
    "fr": "Je me suis perdu. Alors, j'ai demandé mon chemin à un employé de la gare."
   }
  ],
  "qs": [
   {
    "t": "fill",
    "q": "最近、太ってきた。＿＿＿、毎朝5キロほどジョギングすることにした。",
    "fr": "J'ai grossi ces derniers temps. Alors, j'ai décidé de courir 5 km chaque matin.",
    "o": [
     "ではないか",
     "にともなって",
     "にしても",
     "そこで"
    ],
    "a": 3,
    "e": "〜そこで : « c'est pourquoi », « alors (j'ai décidé de) »."
   },
   {
    "t": "fill",
    "q": "初めの方法ではうまくいかなかった。＿＿＿、もっといい方法がないか話し合った。",
    "fr": "La première méthode n'a pas marché. Alors nous avons discuté d'une meilleure solution.",
    "o": [
     "そこで",
     "に際して",
     "と同時に",
     "当たり"
    ],
    "a": 0,
    "e": "〜そこで : « c'est pourquoi », « alors (j'ai décidé de) »."
   },
   {
    "t": "fill",
    "q": "道に迷ってしまった。＿＿＿、駅員に道を尋ねた。",
    "fr": "Je me suis perdu. Alors, j'ai demandé mon chemin à un employé de la gare.",
    "o": [
     "せいか",
     "にすれば",
     "そこで",
     "ないではいられない"
    ],
    "a": 2,
    "e": "〜そこで : « c'est pourquoi », « alors (j'ai décidé de) »."
   },
   {
    "t": "meaning",
    "q": "「最近、太ってきた。そこで、毎朝5キロほどジョギングすることにした。」— que signifie 〜そこで ?",
    "o": [
     "« couvert de », « plein de » (souvent quelque chose de négat",
     "« du point de vue de », « pour X (si l'on se met à sa place)",
     "« tellement… que », « à cause de l'excès de… »",
     "« c'est pourquoi », « alors (j'ai décidé de) »"
    ],
    "a": 3,
    "e": "〜そこで = « c'est pourquoi », « alors (j'ai décidé de) »."
   },
   {
    "t": "meaning",
    "q": "「初めの方法ではうまくいかなかった。そこで、もっといい方法がないか話し合った。」— que signifie 〜そこで ?",
    "o": [
     "« toutefois », « à condition que », « sauf que »",
     "« ne faire qu'augmenter/diminuer », « aller toujours plus da",
     "« du point de vue de », « pour X (si l'on se met à sa place)",
     "« c'est pourquoi », « alors (j'ai décidé de) »"
    ],
    "a": 3,
    "e": "〜そこで = « c'est pourquoi », « alors (j'ai décidé de) »."
   },
   {
    "t": "meaning",
    "q": "「道に迷ってしまった。そこで、駅員に道を尋ねた。」— que signifie 〜そこで ?",
    "o": [
     "« ne faire qu'augmenter/diminuer », « aller toujours plus da",
     "« c'est pourquoi », « alors (j'ai décidé de) »",
     "« uniquement (dans le cas de) », « exclusivement pour »",
     "« en même temps que », « avec », « à mesure que »"
    ],
    "a": 1,
    "e": "〜そこで = « c'est pourquoi », « alors (j'ai décidé de) »."
   },
   {
    "t": "usage",
    "q": "« « c'est pourquoi », « alors (j'ai décidé de) » » se dit en japonais :",
    "o": [
     "一方で",
     "きる",
     "そこで",
     "上で"
    ],
    "a": 2,
    "e": "→ 〜そこで."
   },
   {
    "t": "nuance",
    "q": "Quel est le sens correct de 〜そこで ?",
    "o": [
     "« d'un côté… de l'autre », « tandis que »",
     "« couvert de », « plein de » (souvent quelque chose de négat",
     "ことだ = « il faut (conseil) » ou exclamation",
     "« c'est pourquoi », « alors (j'ai décidé de) »"
    ],
    "a": 3,
    "e": "Relie une situation/problème à l'action décidée pour y répondre. La 2e partie est une action volontaire."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« c'est pourquoi », « alors (j'ai décidé de) ») ? [8]",
    "o": [
     "べきだ",
     "そこで",
     "ただし",
     "なりに"
    ],
    "a": 1,
    "e": "→ 〜そこで."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« c'est pourquoi », « alors (j'ai décidé de) ») ? [9]",
    "o": [
     "結局",
     "そこで",
     "はもちろん",
     "わけがない"
    ],
    "a": 1,
    "e": "→ 〜そこで."
   }
  ]
 },
 {
  "id": "c017",
  "g": "～かける ／ ～かけの ＋ 【名詞】",
  "m": "« commencer à (sans finir) », « être à moitié… ». Une action est entamée mais interrompue ou inachevée.",
  "f": "【動詞ます形】＋ かける ／ かけの ＋ 【名詞】",
  "c": "time",
  "lv": 2,
  "rel": [],
  "note": "Décrit une action commencée puis interrompue : 食べかけ（à moitié mangé）、読みかけ（en cours de lecture）.  〜かけた時 = « juste au moment où je commençais à… ».  かけの + nom : 「飲みかけのコーヒー」（un café entamé）.",
  "ex": [
   {
    "jp": "夕飯を食べかけた時、だれかがドアをノックした。",
    "fr": "Juste au moment où je commençais à dîner, quelqu'un a frappé à la porte."
   },
   {
    "jp": "彼女は何か言いかけたが、すぐに黙ってしまった。",
    "fr": "Elle a commencé à dire quelque chose, puis s'est tue aussitôt."
   },
   {
    "jp": "机の上に読みかけの本が置いてある。",
    "fr": "Sur le bureau se trouve un livre commencé (à moitié lu)."
   }
  ],
  "qs": [
   {
    "t": "meaning",
    "q": "「夕飯を食べかけた時、だれかがドアをノックした。」— que signifie 〜かける ?",
    "o": [
     "« d'un côté… de l'autre », « tandis que »",
     "« commencer à (sans finir) », « être à moitié… »",
     "« malgré tout », « et pourtant », « même ainsi »",
     "« à mesure que », « accompagné de », « du fait de »"
    ],
    "a": 1,
    "e": "〜かける = « commencer à (sans finir) », « être à moitié… »."
   },
   {
    "t": "meaning",
    "q": "「彼女は何か言いかけたが、すぐに黙ってしまった。」— que signifie 〜かける ?",
    "o": [
     "« en somme », « bref », « pour résumer »",
     "« sans distinction de », « indépendamment de »",
     "« insupportablement », « tellement… que je n'en peux plus »",
     "« commencer à (sans finir) », « être à moitié… »"
    ],
    "a": 3,
    "e": "〜かける = « commencer à (sans finir) », « être à moitié… »."
   },
   {
    "t": "meaning",
    "q": "「机の上に読みかけの本が置いてある。」— que signifie 〜かける ?",
    "o": [
     "« tellement… que », « à cause de l'excès de… »",
     "« faire complètement », « jusqu'au bout », « à fond »",
     "« commencer à (sans finir) », « être à moitié… »",
     "« j'ai cru que… (alors que ce n'était pas le cas) »"
    ],
    "a": 2,
    "e": "〜かける = « commencer à (sans finir) », « être à moitié… »."
   },
   {
    "t": "usage",
    "q": "« « commencer à (sans finir) », « être à moitié… » » se dit en japonais :",
    "o": [
     "ただし",
     "ばかりでなく",
     "ないではいられない",
     "かける"
    ],
    "a": 3,
    "e": "→ 〜かける."
   },
   {
    "t": "nuance",
    "q": "Quel est le sens correct de 〜かける ?",
    "o": [
     "« à l'occasion de », « au moment de (faire quelque chose d'i",
     "« commencer à (sans finir) », « être à moitié… »",
     "« juste parce que (si peu) », « pour si peu »",
     "« à mesure que », « accompagné de », « du fait de »"
    ],
    "a": 1,
    "e": "Décrit une action commencée puis interrompue : 食べかけ（à moitié mangé）、読みかけ（en cours de lecture）."
   },
   {
    "t": "usage",
    "q": "Complétez avec la forme correcte (sens : « commencer à (sans finir) », « être à moitié… ») :",
    "o": [
     "に限って",
     "かける",
     "というものは",
     "はもちろん"
    ],
    "a": 1,
    "e": "→ 〜かける."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« commencer à (sans finir) », « être à moitié… ») ? [6]",
    "o": [
     "だらけ",
     "に限らず",
     "ばかりでなく",
     "かける"
    ],
    "a": 3,
    "e": "→ 〜かける."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« commencer à (sans finir) », « être à moitié… ») ? [7]",
    "o": [
     "にしても",
     "すなわち",
     "きれない",
     "かける"
    ],
    "a": 3,
    "e": "→ 〜かける."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« commencer à (sans finir) », « être à moitié… ») ? [8]",
    "o": [
     "一方だ",
     "といった",
     "かける",
     "一方で"
    ],
    "a": 2,
    "e": "→ 〜かける."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« commencer à (sans finir) », « être à moitié… ») ? [9]",
    "o": [
     "かける",
     "こそ",
     "と同時に",
     "とともに"
    ],
    "a": 0,
    "e": "→ 〜かける."
   }
  ]
 },
 {
  "id": "c018",
  "g": "～べきだ ／ ～べきではない",
  "m": "« on devrait », « il faut (moralement) » / « on ne devrait pas ». Exprime un devoir, une obligation morale ou un conseil ferme.",
  "f": "【動詞辞書形】＋ べきだ ／ べきではない　（する→するべき／すべき）",
  "c": "modality",
  "lv": 1,
  "rel": [],
  "note": "Jugement moral ou conseil fort : « c'est ce qu'il convient de faire ».  する peut donner するべき ou すべき (plus écrit).  ≠ なければならない (obligation factuelle/règle) : べき est un jugement de valeur personnel.",
  "ex": [
   {
    "jp": "行きたい気持ちはわかるが、ここは我慢するべきだ。",
    "fr": "Je comprends que tu veuilles y aller, mais là, tu devrais te retenir."
   },
   {
    "jp": "友達にはお金を貸すべきではない。友情を壊すことがあるからだ。",
    "fr": "On ne devrait pas prêter d'argent à ses amis : cela peut briser l'amitié."
   },
   {
    "jp": "約束は守るべきだ。",
    "fr": "On doit tenir ses promesses."
   }
  ],
  "qs": [
   {
    "t": "fill",
    "q": "行きたい気持ちはわかるが、ここは我慢する＿＿＿。",
    "fr": "Je comprends que tu veuilles y aller, mais là, tu devrais te retenir.",
    "o": [
     "かける",
     "を問わず",
     "べきだ",
     "ものがある"
    ],
    "a": 2,
    "e": "〜べきだ : « on devrait », « il faut (moralement) » / « on ne devrait p."
   },
   {
    "t": "fill",
    "q": "約束は守る＿＿＿。",
    "fr": "On doit tenir ses promesses.",
    "o": [
     "一方で",
     "こそ",
     "に限る",
     "べきだ"
    ],
    "a": 3,
    "e": "〜べきだ : « on devrait », « il faut (moralement) » / « on ne devrait p."
   },
   {
    "t": "meaning",
    "q": "「行きたい気持ちはわかるが、ここは我慢するべきだ。」— que signifie 〜べきだ ?",
    "o": [
     "« à mesure que », « accompagné de », « du fait de »",
     "« on devrait », « il faut (moralement) » / « on ne devrait p",
     "« en parlant de », « à propos de », « quand on évoque X (ce ",
     "« c'est pourquoi », « alors (j'ai décidé de) »"
    ],
    "a": 1,
    "e": "〜べきだ = « on devrait », « il faut (moralement) » / « on ne devrait p."
   },
   {
    "t": "meaning",
    "q": "「友達にはお金を貸すべきではない。友情を壊すことがあるからだ。」— que signifie 〜べきだ ?",
    "o": [
     "« en même temps que », « dès que », « à la fois »",
     "« lorsqu'on fait X », « dans le cadre / pour les besoins de ",
     "« à travers », « par l'intermédiaire de », « tout au long de",
     "« on devrait », « il faut (moralement) » / « on ne devrait p"
    ],
    "a": 3,
    "e": "〜べきだ = « on devrait », « il faut (moralement) » / « on ne devrait p."
   },
   {
    "t": "meaning",
    "q": "「約束は守るべきだ。」— que signifie 〜べきだ ?",
    "o": [
     "« toutefois », « à condition que », « sauf que »",
     "« il est impossible que », « il n'y a aucune chance que »",
     "« on devrait », « il faut (moralement) » / « on ne devrait p",
     "« ne pas pouvoir finir/faire complètement », « trop… pour »"
    ],
    "a": 2,
    "e": "〜べきだ = « on devrait », « il faut (moralement) » / « on ne devrait p."
   },
   {
    "t": "usage",
    "q": "« « on devrait », « il faut (moralement) » / « on ne devrait p » se dit en japonais :",
    "o": [
     "を通して",
     "べきだ",
     "を皮切りに",
     "によって"
    ],
    "a": 1,
    "e": "→ 〜べきだ."
   },
   {
    "t": "nuance",
    "q": "Quel est le sens correct de 〜べきだ ?",
    "o": [
     "« finalement », « en fin de compte », « au bout du compte »",
     "« on devrait », « il faut (moralement) » / « on ne devrait p",
     "« à la suite de », « l'occasion qui a déclenché… »",
     "« et si nous…? », « faisons… ! »"
    ],
    "a": 1,
    "e": "Jugement moral ou conseil fort : « c'est ce qu'il convient de faire »."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« on devrait », « il faut (moralement) » / « on ne devrait p) ? [7]",
    "o": [
     "べきだ",
     "というものは",
     "やらやら",
     "に際して"
    ],
    "a": 0,
    "e": "→ 〜べきだ."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« on devrait », « il faut (moralement) » / « on ne devrait p) ? [8]",
    "o": [
     "せいか",
     "に限らず",
     "べきだ",
     "なりに"
    ],
    "a": 2,
    "e": "→ 〜べきだ."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« on devrait », « il faut (moralement) » / « on ne devrait p) ? [9]",
    "o": [
     "やらやら",
     "べきだ",
     "をめぐって",
     "に限る"
    ],
    "a": 1,
    "e": "→ 〜べきだ."
   }
  ]
 },
 {
  "id": "c019",
  "g": "～せいか",
  "m": "« peut-être à cause de », « sans doute parce que ». Suppose une cause (souvent négative ou neutre) sans certitude.",
  "f": "【普通形】（な形容詞な／名詞の）＋ せいか",
  "c": "condition",
  "lv": 2,
  "rel": [],
  "note": "Exprime une cause probable mais incertaine ; souvent un effet ressenti (体がだるい、客が少ない…).  せい seul = cause négative dont on rejette la faute ; せいか ajoute « peut-être » (incertitude).  Proche de からか mais せいか est plus naturel pour attribuer un effet à une cause supposée.",
  "ex": [
   {
    "jp": "風邪をひいたせいか、なんとなく体がだるい。",
    "fr": "Peut-être parce que j'ai attrapé froid, je me sens vaguement las."
   },
   {
    "jp": "雨が降っているせいか、日曜日なのに客が少ない。",
    "fr": "Sans doute à cause de la pluie, il y a peu de clients bien que ce soit dimanche."
   },
   {
    "jp": "年のせいか、最近疲れやすい。",
    "fr": "Peut-être à cause de l'âge, je me fatigue vite ces temps-ci."
   }
  ],
  "qs": [
   {
    "t": "fill",
    "q": "風邪をひいた＿＿＿、なんとなく体がだるい。",
    "fr": "Peut-être parce que j'ai attrapé froid, je me sens vaguement las.",
    "o": [
     "だけ",
     "せいか",
     "だらけ",
     "のか"
    ],
    "a": 1,
    "e": "〜せいか : « peut-être à cause de », « sans doute parce que »."
   },
   {
    "t": "fill",
    "q": "雨が降っている＿＿＿、日曜日なのに客が少ない。",
    "fr": "Sans doute à cause de la pluie, il y a peu de clients bien que ce soit dimanche.",
    "o": [
     "やらやら",
     "というものは",
     "および",
     "せいか"
    ],
    "a": 3,
    "e": "〜せいか : « peut-être à cause de », « sans doute parce que »."
   },
   {
    "t": "fill",
    "q": "年の＿＿＿、最近疲れやすい。",
    "fr": "Peut-être à cause de l'âge, je me fatigue vite ces temps-ci.",
    "o": [
     "せいか",
     "つつある",
     "ことはが",
     "それでも"
    ],
    "a": 0,
    "e": "〜せいか : « peut-être à cause de », « sans doute parce que »."
   },
   {
    "t": "meaning",
    "q": "「風邪をひいたせいか、なんとなく体がだるい。」— que signifie 〜せいか ?",
    "o": [
     "« tant bien que mal », « d'une manière ou d'une autre », « r",
     "« en même temps que », « avec », « à mesure que »",
     "« commencer à (sans finir) », « être à moitié… »",
     "« peut-être à cause de », « sans doute parce que »"
    ],
    "a": 3,
    "e": "〜せいか = « peut-être à cause de », « sans doute parce que »."
   },
   {
    "t": "meaning",
    "q": "「雨が降っているせいか、日曜日なのに客が少ない。」— que signifie 〜せいか ?",
    "o": [
     "« certes… mais », « c'est vrai que X, seulement… »",
     "« peut-être à cause de », « sans doute parce que »",
     "« et si nous…? », « faisons… ! »",
     "ことだ = « il faut (conseil) » ou exclamation"
    ],
    "a": 1,
    "e": "〜せいか = « peut-être à cause de », « sans doute parce que »."
   },
   {
    "t": "meaning",
    "q": "「年のせいか、最近疲れやすい。」— que signifie 〜せいか ?",
    "o": [
     "« on devrait », « il faut (moralement) » / « on ne devrait p",
     "« peut-être à cause de », « sans doute parce que »",
     "« dans », « au sein de », « en matière de »",
     "« ce qu'on appelle X (par nature)… »"
    ],
    "a": 1,
    "e": "〜せいか = « peut-être à cause de », « sans doute parce que »."
   },
   {
    "t": "usage",
    "q": "« « peut-être à cause de », « sans doute parce que » » se dit en japonais :",
    "o": [
     "せいか",
     "に限って",
     "は問わない",
     "なりに"
    ],
    "a": 0,
    "e": "→ 〜せいか."
   },
   {
    "t": "nuance",
    "q": "Quel est le sens correct de 〜せいか ?",
    "o": [
     "« est-ce parce que…? », « sans doute parce que… »",
     "« tels que », « comme par exemple »",
     "« peut-être à cause de », « sans doute parce que »",
     "« en même temps que », « avec », « à mesure que »"
    ],
    "a": 2,
    "e": "Exprime une cause probable mais incertaine ; souvent un effet ressenti (体がだるい、客が少ない…)."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« peut-être à cause de », « sans doute parce que ») ? [8]",
    "o": [
     "および",
     "とともに",
     "せいか",
     "ばかりでなく"
    ],
    "a": 2,
    "e": "→ 〜せいか."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« peut-être à cause de », « sans doute parce que ») ? [9]",
    "o": [
     "要するに",
     "せいか",
     "てしかたがない",
     "上で"
    ],
    "a": 1,
    "e": "→ 〜せいか."
   }
  ]
 },
 {
  "id": "c020",
  "g": "～のか（理由・推測）",
  "m": "« est-ce parce que…? », « sans doute parce que… ». On émet une hypothèse sur la cause d'un fait observé.",
  "f": "【普通形】＋ のか、〜　（な形容詞な／名詞な＋のか）",
  "c": "modality",
  "lv": 1,
  "rel": [],
  "note": "Le locuteur s'interroge sur la raison d'une situation qu'il observe.  Très proche de せいか / からか ; のか met l'accent sur le questionnement intérieur.  Souvent : 「〜のか、〜ている／〜なかった」.",
  "ex": [
   {
    "jp": "私の話が難しすぎるのか、彼はさっきからつまらなさそうにしている。",
    "fr": "Est-ce parce que mon histoire est trop difficile ? Il a l'air de s'ennuyer."
   },
   {
    "jp": "運がよかったのか、少し勉強しただけで試験に合格した。",
    "fr": "Était-ce de la chance ? J'ai réussi l'examen en n'étudiant qu'un peu."
   },
   {
    "jp": "疲れているのか、彼は元気がない。",
    "fr": "Est-ce la fatigue ? Il n'a pas l'air en forme."
   }
  ],
  "qs": [
   {
    "t": "fill",
    "q": "私の話が難しすぎる＿＿＿、彼はさっきからつまらなさそうにしている。",
    "fr": "Est-ce parce que mon histoire est trop difficile ? Il a l'air de s'ennuyer.",
    "o": [
     "ただ",
     "そこで",
     "て以来",
     "のか"
    ],
    "a": 3,
    "e": "〜のか : « est-ce parce que…? », « sans doute parce que… »."
   },
   {
    "t": "fill",
    "q": "運がよかった＿＿＿、少し勉強しただけで試験に合格した。",
    "fr": "Était-ce de la chance ? J'ai réussi l'examen en n'étudiant qu'un peu.",
    "o": [
     "のか",
     "といった",
     "やらやら",
     "はもちろん"
    ],
    "a": 0,
    "e": "〜のか : « est-ce parce que…? », « sans doute parce que… »."
   },
   {
    "t": "fill",
    "q": "疲れている＿＿＿、彼は元気がない。",
    "fr": "Est-ce la fatigue ? Il n'a pas l'air en forme.",
    "o": [
     "きり",
     "ものがある",
     "をきっかけに",
     "のか"
    ],
    "a": 3,
    "e": "〜のか : « est-ce parce que…? », « sans doute parce que… »."
   },
   {
    "t": "meaning",
    "q": "「私の話が難しすぎるのか、彼はさっきからつまらなさそうにしている。」— que signifie 〜のか ?",
    "o": [
     "« bien sûr… mais aussi », « non seulement… (cela va de soi) ",
     "« par (unité) », « pour chaque »",
     "« est-ce parce que…? », « sans doute parce que… »",
     "« on devrait », « il faut (moralement) » / « on ne devrait p"
    ],
    "a": 2,
    "e": "〜のか = « est-ce parce que…? », « sans doute parce que… »."
   },
   {
    "t": "meaning",
    "q": "「運がよかったのか、少し勉強しただけで試験に合格した。」— que signifie 〜のか ?",
    "o": [
     "« juste parce que (si peu) », « pour si peu »",
     "« est-ce parce que…? », « sans doute parce que… »",
     "« tant bien que mal », « d'une manière ou d'une autre », « r",
     "« couvert de », « plein de » (souvent quelque chose de négat"
    ],
    "a": 1,
    "e": "〜のか = « est-ce parce que…? », « sans doute parce que… »."
   },
   {
    "t": "meaning",
    "q": "「疲れているのか、彼は元気がない。」— que signifie 〜のか ?",
    "o": [
     "« comme si », « comme s'il s'agissait de »",
     "« commencer à (sans finir) », « être à moitié… »",
     "« non seulement… mais aussi (en plus) »",
     "« est-ce parce que…? », « sans doute parce que… »"
    ],
    "a": 3,
    "e": "〜のか = « est-ce parce que…? », « sans doute parce que… »."
   },
   {
    "t": "usage",
    "q": "« « est-ce parce que…? », « sans doute parce que… » » se dit en japonais :",
    "o": [
     "つつある",
     "のか",
     "くらい",
     "と同時に"
    ],
    "a": 1,
    "e": "→ 〜のか."
   },
   {
    "t": "nuance",
    "q": "Quel est le sens correct de 〜のか ?",
    "o": [
     "« à commencer par », « notamment »",
     "« est-ce parce que…? », « sans doute parce que… »",
     "« sans distinction de », « indépendamment de »",
     "« comme si », « comme s'il s'agissait de »"
    ],
    "a": 1,
    "e": "Le locuteur s'interroge sur la raison d'une situation qu'il observe."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« est-ce parce que…? », « sans doute parce que… ») ? [8]",
    "o": [
     "のか",
     "ことはない",
     "だらけ",
     "かける"
    ],
    "a": 0,
    "e": "→ 〜のか."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« est-ce parce que…? », « sans doute parce que… ») ? [9]",
    "o": [
     "というものは",
     "のか",
     "かのように",
     "なりに"
    ],
    "a": 1,
    "e": "→ 〜のか."
   }
  ]
 },
 {
  "id": "c021",
  "g": "～とか ／ ～とかで",
  "m": "« il paraît que », « on dit que… (et donc) ». Rapporte une information entendue, dont on n'est pas tout à fait sûr.",
  "f": "【普通形】＋ とか ／ とかで",
  "c": "modality",
  "lv": 1,
  "rel": [],
  "note": "とか = information de seconde main, incertaine (≈ そうだ mais plus vague).  とかで = « et c'est pour ça que… » : la raison rapportée explique une conséquence.  Registre courant, oral. Atténue la responsabilité de ce qu'on rapporte.",
  "ex": [
   {
    "jp": "明日、鉄道のストライキがあるとか、ほんと？",
    "fr": "Il paraît qu'il y a une grève des trains demain, c'est vrai ?"
   },
   {
    "jp": "係の者が不在とかで、詳しいことは分からなかった。",
    "fr": "La personne responsable était paraît-il absente, je n'ai donc pas pu avoir les détails."
   },
   {
    "jp": "彼は急に用事ができたとかで、来られないそうだ。",
    "fr": "Il aurait eu un imprévu, paraît-il, et ne pourrait pas venir."
   }
  ],
  "qs": [
   {
    "t": "fill",
    "q": "明日、鉄道のストライキがある＿＿＿、ほんと？",
    "fr": "Il paraît qu'il y a une grève des trains demain, c'est vrai ?",
    "o": [
     "せいか",
     "上で",
     "一方で",
     "とか"
    ],
    "a": 3,
    "e": "〜とか : « il paraît que », « on dit que… (et donc) »."
   },
   {
    "t": "fill",
    "q": "係の者が不在＿＿＿で、詳しいことは分からなかった。",
    "fr": "La personne responsable était paraît-il absente, je n'ai donc pas pu avoir les détails.",
    "o": [
     "とか",
     "ことだ",
     "だらけ",
     "結局"
    ],
    "a": 0,
    "e": "〜とか : « il paraît que », « on dit que… (et donc) »."
   },
   {
    "t": "fill",
    "q": "彼は急に用事ができた＿＿＿で、来られないそうだ。",
    "fr": "Il aurait eu un imprévu, paraît-il, et ne pourrait pas venir.",
    "o": [
     "とともに",
     "において",
     "くらい",
     "とか"
    ],
    "a": 3,
    "e": "〜とか : « il paraît que », « on dit que… (et donc) »."
   },
   {
    "t": "meaning",
    "q": "「明日、鉄道のストライキがあるとか、ほんと？」— que signifie 〜とか ?",
    "o": [
     "« il paraît que », « on dit que… (et donc) »",
     "« bien sûr… mais aussi », « non seulement… (cela va de soi) ",
     "« non seulement… (mais aussi) », « sans se limiter à »",
     "« et si nous…? », « faisons… ! »"
    ],
    "a": 0,
    "e": "〜とか = « il paraît que », « on dit que… (et donc) »."
   },
   {
    "t": "meaning",
    "q": "「係の者が不在とかで、詳しいことは分からなかった。」— que signifie 〜とか ?",
    "o": [
     "« pour un… (étonnamment) », « compte tenu de »",
     "« il paraît que », « on dit que… (et donc) »",
     "« faire complètement », « jusqu'au bout », « à fond »",
     "« s'en tirer avec », « ça suffit / on n'a pas besoin de »"
    ],
    "a": 1,
    "e": "〜とか = « il paraît que », « on dit que… (et donc) »."
   },
   {
    "t": "meaning",
    "q": "「彼は急に用事ができたとかで、来られないそうだ。」— que signifie 〜とか ?",
    "o": [
     "« il paraît que », « on dit que… (et donc) »",
     "« à l'occasion de », « au moment de (faire quelque chose d'i",
     "« s'en tirer avec », « ça suffit / on n'a pas besoin de »",
     "« juste parce que (si peu) », « pour si peu »"
    ],
    "a": 0,
    "e": "〜とか = « il paraît que », « on dit que… (et donc) »."
   },
   {
    "t": "usage",
    "q": "« « il paraît que », « on dit que… (et donc) » » se dit en japonais :",
    "o": [
     "と言えば",
     "やらやら",
     "とか",
     "せいか"
    ],
    "a": 2,
    "e": "→ 〜とか."
   },
   {
    "t": "nuance",
    "q": "Quel est le sens correct de 〜とか ?",
    "o": [
     "« seulement », « uniquement » (équivalent formel de だけ)",
     "« il paraît que », « on dit que… (et donc) »",
     "« lorsqu'on fait X », « dans le cadre / pour les besoins de ",
     "« comme c'est… ! », « quel(le)… ! »"
    ],
    "a": 1,
    "e": "とか = information de seconde main, incertaine (≈ そうだ mais plus vague)."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« il paraît que », « on dit que… (et donc) ») ? [8]",
    "o": [
     "とか",
     "つつある",
     "はもちろん",
     "上で"
    ],
    "a": 0,
    "e": "→ 〜とか."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« il paraît que », « on dit que… (et donc) ») ? [9]",
    "o": [
     "および",
     "とか",
     "つつある",
     "ではないか"
    ],
    "a": 1,
    "e": "→ 〜とか."
   }
  ]
 },
 {
  "id": "c022",
  "g": "～かと思う ／ ～かと思うけど（婉曲）",
  "m": "Ajoute か à une phrase pour adoucir, exprimer une incertitude ou une suggestion polie : « je me disais que peut-être… ».",
  "f": "【普通形】＋ か（と思う／と思うけど）",
  "c": "modality",
  "lv": 1,
  "rel": [],
  "note": "On ajoute か à la structure de base pour atténuer une affirmation et rester poli/prudent.  Sert à introduire une remarque délicate, un rappel, une suggestion.  Souvent : 「前に言ったかと思うけど…」「〜じゃないかと思う」.",
  "ex": [
   {
    "jp": "前に一度言ったかと思うけど、ここにはゴミを捨てないでくださいね。",
    "fr": "Je crois l'avoir déjà dit, mais ne jetez pas vos déchets ici, s'il vous plaît."
   },
   {
    "jp": "山田さんから聞いたかと思うけど、今回は手伝ってあげられないんです。",
    "fr": "Vous l'avez peut-être appris par M. Yamada, mais cette fois je ne peux pas vous aider."
   },
   {
    "jp": "それは少し違うのではないかと思います。",
    "fr": "Je me dis que c'est peut-être un peu différent."
   }
  ],
  "qs": [
   {
    "t": "fill",
    "q": "前に一度言った＿＿＿けど、ここにはゴミを捨てないでくださいね。",
    "fr": "Je crois l'avoir déjà dit, mais ne jetez pas vos déchets ici, s'il vous plaît.",
    "o": [
     "とか",
     "かと思う",
     "をめぐって",
     "だけ"
    ],
    "a": 1,
    "e": "〜かと思う : Ajoute か à une phrase pour adoucir, exprimer une incertitude."
   },
   {
    "t": "fill",
    "q": "山田さんから聞いた＿＿＿けど、今回は手伝ってあげられないんです。",
    "fr": "Vous l'avez peut-être appris par M. Yamada, mais cette fois je ne peux pas vous aider.",
    "o": [
     "によって",
     "一方だ",
     "にともなって",
     "かと思う"
    ],
    "a": 3,
    "e": "〜かと思う : Ajoute か à une phrase pour adoucir, exprimer une incertitude."
   },
   {
    "t": "meaning",
    "q": "「前に一度言ったかと思うけど、ここにはゴミを捨てないでくださいね。」— que signifie 〜かと思う ?",
    "o": [
     "Ajoute か à une phrase pour adoucir, exprimer une incertitude",
     "« ne faire qu'augmenter/diminuer », « aller toujours plus da",
     "« en somme », « bref », « pour résumer »",
     "« par (unité) », « pour chaque »"
    ],
    "a": 0,
    "e": "〜かと思う = Ajoute か à une phrase pour adoucir, exprimer une incertitude."
   },
   {
    "t": "meaning",
    "q": "「山田さんから聞いたかと思うけど、今回は手伝ってあげられないんです。」— que signifie 〜かと思う ?",
    "o": [
     "« c'est-à-dire », « à savoir », « autrement dit »",
     "« des choses comme… et… (et tout ça) »",
     "« certes… mais », « c'est vrai que X, seulement… »",
     "Ajoute か à une phrase pour adoucir, exprimer une incertitude"
    ],
    "a": 3,
    "e": "〜かと思う = Ajoute か à une phrase pour adoucir, exprimer une incertitude."
   },
   {
    "t": "meaning",
    "q": "「それは少し違うのではないかと思います。」— que signifie 〜かと思う ?",
    "o": [
     "« par », « selon », « à cause de », « grâce à »",
     "Ajoute か à une phrase pour adoucir, exprimer une incertitude",
     "« comme si », « comme s'il s'agissait de »",
     "« en somme », « bref », « pour résumer »"
    ],
    "a": 1,
    "e": "〜かと思う = Ajoute か à une phrase pour adoucir, exprimer une incertitude."
   },
   {
    "t": "usage",
    "q": "« Ajoute か à une phrase pour adoucir, exprimer une incertitude » se dit en japonais :",
    "o": [
     "かと思う",
     "あまり",
     "ことだ",
     "なりに"
    ],
    "a": 0,
    "e": "→ 〜かと思う."
   },
   {
    "t": "nuance",
    "q": "Quel est le sens correct de 〜かと思う ?",
    "o": [
     "« justement », « c'est précisément… qui »",
     "« uniquement à/dans/par » (のみ combiné à une particule de lie",
     "« seulement », « uniquement » (équivalent formel de だけ)",
     "Ajoute か à une phrase pour adoucir, exprimer une incertitude"
    ],
    "a": 3,
    "e": "On ajoute か à la structure de base pour atténuer une affirmation et rester poli/prudent."
   },
   {
    "t": "usage",
    "q": "Forme correcte (Ajoute か à une phrase pour adoucir, exprimer une incertitude) ? [7]",
    "o": [
     "に限る",
     "を皮切りに",
     "かと思う",
     "にしても"
    ],
    "a": 2,
    "e": "→ 〜かと思う."
   },
   {
    "t": "usage",
    "q": "Forme correcte (Ajoute か à une phrase pour adoucir, exprimer une incertitude) ? [8]",
    "o": [
     "あまり",
     "かと思う",
     "かのように",
     "一方で"
    ],
    "a": 1,
    "e": "→ 〜かと思う."
   },
   {
    "t": "usage",
    "q": "Forme correcte (Ajoute か à une phrase pour adoucir, exprimer une incertitude) ? [9]",
    "o": [
     "のみ",
     "をはじめ",
     "かと思う",
     "べきだ"
    ],
    "a": 2,
    "e": "→ 〜かと思う."
   }
  ]
 },
 {
  "id": "c023",
  "g": "～のかと思った",
  "m": "« j'ai cru que… (alors que ce n'était pas le cas) ». Exprime une impression erronée, une fausse interprétation sur le moment.",
  "f": "【普通形】＋ のかと思った",
  "c": "modality",
  "lv": 1,
  "rel": [],
  "note": "On a cru/eu l'impression que quelque chose était le cas, mais en réalité non.  Souvent réaction à une situation surprenante : 「遅いから、事故にあったのかと思った」.  Nuance de soulagement ou d'étonnement rétrospectif.",
  "ex": [
   {
    "jp": "遅いから、事故にあったのかと思ったよ。",
    "fr": "Tu étais tellement en retard que j'ai cru que tu avais eu un accident."
   },
   {
    "jp": "静かだったので、誰もいないのかと思った。",
    "fr": "C'était si calme que j'ai cru qu'il n'y avait personne."
   },
   {
    "jp": "彼の顔色が悪くて、病気なのかと思った。",
    "fr": "Il avait si mauvaise mine que j'ai cru qu'il était malade."
   }
  ],
  "qs": [
   {
    "t": "fill",
    "q": "遅いから、事故にあった＿＿＿よ。",
    "fr": "Tu étais tellement en retard que j'ai cru que tu avais eu un accident.",
    "o": [
     "きる",
     "のかと思った",
     "にしては",
     "だけ"
    ],
    "a": 1,
    "e": "〜のかと思った : « j'ai cru que… (alors que ce n'était pas le cas) »."
   },
   {
    "t": "fill",
    "q": "静かだったので、誰もいない＿＿＿。",
    "fr": "C'était si calme que j'ai cru qu'il n'y avait personne.",
    "o": [
     "といった",
     "を皮切りに",
     "要するに",
     "のかと思った"
    ],
    "a": 3,
    "e": "〜のかと思った : « j'ai cru que… (alors que ce n'était pas le cas) »."
   },
   {
    "t": "fill",
    "q": "彼の顔色が悪くて、病気な＿＿＿。",
    "fr": "Il avait si mauvaise mine que j'ai cru qu'il était malade.",
    "o": [
     "のかと思った",
     "ことはない",
     "きれない",
     "ではないか"
    ],
    "a": 0,
    "e": "〜のかと思った : « j'ai cru que… (alors que ce n'était pas le cas) »."
   },
   {
    "t": "meaning",
    "q": "「遅いから、事故にあったのかと思ったよ。」— que signifie 〜のかと思った ?",
    "o": [
     "« depuis que… (et jusqu'à maintenant) »",
     "« des choses comme… et… (et tout ça) »",
     "« j'ai cru que… (alors que ce n'était pas le cas) »",
     "ことだ = « il faut (conseil) » ou exclamation"
    ],
    "a": 2,
    "e": "〜のかと思った = « j'ai cru que… (alors que ce n'était pas le cas) »."
   },
   {
    "t": "meaning",
    "q": "「静かだったので、誰もいないのかと思った。」— que signifie 〜のかと思った ?",
    "o": [
     "« j'ai cru que… (alors que ce n'était pas le cas) »",
     "« en même temps que », « dès que », « à la fois »",
     "« à l'occasion de », « au moment de (faire quelque chose d'i",
     "« c'est pourquoi », « alors (j'ai décidé de) »"
    ],
    "a": 0,
    "e": "〜のかと思った = « j'ai cru que… (alors que ce n'était pas le cas) »."
   },
   {
    "t": "meaning",
    "q": "「彼の顔色が悪くて、病気なのかと思った。」— que signifie 〜のかと思った ?",
    "o": [
     "« seulement », « depuis que… (rien ensuite) », « rester à »",
     "« j'ai cru que… (alors que ce n'était pas le cas) »",
     "« des choses comme… et… (et tout ça) »",
     "« juste parce que (si peu) », « pour si peu »"
    ],
    "a": 1,
    "e": "〜のかと思った = « j'ai cru que… (alors que ce n'était pas le cas) »."
   },
   {
    "t": "usage",
    "q": "« « j'ai cru que… (alors que ce n'était pas le cas) » » se dit en japonais :",
    "o": [
     "に限らず",
     "きれない",
     "のかと思った",
     "ではないか"
    ],
    "a": 2,
    "e": "→ 〜のかと思った."
   },
   {
    "t": "nuance",
    "q": "Quel est le sens correct de 〜のかと思った ?",
    "o": [
     "« juste parce que (si peu) », « pour si peu »",
     "« j'ai cru que… (alors que ce n'était pas le cas) »",
     "« d'un côté… de l'autre », « tandis que »",
     "« en commençant par », « à partir de (qui a marqué le début "
    ],
    "a": 1,
    "e": "On a cru/eu l'impression que quelque chose était le cas, mais en réalité non."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« j'ai cru que… (alors que ce n'était pas le cas) ») ? [8]",
    "o": [
     "と同時に",
     "でのみ",
     "のかと思った",
     "て以来"
    ],
    "a": 2,
    "e": "→ 〜のかと思った."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« j'ai cru que… (alors que ce n'était pas le cas) ») ? [9]",
    "o": [
     "ことはが",
     "一方だ",
     "のか",
     "のかと思った"
    ],
    "a": 3,
    "e": "→ 〜のかと思った."
   }
  ]
 },
 {
  "id": "c024",
  "g": "～かのように ／ ～かのような",
  "m": "« comme si », « comme s'il s'agissait de ». Compare une situation à une autre qui n'est pas réelle.",
  "f": "【普通形】＋ かのように（＋動詞）／ かのような（＋名詞）",
  "c": "express",
  "lv": 2,
  "rel": [],
  "note": "Exprime une apparence trompeuse : « on dirait que… alors que ce n'est pas le cas ».  かのように modifie un verbe/adjectif ; かのような modifie un nom.  Souvent avec まるで : 「まるで〜かのように」.",
  "ex": [
   {
    "jp": "昨日はあれだけ騒いでいたのに、今日は何事もなかったかのように静かだ。",
    "fr": "Hier ils faisaient tant de bruit, et aujourd'hui c'est calme comme si rien ne s'était passé."
   },
   {
    "jp": "勝ったのに、コーチはまるで負けたかのように落ち込んでいる。",
    "fr": "Bien qu'ayant gagné, l'entraîneur est abattu comme s'il avait perdu."
   },
   {
    "jp": "彼はすべてを知っているかのような顔をしている。",
    "fr": "Il a l'air de quelqu'un qui saurait tout."
   }
  ],
  "qs": [
   {
    "t": "fill",
    "q": "昨日はあれだけ騒いでいたのに、今日は何事もなかった＿＿＿静かだ。",
    "fr": "Hier ils faisaient tant de bruit, et aujourd'hui c'est calme comme si rien ne s'était passé.",
    "o": [
     "ことはない",
     "かのように",
     "なんとか",
     "一方で"
    ],
    "a": 1,
    "e": "〜かのように : « comme si », « comme s'il s'agissait de »."
   },
   {
    "t": "fill",
    "q": "勝ったのに、コーチはまるで負けた＿＿＿落ち込んでいる。",
    "fr": "Bien qu'ayant gagné, l'entraîneur est abattu comme s'il avait perdu.",
    "o": [
     "とか",
     "かのように",
     "に限らず",
     "て以来"
    ],
    "a": 1,
    "e": "〜かのように : « comme si », « comme s'il s'agissait de »."
   },
   {
    "t": "meaning",
    "q": "「昨日はあれだけ騒いでいたのに、今日は何事もなかったかのように静かだ。」— que signifie 〜かのように ?",
    "o": [
     "« comme si », « comme s'il s'agissait de »",
     "« est-ce parce que…? », « sans doute parce que… »",
     "« ne pas pouvoir s'empêcher de »",
     "« seulement », « depuis que… (rien ensuite) », « rester à »"
    ],
    "a": 0,
    "e": "〜かのように = « comme si », « comme s'il s'agissait de »."
   },
   {
    "t": "meaning",
    "q": "「勝ったのに、コーチはまるで負けたかのように落ち込んでいる。」— que signifie 〜かのように ?",
    "o": [
     "« comme si », « comme s'il s'agissait de »",
     "« il paraît que », « on dit que… (et donc) »",
     "« toutefois », « à condition que », « sauf que »",
     "« des choses comme… et… (et tout ça) »"
    ],
    "a": 0,
    "e": "〜かのように = « comme si », « comme s'il s'agissait de »."
   },
   {
    "t": "meaning",
    "q": "「彼はすべてを知っているかのような顔をしている。」— que signifie 〜かのように ?",
    "o": [
     "« peu importe », « X n'est pas requis / ne compte pas »",
     "« insupportablement », « tellement… que je n'en peux plus »",
     "« uniquement (dans le cas de) », « exclusivement pour »",
     "« comme si », « comme s'il s'agissait de »"
    ],
    "a": 3,
    "e": "〜かのように = « comme si », « comme s'il s'agissait de »."
   },
   {
    "t": "usage",
    "q": "« « comme si », « comme s'il s'agissait de » » se dit en japonais :",
    "o": [
     "をめぐって",
     "ことだ",
     "かのように",
     "ただし"
    ],
    "a": 2,
    "e": "→ 〜かのように."
   },
   {
    "t": "nuance",
    "q": "Quel est le sens correct de 〜かのように ?",
    "o": [
     "« on devrait », « il faut (moralement) » / « on ne devrait p",
     "« à sa manière », « selon ses propres moyens »",
     "« tellement… que », « à cause de l'excès de… »",
     "« comme si », « comme s'il s'agissait de »"
    ],
    "a": 3,
    "e": "Exprime une apparence trompeuse : « on dirait que… alors que ce n'est pas le cas »."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« comme si », « comme s'il s'agissait de ») ? [7]",
    "o": [
     "に限り",
     "きる",
     "かのように",
     "当たり"
    ],
    "a": 2,
    "e": "→ 〜かのように."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« comme si », « comme s'il s'agissait de ») ? [8]",
    "o": [
     "ことはない",
     "というものは",
     "ものがある",
     "かのように"
    ],
    "a": 3,
    "e": "→ 〜かのように."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« comme si », « comme s'il s'agissait de ») ? [9]",
    "o": [
     "かのように",
     "ことだ",
     "せいか",
     "なんとか"
    ],
    "a": 0,
    "e": "→ 〜かのように."
   }
  ]
 },
 {
  "id": "c025",
  "g": "～にしては ／ ～わりに（は）",
  "m": "« pour un… (étonnamment) », « compte tenu de ». Le résultat ne correspond pas à ce qu'on attendrait du critère donné.",
  "f": "【名詞／普通形】＋ にしては　／　【名詞の／普通形】＋ わりに（は）",
  "c": "contrast",
  "lv": 2,
  "rel": [],
  "note": "Exprime un décalage entre une attente (basée sur un critère) et la réalité.  にしては demande un critère précis/chiffré (40歳にしては、初めてにしては) ; わりに accepte un critère plus vague (年齢のわりに).  × 年齢にしては（trop vague）→ ○ 年齢のわりに ／ ○ 40歳にしては.",
  "ex": [
   {
    "jp": "アマチュアにしては、なかなかの実力だ。",
    "fr": "Pour un amateur, il a un niveau plutôt remarquable."
   },
   {
    "jp": "彼女は40歳にしては若く見える。",
    "fr": "Pour une personne de 40 ans, elle paraît jeune."
   },
   {
    "jp": "このシャツは値段のわりには質がいい。",
    "fr": "Pour son prix, cette chemise est de bonne qualité."
   }
  ],
  "qs": [
   {
    "t": "fill",
    "q": "アマチュア＿＿＿、なかなかの実力だ。",
    "fr": "Pour un amateur, il a un niveau plutôt remarquable.",
    "o": [
     "と言えば",
     "ないではいられない",
     "にしては",
     "かける"
    ],
    "a": 2,
    "e": "〜にしては : « pour un… (étonnamment) », « compte tenu de »."
   },
   {
    "t": "fill",
    "q": "彼女は40歳＿＿＿若く見える。",
    "fr": "Pour une personne de 40 ans, elle paraît jeune.",
    "o": [
     "要するに",
     "だらけ",
     "にしては",
     "ことはない"
    ],
    "a": 2,
    "e": "〜にしては : « pour un… (étonnamment) », « compte tenu de »."
   },
   {
    "t": "meaning",
    "q": "「アマチュアにしては、なかなかの実力だ。」— que signifie 〜にしては ?",
    "o": [
     "« d'un côté… de l'autre », « tandis que »",
     "« non seulement… (mais aussi) », « sans se limiter à »",
     "« c'est-à-dire », « à savoir », « autrement dit »",
     "« pour un… (étonnamment) », « compte tenu de »"
    ],
    "a": 3,
    "e": "〜にしては = « pour un… (étonnamment) », « compte tenu de »."
   },
   {
    "t": "meaning",
    "q": "「彼女は40歳にしては若く見える。」— que signifie 〜にしては ?",
    "o": [
     "« pour un… (étonnamment) », « compte tenu de »",
     "« insupportablement », « tellement… que je n'en peux plus »",
     "« autant que », « tant que »",
     "« être en train de (changer progressivement) »"
    ],
    "a": 0,
    "e": "〜にしては = « pour un… (étonnamment) », « compte tenu de »."
   },
   {
    "t": "meaning",
    "q": "「このシャツは値段のわりには質がいい。」— que signifie 〜にしては ?",
    "o": [
     "« cela dit », « seulement », « toutefois »",
     "« pour un… (étonnamment) », « compte tenu de »",
     "« des choses comme… et… (et tout ça) »",
     "« couvert de », « plein de » (souvent quelque chose de négat"
    ],
    "a": 1,
    "e": "〜にしては = « pour un… (étonnamment) », « compte tenu de »."
   },
   {
    "t": "usage",
    "q": "« « pour un… (étonnamment) », « compte tenu de » » se dit en japonais :",
    "o": [
     "にしては",
     "かと思う",
     "といった",
     "と同時に"
    ],
    "a": 0,
    "e": "→ 〜にしては."
   },
   {
    "t": "nuance",
    "q": "Quel est le sens correct de 〜にしては ?",
    "o": [
     "« par », « selon », « à cause de », « grâce à »",
     "« dans », « au sein de », « en matière de »",
     "« bien sûr… mais aussi », « non seulement… (cela va de soi) ",
     "« pour un… (étonnamment) », « compte tenu de »"
    ],
    "a": 3,
    "e": "Exprime un décalage entre une attente (basée sur un critère) et la réalité."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« pour un… (étonnamment) », « compte tenu de ») ? [7]",
    "o": [
     "でのみ",
     "に限る",
     "によって",
     "にしては"
    ],
    "a": 3,
    "e": "→ 〜にしては."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« pour un… (étonnamment) », « compte tenu de ») ? [8]",
    "o": [
     "ことだ",
     "といった",
     "にしては",
     "において"
    ],
    "a": 2,
    "e": "→ 〜にしては."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« pour un… (étonnamment) », « compte tenu de ») ? [9]",
    "o": [
     "のかと思った",
     "において",
     "は問わない",
     "にしては"
    ],
    "a": 3,
    "e": "→ 〜にしては."
   }
  ]
 },
 {
  "id": "c026",
  "g": "～で済む ／ ～ないで済む ／ ～ずに済む",
  "m": "« s'en tirer avec », « ça suffit / on n'a pas besoin de ». Une situation se règle avec peu, ou on évite une chose désagréable.",
  "f": "【名詞／動詞て形】＋ 済む ／ 【動詞ない形】＋ で済む ／ 【動詞ない形(〜ず)】＋ に済む",
  "c": "express",
  "lv": 2,
  "rel": [],
  "note": "〜で済む = « s'en tirer avec / il suffit de » (2000円で済んだ).  〜ないで済む / 〜ずに済む = « éviter d'avoir à faire » (謝らないで済んだ／怒られずに済んだ). する→せずに済む.  Nuance de soulagement : on a évité le pire / dépensé moins que prévu.",
  "ex": [
   {
    "jp": "4人でけっこう飲んで食べたが、一人2000円で済んだ。",
    "fr": "Nous avons pas mal bu et mangé à quatre, mais ça nous a coûté seulement 2000 yens chacun."
   },
   {
    "jp": "彼は謝らないで済んだが、私だけ怒られた。",
    "fr": "Lui s'en est tiré sans avoir à s'excuser, mais moi seul me suis fait gronder."
   },
   {
    "jp": "もう少し早く気づいていれば、大事故にならずに済んだのに。",
    "fr": "Si je m'en étais aperçu un peu plus tôt, on aurait évité un grave accident."
   }
  ],
  "qs": [
   {
    "t": "meaning",
    "q": "「4人でけっこう飲んで食べたが、一人2000円で済んだ。」— que signifie 〜で済む ?",
    "o": [
     "« en même temps que », « avec », « à mesure que »",
     "« s'en tirer avec », « ça suffit / on n'a pas besoin de »",
     "« du point de vue de », « pour X (si l'on se met à sa place)",
     "« à travers », « par l'intermédiaire de », « tout au long de"
    ],
    "a": 1,
    "e": "〜で済む = « s'en tirer avec », « ça suffit / on n'a pas besoin de »."
   },
   {
    "t": "meaning",
    "q": "「彼は謝らないで済んだが、私だけ怒られた。」— que signifie 〜で済む ?",
    "o": [
     "« à mesure que », « accompagné de », « du fait de »",
     "« s'en tirer avec », « ça suffit / on n'a pas besoin de »",
     "« à commencer par », « notamment »",
     "« uniquement (dans le cas de) », « exclusivement pour »"
    ],
    "a": 1,
    "e": "〜で済む = « s'en tirer avec », « ça suffit / on n'a pas besoin de »."
   },
   {
    "t": "meaning",
    "q": "「もう少し早く気づいていれば、大事故にならずに済んだのに。」— que signifie 〜で済む ?",
    "o": [
     "« uniquement à/dans/par » (のみ combiné à une particule de lie",
     "« s'en tirer avec », « ça suffit / on n'a pas besoin de »",
     "« à l'occasion de », « au moment de (faire quelque chose d'i",
     "« insupportablement », « tellement… que je n'en peux plus »"
    ],
    "a": 1,
    "e": "〜で済む = « s'en tirer avec », « ça suffit / on n'a pas besoin de »."
   },
   {
    "t": "usage",
    "q": "« « s'en tirer avec », « ça suffit / on n'a pas besoin de » » se dit en japonais :",
    "o": [
     "で済む",
     "ことはない",
     "上で",
     "てしかたがない"
    ],
    "a": 0,
    "e": "→ 〜で済む."
   },
   {
    "t": "nuance",
    "q": "Quel est le sens correct de 〜で済む ?",
    "o": [
     "« s'en tirer avec », « ça suffit / on n'a pas besoin de »",
     "« couvert de », « plein de » (souvent quelque chose de négat",
     "« d'un côté… de l'autre », « tandis que »",
     "« du point de vue de », « pour X (si l'on se met à sa place)"
    ],
    "a": 0,
    "e": "〜で済む = « s'en tirer avec / il suffit de » (2000円で済んだ)."
   },
   {
    "t": "usage",
    "q": "Complétez avec la forme correcte (sens : « s'en tirer avec », « ça suffit / on n'a pas besoin de ») :",
    "o": [
     "べきだ",
     "ばかりでなく",
     "で済む",
     "あまり"
    ],
    "a": 2,
    "e": "→ 〜で済む."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« s'en tirer avec », « ça suffit / on n'a pas besoin de ») ? [6]",
    "o": [
     "なんてんだろう",
     "きる",
     "は問わない",
     "で済む"
    ],
    "a": 3,
    "e": "→ 〜で済む."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« s'en tirer avec », « ça suffit / on n'a pas besoin de ») ? [7]",
    "o": [
     "だらけ",
     "のみ",
     "に際して",
     "で済む"
    ],
    "a": 3,
    "e": "→ 〜で済む."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« s'en tirer avec », « ça suffit / on n'a pas besoin de ») ? [8]",
    "o": [
     "に限る",
     "つつある",
     "そこで",
     "で済む"
    ],
    "a": 3,
    "e": "→ 〜で済む."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« s'en tirer avec », « ça suffit / on n'a pas besoin de ») ? [9]",
    "o": [
     "で済む",
     "かのように",
     "そこで",
     "やらやら"
    ],
    "a": 0,
    "e": "→ 〜で済む."
   }
  ]
 },
 {
  "id": "c027",
  "g": "なんとか",
  "m": "« tant bien que mal », « d'une manière ou d'une autre », « réussir à (de justesse) ». Indique qu'on parvient à quelque chose avec difficulté.",
  "f": "なんとか ＋ 〔動詞〕（〜たい／〜できる／〜してほしい など）",
  "c": "express",
  "lv": 2,
  "rel": [],
  "note": "Adverbe : exprime l'effort pour arriver à un résultat malgré les difficultés.  Souvent avec une demande polie pressante : 「なんとか〜してほしい／いただけませんか」.  Aussi « se débrouiller » : 「なんとかなる」(ça va s'arranger).",
  "ex": [
   {
    "jp": "難しいとは思いますが、なんとか彼と連絡を取っていただけませんか。",
    "fr": "Je sais que c'est difficile, mais pourriez-vous d'une manière ou d'une autre le contacter ?"
   },
   {
    "jp": "月に10万円の収入があれば、なんとか生活できる。",
    "fr": "Avec un revenu de 100 000 yens par mois, on peut tant bien que mal vivre."
   },
   {
    "jp": "締め切りに、なんとか間に合った。",
    "fr": "J'ai réussi à respecter le délai de justesse."
   }
  ],
  "qs": [
   {
    "t": "fill",
    "q": "難しいとは思いますが、＿＿＿彼と連絡を取っていただけませんか。",
    "fr": "Je sais que c'est difficile, mais pourriez-vous d'une manière ou d'une autre le contacter ?",
    "o": [
     "ただ",
     "なんとか",
     "ことはない",
     "当たり"
    ],
    "a": 1,
    "e": "〜なんとか : « tant bien que mal », « d'une manière ou d'une autre », « r."
   },
   {
    "t": "fill",
    "q": "月に10万円の収入があれば、＿＿＿生活できる。",
    "fr": "Avec un revenu de 100 000 yens par mois, on peut tant bien que mal vivre.",
    "o": [
     "せいか",
     "なんとか",
     "ことだ",
     "はもちろん"
    ],
    "a": 1,
    "e": "〜なんとか : « tant bien que mal », « d'une manière ou d'une autre », « r."
   },
   {
    "t": "fill",
    "q": "締め切りに、＿＿＿間に合った。",
    "fr": "J'ai réussi à respecter le délai de justesse.",
    "o": [
     "ことはない",
     "くらい",
     "なんとか",
     "きれない"
    ],
    "a": 2,
    "e": "〜なんとか : « tant bien que mal », « d'une manière ou d'une autre », « r."
   },
   {
    "t": "meaning",
    "q": "「難しいとは思いますが、なんとか彼と連絡を取っていただけませんか。」— que signifie 〜なんとか ?",
    "o": [
     "« ce qu'on appelle X (par nature)… »",
     "« il y a quelque chose de… (qui touche) », « on ressent un c",
     "« est-ce parce que…? », « sans doute parce que… »",
     "« tant bien que mal », « d'une manière ou d'une autre », « r"
    ],
    "a": 3,
    "e": "〜なんとか = « tant bien que mal », « d'une manière ou d'une autre », « r."
   },
   {
    "t": "meaning",
    "q": "「月に10万円の収入があれば、なんとか生活できる。」— que signifie 〜なんとか ?",
    "o": [
     "« tant bien que mal », « d'une manière ou d'une autre », « r",
     "« au sujet de », « autour de »",
     "« non seulement… (mais aussi) », « sans se limiter à »",
     "« ce qu'on appelle X (par nature)… »"
    ],
    "a": 0,
    "e": "〜なんとか = « tant bien que mal », « d'une manière ou d'une autre », « r."
   },
   {
    "t": "meaning",
    "q": "「締め切りに、なんとか間に合った。」— que signifie 〜なんとか ?",
    "o": [
     "« tels que », « comme par exemple »",
     "« non seulement… mais aussi (en plus) »",
     "« seulement », « depuis que… (rien ensuite) », « rester à »",
     "« tant bien que mal », « d'une manière ou d'une autre », « r"
    ],
    "a": 3,
    "e": "〜なんとか = « tant bien que mal », « d'une manière ou d'une autre », « r."
   },
   {
    "t": "usage",
    "q": "« « tant bien que mal », « d'une manière ou d'une autre », « r » se dit en japonais :",
    "o": [
     "とは",
     "てしかたがない",
     "きれない",
     "なんとか"
    ],
    "a": 3,
    "e": "→ 〜なんとか."
   },
   {
    "t": "nuance",
    "q": "Quel est le sens correct de 〜なんとか ?",
    "o": [
     "« tant bien que mal », « d'une manière ou d'une autre », « r",
     "« bien sûr… mais aussi », « non seulement… (cela va de soi) ",
     "« à l'occasion de », « au moment de (faire quelque chose d'i",
     "« d'un côté… de l'autre », « tandis que »"
    ],
    "a": 0,
    "e": "Adverbe : exprime l'effort pour arriver à un résultat malgré les difficultés."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« tant bien que mal », « d'une manière ou d'une autre », « r) ? [8]",
    "o": [
     "て以来",
     "ただ",
     "だらけ",
     "なんとか"
    ],
    "a": 3,
    "e": "→ 〜なんとか."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« tant bien que mal », « d'une manière ou d'une autre », « r) ? [9]",
    "o": [
     "なんとか",
     "べきだ",
     "は問わない",
     "つつある"
    ],
    "a": 0,
    "e": "→ 〜なんとか."
   }
  ]
 },
 {
  "id": "c028",
  "g": "～を通して（とおして）／ ～を通じて（つうじて）",
  "m": "« à travers », « par l'intermédiaire de », « tout au long de ». Indique le moyen, l'intermédiaire ou la durée par lesquels quelque chose se réalise.",
  "f": "【名詞】＋ を通して ／ を通じて",
  "c": "particle",
  "lv": 1,
  "rel": [],
  "note": "Moyen/intermédiaire : 「インターネットを通じて」「友人を通して」.  Durée continue : 「一年を通して」(tout au long de l'année).  を通して et を通じて sont très proches ; を通じて un peu plus écrit, を通して souligne un peu plus l'action/le moyen actif.",
  "ex": [
   {
    "jp": "このプロジェクトを通して、多くの貴重な経験を積むことができた。",
    "fr": "À travers ce projet, j'ai pu accumuler de nombreuses expériences précieuses."
   },
   {
    "jp": "インターネットを通じて、世界中の人とつながることができる。",
    "fr": "Grâce à Internet, on peut se connecter avec des gens du monde entier."
   },
   {
    "jp": "彼を通して、彼女と友達になった。",
    "fr": "C'est par son intermédiaire que je suis devenu ami avec elle."
   }
  ],
  "qs": [
   {
    "t": "fill",
    "q": "このプロジェクト＿＿＿、多くの貴重な経験を積むことができた。",
    "fr": "À travers ce projet, j'ai pu accumuler de nombreuses expériences précieuses.",
    "o": [
     "ばかりでなく",
     "かける",
     "ものがある",
     "を通して"
    ],
    "a": 3,
    "e": "〜を通して : « à travers », « par l'intermédiaire de », « tout au long de."
   },
   {
    "t": "fill",
    "q": "彼＿＿＿、彼女と友達になった。",
    "fr": "C'est par son intermédiaire que je suis devenu ami avec elle.",
    "o": [
     "だけ",
     "を通して",
     "にすれば",
     "というものは"
    ],
    "a": 1,
    "e": "〜を通して : « à travers », « par l'intermédiaire de », « tout au long de."
   },
   {
    "t": "meaning",
    "q": "「このプロジェクトを通して、多くの貴重な経験を積むことができた。」— que signifie 〜を通して ?",
    "o": [
     "« à travers », « par l'intermédiaire de », « tout au long de",
     "« justement », « c'est précisément… qui »",
     "« par », « selon », « à cause de », « grâce à »",
     "« à mesure que », « accompagné de », « du fait de »"
    ],
    "a": 0,
    "e": "〜を通して = « à travers », « par l'intermédiaire de », « tout au long de."
   },
   {
    "t": "meaning",
    "q": "「インターネットを通じて、世界中の人とつながることができる。」— que signifie 〜を通して ?",
    "o": [
     "« commencer à (sans finir) », « être à moitié… »",
     "« tels que », « comme par exemple »",
     "« comme c'est… ! », « quel(le)… ! »",
     "« à travers », « par l'intermédiaire de », « tout au long de"
    ],
    "a": 3,
    "e": "〜を通して = « à travers », « par l'intermédiaire de », « tout au long de."
   },
   {
    "t": "meaning",
    "q": "「彼を通して、彼女と友達になった。」— que signifie 〜を通して ?",
    "o": [
     "« à travers », « par l'intermédiaire de », « tout au long de",
     "« pour un… (étonnamment) », « compte tenu de »",
     "« tant bien que mal », « d'une manière ou d'une autre », « r",
     "« c'est-à-dire », « à savoir », « autrement dit »"
    ],
    "a": 0,
    "e": "〜を通して = « à travers », « par l'intermédiaire de », « tout au long de."
   },
   {
    "t": "usage",
    "q": "« « à travers », « par l'intermédiaire de », « tout au long de » se dit en japonais :",
    "o": [
     "上で",
     "を通して",
     "かと思う",
     "それでも"
    ],
    "a": 1,
    "e": "→ 〜を通して."
   },
   {
    "t": "nuance",
    "q": "Quel est le sens correct de 〜を通して ?",
    "o": [
     "« ne pas pouvoir finir/faire complètement », « trop… pour »",
     "« à travers », « par l'intermédiaire de », « tout au long de",
     "« depuis que… (et jusqu'à maintenant) »",
     "« par (unité) », « pour chaque »"
    ],
    "a": 1,
    "e": "Moyen/intermédiaire : 「インターネットを通じて」「友人を通して」."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« à travers », « par l'intermédiaire de », « tout au long de) ? [7]",
    "o": [
     "のか",
     "をめぐって",
     "を通して",
     "かと思う"
    ],
    "a": 2,
    "e": "→ 〜を通して."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« à travers », « par l'intermédiaire de », « tout au long de) ? [8]",
    "o": [
     "でのみ",
     "を通して",
     "かのように",
     "当たり"
    ],
    "a": 1,
    "e": "→ 〜を通して."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« à travers », « par l'intermédiaire de », « tout au long de) ? [9]",
    "o": [
     "を通して",
     "はもちろん",
     "にともなって",
     "のみ"
    ],
    "a": 0,
    "e": "→ 〜を通して."
   }
  ]
 },
 {
  "id": "c029",
  "g": "～つつある",
  "m": "« être en train de (changer progressivement) ». Décrit un changement graduel en cours, en mouvement vers un état.",
  "f": "【動詞ます形】＋ つつある",
  "c": "time",
  "lv": 2,
  "rel": [],
  "note": "Insiste sur une évolution progressive et continue (≠ ている qui peut être un simple état).  Surtout avec des verbes de changement : 変わる、増える、減る、進む、回復する…  Registre écrit/formel ; fréquent dans les analyses, articles.",
  "ex": [
   {
    "jp": "テクノロジーの進化により、仕事のやり方が変わりつつある。",
    "fr": "Avec l'évolution de la technologie, la façon de travailler est en train de changer."
   },
   {
    "jp": "社会全体が高齢化しつつある。",
    "fr": "La société dans son ensemble est en train de vieillir."
   },
   {
    "jp": "景気はゆっくりと回復しつつある。",
    "fr": "La conjoncture est en train de se redresser lentement."
   }
  ],
  "qs": [
   {
    "t": "fill",
    "q": "テクノロジーの進化により、仕事のやり方が変わり＿＿＿。",
    "fr": "Avec l'évolution de la technologie, la façon de travailler est en train de changer.",
    "o": [
     "ものがある",
     "つつある",
     "なんとか",
     "および"
    ],
    "a": 1,
    "e": "〜つつある : « être en train de (changer progressivement) »."
   },
   {
    "t": "fill",
    "q": "社会全体が高齢化し＿＿＿。",
    "fr": "La société dans son ensemble est en train de vieillir.",
    "o": [
     "あまり",
     "というものは",
     "あまりに",
     "つつある"
    ],
    "a": 3,
    "e": "〜つつある : « être en train de (changer progressivement) »."
   },
   {
    "t": "fill",
    "q": "景気はゆっくりと回復し＿＿＿。",
    "fr": "La conjoncture est en train de se redresser lentement.",
    "o": [
     "つつある",
     "ただ",
     "それでも",
     "と言えば"
    ],
    "a": 0,
    "e": "〜つつある : « être en train de (changer progressivement) »."
   },
   {
    "t": "meaning",
    "q": "「テクノロジーの進化により、仕事のやり方が変わりつつある。」— que signifie 〜つつある ?",
    "o": [
     "« être en train de (changer progressivement) »",
     "« bien sûr… mais aussi », « non seulement… (cela va de soi) ",
     "« toutefois », « à condition que », « sauf que »",
     "« à sa manière », « selon ses propres moyens »"
    ],
    "a": 0,
    "e": "〜つつある = « être en train de (changer progressivement) »."
   },
   {
    "t": "meaning",
    "q": "「社会全体が高齢化しつつある。」— que signifie 〜つつある ?",
    "o": [
     "« peut-être à cause de », « sans doute parce que »",
     "« certes… mais », « c'est vrai que X, seulement… »",
     "« en commençant par », « à partir de (qui a marqué le début ",
     "« être en train de (changer progressivement) »"
    ],
    "a": 3,
    "e": "〜つつある = « être en train de (changer progressivement) »."
   },
   {
    "t": "meaning",
    "q": "「景気はゆっくりと回復しつつある。」— que signifie 〜つつある ?",
    "o": [
     "« à travers », « par l'intermédiaire de », « tout au long de",
     "« dans », « au sein de », « en matière de »",
     "« par (unité) », « pour chaque »",
     "« être en train de (changer progressivement) »"
    ],
    "a": 3,
    "e": "〜つつある = « être en train de (changer progressivement) »."
   },
   {
    "t": "usage",
    "q": "« « être en train de (changer progressivement) » » se dit en japonais :",
    "o": [
     "つつある",
     "あまり",
     "だらけ",
     "かと思う"
    ],
    "a": 0,
    "e": "→ 〜つつある."
   },
   {
    "t": "nuance",
    "q": "Quel est le sens correct de 〜つつある ?",
    "o": [
     "« à mesure que », « accompagné de », « du fait de »",
     "« toutefois », « à condition que », « sauf que »",
     "« être en train de (changer progressivement) »",
     "« depuis que… (et jusqu'à maintenant) »"
    ],
    "a": 2,
    "e": "Insiste sur une évolution progressive et continue (≠ ている qui peut être un simple état)."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« être en train de (changer progressivement) ») ? [8]",
    "o": [
     "ことだ",
     "つつある",
     "にすれば",
     "ないではいられない"
    ],
    "a": 1,
    "e": "→ 〜つつある."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« être en train de (changer progressivement) ») ? [9]",
    "o": [
     "にしても",
     "にしては",
     "つつある",
     "ことはが"
    ],
    "a": 2,
    "e": "→ 〜つつある."
   }
  ]
 },
 {
  "id": "c030",
  "g": "～ではないか ／ ～じゃないか（意志形＋）",
  "m": "« et si nous…? », « faisons… ! ». Exhortation, appel à agir ensemble (forme volitive + ではないか).",
  "f": "【動詞意志形】＋ ではないか ／ じゃないか",
  "c": "express",
  "lv": 2,
  "rel": [],
  "note": "Exhortation collective, ton un peu solennel/rhétorique : 「考えようではないか」.  ではないか = formel/écrit (discours) ; じゃないか = plus oral.  Différent du 〜じゃない de confirmation ; ici c'est sur la forme volitive (〜よう).",
  "ex": [
   {
    "jp": "環境を守るために、一人一人ができることを考えようではないか。",
    "fr": "Pour protéger l'environnement, réfléchissons à ce que chacun peut faire."
   },
   {
    "jp": "未来を子供たちに託すために、今、行動しようじゃないか。",
    "fr": "Pour confier l'avenir aux enfants, agissons dès maintenant."
   },
   {
    "jp": "みんなで力を合わせて、この問題を解決しようではないか。",
    "fr": "Unissons nos forces et résolvons ce problème ensemble."
   }
  ],
  "qs": [
   {
    "t": "fill",
    "q": "環境を守るために、一人一人ができることを考えよう＿＿＿。",
    "fr": "Pour protéger l'environnement, réfléchissons à ce que chacun peut faire.",
    "o": [
     "において",
     "によって",
     "ではないか",
     "をきっかけに"
    ],
    "a": 2,
    "e": "〜ではないか : « et si nous…? », « faisons… ! »."
   },
   {
    "t": "fill",
    "q": "みんなで力を合わせて、この問題を解決しよう＿＿＿。",
    "fr": "Unissons nos forces et résolvons ce problème ensemble.",
    "o": [
     "要するに",
     "ではないか",
     "結局",
     "ことだ"
    ],
    "a": 1,
    "e": "〜ではないか : « et si nous…? », « faisons… ! »."
   },
   {
    "t": "meaning",
    "q": "「環境を守るために、一人一人ができることを考えようではないか。」— que signifie 〜ではないか ?",
    "o": [
     "« lorsqu'on fait X », « dans le cadre / pour les besoins de ",
     "« ce qu'on appelle… (c'est) », « X, c'est… »",
     "« et si nous…? », « faisons… ! »",
     "« tant bien que mal », « d'une manière ou d'une autre », « r"
    ],
    "a": 2,
    "e": "〜ではないか = « et si nous…? », « faisons… ! »."
   },
   {
    "t": "meaning",
    "q": "「未来を子供たちに託すために、今、行動しようじゃないか。」— que signifie 〜ではないか ?",
    "o": [
     "« ne pas pouvoir finir/faire complètement », « trop… pour »",
     "« du point de vue de », « pour X (si l'on se met à sa place)",
     "« et si nous…? », « faisons… ! »",
     "« est-ce parce que…? », « sans doute parce que… »"
    ],
    "a": 2,
    "e": "〜ではないか = « et si nous…? », « faisons… ! »."
   },
   {
    "t": "meaning",
    "q": "「みんなで力を合わせて、この問題を解決しようではないか。」— que signifie 〜ではないか ?",
    "o": [
     "« à la suite de », « l'occasion qui a déclenché… »",
     "« à l'occasion de », « au moment de (faire quelque chose d'i",
     "« peu importe », « X n'est pas requis / ne compte pas »",
     "« et si nous…? », « faisons… ! »"
    ],
    "a": 3,
    "e": "〜ではないか = « et si nous…? », « faisons… ! »."
   },
   {
    "t": "usage",
    "q": "« « et si nous…? », « faisons… ! » » se dit en japonais :",
    "o": [
     "ものがある",
     "ではないか",
     "に際して",
     "つつある"
    ],
    "a": 1,
    "e": "→ 〜ではないか."
   },
   {
    "t": "nuance",
    "q": "Quel est le sens correct de 〜ではないか ?",
    "o": [
     "« justement », « c'est précisément… qui »",
     "« juste parce que (si peu) », « pour si peu »",
     "« commencer à (sans finir) », « être à moitié… »",
     "« et si nous…? », « faisons… ! »"
    ],
    "a": 3,
    "e": "Exhortation collective, ton un peu solennel/rhétorique : 「考えようではないか」."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« et si nous…? », « faisons… ! ») ? [7]",
    "o": [
     "のか",
     "ではないか",
     "を通して",
     "ただ"
    ],
    "a": 1,
    "e": "→ 〜ではないか."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« et si nous…? », « faisons… ! ») ? [8]",
    "o": [
     "ではないか",
     "にともなって",
     "のかと思った",
     "ことはない"
    ],
    "a": 0,
    "e": "→ 〜ではないか."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« et si nous…? », « faisons… ! ») ? [9]",
    "o": [
     "ないではいられない",
     "にしても",
     "きる",
     "ではないか"
    ],
    "a": 3,
    "e": "→ 〜ではないか."
   }
  ]
 },
 {
  "id": "c031",
  "g": "～くらい ／ ～くらいで",
  "m": "« juste parce que (si peu) », « pour si peu ». Minimise une cause jugée insuffisante pour justifier une réaction.",
  "f": "【名詞／普通形】＋ くらい（で）",
  "c": "express",
  "lv": 2,
  "rel": [],
  "note": "Sous-entend que la cause est trop minime pour la réaction : 「失敗したくらいで諦めるな」.  Souvent avec une négation/un reproche : 〜くらいで〜ことはない／〜な.  Aussi : approximation (« environ »), mais ici sens « pour si peu ».",
  "ex": [
   {
    "jp": "試験に一回失敗したくらいで、諦めるなんて早すぎるよ。",
    "fr": "Abandonner juste parce qu'on a échoué une fois à l'examen, c'est bien trop tôt."
   },
   {
    "jp": "小雨くらいで、運動会が中止になることはありません。",
    "fr": "Ce n'est pas pour une petite pluie que la fête sportive sera annulée."
   },
   {
    "jp": "そんな小さな問題くらいで、慌てる必要はないよ。",
    "fr": "Pas besoin de paniquer pour un problème aussi minime."
   }
  ],
  "qs": [
   {
    "t": "fill",
    "q": "試験に一回失敗した＿＿＿で、諦めるなんて早すぎるよ。",
    "fr": "Abandonner juste parce qu'on a échoué une fois à l'examen, c'est bien trop tôt.",
    "o": [
     "を通して",
     "ものがある",
     "くらい",
     "とか"
    ],
    "a": 2,
    "e": "〜くらい : « juste parce que (si peu) », « pour si peu »."
   },
   {
    "t": "fill",
    "q": "小雨＿＿＿で、運動会が中止になることはありません。",
    "fr": "Ce n'est pas pour une petite pluie que la fête sportive sera annulée.",
    "o": [
     "きる",
     "をめぐって",
     "とか",
     "くらい"
    ],
    "a": 3,
    "e": "〜くらい : « juste parce que (si peu) », « pour si peu »."
   },
   {
    "t": "fill",
    "q": "そんな小さな問題＿＿＿で、慌てる必要はないよ。",
    "fr": "Pas besoin de paniquer pour un problème aussi minime.",
    "o": [
     "とともに",
     "きれない",
     "で済む",
     "くらい"
    ],
    "a": 3,
    "e": "〜くらい : « juste parce que (si peu) », « pour si peu »."
   },
   {
    "t": "meaning",
    "q": "「試験に一回失敗したくらいで、諦めるなんて早すぎるよ。」— que signifie 〜くらい ?",
    "o": [
     "« des choses comme… et… (et tout ça) »",
     "« cela dit », « seulement », « toutefois »",
     "« peut-être à cause de », « sans doute parce que »",
     "« juste parce que (si peu) », « pour si peu »"
    ],
    "a": 3,
    "e": "〜くらい = « juste parce que (si peu) », « pour si peu »."
   },
   {
    "t": "meaning",
    "q": "「小雨くらいで、運動会が中止になることはありません。」— que signifie 〜くらい ?",
    "o": [
     "ことだ = « il faut (conseil) » ou exclamation",
     "« juste parce que (si peu) », « pour si peu »",
     "« non seulement… mais aussi (en plus) »",
     "« et si nous…? », « faisons… ! »"
    ],
    "a": 1,
    "e": "〜くらい = « juste parce que (si peu) », « pour si peu »."
   },
   {
    "t": "meaning",
    "q": "「そんな小さな問題くらいで、慌てる必要はないよ。」— que signifie 〜くらい ?",
    "o": [
     "« en commençant par », « à partir de (qui a marqué le début ",
     "« lorsqu'on fait X », « dans le cadre / pour les besoins de ",
     "« faire complètement », « jusqu'au bout », « à fond »",
     "« juste parce que (si peu) », « pour si peu »"
    ],
    "a": 3,
    "e": "〜くらい = « juste parce que (si peu) », « pour si peu »."
   },
   {
    "t": "usage",
    "q": "« « juste parce que (si peu) », « pour si peu » » se dit en japonais :",
    "o": [
     "くらい",
     "ばかりでなく",
     "をめぐって",
     "ものがある"
    ],
    "a": 0,
    "e": "→ 〜くらい."
   },
   {
    "t": "nuance",
    "q": "Quel est le sens correct de 〜くらい ?",
    "o": [
     "« peut-être à cause de », « sans doute parce que »",
     "« ce qu'on appelle… (c'est) », « X, c'est… »",
     "« juste parce que (si peu) », « pour si peu »",
     "« autant que », « tant que »"
    ],
    "a": 2,
    "e": "Sous-entend que la cause est trop minime pour la réaction : 「失敗したくらいで諦めるな」."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« juste parce que (si peu) », « pour si peu ») ? [8]",
    "o": [
     "きれない",
     "とか",
     "くらい",
     "そこで"
    ],
    "a": 2,
    "e": "→ 〜くらい."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« juste parce que (si peu) », « pour si peu ») ? [9]",
    "o": [
     "と言えば",
     "によって",
     "すなわち",
     "くらい"
    ],
    "a": 3,
    "e": "→ 〜くらい."
   }
  ]
 },
 {
  "id": "c032",
  "g": "～をきっかけに ／ ～をきっかけにして",
  "m": "« à la suite de », « l'occasion qui a déclenché… ». Un événement sert de point de départ à un changement.",
  "f": "【名詞／動詞た形＋の】＋ をきっかけに（して）",
  "c": "time",
  "lv": 2,
  "rel": [],
  "note": "Marque le déclencheur d'un nouveau comportement, intérêt, situation.  Souvent suivi d'un changement positif/notable : 夢を持つ、始める…  Proche de を契機に (plus formel/écrit).",
  "ex": [
   {
    "jp": "留学をきっかけに、海外で働きたいという夢を持つようになった。",
    "fr": "Mes études à l'étranger ont été le déclic pour vouloir travailler à l'international."
   },
   {
    "jp": "友達の紹介をきっかけに、新しいビジネスを始めた。",
    "fr": "C'est sur la recommandation d'un ami que j'ai lancé une nouvelle entreprise."
   },
   {
    "jp": "引っ越しをきっかけに、新しい趣味を始めた。",
    "fr": "À l'occasion de mon déménagement, je me suis mis à un nouveau loisir."
   }
  ],
  "qs": [
   {
    "t": "fill",
    "q": "留学＿＿＿、海外で働きたいという夢を持つようになった。",
    "fr": "Mes études à l'étranger ont été le déclic pour vouloir travailler à l'international.",
    "o": [
     "にしては",
     "に限って",
     "をきっかけに",
     "要するに"
    ],
    "a": 2,
    "e": "〜をきっかけに : « à la suite de », « l'occasion qui a déclenché… »."
   },
   {
    "t": "fill",
    "q": "友達の紹介＿＿＿、新しいビジネスを始めた。",
    "fr": "C'est sur la recommandation d'un ami que j'ai lancé une nouvelle entreprise.",
    "o": [
     "をきっかけに",
     "に限って",
     "とともに",
     "なんとか"
    ],
    "a": 0,
    "e": "〜をきっかけに : « à la suite de », « l'occasion qui a déclenché… »."
   },
   {
    "t": "fill",
    "q": "引っ越し＿＿＿、新しい趣味を始めた。",
    "fr": "À l'occasion de mon déménagement, je me suis mis à un nouveau loisir.",
    "o": [
     "とともに",
     "すなわち",
     "やらやら",
     "をきっかけに"
    ],
    "a": 3,
    "e": "〜をきっかけに : « à la suite de », « l'occasion qui a déclenché… »."
   },
   {
    "t": "meaning",
    "q": "「留学をきっかけに、海外で働きたいという夢を持つようになった。」— que signifie 〜をきっかけに ?",
    "o": [
     "« est-ce parce que…? », « sans doute parce que… »",
     "« à la suite de », « l'occasion qui a déclenché… »",
     "« lorsqu'on fait X », « dans le cadre / pour les besoins de ",
     "« par », « selon », « à cause de », « grâce à »"
    ],
    "a": 1,
    "e": "〜をきっかけに = « à la suite de », « l'occasion qui a déclenché… »."
   },
   {
    "t": "meaning",
    "q": "「友達の紹介をきっかけに、新しいビジネスを始めた。」— que signifie 〜をきっかけに ?",
    "o": [
     "« commencer à (sans finir) », « être à moitié… »",
     "« du point de vue de », « pour X (si l'on se met à sa place)",
     "« à la suite de », « l'occasion qui a déclenché… »",
     "« d'un côté… de l'autre », « tandis que »"
    ],
    "a": 2,
    "e": "〜をきっかけに = « à la suite de », « l'occasion qui a déclenché… »."
   },
   {
    "t": "meaning",
    "q": "「引っ越しをきっかけに、新しい趣味を始めた。」— que signifie 〜をきっかけに ?",
    "o": [
     "« à la suite de », « l'occasion qui a déclenché… »",
     "« il y a quelque chose de… (qui touche) », « on ressent un c",
     "« ce qu'on appelle X (par nature)… »",
     "« à l'occasion de », « au moment de (faire quelque chose d'i"
    ],
    "a": 0,
    "e": "〜をきっかけに = « à la suite de », « l'occasion qui a déclenché… »."
   },
   {
    "t": "usage",
    "q": "« « à la suite de », « l'occasion qui a déclenché… » » se dit en japonais :",
    "o": [
     "をきっかけに",
     "に際して",
     "といった",
     "一方だ"
    ],
    "a": 0,
    "e": "→ 〜をきっかけに."
   },
   {
    "t": "nuance",
    "q": "Quel est le sens correct de 〜をきっかけに ?",
    "o": [
     "« il paraît que », « on dit que… (et donc) »",
     "« à la suite de », « l'occasion qui a déclenché… »",
     "« du point de vue de », « pour X (si l'on se met à sa place)",
     "« ne pas pouvoir s'empêcher de »"
    ],
    "a": 1,
    "e": "Marque le déclencheur d'un nouveau comportement, intérêt, situation."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« à la suite de », « l'occasion qui a déclenché… ») ? [8]",
    "o": [
     "をきっかけに",
     "と同時に",
     "なんてんだろう",
     "のか"
    ],
    "a": 0,
    "e": "→ 〜をきっかけに."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« à la suite de », « l'occasion qui a déclenché… ») ? [9]",
    "o": [
     "きれない",
     "をきっかけに",
     "にすれば",
     "をはじめ"
    ],
    "a": 1,
    "e": "→ 〜をきっかけに."
   }
  ]
 },
 {
  "id": "c033",
  "g": "～をはじめ（として）",
  "m": "« à commencer par », « notamment ». Cite un exemple représentatif en tête d'un ensemble plus large.",
  "f": "【名詞】＋ をはじめ（として）（＋ 名詞 など）",
  "c": "particle",
  "lv": 1,
  "rel": [],
  "note": "Met en avant l'élément le plus représentatif d'un groupe, puis sous-entend « et les autres ».  Souvent suivi de など : 「東京をはじめ、多くの都市で…」.  Registre formel/écrit ; fréquent dans descriptions et énumérations.",
  "ex": [
   {
    "jp": "東京をはじめ、日本の多くの都市で桜が見られる。",
    "fr": "À commencer par Tokyo, on peut voir des cerisiers dans de nombreuses villes du Japon."
   },
   {
    "jp": "春休みをはじめ、学校の休みが増える。",
    "fr": "À commencer par les vacances de printemps, les congés scolaires augmentent."
   },
   {
    "jp": "社長をはじめ、社員全員が式に参加した。",
    "fr": "À commencer par le PDG, tous les employés ont participé à la cérémonie."
   }
  ],
  "qs": [
   {
    "t": "fill",
    "q": "東京＿＿＿、日本の多くの都市で桜が見られる。",
    "fr": "À commencer par Tokyo, on peut voir des cerisiers dans de nombreuses villes du Japon.",
    "o": [
     "ことはが",
     "にともなって",
     "をはじめ",
     "のみ"
    ],
    "a": 2,
    "e": "〜をはじめ : « à commencer par », « notamment »."
   },
   {
    "t": "fill",
    "q": "春休み＿＿＿、学校の休みが増える。",
    "fr": "À commencer par les vacances de printemps, les congés scolaires augmentent.",
    "o": [
     "だらけ",
     "をはじめ",
     "きる",
     "なりに"
    ],
    "a": 1,
    "e": "〜をはじめ : « à commencer par », « notamment »."
   },
   {
    "t": "fill",
    "q": "社長＿＿＿、社員全員が式に参加した。",
    "fr": "À commencer par le PDG, tous les employés ont participé à la cérémonie.",
    "o": [
     "に際して",
     "にともなって",
     "で済む",
     "をはじめ"
    ],
    "a": 3,
    "e": "〜をはじめ : « à commencer par », « notamment »."
   },
   {
    "t": "meaning",
    "q": "「東京をはじめ、日本の多くの都市で桜が見られる。」— que signifie 〜をはじめ ?",
    "o": [
     "« du point de vue de », « pour X (si l'on se met à sa place)",
     "« malgré tout », « et pourtant », « même ainsi »",
     "« à commencer par », « notamment »",
     "« bien sûr… mais aussi », « non seulement… (cela va de soi) "
    ],
    "a": 2,
    "e": "〜をはじめ = « à commencer par », « notamment »."
   },
   {
    "t": "meaning",
    "q": "「春休みをはじめ、学校の休みが増える。」— que signifie 〜をはじめ ?",
    "o": [
     "« certes… mais », « c'est vrai que X, seulement… »",
     "« tellement… que », « à cause de l'excès de… »",
     "« à commencer par », « notamment »",
     "« peut-être à cause de », « sans doute parce que »"
    ],
    "a": 2,
    "e": "〜をはじめ = « à commencer par », « notamment »."
   },
   {
    "t": "meaning",
    "q": "「社長をはじめ、社員全員が式に参加した。」— que signifie 〜をはじめ ?",
    "o": [
     "« non seulement… mais aussi (en plus) »",
     "« à commencer par », « notamment »",
     "« peu importe », « X n'est pas requis / ne compte pas »",
     "« depuis que… (et jusqu'à maintenant) »"
    ],
    "a": 1,
    "e": "〜をはじめ = « à commencer par », « notamment »."
   },
   {
    "t": "usage",
    "q": "« « à commencer par », « notamment » » se dit en japonais :",
    "o": [
     "といった",
     "に限って",
     "上で",
     "をはじめ"
    ],
    "a": 3,
    "e": "→ 〜をはじめ."
   },
   {
    "t": "nuance",
    "q": "Quel est le sens correct de 〜をはじめ ?",
    "o": [
     "« insupportablement », « tellement… que je n'en peux plus »",
     "« à commencer par », « notamment »",
     "« sans distinction de », « indépendamment de »",
     "« lorsqu'on fait X », « dans le cadre / pour les besoins de "
    ],
    "a": 1,
    "e": "Met en avant l'élément le plus représentatif d'un groupe, puis sous-entend « et les autres »."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« à commencer par », « notamment ») ? [8]",
    "o": [
     "にともなって",
     "のかと思った",
     "上で",
     "をはじめ"
    ],
    "a": 3,
    "e": "→ 〜をはじめ."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« à commencer par », « notamment ») ? [9]",
    "o": [
     "当たり",
     "をはじめ",
     "のか",
     "一方で"
    ],
    "a": 1,
    "e": "→ 〜をはじめ."
   }
  ]
 },
 {
  "id": "c034",
  "g": "～を皮切りに（かわきりに）",
  "m": "« en commençant par », « à partir de (qui a marqué le début d'une série) ». Premier élément qui déclenche une succession d'événements.",
  "f": "【名詞】／【動詞た形＋の】＋ を皮切りに（して）",
  "c": "time",
  "lv": 2,
  "rel": [],
  "note": "Marque le coup d'envoi d'une série d'événements qui s'enchaînent ensuite.  ≠ をはじめ (exemples d'un ensemble) : を皮切りに = point de départ chronologique d'une suite.  Registre formel/écrit ; souvent tournées, lois, réformes, séries d'événements.",
  "ex": [
   {
    "jp": "2019年の「働き方改革関連法」の施行を皮切りに、多くの変化が起きてきた。",
    "fr": "À partir de l'entrée en vigueur de la loi sur la réforme du travail en 2019, de nombreux changements se sont produits."
   },
   {
    "jp": "東京公演を皮切りに、全国ツアーが始まった。",
    "fr": "En commençant par le concert de Tokyo, la tournée nationale a débuté."
   },
   {
    "jp": "彼の発言を皮切りに、次々と反対意見が出た。",
    "fr": "Sa remarque a donné le coup d'envoi à une série d'objections."
   }
  ],
  "qs": [
   {
    "t": "fill",
    "q": "2019年の「働き方改革関連法」の施行＿＿＿、多くの変化が起きてきた。",
    "fr": "À partir de l'entrée en vigueur de la loi sur la réforme du travail en 2019, de nombreux changements se sont produits.",
    "o": [
     "ではないか",
     "要するに",
     "にしても",
     "を皮切りに"
    ],
    "a": 3,
    "e": "〜を皮切りに : « en commençant par », « à partir de (qui a marqué le début ."
   },
   {
    "t": "fill",
    "q": "東京公演＿＿＿、全国ツアーが始まった。",
    "fr": "En commençant par le concert de Tokyo, la tournée nationale a débuté.",
    "o": [
     "ただ",
     "を皮切りに",
     "つつある",
     "そこで"
    ],
    "a": 1,
    "e": "〜を皮切りに : « en commençant par », « à partir de (qui a marqué le début ."
   },
   {
    "t": "fill",
    "q": "彼の発言＿＿＿、次々と反対意見が出た。",
    "fr": "Sa remarque a donné le coup d'envoi à une série d'objections.",
    "o": [
     "て以来",
     "をめぐって",
     "ないではいられない",
     "を皮切りに"
    ],
    "a": 3,
    "e": "〜を皮切りに : « en commençant par », « à partir de (qui a marqué le début ."
   },
   {
    "t": "meaning",
    "q": "「2019年の「働き方改革関連法」の施行を皮切りに、多くの変化が起きてきた。」— que signifie 〜を皮切りに ?",
    "o": [
     "« à l'occasion de », « au moment de (faire quelque chose d'i",
     "« en commençant par », « à partir de (qui a marqué le début ",
     "« depuis que… (et jusqu'à maintenant) »",
     "« il n'y a pas besoin de », « ce n'est pas la peine de »"
    ],
    "a": 1,
    "e": "〜を皮切りに = « en commençant par », « à partir de (qui a marqué le début ."
   },
   {
    "t": "meaning",
    "q": "「東京公演を皮切りに、全国ツアーが始まった。」— que signifie 〜を皮切りに ?",
    "o": [
     "« en commençant par », « à partir de (qui a marqué le début ",
     "ことだ = « il faut (conseil) » ou exclamation",
     "« tant bien que mal », « d'une manière ou d'une autre », « r",
     "« au sujet de », « autour de »"
    ],
    "a": 0,
    "e": "〜を皮切りに = « en commençant par », « à partir de (qui a marqué le début ."
   },
   {
    "t": "meaning",
    "q": "「彼の発言を皮切りに、次々と反対意見が出た。」— que signifie 〜を皮切りに ?",
    "o": [
     "« à travers », « par l'intermédiaire de », « tout au long de",
     "« s'en tirer avec », « ça suffit / on n'a pas besoin de »",
     "« en commençant par », « à partir de (qui a marqué le début ",
     "« il n'y a pas besoin de », « ce n'est pas la peine de »"
    ],
    "a": 2,
    "e": "〜を皮切りに = « en commençant par », « à partir de (qui a marqué le début ."
   },
   {
    "t": "usage",
    "q": "« « en commençant par », « à partir de (qui a marqué le début  » se dit en japonais :",
    "o": [
     "を皮切りに",
     "にすれば",
     "のみ",
     "のかと思った"
    ],
    "a": 0,
    "e": "→ 〜を皮切りに."
   },
   {
    "t": "nuance",
    "q": "Quel est le sens correct de 〜を皮切りに ?",
    "o": [
     "« peut-être à cause de », « sans doute parce que »",
     "« finalement », « en fin de compte », « au bout du compte »",
     "« en commençant par », « à partir de (qui a marqué le début ",
     "« en somme », « bref », « pour résumer »"
    ],
    "a": 2,
    "e": "Marque le coup d'envoi d'une série d'événements qui s'enchaînent ensuite."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« en commençant par », « à partir de (qui a marqué le début ) ? [8]",
    "o": [
     "一方で",
     "を皮切りに",
     "をめぐって",
     "それでも"
    ],
    "a": 1,
    "e": "→ 〜を皮切りに."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« en commençant par », « à partir de (qui a marqué le début ) ? [9]",
    "o": [
     "を皮切りに",
     "にしても",
     "にしては",
     "だけ"
    ],
    "a": 0,
    "e": "→ 〜を皮切りに."
   }
  ]
 },
 {
  "id": "c035",
  "g": "～および（及び）",
  "m": "« ainsi que », « et » (liaison formelle). Relie deux noms (ou groupes) dans un registre écrit/administratif.",
  "f": "【名詞A】＋ および ＋ 【名詞B】",
  "c": "particle",
  "lv": 1,
  "rel": [],
  "note": "Équivalent formel de と / や pour relier des noms ; typique des documents officiels.  Ne relie que des noms, pas des propositions verbales.  À l'oral on préfère と ; および sonne administratif.",
  "ex": [
   {
    "jp": "彼は英語およびフランス語を話すことができる。",
    "fr": "Il peut parler anglais ainsi que français."
   },
   {
    "jp": "氏名および住所をご記入ください。",
    "fr": "Veuillez inscrire vos nom et adresse."
   },
   {
    "jp": "会員および家族は無料で入場できる。",
    "fr": "Les membres ainsi que leur famille entrent gratuitement."
   }
  ],
  "qs": [
   {
    "t": "fill",
    "q": "彼は英語＿＿＿フランス語を話すことができる。",
    "fr": "Il peut parler anglais ainsi que français.",
    "o": [
     "にしては",
     "ことはが",
     "きれない",
     "および"
    ],
    "a": 3,
    "e": "〜および : « ainsi que », « et » (liaison formelle)."
   },
   {
    "t": "fill",
    "q": "氏名＿＿＿住所をご記入ください。",
    "fr": "Veuillez inscrire vos nom et adresse.",
    "o": [
     "上で",
     "に際して",
     "べきだ",
     "および"
    ],
    "a": 3,
    "e": "〜および : « ainsi que », « et » (liaison formelle)."
   },
   {
    "t": "fill",
    "q": "会員＿＿＿家族は無料で入場できる。",
    "fr": "Les membres ainsi que leur famille entrent gratuitement.",
    "o": [
     "および",
     "かのように",
     "にしても",
     "やらやら"
    ],
    "a": 0,
    "e": "〜および : « ainsi que », « et » (liaison formelle)."
   },
   {
    "t": "meaning",
    "q": "「彼は英語およびフランス語を話すことができる。」— que signifie 〜および ?",
    "o": [
     "« tels que », « comme par exemple »",
     "« en somme », « bref », « pour résumer »",
     "« même pour X », « même si c'est X »",
     "« ainsi que », « et » (liaison formelle)"
    ],
    "a": 3,
    "e": "〜および = « ainsi que », « et » (liaison formelle)."
   },
   {
    "t": "meaning",
    "q": "「氏名および住所をご記入ください。」— que signifie 〜および ?",
    "o": [
     "« ce qu'on appelle X (par nature)… »",
     "« ainsi que », « et » (liaison formelle)",
     "« après avoir fait X (et sur cette base) »",
     "« ne faire qu'augmenter/diminuer », « aller toujours plus da"
    ],
    "a": 1,
    "e": "〜および = « ainsi que », « et » (liaison formelle)."
   },
   {
    "t": "meaning",
    "q": "「会員および家族は無料で入場できる。」— que signifie 〜および ?",
    "o": [
     "« ainsi que », « et » (liaison formelle)",
     "« après avoir fait X (et sur cette base) »",
     "« finalement », « en fin de compte », « au bout du compte »",
     "« juste parce que (si peu) », « pour si peu »"
    ],
    "a": 0,
    "e": "〜および = « ainsi que », « et » (liaison formelle)."
   },
   {
    "t": "usage",
    "q": "« « ainsi que », « et » (liaison formelle) » se dit en japonais :",
    "o": [
     "および",
     "それでも",
     "はもちろん",
     "そこで"
    ],
    "a": 0,
    "e": "→ 〜および."
   },
   {
    "t": "nuance",
    "q": "Quel est le sens correct de 〜および ?",
    "o": [
     "« à la suite de », « l'occasion qui a déclenché… »",
     "« peut-être à cause de », « sans doute parce que »",
     "« ainsi que », « et » (liaison formelle)",
     "« malgré tout », « et pourtant », « même ainsi »"
    ],
    "a": 2,
    "e": "Équivalent formel de と / や pour relier des noms ; typique des documents officiels."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« ainsi que », « et » (liaison formelle)) ? [8]",
    "o": [
     "だけ",
     "あまりに",
     "および",
     "だらけ"
    ],
    "a": 2,
    "e": "→ 〜および."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« ainsi que », « et » (liaison formelle)) ? [9]",
    "o": [
     "と同時に",
     "を通して",
     "および",
     "をめぐって"
    ],
    "a": 2,
    "e": "→ 〜および."
   }
  ]
 },
 {
  "id": "c036",
  "g": "～やら～やら",
  "m": "« des choses comme… et… (et tout ça) ». Énumère plusieurs éléments en suggérant un certain désordre, abondance ou exaspération.",
  "f": "【名詞／普通形】＋ やら ＋ 【名詞／普通形】＋ やら",
  "c": "particle",
  "lv": 1,
  "rel": [],
  "note": "Énumération non exhaustive avec nuance de « tout ça à la fois » (positif ou pénible).  Souvent émotions mêlées : 「うれしいやら悲しいやら」.  Plus expressif/familier que や ; suggère un trop-plein.",
  "ex": [
   {
    "jp": "彼女はケーキやらクッキーやら、おいしいものをよく作る。",
    "fr": "Elle prépare souvent de bonnes choses, des gâteaux, des cookies, tout ça."
   },
   {
    "jp": "引っ越しは、荷造りやら掃除やらで忙しい。",
    "fr": "Le déménagement, avec les cartons, le ménage et tout ça, c'est chargé."
   },
   {
    "jp": "合格して、うれしいやら信じられないやら、複雑な気持ちだ。",
    "fr": "Reçu à l'examen : content, incrédule… des sentiments mêlés."
   }
  ],
  "qs": [
   {
    "t": "meaning",
    "q": "「彼女はケーキやらクッキーやら、おいしいものをよく作る。」— que signifie 〜やらやら ?",
    "o": [
     "« en commençant par », « à partir de (qui a marqué le début ",
     "« on devrait », « il faut (moralement) » / « on ne devrait p",
     "« des choses comme… et… (et tout ça) »",
     "« toutefois », « à condition que », « sauf que »"
    ],
    "a": 2,
    "e": "〜やらやら = « des choses comme… et… (et tout ça) »."
   },
   {
    "t": "meaning",
    "q": "「引っ越しは、荷造りやら掃除やらで忙しい。」— que signifie 〜やらやら ?",
    "o": [
     "« tels que », « comme par exemple »",
     "« des choses comme… et… (et tout ça) »",
     "« tellement… que », « à cause de l'excès de… »",
     "« il est impossible que », « il n'y a aucune chance que »"
    ],
    "a": 1,
    "e": "〜やらやら = « des choses comme… et… (et tout ça) »."
   },
   {
    "t": "meaning",
    "q": "「合格して、うれしいやら信じられないやら、複雑な気持ちだ。」— que signifie 〜やらやら ?",
    "o": [
     "« des choses comme… et… (et tout ça) »",
     "« au sujet de », « autour de »",
     "« ne pas pouvoir finir/faire complètement », « trop… pour »",
     "« peu importe », « X n'est pas requis / ne compte pas »"
    ],
    "a": 0,
    "e": "〜やらやら = « des choses comme… et… (et tout ça) »."
   },
   {
    "t": "usage",
    "q": "« « des choses comme… et… (et tout ça) » » se dit en japonais :",
    "o": [
     "をきっかけに",
     "なんてんだろう",
     "べきだ",
     "やらやら"
    ],
    "a": 3,
    "e": "→ 〜やらやら."
   },
   {
    "t": "nuance",
    "q": "Quel est le sens correct de 〜やらやら ?",
    "o": [
     "« ainsi que », « et » (liaison formelle)",
     "« seulement », « depuis que… (rien ensuite) », « rester à »",
     "« des choses comme… et… (et tout ça) »",
     "« il paraît que », « on dit que… (et donc) »"
    ],
    "a": 2,
    "e": "Énumération non exhaustive avec nuance de « tout ça à la fois » (positif ou pénible)."
   },
   {
    "t": "usage",
    "q": "Complétez avec la forme correcte (sens : « des choses comme… et… (et tout ça) ») :",
    "o": [
     "ただし",
     "やらやら",
     "かと思う",
     "せいか"
    ],
    "a": 1,
    "e": "→ 〜やらやら."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« des choses comme… et… (et tout ça) ») ? [6]",
    "o": [
     "に際して",
     "やらやら",
     "すなわち",
     "のみ"
    ],
    "a": 1,
    "e": "→ 〜やらやら."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« des choses comme… et… (et tout ça) ») ? [7]",
    "o": [
     "やらやら",
     "て以来",
     "を通して",
     "にしては"
    ],
    "a": 0,
    "e": "→ 〜やらやら."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« des choses comme… et… (et tout ça) ») ? [8]",
    "o": [
     "やらやら",
     "くらい",
     "でのみ",
     "ないではいられない"
    ],
    "a": 0,
    "e": "→ 〜やらやら."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« des choses comme… et… (et tout ça) ») ? [9]",
    "o": [
     "というものは",
     "要するに",
     "きれない",
     "やらやら"
    ],
    "a": 3,
    "e": "→ 〜やらやら."
   }
  ]
 },
 {
  "id": "c037",
  "g": "～によって（手段・原因・受身の動作主）",
  "m": "« par », « selon », « à cause de », « grâce à ». Polyvalent : moyen, cause, agent du passif, ou variation selon un critère.",
  "f": "【名詞】＋ によって（／により／による＋名詞）",
  "c": "particle",
  "lv": 1,
  "rel": [],
  "note": "Moyen : 「話し合いによって解決する」. Cause : 「地震によって倒れた」.  Agent du passif : 「これは夏目漱石によって書かれた」. Variation : 「人によって考えが違う」.  Registre formel ; により = plus écrit ; による + nom modifie un nom.",
  "ex": [
   {
    "jp": "花粉症は、杉の花粉によって、くしゃみが出たりする。",
    "fr": "Le rhume des foins fait éternuer à cause du pollen de cèdre."
   },
   {
    "jp": "人によって、考え方は異なる。",
    "fr": "Les façons de penser diffèrent selon les personnes."
   },
   {
    "jp": "この問題は話し合いによって解決された。",
    "fr": "Ce problème a été résolu par la discussion."
   }
  ],
  "qs": [
   {
    "t": "fill",
    "q": "花粉症は、杉の花粉＿＿＿、くしゃみが出たりする。",
    "fr": "Le rhume des foins fait éternuer à cause du pollen de cèdre.",
    "o": [
     "によって",
     "だけ",
     "ばかりでなく",
     "一方だ"
    ],
    "a": 0,
    "e": "〜によって : « par », « selon », « à cause de », « grâce à »."
   },
   {
    "t": "fill",
    "q": "人＿＿＿、考え方は異なる。",
    "fr": "Les façons de penser diffèrent selon les personnes.",
    "o": [
     "によって",
     "で済む",
     "と言えば",
     "をめぐって"
    ],
    "a": 0,
    "e": "〜によって : « par », « selon », « à cause de », « grâce à »."
   },
   {
    "t": "fill",
    "q": "この問題は話し合い＿＿＿解決された。",
    "fr": "Ce problème a été résolu par la discussion.",
    "o": [
     "によって",
     "きれない",
     "と言えば",
     "に限らず"
    ],
    "a": 0,
    "e": "〜によって : « par », « selon », « à cause de », « grâce à »."
   },
   {
    "t": "meaning",
    "q": "「花粉症は、杉の花粉によって、くしゃみが出たりする。」— que signifie 〜によって ?",
    "o": [
     "« tant bien que mal », « d'une manière ou d'une autre », « r",
     "« par », « selon », « à cause de », « grâce à »",
     "« d'un côté… de l'autre », « tandis que »",
     "« au sujet de », « autour de »"
    ],
    "a": 1,
    "e": "〜によって = « par », « selon », « à cause de », « grâce à »."
   },
   {
    "t": "meaning",
    "q": "「人によって、考え方は異なる。」— que signifie 〜によって ?",
    "o": [
     "« commencer à (sans finir) », « être à moitié… »",
     "Ajoute か à une phrase pour adoucir, exprimer une incertitude",
     "« c'est pourquoi », « alors (j'ai décidé de) »",
     "« par », « selon », « à cause de », « grâce à »"
    ],
    "a": 3,
    "e": "〜によって = « par », « selon », « à cause de », « grâce à »."
   },
   {
    "t": "meaning",
    "q": "「この問題は話し合いによって解決された。」— que signifie 〜によって ?",
    "o": [
     "« bien sûr… mais aussi », « non seulement… (cela va de soi) ",
     "« par », « selon », « à cause de », « grâce à »",
     "« à sa manière », « selon ses propres moyens »",
     "« il paraît que », « on dit que… (et donc) »"
    ],
    "a": 1,
    "e": "〜によって = « par », « selon », « à cause de », « grâce à »."
   },
   {
    "t": "usage",
    "q": "« « par », « selon », « à cause de », « grâce à » » se dit en japonais :",
    "o": [
     "でのみ",
     "のみ",
     "要するに",
     "によって"
    ],
    "a": 3,
    "e": "→ 〜によって."
   },
   {
    "t": "nuance",
    "q": "Quel est le sens correct de 〜によって ?",
    "o": [
     "« bien sûr… mais aussi », « non seulement… (cela va de soi) ",
     "« pour un… (étonnamment) », « compte tenu de »",
     "« rien ne vaut », « le mieux c'est… »",
     "« par », « selon », « à cause de », « grâce à »"
    ],
    "a": 3,
    "e": "Moyen : 「話し合いによって解決する」. Cause : 「地震によって倒れた」."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« par », « selon », « à cause de », « grâce à ») ? [8]",
    "o": [
     "のかと思った",
     "てしかたがない",
     "ことはが",
     "によって"
    ],
    "a": 3,
    "e": "→ 〜によって."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« par », « selon », « à cause de », « grâce à ») ? [9]",
    "o": [
     "なんとか",
     "かと思う",
     "を皮切りに",
     "によって"
    ],
    "a": 3,
    "e": "→ 〜によって."
   }
  ]
 },
 {
  "id": "c038",
  "g": "～のみ",
  "m": "« seulement », « uniquement » (équivalent formel de だけ). Restreint à un seul élément.",
  "f": "【名詞】／【動詞・形容詞普通形】＋ のみ",
  "c": "particle",
  "lv": 1,
  "rel": [],
  "note": "Version écrite/formelle de だけ ; fréquent dans documents, annonces, écrits.  Peut se combiner avec が／を : 「彼のみが知っている」.  Aussi 「〜のみならず」(non seulement…), proche de だけでなく.",
  "ex": [
   {
    "jp": "彼のみが、その秘密を知っている。",
    "fr": "Lui seul connaît ce secret."
   },
   {
    "jp": "会員のみ入場できます。",
    "fr": "Seuls les membres peuvent entrer."
   },
   {
    "jp": "努力のみが成功への道だ。",
    "fr": "Seul l'effort est le chemin vers le succès."
   }
  ],
  "qs": [
   {
    "t": "fill",
    "q": "彼＿＿＿が、その秘密を知っている。",
    "fr": "Lui seul connaît ce secret.",
    "o": [
     "上で",
     "やらやら",
     "のみ",
     "といった"
    ],
    "a": 2,
    "e": "〜のみ : « seulement », « uniquement » (équivalent formel de だけ)."
   },
   {
    "t": "fill",
    "q": "会員＿＿＿入場できます。",
    "fr": "Seuls les membres peuvent entrer.",
    "o": [
     "というものは",
     "によって",
     "と同時に",
     "のみ"
    ],
    "a": 3,
    "e": "〜のみ : « seulement », « uniquement » (équivalent formel de だけ)."
   },
   {
    "t": "fill",
    "q": "努力＿＿＿が成功への道だ。",
    "fr": "Seul l'effort est le chemin vers le succès.",
    "o": [
     "ないではいられない",
     "のみ",
     "はもちろん",
     "せいか"
    ],
    "a": 1,
    "e": "〜のみ : « seulement », « uniquement » (équivalent formel de だけ)."
   },
   {
    "t": "meaning",
    "q": "「彼のみが、その秘密を知っている。」— que signifie 〜のみ ?",
    "o": [
     "« seulement », « depuis que… (rien ensuite) », « rester à »",
     "« à la suite de », « l'occasion qui a déclenché… »",
     "« seulement », « uniquement » (équivalent formel de だけ)",
     "« ne pas pouvoir finir/faire complètement », « trop… pour »"
    ],
    "a": 2,
    "e": "〜のみ = « seulement », « uniquement » (équivalent formel de だけ)."
   },
   {
    "t": "meaning",
    "q": "「会員のみ入場できます。」— que signifie 〜のみ ?",
    "o": [
     "« au sujet de », « autour de »",
     "« il n'y a pas besoin de », « ce n'est pas la peine de »",
     "« malgré tout », « et pourtant », « même ainsi »",
     "« seulement », « uniquement » (équivalent formel de だけ)"
    ],
    "a": 3,
    "e": "〜のみ = « seulement », « uniquement » (équivalent formel de だけ)."
   },
   {
    "t": "meaning",
    "q": "「努力のみが成功への道だ。」— que signifie 〜のみ ?",
    "o": [
     "« à l'occasion de », « au moment de (faire quelque chose d'i",
     "« seulement », « uniquement » (équivalent formel de だけ)",
     "« du point de vue de », « pour X (si l'on se met à sa place)",
     "« et si nous…? », « faisons… ! »"
    ],
    "a": 1,
    "e": "〜のみ = « seulement », « uniquement » (équivalent formel de だけ)."
   },
   {
    "t": "usage",
    "q": "« « seulement », « uniquement » (équivalent formel de だけ) » se dit en japonais :",
    "o": [
     "といった",
     "をめぐって",
     "なんとか",
     "のみ"
    ],
    "a": 3,
    "e": "→ 〜のみ."
   },
   {
    "t": "nuance",
    "q": "Quel est le sens correct de 〜のみ ?",
    "o": [
     "« tant bien que mal », « d'une manière ou d'une autre », « r",
     "« seulement », « uniquement » (équivalent formel de だけ)",
     "« en même temps que », « dès que », « à la fois »",
     "« pour un… (étonnamment) », « compte tenu de »"
    ],
    "a": 1,
    "e": "Version écrite/formelle de だけ ; fréquent dans documents, annonces, écrits."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« seulement », « uniquement » (équivalent formel de だけ)) ? [8]",
    "o": [
     "なんとか",
     "といった",
     "とともに",
     "のみ"
    ],
    "a": 3,
    "e": "→ 〜のみ."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« seulement », « uniquement » (équivalent formel de だけ)) ? [9]",
    "o": [
     "あまり",
     "きり",
     "一方で",
     "のみ"
    ],
    "a": 3,
    "e": "→ 〜のみ."
   }
  ]
 },
 {
  "id": "c039",
  "g": "～でのみ ／ ～にのみ",
  "m": "« uniquement à/dans/par » (のみ combiné à une particule de lieu ou moyen).",
  "f": "【名詞】＋ で／に ＋ のみ",
  "c": "particle",
  "lv": 1,
  "rel": [],
  "note": "でのみ = « seulement à/par (lieu, moyen) » ; にのみ = « seulement à/dans (lieu, cible) ».  On garde la particule appropriée AVANT のみ pour préciser le rôle (lieu, moyen, destinataire).  Registre formel/écrit.",
  "ex": [
   {
    "jp": "沖縄でのみ、その伝統的な祭りが行われる。",
    "fr": "C'est uniquement à Okinawa que se tient cette fête traditionnelle."
   },
   {
    "jp": "この薬は薬局にのみ置いてある。",
    "fr": "Ce médicament n'est disponible qu'en pharmacie."
   },
   {
    "jp": "申し込みはオンラインでのみ受け付けます。",
    "fr": "Les inscriptions ne sont acceptées qu'en ligne."
   }
  ],
  "qs": [
   {
    "t": "fill",
    "q": "沖縄＿＿＿、その伝統的な祭りが行われる。",
    "fr": "C'est uniquement à Okinawa que se tient cette fête traditionnelle.",
    "o": [
     "べきだ",
     "でのみ",
     "きる",
     "にともなって"
    ],
    "a": 1,
    "e": "〜でのみ : « uniquement à/dans/par » (のみ combiné à une particule de lie."
   },
   {
    "t": "fill",
    "q": "申し込みはオンライン＿＿＿受け付けます。",
    "fr": "Les inscriptions ne sont acceptées qu'en ligne.",
    "o": [
     "でのみ",
     "かける",
     "ものがある",
     "一方だ"
    ],
    "a": 0,
    "e": "〜でのみ : « uniquement à/dans/par » (のみ combiné à une particule de lie."
   },
   {
    "t": "meaning",
    "q": "「沖縄でのみ、その伝統的な祭りが行われる。」— que signifie 〜でのみ ?",
    "o": [
     "« uniquement à/dans/par » (のみ combiné à une particule de lie",
     "« même pour X », « même si c'est X »",
     "« dans », « au sein de », « en matière de »",
     "« à l'occasion de », « au moment de (faire quelque chose d'i"
    ],
    "a": 0,
    "e": "〜でのみ = « uniquement à/dans/par » (のみ combiné à une particule de lie."
   },
   {
    "t": "meaning",
    "q": "「この薬は薬局にのみ置いてある。」— que signifie 〜でのみ ?",
    "o": [
     "« uniquement à/dans/par » (のみ combiné à une particule de lie",
     "« on devrait », « il faut (moralement) » / « on ne devrait p",
     "« bien sûr… mais aussi », « non seulement… (cela va de soi) ",
     "« pour un… (étonnamment) », « compte tenu de »"
    ],
    "a": 0,
    "e": "〜でのみ = « uniquement à/dans/par » (のみ combiné à une particule de lie."
   },
   {
    "t": "meaning",
    "q": "「申し込みはオンラインでのみ受け付けます。」— que signifie 〜でのみ ?",
    "o": [
     "Ajoute か à une phrase pour adoucir, exprimer une incertitude",
     "« toutefois », « à condition que », « sauf que »",
     "« uniquement à/dans/par » (のみ combiné à une particule de lie",
     "« bien sûr… mais aussi », « non seulement… (cela va de soi) "
    ],
    "a": 2,
    "e": "〜でのみ = « uniquement à/dans/par » (のみ combiné à une particule de lie."
   },
   {
    "t": "usage",
    "q": "« « uniquement à/dans/par » (のみ combiné à une particule de lie » se dit en japonais :",
    "o": [
     "こそ",
     "すなわち",
     "でのみ",
     "一方で"
    ],
    "a": 2,
    "e": "→ 〜でのみ."
   },
   {
    "t": "nuance",
    "q": "Quel est le sens correct de 〜でのみ ?",
    "o": [
     "« il paraît que », « on dit que… (et donc) »",
     "« cela dit », « seulement », « toutefois »",
     "« tant bien que mal », « d'une manière ou d'une autre », « r",
     "« uniquement à/dans/par » (のみ combiné à une particule de lie"
    ],
    "a": 3,
    "e": "でのみ = « seulement à/par (lieu, moyen) » ; にのみ = « seulement à/dans (lieu, cible) »."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« uniquement à/dans/par » (のみ combiné à une particule de lie) ? [7]",
    "o": [
     "一方だ",
     "要するに",
     "でのみ",
     "て以来"
    ],
    "a": 2,
    "e": "→ 〜でのみ."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« uniquement à/dans/par » (のみ combiné à une particule de lie) ? [8]",
    "o": [
     "と同時に",
     "を問わず",
     "でのみ",
     "かのように"
    ],
    "a": 2,
    "e": "→ 〜でのみ."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« uniquement à/dans/par » (のみ combiné à une particule de lie) ? [9]",
    "o": [
     "ただし",
     "でのみ",
     "一方で",
     "というものは"
    ],
    "a": 1,
    "e": "→ 〜でのみ."
   }
  ]
 },
 {
  "id": "c040",
  "g": "～こそ",
  "m": "« justement », « c'est précisément… qui ». Met fortement en relief un élément : « c'est bien cela, pas autre chose ».",
  "f": "【名詞】＋ こそ　／　【動詞て形】＋ こそ",
  "c": "express",
  "lv": 2,
  "rel": [],
  "note": "Souligne avec insistance : 「今こそ」「あなたこそ」「努力してこそ」.  〜てこそ = « ce n'est qu'en faisant X que… » (condition indispensable) : 「努力してこそ成功する」.  Souvent en réponse : 「こちらこそ」.",
  "ex": [
   {
    "jp": "持続可能な開発をしてこそ、私たちの地球を守れる。",
    "fr": "Ce n'est qu'en pratiquant un développement durable que nous pourrons protéger la Terre."
   },
   {
    "jp": "彼は困難に立ち向かう。それこそ本当のリーダーだ。",
    "fr": "Il affronte les difficultés. C'est ça, justement, un vrai leader."
   },
   {
    "jp": "今こそ、行動するときだ。",
    "fr": "C'est maintenant, précisément, qu'il faut agir."
   }
  ],
  "qs": [
   {
    "t": "fill",
    "q": "持続可能な開発をして＿＿＿、私たちの地球を守れる。",
    "fr": "Ce n'est qu'en pratiquant un développement durable que nous pourrons protéger la Terre.",
    "o": [
     "のか",
     "上で",
     "によって",
     "こそ"
    ],
    "a": 3,
    "e": "〜こそ : « justement », « c'est précisément… qui »."
   },
   {
    "t": "fill",
    "q": "彼は困難に立ち向かう。それ＿＿＿本当のリーダーだ。",
    "fr": "Il affronte les difficultés. C'est ça, justement, un vrai leader.",
    "o": [
     "かと思う",
     "こそ",
     "それでも",
     "きる"
    ],
    "a": 1,
    "e": "〜こそ : « justement », « c'est précisément… qui »."
   },
   {
    "t": "fill",
    "q": "今＿＿＿、行動するときだ。",
    "fr": "C'est maintenant, précisément, qu'il faut agir.",
    "o": [
     "それでも",
     "ないではいられない",
     "こそ",
     "上で"
    ],
    "a": 2,
    "e": "〜こそ : « justement », « c'est précisément… qui »."
   },
   {
    "t": "meaning",
    "q": "「持続可能な開発をしてこそ、私たちの地球を守れる。」— que signifie 〜こそ ?",
    "o": [
     "« ainsi que », « et » (liaison formelle)",
     "« à travers », « par l'intermédiaire de », « tout au long de",
     "« justement », « c'est précisément… qui »",
     "« depuis que… (et jusqu'à maintenant) »"
    ],
    "a": 2,
    "e": "〜こそ = « justement », « c'est précisément… qui »."
   },
   {
    "t": "meaning",
    "q": "「彼は困難に立ち向かう。それこそ本当のリーダーだ。」— que signifie 〜こそ ?",
    "o": [
     "« justement », « c'est précisément… qui »",
     "« commencer à (sans finir) », « être à moitié… »",
     "« à sa manière », « selon ses propres moyens »",
     "« seulement », « uniquement » (équivalent formel de だけ)"
    ],
    "a": 0,
    "e": "〜こそ = « justement », « c'est précisément… qui »."
   },
   {
    "t": "meaning",
    "q": "「今こそ、行動するときだ。」— que signifie 〜こそ ?",
    "o": [
     "« en parlant de », « à propos de », « quand on évoque X (ce ",
     "« par », « selon », « à cause de », « grâce à »",
     "« ainsi que », « et » (liaison formelle)",
     "« justement », « c'est précisément… qui »"
    ],
    "a": 3,
    "e": "〜こそ = « justement », « c'est précisément… qui »."
   },
   {
    "t": "usage",
    "q": "« « justement », « c'est précisément… qui » » se dit en japonais :",
    "o": [
     "こそ",
     "ことだ",
     "はもちろん",
     "きれない"
    ],
    "a": 0,
    "e": "→ 〜こそ."
   },
   {
    "t": "nuance",
    "q": "Quel est le sens correct de 〜こそ ?",
    "o": [
     "« tels que », « comme par exemple »",
     "« justement », « c'est précisément… qui »",
     "« insupportablement », « tellement… que je n'en peux plus »",
     "« peut-être à cause de », « sans doute parce que »"
    ],
    "a": 1,
    "e": "Souligne avec insistance : 「今こそ」「あなたこそ」「努力してこそ」."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« justement », « c'est précisément… qui ») ? [8]",
    "o": [
     "て以来",
     "つつある",
     "こそ",
     "くらい"
    ],
    "a": 2,
    "e": "→ 〜こそ."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« justement », « c'est précisément… qui ») ? [9]",
    "o": [
     "に限って",
     "を問わず",
     "こそ",
     "をはじめ"
    ],
    "a": 2,
    "e": "→ 〜こそ."
   }
  ]
 },
 {
  "id": "c041",
  "g": "～に限る（にかぎる）",
  "m": "« rien ne vaut », « le mieux c'est… ». Exprime une préférence forte : X est ce qu'il y a de mieux.",
  "f": "【名詞】／【動詞辞書形・ない形】＋ に限る",
  "c": "express",
  "lv": 2,
  "rel": [],
  "note": "Opinion subjective : « il n'y a rien de tel que X ».  Souvent pour des conseils/goûts : 「疲れた時は温泉に限る」.  Aussi avec un verbe : 「無理をしないに限る」.",
  "ex": [
   {
    "jp": "疲れた時は、温泉に限る。",
    "fr": "Quand on est fatigué, rien ne vaut une source thermale."
   },
   {
    "jp": "健康を考えるなら、自然食品に限る。",
    "fr": "Si on pense à sa santé, rien ne vaut les aliments naturels."
   },
   {
    "jp": "夏は冷たいビールに限るね。",
    "fr": "En été, rien ne vaut une bière fraîche."
   }
  ],
  "qs": [
   {
    "t": "fill",
    "q": "疲れた時は、温泉＿＿＿。",
    "fr": "Quand on est fatigué, rien ne vaut une source thermale.",
    "o": [
     "やらやら",
     "をはじめ",
     "ばかりでなく",
     "に限る"
    ],
    "a": 3,
    "e": "〜に限る : « rien ne vaut », « le mieux c'est… »."
   },
   {
    "t": "fill",
    "q": "健康を考えるなら、自然食品＿＿＿。",
    "fr": "Si on pense à sa santé, rien ne vaut les aliments naturels.",
    "o": [
     "一方だ",
     "てしかたがない",
     "に限る",
     "と言えば"
    ],
    "a": 2,
    "e": "〜に限る : « rien ne vaut », « le mieux c'est… »."
   },
   {
    "t": "fill",
    "q": "夏は冷たいビール＿＿＿ね。",
    "fr": "En été, rien ne vaut une bière fraîche.",
    "o": [
     "上で",
     "で済む",
     "かのように",
     "に限る"
    ],
    "a": 3,
    "e": "〜に限る : « rien ne vaut », « le mieux c'est… »."
   },
   {
    "t": "meaning",
    "q": "「疲れた時は、温泉に限る。」— que signifie 〜に限る ?",
    "o": [
     "« sans distinction de », « indépendamment de »",
     "« rien ne vaut », « le mieux c'est… »",
     "« à travers », « par l'intermédiaire de », « tout au long de",
     "« en somme », « bref », « pour résumer »"
    ],
    "a": 1,
    "e": "〜に限る = « rien ne vaut », « le mieux c'est… »."
   },
   {
    "t": "meaning",
    "q": "「健康を考えるなら、自然食品に限る。」— que signifie 〜に限る ?",
    "o": [
     "« on devrait », « il faut (moralement) » / « on ne devrait p",
     "« peut-être à cause de », « sans doute parce que »",
     "« rien ne vaut », « le mieux c'est… »",
     "« par (unité) », « pour chaque »"
    ],
    "a": 2,
    "e": "〜に限る = « rien ne vaut », « le mieux c'est… »."
   },
   {
    "t": "meaning",
    "q": "「夏は冷たいビールに限るね。」— que signifie 〜に限る ?",
    "o": [
     "« en commençant par », « à partir de (qui a marqué le début ",
     "« c'est pourquoi », « alors (j'ai décidé de) »",
     "« rien ne vaut », « le mieux c'est… »",
     "« uniquement à/dans/par » (のみ combiné à une particule de lie"
    ],
    "a": 2,
    "e": "〜に限る = « rien ne vaut », « le mieux c'est… »."
   },
   {
    "t": "usage",
    "q": "« « rien ne vaut », « le mieux c'est… » » se dit en japonais :",
    "o": [
     "に限る",
     "によって",
     "ではないか",
     "をはじめ"
    ],
    "a": 0,
    "e": "→ 〜に限る."
   },
   {
    "t": "nuance",
    "q": "Quel est le sens correct de 〜に限る ?",
    "o": [
     "« peut-être à cause de », « sans doute parce que »",
     "« seulement », « uniquement » (équivalent formel de だけ)",
     "« rien ne vaut », « le mieux c'est… »",
     "« tant bien que mal », « d'une manière ou d'une autre », « r"
    ],
    "a": 2,
    "e": "Opinion subjective : « il n'y a rien de tel que X »."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« rien ne vaut », « le mieux c'est… ») ? [8]",
    "o": [
     "上で",
     "に限る",
     "なんてんだろう",
     "ばかりでなく"
    ],
    "a": 1,
    "e": "→ 〜に限る."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« rien ne vaut », « le mieux c'est… ») ? [9]",
    "o": [
     "において",
     "のか",
     "せいか",
     "に限る"
    ],
    "a": 3,
    "e": "→ 〜に限る."
   }
  ]
 },
 {
  "id": "c042",
  "g": "～に限り（にかぎり）",
  "m": "« uniquement (dans le cas de) », « exclusivement pour ». Restreint une mesure à un cas/une personne précis.",
  "f": "【名詞】＋ に限り、〜",
  "c": "particle",
  "lv": 1,
  "rel": [],
  "note": "Limite une condition spéciale (souvent un avantage) : 「学生に限り半額」.  Registre formel/écrit ; annonces, conditions, offres.  ≠ に限る (préférence) : に限り = restriction « seulement pour ».",
  "ex": [
   {
    "jp": "明日に限り、朝9時から営業いたします。",
    "fr": "Demain seulement, nous ouvrons à partir de 9 h."
   },
   {
    "jp": "学生に限り、半額で入場できます。",
    "fr": "Pour les étudiants uniquement, l'entrée est à moitié prix."
   },
   {
    "jp": "学生証を持っている方に限り、入館を許可しています。",
    "fr": "Seules les personnes munies de leur carte d'étudiant sont admises."
   }
  ],
  "qs": [
   {
    "t": "fill",
    "q": "明日＿＿＿、朝9時から営業いたします。",
    "fr": "Demain seulement, nous ouvrons à partir de 9 h.",
    "o": [
     "に限り",
     "をめぐって",
     "ものがある",
     "上で"
    ],
    "a": 0,
    "e": "〜に限り : « uniquement (dans le cas de) », « exclusivement pour »."
   },
   {
    "t": "fill",
    "q": "学生＿＿＿、半額で入場できます。",
    "fr": "Pour les étudiants uniquement, l'entrée est à moitié prix.",
    "o": [
     "に限り",
     "と言えば",
     "とか",
     "にすれば"
    ],
    "a": 0,
    "e": "〜に限り : « uniquement (dans le cas de) », « exclusivement pour »."
   },
   {
    "t": "fill",
    "q": "学生証を持っている方＿＿＿、入館を許可しています。",
    "fr": "Seules les personnes munies de leur carte d'étudiant sont admises.",
    "o": [
     "に限り",
     "すなわち",
     "て以来",
     "かと思う"
    ],
    "a": 0,
    "e": "〜に限り : « uniquement (dans le cas de) », « exclusivement pour »."
   },
   {
    "t": "meaning",
    "q": "「明日に限り、朝9時から営業いたします。」— que signifie 〜に限り ?",
    "o": [
     "« est-ce parce que…? », « sans doute parce que… »",
     "« uniquement (dans le cas de) », « exclusivement pour »",
     "« seulement », « depuis que… (rien ensuite) », « rester à »",
     "« en commençant par », « à partir de (qui a marqué le début "
    ],
    "a": 1,
    "e": "〜に限り = « uniquement (dans le cas de) », « exclusivement pour »."
   },
   {
    "t": "meaning",
    "q": "「学生に限り、半額で入場できます。」— que signifie 〜に限り ?",
    "o": [
     "« ne pas pouvoir s'empêcher de »",
     "« comme si », « comme s'il s'agissait de »",
     "« uniquement (dans le cas de) », « exclusivement pour »",
     "« bien sûr… mais aussi », « non seulement… (cela va de soi) "
    ],
    "a": 2,
    "e": "〜に限り = « uniquement (dans le cas de) », « exclusivement pour »."
   },
   {
    "t": "meaning",
    "q": "「学生証を持っている方に限り、入館を許可しています。」— que signifie 〜に限り ?",
    "o": [
     "« et si nous…? », « faisons… ! »",
     "« uniquement (dans le cas de) », « exclusivement pour »",
     "« ce qu'on appelle… (c'est) », « X, c'est… »",
     "« sans distinction de », « indépendamment de »"
    ],
    "a": 1,
    "e": "〜に限り = « uniquement (dans le cas de) », « exclusivement pour »."
   },
   {
    "t": "usage",
    "q": "« « uniquement (dans le cas de) », « exclusivement pour » » se dit en japonais :",
    "o": [
     "に限り",
     "を皮切りに",
     "に限って",
     "といった"
    ],
    "a": 0,
    "e": "→ 〜に限り."
   },
   {
    "t": "nuance",
    "q": "Quel est le sens correct de 〜に限り ?",
    "o": [
     "« lorsqu'on fait X », « dans le cadre / pour les besoins de ",
     "« uniquement (dans le cas de) », « exclusivement pour »",
     "« certes… mais », « c'est vrai que X, seulement… »",
     "« on devrait », « il faut (moralement) » / « on ne devrait p"
    ],
    "a": 1,
    "e": "Limite une condition spéciale (souvent un avantage) : 「学生に限り半額」."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« uniquement (dans le cas de) », « exclusivement pour ») ? [8]",
    "o": [
     "かのように",
     "に限り",
     "ではないか",
     "のかと思った"
    ],
    "a": 1,
    "e": "→ 〜に限り."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« uniquement (dans le cas de) », « exclusivement pour ») ? [9]",
    "o": [
     "あまりに",
     "かのように",
     "をはじめ",
     "に限り"
    ],
    "a": 3,
    "e": "→ 〜に限り."
   }
  ]
 },
 {
  "id": "c043",
  "g": "～に限って（にかぎって）",
  "m": "« justement quand… (par malchance) » / « (lui) de tous… ne ferait jamais… ». Souligne une exception remarquable, souvent ironique.",
  "f": "【名詞】＋ に限って、〜",
  "c": "express",
  "lv": 2,
  "rel": [],
  "note": "Sens 1 — malchance : 「急いでいる時に限って電車が遅れる」(c'est justement quand… que le pire arrive).  Sens 2 — confiance : 「彼に限って、そんなことはしない」(lui, de tous, ne ferait jamais ça).  Nuance émotionnelle forte (agacement ou confiance).",
  "ex": [
   {
    "jp": "大事な会議の時に限って、電車が遅れた。",
    "fr": "C'est justement le jour de la réunion importante que le train a eu du retard."
   },
   {
    "jp": "彼に限って、うそをつくことはない。",
    "fr": "Lui, de tous, ne mentirait jamais."
   },
   {
    "jp": "ピクニックの日に限って、雨が降るなんて…。",
    "fr": "Qu'il pleuve justement le jour du pique-nique…"
   }
  ],
  "qs": [
   {
    "t": "fill",
    "q": "大事な会議の時＿＿＿、電車が遅れた。",
    "fr": "C'est justement le jour de la réunion importante que le train a eu du retard.",
    "o": [
     "と言えば",
     "のかと思った",
     "に限って",
     "きる"
    ],
    "a": 2,
    "e": "〜に限って : « justement quand… (par malchance) » / « (lui) de tous… ne f."
   },
   {
    "t": "fill",
    "q": "彼＿＿＿、うそをつくことはない。",
    "fr": "Lui, de tous, ne mentirait jamais.",
    "o": [
     "にともなって",
     "やらやら",
     "に限って",
     "だらけ"
    ],
    "a": 2,
    "e": "〜に限って : « justement quand… (par malchance) » / « (lui) de tous… ne f."
   },
   {
    "t": "fill",
    "q": "ピクニックの日＿＿＿、雨が降るなんて…。",
    "fr": "Qu'il pleuve justement le jour du pique-nique…",
    "o": [
     "をきっかけに",
     "やらやら",
     "に限って",
     "にしては"
    ],
    "a": 2,
    "e": "〜に限って : « justement quand… (par malchance) » / « (lui) de tous… ne f."
   },
   {
    "t": "meaning",
    "q": "「大事な会議の時に限って、電車が遅れた。」— que signifie 〜に限って ?",
    "o": [
     "« par (unité) », « pour chaque »",
     "« seulement », « depuis que… (rien ensuite) », « rester à »",
     "« à l'occasion de », « au moment de (faire quelque chose d'i",
     "« justement quand… (par malchance) » / « (lui) de tous… ne f"
    ],
    "a": 3,
    "e": "〜に限って = « justement quand… (par malchance) » / « (lui) de tous… ne f."
   },
   {
    "t": "meaning",
    "q": "「彼に限って、うそをつくことはない。」— que signifie 〜に限って ?",
    "o": [
     "« tant bien que mal », « d'une manière ou d'une autre », « r",
     "« à la suite de », « l'occasion qui a déclenché… »",
     "« justement quand… (par malchance) » / « (lui) de tous… ne f",
     "« certes… mais », « c'est vrai que X, seulement… »"
    ],
    "a": 2,
    "e": "〜に限って = « justement quand… (par malchance) » / « (lui) de tous… ne f."
   },
   {
    "t": "meaning",
    "q": "「ピクニックの日に限って、雨が降るなんて…。」— que signifie 〜に限って ?",
    "o": [
     "« justement quand… (par malchance) » / « (lui) de tous… ne f",
     "« du point de vue de », « pour X (si l'on se met à sa place)",
     "« par (unité) », « pour chaque »",
     "« seulement », « depuis que… (rien ensuite) », « rester à »"
    ],
    "a": 0,
    "e": "〜に限って = « justement quand… (par malchance) » / « (lui) de tous… ne f."
   },
   {
    "t": "usage",
    "q": "« « justement quand… (par malchance) » / « (lui) de tous… ne f » se dit en japonais :",
    "o": [
     "ではないか",
     "とともに",
     "に限って",
     "あまり"
    ],
    "a": 2,
    "e": "→ 〜に限って."
   },
   {
    "t": "nuance",
    "q": "Quel est le sens correct de 〜に限って ?",
    "o": [
     "« justement quand… (par malchance) » / « (lui) de tous… ne f",
     "« tels que », « comme par exemple »",
     "« non seulement… mais aussi (en plus) »",
     "« peut-être à cause de », « sans doute parce que »"
    ],
    "a": 0,
    "e": "Sens 1 — malchance : 「急いでいる時に限って電車が遅れる」(c'est justement quand… que le pire arrive)."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« justement quand… (par malchance) » / « (lui) de tous… ne f) ? [8]",
    "o": [
     "くらい",
     "てしかたがない",
     "ことはない",
     "に限って"
    ],
    "a": 3,
    "e": "→ 〜に限って."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« justement quand… (par malchance) » / « (lui) de tous… ne f) ? [9]",
    "o": [
     "かのように",
     "なんてんだろう",
     "きる",
     "に限って"
    ],
    "a": 3,
    "e": "→ 〜に限って."
   }
  ]
 },
 {
  "id": "c044",
  "g": "～に限らず（にかぎらず）",
  "m": "« non seulement… (mais aussi) », « sans se limiter à ». Élargit au-delà d'un cas restreint.",
  "f": "【名詞】＋ に限らず、〜（も）",
  "c": "particle",
  "lv": 1,
  "rel": [],
  "note": "Étend une affirmation au-delà de l'élément cité : « pas seulement X, mais aussi… ».  Souvent suivi de も : 「学生に限らず、教師も…」.  Proche de だけでなく mais に限らず insiste sur l'absence de limite.",
  "ex": [
   {
    "jp": "この問題は学生に限らず、教師も関心を持つべきだ。",
    "fr": "Ce problème ne concerne pas que les étudiants : les enseignants aussi devraient s'y intéresser."
   },
   {
    "jp": "環境問題は日本に限らず、世界の課題だ。",
    "fr": "Les questions environnementales ne se limitent pas au Japon : c'est un enjeu mondial."
   },
   {
    "jp": "このゲームは子供に限らず、大人も楽しめる。",
    "fr": "Ce jeu n'est pas réservé aux enfants : les adultes aussi peuvent s'amuser."
   }
  ],
  "qs": [
   {
    "t": "fill",
    "q": "この問題は学生＿＿＿、教師も関心を持つべきだ。",
    "fr": "Ce problème ne concerne pas que les étudiants : les enseignants aussi devraient s'y intéresser.",
    "o": [
     "に限らず",
     "といった",
     "ばかりでなく",
     "のかと思った"
    ],
    "a": 0,
    "e": "〜に限らず : « non seulement… (mais aussi) », « sans se limiter à »."
   },
   {
    "t": "fill",
    "q": "環境問題は日本＿＿＿、世界の課題だ。",
    "fr": "Les questions environnementales ne se limitent pas au Japon : c'est un enjeu mondial.",
    "o": [
     "に限る",
     "と同時に",
     "に限らず",
     "にしても"
    ],
    "a": 2,
    "e": "〜に限らず : « non seulement… (mais aussi) », « sans se limiter à »."
   },
   {
    "t": "fill",
    "q": "このゲームは子供＿＿＿、大人も楽しめる。",
    "fr": "Ce jeu n'est pas réservé aux enfants : les adultes aussi peuvent s'amuser.",
    "o": [
     "に限らず",
     "にしても",
     "なりに",
     "それでも"
    ],
    "a": 0,
    "e": "〜に限らず : « non seulement… (mais aussi) », « sans se limiter à »."
   },
   {
    "t": "meaning",
    "q": "「この問題は学生に限らず、教師も関心を持つべきだ。」— que signifie 〜に限らず ?",
    "o": [
     "« depuis que… (et jusqu'à maintenant) »",
     "« il y a quelque chose de… (qui touche) », « on ressent un c",
     "« non seulement… (mais aussi) », « sans se limiter à »",
     "« c'est-à-dire », « à savoir », « autrement dit »"
    ],
    "a": 2,
    "e": "〜に限らず = « non seulement… (mais aussi) », « sans se limiter à »."
   },
   {
    "t": "meaning",
    "q": "「環境問題は日本に限らず、世界の課題だ。」— que signifie 〜に限らず ?",
    "o": [
     "« à la suite de », « l'occasion qui a déclenché… »",
     "« ne pas pouvoir s'empêcher de »",
     "« couvert de », « plein de » (souvent quelque chose de négat",
     "« non seulement… (mais aussi) », « sans se limiter à »"
    ],
    "a": 3,
    "e": "〜に限らず = « non seulement… (mais aussi) », « sans se limiter à »."
   },
   {
    "t": "meaning",
    "q": "「このゲームは子供に限らず、大人も楽しめる。」— que signifie 〜に限らず ?",
    "o": [
     "« faire complètement », « jusqu'au bout », « à fond »",
     "« on devrait », « il faut (moralement) » / « on ne devrait p",
     "« à la suite de », « l'occasion qui a déclenché… »",
     "« non seulement… (mais aussi) », « sans se limiter à »"
    ],
    "a": 3,
    "e": "〜に限らず = « non seulement… (mais aussi) », « sans se limiter à »."
   },
   {
    "t": "usage",
    "q": "« « non seulement… (mais aussi) », « sans se limiter à » » se dit en japonais :",
    "o": [
     "上で",
     "に限らず",
     "やらやら",
     "なりに"
    ],
    "a": 1,
    "e": "→ 〜に限らず."
   },
   {
    "t": "nuance",
    "q": "Quel est le sens correct de 〜に限らず ?",
    "o": [
     "« non seulement… (mais aussi) », « sans se limiter à »",
     "« autant que », « tant que »",
     "« en même temps que », « dès que », « à la fois »",
     "« uniquement (dans le cas de) », « exclusivement pour »"
    ],
    "a": 0,
    "e": "Étend une affirmation au-delà de l'élément cité : « pas seulement X, mais aussi… »."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« non seulement… (mais aussi) », « sans se limiter à ») ? [8]",
    "o": [
     "あまり",
     "によって",
     "に限り",
     "に限らず"
    ],
    "a": 3,
    "e": "→ 〜に限らず."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« non seulement… (mais aussi) », « sans se limiter à ») ? [9]",
    "o": [
     "やらやら",
     "に限らず",
     "せいか",
     "すなわち"
    ],
    "a": 1,
    "e": "→ 〜に限らず."
   }
  ]
 },
 {
  "id": "c045",
  "g": "～は問わない ／ ～を問わない",
  "m": "« peu importe », « X n'est pas requis / ne compte pas ». Indique qu'un critère n'entre pas en ligne de compte.",
  "f": "【名詞】＋ は／を ＋ 問わない",
  "c": "express",
  "lv": 2,
  "rel": [],
  "note": "Souvent dans les offres d'emploi/annonces : 「経験は問わない」(expérience non exigée).  を問わない met l'accent sur l'objet ; は問わない sur le thème.  Souvent avec 有無（うむ）: 「経験の有無を問わない」.",
  "ex": [
   {
    "jp": "この仕事は経験を問いません。",
    "fr": "Ce travail ne requiert pas d'expérience."
   },
   {
    "jp": "このコンテストは国籍を問いません。",
    "fr": "Ce concours est ouvert quelle que soit la nationalité."
   },
   {
    "jp": "年齢は問わないので、誰でも応募できる。",
    "fr": "L'âge n'entre pas en compte, donc tout le monde peut postuler."
   }
  ],
  "qs": [
   {
    "t": "fill",
    "q": "年齢＿＿＿ので、誰でも応募できる。",
    "fr": "L'âge n'entre pas en compte, donc tout le monde peut postuler.",
    "o": [
     "にともなって",
     "は問わない",
     "結局",
     "とともに"
    ],
    "a": 1,
    "e": "〜は問わない : « peu importe », « X n'est pas requis / ne compte pas »."
   },
   {
    "t": "meaning",
    "q": "「この仕事は経験を問いません。」— que signifie 〜は問わない ?",
    "o": [
     "« ne faire qu'augmenter/diminuer », « aller toujours plus da",
     "« seulement », « depuis que… (rien ensuite) », « rester à »",
     "« en parlant de », « à propos de », « quand on évoque X (ce ",
     "« peu importe », « X n'est pas requis / ne compte pas »"
    ],
    "a": 3,
    "e": "〜は問わない = « peu importe », « X n'est pas requis / ne compte pas »."
   },
   {
    "t": "meaning",
    "q": "「このコンテストは国籍を問いません。」— que signifie 〜は問わない ?",
    "o": [
     "« certes… mais », « c'est vrai que X, seulement… »",
     "« toutefois », « à condition que », « sauf que »",
     "« ce qu'on appelle… (c'est) », « X, c'est… »",
     "« peu importe », « X n'est pas requis / ne compte pas »"
    ],
    "a": 3,
    "e": "〜は問わない = « peu importe », « X n'est pas requis / ne compte pas »."
   },
   {
    "t": "meaning",
    "q": "「年齢は問わないので、誰でも応募できる。」— que signifie 〜は問わない ?",
    "o": [
     "« tant bien que mal », « d'une manière ou d'une autre », « r",
     "« cela dit », « seulement », « toutefois »",
     "« d'un côté… de l'autre », « tandis que »",
     "« peu importe », « X n'est pas requis / ne compte pas »"
    ],
    "a": 3,
    "e": "〜は問わない = « peu importe », « X n'est pas requis / ne compte pas »."
   },
   {
    "t": "usage",
    "q": "« « peu importe », « X n'est pas requis / ne compte pas » » se dit en japonais :",
    "o": [
     "に限る",
     "一方だ",
     "せいか",
     "は問わない"
    ],
    "a": 3,
    "e": "→ 〜は問わない."
   },
   {
    "t": "nuance",
    "q": "Quel est le sens correct de 〜は問わない ?",
    "o": [
     "« j'ai cru que… (alors que ce n'était pas le cas) »",
     "« peu importe », « X n'est pas requis / ne compte pas »",
     "« uniquement à/dans/par » (のみ combiné à une particule de lie",
     "« il n'y a pas besoin de », « ce n'est pas la peine de »"
    ],
    "a": 1,
    "e": "Souvent dans les offres d'emploi/annonces : 「経験は問わない」(expérience non exigée)."
   },
   {
    "t": "usage",
    "q": "Complétez avec la forme correcte (sens : « peu importe », « X n'est pas requis / ne compte pas ») :",
    "o": [
     "ばかりでなく",
     "は問わない",
     "によって",
     "あまり"
    ],
    "a": 1,
    "e": "→ 〜は問わない."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« peu importe », « X n'est pas requis / ne compte pas ») ? [7]",
    "o": [
     "にしても",
     "やらやら",
     "結局",
     "は問わない"
    ],
    "a": 3,
    "e": "→ 〜は問わない."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« peu importe », « X n'est pas requis / ne compte pas ») ? [8]",
    "o": [
     "ばかりでなく",
     "は問わない",
     "やらやら",
     "くらい"
    ],
    "a": 1,
    "e": "→ 〜は問わない."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« peu importe », « X n'est pas requis / ne compte pas ») ? [9]",
    "o": [
     "をめぐって",
     "は問わない",
     "のみ",
     "当たり"
    ],
    "a": 1,
    "e": "→ 〜は問わない."
   }
  ]
 },
 {
  "id": "c046",
  "g": "～を問わず（とわず）",
  "m": "« sans distinction de », « indépendamment de ». Forme adverbiale : quel que soit X, le reste s'applique.",
  "f": "【名詞】＋ を問わず、〜",
  "c": "express",
  "lv": 2,
  "rel": [],
  "note": "Forme en 〜ず (négation littéraire) ; modifie la suite : 「経験を問わず、募集する」.  Souvent avec des couples : 「昼夜（ちゅうや）を問わず」「男女を問わず」「内外を問わず」.  Registre formel/écrit.",
  "ex": [
   {
    "jp": "経験を問わず、意欲的な人材を求めています。",
    "fr": "Sans considération d'expérience, nous recherchons des personnes motivées."
   },
   {
    "jp": "彼の研究は国の内外を問わず、高く評価されている。",
    "fr": "Ses recherches sont saluées tant à l'intérieur qu'à l'extérieur du pays."
   },
   {
    "jp": "年齢や性別を問わず、誰でも参加できる。",
    "fr": "Sans distinction d'âge ni de sexe, tout le monde peut participer."
   }
  ],
  "qs": [
   {
    "t": "fill",
    "q": "経験＿＿＿、意欲的な人材を求めています。",
    "fr": "Sans considération d'expérience, nous recherchons des personnes motivées.",
    "o": [
     "のか",
     "にすれば",
     "を問わず",
     "というものは"
    ],
    "a": 2,
    "e": "〜を問わず : « sans distinction de », « indépendamment de »."
   },
   {
    "t": "fill",
    "q": "彼の研究は国の内外＿＿＿、高く評価されている。",
    "fr": "Ses recherches sont saluées tant à l'intérieur qu'à l'extérieur du pays.",
    "o": [
     "というものは",
     "を問わず",
     "ばかりでなく",
     "かと思う"
    ],
    "a": 1,
    "e": "〜を問わず : « sans distinction de », « indépendamment de »."
   },
   {
    "t": "fill",
    "q": "年齢や性別＿＿＿、誰でも参加できる。",
    "fr": "Sans distinction d'âge ni de sexe, tout le monde peut participer.",
    "o": [
     "そこで",
     "やらやら",
     "を問わず",
     "はもちろん"
    ],
    "a": 2,
    "e": "〜を問わず : « sans distinction de », « indépendamment de »."
   },
   {
    "t": "meaning",
    "q": "「経験を問わず、意欲的な人材を求めています。」— que signifie 〜を問わず ?",
    "o": [
     "« d'un côté… de l'autre », « tandis que »",
     "« sans distinction de », « indépendamment de »",
     "« en parlant de », « à propos de », « quand on évoque X (ce ",
     "« à l'occasion de », « au moment de (faire quelque chose d'i"
    ],
    "a": 1,
    "e": "〜を問わず = « sans distinction de », « indépendamment de »."
   },
   {
    "t": "meaning",
    "q": "「彼の研究は国の内外を問わず、高く評価されている。」— que signifie 〜を問わず ?",
    "o": [
     "« seulement », « uniquement » (équivalent formel de だけ)",
     "« justement », « c'est précisément… qui »",
     "« sans distinction de », « indépendamment de »",
     "« en même temps que », « dès que », « à la fois »"
    ],
    "a": 2,
    "e": "〜を問わず = « sans distinction de », « indépendamment de »."
   },
   {
    "t": "meaning",
    "q": "「年齢や性別を問わず、誰でも参加できる。」— que signifie 〜を問わず ?",
    "o": [
     "« ne pas pouvoir finir/faire complètement », « trop… pour »",
     "« en parlant de », « à propos de », « quand on évoque X (ce ",
     "« sans distinction de », « indépendamment de »",
     "« à sa manière », « selon ses propres moyens »"
    ],
    "a": 2,
    "e": "〜を問わず = « sans distinction de », « indépendamment de »."
   },
   {
    "t": "usage",
    "q": "« « sans distinction de », « indépendamment de » » se dit en japonais :",
    "o": [
     "一方だ",
     "かける",
     "において",
     "を問わず"
    ],
    "a": 3,
    "e": "→ 〜を問わず."
   },
   {
    "t": "nuance",
    "q": "Quel est le sens correct de 〜を問わず ?",
    "o": [
     "« même pour X », « même si c'est X »",
     "« ne pas pouvoir s'empêcher de »",
     "« sans distinction de », « indépendamment de »",
     "« à l'occasion de », « au moment de (faire quelque chose d'i"
    ],
    "a": 2,
    "e": "Forme en 〜ず (négation littéraire) ; modifie la suite : 「経験を問わず、募集する」."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« sans distinction de », « indépendamment de ») ? [8]",
    "o": [
     "ただし",
     "に限り",
     "だけ",
     "を問わず"
    ],
    "a": 3,
    "e": "→ 〜を問わず."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« sans distinction de », « indépendamment de ») ? [9]",
    "o": [
     "一方だ",
     "を問わず",
     "すなわち",
     "ただし"
    ],
    "a": 1,
    "e": "→ 〜を問わず."
   }
  ]
 },
 {
  "id": "c047",
  "g": "～一方だ（いっぽうだ）／ ～ばかりだ",
  "m": "« ne faire qu'augmenter/diminuer », « aller toujours plus dans un sens ». Tendance qui se poursuit dans une seule direction (souvent négative).",
  "f": "【動詞辞書形】＋ 一方だ ／ ばかりだ",
  "c": "time",
  "lv": 2,
  "rel": [],
  "note": "Évolution unidirectionnelle continue : 「増える一方だ」「悪くなるばかりだ」.  ばかりだ a souvent une nuance plus négative/pessimiste.  À distinguer de 〜一方で (« d'un côté… de l'autre »).",
  "ex": [
   {
    "jp": "世界の人口は増える一方だ。",
    "fr": "La population mondiale ne fait qu'augmenter."
   },
   {
    "jp": "物価は上がる一方で、給料は変わらない。",
    "fr": "Les prix ne cessent de monter, alors que les salaires stagnent."
   },
   {
    "jp": "彼の病気は悪くなるばかりだ。",
    "fr": "Sa maladie ne fait qu'empirer."
   }
  ],
  "qs": [
   {
    "t": "fill",
    "q": "世界の人口は増える＿＿＿。",
    "fr": "La population mondiale ne fait qu'augmenter.",
    "o": [
     "せいか",
     "結局",
     "やらやら",
     "一方だ"
    ],
    "a": 3,
    "e": "〜一方だ : « ne faire qu'augmenter/diminuer », « aller toujours plus da."
   },
   {
    "t": "meaning",
    "q": "「世界の人口は増える一方だ。」— que signifie 〜一方だ ?",
    "o": [
     "« il y a quelque chose de… (qui touche) », « on ressent un c",
     "« ne faire qu'augmenter/diminuer », « aller toujours plus da",
     "« tels que », « comme par exemple »",
     "« tant bien que mal », « d'une manière ou d'une autre », « r"
    ],
    "a": 1,
    "e": "〜一方だ = « ne faire qu'augmenter/diminuer », « aller toujours plus da."
   },
   {
    "t": "meaning",
    "q": "「物価は上がる一方で、給料は変わらない。」— que signifie 〜一方だ ?",
    "o": [
     "« d'un côté… de l'autre », « tandis que »",
     "« du point de vue de », « pour X (si l'on se met à sa place)",
     "« ne faire qu'augmenter/diminuer », « aller toujours plus da",
     "« à mesure que », « accompagné de », « du fait de »"
    ],
    "a": 2,
    "e": "〜一方だ = « ne faire qu'augmenter/diminuer », « aller toujours plus da."
   },
   {
    "t": "meaning",
    "q": "「彼の病気は悪くなるばかりだ。」— que signifie 〜一方だ ?",
    "o": [
     "ことだ = « il faut (conseil) » ou exclamation",
     "« à travers », « par l'intermédiaire de », « tout au long de",
     "« rien ne vaut », « le mieux c'est… »",
     "« ne faire qu'augmenter/diminuer », « aller toujours plus da"
    ],
    "a": 3,
    "e": "〜一方だ = « ne faire qu'augmenter/diminuer », « aller toujours plus da."
   },
   {
    "t": "usage",
    "q": "« « ne faire qu'augmenter/diminuer », « aller toujours plus da » se dit en japonais :",
    "o": [
     "なんとか",
     "かのように",
     "とは",
     "一方だ"
    ],
    "a": 3,
    "e": "→ 〜一方だ."
   },
   {
    "t": "nuance",
    "q": "Quel est le sens correct de 〜一方だ ?",
    "o": [
     "« comme si », « comme s'il s'agissait de »",
     "« ne faire qu'augmenter/diminuer », « aller toujours plus da",
     "« du point de vue de », « pour X (si l'on se met à sa place)",
     "« ainsi que », « et » (liaison formelle)"
    ],
    "a": 1,
    "e": "Évolution unidirectionnelle continue : 「増える一方だ」「悪くなるばかりだ」."
   },
   {
    "t": "usage",
    "q": "Complétez avec la forme correcte (sens : « ne faire qu'augmenter/diminuer », « aller toujours plus da) :",
    "o": [
     "あまり",
     "ことはない",
     "一方だ",
     "のみ"
    ],
    "a": 2,
    "e": "→ 〜一方だ."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« ne faire qu'augmenter/diminuer », « aller toujours plus da) ? [7]",
    "o": [
     "ないではいられない",
     "一方だ",
     "きり",
     "とは"
    ],
    "a": 1,
    "e": "→ 〜一方だ."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« ne faire qu'augmenter/diminuer », « aller toujours plus da) ? [8]",
    "o": [
     "なんてんだろう",
     "ただし",
     "一方だ",
     "のみ"
    ],
    "a": 2,
    "e": "→ 〜一方だ."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« ne faire qu'augmenter/diminuer », « aller toujours plus da) ? [9]",
    "o": [
     "に限る",
     "に限らず",
     "一方だ",
     "とか"
    ],
    "a": 2,
    "e": "→ 〜一方だ."
   }
  ]
 },
 {
  "id": "c048",
  "g": "～一方で（いっぽうで）",
  "m": "« d'un côté… de l'autre », « tandis que ». Met en contraste deux aspects coexistants.",
  "f": "【動詞・形容詞普通形】／【名詞である】＋ 一方で、〜",
  "c": "contrast",
  "lv": 2,
  "rel": [],
  "note": "Présente deux faces d'une même situation, deux tendances opposées qui coexistent.  ≠ 一方だ (tendance unique) : 一方で = contraste/balance.  Registre neutre à formel ; fréquent dans analyses.",
  "ex": [
   {
    "jp": "経済が発展する一方で、格差も広がっている。",
    "fr": "Tandis que l'économie se développe, les inégalités se creusent aussi."
   },
   {
    "jp": "彼は厳しい一方で、優しい面もある。",
    "fr": "Il est sévère d'un côté, mais a aussi un côté gentil."
   },
   {
    "jp": "便利になる一方で、失われるものもある。",
    "fr": "D'un côté la vie devient plus pratique, de l'autre on perd certaines choses."
   }
  ],
  "qs": [
   {
    "t": "fill",
    "q": "経済が発展する＿＿＿、格差も広がっている。",
    "fr": "Tandis que l'économie se développe, les inégalités se creusent aussi.",
    "o": [
     "のみ",
     "および",
     "にともなって",
     "一方で"
    ],
    "a": 3,
    "e": "〜一方で : « d'un côté… de l'autre », « tandis que »."
   },
   {
    "t": "fill",
    "q": "彼は厳しい＿＿＿、優しい面もある。",
    "fr": "Il est sévère d'un côté, mais a aussi un côté gentil.",
    "o": [
     "わけがない",
     "一方で",
     "なりに",
     "それでも"
    ],
    "a": 1,
    "e": "〜一方で : « d'un côté… de l'autre », « tandis que »."
   },
   {
    "t": "fill",
    "q": "便利になる＿＿＿、失われるものもある。",
    "fr": "D'un côté la vie devient plus pratique, de l'autre on perd certaines choses.",
    "o": [
     "きり",
     "一方で",
     "にともなって",
     "でのみ"
    ],
    "a": 1,
    "e": "〜一方で : « d'un côté… de l'autre », « tandis que »."
   },
   {
    "t": "meaning",
    "q": "「経済が発展する一方で、格差も広がっている。」— que signifie 〜一方で ?",
    "o": [
     "« comme si », « comme s'il s'agissait de »",
     "« cela dit », « seulement », « toutefois »",
     "« d'un côté… de l'autre », « tandis que »",
     "« sans distinction de », « indépendamment de »"
    ],
    "a": 2,
    "e": "〜一方で = « d'un côté… de l'autre », « tandis que »."
   },
   {
    "t": "meaning",
    "q": "「彼は厳しい一方で、優しい面もある。」— que signifie 〜一方で ?",
    "o": [
     "« insupportablement », « tellement… que je n'en peux plus »",
     "« ne pas pouvoir finir/faire complètement », « trop… pour »",
     "« en même temps que », « dès que », « à la fois »",
     "« d'un côté… de l'autre », « tandis que »"
    ],
    "a": 3,
    "e": "〜一方で = « d'un côté… de l'autre », « tandis que »."
   },
   {
    "t": "meaning",
    "q": "「便利になる一方で、失われるものもある。」— que signifie 〜一方で ?",
    "o": [
     "« à sa manière », « selon ses propres moyens »",
     "« lorsqu'on fait X », « dans le cadre / pour les besoins de ",
     "« on devrait », « il faut (moralement) » / « on ne devrait p",
     "« d'un côté… de l'autre », « tandis que »"
    ],
    "a": 3,
    "e": "〜一方で = « d'un côté… de l'autre », « tandis que »."
   },
   {
    "t": "usage",
    "q": "« « d'un côté… de l'autre », « tandis que » » se dit en japonais :",
    "o": [
     "一方で",
     "かのように",
     "に限って",
     "にともなって"
    ],
    "a": 0,
    "e": "→ 〜一方で."
   },
   {
    "t": "nuance",
    "q": "Quel est le sens correct de 〜一方で ?",
    "o": [
     "« d'un côté… de l'autre », « tandis que »",
     "« par », « selon », « à cause de », « grâce à »",
     "« il paraît que », « on dit que… (et donc) »",
     "« il n'y a pas besoin de », « ce n'est pas la peine de »"
    ],
    "a": 0,
    "e": "Présente deux faces d'une même situation, deux tendances opposées qui coexistent."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« d'un côté… de l'autre », « tandis que ») ? [8]",
    "o": [
     "と言えば",
     "ないではいられない",
     "に限る",
     "一方で"
    ],
    "a": 3,
    "e": "→ 〜一方で."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« d'un côté… de l'autre », « tandis que ») ? [9]",
    "o": [
     "のか",
     "そこで",
     "なりに",
     "一方で"
    ],
    "a": 3,
    "e": "→ 〜一方で."
   }
  ]
 },
 {
  "id": "c049",
  "g": "～ものがある ／ ～ものを感じる",
  "m": "« il y a quelque chose de… (qui touche) », « on ressent un certain… ». Exprime une impression diffuse mais réelle.",
  "f": "（何か／どこか）＋〔連体修飾〕＋ ものがある ／ ものを感じる",
  "c": "express",
  "lv": 2,
  "rel": [],
  "note": "Décrit une qualité/impression indéfinissable mais ressentie : 「人を動かすものがある」.  Souvent précédé de 何か／どこか : « quelque chose qui… ».  Registre soutenu/littéraire, exprime une émotion subtile.",
  "ex": [
   {
    "jp": "彼の演説には、何か人を動かすものがある。",
    "fr": "Dans son discours, il y a quelque chose qui touche les gens."
   },
   {
    "jp": "この曲を聞くと、何か懐かしいものがある。",
    "fr": "Quand j'écoute ce morceau, il y a quelque chose de nostalgique."
   },
   {
    "jp": "彼女の絵には、心を打つものを感じる。",
    "fr": "Dans ses tableaux, je ressens quelque chose qui frappe le cœur."
   }
  ],
  "qs": [
   {
    "t": "fill",
    "q": "彼の演説には、何か人を動かす＿＿＿。",
    "fr": "Dans son discours, il y a quelque chose qui touche les gens.",
    "o": [
     "および",
     "かける",
     "要するに",
     "ものがある"
    ],
    "a": 3,
    "e": "〜ものがある : « il y a quelque chose de… (qui touche) », « on ressent un c."
   },
   {
    "t": "fill",
    "q": "この曲を聞くと、何か懐かしい＿＿＿。",
    "fr": "Quand j'écoute ce morceau, il y a quelque chose de nostalgique.",
    "o": [
     "ものがある",
     "に限らず",
     "および",
     "のかと思った"
    ],
    "a": 0,
    "e": "〜ものがある : « il y a quelque chose de… (qui touche) », « on ressent un c."
   },
   {
    "t": "meaning",
    "q": "「彼の演説には、何か人を動かすものがある。」— que signifie 〜ものがある ?",
    "o": [
     "« uniquement (dans le cas de) », « exclusivement pour »",
     "« ce qu'on appelle X (par nature)… »",
     "« il y a quelque chose de… (qui touche) », « on ressent un c",
     "« en parlant de », « à propos de », « quand on évoque X (ce "
    ],
    "a": 2,
    "e": "〜ものがある = « il y a quelque chose de… (qui touche) », « on ressent un c."
   },
   {
    "t": "meaning",
    "q": "「この曲を聞くと、何か懐かしいものがある。」— que signifie 〜ものがある ?",
    "o": [
     "« on devrait », « il faut (moralement) » / « on ne devrait p",
     "« comme c'est… ! », « quel(le)… ! »",
     "« à la suite de », « l'occasion qui a déclenché… »",
     "« il y a quelque chose de… (qui touche) », « on ressent un c"
    ],
    "a": 3,
    "e": "〜ものがある = « il y a quelque chose de… (qui touche) », « on ressent un c."
   },
   {
    "t": "meaning",
    "q": "「彼女の絵には、心を打つものを感じる。」— que signifie 〜ものがある ?",
    "o": [
     "« il y a quelque chose de… (qui touche) », « on ressent un c",
     "« à mesure que », « accompagné de », « du fait de »",
     "« non seulement… mais aussi (en plus) »",
     "« j'ai cru que… (alors que ce n'était pas le cas) »"
    ],
    "a": 0,
    "e": "〜ものがある = « il y a quelque chose de… (qui touche) », « on ressent un c."
   },
   {
    "t": "usage",
    "q": "« « il y a quelque chose de… (qui touche) », « on ressent un c » se dit en japonais :",
    "o": [
     "ものがある",
     "べきだ",
     "をはじめ",
     "にしても"
    ],
    "a": 0,
    "e": "→ 〜ものがある."
   },
   {
    "t": "nuance",
    "q": "Quel est le sens correct de 〜ものがある ?",
    "o": [
     "« c'est pourquoi », « alors (j'ai décidé de) »",
     "« il y a quelque chose de… (qui touche) », « on ressent un c",
     "« on devrait », « il faut (moralement) » / « on ne devrait p",
     "« à l'occasion de », « au moment de (faire quelque chose d'i"
    ],
    "a": 1,
    "e": "Décrit une qualité/impression indéfinissable mais ressentie : 「人を動かすものがある」."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« il y a quelque chose de… (qui touche) », « on ressent un c) ? [7]",
    "o": [
     "一方だ",
     "ものがある",
     "にしては",
     "というものは"
    ],
    "a": 1,
    "e": "→ 〜ものがある."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« il y a quelque chose de… (qui touche) », « on ressent un c) ? [8]",
    "o": [
     "そこで",
     "でのみ",
     "ものがある",
     "きる"
    ],
    "a": 2,
    "e": "→ 〜ものがある."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« il y a quelque chose de… (qui touche) », « on ressent un c) ? [9]",
    "o": [
     "くらい",
     "きり",
     "ものがある",
     "をきっかけに"
    ],
    "a": 2,
    "e": "→ 〜ものがある."
   }
  ]
 },
 {
  "id": "c050",
  "g": "～わけがない",
  "m": "« il est impossible que », « il n'y a aucune chance que ». Nie catégoriquement une possibilité, par déduction logique.",
  "f": "【動詞・形容詞普通形】／【名詞である】＋ わけがない",
  "c": "modality",
  "lv": 1,
  "rel": [],
  "note": "Conclusion logique : « c'est inconcevable, ça ne peut pas être ».  ≠ はずがない (très proche) ; わけがない est un peu plus familier/catégorique.  Forme familière : わけない.",
  "ex": [
   {
    "jp": "彼がうそをつくわけがない。",
    "fr": "Il est impossible qu'il mente."
   },
   {
    "jp": "そんな高い物が買えるわけがない。",
    "fr": "Il n'y a aucune chance que je puisse m'acheter quelque chose d'aussi cher."
   },
   {
    "jp": "こんなに勉強したのだから、落ちるわけがない。",
    "fr": "J'ai tellement étudié qu'il est impossible que j'échoue."
   }
  ],
  "qs": [
   {
    "t": "fill",
    "q": "彼がうそをつく＿＿＿。",
    "fr": "Il est impossible qu'il mente.",
    "o": [
     "わけがない",
     "に限って",
     "だらけ",
     "つつある"
    ],
    "a": 0,
    "e": "〜わけがない : « il est impossible que », « il n'y a aucune chance que »."
   },
   {
    "t": "fill",
    "q": "そんな高い物が買える＿＿＿。",
    "fr": "Il n'y a aucune chance que je puisse m'acheter quelque chose d'aussi cher.",
    "o": [
     "というものは",
     "にしては",
     "て以来",
     "わけがない"
    ],
    "a": 3,
    "e": "〜わけがない : « il est impossible que », « il n'y a aucune chance que »."
   },
   {
    "t": "fill",
    "q": "こんなに勉強したのだから、落ちる＿＿＿。",
    "fr": "J'ai tellement étudié qu'il est impossible que j'échoue.",
    "o": [
     "それでも",
     "および",
     "わけがない",
     "とは"
    ],
    "a": 2,
    "e": "〜わけがない : « il est impossible que », « il n'y a aucune chance que »."
   },
   {
    "t": "meaning",
    "q": "「彼がうそをつくわけがない。」— que signifie 〜わけがない ?",
    "o": [
     "« il est impossible que », « il n'y a aucune chance que »",
     "« à la suite de », « l'occasion qui a déclenché… »",
     "« ce qu'on appelle… (c'est) », « X, c'est… »",
     "« juste parce que (si peu) », « pour si peu »"
    ],
    "a": 0,
    "e": "〜わけがない = « il est impossible que », « il n'y a aucune chance que »."
   },
   {
    "t": "meaning",
    "q": "「そんな高い物が買えるわけがない。」— que signifie 〜わけがない ?",
    "o": [
     "« au sujet de », « autour de »",
     "« il n'y a pas besoin de », « ce n'est pas la peine de »",
     "« il est impossible que », « il n'y a aucune chance que »",
     "« ne pas pouvoir finir/faire complètement », « trop… pour »"
    ],
    "a": 2,
    "e": "〜わけがない = « il est impossible que », « il n'y a aucune chance que »."
   },
   {
    "t": "meaning",
    "q": "「こんなに勉強したのだから、落ちるわけがない。」— que signifie 〜わけがない ?",
    "o": [
     "« il est impossible que », « il n'y a aucune chance que »",
     "« faire complètement », « jusqu'au bout », « à fond »",
     "« par (unité) », « pour chaque »",
     "« uniquement à/dans/par » (のみ combiné à une particule de lie"
    ],
    "a": 0,
    "e": "〜わけがない = « il est impossible que », « il n'y a aucune chance que »."
   },
   {
    "t": "usage",
    "q": "« « il est impossible que », « il n'y a aucune chance que » » se dit en japonais :",
    "o": [
     "をはじめ",
     "ただ",
     "ことはが",
     "わけがない"
    ],
    "a": 3,
    "e": "→ 〜わけがない."
   },
   {
    "t": "nuance",
    "q": "Quel est le sens correct de 〜わけがない ?",
    "o": [
     "« comme si », « comme s'il s'agissait de »",
     "« insupportablement », « tellement… que je n'en peux plus »",
     "« d'un côté… de l'autre », « tandis que »",
     "« il est impossible que », « il n'y a aucune chance que »"
    ],
    "a": 3,
    "e": "Conclusion logique : « c'est inconcevable, ça ne peut pas être »."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« il est impossible que », « il n'y a aucune chance que ») ? [8]",
    "o": [
     "せいか",
     "に限って",
     "ただし",
     "わけがない"
    ],
    "a": 3,
    "e": "→ 〜わけがない."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« il est impossible que », « il n'y a aucune chance que ») ? [9]",
    "o": [
     "をめぐって",
     "において",
     "くらい",
     "わけがない"
    ],
    "a": 3,
    "e": "→ 〜わけがない."
   }
  ]
 },
 {
  "id": "c051",
  "g": "～にともなって（に伴って）",
  "m": "« à mesure que », « accompagné de », « du fait de ». Un changement en entraîne un autre, simultanément.",
  "f": "【名詞】／【動詞辞書形＋の】＋ にともなって（／にともない／にともなう＋名詞）",
  "c": "time",
  "lv": 2,
  "rel": [],
  "note": "Deux changements liés évoluent ensemble : 「技術の進歩にともなって…」.  Proche de とともに / につれて ; にともなって est plus formel/écrit.  にともなう + nom modifie un nom : 「成長にともなう問題」.",
  "ex": [
   {
    "jp": "技術の進歩にともなって、新しい職業が生まれている。",
    "fr": "Avec le progrès technique, de nouveaux métiers apparaissent."
   },
   {
    "jp": "オンライン教育の普及にともなって、学習スタイルが多様化している。",
    "fr": "Avec la diffusion de l'éducation en ligne, les façons d'apprendre se diversifient."
   },
   {
    "jp": "人口の増加にともなって、食料問題が深刻化している。",
    "fr": "Du fait de l'augmentation de la population, le problème alimentaire s'aggrave."
   }
  ],
  "qs": [
   {
    "t": "fill",
    "q": "技術の進歩＿＿＿、新しい職業が生まれている。",
    "fr": "Avec le progrès technique, de nouveaux métiers apparaissent.",
    "o": [
     "て以来",
     "てしかたがない",
     "上で",
     "にともなって"
    ],
    "a": 3,
    "e": "〜にともなって : « à mesure que », « accompagné de », « du fait de »."
   },
   {
    "t": "fill",
    "q": "オンライン教育の普及＿＿＿、学習スタイルが多様化している。",
    "fr": "Avec la diffusion de l'éducation en ligne, les façons d'apprendre se diversifient.",
    "o": [
     "にともなって",
     "あまり",
     "に限る",
     "において"
    ],
    "a": 0,
    "e": "〜にともなって : « à mesure que », « accompagné de », « du fait de »."
   },
   {
    "t": "fill",
    "q": "人口の増加＿＿＿、食料問題が深刻化している。",
    "fr": "Du fait de l'augmentation de la population, le problème alimentaire s'aggrave.",
    "o": [
     "でのみ",
     "にともなって",
     "べきだ",
     "結局"
    ],
    "a": 1,
    "e": "〜にともなって : « à mesure que », « accompagné de », « du fait de »."
   },
   {
    "t": "meaning",
    "q": "「技術の進歩にともなって、新しい職業が生まれている。」— que signifie 〜にともなって ?",
    "o": [
     "« des choses comme… et… (et tout ça) »",
     "« au sujet de », « autour de »",
     "« en commençant par », « à partir de (qui a marqué le début ",
     "« à mesure que », « accompagné de », « du fait de »"
    ],
    "a": 3,
    "e": "〜にともなって = « à mesure que », « accompagné de », « du fait de »."
   },
   {
    "t": "meaning",
    "q": "「オンライン教育の普及にともなって、学習スタイルが多様化している。」— que signifie 〜にともなって ?",
    "o": [
     "« en même temps que », « avec », « à mesure que »",
     "« des choses comme… et… (et tout ça) »",
     "« toutefois », « à condition que », « sauf que »",
     "« à mesure que », « accompagné de », « du fait de »"
    ],
    "a": 3,
    "e": "〜にともなって = « à mesure que », « accompagné de », « du fait de »."
   },
   {
    "t": "meaning",
    "q": "「人口の増加にともなって、食料問題が深刻化している。」— que signifie 〜にともなって ?",
    "o": [
     "« justement quand… (par malchance) » / « (lui) de tous… ne f",
     "« par », « selon », « à cause de », « grâce à »",
     "« du point de vue de », « pour X (si l'on se met à sa place)",
     "« à mesure que », « accompagné de », « du fait de »"
    ],
    "a": 3,
    "e": "〜にともなって = « à mesure que », « accompagné de », « du fait de »."
   },
   {
    "t": "usage",
    "q": "« « à mesure que », « accompagné de », « du fait de » » se dit en japonais :",
    "o": [
     "でのみ",
     "かける",
     "ことはが",
     "にともなって"
    ],
    "a": 3,
    "e": "→ 〜にともなって."
   },
   {
    "t": "nuance",
    "q": "Quel est le sens correct de 〜にともなって ?",
    "o": [
     "« seulement », « depuis que… (rien ensuite) », « rester à »",
     "« en somme », « bref », « pour résumer »",
     "« à mesure que », « accompagné de », « du fait de »",
     "« à la suite de », « l'occasion qui a déclenché… »"
    ],
    "a": 2,
    "e": "Deux changements liés évoluent ensemble : 「技術の進歩にともなって…」."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« à mesure que », « accompagné de », « du fait de ») ? [8]",
    "o": [
     "きり",
     "に限らず",
     "にともなって",
     "なんとか"
    ],
    "a": 2,
    "e": "→ 〜にともなって."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« à mesure que », « accompagné de », « du fait de ») ? [9]",
    "o": [
     "にともなって",
     "ただし",
     "といった",
     "ないではいられない"
    ],
    "a": 0,
    "e": "→ 〜にともなって."
   }
  ]
 },
 {
  "id": "c052",
  "g": "～きる（〜切る）",
  "m": "« faire complètement », « jusqu'au bout », « à fond ». Marque l'accomplissement total d'une action ou un état extrême.",
  "f": "【動詞ます形】＋ きる",
  "c": "express",
  "lv": 2,
  "rel": [],
  "note": "Sens 1 — achèvement complet : 「走りきる」(courir jusqu'au bout), 「使いきる」(tout utiliser).  Sens 2 — état extrême/total : 「困りきる」(être totalement dépassé), 「疲れきる」(être épuisé).  言いきる = affirmer avec certitude (« déclarer catégoriquement »).",
  "ex": [
   {
    "jp": "疲れていたが、なんとかそのコースを走りきった。",
    "fr": "J'étais épuisé, mais j'ai réussi à courir le parcours jusqu'au bout."
   },
   {
    "jp": "彼女はPCが急に壊れて、困りきっていた。",
    "fr": "Son ordinateur ayant soudain lâché, elle était totalement dépassée."
   },
   {
    "jp": "彼女は、この計画は失敗すると言いきった。",
    "fr": "Elle a affirmé catégoriquement que ce plan échouerait."
   }
  ],
  "qs": [
   {
    "t": "meaning",
    "q": "「疲れていたが、なんとかそのコースを走りきった。」— que signifie 〜きる ?",
    "o": [
     "« même pour X », « même si c'est X »",
     "« faire complètement », « jusqu'au bout », « à fond »",
     "« dans », « au sein de », « en matière de »",
     "« ainsi que », « et » (liaison formelle)"
    ],
    "a": 1,
    "e": "〜きる = « faire complètement », « jusqu'au bout », « à fond »."
   },
   {
    "t": "meaning",
    "q": "「彼女はPCが急に壊れて、困りきっていた。」— que signifie 〜きる ?",
    "o": [
     "« ce qu'on appelle… (c'est) », « X, c'est… »",
     "« en commençant par », « à partir de (qui a marqué le début ",
     "« toutefois », « à condition que », « sauf que »",
     "« faire complètement », « jusqu'au bout », « à fond »"
    ],
    "a": 3,
    "e": "〜きる = « faire complètement », « jusqu'au bout », « à fond »."
   },
   {
    "t": "meaning",
    "q": "「彼女は、この計画は失敗すると言いきった。」— que signifie 〜きる ?",
    "o": [
     "« j'ai cru que… (alors que ce n'était pas le cas) »",
     "« faire complètement », « jusqu'au bout », « à fond »",
     "« à travers », « par l'intermédiaire de », « tout au long de",
     "« certes… mais », « c'est vrai que X, seulement… »"
    ],
    "a": 1,
    "e": "〜きる = « faire complètement », « jusqu'au bout », « à fond »."
   },
   {
    "t": "usage",
    "q": "« « faire complètement », « jusqu'au bout », « à fond » » se dit en japonais :",
    "o": [
     "あまりに",
     "きる",
     "かと思う",
     "ただ"
    ],
    "a": 1,
    "e": "→ 〜きる."
   },
   {
    "t": "nuance",
    "q": "Quel est le sens correct de 〜きる ?",
    "o": [
     "« faire complètement », « jusqu'au bout », « à fond »",
     "« toutefois », « à condition que », « sauf que »",
     "« ainsi que », « et » (liaison formelle)",
     "« si l'on (fait) trop… (alors) »"
    ],
    "a": 0,
    "e": "Sens 1 — achèvement complet : 「走りきる」(courir jusqu'au bout), 「使いきる」(tout utiliser)."
   },
   {
    "t": "usage",
    "q": "Complétez avec la forme correcte (sens : « faire complètement », « jusqu'au bout », « à fond ») :",
    "o": [
     "ばかりでなく",
     "きる",
     "に際して",
     "つつある"
    ],
    "a": 1,
    "e": "→ 〜きる."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« faire complètement », « jusqu'au bout », « à fond ») ? [6]",
    "o": [
     "きる",
     "は問わない",
     "に際して",
     "やらやら"
    ],
    "a": 0,
    "e": "→ 〜きる."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« faire complètement », « jusqu'au bout », « à fond ») ? [7]",
    "o": [
     "てしかたがない",
     "をはじめ",
     "なりに",
     "きる"
    ],
    "a": 3,
    "e": "→ 〜きる."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« faire complètement », « jusqu'au bout », « à fond ») ? [8]",
    "o": [
     "きる",
     "のかと思った",
     "でのみ",
     "とか"
    ],
    "a": 0,
    "e": "→ 〜きる."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« faire complètement », « jusqu'au bout », « à fond ») ? [9]",
    "o": [
     "くらい",
     "要するに",
     "きる",
     "こそ"
    ],
    "a": 2,
    "e": "→ 〜きる."
   }
  ]
 },
 {
  "id": "c053",
  "g": "～きれない（〜切れない）",
  "m": "« ne pas pouvoir finir/faire complètement », « trop… pour ». Forme négative de 〜きる : impossible d'achever totalement.",
  "f": "【動詞ます形】＋ きれない",
  "c": "express",
  "lv": 2,
  "rel": [],
  "note": "Impossibilité d'accomplir entièrement : 「食べきれない」(ne pas pouvoir tout manger).  言いきれない = ne pas pouvoir affirmer avec certitude.  数えきれない = innombrable ; 〜きれないほど = « tellement que c'en est impossible ».",
  "ex": [
   {
    "jp": "レポートを終わらせようとしたが、時間がなくて完成しきれなかった。",
    "fr": "J'ai essayé de finir le rapport, mais faute de temps je n'ai pas pu le terminer entièrement."
   },
   {
    "jp": "彼が成功するかしないか、私には言いきれない。",
    "fr": "Je ne peux pas affirmer avec certitude s'il réussira ou non."
   },
   {
    "jp": "多くの困難に直面しても、希望を捨てきれない。",
    "fr": "Même face à de nombreuses difficultés, je ne peux pas totalement abandonner l'espoir."
   }
  ],
  "qs": [
   {
    "t": "fill",
    "q": "彼が成功するかしないか、私には言い＿＿＿。",
    "fr": "Je ne peux pas affirmer avec certitude s'il réussira ou non.",
    "o": [
     "に限り",
     "というものは",
     "きれない",
     "だけ"
    ],
    "a": 2,
    "e": "〜きれない : « ne pas pouvoir finir/faire complètement », « trop… pour »."
   },
   {
    "t": "fill",
    "q": "多くの困難に直面しても、希望を捨て＿＿＿。",
    "fr": "Même face à de nombreuses difficultés, je ne peux pas totalement abandonner l'espoir.",
    "o": [
     "せいか",
     "にすれば",
     "とは",
     "きれない"
    ],
    "a": 3,
    "e": "〜きれない : « ne pas pouvoir finir/faire complètement », « trop… pour »."
   },
   {
    "t": "meaning",
    "q": "「レポートを終わらせようとしたが、時間がなくて完成しきれなかった。」— que signifie 〜きれない ?",
    "o": [
     "« sans distinction de », « indépendamment de »",
     "« ne pas pouvoir finir/faire complètement », « trop… pour »",
     "« tellement… que », « à cause de l'excès de… »",
     "« si l'on (fait) trop… (alors) »"
    ],
    "a": 1,
    "e": "〜きれない = « ne pas pouvoir finir/faire complètement », « trop… pour »."
   },
   {
    "t": "meaning",
    "q": "「彼が成功するかしないか、私には言いきれない。」— que signifie 〜きれない ?",
    "o": [
     "« en même temps que », « avec », « à mesure que »",
     "« ne pas pouvoir finir/faire complètement », « trop… pour »",
     "« sans distinction de », « indépendamment de »",
     "« justement », « c'est précisément… qui »"
    ],
    "a": 1,
    "e": "〜きれない = « ne pas pouvoir finir/faire complètement », « trop… pour »."
   },
   {
    "t": "meaning",
    "q": "「多くの困難に直面しても、希望を捨てきれない。」— que signifie 〜きれない ?",
    "o": [
     "« juste parce que (si peu) », « pour si peu »",
     "« si l'on (fait) trop… (alors) »",
     "« comme c'est… ! », « quel(le)… ! »",
     "« ne pas pouvoir finir/faire complètement », « trop… pour »"
    ],
    "a": 3,
    "e": "〜きれない = « ne pas pouvoir finir/faire complètement », « trop… pour »."
   },
   {
    "t": "usage",
    "q": "« « ne pas pouvoir finir/faire complètement », « trop… pour » » se dit en japonais :",
    "o": [
     "結局",
     "でのみ",
     "きれない",
     "きる"
    ],
    "a": 2,
    "e": "→ 〜きれない."
   },
   {
    "t": "nuance",
    "q": "Quel est le sens correct de 〜きれない ?",
    "o": [
     "« j'ai cru que… (alors que ce n'était pas le cas) »",
     "« ne pas pouvoir finir/faire complètement », « trop… pour »",
     "« d'un côté… de l'autre », « tandis que »",
     "« en commençant par », « à partir de (qui a marqué le début "
    ],
    "a": 1,
    "e": "Impossibilité d'accomplir entièrement : 「食べきれない」(ne pas pouvoir tout manger)."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« ne pas pouvoir finir/faire complètement », « trop… pour ») ? [7]",
    "o": [
     "きれない",
     "のかと思った",
     "のか",
     "かのように"
    ],
    "a": 0,
    "e": "→ 〜きれない."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« ne pas pouvoir finir/faire complètement », « trop… pour ») ? [8]",
    "o": [
     "きれない",
     "にすれば",
     "わけがない",
     "あまりに"
    ],
    "a": 0,
    "e": "→ 〜きれない."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« ne pas pouvoir finir/faire complètement », « trop… pour ») ? [9]",
    "o": [
     "きれない",
     "に際して",
     "にしても",
     "ないではいられない"
    ],
    "a": 0,
    "e": "→ 〜きれない."
   }
  ]
 },
 {
  "id": "c054",
  "g": "～きり",
  "m": "« seulement », « depuis que… (rien ensuite) », « rester à ». Marque une limite, un dernier état après lequel rien ne change.",
  "f": "【名詞】＋ きり　／　【動詞た形】＋ きり（〜ない）",
  "c": "express",
  "lv": 2,
  "rel": [],
  "note": "一人きり = tout seul ; これっきり = juste cette fois ; 二人きり = en tête-à-tête.  〜たきり〜ない = « depuis X, plus rien » : 「出かけたきり帰らない」.  それっきり = « et puis plus rien depuis ».",
  "ex": [
   {
    "jp": "彼らは公園で二人きりで話していた。",
    "fr": "Ils discutaient seuls tous les deux dans le parc."
   },
   {
    "jp": "今回のミスは許しますが、これっきりにしてください。",
    "fr": "Je pardonne cette erreur, mais que ce soit la dernière fois."
   },
   {
    "jp": "彼にメールを送りましたが、それっきり返事はなかった。",
    "fr": "Je lui ai envoyé un mail, mais depuis, aucune réponse."
   }
  ],
  "qs": [
   {
    "t": "fill",
    "q": "彼らは公園で二人＿＿＿で話していた。",
    "fr": "Ils discutaient seuls tous les deux dans le parc.",
    "o": [
     "といった",
     "にすれば",
     "きり",
     "ことはが"
    ],
    "a": 2,
    "e": "〜きり : « seulement », « depuis que… (rien ensuite) », « rester à »."
   },
   {
    "t": "fill",
    "q": "今回のミスは許しますが、これっ＿＿＿にしてください。",
    "fr": "Je pardonne cette erreur, mais que ce soit la dernière fois.",
    "o": [
     "きり",
     "で済む",
     "ことはが",
     "に限る"
    ],
    "a": 0,
    "e": "〜きり : « seulement », « depuis que… (rien ensuite) », « rester à »."
   },
   {
    "t": "fill",
    "q": "彼にメールを送りましたが、それっ＿＿＿返事はなかった。",
    "fr": "Je lui ai envoyé un mail, mais depuis, aucune réponse.",
    "o": [
     "に限り",
     "かのように",
     "きり",
     "ではないか"
    ],
    "a": 2,
    "e": "〜きり : « seulement », « depuis que… (rien ensuite) », « rester à »."
   },
   {
    "t": "meaning",
    "q": "「彼らは公園で二人きりで話していた。」— que signifie 〜きり ?",
    "o": [
     "« justement quand… (par malchance) » / « (lui) de tous… ne f",
     "« faire complètement », « jusqu'au bout », « à fond »",
     "« seulement », « depuis que… (rien ensuite) », « rester à »",
     "« ce qu'on appelle… (c'est) », « X, c'est… »"
    ],
    "a": 2,
    "e": "〜きり = « seulement », « depuis que… (rien ensuite) », « rester à »."
   },
   {
    "t": "meaning",
    "q": "「今回のミスは許しますが、これっきりにしてください。」— que signifie 〜きり ?",
    "o": [
     "« faire complètement », « jusqu'au bout », « à fond »",
     "« c'est pourquoi », « alors (j'ai décidé de) »",
     "« ne pas pouvoir s'empêcher de »",
     "« seulement », « depuis que… (rien ensuite) », « rester à »"
    ],
    "a": 3,
    "e": "〜きり = « seulement », « depuis que… (rien ensuite) », « rester à »."
   },
   {
    "t": "meaning",
    "q": "「彼にメールを送りましたが、それっきり返事はなかった。」— que signifie 〜きり ?",
    "o": [
     "« seulement », « depuis que… (rien ensuite) », « rester à »",
     "« en même temps que », « dès que », « à la fois »",
     "« en somme », « bref », « pour résumer »",
     "« du point de vue de », « pour X (si l'on se met à sa place)"
    ],
    "a": 0,
    "e": "〜きり = « seulement », « depuis que… (rien ensuite) », « rester à »."
   },
   {
    "t": "usage",
    "q": "« « seulement », « depuis que… (rien ensuite) », « rester à » » se dit en japonais :",
    "o": [
     "あまりに",
     "上で",
     "きり",
     "なりに"
    ],
    "a": 2,
    "e": "→ 〜きり."
   },
   {
    "t": "nuance",
    "q": "Quel est le sens correct de 〜きり ?",
    "o": [
     "« seulement », « depuis que… (rien ensuite) », « rester à »",
     "« ainsi que », « et » (liaison formelle)",
     "« et si nous…? », « faisons… ! »",
     "« s'en tirer avec », « ça suffit / on n'a pas besoin de »"
    ],
    "a": 0,
    "e": "一人きり = tout seul ; これっきり = juste cette fois ; 二人きり = en tête-à-tête."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« seulement », « depuis que… (rien ensuite) », « rester à ») ? [8]",
    "o": [
     "なんとか",
     "きり",
     "というものは",
     "にともなって"
    ],
    "a": 1,
    "e": "→ 〜きり."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« seulement », « depuis que… (rien ensuite) », « rester à ») ? [9]",
    "o": [
     "べきだ",
     "一方だ",
     "きり",
     "ただ"
    ],
    "a": 2,
    "e": "→ 〜きり."
   }
  ]
 },
 {
  "id": "c055",
  "g": "～はもちろん",
  "m": "« bien sûr… mais aussi », « non seulement… (cela va de soi) mais également ». X est évident, et on ajoute Y.",
  "f": "【名詞】＋ はもちろん（＋ 名詞 も）",
  "c": "particle",
  "lv": 1,
  "rel": [],
  "note": "X va de soi, et on ajoute un Y parfois surprenant : 「数学はもちろん、科学もできる」.  Souvent suivi de も sur le second élément.  Variante plus formelle : 〜はもとより.",
  "ex": [
   {
    "jp": "彼女は数学はもちろん、科学もよくできる。",
    "fr": "Elle est bonne en maths, bien sûr, mais aussi en sciences."
   },
   {
    "jp": "私たちの会社では、夏休みはもちろん、冬休みもある。",
    "fr": "Dans notre entreprise, il y a les congés d'été, bien sûr, mais aussi ceux d'hiver."
   },
   {
    "jp": "彼は日本語はもちろん、敬語も完璧だ。",
    "fr": "Il maîtrise le japonais, évidemment, mais aussi le langage honorifique."
   }
  ],
  "qs": [
   {
    "t": "fill",
    "q": "彼女は数学＿＿＿、科学もよくできる。",
    "fr": "Elle est bonne en maths, bien sûr, mais aussi en sciences.",
    "o": [
     "は問わない",
     "はもちろん",
     "だらけ",
     "に限る"
    ],
    "a": 1,
    "e": "〜はもちろん : « bien sûr… mais aussi », « non seulement… (cela va de soi) ."
   },
   {
    "t": "fill",
    "q": "私たちの会社では、夏休み＿＿＿、冬休みもある。",
    "fr": "Dans notre entreprise, il y a les congés d'été, bien sûr, mais aussi ceux d'hiver.",
    "o": [
     "かと思う",
     "はもちろん",
     "とともに",
     "それでも"
    ],
    "a": 1,
    "e": "〜はもちろん : « bien sûr… mais aussi », « non seulement… (cela va de soi) ."
   },
   {
    "t": "fill",
    "q": "彼は日本語＿＿＿、敬語も完璧だ。",
    "fr": "Il maîtrise le japonais, évidemment, mais aussi le langage honorifique.",
    "o": [
     "て以来",
     "はもちろん",
     "ないではいられない",
     "そこで"
    ],
    "a": 1,
    "e": "〜はもちろん : « bien sûr… mais aussi », « non seulement… (cela va de soi) ."
   },
   {
    "t": "meaning",
    "q": "「彼女は数学はもちろん、科学もよくできる。」— que signifie 〜はもちろん ?",
    "o": [
     "« non seulement… (mais aussi) », « sans se limiter à »",
     "« d'un côté… de l'autre », « tandis que »",
     "« bien sûr… mais aussi », « non seulement… (cela va de soi) ",
     "« uniquement à/dans/par » (のみ combiné à une particule de lie"
    ],
    "a": 2,
    "e": "〜はもちろん = « bien sûr… mais aussi », « non seulement… (cela va de soi) ."
   },
   {
    "t": "meaning",
    "q": "「私たちの会社では、夏休みはもちろん、冬休みもある。」— que signifie 〜はもちろん ?",
    "o": [
     "« justement », « c'est précisément… qui »",
     "« bien sûr… mais aussi », « non seulement… (cela va de soi) ",
     "« non seulement… mais aussi (en plus) »",
     "« faire complètement », « jusqu'au bout », « à fond »"
    ],
    "a": 1,
    "e": "〜はもちろん = « bien sûr… mais aussi », « non seulement… (cela va de soi) ."
   },
   {
    "t": "meaning",
    "q": "「彼は日本語はもちろん、敬語も完璧だ。」— que signifie 〜はもちろん ?",
    "o": [
     "« bien sûr… mais aussi », « non seulement… (cela va de soi) ",
     "« à commencer par », « notamment »",
     "« depuis que… (et jusqu'à maintenant) »",
     "« à travers », « par l'intermédiaire de », « tout au long de"
    ],
    "a": 0,
    "e": "〜はもちろん = « bien sûr… mais aussi », « non seulement… (cela va de soi) ."
   },
   {
    "t": "usage",
    "q": "« « bien sûr… mais aussi », « non seulement… (cela va de soi)  » se dit en japonais :",
    "o": [
     "とともに",
     "はもちろん",
     "要するに",
     "とは"
    ],
    "a": 1,
    "e": "→ 〜はもちろん."
   },
   {
    "t": "nuance",
    "q": "Quel est le sens correct de 〜はもちろん ?",
    "o": [
     "« bien sûr… mais aussi », « non seulement… (cela va de soi) ",
     "« rien ne vaut », « le mieux c'est… »",
     "« ne pas pouvoir s'empêcher de »",
     "« s'en tirer avec », « ça suffit / on n'a pas besoin de »"
    ],
    "a": 0,
    "e": "X va de soi, et on ajoute un Y parfois surprenant : 「数学はもちろん、科学もできる」."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« bien sûr… mais aussi », « non seulement… (cela va de soi) ) ? [8]",
    "o": [
     "を皮切りに",
     "はもちろん",
     "に際して",
     "つつある"
    ],
    "a": 1,
    "e": "→ 〜はもちろん."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« bien sûr… mais aussi », « non seulement… (cela va de soi) ) ? [9]",
    "o": [
     "つつある",
     "かと思う",
     "はもちろん",
     "とともに"
    ],
    "a": 2,
    "e": "→ 〜はもちろん."
   }
  ]
 },
 {
  "id": "c056",
  "g": "～ばかりでなく ／ ～ばかりか",
  "m": "« non seulement… mais aussi (en plus) ». Ajoute un élément allant souvent au-delà des attentes.",
  "f": "【名詞／普通形】＋ ばかりでなく ／ ばかりか（＋ も）",
  "c": "particle",
  "lv": 1,
  "rel": [],
  "note": "ばかりか est plus emphatique, souligne un dépassement parfois inattendu.  Souvent suivi de も : 「英語ばかりか、スペイン語も話せる」.  Registre neutre à formel.",
  "ex": [
   {
    "jp": "彼は英語ばかりでなく、スペイン語も話せる。",
    "fr": "Il parle non seulement anglais, mais aussi espagnol."
   },
   {
    "jp": "ファストフードは脂肪が多いばかりか、塩分も多い。",
    "fr": "La restauration rapide n'est pas seulement grasse, elle est aussi très salée."
   },
   {
    "jp": "彼は遅刻したばかりか、謝りもしなかった。",
    "fr": "Non seulement il est arrivé en retard, mais en plus il ne s'est même pas excusé."
   }
  ],
  "qs": [
   {
    "t": "fill",
    "q": "彼は英語＿＿＿、スペイン語も話せる。",
    "fr": "Il parle non seulement anglais, mais aussi espagnol.",
    "o": [
     "ばかりでなく",
     "一方で",
     "せいか",
     "というものは"
    ],
    "a": 0,
    "e": "〜ばかりでなく : « non seulement… mais aussi (en plus) »."
   },
   {
    "t": "meaning",
    "q": "「彼は英語ばかりでなく、スペイン語も話せる。」— que signifie 〜ばかりでなく ?",
    "o": [
     "« ne pas pouvoir finir/faire complètement », « trop… pour »",
     "« non seulement… mais aussi (en plus) »",
     "« cela dit », « seulement », « toutefois »",
     "« uniquement à/dans/par » (のみ combiné à une particule de lie"
    ],
    "a": 1,
    "e": "〜ばかりでなく = « non seulement… mais aussi (en plus) »."
   },
   {
    "t": "meaning",
    "q": "「ファストフードは脂肪が多いばかりか、塩分も多い。」— que signifie 〜ばかりでなく ?",
    "o": [
     "« il y a quelque chose de… (qui touche) », « on ressent un c",
     "« ne pas pouvoir s'empêcher de »",
     "« non seulement… mais aussi (en plus) »",
     "« lorsqu'on fait X », « dans le cadre / pour les besoins de "
    ],
    "a": 2,
    "e": "〜ばかりでなく = « non seulement… mais aussi (en plus) »."
   },
   {
    "t": "meaning",
    "q": "「彼は遅刻したばかりか、謝りもしなかった。」— que signifie 〜ばかりでなく ?",
    "o": [
     "« tant bien que mal », « d'une manière ou d'une autre », « r",
     "« non seulement… (mais aussi) », « sans se limiter à »",
     "« non seulement… mais aussi (en plus) »",
     "« il n'y a pas besoin de », « ce n'est pas la peine de »"
    ],
    "a": 2,
    "e": "〜ばかりでなく = « non seulement… mais aussi (en plus) »."
   },
   {
    "t": "usage",
    "q": "« « non seulement… mais aussi (en plus) » » se dit en japonais :",
    "o": [
     "ばかりでなく",
     "を問わず",
     "と言えば",
     "とか"
    ],
    "a": 0,
    "e": "→ 〜ばかりでなく."
   },
   {
    "t": "nuance",
    "q": "Quel est le sens correct de 〜ばかりでなく ?",
    "o": [
     "« non seulement… mais aussi (en plus) »",
     "« ce qu'on appelle X (par nature)… »",
     "« on devrait », « il faut (moralement) » / « on ne devrait p",
     "« à sa manière », « selon ses propres moyens »"
    ],
    "a": 0,
    "e": "ばかりか est plus emphatique, souligne un dépassement parfois inattendu."
   },
   {
    "t": "usage",
    "q": "Complétez avec la forme correcte (sens : « non seulement… mais aussi (en plus) ») :",
    "o": [
     "くらい",
     "は問わない",
     "ばかりでなく",
     "にすれば"
    ],
    "a": 2,
    "e": "→ 〜ばかりでなく."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« non seulement… mais aussi (en plus) ») ? [7]",
    "o": [
     "をめぐって",
     "ないではいられない",
     "ばかりでなく",
     "て以来"
    ],
    "a": 2,
    "e": "→ 〜ばかりでなく."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« non seulement… mais aussi (en plus) ») ? [8]",
    "o": [
     "にともなって",
     "というものは",
     "ばかりでなく",
     "そこで"
    ],
    "a": 2,
    "e": "→ 〜ばかりでなく."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« non seulement… mais aussi (en plus) ») ? [9]",
    "o": [
     "だらけ",
     "きる",
     "ことだ",
     "ばかりでなく"
    ],
    "a": 3,
    "e": "→ 〜ばかりでなく."
   }
  ]
 },
 {
  "id": "c057",
  "g": "ただ（接続詞）",
  "m": "« cela dit », « seulement », « toutefois ». Apporte une réserve, une nuance après un propos plutôt positif.",
  "f": "〔肯定的な文〕。＋ ただ、〜。",
  "c": "contrast",
  "lv": 2,
  "rel": [],
  "note": "Introduit une légère réserve/un bémol après une appréciation positive.  Plus doux que しかし ; nuance « le seul hic, c'est… ».  Registre courant à neutre.",
  "ex": [
   {
    "jp": "彼はすばらしい学生です。ただ、ちょっと恥ずかしがり屋ですね。",
    "fr": "C'est un excellent élève. Cela dit, il est un peu timide."
   },
   {
    "jp": "この車はとても速い。ただ、ちょっと燃費が悪いね。",
    "fr": "Cette voiture est très rapide. Seulement, elle consomme un peu beaucoup."
   },
   {
    "jp": "旅行は楽しかった。ただ、天気だけが残念だった。",
    "fr": "Le voyage était agréable. Le seul bémol, c'était la météo."
   }
  ],
  "qs": [
   {
    "t": "fill",
    "q": "彼はすばらしい学生です。＿＿＿、ちょっと恥ずかしがり屋ですね。",
    "fr": "C'est un excellent élève. Cela dit, il est un peu timide.",
    "o": [
     "に限らず",
     "そこで",
     "のみ",
     "ただ"
    ],
    "a": 3,
    "e": "〜ただ : « cela dit », « seulement », « toutefois »."
   },
   {
    "t": "fill",
    "q": "この車はとても速い。＿＿＿、ちょっと燃費が悪いね。",
    "fr": "Cette voiture est très rapide. Seulement, elle consomme un peu beaucoup.",
    "o": [
     "に限って",
     "ただ",
     "要するに",
     "ただし"
    ],
    "a": 1,
    "e": "〜ただ : « cela dit », « seulement », « toutefois »."
   },
   {
    "t": "fill",
    "q": "旅行は楽しかった。＿＿＿、天気だけが残念だった。",
    "fr": "Le voyage était agréable. Le seul bémol, c'était la météo.",
    "o": [
     "といった",
     "はもちろん",
     "ないではいられない",
     "ただ"
    ],
    "a": 3,
    "e": "〜ただ : « cela dit », « seulement », « toutefois »."
   },
   {
    "t": "meaning",
    "q": "「彼はすばらしい学生です。ただ、ちょっと恥ずかしがり屋ですね。」— que signifie 〜ただ ?",
    "o": [
     "« non seulement… (mais aussi) », « sans se limiter à »",
     "« cela dit », « seulement », « toutefois »",
     "« en somme », « bref », « pour résumer »",
     "« j'ai cru que… (alors que ce n'était pas le cas) »"
    ],
    "a": 1,
    "e": "〜ただ = « cela dit », « seulement », « toutefois »."
   },
   {
    "t": "meaning",
    "q": "「この車はとても速い。ただ、ちょっと燃費が悪いね。」— que signifie 〜ただ ?",
    "o": [
     "« cela dit », « seulement », « toutefois »",
     "« est-ce parce que…? », « sans doute parce que… »",
     "« lorsqu'on fait X », « dans le cadre / pour les besoins de ",
     "« même pour X », « même si c'est X »"
    ],
    "a": 0,
    "e": "〜ただ = « cela dit », « seulement », « toutefois »."
   },
   {
    "t": "meaning",
    "q": "「旅行は楽しかった。ただ、天気だけが残念だった。」— que signifie 〜ただ ?",
    "o": [
     "« après avoir fait X (et sur cette base) »",
     "« ne pas pouvoir s'empêcher de »",
     "« par (unité) », « pour chaque »",
     "« cela dit », « seulement », « toutefois »"
    ],
    "a": 3,
    "e": "〜ただ = « cela dit », « seulement », « toutefois »."
   },
   {
    "t": "usage",
    "q": "« « cela dit », « seulement », « toutefois » » se dit en japonais :",
    "o": [
     "ただ",
     "かと思う",
     "ことはが",
     "なんとか"
    ],
    "a": 0,
    "e": "→ 〜ただ."
   },
   {
    "t": "nuance",
    "q": "Quel est le sens correct de 〜ただ ?",
    "o": [
     "« toutefois », « à condition que », « sauf que »",
     "« à mesure que », « accompagné de », « du fait de »",
     "« cela dit », « seulement », « toutefois »",
     "« à l'occasion de », « au moment de (faire quelque chose d'i"
    ],
    "a": 2,
    "e": "Introduit une légère réserve/un bémol après une appréciation positive."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« cela dit », « seulement », « toutefois ») ? [8]",
    "o": [
     "を問わず",
     "ただし",
     "ただ",
     "かける"
    ],
    "a": 2,
    "e": "→ 〜ただ."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« cela dit », « seulement », « toutefois ») ? [9]",
    "o": [
     "結局",
     "きれない",
     "ただ",
     "だらけ"
    ],
    "a": 2,
    "e": "→ 〜ただ."
   }
  ]
 },
 {
  "id": "c058",
  "g": "ただし（但し）",
  "m": "« toutefois », « à condition que », « sauf que ». Ajoute une condition ou une exception, souvent dans un cadre formel/règlementaire.",
  "f": "〔文〕。＋ ただし、〜（条件・例外）。",
  "c": "contrast",
  "lv": 2,
  "rel": [],
  "note": "Introduit une condition restrictive ou une exception, ton plus formel que ただ.  Typique des règlements, annonces, contrats : 「参加できます。ただし、予約が必要です」.  ≠ ただ (simple bémol) : ただし pose une condition/réserve officielle.",
  "ex": [
   {
    "jp": "明日のツアーは予定通り実施します。ただし、天候によっては中止になります。",
    "fr": "La visite de demain aura lieu comme prévu. Toutefois, elle peut être annulée selon la météo."
   },
   {
    "jp": "誰でも参加できます。ただし、事前に予約が必要です。",
    "fr": "Tout le monde peut participer, à condition toutefois de réserver à l'avance."
   },
   {
    "jp": "入場無料。ただし、子供は保護者同伴のこと。",
    "fr": "Entrée gratuite ; à condition cependant que les enfants soient accompagnés."
   }
  ],
  "qs": [
   {
    "t": "fill",
    "q": "明日のツアーは予定通り実施します。＿＿＿、天候によっては中止になります。",
    "fr": "La visite de demain aura lieu comme prévu. Toutefois, elle peut être annulée selon la météo.",
    "o": [
     "なりに",
     "はもちろん",
     "ただし",
     "要するに"
    ],
    "a": 2,
    "e": "〜ただし : « toutefois », « à condition que », « sauf que »."
   },
   {
    "t": "fill",
    "q": "誰でも参加できます。＿＿＿、事前に予約が必要です。",
    "fr": "Tout le monde peut participer, à condition toutefois de réserver à l'avance.",
    "o": [
     "あまりに",
     "ばかりでなく",
     "は問わない",
     "ただし"
    ],
    "a": 3,
    "e": "〜ただし : « toutefois », « à condition que », « sauf que »."
   },
   {
    "t": "fill",
    "q": "入場無料。＿＿＿、子供は保護者同伴のこと。",
    "fr": "Entrée gratuite ; à condition cependant que les enfants soient accompagnés.",
    "o": [
     "とは",
     "ないではいられない",
     "ただし",
     "とともに"
    ],
    "a": 2,
    "e": "〜ただし : « toutefois », « à condition que », « sauf que »."
   },
   {
    "t": "meaning",
    "q": "「明日のツアーは予定通り実施します。ただし、天候によっては中止になります。」— que signifie 〜ただし ?",
    "o": [
     "« commencer à (sans finir) », « être à moitié… »",
     "« à mesure que », « accompagné de », « du fait de »",
     "« toutefois », « à condition que », « sauf que »",
     "« être en train de (changer progressivement) »"
    ],
    "a": 2,
    "e": "〜ただし = « toutefois », « à condition que », « sauf que »."
   },
   {
    "t": "meaning",
    "q": "「誰でも参加できます。ただし、事前に予約が必要です。」— que signifie 〜ただし ?",
    "o": [
     "« seulement », « depuis que… (rien ensuite) », « rester à »",
     "« toutefois », « à condition que », « sauf que »",
     "« en commençant par », « à partir de (qui a marqué le début ",
     "« ne pas pouvoir s'empêcher de »"
    ],
    "a": 1,
    "e": "〜ただし = « toutefois », « à condition que », « sauf que »."
   },
   {
    "t": "meaning",
    "q": "「入場無料。ただし、子供は保護者同伴のこと。」— que signifie 〜ただし ?",
    "o": [
     "« sans distinction de », « indépendamment de »",
     "« il y a quelque chose de… (qui touche) », « on ressent un c",
     "« toutefois », « à condition que », « sauf que »",
     "« justement », « c'est précisément… qui »"
    ],
    "a": 2,
    "e": "〜ただし = « toutefois », « à condition que », « sauf que »."
   },
   {
    "t": "usage",
    "q": "« « toutefois », « à condition que », « sauf que » » se dit en japonais :",
    "o": [
     "て以来",
     "ものがある",
     "ではないか",
     "ただし"
    ],
    "a": 3,
    "e": "→ 〜ただし."
   },
   {
    "t": "nuance",
    "q": "Quel est le sens correct de 〜ただし ?",
    "o": [
     "« comme si », « comme s'il s'agissait de »",
     "« seulement », « depuis que… (rien ensuite) », « rester à »",
     "« toutefois », « à condition que », « sauf que »",
     "« comme c'est… ! », « quel(le)… ! »"
    ],
    "a": 2,
    "e": "Introduit une condition restrictive ou une exception, ton plus formel que ただ."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« toutefois », « à condition que », « sauf que ») ? [8]",
    "o": [
     "くらい",
     "に際して",
     "ただし",
     "あまり"
    ],
    "a": 2,
    "e": "→ 〜ただし."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« toutefois », « à condition que », « sauf que ») ? [9]",
    "o": [
     "かける",
     "ただし",
     "すなわち",
     "なんてんだろう"
    ],
    "a": 1,
    "e": "→ 〜ただし."
   }
  ]
 },
 {
  "id": "c059",
  "g": "～だけ（〜できる／〜たい＋だけ）",
  "m": "« autant que », « tant que ». Exprime « jusqu'à la limite de ce qui est possible/désiré ».",
  "f": "【動詞辞書形・可能形・たい形】＋ だけ（＋ 同じ動詞）",
  "c": "express",
  "lv": 2,
  "rel": [],
  "note": "« autant qu'on veut/peut » : 「好きなだけ食べる」「寝たいだけ寝る」.  Souvent répétition du verbe : 「食べられるだけ食べる」.  Sens « limite maximale » différent du だけ « seulement ».",
  "ex": [
   {
    "jp": "今日はよく頑張ったから、寝たいだけ寝ていいよ。",
    "fr": "Tu t'es bien démené aujourd'hui, alors dors autant que tu veux."
   },
   {
    "jp": "試験が終わったら、好きなだけ遊びたい。",
    "fr": "Une fois les examens finis, je veux m'amuser autant que je veux."
   },
   {
    "jp": "食べられるだけ食べてください。",
    "fr": "Mangez autant que vous le pouvez."
   }
  ],
  "qs": [
   {
    "t": "fill",
    "q": "今日はよく頑張ったから、寝たい＿＿＿寝ていいよ。",
    "fr": "Tu t'es bien démené aujourd'hui, alors dors autant que tu veux.",
    "o": [
     "ただし",
     "に限って",
     "でのみ",
     "だけ"
    ],
    "a": 3,
    "e": "〜だけ : « autant que », « tant que »."
   },
   {
    "t": "fill",
    "q": "試験が終わったら、好きな＿＿＿遊びたい。",
    "fr": "Une fois les examens finis, je veux m'amuser autant que je veux.",
    "o": [
     "ことだ",
     "だけ",
     "そこで",
     "および"
    ],
    "a": 1,
    "e": "〜だけ : « autant que », « tant que »."
   },
   {
    "t": "fill",
    "q": "食べられる＿＿＿食べてください。",
    "fr": "Mangez autant que vous le pouvez.",
    "o": [
     "一方だ",
     "かける",
     "だけ",
     "を問わず"
    ],
    "a": 2,
    "e": "〜だけ : « autant que », « tant que »."
   },
   {
    "t": "meaning",
    "q": "「今日はよく頑張ったから、寝たいだけ寝ていいよ。」— que signifie 〜だけ ?",
    "o": [
     "« sans distinction de », « indépendamment de »",
     "« autant que », « tant que »",
     "« ainsi que », « et » (liaison formelle)",
     "« pour un… (étonnamment) », « compte tenu de »"
    ],
    "a": 1,
    "e": "〜だけ = « autant que », « tant que »."
   },
   {
    "t": "meaning",
    "q": "「試験が終わったら、好きなだけ遊びたい。」— que signifie 〜だけ ?",
    "o": [
     "« autant que », « tant que »",
     "« et si nous…? », « faisons… ! »",
     "« sans distinction de », « indépendamment de »",
     "« peut-être à cause de », « sans doute parce que »"
    ],
    "a": 0,
    "e": "〜だけ = « autant que », « tant que »."
   },
   {
    "t": "meaning",
    "q": "「食べられるだけ食べてください。」— que signifie 〜だけ ?",
    "o": [
     "« autant que », « tant que »",
     "« cela dit », « seulement », « toutefois »",
     "« est-ce parce que…? », « sans doute parce que… »",
     "« ne faire qu'augmenter/diminuer », « aller toujours plus da"
    ],
    "a": 0,
    "e": "〜だけ = « autant que », « tant que »."
   },
   {
    "t": "usage",
    "q": "« « autant que », « tant que » » se dit en japonais :",
    "o": [
     "そこで",
     "わけがない",
     "だけ",
     "かのように"
    ],
    "a": 2,
    "e": "→ 〜だけ."
   },
   {
    "t": "nuance",
    "q": "Quel est le sens correct de 〜だけ ?",
    "o": [
     "« ainsi que », « et » (liaison formelle)",
     "« comme c'est… ! », « quel(le)… ! »",
     "« au sujet de », « autour de »",
     "« autant que », « tant que »"
    ],
    "a": 3,
    "e": "« autant qu'on veut/peut » : 「好きなだけ食べる」「寝たいだけ寝る」."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« autant que », « tant que ») ? [8]",
    "o": [
     "結局",
     "といった",
     "だけ",
     "やらやら"
    ],
    "a": 2,
    "e": "→ 〜だけ."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« autant que », « tant que ») ? [9]",
    "o": [
     "ではないか",
     "を問わず",
     "だけ",
     "と言えば"
    ],
    "a": 2,
    "e": "→ 〜だけ."
   }
  ]
 },
 {
  "id": "c060",
  "g": "～ないではいられない ／ ～ずにはいられない",
  "m": "« ne pas pouvoir s'empêcher de ». Une émotion ou impulsion rend l'action irrépressible.",
  "f": "【動詞ない形】＋ ではいられない ／ 【動詞ない形(〜ず)】＋ にはいられない",
  "c": "express",
  "lv": 2,
  "rel": [],
  "note": "Impossible de se retenir de faire X (sentiment plus fort que le contrôle).  ずにはいられない est plus écrit/formel ; ないではいられない plus oral. する→せずにはいられない.  Souvent émotions : 驚く、笑う、泣く、心配する…",
  "ex": [
   {
    "jp": "そのニュースを聞いて、驚かないではいられなかった。",
    "fr": "En apprenant cette nouvelle, je n'ai pas pu m'empêcher d'être surpris."
   },
   {
    "jp": "このドラマはおもしろいので、毎週見ずにはいられない。",
    "fr": "Cette série est si captivante que je ne peux m'empêcher de la regarder chaque semaine."
   },
   {
    "jp": "彼の話を聞くと、笑わずにはいられない。",
    "fr": "Quand je l'écoute, je ne peux pas m'empêcher de rire."
   }
  ],
  "qs": [
   {
    "t": "meaning",
    "q": "「そのニュースを聞いて、驚かないではいられなかった。」— que signifie 〜ないではいられない ?",
    "o": [
     "« à l'occasion de », « au moment de (faire quelque chose d'i",
     "« ne pas pouvoir s'empêcher de »",
     "« depuis que… (et jusqu'à maintenant) »",
     "« du point de vue de », « pour X (si l'on se met à sa place)"
    ],
    "a": 1,
    "e": "〜ないではいられない = « ne pas pouvoir s'empêcher de »."
   },
   {
    "t": "meaning",
    "q": "「このドラマはおもしろいので、毎週見ずにはいられない。」— que signifie 〜ないではいられない ?",
    "o": [
     "« seulement », « depuis que… (rien ensuite) », « rester à »",
     "« depuis que… (et jusqu'à maintenant) »",
     "« à commencer par », « notamment »",
     "« ne pas pouvoir s'empêcher de »"
    ],
    "a": 3,
    "e": "〜ないではいられない = « ne pas pouvoir s'empêcher de »."
   },
   {
    "t": "meaning",
    "q": "「彼の話を聞くと、笑わずにはいられない。」— que signifie 〜ないではいられない ?",
    "o": [
     "« ne pas pouvoir s'empêcher de »",
     "« pour un… (étonnamment) », « compte tenu de »",
     "« comme c'est… ! », « quel(le)… ! »",
     "« à la suite de », « l'occasion qui a déclenché… »"
    ],
    "a": 0,
    "e": "〜ないではいられない = « ne pas pouvoir s'empêcher de »."
   },
   {
    "t": "usage",
    "q": "« « ne pas pouvoir s'empêcher de » » se dit en japonais :",
    "o": [
     "ないではいられない",
     "きる",
     "に限る",
     "要するに"
    ],
    "a": 0,
    "e": "→ 〜ないではいられない."
   },
   {
    "t": "nuance",
    "q": "Quel est le sens correct de 〜ないではいられない ?",
    "o": [
     "« à commencer par », « notamment »",
     "« ne pas pouvoir s'empêcher de »",
     "« même pour X », « même si c'est X »",
     "« finalement », « en fin de compte », « au bout du compte »"
    ],
    "a": 1,
    "e": "Impossible de se retenir de faire X (sentiment plus fort que le contrôle)."
   },
   {
    "t": "usage",
    "q": "Complétez avec la forme correcte (sens : « ne pas pouvoir s'empêcher de ») :",
    "o": [
     "べきだ",
     "きる",
     "でのみ",
     "ないではいられない"
    ],
    "a": 3,
    "e": "→ 〜ないではいられない."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« ne pas pouvoir s'empêcher de ») ? [6]",
    "o": [
     "は問わない",
     "というものは",
     "ないではいられない",
     "やらやら"
    ],
    "a": 2,
    "e": "→ 〜ないではいられない."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« ne pas pouvoir s'empêcher de ») ? [7]",
    "o": [
     "をはじめ",
     "ないではいられない",
     "と言えば",
     "ことはない"
    ],
    "a": 1,
    "e": "→ 〜ないではいられない."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« ne pas pouvoir s'empêcher de ») ? [8]",
    "o": [
     "ことはない",
     "と同時に",
     "において",
     "ないではいられない"
    ],
    "a": 3,
    "e": "→ 〜ないではいられない."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« ne pas pouvoir s'empêcher de ») ? [9]",
    "o": [
     "結局",
     "に限り",
     "ないではいられない",
     "をめぐって"
    ],
    "a": 2,
    "e": "→ 〜ないではいられない."
   }
  ]
 },
 {
  "id": "c061",
  "g": "～ことは～が",
  "m": "« certes… mais », « c'est vrai que X, seulement… ». Concède un point avant d'apporter une réserve.",
  "f": "【動詞・形容詞】＋ ことは ＋〔同じ語〕＋ が、〜",
  "c": "contrast",
  "lv": 2,
  "rel": [],
  "note": "On répète le mot autour de ことは…が pour concéder : 「料理することはするが、上手じゃない」.  Reconnaît une vérité partielle, puis nuance/limite.  Adjectifs : 「きれいなことはきれいだが…」「速いことは速いが…」.",
  "ex": [
   {
    "jp": "彼女は料理することはするが、あまり上手じゃない。",
    "fr": "Elle cuisine, certes, mais elle n'est pas très douée."
   },
   {
    "jp": "この町はきれいなことはきれいだが、生活は不便だ。",
    "fr": "Cette ville est jolie, c'est vrai, mais peu pratique à vivre."
   },
   {
    "jp": "この車は速いことは速いが、燃費が悪い。",
    "fr": "Cette voiture est rapide, certes, mais elle consomme beaucoup."
   }
  ],
  "qs": [
   {
    "t": "meaning",
    "q": "「彼女は料理することはするが、あまり上手じゃない。」— que signifie 〜ことはが ?",
    "o": [
     "« à la suite de », « l'occasion qui a déclenché… »",
     "« ce qu'on appelle X (par nature)… »",
     "« s'en tirer avec », « ça suffit / on n'a pas besoin de »",
     "« certes… mais », « c'est vrai que X, seulement… »"
    ],
    "a": 3,
    "e": "〜ことはが = « certes… mais », « c'est vrai que X, seulement… »."
   },
   {
    "t": "meaning",
    "q": "「この町はきれいなことはきれいだが、生活は不便だ。」— que signifie 〜ことはが ?",
    "o": [
     "« il paraît que », « on dit que… (et donc) »",
     "« peut-être à cause de », « sans doute parce que »",
     "« certes… mais », « c'est vrai que X, seulement… »",
     "« après avoir fait X (et sur cette base) »"
    ],
    "a": 2,
    "e": "〜ことはが = « certes… mais », « c'est vrai que X, seulement… »."
   },
   {
    "t": "meaning",
    "q": "「この車は速いことは速いが、燃費が悪い。」— que signifie 〜ことはが ?",
    "o": [
     "« certes… mais », « c'est vrai que X, seulement… »",
     "« justement quand… (par malchance) » / « (lui) de tous… ne f",
     "« ce qu'on appelle X (par nature)… »",
     "« si l'on (fait) trop… (alors) »"
    ],
    "a": 0,
    "e": "〜ことはが = « certes… mais », « c'est vrai que X, seulement… »."
   },
   {
    "t": "usage",
    "q": "« « certes… mais », « c'est vrai que X, seulement… » » se dit en japonais :",
    "o": [
     "をきっかけに",
     "でのみ",
     "ことはが",
     "だらけ"
    ],
    "a": 2,
    "e": "→ 〜ことはが."
   },
   {
    "t": "nuance",
    "q": "Quel est le sens correct de 〜ことはが ?",
    "o": [
     "« du point de vue de », « pour X (si l'on se met à sa place)",
     "« après avoir fait X (et sur cette base) »",
     "« certes… mais », « c'est vrai que X, seulement… »",
     "« en même temps que », « dès que », « à la fois »"
    ],
    "a": 2,
    "e": "On répète le mot autour de ことは…が pour concéder : 「料理することはするが、上手じゃない」."
   },
   {
    "t": "usage",
    "q": "Complétez avec la forme correcte (sens : « certes… mais », « c'est vrai que X, seulement… ») :",
    "o": [
     "あまりに",
     "に限り",
     "ことはが",
     "かのように"
    ],
    "a": 2,
    "e": "→ 〜ことはが."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« certes… mais », « c'est vrai que X, seulement… ») ? [6]",
    "o": [
     "あまり",
     "だらけ",
     "および",
     "ことはが"
    ],
    "a": 3,
    "e": "→ 〜ことはが."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« certes… mais », « c'est vrai que X, seulement… ») ? [7]",
    "o": [
     "かのように",
     "とともに",
     "にともなって",
     "ことはが"
    ],
    "a": 3,
    "e": "→ 〜ことはが."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« certes… mais », « c'est vrai que X, seulement… ») ? [8]",
    "o": [
     "とは",
     "にすれば",
     "ことはが",
     "に限って"
    ],
    "a": 2,
    "e": "→ 〜ことはが."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« certes… mais », « c'est vrai que X, seulement… ») ? [9]",
    "o": [
     "ことはが",
     "を問わず",
     "とともに",
     "を皮切りに"
    ],
    "a": 0,
    "e": "→ 〜ことはが."
   }
  ]
 },
 {
  "id": "c062",
  "g": "～だらけ",
  "m": "« couvert de », « plein de » (souvent quelque chose de négatif, en désordre). Abondance excessive et désagréable.",
  "f": "【名詞】＋ だらけ",
  "c": "express",
  "lv": 2,
  "rel": [],
  "note": "Forte connotation négative : saleté, fautes, désordre : 「間違いだらけ」「泥だらけ」.  ≠ ばかり (proportion) : だらけ insiste sur le « partout, en grande quantité, désagréable ».  Souvent : 血だらけ、ほこりだらけ、借金だらけ.",
  "ex": [
   {
    "jp": "彼の部屋は本だらけだ。",
    "fr": "Sa chambre est pleine de livres (partout)."
   },
   {
    "jp": "彼のレポートは誤字だらけで、読みにくい。",
    "fr": "Son rapport est truffé de fautes, difficile à lire."
   },
   {
    "jp": "子供は泥だらけになって遊んでいた。",
    "fr": "L'enfant jouait, tout couvert de boue."
   }
  ],
  "qs": [
   {
    "t": "fill",
    "q": "彼の部屋は本＿＿＿だ。",
    "fr": "Sa chambre est pleine de livres (partout).",
    "o": [
     "上で",
     "と言えば",
     "だらけ",
     "のみ"
    ],
    "a": 2,
    "e": "〜だらけ : « couvert de », « plein de » (souvent quelque chose de négat."
   },
   {
    "t": "fill",
    "q": "彼のレポートは誤字＿＿＿で、読みにくい。",
    "fr": "Son rapport est truffé de fautes, difficile à lire.",
    "o": [
     "だらけ",
     "きる",
     "きれない",
     "あまり"
    ],
    "a": 0,
    "e": "〜だらけ : « couvert de », « plein de » (souvent quelque chose de négat."
   },
   {
    "t": "fill",
    "q": "子供は泥＿＿＿になって遊んでいた。",
    "fr": "L'enfant jouait, tout couvert de boue.",
    "o": [
     "に限って",
     "だらけ",
     "は問わない",
     "きる"
    ],
    "a": 1,
    "e": "〜だらけ : « couvert de », « plein de » (souvent quelque chose de négat."
   },
   {
    "t": "meaning",
    "q": "「彼の部屋は本だらけだ。」— que signifie 〜だらけ ?",
    "o": [
     "« couvert de », « plein de » (souvent quelque chose de négat",
     "« en commençant par », « à partir de (qui a marqué le début ",
     "« même pour X », « même si c'est X »",
     "« s'en tirer avec », « ça suffit / on n'a pas besoin de »"
    ],
    "a": 0,
    "e": "〜だらけ = « couvert de », « plein de » (souvent quelque chose de négat."
   },
   {
    "t": "meaning",
    "q": "「彼のレポートは誤字だらけで、読みにくい。」— que signifie 〜だらけ ?",
    "o": [
     "« même pour X », « même si c'est X »",
     "« couvert de », « plein de » (souvent quelque chose de négat",
     "« des choses comme… et… (et tout ça) »",
     "« en somme », « bref », « pour résumer »"
    ],
    "a": 1,
    "e": "〜だらけ = « couvert de », « plein de » (souvent quelque chose de négat."
   },
   {
    "t": "meaning",
    "q": "「子供は泥だらけになって遊んでいた。」— que signifie 〜だらけ ?",
    "o": [
     "« après avoir fait X (et sur cette base) »",
     "« couvert de », « plein de » (souvent quelque chose de négat",
     "« juste parce que (si peu) », « pour si peu »",
     "« non seulement… (mais aussi) », « sans se limiter à »"
    ],
    "a": 1,
    "e": "〜だらけ = « couvert de », « plein de » (souvent quelque chose de négat."
   },
   {
    "t": "usage",
    "q": "« « couvert de », « plein de » (souvent quelque chose de négat » se dit en japonais :",
    "o": [
     "だらけ",
     "一方で",
     "ものがある",
     "ことはない"
    ],
    "a": 0,
    "e": "→ 〜だらけ."
   },
   {
    "t": "nuance",
    "q": "Quel est le sens correct de 〜だらけ ?",
    "o": [
     "« tant bien que mal », « d'une manière ou d'une autre », « r",
     "« autant que », « tant que »",
     "« à mesure que », « accompagné de », « du fait de »",
     "« couvert de », « plein de » (souvent quelque chose de négat"
    ],
    "a": 3,
    "e": "Forte connotation négative : saleté, fautes, désordre : 「間違いだらけ」「泥だらけ」."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« couvert de », « plein de » (souvent quelque chose de négat) ? [8]",
    "o": [
     "当たり",
     "にしても",
     "だらけ",
     "かける"
    ],
    "a": 2,
    "e": "→ 〜だらけ."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« couvert de », « plein de » (souvent quelque chose de négat) ? [9]",
    "o": [
     "わけがない",
     "結局",
     "を通して",
     "だらけ"
    ],
    "a": 3,
    "e": "→ 〜だらけ."
   }
  ]
 },
 {
  "id": "c063",
  "g": "～なりに ／ ～なりの",
  "m": "« à sa manière », « selon ses propres moyens ». Reconnaît qu'à son niveau/dans ses limites, on fait de son mieux.",
  "f": "【名詞】＋ なりに（＋動詞）／ なりの（＋名詞）",
  "c": "express",
  "lv": 2,
  "rel": [],
  "note": "Exprime « à sa façon, compte tenu de ses capacités/sa position » : 「私なりに頑張った」.  なりに modifie un verbe ; なりの modifie un nom (「彼なりの考え」).  Nuance respectueuse : on valorise l'effort propre à chacun.",
  "ex": [
   {
    "jp": "私は私なりに幸せを感じている。",
    "fr": "Je me sens heureux à ma manière."
   },
   {
    "jp": "それぞれが、それぞれなりに問題を解決しようとしている。",
    "fr": "Chacun essaie de résoudre le problème à sa façon."
   },
   {
    "jp": "子供たちは、子供たちなりに世界を理解している。",
    "fr": "Les enfants comprennent le monde à leur manière."
   }
  ],
  "qs": [
   {
    "t": "fill",
    "q": "私は私＿＿＿幸せを感じている。",
    "fr": "Je me sens heureux à ma manière.",
    "o": [
     "なりに",
     "つつある",
     "のか",
     "とともに"
    ],
    "a": 0,
    "e": "〜なりに : « à sa manière », « selon ses propres moyens »."
   },
   {
    "t": "fill",
    "q": "それぞれが、それぞれ＿＿＿問題を解決しようとしている。",
    "fr": "Chacun essaie de résoudre le problème à sa façon.",
    "o": [
     "および",
     "やらやら",
     "なりに",
     "それでも"
    ],
    "a": 2,
    "e": "〜なりに : « à sa manière », « selon ses propres moyens »."
   },
   {
    "t": "fill",
    "q": "子供たちは、子供たち＿＿＿世界を理解している。",
    "fr": "Les enfants comprennent le monde à leur manière.",
    "o": [
     "やらやら",
     "なりに",
     "のかと思った",
     "といった"
    ],
    "a": 1,
    "e": "〜なりに : « à sa manière », « selon ses propres moyens »."
   },
   {
    "t": "meaning",
    "q": "「私は私なりに幸せを感じている。」— que signifie 〜なりに ?",
    "o": [
     "« à sa manière », « selon ses propres moyens »",
     "« juste parce que (si peu) », « pour si peu »",
     "« couvert de », « plein de » (souvent quelque chose de négat",
     "« c'est-à-dire », « à savoir », « autrement dit »"
    ],
    "a": 0,
    "e": "〜なりに = « à sa manière », « selon ses propres moyens »."
   },
   {
    "t": "meaning",
    "q": "「それぞれが、それぞれなりに問題を解決しようとしている。」— que signifie 〜なりに ?",
    "o": [
     "« par (unité) », « pour chaque »",
     "« même pour X », « même si c'est X »",
     "« d'un côté… de l'autre », « tandis que »",
     "« à sa manière », « selon ses propres moyens »"
    ],
    "a": 3,
    "e": "〜なりに = « à sa manière », « selon ses propres moyens »."
   },
   {
    "t": "meaning",
    "q": "「子供たちは、子供たちなりに世界を理解している。」— que signifie 〜なりに ?",
    "o": [
     "« même pour X », « même si c'est X »",
     "« des choses comme… et… (et tout ça) »",
     "« bien sûr… mais aussi », « non seulement… (cela va de soi) ",
     "« à sa manière », « selon ses propres moyens »"
    ],
    "a": 3,
    "e": "〜なりに = « à sa manière », « selon ses propres moyens »."
   },
   {
    "t": "usage",
    "q": "« « à sa manière », « selon ses propres moyens » » se dit en japonais :",
    "o": [
     "それでも",
     "にしては",
     "なりに",
     "で済む"
    ],
    "a": 2,
    "e": "→ 〜なりに."
   },
   {
    "t": "nuance",
    "q": "Quel est le sens correct de 〜なりに ?",
    "o": [
     "« à sa manière », « selon ses propres moyens »",
     "« commencer à (sans finir) », « être à moitié… »",
     "« faire complètement », « jusqu'au bout », « à fond »",
     "« finalement », « en fin de compte », « au bout du compte »"
    ],
    "a": 0,
    "e": "Exprime « à sa façon, compte tenu de ses capacités/sa position » : 「私なりに頑張った」."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« à sa manière », « selon ses propres moyens ») ? [8]",
    "o": [
     "なりに",
     "をめぐって",
     "ことはが",
     "すなわち"
    ],
    "a": 0,
    "e": "→ 〜なりに."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« à sa manière », « selon ses propres moyens ») ? [9]",
    "o": [
     "やらやら",
     "て以来",
     "のかと思った",
     "なりに"
    ],
    "a": 3,
    "e": "→ 〜なりに."
   }
  ]
 },
 {
  "id": "c064",
  "g": "すなわち",
  "m": "« c'est-à-dire », « à savoir », « autrement dit ». Reformule de façon précise/équivalente ce qui précède (registre formel).",
  "f": "〔A〕、＋ すなわち、〔A の言い換え〕。",
  "c": "express",
  "lv": 2,
  "rel": [],
  "note": "Reformulation exacte/équivalence, plus formel/écrit que つまり.  Souvent pour préciser une définition, un équivalent : 「母の兄、すなわち伯父」.  ≠ 要するに (résumé) : すなわち = équivalence stricte.",
  "ex": [
   {
    "jp": "あの人は母の兄、すなわち私の伯父です。",
    "fr": "Cette personne est le frère de ma mère, c'est-à-dire mon oncle."
   },
   {
    "jp": "彼は芸術科目、すなわち美術と音楽が得意だ。",
    "fr": "Il excelle dans les matières artistiques, à savoir le dessin et la musique."
   },
   {
    "jp": "徳川将軍の時代、すなわち江戸時代に発展した。",
    "fr": "Cela s'est développé à l'époque des shoguns Tokugawa, c'est-à-dire l'époque d'Edo."
   }
  ],
  "qs": [
   {
    "t": "fill",
    "q": "あの人は母の兄、＿＿＿私の伯父です。",
    "fr": "Cette personne est le frère de ma mère, c'est-à-dire mon oncle.",
    "o": [
     "で済む",
     "結局",
     "かと思う",
     "すなわち"
    ],
    "a": 3,
    "e": "〜すなわち : « c'est-à-dire », « à savoir », « autrement dit »."
   },
   {
    "t": "fill",
    "q": "彼は芸術科目、＿＿＿美術と音楽が得意だ。",
    "fr": "Il excelle dans les matières artistiques, à savoir le dessin et la musique.",
    "o": [
     "ことはない",
     "とか",
     "すなわち",
     "ばかりでなく"
    ],
    "a": 2,
    "e": "〜すなわち : « c'est-à-dire », « à savoir », « autrement dit »."
   },
   {
    "t": "fill",
    "q": "徳川将軍の時代、＿＿＿江戸時代に発展した。",
    "fr": "Cela s'est développé à l'époque des shoguns Tokugawa, c'est-à-dire l'époque d'Edo.",
    "o": [
     "ものがある",
     "すなわち",
     "に限らず",
     "なりに"
    ],
    "a": 1,
    "e": "〜すなわち : « c'est-à-dire », « à savoir », « autrement dit »."
   },
   {
    "t": "meaning",
    "q": "「あの人は母の兄、すなわち私の伯父です。」— que signifie 〜すなわち ?",
    "o": [
     "« malgré tout », « et pourtant », « même ainsi »",
     "« juste parce que (si peu) », « pour si peu »",
     "« il est impossible que », « il n'y a aucune chance que »",
     "« c'est-à-dire », « à savoir », « autrement dit »"
    ],
    "a": 3,
    "e": "〜すなわち = « c'est-à-dire », « à savoir », « autrement dit »."
   },
   {
    "t": "meaning",
    "q": "「彼は芸術科目、すなわち美術と音楽が得意だ。」— que signifie 〜すなわち ?",
    "o": [
     "« il n'y a pas besoin de », « ce n'est pas la peine de »",
     "« justement », « c'est précisément… qui »",
     "« c'est-à-dire », « à savoir », « autrement dit »",
     "« ce qu'on appelle… (c'est) », « X, c'est… »"
    ],
    "a": 2,
    "e": "〜すなわち = « c'est-à-dire », « à savoir », « autrement dit »."
   },
   {
    "t": "meaning",
    "q": "「徳川将軍の時代、すなわち江戸時代に発展した。」— que signifie 〜すなわち ?",
    "o": [
     "« c'est-à-dire », « à savoir », « autrement dit »",
     "« bien sûr… mais aussi », « non seulement… (cela va de soi) ",
     "« par (unité) », « pour chaque »",
     "« en parlant de », « à propos de », « quand on évoque X (ce "
    ],
    "a": 0,
    "e": "〜すなわち = « c'est-à-dire », « à savoir », « autrement dit »."
   },
   {
    "t": "usage",
    "q": "« « c'est-à-dire », « à savoir », « autrement dit » » se dit en japonais :",
    "o": [
     "一方で",
     "すなわち",
     "きり",
     "ことはが"
    ],
    "a": 1,
    "e": "→ 〜すなわち."
   },
   {
    "t": "nuance",
    "q": "Quel est le sens correct de 〜すなわち ?",
    "o": [
     "« en même temps que », « dès que », « à la fois »",
     "« sans distinction de », « indépendamment de »",
     "« c'est-à-dire », « à savoir », « autrement dit »",
     "« justement », « c'est précisément… qui »"
    ],
    "a": 2,
    "e": "Reformulation exacte/équivalence, plus formel/écrit que つまり."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« c'est-à-dire », « à savoir », « autrement dit ») ? [8]",
    "o": [
     "あまり",
     "すなわち",
     "なんとか",
     "ものがある"
    ],
    "a": 1,
    "e": "→ 〜すなわち."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« c'est-à-dire », « à savoir », « autrement dit ») ? [9]",
    "o": [
     "と言えば",
     "および",
     "すなわち",
     "とは"
    ],
    "a": 2,
    "e": "→ 〜すなわち."
   }
  ]
 },
 {
  "id": "c065",
  "g": "要するに（ようするに）",
  "m": "« en somme », « bref », « pour résumer ». Condense un propos long en son point essentiel.",
  "f": "〔長い説明〕。＋ 要するに、〔要点〕。",
  "c": "express",
  "lv": 2,
  "rel": [],
  "note": "Résume/synthétise ce qui précède en allant à l'essentiel.  ≠ すなわち (équivalence) : 要するに = synthèse, conclusion résumée.  Registre courant à neutre ; fréquent à l'oral pour conclure.",
  "ex": [
   {
    "jp": "明日は残業もあるし、接待にも行く。要するに、夕飯はいらないよ。",
    "fr": "Demain j'ai des heures sup et une réception. Bref, pas besoin de dîner pour moi."
   },
   {
    "jp": "彼は遅刻も多いし、ミスも多い。要するに、信用できない。",
    "fr": "Il arrive souvent en retard et fait beaucoup d'erreurs. En somme, on ne peut pas lui faire confiance."
   },
   {
    "jp": "要するに、君は何が言いたいの？",
    "fr": "Bref, qu'est-ce que tu veux dire ?"
   }
  ],
  "qs": [
   {
    "t": "fill",
    "q": "明日は残業もあるし、接待にも行く。＿＿＿、夕飯はいらないよ。",
    "fr": "Demain j'ai des heures sup et une réception. Bref, pas besoin de dîner pour moi.",
    "o": [
     "にすれば",
     "ないではいられない",
     "くらい",
     "要するに"
    ],
    "a": 3,
    "e": "〜要するに : « en somme », « bref », « pour résumer »."
   },
   {
    "t": "fill",
    "q": "彼は遅刻も多いし、ミスも多い。＿＿＿、信用できない。",
    "fr": "Il arrive souvent en retard et fait beaucoup d'erreurs. En somme, on ne peut pas lui faire confiance.",
    "o": [
     "要するに",
     "だけ",
     "かと思う",
     "べきだ"
    ],
    "a": 0,
    "e": "〜要するに : « en somme », « bref », « pour résumer »."
   },
   {
    "t": "fill",
    "q": "＿＿＿、君は何が言いたいの？",
    "fr": "Bref, qu'est-ce que tu veux dire ?",
    "o": [
     "にしては",
     "そこで",
     "要するに",
     "こそ"
    ],
    "a": 2,
    "e": "〜要するに : « en somme », « bref », « pour résumer »."
   },
   {
    "t": "meaning",
    "q": "「明日は残業もあるし、接待にも行く。要するに、夕飯はいらないよ。」— que signifie 〜要するに ?",
    "o": [
     "« insupportablement », « tellement… que je n'en peux plus »",
     "« en somme », « bref », « pour résumer »",
     "« tels que », « comme par exemple »",
     "« s'en tirer avec », « ça suffit / on n'a pas besoin de »"
    ],
    "a": 1,
    "e": "〜要するに = « en somme », « bref », « pour résumer »."
   },
   {
    "t": "meaning",
    "q": "「彼は遅刻も多いし、ミスも多い。要するに、信用できない。」— que signifie 〜要するに ?",
    "o": [
     "« cela dit », « seulement », « toutefois »",
     "« en somme », « bref », « pour résumer »",
     "« tellement… que », « à cause de l'excès de… »",
     "« depuis que… (et jusqu'à maintenant) »"
    ],
    "a": 1,
    "e": "〜要するに = « en somme », « bref », « pour résumer »."
   },
   {
    "t": "meaning",
    "q": "「要するに、君は何が言いたいの？」— que signifie 〜要するに ?",
    "o": [
     "« non seulement… mais aussi (en plus) »",
     "« s'en tirer avec », « ça suffit / on n'a pas besoin de »",
     "« en somme », « bref », « pour résumer »",
     "« tant bien que mal », « d'une manière ou d'une autre », « r"
    ],
    "a": 2,
    "e": "〜要するに = « en somme », « bref », « pour résumer »."
   },
   {
    "t": "usage",
    "q": "« « en somme », « bref », « pour résumer » » se dit en japonais :",
    "o": [
     "に限る",
     "に限り",
     "要するに",
     "ものがある"
    ],
    "a": 2,
    "e": "→ 〜要するに."
   },
   {
    "t": "nuance",
    "q": "Quel est le sens correct de 〜要するに ?",
    "o": [
     "« en somme », « bref », « pour résumer »",
     "« d'un côté… de l'autre », « tandis que »",
     "« même pour X », « même si c'est X »",
     "« justement », « c'est précisément… qui »"
    ],
    "a": 0,
    "e": "Résume/synthétise ce qui précède en allant à l'essentiel."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« en somme », « bref », « pour résumer ») ? [8]",
    "o": [
     "ただ",
     "あまり",
     "はもちろん",
     "要するに"
    ],
    "a": 3,
    "e": "→ 〜要するに."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« en somme », « bref », « pour résumer ») ? [9]",
    "o": [
     "なんとか",
     "かのように",
     "要するに",
     "ものがある"
    ],
    "a": 2,
    "e": "→ 〜要するに."
   }
  ]
 },
 {
  "id": "c066",
  "g": "結局（は）（けっきょく）",
  "m": "« finalement », « en fin de compte », « au bout du compte ». Indique le résultat final après un processus.",
  "f": "〔過程〕。＋ 結局（は）、〔最終的な結果〕。",
  "c": "condition",
  "lv": 2,
  "rel": [],
  "note": "Conclusion après des hésitations/efforts : 「いろいろ考えた末に、結局…」.  Souvent un résultat un peu décevant ou inattendu.  結局は + généralité : 「結局、正直者が損をする」.",
  "ex": [
   {
    "jp": "いろいろ考えた末に、結局その計画は中止することにした。",
    "fr": "Après mûre réflexion, nous avons finalement décidé d'annuler ce projet."
   },
   {
    "jp": "「結局、正直者が馬鹿を見る」ということにはなってほしくない。",
    "fr": "Je ne veux pas qu'au final, ce soient les honnêtes gens qui soient lésés."
   },
   {
    "jp": "いろいろ試したが、結局うまくいかなかった。",
    "fr": "J'ai tout essayé, mais en fin de compte ça n'a pas marché."
   }
  ],
  "qs": [
   {
    "t": "fill",
    "q": "いろいろ考えた末に、＿＿＿その計画は中止することにした。",
    "fr": "Après mûre réflexion, nous avons finalement décidé d'annuler ce projet.",
    "o": [
     "上で",
     "を通して",
     "結局",
     "ないではいられない"
    ],
    "a": 2,
    "e": "〜結局 : « finalement », « en fin de compte », « au bout du compte »."
   },
   {
    "t": "fill",
    "q": "「＿＿＿、正直者が馬鹿を見る」ということにはなってほしくない。",
    "fr": "Je ne veux pas qu'au final, ce soient les honnêtes gens qui soient lésés.",
    "o": [
     "一方で",
     "つつある",
     "結局",
     "と同時に"
    ],
    "a": 2,
    "e": "〜結局 : « finalement », « en fin de compte », « au bout du compte »."
   },
   {
    "t": "fill",
    "q": "いろいろ試したが、＿＿＿うまくいかなかった。",
    "fr": "J'ai tout essayé, mais en fin de compte ça n'a pas marché.",
    "o": [
     "は問わない",
     "結局",
     "にしては",
     "かと思う"
    ],
    "a": 1,
    "e": "〜結局 : « finalement », « en fin de compte », « au bout du compte »."
   },
   {
    "t": "meaning",
    "q": "「いろいろ考えた末に、結局その計画は中止することにした。」— que signifie 〜結局 ?",
    "o": [
     "« à mesure que », « accompagné de », « du fait de »",
     "« finalement », « en fin de compte », « au bout du compte »",
     "« il y a quelque chose de… (qui touche) », « on ressent un c",
     "« c'est-à-dire », « à savoir », « autrement dit »"
    ],
    "a": 1,
    "e": "〜結局 = « finalement », « en fin de compte », « au bout du compte »."
   },
   {
    "t": "meaning",
    "q": "「「結局、正直者が馬鹿を見る」ということにはなってほしくない。」— que signifie 〜結局 ?",
    "o": [
     "« non seulement… (mais aussi) », « sans se limiter à »",
     "« j'ai cru que… (alors que ce n'était pas le cas) »",
     "« même pour X », « même si c'est X »",
     "« finalement », « en fin de compte », « au bout du compte »"
    ],
    "a": 3,
    "e": "〜結局 = « finalement », « en fin de compte », « au bout du compte »."
   },
   {
    "t": "meaning",
    "q": "「いろいろ試したが、結局うまくいかなかった。」— que signifie 〜結局 ?",
    "o": [
     "« par », « selon », « à cause de », « grâce à »",
     "« des choses comme… et… (et tout ça) »",
     "« finalement », « en fin de compte », « au bout du compte »",
     "« c'est-à-dire », « à savoir », « autrement dit »"
    ],
    "a": 2,
    "e": "〜結局 = « finalement », « en fin de compte », « au bout du compte »."
   },
   {
    "t": "usage",
    "q": "« « finalement », « en fin de compte », « au bout du compte » » se dit en japonais :",
    "o": [
     "結局",
     "だけ",
     "に限る",
     "てしかたがない"
    ],
    "a": 0,
    "e": "→ 〜結局."
   },
   {
    "t": "nuance",
    "q": "Quel est le sens correct de 〜結局 ?",
    "o": [
     "« finalement », « en fin de compte », « au bout du compte »",
     "« d'un côté… de l'autre », « tandis que »",
     "« en même temps que », « dès que », « à la fois »",
     "« à l'occasion de », « au moment de (faire quelque chose d'i"
    ],
    "a": 0,
    "e": "Conclusion après des hésitations/efforts : 「いろいろ考えた末に、結局…」."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« finalement », « en fin de compte », « au bout du compte ») ? [8]",
    "o": [
     "こそ",
     "結局",
     "すなわち",
     "は問わない"
    ],
    "a": 1,
    "e": "→ 〜結局."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« finalement », « en fin de compte », « au bout du compte ») ? [9]",
    "o": [
     "かと思う",
     "結局",
     "要するに",
     "て以来"
    ],
    "a": 1,
    "e": "→ 〜結局."
   }
  ]
 },
 {
  "id": "c067",
  "g": "あまりに～ ／ あまりの～（に）",
  "m": "« tellement… que », « à cause de l'excès de… ». Un degré excessif entraîne une conséquence.",
  "f": "あまりに（も）＋【形容詞・動詞】　／　あまりの＋【名詞】＋ に／で",
  "c": "express",
  "lv": 2,
  "rel": [],
  "note": "あまりに（も）+ adj./verbe : « tellement… ».  あまりの + nom + に : « à cause de l'excès de… » (あまりの暑さに).  Toujours une conséquence (souvent involontaire) qui suit.",
  "ex": [
   {
    "jp": "この問題はあまりにも複雑で、簡単には解決できない。",
    "fr": "Ce problème est tellement complexe qu'on ne peut pas le résoudre facilement."
   },
   {
    "jp": "あまりの楽しさに、時間が経つのを忘れた。",
    "fr": "Tellement c'était amusant que j'ai oublié l'heure."
   },
   {
    "jp": "あまりの暑さに、外に出る気がしない。",
    "fr": "À cause de cette chaleur excessive, je n'ai pas envie de sortir."
   }
  ],
  "qs": [
   {
    "t": "fill",
    "q": "この問題は＿＿＿も複雑で、簡単には解決できない。",
    "fr": "Ce problème est tellement complexe qu'on ne peut pas le résoudre facilement.",
    "o": [
     "あまりに",
     "かのように",
     "なんてんだろう",
     "ただ"
    ],
    "a": 0,
    "e": "〜あまりに : « tellement… que », « à cause de l'excès de… »."
   },
   {
    "t": "meaning",
    "q": "「この問題はあまりにも複雑で、簡単には解決できない。」— que signifie 〜あまりに ?",
    "o": [
     "« tellement… que », « à cause de l'excès de… »",
     "« par », « selon », « à cause de », « grâce à »",
     "« ne pas pouvoir finir/faire complètement », « trop… pour »",
     "« en commençant par », « à partir de (qui a marqué le début "
    ],
    "a": 0,
    "e": "〜あまりに = « tellement… que », « à cause de l'excès de… »."
   },
   {
    "t": "meaning",
    "q": "「あまりの楽しさに、時間が経つのを忘れた。」— que signifie 〜あまりに ?",
    "o": [
     "« non seulement… mais aussi (en plus) »",
     "« il est impossible que », « il n'y a aucune chance que »",
     "« tellement… que », « à cause de l'excès de… »",
     "« comme si », « comme s'il s'agissait de »"
    ],
    "a": 2,
    "e": "〜あまりに = « tellement… que », « à cause de l'excès de… »."
   },
   {
    "t": "meaning",
    "q": "「あまりの暑さに、外に出る気がしない。」— que signifie 〜あまりに ?",
    "o": [
     "« par (unité) », « pour chaque »",
     "« tellement… que », « à cause de l'excès de… »",
     "« cela dit », « seulement », « toutefois »",
     "« commencer à (sans finir) », « être à moitié… »"
    ],
    "a": 1,
    "e": "〜あまりに = « tellement… que », « à cause de l'excès de… »."
   },
   {
    "t": "usage",
    "q": "« « tellement… que », « à cause de l'excès de… » » se dit en japonais :",
    "o": [
     "あまりに",
     "ただし",
     "のかと思った",
     "に際して"
    ],
    "a": 0,
    "e": "→ 〜あまりに."
   },
   {
    "t": "nuance",
    "q": "Quel est le sens correct de 〜あまりに ?",
    "o": [
     "Ajoute か à une phrase pour adoucir, exprimer une incertitude",
     "« tant bien que mal », « d'une manière ou d'une autre », « r",
     "« tellement… que », « à cause de l'excès de… »",
     "« est-ce parce que…? », « sans doute parce que… »"
    ],
    "a": 2,
    "e": "あまりに（も）+ adj./verbe : « tellement… »."
   },
   {
    "t": "usage",
    "q": "Complétez avec la forme correcte (sens : « tellement… que », « à cause de l'excès de… ») :",
    "o": [
     "一方で",
     "において",
     "とか",
     "あまりに"
    ],
    "a": 3,
    "e": "→ 〜あまりに."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« tellement… que », « à cause de l'excès de… ») ? [7]",
    "o": [
     "なりに",
     "あまりに",
     "とともに",
     "せいか"
    ],
    "a": 1,
    "e": "→ 〜あまりに."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« tellement… que », « à cause de l'excès de… ») ? [8]",
    "o": [
     "そこで",
     "といった",
     "あまりに",
     "に際して"
    ],
    "a": 2,
    "e": "→ 〜あまりに."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« tellement… que », « à cause de l'excès de… ») ? [9]",
    "o": [
     "あまり",
     "を通して",
     "だけ",
     "あまりに"
    ],
    "a": 3,
    "e": "→ 〜あまりに."
   }
  ]
 },
 {
  "id": "c068",
  "g": "あまり（～と）",
  "m": "« si l'on (fait) trop… (alors) ». Avertissement : un excès entraîne une conséquence négative.",
  "f": "あまり ＋【動詞辞書形】＋ と、〜（よ／てしまう など）",
  "c": "condition",
  "lv": 2,
  "rel": [],
  "note": "Met en garde : « si tu fais trop X, il arrivera Y (négatif) ».  Souvent avec すぎる pour renforcer : 「あまり無理をしすぎると…」.  Différent de あまり〜ない (« pas beaucoup ») : ici c'est « trop + conséquence ».",
  "ex": [
   {
    "jp": "あまり無理をすると、体をこわしてしまうよ。",
    "fr": "Si tu forces trop, tu vas ruiner ta santé."
   },
   {
    "jp": "あまり遅くまで起きていると、翌朝がつらいよ。",
    "fr": "Si tu veilles trop tard, le lendemain matin sera dur."
   },
   {
    "jp": "あまり緊張すると、うまく話せなくなるよ。",
    "fr": "Si tu stresses trop, tu n'arriveras plus à bien parler."
   }
  ],
  "qs": [
   {
    "t": "fill",
    "q": "＿＿＿無理をすると、体をこわしてしまうよ。",
    "fr": "Si tu forces trop, tu vas ruiner ta santé.",
    "o": [
     "あまり",
     "やらやら",
     "ことだ",
     "きる"
    ],
    "a": 0,
    "e": "〜あまり : « si l'on (fait) trop… (alors) »."
   },
   {
    "t": "fill",
    "q": "＿＿＿遅くまで起きていると、翌朝がつらいよ。",
    "fr": "Si tu veilles trop tard, le lendemain matin sera dur.",
    "o": [
     "ばかりでなく",
     "とは",
     "だらけ",
     "あまり"
    ],
    "a": 3,
    "e": "〜あまり : « si l'on (fait) trop… (alors) »."
   },
   {
    "t": "fill",
    "q": "＿＿＿緊張すると、うまく話せなくなるよ。",
    "fr": "Si tu stresses trop, tu n'arriveras plus à bien parler.",
    "o": [
     "に限って",
     "ことだ",
     "といった",
     "あまり"
    ],
    "a": 3,
    "e": "〜あまり : « si l'on (fait) trop… (alors) »."
   },
   {
    "t": "meaning",
    "q": "「あまり無理をすると、体をこわしてしまうよ。」— que signifie 〜あまり ?",
    "o": [
     "« si l'on (fait) trop… (alors) »",
     "« rien ne vaut », « le mieux c'est… »",
     "« dans », « au sein de », « en matière de »",
     "« uniquement (dans le cas de) », « exclusivement pour »"
    ],
    "a": 0,
    "e": "〜あまり = « si l'on (fait) trop… (alors) »."
   },
   {
    "t": "meaning",
    "q": "「あまり遅くまで起きていると、翌朝がつらいよ。」— que signifie 〜あまり ?",
    "o": [
     "« ce qu'on appelle… (c'est) », « X, c'est… »",
     "« insupportablement », « tellement… que je n'en peux plus »",
     "« non seulement… (mais aussi) », « sans se limiter à »",
     "« si l'on (fait) trop… (alors) »"
    ],
    "a": 3,
    "e": "〜あまり = « si l'on (fait) trop… (alors) »."
   },
   {
    "t": "meaning",
    "q": "「あまり緊張すると、うまく話せなくなるよ。」— que signifie 〜あまり ?",
    "o": [
     "« si l'on (fait) trop… (alors) »",
     "« en même temps que », « avec », « à mesure que »",
     "« justement », « c'est précisément… qui »",
     "« par », « selon », « à cause de », « grâce à »"
    ],
    "a": 0,
    "e": "〜あまり = « si l'on (fait) trop… (alors) »."
   },
   {
    "t": "usage",
    "q": "« « si l'on (fait) trop… (alors) » » se dit en japonais :",
    "o": [
     "ただ",
     "ただし",
     "だらけ",
     "あまり"
    ],
    "a": 3,
    "e": "→ 〜あまり."
   },
   {
    "t": "nuance",
    "q": "Quel est le sens correct de 〜あまり ?",
    "o": [
     "« c'est-à-dire », « à savoir », « autrement dit »",
     "« non seulement… mais aussi (en plus) »",
     "« comme c'est… ! », « quel(le)… ! »",
     "« si l'on (fait) trop… (alors) »"
    ],
    "a": 3,
    "e": "Met en garde : « si tu fais trop X, il arrivera Y (négatif) »."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« si l'on (fait) trop… (alors) ») ? [8]",
    "o": [
     "ないではいられない",
     "をはじめ",
     "あまり",
     "すなわち"
    ],
    "a": 2,
    "e": "→ 〜あまり."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« si l'on (fait) trop… (alors) ») ? [9]",
    "o": [
     "あまり",
     "のかと思った",
     "をはじめ",
     "ことだ"
    ],
    "a": 0,
    "e": "→ 〜あまり."
   }
  ]
 },
 {
  "id": "c069",
  "g": "なんて～んだろう ／ なんと～のだろう",
  "m": "« comme c'est… ! », « quel(le)… ! ». Exclamation d'admiration ou d'étonnement.",
  "f": "なんて／なんと ＋【形容詞・名詞】＋ （な）んだろう ／ のだろう",
  "c": "express",
  "lv": 2,
  "rel": [],
  "note": "Exclamation forte : « comme c'est beau ! », « quelle bonne idée ! ».  なんて = plus oral/émotionnel ; なんと = plus écrit/littéraire.  な-adj/nom prennent な : 「なんてきれいなんだろう」.",
  "ex": [
   {
    "jp": "なんて美しい景色なんだろう。",
    "fr": "Comme ce paysage est beau !"
   },
   {
    "jp": "なんとすばらしい考えだろう。",
    "fr": "Quelle idée magnifique !"
   },
   {
    "jp": "なんて優しい人なんだろう。",
    "fr": "Comme cette personne est gentille !"
   }
  ],
  "qs": [
   {
    "t": "meaning",
    "q": "「なんて美しい景色なんだろう。」— que signifie 〜なんてんだろう ?",
    "o": [
     "« comme c'est… ! », « quel(le)… ! »",
     "« seulement », « depuis que… (rien ensuite) », « rester à »",
     "« à sa manière », « selon ses propres moyens »",
     "« tant bien que mal », « d'une manière ou d'une autre », « r"
    ],
    "a": 0,
    "e": "〜なんてんだろう = « comme c'est… ! », « quel(le)… ! »."
   },
   {
    "t": "meaning",
    "q": "「なんとすばらしい考えだろう。」— que signifie 〜なんてんだろう ?",
    "o": [
     "« comme c'est… ! », « quel(le)… ! »",
     "« par (unité) », « pour chaque »",
     "« en même temps que », « avec », « à mesure que »",
     "« certes… mais », « c'est vrai que X, seulement… »"
    ],
    "a": 0,
    "e": "〜なんてんだろう = « comme c'est… ! », « quel(le)… ! »."
   },
   {
    "t": "meaning",
    "q": "「なんて優しい人なんだろう。」— que signifie 〜なんてんだろう ?",
    "o": [
     "« uniquement à/dans/par » (のみ combiné à une particule de lie",
     "« non seulement… (mais aussi) », « sans se limiter à »",
     "« il n'y a pas besoin de », « ce n'est pas la peine de »",
     "« comme c'est… ! », « quel(le)… ! »"
    ],
    "a": 3,
    "e": "〜なんてんだろう = « comme c'est… ! », « quel(le)… ! »."
   },
   {
    "t": "usage",
    "q": "« « comme c'est… ! », « quel(le)… ! » » se dit en japonais :",
    "o": [
     "のみ",
     "なんとか",
     "といった",
     "なんてんだろう"
    ],
    "a": 3,
    "e": "→ 〜なんてんだろう."
   },
   {
    "t": "nuance",
    "q": "Quel est le sens correct de 〜なんてんだろう ?",
    "o": [
     "« comme c'est… ! », « quel(le)… ! »",
     "« à mesure que », « accompagné de », « du fait de »",
     "« non seulement… mais aussi (en plus) »",
     "« malgré tout », « et pourtant », « même ainsi »"
    ],
    "a": 0,
    "e": "Exclamation forte : « comme c'est beau ! », « quelle bonne idée ! »."
   },
   {
    "t": "usage",
    "q": "Complétez avec la forme correcte (sens : « comme c'est… ! », « quel(le)… ! ») :",
    "o": [
     "せいか",
     "なんてんだろう",
     "を通して",
     "のか"
    ],
    "a": 1,
    "e": "→ 〜なんてんだろう."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« comme c'est… ! », « quel(le)… ! ») ? [6]",
    "o": [
     "ことはが",
     "なんてんだろう",
     "やらやら",
     "ことはない"
    ],
    "a": 1,
    "e": "→ 〜なんてんだろう."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« comme c'est… ! », « quel(le)… ! ») ? [7]",
    "o": [
     "に際して",
     "こそ",
     "なんてんだろう",
     "において"
    ],
    "a": 2,
    "e": "→ 〜なんてんだろう."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« comme c'est… ! », « quel(le)… ! ») ? [8]",
    "o": [
     "そこで",
     "を通して",
     "なんてんだろう",
     "それでも"
    ],
    "a": 2,
    "e": "→ 〜なんてんだろう."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« comme c'est… ! », « quel(le)… ! ») ? [9]",
    "o": [
     "をめぐって",
     "をはじめ",
     "なんてんだろう",
     "とともに"
    ],
    "a": 2,
    "e": "→ 〜なんてんだろう."
   }
  ]
 },
 {
  "id": "c070",
  "g": "～ことだ ／ ～ことか",
  "m": "ことだ = « il faut (conseil) » ou exclamation ; ことか = « combien… ! » (exclamation d'intensité).",
  "f": "【動詞辞書形・ない形】＋ ことだ　／　【疑問詞】〜【普通形】＋ ことか",
  "c": "express",
  "lv": 2,
  "rel": [],
  "note": "ことだ (conseil) : 「合格したいなら、毎日勉強することだ」.  ことだ (exclamation) : 「世話がやけることだ」(c'est qu'il donne du fil à retordre !).  ことか (exclamation d'intensité, souvent avec どんなに／なんと/何度) : 「どんなにうれしかったことか」.",
  "ex": [
   {
    "jp": "やれやれ、うちの夫は世話がやけることだ。",
    "fr": "Là là, mon mari me donne bien du fil à retordre."
   },
   {
    "jp": "この先生に教わって、なんと幸運だったことか。",
    "fr": "Quelle chance j'ai eue d'avoir ce professeur !"
   },
   {
    "jp": "あなたの帰りを、どんなに待っていたことか。",
    "fr": "Combien j'ai attendu ton retour !"
   }
  ],
  "qs": [
   {
    "t": "fill",
    "q": "やれやれ、うちの夫は世話がやける＿＿＿。",
    "fr": "Là là, mon mari me donne bien du fil à retordre.",
    "o": [
     "だけ",
     "当たり",
     "のかと思った",
     "ことだ"
    ],
    "a": 3,
    "e": "〜ことだ : ことだ = « il faut (conseil) » ou exclamation."
   },
   {
    "t": "meaning",
    "q": "「やれやれ、うちの夫は世話がやけることだ。」— que signifie 〜ことだ ?",
    "o": [
     "ことだ = « il faut (conseil) » ou exclamation",
     "« comme c'est… ! », « quel(le)… ! »",
     "« ne faire qu'augmenter/diminuer », « aller toujours plus da",
     "« à travers », « par l'intermédiaire de », « tout au long de"
    ],
    "a": 0,
    "e": "〜ことだ = ことだ = « il faut (conseil) » ou exclamation."
   },
   {
    "t": "meaning",
    "q": "「この先生に教わって、なんと幸運だったことか。」— que signifie 〜ことだ ?",
    "o": [
     "« il y a quelque chose de… (qui touche) », « on ressent un c",
     "« pour un… (étonnamment) », « compte tenu de »",
     "« c'est pourquoi », « alors (j'ai décidé de) »",
     "ことだ = « il faut (conseil) » ou exclamation"
    ],
    "a": 3,
    "e": "〜ことだ = ことだ = « il faut (conseil) » ou exclamation."
   },
   {
    "t": "meaning",
    "q": "「あなたの帰りを、どんなに待っていたことか。」— que signifie 〜ことだ ?",
    "o": [
     "« uniquement (dans le cas de) », « exclusivement pour »",
     "ことだ = « il faut (conseil) » ou exclamation",
     "« par », « selon », « à cause de », « grâce à »",
     "« en même temps que », « avec », « à mesure que »"
    ],
    "a": 1,
    "e": "〜ことだ = ことだ = « il faut (conseil) » ou exclamation."
   },
   {
    "t": "usage",
    "q": "« ことだ = « il faut (conseil) » ou exclamation » se dit en japonais :",
    "o": [
     "ことだ",
     "かと思う",
     "は問わない",
     "のみ"
    ],
    "a": 0,
    "e": "→ 〜ことだ."
   },
   {
    "t": "nuance",
    "q": "Quel est le sens correct de 〜ことだ ?",
    "o": [
     "« justement », « c'est précisément… qui »",
     "« malgré tout », « et pourtant », « même ainsi »",
     "ことだ = « il faut (conseil) » ou exclamation",
     "« uniquement (dans le cas de) », « exclusivement pour »"
    ],
    "a": 2,
    "e": "ことだ (conseil) : 「合格したいなら、毎日勉強することだ」."
   },
   {
    "t": "usage",
    "q": "Complétez avec la forme correcte (sens : ことだ = « il faut (conseil) » ou exclamation) :",
    "o": [
     "あまり",
     "は問わない",
     "ことだ",
     "はもちろん"
    ],
    "a": 2,
    "e": "→ 〜ことだ."
   },
   {
    "t": "usage",
    "q": "Forme correcte (ことだ = « il faut (conseil) » ou exclamation) ? [7]",
    "o": [
     "ことだ",
     "すなわち",
     "やらやら",
     "かのように"
    ],
    "a": 0,
    "e": "→ 〜ことだ."
   },
   {
    "t": "usage",
    "q": "Forme correcte (ことだ = « il faut (conseil) » ou exclamation) ? [8]",
    "o": [
     "ことはない",
     "ことだ",
     "わけがない",
     "にしても"
    ],
    "a": 1,
    "e": "→ 〜ことだ."
   },
   {
    "t": "usage",
    "q": "Forme correcte (ことだ = « il faut (conseil) » ou exclamation) ? [9]",
    "o": [
     "とは",
     "を皮切りに",
     "をめぐって",
     "ことだ"
    ],
    "a": 3,
    "e": "→ 〜ことだ."
   }
  ]
 },
 {
  "id": "c071",
  "g": "それでも",
  "m": "« malgré tout », « et pourtant », « même ainsi ». Une conséquence se produit en dépit de ce qui précède.",
  "f": "〔事実〕。＋ それでも、〜。",
  "c": "contrast",
  "lv": 2,
  "rel": [],
  "note": "Concession forte : « malgré cela, quand même… ».  ≠ それで (conséquence logique) : それでも = contraste, persistance malgré l'obstacle.  Registre courant à neutre.",
  "ex": [
   {
    "jp": "値段は高かった。それでも、その時計を買った。",
    "fr": "Le prix était élevé. Malgré tout, j'ai acheté cette montre."
   },
   {
    "jp": "彼女は忙しかった。それでも、私のために時間を作ってくれた。",
    "fr": "Elle était occupée. Et pourtant, elle a pris du temps pour moi."
   },
   {
    "jp": "何度も失敗した。それでも、彼は諦めなかった。",
    "fr": "Il a échoué maintes fois. Même ainsi, il n'a pas abandonné."
   }
  ],
  "qs": [
   {
    "t": "fill",
    "q": "値段は高かった。＿＿＿、その時計を買った。",
    "fr": "Le prix était élevé. Malgré tout, j'ai acheté cette montre.",
    "o": [
     "やらやら",
     "それでも",
     "なんとか",
     "なんてんだろう"
    ],
    "a": 1,
    "e": "〜それでも : « malgré tout », « et pourtant », « même ainsi »."
   },
   {
    "t": "fill",
    "q": "彼女は忙しかった。＿＿＿、私のために時間を作ってくれた。",
    "fr": "Elle était occupée. Et pourtant, elle a pris du temps pour moi.",
    "o": [
     "それでも",
     "あまりに",
     "きり",
     "で済む"
    ],
    "a": 0,
    "e": "〜それでも : « malgré tout », « et pourtant », « même ainsi »."
   },
   {
    "t": "fill",
    "q": "何度も失敗した。＿＿＿、彼は諦めなかった。",
    "fr": "Il a échoué maintes fois. Même ainsi, il n'a pas abandonné.",
    "o": [
     "それでも",
     "をはじめ",
     "きれない",
     "とともに"
    ],
    "a": 0,
    "e": "〜それでも : « malgré tout », « et pourtant », « même ainsi »."
   },
   {
    "t": "meaning",
    "q": "「値段は高かった。それでも、その時計を買った。」— que signifie 〜それでも ?",
    "o": [
     "« c'est-à-dire », « à savoir », « autrement dit »",
     "« et si nous…? », « faisons… ! »",
     "« par », « selon », « à cause de », « grâce à »",
     "« malgré tout », « et pourtant », « même ainsi »"
    ],
    "a": 3,
    "e": "〜それでも = « malgré tout », « et pourtant », « même ainsi »."
   },
   {
    "t": "meaning",
    "q": "「彼女は忙しかった。それでも、私のために時間を作ってくれた。」— que signifie 〜それでも ?",
    "o": [
     "« justement quand… (par malchance) » / « (lui) de tous… ne f",
     "« on devrait », « il faut (moralement) » / « on ne devrait p",
     "« sans distinction de », « indépendamment de »",
     "« malgré tout », « et pourtant », « même ainsi »"
    ],
    "a": 3,
    "e": "〜それでも = « malgré tout », « et pourtant », « même ainsi »."
   },
   {
    "t": "meaning",
    "q": "「何度も失敗した。それでも、彼は諦めなかった。」— que signifie 〜それでも ?",
    "o": [
     "« malgré tout », « et pourtant », « même ainsi »",
     "« toutefois », « à condition que », « sauf que »",
     "« il paraît que », « on dit que… (et donc) »",
     "« à mesure que », « accompagné de », « du fait de »"
    ],
    "a": 0,
    "e": "〜それでも = « malgré tout », « et pourtant », « même ainsi »."
   },
   {
    "t": "usage",
    "q": "« « malgré tout », « et pourtant », « même ainsi » » se dit en japonais :",
    "o": [
     "それでも",
     "こそ",
     "なんとか",
     "すなわち"
    ],
    "a": 0,
    "e": "→ 〜それでも."
   },
   {
    "t": "nuance",
    "q": "Quel est le sens correct de 〜それでも ?",
    "o": [
     "« si l'on (fait) trop… (alors) »",
     "« c'est-à-dire », « à savoir », « autrement dit »",
     "« malgré tout », « et pourtant », « même ainsi »",
     "« en même temps que », « dès que », « à la fois »"
    ],
    "a": 2,
    "e": "Concession forte : « malgré cela, quand même… »."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« malgré tout », « et pourtant », « même ainsi ») ? [8]",
    "o": [
     "くらい",
     "かと思う",
     "というものは",
     "それでも"
    ],
    "a": 3,
    "e": "→ 〜それでも."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« malgré tout », « et pourtant », « même ainsi ») ? [9]",
    "o": [
     "とか",
     "それでも",
     "とともに",
     "は問わない"
    ],
    "a": 1,
    "e": "→ 〜それでも."
   }
  ]
 },
 {
  "id": "c072",
  "g": "～と同時に ／ ～とともに",
  "m": "« en même temps que », « dès que », « à la fois ». Deux actions/états se produisent simultanément.",
  "f": "【動詞辞書形】／【名詞】＋ と同時に　（／ とともに）",
  "c": "time",
  "lv": 2,
  "rel": [],
  "note": "Simultanéité : « au moment même où » : 「彼が出発すると同時に、雨が降りだした」.  Aussi « à la fois A et B » : 「教師であると同時に、研究者でもある」.  とともに met davantage l'accent sur l'évolution conjointe / l'accompagnement.",
  "ex": [
   {
    "jp": "彼が出発すると同時に、雨が降りだした。",
    "fr": "Au moment même où il est parti, il s'est mis à pleuvoir."
   },
   {
    "jp": "料理ができあがると同時に、友達が訪ねてきた。",
    "fr": "Juste au moment où le plat était prêt, un ami est venu me rendre visite."
   },
   {
    "jp": "新しい技術が導入されるとともに、作業効率が上がった。",
    "fr": "Avec l'introduction de la nouvelle technologie, l'efficacité du travail a augmenté."
   }
  ],
  "qs": [
   {
    "t": "fill",
    "q": "彼が出発する＿＿＿、雨が降りだした。",
    "fr": "Au moment même où il est parti, il s'est mis à pleuvoir.",
    "o": [
     "きれない",
     "に際して",
     "を通して",
     "と同時に"
    ],
    "a": 3,
    "e": "〜と同時に : « en même temps que », « dès que », « à la fois »."
   },
   {
    "t": "fill",
    "q": "料理ができあがる＿＿＿、友達が訪ねてきた。",
    "fr": "Juste au moment où le plat était prêt, un ami est venu me rendre visite.",
    "o": [
     "上で",
     "一方だ",
     "と同時に",
     "ものがある"
    ],
    "a": 2,
    "e": "〜と同時に : « en même temps que », « dès que », « à la fois »."
   },
   {
    "t": "meaning",
    "q": "「彼が出発すると同時に、雨が降りだした。」— que signifie 〜と同時に ?",
    "o": [
     "« ne pas pouvoir finir/faire complètement », « trop… pour »",
     "« d'un côté… de l'autre », « tandis que »",
     "« être en train de (changer progressivement) »",
     "« en même temps que », « dès que », « à la fois »"
    ],
    "a": 3,
    "e": "〜と同時に = « en même temps que », « dès que », « à la fois »."
   },
   {
    "t": "meaning",
    "q": "「料理ができあがると同時に、友達が訪ねてきた。」— que signifie 〜と同時に ?",
    "o": [
     "« être en train de (changer progressivement) »",
     "« par », « selon », « à cause de », « grâce à »",
     "« en même temps que », « dès que », « à la fois »",
     "« justement quand… (par malchance) » / « (lui) de tous… ne f"
    ],
    "a": 2,
    "e": "〜と同時に = « en même temps que », « dès que », « à la fois »."
   },
   {
    "t": "meaning",
    "q": "「新しい技術が導入されるとともに、作業効率が上がった。」— que signifie 〜と同時に ?",
    "o": [
     "« après avoir fait X (et sur cette base) »",
     "« en même temps que », « dès que », « à la fois »",
     "« commencer à (sans finir) », « être à moitié… »",
     "Ajoute か à une phrase pour adoucir, exprimer une incertitude"
    ],
    "a": 1,
    "e": "〜と同時に = « en même temps que », « dès que », « à la fois »."
   },
   {
    "t": "usage",
    "q": "« « en même temps que », « dès que », « à la fois » » se dit en japonais :",
    "o": [
     "とともに",
     "は問わない",
     "で済む",
     "と同時に"
    ],
    "a": 3,
    "e": "→ 〜と同時に."
   },
   {
    "t": "nuance",
    "q": "Quel est le sens correct de 〜と同時に ?",
    "o": [
     "« ce qu'on appelle… (c'est) », « X, c'est… »",
     "« uniquement à/dans/par » (のみ combiné à une particule de lie",
     "« en somme », « bref », « pour résumer »",
     "« en même temps que », « dès que », « à la fois »"
    ],
    "a": 3,
    "e": "Simultanéité : « au moment même où » : 「彼が出発すると同時に、雨が降りだした」."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« en même temps que », « dès que », « à la fois ») ? [7]",
    "o": [
     "と同時に",
     "において",
     "一方で",
     "ないではいられない"
    ],
    "a": 0,
    "e": "→ 〜と同時に."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« en même temps que », « dès que », « à la fois ») ? [8]",
    "o": [
     "をめぐって",
     "と同時に",
     "せいか",
     "つつある"
    ],
    "a": 1,
    "e": "→ 〜と同時に."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« en même temps que », « dès que », « à la fois ») ? [9]",
    "o": [
     "ことはが",
     "をきっかけに",
     "と同時に",
     "せいか"
    ],
    "a": 2,
    "e": "→ 〜と同時に."
   }
  ]
 },
 {
  "id": "c073",
  "g": "～当たり（あたり）／ ～につき",
  "m": "« par (unité) », « pour chaque ». Indique une proportion ou un taux par unité.",
  "f": "【名詞（数量・単位）】＋ 当たり ／ につき",
  "c": "particle",
  "lv": 1,
  "rel": [],
  "note": "Exprime un ratio « par X » : 「一人当たり」「一人につき500円」.  につき est plus formel/écrit (annonces, règlements) ; aussi sens « en raison de » (本日休業につき).  当たり se lit あたり : 「1人当たりの食事量」.",
  "ex": [
   {
    "jp": "一人当たりの食事量を考えて、メニューを決めた。",
    "fr": "J'ai fixé le menu en tenant compte de la quantité de nourriture par personne."
   },
   {
    "jp": "このイベントには、一人につき500円の参加費が必要です。",
    "fr": "Pour cet événement, des frais de 500 yens par personne sont requis."
   },
   {
    "jp": "会場の人数は、一人当たりのスペースを考えて決められる。",
    "fr": "La capacité de la salle est déterminée selon l'espace par personne."
   }
  ],
  "qs": [
   {
    "t": "fill",
    "q": "一人＿＿＿の食事量を考えて、メニューを決めた。",
    "fr": "J'ai fixé le menu en tenant compte de la quantité de nourriture par personne.",
    "o": [
     "にすれば",
     "きる",
     "当たり",
     "を通して"
    ],
    "a": 2,
    "e": "〜当たり : « par (unité) », « pour chaque »."
   },
   {
    "t": "fill",
    "q": "会場の人数は、一人＿＿＿のスペースを考えて決められる。",
    "fr": "La capacité de la salle est déterminée selon l'espace par personne.",
    "o": [
     "なりに",
     "当たり",
     "つつある",
     "きる"
    ],
    "a": 1,
    "e": "〜当たり : « par (unité) », « pour chaque »."
   },
   {
    "t": "meaning",
    "q": "「一人当たりの食事量を考えて、メニューを決めた。」— que signifie 〜当たり ?",
    "o": [
     "« par (unité) », « pour chaque »",
     "« certes… mais », « c'est vrai que X, seulement… »",
     "« il paraît que », « on dit que… (et donc) »",
     "« à l'occasion de », « au moment de (faire quelque chose d'i"
    ],
    "a": 0,
    "e": "〜当たり = « par (unité) », « pour chaque »."
   },
   {
    "t": "meaning",
    "q": "「このイベントには、一人につき500円の参加費が必要です。」— que signifie 〜当たり ?",
    "o": [
     "« juste parce que (si peu) », « pour si peu »",
     "« par (unité) », « pour chaque »",
     "ことだ = « il faut (conseil) » ou exclamation",
     "« comme si », « comme s'il s'agissait de »"
    ],
    "a": 1,
    "e": "〜当たり = « par (unité) », « pour chaque »."
   },
   {
    "t": "meaning",
    "q": "「会場の人数は、一人当たりのスペースを考えて決められる。」— que signifie 〜当たり ?",
    "o": [
     "« à la suite de », « l'occasion qui a déclenché… »",
     "« par (unité) », « pour chaque »",
     "« en même temps que », « dès que », « à la fois »",
     "« cela dit », « seulement », « toutefois »"
    ],
    "a": 1,
    "e": "〜当たり = « par (unité) », « pour chaque »."
   },
   {
    "t": "usage",
    "q": "« « par (unité) », « pour chaque » » se dit en japonais :",
    "o": [
     "一方で",
     "は問わない",
     "をめぐって",
     "当たり"
    ],
    "a": 3,
    "e": "→ 〜当たり."
   },
   {
    "t": "nuance",
    "q": "Quel est le sens correct de 〜当たり ?",
    "o": [
     "« on devrait », « il faut (moralement) » / « on ne devrait p",
     "« insupportablement », « tellement… que je n'en peux plus »",
     "« par (unité) », « pour chaque »",
     "« ce qu'on appelle… (c'est) », « X, c'est… »"
    ],
    "a": 2,
    "e": "Exprime un ratio « par X » : 「一人当たり」「一人につき500円」."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« par (unité) », « pour chaque ») ? [7]",
    "o": [
     "なんてんだろう",
     "ただ",
     "当たり",
     "とは"
    ],
    "a": 2,
    "e": "→ 〜当たり."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« par (unité) », « pour chaque ») ? [8]",
    "o": [
     "ただし",
     "結局",
     "当たり",
     "一方で"
    ],
    "a": 2,
    "e": "→ 〜当たり."
   },
   {
    "t": "usage",
    "q": "Forme correcte (« par (unité) », « pour chaque ») ? [9]",
    "o": [
     "のか",
     "当たり",
     "要するに",
     "ことはない"
    ],
    "a": 1,
    "e": "→ 〜当たり."
   }
  ]
 }
];
if (typeof window !== "undefined") { window.N2_GRAMMAR = N2_GRAMMAR; window.CATEGORIES = CATEGORIES; window.TIERS = TIERS; }
