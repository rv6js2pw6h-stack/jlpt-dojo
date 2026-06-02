/* =========================================================================
   N4 道場 — Base de données de grammaire JLPT N4
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

const N4_GRAMMAR = [

  /* ===================== PARTICULES & LOCUTIONS — g001 à g010 ===================== */

  {
    id: "g001", g: "〜について", m: "à propos de, concernant", f: "Nom + について（は／も／の）",
    c: "particle", lv: 1, rel: ["g008"],
    note: "Introduit le thème dont on parle, pense ou écrit. Neutre et très courant.",
    ex: [
      { jp: "日本の文化について話します。", fr: "Je vais parler de la culture japonaise." },
      { jp: "その問題について考えた。", fr: "J'ai réfléchi à ce problème." },
    ],
    qs: [
      { t: "fill", q: "先生は試験＿＿＿説明した。", fr: "Le professeur a donné des explications sur l'examen.",
        o: ["について", "に対して", "によって", "にとって"], a: 0,
        e: "〜について = le thème dont on parle (ici, l'examen)." },
      { t: "meaning", q: "「歴史について調べる」— sens de について ?",
        o: ["faire des recherches sur l'histoire", "contre l'histoire", "à cause de l'histoire", "pour l'histoire"], a: 0,
        e: "〜について = à propos de / concernant (le thème)." },
    ],
  },

  {
    id: "g002", g: "〜に対して／に対する", m: "envers, face à ; contrairement à", f: "Nom + に対して／に対する＋Nom",
    c: "particle", lv: 1, rel: ["g003"],
    note: "(1) une action/attitude dirigée vers une cible ; (2) un contraste entre deux éléments.",
    ex: [
      { jp: "先生に対して失礼な態度を取ってはいけない。", fr: "Il ne faut pas se montrer impoli envers un professeur." },
      { jp: "兄が社交的なのに対して、弟は内気だ。", fr: "Contrairement à l'aîné qui est sociable, le cadet est timide." },
    ],
    qs: [
      { t: "fill", q: "質問＿＿＿、丁寧に答えた。", fr: "Il a répondu poliment à la question.",
        o: ["に対して", "について", "にとって", "によって"], a: 0,
        e: "〜に対して = action dirigée vers une cible (répondre à la question)." },
      { t: "nuance", q: "〜に対して vs 〜について : différence ?",
        o: ["に対して = action/attitude dirigée vers une cible ; について = simple thème dont on parle", "identiques", "について exprime une opposition", "に対して exprime un thème neutre"], a: 0,
        e: "に対して = « envers » (avec direction) ; について = « à propos de » (thème)." },
    ],
  },

  {
    id: "g003", g: "〜によって／による", m: "par (agent) ; selon ; à cause de ; au moyen de", f: "Nom + によって／による＋Nom",
    c: "particle", lv: 1, rel: ["g002"],
    note: "Polyvalent : agent du passif, variation « selon », cause, moyen. によると = « selon (une source) ».",
    ex: [
      { jp: "この小説は有名な作家によって書かれた。", fr: "Ce roman a été écrit par un auteur célèbre." },
      { jp: "国によって、習慣が違う。", fr: "Selon les pays, les coutumes diffèrent." },
    ],
    qs: [
      { t: "fill", q: "事故＿＿＿、電車が遅れた。", fr: "À cause d'un accident, le train a été retardé.",
        o: ["によって", "にとって", "について", "に対して"], a: 0,
        e: "〜によって peut exprimer la cause d'un événement." },
      { t: "nuance", q: "Pour rapporter une information (« d'après la météo… »), on dit 天気予報＿＿＿…",
        o: ["によると", "によって", "について", "にとって"], a: 0,
        e: "〜によると = source d'une information rapportée (« d'après »)." },
    ],
  },

  {
    id: "g004", g: "〜のために／ため（に）", m: "pour (but) ; à cause de (cause)", f: "V-dict／N＋の + ために",
    c: "particle", lv: 1, rel: [],
    note: "(1) But : « afin de » ; (2) cause : « à cause de / en raison de ».",
    ex: [
      { jp: "家族のために働く。", fr: "Je travaille pour ma famille." },
      { jp: "事故のために遅れた。", fr: "J'ai été retardé à cause d'un accident." },
    ],
    qs: [
      { t: "fill", q: "将来＿＿＿、貯金している。", fr: "J'économise pour l'avenir.",
        o: ["のために", "について", "によると", "に対して"], a: 0,
        e: "〜のために (but) = afin de / en vue de." },
      { t: "meaning", q: "「大雨のために試合が中止になった」— sens de ために ?",
        o: ["à cause de la forte pluie (cause)", "pour la forte pluie (but)", "à propos de la pluie", "malgré la pluie"], a: 0,
        e: "Ici 〜ために exprime la cause (« à cause de »)." },
    ],
  },

  {
    id: "g005", g: "〜にとって", m: "pour, du point de vue de", f: "Nom + にとって（は／も／の）",
    c: "particle", lv: 1, rel: ["g002"],
    note: "Présente le point de vue depuis lequel on évalue (« pour X, c'est… »). Suivi d'une évaluation.",
    ex: [
      { jp: "私にとって、家族が一番大切だ。", fr: "Pour moi, la famille est le plus important." },
      { jp: "学生にとって、この本は役に立つ。", fr: "Pour les étudiants, ce livre est utile." },
    ],
    qs: [
      { t: "fill", q: "子供＿＿＿、遊びはとても大切だ。", fr: "Pour les enfants, le jeu est très important.",
        o: ["にとって", "について", "によって", "に対して"], a: 0,
        e: "〜にとって = du point de vue de (suivi d'une évaluation)." },
      { t: "nuance", q: "〜にとって vs 〜に対して : différence ?",
        o: ["にとって = point de vue/évaluation ; に対して = action dirigée vers une cible", "identiques", "にとって marque une opposition", "に対して exprime un point de vue"], a: 0,
        e: "にとって introduit un jugement « pour X » ; に対して une attitude « envers X »." },
    ],
  },

  {
    id: "g006", g: "〜として", m: "en tant que, comme (rôle, qualité)", f: "Nom + として",
    c: "particle", lv: 1, rel: [],
    note: "Indique le rôle, la fonction ou la qualité sous laquelle on considère quelqu'un/quelque chose.",
    ex: [
      { jp: "彼は医者として働いている。", fr: "Il travaille en tant que médecin." },
      { jp: "趣味として絵を描く。", fr: "Je dessine comme loisir." },
    ],
    qs: [
      { t: "fill", q: "留学生＿＿＿日本に来た。", fr: "Je suis venu au Japon en tant qu'étudiant étranger.",
        o: ["として", "について", "にとって", "によって"], a: 0,
        e: "〜として = en tant que / sous le statut de." },
      { t: "meaning", q: "「記念として写真を撮る」— sens de として ?",
        o: ["prendre une photo en guise de souvenir", "à propos du souvenir", "à cause du souvenir", "pour le souvenir uniquement"], a: 0,
        e: "〜として = en tant que / à titre de." },
    ],
  },

  {
    id: "g007", g: "〜において／における", m: "dans, en (lieu ou domaine, semi-formel)", f: "Nom + において／における＋Nom",
    c: "particle", lv: 2, rel: [],
    note: "Équivalent formel de で pour le lieu, l'époque ou le domaine. Fréquent à l'écrit.",
    ex: [
      { jp: "会議は東京において行われた。", fr: "La réunion a eu lieu à Tokyo." },
      { jp: "現代社会における問題を考える。", fr: "Réfléchir aux problèmes de la société moderne." },
    ],
    qs: [
      { t: "fill", q: "この分野＿＿＿、彼は有名だ。", fr: "Dans ce domaine, il est célèbre.",
        o: ["において", "にとって", "について", "によると"], a: 0,
        e: "〜において = dans (lieu/domaine), registre formel (≈ で)." },
      { t: "nuance", q: "〜において vs 〜で : nuance ?",
        o: ["において est plus formel/écrit ; で est neutre et courant", "identiques", "で est plus formel", "において est familier"], a: 0,
        e: "において = registre soutenu de で." },
    ],
  },

  {
    id: "g008", g: "〜に関して／に関する", m: "concernant, au sujet de (formel)", f: "Nom + に関して／に関する＋Nom",
    c: "particle", lv: 2, rel: ["g001"],
    note: "Plus formel que について. Introduit un sujet de manière soignée.",
    ex: [
      { jp: "事件に関して、詳しい情報はまだない。", fr: "Concernant l'affaire, il n'y a pas encore d'informations détaillées." },
      { jp: "環境問題に関する本を読んだ。", fr: "J'ai lu un livre sur les questions environnementales." },
    ],
    qs: [
      { t: "fill", q: "この件＿＿＿、後で詳しく説明します。", fr: "Concernant cette affaire, je donnerai des explications détaillées plus tard.",
        o: ["に関して", "にとって", "によって", "に対して"], a: 0,
        e: "〜に関して = au sujet de (registre formel, ≈ について)." },
      { t: "nuance", q: "〜に関して vs 〜について : nuance ?",
        o: ["même sens (« à propos de ») ; に関して est plus formel/écrit", "opposés", "について est plus formel", "に関して exprime une cause"], a: 0,
        e: "に関して = variante soutenue de について." },
    ],
  },

  {
    id: "g009", g: "〜を通して／を通じて", m: "à travers, par l'intermédiaire de", f: "Nom + を通して／を通じて",
    c: "particle", lv: 2, rel: [],
    note: "(1) le moyen/l'intermédiaire ; (2) l'étendue continue (« tout au long de »).",
    ex: [
      { jp: "友達を通して彼を知った。", fr: "J'ai connu cette personne par l'intermédiaire d'un ami." },
      { jp: "一年を通して暖かい。", fr: "Il fait chaud toute l'année." },
    ],
    qs: [
      { t: "fill", q: "テレビ＿＿＿、ニュースを知った。", fr: "J'ai appris la nouvelle par la télévision.",
        o: ["を通して", "について", "にとって", "に対して"], a: 0,
        e: "〜を通して = par l'intermédiaire de (canal/moyen)." },
      { t: "meaning", q: "「一年を通して観光客が多い」— sens de を通して ?",
        o: ["tout au long de l'année (étendue continue)", "à travers une année précise", "à cause de l'année", "pour l'année"], a: 0,
        e: "〜を通して exprime aussi l'étendue temporelle continue." },
    ],
  },

  {
    id: "g010", g: "〜をもとに（して）", m: "à partir de, en se basant sur", f: "Nom + をもとに（して）",
    c: "particle", lv: 2, rel: [],
    note: "Indique le matériau/la source servant de point de départ à une création.",
    ex: [
      { jp: "この映画は実話をもとに作られた。", fr: "Ce film est tiré d'une histoire vraie." },
      { jp: "データをもとに、グラフを作った。", fr: "J'ai créé un graphique à partir des données." },
    ],
    qs: [
      { t: "fill", q: "アンケートの結果＿＿＿、商品を改良した。", fr: "On a amélioré le produit sur la base des résultats du sondage.",
        o: ["をもとに", "にとって", "について", "に対して"], a: 0,
        e: "〜をもとに = à partir de (matériau/source de départ)." },
      { t: "meaning", q: "「経験をもとに本を書いた」— sens ?",
        o: ["écrire un livre en se basant sur son expérience", "écrire un livre contre l'expérience", "écrire à propos de l'expérience", "écrire malgré l'expérience"], a: 0,
        e: "〜をもとに = en prenant X comme base/matière première." },
    ],
  },

  /* ===================== CONCESSION & CONTRASTE — g011 à g017 ===================== */

  {
    id: "g011", g: "〜が（逆接）", m: "mais, cependant (doux)", f: "Phrase1 + が、 + Phrase2",
    c: "contrast", lv: 1, rel: ["g012"],
    note: "Conjonction de liaison à l'intérieur d'une phrase, ton poli et doux. Relie deux propositions contrastées.",
    ex: [
      { jp: "この店は安いが、あまりおいしくない。", fr: "Ce restaurant est bon marché, mais pas très bon." },
      { jp: "電話しましたが、誰も出ませんでした。", fr: "J'ai téléphoné, mais personne n'a répondu." },
    ],
    qs: [
      { t: "fill", q: "頑張りました＿＿、失敗しました。", fr: "J'ai fait des efforts, mais j'ai échoué.",
        o: ["が", "ので", "から", "ために"], a: 0,
        e: "〜が = mais (contraste doux entre deux propositions)." },
      { t: "nuance", q: "〜が vs 〜けど : nuance ?",
        o: ["même sens (« mais ») ; が est un peu plus formel/écrit, けど plus familier", "opposés", "けど est plus formel", "が exprime une cause"], a: 0,
        e: "が = registre soutenu ; けど = registre courant." },
    ],
  },

  {
    id: "g012", g: "〜けれど／けれども／けど", m: "mais, bien que, quand même", f: "V-plain／A／N＋だ + けれど",
    c: "contrast", lv: 1, rel: ["g011", "g013"],
    note: "Contraste/concession très courant. けれども (poli/écrit) → けれど → けど (familier).",
    ex: [
      { jp: "高いけれど、品質がいい。", fr: "C'est cher, mais de bonne qualité." },
      { jp: "行きたいけど、時間がない。", fr: "Je voudrais y aller, mais je n'ai pas le temps." },
    ],
    qs: [
      { t: "fill", q: "勉強した＿＿、よく分からなかった。", fr: "J'ai étudié, mais je n'ai pas bien compris.",
        o: ["けど", "ので", "から", "ために"], a: 0,
        e: "〜けど = mais / quand même (contraste, familier)." },
      { t: "usage", q: "Forme la plus polie/écrite parmi : けど / けれど / けれども ?",
        o: ["けれども", "けど", "けれど", "elles sont équivalentes en registre"], a: 0,
        e: "けれども est la forme la plus soignée ; けど la plus familière." },
    ],
  },

  {
    id: "g013", g: "〜のに", m: "bien que, pourtant, et malgré ça", f: "V-plain／A-い + のに ／ A-な＋な／N＋な + のに",
    c: "contrast", lv: 1, rel: ["g012"],
    note: "Concession avec une nuance de déception, surprise ou reproche : le résultat va à l'inverse de l'attente.",
    ex: [
      { jp: "薬を飲んだのに、まだ痛い。", fr: "Bien que j'aie pris le médicament, j'ai encore mal." },
      { jp: "約束したのに、来なかった。", fr: "Il avait promis, et pourtant il n'est pas venu." },
    ],
    qs: [
      { t: "fill", q: "一生懸命練習した＿＿、負けてしまった。", fr: "Bien que je me sois entraîné dur, j'ai perdu.",
        o: ["のに", "ので", "から", "ために"], a: 0,
        e: "〜のに = bien que (avec déception/surprise)." },
      { t: "nuance", q: "〜のに vs 〜けど : nuance ?",
        o: ["のに ajoute une déception/un reproche ; けど est un simple contraste neutre", "identiques", "けど exprime une déception", "のに exprime une cause"], a: 0,
        e: "のに = contraste + émotion (déception). けど = contraste neutre." },
    ],
  },

  {
    id: "g014", g: "〜ても／でも", m: "même si, même en faisant", f: "V-て + も ／ A-くて + も ／ N／A-な + でも",
    c: "contrast", lv: 1, rel: [],
    note: "Concession hypothétique : « même dans le cas où… ». Le résultat ne change pas.",
    ex: [
      { jp: "雨が降っても、出かけます。", fr: "Même s'il pleut, je sortirai." },
      { jp: "高くても買います。", fr: "Même si c'est cher, je l'achète." },
    ],
    qs: [
      { t: "fill", q: "いくら呼ん＿＿、返事がない。", fr: "J'ai beau l'appeler, il n'y a pas de réponse.",
        o: ["でも", "から", "ので", "のに"], a: 0,
        e: "〜ても/でも = même si (concession). (呼んでも)" },
      { t: "meaning", q: "「失敗しても、また挑戦する」— sens de ても ?",
        o: ["même si j'échoue, je réessaierai", "parce que j'échoue", "quand j'échoue", "dès que j'échoue"], a: 0,
        e: "〜ても = même si / quand bien même." },
    ],
  },

  {
    id: "g015", g: "〜のに対して", m: "contrairement à, par opposition à", f: "V-plain／A／N＋な／である + のに対して",
    c: "contrast", lv: 2, rel: ["g002"],
    note: "Met en contraste deux faits parallèles : « X, alors que Y ».",
    ex: [
      { jp: "兄は文系なのに対して、弟は理系だ。", fr: "Alors que l'aîné est littéraire, le cadet est scientifique." },
      { jp: "去年は雨が多かったのに対して、今年は少ない。", fr: "Alors que l'an dernier il a beaucoup plu, cette année c'est peu." },
    ],
    qs: [
      { t: "fill", q: "都会は便利な＿＿＿、田舎は静かだ。", fr: "Alors que la ville est pratique, la campagne est tranquille.",
        o: ["のに対して", "について", "によって", "にとって"], a: 0,
        e: "〜のに対して = mise en contraste de deux faits (ville ↔ campagne)." },
      { t: "meaning", q: "「収入が増えたのに対して、支出も増えた」— sens ?",
        o: ["alors que les revenus ont augmenté, les dépenses aussi", "grâce aux revenus", "à cause des revenus", "à propos des revenus"], a: 0,
        e: "〜のに対して = contraste entre deux faits parallèles." },
    ],
  },

  {
    id: "g016", g: "〜一方（で）", m: "d'un autre côté, en revanche, pendant ce temps", f: "V-plain／A／N＋である + 一方（で）",
    c: "contrast", lv: 2, rel: ["g015"],
    note: "Présente deux aspects en parallèle ou en contraste.",
    ex: [
      { jp: "都会は便利な一方で、物価が高い。", fr: "La ville est pratique, mais en revanche la vie y est chère." },
      { jp: "輸出が増える一方で、輸入は減った。", fr: "Tandis que les exportations augmentent, les importations baissent." },
    ],
    qs: [
      { t: "fill", q: "彼は厳しい＿＿＿、優しいところもある。", fr: "Il est sévère, mais d'un autre côté il a de la gentillesse.",
        o: ["一方で", "ために", "ので", "のに"], a: 0,
        e: "〜一方で = met en parallèle deux facettes contrastées." },
      { t: "meaning", q: "「働く一方で、勉強も続けている」— sens de 一方で ?",
        o: ["tout en travaillant, il continue aussi à étudier", "à cause du travail", "après le travail", "malgré le travail"], a: 0,
        e: "〜一方で = « par ailleurs / en même temps »." },
    ],
  },

  {
    id: "g017", g: "〜ながら（逆接）", m: "tout en faisant, bien que", f: "V-ます stem／A-い／A-な／N + ながら",
    c: "contrast", lv: 1, rel: [],
    note: "Deux valeurs : (1) simultanéité de deux actions ; (2) concession (« bien que ») avec un état/une qualité.",
    ex: [
      { jp: "音楽を聞きながら勉強する。", fr: "J'étudie tout en écoutant de la musique." },
      { jp: "残念ながら、参加できません。", fr: "Bien que ce soit regrettable, je ne peux pas participer." },
    ],
    qs: [
      { t: "fill", q: "テレビを見＿＿＿、ご飯を食べる。", fr: "Je mange tout en regardant la télé.",
        o: ["ながら", "から", "ので", "のに"], a: 0,
        e: "〜ながら (emploi 1) = simultanéité de deux actions." },
      { t: "nuance", q: "Dans «歩きながら» et «知っていながら», ながら signifie :",
        o: ["1er = simultanéité ; 2e = concession (« bien que »)", "les deux = simultanéité", "les deux = concession", "le 1er = concession"], a: 0,
        e: "ながら a deux valeurs selon le contexte : simultanéité ou concession." },
    ],
  },

  /* ===================== TEMPS & SÉQUENCE — g018 à g025 ===================== */

  {
    id: "g018", g: "〜ているうちに", m: "pendant que, au fil de (changement)", f: "V-ている／A／N＋の + うちに",
    c: "time", lv: 2, rel: ["g025"],
    note: "Profiter d'une durée, ou changement qui survient au cours de cette durée (« à force de… »).",
    ex: [
      { jp: "話しているうちに、仲良くなった。", fr: "À force de parler, on est devenus amis." },
      { jp: "聞いているうちに、眠くなった。", fr: "Au fil de l'écoute, j'ai eu sommeil." },
    ],
    qs: [
      { t: "fill", q: "本を読んでいる＿＿＿、寝てしまった。", fr: "Pendant que je lisais, je me suis endormi.",
        o: ["うちに", "ばかりに", "までに", "とおりに"], a: 0,
        e: "〜ているうちに = pendant que / au cours de (avec un changement)." },
      { t: "meaning", q: "「住んでいるうちに、町が好きになった」— sens ?",
        o: ["au fil du temps que j'y vivais, j'ai fini par aimer la ville", "avant d'y vivre", "à cause d'y vivre", "dès que j'y ai vécu"], a: 0,
        e: "〜うちに = changement graduel survenant pendant la durée." },
    ],
  },

  {
    id: "g019", g: "〜たばかり", m: "venir juste de faire", f: "V-た + ばかり",
    c: "time", lv: 1, rel: [],
    note: "Indique qu'une action vient de se produire (du point de vue subjectif du locuteur). Différent de たところ (objectivement à l'instant).",
    ex: [
      { jp: "さっき食べたばかりだ。", fr: "Je viens tout juste de manger." },
      { jp: "日本に来たばかりで、まだ慣れていない。", fr: "Je viens d'arriver au Japon, je ne suis pas encore habitué." },
    ],
    qs: [
      { t: "fill", q: "この携帯は先月買った＿＿＿なのに、もう壊れた。", fr: "Je viens de l'acheter le mois dernier, et il est déjà cassé.",
        o: ["ばかり", "うちに", "ながら", "までに"], a: 0,
        e: "〜たばかり = venir juste de (subjectivement récent)." },
      { t: "nuance", q: "〜たばかり vs 〜たところ : nuance ?",
        o: ["ばかり = subjectivement récent (peut faire plusieurs jours) ; ところ = objectivement à l'instant même", "identiques", "ところ = il y a longtemps", "ばかり = futur"], a: 0,
        e: "ばかり = sentiment de « récemment » ; ところ = juste à l'instant." },
    ],
  },

  {
    id: "g020", g: "〜てから", m: "après avoir fait", f: "V-て + から",
    c: "time", lv: 1, rel: ["g023"],
    note: "Indique l'ordre des actions : « après avoir fait X, (puis) Y ». Met l'accent sur la succession.",
    ex: [
      { jp: "手を洗ってから、食べます。", fr: "Je mange après m'être lavé les mains." },
      { jp: "日本に来てから、三年たった。", fr: "Trois ans se sont écoulés depuis mon arrivée au Japon." },
    ],
    qs: [
      { t: "fill", q: "宿題をやっ＿＿＿、遊びに行く。", fr: "J'irai jouer après avoir fait mes devoirs.",
        o: ["てから", "までに", "うちに", "ながら"], a: 0,
        e: "〜てから = après avoir fait (succession d'actions)." },
      { t: "meaning", q: "「卒業してから、ずっと働いている」— sens de てから ?",
        o: ["depuis l'obtention du diplôme", "avant le diplôme", "pendant le diplôme", "à cause du diplôme"], a: 0,
        e: "〜てから indique aussi le point de départ temporel (« depuis que »)." },
    ],
  },

  {
    id: "g021", g: "〜たら（時間）", m: "quand, une fois que (moment futur accompli)", f: "V-た + ら",
    c: "time", lv: 1, rel: ["g027"],
    note: "Marque le moment où, une fois X accompli, Y se produit. Très courant. Voir aussi l'emploi conditionnel.",
    ex: [
      { jp: "家に帰ったら、電話します。", fr: "Quand je serai rentré, je téléphonerai." },
      { jp: "春になったら、花が咲く。", fr: "Quand le printemps viendra, les fleurs s'ouvriront." },
    ],
    qs: [
      { t: "fill", q: "駅に着い＿＿、連絡してください。", fr: "Quand vous arriverez à la gare, contactez-moi.",
        o: ["たら", "ながら", "までに", "うちに"], a: 0,
        e: "〜たら = une fois X accompli (moment futur). (着いたら)" },
      { t: "meaning", q: "「窓を開けたら、鳥がいた」— sens ?",
        o: ["quand j'ai ouvert la fenêtre, il y avait un oiseau (découverte)", "avant d'ouvrir la fenêtre", "pour ouvrir la fenêtre", "malgré la fenêtre ouverte"], a: 0,
        e: "〜たら peut marquer une découverte au moment de l'action accomplie." },
    ],
  },

  {
    id: "g022", g: "〜までに", m: "d'ici à, avant (échéance)", f: "Nom／V-dict + までに",
    c: "time", lv: 1, rel: [],
    note: "Indique la date/le moment limite avant lequel une action ponctuelle doit être faite. À distinguer de まで (continuité jusqu'à).",
    ex: [
      { jp: "五時までに帰ってください。", fr: "Rentrez avant cinq heures." },
      { jp: "明日までにレポートを出す。", fr: "Je rends le rapport d'ici demain." },
    ],
    qs: [
      { t: "fill", q: "金曜日＿＿＿、申し込んでください。", fr: "Inscrivez-vous d'ici vendredi.",
        o: ["までに", "まで", "から", "ながら"], a: 0,
        e: "〜までに = échéance limite pour une action ponctuelle." },
      { t: "nuance", q: "〜までに vs 〜まで : différence ?",
        o: ["までに = avant une échéance (action ponctuelle) ; まで = jusqu'à (action continue)", "identiques", "まで = échéance", "までに = continuité"], a: 0,
        e: "5時まで待つ (continu jusqu'à 5h) ≠ 5時までに来る (avant 5h)." },
    ],
  },

  {
    id: "g023", g: "〜ところ", m: "sur le point de / en train de / venir de", f: "V-dict／V-ている／V-た + ところ（だ）",
    c: "time", lv: 2, rel: ["g020"],
    note: "Marque la phase d'une action : 〜るところ (juste avant), 〜ているところ (en plein milieu), 〜たところ (juste après).",
    ex: [
      { jp: "今から出かけるところだ。", fr: "Je suis sur le point de sortir." },
      { jp: "ちょうど食べているところです。", fr: "Je suis justement en train de manger." },
    ],
    qs: [
      { t: "fill", q: "今、駅に着いた＿＿＿です。", fr: "Je viens juste d'arriver à la gare.",
        o: ["ところ", "ばかりに", "うちに", "までに"], a: 0,
        e: "V-た + ところ = venir juste de (à l'instant même)." },
      { t: "meaning", q: "「これから始めるところだ」— sens ?",
        o: ["je suis sur le point de commencer", "j'ai déjà fini", "je suis en plein milieu", "je commence chaque fois"], a: 0,
        e: "V-dict + ところ = juste avant de faire." },
    ],
  },

  {
    id: "g024", g: "〜たとき", m: "au moment où, quand (action passée)", f: "V-た／V-dict／A／N＋の + とき",
    c: "time", lv: 1, rel: [],
    note: "Indique le moment d'une action ou d'un état. Le temps du verbe avant とき précise l'antériorité/postériorité.",
    ex: [
      { jp: "子供のとき、よく海で泳いだ。", fr: "Quand j'étais enfant, je nageais souvent à la mer." },
      { jp: "日本に行ったとき、写真をたくさん撮った。", fr: "Quand je suis allé au Japon, j'ai pris beaucoup de photos." },
    ],
    qs: [
      { t: "fill", q: "国を出る＿＿＿、両親が泣いた。", fr: "Au moment où je quittais le pays, mes parents ont pleuré.",
        o: ["とき", "までに", "ながら", "うちに"], a: 0,
        e: "〜とき = au moment où." },
      { t: "nuance", q: "「日本に行くとき」vs「日本に行ったとき」— différence ?",
        o: ["行くとき = avant/au moment de partir ; 行ったとき = une fois arrivé là-bas", "identiques", "行くとき = après arrivée", "行ったとき = avant le départ"], a: 0,
        e: "Le temps du verbe avant とき indique l'ordre des actions." },
    ],
  },

  {
    id: "g025", g: "〜あいだ／あいだに", m: "pendant que, entre", f: "V-plain／A／N＋の + あいだ（に）",
    c: "time", lv: 1, rel: ["g018"],
    note: "あいだ = pendant toute la durée (action continue) ; あいだに = à un moment dans cet intervalle (action ponctuelle).",
    ex: [
      { jp: "夏休みのあいだ、毎日泳いだ。", fr: "Pendant les vacances d'été, j'ai nagé tous les jours." },
      { jp: "留守のあいだに、誰か来た。", fr: "Pendant mon absence, quelqu'un est venu." },
    ],
    qs: [
      { t: "fill", q: "母が出かけている＿＿＿、掃除をした。", fr: "Pendant que ma mère était sortie, j'ai fait le ménage.",
        o: ["あいだに", "までに", "ながら", "とき"], a: 0,
        e: "〜あいだに = à un moment durant cet intervalle (action ponctuelle)." },
      { t: "nuance", q: "〜あいだ vs 〜あいだに : différence ?",
        o: ["あいだ = action continue sur toute la durée ; あいだに = action ponctuelle à un moment de l'intervalle", "identiques", "あいだに = action continue", "あいだ = action ponctuelle"], a: 0,
        e: "あいだ (continu) ≠ あいだに (ponctuel)." },
    ],
  },

  /* ===================== CONDITION & CAUSE — g026 à g033 ===================== */

  {
    id: "g026", g: "〜ば", m: "si (conditionnel hypothétique)", f: "V-ば形 ／ A-ければ ／ N／A-な＋であれば",
    c: "condition", lv: 1, rel: ["g027", "g029"],
    note: "Condition hypothétique générale, souvent pour des vérités générales. Évite une demande/un ordre dans la principale (préférer たら).",
    ex: [
      { jp: "春になれば、桜が咲く。", fr: "Quand le printemps arrive, les cerisiers fleurissent." },
      { jp: "練習すれば、上手になる。", fr: "Si tu t'entraînes, tu progresseras." },
    ],
    qs: [
      { t: "fill", q: "急げ＿＿、間に合うよ。", fr: "Si tu te dépêches, tu seras à temps.",
        o: ["ば", "たら", "なら", "から"], a: 0,
        e: "〜ば = condition hypothétique (急げば)." },
      { t: "nuance", q: "Quelle phrase est NATURELLE avec ば ?",
        o: ["ボタンを押せば、ドアが開く（vérité générale）", "雨が降れば、傘を貸してあげる（demande/offre）", "暑ければ、窓を開けてください（ordre）", "高ければ、買ってください（demande）"], a: 0,
        e: "ば convient aux vérités générales ; pour une demande/offre en principale, on préfère たら." },
    ],
  },

  {
    id: "g027", g: "〜たら", m: "si, quand (hypothèse ou moment accompli)", f: "V-た + ら ／ A-かったら ／ N／A-な＋だったら",
    c: "condition", lv: 1, rel: ["g026"],
    note: "La condition la plus souple et courante. Marche pour hypothèse, supposition ou moment futur accompli. Compatible avec demandes/ordres.",
    ex: [
      { jp: "雨が降ったら、行きません。", fr: "S'il pleut, je n'irai pas." },
      { jp: "暇だったら、手伝ってください。", fr: "Si tu as du temps, aide-moi." },
    ],
    qs: [
      { t: "fill", q: "もし時間があっ＿＿、映画を見たい。", fr: "Si j'ai du temps, je veux voir un film.",
        o: ["たら", "ば", "と", "なら"], a: 0,
        e: "〜たら = condition souple, compatible avec un désir/une demande (あったら)." },
      { t: "nuance", q: "〜たら vs 〜ば : nuance principale ?",
        o: ["たら accepte demandes/ordres/désirs en principale ; ば les évite (vérités générales)", "identiques", "ば est plus souple", "たら ne marque jamais le futur"], a: 0,
        e: "たら est la plus flexible ; ば privilégie les vérités générales." },
    ],
  },

  {
    id: "g028", g: "〜と（条件）", m: "quand, si (résultat automatique)", f: "V-dict／A／N＋だ + と",
    c: "condition", lv: 1, rel: ["g027"],
    note: "Conséquence automatique, systématique ou naturelle : « chaque fois que / dès que X, alors Y ». Pas de volonté/demande dans la principale.",
    ex: [
      { jp: "春になると、暖かくなる。", fr: "Quand le printemps arrive, il fait plus chaud." },
      { jp: "このボタンを押すと、お湯が出る。", fr: "Quand on appuie sur ce bouton, l'eau chaude coule." },
    ],
    qs: [
      { t: "fill", q: "右に曲がる＿＿、駅があります。", fr: "Si vous tournez à droite, il y a la gare.",
        o: ["と", "たら", "ば", "なら"], a: 0,
        e: "〜と = résultat automatique/systématique (曲がると)." },
      { t: "nuance", q: "Peut-on dire « 春になると、出かけてください » ?",
        o: ["non : la principale de と ne peut pas être une demande/un ordre", "oui, c'est correct", "oui, comme たら", "uniquement au passé"], a: 0,
        e: "と exclut volonté, demande ou ordre dans la proposition principale." },
    ],
  },

  {
    id: "g029", g: "〜なら", m: "si c'est le cas de, si on parle de", f: "N／V-plain／A + なら",
    c: "condition", lv: 1, rel: ["g026"],
    note: "Pose une condition basée sur un contexte/une info donnée par l'interlocuteur : « si (vraiment) X, alors… ». Souvent pour conseiller.",
    ex: [
      { jp: "日本へ行くなら、京都がおすすめだ。", fr: "Si tu vas au Japon, je te recommande Kyoto." },
      { jp: "君が行かないなら、私も行かない。", fr: "Si toi tu n'y vas pas, moi non plus." },
    ],
    qs: [
      { t: "fill", q: "パソコンを買う＿＿、あの店が安いよ。", fr: "Si tu achètes un ordinateur, ce magasin-là est bon marché.",
        o: ["なら", "と", "ば", "たら"], a: 0,
        e: "〜なら = condition fondée sur un contexte donné, souvent pour conseiller (買うなら)." },
      { t: "nuance", q: "「日本に行ったら写真を撮る」vs「日本に行くなら、カメラを買う」— rôle de なら ?",
        o: ["なら : l'action principale précède ou conseille à propos de la condition ; たら : l'action suit la condition réalisée", "identiques", "なら = action après", "たら = conseil avant"], a: 0,
        e: "なら réagit à un thème/contexte ; l'action peut précéder la condition." },
    ],
  },

  {
    id: "g030", g: "〜おかげで", m: "grâce à (résultat positif)", f: "V-plain／A／N＋の + おかげで",
    c: "condition", lv: 1, rel: ["g031"],
    note: "Cause d'un résultat heureux, avec reconnaissance.",
    ex: [
      { jp: "先生のおかげで、合格できた。", fr: "Grâce au professeur, j'ai réussi." },
      { jp: "天気がよかったおかげで、楽しめた。", fr: "Grâce au beau temps, on a pu s'amuser." },
    ],
    qs: [
      { t: "fill", q: "君の助け＿＿＿、助かったよ。", fr: "Grâce à ton aide, j'ai été sauvé.",
        o: ["のおかげで", "のせいで", "について", "によると"], a: 0,
        e: "〜おかげで = grâce à (bon résultat, gratitude)." },
      { t: "nuance", q: "〜おかげで vs 〜せいで : différence ?",
        o: ["おかげで = résultat positif (gratitude) ; せいで = résultat négatif (reproche)", "identiques", "せいで = positif", "おかげで = négatif"], a: 0,
        e: "おかげで → bon ; せいで → mauvais." },
    ],
  },

  {
    id: "g031", g: "〜せいで", m: "à cause de (résultat négatif)", f: "V-plain／A／N＋の + せいで",
    c: "condition", lv: 1, rel: ["g030"],
    note: "Cause d'un résultat négatif, souvent avec une nuance de reproche.",
    ex: [
      { jp: "寝不足のせいで、頭が痛い。", fr: "À cause du manque de sommeil, j'ai mal à la tête." },
      { jp: "君のせいで、負けた。", fr: "C'est à cause de toi qu'on a perdu." },
    ],
    qs: [
      { t: "fill", q: "渋滞＿＿＿、遅刻した。", fr: "À cause des embouteillages, j'étais en retard.",
        o: ["のせいで", "のおかげで", "について", "によると"], a: 0,
        e: "〜せいで = cause d'un mauvais résultat (reproche)." },
      { t: "meaning", q: "「機械の故障のせいで作業が止まった」— sens ?",
        o: ["à cause de la panne de la machine, le travail s'est arrêté", "grâce à la panne", "à propos de la panne", "malgré la panne"], a: 0,
        e: "〜せいで attribue un mauvais résultat à une cause." },
    ],
  },

  {
    id: "g032", g: "〜ために（原因・目的）", m: "pour (but) ; à cause de (cause)", f: "V-dict／N＋の + ために",
    c: "condition", lv: 1, rel: ["g004"],
    note: "But (verbe volontaire) ou cause (souvent fait objectif, registre un peu formel).",
    ex: [
      { jp: "健康のために、運動する。", fr: "Je fais de l'exercice pour la santé." },
      { jp: "台風のために、電車が止まった。", fr: "À cause du typhon, les trains se sont arrêtés." },
    ],
    qs: [
      { t: "fill", q: "試験に合格する＿＿＿、毎日勉強する。", fr: "Pour réussir l'examen, j'étudie tous les jours.",
        o: ["ために", "せいで", "のに", "けれど"], a: 0,
        e: "〜ために (but) = afin de (avec verbe volontaire)." },
      { t: "meaning", q: "「雪のために道が閉鎖された」— sens de ために ?",
        o: ["à cause de la neige (cause)", "pour la neige (but)", "malgré la neige", "à propos de la neige"], a: 0,
        e: "Ici 〜ために exprime la cause objective." },
    ],
  },

  {
    id: "g033", g: "〜てもしかたない／てもしょうがない", m: "ça ne sert à rien même si, c'est sans issue", f: "V-て／A-くて／N＋でも + しかたない／しょうがない",
    c: "condition", lv: 2, rel: [],
    note: "Exprime la résignation : il est inutile/vain de faire X, ou X est inévitable. しょうがない est plus familier.",
    ex: [
      { jp: "今さら後悔してもしかたない。", fr: "Ça ne sert à rien de regretter maintenant." },
      { jp: "終わったことを悩んでもしょうがない。", fr: "Inutile de se tracasser sur ce qui est passé." },
    ],
    qs: [
      { t: "fill", q: "起きてしまったことを怒っ＿＿＿。", fr: "Ça ne sert à rien de s'énerver sur ce qui est arrivé.",
        o: ["てもしかたない", "なければならない", "たほうがいい", "てはいけない"], a: 0,
        e: "〜てもしかたない = inutilité/résignation (« ça ne change rien »)." },
      { t: "meaning", q: "「心配してもしょうがない」— sens ?",
        o: ["ça ne sert à rien de s'inquiéter", "il faut s'inquiéter", "on ne s'inquiète jamais", "on s'inquiète chaque fois"], a: 0,
        e: "〜てもしょうがない = résignation, inutilité de l'action." },
    ],
  },

  /* ===================== MODALITÉ & JUGEMENT — g034 à g043 ===================== */

  {
    id: "g034", g: "〜そうだ（様態）", m: "avoir l'air de, sembler (aspect)", f: "V-ます stem／A-stem + そうだ （いい→よさそう）",
    c: "modality", lv: 1, rel: ["g035"],
    note: "Impression visuelle/immédiate : « ça a l'air… ». On enlève い des adjectifs (おいしい→おいしそう).",
    ex: [
      { jp: "このケーキはおいしそうだ。", fr: "Ce gâteau a l'air délicieux." },
      { jp: "雨が降りそうだ。", fr: "On dirait qu'il va pleuvoir." },
    ],
    qs: [
      { t: "fill", q: "空が暗い。雨が降り＿＿＿だ。", fr: "Le ciel est sombre. On dirait qu'il va pleuvoir.",
        o: ["そう", "よう", "らしい", "みたい"], a: 0,
        e: "〜そうだ (様態) = impression immédiate (降りそう)." },
      { t: "nuance", q: "〜そうだ (様態) vs 〜そうだ (伝聞) : différence de forme ?",
        o: ["様態 : V-ます stem + そう (降りそう) ; 伝聞 : forme plaine + そう (降るそうだ)", "identiques", "伝聞 enlève le radical", "様態 utilise la forme plaine"], a: 0,
        e: "Aspect : radical + そう ; ouï-dire : forme plaine + そうだ." },
    ],
  },

  {
    id: "g035", g: "〜そうだ（伝聞）", m: "on dit que, il paraît que", f: "V-plain／A／N＋だ + そうだ",
    c: "modality", lv: 1, rel: ["g034"],
    note: "Ouï-dire : on rapporte une information entendue, sans la modifier. Souvent avec によると.",
    ex: [
      { jp: "天気予報によると、明日は雨だそうだ。", fr: "D'après la météo, il paraît qu'il pleuvra demain." },
      { jp: "彼は来月結婚するそうだ。", fr: "On dit qu'il se marie le mois prochain." },
    ],
    qs: [
      { t: "fill", q: "ニュースによると、地震があった＿＿＿。", fr: "D'après les infos, il paraît qu'il y a eu un séisme.",
        o: ["そうだ", "ようだ", "らしい", "みたいだ"], a: 0,
        e: "〜そうだ (伝聞) = information rapportée (« on dit que »)." },
      { t: "meaning", q: "「彼は元気だそうだ」— sens ?",
        o: ["il paraît qu'il va bien (information entendue)", "il a l'air en forme (vu)", "il devrait aller bien", "il veut aller bien"], a: 0,
        e: "Forme plaine + そうだ = ouï-dire." },
    ],
  },

  {
    id: "g036", g: "〜らしい", m: "il semblerait que, apparemment ; typique de", f: "V-plain／A／N + らしい",
    c: "modality", lv: 1, rel: ["g037"],
    note: "(1) Déduction basée sur des informations extérieures (« apparemment ») ; (2) « digne de / typique de » (男らしい).",
    ex: [
      { jp: "外は寒いらしい。みんなコートを着ている。", fr: "Il paraît qu'il fait froid dehors. Tout le monde porte un manteau." },
      { jp: "彼は本当に学生らしい。", fr: "Il est vraiment un étudiant modèle (typique)." },
    ],
    qs: [
      { t: "fill", q: "あの店は人気がある＿＿＿。いつも行列ができている。", fr: "Ce magasin a l'air populaire. Il y a toujours la queue.",
        o: ["らしい", "そうな", "ような", "つもり"], a: 0,
        e: "〜らしい = déduction fondée sur des indices extérieurs." },
      { t: "meaning", q: "「春らしい天気だ」— sens de らしい ?",
        o: ["un temps digne du printemps / typiquement printanier", "il paraît qu'il fait printemps", "le printemps devrait venir", "à propos du printemps"], a: 0,
        e: "〜らしい (emploi 2) = caractéristique/typique de." },
    ],
  },

  {
    id: "g037", g: "〜ようだ／みたいだ", m: "avoir l'air de, sembler (déduction sensorielle)", f: "V-plain／A／N＋の + ようだ ／ 〜みたいだ（familier）",
    c: "modality", lv: 1, rel: ["g036"],
    note: "Conjecture fondée sur ses propres sensations/observations. みたいだ est la version familière. Sert aussi à la comparaison (« comme »).",
    ex: [
      { jp: "誰かいるようだ。物音がする。", fr: "On dirait qu'il y a quelqu'un. J'entends du bruit." },
      { jp: "氷のように冷たい手。", fr: "Des mains froides comme de la glace." },
    ],
    qs: [
      { t: "fill", q: "熱がある。風邪をひいた＿＿＿だ。", fr: "J'ai de la fièvre. On dirait que j'ai attrapé froid.",
        o: ["よう", "そう", "らしく", "つもり"], a: 0,
        e: "〜ようだ = conjecture fondée sur ses propres sensations (ひいたようだ)." },
      { t: "nuance", q: "〜ようだ vs 〜らしい : nuance ?",
        o: ["ようだ = déduction basée sur ses propres observations ; らしい = info plutôt extérieure/entendue", "identiques", "らしい = sensation directe", "ようだ = ouï-dire"], a: 0,
        e: "ようだ s'appuie sur soi ; らしい sur des sources externes." },
    ],
  },

  {
    id: "g038", g: "〜はずだ", m: "devrait être, normalement c'est ainsi", f: "V-plain／A／N＋の + はずだ",
    c: "modality", lv: 1, rel: [],
    note: "Déduction logique fondée sur une raison objective : « selon toute logique, ça devrait être ainsi ».",
    ex: [
      { jp: "彼は今日来るはずだ。", fr: "Il devrait venir aujourd'hui." },
      { jp: "メールを送ったから、もう着いているはずだ。", fr: "J'ai envoyé le mail, il devrait déjà être arrivé." },
    ],
    qs: [
      { t: "fill", q: "彼は鍵を持っているから、開けられる＿＿＿。", fr: "Il a la clé, donc il devrait pouvoir ouvrir.",
        o: ["はずだ", "つもりだ", "ようだ", "そうだ"], a: 0,
        e: "〜はずだ = déduction logique fondée sur une raison." },
      { t: "nuance", q: "〜はずだ vs 〜つもりだ : différence ?",
        o: ["はずだ = attente logique objective ; つもりだ = intention personnelle de faire", "identiques", "はずだ = intention", "つもりだ = déduction"], a: 0,
        e: "はずだ = ça devrait logiquement ; つもりだ = j'ai l'intention de." },
    ],
  },

  {
    id: "g039", g: "〜つもりだ", m: "avoir l'intention de, compter faire", f: "V-dict／V-ない + つもりだ",
    c: "modality", lv: 1, rel: [],
    note: "Exprime une intention/un projet personnel décidé. V-ない + つもり = compter ne pas faire.",
    ex: [
      { jp: "来年、留学するつもりだ。", fr: "L'an prochain, je compte partir étudier à l'étranger." },
      { jp: "もうタバコは吸わないつもりだ。", fr: "J'ai l'intention de ne plus fumer." },
    ],
    qs: [
      { t: "fill", q: "夏休みに国へ帰る＿＿＿です。", fr: "Je compte rentrer dans mon pays pendant les vacances d'été.",
        o: ["つもり", "はず", "そう", "らしい"], a: 0,
        e: "〜つもりだ = intention/projet personnel." },
      { t: "meaning", q: "「彼に会わないつもりだ」— sens ?",
        o: ["j'ai l'intention de ne pas le rencontrer", "je dois le rencontrer", "il paraît que je le rencontre", "je le rencontre toujours"], a: 0,
        e: "V-ない + つもりだ = intention de ne pas faire." },
    ],
  },

  {
    id: "g040", g: "〜かもしれない", m: "peut-être, il se peut que", f: "V-plain／A／N + かもしれない",
    c: "modality", lv: 1, rel: ["g041"],
    note: "Possibilité incertaine, faible à moyenne. « C'est possible que… ».",
    ex: [
      { jp: "明日は雨かもしれない。", fr: "Il pleuvra peut-être demain." },
      { jp: "彼はもう帰ったかもしれない。", fr: "Il est peut-être déjà rentré." },
    ],
    qs: [
      { t: "fill", q: "道が混んでいるから、遅れる＿＿＿。", fr: "La route est encombrée, je serai peut-être en retard.",
        o: ["かもしれない", "に違いない", "はずがない", "つもりだ"], a: 0,
        e: "〜かもしれない = possibilité incertaine (« peut-être »)." },
      { t: "nuance", q: "〜かもしれない vs 〜にちがいない : différence de certitude ?",
        o: ["かもしれない = faible certitude ; にちがいない = forte certitude", "identiques", "かもしれない = forte certitude", "にちがいない = doute"], a: 0,
        e: "かもしれない (~30-50%) ≪ にちがいない (~90%)." },
    ],
  },

  {
    id: "g041", g: "〜にちがいない", m: "sans aucun doute, c'est sûrement", f: "V-plain／A／N + にちがいない",
    c: "modality", lv: 2, rel: ["g040"],
    note: "Conviction forte fondée sur des indices. « Ça ne peut être que… ».",
    ex: [
      { jp: "電気が消えている。留守にちがいない。", fr: "La lumière est éteinte. Il doit être absent." },
      { jp: "この絵は高いにちがいない。", fr: "Ce tableau est sûrement cher." },
    ],
    qs: [
      { t: "fill", q: "あんなに練習したのだから、勝つ＿＿＿。", fr: "Avec tout cet entraînement, il va sûrement gagner.",
        o: ["にちがいない", "かもしれない", "つもりだ", "ことになる"], a: 0,
        e: "〜にちがいない = conviction forte fondée sur des indices." },
      { t: "meaning", q: "「彼は知っているにちがいない」— sens ?",
        o: ["il le sait sûrement (forte conviction)", "il pourrait le savoir", "il devrait le savoir par logique", "il a l'intention de le savoir"], a: 0,
        e: "〜にちがいない = « ce ne peut être que vrai »." },
    ],
  },

  {
    id: "g042", g: "〜べきだ", m: "devrait, il faut (obligation morale)", f: "V-dict + べきだ（する→すべき／するべき）",
    c: "modality", lv: 2, rel: ["g043"],
    note: "Devoir moral/conseil fort : « c'est ce qu'il convient de faire ». Pas pour les règlements officiels.",
    ex: [
      { jp: "約束は守るべきだ。", fr: "On doit tenir ses promesses." },
      { jp: "もっと早く来るべきだった。", fr: "J'aurais dû venir plus tôt." },
    ],
    qs: [
      { t: "fill", q: "困っている人は助ける＿＿＿。", fr: "On devrait aider les gens en difficulté.",
        o: ["べきだ", "かもしれない", "つもりだ", "ようだ"], a: 0,
        e: "〜べきだ = devoir moral / conseil fort." },
      { t: "nuance", q: "〜べきだ vs 〜なければならない : nuance ?",
        o: ["べきだ = jugement moral ; なければならない = nécessité/règle concrète", "identiques", "べきだ = règle officielle", "なければならない = conseil moral"], a: 0,
        e: "べきだ = devoir moral ; なければならない = obligation factuelle." },
    ],
  },

  {
    id: "g043", g: "〜わけだ／わけではない", m: "c'est logique que / ce n'est pas que", f: "V-plain／A／N＋な + わけだ ／ 〜わけではない",
    c: "modality", lv: 2, rel: [],
    note: "わけだ = conclusion logique (« voilà pourquoi ») ; わけではない = négation partielle (« ce n'est pas que »).",
    ex: [
      { jp: "十年も住んでいたのか。日本語が上手なわけだ。", fr: "Tu y as vécu dix ans ? Pas étonnant que tu parles si bien." },
      { jp: "嫌いなわけではないが、あまり食べない。", fr: "Ce n'est pas que je n'aime pas, mais je n'en mange pas beaucoup." },
    ],
    qs: [
      { t: "fill", q: "エアコンが壊れている。暑い＿＿＿だ。", fr: "La clim est en panne. Voilà pourquoi il fait chaud.",
        o: ["わけ", "はず", "つもり", "らしい"], a: 0,
        e: "〜わけだ = conclusion logique (« forcément / voilà pourquoi »)." },
      { t: "nuance", q: "〜わけではない signifie :",
        o: ["ce n'est pas (entièrement) le cas que… (négation partielle)", "c'est totalement impossible", "c'est logique", "j'ai l'intention de"], a: 0,
        e: "わけではない = atténuation/négation nuancée." },
    ],
  },

  /* ===================== EXPRESSIONS & EMPHASE — g044 à g075 ===================== */

  {
    id: "g044", g: "〜てしまう／ちゃう", m: "finir par (regret) ; complètement (achèvement)", f: "V-て + しまう （〜ちゃう familier）",
    c: "express", lv: 1, rel: [],
    note: "(1) Regret/involontaire (« j'ai fini par… ») ; (2) achèvement complet. Forme contractée : てしまう→ちゃう, でしまう→じゃう.",
    ex: [
      { jp: "大事な書類をなくしてしまった。", fr: "J'ai (malheureusement) perdu un document important." },
      { jp: "宿題はもうやってしまった。", fr: "J'ai déjà entièrement fini mes devoirs." },
    ],
    qs: [
      { t: "fill", q: "ケーキを全部食べ＿＿＿。", fr: "J'ai fini par manger tout le gâteau.",
        o: ["てしまった", "ておいた", "てみた", "ている"], a: 0,
        e: "〜てしまう = regret/achèvement complet (食べてしまった)." },
      { t: "meaning", q: "「電車が行ってしまった」— sens de てしまう ?",
        o: ["le train est parti (regret, c'est trop tard)", "le train va partir", "le train part chaque fois", "le train est prêt à partir"], a: 0,
        e: "〜てしまう exprime ici le regret d'un fait accompli irréversible." },
    ],
  },

  {
    id: "g045", g: "〜ておく", m: "faire à l'avance ; laisser en l'état", f: "V-て + おく （〜とく familier）",
    c: "express", lv: 1, rel: [],
    note: "(1) Préparation en vue de plus tard ; (2) laisser quelque chose dans un état. Forme familière : ておく→とく.",
    ex: [
      { jp: "旅行の前に切符を買っておく。", fr: "J'achète les billets à l'avance avant le voyage." },
      { jp: "そのままにしておいてください。", fr: "Laissez-le tel quel, s'il vous plaît." },
    ],
    qs: [
      { t: "fill", q: "客が来る前に、部屋を掃除し＿＿＿。", fr: "Je nettoie la pièce à l'avance avant l'arrivée des invités.",
        o: ["ておく", "てしまう", "てみる", "ている"], a: 0,
        e: "〜ておく = préparer à l'avance (掃除しておく)." },
      { t: "meaning", q: "「窓を開けておく」— sens ?",
        o: ["laisser la fenêtre ouverte (état maintenu volontairement)", "ouvrir la fenêtre par erreur", "essayer d'ouvrir la fenêtre", "être en train d'ouvrir"], a: 0,
        e: "〜ておく = laisser dans un état (volontairement)." },
    ],
  },

  {
    id: "g046", g: "〜てみる", m: "essayer de faire (pour voir)", f: "V-て + みる",
    c: "express", lv: 1, rel: [],
    note: "Faire quelque chose à titre d'essai, pour voir ce qui se passe.",
    ex: [
      { jp: "新しい店に行ってみた。", fr: "J'ai essayé d'aller dans le nouveau restaurant." },
      { jp: "この服を着てみてもいいですか。", fr: "Puis-je essayer ce vêtement ?" },
    ],
    qs: [
      { t: "fill", q: "おいしそうだから、食べ＿＿＿。", fr: "Ça a l'air bon, alors je vais goûter pour voir.",
        o: ["てみる", "ておく", "てしまう", "てある"], a: 0,
        e: "〜てみる = essayer de faire pour voir (食べてみる)." },
      { t: "meaning", q: "「考えてみます」— sens ?",
        o: ["je vais essayer d'y réfléchir (pour voir)", "j'ai déjà réfléchi", "je réfléchis toujours", "je dois réfléchir"], a: 0,
        e: "〜てみる = tenter / essayer." },
    ],
  },

  {
    id: "g047", g: "〜ていく", m: "continuer à (vers le futur) ; aller faire", f: "V-て + いく",
    c: "express", lv: 1, rel: ["g048"],
    note: "(1) Changement progressif orienté vers le futur ; (2) éloignement dans l'espace ; (3) faire puis partir.",
    ex: [
      { jp: "これからも日本語を勉強していく。", fr: "Je continuerai à étudier le japonais désormais." },
      { jp: "鳥が飛んでいった。", fr: "L'oiseau s'est envolé (en s'éloignant)." },
    ],
    qs: [
      { t: "fill", q: "これから寒くなっ＿＿＿でしょう。", fr: "Il va sans doute faire de plus en plus froid désormais.",
        o: ["ていく", "てくる", "ておく", "てみる"], a: 0,
        e: "〜ていく = évolution progressive vers le futur (なっていく)." },
      { t: "nuance", q: "〜ていく vs 〜てくる (changement) : nuance ?",
        o: ["ていく = évolution vers le futur (à partir de maintenant) ; てくる = évolution depuis le passé jusqu'à maintenant", "identiques", "ていく = vers le passé", "てくる = vers le futur"], a: 0,
        e: "ていく : maintenant → futur ; てくる : passé → maintenant." },
    ],
  },

  {
    id: "g048", g: "〜てくる", m: "commencer à (depuis le passé) ; revenir ; aller faire et revenir", f: "V-て + くる",
    c: "express", lv: 1, rel: ["g047"],
    note: "(1) Changement progressif du passé jusqu'à maintenant ; (2) rapprochement ; (3) aller faire X et revenir.",
    ex: [
      { jp: "だんだん暖かくなってきた。", fr: "Il a commencé à faire de plus en plus chaud." },
      { jp: "ちょっと買い物に行ってくる。", fr: "Je vais faire une course (et je reviens)." },
    ],
    qs: [
      { t: "fill", q: "雨が降っ＿＿＿。傘を持って行こう。", fr: "Il s'est mis à pleuvoir. Prenons un parapluie.",
        o: ["てきた", "ていった", "ておいた", "てみた"], a: 0,
        e: "〜てくる = apparition/début d'un phénomène (降ってきた)." },
      { t: "meaning", q: "「日本語が分かってきた」— sens ?",
        o: ["j'ai commencé à comprendre le japonais (progrès jusqu'à maintenant)", "je comprendrai à l'avenir", "je dois comprendre", "j'ai oublié le japonais"], a: 0,
        e: "〜てくる = changement progressif menant jusqu'au présent." },
    ],
  },

  {
    id: "g049", g: "〜てある", m: "état résultant d'une action intentionnelle", f: "V-transitif-て + ある",
    c: "express", lv: 1, rel: [],
    note: "Décrit l'état laissé par une action volontaire faite par quelqu'un (souvent dans un but). L'objet prend が.",
    ex: [
      { jp: "壁に絵がかけてある。", fr: "Un tableau est accroché au mur (quelqu'un l'a accroché)." },
      { jp: "もう予約してあります。", fr: "C'est déjà réservé (j'ai pris soin de réserver)." },
    ],
    qs: [
      { t: "fill", q: "テーブルに食事が用意し＿＿＿。", fr: "Le repas est préparé sur la table (par quelqu'un, intentionnellement).",
        o: ["てある", "ておく", "ている", "てしまう"], a: 0,
        e: "〜てある = état résultant d'une action intentionnelle (用意してある)." },
      { t: "nuance", q: "「窓が開けてある」vs「窓が開いている」— différence ?",
        o: ["開けてある = quelqu'un l'a ouverte volontairement (état résultant) ; 開いている = simple état (sans agent implicite)", "identiques", "開けてある = état naturel", "開いている = action volontaire"], a: 0,
        e: "てある implique une intention/un agent ; 〜ている (intransitif) décrit l'état brut." },
    ],
  },

  {
    id: "g050", g: "〜てほしい", m: "vouloir que quelqu'un fasse", f: "V-て + ほしい",
    c: "express", lv: 1, rel: [],
    note: "Exprime un souhait que quelqu'un d'autre fasse une action. Forme négative : V-ないでほしい.",
    ex: [
      { jp: "もっと早く来てほしい。", fr: "Je voudrais que tu viennes plus tôt." },
      { jp: "嘘をつかないでほしい。", fr: "J'aimerais que tu ne mentes pas." },
    ],
    qs: [
      { t: "fill", q: "手伝っ＿＿＿んだけど、いい？", fr: "J'aimerais que tu m'aides, c'est possible ?",
        o: ["てほしい", "てみたい", "ておきたい", "てしまいたい"], a: 0,
        e: "〜てほしい = vouloir que l'autre fasse (手伝ってほしい)." },
      { t: "nuance", q: "〜てほしい vs 〜たい : différence ?",
        o: ["てほしい = vouloir que QUELQU'UN D'AUTRE fasse ; たい = vouloir faire SOI-MÊME", "identiques", "てほしい = soi-même", "たい = autrui"], a: 0,
        e: "てほしい → action d'autrui ; たい → action du locuteur." },
    ],
  },

  {
    id: "g051", g: "〜させる（使役）", m: "causatif : faire faire / laisser faire", f: "V-causatif （Gr1 〜あせる ／ Gr2 〜させる ／ する→させる）",
    c: "express", lv: 1, rel: ["g052"],
    note: "Faire faire (contrainte) ou laisser faire (permission). L'agent forcé prend に (parfois を pour les verbes intransitifs).",
    ex: [
      { jp: "先生は学生に本を読ませた。", fr: "Le professeur a fait lire un livre aux élèves." },
      { jp: "子供を公園で遊ばせる。", fr: "Je laisse l'enfant jouer au parc." },
    ],
    qs: [
      { t: "fill", q: "母は弟＿＿野菜を食べさせた。", fr: "Ma mère a fait manger des légumes à mon petit frère.",
        o: ["に", "が", "は", "で"], a: 0,
        e: "Au causatif d'un verbe transitif, l'agent forcé prend に (弟に食べさせた)." },
      { t: "meaning", q: "「子供を遊ばせる」— sens ?",
        o: ["laisser/faire jouer l'enfant", "jouer avec l'enfant", "l'enfant joue tout seul", "l'enfant veut jouer"], a: 0,
        e: "〜させる = causatif (faire/laisser faire)." },
    ],
  },

  {
    id: "g052", g: "〜させてください", m: "permettez-moi de, laissez-moi faire", f: "V-causatif stem + てください",
    c: "express", lv: 1, rel: ["g051"],
    note: "Demande polie de permission de faire soi-même une action (causatif + てください).",
    ex: [
      { jp: "ちょっと休ませてください。", fr: "Laissez-moi me reposer un peu." },
      { jp: "私に説明させてください。", fr: "Permettez-moi d'expliquer." },
    ],
    qs: [
      { t: "fill", q: "その仕事は私に＿＿＿ください。", fr: "Laissez-moi faire ce travail.",
        o: ["やらせて", "やられて", "やって", "やらされて"], a: 0,
        e: "〜させてください = demande de permission de faire soi-même (やらせてください)." },
      { t: "meaning", q: "「考えさせてください」— sens ?",
        o: ["permettez-moi de réfléchir", "faites-moi réfléchir de force", "réfléchissez pour moi", "je vous fais réfléchir"], a: 0,
        e: "〜させてください = « laissez-moi (faire) »." },
    ],
  },

  {
    id: "g053", g: "〜られる（受身・可能）", m: "passif : être fait ; potentiel : pouvoir faire", f: "Gr1 〜あれる ／ Gr2 〜られる ／ する→される／できる",
    c: "express", lv: 1, rel: [],
    note: "Même forme pour passif et potentiel (Gr2). Passif : sujet subit l'action (agent en に). Potentiel : capacité.",
    ex: [
      { jp: "先生に名前を呼ばれた。", fr: "J'ai été appelé par mon nom par le professeur (passif)." },
      { jp: "刺身が食べられますか。", fr: "Peux-tu manger du sashimi ? (potentiel)" },
    ],
    qs: [
      { t: "fill", q: "弟にケーキを食べ＿＿＿。", fr: "Je me suis fait manger mon gâteau par mon petit frère (passif d'adversité).",
        o: ["られた", "させた", "ておいた", "てみた"], a: 0,
        e: "〜られる (passif) : subir l'action de quelqu'un (食べられた)." },
      { t: "nuance", q: "「食べられる」peut signifier :",
        o: ["soit « pouvoir manger » (potentiel), soit « être mangé » (passif) selon le contexte", "uniquement le potentiel", "uniquement le passif", "ni l'un ni l'autre"], a: 0,
        e: "Pour les verbes Gr2, passif et potentiel ont la même forme られる." },
    ],
  },

  {
    id: "g054", g: "〜ようにする", m: "faire en sorte de, s'efforcer de", f: "V-dict／V-ない + ようにする",
    c: "express", lv: 1, rel: ["g055"],
    note: "Effort conscient et régulier pour adopter une habitude ou atteindre un état. V-ない + ようにする = s'efforcer de ne pas.",
    ex: [
      { jp: "毎日運動するようにしている。", fr: "Je m'efforce de faire de l'exercice chaque jour." },
      { jp: "甘いものを食べないようにする。", fr: "Je fais en sorte de ne pas manger de sucreries." },
    ],
    qs: [
      { t: "fill", q: "健康のため、早く寝る＿＿＿している。", fr: "Pour ma santé, je m'efforce de me coucher tôt.",
        o: ["ように", "ことに", "ために", "つもりに"], a: 0,
        e: "〜ようにする = s'efforcer de (faire une habitude)." },
      { t: "nuance", q: "〜ようにする vs 〜ことにする : nuance ?",
        o: ["ようにする = effort progressif/habitude ; ことにする = décision ponctuelle ferme", "identiques", "ことにする = effort graduel", "ようにする = décision unique"], a: 0,
        e: "ようにする : effort continu ; ことにする : décision tranchée." },
    ],
  },

  {
    id: "g055", g: "〜ようになる", m: "en venir à, devenir capable de (changement)", f: "V-dict／V-potentiel／V-ない + ようになる",
    c: "express", lv: 1, rel: ["g054"],
    note: "Changement progressif d'état ou de capacité : « finir par (pouvoir) faire ». Souvent avec le potentiel.",
    ex: [
      { jp: "日本語が話せるようになった。", fr: "Je suis devenu capable de parler japonais." },
      { jp: "野菜を食べるようになった。", fr: "Je me suis mis à manger des légumes." },
    ],
    qs: [
      { t: "fill", q: "練習して、泳げる＿＿＿なった。", fr: "À force de m'entraîner, je suis devenu capable de nager.",
        o: ["ように", "ことに", "ために", "つもりに"], a: 0,
        e: "〜ようになる = changement progressif de capacité (泳げるようになった)." },
      { t: "nuance", q: "〜ようになる vs 〜ようにする : différence ?",
        o: ["ようになる = changement subi/résultat (« devenir ») ; ようにする = effort volontaire (« s'efforcer »)", "identiques", "ようになる = volontaire", "ようにする = subi"], a: 0,
        e: "なる = changement d'état ; する = action volontaire." },
    ],
  },

  {
    id: "g056", g: "〜ことにする", m: "décider de", f: "V-dict／V-ない + ことにする",
    c: "express", lv: 1, rel: ["g057"],
    note: "Décision personnelle prise par le locuteur. V-ない + ことにする = décider de ne pas.",
    ex: [
      { jp: "明日から早く起きることにする。", fr: "Je décide de me lever tôt à partir de demain." },
      { jp: "今年は旅行に行かないことにした。", fr: "J'ai décidé de ne pas voyager cette année." },
    ],
    qs: [
      { t: "fill", q: "体のために、お酒をやめる＿＿＿した。", fr: "Pour ma santé, j'ai décidé d'arrêter l'alcool.",
        o: ["ことに", "ように", "ために", "つもりに"], a: 0,
        e: "〜ことにする = décision personnelle (やめることにした)." },
      { t: "nuance", q: "〜ことにする vs 〜ことになる : différence ?",
        o: ["ことにする = je décide moi-même ; ことになる = c'est décidé par les circonstances/autrui", "identiques", "ことになる = décision personnelle", "ことにする = décision externe"], a: 0,
        e: "する = décision propre ; なる = décision/résultat externe." },
    ],
  },

  {
    id: "g057", g: "〜ことになる", m: "il a été décidé que, cela aboutit à", f: "V-dict／V-ない + ことになる",
    c: "express", lv: 1, rel: ["g056"],
    note: "Décision prise par autrui/les circonstances, ou conséquence logique. Souvent pour annoncer un changement officiel.",
    ex: [
      { jp: "来月、大阪へ転勤することになった。", fr: "Il a été décidé que je serai muté à Osaka le mois prochain." },
      { jp: "会議は中止ということになった。", fr: "Il a été décidé que la réunion serait annulée." },
    ],
    qs: [
      { t: "fill", q: "会社の都合で、転勤する＿＿＿なった。", fr: "Pour les besoins de l'entreprise, il a été décidé que je serais muté.",
        o: ["ことに", "ように", "ために", "はずに"], a: 0,
        e: "〜ことになる = décision externe/officielle (転勤することになった)." },
      { t: "meaning", q: "「結婚することになりました」— nuance par rapport à «結婚することにしました» ?",
        o: ["なる présente le mariage comme un aboutissement/une annonce (moins centré sur la décision personnelle)", "なる = décision strictement personnelle", "なる et する sont identiques ici", "なる = refus de se marier"], a: 0,
        e: "ことになる présente la chose comme décidée/aboutie (ton plus modeste qu'avec する)." },
    ],
  },

  {
    id: "g058", g: "〜ことにしている", m: "s'être fait une règle de, avoir pour habitude de", f: "V-dict／V-ない + ことにしている",
    c: "express", lv: 2, rel: ["g056"],
    note: "Habitude qu'on s'impose volontairement et qu'on maintient dans le temps.",
    ex: [
      { jp: "毎朝、ジョギングすることにしている。", fr: "Je me suis fait une règle de faire du jogging chaque matin." },
      { jp: "夜は食べすぎないことにしている。", fr: "Je m'astreins à ne pas trop manger le soir." },
    ],
    qs: [
      { t: "fill", q: "健康のため、毎日歩く＿＿＿いる。", fr: "Pour ma santé, j'ai pour habitude de marcher chaque jour.",
        o: ["ことにして", "ようにして", "ことになって", "つもりにして"], a: 0,
        e: "〜ことにしている = habitude qu'on s'impose (歩くことにしている)." },
      { t: "nuance", q: "〜ことにしている vs 〜ことになっている : différence ?",
        o: ["している = règle personnelle ; なっている = règle externe/convenue", "identiques", "している = règle externe", "なっている = habitude personnelle"], a: 0,
        e: "している = je me l'impose ; なっている = c'est la règle établie." },
    ],
  },

  {
    id: "g059", g: "〜ことがある", m: "il arrive que, parfois ; avoir déjà fait", f: "V-dict／V-た + ことがある",
    c: "express", lv: 1, rel: [],
    note: "V-dict + ことがある = il arrive parfois que. V-た + ことがある = avoir déjà fait (expérience passée).",
    ex: [
      { jp: "たまに学校に遅れることがある。", fr: "Il m'arrive parfois d'être en retard à l'école." },
      { jp: "日本へ行ったことがある。", fr: "Je suis déjà allé au Japon." },
    ],
    qs: [
      { t: "fill", q: "富士山に登った＿＿＿がありますか。", fr: "Avez-vous déjà gravi le mont Fuji ?",
        o: ["こと", "もの", "つもり", "はず"], a: 0,
        e: "V-た + ことがある = expérience passée (登ったことがある)." },
      { t: "nuance", q: "「行くことがある」vs「行ったことがある」— différence ?",
        o: ["行くことがある = il arrive que j'y aille (parfois) ; 行ったことがある = j'y suis déjà allé (expérience)", "identiques", "行くことがある = expérience passée", "行ったことがある = habitude future"], a: 0,
        e: "V-dict = fréquence occasionnelle ; V-た = expérience révolue." },
    ],
  },

  {
    id: "g060", g: "〜やすい", m: "facile à, avoir tendance à", f: "V-ます stem + やすい",
    c: "express", lv: 1, rel: ["g061"],
    note: "Facilité à faire l'action, ou propension. Se conjugue comme un adjectif en い.",
    ex: [
      { jp: "このペンは書きやすい。", fr: "Ce stylo écrit facilement (est agréable à écrire)." },
      { jp: "彼の説明は分かりやすい。", fr: "Ses explications sont faciles à comprendre." },
    ],
    qs: [
      { t: "fill", q: "この道は広くて運転し＿＿＿。", fr: "Cette route est large et facile à conduire.",
        o: ["やすい", "にくい", "がたい", "づらい"], a: 0,
        e: "〜やすい = facile à (運転しやすい)." },
      { t: "meaning", q: "「風邪をひきやすい」— sens ?",
        o: ["avoir tendance à attraper froid facilement", "difficile d'attraper froid", "ne jamais attraper froid", "avoir attrapé froid"], a: 0,
        e: "〜やすい = propension/facilité." },
    ],
  },

  {
    id: "g061", g: "〜にくい", m: "difficile à, peu commode à", f: "V-ます stem + にくい",
    c: "express", lv: 1, rel: ["g060"],
    note: "Difficulté à faire l'action. Opposé de やすい. Se conjugue comme un adjectif en い.",
    ex: [
      { jp: "この字は小さくて読みにくい。", fr: "Ces caractères sont petits et difficiles à lire." },
      { jp: "この肉は硬くて食べにくい。", fr: "Cette viande est dure et difficile à manger." },
    ],
    qs: [
      { t: "fill", q: "この薬は苦くて飲み＿＿＿。", fr: "Ce médicament est amer et difficile à avaler.",
        o: ["にくい", "やすい", "たい", "そう"], a: 0,
        e: "〜にくい = difficile à (飲みにくい)." },
      { t: "nuance", q: "〜にくい et 〜やすい sont :",
        o: ["antonymes (difficile à / facile à)", "synonymes", "tous deux « facile à »", "tous deux « difficile à »"], a: 0,
        e: "やすい = facile ; にくい = difficile." },
    ],
  },

  {
    id: "g062", g: "〜すぎる", m: "trop (excès)", f: "V-ます stem／A-stem + すぎる",
    c: "express", lv: 1, rel: [],
    note: "Indique un excès. Pour les adjectifs : on enlève い (高い→高すぎる) et な (静か→静かすぎる).",
    ex: [
      { jp: "昨日は食べすぎた。", fr: "Hier, j'ai trop mangé." },
      { jp: "この問題は難しすぎる。", fr: "Ce problème est trop difficile." },
    ],
    qs: [
      { t: "fill", q: "お酒を飲み＿＿＿て、頭が痛い。", fr: "J'ai trop bu, j'ai mal à la tête.",
        o: ["すぎ", "やすく", "にくく", "たく"], a: 0,
        e: "〜すぎる = excès (飲みすぎて)." },
      { t: "usage", q: "Forme correcte de « trop cher » avec すぎる ?",
        o: ["高すぎる", "高いすぎる", "高くすぎる", "高さすぎる"], a: 0,
        e: "Adjectif en い : on retire い → 高 + すぎる." },
    ],
  },

  {
    id: "g063", g: "〜方（かた）", m: "façon de, manière de", f: "V-ます stem + 方",
    c: "express", lv: 1, rel: [],
    note: "Exprime la manière/méthode de faire une action. L'objet du verbe prend の (使い方).",
    ex: [
      { jp: "この漢字の読み方が分からない。", fr: "Je ne connais pas la façon de lire ce kanji." },
      { jp: "料理の作り方を教えてください。", fr: "Apprenez-moi à préparer ce plat." },
    ],
    qs: [
      { t: "fill", q: "この機械の使い＿＿＿を説明します。", fr: "Je vais expliquer comment utiliser cette machine.",
        o: ["方", "やすい", "すぎ", "ながら"], a: 0,
        e: "V-ます stem + 方 = la façon de (使い方)." },
      { t: "meaning", q: "「考え方が違う」— sens de 方 ?",
        o: ["la façon de penser est différente", "la direction est différente", "le penseur est différent", "à propos de la pensée"], a: 0,
        e: "〜方 = manière/méthode (ici, la manière de penser)." },
    ],
  },

  {
    id: "g064", g: "〜まま", m: "tel quel, en restant dans l'état", f: "V-た／V-ない／A／N＋の + まま",
    c: "express", lv: 2, rel: [],
    note: "Un état reste inchangé pendant qu'une autre action a lieu : « en laissant tel quel ».",
    ex: [
      { jp: "靴を履いたまま、入らないでください。", fr: "N'entrez pas en gardant vos chaussures." },
      { jp: "テレビをつけたまま寝てしまった。", fr: "Je me suis endormi en laissant la télé allumée." },
    ],
    qs: [
      { t: "fill", q: "窓を開けた＿＿＿出かけてしまった。", fr: "Je suis sorti en laissant la fenêtre ouverte.",
        o: ["まま", "ながら", "うちに", "ばかり"], a: 0,
        e: "〜まま = en laissant dans l'état (開けたまま)." },
      { t: "meaning", q: "「立ったまま食べる」— sens ?",
        o: ["manger debout (en restant debout)", "manger après s'être levé", "manger pour se lever", "manger chaque fois debout"], a: 0,
        e: "〜まま = état maintenu pendant l'action." },
    ],
  },

  {
    id: "g065", g: "〜ほど", m: "au point de, tellement que ; environ", f: "V-plain／A／N + ほど",
    c: "express", lv: 2, rel: [],
    note: "(1) Degré (« au point de ») ; (2) quantité approximative (« environ »).",
    ex: [
      { jp: "立てないほど疲れた。", fr: "J'étais fatigué au point de ne pas pouvoir me lever." },
      { jp: "一時間ほど待った。", fr: "J'ai attendu environ une heure." },
    ],
    qs: [
      { t: "fill", q: "涙が出る＿＿＿感動した。", fr: "J'ai été ému au point d'en pleurer.",
        o: ["ほど", "まま", "ながら", "ばかり"], a: 0,
        e: "〜ほど = degré (« au point de »)." },
      { t: "meaning", q: "「三日ほどかかる」— sens de ほど ?",
        o: ["ça prend environ trois jours (approximation)", "ça prend exactement trois jours", "ça prend plus de trois jours", "ça prend moins d'un jour"], a: 0,
        e: "〜ほど (emploi 2) = approximation (« environ »)." },
    ],
  },

  {
    id: "g066", g: "〜だけ", m: "seulement, uniquement", f: "N／V-dict + だけ",
    c: "express", lv: 1, rel: ["g067"],
    note: "Limite à une seule chose : « seulement X (et rien d'autre) ».",
    ex: [
      { jp: "見るだけで、買わない。", fr: "Je regarde seulement, je n'achète pas." },
      { jp: "一人だけ来なかった。", fr: "Une seule personne n'est pas venue." },
    ],
    qs: [
      { t: "fill", q: "水＿＿＿あれば、しばらく生きられる。", fr: "Avec seulement de l'eau, on peut survivre un moment.",
        o: ["だけ", "しか", "ほど", "ばかり"], a: 0,
        e: "〜だけ = seulement (limitation, phrase affirmative)." },
      { t: "nuance", q: "〜だけ vs 〜しか : différence ?",
        o: ["だけ se construit avec l'affirmatif (ton neutre) ; しか exige le négatif (insiste sur le « rien de plus »)", "identiques", "だけ exige le négatif", "しか se construit avec l'affirmatif"], a: 0,
        e: "だけ + affirmatif ; しか + négatif." },
    ],
  },

  {
    id: "g067", g: "〜しか〜ない", m: "ne… que, seulement (insistance)", f: "N／V-dict + しか + （…）ない",
    c: "express", lv: 1, rel: ["g066"],
    note: "Toujours suivi d'une négation. Insiste sur le caractère limité/insuffisant : « il n'y a que… ».",
    ex: [
      { jp: "百円しか持っていない。", fr: "Je n'ai que cent yens." },
      { jp: "野菜しか食べない。", fr: "Je ne mange que des légumes." },
    ],
    qs: [
      { t: "fill", q: "あと五分＿＿＿時間がない。", fr: "Il ne reste que cinq minutes.",
        o: ["しか", "だけ", "ほど", "ばかり"], a: 0,
        e: "〜しか + négation = ne… que (insiste sur le manque). (しか…ない)" },
      { t: "meaning", q: "「一回しか会ったことがない」— sens ?",
        o: ["je ne l'ai rencontré qu'une seule fois", "je l'ai rencontré au moins une fois", "je le rencontre souvent", "je ne l'ai jamais rencontré"], a: 0,
        e: "〜しか〜ない = limitation à une seule occurrence." },
    ],
  },

  {
    id: "g068", g: "〜ほうがいい", m: "il vaudrait mieux, il est préférable de", f: "V-た／V-ない + ほうがいい",
    c: "express", lv: 1, rel: [],
    note: "Conseil. À l'affirmatif on emploie souvent V-た (食べたほうがいい) ; à la négation V-ない (食べないほうがいい).",
    ex: [
      { jp: "早く寝たほうがいい。", fr: "Tu ferais mieux de te coucher tôt." },
      { jp: "無理しないほうがいい。", fr: "Mieux vaut ne pas te forcer." },
    ],
    qs: [
      { t: "fill", q: "熱があるなら、病院に行っ＿＿＿いい。", fr: "Si tu as de la fièvre, tu ferais mieux d'aller à l'hôpital.",
        o: ["たほうが", "るほうが", "ないほうが", "てほうが"], a: 0,
        e: "Conseil affirmatif : V-た + ほうがいい (行ったほうがいい)." },
      { t: "meaning", q: "「タバコは吸わないほうがいい」— sens ?",
        o: ["il vaut mieux ne pas fumer", "il faut fumer", "on fume parfois", "on a arrêté de fumer"], a: 0,
        e: "V-ない + ほうがいい = conseil négatif." },
    ],
  },

  {
    id: "g069", g: "〜てもいい", m: "avoir le droit de, c'est permis", f: "V-て／A-くて／N＋でも + いい",
    c: "express", lv: 1, rel: ["g070"],
    note: "Permission : « tu peux / c'est permis de ». En question : demander la permission.",
    ex: [
      { jp: "ここに座ってもいいですか。", fr: "Puis-je m'asseoir ici ?" },
      { jp: "もう帰ってもいいよ。", fr: "Tu peux déjà rentrer." },
    ],
    qs: [
      { t: "fill", q: "写真を撮っ＿＿＿ですか。", fr: "Puis-je prendre des photos ?",
        o: ["てもいい", "てはいけない", "なければならない", "ないといけない"], a: 0,
        e: "〜てもいい = permission (撮ってもいい)." },
      { t: "nuance", q: "〜てもいい vs 〜てはいけない : relation ?",
        o: ["てもいい = permission ; てはいけない = interdiction (opposés)", "synonymes", "tous deux = permission", "tous deux = interdiction"], a: 0,
        e: "てもいい (permis) ↔ てはいけない (interdit)." },
    ],
  },

  {
    id: "g070", g: "〜なければならない／なくてはならない", m: "devoir, il faut (obligation)", f: "V-ない radical + なければならない／なくてはならない",
    c: "express", lv: 1, rel: ["g071"],
    note: "Obligation/nécessité. Formes familières : なきゃ(いけない), なくちゃ(いけない). On peut aussi avoir 〜ないといけない.",
    ex: [
      { jp: "明日までに宿題を出さなければならない。", fr: "Je dois rendre les devoirs d'ici demain." },
      { jp: "薬を飲まなくてはならない。", fr: "Je dois prendre mon médicament." },
    ],
    qs: [
      { t: "fill", q: "ビザを取るために、書類を出さ＿＿＿。", fr: "Pour obtenir le visa, je dois remettre des documents.",
        o: ["なければならない", "てもいい", "ないほうがいい", "なくてもいい"], a: 0,
        e: "〜なければならない = obligation (出さなければならない)." },
      { t: "usage", q: "Forme familière courante de なければならない ?",
        o: ["〜なきゃ（いけない）", "〜てもいい", "〜たほうがいい", "〜てある"], a: 0,
        e: "なければ → なきゃ (oral) ; なくては → なくちゃ." },
    ],
  },

  {
    id: "g071", g: "〜なくてもいい", m: "ne pas avoir à, pas obligé de", f: "V-ない radical + くてもいい",
    c: "express", lv: 1, rel: ["g070"],
    note: "Absence d'obligation : « ce n'est pas nécessaire de ». Négation de なければならない.",
    ex: [
      { jp: "明日は来なくてもいいです。", fr: "Tu n'as pas besoin de venir demain." },
      { jp: "全部食べなくてもいい。", fr: "Tu n'es pas obligé de tout manger." },
    ],
    qs: [
      { t: "fill", q: "急がない仕事だから、今日やら＿＿＿。", fr: "C'est un travail non urgent, tu n'as pas besoin de le faire aujourd'hui.",
        o: ["なくてもいい", "なければならない", "てはいけない", "たほうがいい"], a: 0,
        e: "〜なくてもいい = absence d'obligation (やらなくてもいい)." },
      { t: "nuance", q: "〜なくてもいい vs 〜なければならない : relation ?",
        o: ["なくてもいい = pas obligé ; なければならない = obligatoire (opposés)", "synonymes", "tous deux = obligatoire", "tous deux = facultatif"], a: 0,
        e: "なくてもいい (facultatif) ↔ なければならない (obligatoire)." },
    ],
  },

  {
    id: "g072", g: "〜という", m: "qui s'appelle ; le fait que ; dit que", f: "N／Phrase + という",
    c: "express", lv: 1, rel: ["g073"],
    note: "(1) Présente un nom (« nommé… ») ; (2) rapporte/cite ; (3) nominalise une idée (ということ).",
    ex: [
      { jp: "「すし」という日本料理が好きだ。", fr: "J'aime un plat japonais appelé « sushi »." },
      { jp: "彼が来ないという連絡があった。", fr: "On m'a informé qu'il ne viendrait pas." },
    ],
    qs: [
      { t: "fill", q: "田中さん＿＿＿人から電話があった。", fr: "Une personne du nom de Tanaka a appelé.",
        o: ["という", "といった", "について", "によると"], a: 0,
        e: "N + という + N = « (un) X nommé… » (田中さんという人)." },
      { t: "meaning", q: "「最近、忙しいということだ」— sens de ということだ ?",
        o: ["il paraît que / on dit qu'il est occupé ces temps-ci", "il veut être occupé", "il doit être occupé", "il est rarement occupé"], a: 0,
        e: "〜ということだ peut rapporter une information (« il paraît que »)." },
    ],
  },

  {
    id: "g073", g: "〜といった", m: "tel que, comme (exemples)", f: "N + や + N + といった + N",
    c: "express", lv: 2, rel: ["g072"],
    note: "Introduit des exemples représentatifs et non exhaustifs : « tel que X et Y ».",
    ex: [
      { jp: "サッカーやテニスといったスポーツが人気だ。", fr: "Des sports tels que le foot ou le tennis sont populaires." },
      { jp: "りんごやみかんといった果物を買った。", fr: "J'ai acheté des fruits comme des pommes et des mandarines." },
    ],
    qs: [
      { t: "fill", q: "京都や奈良＿＿＿古い町を訪ねた。", fr: "J'ai visité de vieilles villes telles que Kyoto et Nara.",
        o: ["といった", "という", "について", "によると"], a: 0,
        e: "〜といった = introduit des exemples représentatifs (といった町)." },
      { t: "nuance", q: "〜といった vs 〜という : différence ?",
        o: ["といった = donne des exemples (« tels que ») ; という = nomme/cite (« appelé »)", "identiques", "という = exemples", "といった = nom propre"], a: 0,
        e: "といった = exemples ; という = appellation/citation." },
    ],
  },

  {
    id: "g074", g: "〜てもらう", m: "se faire faire par, bénéficier de l'action de", f: "V-て + もらう（〜ていただく poli）",
    c: "express", lv: 1, rel: ["g075"],
    note: "Le locuteur (ou son groupe) bénéficie d'une action faite par autrui. L'agent qui rend service prend に.",
    ex: [
      { jp: "友達に宿題を手伝ってもらった。", fr: "Je me suis fait aider pour mes devoirs par un ami." },
      { jp: "先生に間違いを直していただいた。", fr: "Je me suis fait corriger mes fautes par le professeur (poli)." },
    ],
    qs: [
      { t: "fill", q: "兄＿＿＿駅まで送ってもらった。", fr: "Mon grand frère m'a accompagné jusqu'à la gare.",
        o: ["に", "が", "は", "を"], a: 0,
        e: "Avec 〜てもらう, le bienfaiteur prend に (兄に送ってもらった)." },
      { t: "nuance", q: "〜てもらう vs 〜てくれる : différence de perspective ?",
        o: ["てもらう = perspective du bénéficiaire (« je me fais faire ») ; てくれる = perspective du donneur (« il fait pour moi »)", "identiques", "てもらう = donneur", "てくれる = bénéficiaire forcé"], a: 0,
        e: "もらう centre sur celui qui reçoit ; くれる sur celui qui donne." },
    ],
  },

  {
    id: "g075", g: "〜てあげる", m: "faire pour quelqu'un (faveur accordée)", f: "V-て + あげる（〜てやる familier ／ 〜てさしあげる poli）",
    c: "express", lv: 1, rel: ["g074"],
    note: "Le locuteur (ou son groupe) fait une action en faveur d'autrui. À employer avec tact (peut sembler condescendant envers un supérieur).",
    ex: [
      { jp: "友達に本を貸してあげた。", fr: "J'ai prêté un livre à un ami (pour lui rendre service)." },
      { jp: "妹に料理を作ってあげた。", fr: "J'ai préparé un plat pour ma petite sœur." },
    ],
    qs: [
      { t: "fill", q: "道が分からない人に、地図を見せ＿＿＿。", fr: "À une personne qui ne trouvait pas son chemin, j'ai montré une carte (pour l'aider).",
        o: ["てあげた", "てもらった", "てくれた", "ておいた"], a: 0,
        e: "〜てあげる = faire une faveur à autrui (見せてあげた)." },
      { t: "nuance", q: "〜てあげる vs 〜てくれる : différence ?",
        o: ["てあげる = je fais POUR autrui ; てくれる = autrui fait POUR moi", "identiques", "てあげる = autrui pour moi", "てくれる = moi pour autrui"], a: 0,
        e: "あげる : faveur donnée par le locuteur ; くれる : faveur reçue par le locuteur." },
    ],
  },

  /* ===================== AJOUTS — g076 à g132 ===================== */

  {
    id: "g076", g: "〜てくれる", m: "quelqu'un fait (pour moi/mon groupe)", f: "V-て + くれる（〜てくださる poli）",
    c: "express", lv: 1, rel: ["g074", "g075"],
    note: "Une autre personne fait une action en ma faveur (perspective du bénéficiaire = moi).",
    ex: [
      { jp: "友達が宿題を手伝ってくれた。", fr: "Un ami m'a aidé pour mes devoirs." },
      { jp: "先生が説明してくださった。", fr: "Le professeur a bien voulu m'expliquer (poli)." },
    ],
    qs: [
      { t: "fill", q: "母がセーターを編んで＿＿＿。", fr: "Ma mère m'a tricoté un pull.",
        o: ["くれた", "あげた", "もらった", "おいた"], a: 0,
        e: "〜てくれる = autrui fait pour moi (編んでくれた)." },
      { t: "nuance", q: "〜てくれる vs 〜てあげる : différence ?",
        o: ["てくれる = autrui fait POUR MOI ; てあげる = je fais POUR autrui", "identiques", "てくれる = je fais pour autrui", "てあげる = autrui fait pour moi"], a: 0,
        e: "くれる : faveur reçue ; あげる : faveur donnée par moi." },
    ],
  },

  {
    id: "g077", g: "〜ていただく／〜てくださる", m: "recevoir/donner une faveur (registre poli)", f: "V-て + いただく（humble）／くださる（honorifique）",
    c: "express", lv: 2, rel: ["g074", "g076"],
    note: "Versions polies : いただく (je reçois humblement) ↔ くださる (un supérieur fait pour moi).",
    ex: [
      { jp: "先生に推薦状を書いていただいた。", fr: "Le professeur a eu la bonté d'écrire une lettre de recommandation." },
      { jp: "部長が教えてくださった。", fr: "Le chef de service a bien voulu m'expliquer." },
    ],
    qs: [
      { t: "fill", q: "社長に空港まで送って＿＿＿。", fr: "Le président a eu l'amabilité de me conduire à l'aéroport.",
        o: ["くださった", "あげた", "やった", "おいた"], a: 0,
        e: "〜てくださる = forme honorifique de くれる (un supérieur fait pour moi)." },
      { t: "nuance", q: "Forme humble de 〜てもらう ?",
        o: ["〜ていただく", "〜てくださる", "〜てあげる", "〜てやる"], a: 0,
        e: "もらう → いただく (humble) ; くれる → くださる (honorifique)." },
    ],
  },

  {
    id: "g078", g: "〜てやる", m: "faire pour (inférieur, animal, plante)", f: "V-て + やる",
    c: "express", lv: 2, rel: ["g075"],
    note: "Variante de てあげる envers un inférieur, un enfant, un animal ou une plante. Peut aussi marquer une détermination.",
    ex: [
      { jp: "犬を散歩に連れて行ってやる。", fr: "J'emmène le chien en promenade (pour lui)." },
      { jp: "花に水をやる。", fr: "J'arrose les fleurs." },
    ],
    qs: [
      { t: "fill", q: "弟の宿題を見て＿＿＿。", fr: "Je vérifie les devoirs de mon petit frère (pour lui).",
        o: ["やった", "くれた", "もらった", "いただいた"], a: 0,
        e: "〜てやる = faveur envers un inférieur (見てやった)." },
      { t: "nuance", q: "Quand emploie-t-on 〜てやる plutôt que 〜てあげる ?",
        o: ["envers un inférieur, un enfant, un animal ou une plante", "envers un supérieur", "envers soi-même", "jamais à l'oral"], a: 0,
        e: "てやる s'adresse à un destinataire de rang inférieur (ou non humain)." },
    ],
  },

  {
    id: "g079", g: "〜（よ）う（意志形）", m: "forme volitive — allez / faisons (plain)", f: "Gr1 : お段＋う（書こう）／ Gr2 : 〜よう（食べよう）／ する→しよう・来る→こよう",
    c: "modality", lv: 1, rel: ["g080"],
    note: "Équivalent familier de ましょう : exprime sa volonté ou propose de faire.",
    ex: [
      { jp: "そろそろ行こう。", fr: "Allons-y maintenant." },
      { jp: "今日は早く寝よう。", fr: "Couchons-nous tôt aujourd'hui." },
    ],
    qs: [
      { t: "fill", q: "疲れたから、少し休＿＿＿。", fr: "On est fatigués, reposons-nous un peu.",
        o: ["もう", "む", "みる", "んだ"], a: 0,
        e: "休む (Gr1) → 休もう (volitif familier)." },
      { t: "usage", q: "Forme volitive de 食べる ?",
        o: ["食べよう", "食べろう", "食べるう", "食べこう"], a: 0,
        e: "Gr2 : radical + よう (食べよう)." },
    ],
  },

  {
    id: "g080", g: "〜（よ）うと思う", m: "avoir l'intention de, penser faire", f: "V-volitif + と思う",
    c: "modality", lv: 1, rel: ["g079", "g039"],
    note: "Exprime une intention décidée sur le moment (思う) ou réfléchie (思っている).",
    ex: [
      { jp: "来年、留学しようと思う。", fr: "Je pense partir étudier à l'étranger l'an prochain." },
      { jp: "週末は家でゆっくりしようと思っている。", fr: "Je compte me reposer à la maison ce week-end." },
    ],
    qs: [
      { t: "fill", q: "明日から運動を始めよう＿＿＿思います。", fr: "Je pense commencer le sport dès demain.",
        o: ["と", "に", "で", "が"], a: 0,
        e: "V-volitif + と思う = intention (始めようと思う)." },
      { t: "nuance", q: "〜ようと思う vs 〜つもりだ : nuance ?",
        o: ["ようと思う = intention décidée à l'instant (plus souple) ; つもりだ = projet ferme et arrêté", "identiques", "つもりだ est plus spontané", "ようと思う exprime une obligation"], a: 0,
        e: "つもり = décision plus établie que ようと思う." },
    ],
  },

  {
    id: "g081", g: "〜予定だ", m: "il est prévu que, être programmé pour", f: "V-dict／N＋の + 予定だ",
    c: "modality", lv: 2, rel: ["g039"],
    note: "Indique un programme/planning objectif déjà fixé (plus neutre que つもり, qui est une intention personnelle).",
    ex: [
      { jp: "来週、出張する予定です。", fr: "Je dois partir en déplacement la semaine prochaine (c'est prévu)." },
      { jp: "会議は三時の予定だ。", fr: "La réunion est prévue pour trois heures." },
    ],
    qs: [
      { t: "fill", q: "飛行機は十時に着く＿＿＿です。", fr: "L'avion est censé arriver à dix heures.",
        o: ["予定", "つもり", "はず", "らしい"], a: 0,
        e: "〜予定だ = planning fixé (着く予定)." },
      { t: "nuance", q: "〜予定だ vs 〜つもりだ : nuance ?",
        o: ["予定 = programme objectif fixé ; つもり = intention personnelle", "identiques", "予定 = intention personnelle", "つもり = horaire officiel"], a: 0,
        e: "予定 = agenda/planning ; つもり = volonté propre." },
    ],
  },

  {
    id: "g082", g: "〜つもりはない", m: "n'avoir aucune intention de", f: "V-dict + つもりはない",
    c: "modality", lv: 2, rel: ["g039"],
    note: "Nie fermement une intention. Plus catégorique que つもりがない.",
    ex: [
      { jp: "彼を許すつもりはない。", fr: "Je n'ai aucune intention de lui pardonner." },
      { jp: "今やめるつもりはありません。", fr: "Je n'ai pas l'intention d'arrêter maintenant." },
    ],
    qs: [
      { t: "fill", q: "うそをつく＿＿＿はなかった。", fr: "Je n'avais aucune intention de mentir.",
        o: ["つもり", "よう", "はず", "ところ"], a: 0,
        e: "〜つもりはない = absence ferme d'intention (つくつもりはなかった)." },
      { t: "meaning", q: "「謝るつもりはない」— sens ?",
        o: ["je n'ai aucune intention de m'excuser", "j'ai l'intention de m'excuser", "je dois m'excuser", "je me suis excusé"], a: 0,
        e: "〜つもりはない = refus net de faire l'action." },
    ],
  },

  {
    id: "g083", g: "可能形（〜られる／〜える）", m: "forme potentielle — pouvoir, être capable", f: "Gr1 : え段＋る（読める）／ Gr2 : 〜られる（食べられる）／ する→できる・来る→来られる",
    c: "express", lv: 1, rel: ["g039"],
    note: "Exprime la capacité ou la possibilité. L'objet passe souvent de を à が.",
    ex: [
      { jp: "私は漢字が読めます。", fr: "Je sais lire les kanji." },
      { jp: "朝早く起きられない。", fr: "Je n'arrive pas à me lever tôt le matin." },
    ],
    qs: [
      { t: "fill", q: "彼は日本語が話＿＿＿。", fr: "Il sait parler japonais.",
        o: ["せる", "す", "した", "そう"], a: 0,
        e: "話す (Gr1) → 話せる (potentiel)." },
      { t: "usage", q: "Forme potentielle de 食べる ?",
        o: ["食べられる", "食べれる (familier)", "食べさせる", "食べる"], a: 0,
        e: "Gr2 : radical + られる (食べられる). 食べれる existe à l'oral (ら抜き)." },
    ],
  },

  {
    id: "g084", g: "〜はじめる", m: "commencer à, se mettre à", f: "V-ます stem + はじめる",
    c: "express", lv: 1, rel: ["g086", "g087"],
    note: "Verbe composé indiquant le début d'une action.",
    ex: [
      { jp: "去年から日本語を習いはじめた。", fr: "J'ai commencé à apprendre le japonais l'an dernier." },
      { jp: "雨が降りはじめた。", fr: "Il s'est mis à pleuvoir." },
    ],
    qs: [
      { t: "fill", q: "赤ちゃんが歩き＿＿＿。", fr: "Le bébé a commencé à marcher.",
        o: ["はじめた", "おわった", "つづけた", "だした"], a: 0,
        e: "〜はじめる = début d'une action (歩きはじめた)." },
      { t: "nuance", q: "〜はじめる vs 〜だす : nuance ?",
        o: ["はじめる = début neutre ; だす = début soudain/imprévu", "identiques", "だす = fin", "はじめる = soudain"], a: 0,
        e: "だす souligne la soudaineté ; はじめる est neutre." },
    ],
  },

  {
    id: "g085", g: "〜つづける", m: "continuer à", f: "V-ます stem + つづける",
    c: "express", lv: 1, rel: ["g084"],
    note: "Verbe composé indiquant la continuation d'une action.",
    ex: [
      { jp: "三時間も歩きつづけた。", fr: "J'ai continué à marcher pendant trois heures." },
      { jp: "彼は努力しつづけている。", fr: "Il continue de faire des efforts." },
    ],
    qs: [
      { t: "fill", q: "雨が一日中降り＿＿＿。", fr: "Il a continué à pleuvoir toute la journée.",
        o: ["つづけた", "はじめた", "おわった", "やすい"], a: 0,
        e: "〜つづける = continuation (降りつづけた)." },
      { t: "meaning", q: "「待ちつづける」— sens ?",
        o: ["continuer d'attendre", "commencer à attendre", "finir d'attendre", "ne pas attendre"], a: 0,
        e: "〜つづける = poursuivre l'action." },
    ],
  },

  {
    id: "g086", g: "〜おわる", m: "finir de, achever", f: "V-ます stem + おわる",
    c: "express", lv: 1, rel: ["g084"],
    note: "Verbe composé indiquant l'achèvement d'une action.",
    ex: [
      { jp: "この本を読みおわった。", fr: "J'ai fini de lire ce livre." },
      { jp: "食べおわったら、皿を洗ってね。", fr: "Quand tu auras fini de manger, fais la vaisselle." },
    ],
    qs: [
      { t: "fill", q: "レポートを書き＿＿＿。", fr: "J'ai fini d'écrire le rapport.",
        o: ["おわった", "はじめた", "つづけた", "だした"], a: 0,
        e: "〜おわる = achèvement (書きおわった)." },
      { t: "nuance", q: "〜おわる et 〜はじめる sont :",
        o: ["antonymes (finir / commencer)", "synonymes", "tous deux = continuer", "sans rapport"], a: 0,
        e: "はじめる (début) ↔ おわる (fin)." },
    ],
  },

  {
    id: "g087", g: "〜だす", m: "se mettre soudain à, éclater en", f: "V-ます stem + だす",
    c: "express", lv: 2, rel: ["g084"],
    note: "Début soudain et souvent involontaire d'une action.",
    ex: [
      { jp: "急に泣きだした。", fr: "Il s'est mis soudain à pleurer." },
      { jp: "みんなが笑いだした。", fr: "Tout le monde a éclaté de rire." },
    ],
    qs: [
      { t: "fill", q: "空が暗くなって、突然雨が降り＿＿＿。", fr: "Le ciel s'est assombri et il s'est soudain mis à pleuvoir.",
        o: ["だした", "おわった", "つづけた", "やすい"], a: 0,
        e: "〜だす = début soudain/imprévu (降りだした)." },
      { t: "meaning", q: "「走りだす」— sens ?",
        o: ["se mettre à courir (soudainement)", "finir de courir", "continuer à courir", "vouloir courir"], a: 0,
        e: "〜だす = déclenchement brusque." },
    ],
  },

  {
    id: "g088", g: "〜たがる", m: "(une tierce personne) veut faire", f: "V-ます stem + たがる",
    c: "modality", lv: 2, rel: ["g089"],
    note: "Exprime le désir d'une 3e personne, observé de l'extérieur (≠ たい, réservé à soi).",
    ex: [
      { jp: "子供は外で遊びたがる。", fr: "Les enfants veulent jouer dehors." },
      { jp: "彼は何でも知りたがる。", fr: "Il veut tout savoir." },
    ],
    qs: [
      { t: "fill", q: "弟は新しいゲームを買い＿＿＿いる。", fr: "Mon petit frère veut acheter le nouveau jeu.",
        o: ["たがって", "たくて", "たければ", "たがり"], a: 0,
        e: "〜たがる (3e personne) → 〜たがっている (買いたがっている)." },
      { t: "nuance", q: "〜たい vs 〜たがる : qui ?",
        o: ["たい = mon propre désir ; たがる = le désir observé d'autrui", "identiques", "たい = autrui", "たがる = soi-même"], a: 0,
        e: "たい (1re personne) ; たがる (3e personne, observé)." },
    ],
  },

  {
    id: "g089", g: "〜がる", m: "montrer des signes de (sentiment d'autrui)", f: "A-stem（emotion）+ がる",
    c: "modality", lv: 2, rel: ["g088"],
    note: "Transforme un adjectif de sentiment en verbe décrivant le comportement visible d'autrui (寂しい→寂しがる).",
    ex: [
      { jp: "子供が暗い部屋を怖がる。", fr: "L'enfant a peur de la pièce sombre (le montre)." },
      { jp: "彼女は新しい服を欲しがっている。", fr: "Elle a envie de nouveaux vêtements (on le voit)." },
    ],
    qs: [
      { t: "fill", q: "犬が寒＿＿＿いる。", fr: "Le chien a l'air d'avoir froid.",
        o: ["がって", "くて", "そうで", "がる"], a: 0,
        e: "寒い → 寒がる (montrer qu'on a froid) → 寒がっている." },
      { t: "nuance", q: "Pourquoi dit-on 「彼は寂しがっている」et non「彼は寂しい」?",
        o: ["les sentiments d'autrui se décrivent de l'extérieur avec がる", "寂しい n'existe pas", "がる est plus poli", "les deux sont impossibles"], a: 0,
        e: "Les adjectifs de sentiment + がる servent à parler des émotions d'une tierce personne." },
    ],
  },

  {
    id: "g090", g: "〜ずに", m: "sans faire (registre écrit)", f: "V-ない radical + ずに（する→せずに）",
    c: "express", lv: 2, rel: ["g091"],
    note: "Équivalent soigné de ないで. Attention : する devient せずに.",
    ex: [
      { jp: "朝ご飯を食べずに出かけた。", fr: "Je suis sorti sans avoir pris de petit-déjeuner." },
      { jp: "何も言わずに帰った。", fr: "Il est rentré sans rien dire." },
    ],
    qs: [
      { t: "fill", q: "辞書を使わ＿＿＿読んでみた。", fr: "J'ai essayé de lire sans utiliser de dictionnaire.",
        o: ["ずに", "ないに", "なくに", "ずで"], a: 0,
        e: "〜ずに = sans faire (使わずに), registre écrit." },
      { t: "usage", q: "Forme en ずに de する ?",
        o: ["せずに", "しずに", "さずに", "すずに"], a: 0,
        e: "する est irrégulier → せずに." },
    ],
  },

  {
    id: "g091", g: "〜ないで", m: "sans faire / au lieu de", f: "V-ない radical + ないで",
    c: "express", lv: 1, rel: ["g090"],
    note: "Indique qu'une action a lieu sans qu'une autre se produise, ou à la place d'une autre.",
    ex: [
      { jp: "電気を消さないで寝た。", fr: "Je me suis couché sans éteindre la lumière." },
      { jp: "バスに乗らないで歩いた。", fr: "J'ai marché au lieu de prendre le bus." },
    ],
    qs: [
      { t: "fill", q: "傘を持た＿＿＿出かけて、雨にぬれた。", fr: "Je suis sorti sans parapluie et je me suis fait mouiller.",
        o: ["ないで", "なくて", "ずつ", "ながら"], a: 0,
        e: "〜ないで = sans faire (持たないで)." },
      { t: "nuance", q: "〜ないで vs 〜なくて : différence d'emploi ?",
        o: ["ないで = manière (« sans faire ») ; なくて = cause/état (« comme ne… pas »)", "identiques", "なくて = manière", "ないで = cause"], a: 0,
        e: "ないで relie deux actions ; なくて exprime une cause ou un état." },
    ],
  },

  {
    id: "g092", g: "〜なくて", m: "ne… pas et / parce que ne… pas (cause)", f: "V-ない radical + くて ／ A-くない→くなくて",
    c: "contrast", lv: 2, rel: ["g091"],
    note: "Forme en て de la négation, surtout pour une cause ou un état (souvent avec des émotions : 心配だ, 困る).",
    ex: [
      { jp: "バスが来なくて、遅刻した。", fr: "Le bus n'arrivant pas, j'étais en retard." },
      { jp: "意味が分からなくて困った。", fr: "Ne comprenant pas le sens, j'étais embêté." },
    ],
    qs: [
      { t: "fill", q: "子供が帰ってこ＿＿＿、心配した。", fr: "Comme l'enfant ne rentrait pas, je me suis inquiété.",
        o: ["なくて", "ないで", "ずに", "ないと"], a: 0,
        e: "〜なくて = négation exprimant la cause (こなくて → 心配した)." },
      { t: "nuance", q: "Pour exprimer « comme je ne comprenais pas, j'étais embêté », on emploie :",
        o: ["分からなくて (cause)", "分からないで", "分からずつ", "分からなければ"], a: 0,
        e: "Cause/état négatif → なくて." },
    ],
  },

  {
    id: "g093", g: "〜な（禁止）", m: "ne fais pas ! (interdiction forte)", f: "V-dict + な",
    c: "express", lv: 2, rel: ["g094"],
    note: "Interdiction brusque et familière (souvent masculine, panneaux, ordres). À ne pas confondre avec le な de なさい.",
    ex: [
      { jp: "ここに入るな。", fr: "N'entre pas ici." },
      { jp: "うそをつくな。", fr: "Ne mens pas." },
    ],
    qs: [
      { t: "fill", q: "危ないから、触る＿＿＿！", fr: "C'est dangereux, ne touche pas !",
        o: ["な", "ね", "よ", "の"], a: 0,
        e: "V-dict + な = interdiction forte (触るな)." },
      { t: "meaning", q: "「動くな」— sens ?",
        o: ["ne bouge pas ! (interdiction)", "bouge !", "tu bouges ?", "veux-tu bouger ?"], a: 0,
        e: "〜な = interdiction directe." },
    ],
  },

  {
    id: "g094", g: "命令形（〜ろ／〜え）", m: "forme impérative (ordre)", f: "Gr1 : え段（書け）／ Gr2 : 〜ろ（食べろ）／ する→しろ・来る→こい",
    c: "express", lv: 2, rel: ["g093"],
    note: "Ordre direct et brusque. Rare dans la vie quotidienne polie, mais courant dans les consignes, le sport, les situations d'urgence.",
    ex: [
      { jp: "早く起きろ！", fr: "Lève-toi vite !" },
      { jp: "がんばれ！", fr: "Tiens bon ! / Courage !" },
    ],
    qs: [
      { t: "fill", q: "応援するとき、「がんば＿＿＿！」と言う。", fr: "Pour encourager, on dit « がんばれ ! ».",
        o: ["れ", "る", "ろう", "って"], a: 0,
        e: "がんばる (Gr1) → がんばれ (impératif)." },
      { t: "usage", q: "Impératif de 食べる ?",
        o: ["食べろ", "食べれ", "食べよ (écrit)", "食べな"], a: 0,
        e: "Gr2 : radical + ろ (食べろ). 食べよ existe à l'écrit." },
    ],
  },

  {
    id: "g095", g: "〜とおり(に)／〜どおり", m: "exactement comme, conformément à", f: "V-dict／V-た／N＋の + とおり(に) ／ N + どおり",
    c: "express", lv: 2, rel: [],
    note: "Faire quelque chose à l'identique d'un modèle/d'une instruction. Après un nom directement attaché : 〜どおり (予定どおり).",
    ex: [
      { jp: "私が言うとおりに書いてください。", fr: "Écrivez exactement comme je le dis." },
      { jp: "計画どおりに進んだ。", fr: "Cela s'est déroulé conformément au plan." },
    ],
    qs: [
      { t: "fill", q: "説明書の＿＿＿に組み立てた。", fr: "Je l'ai monté conformément à la notice.",
        o: ["とおり", "ながら", "ばかり", "ところ"], a: 0,
        e: "N＋の + とおりに = conformément à (説明書のとおりに)." },
      { t: "usage", q: "Forme correcte après 予定 (nom) ?",
        o: ["予定どおり", "予定のとおり も可", "予定とおり", "les deux premières"], a: 0,
        e: "Après un nom collé : どおり (予定どおり) ; avec の : 予定のとおり." },
    ],
  },

  {
    id: "g096", g: "〜ように（目的）", m: "pour que, de sorte que (but)", f: "V-dict／V-ない／V-potentiel + ように",
    c: "express", lv: 1, rel: ["g054", "g032"],
    note: "But atteint sans contrôle volontaire direct (potentiel, négation, état). Souvent : 〜ように + 〜する／なる.",
    ex: [
      { jp: "よく見えるように、前に座った。", fr: "Pour bien voir, je me suis assis devant." },
      { jp: "忘れないようにメモする。", fr: "Je prends des notes pour ne pas oublier." },
    ],
    qs: [
      { t: "fill", q: "後ろの人にも聞こえる＿＿＿、大きい声で話した。", fr: "Pour que ceux du fond entendent, j'ai parlé fort.",
        o: ["ように", "ために", "ところに", "とおりに"], a: 0,
        e: "Verbe potentiel (聞こえる) → ように (but involontaire)." },
      { t: "nuance", q: "Quand utilise-t-on ように plutôt que ために pour le but ?",
        o: ["avec un potentiel/non-volontaire ou une négation (見えるように、忘れないように)", "toujours", "jamais", "uniquement avec un nom"], a: 0,
        e: "ように = but non volontaire ; ために = but volontaire." },
    ],
  },

  {
    id: "g097", g: "〜ような／〜みたいな", m: "comme, du genre de (comparaison/exemple)", f: "Nom + の + ような ／ V-plain + ような ／ 〜みたいな（familier）",
    c: "express", lv: 1, rel: [],
    note: "Sert à comparer (« comme ») ou à donner un exemple (« du genre… »). Devant un nom : ような ; devant un verbe/adjectif : adverbe ように.",
    ex: [
      { jp: "天使のような笑顔。", fr: "Un sourire d'ange (comme un ange)." },
      { jp: "りんごみたいな赤いほっぺ。", fr: "Des joues rouges comme des pommes." },
    ],
    qs: [
      { t: "fill", q: "彼は子供＿＿＿ような性格だ。", fr: "Il a un caractère d'enfant (comme un enfant).",
        o: ["の", "が", "に", "を"], a: 0,
        e: "Nom + の + ような (子供のような)." },
      { t: "nuance", q: "〜ような vs 〜みたいな : nuance ?",
        o: ["même sens (« comme ») ; みたいな est plus familier", "opposés", "みたいな est plus formel", "ような est familier"], a: 0,
        e: "ような (neutre/écrit) ; みたいな (oral)." },
    ],
  },

  {
    id: "g098", g: "〜ばよかった", m: "j'aurais dû / si seulement (regret)", f: "V-ば + よかった ／ V- なければ + よかった",
    c: "condition", lv: 2, rel: ["g026"],
    note: "Exprime le regret de ne pas avoir fait (ou d'avoir fait) quelque chose.",
    ex: [
      { jp: "もっと勉強すればよかった。", fr: "J'aurais dû étudier davantage." },
      { jp: "あんなことを言わなければよかった。", fr: "Je n'aurais pas dû dire une chose pareille." },
    ],
    qs: [
      { t: "fill", q: "傘を持って来れ＿＿＿よかった。", fr: "J'aurais dû apporter un parapluie.",
        o: ["ば", "たら", "ても", "ので"], a: 0,
        e: "V-ば + よかった = regret (来ればよかった)." },
      { t: "meaning", q: "「買わなければよかった」— sens ?",
        o: ["je n'aurais pas dû l'acheter (regret)", "il faut que je l'achète", "je vais l'acheter", "je l'achète toujours"], a: 0,
        e: "V-なければよかった = regret d'avoir fait." },
    ],
  },

  {
    id: "g099", g: "〜たらどう(ですか)", m: "et si tu… ? pourquoi ne pas… ? (suggestion)", f: "V-た + らどう（ですか）",
    c: "condition", lv: 2, rel: ["g027"],
    note: "Suggestion/conseil poli adressé à autrui. Peut paraître insistant selon le ton.",
    ex: [
      { jp: "疲れているなら、少し休んだらどう？", fr: "Si tu es fatigué, pourquoi ne pas te reposer un peu ?" },
      { jp: "先生に聞いてみたらどうですか。", fr: "Et si vous demandiez au professeur ?" },
    ],
    qs: [
      { t: "fill", q: "分からないなら、辞書で調べ＿＿＿どう？", fr: "Si tu ne sais pas, et si tu regardais dans le dictionnaire ?",
        o: ["たら", "ても", "ながら", "ので"], a: 0,
        e: "V-た + らどう = suggestion (調べたらどう)." },
      { t: "meaning", q: "「医者に行ったらどうですか」— sens ?",
        o: ["et si vous alliez chez le médecin ? (suggestion)", "vous êtes allé chez le médecin ?", "n'allez pas chez le médecin", "je vais chez le médecin"], a: 0,
        e: "〜たらどうですか = proposition/conseil." },
    ],
  },

  {
    id: "g100", g: "〜場合(は)", m: "en cas de, dans le cas où", f: "V-plain／A／N＋の + 場合(は)",
    c: "condition", lv: 2, rel: [],
    note: "Présente une situation hypothétique et ses conséquences. Fréquent dans les consignes et règlements.",
    ex: [
      { jp: "火事の場合は、エレベーターを使わないでください。", fr: "En cas d'incendie, n'utilisez pas l'ascenseur." },
      { jp: "遅れる場合は連絡してください。", fr: "Si vous deviez être en retard, prévenez-nous." },
    ],
    qs: [
      { t: "fill", q: "雨の＿＿＿は、試合は中止です。", fr: "En cas de pluie, le match est annulé.",
        o: ["場合", "ながら", "ばかり", "ところ"], a: 0,
        e: "N＋の + 場合は = en cas de (雨の場合は)." },
      { t: "meaning", q: "「分からない場合は質問してください」— sens ?",
        o: ["si vous ne comprenez pas, posez une question", "parce que vous ne comprenez pas", "bien que vous ne compreniez pas", "dès que vous comprenez"], a: 0,
        e: "〜場合は = situation hypothétique (« si… »)." },
    ],
  },

  {
    id: "g101", g: "〜ところだった", m: "il s'en est fallu de peu, j'ai failli", f: "V-dict + ところだった",
    c: "time", lv: 2, rel: ["g023"],
    note: "Exprime qu'un événement (souvent négatif) a presque eu lieu mais a été évité de justesse.",
    ex: [
      { jp: "もう少しで転ぶところだった。", fr: "J'ai failli tomber." },
      { jp: "危なく事故に遭うところだった。", fr: "J'ai bien failli avoir un accident." },
    ],
    qs: [
      { t: "fill", q: "目覚ましが鳴らなくて、遅刻する＿＿＿だった。", fr: "Le réveil n'a pas sonné, j'ai failli être en retard.",
        o: ["ところ", "ばかり", "ながら", "とおり"], a: 0,
        e: "V-dict + ところだった = avoir failli (遅刻するところだった)." },
      { t: "meaning", q: "「忘れるところだった」— sens ?",
        o: ["j'ai failli oublier (mais je m'en suis souvenu)", "j'ai oublié", "je vais oublier", "j'oublie toujours"], a: 0,
        e: "〜ところだった = on a évité l'événement de justesse." },
    ],
  },

  {
    id: "g102", g: "〜と言う／〜と言った", m: "dire que (citation)", f: "Phrase + と + 言う／思う／聞く…",
    c: "express", lv: 1, rel: ["g072"],
    note: "と marque le contenu d'une parole ou d'une pensée citée. Citation directe (「…」と) ou indirecte (plain + と).",
    ex: [
      { jp: "彼は「行きません」と言った。", fr: "Il a dit : « Je n'y vais pas »." },
      { jp: "母は早く帰ると言った。", fr: "Ma mère a dit qu'elle rentrerait tôt." },
    ],
    qs: [
      { t: "fill", q: "彼は行く＿＿言いました。", fr: "Il a dit qu'il y allait.",
        o: ["と", "を", "に", "で"], a: 0,
        e: "Contenu cité + と + 言う (行くと言いました)." },
      { t: "meaning", q: "「来ないと言っていた」— sens ?",
        o: ["il disait qu'il ne viendrait pas", "il a dit de venir", "il est venu", "viens !"], a: 0,
        e: "〜と言う = rapporter une parole." },
    ],
  },

  {
    id: "g103", g: "〜かどうか", m: "si… ou non (interrogation indirecte)", f: "V-plain／A／N + かどうか",
    c: "express", lv: 1, rel: ["g104"],
    note: "Introduit une question indirecte de type oui/non à l'intérieur d'une phrase.",
    ex: [
      { jp: "彼が来るかどうか分からない。", fr: "Je ne sais pas s'il viendra ou non." },
      { jp: "正しいかどうか確認してください。", fr: "Vérifiez si c'est correct ou non." },
    ],
    qs: [
      { t: "fill", q: "この答えが合っている＿＿＿、先生に聞こう。", fr: "Demandons au professeur si cette réponse est juste ou non.",
        o: ["かどうか", "ように", "ながら", "ばかり"], a: 0,
        e: "〜かどうか = interrogation indirecte oui/non (合っているかどうか)." },
      { t: "meaning", q: "「行けるかどうか分からない」— sens ?",
        o: ["je ne sais pas si je pourrai y aller ou non", "je sais que j'y vais", "je n'y vais jamais", "j'y vais sûrement"], a: 0,
        e: "〜かどうか = « si oui ou non »." },
    ],
  },

  {
    id: "g104", g: "疑問詞＋か（embedded）", m: "interrogation indirecte (qui/quoi/où… )", f: "疑問詞 + V-plain + か",
    c: "express", lv: 1, rel: ["g103"],
    note: "Avec un mot interrogatif, introduit une question indirecte intégrée à la phrase (何を…か, どこに…か).",
    ex: [
      { jp: "何を食べるか決めた？", fr: "As-tu décidé quoi manger ?" },
      { jp: "どこで会うか教えてください。", fr: "Dites-moi où on se retrouve." },
    ],
    qs: [
      { t: "fill", q: "彼がいつ来る＿＿＿分からない。", fr: "Je ne sais pas quand il viendra.",
        o: ["か", "を", "に", "が"], a: 0,
        e: "疑問詞 + ... + か = interrogation indirecte (いつ来るか)." },
      { t: "nuance", q: "〜かどうか vs 疑問詞＋か : différence ?",
        o: ["かどうか = question oui/non ; 疑問詞＋か = question ouverte (qui/quoi/où…)", "identiques", "かどうか = question ouverte", "疑問詞か = oui/non"], a: 0,
        e: "かどうか (oui/non) ≠ 何/どこ…か (question ouverte)." },
    ],
  },

  {
    id: "g105", g: "〜そうに／そうな", m: "d'un air…, qui a l'air… (apparence)", f: "（様態）そう + に（adverbe）／な（+ Nom）",
    c: "modality", lv: 2, rel: ["g034"],
    note: "Forme adverbiale/adnominale du そう d'apparence : 楽しそうに笑う, おいしそうなケーキ.",
    ex: [
      { jp: "子供が楽しそうに遊んでいる。", fr: "Les enfants jouent d'un air joyeux." },
      { jp: "おいしそうなケーキだ。", fr: "C'est un gâteau qui a l'air délicieux." },
    ],
    qs: [
      { t: "fill", q: "彼は眠＿＿＿な顔をしている。", fr: "Il a l'air d'avoir sommeil.",
        o: ["そう", "ろう", "よう", "らし"], a: 0,
        e: "眠い → 眠そう(な) (a l'air d'avoir sommeil)." },
      { t: "usage", q: "Pour « marcher d'un air heureux » (幸せ) :",
        o: ["幸せそうに歩く", "幸せそうな歩く", "幸せに歩くそう", "幸せ歩きそう"], a: 0,
        e: "そうに modifie un verbe (adverbial) ; そうな modifie un nom." },
    ],
  },

  {
    id: "g106", g: "〜だけで", m: "rien qu'en, à la simple… ", f: "V-dict／N + だけで",
    c: "express", lv: 2, rel: ["g066"],
    note: "« Du seul fait de » : une condition minimale suffit à produire un effet.",
    ex: [
      { jp: "考えるだけで怖くなる。", fr: "Rien que d'y penser, j'ai peur." },
      { jp: "見ているだけで楽しい。", fr: "Rien qu'à regarder, c'est amusant." },
    ],
    qs: [
      { t: "fill", q: "君がいる＿＿＿安心する。", fr: "Rien que ta présence me rassure.",
        o: ["だけで", "までで", "ながら", "ところで"], a: 0,
        e: "〜だけで = du seul fait de (いるだけで)." },
      { t: "meaning", q: "「名前を聞いただけで分かった」— sens ?",
        o: ["rien qu'en entendant le nom, j'ai compris", "je n'ai pas entendu le nom", "après avoir longuement écouté", "à cause du nom seulement non"], a: 0,
        e: "〜だけで = il a suffi de (peu) pour…" },
    ],
  },

  {
    id: "g107", g: "〜さ（名詞化）", m: "-té, -eur (nominalise un adjectif)", f: "A-い→さ ／ A-な→さ（高さ、便利さ）",
    c: "express", lv: 2, rel: ["g108"],
    note: "Transforme un adjectif en nom mesurable/objectif : 高い→高さ (la hauteur).",
    ex: [
      { jp: "山の高さを測る。", fr: "Mesurer la hauteur de la montagne." },
      { jp: "この道具の便利さに驚いた。", fr: "J'ai été surpris par la commodité de cet outil." },
    ],
    qs: [
      { t: "fill", q: "この箱の重＿＿＿はどのくらいですか。", fr: "Quel est le poids de cette boîte ?",
        o: ["さ", "み", "く", "そう"], a: 0,
        e: "重い → 重さ (le poids), nominalisation objective." },
      { t: "usage", q: "Nominalisation de 長い (long) ?",
        o: ["長さ (la longueur)", "長み", "長く", "長そう"], a: 0,
        e: "A-い → さ (長さ)." },
    ],
  },

  {
    id: "g108", g: "〜み（名詞化）", m: "-eur (qualité ressentie, plus subjective)", f: "A-stem + み（楽しみ、痛み、深み）",
    c: "express", lv: 3, rel: ["g107"],
    note: "Nominalise un adjectif en mettant l'accent sur le ressenti/l'état, sur un nombre limité d'adjectifs.",
    ex: [
      { jp: "傷の痛みが消えない。", fr: "La douleur de la blessure ne disparaît pas." },
      { jp: "旅行を楽しみにしている。", fr: "J'attends le voyage avec impatience (m'en réjouis)." },
    ],
    qs: [
      { t: "fill", q: "この絵には深＿＿＿がある。", fr: "Ce tableau a de la profondeur (ressentie).",
        o: ["み", "さ", "く", "そう"], a: 0,
        e: "深い → 深み (profondeur ressentie, subjective)." },
      { t: "nuance", q: "〜さ vs 〜み : nuance ?",
        o: ["さ = mesure objective ; み = qualité ressentie/subjective (et moins productif)", "identiques", "み = objectif", "さ = subjectif"], a: 0,
        e: "高さ (mesure) ≠ 高み (les hauteurs, sens figuré ressenti)." },
    ],
  },

  {
    id: "g109", g: "〜っぽい", m: "qui fait…, qui a tendance à", f: "N／A-stem／V-ます stem + っぽい",
    c: "express", lv: 2, rel: ["g110"],
    note: "Familier : « -esque / qui ressemble à / qui a tendance à » (子供っぽい, 忘れっぽい).",
    ex: [
      { jp: "彼は子供っぽい。", fr: "Il est puéril (fait gamin)." },
      { jp: "最近、忘れっぽくなった。", fr: "Ces temps-ci, je suis devenu tête en l'air." },
    ],
    qs: [
      { t: "fill", q: "この水は白＿＿＿。", fr: "Cette eau est blanchâtre.",
        o: ["っぽい", "がち", "ぎみ", "らしい"], a: 0,
        e: "〜っぽい = « -âtre / qui fait… » (白っぽい)." },
      { t: "meaning", q: "「怒りっぽい」— sens ?",
        o: ["qui se met facilement en colère", "qui ne se fâche jamais", "qui est en colère maintenant", "qui fait se fâcher"], a: 0,
        e: "V-stem + っぽい = tendance (怒りっぽい = coléreux)." },
    ],
  },

  {
    id: "g110", g: "〜がち", m: "avoir tendance à (souvent négatif)", f: "V-ます stem／N + がち",
    c: "express", lv: 2, rel: ["g109", "g111"],
    note: "Tendance fréquente, généralement à connotation négative (病気がち, 忘れがち).",
    ex: [
      { jp: "冬は風邪をひきがちだ。", fr: "En hiver, on a tendance à attraper froid." },
      { jp: "彼は遅れがちだ。", fr: "Il a tendance à être en retard." },
    ],
    qs: [
      { t: "fill", q: "疲れていると、ミスをし＿＿＿になる。", fr: "Quand on est fatigué, on a tendance à faire des erreurs.",
        o: ["がち", "っぽい", "ぎみ", "むき"], a: 0,
        e: "〜がち = tendance fréquente (souvent négative) : しがち." },
      { t: "meaning", q: "「曇りがちの天気」— sens ?",
        o: ["un temps plutôt nuageux (tendance)", "un temps toujours dégagé", "un temps une seule fois nuageux", "un temps ensoleillé"], a: 0,
        e: "〜がち = qui tend à être (曇りがち)." },
    ],
  },

  {
    id: "g111", g: "〜ぎみ", m: "un peu, une légère tendance à", f: "V-ます stem／N + ぎみ",
    c: "express", lv: 2, rel: ["g110"],
    note: "Indique une légère manifestation/un léger penchant (風邪ぎみ, 疲れぎみ).",
    ex: [
      { jp: "ちょっと風邪ぎみです。", fr: "Je suis un peu enrhumé." },
      { jp: "最近、太りぎみだ。", fr: "Ces temps-ci, j'ai un peu tendance à grossir." },
    ],
    qs: [
      { t: "fill", q: "睡眠不足で、疲れ＿＿＿だ。", fr: "Par manque de sommeil, je suis un peu fatigué.",
        o: ["ぎみ", "がち", "っぽい", "むけ"], a: 0,
        e: "〜ぎみ = légère tendance/symptôme (疲れぎみ)." },
      { t: "nuance", q: "〜ぎみ vs 〜がち : nuance ?",
        o: ["ぎみ = léger symptôme ponctuel ; がち = tendance habituelle fréquente", "identiques", "ぎみ = fréquent", "がち = léger"], a: 0,
        e: "ぎみ (un peu, maintenant) ≠ がち (souvent, habituel)." },
    ],
  },

  {
    id: "g112", g: "〜中（ちゅう／じゅう）", m: "pendant / partout dans / en cours de", f: "N + 中（ちゅう＝en cours／じゅう＝durant tout, partout）",
    c: "time", lv: 2, rel: [],
    note: "ちゅう = en train de / dans la limite de (仕事中, 今日中) ; じゅう = tout au long de / partout dans (一日中, 世界中).",
    ex: [
      { jp: "会議中は電話に出られません。", fr: "Pendant la réunion, je ne peux pas répondre au téléphone." },
      { jp: "一日中、雨だった。", fr: "Il a plu toute la journée." },
    ],
    qs: [
      { t: "fill", q: "今、仕事＿＿＿だから、後でかけ直す。", fr: "Là je suis en plein travail, je te rappelle plus tard.",
        o: ["中（ちゅう）", "中（じゅう）", "ごろ", "まで"], a: 0,
        e: "仕事中（ちゅう）= en train de travailler." },
      { t: "nuance", q: "「世界中」se lit et signifie :",
        o: ["せかいじゅう = partout dans le monde", "せかいちゅう = en train de monde", "se lit ちゅう = limite", "n'existe pas"], a: 0,
        e: "じゅう = « tout au long / partout dans » (世界中, 一日中)." },
    ],
  },

  {
    id: "g113", g: "〜とか", m: "comme, ou, des choses comme (énumération floue)", f: "Nom／Phrase + とか",
    c: "express", lv: 2, rel: ["g073"],
    note: "Familier : énumère des exemples de façon vague (« comme… »), ou rapporte de façon incertaine.",
    ex: [
      { jp: "週末は映画とか見に行く。", fr: "Le week-end, je vais voir un film ou ce genre de chose." },
      { jp: "明日は雨が降るとか。", fr: "Il paraît qu'il pleuvra demain (à ce qu'on dit)." },
    ],
    qs: [
      { t: "fill", q: "りんご＿＿＿バナナとか、果物を買った。", fr: "J'ai acheté des fruits, comme des pommes ou des bananes.",
        o: ["とか", "ばかり", "しか", "ながら"], a: 0,
        e: "〜とか〜とか = énumération floue (familière)." },
      { t: "meaning", q: "「忙しいとか言っていた」— sens de とか ?",
        o: ["il disait quelque chose comme « je suis occupé » (rapport vague)", "il est sûrement occupé", "il n'est pas occupé", "sois occupé"], a: 0,
        e: "〜とか peut introduire un propos rapporté de façon vague." },
    ],
  },

  {
    id: "g114", g: "〜なんて／〜なんか", m: "des choses comme… (mépris, surprise)", f: "Nom／Phrase + なんて ／ Nom + なんか",
    c: "express", lv: 2, rel: ["g113"],
    note: "Marque le dédain, la modestie ou la surprise (« comment peut-on… ! »). なんか est plus oral.",
    ex: [
      { jp: "野菜なんか食べたくない。", fr: "Les légumes (et tout ça), je n'en veux pas." },
      { jp: "彼が嘘をつくなんて信じられない。", fr: "Qu'il mente, c'est incroyable !" },
    ],
    qs: [
      { t: "fill", q: "宿題＿＿＿やりたくない。", fr: "Les devoirs (et ce genre de chose), je n'ai pas envie.",
        o: ["なんか", "ばかり", "しか", "こそ"], a: 0,
        e: "〜なんか = dédain/désintérêt (宿題なんか)." },
      { t: "meaning", q: "「あきらめるなんて！」— nuance ?",
        o: ["surprise/indignation : « abandonner, et puis quoi encore ! »", "simple constat", "ordre d'abandonner", "permission d'abandonner"], a: 0,
        e: "〜なんて exprime ici la surprise indignée." },
    ],
  },

  {
    id: "g115", g: "〜って", m: "(familier) on dit que / quant à / nommé", f: "Nom／Phrase + って",
    c: "express", lv: 2, rel: ["g102", "g072"],
    note: "Très oral : équivaut à という, と言っていた, ou は (thème) selon le contexte.",
    ex: [
      { jp: "田中さんって優しいね。", fr: "Tanaka, il est gentil, hein." },
      { jp: "明日は休みだって。", fr: "Il paraît que demain c'est congé." },
    ],
    qs: [
      { t: "fill", q: "彼、来月は来ない＿＿＿。", fr: "Il paraît qu'il ne vient pas le mois prochain.",
        o: ["って", "から", "ので", "のに"], a: 0,
        e: "〜って (familier) = « il paraît que / il a dit que » (来ないって)." },
      { t: "meaning", q: "「日本語の勉強って楽しい」— rôle de って ?",
        o: ["marque le thème (= は) à l'oral", "exprime une cause", "pose une interdiction", "marque l'objet"], a: 0,
        e: "〜って peut remplacer は (thème) à l'oral familier." },
    ],
  },

  {
    id: "g116", g: "〜じゃない(か)", m: "n'est-ce pas ? / mais c'est… ! (constat)", f: "V-plain／A／N + じゃない（か）",
    c: "express", lv: 2, rel: ["g070"],
    note: "Cherche l'accord ou exprime une découverte/un reproche (« mais c'est… ! »). À distinguer de la copule négative じゃない.",
    ex: [
      { jp: "いい天気じゃない。散歩しよう。", fr: "Il fait beau, non ? Allons nous promener." },
      { jp: "ほら、言ったじゃないか。", fr: "Tu vois, je te l'avais bien dit !" },
    ],
    qs: [
      { t: "fill", q: "これ、君のかばん＿＿＿。", fr: "Ça, c'est bien ton sac, non ?",
        o: ["じゃない", "ではない", "ないか", "ますか"], a: 0,
        e: "〜じゃない (intonation montante) = recherche d'accord (« non ? »)." },
      { t: "nuance", q: "Comment distinguer « 学生じゃない » (négation) de « 学生じゃない！» (constat) ?",
        o: ["par l'intonation/le contexte : montante = constat (« c'est un étudiant, non ? »)", "ils sont toujours identiques", "le constat prend です", "la négation prend か"], a: 0,
        e: "L'intonation et le contexte distinguent la copule négative du tag de confirmation." },
    ],
  },

  {
    id: "g117", g: "〜まで(も)", m: "même, jusqu'à (extension surprenante)", f: "Nom + まで",
    c: "express", lv: 2, rel: ["g082"],
    note: "Souligne un élément extrême atteint, contre toute attente (« même… »).",
    ex: [
      { jp: "子供までその秘密を知っていた。", fr: "Même les enfants connaissaient ce secret." },
      { jp: "親友にまで裏切られた。", fr: "J'ai même été trahi par mon meilleur ami." },
    ],
    qs: [
      { t: "fill", q: "先生＿＿＿その問題が解けなかった。", fr: "Même le professeur n'a pas pu résoudre ce problème.",
        o: ["まで", "しか", "だけ", "ごろ"], a: 0,
        e: "〜まで = « même » (extension extrême : 先生まで)." },
      { t: "meaning", q: "「そんなことまで言われた」— sens de まで ?",
        o: ["on m'a même dit des choses pareilles (extrême)", "on m'a dit seulement ça", "on ne m'a rien dit", "jusqu'à ce qu'on me dise"], a: 0,
        e: "〜まで souligne un degré inattendu." },
    ],
  },

  {
    id: "g118", g: "〜くらい／〜ぐらい", m: "au point de, à peu près, autant que", f: "V-plain／A／N + くらい／ぐらい",
    c: "express", lv: 2, rel: ["g065"],
    note: "Exprime un degré (« au point de »), une approximation (« environ ») ou un minimum (« au moins ça »).",
    ex: [
      { jp: "歩けないくらい疲れた。", fr: "J'étais fatigué au point de ne plus pouvoir marcher." },
      { jp: "自分の部屋ぐらい掃除しなさい。", fr: "Range au moins ta propre chambre." },
    ],
    qs: [
      { t: "fill", q: "泣きたい＿＿＿悔しかった。", fr: "J'étais déçu au point d'avoir envie de pleurer.",
        o: ["くらい", "ところ", "ばかり", "まで"], a: 0,
        e: "〜くらい = degré (« au point de ») : 泣きたいくらい." },
      { t: "meaning", q: "「挨拶ぐらいしなさい」— nuance ?",
        o: ["fais au moins les salutations (le minimum)", "ne salue pas", "salue beaucoup", "tu as salué"], a: 0,
        e: "〜ぐらい peut marquer un minimum attendu." },
    ],
  },

  {
    id: "g119", g: "〜ように言う", m: "dire/demander de (ordre indirect)", f: "V-dict／V-ない + ように + 言う／頼む／伝える",
    c: "express", lv: 2, rel: ["g096"],
    note: "Rapporte un ordre, une demande ou un conseil de façon indirecte.",
    ex: [
      { jp: "先生は静かにするように言った。", fr: "Le professeur a dit de se taire." },
      { jp: "母に早く帰るように頼まれた。", fr: "Ma mère m'a demandé de rentrer tôt." },
    ],
    qs: [
      { t: "fill", q: "医者は無理をしない＿＿＿言った。", fr: "Le médecin a dit de ne pas se surmener.",
        o: ["ように", "ことに", "ために", "そうに"], a: 0,
        e: "〜ように言う = ordre/demande indirecte (しないように言った)." },
      { t: "meaning", q: "「待つように伝えてください」— sens ?",
        o: ["dites-lui (de ma part) d'attendre", "attendez vous-même", "demandez si on attend", "il a attendu"], a: 0,
        e: "〜ように伝える = transmettre une consigne." },
    ],
  },

  {
    id: "g120", g: "〜ないうちに", m: "avant que (ne survienne)", f: "V-ない + うちに ／ A-くない + うちに",
    c: "time", lv: 2, rel: ["g018"],
    note: "Faire quelque chose avant qu'un changement (souvent défavorable) n'arrive.",
    ex: [
      { jp: "暗くならないうちに帰ろう。", fr: "Rentrons avant qu'il ne fasse nuit." },
      { jp: "忘れないうちにメモしておく。", fr: "Je le note avant de l'oublier." },
    ],
    qs: [
      { t: "fill", q: "雨が降ら＿＿＿うちに、洗濯物を取り込もう。", fr: "Rentrons le linge avant qu'il ne pleuve.",
        o: ["ない", "た", "る", "て"], a: 0,
        e: "〜ないうちに = avant que (ne) : 降らないうちに." },
      { t: "nuance", q: "〜ないうちに vs 〜まえに : nuance ?",
        o: ["ないうちに = avant qu'un changement non voulu survienne (profiter du moment) ; まえに = simple antériorité", "identiques", "まえに implique un danger", "ないうちに = après"], a: 0,
        e: "ないうちに insiste sur « tant que ce n'est pas encore arrivé »." },
    ],
  },

  {
    id: "g121", g: "〜もう〜ない", m: "ne… plus", f: "もう + V-ない／négatif",
    c: "time", lv: 1, rel: ["g122"],
    note: "Indique la cessation d'un état/d'une action : « désormais, ne… plus ».",
    ex: [
      { jp: "もう子供じゃない。", fr: "Je ne suis plus un enfant." },
      { jp: "もうお酒は飲みません。", fr: "Je ne bois plus d'alcool." },
    ],
    qs: [
      { t: "fill", q: "おなかがいっぱいで、＿＿＿食べられない。", fr: "Je suis rassasié, je ne peux plus manger.",
        o: ["もう", "まだ", "ずっと", "また"], a: 0,
        e: "もう + négation = « ne… plus » (もう食べられない)." },
      { t: "nuance", q: "「もう寝ない」vs「まだ寝ない」— différence ?",
        o: ["もう寝ない = je ne dors plus ; まだ寝ない = je ne dors pas encore", "identiques", "もう = pas encore", "まだ = ne plus"], a: 0,
        e: "もう〜ない (ne plus) ≠ まだ〜ない (pas encore)." },
    ],
  },

  {
    id: "g122", g: "〜まだ〜ている", m: "encore en train de / toujours", f: "まだ + V-ている",
    c: "time", lv: 1, rel: ["g121"],
    note: "Indique qu'un état/une action se poursuit encore.",
    ex: [
      { jp: "まだ雨が降っている。", fr: "Il pleut encore." },
      { jp: "彼はまだ働いている。", fr: "Il travaille toujours." },
    ],
    qs: [
      { t: "fill", q: "弟は＿＿＿ゲームをしている。", fr: "Mon petit frère est encore en train de jouer.",
        o: ["まだ", "もう", "また", "ずっと"], a: 0,
        e: "まだ + ている = action qui continue (まだしている)." },
      { t: "meaning", q: "「まだ起きている」— sens ?",
        o: ["je suis encore debout/réveillé", "je ne suis plus réveillé", "je me suis levé", "je vais me lever"], a: 0,
        e: "まだ〜ている = état qui dure encore." },
    ],
  },

  {
    id: "g123", g: "〜たところ", m: "venir juste de (à l'instant)", f: "V-た + ところ（だ）",
    c: "time", lv: 2, rel: ["g101", "g124"],
    note: "L'action vient de s'achever, objectivement à l'instant présent.",
    ex: [
      { jp: "今、駅に着いたところだ。", fr: "Je viens tout juste d'arriver à la gare." },
      { jp: "ちょうど食べ終わったところです。", fr: "Je viens justement de finir de manger." },
    ],
    qs: [
      { t: "fill", q: "今、家に帰った＿＿＿だ。", fr: "Je viens tout juste de rentrer à la maison.",
        o: ["ところ", "ばかり", "とおり", "うち"], a: 0,
        e: "V-た + ところ = juste à l'instant (帰ったところ)." },
      { t: "nuance", q: "〜たところ vs 〜たばかり : nuance ?",
        o: ["たところ = objectivement à l'instant même ; たばかり = subjectivement récent (peut dater de plusieurs jours)", "identiques", "たばかり = à l'instant", "たところ = il y a longtemps"], a: 0,
        e: "ところ = instant précis ; ばかり = sentiment de « récemment »." },
    ],
  },

  {
    id: "g124", g: "〜ているところ", m: "être en plein milieu de", f: "V-ている + ところ（だ）",
    c: "time", lv: 2, rel: ["g123"],
    note: "L'action est en cours, au moment même.",
    ex: [
      { jp: "今、宿題をしているところだ。", fr: "Je suis justement en train de faire mes devoirs." },
      { jp: "原因を調べているところです。", fr: "Nous sommes en train d'en chercher la cause." },
    ],
    qs: [
      { t: "fill", q: "電話は今、話している＿＿＿です。", fr: "Là je suis en pleine conversation au téléphone.",
        o: ["ところ", "ばかり", "とおり", "まま"], a: 0,
        e: "V-ている + ところ = en plein milieu de l'action (話しているところ)." },
      { t: "meaning", q: "「準備しているところだ」— sens ?",
        o: ["je suis en train de préparer (en plein milieu)", "je viens de préparer", "je vais préparer", "j'ai failli préparer"], a: 0,
        e: "〜ているところ = action en cours." },
    ],
  },

  {
    id: "g125", g: "〜たまま", m: "en restant (dans l'état), tel quel", f: "V-た + まま",
    c: "express", lv: 2, rel: ["g064"],
    note: "Un état issu d'une action se maintient inchangé pendant qu'on fait autre chose.",
    ex: [
      { jp: "電気をつけたまま出かけた。", fr: "Je suis sorti en laissant la lumière allumée." },
      { jp: "靴を履いたまま上がってしまった。", fr: "Je suis monté en gardant mes chaussures." },
    ],
    qs: [
      { t: "fill", q: "窓を開け＿＿＿寝てしまった。", fr: "Je me suis endormi en laissant la fenêtre ouverte.",
        o: ["たまま", "ながら", "たところ", "ばかり"], a: 0,
        e: "V-た + まま = état maintenu (開けたまま)." },
      { t: "nuance", q: "〜たまま vs 〜ながら : nuance ?",
        o: ["たまま = un état figé persiste ; ながら = deux actions simultanées actives", "identiques", "たまま = simultanéité active", "ながら = état figé"], a: 0,
        e: "まま = état laissé tel quel ; ながら = faire deux choses à la fois." },
    ],
  },

  {
    id: "g126", g: "〜きる／〜きれない", m: "faire entièrement / ne pas pouvoir finir", f: "V-ます stem + きる／きれない",
    c: "express", lv: 2, rel: [],
    note: "Indique l'achèvement complet (使いきる) ou, à la négation, l'impossibilité de tout faire (食べきれない).",
    ex: [
      { jp: "マラソンを最後まで走りきった。", fr: "J'ai couru le marathon jusqu'au bout." },
      { jp: "量が多くて食べきれない。", fr: "Il y en a trop, je n'arrive pas à tout finir." },
    ],
    qs: [
      { t: "fill", q: "この本を一日で読み＿＿＿。", fr: "J'ai lu ce livre en entier en une journée.",
        o: ["きった", "だした", "つづけた", "やすい"], a: 0,
        e: "〜きる = faire complètement (読みきった)." },
      { t: "meaning", q: "「数えきれない」— sens ?",
        o: ["impossible à compter (trop nombreux)", "facile à compter", "déjà compté", "compter complètement"], a: 0,
        e: "〜きれない = ne pas pouvoir achever (数えきれない)." },
    ],
  },

  {
    id: "g127", g: "〜なおす", m: "refaire, recommencer", f: "V-ます stem + なおす",
    c: "express", lv: 2, rel: [],
    note: "Refaire une action depuis le début, souvent pour corriger.",
    ex: [
      { jp: "間違えたので、書きなおした。", fr: "Comme je m'étais trompé, j'ai réécrit." },
      { jp: "計画を立てなおす必要がある。", fr: "Il faut revoir/refaire le plan." },
    ],
    qs: [
      { t: "fill", q: "答えが違ったので、考え＿＿＿。", fr: "Comme la réponse était fausse, j'ai reconsidéré.",
        o: ["なおした", "だした", "つづけた", "おわった"], a: 0,
        e: "〜なおす = refaire (考えなおした)." },
      { t: "meaning", q: "「やり直す」— sens ?",
        o: ["recommencer / refaire", "finir", "commencer pour la première fois", "abandonner"], a: 0,
        e: "〜なおす = reprendre depuis le début." },
    ],
  },

  {
    id: "g128", g: "〜あう", m: "faire mutuellement (l'un l'autre)", f: "V-ます stem + あう",
    c: "express", lv: 2, rel: [],
    note: "Action réciproque entre plusieurs personnes (助け合う, 話し合う).",
    ex: [
      { jp: "困ったときは助け合う。", fr: "Quand on a des ennuis, on s'entraide." },
      { jp: "問題について話し合った。", fr: "Nous avons discuté ensemble du problème." },
    ],
    qs: [
      { t: "fill", q: "お互いを理解し＿＿＿ことが大切だ。", fr: "Il est important de se comprendre mutuellement.",
        o: ["あう", "なおす", "きる", "だす"], a: 0,
        e: "〜あう = action réciproque (理解しあう)." },
      { t: "meaning", q: "「愛し合う」— sens ?",
        o: ["s'aimer (mutuellement)", "aimer une fois", "cesser d'aimer", "aimer complètement"], a: 0,
        e: "〜あう = « l'un l'autre »." },
    ],
  },

  {
    id: "g129", g: "〜ぶり", m: "pour la première fois depuis, au bout de", f: "期間 + ぶり（に）／久しぶり",
    c: "time", lv: 2, rel: [],
    note: "Indique le temps écoulé depuis la dernière occurrence d'un événement.",
    ex: [
      { jp: "三年ぶりに故郷に帰った。", fr: "Je suis rentré chez moi après trois ans d'absence." },
      { jp: "久しぶりに友達に会った。", fr: "J'ai revu un ami après longtemps." },
    ],
    qs: [
      { t: "fill", q: "十年＿＿＿に彼に会った。", fr: "Je l'ai revu après dix ans.",
        o: ["ぶり", "おき", "ごと", "ながら"], a: 0,
        e: "期間 + ぶり = au bout de (十年ぶり)." },
      { t: "meaning", q: "「一週間ぶりの晴れ」— sens ?",
        o: ["le premier beau temps depuis une semaine", "il fait beau chaque semaine", "il pleut depuis une semaine", "dans une semaine il fera beau"], a: 0,
        e: "〜ぶり = première fois depuis (un certain temps)." },
    ],
  },

  {
    id: "g130", g: "疑問詞＋ても", m: "peu importe / quel que soit", f: "疑問詞 + V-て + も ／ A-くても",
    c: "contrast", lv: 2, rel: ["g014"],
    note: "Avec un mot interrogatif, exprime « peu importe… » (何を食べても, 誰が来ても).",
    ex: [
      { jp: "何を食べても太らない。", fr: "Quoi que je mange, je ne grossis pas." },
      { jp: "いくら呼んでも返事がない。", fr: "J'ai beau appeler, pas de réponse." },
    ],
    qs: [
      { t: "fill", q: "＿＿＿練習しても、上手にならない。", fr: "J'ai beau m'entraîner, je ne progresse pas.",
        o: ["いくら", "どれ", "なに", "いつ"], a: 0,
        e: "いくら〜ても = « j'ai beau… » (いくら練習しても)." },
      { t: "meaning", q: "「誰が来ても断る」— sens ?",
        o: ["peu importe qui vient, je refuse", "personne ne vient", "quelqu'un vient", "quand il vient j'accepte"], a: 0,
        e: "疑問詞 + ても = « quel que soit / peu importe »." },
    ],
  },

  {
    id: "g131", g: "〜たって／〜だって（仮定）", m: "même si (familier)", f: "V-た + って ／ A-く + たって ／ N・A-な + だって",
    c: "contrast", lv: 2, rel: ["g014"],
    note: "Équivalent familier de ても / でも pour la concession (« même si »).",
    ex: [
      { jp: "急いだって、もう間に合わない。", fr: "Même en me dépêchant, je n'arriverai plus à temps." },
      { jp: "高くたって買う。", fr: "Même si c'est cher, je l'achète." },
    ],
    qs: [
      { t: "fill", q: "謝っ＿＿＿、許してくれないだろう。", fr: "Même si je m'excuse, il ne me pardonnera sans doute pas.",
        o: ["たって", "ても いい", "ながら", "ところ"], a: 0,
        e: "〜たって (familier) = même si (謝ったって)." },
      { t: "nuance", q: "〜たって équivaut à :",
        o: ["〜ても (même si), registre familier", "〜から (parce que)", "〜ので (car)", "〜ために (pour)"], a: 0,
        e: "たって = variante orale de ても." },
    ],
  },

  {
    id: "g132", g: "〜てばかりいる", m: "ne faire que, passer son temps à", f: "V-て + ばかりいる",
    c: "express", lv: 2, rel: [],
    note: "Critique une action répétée à l'excès, à l'exclusion de tout le reste.",
    ex: [
      { jp: "弟はゲームをしてばかりいる。", fr: "Mon petit frère ne fait que jouer aux jeux vidéo." },
      { jp: "泣いてばかりいないで、頑張ろう。", fr: "Ne reste pas à pleurer, fais des efforts." },
    ],
    qs: [
      { t: "fill", q: "彼は文句を言っ＿＿＿いる。", fr: "Il ne fait que se plaindre.",
        o: ["てばかり", "たばかり", "ながら", "てから"], a: 0,
        e: "〜てばかりいる = ne faire que (言ってばかりいる)." },
      { t: "nuance", q: "〜てばかりいる vs 〜たばかり : différence ?",
        o: ["てばかりいる = ne faire que (excès) ; たばかり = venir juste de faire", "identiques", "てばかりいる = venir de faire", "たばかり = excès"], a: 0,
        e: "Ne pas confondre l'excès (てばかりいる) et le récent (たばかり)." },
    ],
  },

];

if (typeof window !== "undefined") { window.N4_GRAMMAR = N4_GRAMMAR; window.CATEGORIES = CATEGORIES; window.TIERS = TIERS; }
