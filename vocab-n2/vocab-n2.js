/* =========================================================================
   N2 語彙 道場 — Vocabulary Dataset (authored, JMdict/jamsinclair-based)
   Frequency-ordered, N2-only. Schema:
     w word · r reading · m meaning · c category · lv tier
     ex [{jp,en}] · qs [{t:"fitb"|"meaning", s, en?, o[4], a, e}]
   ========================================================================= */

var VOCAB_CATEGORIES = {
  verb:  { label: "Verbs",          icon: "動", color: "#6366f1" },
  noun:  { label: "Nouns",          icon: "名", color: "#06b6d4" },
  naadj: { label: "Na-adjectives",  icon: "な", color: "#f59e0b" },
  iadj:  { label: "I-adjectives",   icon: "い", color: "#10b981" },
  adv:   { label: "Adverbs",        icon: "副", color: "#ec4899" },
};

var VOCAB_TIERS = { 1: "Core", 2: "Common", 3: "Advanced" };

var N2_VOCAB = [

  {
    id: "n2-0001", w: "発売", r: "はつばい", m: "release; going on sale", c: "noun", lv: 1,
    ex: [{ jp: "その小説は発売と同時にベストセラーになった。", en: "The novel became a bestseller the moment it went on sale." }],
    qs: [
      { t: "fitb", s: "新しいスマートフォンは来月＿＿＿＿される予定だ。", en: "The new smartphone is scheduled to be released next month.", o: ["発売", "完成", "中止", "延期"], a: 0, e: "発売される = to be put on sale / released. 完成 (completion), 中止 (cancellation) and 延期 (postponement) don't fit a product 'scheduled for next month'." },
      { t: "meaning", s: "「発売」の意味は？", o: ["release; putting on sale", "completion; finishing", "cancellation; suspension", "postponement; deferral"], a: 0, e: "発売 = a product being released or put on sale (商品が発売される)." }
    ]
  },
  {
    id: "n2-0002", w: "登場", r: "とうじょう", m: "appearance; entry (on stage/scene)", c: "noun", lv: 1,
    ex: [{ jp: "この映画には有名な俳優が登場する。", en: "Famous actors appear in this film." }],
    qs: [
      { t: "fitb", s: "物語の後半で、重要な人物が＿＿＿＿する。", en: "In the latter half of the story, an important character appears.", o: ["登場", "退場", "活躍", "登録"], a: 0, e: "登場する = to appear / come on the scene. 退場 is the opposite (to exit), 登録 is registration." },
      { t: "meaning", s: "「登場」の意味は？", o: ["appearance; coming on the scene", "exit; leaving", "active participation", "registration; enrolment"], a: 0, e: "登場 = a person/thing appearing or entering a stage, story, or scene." }
    ]
  },
  {
    id: "n2-0003", w: "撮影", r: "さつえい", m: "filming; photographing", c: "noun", lv: 1,
    ex: [{ jp: "映画の撮影は三か月続いた。", en: "Filming of the movie lasted three months." }],
    qs: [
      { t: "fitb", s: "美術館の中では、写真の＿＿＿＿は禁止されている。", en: "Inside the museum, taking photographs is prohibited.", o: ["撮影", "録音", "印刷", "展示"], a: 0, e: "撮影 = filming / photographing (写真の撮影 = taking photos). 録音 is audio recording, 展示 is exhibiting." },
      { t: "meaning", s: "「撮影」の意味は？", o: ["filming; photographing", "audio recording", "printing", "exhibiting; display"], a: 0, e: "撮影 = capturing images with a camera, whether photos or video." }
    ]
  },
  {
    id: "n2-0004", w: "公式", r: "こうしき", m: "official; formal; (math) formula", c: "naadj", lv: 1,
    ex: [{ jp: "詳しくは公式サイトをご覧ください。", en: "For details, please see the official site." }],
    qs: [
      { t: "fitb", s: "政府は事故の原因について＿＿＿＿な見解を発表した。", en: "The government announced an official view on the cause of the accident.", o: ["公式", "非公式", "個人的", "一方的"], a: 0, e: "公式な = official / formal. 非公式 is the opposite (unofficial); 個人的 is personal, 一方的 is one-sided." },
      { t: "meaning", s: "「公式」の意味は？", o: ["official; formal", "unofficial; informal", "personal; private", "one-sided; unilateral"], a: 0, e: "公式 = officially sanctioned (also means a mathematical formula)." }
    ]
  },
  {
    id: "n2-0005", w: "終了", r: "しゅうりょう", m: "end; close; termination", c: "noun", lv: 1,
    ex: [{ jp: "試合は引き分けで終了した。", en: "The match ended in a draw." }],
    qs: [
      { t: "fitb", s: "受付は午後五時に＿＿＿＿しますので、ご注意ください。", en: "Please note that reception ends at 5 p.m.", o: ["終了", "開始", "延長", "中断"], a: 0, e: "終了する = to end / finish. 開始 is the opposite (to begin); 延長 is extension, 中断 is interruption." },
      { t: "meaning", s: "「終了」の意味は？", o: ["end; close; termination", "start; commencement", "extension; prolongation", "interruption; pause"], a: 0, e: "終了 = the ending or conclusion of something." }
    ]
  },
  {
    id: "n2-0006", w: "追加", r: "ついか", m: "addition; supplement", c: "noun", lv: 1,
    ex: [{ jp: "資料に新しいデータを追加した。", en: "I added new data to the document." }],
    qs: [
      { t: "fitb", s: "注文した後で、デザートを＿＿＿＿で頼んだ。", en: "After ordering, I asked for a dessert as an extra.", o: ["追加", "削除", "交換", "返品"], a: 0, e: "追加 = addition / extra (追加で頼む = to order extra). 削除 is deletion, 交換 is exchange, 返品 is returning goods." },
      { t: "meaning", s: "「追加」の意味は？", o: ["addition; supplement", "deletion; removal", "exchange; replacement", "returning goods"], a: 0, e: "追加 = adding something extra to what is already there." }
    ]
  },
  {
    id: "n2-0007", w: "限り", r: "かぎり", m: "limit; as far as; as long as", c: "noun", lv: 1,
    ex: [{ jp: "できる限りのことをするつもりだ。", en: "I intend to do everything I possibly can." }],
    qs: [
      { t: "fitb", s: "私の知っている＿＿＿＿、彼はそんなことをする人ではない。", en: "As far as I know, he is not the kind of person to do such a thing.", o: ["限り", "通り", "以上", "反面"], a: 0, e: "〜限り = as far as / as long as (私の知る限り = as far as I know). 通り = as / in the way that, 以上 = since / now that, 反面 = on the other hand." },
      { t: "meaning", s: "「限り」の意味は？", o: ["limit; as far as; as long as", "way; manner", "more than; since", "the other side; reverse"], a: 0, e: "限り marks a limit or boundary — 'as far as / as long as' a condition holds." }
    ]
  },
  {
    id: "n2-0008", w: "展開", r: "てんかい", m: "development; unfolding; expansion", c: "noun", lv: 1,
    ex: [{ jp: "試合は意外な展開を見せた。", en: "The match took an unexpected turn." }],
    qs: [
      { t: "fitb", s: "話は誰も予想しなかった方向に＿＿＿＿した。", en: "The story developed in a direction no one had expected.", o: ["展開", "展示", "拡大", "開始"], a: 0, e: "展開する = to develop / unfold (of a situation or story). 展示 is exhibiting, 拡大 is enlargement, 開始 is starting." },
      { t: "meaning", s: "「展開」の意味は？", o: ["development; unfolding", "exhibition; display", "enlargement; expansion in size", "start; beginning"], a: 0, e: "展開 = a situation or story developing and unfolding over time." }
    ]
  },
  {
    id: "n2-0009", w: "対策", r: "たいさく", m: "countermeasure; counter-plan", c: "noun", lv: 1,
    ex: [{ jp: "試験対策として過去問を解いた。", en: "I solved past exam questions as exam preparation." }],
    qs: [
      { t: "fitb", s: "政府は地球温暖化の＿＿＿＿を急いでいる。", en: "The government is hurrying to take countermeasures against global warming.", o: ["対策", "対象", "対立", "解説"], a: 0, e: "〜対策 = a countermeasure against a problem (温暖化対策). 対象 = target / object, 対立 = confrontation, 解説 = explanation." },
      { t: "meaning", s: "「対策」の意味は？", o: ["countermeasure; counter-plan", "target; object", "confrontation; opposition", "commentary; explanation"], a: 0, e: "対策 = a measure taken to deal with or prevent a problem." }
    ]
  },
  {
    id: "n2-0010", w: "以降", r: "いこう", m: "from ... onward; hereafter", c: "noun", lv: 1,
    ex: [{ jp: "三時以降なら時間があります。", en: "I'm free after three o'clock." }],
    qs: [
      { t: "fitb", s: "来週の月曜日＿＿＿＿、営業時間が変わります。", en: "From next Monday onward, our business hours will change.", o: ["以降", "以前", "以内", "以外"], a: 0, e: "〜以降 = from ~ onward / after. 以前 is the opposite (before), 以内 = within (a limit), 以外 = except / other than." },
      { t: "meaning", s: "「以降」の意味は？", o: ["from ... onward; hereafter", "before; previously", "within (a limit)", "except; other than"], a: 0, e: "以降 marks everything from a point in time onward (e.g. 5時以降 = from 5 o'clock on)." }
    ]
  },
  {
    id: "n2-0011", w: "一通り", r: "ひととおり", m: "(briefly) once through; in general; the whole", c: "naadj", lv: 1,
    ex: [{ jp: "説明書を一通り読んでから、組み立て始めた。", en: "After reading through the manual once, I started assembling it." }],
    qs: [
      { t: "fitb", s: "資料には＿＿＿＿目を通しておいてください。", en: "Please look through the materials once beforehand.", o: ["一通り", "すっかり", "めったに", "わざわざ"], a: 0, e: "一通り目を通す = to give something a once-over. すっかり = completely, めったに = rarely (＋neg.), わざわざ = taking the trouble to." },
      { t: "meaning", s: "「一通り」の意味は？", o: ["once through; in general; briefly", "completely; entirely", "rarely; seldom", "on purpose; taking the trouble"], a: 0, e: "一通り = going over the whole of something once, in a general way." }
    ]
  },
  {
    id: "n2-0012", w: "割と", r: "わりと", m: "relatively; comparatively; fairly", c: "adv", lv: 1,
    ex: [{ jp: "この店は週末でも割と空いている。", en: "This shop is relatively empty even on weekends." }],
    qs: [
      { t: "fitb", s: "難しそうに見えたが、試験は＿＿＿＿簡単だった。", en: "It looked difficult, but the exam was relatively easy.", o: ["割と", "決して", "まるで", "少しも"], a: 0, e: "割と = relatively / more than expected. 決して, まるで and 少しも all require a negative ending, so they can't fit 簡単だった." },
      { t: "meaning", s: "「割と」の意味は？", o: ["relatively; comparatively; fairly", "never (with a negative)", "just like; as if", "(not) in the least"], a: 0, e: "割と = to a fair degree, more than you would expect." }
    ]
  },
  {
    id: "n2-0013", w: "勝手に", r: "かってに", m: "without permission; arbitrarily; as one pleases", c: "adv", lv: 1,
    ex: [{ jp: "彼は勝手に予定を決めて、みんなを困らせた。", en: "He decided the schedule on his own and troubled everyone." }],
    qs: [
      { t: "fitb", s: "人の物を＿＿＿＿使ってはいけない。", en: "You mustn't use other people's things without permission.", o: ["勝手に", "確かに", "互いに", "徐々に"], a: 0, e: "勝手に = without permission / as one pleases. 確かに = certainly, 互いに = mutually, 徐々に = gradually." },
      { t: "meaning", s: "「勝手に」の意味は？", o: ["without permission; as one pleases", "certainly; surely", "mutually; each other", "gradually; little by little"], a: 0, e: "勝手に = acting on one's own, without asking or considering others." }
    ]
  },
  {
    id: "n2-0014", w: "指定", r: "してい", m: "designation; specification; assignment", c: "noun", lv: 1,
    ex: [{ jp: "待ち合わせの場所を指定してください。", en: "Please specify a place to meet." }],
    qs: [
      { t: "fitb", s: "新幹線のチケットには座席が＿＿＿＿されている。", en: "The seat is assigned on the bullet-train ticket.", o: ["指定", "指示", "指摘", "指導"], a: 0, e: "座席を指定する = to assign/reserve a specific seat (指定席 = reserved seat). 指示 = instruction, 指摘 = pointing out, 指導 = guidance." },
      { t: "meaning", s: "「指定」の意味は？", o: ["designation; specifying a particular one", "instruction; directions", "pointing out (a fact)", "guidance; coaching"], a: 0, e: "指定 = singling out a specific thing, place, or time as the designated one." }
    ]
  },
  {
    id: "n2-0015", w: "別々", r: "べつべつ", m: "separately; individually", c: "naadj", lv: 1,
    ex: [{ jp: "兄弟は別々の学校に通っている。", en: "The brothers go to separate schools." }],
    qs: [
      { t: "fitb", s: "会計は一緒ではなく、＿＿＿＿でお願いします。", en: "We'd like to pay separately, not together.", o: ["別々", "一斉", "順番", "同時"], a: 0, e: "別々 = separately / individually (the opposite of 一緒). 一斉 = all at once, 順番 = in turns, 同時 = at the same time." },
      { t: "meaning", s: "「別々」の意味は？", o: ["separately; individually", "all at once; simultaneously", "in order; by turns", "at the same time"], a: 0, e: "別々 = each thing apart from the others, not together." }
    ]
  },
  {
    id: "n2-0016", w: "特定", r: "とくてい", m: "specific; particular; identifying", c: "naadj", lv: 1,
    ex: [{ jp: "事故の原因はまだ特定されていない。", en: "The cause of the accident has not yet been identified." }],
    qs: [
      { t: "fitb", s: "この薬は＿＿＿＿の病気にしか効かない。", en: "This medicine only works on specific illnesses.", o: ["特定", "一般", "共通", "多数"], a: 0, e: "特定の = specific / particular (the opposite of 一般 'general'). 共通 = shared, 多数 = a large number." },
      { t: "meaning", s: "「特定」の意味は？", o: ["specific; particular", "general; ordinary", "common; shared", "large number; majority"], a: 0, e: "特定 = pinpointing one particular thing rather than things in general." }
    ]
  },
  {
    id: "n2-0017", w: "編集", r: "へんしゅう", m: "editing; compilation", c: "noun", lv: 1,
    ex: [{ jp: "彼女は出版社で編集の仕事をしている。", en: "She works in editing at a publishing company." }],
    qs: [
      { t: "fitb", s: "この動画は不要な部分を切って＿＿＿＿した。", en: "This video was edited by cutting out the unnecessary parts.", o: ["編集", "録画", "再生", "保存"], a: 0, e: "編集 = editing (cutting and arranging footage or text). 録画 = recording, 再生 = playback, 保存 = saving." },
      { t: "meaning", s: "「編集」の意味は？", o: ["editing; compiling", "recording (video)", "playback; replay", "saving; storing"], a: 0, e: "編集 = arranging and trimming material (text, audio, video) into a finished form." }
    ]
  },
  {
    id: "n2-0018", w: "応援", r: "おうえん", m: "support; cheering; backing", c: "noun", lv: 1,
    ex: [{ jp: "友達の試合を応援しに行った。", en: "I went to cheer on my friend's match." }],
    qs: [
      { t: "fitb", s: "スタンドのファンが選手を大声で＿＿＿＿した。", en: "The fans in the stands cheered the players loudly.", o: ["応援", "応募", "応対", "反応"], a: 0, e: "応援する = to cheer on / support. 応募 = applying (for a job/contest), 応対 = dealing with a customer, 反応 = reaction." },
      { t: "meaning", s: "「応援」の意味は？", o: ["support; cheering on", "applying (for a job/contest)", "dealing with a customer", "reaction; response"], a: 0, e: "応援 = backing someone with encouragement, cheers, or help." }
    ]
  },
  {
    id: "n2-0019", w: "活躍", r: "かつやく", m: "playing an active (and successful) role", c: "noun", lv: 1,
    ex: [{ jp: "彼は若手として各分野で活躍している。", en: "As a young talent, he is active across various fields." }],
    qs: [
      { t: "fitb", s: "新人選手がチームで大いに＿＿＿＿している。", en: "The rookie player is playing a very active role on the team.", o: ["活躍", "出場", "引退", "練習"], a: 0, e: "活躍する = to play an active, prominent, successful role. 出場 = appearing/competing, 引退 = retiring, 練習 = practising." },
      { t: "meaning", s: "「活躍」の意味は？", o: ["playing an active, prominent role", "appearing (in a game/event)", "retirement (from a career)", "practice; training"], a: 0, e: "活躍 = being energetically active and standing out with success." }
    ]
  },
  {
    id: "n2-0020", w: "複数", r: "ふくすう", m: "plural; multiple; more than one", c: "noun", lv: 1,
    ex: [{ jp: "複数の専門家に意見を聞いた。", en: "I asked several experts for their opinions." }],
    qs: [
      { t: "fitb", s: "この問題には＿＿＿＿の答えが考えられる。", en: "Multiple answers can be considered for this problem.", o: ["複数", "単数", "多少", "大量"], a: 0, e: "複数 = plural / more than one (the opposite of 単数 'singular'). 多少 = more or less, 大量 = a large quantity." },
      { t: "meaning", s: "「複数」の意味は？", o: ["plural; more than one", "singular; just one", "more or less; somewhat", "a large quantity; mass"], a: 0, e: "複数 = two or more; several, as opposed to a single one." }
    ]
  },
  {
    id: "n2-0021", w: "制作", r: "せいさく", m: "production; creation (of a creative work)", c: "noun", lv: 1,
    ex: [{ jp: "有名な監督が新作映画の制作を発表した。", en: "A famous director announced the production of a new film." }],
    qs: [
      { t: "fitb", s: "彼女は長年、映画の＿＿＿＿に携わってきた。", en: "She has been involved in film production for many years.", o: ["制作", "制度", "設定", "製造"], a: 0, e: "制作 = producing creative works (films, TV, art). 製造 = manufacturing physical goods. 制度 = system/institution. 設定 = settings/configuration." },
      { t: "meaning", s: "「制作」の意味は？", o: ["production; creation of a creative work", "manufacturing goods", "system; institution", "settings; configuration"], a: 0, e: "制作 refers to making creative or artistic works (映画制作 = film production, 番組制作 = TV program production). 製造 is for manufactured goods." }
    ]
  },
  {
    id: "n2-0022", w: "解説", r: "かいせつ", m: "explanation; commentary; analysis", c: "noun", lv: 1,
    ex: [{ jp: "専門家がニュースをわかりやすく解説した。", en: "An expert explained the news in an easy-to-understand way." }],
    qs: [
      { t: "fitb", s: "試合後、監督が戦術を詳しく＿＿＿＿してくれた。", en: "After the match, the coach explained the tactics in detail.", o: ["解説", "解決", "発表", "報告"], a: 0, e: "解説する = to explain or commentate in detail. 解決 = resolution (solving a problem). 発表 = announcement. 報告 = report." },
      { t: "meaning", s: "「解説」の意味は？", o: ["explanation; commentary; analysis", "resolution; solving a problem", "announcement; presentation", "report"], a: 0, e: "解説 = breaking something down and explaining it clearly (often expert commentary on news, sports, or technical topics). 解決 = solving/resolving." }
    ]
  },
  {
    id: "n2-0023", w: "募集", r: "ぼしゅう", m: "recruitment; call for applicants or entries", c: "noun", lv: 1,
    ex: [{ jp: "会社では今、新入社員を募集しています。", en: "The company is currently recruiting new employees." }],
    qs: [
      { t: "fitb", s: "アルバイトを＿＿＿＿するポスターが貼ってあった。", en: "There was a poster recruiting part-time workers.", o: ["募集", "採用", "応募", "求職"], a: 0, e: "募集する = to solicit or recruit (the organization's action). 採用 = to hire/select. 応募 = to apply (the applicant's action). 求職 = job-seeking." },
      { t: "meaning", s: "「募集」の意味は？", o: ["recruitment; call for applicants", "hiring; selection of candidates", "applying for a position", "job-seeking"], a: 0, e: "募集 is the act of calling for applicants, entries, or participants. 応募 is the applicant's act of responding to that call — they are opposite sides of the same process." }
    ]
  },
  {
    id: "n2-0024", w: "基準", r: "きじゅん", m: "standard; criterion; benchmark", c: "noun", lv: 1,
    ex: [{ jp: "この製品は安全基準を満たしていない。", en: "This product does not meet safety standards." }],
    qs: [
      { t: "fitb", s: "評価の＿＿＿＿が不明確だと、公平な審査ができない。", en: "If the evaluation criteria are unclear, a fair assessment cannot be made.", o: ["基準", "規則", "基礎", "条件"], a: 0, e: "基準 = standard or criterion used to judge or measure. 規則 = rule/regulation. 基礎 = foundation/basics. 条件 = condition/requirement." },
      { t: "meaning", s: "「基準」の意味は？", o: ["standard; criterion; benchmark", "rule; regulation", "foundation; basics", "condition; requirement"], a: 0, e: "基準 is the yardstick used to judge something (合格基準 = passing criteria, 安全基準 = safety standard). It implies a reference point, not just a rule." }
    ]
  },
  {
    id: "n2-0025", w: "自ら", r: "みずから", m: "oneself; personally; by oneself", c: "adv", lv: 1,
    ex: [{ jp: "社長が自ら出向いて謝罪した。", en: "The president went in person to apologize." }],
    qs: [
      { t: "fitb", s: "問題が起きたとき、リーダーは＿＿＿＿動いて解決した。", en: "When a problem arose, the leader personally stepped in to resolve it.", o: ["自ら", "互いに", "改めて", "ひとりでに"], a: 0, e: "自ら = by/for oneself, in person (emphasizes personal direct action). 互いに = mutually, with each other. 改めて = once again, formally. ひとりでに = by itself, spontaneously (without anyone's involvement)." },
      { t: "meaning", s: "「自ら」の意味は？", o: ["oneself; in person; personally", "mutually; with each other", "once again; anew; formally", "by itself; spontaneously"], a: 0, e: "自ら emphasizes that the subject takes direct personal action themselves — often despite being in a position where they could delegate. Not the same as ひとりでに (which means with no person involved at all)." }
    ]
  },
  {
    id: "n2-0026", w: "構造", r: "こうぞう", m: "structure; framework; how something is built", c: "noun", lv: 1,
    ex: [{ jp: "この建物の構造はとても複雑だ。", en: "The structure of this building is very complex." }],
    qs: [
      { t: "fitb", s: "社会の＿＿＿＿が変わり、家族のあり方も多様になった。", en: "As the structure of society has changed, the way families live has also become more diverse.", o: ["構造", "構成", "制度", "組織"], a: 0, e: "構造 = overall framework or structure. 構成 = composition, how parts are arranged together. 制度 = institution/system (rules-based). 組織 = organization (a body of people)." },
      { t: "meaning", s: "「構造」の意味は？", o: ["structure; framework; how something is built", "composition; arrangement of parts", "institution; rules-based system", "organization; a body of people"], a: 0, e: "構造 refers to the internal arrangement that makes something what it is — used for buildings (建物の構造), sentences (文の構造), societies (社会構造), etc." }
    ]
  },
  {
    id: "n2-0027", w: "停止", r: "ていし", m: "suspension; stoppage; halt", c: "noun", lv: 1,
    ex: [{ jp: "システムのエラーにより、サービスが一時停止した。", en: "Due to a system error, the service was temporarily suspended." }],
    qs: [
      { t: "fitb", s: "工事のため、この道路は通行が＿＿＿＿されています。", en: "Due to construction, traffic on this road has been stopped.", o: ["停止", "禁止", "中断", "廃止"], a: 0, e: "停止 = to halt or stop (temporarily or fully). 禁止 = prohibition (not allowed). 中断 = interruption (a pause mid-way through). 廃止 = abolition (permanent discontinuation of a system or rule)." },
      { t: "meaning", s: "「停止」の意味は？", o: ["suspension; stoppage; halt", "prohibition; ban", "interruption; pause mid-way", "abolition; permanent discontinuation"], a: 0, e: "停止 = bringing movement or operation to a stop (車が停止する = the car stops, 業務停止 = suspension of operations). Can be temporary or permanent." }
    ]
  },
  {
    id: "n2-0028", w: "各々", r: "おのおの", m: "each (one); every one; respectively", c: "adv", lv: 1,
    ex: [{ jp: "参加者は各々、異なる意見を述べた。", en: "Each of the participants stated different opinions." }],
    qs: [
      { t: "fitb", s: "チームのメンバーが＿＿＿＿の担当部分を仕上げた。", en: "Each team member finished their own assigned section.", o: ["各々", "たがいに", "いっせいに", "ひとりでに"], a: 0, e: "各々 = each one individually. たがいに = mutually, to/with each other. いっせいに = all at once, simultaneously. ひとりでに = by itself, spontaneously." },
      { t: "meaning", s: "「各々」の意味は？", o: ["each; every one; respectively", "mutually; to each other", "all at once; simultaneously", "by itself; spontaneously"], a: 0, e: "各々 (おのおの) is slightly more formal than それぞれ but means the same: each individual one, separately. Often used in formal or written contexts." }
    ]
  },
  {
    id: "n2-0029", w: "周辺", r: "しゅうへん", m: "surrounding area; periphery; neighborhood", c: "noun", lv: 1,
    ex: [{ jp: "駅の周辺には多くのカフェがある。", en: "There are many cafes in the area around the station." }],
    qs: [
      { t: "fitb", s: "工場の＿＿＿＿に住む人々から騒音の苦情が相次いだ。", en: "Noise complaints came one after another from people living in the area around the factory.", o: ["周辺", "付近", "郊外", "境界"], a: 0, e: "周辺 = surrounding zone or area (broader concept). 付近 = vicinity, near a specific point. 郊外 = suburbs/outskirts (further from city center). 境界 = boundary, border." },
      { t: "meaning", s: "「周辺」の意味は？", o: ["surrounding area; periphery", "vicinity; nearby spot", "suburbs; outskirts", "boundary; border"], a: 0, e: "周辺 describes the area surrounding something (駅周辺 = around the station, 東京周辺 = the greater Tokyo area). Broader than 付近." }
    ]
  },
  {
    id: "n2-0030", w: "段階", r: "だんかい", m: "stage; phase; step in a process", c: "noun", lv: 1,
    ex: [{ jp: "プロジェクトは現在、計画の段階にある。", en: "The project is currently at the planning stage." }],
    qs: [
      { t: "fitb", s: "交渉はまだ初期の＿＿＿＿で、合意には至っていない。", en: "The negotiations are still in the early stage and have not reached an agreement.", o: ["段階", "過程", "手順", "状況"], a: 0, e: "段階 = a distinct level or phase in a progression. 過程 = ongoing process (continuous flow). 手順 = procedure, the steps to follow. 状況 = the current situation or conditions." },
      { t: "meaning", s: "「段階」の意味は？", o: ["stage; phase; step in a process", "process; ongoing progression", "procedure; steps to follow", "situation; current conditions"], a: 0, e: "段階 = a distinct step or level (初期段階 = early stage, 最終段階 = final stage). Implies discrete steps rather than a continuous flow." }
    ]
  },
  {
    id: "n2-0031", w: "本来", r: "ほんらい", m: "originally; essentially; by nature; as it should be", c: "adv", lv: 1,
    ex: [{ jp: "本来、この薬は医師の処方が必要だ。", en: "Properly speaking, this medicine requires a doctor's prescription." }],
    qs: [
      { t: "fitb", s: "このルールは＿＿＿＿、利用者の安全を守るために作られたものだ。", en: "This rule was originally created to protect users' safety.", o: ["本来", "元々", "当初", "実際"], a: 0, e: "本来 = in its proper/original nature, as it ought to be (often implies a gap between the ideal and current reality). 元々 = originally, from the start. 当初 = at first, at the beginning. 実際 = actually, in practice." },
      { t: "meaning", s: "「本来」の意味は？", o: ["originally; essentially; as it should be", "from the start; originally", "at first; in the beginning", "actually; in practice"], a: 0, e: "本来 carries the nuance of 'as it was meant to be' or 'by its very nature,' often implying the current reality differs from the ideal (本来の目的 = the original purpose)." }
    ]
  },
  {
    id: "n2-0032", w: "作成", r: "さくせい", m: "creation; drafting; drawing up (a document or plan)", c: "noun", lv: 1,
    ex: [{ jp: "会議の資料を作成するのに二時間かかった。", en: "It took two hours to prepare the materials for the meeting." }],
    qs: [
      { t: "fitb", s: "申請書の＿＿＿＿には、正確な情報を記入してください。", en: "When drafting the application form, please fill in accurate information.", o: ["作成", "制作", "製造", "記入"], a: 0, e: "作成 = to create or draft documents, plans, spreadsheets. 制作 = to produce creative works (films, art). 製造 = to manufacture goods. 記入 = to fill in a form." },
      { t: "meaning", s: "「作成」の意味は？", o: ["creating; drafting a document or plan", "producing creative works (films, art)", "manufacturing goods", "filling in; writing into a form"], a: 0, e: "作成 is used for making documents, files, or plans (書類を作成する, レポートを作成する). 制作 is for artistic or media productions — the distinction maps roughly to 'drafting' vs 'producing.'" }
    ]
  },
  {
    id: "n2-0033", w: "感想", r: "かんそう", m: "impressions; personal thoughts; feelings about something", c: "noun", lv: 1,
    ex: [{ jp: "映画を見た後、感想を日記に書いた。", en: "After watching the film, I wrote my impressions in my diary." }],
    qs: [
      { t: "fitb", s: "先生は読書の＿＿＿＿を全員に発表させた。", en: "The teacher had everyone present their impressions of the reading.", o: ["感想", "意見", "批評", "評価"], a: 0, e: "感想 = personal impressions or feelings about something experienced (subjective). 意見 = opinion/view (takes a position). 批評 = critical review. 評価 = evaluation/assessment (often with a score or judgment)." },
      { t: "meaning", s: "「感想」の意味は？", o: ["impressions; personal thoughts; feelings", "opinion; point of view", "critical review; critique", "evaluation; assessment"], a: 0, e: "感想 is subjective and personal — how something felt to you. 意見 is more reasoned and takes a stance. 感想文 = a personal response essay." }
    ]
  },
  {
    id: "n2-0034", w: "強化", r: "きょうか", m: "strengthening; reinforcement; intensification", c: "noun", lv: 1,
    ex: [{ jp: "セキュリティを強化するために新しいシステムを導入した。", en: "A new system was introduced to strengthen security." }],
    qs: [
      { t: "fitb", s: "チームは来シーズンに向けて守備力の＿＿＿＿を図っている。", en: "The team is working to reinforce its defensive capability heading into next season.", o: ["強化", "改善", "向上", "発展"], a: 0, e: "強化 = making something stronger or more robust (active reinforcement). 改善 = improvement by fixing what's wrong. 向上 = gradual advancement. 発展 = development, expansion." },
      { t: "meaning", s: "「強化」の意味は？", o: ["strengthening; reinforcement", "improvement by fixing problems", "gradual advancement", "development; expansion"], a: 0, e: "強化 emphasizes actively making something stronger or more powerful (筋力強化 = strength training, 規制強化 = tightening regulations, セキュリティ強化 = boosting security)." }
    ]
  },
  {
    id: "n2-0035", w: "深夜", r: "しんや", m: "late at night; the dead of night; midnight hours", c: "noun", lv: 1,
    ex: [{ jp: "深夜まで残業が続いた。", en: "The overtime work continued until late at night." }],
    qs: [
      { t: "fitb", s: "＿＿＿＿に大きな地震が起き、多くの人が眠れなかった。", en: "A large earthquake struck in the dead of night, leaving many people unable to sleep.", o: ["深夜", "早朝", "夕方", "夜明け"], a: 0, e: "深夜 = late night (roughly midnight to 3 AM). 早朝 = early morning (before or just after sunrise). 夕方 = early evening (around sunset). 夜明け = dawn, daybreak." },
      { t: "meaning", s: "「深夜」の意味は？", o: ["late at night; the dead of night", "early morning, just before sunrise", "early evening; dusk", "dawn; daybreak"], a: 0, e: "深夜 = the hours from around midnight to early morning. Common in 深夜番組 (late-night TV programs), 深夜バス (overnight bus)." }
    ]
  },
  {
    id: "n2-0036", w: "年度", r: "ねんど", m: "fiscal year; academic year (Japan: April 1 – March 31)", c: "noun", lv: 1,
    ex: [{ jp: "新年度が始まり、社内のシステムが更新された。", en: "The new fiscal year started and the company's internal systems were updated." }],
    qs: [
      { t: "fitb", s: "この予算は今＿＿＿＿中に使い切らなければならない。", en: "This budget must be spent within this fiscal year.", o: ["年度", "年間", "期間", "会計"], a: 0, e: "年度 = a defined administrative year (Japan: Apr 1–Mar 31). 年間 = throughout a year, annual (duration). 期間 = a period or span of time. 会計 = accounting, finances." },
      { t: "meaning", s: "「年度」の意味は？", o: ["fiscal/academic year (Apr–Mar in Japan)", "throughout a year; annual duration", "period; span of time", "accounting; finances"], a: 0, e: "年度 is the administrative unit of a year used for budgets, school grades, and fiscal reporting in Japan (今年度 = this fiscal year, 来年度 = next fiscal year)." }
    ]
  },
  {
    id: "n2-0037", w: "資料", r: "しりょう", m: "materials; reference documents; data", c: "noun", lv: 1,
    ex: [{ jp: "発表のための資料を準備した。", en: "I prepared reference materials for the presentation." }],
    qs: [
      { t: "fitb", s: "この研究に必要な＿＿＿＿は図書館で集めることができる。", en: "The materials needed for this research can be gathered at the library.", o: ["資料", "情報", "証拠", "データ"], a: 0, e: "資料 = reference materials or documents (for study, research, or meetings). 情報 = information (broader). 証拠 = evidence (for proving something). データ = raw numerical or digital data." },
      { t: "meaning", s: "「資料」の意味は？", o: ["reference materials; documents", "information (in general)", "evidence; proof", "raw numerical or digital data"], a: 0, e: "資料 refers to collected documents or materials used as references (会議資料 = meeting handouts, 参考資料 = reference materials, 歴史資料 = historical documents)." }
    ]
  },
  {
    id: "n2-0038", w: "職場", r: "しょくば", m: "workplace; place of work; professional environment", c: "noun", lv: 1,
    ex: [{ jp: "職場の雰囲気がよく、毎日仕事が楽しい。", en: "The workplace atmosphere is good, and I enjoy work every day." }],
    qs: [
      { t: "fitb", s: "＿＿＿＿でのハラスメントは、深刻な社会問題となっている。", en: "Harassment in the workplace has become a serious social issue.", o: ["職場", "現場", "業界", "部署"], a: 0, e: "職場 = the workplace as a social/professional environment. 現場 = the actual physical site or scene (construction site, crime scene, etc.). 業界 = industry/sector. 部署 = department or division within a company." },
      { t: "meaning", s: "「職場」の意味は？", o: ["workplace; professional work environment", "actual physical site; scene of work", "industry; sector", "department; division in a company"], a: 0, e: "職場 focuses on the human and social environment of a place of work (職場環境 = work environment, 職場復帰 = returning to work after leave)." }
    ]
  },
  {
    id: "n2-0039", w: "調整", r: "ちょうせい", m: "adjustment; fine-tuning; coordination", c: "noun", lv: 1,
    ex: [{ jp: "予定の調整をするため、カレンダーを確認した。", en: "I checked the calendar to coordinate the schedule." }],
    qs: [
      { t: "fitb", s: "機械の動きがおかしいので、専門家に＿＿＿＿してもらった。", en: "Since the machine was behaving strangely, I had a specialist fine-tune it.", o: ["調整", "修理", "改良", "点検"], a: 0, e: "調整 = to calibrate or fine-tune (make it work as intended). 修理 = to repair (fix damage or a malfunction). 改良 = to improve (make better). 点検 = to inspect or check." },
      { t: "meaning", s: "「調整」の意味は？", o: ["adjustment; fine-tuning; coordination", "repair; fixing damage", "improvement; making something better", "inspection; checking"], a: 0, e: "調整 covers calibrating, tuning, or coordinating things (日程調整 = schedule coordination, 音量調整 = volume adjustment, 微調整 = fine adjustment)." }
    ]
  },
  {
    id: "n2-0040", w: "宣伝", r: "せんでん", m: "advertising; publicity; promotion; propaganda", c: "noun", lv: 1,
    ex: [{ jp: "新商品の宣伝のために、テレビCMを放映した。", en: "A TV commercial was broadcast to advertise the new product." }],
    qs: [
      { t: "fitb", s: "口コミは最も効果的な＿＿＿＿の一つだと言われている。", en: "Word of mouth is said to be one of the most effective forms of advertising.", o: ["宣伝", "広告", "告知", "報告"], a: 0, e: "宣伝 = promotion/publicity (broad — includes campaigns and word of mouth). 広告 = advertisement (specifically paid media). 告知 = announcement/notification. 報告 = report." },
      { t: "meaning", s: "「宣伝」の意味は？", o: ["advertising; publicity; promotion", "paid advertisement (media)", "announcement; official notification", "report; reporting"], a: 0, e: "宣伝 = broadly spreading information to promote something (宣伝活動 = promotional activities, 自己宣伝 = self-promotion). Includes any channel, paid or not." }
    ]
  },
  {
    id: "n2-0041", w: "接続", r: "せつぞく", m: "connection; joining; link (e.g. network, trains)", c: "noun", lv: 1,
    ex: [{ jp: "インターネットの接続が不安定で、作業が進まない。", en: "The internet connection is unstable, so the work isn't progressing." }],
    qs: [
      { t: "fitb", s: "ケーブルの＿＿＿＿が緩んでいたため、画面が映らなかった。", en: "The cable connection was loose, so the screen wouldn't display.", o: ["接続", "接触", "連結", "結合"], a: 0, e: "接続 = connecting devices, networks, or lines. 接触 = physical contact/touching. 連結 = coupling (train cars). 結合 = bonding/union (chemistry, abstract joining)." },
      { t: "meaning", s: "「接続」の意味は？", o: ["connection; joining; link", "physical contact; touching", "coupling of train cars", "chemical bonding; union"], a: 0, e: "接続 is used for hooking things up — ネット接続 (internet connection), 接続詞 (conjunction), 乗り換え接続 (train transfer connection)." }
    ]
  },
  {
    id: "n2-0042", w: "当たり前", r: "あたりまえ", m: "natural; obvious; to be expected; ordinary", c: "naadj", lv: 1,
    ex: [{ jp: "約束を守るのは当たり前のことだ。", en: "Keeping a promise is only natural." }],
    qs: [
      { t: "fitb", s: "毎日使えていた水道が、＿＿＿＿ではないと災害で気づいた。", en: "The disaster made me realize that running water, which I'd used daily, isn't something to be taken for granted.", o: ["当たり前", "出鱈目", "大げさ", "あべこべ"], a: 0, e: "当たり前 = natural, obvious, taken for granted. 出鱈目(でたらめ) = nonsense, random/false. 大げさ = exaggerated. あべこべ = reversed, the other way around." },
      { t: "meaning", s: "「当たり前」の意味は？", o: ["natural; obvious; to be expected", "nonsense; random and false", "exaggerated; overblown", "reversed; backwards"], a: 0, e: "当たり前 means something is so normal or reasonable it needs no explanation (当たり前のことを言う = to state the obvious)." }
    ]
  },
  {
    id: "n2-0043", w: "思い掛けない", r: "おもいがけない", m: "unexpected; unforeseen; by chance", c: "iadj", lv: 1,
    ex: [{ jp: "思い掛けないところで昔の友人に会った。", en: "I ran into an old friend in an unexpected place." }],
    qs: [
      { t: "fitb", s: "＿＿＿＿知らせに、彼女は言葉を失った。", en: "At the unexpected news, she was at a loss for words.", o: ["思い掛けない", "やむを得ない", "申し訳ない", "数えきれない"], a: 0, e: "思い掛けない = unexpected, unforeseen. やむを得ない = unavoidable, can't be helped. 申し訳ない = inexcusable, very sorry. 数えきれない = countless, too many to count." },
      { t: "meaning", s: "「思い掛けない」の意味は？", o: ["unexpected; unforeseen", "unavoidable; can't be helped", "inexcusable; deeply sorry", "countless; innumerable"], a: 0, e: "思い掛けない describes something you never anticipated (思い掛けない出来事 = an unforeseen event). Commonly written 思いがけない." }
    ]
  },
  {
    id: "n2-0044", w: "交流", r: "こうりゅう", m: "exchange; interaction; interchange (people, cultures)", c: "noun", lv: 1,
    ex: [{ jp: "この町は外国の都市と文化交流を続けている。", en: "This town continues cultural exchange with cities abroad." }],
    qs: [
      { t: "fitb", s: "留学を通して、様々な国の学生と＿＿＿＿を深めた。", en: "Through studying abroad, I deepened my interaction with students from various countries.", o: ["交流", "交換", "交差", "交代"], a: 0, e: "交流 = mutual interaction/exchange between people or groups. 交換 = swapping concrete things. 交差 = crossing/intersecting. 交代 = taking turns, alternating." },
      { t: "meaning", s: "「交流」の意味は？", o: ["exchange; interaction between people/cultures", "swapping concrete objects", "crossing; intersecting", "taking turns; alternating"], a: 0, e: "交流 emphasizes ongoing human or cultural interaction (国際交流 = international exchange, 交流会 = social/networking event). Also means alternating current (AC)." }
    ]
  },
  {
    id: "n2-0045", w: "中身", r: "なかみ", m: "contents; substance; what is inside", c: "noun", lv: 1,
    ex: [{ jp: "箱の中身を確認してから、サインしてください。", en: "Please check the contents of the box before signing." }],
    qs: [
      { t: "fitb", s: "見た目は立派だが、話の＿＿＿＿が全くなかった。", en: "It looked impressive, but the talk had no substance at all.", o: ["中身", "表面", "外見", "本物"], a: 0, e: "中身 = contents or substance, what's actually inside. 表面 = surface. 外見 = outward appearance. 本物 = the real thing/genuine article." },
      { t: "meaning", s: "「中身」の意味は？", o: ["contents; substance; what is inside", "surface; outer face", "outward appearance; looks", "the real thing; genuine article"], a: 0, e: "中身 contrasts with appearance — it's the actual content or substance (財布の中身 = wallet contents, 中身のある議論 = a substantive discussion)." }
    ]
  },
  {
    id: "n2-0046", w: "いきなり", r: "いきなり", m: "suddenly; abruptly; without warning", c: "adv", lv: 1,
    ex: [{ jp: "彼はいきなり立ち上がって部屋を出て行った。", en: "He suddenly stood up and left the room." }],
    qs: [
      { t: "fitb", s: "準備運動もせずに＿＿＿＿走り出すと、けがをしやすい。", en: "If you start running abruptly without warming up, you're prone to injury.", o: ["いきなり", "うっかり", "じっくり", "そっくり"], a: 0, e: "いきなり = suddenly, with no lead-up. うっかり = carelessly, absent-mindedly. じっくり = carefully, taking one's time. そっくり = exactly alike; entirely." },
      { t: "meaning", s: "「いきなり」の意味は？", o: ["suddenly; abruptly; without warning", "carelessly; absent-mindedly", "carefully; taking one's time", "exactly alike; identical"], a: 0, e: "いきなり stresses that something happens with no preparation or warning (いきなり質問された = was asked out of the blue). Similar to 突然 but more colloquial." }
    ]
  },
  {
    id: "n2-0047", w: "継続", r: "けいぞく", m: "continuation; carrying on; keeping up", c: "noun", lv: 1,
    ex: [{ jp: "上達のためには毎日の練習を継続することが大切だ。", en: "To improve, it's important to keep up daily practice." }],
    qs: [
      { t: "fitb", s: "資金不足のため、プロジェクトの＿＿＿＿が難しくなった。", en: "Due to lack of funds, continuing the project became difficult.", o: ["継続", "持続", "連続", "存続"], a: 0, e: "継続 = continuing an activity or effort (often deliberate). 持続 = sustaining a state/level. 連続 = consecutive, unbroken sequence. 存続 = survival/continued existence of an organization." },
      { t: "meaning", s: "「継続」の意味は？", o: ["continuation; carrying on an activity", "sustaining a state or level", "consecutive; an unbroken sequence", "continued existence; survival"], a: 0, e: "継続 = keeping an action going over time (継続は力なり = perseverance pays off, lit. 'continuation is strength'). 連続 emphasizes back-to-back sequence instead." }
    ]
  },
  {
    id: "n2-0048", w: "書籍", r: "しょせき", m: "books; publications (formal term for books)", c: "noun", lv: 1,
    ex: [{ jp: "この出版社は専門的な書籍を多く扱っている。", en: "This publisher handles many specialized books." }],
    qs: [
      { t: "fitb", s: "電子＿＿＿＿の普及で、紙の本の売上が減っている。", en: "With the spread of e-books, sales of paper books are declining.", o: ["書籍", "書類", "文章", "雑誌"], a: 0, e: "書籍 = books/publications (formal). 書類 = documents/paperwork. 文章 = written text/passage/sentence. 雑誌 = magazine." },
      { t: "meaning", s: "「書籍」の意味は？", o: ["books; publications (formal)", "documents; paperwork", "written text; a passage", "magazine"], a: 0, e: "書籍 is the formal word for books, used in publishing and commerce (電子書籍 = e-book, 書籍化 = turning into a book). 本 is the everyday word." }
    ]
  },
  {
    id: "n2-0049", w: "少なくとも", r: "すくなくとも", m: "at least; at the very least", c: "adv", lv: 1,
    ex: [{ jp: "完成までに少なくとも一週間はかかるだろう。", en: "It will take at least a week to complete." }],
    qs: [
      { t: "fitb", s: "全員は無理でも、＿＿＿＿半数の賛成は必要だ。", en: "Even if not everyone, we need at least half to agree.", o: ["少なくとも", "せいぜい", "わざわざ", "今にも"], a: 0, e: "少なくとも = at least (a minimum bound). せいぜい = at most, at best (an upper limit). わざわざ = going out of one's way. 今にも = at any moment now." },
      { t: "meaning", s: "「少なくとも」の意味は？", o: ["at least; at the very least", "at most; at best", "going out of one's way to", "at any moment now"], a: 0, e: "少なくとも sets a minimum (少なくとも三人 = at least three people). Its opposite is せいぜい (at most)." }
    ]
  },
  {
    id: "n2-0050", w: "間も無く", r: "まもなく", m: "soon; shortly; before long", c: "adv", lv: 1,
    ex: [{ jp: "間も無く電車が到着いたします。", en: "The train will arrive shortly." }],
    qs: [
      { t: "fitb", s: "開演まで＿＿＿＿ですので、お席にお戻りください。", en: "The performance will begin shortly, so please return to your seats.", o: ["間も無く", "とっくに", "いつまでも", "たまたま"], a: 0, e: "間も無く = soon, before long (a short time from now). とっくに = long ago, already. いつまでも = forever, indefinitely. たまたま = by chance, happened to." },
      { t: "meaning", s: "「間も無く」の意味は？", o: ["soon; shortly; before long", "long ago; already", "forever; indefinitely", "by chance; happened to"], a: 0, e: "間も無く (often written まもなく) means a short time from now. Common in announcements (まもなく発車します = departing shortly)." }
    ]
  },
  {
    id: "n2-0051", w: "送料", r: "そうりょう", m: "postage; shipping cost; carriage charge", c: "noun", lv: 1,
    ex: [{ jp: "五千円以上のお買い上げで送料は無料になります。", en: "Shipping is free for purchases over 5,000 yen." }],
    qs: [
      { t: "fitb", s: "商品は安かったが、＿＿＿＿を含めると割高だった。", en: "The item was cheap, but including shipping it was rather expensive.", o: ["送料", "料金", "代金", "手数料"], a: 0, e: "送料 = shipping/postage cost specifically. 料金 = fee/charge (general). 代金 = the price/payment for goods. 手数料 = handling/service fee, commission." },
      { t: "meaning", s: "「送料」の意味は？", o: ["postage; shipping cost", "fee; charge (general)", "the price paid for goods", "handling fee; commission"], a: 0, e: "送料 specifically covers the cost of sending/delivering something (送料無料 = free shipping, 送料込み = shipping included)." }
    ]
  },
  {
    id: "n2-0052", w: "自宅", r: "じたく", m: "one's own home; one's residence", c: "noun", lv: 1,
    ex: [{ jp: "最近は自宅で仕事をする人が増えた。", en: "Recently more people work from home." }],
    qs: [
      { t: "fitb", s: "退院後はしばらく＿＿＿＿で療養することになった。", en: "After being discharged, he was to recuperate at home for a while.", o: ["自宅", "住所", "宿舎", "実家"], a: 0, e: "自宅 = one's own home/residence. 住所 = address (the location/written address). 宿舎 = dormitory/lodging (provided housing). 実家 = one's parents' home/family home." },
      { t: "meaning", s: "「自宅」の意味は？", o: ["one's own home; one's residence", "address; written location", "dormitory; provided lodging", "one's parents' home"], a: 0, e: "自宅 = the home where you live (自宅勤務 = working from home, 自宅療養 = recovering at home). 実家 specifically means the family home you grew up in." }
    ]
  },
  {
    id: "n2-0053", w: "前後", r: "ぜんご", m: "before and after; around (approximate); order", c: "noun", lv: 1,
    ex: [{ jp: "開会式の前後は会場がとても混雑する。", en: "The venue is very crowded before and after the opening ceremony." }],
    qs: [
      { t: "fitb", s: "会費は一人五千円＿＿＿＿を予定しています。", en: "We're planning a membership fee of around 5,000 yen per person.", o: ["前後", "以上", "ばかり", "限り"], a: 0, e: "前後 after a number = approximately/around that amount. 以上 = that amount or more. ばかり = only/just about. 限り = as far as/limit. Note: 前後 also means 'before and after.'" },
      { t: "meaning", s: "「前後」の意味は？", o: ["before and after; around (approximate)", "that amount or more", "only; nothing but", "limit; as far as"], a: 0, e: "前後 means 'before and after' (前後の文脈 = surrounding context) and, after a quantity, 'approximately' (三時前後 = around 3 o'clock). It can also mean the order/sequence of things." }
    ]
  },
  {
    id: "n2-0054", w: "確率", r: "かくりつ", m: "probability; likelihood; chance", c: "noun", lv: 1,
    ex: [{ jp: "明日の降水確率は七十パーセントだ。", en: "Tomorrow's chance of rain is seventy percent." }],
    qs: [
      { t: "fitb", s: "この治療法で回復する＿＿＿＿は非常に高い。", en: "The probability of recovery with this treatment is very high.", o: ["確率", "比率", "効率", "割合"], a: 0, e: "確率 = probability/likelihood of an event. 比率 = ratio/proportion between quantities. 効率 = efficiency. 割合 = proportion/percentage of a whole." },
      { t: "meaning", s: "「確率」の意味は？", o: ["probability; likelihood; chance", "ratio between quantities", "efficiency", "proportion of a whole"], a: 0, e: "確率 expresses how likely something is to happen (確率が高い = high probability, 成功の確率 = chance of success). Distinct from 割合 (a share of a whole)." }
    ]
  },
  {
    id: "n2-0055", w: "診断", r: "しんだん", m: "diagnosis; medical examination; assessment", c: "noun", lv: 1,
    ex: [{ jp: "医師の診断によると、ただの疲労だそうだ。", en: "According to the doctor's diagnosis, it's just fatigue." }],
    qs: [
      { t: "fitb", s: "会社は社員に年に一度の健康＿＿＿＿を義務づけている。", en: "The company requires employees to have an annual health check-up.", o: ["診断", "診察", "検査", "治療"], a: 0, e: "診断 = diagnosis (the doctor's conclusion/assessment). 診察 = the act of examining a patient. 検査 = testing/inspection (e.g. blood test). 治療 = treatment/therapy." },
      { t: "meaning", s: "「診断」の意味は？", o: ["diagnosis; medical assessment", "examining a patient (the act)", "testing; inspection", "treatment; therapy"], a: 0, e: "診断 is the conclusion a doctor reaches (健康診断 = health check-up, 診断書 = medical certificate). Also used figuratively (経営診断 = business assessment)." }
    ]
  },
  {
    id: "n2-0056", w: "体制", r: "たいせい", m: "system; structure; setup; regime (organizational)", c: "noun", lv: 1,
    ex: [{ jp: "会社は新しい経営体制に移行した。", en: "The company shifted to a new management structure." }],
    qs: [
      { t: "fitb", s: "災害に備えて、二十四時間対応の＿＿＿＿を整えた。", en: "In preparation for disasters, they set up a 24-hour response system.", o: ["体制", "体格", "態度", "姿勢"], a: 0, e: "体制 = organizational system/structure/setup (how a group is arranged to function). 体格 = physique/build (of a body). 態度 = attitude/manner. 姿勢 = posture, or one's stance toward something." },
      { t: "meaning", s: "「体制」の意味は？", o: ["system; structure; organizational setup", "physique; bodily build", "attitude; manner", "posture; stance"], a: 0, e: "体制 refers to how an organization or society is structured to operate (政治体制 = political system, 受け入れ体制 = reception/support setup)." }
    ]
  },
  {
    id: "n2-0057", w: "目指す", r: "めざす", m: "to aim at; to aspire to; to set one's sights on", c: "verb", lv: 1,
    ex: [{ jp: "彼は医者になることを目指して勉強している。", en: "He is studying with the goal of becoming a doctor." }],
    qs: [
      { t: "fitb", s: "チームは全国大会での優勝を＿＿＿＿、毎日練習している。", en: "The team practices every day, aiming to win the national tournament.", o: ["目指して", "見つめて", "見直して", "見送って"], a: 0, e: "目指す = to aim for/aspire to a goal. 見つめる = to gaze at/stare. 見直す = to review/reconsider. 見送る = to see someone off; to pass on (an opportunity)." },
      { t: "meaning", s: "「目指す」の意味は？", o: ["to aim at; to aspire to a goal", "to gaze at; to stare", "to review; to reconsider", "to see off; to forgo"], a: 0, e: "目指す means to set a goal and work toward it (頂上を目指す = head for the summit, 優勝を目指す = aim for victory)." }
    ]
  },
  {
    id: "n2-0058", w: "回転", r: "かいてん", m: "rotation; revolution; turning; turnover", c: "noun", lv: 1,
    ex: [{ jp: "観覧車がゆっくりと回転している。", en: "The Ferris wheel is slowly rotating." }],
    qs: [
      { t: "fitb", s: "この店は客の＿＿＿＿が速いので、すぐに席が空く。", en: "This restaurant has fast customer turnover, so seats open up quickly.", o: ["回転", "循環", "移動", "変化"], a: 0, e: "回転 = rotation/turning, or turnover (cycling of customers, stock). 循環 = circulation (blood, money flowing in a loop). 移動 = movement from place to place. 変化 = change/transformation." },
      { t: "meaning", s: "「回転」の意味は？", o: ["rotation; turning; turnover", "circulation in a loop", "movement from place to place", "change; transformation"], a: 0, e: "回転 = spinning/turning (回転寿司 = conveyor-belt sushi) and figuratively turnover or quickness (頭の回転が速い = quick-witted)." }
    ]
  },
  {
    id: "n2-0059", w: "きっかけ", r: "きっかけ", m: "trigger; opportunity; the thing that starts something", c: "noun", lv: 1,
    ex: [{ jp: "その出会いがきっかけで、彼は画家になった。", en: "That encounter was what led him to become a painter." }],
    qs: [
      { t: "fitb", s: "留学が日本語に興味を持つ＿＿＿＿になった。", en: "Studying abroad became the trigger for my interest in Japanese.", o: ["きっかけ", "おかげ", "わけ", "せい"], a: 0, e: "きっかけ = the trigger/catalyst that starts something. おかげ = thanks to (positive cause). わけ = reason/circumstance. せい = fault/blame (negative cause)." },
      { t: "meaning", s: "「きっかけ」の意味は？", o: ["trigger; the thing that starts something", "thanks to (a positive cause)", "reason; circumstances", "fault; blame for something bad"], a: 0, e: "きっかけ is the catalyst or opening event that sets something in motion (〜をきっかけに = triggered by / using ~ as an opportunity)." }
    ]
  },
  {
    id: "n2-0060", w: "特殊", r: "とくしゅ", m: "special; unique; peculiar; specialized", c: "naadj", lv: 1,
    ex: [{ jp: "この作業には特殊な道具が必要だ。", en: "This task requires special tools." }],
    qs: [
      { t: "fitb", s: "それは＿＿＿＿なケースで、普通は起こらない。", en: "That is a special case; it doesn't normally happen.", o: ["特殊", "普通", "平凡", "一般"], a: 0, e: "特殊 = special, unusual, out of the ordinary. 普通 = ordinary/normal. 平凡 = mediocre, commonplace. 一般 = general/common (the broad norm)." },
      { t: "meaning", s: "「特殊」の意味は？", o: ["special; unique; peculiar", "ordinary; normal", "mediocre; commonplace", "general; common"], a: 0, e: "特殊 emphasizes that something is exceptional or specialized, differing from the norm (特殊技能 = specialized skill). Its antonym is 一般 (general)." }
    ]
  },
  {
    id: "n2-0061", w: "当日", r: "とうじつ", m: "the day in question; the very day; that day", c: "noun", lv: 1,
    ex: [{ jp: "チケットは当日でも購入できます。", en: "Tickets can be purchased even on the day itself." }],
    qs: [
      { t: "fitb", s: "予約は前日までに、＿＿＿＿のキャンセルはご遠慮ください。", en: "Please reserve by the day before; we ask that you refrain from same-day cancellations.", o: ["当日", "当時", "前日", "翌日"], a: 0, e: "当日 = the very day (of an event). 当時 = back then, at that time (a past era). 前日 = the day before. 翌日 = the next day." },
      { t: "meaning", s: "「当日」の意味は？", o: ["the very day; the day in question", "back then; at that time (past)", "the previous day", "the following day"], a: 0, e: "当日 refers to the actual day an event takes place (当日券 = same-day ticket, 当日券売り場 = day-of box office). Don't confuse with 当時 (in those days)." }
    ]
  },
  {
    id: "n2-0062", w: "解放", r: "かいほう", m: "release; liberation; setting free", c: "noun", lv: 1,
    ex: [{ jp: "試験が終わって、ようやくプレッシャーから解放された。", en: "With the exam over, I was finally released from the pressure." }],
    qs: [
      { t: "fitb", s: "人質は無事に＿＿＿＿され、家族のもとへ戻った。", en: "The hostages were safely released and returned to their families.", o: ["解放", "開放", "釈放", "放置"], a: 0, e: "解放 = liberation/freeing from restraint or suffering. 開放 = opening up (a space/market to access). 釈放 = legal release of a prisoner. 放置 = leaving something neglected/unattended." },
      { t: "meaning", s: "「解放」の意味は？", o: ["release; liberation; setting free", "opening up (a space or market)", "legal release of a prisoner", "leaving neglected; abandoning"], a: 0, e: "解放 = freeing from confinement, oppression, or burden (奴隷解放 = emancipation of slaves, 解放感 = sense of liberation). Compare 開放 (throwing open to access)." }
    ]
  },
  {
    id: "n2-0063", w: "性能", r: "せいのう", m: "performance; capability; (technical) specs of a machine", c: "noun", lv: 1,
    ex: [{ jp: "新しいカメラは性能が大幅に向上した。", en: "The new camera's performance improved significantly." }],
    qs: [
      { t: "fitb", s: "価格は高いが、それに見合った＿＿＿＿を備えている。", en: "It's expensive, but it has performance to match.", o: ["性能", "性格", "機能", "効能"], a: 0, e: "性能 = the performance level/capability of a machine. 性格 = personality/character (of a person). 機能 = function/feature (what it can do). 効能 = efficacy/benefits (of medicine, etc.)." },
      { t: "meaning", s: "「性能」の意味は？", o: ["performance; capability of a machine", "personality; character of a person", "function; feature", "efficacy; medicinal benefit"], a: 0, e: "性能 measures how well a machine performs (高性能 = high-performance, エンジン性能 = engine performance). 機能 is what features it has; 性能 is how well it does them." }
    ]
  },
  {
    id: "n2-0064", w: "解散", r: "かいさん", m: "breakup; dissolution; disbanding", c: "noun", lv: 1,
    ex: [{ jp: "そのバンドは十年の活動の後、解散した。", en: "The band broke up after ten years of activity." }],
    qs: [
      { t: "fitb", s: "首相は衆議院の＿＿＿＿を決断し、総選挙が行われた。", en: "The prime minister decided to dissolve the lower house, and a general election was held.", o: ["解散", "解消", "中止", "閉鎖"], a: 0, e: "解散 = disbanding a group/parliament; people dispersing. 解消 = dissolving an arrangement/resolving (契約解消 = contract cancellation). 中止 = calling off an event. 閉鎖 = closing down a facility." },
      { t: "meaning", s: "「解散」の意味は？", o: ["breakup; dissolution; disbanding", "dissolving an arrangement; cancellation", "calling off an event", "closing down a facility"], a: 0, e: "解散 = a group disbanding or people dispersing (国会解散 = dissolution of parliament, 現地解散 = dismissing/parting ways on site)." }
    ]
  },
  {
    id: "n2-0065", w: "整備", r: "せいび", m: "maintenance; servicing; putting in order; development of infrastructure", c: "noun", lv: 1,
    ex: [{ jp: "飛行機は離陸前に入念に整備される。", en: "The aircraft is carefully serviced before takeoff." }],
    qs: [
      { t: "fitb", s: "市は自転車専用道路の＿＿＿＿を進めている。", en: "The city is developing dedicated bicycle lanes.", o: ["整備", "修理", "整理", "建設"], a: 0, e: "整備 = maintaining/servicing equipment, or developing/putting infrastructure in order. 修理 = repairing what's broken. 整理 = tidying/organizing/sorting. 建設 = construction of something new." },
      { t: "meaning", s: "「整備」の意味は？", o: ["maintenance; servicing; putting in order", "repairing what is broken", "tidying; sorting; organizing", "construction of something new"], a: 0, e: "整備 means keeping equipment in working order (車の整備 = car servicing) and developing/arranging systems or facilities (法整備 = developing legislation, 環境整備 = setting up the environment)." }
    ]
  },
  {
    id: "n2-0066", w: "標準", r: "ひょうじゅん", m: "standard; norm; average level", c: "noun", lv: 1,
    ex: [{ jp: "この機能は標準で搭載されている。", en: "This feature is installed as standard." }],
    qs: [
      { t: "fitb", s: "彼の身長は日本人男性の＿＿＿＿よりやや高い。", en: "His height is slightly above the average for Japanese men.", o: ["標準", "基準", "目標", "水準"], a: 0, e: "標準 = the standard/norm/average level. 基準 = the criterion used to judge. 目標 = goal/target one aims for. 水準 = level/standard of quality (レベル). 標準 and 基準 overlap, but 基準 is the yardstick, 標準 the typical norm." },
      { t: "meaning", s: "「標準」の意味は？", o: ["standard; norm; average level", "criterion used to judge", "goal; target to aim for", "level; quality benchmark"], a: 0, e: "標準 = the typical or default norm (標準語 = standard language, 標準サイズ = standard size). 基準 is the reference point for judging; 標準 is the ordinary average." }
    ]
  },
  {
    id: "n2-0067", w: "元々", r: "もともと", m: "originally; from the start; by nature", c: "adv", lv: 1,
    ex: [{ jp: "彼は元々無口な人だった。", en: "He was a quiet person from the start." }],
    qs: [
      { t: "fitb", s: "この土地は＿＿＿＿田んぼだったが、今は住宅地になっている。", en: "This land was originally rice paddies, but now it's a residential area.", o: ["元々", "今さら", "そろそろ", "改めて"], a: 0, e: "元々 = originally, from the start (the state before any change). 今さら = now, at this late stage. そろそろ = soon, it's about time. 改めて = once more, formally/again." },
      { t: "meaning", s: "「元々」の意味は？", o: ["originally; from the start; by nature", "now, at this late stage", "soon; it's about time", "once more; anew; formally"], a: 0, e: "元々 points to how things were at the very beginning, before any change (元々の計画 = the original plan). Compare 本来 (as it ought to be by nature)." }
    ]
  },
  {
    id: "n2-0068", w: "改正", r: "かいせい", m: "revision; amendment (of laws, rules)", c: "noun", lv: 1,
    ex: [{ jp: "道路交通法が改正され、罰則が厳しくなった。", en: "The Road Traffic Act was revised, and penalties became stricter." }],
    qs: [
      { t: "fitb", s: "労働環境を守るため、法律の＿＿＿＿が求められている。", en: "To protect the work environment, revision of the law is being called for.", o: ["改正", "改善", "改革", "修正"], a: 0, e: "改正 = formal revision/amendment of laws or rules. 改善 = improvement of a bad situation. 改革 = reform (sweeping structural change). 修正 = correction/fixing of errors or text." },
      { t: "meaning", s: "「改正」の意味は？", o: ["revision; amendment of laws or rules", "improvement of a bad situation", "reform; sweeping structural change", "correction; fixing of errors"], a: 0, e: "改正 specifically means amending laws, rules, or schedules (法改正 = legal amendment, ダイヤ改正 = timetable revision). 修正 is for fixing mistakes in text." }
    ]
  },
  {
    id: "n2-0069", w: "基礎", r: "きそ", m: "foundation; basis; fundamentals; groundwork", c: "noun", lv: 1,
    ex: [{ jp: "何事も基礎をしっかり固めることが大切だ。", en: "In anything, it's important to firmly establish the fundamentals." }],
    qs: [
      { t: "fitb", s: "応用問題を解く前に、まず＿＿＿＿を復習しよう。", en: "Before tackling applied problems, let's first review the fundamentals.", o: ["基礎", "応用", "発展", "完成"], a: 0, e: "基礎 = the foundation/basics on which more is built. 応用 = application (using basics in practice). 発展 = development/advancement. 完成 = completion." },
      { t: "meaning", s: "「基礎」の意味は？", o: ["foundation; basis; fundamentals", "application; practical use", "development; advancement", "completion; finishing"], a: 0, e: "基礎 = the groundwork everything else rests on (基礎知識 = basic knowledge, 基礎工事 = foundation work). Its natural counterpart is 応用 (application)." }
    ]
  },
  {
    id: "n2-0070", w: "形式", r: "けいしき", m: "form; format; formality; style", c: "noun", lv: 1,
    ex: [{ jp: "レポートは決められた形式で提出してください。", en: "Please submit the report in the prescribed format." }],
    qs: [
      { t: "fitb", s: "彼の謝罪は＿＿＿＿だけで、誠意が感じられなかった。", en: "His apology was a mere formality; no sincerity could be felt.", o: ["形式", "内容", "本質", "実質"], a: 0, e: "形式 = outward form/format/formality. 内容 = content/substance. 本質 = essence/true nature. 実質 = substance/actual reality (as opposed to nominal)." },
      { t: "meaning", s: "「形式」の意味は？", o: ["form; format; formality; style", "content; substance", "essence; true nature", "substance; actual reality"], a: 0, e: "形式 is the outward shape or set form, often contrasted with content (形式的 = a mere formality, 形式を整える = put into proper form). Opposite of 内容/実質." }
    ]
  },
  {
    id: "n2-0071", w: "姿勢", r: "しせい", m: "posture; stance; attitude (toward something)", c: "noun", lv: 1,
    ex: [{ jp: "長時間悪い姿勢で座ると腰を痛める。", en: "Sitting in a bad posture for long hours hurts your back." }],
    qs: [
      { t: "fitb", s: "問題に真剣に取り組む彼の＿＿＿＿に好感を持った。", en: "I was favorably impressed by his serious attitude toward the problem.", o: ["姿勢", "態度", "性格", "立場"], a: 0, e: "姿勢 = physical posture, or one's stance/approach toward something. 態度 = attitude/manner shown in behavior. 性格 = personality. 立場 = position/standpoint (one's situation). 姿勢 and 態度 overlap, but 姿勢 stresses one's committed approach." },
      { t: "meaning", s: "「姿勢」の意味は？", o: ["posture; stance; attitude toward something", "attitude shown through behavior", "personality; character", "position; standpoint; situation"], a: 0, e: "姿勢 = bodily posture (姿勢がいい = good posture) and figuratively one's committed stance/approach (前向きな姿勢 = a positive attitude/approach)." }
    ]
  },
  {
    id: "n2-0072", w: "勝負", r: "しょうぶ", m: "match; contest; a game where win/loss is decided", c: "noun", lv: 1,
    ex: [{ jp: "最後まであきらめなければ、勝負はわからない。", en: "If you don't give up until the end, the outcome is anyone's guess." }],
    qs: [
      { t: "fitb", s: "実力が拮抗しており、なかなか＿＿＿＿がつかなかった。", en: "Their abilities were evenly matched, so the contest wouldn't be decided.", o: ["勝負", "試合", "競争", "対戦"], a: 0, e: "勝負 = a contest in which winning or losing is at stake (勝負がつく = the outcome is decided). 試合 = a (sports) match. 競争 = competition/rivalry. 対戦 = facing off against an opponent." },
      { t: "meaning", s: "「勝負」の意味は？", o: ["a contest where win/loss is decided", "a sports match", "competition; rivalry", "facing off against an opponent"], a: 0, e: "勝負 centers on the win-or-lose outcome (勝負を挑む = to challenge, 真剣勝負 = a serious showdown). Also used figuratively for a decisive moment (ここが勝負だ = this is the make-or-break point)." }
    ]
  },
  {
    id: "n2-0073", w: "発電", r: "はつでん", m: "electricity generation; power generation", c: "noun", lv: 1,
    ex: [{ jp: "この地域は風力で発電している。", en: "This region generates electricity from wind power." }],
    qs: [
      { t: "fitb", s: "太陽光＿＿＿＿は環境にやさしいと注目されている。", en: "Solar power generation is drawing attention as environmentally friendly.", o: ["発電", "電力", "充電", "停電"], a: 0, e: "発電 = generating electricity. 電力 = electric power (the energy itself). 充電 = charging a battery. 停電 = power outage/blackout." },
      { t: "meaning", s: "「発電」の意味は？", o: ["electricity/power generation", "electric power (the energy)", "charging a battery", "power outage; blackout"], a: 0, e: "発電 = producing electricity (発電所 = power plant, 火力発電 = thermal power generation). 電力 is the resulting power; 充電 is charging a device." }
    ]
  },
  {
    id: "n2-0074", w: "方針", r: "ほうしん", m: "policy; course of action; guiding principle", c: "noun", lv: 1,
    ex: [{ jp: "会社の方針に従って業務を進める。", en: "We carry out our work in line with company policy." }],
    qs: [
      { t: "fitb", s: "政府は新たな経済＿＿＿＿を打ち出した。", en: "The government rolled out a new economic policy.", o: ["方針", "方法", "方向", "目的"], a: 0, e: "方針 = a guiding policy/course of action. 方法 = method/means (how to do it). 方向 = direction (which way). 目的 = purpose/objective (the goal)." },
      { t: "meaning", s: "「方針」の意味は？", o: ["policy; course of action; guiding principle", "method; means of doing", "direction; which way", "purpose; objective"], a: 0, e: "方針 is the basic direction or policy guiding decisions (基本方針 = basic policy, 方針を決める = decide on a course of action). 方法 is the concrete how-to." }
    ]
  },
  {
    id: "n2-0075", w: "一応", r: "いちおう", m: "for now; tentatively; just in case; more or less", c: "adv", lv: 1,
    ex: [{ jp: "一応、念のために確認しておきます。", en: "Just to be safe, I'll check it for now." }],
    qs: [
      { t: "fitb", s: "完璧ではないが、＿＿＿＿最後まで仕上げた。", en: "It's not perfect, but I more or less finished it.", o: ["一応", "完全に", "やはり", "ますます"], a: 0, e: "一応 = tentatively/more or less/just in case (done to a minimal or provisional degree). 完全に = completely. やはり = as expected/after all. ますます = increasingly, more and more." },
      { t: "meaning", s: "「一応」の意味は？", o: ["for now; tentatively; more or less; just in case", "completely; perfectly", "as expected; after all", "increasingly; more and more"], a: 0, e: "一応 signals that something is done provisionally or to a minimal extent (一応できた = it's more or less done, 一応聞いてみる = ask just in case)." }
    ]
  },
  {
    id: "n2-0076", w: "どうせ", r: "どうせ", m: "anyway; in any case; (resignedly) after all", c: "adv", lv: 1,
    ex: [{ jp: "どうせ間に合わないから、急いでも無駄だ。", en: "We won't make it anyway, so there's no point rushing." }],
    qs: [
      { t: "fitb", s: "＿＿＿＿やるなら、最後まで全力で取り組もう。", en: "If we're going to do it anyway, let's give it our all to the end.", o: ["どうせ", "どうか", "どうにか", "どうやら"], a: 0, e: "どうせ = anyway/in any case (often with a resigned or fatalistic tone). どうか = please (request); somehow. どうにか = somehow or other (managing). どうやら = apparently, it seems." },
      { t: "meaning", s: "「どうせ」の意味は？", o: ["anyway; in any case (often resigned)", "please; somehow (in requests)", "somehow or other; manage to", "apparently; it seems"], a: 0, e: "どうせ carries a 'no matter what' or resigned nuance (どうせ無理だ = it's hopeless anyway). When paired with a positive resolve it means 'since we're doing it regardless...'" }
    ]
  },
  {
    id: "n2-0077", w: "公共", r: "こうきょう", m: "public; communal; for the community", c: "noun", lv: 1,
    ex: [{ jp: "公共の場所では静かにしましょう。", en: "Let's be quiet in public places." }],
    qs: [
      { t: "fitb", s: "図書館や公園などの＿＿＿＿施設は誰でも利用できる。", en: "Public facilities such as libraries and parks can be used by anyone.", o: ["公共", "公開", "公式", "公平"], a: 0, e: "公共 = public/communal (belonging to society at large). 公開 = making something open to the public (releasing/disclosing). 公式 = official/formal. 公平 = fair/impartial." },
      { t: "meaning", s: "「公共」の意味は？", o: ["public; communal; for the community", "open to the public; disclosed", "official; formal", "fair; impartial"], a: 0, e: "公共 describes things shared by or serving the general public (公共交通機関 = public transport, 公共料金 = utility charges)." }
    ]
  },
  {
    id: "n2-0078", w: "成立", r: "せいりつ", m: "formation; establishment; coming into effect (deal, law)", c: "noun", lv: 1,
    ex: [{ jp: "両者の合意により、契約が成立した。", en: "With both parties' agreement, the contract was concluded." }],
    qs: [
      { t: "fitb", s: "新しい法律が国会で可決され、＿＿＿＿した。", en: "The new law was passed by the Diet and came into effect.", o: ["成立", "成長", "完成", "達成"], a: 0, e: "成立 = an agreement/law/deal coming into being or taking effect. 成長 = growth/maturing. 完成 = completion of a物 (object/project). 達成 = achieving a goal." },
      { t: "meaning", s: "「成立」の意味は？", o: ["formation; establishment; coming into effect", "growth; maturing", "completion of an object or project", "achievement of a goal"], a: 0, e: "成立 = the point at which something abstract is established or concluded (契約成立 = a deal is struck, 法案成立 = a bill becomes law, 取引成立 = transaction closed)." }
    ]
  },
  {
    id: "n2-0079", w: "統一", r: "とういつ", m: "unification; unity; standardization; consolidation", c: "noun", lv: 1,
    ex: [{ jp: "資料のフォーマットを統一してください。", en: "Please standardize the format of the documents." }],
    qs: [
      { t: "fitb", s: "分裂していた国が一つに＿＿＿＿された。", en: "The divided country was unified into one.", o: ["統一", "統合", "結合", "団結"], a: 0, e: "統一 = unifying into one / standardizing to be consistent. 統合 = integrating/merging separate things into a whole. 結合 = bonding/joining together. 団結 = people uniting in solidarity." },
      { t: "meaning", s: "「統一」の意味は？", o: ["unification; making uniform; standardizing", "integration; merging into a whole", "bonding; physically joining", "solidarity; people uniting"], a: 0, e: "統一 means bringing things together into one or making them consistent (天下統一 = unifying the realm, デザインを統一する = unify the design). 統合 stresses merging separate units." }
    ]
  },
  {
    id: "n2-0080", w: "民間", r: "みんかん", m: "private sector; civilian; non-governmental", c: "noun", lv: 1,
    ex: [{ jp: "そのサービスは民間企業によって運営されている。", en: "That service is run by a private company." }],
    qs: [
      { t: "fitb", s: "宇宙開発に＿＿＿＿企業が次々と参入している。", en: "Private companies are entering the space-development field one after another.", o: ["民間", "国営", "公共", "官庁"], a: 0, e: "民間 = private sector / civilian (non-government). 国営 = state-run/government-operated. 公共 = public/communal. 官庁 = government office/agency." },
      { t: "meaning", s: "「民間」の意味は？", o: ["private sector; civilian; non-governmental", "state-run; government-operated", "public; communal", "government office; agency"], a: 0, e: "民間 refers to the private, non-governmental sphere (民間企業 = private company, 民間人 = civilian). Its opposite is 官 (government) — e.g. 官民連携 = public-private partnership." }
    ]
  },
  {
    id: "n2-0081", w: "改めて", r: "あらためて", m: "again; anew; on another occasion; formally", c: "adv", lv: 1,
    ex: [{ jp: "詳細については改めてご連絡いたします。", en: "I will contact you again regarding the details." }],
    qs: [
      { t: "fitb", s: "彼の言葉を聞いて、平和の大切さを＿＿＿＿感じた。", en: "Hearing his words, I felt anew the importance of peace.", o: ["改めて", "初めて", "前もって", "今ごろ"], a: 0, e: "改めて = once again/anew (often freshly reaffirming), or formally on another occasion. 初めて = for the first time. 前もって = in advance/beforehand. 今ごろ = around now; at this late point." },
      { t: "meaning", s: "「改めて」の意味は？", o: ["again; anew; freshly; on another occasion", "for the first time", "in advance; beforehand", "around now; at this late point"], a: 0, e: "改めて means doing something over again or freshly, often more formally or with renewed feeling (改めて考える = reconsider, 改めてお礼を = thank you once again)." }
    ]
  },
  {
    id: "n2-0082", w: "一定", r: "いってい", m: "fixed; constant; set; a certain (level)", c: "naadj", lv: 1,
    ex: [{ jp: "室温を一定に保つことが重要だ。", en: "It's important to keep the room temperature constant." }],
    qs: [
      { t: "fitb", s: "この仕事には＿＿＿＿の経験が求められる。", en: "This job requires a certain (set) level of experience.", o: ["一定", "相当", "余分", "莫大"], a: 0, e: "一定 = fixed/constant, or 'a certain set amount' (一定の〜). 相当 = considerable; corresponding to. 余分 = extra/surplus. 莫大 = enormous/vast." },
      { t: "meaning", s: "「一定」の意味は？", o: ["fixed; constant; a certain set level", "considerable; corresponding", "extra; surplus", "enormous; vast"], a: 0, e: "一定 means unchanging/constant (一定の速度 = constant speed) or a defined fixed amount (一定の条件 = certain set conditions)." }
    ]
  },
  {
    id: "n2-0083", w: "回答", r: "かいとう", m: "reply; answer; response (to a question or survey)", c: "noun", lv: 1,
    ex: [{ jp: "アンケートへのご回答ありがとうございました。", en: "Thank you for your responses to the survey." }],
    qs: [
      { t: "fitb", s: "問い合わせに対する正式な＿＿＿＿は来週届く予定だ。", en: "The official reply to the inquiry is scheduled to arrive next week.", o: ["回答", "解答", "返事", "応答"], a: 0, e: "回答 = a reply/response to a question, inquiry, or survey. 解答 = the answer/solution to a problem (math, quiz). 返事 = a reply (casual, to being called or to a message). 応答 = response (real-time, e.g. on a radio)." },
      { t: "meaning", s: "「回答」の意味は？", o: ["reply; response to a question or survey", "the answer/solution to a problem", "a casual reply to a message or call", "real-time response"], a: 0, e: "回答 is a formal reply to an inquiry or survey (回答用紙 = answer sheet for a questionnaire). 解答 is reserved for solving problems with a correct answer (試験の解答 = exam answers)." }
    ]
  },
  {
    id: "n2-0084", w: "普及", r: "ふきゅう", m: "spread; diffusion; becoming widespread", c: "noun", lv: 1,
    ex: [{ jp: "スマートフォンは急速に普及した。", en: "Smartphones spread rapidly." }],
    qs: [
      { t: "fitb", s: "再生可能エネルギーの＿＿＿＿が世界中で進んでいる。", en: "The spread of renewable energy is advancing worldwide.", o: ["普及", "拡大", "流行", "発展"], a: 0, e: "普及 = becoming widely adopted/widespread among people. 拡大 = expansion/enlargement in scale. 流行 = a trend/fashion (often temporary). 発展 = development/advancement." },
      { t: "meaning", s: "「普及」の意味は？", o: ["spread; becoming widespread among people", "expansion; enlargement in scale", "a trend; temporary fashion", "development; advancement"], a: 0, e: "普及 emphasizes wide adoption so something becomes common (普及率 = penetration rate, インターネットの普及 = spread of the internet). Differs from 流行 (a passing fad)." }
    ]
  },
  {
    id: "n2-0085", w: "削除", r: "さくじょ", m: "deletion; removal; erasing (text, data)", c: "noun", lv: 1,
    ex: [{ jp: "不要なファイルを削除して容量を空けた。", en: "I deleted unnecessary files to free up space." }],
    qs: [
      { t: "fitb", s: "投稿が規約に違反していたため、運営により＿＿＿＿された。", en: "Because the post violated the rules, it was deleted by the administrators.", o: ["削除", "追加", "修正", "省略"], a: 0, e: "削除 = deleting/removing entirely. 追加 = adding (the opposite). 修正 = correcting/editing. 省略 = omitting/abbreviating (leaving out, often for brevity)." },
      { t: "meaning", s: "「削除」の意味は？", o: ["deletion; removal; erasing", "addition; adding on", "correction; editing", "omission; abbreviation"], a: 0, e: "削除 means to delete or strike out (データを削除 = delete data, 削除キー = delete key). Its opposite is 追加 (add); 省略 means leaving out for brevity." }
    ]
  },
  {
    id: "n2-0086", w: "外部", r: "がいぶ", m: "the outside; external; outside party", c: "noun", lv: 1,
    ex: [{ jp: "この情報を外部に漏らしてはいけない。", en: "This information must not be leaked to outside parties." }],
    qs: [
      { t: "fitb", s: "専門知識が足りないので、＿＿＿＿の業者に作業を委託した。", en: "Since we lacked expertise, we outsourced the work to an external contractor.", o: ["外部", "内部", "周囲", "表面"], a: 0, e: "外部 = the outside/external party (beyond an organization or boundary). 内部 = the inside/internal (the opposite). 周囲 = surroundings, those around. 表面 = surface." },
      { t: "meaning", s: "「外部」の意味は？", o: ["the outside; external; outside party", "the inside; internal", "surroundings; those around one", "surface; outer face"], a: 0, e: "外部 refers to what is outside an organization or system (外部委託 = outsourcing, 外部からの侵入 = intrusion from outside). Opposite of 内部." }
    ]
  },
  {
    id: "n2-0087", w: "相互", r: "そうご", m: "mutual; reciprocal; each other", c: "noun", lv: 1,
    ex: [{ jp: "二国間の相互理解を深める必要がある。", en: "We need to deepen mutual understanding between the two countries." }],
    qs: [
      { t: "fitb", s: "チームの成功には、メンバー間の＿＿＿＿の信頼が欠かせない。", en: "Mutual trust among members is essential to the team's success.", o: ["相互", "個別", "一方", "対等"], a: 0, e: "相互 = mutual/reciprocal (both sides toward each other). 個別 = individual/separate. 一方 = one side only; on the other hand. 対等 = equal footing/on par." },
      { t: "meaning", s: "「相互」の意味は？", o: ["mutual; reciprocal; each other", "individual; separate; case-by-case", "one side only", "equal footing; on par"], a: 0, e: "相互 indicates an action or relationship going both ways (相互理解 = mutual understanding, 相互作用 = interaction). Compare 一方的 (one-sided)." }
    ]
  },
  {
    id: "n2-0088", w: "期限", r: "きげん", m: "deadline; time limit; term; expiration", c: "noun", lv: 1,
    ex: [{ jp: "申し込みの期限は今月末までです。", en: "The application deadline is the end of this month." }],
    qs: [
      { t: "fitb", s: "レポートの提出＿＿＿＿が明日に迫っている。", en: "The deadline for submitting the report is coming up tomorrow.", o: ["期限", "期間", "時期", "期待"], a: 0, e: "期限 = a deadline or cutoff point (the limit by which). 期間 = a span/duration of time. 時期 = a time/season/period (when). 期待 = expectation/hope." },
      { t: "meaning", s: "「期限」の意味は？", o: ["deadline; time limit; expiration", "span; duration of time", "a time; season; period (when)", "expectation; hope"], a: 0, e: "期限 marks the cutoff or expiry point (締め切り期限 = deadline, 賞味期限 = best-before date, 期限切れ = expired). 期間 is the length of time instead." }
    ]
  },
  {
    id: "n2-0089", w: "申請", r: "しんせい", m: "application; formal request; petition (to an authority)", c: "noun", lv: 1,
    ex: [{ jp: "ビザの申請には多くの書類が必要だ。", en: "Applying for a visa requires many documents." }],
    qs: [
      { t: "fitb", s: "補助金を受け取るには、市役所で＿＿＿＿の手続きをする。", en: "To receive the subsidy, you complete the application procedure at city hall.", o: ["申請", "応募", "提案", "依頼"], a: 0, e: "申請 = a formal application/request to an authority (often official). 応募 = applying in response to a recruitment/call. 提案 = a proposal/suggestion. 依頼 = a request to someone to do something." },
      { t: "meaning", s: "「申請」の意味は？", o: ["application; formal request to an authority", "applying in response to a recruitment call", "proposal; suggestion", "a request asking someone to do something"], a: 0, e: "申請 is a formal request submitted to an official body (申請書 = application form, ビザ申請 = visa application). 応募 is responding to a posted opening." }
    ]
  },
  {
    id: "n2-0090", w: "低下", r: "ていか", m: "decline; drop; deterioration; fall (in level)", c: "noun", lv: 1,
    ex: [{ jp: "睡眠不足は集中力の低下を招く。", en: "Lack of sleep leads to a decline in concentration." }],
    qs: [
      { t: "fitb", s: "年齢とともに体力の＿＿＿＿を感じるようになった。", en: "With age, I've come to feel a decline in my physical strength.", o: ["低下", "向上", "上昇", "減少"], a: 0, e: "低下 = a drop in level/quality/ability. 向上 = improvement/rising (the opposite). 上昇 = a rise (in figures, temperature, price). 減少 = decrease in quantity/number." },
      { t: "meaning", s: "「低下」の意味は？", o: ["decline; drop; deterioration in level", "improvement; betterment", "a rise (in figures or temperature)", "decrease in quantity or number"], a: 0, e: "低下 = a fall in level, quality, or ability (品質の低下 = quality decline, 気温低下 = temperature drop). Opposite of 向上 (improvement); 減少 is for countable amounts." }
    ]
  },
  {
    id: "n2-0091", w: "高級", r: "こうきゅう", m: "high-class; luxury; high-grade", c: "naadj", lv: 1,
    ex: [{ jp: "記念日に高級なレストランで食事をした。", en: "We dined at a high-class restaurant for our anniversary." }],
    qs: [
      { t: "fitb", s: "この時計は＿＿＿＿ブランドのもので、とても高い。", en: "This watch is from a luxury brand and very expensive.", o: ["高級", "高度", "上等", "貴重"], a: 0, e: "高級 = high-class/luxury (in grade and price). 高度 = advanced/high-level (technical). 上等 = first-rate quality (more old-fashioned). 貴重 = precious/valuable (rare)." },
      { t: "meaning", s: "「高級」の意味は？", o: ["high-class; luxury; high-grade", "advanced; high-level (technical)", "precious; rare and valuable", "altitude; height"], a: 0, e: "高級 describes something expensive and of high grade (高級車 = luxury car, 高級住宅街 = upscale neighborhood)." }
    ]
  },
  {
    id: "n2-0092", w: "製作", r: "せいさく", m: "manufacture; production (of goods, machinery, films)", c: "noun", lv: 1,
    ex: [{ jp: "この工場では精密機械を製作している。", en: "This factory manufactures precision machinery." }],
    qs: [
      { t: "fitb", s: "新しい部品の＿＿＿＿には専門の設備が必要だ。", en: "Manufacturing the new parts requires specialized equipment.", o: ["製作", "作成", "創作", "工作"], a: 0, e: "製作 = manufacturing goods/machinery (also films). 作成 = drafting documents/plans. 創作 = creating original artistic works. 工作 = handicraft; (also) maneuvering/scheming." },
      { t: "meaning", s: "「製作」の意味は？", o: ["manufacture; production of goods or machinery", "drafting documents or plans", "original artistic creation", "handicraft; maneuvering"], a: 0, e: "製作 is making physical products or films (映画製作 = film production, 製作所 = manufacturing works). Compare 作成 (documents) and 制作 (creative/media works) — all read せいさく except 作成." }
    ]
  },
  {
    id: "n2-0093", w: "直後", r: "ちょくご", m: "immediately after; right after", c: "noun", lv: 1,
    ex: [{ jp: "地震の直後、人々は外へ避難した。", en: "Immediately after the earthquake, people evacuated outside." }],
    qs: [
      { t: "fitb", s: "卒業の＿＿＿＿に就職して、海外へ赴任した。", en: "Right after graduating, he got a job and was posted overseas.", o: ["直後", "直前", "以後", "当初"], a: 0, e: "直後 = immediately after. 直前 = immediately before (the opposite). 以後 = after/from then on (broader, ongoing). 当初 = at the beginning/initially." },
      { t: "meaning", s: "「直後」の意味は？", o: ["immediately after; right after", "immediately before", "after; from then on (ongoing)", "at the beginning; initially"], a: 0, e: "直後 marks the moment right after an event (事故の直後 = right after the accident). Opposite of 直前 (just before)." }
    ]
  },
  {
    id: "n2-0094", w: "美容", r: "びよう", m: "beauty care; cosmetic care (of skin, figure)", c: "noun", lv: 1,
    ex: [{ jp: "彼女は美容のために毎朝ヨガをしている。", en: "She does yoga every morning for beauty care." }],
    qs: [
      { t: "fitb", s: "十分な睡眠は健康にも＿＿＿＿にも良いとされている。", en: "Sufficient sleep is said to be good for both health and beauty.", o: ["美容", "美術", "化粧", "整形"], a: 0, e: "美容 = beauty care (skin, figure, grooming). 美術 = fine art. 化粧 = makeup/cosmetics (the act). 整形 = cosmetic/plastic surgery." },
      { t: "meaning", s: "「美容」の意味は？", o: ["beauty care; cosmetic care", "fine art", "makeup; applying cosmetics", "cosmetic surgery"], a: 0, e: "美容 covers care for one's looks and figure (美容院 = beauty salon, 美容師 = hairdresser, 美容液 = beauty serum)." }
    ]
  },
  {
    id: "n2-0095", w: "平日", r: "へいじつ", m: "weekday; ordinary (non-holiday) day", c: "noun", lv: 1,
    ex: [{ jp: "平日は人が少ないので、ゆっくり買い物ができる。", en: "There are fewer people on weekdays, so I can shop at a relaxed pace." }],
    qs: [
      { t: "fitb", s: "この美術館は＿＿＿＿のみ開館し、週末は休みだ。", en: "This museum opens only on weekdays and is closed on weekends.", o: ["平日", "休日", "祝日", "連休"], a: 0, e: "平日 = weekday (ordinary working day). 休日 = day off/holiday. 祝日 = a public/national holiday. 連休 = consecutive holidays (a long weekend)." },
      { t: "meaning", s: "「平日」の意味は？", o: ["weekday; ordinary working day", "a day off; holiday", "a national/public holiday", "consecutive holidays; long weekend"], a: 0, e: "平日 means a regular weekday (Mon–Fri), as opposed to 休日 (days off) or 祝日 (public holidays)." }
    ]
  },
  {
    id: "n2-0096", w: "全身", r: "ぜんしん", m: "the whole body; full-length", c: "noun", lv: 1,
    ex: [{ jp: "激しい運動の後、全身が痛い。", en: "After intense exercise, my whole body aches." }],
    qs: [
      { t: "fitb", s: "彼は＿＿＿＿の力を込めてロープを引いた。", en: "He pulled the rope with his whole body's strength.", o: ["全身", "全体", "全員", "全部"], a: 0, e: "全身 = the whole body (physical). 全体 = the whole/entirety (of a thing or group). 全員 = all members/everyone. 全部 = all of it (every part)." },
      { t: "meaning", s: "「全身」の意味は？", o: ["the whole body; full-length", "the whole; the entirety", "all members; everyone", "all of it; every part"], a: 0, e: "全身 specifically refers to the entire body (全身運動 = full-body exercise, 全身鏡 = full-length mirror)." }
    ]
  },
  {
    id: "n2-0097", w: "全力", r: "ぜんりょく", m: "all one's strength; full effort; one's utmost", c: "noun", lv: 1,
    ex: [{ jp: "最後の試合に全力を尽くした。", en: "I gave my all in the final match." }],
    qs: [
      { t: "fitb", s: "目標達成のため、チーム＿＿＿＿で取り組んでいる。", en: "We're tackling it with the whole team's full effort to reach the goal.", o: ["全力", "努力", "実力", "勢力"], a: 0, e: "全力 = all one's strength/full effort (全力を尽くす = do one's utmost). 努力 = effort/diligence (ongoing). 実力 = real ability/competence. 勢力 = power/influence (of a force or group)." },
      { t: "meaning", s: "「全力」の意味は？", o: ["all one's strength; full effort; utmost", "effort; diligence", "real ability; competence", "power; influence of a force"], a: 0, e: "全力 = giving everything you've got (全力疾走 = running at full speed, 全力投球 = giving it your all)." }
    ]
  },
  {
    id: "n2-0098", w: "高度", r: "こうど", m: "advanced; high-level; (also) altitude", c: "naadj", lv: 1,
    ex: [{ jp: "この治療には高度な技術が求められる。", en: "This treatment requires advanced technical skill." }],
    qs: [
      { t: "fitb", s: "現代社会は＿＿＿＿に情報化が進んでいる。", en: "Modern society has become highly advanced in information technology.", o: ["高度", "高級", "高等", "高価"], a: 0, e: "高度 = advanced/high-level (高度な技術), also altitude. 高級 = luxury/high-class. 高等 = higher (高等教育 = higher education). 高価 = expensive/costly." },
      { t: "meaning", s: "「高度」の意味は？", o: ["advanced; high-level; altitude", "luxury; high-class", "higher (as in higher education)", "expensive; costly"], a: 0, e: "高度 means advanced/sophisticated (高度経済成長 = rapid economic growth) and literally altitude (飛行機の高度 = the plane's altitude)." }
    ]
  },
  {
    id: "n2-0099", w: "集合", r: "しゅうごう", m: "gathering; assembly; meeting up (at a set place/time)", c: "noun", lv: 1,
    ex: [{ jp: "明日は駅前に八時集合です。", en: "Tomorrow we meet up in front of the station at eight." }],
    qs: [
      { t: "fitb", s: "遠足の＿＿＿＿場所は学校の正門前です。", en: "The meeting point for the field trip is in front of the school's main gate.", o: ["集合", "集中", "集会", "結集"], a: 0, e: "集合 = gathering/meeting up at a set place and time. 集中 = concentration/focusing. 集会 = an assembly/rally (an organized meeting). 結集 = rallying/mustering together (forces, effort)." },
      { t: "meaning", s: "「集合」の意味は？", o: ["gathering; meeting up at a set place/time", "concentration; focusing", "an assembly; a rally", "rallying; mustering forces"], a: 0, e: "集合 = people coming together at an appointed spot (集合時間 = meeting time, 集合場所 = assembly point). Opposite is 解散 (dispersing)." }
    ]
  },
  {
    id: "n2-0100", w: "項目", r: "こうもく", m: "item; entry; category (in a list or form)", c: "noun", lv: 1,
    ex: [{ jp: "申込書のすべての項目に記入してください。", en: "Please fill in all the items on the application form." }],
    qs: [
      { t: "fitb", s: "点検すべき＿＿＿＿をリストにまとめておいた。", en: "I compiled into a list the items to be inspected.", o: ["項目", "件数", "番号", "種類"], a: 0, e: "項目 = an item/entry in a list or set of categories. 件数 = the number of cases/items (a count). 番号 = a number (identifier). 種類 = type/kind/variety." },
      { t: "meaning", s: "「項目」の意味は？", o: ["item; entry; category in a list", "the number of cases (a count)", "a number; identifier", "type; kind; variety"], a: 0, e: "項目 is one labeled item or heading among several (チェック項目 = checklist items, 必須項目 = required fields)." }
    ]
  },
  {
    id: "n2-0101", w: "創作", r: "そうさく", m: "creative writing; original creation (art, fiction)", c: "noun", lv: 1,
    ex: [{ jp: "彼は趣味で小説の創作を続けている。", en: "He continues creative writing of novels as a hobby." }],
    qs: [
      { t: "fitb", s: "その話は事実ではなく、作家の＿＿＿＿だった。", en: "That story wasn't fact but the author's invention.", o: ["創作", "模倣", "翻訳", "編集"], a: 0, e: "創作 = original creation/invention (art, fiction); can also imply a fabrication. 模倣 = imitation/copying. 翻訳 = translation. 編集 = editing/compiling." },
      { t: "meaning", s: "「創作」の意味は？", o: ["original creation; creative writing; invention", "imitation; copying", "translation", "editing; compiling"], a: 0, e: "創作 emphasizes creating something original from imagination (創作料理 = original/inventive cuisine, 創作活動 = creative work). Can also mean a made-up story." }
    ]
  },
  {
    id: "n2-0102", w: "定期券", r: "ていきけん", m: "commuter pass; season ticket", c: "noun", lv: 1,
    ex: [{ jp: "毎月、電車の定期券を買っている。", en: "I buy a train commuter pass every month." }],
    qs: [
      { t: "fitb", s: "＿＿＿＿があれば、区間内は何度でも乗り降り自由だ。", en: "With a commuter pass, you can get on and off freely within the section as often as you like.", o: ["定期券", "回数券", "乗車券", "整理券"], a: 0, e: "定期券 = a pass valid for a fixed period on a set route. 回数券 = a booklet of multiple-ride tickets. 乗車券 = a single (boarding) ticket. 整理券 = a numbered ticket for boarding order/queue." },
      { t: "meaning", s: "「定期券」の意味は？", o: ["commuter pass; season ticket", "a booklet of multiple-ride tickets", "a single boarding ticket", "a numbered queue/boarding ticket"], a: 0, e: "定期券 (often shortened to 定期) lets you travel a fixed route freely for a set period — typical for commuting (通勤定期, 通学定期)." }
    ]
  },
  {
    id: "n2-0103", w: "平気", r: "へいき", m: "unconcerned; fine; not bothered; calm", c: "naadj", lv: 1,
    ex: [{ jp: "彼は寒さには平気らしい。", en: "He seems to be fine with the cold." }],
    qs: [
      { t: "fitb", s: "ひどいことを言われても、彼女は＿＿＿＿な顔をしていた。", en: "Even when told something cruel, she kept an unbothered expression.", o: ["平気", "不安", "迷惑", "退屈"], a: 0, e: "平気 = unconcerned/unfazed/fine with it. 不安 = anxious/uneasy. 迷惑 = bothered/troubled (by a nuisance). 退屈 = bored." },
      { t: "meaning", s: "「平気」の意味は？", o: ["unconcerned; fine; not bothered; calm", "anxious; uneasy", "troubled by a nuisance", "bored"], a: 0, e: "平気 means being unfazed or perfectly fine (平気で嘘をつく = lie without a qualm, 〜しても平気 = it's fine even if ~)." }
    ]
  },
  {
    id: "n2-0104", w: "幼稚園", r: "ようちえん", m: "kindergarten; preschool", c: "noun", lv: 1,
    ex: [{ jp: "娘は今年から幼稚園に通い始めた。", en: "My daughter started attending kindergarten this year." }],
    qs: [
      { t: "fitb", s: "＿＿＿＿の子どもたちが先生と一緒に歌っている。", en: "The kindergarten children are singing with their teacher.", o: ["幼稚園", "小学校", "保育園", "大学院"], a: 0, e: "幼稚園 = kindergarten (educational, age ~3–6, under MEXT). 小学校 = elementary school. 保育園 = day-care nursery (welfare-based, for younger children of working parents). 大学院 = graduate school." },
      { t: "meaning", s: "「幼稚園」の意味は？", o: ["kindergarten; preschool", "elementary school", "day-care nursery", "graduate school"], a: 0, e: "幼稚園 is preschool education for ages roughly 3–6. Distinct from 保育園, which is welfare day-care for children of working parents." }
    ]
  },
  {
    id: "n2-0105", w: "さっさと", r: "さっさと", m: "quickly; promptly; without dawdling", c: "adv", lv: 1,
    ex: [{ jp: "用事を済ませて、さっさと帰ろう。", en: "Let's finish our errands and head home quickly." }],
    qs: [
      { t: "fitb", s: "ぐずぐずしないで、＿＿＿＿支度をしなさい。", en: "Stop dawdling and get ready quickly.", o: ["さっさと", "のんびり", "うっかり", "こっそり"], a: 0, e: "さっさと = quickly, briskly, without wasting time (often urging). のんびり = leisurely/relaxed. うっかり = carelessly/absent-mindedly. こっそり = secretly/stealthily." },
      { t: "meaning", s: "「さっさと」の意味は？", o: ["quickly; promptly; without dawdling", "leisurely; in a relaxed way", "carelessly; absent-mindedly", "secretly; stealthily"], a: 0, e: "さっさと conveys doing something briskly and without delay, often impatiently (さっさとしなさい = hurry up and do it)." }
    ]
  },
  {
    id: "n2-0106", w: "実績", r: "じっせき", m: "track record; achievements; actual results", c: "noun", lv: 1,
    ex: [{ jp: "彼女は営業で確かな実績を上げている。", en: "She has a solid track record in sales." }],
    qs: [
      { t: "fitb", s: "口先だけでなく、これまでの＿＿＿＿で評価されるべきだ。", en: "He should be judged by his actual track record, not just talk.", o: ["実績", "実力", "業績", "成績"], a: 0, e: "実績 = a proven track record / actual results achieved. 実力 = real ability/competence (potential). 業績 = (business) performance/accomplishments of a company. 成績 = grades/marks; results of an evaluation." },
      { t: "meaning", s: "「実績」の意味は？", o: ["track record; achievements; actual results", "real ability; competence", "business performance of a company", "grades; marks; evaluation results"], a: 0, e: "実績 is the concrete record of what someone has actually accomplished (実績がある = has a proven track record). 実力 is ability not yet demonstrated." }
    ]
  },
  {
    id: "n2-0107", w: "受験", r: "じゅけん", m: "taking an exam; sitting an entrance examination", c: "noun", lv: 1,
    ex: [{ jp: "息子は来年、高校を受験する。", en: "My son will sit the high-school entrance exam next year." }],
    qs: [
      { t: "fitb", s: "＿＿＿＿勉強のために、夜遅くまで塾に通っている。", en: "He goes to cram school until late at night to study for entrance exams.", o: ["受験", "受付", "受講", "受信"], a: 0, e: "受験 = taking an entrance/qualifying exam. 受付 = reception/front desk. 受講 = taking/attending a course. 受信 = receiving (a signal, message)." },
      { t: "meaning", s: "「受験」の意味は？", o: ["taking an entrance exam; sitting an exam", "reception; front desk", "attending a course/lecture", "receiving a signal or message"], a: 0, e: "受験 specifically means sitting for an examination, usually an entrance exam (受験生 = exam candidate, 大学受験 = university entrance exams)." }
    ]
  },
  {
    id: "n2-0108", w: "余計", r: "よけい", m: "excessive; unnecessary; more than needed; all the more", c: "naadj", lv: 1,
    ex: [{ jp: "余計なことを言って、彼を怒らせてしまった。", en: "I said something unnecessary and made him angry." }],
    qs: [
      { t: "fitb", s: "手伝うつもりが、かえって＿＿＿＿な手間を増やしてしまった。", en: "I meant to help, but I only created extra, unnecessary work.", o: ["余計", "余分", "十分", "適当"], a: 0, e: "余計 = unnecessary/uncalled-for, or 'all the more' as an adverb. 余分 = surplus/extra (a spare amount, more neutral). 十分 = sufficient/enough. 適当 = suitable; (also) half-hearted/random." },
      { t: "meaning", s: "「余計」の意味は？", o: ["excessive; unnecessary; uncalled-for; all the more", "surplus; spare; extra (neutral)", "sufficient; enough", "suitable; or half-hearted"], a: 0, e: "余計 often means superfluous or uncalled-for (余計なお世話 = none of your business). As an adverb it means 'all the more' (余計に悲しい = even sadder)." }
    ]
  },
  {
    id: "n2-0109", w: "回数", r: "かいすう", m: "number of times; frequency; count", c: "noun", lv: 1,
    ex: [{ jp: "練習の回数を増やしたら、上達した。", en: "When I increased the number of practice sessions, I improved." }],
    qs: [
      { t: "fitb", s: "薬を飲む＿＿＿＿は一日三回と決められている。", en: "The number of times to take the medicine is set at three per day.", o: ["回数", "人数", "数量", "時間"], a: 0, e: "回数 = how many times something occurs (a count of occurrences). 人数 = number of people. 数量 = quantity/amount. 時間 = time/hours." },
      { t: "meaning", s: "「回数」の意味は？", o: ["number of times; frequency", "number of people", "quantity; amount", "time; hours"], a: 0, e: "回数 counts repetitions or occurrences (回数を重ねる = do it many times over, 回数券 = a book of ride tickets)." }
    ]
  },
  {
    id: "n2-0110", w: "天皇", r: "てんのう", m: "the Emperor of Japan", c: "noun", lv: 1,
    ex: [{ jp: "天皇は日本国の象徴とされている。", en: "The Emperor is regarded as the symbol of the State of Japan." }],
    qs: [
      { t: "fitb", s: "新しい＿＿＿＿の即位を祝う式典が行われた。", en: "A ceremony was held to celebrate the new Emperor's enthronement.", o: ["天皇", "首相", "大統領", "将軍"], a: 0, e: "天皇 = the Emperor of Japan (hereditary, a symbol of the state). 首相 = prime minister (head of government). 大統領 = president (of a republic). 将軍 = shogun (historical military ruler)." },
      { t: "meaning", s: "「天皇」の意味は？", o: ["the Emperor of Japan", "the prime minister", "the president of a republic", "a shogun; military ruler"], a: 0, e: "天皇 refers to Japan's hereditary emperor, defined in the constitution as the symbol of the state (天皇陛下 = His Majesty the Emperor)." }
    ]
  },
  {
    id: "n2-0111", w: "懐かしい", r: "なつかしい", m: "nostalgic; dear; fondly remembered", c: "iadj", lv: 1,
    ex: [{ jp: "この曲を聞くと、学生時代を懐かしく思い出す。", en: "Hearing this song, I fondly recall my student days." }],
    qs: [
      { t: "fitb", s: "古いアルバムを見て、＿＿＿＿気持ちになった。", en: "Looking at the old album, I felt nostalgic.", o: ["懐かしい", "羨ましい", "騒がしい", "頼もしい"], a: 0, e: "懐かしい = nostalgic, fondly missed. 羨ましい = envious. 騒がしい = noisy/rowdy. 頼もしい = reliable/dependable (reassuring)." },
      { t: "meaning", s: "「懐かしい」の意味は？", o: ["nostalgic; dear; fondly remembered", "envious; jealous", "noisy; rowdy", "reliable; dependable"], a: 0, e: "懐かしい expresses warm longing for the past (懐かしい友 = a dear old friend, 懐かしい味 = a taste that brings back memories)." }
    ]
  },
  {
    id: "n2-0112", w: "有料", r: "ゆうりょう", m: "fee-charging; paid; not free", c: "noun", lv: 1,
    ex: [{ jp: "この駐車場は有料です。", en: "This parking lot charges a fee." }],
    qs: [
      { t: "fitb", s: "サービスの一部は＿＿＿＿で、追加料金がかかる。", en: "Part of the service is paid and incurs an additional charge.", o: ["有料", "無料", "有効", "有給"], a: 0, e: "有料 = requiring payment (not free). 無料 = free of charge (the opposite). 有効 = valid/effective. 有給 = paid (as in 有給休暇 = paid leave)." },
      { t: "meaning", s: "「有料」の意味は？", o: ["fee-charging; paid; not free", "free of charge", "valid; effective", "paid (as in paid leave)"], a: 0, e: "有料 means something costs money (有料道路 = toll road, 有料会員 = paid member). Opposite of 無料 (free)." }
    ]
  },
  {
    id: "n2-0113", w: "延長", r: "えんちょう", m: "extension; prolongation; lengthening", c: "noun", lv: 1,
    ex: [{ jp: "会議が予定より延長された。", en: "The meeting was extended beyond schedule." }],
    qs: [
      { t: "fitb", s: "工事の遅れで、完成時期の＿＿＿＿が決まった。", en: "Due to construction delays, an extension of the completion date was decided.", o: ["延長", "短縮", "延期", "継続"], a: 0, e: "延長 = extending the length/duration of something. 短縮 = shortening (the opposite). 延期 = postponing to a later date. 継続 = continuing an ongoing activity." },
      { t: "meaning", s: "「延長」の意味は？", o: ["extension; prolongation; lengthening", "shortening; reduction", "postponement to a later date", "continuation of an activity"], a: 0, e: "延長 means making something longer in time or distance (延長戦 = overtime/extra innings, 期限を延長する = extend a deadline). 延期 instead means pushing a date back." }
    ]
  },
  {
    id: "n2-0114", w: "勘違い", r: "かんちがい", m: "misunderstanding; mistaken impression; getting the wrong idea", c: "noun", lv: 1,
    ex: [{ jp: "待ち合わせの場所を勘違いしていた。", en: "I had misunderstood the meeting place." }],
    qs: [
      { t: "fitb", s: "彼を犯人だと思ったのは、私の＿＿＿＿だった。", en: "Thinking he was the culprit was a mistake on my part.", o: ["勘違い", "言い訳", "思いやり", "心当たり"], a: 0, e: "勘違い = mistaken belief/getting the wrong idea. 言い訳 = an excuse. 思いやり = consideration/empathy. 心当たり = a clue/idea of what's behind something." },
      { t: "meaning", s: "「勘違い」の意味は？", o: ["misunderstanding; getting the wrong idea", "an excuse; justification", "consideration; empathy", "a clue; an inkling"], a: 0, e: "勘違い is mistakenly believing something to be the case (勘違いする = to be mistaken, get it wrong). Differs from 誤解, which is misunderstanding another's meaning." }
    ]
  },
  {
    id: "n2-0115", w: "素直", r: "すなお", m: "honest; obedient; frank; unpretentious; receptive", c: "naadj", lv: 1,
    ex: [{ jp: "彼女は素直に自分の失敗を認めた。", en: "She honestly admitted her own mistake." }],
    qs: [
      { t: "fitb", s: "子どもは親の助言を＿＿＿＿に聞き入れた。", en: "The child took the parent's advice obediently to heart.", o: ["素直", "頑固", "勝手", "わがまま"], a: 0, e: "素直 = honest/receptive/unresistant (accepting things without distortion). 頑固 = stubborn (the opposite). 勝手 = selfish/doing as one pleases. わがまま = selfish/willful." },
      { t: "meaning", s: "「素直」の意味は？", o: ["honest; obedient; frank; receptive", "stubborn; obstinate", "selfish; doing as one pleases", "willful; spoiled"], a: 0, e: "素直 describes someone who accepts things openly and without twisting them — frank, docile, receptive (素直に謝る = apologize honestly). Opposite of 頑固 (stubborn)." }
    ]
  },
  {
    id: "n2-0116", w: "狙い", r: "ねらい", m: "aim; target; objective; intent", c: "noun", lv: 1,
    ex: [{ jp: "この政策の狙いは雇用の拡大だ。", en: "The aim of this policy is to expand employment." }],
    qs: [
      { t: "fitb", s: "広告の本当の＿＿＿＿は、新規顧客の獲得にある。", en: "The real aim of the advertisement is to acquire new customers.", o: ["狙い", "結果", "原因", "影響"], a: 0, e: "狙い = the aim/intent behind an action. 結果 = the result/outcome. 原因 = the cause. 影響 = influence/effect." },
      { t: "meaning", s: "「狙い」の意味は？", o: ["aim; target; objective; intent", "result; outcome", "cause", "influence; effect"], a: 0, e: "狙い is the intended target or purpose of an action (狙いを定める = take aim, 狙い通り = just as intended). The verb is 狙う (to aim at)." }
    ]
  },
  {
    id: "n2-0117", w: "警備", r: "けいび", m: "security; guarding; policing", c: "noun", lv: 1,
    ex: [{ jp: "イベント会場は厳重に警備されていた。", en: "The event venue was tightly guarded." }],
    qs: [
      { t: "fitb", s: "要人の訪問に備え、空港の＿＿＿＿が強化された。", en: "In preparation for the VIP's visit, security at the airport was strengthened.", o: ["警備", "防止", "監視", "保護"], a: 0, e: "警備 = security/guarding (protecting a place/people from threats). 防止 = prevention (stopping something bad from happening). 監視 = surveillance/keeping watch. 保護 = protection/safeguarding (of the vulnerable)." },
      { t: "meaning", s: "「警備」の意味は？", o: ["security; guarding; policing", "prevention; warding off", "surveillance; keeping watch", "protection of the vulnerable"], a: 0, e: "警備 means standing guard to protect a place or people (警備員 = security guard, 警備会社 = security firm). 監視 is watching/monitoring; 警備 implies active protection." }
    ]
  },
  {
    id: "n2-0118", w: "国立", r: "こくりつ", m: "national (established/run by the state)", c: "noun", lv: 1,
    ex: [{ jp: "彼は国立大学に合格した。", en: "He passed the entrance exam for a national university." }],
    qs: [
      { t: "fitb", s: "この絵画は＿＿＿＿美術館に所蔵されている。", en: "This painting is held in the national museum.", o: ["国立", "私立", "市立", "公立"], a: 0, e: "国立 = national (run by the central government). 私立 = private (privately run). 市立 = municipal (city-run). 公立 = public (run by local government, broader than 市立)." },
      { t: "meaning", s: "「国立」の意味は？", o: ["national; run by the state", "private; privately run", "municipal; city-run", "public; run by local government"], a: 0, e: "国立 means established and funded by the national government (国立公園 = national park, 国立大学 = national university). Contrast 私立 (private) and 公立 (locally public)." }
    ]
  },
  {
    id: "n2-0119", w: "作者", r: "さくしゃ", m: "author; creator (of a work of art or literature)", c: "noun", lv: 1,
    ex: [{ jp: "この小説の作者は誰ですか。", en: "Who is the author of this novel?" }],
    qs: [
      { t: "fitb", s: "この物語の＿＿＿＿は、自身の体験をもとに書いたそうだ。", en: "The author of this story reportedly wrote it based on personal experience.", o: ["作者", "読者", "記者", "著者"], a: 0, e: "作者 = creator/author of a creative work (novel, painting, play). 読者 = reader. 記者 = (news) reporter/journalist. 著者 = author specifically of a published book." },
      { t: "meaning", s: "「作者」の意味は？", o: ["author; creator of an artistic work", "reader", "news reporter; journalist", "author of a published book"], a: 0, e: "作者 is the creator of a work — broader than 著者 (which refers to the writer of a published book). Used for novels, art, plays, etc." }
    ]
  },
  {
    id: "n2-0120", w: "比較的", r: "ひかくてき", m: "comparatively; relatively", c: "adv", lv: 1,
    ex: [{ jp: "今日は比較的暖かい。", en: "It's comparatively warm today." }],
    qs: [
      { t: "fitb", s: "この問題は＿＿＿＿簡単なので、すぐに解けるだろう。", en: "This problem is relatively easy, so you'll probably solve it quickly.", o: ["比較的", "圧倒的", "徹底的", "絶対的"], a: 0, e: "比較的 = comparatively/relatively (in comparison with others). 圧倒的 = overwhelming. 徹底的 = thorough/exhaustive. 絶対的 = absolute." },
      { t: "meaning", s: "「比較的」の意味は？", o: ["comparatively; relatively", "overwhelming(ly)", "thorough(ly); exhaustive(ly)", "absolute(ly)"], a: 0, e: "比較的 means 'relatively' — judged against some comparison (比較的安い = relatively cheap). It softens the statement rather than asserting an absolute." }
    ]
  },
  {
    id: "n2-0121", w: "付近", r: "ふきん", m: "vicinity; nearby area; neighborhood", c: "noun", lv: 1,
    ex: [{ jp: "駅の付近にコンビニがありますか。", en: "Is there a convenience store in the vicinity of the station?" }],
    qs: [
      { t: "fitb", s: "事故現場＿＿＿＿は一時、通行止めになった。", en: "The area near the accident site was temporarily closed to traffic.", o: ["付近", "周辺", "近所", "辺り"], a: 0, e: "付近 = vicinity, near a specific point. 周辺 = surrounding zone (broader area around). 近所 = neighborhood (where people live, social sense). 辺り = around/about (vaguer, also approximation)." },
      { t: "meaning", s: "「付近」の意味は？", o: ["vicinity; nearby area", "surrounding zone (broader)", "neighborhood (residential)", "around; thereabouts (vague)"], a: 0, e: "付近 points to the area immediately near a specific place (この付近 = around here). Compare 周辺, which covers a wider surrounding zone." }
    ]
  },
  {
    id: "n2-0122", w: "公表", r: "こうひょう", m: "public announcement; official disclosure; making public", c: "noun", lv: 1,
    ex: [{ jp: "調査結果は来週、公表される予定だ。", en: "The survey results are scheduled to be made public next week." }],
    qs: [
      { t: "fitb", s: "会社は事故の原因を調査の上、＿＿＿＿した。", en: "After investigating, the company publicly disclosed the cause of the accident.", o: ["公表", "発表", "公開", "報告"], a: 0, e: "公表 = officially disclosing information to the public (often something previously private or sensitive). 発表 = announcing/presenting (broad). 公開 = opening to public access/viewing. 報告 = reporting to a specific party." },
      { t: "meaning", s: "「公表」の意味は？", o: ["official public disclosure; making public", "announcing; presenting (broad)", "opening to public access/viewing", "reporting to a specific party"], a: 0, e: "公表 stresses formally disclosing facts to the wider public (情報を公表する = disclose information). 発表 is a more general 'announce'; 公開 means making something openly accessible." }
    ]
  },
  {
    id: "n2-0123", w: "対立", r: "たいりつ", m: "confrontation; opposition; conflict between sides", c: "noun", lv: 1,
    ex: [{ jp: "二つの政党は意見が激しく対立している。", en: "The two political parties are sharply opposed in opinion." }],
    qs: [
      { t: "fitb", s: "労使の＿＿＿＿が深まり、交渉は決裂した。", en: "The conflict between labor and management deepened, and negotiations broke down.", o: ["対立", "協力", "妥協", "和解"], a: 0, e: "対立 = confrontation/conflict between opposing sides. 協力 = cooperation. 妥協 = compromise (meeting in the middle). 和解 = reconciliation/settling a dispute." },
      { t: "meaning", s: "「対立」の意味は？", o: ["confrontation; opposition; conflict between sides", "cooperation; working together", "compromise; meeting in the middle", "reconciliation; settling a dispute"], a: 0, e: "対立 describes two sides standing in opposition (意見の対立 = clash of opinions, 対立候補 = opposing candidate). Opposite of 協力 (cooperation)." }
    ]
  },
  {
    id: "n2-0124", w: "直前", r: "ちょくぜん", m: "immediately before; just before; on the eve of", c: "noun", lv: 1,
    ex: [{ jp: "出発の直前に忘れ物に気づいた。", en: "Just before departure, I noticed I'd forgotten something." }],
    qs: [
      { t: "fitb", s: "試験の＿＿＿＿になって慌てても、もう遅い。", en: "Panicking right before the exam is already too late.", o: ["直前", "直後", "以前", "当面"], a: 0, e: "直前 = immediately before. 直後 = immediately after (the opposite). 以前 = before/previously (broader, in the past). 当面 = for the present/for now." },
      { t: "meaning", s: "「直前」の意味は？", o: ["immediately before; just before", "immediately after", "before; previously (in the past)", "for the present; for now"], a: 0, e: "直前 marks the moment just before an event (締め切り直前 = right before the deadline). Opposite of 直後." }
    ]
  },
  {
    id: "n2-0125", w: "動作", r: "どうさ", m: "movement; motion; action (of body or machine); operation", c: "noun", lv: 1,
    ex: [{ jp: "この機械は動作が不安定だ。", en: "This machine's operation is unstable." }],
    qs: [
      { t: "fitb", s: "ダンサーの一つ一つの＿＿＿＿が美しい。", en: "Each of the dancer's movements is beautiful.", o: ["動作", "活動", "運動", "行動"], a: 0, e: "動作 = a discrete physical movement/motion, or a machine's operation. 活動 = activity (engaging in something ongoing). 運動 = exercise; a movement/campaign. 行動 = behavior/conduct (purposeful action)." },
      { t: "meaning", s: "「動作」の意味は？", o: ["movement; motion; action; operation", "activity; engaging in something", "exercise; a movement/campaign", "behavior; conduct"], a: 0, e: "動作 refers to a specific bodily movement or a device's operation (動作確認 = operation check, 動作が遅い = slow movements/sluggish operation)." }
    ]
  },
  {
    id: "n2-0126", w: "欄", r: "らん", m: "column; field; section (in a form, newspaper, table)", c: "noun", lv: 1,
    ex: [{ jp: "コメント欄に意見を書いてください。", en: "Please write your opinion in the comment field." }],
    qs: [
      { t: "fitb", s: "氏名の＿＿＿＿に、フルネームを記入してください。", en: "Please enter your full name in the name field.", o: ["欄", "枠", "面", "巻"], a: 0, e: "欄 = a designated column/field/section (for writing or in print). 枠 = a frame/box/quota. 面 = a side/surface/page (面 in newspaper sections too, but 欄 is the named column). 巻 = a volume/scroll (counter for books)." },
      { t: "meaning", s: "「欄」の意味は？", o: ["column; field; section in a form or print", "frame; box; quota", "side; surface; face", "volume; scroll (book counter)"], a: 0, e: "欄 is a labeled space or column (記入欄 = entry field, 投書欄 = letters-to-the-editor column, 備考欄 = remarks field)." }
    ]
  },
  {
    id: "n2-0127", w: "連合", r: "れんごう", m: "union; alliance; federation; coalition", c: "noun", lv: 1,
    ex: [{ jp: "複数の団体が連合して活動している。", en: "Several organizations are working in alliance." }],
    qs: [
      { t: "fitb", s: "国際＿＿＿＿は世界平和を目的に設立された。", en: "The international union was established for the purpose of world peace.", o: ["連合", "連続", "連絡", "連帯"], a: 0, e: "連合 = a union/alliance/federation of groups. 連続 = a continuous sequence/run. 連絡 = contact/communication. 連帯 = solidarity (shared responsibility, standing together)." },
      { t: "meaning", s: "「連合」の意味は？", o: ["union; alliance; federation; coalition", "a continuous sequence; a run", "contact; communication", "solidarity; shared responsibility"], a: 0, e: "連合 means several groups joining into a larger body (連合国 = the Allied Powers, 連合軍 = allied/coalition forces)." }
    ]
  },
  {
    id: "n2-0128", w: "相変わらず", r: "あいかわらず", m: "as usual; as ever; the same as before", c: "adv", lv: 1,
    ex: [{ jp: "彼は相変わらず元気そうだ。", en: "He seems as energetic as ever." }],
    qs: [
      { t: "fitb", s: "久しぶりに訪ねたが、町は＿＿＿＿静かだった。", en: "I visited after a long while, but the town was quiet as ever.", o: ["相変わらず", "突然", "意外と", "次第に"], a: 0, e: "相変わらず = unchanged, as always. 突然 = suddenly. 意外と = unexpectedly/more than expected. 次第に = gradually." },
      { t: "meaning", s: "「相変わらず」の意味は？", o: ["as usual; as ever; the same as before", "suddenly; abruptly", "unexpectedly; more than expected", "gradually; little by little"], a: 0, e: "相変わらず indicates a state continues unchanged from before (相変わらず忙しい = busy as always). Often carries a tone of familiarity." }
    ]
  },
  {
    id: "n2-0129", w: "通知", r: "つうち", m: "notice; notification; informing officially", c: "noun", lv: 1,
    ex: [{ jp: "合格の通知が郵便で届いた。", en: "The notice of acceptance arrived by mail." }],
    qs: [
      { t: "fitb", s: "予定の変更は、メールで全員に＿＿＿＿された。", en: "The schedule change was notified to everyone by email.", o: ["通知", "通過", "通用", "通行"], a: 0, e: "通知 = a formal notice/notification. 通過 = passing through (a point). 通用 = being accepted/valid (e.g. currency, an excuse 通用する). 通行 = passage/traffic (going along a route)." },
      { t: "meaning", s: "「通知」の意味は？", o: ["notice; notification; informing officially", "passing through a point", "being accepted as valid; current use", "passage; foot/vehicle traffic"], a: 0, e: "通知 means officially informing someone (通知書 = notification letter, 合格通知 = acceptance notice, プッシュ通知 = push notification)." }
    ]
  },
  {
    id: "n2-0130", w: "繋がり", r: "つながり", m: "connection; link; relationship; bond", c: "noun", lv: 1,
    ex: [{ jp: "人との繋がりを大切にしたい。", en: "I want to cherish my connections with people." }],
    qs: [
      { t: "fitb", s: "この二つの事件には深い＿＿＿＿があるようだ。", en: "There seems to be a deep connection between these two incidents.", o: ["繋がり", "区切り", "隔たり", "決まり"], a: 0, e: "繋がり = a connection/link/bond between things or people. 区切り = a break/division/punctuation point. 隔たり = a gap/distance (between things). 決まり = a rule; a settled matter." },
      { t: "meaning", s: "「繋がり」の意味は？", o: ["connection; link; relationship; bond", "a break; a dividing point", "a gap; distance between things", "a rule; a settled matter"], a: 0, e: "繋がり (from 繋がる, to be connected) means a link or bond (人との繋がり = human connections, 血の繋がり = blood ties)." }
    ]
  },
  {
    id: "n2-0131", w: "講師", r: "こうし", m: "lecturer; instructor (at a school, seminar, or university)", c: "noun", lv: 1,
    ex: [{ jp: "彼は英会話教室の講師をしている。", en: "He works as an instructor at an English conversation school." }],
    qs: [
      { t: "fitb", s: "今回のセミナーには、外部から専門の＿＿＿＿を招いた。", en: "For this seminar, we invited a specialist instructor from outside.", o: ["講師", "教師", "生徒", "校長"], a: 0, e: "講師 = a lecturer/instructor (often part-time, or a non-tenured university rank; gives 講義/lessons). 教師 = a (school) teacher. 生徒 = a pupil/student. 校長 = a school principal." },
      { t: "meaning", s: "「講師」の意味は？", o: ["lecturer; instructor at a school or seminar", "a school teacher", "a pupil; student", "a school principal"], a: 0, e: "講師 is someone who delivers lessons or lectures, often invited or part-time (非常勤講師 = part-time lecturer, ゲスト講師 = guest lecturer). 教師 is the standard word for a schoolteacher." }
    ]
  },
  {
    id: "n2-0132", w: "主人", r: "しゅじん", m: "(one's own) husband; master/owner (of a shop or house)", c: "noun", lv: 1,
    ex: [{ jp: "主人は今、出張で留守です。", en: "My husband is away on a business trip right now." }],
    qs: [
      { t: "fitb", s: "店の＿＿＿＿が、笑顔で客を出迎えた。", en: "The shop's owner greeted the customers with a smile.", o: ["主人", "客人", "他人", "本人"], a: 0, e: "主人 = the master/owner of a household or shop; also 'my husband.' 客人 = a guest. 他人 = a stranger/other person. 本人 = the person in question/oneself." },
      { t: "meaning", s: "「主人」の意味は？", o: ["one's husband; the master/owner of a place", "a guest; visitor", "a stranger; an outsider", "the person in question; oneself"], a: 0, e: "主人 means the head/owner of a household or business (ご主人 = your husband / the proprietor), and a wife may call her husband 主人." }
    ]
  },
  {
    id: "n2-0133", w: "統計", r: "とうけい", m: "statistics; statistical data", c: "noun", lv: 1,
    ex: [{ jp: "統計によると、人口は減少している。", en: "According to statistics, the population is decreasing." }],
    qs: [
      { t: "fitb", s: "政府の＿＿＿＿データをもとに、将来を予測する。", en: "We forecast the future based on government statistical data.", o: ["統計", "計算", "計画", "会計"], a: 0, e: "統計 = statistics (collected numerical data and its analysis). 計算 = calculation/computation. 計画 = a plan. 会計 = accounting; the bill/check." },
      { t: "meaning", s: "「統計」の意味は？", o: ["statistics; statistical data", "calculation; computation", "a plan; planning", "accounting; the bill"], a: 0, e: "統計 refers to gathered numerical data and its study (統計を取る = collect statistics, 人口統計 = demographic statistics)." }
    ]
  },
  {
    id: "n2-0134", w: "各地", r: "かくち", m: "various places; each region; all over (the country)", c: "noun", lv: 1,
    ex: [{ jp: "この祭りは全国各地で行われる。", en: "This festival is held in various places all over the country." }],
    qs: [
      { t: "fitb", s: "台風の影響で、＿＿＿＿で大雨が観測された。", en: "Due to the typhoon, heavy rain was observed in various regions.", o: ["各地", "各自", "現地", "産地"], a: 0, e: "各地 = various places/regions (each area). 各自 = each person individually. 現地 = the actual site/local area (where something happens). 産地 = a place of production/origin (of goods)." },
      { t: "meaning", s: "「各地」の意味は？", o: ["various places; each region; all over", "each person individually", "the actual site; the local area", "a place of production/origin"], a: 0, e: "各地 means many different regions or places (世界各地 = all over the world, 各地で = in various locations)." }
    ]
  },
  {
    id: "n2-0135", w: "流石", r: "さすが", m: "as expected (of); just as you'd expect; truly impressive", c: "adv", lv: 1,
    ex: [{ jp: "流石ベテランだけあって、仕事が速い。", en: "As you'd expect from a veteran, his work is fast." }],
    qs: [
      { t: "fitb", s: "難しい問題を一瞬で解くとは、＿＿＿＿だ。", en: "Solving such a hard problem in an instant—that's impressive, as expected.", o: ["流石", "今更", "案外", "結局"], a: 0, e: "流石(さすが) = living up to expectations / 'as expected' (admiringly). 今更 = now (at this late stage). 案外 = unexpectedly/contrary to expectation. 結局 = in the end/after all." },
      { t: "meaning", s: "「流石」の意味は？", o: ["as expected (admiringly); just as you'd expect", "now; at this late stage", "unexpectedly; contrary to expectation", "in the end; after all"], a: 0, e: "流石 (usually written さすが) praises something for living up to its reputation (さすがプロ = that's a pro for you). Note: 案外 expresses the opposite — surprise." }
    ]
  },
  {
    id: "n2-0136", w: "ついで", r: "ついで", m: "while doing something else; on the same occasion; opportunity", c: "noun", lv: 1,
    ex: [{ jp: "買い物のついでに郵便局に寄った。", en: "On the way while shopping, I dropped by the post office." }],
    qs: [
      { t: "fitb", s: "出かける＿＿＿＿に、このゴミを捨ててきてくれる？", en: "While you're heading out, could you take out this trash?", o: ["ついで", "おかげ", "わけ", "つもり"], a: 0, e: "ついで = doing one thing while already doing another (〜のついでに = while you're at it). おかげ = thanks to. わけ = reason. つもり = intention/plan." },
      { t: "meaning", s: "「ついで」の意味は？", o: ["while doing something else; on the same occasion", "thanks to (a cause)", "reason; circumstances", "intention; what one plans to do"], a: 0, e: "ついで refers to taking the opportunity of doing one thing to also do another (〜のついでに = while one is at it, on the way)." }
    ]
  },
  {
    id: "n2-0137", w: "発揮", r: "はっき", m: "demonstration; display (of ability); bringing out one's full potential", c: "noun", lv: 1,
    ex: [{ jp: "本番で実力を発揮できなかった。", en: "I couldn't display my true ability in the real performance." }],
    qs: [
      { t: "fitb", s: "彼はリーダーとしての才能を存分に＿＿＿＿した。", en: "He fully demonstrated his talent as a leader.", o: ["発揮", "発見", "発展", "発生"], a: 0, e: "発揮 = bringing out and displaying ability/qualities. 発見 = discovery (finding something new). 発展 = development/growth. 発生 = occurrence/outbreak (something arising)." },
      { t: "meaning", s: "「発揮」の意味は？", o: ["display of ability; bringing out one's potential", "discovery; finding something new", "development; growth", "occurrence; outbreak"], a: 0, e: "発揮 means putting one's abilities or qualities into full effect (力を発揮する = bring one's power to bear, 実力を発揮 = show one's true skill)." }
    ]
  },
  {
    id: "n2-0138", w: "輸送", r: "ゆそう", m: "transport; conveyance; shipping (of goods or people)", c: "noun", lv: 1,
    ex: [{ jp: "商品はトラックで全国に輸送される。", en: "The goods are transported nationwide by truck." }],
    qs: [
      { t: "fitb", s: "災害地への物資の＿＿＿＿が急がれている。", en: "The transport of supplies to the disaster area is being rushed.", o: ["輸送", "輸入", "運転", "移動"], a: 0, e: "輸送 = transporting goods/people in bulk over distance. 輸入 = importing (bringing goods into a country). 運転 = driving/operating (a vehicle or machine). 移動 = moving/relocating (general)." },
      { t: "meaning", s: "「輸送」の意味は？", o: ["transport; conveyance; shipping", "importing goods from abroad", "driving; operating a vehicle", "moving; relocating (general)"], a: 0, e: "輸送 refers to carrying goods or people, often in large quantities (輸送費 = transport costs, 大量輸送 = mass transit/bulk transport)." }
    ]
  },
  {
    id: "n2-0139", w: "箇所", r: "かしょ", m: "place; spot; point; (counter for) passages or sections", c: "noun", lv: 1,
    ex: [{ jp: "間違っている箇所を直してください。", en: "Please correct the spots that are wrong." }],
    qs: [
      { t: "fitb", s: "壊れた＿＿＿＿は全部で三つあった。", en: "There were three broken spots in total.", o: ["箇所", "場所", "位置", "地点"], a: 0, e: "箇所 = a specific spot/point, often one of several (and a counter: 三箇所 = three spots). 場所 = a place/location (general). 位置 = position (where in space). 地点 = a (geographic) point/site." },
      { t: "meaning", s: "「箇所」の意味は？", o: ["a specific spot/point; counter for sections", "a place; location (general)", "position; where in space", "a geographic point or site"], a: 0, e: "箇所 picks out particular points or passages, often counted (危険箇所 = hazard spots, 修正箇所 = points to be corrected). Also a counter: 数箇所 = several spots." }
    ]
  },
  {
    id: "n2-0140", w: "実感", r: "じっかん", m: "the actual feeling; realizing through experience; real sense", c: "noun", lv: 1,
    ex: [{ jp: "優勝した実感がまだ湧かない。", en: "It still doesn't feel real that we won." }],
    qs: [
      { t: "fitb", s: "現地を訪れて、初めて戦争の悲惨さを＿＿＿＿した。", en: "Visiting the site, I felt the misery of war for real for the first time.", o: ["実感", "想像", "感心", "予感"], a: 0, e: "実感 = feeling something as real through direct experience. 想像 = imagination (picturing in the mind). 感心 = admiration/being impressed. 予感 = a premonition/hunch." },
      { t: "meaning", s: "「実感」の意味は？", o: ["the actual feeling; realizing through experience", "imagination; picturing in the mind", "admiration; being impressed", "a premonition; a hunch"], a: 0, e: "実感 is the genuine, felt sense of something real (実感が湧かない = it doesn't feel real yet, 実感がこもる = feels heartfelt/genuine)." }
    ]
  },
  {
    id: "n2-0141", w: "表紙", r: "ひょうし", m: "(front) cover; binding (of a book or magazine)", c: "noun", lv: 1,
    ex: [{ jp: "その雑誌の表紙に有名な俳優が載っていた。", en: "A famous actor was on the cover of that magazine." }],
    qs: [
      { t: "fitb", s: "本の＿＿＿＿のデザインが目を引いて、思わず手に取った。", en: "The book's cover design caught my eye, and I picked it up on impulse.", o: ["表紙", "目次", "見出し", "背表紙"], a: 0, e: "表紙 = the front (or outer) cover of a book/magazine. 目次 = the table of contents. 見出し = a headline/heading. 背表紙 = the spine of a book." },
      { t: "meaning", s: "「表紙」の意味は？", o: ["front cover; binding of a book", "table of contents", "a headline; heading", "the spine of a book"], a: 0, e: "表紙 is the outer cover of a book or magazine (表紙を飾る = to grace the cover, 雑誌の表紙 = a magazine cover)." }
    ]
  },
  {
    id: "n2-0142", w: "割引", r: "わりびき", m: "discount; price reduction", c: "noun", lv: 1,
    ex: [{ jp: "学生は割引が受けられます。", en: "Students can receive a discount." }],
    qs: [
      { t: "fitb", s: "会員になると、商品が二割＿＿＿＿になる。", en: "If you become a member, items are 20% off.", o: ["割引", "値上げ", "値段", "支払い"], a: 0, e: "割引 = a discount/price reduction. 値上げ = a price increase (the opposite). 値段 = the price itself. 支払い = payment." },
      { t: "meaning", s: "「割引」の意味は？", o: ["discount; price reduction", "a price increase", "the price itself", "payment"], a: 0, e: "割引 means reducing the price (割引券 = discount coupon, 早期割引 = early-bird discount). 二割引 = 20% off." }
    ]
  },
  {
    id: "n2-0143", w: "開放", r: "かいほう", m: "opening up; throwing open; making accessible", c: "noun", lv: 1,
    ex: [{ jp: "校庭は週末、市民に開放されている。", en: "The schoolyard is opened to citizens on weekends." }],
    qs: [
      { t: "fitb", s: "暑いので、窓を全部＿＿＿＿して風を通した。", en: "Because it was hot, I threw all the windows open to let air through.", o: ["開放", "解放", "公開", "開発"], a: 0, e: "開放 = opening up/throwing open a space to access. 解放 = liberation/freeing from restraint (same reading かいほう). 公開 = releasing/disclosing to the public. 開発 = development (of land, products)." },
      { t: "meaning", s: "「開放」の意味は？", o: ["opening up; throwing open; making accessible", "liberation; freeing from restraint", "releasing/disclosing to the public", "development of land or products"], a: 0, e: "開放 = physically opening up or making a space/market accessible (門戸開放 = open-door policy, 市場開放 = market liberalization). Compare 解放 (freeing someone/something from bondage)." }
    ]
  },
  {
    id: "n2-0144", w: "桁", r: "けた", m: "digit; place (in numbers); order of magnitude", c: "noun", lv: 1,
    ex: [{ jp: "計算を間違えて、桁が一つ違っていた。", en: "I made a calculation error and was off by one digit." }],
    qs: [
      { t: "fitb", s: "彼の収入は私とは＿＿＿＿が違う。", en: "His income is on a completely different order of magnitude from mine.", o: ["桁", "段", "列", "幅"], a: 0, e: "桁 = a digit/place in a number, hence 'order of magnitude' figuratively. 段 = a step/tier/level. 列 = a row/line/column (of items). 幅 = width/range." },
      { t: "meaning", s: "「桁」の意味は？", o: ["digit; place in a number; order of magnitude", "a step; tier; level", "a row; line; column", "width; range"], a: 0, e: "桁 is a numeral place (三桁 = three digits) and figuratively a whole scale of difference (桁違い = on a totally different scale, 桁外れ = extraordinary)." }
    ]
  },
  {
    id: "n2-0145", w: "実用", r: "じつよう", m: "practical use; utility; being practical", c: "noun", lv: 1,
    ex: [{ jp: "その技術はまだ実用の段階に達していない。", en: "That technology hasn't yet reached the stage of practical use." }],
    qs: [
      { t: "fitb", s: "デザインより＿＿＿＿性を重視して、この車を選んだ。", en: "I chose this car prioritizing practicality over design.", o: ["実用", "実験", "実現", "実施"], a: 0, e: "実用 = practical use/utility (実用性 = practicality). 実験 = an experiment. 実現 = realization (making a plan come true). 実施 = implementation/carrying out (a measure, policy)." },
      { t: "meaning", s: "「実用」の意味は？", o: ["practical use; utility; being practical", "an experiment", "realization; making something come true", "implementation; carrying out a measure"], a: 0, e: "実用 concerns real-world usefulness (実用化 = putting into practical use, 実用的 = practical). 実現 instead means achieving/realizing a goal." }
    ]
  },
  {
    id: "n2-0146", w: "人事", r: "じんじ", m: "personnel affairs; human resources; HR matters", c: "noun", lv: 1,
    ex: [{ jp: "彼は人事部で採用を担当している。", en: "He is in charge of recruitment in the HR department." }],
    qs: [
      { t: "fitb", s: "春になると、会社では＿＿＿＿異動が行われる。", en: "In spring, personnel reassignments take place at the company.", o: ["人事", "人口", "人物", "人材"], a: 0, e: "人事 = personnel matters/HR (hiring, transfers, evaluations). 人口 = population. 人物 = a person/character/figure. 人材 = human talent/capable people (a resource)." },
      { t: "meaning", s: "「人事」の意味は？", o: ["personnel affairs; human resources", "population", "a person; a figure/character", "human talent; capable personnel"], a: 0, e: "人事 covers personnel administration — hiring, transfers, promotions (人事部 = HR department, 人事異動 = personnel reshuffle). Note 人材 means the talented people themselves." }
    ]
  },
  {
    id: "n2-0147", w: "侵入", r: "しんにゅう", m: "intrusion; break-in; invasion; trespassing", c: "noun", lv: 1,
    ex: [{ jp: "泥棒が窓から侵入した形跡があった。", en: "There were signs that a thief had broken in through the window." }],
    qs: [
      { t: "fitb", s: "不審者の＿＿＿＿を防ぐため、防犯カメラを設置した。", en: "To prevent intrusion by suspicious persons, security cameras were installed.", o: ["侵入", "進入", "突入", "潜入"], a: 0, e: "侵入 = intruding/breaking in illegally or by force (violating a boundary). 進入 = entering/advancing into (neutral, e.g. a plane on approach). 突入 = charging/storming in. 潜入 = sneaking in/infiltrating covertly." },
      { t: "meaning", s: "「侵入」の意味は？", o: ["intrusion; break-in; trespassing", "entering/advancing in (neutral)", "storming in; charging in", "sneaking in; infiltrating covertly"], a: 0, e: "侵入 implies an unauthorized or forced entry (不法侵入 = illegal trespass, ウイルスの侵入 = a virus getting in). Note the homophone 進入 (neutral entry, e.g. 進入禁止 = no entry)." }
    ]
  },
  {
    id: "n2-0148", w: "電波", r: "でんぱ", m: "radio waves; (signal) reception", c: "noun", lv: 1,
    ex: [{ jp: "山の中では電波が届きにくい。", en: "Reception is poor deep in the mountains." }],
    qs: [
      { t: "fitb", s: "地下では＿＿＿＿が弱く、電話がつながらない。", en: "Underground the signal is weak, and calls won't connect.", o: ["電波", "電流", "電力", "電源"], a: 0, e: "電波 = radio waves / wireless signal reception. 電流 = electric current. 電力 = electric power (energy). 電源 = a power source/the power switch." },
      { t: "meaning", s: "「電波」の意味は？", o: ["radio waves; signal reception", "electric current", "electric power; energy", "a power source; the power switch"], a: 0, e: "電波 refers to radio/electromagnetic waves and colloquially to signal strength (電波が悪い = bad reception, 電波が入らない = no signal)." }
    ]
  },
  {
    id: "n2-0149", w: "なんとなく", r: "なんとなく", m: "somehow; for some reason; without knowing why", c: "adv", lv: 1,
    ex: [{ jp: "なんとなく今日はいいことが起こりそうな気がする。", en: "Somehow I have a feeling something good will happen today." }],
    qs: [
      { t: "fitb", s: "理由はうまく言えないが、＿＿＿＿彼のことが気になる。", en: "I can't quite say why, but somehow I'm drawn to him.", o: ["なんとなく", "わざと", "たしかに", "せっかく"], a: 0, e: "なんとなく = somehow/for no clear reason (a vague feeling). わざと = on purpose/deliberately. たしかに = certainly/indeed. せっかく = with effort/going to the trouble (and so it'd be a shame to waste)." },
      { t: "meaning", s: "「なんとなく」の意味は？", o: ["somehow; for some reason; without knowing why", "on purpose; deliberately", "certainly; indeed", "with effort; (a shame to waste)"], a: 0, e: "なんとなく expresses a vague feeling with no clear reason (なんとなく分かる = I sort of get it, なんとなく不安 = vaguely uneasy)." }
    ]
  },
  {
    id: "n2-0150", w: "部品", r: "ぶひん", m: "parts; components (of a machine)", c: "noun", lv: 1,
    ex: [{ jp: "故障した部品を新しいものに交換した。", en: "I replaced the broken part with a new one." }],
    qs: [
      { t: "fitb", s: "この機械の＿＿＿＿はすべて国内で生産されている。", en: "All the components of this machine are produced domestically.", o: ["部品", "材料", "製品", "道具"], a: 0, e: "部品 = a component part that goes into a larger machine. 材料 = raw material/ingredients. 製品 = a finished product. 道具 = a tool/implement." },
      { t: "meaning", s: "「部品」の意味は？", o: ["parts; components of a machine", "raw materials; ingredients", "a finished product", "a tool; implement"], a: 0, e: "部品 are the individual parts assembled into a machine (自動車部品 = car parts, 交換部品 = replacement parts). Contrast 材料 (raw materials) and 製品 (the finished item)." }
    ]
  },
  {
    id: "n2-0151", w: "録音", r: "ろくおん", m: "(audio) recording; recording sound", c: "noun", lv: 1,
    ex: [{ jp: "会議の内容を録音しておいた。", en: "I recorded the contents of the meeting." }],
    qs: [
      { t: "fitb", s: "インタビューを＿＿＿＿し、後で文字に起こした。", en: "I recorded the interview and later transcribed it.", o: ["録音", "録画", "放送", "再生"], a: 0, e: "録音 = recording audio/sound. 録画 = recording video. 放送 = broadcasting. 再生 = playback/playing (also regeneration)." },
      { t: "meaning", s: "「録音」の意味は？", o: ["audio recording; recording sound", "video recording", "broadcasting", "playback; playing (also regeneration)"], a: 0, e: "録音 is specifically recording sound (録音機 = voice recorder, 録音スタジオ = recording studio). For video it's 録画." }
    ]
  },
  {
    id: "n2-0152", w: "付属", r: "ふぞく", m: "attached; accompanying; affiliated; included", c: "noun", lv: 1,
    ex: [{ jp: "この製品には専用のケースが付属している。", en: "A dedicated case comes attached with this product." }],
    qs: [
      { t: "fitb", s: "その高校は有名な大学の＿＿＿＿校である。", en: "That high school is an affiliated school of a famous university.", o: ["付属", "所属", "従属", "付近"], a: 0, e: "付属 = attached to / accompanying / affiliated (a part included with or under a main body). 所属 = belonging to (being a member of an organization). 従属 = subordination/dependence. 付近 = vicinity/nearby." },
      { t: "meaning", s: "「付属」の意味は？", o: ["attached; accompanying; affiliated; included", "belonging to (being a member)", "subordination; dependence", "vicinity; nearby area"], a: 0, e: "付属 means coming attached to or affiliated with a main entity (付属品 = accessories included, 大学付属病院 = a university-affiliated hospital)." }
    ]
  },
  {
    id: "n2-0153", w: "方面", r: "ほうめん", m: "direction; area; field; sphere (of activity)", c: "noun", lv: 1,
    ex: [{ jp: "この電車は東京方面行きです。", en: "This train is bound for the Tokyo area." }],
    qs: [
      { t: "fitb", s: "彼は音楽＿＿＿＿で活躍している。", en: "He is active in the field of music.", o: ["方面", "方向", "分野", "場面"], a: 0, e: "方面 = a direction (toward an area), or a field/sphere. 方向 = direction (which way, abstract or concrete). 分野 = a field/domain of study or work. 場面 = a scene/situation." },
      { t: "meaning", s: "「方面」の意味は？", o: ["direction; area; field; sphere of activity", "direction; which way (abstract)", "a field/domain of study or work", "a scene; a situation"], a: 0, e: "方面 means a direction toward an area (新宿方面 = toward Shinjuku) or a domain of activity (各方面 = various fields/circles, その方面の専門家 = an expert in that area)." }
    ]
  },
  {
    id: "n2-0154", w: "無限", r: "むげん", m: "infinite; limitless; boundless", c: "naadj", lv: 1,
    ex: [{ jp: "子どもには無限の可能性がある。", en: "Children have infinite potential." }],
    qs: [
      { t: "fitb", s: "宇宙は＿＿＿＿に広がっていると言われる。", en: "The universe is said to extend infinitely.", o: ["無限", "有限", "永遠", "膨大"], a: 0, e: "無限 = infinite/limitless (no bound). 有限 = finite/limited (the opposite). 永遠 = eternal/forever (limitless in time specifically). 膨大 = enormous/vast (huge but finite)." },
      { t: "meaning", s: "「無限」の意味は？", o: ["infinite; limitless; boundless", "finite; limited", "eternal; forever (in time)", "enormous; vast (but finite)"], a: 0, e: "無限 means without limit (無限大 = infinity, 無限の可能性 = infinite possibilities). Opposite of 有限 (finite)." }
    ]
  },
  {
    id: "n2-0155", w: "面接", r: "めんせつ", m: "interview (for a job or admission)", c: "noun", lv: 1,
    ex: [{ jp: "明日は就職の面接がある。", en: "I have a job interview tomorrow." }],
    qs: [
      { t: "fitb", s: "書類選考を通過し、来週＿＿＿＿を受けることになった。", en: "I passed the document screening and will have an interview next week.", o: ["面接", "面会", "対面", "面談"], a: 0, e: "面接 = a formal interview for employment/admission (evaluative). 面会 = visiting/meeting someone (e.g. a patient, a prisoner). 対面 = meeting face-to-face (in person). 面談 = an interview/consultation (e.g. teacher-parent talk; more discussion-oriented)." },
      { t: "meaning", s: "「面接」の意味は？", o: ["interview (for a job or admission)", "visiting/meeting someone (e.g. a patient)", "meeting face-to-face; in person", "an interview/consultation (discussion)"], a: 0, e: "面接 specifically means an evaluative interview (面接試験 = interview exam, 一次面接 = first-round interview). 面談 is a less evaluative one-on-one talk." }
    ]
  },
  {
    id: "n2-0156", w: "拡張", r: "かくちょう", m: "expansion; extension; enlargement (of scale or scope)", c: "noun", lv: 1,
    ex: [{ jp: "事業の拡張に伴い、社員を増やした。", en: "Along with the business expansion, we increased the staff." }],
    qs: [
      { t: "fitb", s: "道路の＿＿＿＿工事で、車線が増えた。", en: "With the road-widening work, the number of lanes increased.", o: ["拡張", "拡大", "増加", "発展"], a: 0, e: "拡張 = expanding/extending size or scope (often physical or systemic). 拡大 = enlargement/magnification (making bigger; can be an image). 増加 = increase in number/quantity. 発展 = development/advancement." },
      { t: "meaning", s: "「拡張」の意味は？", o: ["expansion; extension; enlargement of scale or scope", "enlargement; magnification", "increase in number or quantity", "development; advancement"], a: 0, e: "拡張 means extending or widening capacity/scope (道路拡張 = road widening, 機能拡張 = feature expansion, 拡張子 = file extension). 拡大 emphasizes making something visually/proportionally bigger." }
    ]
  },
  {
    id: "n2-0157", w: "観測", r: "かんそく", m: "observation (scientific); monitoring; measuring", c: "noun", lv: 1,
    ex: [{ jp: "天文台で星の動きを観測している。", en: "They observe the movement of stars at the observatory." }],
    qs: [
      { t: "fitb", s: "今年は記録的な大雨が＿＿＿＿された。", en: "Record-breaking heavy rain was observed/recorded this year.", o: ["観測", "観察", "観光", "見物"], a: 0, e: "観測 = scientific observation/measurement (of natural phenomena, with instruments). 観察 = observation by watching closely (behavior, nature). 観光 = sightseeing/tourism. 見物 = watching/seeing as a spectacle." },
      { t: "meaning", s: "「観測」の意味は？", o: ["scientific observation; monitoring; measuring", "observation by watching closely", "sightseeing; tourism", "watching as a spectacle; spectating"], a: 0, e: "観測 implies measuring/monitoring natural phenomena, often with instruments (気象観測 = weather observation, 観測史上初 = first since records began). 観察 is watching attentively without instruments." }
    ]
  },
  {
    id: "n2-0158", w: "自治", r: "じち", m: "self-government; autonomy; self-administration", c: "noun", lv: 1,
    ex: [{ jp: "地方自治の重要性が高まっている。", en: "The importance of local self-government is increasing." }],
    qs: [
      { t: "fitb", s: "各地域は一定の＿＿＿＿権を持って運営されている。", en: "Each region is run with a certain degree of autonomy.", o: ["自治", "自由", "自立", "独裁"], a: 0, e: "自治 = self-government/autonomy (governing one's own affairs). 自由 = freedom/liberty. 自立 = independence/self-reliance (standing on one's own). 独裁 = dictatorship." },
      { t: "meaning", s: "「自治」の意味は？", o: ["self-government; autonomy", "freedom; liberty", "independence; self-reliance", "dictatorship"], a: 0, e: "自治 is governing one's own community or affairs (地方自治体 = local government/municipality, 自治会 = neighborhood association)." }
    ]
  },
  {
    id: "n2-0159", w: "純粋", r: "じゅんすい", m: "pure; genuine; unmixed; sincere", c: "naadj", lv: 1,
    ex: [{ jp: "彼は純粋な気持ちで人を助ける。", en: "He helps people out of genuine feelings." }],
    qs: [
      { t: "fitb", s: "これは混ぜ物のない＿＿＿＿なはちみつです。", en: "This is pure honey with no additives.", o: ["純粋", "完全", "正直", "新鮮"], a: 0, e: "純粋 = pure/unmixed/genuine (no impurities or ulterior motives). 完全 = complete/perfect. 正直 = honest/truthful. 新鮮 = fresh." },
      { t: "meaning", s: "「純粋」の意味は？", o: ["pure; genuine; unmixed; sincere", "complete; perfect", "honest; truthful", "fresh"], a: 0, e: "純粋 means free of any mixture or ulterior motive (純粋な水 = pure water, 純粋な愛 = pure love). Figuratively, innocent and sincere." }
    ]
  },
  {
    id: "n2-0160", w: "未満", r: "みまん", m: "less than; under (a threshold, not inclusive)", c: "noun", lv: 1,
    ex: [{ jp: "十八歳未満は入場できません。", en: "Those under eighteen may not enter." }],
    qs: [
      { t: "fitb", s: "千円＿＿＿＿の買い物には、ポイントが付かない。", en: "Purchases under 1,000 yen don't earn points.", o: ["未満", "以上", "以下", "前後"], a: 0, e: "未満 = strictly less than (the number itself NOT included). 以上 = that amount or more (inclusive). 以下 = that amount or less (inclusive). 前後 = around/approximately." },
      { t: "meaning", s: "「未満」の意味は？", o: ["less than; under (not inclusive)", "that amount or more (inclusive)", "that amount or less (inclusive)", "around; approximately"], a: 0, e: "未満 excludes the stated number — 18歳未満 means under 18 (17 and below). Contrast 以下, which includes the number (18歳以下 = 18 and under)." }
    ]
  },
  {
    id: "n2-0161", w: "改造", r: "かいぞう", m: "remodeling; modification; restructuring; reshuffle", c: "noun", lv: 1,
    ex: [{ jp: "彼は古い車を自分で改造した。", en: "He modified the old car himself." }],
    qs: [
      { t: "fitb", s: "首相は内閣の＿＿＿＿を行い、新しい大臣を任命した。", en: "The prime minister carried out a cabinet reshuffle and appointed new ministers.", o: ["改造", "改築", "改革", "改良"], a: 0, e: "改造 = remodeling/modifying an existing thing's structure (cars, buildings, cabinets). 改築 = rebuilding/renovating a structure (architecture). 改革 = reform (of systems/society). 改良 = improving/refining (making better)." },
      { t: "meaning", s: "「改造」の意味は？", o: ["remodeling; modification; restructuring", "rebuilding/renovating a structure", "reform of systems or society", "improvement; refinement"], a: 0, e: "改造 means altering the structure of something existing (改造車 = a modified car, 内閣改造 = cabinet reshuffle). 改良 stresses making it better; 改造 just means restructuring." }
    ]
  },
  {
    id: "n2-0162", w: "書店", r: "しょてん", m: "bookstore; bookshop", c: "noun", lv: 1,
    ex: [{ jp: "駅前の書店で雑誌を買った。", en: "I bought a magazine at the bookstore in front of the station." }],
    qs: [
      { t: "fitb", s: "その本は人気で、多くの＿＿＿＿で売り切れている。", en: "That book is popular and sold out at many bookstores.", o: ["書店", "本棚", "図書館", "出版社"], a: 0, e: "書店 = a bookstore (where books are sold). 本棚 = a bookshelf. 図書館 = a library (where books are borrowed). 出版社 = a publishing company." },
      { t: "meaning", s: "「書店」の意味は？", o: ["bookstore; bookshop", "a bookshelf", "a library", "a publishing company"], a: 0, e: "書店 is a shop that sells books (本屋 is the more casual word). Don't confuse with 図書館 (library, for borrowing)." }
    ]
  },
  {
    id: "n2-0163", w: "政党", r: "せいとう", m: "political party", c: "noun", lv: 1,
    ex: [{ jp: "その政党は選挙で多くの議席を得た。", en: "That political party won many seats in the election." }],
    qs: [
      { t: "fitb", s: "複数の＿＿＿＿が連立して政権を作った。", en: "Several political parties formed a coalition government.", o: ["政党", "政府", "政治", "政策"], a: 0, e: "政党 = a political party (an organized group seeking power). 政府 = the government (the governing body). 政治 = politics/government as a field. 政策 = a policy." },
      { t: "meaning", s: "「政党」の意味は？", o: ["a political party", "the government; governing body", "politics; government (the field)", "a policy"], a: 0, e: "政党 refers to an organized political party (与党 = ruling party, 野党 = opposition party). Distinct from 政府 (the government itself)." }
    ]
  },
  {
    id: "n2-0164", w: "成分", r: "せいぶん", m: "ingredient; component; constituent", c: "noun", lv: 1,
    ex: [{ jp: "この薬の主な成分は何ですか。", en: "What is the main ingredient of this medicine?" }],
    qs: [
      { t: "fitb", s: "化粧品の＿＿＿＿表示をよく確認してから買う。", en: "I check the ingredient labeling on cosmetics carefully before buying.", o: ["成分", "材料", "原料", "栄養"], a: 0, e: "成分 = a constituent component (what something is chemically made of). 材料 = materials/ingredients (used in making/cooking). 原料 = raw material (before processing). 栄養 = nutrition/nutrients." },
      { t: "meaning", s: "「成分」の意味は？", o: ["ingredient; component; constituent", "materials; ingredients used in making", "raw material before processing", "nutrition; nutrients"], a: 0, e: "成分 refers to the constituent elements that make up a substance (成分分析 = component analysis, 有効成分 = active ingredient). More chemical/analytical than 材料." }
    ]
  },
  {
    id: "n2-0165", w: "体操", r: "たいそう", m: "gymnastics; calisthenics; physical exercises", c: "noun", lv: 1,
    ex: [{ jp: "毎朝、ラジオ体操をしている。", en: "I do radio calisthenics every morning." }],
    qs: [
      { t: "fitb", s: "運動の前に、けが防止のため準備＿＿＿＿をする。", en: "Before exercising, we do warm-up calisthenics to prevent injury.", o: ["体操", "体育", "運動", "競技"], a: 0, e: "体操 = gymnastics/calisthenics (systematic physical exercises). 体育 = physical education (the school subject). 運動 = exercise/physical activity (broad). 競技 = (athletic) competition/event." },
      { t: "meaning", s: "「体操」の意味は？", o: ["gymnastics; calisthenics; physical exercises", "physical education (school subject)", "exercise; physical activity (broad)", "athletic competition; sporting event"], a: 0, e: "体操 refers to systematic physical exercises or the sport of gymnastics (準備体操 = warm-up exercises, 器械体操 = apparatus gymnastics)." }
    ]
  },
  {
    id: "n2-0166", w: "通勤", r: "つうきん", m: "commuting to work", c: "noun", lv: 1,
    ex: [{ jp: "毎日、電車で一時間かけて通勤している。", en: "I commute to work by train, taking an hour every day." }],
    qs: [
      { t: "fitb", s: "在宅勤務になり、＿＿＿＿の必要がなくなった。", en: "With remote work, the need to commute disappeared.", o: ["通勤", "通学", "出勤", "勤務"], a: 0, e: "通勤 = commuting to one's job. 通学 = commuting to school. 出勤 = going to/showing up for work (on a given day). 勤務 = working/being on duty (the work itself)." },
      { t: "meaning", s: "「通勤」の意味は？", o: ["commuting to work", "commuting to school", "going to/showing up for work", "working; being on duty"], a: 0, e: "通勤 is the trip to and from work (通勤時間 = commute time, 通勤ラッシュ = rush hour). For school it's 通学." }
    ]
  },
  {
    id: "n2-0167", w: "電池", r: "でんち", m: "battery; cell", c: "noun", lv: 1,
    ex: [{ jp: "リモコンの電池が切れた。", en: "The remote control's batteries ran out." }],
    qs: [
      { t: "fitb", s: "この時計は＿＿＿＿で動くので、コンセントは要らない。", en: "This clock runs on batteries, so it doesn't need an outlet.", o: ["電池", "電気", "電源", "充電"], a: 0, e: "電池 = a battery/cell (stores power). 電気 = electricity (also 'the lights'). 電源 = a power source/the power switch. 充電 = charging (a battery)." },
      { t: "meaning", s: "「電池」の意味は？", o: ["battery; cell", "electricity; the lights", "a power source; the power switch", "charging a battery"], a: 0, e: "電池 is a battery (乾電池 = dry-cell battery, 充電池 = rechargeable battery, 電池切れ = dead battery)." }
    ]
  },
  {
    id: "n2-0168", w: "いよいよ", r: "いよいよ", m: "at last; finally; more and more; (the moment is) imminent", c: "adv", lv: 1,
    ex: [{ jp: "いよいよ明日が本番だ。", en: "At last, tomorrow is the real thing." }],
    qs: [
      { t: "fitb", s: "長い準備期間を経て、＿＿＿＿大会が始まる。", en: "After a long preparation period, the tournament is finally about to begin.", o: ["いよいよ", "とっくに", "なかなか", "せっかく"], a: 0, e: "いよいよ = at last/finally, or 'increasingly' (a long-awaited moment arriving). とっくに = long ago/already. なかなか = quite; (with neg.) not easily. せっかく = going to the trouble (and so it'd be a shame to waste)." },
      { t: "meaning", s: "「いよいよ」の意味は？", o: ["at last; finally; (the moment is) imminent; more and more", "long ago; already", "quite; (with neg.) not easily", "going to the trouble; (a shame to waste)"], a: 0, e: "いよいよ signals a long-awaited moment is finally here (いよいよ本番 = the big moment at last) or intensification (雨がいよいよ激しくなる = the rain grows ever heavier)." }
    ]
  },
  {
    id: "n2-0169", w: "楽器", r: "がっき", m: "musical instrument", c: "noun", lv: 1,
    ex: [{ jp: "何か楽器を演奏できますか。", en: "Can you play any musical instrument?" }],
    qs: [
      { t: "fitb", s: "ピアノは子どもに人気のある＿＿＿＿の一つだ。", en: "The piano is one of the popular musical instruments among children.", o: ["楽器", "音楽", "演奏", "歌詞"], a: 0, e: "楽器 = a musical instrument. 音楽 = music (the art). 演奏 = a (musical) performance/playing. 歌詞 = song lyrics." },
      { t: "meaning", s: "「楽器」の意味は？", o: ["a musical instrument", "music (the art)", "a musical performance; playing", "song lyrics"], a: 0, e: "楽器 means a musical instrument (弦楽器 = string instrument, 打楽器 = percussion, 楽器店 = music store)." }
    ]
  },
  {
    id: "n2-0170", w: "研修", r: "けんしゅう", m: "training; in-service training (for work or skills)", c: "noun", lv: 1,
    ex: [{ jp: "新入社員は一か月の研修を受ける。", en: "New employees undergo a month of training." }],
    qs: [
      { t: "fitb", s: "海外の支社で三か月の＿＿＿＿を受けることになった。", en: "I'm to receive three months of training at the overseas branch.", o: ["研修", "研究", "練習", "実習"], a: 0, e: "研修 = job/skills training (structured, often for employees). 研究 = research/study (investigating a topic). 練習 = practice (repetitive drilling). 実習 = practical/hands-on training (an internship, lab practicum)." },
      { t: "meaning", s: "「研修」の意味は？", o: ["training; in-service training for work or skills", "research; academic study", "practice; repetitive drilling", "practical hands-on training; practicum"], a: 0, e: "研修 is organized training to build job skills (新人研修 = new-employee training, 研修会 = a training session). 実習 emphasizes hands-on practice; 練習 is repetition to master a skill." }
    ]
  },
  {
    id: "n2-0171", w: "重量", r: "じゅうりょう", m: "weight; heaviness", c: "noun", lv: 1,
    ex: [{ jp: "荷物の重量を量ってから発送する。", en: "We weigh the package before shipping it." }],
    qs: [
      { t: "fitb", s: "この橋は車の＿＿＿＿制限が十トンと定められている。", en: "This bridge has a vehicle weight limit set at ten tons.", o: ["重量", "容量", "数量", "分量"], a: 0, e: "重量 = weight/heaviness. 容量 = capacity/volume. 数量 = quantity (count). 分量 = amount/portion (e.g. of ingredients)." },
      { t: "meaning", s: "「重量」の意味は？", o: ["weight; heaviness", "capacity; volume", "quantity; count", "amount; portion"], a: 0, e: "重量 is physical weight (重量制限 = weight limit, 重量級 = heavyweight class)." }
    ]
  },
  {
    id: "n2-0172", w: "上下", r: "じょうげ", m: "up and down; top and bottom; rising and falling", c: "noun", lv: 1,
    ex: [{ jp: "エレベーターが上下に動く。", en: "The elevator moves up and down." }],
    qs: [
      { t: "fitb", s: "株価は一日中、激しく＿＿＿＿を繰り返した。", en: "The stock price repeatedly rose and fell sharply all day.", o: ["上下", "前後", "左右", "内外"], a: 0, e: "上下 = up and down / rising and falling. 前後 = before and after; around. 左右 = left and right; (also) to influence. 内外 = inside and outside; domestic and foreign." },
      { t: "meaning", s: "「上下」の意味は？", o: ["up and down; top and bottom; rising and falling", "before and after; around", "left and right", "inside and outside"], a: 0, e: "上下 covers vertical direction and fluctuation (上下関係 = hierarchy, 上下に揺れる = sway up and down)." }
    ]
  },
  {
    id: "n2-0173", w: "行方", r: "ゆくえ", m: "whereabouts; one's location; (figurative) where things are headed", c: "noun", lv: 1,
    ex: [{ jp: "事件の後、彼の行方は分からなくなった。", en: "After the incident, his whereabouts became unknown." }],
    qs: [
      { t: "fitb", s: "逃げた猫の＿＿＿＿を、近所中を探し回った。", en: "I searched all over the neighborhood for the whereabouts of the escaped cat.", o: ["行方", "行先", "足跡", "道順"], a: 0, e: "行方(ゆくえ) = whereabouts/where someone or something has gone. 行先(ゆきさき) = destination (where one is headed to). 足跡 = footprints/traces left behind. 道順 = a route/the order of a path." },
      { t: "meaning", s: "「行方」の意味は？", o: ["whereabouts; where someone has gone", "destination one is heading to", "footprints; traces left behind", "a route; order of a path"], a: 0, e: "行方 means a person's or thing's current location, often unknown (行方不明 = missing, 行方を追う = track down). Also figurative: 議論の行方 = where the discussion is headed." }
    ]
  },
  {
    id: "n2-0174", w: "割合に", r: "わりあいに", m: "relatively; comparatively; rather (more than expected)", c: "adv", lv: 1,
    ex: [{ jp: "この問題は割合に簡単だった。", en: "This problem was relatively easy." }],
    qs: [
      { t: "fitb", s: "年の割には、彼は＿＿＿＿しっかりしている。", en: "For his age, he is relatively level-headed.", o: ["割合に", "めったに", "やむを得ず", "思い切り"], a: 0, e: "割合に = relatively/rather (comparatively, often more than expected). めったに = (with neg.) rarely. やむを得ず = unavoidably, having no choice. 思い切り = with all one's might; to one's heart's content." },
      { t: "meaning", s: "「割合に」の意味は？", o: ["relatively; comparatively; rather", "rarely; seldom (with neg.)", "unavoidably; having no choice", "with all one's might"], a: 0, e: "割合に (≒割と/割に) softens a judgment by comparison — 'comparatively, rather' (割合に安い = relatively cheap)." }
    ]
  },
  {
    id: "n2-0175", w: "学会", r: "がっかい", m: "academic society; scholarly conference", c: "noun", lv: 1,
    ex: [{ jp: "彼女は来月、医学の学会で発表する。", en: "She will present at a medical conference next month." }],
    qs: [
      { t: "fitb", s: "研究成果を＿＿＿＿で報告し、専門家の意見を聞いた。", en: "She reported her findings at the academic conference and heard experts' opinions.", o: ["学会", "学部", "学歴", "学費"], a: 0, e: "学会 = an academic society / scholarly conference. 学部 = a university faculty/department. 学歴 = one's educational background. 学費 = tuition/school expenses." },
      { t: "meaning", s: "「学会」の意味は？", o: ["academic society; scholarly conference", "a university faculty/department", "one's educational background", "tuition; school fees"], a: 0, e: "学会 is a scholarly body or its conference where research is presented (学会発表 = conference presentation)." }
    ]
  },
  {
    id: "n2-0176", w: "外科", r: "げか", m: "surgery; the surgical department", c: "noun", lv: 1,
    ex: [{ jp: "骨折したので外科で診てもらった。", en: "I broke a bone, so I was seen at the surgery department." }],
    qs: [
      { t: "fitb", s: "傷の手術が必要なので、＿＿＿＿を受診してください。", en: "Since the wound needs surgery, please see the surgical department.", o: ["外科", "内科", "小児科", "眼科"], a: 0, e: "外科(げか) = surgery (treats with operations). 内科 = internal medicine (non-surgical). 小児科 = pediatrics. 眼科 = ophthalmology (eyes)." },
      { t: "meaning", s: "「外科」の意味は？", o: ["surgery; the surgical department", "internal medicine", "pediatrics", "ophthalmology; eye department"], a: 0, e: "外科 is the surgical branch of medicine (外科医 = surgeon). Contrast 内科 (internal medicine, treats without operating)." }
    ]
  },
  {
    id: "n2-0177", w: "実力", r: "じつりょく", m: "real ability; true skill; (one's actual) competence", c: "noun", lv: 1,
    ex: [{ jp: "彼は実力でその地位を勝ち取った。", en: "He earned that position through real ability." }],
    qs: [
      { t: "fitb", s: "運ではなく、自分の＿＿＿＿で合格したい。", en: "I want to pass through my own true ability, not luck.", o: ["実力", "実績", "勢力", "権力"], a: 0, e: "実力 = real ability/competence (potential skill). 実績 = a proven track record (results already achieved). 勢力 = power/influence of a force. 権力 = (political) power/authority." },
      { t: "meaning", s: "「実力」の意味は？", o: ["real ability; true skill; competence", "a proven track record of results", "power/influence of a force", "political power; authority"], a: 0, e: "実力 is genuine ability (実力者 = an influential capable person, 実力を発揮 = show one's true skill). 実績 is the record of what one has actually accomplished." }
    ]
  },
  {
    id: "n2-0178", w: "中間", r: "ちゅうかん", m: "middle; midway; intermediate; interim", c: "noun", lv: 1,
    ex: [{ jp: "来週、中間テストがある。", en: "There's a midterm exam next week." }],
    qs: [
      { t: "fitb", s: "二つの意見の＿＿＿＿をとって、折衷案をまとめた。", en: "We took a middle position between the two opinions and put together a compromise.", o: ["中間", "中心", "中央", "途中"], a: 0, e: "中間 = the middle/midway point between two things; interim. 中心 = the center/core (focal point). 中央 = the center (central location). 途中 = on the way/midway through a process." },
      { t: "meaning", s: "「中間」の意味は？", o: ["middle; midway; intermediate; interim", "the center; core; focal point", "the center (central location)", "on the way; midway through a process"], a: 0, e: "中間 is the point or stage between two extremes (中間報告 = interim report, 中間地点 = midpoint)." }
    ]
  },
  {
    id: "n2-0179", w: "怪しい", r: "あやしい", m: "suspicious; dubious; doubtful; questionable", c: "iadj", lv: 1,
    ex: [{ jp: "夜中に怪しい物音が聞こえた。", en: "I heard a suspicious noise in the middle of the night." }],
    qs: [
      { t: "fitb", s: "あの店の話は＿＿＿＿ので、契約する前によく調べたほうがいい。", en: "That shop's story is dubious, so you'd better investigate well before signing.", o: ["怪しい", "正しい", "親しい", "等しい"], a: 0, e: "怪しい = suspicious/dubious/doubtful. 正しい = correct/right. 親しい = close/intimate (friendly). 等しい = equal/identical." },
      { t: "meaning", s: "「怪しい」の意味は？", o: ["suspicious; dubious; doubtful", "correct; right", "close; intimate; friendly", "equal; identical"], a: 0, e: "怪しい marks something untrustworthy or uncertain (怪しい人物 = a suspicious person, 雲行きが怪しい = the situation looks doubtful)." }
    ]
  },
  {
    id: "n2-0180", w: "こうして", r: "こうして", m: "in this way; thus; and so", c: "adv", lv: 1,
    ex: [{ jp: "こうして二人は結婚し、幸せに暮らした。", en: "And so the two married and lived happily." }],
    qs: [
      { t: "fitb", s: "努力を重ねた結果、＿＿＿＿彼は夢を実現させた。", en: "As a result of his repeated efforts, thus he realized his dream.", o: ["こうして", "それでも", "たとえば", "ところが"], a: 0, e: "こうして = in this way/thus (summarizing how a result came about). それでも = even so/nevertheless. たとえば = for example. ところが = however/but (unexpected turn)." },
      { t: "meaning", s: "「こうして」の意味は？", o: ["in this way; thus; and so", "even so; nevertheless", "for example", "however; but (unexpected turn)"], a: 0, e: "こうして connects a process to its outcome — 'in this manner / and so' (こうして〜することになった = and thus it came to be)." }
    ]
  },
  {
    id: "n2-0181", w: "消化", r: "しょうか", m: "digestion; (figurative) absorbing/processing", c: "noun", lv: 1,
    ex: [{ jp: "よく噛むと消化がよくなる。", en: "Chewing well improves digestion." }],
    qs: [
      { t: "fitb", s: "脂っこい食事は＿＿＿＿に時間がかかり、胃に負担をかける。", en: "Greasy meals take time to digest and burden the stomach.", o: ["消化", "吸収", "分解", "排出"], a: 0, e: "消化 = digestion (breaking down food in the body); figuratively, absorbing knowledge or clearing tasks. 吸収 = absorption (taking in). 分解 = breaking apart/decomposition. 排出 = discharge/excretion (putting out)." },
      { t: "meaning", s: "「消化」の意味は？", o: ["digestion; absorbing/processing", "absorption; taking in", "decomposition; breaking apart", "discharge; excretion"], a: 0, e: "消化 is digesting food (消化不良 = indigestion) and figuratively processing/getting through things (スケジュールを消化する = work through a schedule)." }
    ]
  },
  {
    id: "n2-0182", w: "分類", r: "ぶんるい", m: "classification; categorization; sorting into types", c: "noun", lv: 1,
    ex: [{ jp: "本をジャンルごとに分類した。", en: "I classified the books by genre." }],
    qs: [
      { t: "fitb", s: "集めたデータを、いくつかのグループに＿＿＿＿する。", en: "We classify the collected data into several groups.", o: ["分類", "分解", "分析", "区別"], a: 0, e: "分類 = sorting things into categories/types. 分解 = taking apart/decomposing. 分析 = analysis (examining components in detail). 区別 = distinguishing/telling apart (drawing a line between)." },
      { t: "meaning", s: "「分類」の意味は？", o: ["classification; sorting into categories", "disassembly; decomposition", "analysis; detailed examination", "distinguishing; telling apart"], a: 0, e: "分類 groups items by shared traits (分類表 = classification table). 区別 just distinguishes two things; 分析 breaks something down to study it." }
    ]
  },
  {
    id: "n2-0183", w: "看板", r: "かんばん", m: "signboard; sign; (figurative) public face/drawing card", c: "noun", lv: 1,
    ex: [{ jp: "店の前に大きな看板が立っている。", en: "A large signboard stands in front of the shop." }],
    qs: [
      { t: "fitb", s: "その俳優は劇団の＿＿＿＿として観客を集めている。", en: "That actor draws audiences as the theater troupe's star attraction.", o: ["看板", "表札", "標識", "見本"], a: 0, e: "看板 = a signboard; figuratively the public face or main draw. 表札 = a nameplate (on a house). 標識 = a (road/traffic) sign/marker. 見本 = a sample/specimen." },
      { t: "meaning", s: "「看板」の意味は？", o: ["signboard; sign; public face / main draw", "a nameplate on a house", "a road/traffic sign or marker", "a sample; specimen"], a: 0, e: "看板 is a shop sign (看板を出す = put out a sign) and figuratively the star draw (看板娘 = the popular girl who draws customers, 看板商品 = flagship product)." }
    ]
  },
  {
    id: "n2-0184", w: "交代", r: "こうたい", m: "taking turns; alternation; shift; relief (substitution)", c: "noun", lv: 1,
    ex: [{ jp: "運転を交代しながら長距離を走った。", en: "We drove a long distance, taking turns at the wheel." }],
    qs: [
      { t: "fitb", s: "夜勤の看護師が朝、日勤の人と＿＿＿＿する。", en: "The night-shift nurse hands over to the day-shift person in the morning.", o: ["交代", "交流", "交換", "交差"], a: 0, e: "交代 = taking turns / changing shifts / substituting. 交流 = interaction/exchange between people. 交換 = swapping concrete things. 交差 = crossing/intersecting." },
      { t: "meaning", s: "「交代」の意味は？", o: ["taking turns; shift change; substitution", "interaction; exchange between people", "swapping concrete objects", "crossing; intersecting"], a: 0, e: "交代 means one person/thing replacing another in turn (交代制 = shift system, 選手交代 = player substitution). Also written 交替." }
    ]
  },
  {
    id: "n2-0185", w: "死体", r: "したい", m: "corpse; dead body", c: "noun", lv: 1,
    ex: [{ jp: "川で身元不明の死体が見つかった。", en: "An unidentified body was found in the river." }],
    qs: [
      { t: "fitb", s: "警察は現場で発見された＿＿＿＿の身元を調べている。", en: "The police are investigating the identity of the body found at the scene.", o: ["死体", "遺体", "死亡", "葬式"], a: 0, e: "死体 = corpse/dead body (clinical/blunt, used in crime contexts). 遺体 = the (deceased person's) remains (respectful term). 死亡 = death/decease (the event/fact). 葬式 = a funeral." },
      { t: "meaning", s: "「死体」の意味は？", o: ["corpse; dead body (blunt term)", "the deceased's remains (respectful)", "death; decease (the fact)", "a funeral"], a: 0, e: "死体 is a blunt term for a dead body, common in crime/forensic contexts (死体遺棄 = disposal of a body). For respect toward the deceased, use 遺体." }
    ]
  },
  {
    id: "n2-0186", w: "せめて", r: "せめて", m: "at least; if nothing else; at the very least (a modest wish)", c: "adv", lv: 1,
    ex: [{ jp: "せめて一言、お礼を言いたかった。", en: "I wanted to at least say a word of thanks." }],
    qs: [
      { t: "fitb", s: "全部は無理でも、＿＿＿＿半分だけでも終わらせたい。", en: "Even if not all of it, I'd like to finish at least half.", o: ["せめて", "どうせ", "まさか", "せいぜい"], a: 0, e: "せめて = at least (expressing a minimum hope/wish). どうせ = anyway/in any case (resigned). まさか = surely not/no way. せいぜい = at most/at best (upper limit)." },
      { t: "meaning", s: "「せめて」の意味は？", o: ["at least; if nothing else (a modest wish)", "anyway; in any case (resigned)", "surely not; no way", "at most; at best"], a: 0, e: "せめて expresses settling for a minimum amount as a wish (せめて〜だけでも = at least just ~). It conveys longing for a bare-minimum outcome." }
    ]
  },
  {
    id: "n2-0187", w: "それなら", r: "それなら", m: "if that's the case; in that case; then", c: "adv", lv: 1,
    ex: [{ jp: "疲れたの？それなら少し休もう。", en: "You're tired? In that case, let's rest a bit." }],
    qs: [
      { t: "fitb", s: "予算が足りないんですね。＿＿＿＿、計画を見直しましょう。", en: "So the budget is short. In that case, let's review the plan.", o: ["それなら", "それとも", "それなのに", "それでは失礼"], a: 0, e: "それなら = if that's the case/then (drawing a conclusion from what was said). それとも = or (else) (choosing between options). それなのに = and yet/despite that. The fourth is a closing phrase, not a connector here." },
      { t: "meaning", s: "「それなら」の意味は？", o: ["if that's the case; in that case; then", "or (else); alternatively", "and yet; despite that", "(a closing/parting phrase)"], a: 0, e: "それなら takes the other person's statement as a premise and responds accordingly ('if so, then...'). ≒ だったら/では." }
    ]
  },
  {
    id: "n2-0188", w: "手続き", r: "てつづき", m: "procedure; formalities; (legal/administrative) process", c: "noun", lv: 1,
    ex: [{ jp: "入国の手続きには時間がかかった。", en: "The immigration procedures took time." }],
    qs: [
      { t: "fitb", s: "口座を開くための＿＿＿＿は、窓口で行えます。", en: "The procedure to open an account can be done at the counter.", o: ["手続き", "手間", "手順", "手当"], a: 0, e: "手続き = formal procedures/formalities (often paperwork). 手間 = trouble/labor/effort required. 手順 = the order of steps/sequence to do something. 手当 = an allowance/benefit; (also) medical treatment." },
      { t: "meaning", s: "「手続き」の意味は？", o: ["procedure; formalities; official process", "trouble; labor required", "the order of steps; sequence", "an allowance; or medical treatment"], a: 0, e: "手続き refers to the formal steps required to accomplish something official (手続きを踏む = follow due procedure, 手続きが面倒 = the paperwork is a hassle). 手順 is the order of steps in a task." }
    ]
  },
  {
    id: "n2-0189", w: "日時", r: "にちじ", m: "date and time (of a scheduled event)", c: "noun", lv: 1,
    ex: [{ jp: "会議の日時はまだ決まっていない。", en: "The date and time of the meeting hasn't been decided yet." }],
    qs: [
      { t: "fitb", s: "試験の＿＿＿＿と場所を、受験票で必ず確認してください。", en: "Be sure to check the exam's date/time and location on your admission ticket.", o: ["日時", "日程", "期日", "時刻"], a: 0, e: "日時 = the specific date and time of an event. 日程 = a schedule/itinerary (the program of days). 期日 = a due date/appointed day. 時刻 = a precise point in time/clock time." },
      { t: "meaning", s: "「日時」の意味は？", o: ["date and time of a scheduled event", "a schedule; itinerary", "a due date; appointed day", "a precise clock time"], a: 0, e: "日時 combines the day and the clock time of an event (開催日時 = date and time of an event). 日程 is the fuller schedule of activities." }
    ]
  },
  {
    id: "n2-0190", w: "反映", r: "はんえい", m: "reflection; reflecting (an opinion, condition) in something", c: "noun", lv: 1,
    ex: [{ jp: "アンケートの結果を商品開発に反映する。", en: "We reflect the survey results in product development." }],
    qs: [
      { t: "fitb", s: "作品には作者の人生観が色濃く＿＿＿＿されている。", en: "The author's outlook on life is strongly reflected in the work.", o: ["反映", "反省", "反応", "反対"], a: 0, e: "反映 = reflecting/mirroring (one thing showing up in another). 反省 = reflection/self-examination (regret). 反応 = a reaction/response. 反対 = opposition/being against." },
      { t: "meaning", s: "「反映」の意味は？", o: ["reflection; reflecting something in another", "self-reflection; regret", "a reaction; response", "opposition; being against"], a: 0, e: "反映 means one thing being mirrored or incorporated in another (意見を反映する = reflect opinions, 世相を反映 = reflect the times)." }
    ]
  },
  {
    id: "n2-0191", w: "用語", r: "ようご", m: "term; terminology; technical vocabulary", c: "noun", lv: 1,
    ex: [{ jp: "専門用語が多くて、説明が理解できなかった。", en: "There were so many technical terms that I couldn't understand the explanation." }],
    qs: [
      { t: "fitb", s: "法律の＿＿＿＿は難しいので、注釈が付いている。", en: "Legal terminology is difficult, so notes are attached.", o: ["用語", "単語", "言語", "語学"], a: 0, e: "用語 = a (specialized) term/terminology of a field. 単語 = a word (vocabulary item). 言語 = language (a system). 語学 = language study/learning." },
      { t: "meaning", s: "「用語」の意味は？", o: ["a term; terminology of a field", "a word; vocabulary item", "language (a system)", "language study; linguistics"], a: 0, e: "用語 refers to the specialized terms used in a particular domain (専門用語 = technical terms, 用語集 = glossary). 単語 is just any word." }
    ]
  },
  {
    id: "n2-0192", w: "売上", r: "うりあげ", m: "sales; revenue; proceeds; turnover", c: "noun", lv: 1,
    ex: [{ jp: "今月の売上は先月を上回った。", en: "This month's sales exceeded last month's." }],
    qs: [
      { t: "fitb", s: "新商品のおかげで、店の＿＿＿＿が大きく伸びた。", en: "Thanks to the new product, the store's sales grew significantly.", o: ["売上", "利益", "費用", "価格"], a: 0, e: "売上 = total sales/revenue (money taken in). 利益 = profit (revenue minus costs). 費用 = expenses/costs. 価格 = the price (of an item)." },
      { t: "meaning", s: "「売上」の意味は？", o: ["sales; revenue; proceeds; turnover", "profit (after costs)", "expenses; costs", "the price of an item"], a: 0, e: "売上(げ) is gross sales/revenue (売上高 = sales figures). Distinct from 利益 (profit, what's left after expenses)." }
    ]
  },
  {
    id: "n2-0193", w: "中世", r: "ちゅうせい", m: "the Middle Ages; medieval period", c: "noun", lv: 1,
    ex: [{ jp: "この城は中世に建てられた。", en: "This castle was built in the Middle Ages." }],
    qs: [
      { t: "fitb", s: "ヨーロッパの＿＿＿＿には、多くの大聖堂が造られた。", en: "In the European Middle Ages, many cathedrals were built.", o: ["中世", "近代", "古代", "現代"], a: 0, e: "中世 = the Middle Ages/medieval era. 近代 = the modern era (recent centuries). 古代 = ancient times. 現代 = the present day/contemporary era." },
      { t: "meaning", s: "「中世」の意味は？", o: ["the Middle Ages; medieval period", "the modern era (recent centuries)", "ancient times", "the present day; contemporary era"], a: 0, e: "中世 is the historical medieval period, between 古代 (ancient) and 近代 (modern)." }
    ]
  },
  {
    id: "n2-0194", w: "反省", r: "はんせい", m: "self-reflection; reconsideration; regret over one's conduct", c: "noun", lv: 1,
    ex: [{ jp: "今日の失敗を反省して、明日に生かそう。", en: "Let's reflect on today's failure and make use of it tomorrow." }],
    qs: [
      { t: "fitb", s: "彼は自分の態度を深く＿＿＿＿し、皆に謝った。", en: "He reflected deeply on his attitude and apologized to everyone.", o: ["反省", "反映", "後悔", "回想"], a: 0, e: "反省 = looking back critically on one's own conduct (to improve). 反映 = reflecting one thing in another. 後悔 = regret (wishing one hadn't). 回想 = reminiscence/recollection (looking back fondly/neutrally)." },
      { t: "meaning", s: "「反省」の意味は？", o: ["self-reflection on one's conduct; reconsideration", "reflecting one thing in another", "regret; wishing one hadn't", "reminiscence; recollection"], a: 0, e: "反省 means examining your own actions self-critically to do better (反省会 = a review/post-mortem meeting). 後悔 is mere regret without the corrective intent." }
    ]
  },
  {
    id: "n2-0195", w: "こっそり", r: "こっそり", m: "secretly; stealthily; on the sly", c: "adv", lv: 1,
    ex: [{ jp: "彼は授業中にこっそりお菓子を食べた。", en: "He secretly ate snacks during class." }],
    qs: [
      { t: "fitb", s: "驚かせようと、誕生日プレゼントを＿＿＿＿用意した。", en: "To surprise her, I secretly prepared a birthday present.", o: ["こっそり", "はっきり", "うっかり", "のんびり"], a: 0, e: "こっそり = secretly/stealthily (so others don't notice). はっきり = clearly/distinctly. うっかり = carelessly/absent-mindedly. のんびり = leisurely/relaxed." },
      { t: "meaning", s: "「こっそり」の意味は？", o: ["secretly; stealthily; on the sly", "clearly; distinctly", "carelessly; absent-mindedly", "leisurely; in a relaxed way"], a: 0, e: "こっそり describes doing something quietly so as not to be noticed (こっそり抜け出す = slip out unnoticed)." }
    ]
  },
  {
    id: "n2-0196", w: "早速", r: "さっそく", m: "at once; right away; promptly (acting without delay)", c: "adv", lv: 1,
    ex: [{ jp: "届いた本を早速読み始めた。", en: "I started reading the book that arrived right away." }],
    qs: [
      { t: "fitb", s: "ご連絡ありがとうございます。＿＿＿＿ですが、本題に入ります。", en: "Thank you for contacting me. Without delay, let me get to the main point.", o: ["早速", "ようやく", "次第に", "いまだに"], a: 0, e: "早速 = promptly/right away (taking action without delay). ようやく = finally/at last (after a long wait). 次第に = gradually. いまだに = still (even now), used for things that ought to have changed." },
      { t: "meaning", s: "「早速」の意味は？", o: ["at once; right away; promptly", "finally; at last (after a wait)", "gradually; little by little", "still; even now (overdue)"], a: 0, e: "早速 means acting immediately upon something (早速とりかかる = get started right away). Often a polite lead-in to getting to business." }
    ]
  },
  {
    id: "n2-0197", w: "上級", r: "じょうきゅう", m: "advanced level; senior grade; upper class (level)", c: "noun", lv: 1,
    ex: [{ jp: "彼女は上級の日本語クラスに進んだ。", en: "She advanced to the upper-level Japanese class." }],
    qs: [
      { t: "fitb", s: "基礎を終えたら、＿＿＿＿コースで応用力を鍛える。", en: "After finishing the basics, you build applied skills in the advanced course.", o: ["上級", "初級", "中級", "高級"], a: 0, e: "上級 = advanced/senior level (in skill or rank). 初級 = beginner level. 中級 = intermediate level. 高級 = luxury/high-class (in quality/price, not skill rank)." },
      { t: "meaning", s: "「上級」の意味は？", o: ["advanced level; senior grade", "beginner level", "intermediate level", "luxury; high-class (quality)"], a: 0, e: "上級 is the higher tier in a graded sequence (上級者 = advanced learner, 上級職 = senior post). Don't confuse with 高級 (luxury/expensive)." }
    ]
  },
  {
    id: "n2-0198", w: "測定", r: "そくてい", m: "measurement; gauging (with instruments)", c: "noun", lv: 1,
    ex: [{ jp: "機械で部屋の温度を測定する。", en: "We measure the room temperature with a device." }],
    qs: [
      { t: "fitb", s: "専用の機器で、騒音のレベルを正確に＿＿＿＿した。", en: "We accurately measured the noise level with dedicated equipment.", o: ["測定", "計算", "観察", "判定"], a: 0, e: "測定 = measuring a quantity with instruments. 計算 = calculation/computing numbers. 観察 = observation (watching closely). 判定 = judgment/ruling (deciding a result)." },
      { t: "meaning", s: "「測定」の意味は？", o: ["measurement; gauging with instruments", "calculation; computing numbers", "observation; watching closely", "judgment; ruling on a result"], a: 0, e: "測定 is taking a precise measurement (測定器 = measuring instrument, 体力測定 = fitness measurement). The verb 計る/測る underlies it." }
    ]
  },
  {
    id: "n2-0199", w: "問い合わせ", r: "といあわせ", m: "inquiry; query; request for information", c: "noun", lv: 1,
    ex: [{ jp: "商品についての問い合わせが多い。", en: "There are many inquiries about the product." }],
    qs: [
      { t: "fitb", s: "詳しいことは、下記の窓口まで＿＿＿＿ください。", en: "For details, please direct your inquiry to the desk below.", o: ["お問い合わせ", "お知らせ", "お断り", "お見舞い"], a: 0, e: "問い合わせ = an inquiry/asking for information. お知らせ = a notice/announcement (informing). お断り = a refusal/declining. お見舞い = a get-well visit/sympathy gift." },
      { t: "meaning", s: "「問い合わせ」の意味は？", o: ["inquiry; query; request for information", "a notice; announcement", "a refusal; declining", "a get-well visit or gift"], a: 0, e: "問い合わせ is asking a question to obtain information (問い合わせ先 = contact/inquiry desk, 在庫の問い合わせ = a stock inquiry)." }
    ]
  },
  {
    id: "n2-0200", w: "透明", r: "とうめい", m: "transparent; clear; see-through", c: "naadj", lv: 1,
    ex: [{ jp: "その湖の水は透明で底まで見える。", en: "That lake's water is so clear you can see to the bottom." }],
    qs: [
      { t: "fitb", s: "このガラスは＿＿＿＿なので、向こう側がよく見える。", en: "This glass is transparent, so you can see clearly to the other side.", o: ["透明", "清潔", "鮮明", "公正"], a: 0, e: "透明 = transparent/see-through. 清潔 = clean/hygienic. 鮮明 = vivid/sharp (clear image). 公正 = fair/impartial (just). Note: 透明 is also used figuratively for openness (透明性 = transparency in governance)." },
      { t: "meaning", s: "「透明」の意味は？", o: ["transparent; clear; see-through", "clean; hygienic", "vivid; sharp (of an image)", "fair; impartial; just"], a: 0, e: "透明 means see-through (透明なガラス = clear glass) and figuratively openness (透明性 = transparency, accountability)." }
    ]
  },
  {
    id: "n2-0201", w: "花火", r: "はなび", m: "fireworks", c: "noun", lv: 1,
    ex: [{ jp: "夏になると、川辺で花火が打ち上げられる。", en: "In summer, fireworks are set off by the riverside." }],
    qs: [
      { t: "fitb", s: "夜空に大輪の＿＿＿＿が次々と上がった。", en: "Large fireworks went up one after another into the night sky.", o: ["花火", "花束", "花壇", "火災"], a: 0, e: "花火 = fireworks. 花束 = a bouquet of flowers. 花壇 = a flower bed. 火災 = a fire (disaster)." },
      { t: "meaning", s: "「花火」の意味は？", o: ["fireworks", "a bouquet of flowers", "a flower bed", "a fire; a blaze (disaster)"], a: 0, e: "花火 means fireworks (花火大会 = fireworks festival, 線香花火 = sparklers)." }
    ]
  },
  {
    id: "n2-0202", w: "倉庫", r: "そうこ", m: "warehouse; storehouse", c: "noun", lv: 1,
    ex: [{ jp: "在庫は近くの倉庫に保管されている。", en: "The stock is kept in a nearby warehouse." }],
    qs: [
      { t: "fitb", s: "季節外れの商品は、いったん＿＿＿＿にしまっておく。", en: "Out-of-season goods are put away in the warehouse for now.", o: ["倉庫", "車庫", "金庫", "書庫"], a: 0, e: "倉庫 = a warehouse/storehouse (for goods). 車庫 = a garage (for vehicles). 金庫 = a safe/vault (for money/valuables). 書庫 = a book storage room/stacks." },
      { t: "meaning", s: "「倉庫」の意味は？", o: ["warehouse; storehouse", "a garage for vehicles", "a safe; a vault", "a book storage room; stacks"], a: 0, e: "倉庫 is a building for storing goods (倉庫業 = warehousing, 物流倉庫 = distribution warehouse)." }
    ]
  },
  {
    id: "n2-0203", w: "発想", r: "はっそう", m: "way of thinking; idea; conception; approach", c: "noun", lv: 1,
    ex: [{ jp: "彼の発想はいつもユニークだ。", en: "His ideas are always unique." }],
    qs: [
      { t: "fitb", s: "従来の枠にとらわれない、柔軟な＿＿＿＿が求められる。", en: "A flexible way of thinking, unbound by conventional frameworks, is needed.", o: ["発想", "発見", "発展", "発生"], a: 0, e: "発想 = a way of thinking/conceiving ideas (the mental approach). 発見 = discovery (finding something). 発展 = development/growth. 発生 = occurrence/outbreak." },
      { t: "meaning", s: "「発想」の意味は？", o: ["way of thinking; idea; conception; approach", "discovery; finding something", "development; growth", "occurrence; outbreak"], a: 0, e: "発想 is how one conceives ideas — one's mindset or approach (発想の転換 = a shift in thinking, 自由な発想 = free-form ideas). ≒ 考え方." }
    ]
  },
  {
    id: "n2-0204", w: "瞳", r: "ひとみ", m: "pupil (of the eye); (poetically) the eyes", c: "noun", lv: 1,
    ex: [{ jp: "赤ん坊が大きな瞳でこちらを見つめた。", en: "The baby gazed at us with big eyes." }],
    qs: [
      { t: "fitb", s: "彼女の澄んだ＿＿＿＿に吸い込まれそうになった。", en: "I felt almost drawn into her clear eyes.", o: ["瞳", "眉", "頬", "額"], a: 0, e: "瞳 = the pupil/the eyes (often poetic). 眉(まゆ) = eyebrow. 頬(ほお) = cheek. 額(ひたい) = forehead." },
      { t: "meaning", s: "「瞳」の意味は？", o: ["pupil of the eye; the eyes (poetic)", "eyebrow", "cheek", "forehead"], a: 0, e: "瞳 literally is the pupil but is often used poetically for the eyes (黒い瞳 = dark eyes, 瞳を閉じる = close one's eyes)." }
    ]
  },
  {
    id: "n2-0205", w: "皮膚", r: "ひふ", m: "skin (of the body)", c: "noun", lv: 1,
    ex: [{ jp: "乾燥で皮膚がかさかさになった。", en: "My skin got rough from the dryness." }],
    qs: [
      { t: "fitb", s: "紫外線は＿＿＿＿に大きなダメージを与える。", en: "Ultraviolet rays cause major damage to the skin.", o: ["皮膚", "筋肉", "骨格", "内臓"], a: 0, e: "皮膚 = skin (the body's outer covering). 筋肉 = muscle. 骨格 = skeleton/bone structure. 内臓 = internal organs." },
      { t: "meaning", s: "「皮膚」の意味は？", o: ["skin (of the body)", "muscle", "skeleton; bone structure", "internal organs"], a: 0, e: "皮膚 is the medical/general word for skin (皮膚科 = dermatology, 皮膚病 = skin disease). 肌(はだ) is the everyday word emphasizing texture/appearance." }
    ]
  },
  {
    id: "n2-0206", w: "応用", r: "おうよう", m: "application; putting to practical use; applying (knowledge)", c: "noun", lv: 1,
    ex: [{ jp: "習った理論を実生活に応用する。", en: "I apply the theory I learned to real life." }],
    qs: [
      { t: "fitb", s: "基礎を理解していれば、＿＿＿＿問題も解けるはずだ。", en: "If you understand the basics, you should be able to solve applied problems too.", o: ["応用", "基礎", "原理", "実験"], a: 0, e: "応用 = applying knowledge in practice (building on the basics). 基礎 = the fundamentals (the opposite end). 原理 = an underlying principle. 実験 = an experiment." },
      { t: "meaning", s: "「応用」の意味は？", o: ["application; putting knowledge to practical use", "the fundamentals; basics", "an underlying principle", "an experiment"], a: 0, e: "応用 means taking basic knowledge and applying it (応用力 = ability to apply, 応用問題 = applied/word problems). Its counterpart is 基礎 (the basics)." }
    ]
  },
  {
    id: "n2-0207", w: "正面", r: "しょうめん", m: "the front; the facade; directly opposite", c: "noun", lv: 1,
    ex: [{ jp: "建物の正面に大きな時計がある。", en: "There's a large clock on the front of the building." }],
    qs: [
      { t: "fitb", s: "問題から逃げず、＿＿＿＿から向き合うべきだ。", en: "You should face the problem head-on rather than running from it.", o: ["正面", "側面", "背面", "裏面"], a: 0, e: "正面 = the front/facing side; head-on. 側面 = the side/a side aspect. 背面 = the back/rear side. 裏面 = the reverse/back surface (of paper, a coin)." },
      { t: "meaning", s: "「正面」の意味は？", o: ["the front; the facade; directly opposite", "the side; a side aspect", "the back; rear side", "the reverse; back surface"], a: 0, e: "正面 is the front-facing side (正面玄関 = main entrance, 正面から = head-on/directly). 正面衝突 = a head-on collision." }
    ]
  },
  {
    id: "n2-0208", w: "職人", r: "しょくにん", m: "craftsman; artisan; skilled tradesperson", c: "noun", lv: 1,
    ex: [{ jp: "この器は職人が一つ一つ手作りしている。", en: "These vessels are handmade one by one by craftsmen." }],
    qs: [
      { t: "fitb", s: "長年修行を積んだ＿＿＿＿の技は見事だ。", en: "The skill of the artisan who trained for many years is magnificent.", o: ["職人", "素人", "商人", "職員"], a: 0, e: "職人 = a skilled craftsman/artisan. 素人(しろうと) = an amateur/layperson. 商人(しょうにん) = a merchant/trader. 職員 = a staff member/employee (of an institution)." },
      { t: "meaning", s: "「職人」の意味は？", o: ["craftsman; artisan; skilled tradesperson", "an amateur; a layperson", "a merchant; trader", "a staff member; employee"], a: 0, e: "職人 is a skilled manual craftsperson (職人技 = artisan's skill, 寿司職人 = sushi chef). Opposite of 素人 (amateur)." }
    ]
  },
  {
    id: "n2-0209", w: "分解", r: "ぶんかい", m: "taking apart; disassembly; decomposition; breaking down", c: "noun", lv: 1,
    ex: [{ jp: "時計を分解して、中の仕組みを調べた。", en: "I took the watch apart to examine the mechanism inside." }],
    qs: [
      { t: "fitb", s: "微生物が有機物を＿＿＿＿し、土に返す。", en: "Microorganisms decompose organic matter and return it to the soil.", o: ["分解", "分類", "分割", "分布"], a: 0, e: "分解 = taking apart / breaking down into components (physical or chemical). 分類 = sorting into categories. 分割 = dividing into portions/installments. 分布 = distribution (how things are spread out)." },
      { t: "meaning", s: "「分解」の意味は？", o: ["disassembly; decomposition; breaking down", "classification; sorting into categories", "division into portions or installments", "distribution; how things are spread"], a: 0, e: "分解 means breaking something into its parts (分解掃除 = take apart and clean) or chemical breakdown (分解する = decompose). The verb is 分解する." }
    ]
  },
  {
    id: "n2-0210", w: "法則", r: "ほうそく", m: "law; rule; principle (especially of nature/science)", c: "noun", lv: 1,
    ex: [{ jp: "物が落ちるのは重力の法則による。", en: "Objects fall due to the law of gravity." }],
    qs: [
      { t: "fitb", s: "市場には需要と供給の＿＿＿＿が働いている。", en: "The law of supply and demand operates in the market.", o: ["法則", "規則", "法律", "原則"], a: 0, e: "法則 = a (natural/scientific) law or invariable rule. 規則 = a rule/regulation (set by people). 法律 = a (legal) law/statute. 原則 = a principle (general rule, with possible exceptions)." },
      { t: "meaning", s: "「法則」の意味は？", o: ["a law/rule/principle (esp. of nature)", "a rule; regulation set by people", "a legal law; statute", "a principle; general rule (with exceptions)"], a: 0, e: "法則 is an invariable law, often of nature or logic (万有引力の法則 = law of universal gravitation, 一定の法則 = a fixed pattern). 規則/法律 are human-made rules." }
    ]
  },
  {
    id: "n2-0211", w: "集会", r: "しゅうかい", m: "meeting; assembly; gathering (organized)", c: "noun", lv: 1,
    ex: [{ jp: "住民が公民館で集会を開いた。", en: "The residents held a meeting at the community center." }],
    qs: [
      { t: "fitb", s: "反対派は広場で大規模な抗議＿＿＿＿を行った。", en: "The opposition held a large-scale protest rally in the plaza.", o: ["集会", "集合", "集中", "集団"], a: 0, e: "集会 = an organized assembly/gathering (often political/social). 集合 = meeting up at a set place/time. 集中 = concentration/focusing. 集団 = a group/crowd (the body of people itself)." },
      { t: "meaning", s: "「集会」の意味は？", o: ["an organized meeting; assembly; rally", "meeting up at a set place/time", "concentration; focusing", "a group; crowd (the people)"], a: 0, e: "集会 is a gathering held for a purpose (集会の自由 = freedom of assembly, 抗議集会 = protest rally). 集合 just means converging at a meeting point." }
    ]
  },
  {
    id: "n2-0212", w: "商業", r: "しょうぎょう", m: "commerce; trade; business (as a sector)", c: "noun", lv: 1,
    ex: [{ jp: "この地域は古くから商業が盛んだ。", en: "Commerce has flourished in this area since long ago." }],
    qs: [
      { t: "fitb", s: "駅前は大型店が並ぶ＿＿＿＿地区になっている。", en: "The area in front of the station has become a commercial district lined with big stores.", o: ["商業", "工業", "農業", "産業"], a: 0, e: "商業 = commerce/trade (buying and selling). 工業 = (manufacturing) industry. 農業 = agriculture. 産業 = industry in the broad sense (all economic sectors)." },
      { t: "meaning", s: "「商業」の意味は？", o: ["commerce; trade; the business sector", "manufacturing industry", "agriculture; farming", "industry in the broad sense"], a: 0, e: "商業 refers to commerce and trade (商業施設 = commercial facility, 商業的 = commercial). 産業 is the umbrella term covering all industries." }
    ]
  },
  {
    id: "n2-0213", w: "生存", r: "せいぞん", m: "survival; existence; staying alive", c: "noun", lv: 1,
    ex: [{ jp: "事故から三日後、生存者が発見された。", en: "Three days after the accident, a survivor was found." }],
    qs: [
      { t: "fitb", s: "厳しい環境の中で、その生物は懸命に＿＿＿＿している。", en: "In the harsh environment, that creature survives desperately.", o: ["生存", "生産", "生活", "誕生"], a: 0, e: "生存 = survival/staying alive (continuing to exist). 生産 = production/manufacturing. 生活 = daily life/living (lifestyle). 誕生 = birth/coming into being." },
      { t: "meaning", s: "「生存」の意味は？", o: ["survival; existence; staying alive", "production; manufacturing", "daily life; living; lifestyle", "birth; coming into being"], a: 0, e: "生存 is the fact of remaining alive (生存者 = survivor, 生存競争 = struggle for survival)." }
    ]
  },
  {
    id: "n2-0214", w: "接近", r: "せっきん", m: "approach; drawing near; getting closer", c: "noun", lv: 1,
    ex: [{ jp: "台風が日本に接近している。", en: "A typhoon is approaching Japan." }],
    qs: [
      { t: "fitb", s: "二つの船が危険なほど＿＿＿＿し、衝突しかけた。", en: "The two ships drew dangerously close and nearly collided.", o: ["接近", "接触", "接続", "密接"], a: 0, e: "接近 = approaching/drawing near (closing distance). 接触 = contact/touching (physical, or making contact). 接続 = connection/joining (devices, lines). 密接 = close/intimate (a tight relationship). 密接 is an adjective-ish 'closely related'." },
      { t: "meaning", s: "「接近」の意味は？", o: ["approach; drawing near; getting closer", "contact; touching; making contact", "connection; joining devices or lines", "close; intimate (relationship)"], a: 0, e: "接近 means narrowing the distance to something (接近戦 = close combat, 急接近 = rapidly getting closer)." }
    ]
  },
  {
    id: "n2-0215", w: "日程", r: "にってい", m: "schedule; itinerary; program of days", c: "noun", lv: 1,
    ex: [{ jp: "旅行の日程を立てるのは楽しい。", en: "Planning a trip's itinerary is fun." }],
    qs: [
      { t: "fitb", s: "会議が延びて、その後の＿＿＿＿が全部ずれてしまった。", en: "The meeting ran long, and the whole subsequent schedule got pushed back.", o: ["日程", "予定", "期間", "行程"], a: 0, e: "日程 = a schedule/itinerary laid out over days. 予定 = a plan/what's scheduled (broad). 期間 = a span/duration of time. 行程 = the distance/route of a journey (or its stages). 日程 and 予定 overlap, but 日程 stresses the day-by-day program." },
      { t: "meaning", s: "「日程」の意味は？", o: ["schedule; itinerary; program of days", "a plan; what's scheduled (broad)", "a span; duration of time", "the route/distance of a journey"], a: 0, e: "日程 is the arranged schedule of events over days (日程調整 = arranging schedules, 過密日程 = a packed schedule)." }
    ]
  },
  {
    id: "n2-0216", w: "引っ越し", r: "ひっこし", m: "moving (house); relocation of residence", c: "noun", lv: 1,
    ex: [{ jp: "来月、隣町に引っ越しする予定だ。", en: "I plan to move to the next town over next month." }],
    qs: [
      { t: "fitb", s: "＿＿＿＿の荷造りが終わらず、夜遅くまでかかった。", en: "The packing for the move wasn't done, so it took until late at night.", o: ["引っ越し", "片付け", "掃除", "旅行"], a: 0, e: "引っ越し = moving house/relocating residence. 片付け = tidying up/putting away. 掃除 = cleaning. 旅行 = travel/a trip." },
      { t: "meaning", s: "「引っ越し」の意味は？", o: ["moving house; relocation of residence", "tidying up; putting things away", "cleaning", "travel; a trip"], a: 0, e: "引っ越し means changing where you live (引っ越し業者 = moving company, 引っ越し祝い = housewarming gift). The verb is 引っ越す." }
    ]
  },
  {
    id: "n2-0217", w: "用途", r: "ようと", m: "use; purpose; application (of an item)", c: "noun", lv: 1,
    ex: [{ jp: "この道具は用途が広い。", en: "This tool has a wide range of uses." }],
    qs: [
      { t: "fitb", s: "その部屋は会議や研修など、様々な＿＿＿＿に使える。", en: "That room can be used for various purposes such as meetings and training.", o: ["用途", "用事", "用意", "費用"], a: 0, e: "用途 = the use/purpose something serves. 用事 = an errand/something to attend to. 用意 = preparation/getting ready. 費用 = expenses/cost." },
      { t: "meaning", s: "「用途」の意味は？", o: ["use; purpose; application of an item", "an errand; business to attend to", "preparation; getting ready", "expenses; cost"], a: 0, e: "用途 refers to what something is used for (用途に応じて = depending on the use, 多用途 = multipurpose)." }
    ]
  },
  {
    id: "n2-0218", w: "過剰", r: "かじょう", m: "excess; surplus; over- (too much)", c: "naadj", lv: 1,
    ex: [{ jp: "過剰な期待は失望につながる。", en: "Excessive expectations lead to disappointment." }],
    qs: [
      { t: "fitb", s: "商品を作りすぎて、在庫が＿＿＿＿になっている。", en: "We made too many products, and inventory is in surplus.", o: ["過剰", "不足", "適度", "十分"], a: 0, e: "過剰 = excessive/in surplus (too much). 不足 = shortage/lack (the opposite). 適度 = moderate/just the right amount. 十分 = sufficient/enough." },
      { t: "meaning", s: "「過剰」の意味は？", o: ["excess; surplus; too much", "shortage; lack; insufficiency", "moderate; just the right amount", "sufficient; enough"], a: 0, e: "過剰 means more than necessary (過剰反応 = overreaction, 供給過剰 = oversupply). Opposite of 不足 (shortage)." }
    ]
  },
  {
    id: "n2-0219", w: "出勤", r: "しゅっきん", m: "going to work; attendance at work", c: "noun", lv: 1,
    ex: [{ jp: "明日は休日だが、出勤しなければならない。", en: "Tomorrow is a holiday, but I have to go to work." }],
    qs: [
      { t: "fitb", s: "電車の遅延で、＿＿＿＿時間に遅れてしまった。", en: "Due to the train delay, I was late for my start-of-work time.", o: ["出勤", "退勤", "欠勤", "通勤"], a: 0, e: "出勤 = going to / showing up for work (on a given day). 退勤 = leaving work for the day. 欠勤 = being absent from work. 通勤 = commuting (the journey to work)." },
      { t: "meaning", s: "「出勤」の意味は？", o: ["going to / showing up for work", "leaving work for the day", "being absent from work", "commuting (the journey)"], a: 0, e: "出勤 means reporting to work on a given day (出勤日 = workday, 出勤簿 = attendance record). 通勤 is the act of commuting; 出勤 is showing up." }
    ]
  },
  {
    id: "n2-0220", w: "商店", r: "しょうてん", m: "shop; store; retail business", c: "noun", lv: 1,
    ex: [{ jp: "この通りには昔ながらの商店が並んでいる。", en: "Old-style shops line this street." }],
    qs: [
      { t: "fitb", s: "駅前の＿＿＿＿街は、夕方になると買い物客でにぎわう。", en: "The shopping street in front of the station bustles with shoppers in the evening.", o: ["商店", "商品", "商社", "商人"], a: 0, e: "商店 = a shop/retail store. 商品 = merchandise/goods. 商社 = a trading company (large-scale trade). 商人 = a merchant (the person)." },
      { t: "meaning", s: "「商店」の意味は？", o: ["a shop; store; retail business", "merchandise; goods for sale", "a trading company", "a merchant; trader (person)"], a: 0, e: "商店 is a retail shop (商店街 = shopping district/arcade). 商品 is the goods sold; 商人 is the seller." }
    ]
  },
  {
    id: "n2-0221", w: "性質", r: "せいしつ", m: "nature; property; characteristic; disposition", c: "noun", lv: 1,
    ex: [{ jp: "この物質は燃えやすい性質を持つ。", en: "This substance has the property of being flammable." }],
    qs: [
      { t: "fitb", s: "彼は穏やかな＿＿＿＿で、めったに怒らない。", en: "He has a calm disposition and rarely gets angry.", o: ["性質", "性格", "体質", "品質"], a: 0, e: "性質 = inherent nature/property (of a thing or person). 性格 = personality/character (of a person specifically). 体質 = bodily constitution/predisposition. 品質 = quality (of goods)." },
      { t: "meaning", s: "「性質」の意味は？", o: ["nature; property; characteristic; disposition", "personality; character of a person", "bodily constitution; predisposition", "quality of goods"], a: 0, e: "性質 is the inherent nature of something or someone (水の性質 = properties of water; おとなしい性質 = a gentle disposition). For a person's personality specifically, 性格 is more common." }
    ]
  },
  {
    id: "n2-0222", w: "入社", r: "にゅうしゃ", m: "joining a company; entering a firm (as an employee)", c: "noun", lv: 1,
    ex: [{ jp: "彼は今年の春、この会社に入社した。", en: "He joined this company this spring." }],
    qs: [
      { t: "fitb", s: "＿＿＿＿して三年、ようやく仕事に慣れてきた。", en: "Three years after joining the company, I've finally gotten used to the work.", o: ["入社", "退社", "入学", "就職"], a: 0, e: "入社 = joining a (specific) company. 退社 = leaving a company / leaving the office for the day. 入学 = entering a school. 就職 = finding employment / getting a job (general)." },
      { t: "meaning", s: "「入社」の意味は？", o: ["joining a company as an employee", "leaving a company; clocking out", "entering a school", "finding employment; getting a job"], a: 0, e: "入社 specifically means joining a company (入社式 = company entrance ceremony, 新入社員 = new hire). 就職 is the broader act of becoming employed." }
    ]
  },
  {
    id: "n2-0223", w: "広場", r: "ひろば", m: "plaza; open square; public open space", c: "noun", lv: 1,
    ex: [{ jp: "駅前の広場で待ち合わせよう。", en: "Let's meet up at the plaza in front of the station." }],
    qs: [
      { t: "fitb", s: "イベントの日、＿＿＿＿には大勢の人が集まった。", en: "On the day of the event, a large crowd gathered in the plaza.", o: ["広場", "会場", "売場", "現場"], a: 0, e: "広場 = an open public square/plaza. 会場 = a venue (for a specific event). 売場(売り場) = a sales floor/department in a store. 現場 = the actual site/scene (of work or an incident)." },
      { t: "meaning", s: "「広場」の意味は？", o: ["plaza; open square; public open space", "a venue for an event", "a sales floor in a store", "the actual site; the scene"], a: 0, e: "広場 is an open public space where people gather (駅前広場 = station plaza, 中央広場 = central square)." }
    ]
  },
  {
    id: "n2-0224", w: "例外", r: "れいがい", m: "exception (to a rule)", c: "noun", lv: 1,
    ex: [{ jp: "このルールに例外はない。", en: "There are no exceptions to this rule." }],
    qs: [
      { t: "fitb", s: "原則は全員参加だが、病気の場合は＿＿＿＿として認める。", en: "In principle everyone participates, but illness is admitted as an exception.", o: ["例外", "例文", "実例", "前例"], a: 0, e: "例外 = an exception (a case outside the rule). 例文 = an example sentence. 実例 = a concrete/actual example. 前例 = a precedent (a prior case)." },
      { t: "meaning", s: "「例外」の意味は？", o: ["an exception to a rule", "an example sentence", "a concrete/actual example", "a precedent; prior case"], a: 0, e: "例外 is a case that falls outside the general rule (例外なく = without exception, 例外的に = exceptionally)." }
    ]
  },
  {
    id: "n2-0225", w: "一旦", r: "いったん", m: "once; for a moment; temporarily; once (something happens)", c: "adv", lv: 1,
    ex: [{ jp: "一旦家に帰ってから、また出かけた。", en: "I went home once and then went out again." }],
    qs: [
      { t: "fitb", s: "＿＿＿＿決めたことは、最後までやり通すべきだ。", en: "Once you've decided something, you should see it through to the end.", o: ["一旦", "いつも", "次第", "当然"], a: 0, e: "一旦 = once / for the time being (一旦〜たら = once ~ happens). いつも = always. 次第 = depending on / as soon as. 当然 = naturally/of course." },
      { t: "meaning", s: "「一旦」の意味は？", o: ["once; for a moment; temporarily; once (something happens)", "always; every time", "depending on; as soon as", "naturally; of course"], a: 0, e: "一旦 means doing something once or temporarily (一旦停止 = a momentary stop, 一旦中止 = suspend for now), or 'once' a condition is met (一旦始めたら = once you start)." }
    ]
  },
  {
    id: "n2-0226", w: "移転", r: "いてん", m: "relocation; moving (of an office, address); transfer", c: "noun", lv: 1,
    ex: [{ jp: "本社は来年、郊外に移転する。", en: "The head office will relocate to the suburbs next year." }],
    qs: [
      { t: "fitb", s: "事務所の＿＿＿＿に伴い、住所と電話番号が変わります。", en: "With the office relocation, the address and phone number will change.", o: ["移転", "移動", "変更", "引退"], a: 0, e: "移転 = relocating an office/base/address (a formal, often permanent move). 移動 = moving from place to place (general motion). 変更 = a change/alteration. 引退 = retirement (from a career/activity)." },
      { t: "meaning", s: "「移転」の意味は？", o: ["relocation of an office or address; transfer", "moving from place to place (general)", "a change; alteration", "retirement from a career"], a: 0, e: "移転 is relocating a fixed base such as an office or registered address (本社移転 = headquarters relocation, 移転先 = the new location)." }
    ]
  },
  {
    id: "n2-0227", w: "地味", r: "じみ", m: "plain; sober; subdued; understated", c: "naadj", lv: 1,
    ex: [{ jp: "彼女は地味な服を好んで着る。", en: "She prefers to wear plain clothes." }],
    qs: [
      { t: "fitb", s: "目立たないが、彼の仕事は＿＿＿＿だが確実だ。", en: "It doesn't stand out, but his work is plain yet dependable.", o: ["地味", "派手", "豪華", "贅沢"], a: 0, e: "地味 = plain/subdued/understated (not flashy). 派手 = showy/flashy (the opposite). 豪華 = gorgeous/lavish. 贅沢 = luxurious/extravagant." },
      { t: "meaning", s: "「地味」の意味は？", o: ["plain; sober; subdued; understated", "showy; flashy; loud", "gorgeous; lavish; splendid", "luxurious; extravagant"], a: 0, e: "地味 describes something modest and unshowy (地味な色 = a subdued color, 地味な作業 = unglamorous work). Opposite of 派手 (flashy)." }
    ]
  },
  {
    id: "n2-0228", w: "総理大臣", r: "そうりだいじん", m: "Prime Minister (of Japan)", c: "noun", lv: 1,
    ex: [{ jp: "総理大臣が記者会見を行った。", en: "The Prime Minister held a press conference." }],
    qs: [
      { t: "fitb", s: "選挙の結果、新しい＿＿＿＿が選ばれた。", en: "As a result of the election, a new Prime Minister was chosen.", o: ["総理大臣", "国会議員", "裁判官", "大統領"], a: 0, e: "総理大臣 = Prime Minister (head of Japan's government; short form 首相). 国会議員 = a Diet member (legislator). 裁判官 = a judge. 大統領 = a president (of a republic)." },
      { t: "meaning", s: "「総理大臣」の意味は？", o: ["Prime Minister (head of government)", "a Diet member; legislator", "a judge", "a president of a republic"], a: 0, e: "総理大臣 (内閣総理大臣) is Japan's Prime Minister, also called 首相. Distinct from 大統領 (president)." }
    ]
  },
  {
    id: "n2-0229", w: "予備", r: "よび", m: "spare; reserve; backup; preliminary", c: "noun", lv: 1,
    ex: [{ jp: "念のため、予備の電池を持っていく。", en: "Just in case, I'll take spare batteries." }],
    qs: [
      { t: "fitb", s: "停電に備えて、＿＿＿＿の電源を用意してある。", en: "In case of a power outage, a backup power source is prepared.", o: ["予備", "予約", "予測", "準備"], a: 0, e: "予備 = a spare/reserve/backup (extra kept in readiness). 予約 = a reservation/booking. 予測 = a prediction/forecast. 準備 = preparation (the act of getting ready)." },
      { t: "meaning", s: "「予備」の意味は？", o: ["spare; reserve; backup; preliminary", "a reservation; booking", "a prediction; forecast", "preparation; getting ready"], a: 0, e: "予備 means a spare kept in reserve (予備校 = prep school, 予備知識 = background knowledge, 予備のかぎ = a spare key)." }
    ]
  },
  {
    id: "n2-0230", w: "鑑賞", r: "かんしょう", m: "appreciation (of art); viewing/enjoying (a work)", c: "noun", lv: 1,
    ex: [{ jp: "休日は映画鑑賞を楽しんでいる。", en: "On days off, I enjoy watching movies." }],
    qs: [
      { t: "fitb", s: "美術館で名画を＿＿＿＿し、心が豊かになった。", en: "I appreciated the masterpieces at the museum and felt enriched.", o: ["鑑賞", "観察", "見物", "検査"], a: 0, e: "鑑賞 = appreciating/savoring art or beauty (with aesthetic understanding). 観察 = observation (watching closely to study). 見物 = sightseeing/watching as a spectacle. 検査 = inspection/examination/testing." },
      { t: "meaning", s: "「鑑賞」の意味は？", o: ["appreciation of art; enjoying a work aesthetically", "observation; watching closely to study", "sightseeing; watching as a spectacle", "inspection; examination; testing"], a: 0, e: "鑑賞 means appreciating art with understanding (音楽鑑賞 = listening to music, 鑑賞会 = a viewing/appreciation event). 観察 is analytical watching." }
    ]
  },
  {
    id: "n2-0231", w: "乾燥", r: "かんそう", m: "dryness; drying out; (figurative) dullness", c: "noun", lv: 1,
    ex: [{ jp: "冬は空気が乾燥して喉が痛くなる。", en: "In winter the air gets dry and my throat hurts." }],
    qs: [
      { t: "fitb", s: "洗濯物を＿＿＿＿させるため、乾燥機を使った。", en: "To dry the laundry, I used a dryer.", o: ["乾燥", "湿気", "蒸発", "凍結"], a: 0, e: "乾燥 = drying/dryness (loss of moisture). 湿気(しっけ) = humidity/dampness (the opposite). 蒸発 = evaporation. 凍結 = freezing over." },
      { t: "meaning", s: "「乾燥」の意味は？", o: ["dryness; drying out", "humidity; dampness", "evaporation", "freezing over"], a: 0, e: "乾燥 means becoming dry/lacking moisture (乾燥肌 = dry skin, 乾燥機 = a dryer). Opposite of 湿気 (dampness)." }
    ]
  },
  {
    id: "n2-0232", w: "月末", r: "げつまつ", m: "end of the month", c: "noun", lv: 1,
    ex: [{ jp: "家賃は月末までに払う。", en: "I pay the rent by the end of the month." }],
    qs: [
      { t: "fitb", s: "請求書の支払い期限は、毎月＿＿＿＿となっている。", en: "The payment deadline for invoices is the end of each month.", o: ["月末", "月初", "年末", "週末"], a: 0, e: "月末 = end of the month. 月初(げっしょ) = beginning of the month. 年末 = end of the year. 週末 = weekend." },
      { t: "meaning", s: "「月末」の意味は？", o: ["end of the month", "beginning of the month", "end of the year", "the weekend"], a: 0, e: "月末 means the last days of the month (月末締め = month-end closing). Opposite of 月初 (start of month)." }
    ]
  },
  {
    id: "n2-0233", w: "地点", r: "ちてん", m: "point; spot; location (a point on a map or route)", c: "noun", lv: 1,
    ex: [{ jp: "マラソンの折り返し地点に着いた。", en: "I reached the turnaround point of the marathon." }],
    qs: [
      { t: "fitb", s: "スタート＿＿＿＿から五キロ走ったところで給水する。", en: "You take water five kilometers from the starting point.", o: ["地点", "地域", "地区", "現地"], a: 0, e: "地点 = a specific point/spot (on a map or route). 地域 = a region/area (a broad zone). 地区 = a district/section (a designated area). 現地 = the actual site/local place." },
      { t: "meaning", s: "「地点」の意味は？", o: ["a specific point or spot on a map/route", "a region; a broad area", "a district; a designated section", "the actual site; local place"], a: 0, e: "地点 pinpoints a precise location (通過地点 = a waypoint, 現在地点 = current point). 地域/地区 refer to areas, not single points." }
    ]
  },
  {
    id: "n2-0234", w: "狙う", r: "ねらう", m: "to aim at; to target; to set one's sights on", c: "verb", lv: 1,
    ex: [{ jp: "彼は世界記録を狙っている。", en: "He is setting his sights on the world record." }],
    qs: [
      { t: "fitb", s: "敵の弱点を＿＿＿＿、一気に攻め込んだ。", en: "Targeting the enemy's weak point, they attacked all at once.", o: ["狙って", "祈って", "誇って", "補って"], a: 0, e: "狙う = to aim at/target. 祈る = to pray. 誇る = to be proud of/boast. 補う = to make up for/supplement." },
      { t: "meaning", s: "「狙う」の意味は？", o: ["to aim at; to target; to set one's sights on", "to pray; to wish for", "to be proud of; to boast", "to make up for; to supplement"], a: 0, e: "狙う means to aim for or target something (優勝を狙う = aim for victory, 命を狙う = make an attempt on someone's life). The noun is 狙い (aim)." }
    ]
  },
  {
    id: "n2-0235", w: "面積", r: "めんせき", m: "area; surface area (size of a region)", c: "noun", lv: 1,
    ex: [{ jp: "この公園の面積は東京ドーム三個分だ。", en: "This park's area is about three Tokyo Domes." }],
    qs: [
      { t: "fitb", s: "その国は人口は多いが、国土の＿＿＿＿は意外と小さい。", en: "That country has a large population, but its land area is surprisingly small.", o: ["面積", "体積", "容積", "距離"], a: 0, e: "面積 = area (2D surface size). 体積 = volume (3D space occupied). 容積 = capacity/cubic content (how much it holds). 距離 = distance (length between points)." },
      { t: "meaning", s: "「面積」の意味は？", o: ["area; surface area (2D size)", "volume; 3D space occupied", "capacity; how much it holds", "distance between points"], a: 0, e: "面積 measures two-dimensional area (土地の面積 = land area, 表面積 = surface area). 体積 is volume." }
    ]
  },
  {
    id: "n2-0236", w: "性別", r: "せいべつ", m: "sex; gender (distinction)", c: "noun", lv: 1,
    ex: [{ jp: "申込書に性別を記入する。", en: "You fill in your gender on the application form." }],
    qs: [
      { t: "fitb", s: "この仕事は＿＿＿＿に関係なく、誰でも応募できる。", en: "Anyone can apply for this job regardless of gender.", o: ["性別", "年齢", "国籍", "職業"], a: 0, e: "性別 = sex/gender (male/female distinction). 年齢 = age. 国籍 = nationality. 職業 = occupation/profession." },
      { t: "meaning", s: "「性別」の意味は？", o: ["sex; gender (male/female distinction)", "age", "nationality", "occupation; profession"], a: 0, e: "性別 refers to the distinction of sex/gender (性別欄 = gender field, 性別を問わず = regardless of gender)." }
    ]
  },
  {
    id: "n2-0237", w: "繋がる", r: "つながる", m: "to be connected; to be linked; to lead to", c: "verb", lv: 1,
    ex: [{ jp: "この道は駅まで繋がっている。", en: "This road connects to the station." }],
    qs: [
      { t: "fitb", s: "日々の小さな努力が、大きな成果に＿＿＿＿。", en: "Small daily efforts lead to big results.", o: ["繋がる", "広がる", "重なる", "当たる"], a: 0, e: "繋がる = to be connected / to lead to. 広がる = to spread/widen. 重なる = to overlap/pile up/coincide. 当たる = to hit; to be correct; to be assigned." },
      { t: "meaning", s: "「繋がる」の意味は？", o: ["to be connected; to be linked; to lead to", "to spread; to widen", "to overlap; to pile up; to coincide", "to hit; to be correct"], a: 0, e: "繋がる means to be joined or to result in (電話が繋がる = the call connects, 努力が成功に繋がる = effort leads to success). The noun is 繋がり." }
    ]
  },
  {
    id: "n2-0238", w: "加速", r: "かそく", m: "acceleration; speeding up", c: "noun", lv: 1,
    ex: [{ jp: "車は信号が青になると加速した。", en: "The car accelerated when the light turned green." }],
    qs: [
      { t: "fitb", s: "少子化が＿＿＿＿し、労働力の不足が深刻になっている。", en: "The declining birthrate is accelerating, and the labor shortage is becoming serious.", o: ["加速", "減速", "停止", "逆転"], a: 0, e: "加速 = acceleration/speeding up (figuratively, a trend intensifying). 減速 = deceleration/slowing down (the opposite). 停止 = stopping/halting. 逆転 = reversal/turning the tables." },
      { t: "meaning", s: "「加速」の意味は？", o: ["acceleration; speeding up", "deceleration; slowing down", "stopping; halting", "reversal; turning the tables"], a: 0, e: "加速 means increasing speed or pace (加速度 = acceleration rate, 加速する = pick up speed / intensify). Opposite of 減速." }
    ]
  },
  {
    id: "n2-0239", w: "水素", r: "すいそ", m: "hydrogen", c: "noun", lv: 1,
    ex: [{ jp: "水は水素と酸素からできている。", en: "Water is made of hydrogen and oxygen." }],
    qs: [
      { t: "fitb", s: "＿＿＿＿を燃料に使う車は、二酸化炭素を出さない。", en: "Cars that use hydrogen as fuel don't emit carbon dioxide.", o: ["水素", "酸素", "炭素", "窒素"], a: 0, e: "水素 = hydrogen (H). 酸素 = oxygen (O). 炭素 = carbon (C). 窒素 = nitrogen (N)." },
      { t: "meaning", s: "「水素」の意味は？", o: ["hydrogen", "oxygen", "carbon", "nitrogen"], a: 0, e: "水素 is the element hydrogen (水素エネルギー = hydrogen energy). Note 酸素 = oxygen, 炭素 = carbon." }
    ]
  },
  {
    id: "n2-0240", w: "ともかく", r: "ともかく", m: "anyhow; at any rate; in any case; setting that aside", c: "adv", lv: 1,
    ex: [{ jp: "ともかく、まず話を聞いてみよう。", en: "In any case, let's first hear them out." }],
    qs: [
      { t: "fitb", s: "結果は＿＿＿＿として、挑戦したこと自体に意味がある。", en: "Setting the result aside, there's meaning in having taken on the challenge itself.", o: ["ともかく", "もしかして", "かえって", "あいにく"], a: 0, e: "ともかく = anyhow/at any rate; (〜はともかく) 'setting ~ aside.' もしかして = maybe/by any chance. かえって = on the contrary/rather. あいにく = unfortunately/inconveniently." },
      { t: "meaning", s: "「ともかく」の意味は？", o: ["anyhow; at any rate; setting that aside", "maybe; by any chance", "on the contrary; rather", "unfortunately; inconveniently"], a: 0, e: "ともかく sets an issue aside to move on ('anyway, regardless') — 冗談はともかく = joking aside; ともかくやってみよう = let's just try it anyway." }
    ]
  },
  {
    id: "n2-0241", w: "稀", r: "まれ", m: "rare; seldom; infrequent", c: "naadj", lv: 1,
    ex: [{ jp: "これほどの大雪は稀だ。", en: "Heavy snow like this is rare." }],
    qs: [
      { t: "fitb", s: "彼ほどの才能の持ち主は、＿＿＿＿な存在だ。", en: "Someone with as much talent as him is a rare presence.", o: ["稀", "豊富", "平凡", "頻繁"], a: 0, e: "稀(まれ) = rare/seldom occurring. 豊富 = abundant/plentiful. 平凡 = ordinary/commonplace. 頻繁 = frequent (the opposite of rare)." },
      { t: "meaning", s: "「稀」の意味は？", o: ["rare; seldom; infrequent", "abundant; plentiful", "ordinary; commonplace", "frequent; happening often"], a: 0, e: "稀 means seldom occurring (稀に = rarely, 稀な例 = a rare case). Opposite of 頻繁 (frequent). Often written まれ in kana." }
    ]
  },
  {
    id: "n2-0242", w: "地面", r: "じめん", m: "the ground; the earth's surface", c: "noun", lv: 1,
    ex: [{ jp: "雨で地面がぬかるんでいる。", en: "The ground is muddy from the rain." }],
    qs: [
      { t: "fitb", s: "つまずいて、＿＿＿＿に手をついてしまった。", en: "I tripped and put my hands on the ground.", o: ["地面", "床", "壁", "天井"], a: 0, e: "地面 = the ground/earth's surface (outdoors). 床(ゆか) = the floor (indoors). 壁 = a wall. 天井 = the ceiling." },
      { t: "meaning", s: "「地面」の意味は？", o: ["the ground; the earth's surface", "the floor (indoors)", "a wall", "the ceiling"], a: 0, e: "地面 is the outdoor ground/surface of the earth (地面に座る = sit on the ground). For an indoor floor, use 床." }
    ]
  },
  {
    id: "n2-0243", w: "寿命", r: "じゅみょう", m: "lifespan; life expectancy; service life (of a thing)", c: "noun", lv: 1,
    ex: [{ jp: "日本人の平均寿命は世界でも高い。", en: "The Japanese average life expectancy is high even worldwide." }],
    qs: [
      { t: "fitb", s: "この電球は＿＿＿＿が長く、十年は持つそうだ。", en: "This bulb has a long service life and reportedly lasts ten years.", o: ["寿命", "年齢", "期限", "期間"], a: 0, e: "寿命 = lifespan (of a living thing) or service life (of an object). 年齢 = age (years lived so far). 期限 = a deadline/expiry. 期間 = a span/duration of time." },
      { t: "meaning", s: "「寿命」の意味は？", o: ["lifespan; life expectancy; service life", "age; years lived so far", "a deadline; expiry", "a span; duration of time"], a: 0, e: "寿命 is how long something lives or lasts (平均寿命 = average lifespan, 電池の寿命 = battery life)." }
    ]
  },
  {
    id: "n2-0244", w: "水分", r: "すいぶん", m: "moisture; water content; fluids", c: "noun", lv: 1,
    ex: [{ jp: "運動中はこまめに水分をとろう。", en: "Take in fluids frequently during exercise." }],
    qs: [
      { t: "fitb", s: "この果物は＿＿＿＿が多く、みずみずしい。", en: "This fruit has a lot of moisture and is juicy.", o: ["水分", "塩分", "糖分", "成分"], a: 0, e: "水分 = moisture/water content/fluids. 塩分 = salt content. 糖分 = sugar content. 成分 = a component/ingredient (general)." },
      { t: "meaning", s: "「水分」の意味は？", o: ["moisture; water content; fluids", "salt content", "sugar content", "a component; ingredient"], a: 0, e: "水分 refers to the water/moisture in something or fluids to drink (水分補給 = hydration, 水分を取る = stay hydrated)." }
    ]
  },
  {
    id: "n2-0245", w: "身分", r: "みぶん", m: "social status; rank; standing; (one's) position", c: "noun", lv: 1,
    ex: [{ jp: "受付で身分を証明する書類を見せた。", en: "I showed identification documents at the reception." }],
    qs: [
      { t: "fitb", s: "入場には、運転免許証などの＿＿＿＿証明書が必要だ。", en: "For entry, an identification document such as a driver's license is required.", o: ["身分", "身長", "資格", "立場"], a: 0, e: "身分 = social status/standing; identity (身分証明書 = ID). 身長 = body height. 資格 = a qualification/credential. 立場 = one's position/standpoint (situation)." },
      { t: "meaning", s: "「身分」の意味は？", o: ["social status; rank; standing; identity", "body height", "a qualification; credential", "one's position; standpoint"], a: 0, e: "身分 means one's social standing or identity (身分証明書 = ID card, 身分の違い = difference in status)." }
    ]
  },
  {
    id: "n2-0246", w: "欧米", r: "おうべい", m: "the West; Europe and America", c: "noun", lv: 1,
    ex: [{ jp: "この習慣は欧米から伝わった。", en: "This custom came from the West." }],
    qs: [
      { t: "fitb", s: "＿＿＿＿諸国では、握手が一般的な挨拶だ。", en: "In Western countries, a handshake is a common greeting.", o: ["欧米", "東洋", "南北", "各国"], a: 0, e: "欧米 = Europe and America (the West). 東洋 = the East/the Orient (Asia). 南北 = north and south. 各国 = each country/various countries." },
      { t: "meaning", s: "「欧米」の意味は？", o: ["the West; Europe and America", "the East; the Orient (Asia)", "north and south", "each country; various countries"], a: 0, e: "欧米 combines 欧 (Europe) and 米 (America) to mean 'the West' (欧米化 = Westernization, 欧米人 = Westerners)." }
    ]
  },
  {
    id: "n2-0247", w: "合理", r: "ごうり", m: "rationality; reason; logic (usually 合理的 = rational)", c: "noun", lv: 1,
    ex: [{ jp: "その方法は合理的で無駄がない。", en: "That method is rational and wastes nothing." }],
    qs: [
      { t: "fitb", s: "感情ではなく、＿＿＿＿的に判断することが大切だ。", en: "It's important to judge rationally rather than emotionally.", o: ["合理", "強引", "主観", "感情"], a: 0, e: "合理(的) = rational/logical/reasonable (efficient and sensible). 強引(ごういん) = forcible/pushy. 主観(的) = subjective. 感情(的) = emotional." },
      { t: "meaning", s: "「合理（的）」の意味は？", o: ["rational; logical; reasonable and efficient", "forcible; pushy; high-handed", "subjective; based on personal view", "emotional; driven by feelings"], a: 0, e: "合理 underlies 合理的 (rational) and 合理化 (rationalization/streamlining) — making things logical and efficient. Opposite leaning: 感情的 (emotional)." }
    ]
  },
  {
    id: "n2-0248", w: "国王", r: "こくおう", m: "king; monarch", c: "noun", lv: 1,
    ex: [{ jp: "その国は国王が統治している。", en: "That country is ruled by a king." }],
    qs: [
      { t: "fitb", s: "式典には、隣国の＿＿＿＿夫妻も出席した。", en: "The king of the neighboring country and his wife also attended the ceremony.", o: ["国王", "女王", "皇帝", "貴族"], a: 0, e: "国王 = a king (male monarch). 女王 = a queen (reigning female monarch). 皇帝 = an emperor. 貴族 = the nobility/aristocrat." },
      { t: "meaning", s: "「国王」の意味は？", o: ["a king; male monarch", "a queen; reigning female monarch", "an emperor", "the nobility; an aristocrat"], a: 0, e: "国王 is a king (国王陛下 = His Majesty the King). 女王 = queen, 皇帝 = emperor (a higher/imperial rank)." }
    ]
  },
  {
    id: "n2-0249", w: "実習", r: "じっしゅう", m: "practical training; hands-on practice; practicum; internship", c: "noun", lv: 1,
    ex: [{ jp: "看護学生は病院で実習を行う。", en: "Nursing students do practical training at the hospital." }],
    qs: [
      { t: "fitb", s: "教室で理論を学んだ後、工場で＿＿＿＿をする。", en: "After learning theory in the classroom, we do hands-on training at the factory.", o: ["実習", "研究", "講義", "練習"], a: 0, e: "実習 = hands-on practical training (applying skills in a real setting). 研究 = research. 講義 = a lecture (theory delivered). 練習 = practice/drilling (repetition to master)." },
      { t: "meaning", s: "「実習」の意味は？", o: ["practical training; hands-on practice; practicum", "research; academic study", "a lecture; classroom instruction", "practice; repetitive drilling"], a: 0, e: "実習 is supervised hands-on practice in a real or simulated work setting (教育実習 = teaching practicum, 実習生 = a trainee/intern). 練習 is repetitive drilling to build a skill." }
    ]
  },
  {
    id: "n2-0250", w: "なんとも", r: "なんとも", m: "(with neg.) nothing at all; (emphasis) truly; really", c: "adv", lv: 1,
    ex: [{ jp: "なんとも言えない複雑な気持ちだ。", en: "It's a complicated feeling I can't quite put into words." }],
    qs: [
      { t: "fitb", s: "結果がどうなるか、今は＿＿＿＿言えない。", en: "I can't say anything at all right now about how it'll turn out.", o: ["なんとも", "必ず", "つい", "ますます"], a: 0, e: "なんとも = (with negative) nothing at all/can't really; also emphatic 'truly.' 必ず = surely/without fail. つい = unintentionally/just (a moment ago). ますます = increasingly." },
      { t: "meaning", s: "「なんとも」の意味は？", o: ["(with neg.) nothing at all; (emphatic) truly", "surely; without fail", "unintentionally; just (now)", "increasingly; more and more"], a: 0, e: "なんとも with a negative means 'not at all / can't really' (なんとも言えない = can't say either way). With positive emphasis it means 'truly' (なんとも美しい = truly beautiful)." }
    ]
  },
  {
    id: "n2-0251", w: "派手", r: "はで", m: "flashy; showy; loud; gaudy", c: "naadj", lv: 1,
    ex: [{ jp: "彼女は派手な服装が好きだ。", en: "She likes flashy clothing." }],
    qs: [
      { t: "fitb", s: "会場は＿＿＿＿な照明と音楽で盛り上がっていた。", en: "The venue was lively with flashy lighting and music.", o: ["派手", "地味", "上品", "清潔"], a: 0, e: "派手 = flashy/showy/loud (attention-grabbing). 地味 = plain/subdued (the opposite). 上品 = refined/elegant/classy. 清潔 = clean/hygienic." },
      { t: "meaning", s: "「派手」の意味は？", o: ["flashy; showy; loud; gaudy", "plain; sober; subdued", "refined; elegant; classy", "clean; hygienic"], a: 0, e: "派手 describes something eye-catching and showy (派手な色 = a loud color, 派手に転ぶ = take a spectacular fall). Opposite of 地味." }
    ]
  },
  {
    id: "n2-0252", w: "故郷", r: "ふるさと", m: "hometown; one's birthplace; home region", c: "noun", lv: 1,
    ex: [{ jp: "年に一度、故郷に帰る。", en: "I return to my hometown once a year." }],
    qs: [
      { t: "fitb", s: "都会で暮らしていると、緑豊かな＿＿＿＿が恋しくなる。", en: "Living in the city, I come to miss my green, lush hometown.", o: ["故郷", "都会", "他国", "近所"], a: 0, e: "故郷(ふるさと) = one's hometown/birthplace (with nostalgic warmth). 都会 = the city/urban area. 他国 = another country/foreign land. 近所 = the neighborhood (nearby area)." },
      { t: "meaning", s: "「故郷」の意味は？", o: ["hometown; one's birthplace; home region", "the city; urban area", "another country; foreign land", "the neighborhood; nearby area"], a: 0, e: "故郷 is the place one is from, carrying nostalgia (can be read こきょう or ふるさと; 故郷を離れる = leave one's hometown)." }
    ]
  },
  {
    id: "n2-0253", w: "原理", r: "げんり", m: "principle; fundamental theory; underlying mechanism", c: "noun", lv: 1,
    ex: [{ jp: "てこの原理を使えば重い物も持ち上げられる。", en: "Using the principle of the lever, you can lift heavy objects." }],
    qs: [
      { t: "fitb", s: "このエンジンが動く＿＿＿＿を、図を使って説明した。", en: "I explained the principle by which this engine works using a diagram.", o: ["原理", "原因", "原料", "原則"], a: 0, e: "原理 = a fundamental principle/the underlying mechanism (how/why something works). 原因 = a cause. 原料 = raw material. 原則 = a general rule/principle of conduct (with possible exceptions)." },
      { t: "meaning", s: "「原理」の意味は？", o: ["principle; underlying theory/mechanism", "a cause", "raw material", "a general rule of conduct (with exceptions)"], a: 0, e: "原理 explains the basic mechanism behind something (動作原理 = operating principle, 原理原則 = first principles). 原則 is more of a guiding rule for behavior." }
    ]
  },
  {
    id: "n2-0254", w: "高等", r: "こうとう", m: "high-grade; higher (level); advanced", c: "noun", lv: 1,
    ex: [{ jp: "彼は高等教育を受けるため都市部へ出た。", en: "He moved to the city to receive higher education." }],
    qs: [
      { t: "fitb", s: "イルカは＿＿＿＿な知能を持つ動物として知られている。", en: "Dolphins are known as animals with higher intelligence.", o: ["高等", "下等", "平等", "均等"], a: 0, e: "高等 = high-grade/higher in a graded scale (高等教育, 高等動物). 下等 = low-grade/inferior (the opposite). 平等 = equality/equal treatment. 均等 = even/uniform distribution." },
      { t: "meaning", s: "「高等」の意味は？", o: ["high-grade; higher (level); advanced", "low-grade; inferior", "equality; equal treatment", "even; uniform distribution"], a: 0, e: "高等 marks a higher rank in a graded scale (高等学校 = high school, 高等裁判所 = high court). Opposite of 下等. Distinct from 高級 (luxury) and 高度 (sophisticated)." }
    ]
  },
  {
    id: "n2-0255", w: "出張", r: "しゅっちょう", m: "business trip; official travel", c: "noun", lv: 1,
    ex: [{ jp: "来週、大阪へ出張する。", en: "Next week I'll go on a business trip to Osaka." }],
    qs: [
      { t: "fitb", s: "三日間の海外＿＿＿＿で、現地の工場を視察した。", en: "On a three-day overseas business trip, I inspected the local factory.", o: ["出張", "旅行", "観光", "休暇"], a: 0, e: "出張 = traveling for work/business. 旅行 = travel/a trip (general, often leisure). 観光 = sightseeing/tourism. 休暇 = a vacation/leave." },
      { t: "meaning", s: "「出張」の意味は？", o: ["business trip; official travel for work", "travel; a trip (general, often leisure)", "sightseeing; tourism", "a vacation; leave"], a: 0, e: "出張 means traveling on business (出張費 = travel expenses, 日帰り出張 = a day business trip)." }
    ]
  },
  {
    id: "n2-0256", w: "台詞", r: "せりふ", m: "lines; dialogue; one's spoken words (in a play/film)", c: "noun", lv: 1,
    ex: [{ jp: "俳優が台詞を忘れて、舞台が止まった。", en: "The actor forgot his lines, and the play stopped." }],
    qs: [
      { t: "fitb", s: "その映画の名＿＿＿＿は、今でも多くの人に引用される。", en: "That movie's famous line is still quoted by many people today.", o: ["台詞", "場面", "脚本", "字幕"], a: 0, e: "台詞(せりふ) = an actor's lines/spoken words. 場面 = a scene/situation. 脚本 = the script/screenplay (the whole written work). 字幕 = subtitles/captions." },
      { t: "meaning", s: "「台詞」の意味は？", o: ["lines; dialogue; spoken words in a play/film", "a scene; a situation", "the script; screenplay", "subtitles; captions"], a: 0, e: "台詞 are the words a character speaks (名台詞 = a memorable line, 棒読みの台詞 = lines read flatly). The 脚本 is the whole script." }
    ]
  },
  {
    id: "n2-0257", w: "地帯", r: "ちたい", m: "zone; belt; area (with a particular characteristic)", c: "noun", lv: 1,
    ex: [{ jp: "この辺りは工業地帯だ。", en: "This area is an industrial zone." }],
    qs: [
      { t: "fitb", s: "火山の周辺は危険＿＿＿＿として立ち入りが禁止されている。", en: "The area around the volcano is off-limits as a danger zone.", o: ["地帯", "地域", "地区", "地方"], a: 0, e: "地帯 = a zone/belt characterized by something (危険地帯 = danger zone). 地域 = a region/area (general). 地区 = a designated district. 地方 = a region/the provinces (away from the capital)." },
      { t: "meaning", s: "「地帯」の意味は？", o: ["zone; belt; area with a particular trait", "a region; area (general)", "a designated district", "a region; the provinces"], a: 0, e: "地帯 marks an area defined by a feature (安全地帯 = safety zone, 緑地帯 = green belt, 山岳地帯 = mountainous region)." }
    ]
  },
  {
    id: "n2-0258", w: "就任", r: "しゅうにん", m: "assuming office; taking up a post; inauguration", c: "noun", lv: 1,
    ex: [{ jp: "彼は社長に就任した。", en: "He assumed the post of company president." }],
    qs: [
      { t: "fitb", s: "新会長は＿＿＿＿の挨拶で、改革への決意を語った。", en: "In his inaugural address, the new chairman spoke of his resolve to reform.", o: ["就任", "退任", "就職", "在任"], a: 0, e: "就任 = taking up an official post/office. 退任 = stepping down from a post (the opposite). 就職 = getting a job (becoming employed, general). 在任 = being in office (the period one holds a post)." },
      { t: "meaning", s: "「就任」の意味は？", o: ["assuming office; taking up a post; inauguration", "stepping down from a post", "getting a job; becoming employed", "being in office (the period)"], a: 0, e: "就任 means formally taking up a leadership position (就任式 = inauguration ceremony, 大臣に就任 = become a minister). Opposite of 退任." }
    ]
  },
  {
    id: "n2-0259", w: "伝わる", r: "つたわる", m: "to be conveyed; to be transmitted; to spread; to be passed down", c: "verb", lv: 1,
    ex: [{ jp: "うわさはあっという間に町中に伝わった。", en: "The rumor spread through the whole town in no time." }],
    qs: [
      { t: "fitb", s: "言葉にしなくても、彼の優しさは十分に＿＿＿＿。", en: "Even without words, his kindness comes across well enough.", o: ["伝わる", "伝える", "教わる", "変わる"], a: 0, e: "伝わる = (intransitive) to be conveyed/transmitted/passed down on its own. 伝える = (transitive) to convey/tell something. 教わる = to be taught/learn from someone. 変わる = to change." },
      { t: "meaning", s: "「伝わる」の意味は？", o: ["to be conveyed; to be transmitted; to spread; to be passed down", "to convey; to tell (transitive)", "to be taught; to learn from someone", "to change"], a: 0, e: "伝わる is the intransitive 'to be transmitted' — feelings, news, traditions, vibrations (気持ちが伝わる = feelings get across, 昔から伝わる = handed down from old). Transitive pair: 伝える." }
    ]
  },
  {
    id: "n2-0260", w: "手前", r: "てまえ", m: "this side (nearer to oneself); just before; one's own standpoint", c: "noun", lv: 1,
    ex: [{ jp: "駅の一つ手前の駅で降りた。", en: "I got off at the station one before the main one." }],
    qs: [
      { t: "fitb", s: "信号の＿＿＿＿を右に曲がると、すぐ店があります。", en: "If you turn right just before the traffic light, the shop is right there.", o: ["手前", "向こう", "奥", "隣"], a: 0, e: "手前 = the near side / just before a point (closer to the speaker). 向こう = the far side/over there. 奥 = the back/inner part. 隣 = next to/adjacent." },
      { t: "meaning", s: "「手前」の意味は？", o: ["this side (nearer oneself); just before a point", "the far side; over there", "the back; the inner part", "next to; adjacent"], a: 0, e: "手前 indicates the spot just on this side of something (手前に置く = place it nearer, 一歩手前 = one step short of). Opposite of 向こう/奥." }
    ]
  },
  {
    id: "n2-0261", w: "やたらに", r: "やたらに", m: "recklessly; excessively; at random; without good reason", c: "adv", lv: 1,
    ex: [{ jp: "やたらに薬を飲むのは体に良くない。", en: "Taking medicine excessively is bad for your body." }],
    qs: [
      { t: "fitb", s: "確かめもせず、＿＿＿＿に物を捨てるべきではない。", en: "You shouldn't throw things away recklessly without even checking.", o: ["やたらに", "丁寧に", "慎重に", "正確に"], a: 0, e: "やたらに = recklessly/excessively/at random (without judgment). 丁寧に = carefully/politely. 慎重に = cautiously/prudently. 正確に = accurately/precisely." },
      { t: "meaning", s: "「やたらに」の意味は？", o: ["recklessly; excessively; at random; without good reason", "carefully; politely", "cautiously; prudently", "accurately; precisely"], a: 0, e: "やたらに (≒やたらと/むやみに) means doing something thoughtlessly or to excess (やたらに高い = unreasonably expensive, やたらと喉が渇く = excessively thirsty)." }
    ]
  },
  {
    id: "n2-0262", w: "往復", r: "おうふく", m: "round trip; going and returning; back-and-forth", c: "noun", lv: 1,
    ex: [{ jp: "家と駅を一日に何度も往復する。", en: "I go back and forth between home and the station many times a day." }],
    qs: [
      { t: "fitb", s: "＿＿＿＿の切符を買うと、片道よりお得になる。", en: "Buying a round-trip ticket is a better deal than one-way.", o: ["往復", "片道", "出発", "到着"], a: 0, e: "往復 = a round trip (going and coming back). 片道 = one way (single direction). 出発 = departure. 到着 = arrival." },
      { t: "meaning", s: "「往復」の意味は？", o: ["round trip; going and returning", "one way; a single direction", "departure; setting off", "arrival"], a: 0, e: "往復 means going and coming back (往復切符 = round-trip ticket, 往復で2時間 = two hours there and back). Opposite of 片道 (one way)." }
    ]
  },
  {
    id: "n2-0263", w: "着替え", r: "きがえ", m: "change of clothes; changing clothes", c: "noun", lv: 1,
    ex: [{ jp: "汗をかいたので着替えを持ってきた。", en: "I sweated, so I brought a change of clothes." }],
    qs: [
      { t: "fitb", s: "プールに行くなら、水着と＿＿＿＿を忘れないで。", en: "If you're going to the pool, don't forget your swimsuit and a change of clothes.", o: ["着替え", "着物", "荷物", "下着"], a: 0, e: "着替え = a change of clothes / changing clothes. 着物 = a kimono (traditional garment). 荷物 = luggage/baggage. 下着 = underwear." },
      { t: "meaning", s: "「着替え」の意味は？", o: ["a change of clothes; changing clothes", "a kimono; traditional garment", "luggage; baggage", "underwear"], a: 0, e: "着替え means fresh clothes to change into, or the act of changing (着替える = to change clothes, 着替えを済ませる = finish getting changed)." }
    ]
  },
  {
    id: "n2-0264", w: "神話", r: "しんわ", m: "myth; mythology; legend (often figurative: an unfounded belief)", c: "noun", lv: 1,
    ex: [{ jp: "ギリシャ神話には多くの神々が登場する。", en: "Many gods appear in Greek mythology." }],
    qs: [
      { t: "fitb", s: "「安全だ」という＿＿＿＿が、その事故で完全に崩れた。", en: "The myth that 'it's safe' completely collapsed with that accident.", o: ["神話", "伝説", "昔話", "物語"], a: 0, e: "神話 = myth/mythology (tales of gods); figuratively an unquestioned but unfounded belief. 伝説 = a legend (about heroes/events). 昔話 = a folk tale/old story. 物語 = a story/narrative (general)." },
      { t: "meaning", s: "「神話」の意味は？", o: ["myth; mythology; (fig.) an unfounded belief", "a legend about heroes or events", "a folk tale; old story", "a story; narrative (general)"], a: 0, e: "神話 are myths about gods (日本神話 = Japanese mythology) and figuratively a widely held but baseless belief (安全神話 = the 'safety myth')." }
    ]
  },
  {
    id: "n2-0265", w: "全般", r: "ぜんぱん", m: "the whole; overall; general; across the board", c: "noun", lv: 1,
    ex: [{ jp: "この本は科学全般について書かれている。", en: "This book is written about science in general." }],
    qs: [
      { t: "fitb", s: "今年は天候のせいで、農作物＿＿＿＿の出来が悪かった。", en: "This year, due to the weather, crops across the board had a poor yield.", o: ["全般", "全力", "全身", "全力投球"], a: 0, e: "全般 = the whole/overall/across the board (covering everything in a domain). 全力 = all one's strength. 全身 = the whole body. The fourth (全力投球) means 'giving it your all,' not relevant here." },
      { t: "meaning", s: "「全般」の意味は？", o: ["the whole; overall; general; across the board", "all one's strength; full effort", "the whole body", "giving it one's all"], a: 0, e: "全般 means across an entire field/category (全般的に = generally/overall, 生活全般 = all aspects of life)." }
    ]
  },
  {
    id: "n2-0266", w: "売買", r: "ばいばい", m: "buying and selling; trade; dealing", c: "noun", lv: 1,
    ex: [{ jp: "土地の売買には契約書が必要だ。", en: "A contract is needed for buying and selling land." }],
    qs: [
      { t: "fitb", s: "インターネットを通じた中古品の＿＿＿＿が活発だ。", en: "The buying and selling of used goods via the internet is active.", o: ["売買", "販売", "購入", "取引"], a: 0, e: "売買 = buying and selling (both directions). 販売 = selling (the seller's side). 購入 = purchasing (the buyer's side). 取引 = a transaction/dealing (a deal, broader, includes negotiation)." },
      { t: "meaning", s: "「売買」の意味は？", o: ["buying and selling; trade; dealing", "selling (the seller's side)", "purchasing (the buyer's side)", "a transaction; a business deal"], a: 0, e: "売買 combines 売る (sell) and 買う (buy) — trade in both directions (売買契約 = a sales contract, 株の売買 = stock trading)." }
    ]
  },
  {
    id: "n2-0267", w: "保健", r: "ほけん", m: "health preservation; hygiene; health care", c: "noun", lv: 1,
    ex: [{ jp: "学校の保健室で休ませてもらった。", en: "I was allowed to rest in the school's health room." }],
    qs: [
      { t: "fitb", s: "地域の＿＿＿＿センターで、無料の健康相談を行っている。", en: "The local health center offers free health consultations.", o: ["保健", "保険", "保証", "保存"], a: 0, e: "保健(ほけん) = preserving/maintaining health, public health. 保険(ほけん) = insurance (same reading!). 保証 = a guarantee/warranty. 保存 = preservation/saving (keeping something)." },
      { t: "meaning", s: "「保健」の意味は？", o: ["health preservation; hygiene; health care", "insurance", "a guarantee; warranty", "preservation; saving (data, food)"], a: 0, e: "保健 means maintaining health (保健室 = school nurse's office, 保健所 = public health center). Beware the homophone 保険 (insurance) — different kanji, same reading." }
    ]
  },
  {
    id: "n2-0268", w: "目立つ", r: "めだつ", m: "to stand out; to be conspicuous; to be noticeable", c: "verb", lv: 1,
    ex: [{ jp: "赤い服は遠くからでも目立つ。", en: "Red clothes stand out even from far away." }],
    qs: [
      { t: "fitb", s: "最近、彼の作品には進歩が＿＿＿＿ようになった。", en: "Lately, progress has become noticeable in his work.", o: ["目立つ", "隠れる", "薄れる", "劣る"], a: 0, e: "目立つ = to stand out/be conspicuous. 隠れる = to hide/be hidden. 薄れる = to fade/grow faint. 劣る = to be inferior to." },
      { t: "meaning", s: "「目立つ」の意味は？", o: ["to stand out; to be conspicuous; to be noticeable", "to hide; to be hidden", "to fade; to grow faint", "to be inferior to"], a: 0, e: "目立つ means to catch the eye/be prominent (目立つ存在 = a standout presence, 目立たない = inconspicuous)." }
    ]
  },
  {
    id: "n2-0269", w: "行事", r: "ぎょうじ", m: "event; (scheduled) function; observance", c: "noun", lv: 1,
    ex: [{ jp: "学校では年間を通して様々な行事がある。", en: "The school has various events throughout the year." }],
    qs: [
      { t: "fitb", s: "運動会は、この町の秋の恒例＿＿＿＿になっている。", en: "The sports day has become this town's customary autumn event.", o: ["行事", "行動", "用事", "催促"], a: 0, e: "行事 = a scheduled event/function/observance (often communal or annual). 行動 = action/behavior/conduct. 用事 = an errand/personal business to attend to. 催促 = urging/pressing someone (a demand)." },
      { t: "meaning", s: "「行事」の意味は？", o: ["a scheduled event; function; observance", "action; behavior; conduct", "an errand; personal business", "urging; pressing a demand"], a: 0, e: "行事 is an organized event on a calendar (年中行事 = annual events, 学校行事 = school events)." }
    ]
  },
  {
    id: "n2-0270", w: "重力", r: "じゅうりょく", m: "gravity; gravitational force", c: "noun", lv: 1,
    ex: [{ jp: "宇宙では重力がほとんど働かない。", en: "In space, gravity hardly acts." }],
    qs: [
      { t: "fitb", s: "リンゴが落ちるのは、地球の＿＿＿＿に引かれるからだ。", en: "An apple falls because it is pulled by the earth's gravity.", o: ["重力", "引力", "圧力", "気力"], a: 0, e: "重力 = gravity (the force pulling objects toward the earth). 引力 = attractive force/gravitation between bodies (broader). 圧力 = pressure. 気力 = willpower/energy/spirit." },
      { t: "meaning", s: "「重力」の意味は？", o: ["gravity; gravitational force", "attractive force between bodies (broad)", "pressure", "willpower; energy; spirit"], a: 0, e: "重力 is the force of gravity (無重力 = zero gravity, 重力に逆らう = defy gravity). 引力 is the more general attractive force (万有引力 = universal gravitation)." }
    ]
  },
  {
    id: "n2-0271", w: "主役", r: "しゅやく", m: "leading role; main part; protagonist", c: "noun", lv: 1,
    ex: [{ jp: "彼女はその映画で主役を演じた。", en: "She played the lead role in that film." }],
    qs: [
      { t: "fitb", s: "新人ながら、彼は舞台の＿＿＿＿に大抜擢された。", en: "Though a newcomer, he was picked for the leading role on stage.", o: ["主役", "脇役", "主人公", "端役"], a: 0, e: "主役 = the leading role/star part (an actor's role). 脇役 = a supporting role. 主人公 = the protagonist/main character (of a story). 端役(はやく) = a bit part/minor role." },
      { t: "meaning", s: "「主役」の意味は？", o: ["leading role; main part; protagonist", "a supporting role", "the protagonist of a story (character)", "a bit part; minor role"], a: 0, e: "主役 is the starring role (主役を務める = play the lead). 主人公 is the story's central character; 主役 is the actor's role or the central figure of an event." }
    ]
  },
  {
    id: "n2-0272", w: "名作", r: "めいさく", m: "masterpiece; celebrated work; classic", c: "noun", lv: 1,
    ex: [{ jp: "この小説は時代を超えて読まれる名作だ。", en: "This novel is a masterpiece read across the ages." }],
    qs: [
      { t: "fitb", s: "その監督は、映画史に残る＿＿＿＿を数多く生み出した。", en: "That director produced many masterpieces that remain in film history.", o: ["名作", "駄作", "新作", "話題作"], a: 0, e: "名作 = a masterpiece/celebrated work. 駄作(ださく) = a worthless/poor work (the opposite). 新作 = a new work/release. 話題作 = a much-talked-about work." },
      { t: "meaning", s: "「名作」の意味は？", o: ["masterpiece; celebrated work; classic", "a poor, worthless work", "a new work; a new release", "a much-talked-about work"], a: 0, e: "名作 is a highly acclaimed work of lasting value (不朽の名作 = an immortal masterpiece). Opposite of 駄作." }
    ]
  },
  {
    id: "n2-0273", w: "零点", r: "れいてん", m: "zero points; a score of zero; (also) freezing point", c: "noun", lv: 1,
    ex: [{ jp: "勉強しなかったので、テストで零点を取った。", en: "I didn't study, so I got a zero on the test." }],
    qs: [
      { t: "fitb", s: "答案が白紙のままで、結局＿＿＿＿だった。", en: "The answer sheet was left blank, so in the end it was zero.", o: ["零点", "満点", "平均点", "得点"], a: 0, e: "零点 = a score of zero. 満点 = a perfect score (the opposite). 平均点 = the average score. 得点 = points scored/one's score." },
      { t: "meaning", s: "「零点」の意味は？", o: ["zero points; a score of zero", "a perfect score", "the average score", "points scored; one's score"], a: 0, e: "零点 means scoring zero (零点を取る = get a zero). Opposite of 満点 (full marks). 零(れい) is the formal word for zero." }
    ]
  },
  {
    id: "n2-0274", w: "冷凍", r: "れいとう", m: "freezing; cold storage; refrigeration (freezing food)", c: "noun", lv: 1,
    ex: [{ jp: "余った料理は冷凍して保存する。", en: "I freeze and store the leftover food." }],
    qs: [
      { t: "fitb", s: "魚は新鮮なうちに＿＿＿＿しておくと長持ちする。", en: "If you freeze the fish while it's fresh, it keeps for a long time.", o: ["冷凍", "冷蔵", "加熱", "解凍"], a: 0, e: "冷凍 = freezing (storing below 0°C). 冷蔵 = refrigeration (chilling, above freezing). 加熱 = heating. 解凍 = thawing/defrosting (the reverse of freezing)." },
      { t: "meaning", s: "「冷凍」の意味は？", o: ["freezing; storing frozen", "refrigeration; chilling (above freezing)", "heating", "thawing; defrosting"], a: 0, e: "冷凍 means freezing for preservation (冷凍食品 = frozen food, 冷凍庫 = freezer). 冷蔵 is mere chilling; 解凍 is thawing." }
    ]
  },
  {
    id: "n2-0275", w: "液体", r: "えきたい", m: "liquid; fluid", c: "noun", lv: 1,
    ex: [{ jp: "水は常温では液体だ。", en: "Water is a liquid at room temperature." }],
    qs: [
      { t: "fitb", s: "この物質は熱すると、固体から＿＿＿＿に変化する。", en: "When heated, this substance changes from a solid to a liquid.", o: ["液体", "固体", "気体", "物体"], a: 0, e: "液体 = liquid (a fluid state). 固体 = solid. 気体 = gas. 物体 = a physical object/body (any object)." },
      { t: "meaning", s: "「液体」の意味は？", o: ["liquid; fluid", "solid", "gas", "a physical object; body"], a: 0, e: "液体 is the liquid state of matter (液体と固体と気体 = liquid, solid, and gas — the three states)." }
    ]
  },
  {
    id: "n2-0276", w: "角度", r: "かくど", m: "angle; (figurative) point of view; perspective", c: "noun", lv: 1,
    ex: [{ jp: "カメラの角度を少し変えてみよう。", en: "Let's try changing the camera angle a little." }],
    qs: [
      { t: "fitb", s: "この問題は、別の＿＿＿＿から見ると解決策が見えてくる。", en: "This problem, seen from a different angle, reveals a solution.", o: ["角度", "高度", "程度", "強度"], a: 0, e: "角度 = angle; figuratively a viewpoint. 高度 = altitude; advanced level. 程度 = degree/extent (how much). 強度 = strength/intensity (of force)." },
      { t: "meaning", s: "「角度」の意味は？", o: ["angle; point of view; perspective", "altitude; advanced level", "degree; extent; how much", "strength; intensity of force"], a: 0, e: "角度 is a geometric angle (角度を測る = measure an angle) and figuratively a perspective (違う角度から = from a different angle)." }
    ]
  },
  {
    id: "n2-0277", w: "儀式", r: "ぎしき", m: "ceremony; rite; ritual", c: "noun", lv: 1,
    ex: [{ jp: "伝統的な儀式が神社で行われた。", en: "A traditional ceremony was held at the shrine." }],
    qs: [
      { t: "fitb", s: "成人を祝う＿＿＿＿は、地域ごとに少しずつ異なる。", en: "The rite celebrating coming of age differs slightly from region to region.", o: ["儀式", "行事", "式典", "祭り"], a: 0, e: "儀式 = a formal rite/ritual (often solemn, religious or traditional). 行事 = a scheduled event/function (calendar event). 式典 = a (grand) ceremony/official rite. 祭り = a festival." },
      { t: "meaning", s: "「儀式」の意味は？", o: ["ceremony; rite; ritual", "a scheduled event; calendar function", "a grand official ceremony", "a festival"], a: 0, e: "儀式 is a formal ritual following set procedures (宗教的儀式 = a religious rite, 儀式ばる = to be over-formal). 式典 is a large official ceremony; 行事 is any scheduled event." }
    ]
  },
  {
    id: "n2-0278", w: "原稿", r: "げんこう", m: "manuscript; draft; copy (text to be printed/read)", c: "noun", lv: 1,
    ex: [{ jp: "締め切りまでに原稿を書き上げた。", en: "I finished writing the manuscript before the deadline." }],
    qs: [
      { t: "fitb", s: "スピーチの＿＿＿＿を用意していたが、緊張で読み飛ばした。", en: "I had prepared a draft of the speech, but skipped lines from nerves.", o: ["原稿", "原作", "脚本", "資料"], a: 0, e: "原稿 = a manuscript/draft (text written to be published or read aloud). 原作 = the original work (that an adaptation is based on). 脚本 = a screenplay/script (for a play/film). 資料 = reference materials/data." },
      { t: "meaning", s: "「原稿」の意味は？", o: ["manuscript; draft; text to be printed/read", "the original work an adaptation is based on", "a screenplay; script for a play/film", "reference materials; data"], a: 0, e: "原稿 is the written text submitted for printing or reading (原稿用紙 = manuscript paper, 原稿を書く = write a draft). 原作 is the source work behind an adaptation." }
    ]
  },
  {
    id: "n2-0279", w: "合同", r: "ごうどう", m: "joint; combined; (doing something) together", c: "noun", lv: 1,
    ex: [{ jp: "二つの学校が合同で文化祭を開いた。", en: "The two schools held a joint cultural festival." }],
    qs: [
      { t: "fitb", s: "複数の部署が＿＿＿＿で会議を行い、対策を話し合った。", en: "Several departments held a joint meeting and discussed countermeasures.", o: ["合同", "共同", "協同", "合計"], a: 0, e: "合同 = combining separate groups into one (joint) activity. 共同 = doing something jointly/in common (shared). 協同 = cooperation/collaboration toward a goal. 合計 = the total/sum. 合同 and 共同 overlap, but 合同 stresses merging into one body." },
      { t: "meaning", s: "「合同」の意味は？", o: ["joint; combined; merging groups for an activity", "doing something jointly/in common (shared)", "cooperation toward a shared goal", "the total; the sum"], a: 0, e: "合同 means two or more bodies combining for an activity (合同練習 = joint practice, 合同説明会 = joint info session)." }
    ]
  },
  {
    id: "n2-0280", w: "合流", r: "ごうりゅう", m: "confluence; merging; joining up (of rivers, roads, people)", c: "noun", lv: 1,
    ex: [{ jp: "二つの川がここで合流する。", en: "The two rivers join here." }],
    qs: [
      { t: "fitb", s: "先に行っていてください。後で現地で＿＿＿＿します。", en: "Please go ahead. I'll join up with you at the site later.", o: ["合流", "分岐", "分裂", "解散"], a: 0, e: "合流 = merging/joining up (streams converging, or people meeting up to continue together). 分岐 = branching/diverging (splitting off). 分裂 = splitting/fracturing apart. 解散 = disbanding/dispersing." },
      { t: "meaning", s: "「合流」の意味は？", o: ["confluence; merging; joining up", "branching off; diverging", "splitting; fracturing apart", "disbanding; dispersing"], a: 0, e: "合流 means flowing or coming together into one (合流地点 = a merge point, 高速道路に合流 = merge onto the highway). Opposite of 分岐 (branch off)." }
    ]
  },
  {
    id: "n2-0281", w: "乗り換え", r: "のりかえ", m: "transfer; changing (trains, buses); switching", c: "noun", lv: 1,
    ex: [{ jp: "次の駅で電車の乗り換えがある。", en: "There's a train transfer at the next station." }],
    qs: [
      { t: "fitb", s: "新宿で地下鉄への＿＿＿＿が必要です。", en: "You need to transfer to the subway at Shinjuku.", o: ["乗り換え", "乗り越し", "乗車", "降車"], a: 0, e: "乗り換え = transferring between trains/lines. 乗り越し = riding past one's stop (overshooting). 乗車 = boarding/getting on. 降車 = getting off/alighting." },
      { t: "meaning", s: "「乗り換え」の意味は？", o: ["transfer; changing trains or buses", "riding past one's stop; overshooting", "boarding; getting on", "getting off; alighting"], a: 0, e: "乗り換え means switching from one train/line to another (乗り換え案内 = transfer guide). Figuratively, switching (e.g. 機種の乗り換え = switching phone models). The verb is 乗り換える." }
    ]
  },
  {
    id: "n2-0282", w: "敷地", r: "しきち", m: "site; lot; premises; grounds", c: "noun", lv: 1,
    ex: [{ jp: "広い敷地に大きな家が建っている。", en: "A large house stands on the spacious lot." }],
    qs: [
      { t: "fitb", s: "学校の＿＿＿＿内では、自転車を降りて歩いてください。", en: "On the school grounds, please get off your bicycle and walk.", o: ["敷地", "土地", "用地", "現場"], a: 0, e: "敷地 = the site/premises on which a building stands. 土地 = land/a plot of ground (general). 用地 = land reserved for a specific use (建設用地 = construction land). 現場 = the actual site/scene (of work or an incident)." },
      { t: "meaning", s: "「敷地」の意味は？", o: ["site; lot; premises; grounds of a building", "land; a plot of ground (general)", "land reserved for a specific use", "the actual site; scene"], a: 0, e: "敷地 is the plot a building occupies, including its grounds (敷地面積 = lot area, 敷地内 = on the premises)." }
    ]
  },
  {
    id: "n2-0283", w: "短期", r: "たんき", m: "short term; short period", c: "noun", lv: 1,
    ex: [{ jp: "夏休みに短期の語学留学をした。", en: "I did a short-term language study abroad over summer break." }],
    qs: [
      { t: "fitb", s: "この仕事は＿＿＿＿のアルバイトなので、一か月で終わる。", en: "This job is short-term part-time work, so it ends in a month.", o: ["短期", "長期", "定期", "延期"], a: 0, e: "短期 = short term/short period. 長期 = long term (the opposite). 定期 = regular/fixed-period (定期券 = commuter pass). 延期 = postponement." },
      { t: "meaning", s: "「短期」の意味は？", o: ["short term; short period", "long term", "regular; fixed-period", "postponement"], a: 0, e: "短期 means over a short span (短期間 = a short period, 短期大学 = junior college). Opposite of 長期." }
    ]
  },
  {
    id: "n2-0284", w: "日用品", r: "にちようひん", m: "daily necessities; everyday goods", c: "noun", lv: 1,
    ex: [{ jp: "近所のスーパーで日用品をまとめて買う。", en: "I buy daily necessities all at once at the nearby supermarket." }],
    qs: [
      { t: "fitb", s: "洗剤やティッシュなどの＿＿＿＿は、安い時に買いだめする。", en: "I stock up on daily necessities like detergent and tissues when they're cheap.", o: ["日用品", "貴重品", "非常食", "記念品"], a: 0, e: "日用品 = everyday goods/daily necessities. 貴重品 = valuables (precious items). 非常食 = emergency food rations. 記念品 = a commemorative gift/souvenir." },
      { t: "meaning", s: "「日用品」の意味は？", o: ["daily necessities; everyday goods", "valuables; precious items", "emergency food rations", "a commemorative gift; souvenir"], a: 0, e: "日用品 are items used in daily life (生活日用品 = household necessities). Things like soap, towels, detergent." }
    ]
  },
  {
    id: "n2-0285", w: "花嫁", r: "はなよめ", m: "bride", c: "noun", lv: 1,
    ex: [{ jp: "花嫁は美しいドレスを着ていた。", en: "The bride wore a beautiful dress." }],
    qs: [
      { t: "fitb", s: "式の途中、＿＿＿＿は感極まって涙を流した。", en: "During the ceremony, the bride was overcome with emotion and wept.", o: ["花嫁", "花婿", "新郎", "仲人"], a: 0, e: "花嫁 = the bride. 花婿(はなむこ) = the bridegroom. 新郎(しんろう) = the groom (formal term). 仲人(なこうど) = the matchmaker/go-between." },
      { t: "meaning", s: "「花嫁」の意味は？", o: ["bride", "bridegroom", "the groom (formal term)", "matchmaker; go-between"], a: 0, e: "花嫁 is the bride (花嫁姿 = a bride in her wedding attire). 花婿/新郎 = the groom." }
    ]
  },
  {
    id: "n2-0286", w: "蓋", r: "ふた", m: "lid; cover; cap", c: "noun", lv: 1,
    ex: [{ jp: "鍋の蓋を開けると湯気が立った。", en: "When I opened the pot's lid, steam rose." }],
    qs: [
      { t: "fitb", s: "瓶の＿＿＿＿が固くて、なかなか開かない。", en: "The bottle's cap is tight and won't open easily.", o: ["蓋", "底", "縁", "取っ手"], a: 0, e: "蓋(ふた) = a lid/cover/cap (on top). 底(そこ) = the bottom (of a container). 縁(ふち) = the rim/edge. 取っ手(とって) = a handle/grip." },
      { t: "meaning", s: "「蓋」の意味は？", o: ["lid; cover; cap", "the bottom of a container", "the rim; edge", "a handle; grip"], a: 0, e: "蓋 is a lid or cap that covers an opening (蓋を開ける = take the lid off, 蓋をする = put a lid on)." }
    ]
  },
  {
    id: "n2-0287", w: "足元", r: "あしもと", m: "at one's feet; one's step/footing; (figurative) one's immediate situation", c: "noun", lv: 1,
    ex: [{ jp: "暗いので足元に気をつけてください。", en: "It's dark, so please watch your step." }],
    qs: [
      { t: "fitb", s: "雨で道が滑りやすいので、＿＿＿＿に注意して歩いた。", en: "The road was slippery from the rain, so I walked watching my step.", o: ["足元", "頭上", "背後", "目前"], a: 0, e: "足元 = the area at/around one's feet; one's footing. 頭上(ずじょう) = overhead/above one's head. 背後(はいご) = behind one/one's back. 目前(もくぜん) = right before one's eyes/imminent." },
      { t: "meaning", s: "「足元」の意味は？", o: ["at one's feet; one's footing/step", "overhead; above one's head", "behind one; at one's back", "right before one's eyes; imminent"], a: 0, e: "足元 refers to the ground at your feet and your footing (足元が悪い = poor footing, 足元に注意 = watch your step). Figuratively, 足元を見る = take advantage of someone's weak position." }
    ]
  },
  {
    id: "n2-0288", w: "飾り", r: "かざり", m: "decoration; ornament; trimmings", c: "noun", lv: 1,
    ex: [{ jp: "クリスマスツリーに飾りを付けた。", en: "We put decorations on the Christmas tree." }],
    qs: [
      { t: "fitb", s: "派手な＿＿＿＿はやめて、シンプルなデザインにした。", en: "We dropped the flashy ornamentation and went with a simple design.", o: ["飾り", "模様", "包み", "汚れ"], a: 0, e: "飾り = a decoration/ornament. 模様(もよう) = a pattern/design (on a surface). 包み(つつみ) = a wrapping/bundle. 汚れ(よごれ) = a stain/dirt." },
      { t: "meaning", s: "「飾り」の意味は？", o: ["decoration; ornament; trimmings", "a pattern; design on a surface", "a wrapping; bundle", "a stain; dirt"], a: 0, e: "飾り is something added for adornment (壁飾り = wall decoration, お飾り = a (mere) figurehead/ornamental thing). The verb is 飾る." }
    ]
  },
  {
    id: "n2-0289", w: "こないだ", r: "こないだ", m: "the other day; recently; a little while ago (casual)", c: "adv", lv: 1,
    ex: [{ jp: "こないだ話した件、どうなった？", en: "What happened with the matter we talked about the other day?" }],
    qs: [
      { t: "fitb", s: "＿＿＿＿買ったばかりの傘を、もう失くしてしまった。", en: "I already lost the umbrella I just bought the other day.", o: ["こないだ", "これから", "そのうち", "いつか"], a: 0, e: "こないだ = the other day/recently (casual form of この間). これから = from now on. そのうち = before long/eventually. いつか = someday." },
      { t: "meaning", s: "「こないだ」の意味は？", o: ["the other day; recently; a little while ago", "from now on", "before long; eventually", "someday"], a: 0, e: "こないだ is a casual contraction of この間 (このあいだ), meaning 'the other day / recently' (こないだのこと = that thing from the other day)." }
    ]
  },
  {
    id: "n2-0290", w: "推定", r: "すいてい", m: "estimation; presumption; assumption (based on reasoning)", c: "noun", lv: 1,
    ex: [{ jp: "事故の原因は故障と推定される。", en: "The cause of the accident is presumed to be a malfunction." }],
    qs: [
      { t: "fitb", s: "発見された化石は、約一億年前のものと＿＿＿＿されている。", en: "The discovered fossil is estimated to be about a hundred million years old.", o: ["推定", "断定", "推薦", "予約"], a: 0, e: "推定 = estimating/presuming from evidence or reasoning. 断定 = a definitive conclusion/asserting for certain. 推薦 = recommendation (endorsing). 予約 = a reservation/booking." },
      { t: "meaning", s: "「推定」の意味は？", o: ["estimation; presumption from reasoning", "a definitive conclusion; asserting for certain", "recommendation; endorsement", "a reservation; booking"], a: 0, e: "推定 is concluding something probable from available evidence (推定年齢 = estimated age, 推定無罪 = presumption of innocence). 断定 is asserting with certainty." }
    ]
  },
  {
    id: "n2-0291", w: "寮", r: "りょう", m: "dormitory; residence hall; lodging house", c: "noun", lv: 1,
    ex: [{ jp: "大学では寮に住んでいた。", en: "In university I lived in a dormitory." }],
    qs: [
      { t: "fitb", s: "新入社員は、会社の＿＿＿＿に入ることもできる。", en: "New employees can also move into the company dormitory.", o: ["寮", "塾", "邸", "荘"], a: 0, e: "寮(りょう) = a dormitory/residence hall (for students or workers). 塾(じゅく) = a cram school/private tutoring school. 邸(てい) = a mansion/large residence. 荘(そう) = a villa/lodge (often in inn/apartment names)." },
      { t: "meaning", s: "「寮」の意味は？", o: ["dormitory; residence hall; lodging house", "a cram school; tutoring school", "a mansion; large residence", "a villa; lodge"], a: 0, e: "寮 is shared lodging for students or employees (学生寮 = student dorm, 社員寮 = company dormitory, 寮生 = a dorm resident)." }
    ]
  },
  {
    id: "n2-0292", w: "循環", r: "じゅんかん", m: "circulation; cycle; rotation (going around in a loop)", c: "noun", lv: 1,
    ex: [{ jp: "運動すると血液の循環が良くなる。", en: "Exercise improves blood circulation." }],
    qs: [
      { t: "fitb", s: "資源を再利用する＿＿＿＿型の社会が目指されている。", en: "A recycling-based (circular) society is being aimed for.", o: ["循環", "回転", "流通", "移動"], a: 0, e: "循環 = circulation/cycling around a loop (returning to the start). 回転 = rotation/spinning; turnover. 流通 = distribution/circulation of goods or money through a market. 移動 = movement from place to place." },
      { t: "meaning", s: "「循環」の意味は？", o: ["circulation; cycle; going around in a loop", "rotation; spinning; turnover", "distribution of goods through a market", "movement from place to place"], a: 0, e: "循環 means moving in a repeating loop and returning (悪循環 = a vicious cycle, 循環バス = a loop-line bus, 血液循環 = blood circulation)." }
    ]
  },
  {
    id: "n2-0293", w: "賞金", r: "しょうきん", m: "prize money; cash prize; monetary award", c: "noun", lv: 1,
    ex: [{ jp: "コンテストの優勝者には賞金が贈られる。", en: "A cash prize is given to the contest winner." }],
    qs: [
      { t: "fitb", s: "その大会は＿＿＿＿が高額なことで知られている。", en: "That tournament is known for its large prize money.", o: ["賞金", "料金", "税金", "借金"], a: 0, e: "賞金 = prize money/a cash award. 料金 = a fee/charge. 税金 = tax. 借金 = a debt/loan owed." },
      { t: "meaning", s: "「賞金」の意味は？", o: ["prize money; cash prize; monetary award", "a fee; charge", "tax", "a debt; money owed"], a: 0, e: "賞金 is money awarded as a prize (賞金を獲得する = win prize money, 賞金王 = top prize earner). Distinct from 賞品 (a prize item/goods)." }
    ]
  },
  {
    id: "n2-0294", w: "乗車", r: "じょうしゃ", m: "boarding; getting on (a train/vehicle); riding", c: "noun", lv: 1,
    ex: [{ jp: "乗車の際は足元にご注意ください。", en: "Please watch your step when boarding." }],
    qs: [
      { t: "fitb", s: "この特急は全席指定で、＿＿＿＿には予約が必要だ。", en: "This express has all reserved seats; boarding requires a reservation.", o: ["乗車", "降車", "下車", "運転"], a: 0, e: "乗車 = boarding/getting on a train or vehicle. 降車(こうしゃ) = getting off/alighting. 下車(げしゃ) = getting off (often to leave the station, e.g. 途中下車 = stopover). 運転 = driving/operating." },
      { t: "meaning", s: "「乗車」の意味は？", o: ["boarding; getting on a train/vehicle", "getting off; alighting", "getting off (e.g. a stopover)", "driving; operating a vehicle"], a: 0, e: "乗車 means boarding (乗車券 = a (boarding) ticket, 乗車口 = the boarding door). Opposite of 降車/下車." }
    ]
  },
  {
    id: "n2-0295", w: "大学院", r: "だいがくいん", m: "graduate school; postgraduate program", c: "noun", lv: 1,
    ex: [{ jp: "彼は大学院で経済学を研究している。", en: "He researches economics in graduate school." }],
    qs: [
      { t: "fitb", s: "より専門的に学ぶため、＿＿＿＿への進学を決めた。", en: "To study more specialized topics, I decided to go on to graduate school.", o: ["大学院", "大学", "専門学校", "高校"], a: 0, e: "大学院 = graduate/postgraduate school (after a bachelor's). 大学 = university (undergraduate). 専門学校 = a vocational/technical college. 高校 = high school." },
      { t: "meaning", s: "「大学院」の意味は？", o: ["graduate school; postgraduate program", "university (undergraduate)", "a vocational/technical college", "high school"], a: 0, e: "大学院 is postgraduate study (大学院生 = grad student, 大学院修士課程 = master's program), pursued after 大学 (undergrad)." }
    ]
  },
  {
    id: "n2-0296", w: "区域", r: "くいき", m: "zone; area; district (a bounded region)", c: "noun", lv: 1,
    ex: [{ jp: "この区域は駐車禁止だ。", en: "This zone is no-parking." }],
    qs: [
      { t: "fitb", s: "工事中のため、立ち入り＿＿＿＿が制限されている。", en: "Due to construction, the entry zone is restricted.", o: ["区域", "区別", "区切り", "領域"], a: 0, e: "区域 = a bounded zone/area (officially delimited). 区別 = distinguishing/telling apart. 区切り = a break/division point (in time or text). 領域 = a domain/territory/field (often abstract: 専門領域 = field of expertise)." },
      { t: "meaning", s: "「区域」の意味は？", o: ["zone; area; district (a bounded region)", "distinguishing; telling apart", "a break; a dividing point", "a domain; territory; field"], a: 0, e: "区域 is a demarcated physical area (危険区域 = danger zone, 区域外 = outside the zone). 領域 leans more abstract (a field/sphere)." }
    ]
  },
  {
    id: "n2-0297", w: "見学", r: "けんがく", m: "a (study) tour; visit for observation; field study", c: "noun", lv: 1,
    ex: [{ jp: "小学生が工場の見学に来た。", en: "Elementary students came to tour the factory." }],
    qs: [
      { t: "fitb", s: "入学前に、希望者は校内を＿＿＿＿することができる。", en: "Before enrolling, prospective students can tour the campus.", o: ["見学", "見物", "観光", "訪問"], a: 0, e: "見学 = visiting to observe and learn (educational). 見物(けんぶつ) = watching as a spectacle/sightseeing for fun. 観光 = tourism/sightseeing (leisure travel). 訪問 = a visit/call (going to see someone/somewhere)." },
      { t: "meaning", s: "「見学」の意味は？", o: ["a study tour; visiting to observe and learn", "watching as a spectacle; for fun", "tourism; sightseeing (leisure)", "a visit; calling on someone"], a: 0, e: "見学 implies observing with the purpose of learning (社会見学 = an educational field trip, 工場見学 = a factory tour). 見物 is watching for entertainment." }
    ]
  },
  {
    id: "n2-0298", w: "平野", r: "へいや", m: "plain; flatland; open field (geography)", c: "noun", lv: 1,
    ex: [{ jp: "関東平野は日本で最も広い平野だ。", en: "The Kanto Plain is the largest plain in Japan." }],
    qs: [
      { t: "fitb", s: "山を越えると、目の前に広大な＿＿＿＿が広がっていた。", en: "Crossing the mountains, a vast plain spread out before us.", o: ["平野", "盆地", "高原", "海岸"], a: 0, e: "平野 = a (low, flat) plain. 盆地(ぼんち) = a basin (flatland surrounded by mountains). 高原(こうげん) = a plateau/highland. 海岸(かいがん) = the coast/seashore." },
      { t: "meaning", s: "「平野」の意味は？", o: ["a plain; flatland; open field", "a basin surrounded by mountains", "a plateau; highland", "the coast; seashore"], a: 0, e: "平野 is a broad area of flat low land (大平野 = a great plain). 盆地 is enclosed by mountains; 高原 is elevated flatland." }
    ]
  },
  {
    id: "n2-0299", w: "可愛がる", r: "かわいがる", m: "to be affectionate to; to dote on; to treat with love", c: "verb", lv: 1,
    ex: [{ jp: "祖母は孫をとても可愛がっている。", en: "Grandmother dotes on her grandchildren." }],
    qs: [
      { t: "fitb", s: "先輩は後輩を厳しくも温かく＿＿＿＿いた。", en: "The senior was strict yet warmly affectionate toward the juniors.", o: ["可愛がって", "怖がって", "嫌がって", "羨んで"], a: 0, e: "可愛がる = to dote on/treat with affection. 怖がる = to be afraid of. 嫌がる = to dislike/be reluctant. 羨む(うらやむ) = to envy." },
      { t: "meaning", s: "「可愛がる」の意味は？", o: ["to be affectionate to; to dote on", "to be afraid of", "to dislike; to be reluctant", "to envy"], a: 0, e: "可愛がる means to treat someone/a pet with love and care (ペットを可愛がる = dote on a pet). The adjective 可愛い means 'cute.'" }
    ]
  },
  {
    id: "n2-0300", w: "基盤", r: "きばん", m: "foundation; base; underpinning; footing", c: "noun", lv: 1,
    ex: [{ jp: "安定した生活の基盤を築く。", en: "To build a foundation for a stable life." }],
    qs: [
      { t: "fitb", s: "中小企業は、地域経済の＿＿＿＿を支えている。", en: "Small and medium businesses support the foundation of the local economy.", o: ["基盤", "基礎", "土台", "頂点"], a: 0, e: "基盤 = the underpinning/base supporting a system or activity (often abstract: 経済基盤, 生活基盤). 基礎 = the fundamentals/groundwork (knowledge, construction). 土台 = the foundation/base (literal, e.g. of a building) and figurative groundwork. 頂点 = the peak/apex (top)." },
      { t: "meaning", s: "「基盤」の意味は？", o: ["foundation; base; underpinning of a system", "the fundamentals; groundwork", "the foundation/base (of a building); groundwork", "the peak; apex; top"], a: 0, e: "基盤 is the supporting base for activity (生活基盤 = the basis of one's livelihood, 基盤を固める = solidify one's footing). Close to 土台 but more abstract/systemic." }
    ]
  },
  {
    id: "n2-0301", w: "個体", r: "こたい", m: "an individual (organism); a single specimen", c: "noun", lv: 1,
    ex: [{ jp: "この動物は個体によって模様が異なる。", en: "This animal's markings differ from individual to individual." }],
    qs: [
      { t: "fitb", s: "同じ種でも、＿＿＿＿ごとに性格や大きさに差がある。", en: "Even in the same species, there are differences in temperament and size from individual to individual.", o: ["個体", "団体", "全体", "物体"], a: 0, e: "個体 = an individual organism/single specimen (biology). 団体 = a group/organization (collective body). 全体 = the whole/entirety. 物体 = a physical object (any object)." },
      { t: "meaning", s: "「個体」の意味は？", o: ["an individual organism; a single specimen", "a group; an organization", "the whole; the entirety", "a physical object"], a: 0, e: "個体 is a single individual creature, especially in biology (個体数 = population count, 個体差 = individual variation)." }
    ]
  },
  {
    id: "n2-0302", w: "古典", r: "こてん", m: "the classics; classical literature/works", c: "noun", lv: 1,
    ex: [{ jp: "高校で日本の古典を学んだ。", en: "In high school I studied the Japanese classics." }],
    qs: [
      { t: "fitb", s: "『源氏物語』は日本文学の代表的な＿＿＿＿だ。", en: "'The Tale of Genji' is a representative classic of Japanese literature.", o: ["古典", "現代", "近代", "古代"], a: 0, e: "古典 = the classics/classical works (literature, music). 現代 = the contemporary/present age. 近代 = the modern era (recent history). 古代 = ancient times (a historical period)." },
      { t: "meaning", s: "「古典」の意味は？", o: ["the classics; classical literature/works", "the contemporary; present age", "the modern era (recent history)", "ancient times (a historical period)"], a: 0, e: "古典 refers to classic works of enduring value (古典文学 = classical literature, 古典音楽 = classical music). Note 古代 is a time period; 古典 is a body of works." }
    ]
  },
  {
    id: "n2-0303", w: "祝日", r: "しゅくじつ", m: "national holiday; public holiday", c: "noun", lv: 1,
    ex: [{ jp: "来週の月曜日は祝日で学校が休みだ。", en: "Next Monday is a holiday, so school is off." }],
    qs: [
      { t: "fitb", s: "日本では、五月初旬に＿＿＿＿が続く大型連休がある。", en: "In Japan, there's a long holiday in early May with consecutive national holidays.", o: ["祝日", "平日", "休憩", "記念"], a: 0, e: "祝日 = a national/public holiday. 平日 = a weekday (ordinary working day). 休憩 = a break/rest (a short pause). 記念 = commemoration/memorial." },
      { t: "meaning", s: "「祝日」の意味は？", o: ["a national/public holiday", "a weekday; ordinary working day", "a break; a rest period", "commemoration; memorial"], a: 0, e: "祝日 is an officially designated public holiday (国民の祝日 = a national holiday, 祝日法 = the holiday law). Distinct from a personal day off (休日)." }
    ]
  },
  {
    id: "n2-0304", w: "長男", r: "ちょうなん", m: "eldest son; first-born son", c: "noun", lv: 1,
    ex: [{ jp: "彼はその家の長男だ。", en: "He is the eldest son of that family." }],
    qs: [
      { t: "fitb", s: "昔は、家業を＿＿＿＿が継ぐのが一般的だった。", en: "In the old days, it was common for the eldest son to take over the family business.", o: ["長男", "次男", "長女", "末っ子"], a: 0, e: "長男 = the eldest son. 次男(じなん) = the second son. 長女(ちょうじょ) = the eldest daughter. 末っ子(すえっこ) = the youngest child." },
      { t: "meaning", s: "「長男」の意味は？", o: ["eldest son; first-born son", "second son", "eldest daughter", "the youngest child"], a: 0, e: "長男 is the first-born son (長男・長女 = eldest son/daughter). 次男 = second son, 三男 = third son." }
    ]
  },
  {
    id: "n2-0305", w: "斜め", r: "ななめ", m: "diagonal; slanting; at an angle; oblique", c: "naadj", lv: 1,
    ex: [{ jp: "絵が斜めにかかっている。", en: "The picture is hanging crooked (at an angle)." }],
    qs: [
      { t: "fitb", s: "交差点を＿＿＿＿に横切るのは危険だ。", en: "Crossing the intersection diagonally is dangerous.", o: ["斜め", "垂直", "水平", "平行"], a: 0, e: "斜め = diagonal/slanting/at an angle. 垂直(すいちょく) = vertical/perpendicular. 水平(すいへい) = horizontal/level. 平行(へいこう) = parallel." },
      { t: "meaning", s: "「斜め」の意味は？", o: ["diagonal; slanting; at an angle", "vertical; perpendicular", "horizontal; level", "parallel"], a: 0, e: "斜め means at a slant (斜めに線を引く = draw a diagonal line, 斜め前 = diagonally ahead). 機嫌が斜め = in a bad mood (idiom)." }
    ]
  },
  {
    id: "n2-0306", w: "給与", r: "きゅうよ", m: "salary; pay; wages; remuneration", c: "noun", lv: 1,
    ex: [{ jp: "給与は毎月二十五日に振り込まれる。", en: "The salary is deposited on the 25th of each month." }],
    qs: [
      { t: "fitb", s: "能力や成果に応じて＿＿＿＿が決まる仕組みだ。", en: "It's a system where pay is determined according to ability and results.", o: ["給与", "料金", "費用", "予算"], a: 0, e: "給与 = salary/pay (compensation for work). 料金 = a fee/charge (for a service). 費用 = expenses/costs. 予算 = a budget." },
      { t: "meaning", s: "「給与」の意味は？", o: ["salary; pay; wages; remuneration", "a fee; charge for a service", "expenses; costs", "a budget"], a: 0, e: "給与 is compensation paid for work (給与明細 = a pay slip, 基本給 = base pay). ≒ 給料, but 給与 is the more formal/comprehensive term." }
    ]
  },
  {
    id: "n2-0307", w: "工夫", r: "くふう", m: "ingenuity; devising a clever way; contrivance", c: "noun", lv: 1,
    ex: [{ jp: "狭い部屋を広く見せる工夫をした。", en: "I devised a way to make the small room look spacious." }],
    qs: [
      { t: "fitb", s: "限られた予算でも、＿＿＿＿次第で良い物が作れる。", en: "Even on a limited budget, you can make good things depending on your ingenuity.", o: ["工夫", "努力", "発明", "面倒"], a: 0, e: "工夫 = devising clever ways/ingenuity (improving by thinking creatively). 努力 = effort/diligence (persistent hard work). 発明 = invention (creating something new). 面倒 = trouble/bother." },
      { t: "meaning", s: "「工夫」の意味は？", o: ["ingenuity; devising a clever way; contrivance", "effort; diligence; hard work", "invention; creating something new", "trouble; bother"], a: 0, e: "工夫 means thinking up clever ways to improve or solve something (工夫を凝らす = put ingenuity into it, ひと工夫 = a little clever touch)." }
    ]
  },
  {
    id: "n2-0308", w: "先頭", r: "せんとう", m: "the head; the lead; the front (of a line or group)", c: "noun", lv: 1,
    ex: [{ jp: "彼が行列の先頭に立っている。", en: "He is standing at the head of the line." }],
    qs: [
      { t: "fitb", s: "マラソンで、その選手はずっと＿＿＿＿を走り続けた。", en: "In the marathon, that runner kept running at the front the whole time.", o: ["先頭", "末尾", "中央", "背後"], a: 0, e: "先頭 = the very front/lead position. 末尾(まつび) = the tail end/last part. 中央 = the center/middle. 背後 = behind/at the rear." },
      { t: "meaning", s: "「先頭」の意味は？", o: ["the head; lead; front of a line or group", "the tail end; the last part", "the center; the middle", "behind; at the rear"], a: 0, e: "先頭 is the leading position (先頭に立つ = take the lead, 先頭を切る = be the first to act). Opposite of 末尾/最後尾." }
    ]
  },
  {
    id: "n2-0309", w: "率直", r: "そっちょく", m: "frank; candid; straightforward; honest", c: "naadj", lv: 1,
    ex: [{ jp: "率直な意見を聞かせてください。", en: "Please give me your frank opinion." }],
    qs: [
      { t: "fitb", s: "遠慮せず、＿＿＿＿に感想を述べてもらえると助かる。", en: "It helps if you give your impressions frankly, without holding back.", o: ["率直", "遠回し", "曖昧", "慎重"], a: 0, e: "率直 = frank/candid/straightforward (saying things plainly). 遠回し(とおまわし) = roundabout/indirect (the opposite). 曖昧(あいまい) = vague/ambiguous. 慎重(しんちょう) = cautious/careful." },
      { t: "meaning", s: "「率直」の意味は？", o: ["frank; candid; straightforward; honest", "roundabout; indirect", "vague; ambiguous", "cautious; prudent"], a: 0, e: "率直 means speaking openly and directly without sugarcoating (率直に言うと = frankly speaking)." }
    ]
  },
  {
    id: "n2-0310", w: "濃度", r: "のうど", m: "concentration; density (of a substance)", c: "noun", lv: 1,
    ex: [{ jp: "この溶液の濃度を測定する。", en: "We measure the concentration of this solution." }],
    qs: [
      { t: "fitb", s: "空気中の二酸化炭素の＿＿＿＿が年々上がっている。", en: "The concentration of carbon dioxide in the air is rising year by year.", o: ["濃度", "温度", "密度", "強度"], a: 0, e: "濃度 = concentration (amount of a substance per volume) / thickness. 温度 = temperature. 密度(みつど) = density (mass or number per space/area). 強度 = strength/intensity." },
      { t: "meaning", s: "「濃度」の意味は？", o: ["concentration; density of a substance in a mixture", "temperature", "density (mass/number per space)", "strength; intensity"], a: 0, e: "濃度 is how concentrated a substance is (塩分濃度 = salt concentration, 濃度が高い = highly concentrated). 密度 is mass/number packed into a space." }
    ]
  },
  {
    id: "n2-0311", w: "窓口", r: "まどぐち", m: "(service) window; counter; (figurative) point of contact", c: "noun", lv: 1,
    ex: [{ jp: "切符は駅の窓口で買えます。", en: "You can buy tickets at the station window." }],
    qs: [
      { t: "fitb", s: "問い合わせは、こちらの＿＿＿＿で受け付けております。", en: "Inquiries are handled at this counter.", o: ["窓口", "入口", "受付", "出口"], a: 0, e: "窓口 = a service window/counter where business is transacted; figuratively a contact point. 入口 = an entrance. 受付 = a reception desk (where you check in). 出口 = an exit." },
      { t: "meaning", s: "「窓口」の意味は？", o: ["a service window/counter; point of contact", "an entrance", "a reception desk; check-in", "an exit"], a: 0, e: "窓口 is the counter where you conduct business (銀行の窓口 = bank teller window) and figuratively the contact point (相談窓口 = a help/consultation desk)." }
    ]
  },
  {
    id: "n2-0312", w: "矛盾", r: "むじゅん", m: "contradiction; inconsistency", c: "noun", lv: 1,
    ex: [{ jp: "彼の話には矛盾がある。", en: "There's a contradiction in his story." }],
    qs: [
      { t: "fitb", s: "前に言ったことと今の主張が＿＿＿＿している。", en: "What you said before and your current claim are contradictory.", o: ["矛盾", "一致", "調和", "共通"], a: 0, e: "矛盾 = contradiction/inconsistency (two things that can't both be true). 一致 = agreement/coincidence (matching up). 調和 = harmony. 共通 = something in common/shared." },
      { t: "meaning", s: "「矛盾」の意味は？", o: ["contradiction; inconsistency", "agreement; matching up", "harmony", "something in common; shared"], a: 0, e: "矛盾 means a logical contradiction (矛盾だらけ = full of contradictions). From a famous tale of a 矛 (spear) and 盾 (shield) that couldn't both be as claimed." }
    ]
  },
  {
    id: "n2-0313", w: "意義", r: "いぎ", m: "significance; meaning; import (worth/value of something)", c: "noun", lv: 1,
    ex: [{ jp: "ボランティア活動には大きな意義がある。", en: "Volunteer work has great significance." }],
    qs: [
      { t: "fitb", s: "単に勝つことより、挑戦すること自体に＿＿＿＿がある。", en: "There is significance in the act of challenging itself, more than merely winning.", o: ["意義", "意味", "意見", "意識"], a: 0, e: "意義 = significance/worth/import (the value or point of something). 意味 = meaning/sense (of a word or situation). 意見 = an opinion. 意識 = consciousness/awareness. 意味 and 意義 overlap, but 意義 stresses worth/significance." },
      { t: "meaning", s: "「意義」の意味は？", o: ["significance; import; worth of something", "meaning; sense (of a word/situation)", "an opinion", "consciousness; awareness"], a: 0, e: "意義 emphasizes the value or significance of something (意義深い = deeply meaningful, 存在意義 = reason for being). 意味 is more about literal meaning." }
    ]
  },
  {
    id: "n2-0314", w: "いちいち", r: "いちいち", m: "one by one; each and every; (often) for every little thing", c: "adv", lv: 1,
    ex: [{ jp: "いちいち説明するのは面倒だ。", en: "It's a pain to explain each and every thing." }],
    qs: [
      { t: "fitb", s: "＿＿＿＿細かいことに文句を言わないでほしい。", en: "I wish you wouldn't complain about every little thing.", o: ["いちいち", "めったに", "せいぜい", "たちまち"], a: 0, e: "いちいち = one by one / for every single thing (often with annoyance). めったに = (with neg.) rarely. せいぜい = at most. たちまち = in an instant/suddenly." },
      { t: "meaning", s: "「いちいち」の意味は？", o: ["one by one; for every little thing (often annoyed)", "rarely; seldom (with neg.)", "at most; at best", "in an instant; suddenly"], a: 0, e: "いちいち means going through things one at a time, often with the nuance of 'for every trivial thing' (いちいちうるさい = nags about everything)." }
    ]
  },
  {
    id: "n2-0315", w: "区分", r: "くぶん", m: "division; classification; demarcation; section", c: "noun", lv: 1,
    ex: [{ jp: "ごみは種類ごとに区分して出す。", en: "Trash is sorted by type before being put out." }],
    qs: [
      { t: "fitb", s: "資料を年代別に＿＿＿＿して、整理した。", en: "I divided the materials by era and organized them.", o: ["区分", "区別", "分割", "配分"], a: 0, e: "区分 = dividing into sections/categories (systematic classification). 区別 = distinguishing/telling two things apart. 分割 = splitting into portions/installments. 配分 = allocation/distributing shares." },
      { t: "meaning", s: "「区分」の意味は？", o: ["division; classification into sections", "distinguishing; telling two things apart", "splitting into portions or installments", "allocation; distributing shares"], a: 0, e: "区分 means systematically dividing into categories or sections (区分する = to classify/segment). 区別 is just telling things apart; 分類 is grouping by type." }
    ]
  },
  {
    id: "n2-0316", w: "系統", r: "けいとう", m: "system; lineage; line (a connected series/family)", c: "noun", lv: 1,
    ex: [{ jp: "この鉄道は複雑な系統に分かれている。", en: "This railway is divided into complex lines." }],
    qs: [
      { t: "fitb", s: "暖色＿＿＿＿の色でまとめると、部屋が温かい印象になる。", en: "Pulling the room together in warm-color tones gives it a cozy impression.", o: ["系統", "系列", "種類", "分野"], a: 0, e: "系統 = a system/lineage/line (a connected series, e.g. color family, bloodline, route). 系列 = a group of affiliated companies; a sequence/series. 種類 = a kind/type/variety. 分野 = a field/domain. 系統 stresses a connected line or family of things." },
      { t: "meaning", s: "「系統」の意味は？", o: ["system; lineage; a connected line/family", "affiliated company group; a sequence", "kind; type; variety", "field; domain"], a: 0, e: "系統 denotes a connected line or family (青系統の色 = blue-family colors, 神経系統 = the nervous system, 血の系統 = bloodline)." }
    ]
  },
  {
    id: "n2-0317", w: "縮小", r: "しゅくしょう", m: "reduction; downsizing; scaling down", c: "noun", lv: 1,
    ex: [{ jp: "会社は事業を縮小することを決めた。", en: "The company decided to scale down its operations." }],
    qs: [
      { t: "fitb", s: "予算不足で、計画を大幅に＿＿＿＿せざるを得なかった。", en: "Due to lack of budget, we had no choice but to greatly scale down the plan.", o: ["縮小", "拡大", "拡張", "増加"], a: 0, e: "縮小 = reducing/scaling down in size or scope. 拡大 = enlargement/expansion (the opposite). 拡張 = extension/expanding capacity. 増加 = increase in number/quantity." },
      { t: "meaning", s: "「縮小」の意味は？", o: ["reduction; downsizing; scaling down", "enlargement; expansion", "extension; expanding capacity", "increase in number or quantity"], a: 0, e: "縮小 means making smaller in size or scope (規模を縮小 = scale down, 縮小コピー = a reduced-size copy). Opposite of 拡大." }
    ]
  },
  {
    id: "n2-0318", w: "知人", r: "ちじん", m: "an acquaintance; someone one knows", c: "noun", lv: 1,
    ex: [{ jp: "その店は知人に紹介してもらった。", en: "I was introduced to that shop by an acquaintance." }],
    qs: [
      { t: "fitb", s: "友人というほど親しくはないが、＿＿＿＿は大勢いる。", en: "I don't have many close friends, but I have many acquaintances.", o: ["知人", "親友", "他人", "恋人"], a: 0, e: "知人 = an acquaintance (someone you know, but not necessarily close). 親友 = a close/best friend. 他人(たにん) = a stranger/unrelated person. 恋人 = a lover/romantic partner." },
      { t: "meaning", s: "「知人」の意味は？", o: ["an acquaintance; someone one knows", "a close/best friend", "a stranger; an unrelated person", "a lover; romantic partner"], a: 0, e: "知人 is someone you're acquainted with but not necessarily close to (知人を介して = through an acquaintance). 友人 implies more closeness; 親友 is a best friend." }
    ]
  },
  {
    id: "n2-0319", w: "通路", r: "つうろ", m: "passage; aisle; passageway; walkway", c: "noun", lv: 1,
    ex: [{ jp: "飛行機では通路側の席が好きだ。", en: "On planes I prefer the aisle seat." }],
    qs: [
      { t: "fitb", s: "非常時に備え、＿＿＿＿に物を置いてはいけない。", en: "In case of emergency, you must not place things in the passageway.", o: ["通路", "道路", "線路", "回路"], a: 0, e: "通路 = a passage/aisle/walkway (for people to pass through, indoors or in vehicles). 道路 = a road/street (for traffic). 線路(せんろ) = railway tracks. 回路(かいろ) = an (electric) circuit." },
      { t: "meaning", s: "「通路」の意味は？", o: ["passage; aisle; walkway for people", "a road; street for traffic", "railway tracks", "an electric circuit"], a: 0, e: "通路 is a path for people to walk through (通路側 = aisle side, 避難通路 = an evacuation route). 道路 is for vehicles." }
    ]
  },
  {
    id: "n2-0320", w: "弟子", r: "でし", m: "pupil; disciple; apprentice; follower", c: "noun", lv: 1,
    ex: [{ jp: "彼は有名な職人の弟子になった。", en: "He became the apprentice of a famous craftsman." }],
    qs: [
      { t: "fitb", s: "その師匠は、これまで多くの優れた＿＿＿＿を育ててきた。", en: "That master has raised many excellent disciples over the years.", o: ["弟子", "師匠", "先輩", "仲間"], a: 0, e: "弟子(でし) = a disciple/apprentice who learns from a master. 師匠(ししょう) = the master/teacher (the one being learned from). 先輩 = a senior (more experienced peer). 仲間 = a companion/comrade/peer." },
      { t: "meaning", s: "「弟子」の意味は？", o: ["pupil; disciple; apprentice; follower", "the master; the teacher", "a senior; more experienced peer", "a companion; comrade"], a: 0, e: "弟子 is someone who studies under a master in a craft or art (弟子入りする = become an apprentice). The master is the 師匠." }
    ]
  },
  {
    id: "n2-0321", w: "塊", r: "かたまり", m: "lump; mass; cluster; chunk", c: "noun", lv: 1,
    ex: [{ jp: "土の塊を手で砕いた。", en: "I crushed the lump of soil with my hands." }],
    qs: [
      { t: "fitb", s: "彼はまさに情熱の＿＿＿＿のような人だ。", en: "He is truly like a mass of passion personified.", o: ["塊", "粒", "欠片", "粉"], a: 0, e: "塊(かたまり) = a lump/mass/chunk (a solid clump); figuratively, an embodiment (情熱の塊 = a ball of passion). 粒(つぶ) = a grain/small round bit. 欠片(かけら) = a fragment/shard. 粉(こな) = powder." },
      { t: "meaning", s: "「塊」の意味は？", o: ["lump; mass; cluster; chunk", "a grain; a small round bit", "a fragment; shard", "powder"], a: 0, e: "塊 is a solid clump (肉の塊 = a hunk of meat, 一塊 = one lump). Figuratively it means an embodiment of something (欲の塊 = pure greed)." }
    ]
  },
  {
    id: "n2-0322", w: "学科", r: "がっか", m: "subject of study; (academic) department; course", c: "noun", lv: 1,
    ex: [{ jp: "大学では建築学科に所属している。", en: "At university I belong to the architecture department." }],
    qs: [
      { t: "fitb", s: "運転免許の試験は、＿＿＿＿試験と技能試験に分かれている。", en: "The driver's license exam is divided into a written (subject) test and a skills test.", o: ["学科", "学校", "学年", "学問"], a: 0, e: "学科 = a field/subject of study, or an academic department; also 'written test' (vs practical). 学校 = a school (the institution). 学年 = a school year/grade level. 学問 = scholarship/learning/academic study (in the abstract)." },
      { t: "meaning", s: "「学科」の意味は？", o: ["a subject of study; academic department; written test", "a school (the institution)", "a school year; grade level", "scholarship; learning (in the abstract)"], a: 0, e: "学科 refers to a course/department of study (英文学科 = English literature department) and the written/theory portion of an exam (学科試験 = written test)." }
    ]
  },
  {
    id: "n2-0323", w: "果たして", r: "はたして", m: "sure enough; as expected; (with question) really; I wonder if", c: "adv", lv: 1,
    ex: [{ jp: "果たして彼の予想は当たった。", en: "Sure enough, his prediction came true." }],
    qs: [
      { t: "fitb", s: "これほどの難題を、＿＿＿＿解決できるのだろうか。", en: "I wonder whether we can really solve such a difficult problem.", o: ["果たして", "せっかく", "どうやら", "たちまち"], a: 0, e: "果たして = sure enough/as expected; (with a question) 'really, I wonder if.' せっかく = with effort/(a shame to waste). どうやら = apparently/it seems. たちまち = in an instant." },
      { t: "meaning", s: "「果たして」の意味は？", o: ["sure enough; as expected; (in a question) really; I wonder if", "with effort; (a shame to waste)", "apparently; it seems", "in an instant; suddenly"], a: 0, e: "果たして confirms an expectation (果たしてその通りだった = sure enough, it was so) or, with a question, expresses doubt (果たして本当だろうか = I wonder if it's really true)." }
    ]
  },
  {
    id: "n2-0324", w: "響き", r: "ひびき", m: "resonance; reverberation; sound; ring (the impression a sound gives)", c: "noun", lv: 1,
    ex: [{ jp: "鐘の響きが遠くまで届いた。", en: "The resonance of the bell reached far away." }],
    qs: [
      { t: "fitb", s: "その言葉には、どこか懐かしい＿＿＿＿がある。", en: "Those words have a somehow nostalgic ring to them.", o: ["響き", "輝き", "香り", "痛み"], a: 0, e: "響き = resonance/the sound or ring something has (also the impression a word gives). 輝き(かがやき) = brilliance/shine. 香り(かおり) = scent/fragrance. 痛み(いたみ) = pain." },
      { t: "meaning", s: "「響き」の意味は？", o: ["resonance; sound; the ring/impression a sound or word gives", "brilliance; shine", "scent; fragrance", "pain"], a: 0, e: "響き is the reverberating sound, or the impression a word's sound conveys (言葉の響き = the ring of a word, 美しい響き = a beautiful sound). The verb is 響く." }
    ]
  },
  {
    id: "n2-0325", w: "浴衣", r: "ゆかた", m: "yukata; light cotton kimono (summer/casual)", c: "noun", lv: 1,
    ex: [{ jp: "夏祭りに浴衣を着て出かけた。", en: "I went out to the summer festival wearing a yukata." }],
    qs: [
      { t: "fitb", s: "温泉旅館では、館内を＿＿＿＿で歩くことができる。", en: "At a hot-spring inn, you can walk around inside in a yukata.", o: ["浴衣", "水着", "制服", "背広"], a: 0, e: "浴衣 = a light cotton kimono worn in summer or after bathing. 水着(みずぎ) = a swimsuit. 制服(せいふく) = a uniform. 背広(せびろ) = a (men's) business suit." },
      { t: "meaning", s: "「浴衣」の意味は？", o: ["yukata; a light cotton summer kimono", "a swimsuit", "a uniform", "a (men's) business suit"], a: 0, e: "浴衣 is an informal cotton kimono worn at summer festivals, fireworks, and inns (浴衣を着る = wear a yukata). Lighter and more casual than a formal 着物." }
    ]
  },
  {
    id: "n2-0326", w: "容器", r: "ようき", m: "container; receptacle; vessel", c: "noun", lv: 1,
    ex: [{ jp: "残り物を容器に移して冷蔵庫に入れた。", en: "I moved the leftovers into a container and put it in the fridge." }],
    qs: [
      { t: "fitb", s: "密閉できる＿＿＿＿に入れれば、食品が長持ちする。", en: "If you put food in a sealable container, it keeps longer.", o: ["容器", "内容", "容量", "液体"], a: 0, e: "容器 = a container/receptacle (that holds something). 内容 = the contents (what's inside). 容量 = capacity (how much it holds). 液体 = a liquid." },
      { t: "meaning", s: "「容器」の意味は？", o: ["container; receptacle; vessel", "the contents; what's inside", "capacity; how much it holds", "a liquid"], a: 0, e: "容器 is the vessel that holds contents (保存容器 = a storage container, ガラス容器 = a glass container). 内容 is what's inside; 容量 is its capacity." }
    ]
  },
  {
    id: "n2-0327", w: "有無", r: "うむ", m: "presence or absence; whether or not (something exists)", c: "noun", lv: 1,
    ex: [{ jp: "アレルギーの有無を確認する。", en: "We check for the presence or absence of allergies." }],
    qs: [
      { t: "fitb", s: "経験の＿＿＿＿にかかわらず、誰でも応募できます。", en: "Regardless of whether you have experience, anyone can apply.", o: ["有無", "多少", "良否", "賛否"], a: 0, e: "有無 = presence or absence (yes/no, whether it exists). 多少(たしょう) = more or less/some amount. 良否(りょうひ) = good or bad (quality). 賛否(さんぴ) = for or against (approval/disapproval)." },
      { t: "meaning", s: "「有無」の意味は？", o: ["presence or absence; whether or not something exists", "more or less; some amount", "good or bad (quality)", "for or against; approval or disapproval"], a: 0, e: "有無 pairs 有 (have/exist) and 無 (not have) — whether something is present (有無を確認 = check for presence, 有無を言わさず = without taking no for an answer)." }
    ]
  },
  {
    id: "n2-0328", w: "偉い", r: "えらい", m: "great; admirable; eminent; (of position) high-ranking", c: "iadj", lv: 1,
    ex: [{ jp: "一人で全部やり遂げて、本当に偉いね。", en: "You did it all by yourself — that's really admirable." }],
    qs: [
      { t: "fitb", s: "会議には会社の＿＿＿＿人たちが大勢出席していた。", en: "Many high-ranking people from the company attended the meeting.", o: ["偉い", "幼い", "賢い", "鈍い"], a: 0, e: "偉い = great/admirable; high-ranking/important (of a person). 幼い(おさない) = young/childish. 賢い(かしこい) = clever/wise. 鈍い(にぶい) = dull/slow." },
      { t: "meaning", s: "「偉い」の意味は？", o: ["great; admirable; eminent; high-ranking", "young; childish", "clever; wise", "dull; slow"], a: 0, e: "偉い praises someone's achievement or character (偉い人 = an important/great person, よく頑張って偉い = well done, you did great)." }
    ]
  },
  {
    id: "n2-0329", w: "学年", r: "がくねん", m: "school year; grade (level) in school", c: "noun", lv: 1,
    ex: [{ jp: "弟とは学年が二つ違う。", en: "My younger brother is two school grades apart from me." }],
    qs: [
      { t: "fitb", s: "同じ＿＿＿＿の生徒が、一つの教室で授業を受ける。", en: "Students of the same grade take classes in one classroom.", o: ["学年", "学期", "学費", "学歴"], a: 0, e: "学年 = a school year/grade level. 学期(がっき) = a term/semester (a part of the school year). 学費 = tuition/school fees. 学歴 = one's educational background/credentials." },
      { t: "meaning", s: "「学年」の意味は？", o: ["school year; grade level", "a term; semester", "tuition; school fees", "one's educational background"], a: 0, e: "学年 is which year/grade a student is in (学年が上がる = move up a grade, 同学年 = the same grade). 学期 is a term within the year." }
    ]
  },
  {
    id: "n2-0330", w: "貨物", r: "かもつ", m: "cargo; freight; goods (in transport)", c: "noun", lv: 1,
    ex: [{ jp: "貨物を船で海外へ運ぶ。", en: "The cargo is carried overseas by ship." }],
    qs: [
      { t: "fitb", s: "この線路は、旅客ではなく＿＿＿＿の輸送に使われている。", en: "This rail line is used for freight transport, not passengers.", o: ["貨物", "旅客", "乗客", "郵便"], a: 0, e: "貨物 = cargo/freight (goods being transported). 旅客(りょかく) = passengers (as a category in transport). 乗客 = a passenger (on board). 郵便 = mail/post." },
      { t: "meaning", s: "「貨物」の意味は？", o: ["cargo; freight; transported goods", "passengers (as a transport category)", "a passenger on board", "mail; post"], a: 0, e: "貨物 is freight/cargo (貨物列車 = a freight train, 貨物船 = a cargo ship). Contrast 旅客 (passengers)." }
    ]
  },
  {
    id: "n2-0331", w: "私立", r: "しりつ", m: "private (privately established/run)", c: "noun", lv: 1,
    ex: [{ jp: "彼女は私立の高校に通っている。", en: "She attends a private high school." }],
    qs: [
      { t: "fitb", s: "＿＿＿＿大学は、国立に比べて学費が高い傾向がある。", en: "Private universities tend to have higher tuition than national ones.", o: ["私立", "国立", "公立", "県立"], a: 0, e: "私立 = private (privately founded and run). 国立 = national (run by the central government). 公立 = public (run by local government). 県立(けんりつ) = prefectural (run by a prefecture)." },
      { t: "meaning", s: "「私立」の意味は？", o: ["private; privately established and run", "national; run by the central government", "public; run by local government", "prefectural; run by a prefecture"], a: 0, e: "私立 means privately operated (私立学校 = private school, 私立病院 = private hospital). Contrast 国立/公立 (publicly run). Sometimes read わたくしりつ to avoid confusion with 市立(しりつ)." }
    ]
  },
  {
    id: "n2-0332", w: "上り", r: "のぼり", m: "ascent; uphill; inbound (train, toward the capital)", c: "noun", lv: 1,
    ex: [{ jp: "東京方面行きの上りの電車に乗る。", en: "I take the inbound train heading toward Tokyo." }],
    qs: [
      { t: "fitb", s: "連休の最終日は、＿＿＿＿の道路が大渋滞する。", en: "On the last day of the long weekend, the inbound roads get heavily congested.", o: ["上り", "下り", "回り", "通り"], a: 0, e: "上り(のぼり) = ascent/uphill; inbound (toward Tokyo/the city center). 下り(くだり) = descent/downhill; outbound (away from the capital). 回り(まわり) = going around/surroundings. 通り(とおり) = a street; as (per)." },
      { t: "meaning", s: "「上り」の意味は？", o: ["ascent; uphill; inbound (toward the capital)", "descent; downhill; outbound", "going around; surroundings", "a street; as per"], a: 0, e: "上り means going up or heading toward the capital (上り坂 = uphill slope, 上り電車 = inbound train). Opposite of 下り (down/outbound)." }
    ]
  },
  {
    id: "n2-0333", w: "話し合い", r: "はなしあい", m: "discussion; talks; conferring together", c: "noun", lv: 1,
    ex: [{ jp: "問題は話し合いで解決しよう。", en: "Let's resolve the problem through discussion." }],
    qs: [
      { t: "fitb", s: "対立を避け、十分な＿＿＿＿を重ねて結論を出した。", en: "Avoiding conflict, we held thorough discussions and reached a conclusion.", o: ["話し合い", "言い争い", "打ち合わせ", "問い合わせ"], a: 0, e: "話し合い = a discussion/talks (parties conferring to reach agreement). 言い争い = a quarrel/argument (disputing angrily). 打ち合わせ = a (planning/business) meeting to coordinate. 問い合わせ = an inquiry (asking for info)." },
      { t: "meaning", s: "「話し合い」の意味は？", o: ["discussion; talks; conferring together", "a quarrel; angry argument", "a planning/coordination meeting", "an inquiry; request for information"], a: 0, e: "話し合い is talking things over to reach understanding (話し合いで決める = decide by discussion). The verb is 話し合う." }
    ]
  },
  {
    id: "n2-0334", w: "夜間", r: "やかん", m: "nighttime; during the night; nocturnal", c: "noun", lv: 1,
    ex: [{ jp: "この病院は夜間も診察を受け付けている。", en: "This hospital accepts examinations even at night." }],
    qs: [
      { t: "fitb", s: "昼は働きながら、＿＿＿＿の学校で資格の勉強をしている。", en: "While working in the daytime, I study for a qualification at a night school.", o: ["夜間", "昼間", "早朝", "深夜"], a: 0, e: "夜間 = nighttime/during the night (a span of hours). 昼間(ひるま) = daytime. 早朝(そうちょう) = early morning. 深夜(しんや) = the dead of night/late at night (a narrower, deeper part of the night)." },
      { t: "meaning", s: "「夜間」の意味は？", o: ["nighttime; during the night", "daytime", "early morning", "the dead of night; very late at night"], a: 0, e: "夜間 covers the nighttime hours (夜間営業 = nighttime business hours, 夜間飛行 = a night flight). Opposite of 昼間 (daytime)." }
    ]
  },
  {
    id: "n2-0335", w: "来日", r: "らいにち", m: "coming to Japan; a visit to Japan (by a foreigner)", c: "noun", lv: 1,
    ex: [{ jp: "有名な歌手が来日し、コンサートを開いた。", en: "A famous singer came to Japan and held a concert." }],
    qs: [
      { t: "fitb", s: "その大統領の＿＿＿＿は、両国の関係改善につながった。", en: "That president's visit to Japan led to improved relations between the two countries.", o: ["来日", "出国", "帰国", "渡米"], a: 0, e: "来日 = (a foreigner) coming to Japan. 出国(しゅっこく) = leaving the country/departing abroad. 帰国 = returning to one's home country. 渡米(とべい) = going to America." },
      { t: "meaning", s: "「来日」の意味は？", o: ["a foreigner coming to/visiting Japan", "leaving the country; departing abroad", "returning to one's home country", "going to America"], a: 0, e: "来日 specifically means coming to Japan, used for foreigners or those arriving from abroad (初来日 = first visit to Japan)." }
    ]
  },
  {
    id: "n2-0336", w: "案外", r: "あんがい", m: "unexpectedly; surprisingly; more than one thought", c: "adv", lv: 1,
    ex: [{ jp: "難しそうに見えたが、案外簡単だった。", en: "It looked hard, but it was unexpectedly easy." }],
    qs: [
      { t: "fitb", s: "心配していた試験は、＿＿＿＿うまくいった。", en: "The exam I'd been worried about went surprisingly well.", o: ["案外", "予想通り", "ますます", "めったに"], a: 0, e: "案外 = unexpectedly/surprisingly (contrary to what one assumed). 予想通り = as expected/as predicted (the opposite). ますます = increasingly. めったに = (with neg.) rarely." },
      { t: "meaning", s: "「案外」の意味は？", o: ["unexpectedly; surprisingly; more than one thought", "as expected; as predicted", "increasingly; more and more", "rarely; seldom (with neg.)"], a: 0, e: "案外 means the result differs from expectation (案外おいしい = surprisingly tasty). ≒ 意外と. Opposite nuance to 予想通り." }
    ]
  },
  {
    id: "n2-0337", w: "果実", r: "かじつ", m: "fruit (of a plant); (figurative) fruits/results", c: "noun", lv: 1,
    ex: [{ jp: "この木はおいしい果実をつける。", en: "This tree bears delicious fruit." }],
    qs: [
      { t: "fitb", s: "このジュースは、新鮮な＿＿＿＿を絞って作られている。", en: "This juice is made by squeezing fresh fruit.", o: ["果実", "野菜", "穀物", "種子"], a: 0, e: "果実 = fruit (the produce of a plant; also figurative 'fruits of labor'). 野菜 = vegetables. 穀物(こくもつ) = grains/cereals. 種子(しゅし) = seeds." },
      { t: "meaning", s: "「果実」の意味は？", o: ["fruit (of a plant); fruits/results", "vegetables", "grains; cereals", "seeds"], a: 0, e: "果実 is the fruit a plant produces (果実酒 = fruit wine); figuratively, the fruits of effort (努力の果実 = the fruits of one's labor). 果物(くだもの) is the everyday word for edible fruit." }
    ]
  },
  {
    id: "n2-0338", w: "行列", r: "ぎょうれつ", m: "a line; queue; procession; (math) matrix", c: "noun", lv: 1,
    ex: [{ jp: "人気のラーメン店には長い行列ができていた。", en: "A long line had formed at the popular ramen shop." }],
    qs: [
      { t: "fitb", s: "開店前から、店の前には＿＿＿＿ができていた。", en: "A queue had formed in front of the shop even before it opened.", o: ["行列", "渋滞", "集団", "群衆"], a: 0, e: "行列 = a line/queue of people; a procession. 渋滞 = a traffic jam (congestion of vehicles). 集団 = a group/collective body. 群衆(ぐんしゅう) = a crowd/throng (a mass of people)." },
      { t: "meaning", s: "「行列」の意味は？", o: ["a line; queue; procession", "a traffic jam; congestion", "a group; collective body", "a crowd; a throng"], a: 0, e: "行列 is people lined up in a row (行列ができる = a queue forms, 行列に並ぶ = wait in line). Also a parade/procession, and 'matrix' in math." }
    ]
  },
  {
    id: "n2-0339", w: "傑作", r: "けっさく", m: "masterpiece; one's best work; (colloquial) a real hoot", c: "noun", lv: 1,
    ex: [{ jp: "この絵は彼の傑作と言われている。", en: "This painting is said to be his masterpiece." }],
    qs: [
      { t: "fitb", s: "数ある作品の中でも、これは間違いなく＿＿＿＿だ。", en: "Among his many works, this is without doubt a masterpiece.", o: ["傑作", "失敗作", "試作", "量産"], a: 0, e: "傑作 = a masterpiece/one's finest work (outstanding). 失敗作 = a failed/botched work. 試作 = a trial/prototype piece. 量産 = mass production. 傑作 ≒ 名作, but 傑作 stresses standout brilliance/originality." },
      { t: "meaning", s: "「傑作」の意味は？", o: ["masterpiece; one's best, outstanding work", "a failed/botched work", "a trial piece; prototype", "mass production"], a: 0, e: "傑作 is an exceptionally excellent work (歴史的傑作 = a historic masterpiece). Colloquially it can mean 'hilarious' (あの話は傑作だ = that story is a riot)." }
    ]
  },
  {
    id: "n2-0340", w: "気配", r: "けはい", m: "sign; indication; hint; presence (felt, not clearly seen)", c: "noun", lv: 1,
    ex: [{ jp: "背後に人の気配を感じた。", en: "I sensed the presence of someone behind me." }],
    qs: [
      { t: "fitb", s: "空が暗くなり、雨が降り出す＿＿＿＿がしてきた。", en: "The sky darkened, and there were signs that it would start raining.", o: ["気配", "気分", "気候", "景色"], a: 0, e: "気配 = a subtle sign/indication or felt presence (sensed indirectly). 気分 = mood/feeling (one's state of mind). 気候 = climate (long-term weather). 景色(けしき) = scenery/a view." },
      { t: "meaning", s: "「気配」の意味は？", o: ["a sign; indication; felt presence (sensed indirectly)", "mood; one's state of mind", "climate; long-term weather", "scenery; a view"], a: 0, e: "気配 is a faint sign or presence you sense rather than clearly see (人の気配 = a sense that someone's there, 春の気配 = signs of spring)." }
    ]
  },
  {
    id: "n2-0341", w: "公正", r: "こうせい", m: "fairness; impartiality; justice", c: "naadj", lv: 1,
    ex: [{ jp: "審査は公正に行われた。", en: "The screening was conducted fairly." }],
    qs: [
      { t: "fitb", s: "審判には、どちらにも偏らない＿＿＿＿な判断が求められる。", en: "A referee is required to make fair judgments that favor neither side.", o: ["公正", "公平", "正直", "公開"], a: 0, e: "公正 = fairness/justice (proper and unbiased, often institutional). 公平 = impartiality/even-handedness (treating all equally). 正直 = honest/truthful. 公開 = open to the public/disclosure. 公正 and 公平 overlap; 公正 stresses rightness/justice, 公平 stresses equal treatment." },
      { t: "meaning", s: "「公正」の意味は？", o: ["fairness; impartiality; justice (proper and unbiased)", "impartiality; treating all equally", "honest; truthful", "open to the public; disclosure"], a: 0, e: "公正 means just and unbiased (公正取引 = fair trade, 公正な審査 = fair screening). 公平 emphasizes equal/even treatment of parties." }
    ]
  },
  {
    id: "n2-0342", w: "東西", r: "とうざい", m: "east and west; (figurative) all around; everywhere", c: "noun", lv: 1,
    ex: [{ jp: "この道は東西に長く伸びている。", en: "This road stretches long from east to west." }],
    qs: [
      { t: "fitb", s: "古今＿＿＿＿、人々は幸福を求めてきた。", en: "In all ages and places (lit. past-present, east-west), people have sought happiness.", o: ["東西", "南北", "左右", "上下"], a: 0, e: "東西 = east and west; figuratively 'everywhere/all places.' 南北 = north and south. 左右 = left and right. 上下 = up and down. The set phrase 古今東西 = all times and places." },
      { t: "meaning", s: "「東西」の意味は？", o: ["east and west; (fig.) all places; everywhere", "north and south", "left and right", "up and down"], a: 0, e: "東西 pairs east (東) and west (西); 東西南北 = the four cardinal directions. 古今東西 = throughout all ages and places." }
    ]
  },
  {
    id: "n2-0343", w: "皮肉", r: "ひにく", m: "irony; sarcasm; a cutting/cynical remark", c: "noun", lv: 1,
    ex: [{ jp: "彼は皮肉を込めて笑った。", en: "He laughed with a touch of sarcasm." }],
    qs: [
      { t: "fitb", s: "晴れを願ったのに大雨とは、＿＿＿＿なものだ。", en: "We wished for sunshine and got heavy rain — how ironic.", o: ["皮肉", "本音", "素直", "正直"], a: 0, e: "皮肉 = irony/sarcasm (saying the opposite to criticize, or a cruel twist of fate). 本音(ほんね) = one's true feelings (vs the front one puts up). 素直 = honest/obedient/frank. 正直 = honest/truthful." },
      { t: "meaning", s: "「皮肉」の意味は？", o: ["irony; sarcasm; a cutting remark; an ironic twist", "one's true (hidden) feelings", "honest; obedient; frank", "honest; truthful"], a: 0, e: "皮肉 is biting sarcasm or an ironic situation (皮肉を言う = make a sarcastic remark, 皮肉なことに = ironically). The な-adjective form 皮肉な means 'ironic.'" }
    ]
  },
  {
    id: "n2-0344", w: "以後", r: "いご", m: "after this; from now on; hereafter; thereafter", c: "noun", lv: 1,
    ex: [{ jp: "以後、気をつけます。", en: "I'll be careful from now on." }],
    qs: [
      { t: "fitb", s: "一度トラブルがあって＿＿＿＿、その店には行っていない。", en: "After there was trouble once, I haven't gone to that shop since.", o: ["以後", "以前", "以内", "以降"], a: 0, e: "以後 = after this/thereafter (from a point onward, often warning/resolving 'from now on'). 以前 = before/previously. 以内 = within (a limit, inclusive). 以降 = from ~ onward (≒以後 for time, slightly more neutral/scheduling)." },
      { t: "meaning", s: "「以後」の意味は？", o: ["after this; from now on; hereafter; thereafter", "before; previously", "within (a limit, inclusive)", "from ~ onward (a starting point)"], a: 0, e: "以後 means from a certain point onward (それ以後 = after that, 以後気をつける = be careful henceforth). Very close to 以降; 以後 often carries a 'from now on' resolve." }
    ]
  },
  {
    id: "n2-0345", w: "演劇", r: "えんげき", m: "theater; drama; a (stage) play", c: "noun", lv: 1,
    ex: [{ jp: "大学で演劇のサークルに入った。", en: "In university I joined a theater club." }],
    qs: [
      { t: "fitb", s: "彼女は将来、＿＿＿＿の世界で女優として活躍したいそうだ。", en: "She says she wants to thrive as an actress in the world of theater someday.", o: ["演劇", "映画", "音楽", "舞踊"], a: 0, e: "演劇 = theater/drama (live stage plays). 映画 = film/cinema. 音楽 = music. 舞踊(ぶよう) = dance (esp. traditional)." },
      { t: "meaning", s: "「演劇」の意味は？", o: ["theater; drama; stage plays", "film; cinema", "music", "dance (esp. traditional)"], a: 0, e: "演劇 is the art of stage drama (演劇部 = drama club, 演劇を観る = see a play). The performance itself is a 劇/芝居." }
    ]
  },
  {
    id: "n2-0346", w: "火山", r: "かざん", m: "volcano", c: "noun", lv: 1,
    ex: [{ jp: "日本には活動中の火山が多い。", en: "Japan has many active volcanoes." }],
    qs: [
      { t: "fitb", s: "その＿＿＿＿が噴火し、灰が周辺の町に降り注いだ。", en: "The volcano erupted, and ash rained down on the nearby towns.", o: ["火山", "地震", "津波", "台風"], a: 0, e: "火山 = a volcano. 地震 = an earthquake. 津波(つなみ) = a tsunami. 台風 = a typhoon." },
      { t: "meaning", s: "「火山」の意味は？", o: ["a volcano", "an earthquake", "a tsunami", "a typhoon"], a: 0, e: "火山 is a volcano (活火山 = active volcano, 火山灰 = volcanic ash, 火山が噴火する = a volcano erupts)." }
    ]
  },
  {
    id: "n2-0347", w: "強引", r: "ごういん", m: "forcible; pushy; high-handed; overbearing", c: "naadj", lv: 1,
    ex: [{ jp: "彼のやり方は少し強引だ。", en: "His way of doing things is a bit forceful." }],
    qs: [
      { t: "fitb", s: "反対を押し切って、＿＿＿＿に計画を進めた。", en: "Overriding the objections, he pushed the plan through forcibly.", o: ["強引", "慎重", "丁寧", "素直"], a: 0, e: "強引 = forcible/pushy (forcing things despite resistance). 慎重 = cautious/prudent. 丁寧 = polite/careful/courteous. 素直 = honest/obedient/receptive." },
      { t: "meaning", s: "「強引」の意味は？", o: ["forcible; pushy; high-handed; overbearing", "cautious; prudent", "polite; careful; courteous", "honest; obedient; receptive"], a: 0, e: "強引 describes forcing one's way despite opposition (強引に勧める = push something on someone, 強引なやり方 = a heavy-handed approach)." }
    ]
  },
  {
    id: "n2-0348", w: "司会", r: "しかい", m: "chairing; hosting; master of ceremonies (MC)", c: "noun", lv: 1,
    ex: [{ jp: "パーティーの司会を頼まれた。", en: "I was asked to be the MC for the party." }],
    qs: [
      { t: "fitb", s: "その番組の＿＿＿＿は、話を進めるのがとても上手だ。", en: "The host of that show is very skilled at moving the conversation along.", o: ["司会", "出演", "観客", "主催"], a: 0, e: "司会 = chairing/hosting an event; the MC role. 出演(しゅつえん) = appearing/performing (as a guest/cast). 観客 = the audience/spectators. 主催(しゅさい) = organizing/sponsoring (the host organization of an event)." },
      { t: "meaning", s: "「司会」の意味は？", o: ["chairing; hosting; being the MC", "appearing/performing as a guest or cast", "the audience; spectators", "organizing/sponsoring an event"], a: 0, e: "司会 is running/hosting an event or show (司会者 = the MC/host, 司会を務める = serve as MC). 主催 is the organizing body." }
    ]
  },
  {
    id: "n2-0349", w: "子孫", r: "しそん", m: "descendants; offspring; posterity", c: "noun", lv: 1,
    ex: [{ jp: "美しい自然を子孫に残したい。", en: "I want to leave beautiful nature for future generations." }],
    qs: [
      { t: "fitb", s: "彼はその有名な武将の＿＿＿＿だと言われている。", en: "He is said to be a descendant of that famous warlord.", o: ["子孫", "祖先", "親戚", "家族"], a: 0, e: "子孫 = descendants/offspring (later generations). 祖先(そせん) = ancestors (the opposite). 親戚(しんせき) = relatives. 家族 = family (immediate household)." },
      { t: "meaning", s: "「子孫」の意味は？", o: ["descendants; offspring; posterity", "ancestors; forebears", "relatives", "family; one's household"], a: 0, e: "子孫 are the generations that come after (子孫を残す = leave descendants, 子々孫々 = generations to come). Opposite of 祖先/先祖 (ancestors)." }
    ]
  },
  {
    id: "n2-0350", w: "執筆", r: "しっぴつ", m: "writing (a book/article); authoring (as a writer)", c: "noun", lv: 1,
    ex: [{ jp: "彼は新しい小説の執筆に取りかかった。", en: "He set about writing a new novel." }],
    qs: [
      { t: "fitb", s: "その学者は、専門誌に論文を＿＿＿＿している。", en: "That scholar writes papers for specialized journals.", o: ["執筆", "記入", "出版", "印刷"], a: 0, e: "執筆 = writing/authoring a text as a writer (composing articles, books). 記入 = filling in/entering (data in a form). 出版 = publishing (issuing a work). 印刷 = printing." },
      { t: "meaning", s: "「執筆」の意味は？", o: ["writing; authoring a book or article", "filling in; entering data in a form", "publishing; issuing a work", "printing"], a: 0, e: "執筆 specifically means the act of writing/authoring (執筆者 = the writer/author, 執筆中 = currently writing). 出版 is publishing the finished work." }
    ]
  },
  {
    id: "n2-0351", w: "点数", r: "てんすう", m: "score; marks; points; (also) number of items", c: "noun", lv: 1,
    ex: [{ jp: "テストの点数が上がって嬉しい。", en: "I'm happy my test score went up." }],
    qs: [
      { t: "fitb", s: "出品された作品の＿＿＿＿は、全部で五十点に上った。", en: "The number of submitted works came to fifty pieces in all.", o: ["点数", "回数", "枚数", "人数"], a: 0, e: "点数 = a score/marks; also a count of items (counted with 点). 回数 = number of times/frequency. 枚数 = number of flat sheets. 人数 = number of people." },
      { t: "meaning", s: "「点数」の意味は？", o: ["score; marks; points; (also) number of items", "number of times; frequency", "number of flat sheets", "number of people"], a: 0, e: "点数 mainly means a score (テストの点数 = test marks, 点数をつける = grade/score) and also a count of items (出品点数 = number of entries)." }
    ]
  },
  {
    id: "n2-0352", w: "夫妻", r: "ふさい", m: "husband and wife; a (married) couple (polite, of others)", c: "noun", lv: 1,
    ex: [{ jp: "田中夫妻をパーティーに招待した。", en: "We invited Mr. and Mrs. Tanaka to the party." }],
    qs: [
      { t: "fitb", s: "記念式典には、大統領＿＿＿＿が出席された。", en: "The President and his wife attended the commemorative ceremony.", o: ["夫妻", "夫婦", "親子", "兄弟"], a: 0, e: "夫妻 = a married couple, used politely when referring to others (e.g. 〜夫妻). 夫婦(ふうふ) = a married couple (general, including oneself). 親子 = parent and child. 兄弟 = siblings/brothers." },
      { t: "meaning", s: "「夫妻」の意味は？", o: ["husband and wife; a couple (polite, of others)", "a married couple (general)", "parent and child", "siblings; brothers"], a: 0, e: "夫妻 is a respectful term for someone else's married couple (ご夫妻 = the (honored) couple). 夫婦 is the neutral everyday word and can include oneself." }
    ]
  },
  {
    id: "n2-0353", w: "臨時", r: "りんじ", m: "temporary; special; extraordinary; ad hoc", c: "naadj", lv: 1,
    ex: [{ jp: "年末は臨時のアルバイトを雇う。", en: "At year-end, we hire temporary part-timers." }],
    qs: [
      { t: "fitb", s: "急な需要に対応するため、＿＿＿＿の列車が運行された。", en: "To meet sudden demand, special (extra) trains were run.", o: ["臨時", "定期", "通常", "永久"], a: 0, e: "臨時 = temporary/special/ad hoc (set up for a particular occasion, not regular). 定期 = regular/scheduled (at fixed intervals). 通常 = normal/usual. 永久(えいきゅう) = permanent/eternal." },
      { t: "meaning", s: "「臨時」の意味は？", o: ["temporary; special; extraordinary; ad hoc", "regular; at fixed intervals", "normal; usual", "permanent; eternal"], a: 0, e: "臨時 means provided for a special occasion, not on the regular schedule (臨時休業 = temporary closure, 臨時ニュース = a special news bulletin, 臨時収入 = unexpected income)." }
    ]
  },
  {
    id: "n2-0354", w: "一流", r: "いちりゅう", m: "first-class; top-rank; leading", c: "noun", lv: 1,
    ex: [{ jp: "彼は一流の料理人だ。", en: "He is a first-class chef." }],
    qs: [
      { t: "fitb", s: "その選手は、世界でも＿＿＿＿のレベルにある。", en: "That athlete is at a first-class level even on the world stage.", o: ["一流", "二流", "三流", "流行"], a: 0, e: "一流 = first-class/top-tier (the best). 二流(にりゅう) = second-rate. 三流(さんりゅう) = third-rate/inferior. 流行 = a trend/fashion (unrelated meaning, a distractor)." },
      { t: "meaning", s: "「一流」の意味は？", o: ["first-class; top-rank; leading", "second-rate", "third-rate; inferior", "a trend; fashion"], a: 0, e: "一流 means top-tier in quality or status (一流企業 = a top company, 一流のホテル = a first-class hotel). Below it: 二流, 三流." }
    ]
  },
  {
    id: "n2-0355", w: "一斉", r: "いっせい", m: "all at once; simultaneously; in unison", c: "noun", lv: 1,
    ex: [{ jp: "号令で全員が一斉に立ち上がった。", en: "At the command, everyone stood up all at once." }],
    qs: [
      { t: "fitb", s: "開始の合図で、ランナーたちが＿＿＿＿にスタートを切った。", en: "At the starting signal, the runners all set off at once.", o: ["一斉", "順番", "個別", "交互"], a: 0, e: "一斉(に) = all at once/simultaneously (everyone together). 順番(に) = in turn/in order (one after another). 個別(に) = individually/separately. 交互(に) = alternately/by turns." },
      { t: "meaning", s: "「一斉」の意味は？", o: ["all at once; simultaneously; in unison", "in turn; in order", "individually; separately", "alternately; by turns"], a: 0, e: "一斉 means many doing the same thing at the same moment (一斉に = all together, 一斉送信 = sending to everyone at once)." }
    ]
  },
  {
    id: "n2-0356", w: "満点", r: "まんてん", m: "a perfect score; full marks; (figurative) flawless", c: "noun", lv: 1,
    ex: [{ jp: "漢字のテストで満点を取った。", en: "I got a perfect score on the kanji test." }],
    qs: [
      { t: "fitb", s: "味もサービスも申し分なく、この店は＿＿＿＿だ。", en: "The taste and service are impeccable — this restaurant is top marks.", o: ["満点", "零点", "半分", "平均"], a: 0, e: "満点 = a perfect score/full marks; figuratively flawless. 零点 = a score of zero (the opposite). 半分 = half. 平均 = the average." },
      { t: "meaning", s: "「満点」の意味は？", o: ["a perfect score; full marks; flawless", "a score of zero", "half", "the average"], a: 0, e: "満点 means a perfect score (100点満点 = out of a perfect 100) and figuratively faultless (栄養満点 = packed with nutrition). Opposite of 零点." }
    ]
  },
  {
    id: "n2-0357", w: "役者", r: "やくしゃ", m: "actor; performer; (figurative) a skilled schemer", c: "noun", lv: 1,
    ex: [{ jp: "彼は舞台で活躍する役者だ。", en: "He is an actor who shines on the stage." }],
    qs: [
      { t: "fitb", s: "あの＿＿＿＿の演技は、観客を涙させるほど見事だった。", en: "That actor's performance was so superb it brought the audience to tears.", o: ["役者", "観客", "作家", "監督"], a: 0, e: "役者 = an actor/performer (esp. stage). 観客 = the audience/spectators. 作家 = a writer/author. 監督 = a director (film) / a manager/coach." },
      { t: "meaning", s: "「役者」の意味は？", o: ["actor; performer (esp. stage)", "the audience; spectators", "a writer; author", "a director; a manager/coach"], a: 0, e: "役者 means an actor (役者になる = become an actor). Figuratively, 役者が上 = the more cunning/capable one (役者が一枚上 = a cut above in shrewdness). ≒ 俳優." }
    ]
  },
  {
    id: "n2-0358", w: "自衛", r: "じえい", m: "self-defense; protecting oneself", c: "noun", lv: 1,
    ex: [{ jp: "身を守るための自衛の手段を考える。", en: "I consider self-defense measures to protect myself." }],
    qs: [
      { t: "fitb", s: "詐欺の被害に遭わないよう、＿＿＿＿の意識を持つことが大切だ。", en: "It's important to have a self-defense mindset so as not to fall victim to fraud.", o: ["自衛", "防衛", "攻撃", "護衛"], a: 0, e: "自衛 = defending oneself by one's own means. 防衛 = defense (protecting against attack, often national/organizational). 攻撃 = attack/offense. 護衛(ごえい) = guarding/escorting (protecting someone else)." },
      { t: "meaning", s: "「自衛」の意味は？", o: ["self-defense; protecting oneself", "defense; guarding against attack (often national)", "attack; offense", "guarding; escorting someone"], a: 0, e: "自衛 means protecting oneself through one's own efforts (自衛手段 = self-protection measures, 自衛隊 = the Self-Defense Forces)." }
    ]
  },
  {
    id: "n2-0359", w: "四季", r: "しき", m: "the four seasons", c: "noun", lv: 1,
    ex: [{ jp: "日本は四季の変化がはっきりしている。", en: "Japan has clearly distinct changes of the four seasons." }],
    qs: [
      { t: "fitb", s: "この庭園では、＿＿＿＿折々の花を楽しむことができる。", en: "In this garden, you can enjoy the flowers of each of the four seasons.", o: ["四季", "季節", "気候", "天気"], a: 0, e: "四季 = the four seasons (spring, summer, autumn, winter as a set). 季節 = a season (any one season). 気候 = climate (long-term weather pattern). 天気 = the (day's) weather." },
      { t: "meaning", s: "「四季」の意味は？", o: ["the four seasons (as a set)", "a season (any one)", "climate; long-term weather pattern", "the day's weather"], a: 0, e: "四季 refers to the four seasons collectively (四季折々 = each season in turn, 四季を通じて = throughout the year)." }
    ]
  },
  {
    id: "n2-0360", w: "隙間", r: "すきま", m: "gap; crack; opening; (figurative) a free moment", c: "noun", lv: 1,
    ex: [{ jp: "ドアの隙間から光が漏れている。", en: "Light is leaking through the gap in the door." }],
    qs: [
      { t: "fitb", s: "家具の＿＿＿＿にほこりがたまりやすい。", en: "Dust easily collects in the gaps between furniture.", o: ["隙間", "表面", "角度", "距離"], a: 0, e: "隙間 = a gap/crack/narrow opening between things. 表面 = the surface. 角度 = an angle. 距離 = distance between points." },
      { t: "meaning", s: "「隙間」の意味は？", o: ["gap; crack; narrow opening between things", "the surface", "an angle", "distance between points"], a: 0, e: "隙間 is a narrow space between things (隙間風 = a draft through a crack, 隙間時間 = spare moments between tasks)." }
    ]
  },
  {
    id: "n2-0361", w: "通用", r: "つうよう", m: "being accepted/valid; passing as; holding good (currency, an excuse)", c: "noun", lv: 1,
    ex: [{ jp: "その言い訳はもう通用しない。", en: "That excuse won't fly anymore." }],
    qs: [
      { t: "fitb", s: "日本の常識が、海外でそのまま＿＿＿＿するとは限らない。", en: "What's common sense in Japan doesn't necessarily hold good abroad as is.", o: ["通用", "通行", "通過", "通信"], a: 0, e: "通用 = being accepted as valid / passing (an excuse, currency, skills holding up). 通行 = passage/going along (foot/vehicle traffic). 通過 = passing through a point. 通信 = communication (telecom)." },
      { t: "meaning", s: "「通用」の意味は？", o: ["being accepted as valid; passing as; holding good", "passage; foot/vehicle traffic", "passing through a point", "communication; telecommunications"], a: 0, e: "通用 means being accepted or holding good (世界に通用する = good enough for the world stage, 通用しない = won't pass/won't fly)." }
    ]
  },
  {
    id: "n2-0362", w: "枚数", r: "まいすう", m: "the number of flat/thin objects (sheets, plates, etc.)", c: "noun", lv: 1,
    ex: [{ jp: "印刷する枚数を確認する。", en: "I check the number of sheets to print." }],
    qs: [
      { t: "fitb", s: "参加者の人数に合わせて、配る資料の＿＿＿＿を増やした。", en: "I increased the number of handout sheets to match the number of participants.", o: ["枚数", "人数", "回数", "点数"], a: 0, e: "枚数 = the count of flat thin things (sheets of paper, plates, shirts — counted with 枚). 人数 = number of people. 回数 = number of times. 点数 = score; or count of items (counted with 点)." },
      { t: "meaning", s: "「枚数」の意味は？", o: ["the number of flat/thin objects (sheets, plates)", "number of people", "number of times", "score; or count of items"], a: 0, e: "枚数 counts flat objects that take the counter 枚 (紙の枚数 = number of sheets, チケットの枚数 = number of tickets)." }
    ]
  },
  {
    id: "n2-0363", w: "見出し", r: "みだし", m: "headline; heading; (dictionary) headword", c: "noun", lv: 1,
    ex: [{ jp: "新聞の見出しだけ読んだ。", en: "I read only the newspaper headlines." }],
    qs: [
      { t: "fitb", s: "その事件は、各紙の一面の＿＿＿＿を大きく飾った。", en: "That incident prominently graced the front-page headlines of every paper.", o: ["見出し", "本文", "目次", "あとがき"], a: 0, e: "見出し = a headline/heading (a short title leading text). 本文(ほんぶん) = the main body text. 目次(もくじ) = the table of contents. あとがき = the afterword/postscript." },
      { t: "meaning", s: "「見出し」の意味は？", o: ["headline; heading; (dictionary) headword", "the main body text", "the table of contents", "the afterword; postscript"], a: 0, e: "見出し is a headline or heading that labels content (大見出し = a banner headline, 見出し語 = a dictionary headword)." }
    ]
  },
  {
    id: "n2-0364", w: "油断", r: "ゆだん", m: "carelessness; letting one's guard down; negligence", c: "noun", lv: 1,
    ex: [{ jp: "油断して財布をすられた。", en: "I let my guard down and had my wallet pickpocketed." }],
    qs: [
      { t: "fitb", s: "リードしていても、最後まで＿＿＿＿は禁物だ。", en: "Even when in the lead, letting your guard down is forbidden until the end.", o: ["油断", "用心", "緊張", "集中"], a: 0, e: "油断 = carelessness/letting one's guard down (failing to stay alert). 用心(ようじん) = caution/care/wariness (the opposite). 緊張 = tension/nervousness. 集中 = concentration." },
      { t: "meaning", s: "「油断」の意味は？", o: ["carelessness; letting one's guard down; negligence", "caution; care; wariness", "tension; nervousness", "concentration; focus"], a: 0, e: "油断 means a lapse in vigilance (油断大敵 = carelessness is your worst enemy, 油断するな = stay on guard). Opposite of 用心." }
    ]
  },
  {
    id: "n2-0365", w: "為替", r: "かわせ", m: "exchange (of money); foreign exchange; money order", c: "noun", lv: 1,
    ex: [{ jp: "為替の変動で輸出企業が影響を受けた。", en: "Exporters were affected by exchange-rate fluctuations." }],
    qs: [
      { t: "fitb", s: "円安が進み、＿＿＿＿レートが大きく動いた。", en: "The yen weakened, and the exchange rate moved significantly.", o: ["為替", "税率", "金利", "物価"], a: 0, e: "為替 = currency exchange / foreign exchange (為替レート = exchange rate). 税率(ぜいりつ) = the tax rate. 金利(きんり) = the interest rate. 物価(ぶっか) = (consumer) price levels." },
      { t: "meaning", s: "「為替」の意味は？", o: ["exchange of money; foreign exchange; money order", "the tax rate", "the interest rate", "price levels (cost of goods)"], a: 0, e: "為替 concerns currency exchange (為替相場 = the exchange market/rate, 外国為替 = foreign exchange/forex). Originally also a money order." }
    ]
  },
  {
    id: "n2-0366", w: "弱点", r: "じゃくてん", m: "weak point; weakness; vulnerability", c: "noun", lv: 1,
    ex: [{ jp: "誰にでも弱点はある。", en: "Everyone has weak points." }],
    qs: [
      { t: "fitb", s: "相手チームの＿＿＿＿を分析して、作戦を立てた。", en: "We analyzed the opposing team's weaknesses and formed a strategy.", o: ["弱点", "長所", "利点", "強み"], a: 0, e: "弱点 = a weak point/vulnerability (a flaw to exploit or improve). 長所(ちょうしょ) = a strong point/merit. 利点(りてん) = an advantage/benefit. 強み(つよみ) = a strength/forte." },
      { t: "meaning", s: "「弱点」の意味は？", o: ["weak point; weakness; vulnerability", "a strong point; a merit", "an advantage; a benefit", "a strength; one's forte"], a: 0, e: "弱点 is a vulnerability or shortcoming (弱点を克服する = overcome a weakness, 弱点を突く = strike at a weak spot). Opposite of 長所/強み." }
    ]
  },
  {
    id: "n2-0367", w: "高める", r: "たかめる", m: "to raise; to heighten; to enhance; to boost", c: "verb", lv: 1,
    ex: [{ jp: "練習を重ねて技術を高める。", en: "To enhance one's skill through repeated practice." }],
    qs: [
      { t: "fitb", s: "防犯意識を＿＿＿＿ことで、被害を減らせる。", en: "By raising crime-prevention awareness, we can reduce damage.", o: ["高める", "深める", "広める", "強いる"], a: 0, e: "高める = to raise/heighten/enhance (a level, quality, awareness). 深める = to deepen (understanding, ties). 広める = to spread/popularize (make widely known). 強いる(しいる) = to force/compel." },
      { t: "meaning", s: "「高める」の意味は？", o: ["to raise; to heighten; to enhance; to boost", "to deepen (understanding, ties)", "to spread; to popularize", "to force; to compel"], a: 0, e: "高める (transitive) means to raise a level or quality (意識を高める = raise awareness, 質を高める = improve quality). The intransitive pair is 高まる." }
    ]
  },
  {
    id: "n2-0368", w: "圧縮", r: "あっしゅく", m: "compression; condensing; compacting", c: "noun", lv: 1,
    ex: [{ jp: "大きなファイルを圧縮して送った。", en: "I compressed the large file and sent it." }],
    qs: [
      { t: "fitb", s: "空気を＿＿＿＿してタンクにためる装置だ。", en: "It's a device that compresses air and stores it in a tank.", o: ["圧縮", "拡大", "膨張", "分散"], a: 0, e: "圧縮 = compressing/condensing (reducing volume by pressure). 拡大 = enlargement/expansion. 膨張(ぼうちょう) = expansion/swelling (volume increasing). 分散 = dispersion/scattering." },
      { t: "meaning", s: "「圧縮」の意味は？", o: ["compression; condensing; compacting", "enlargement; expansion", "expansion; swelling (volume increase)", "dispersion; scattering"], a: 0, e: "圧縮 means squeezing into a smaller space (圧縮ファイル = a compressed file, データ圧縮 = data compression). Opposite of 膨張 (expansion)." }
    ]
  },
  {
    id: "n2-0369", w: "公衆", r: "こうしゅう", m: "the public; the general public; people at large", c: "noun", lv: 1,
    ex: [{ jp: "昔は街角に公衆電話があった。", en: "In the old days there were public telephones on street corners." }],
    qs: [
      { t: "fitb", s: "＿＿＿＿の面前で恥をかかされ、彼は怒った。", en: "Humiliated in front of the public, he got angry.", o: ["公衆", "群衆", "観衆", "民衆"], a: 0, e: "公衆 = the general public (people at large, as users of public facilities). 群衆(ぐんしゅう) = a crowd/throng (a physical mass). 観衆(かんしゅう) = the spectators/an audience watching. 民衆(みんしゅう) = the common people/the masses (sociopolitical)." },
      { t: "meaning", s: "「公衆」の意味は？", o: ["the general public; people at large", "a crowd; a throng", "spectators; a watching audience", "the common people; the masses"], a: 0, e: "公衆 refers to the public in general (公衆衛生 = public health, 公衆トイレ = public restroom, 公衆の面前で = in public)." }
    ]
  },
  {
    id: "n2-0370", w: "迫る", r: "せまる", m: "to draw near; to approach; to press (someone for); to loom", c: "verb", lv: 1,
    ex: [{ jp: "締め切りが迫っている。", en: "The deadline is approaching." }],
    qs: [
      { t: "fitb", s: "危険が目の前に＿＿＿＿、彼らは慌てて避難した。", en: "With danger looming right before them, they hurriedly evacuated.", o: ["迫って", "離れて", "遅れて", "隠れて"], a: 0, e: "迫る = to draw near/loom/press (closing in, time running out, or pressing a demand). 離れる = to move away/separate. 遅れる = to be late/fall behind. 隠れる = to hide." },
      { t: "meaning", s: "「迫る」の意味は？", o: ["to draw near; to approach; to loom; to press (a demand)", "to move away; to separate", "to be late; to fall behind", "to hide"], a: 0, e: "迫る means closing in (期限が迫る = a deadline looms, 決断を迫る = press someone to decide, 山が海に迫る = mountains hug the sea)." }
    ]
  },
  {
    id: "n2-0371", w: "定価", r: "ていか", m: "list price; fixed/retail price", c: "noun", lv: 1,
    ex: [{ jp: "この本は定価の半額で売られていた。", en: "This book was sold at half the list price." }],
    qs: [
      { t: "fitb", s: "セール品ではないので、＿＿＿＿どおりの値段で買った。", en: "It wasn't a sale item, so I bought it at the list price.", o: ["定価", "割引", "原価", "時価"], a: 0, e: "定価 = the set list/retail price. 割引 = a discount. 原価(げんか) = the cost price (to produce/buy in). 時価(じか) = the current market price (fluctuating)." },
      { t: "meaning", s: "「定価」の意味は？", o: ["list price; fixed retail price", "a discount; price reduction", "the cost price to produce", "the current market price"], a: 0, e: "定価 is the official set price of a product (定価販売 = selling at list price). Note the homophones 低下 (decline) and 定価 are different words." }
    ]
  },
  {
    id: "n2-0372", w: "叔父", r: "おじ", m: "uncle (younger than one's parent)", c: "noun", lv: 1,
    ex: [{ jp: "叔父は父の弟だ。", en: "My uncle is my father's younger brother." }],
    qs: [
      { t: "fitb", s: "夏休みに、田舎の＿＿＿＿の家に泊まりに行った。", en: "During summer break, I went to stay at my uncle's house in the countryside.", o: ["叔父", "叔母", "祖父", "甥"], a: 0, e: "叔父(おじ) = uncle (younger than one's parent). 叔母(おば) = aunt. 祖父(そふ) = grandfather. 甥(おい) = nephew. (Note: 伯父 is an uncle older than one's parent.)" },
      { t: "meaning", s: "「叔父」の意味は？", o: ["uncle (younger than one's parent)", "aunt", "grandfather", "nephew"], a: 0, e: "叔父 is an uncle; 叔母 is an aunt (both おじ/おば). 伯父/伯母 are used for those older than your parent." }
    ]
  },
  {
    id: "n2-0373", w: "図鑑", r: "ずかん", m: "illustrated reference book; picture encyclopedia", c: "noun", lv: 1,
    ex: [{ jp: "子どもは昆虫図鑑が大好きだ。", en: "The child loves the insect picture book." }],
    qs: [
      { t: "fitb", s: "見たことのない花を、植物＿＿＿＿で調べた。", en: "I looked up a flower I'd never seen in a plant reference book.", o: ["図鑑", "辞典", "地図", "写真集"], a: 0, e: "図鑑 = an illustrated reference book (with pictures, organized by type). 辞典(じてん) = a dictionary (of words/terms). 地図 = a map. 写真集 = a photo collection/photobook." },
      { t: "meaning", s: "「図鑑」の意味は？", o: ["illustrated reference book; picture encyclopedia", "a dictionary of words/terms", "a map", "a photo collection; photobook"], a: 0, e: "図鑑 organizes pictures with descriptions for identification (動物図鑑 = animal encyclopedia, 図鑑で調べる = look it up in a reference book)." }
    ]
  },
  {
    id: "n2-0374", w: "先端", r: "せんたん", m: "tip; pointed end; (figurative) cutting edge; forefront", c: "noun", lv: 1,
    ex: [{ jp: "鉛筆の先端が折れた。", en: "The tip of the pencil broke." }],
    qs: [
      { t: "fitb", s: "その研究所は、最＿＿＿＿の技術を開発している。", en: "That institute develops cutting-edge technology.", o: ["先端", "末端", "頂点", "中心"], a: 0, e: "先端 = the tip/pointed end; figuratively the cutting edge/forefront. 末端(まったん) = the extremity/far end; the lowest level (rank-and-file). 頂点 = the peak/apex. 中心 = the center." },
      { t: "meaning", s: "「先端」の意味は？", o: ["tip; pointed end; cutting edge; forefront", "the extremity; far end; lowest level", "the peak; apex", "the center"], a: 0, e: "先端 is a pointed tip (針の先端 = the point of a needle) and figuratively the leading edge (最先端 = state of the art, 先端技術 = advanced technology)." }
    ]
  },
  {
    id: "n2-0375", w: "太鼓", r: "たいこ", m: "drum (Japanese taiko); a large drum", c: "noun", lv: 1,
    ex: [{ jp: "祭りで太鼓の音が響いた。", en: "The sound of taiko drums rang out at the festival." }],
    qs: [
      { t: "fitb", s: "子どもたちが力いっぱい＿＿＿＿を叩いた。", en: "The children beat the drums with all their might.", o: ["太鼓", "笛", "鐘", "琴"], a: 0, e: "太鼓(たいこ) = a (Japanese) drum. 笛(ふえ) = a flute/whistle. 鐘(かね) = a bell (large, struck). 琴(こと) = a koto (Japanese zither)." },
      { t: "meaning", s: "「太鼓」の意味は？", o: ["a (Japanese) drum", "a flute; whistle", "a bell (large, struck)", "a koto; Japanese zither"], a: 0, e: "太鼓 is a drum (太鼓を叩く = beat a drum, 和太鼓 = Japanese taiko). The idiom 太鼓判を押す = to vouch for/guarantee." }
    ]
  },
  {
    id: "n2-0376", w: "直径", r: "ちょっけい", m: "diameter", c: "noun", lv: 1,
    ex: [{ jp: "この円の直径は十センチだ。", en: "The diameter of this circle is ten centimeters." }],
    qs: [
      { t: "fitb", s: "＿＿＿＿五メートルもある巨大なピザが話題になった。", en: "A giant pizza with a diameter of five meters became a hot topic.", o: ["直径", "半径", "面積", "周囲"], a: 0, e: "直径 = diameter (across the full width through the center). 半径(はんけい) = radius (center to edge, half the diameter). 面積 = area. 周囲(しゅうい) = the circumference/surroundings." },
      { t: "meaning", s: "「直径」の意味は？", o: ["diameter (full width through the center)", "radius (center to edge)", "area", "circumference; surroundings"], a: 0, e: "直径 is the diameter of a circle (直径を測る = measure the diameter). 半径 (radius) is half of it." }
    ]
  },
  {
    id: "n2-0377", w: "停電", r: "ていでん", m: "power outage; blackout; electricity failure", c: "noun", lv: 1,
    ex: [{ jp: "台風の影響で停電が起きた。", en: "A power outage occurred due to the typhoon." }],
    qs: [
      { t: "fitb", s: "落雷で＿＿＿＿になり、町中が真っ暗になった。", en: "A lightning strike caused a blackout, and the whole town went dark.", o: ["停電", "断水", "節電", "発電"], a: 0, e: "停電 = a power outage/blackout. 断水(だんすい) = a water supply cutoff. 節電(せつでん) = conserving electricity. 発電 = generating electricity." },
      { t: "meaning", s: "「停電」の意味は？", o: ["power outage; blackout", "a water supply cutoff", "conserving/saving electricity", "generating electricity"], a: 0, e: "停電 means the electricity going out (停電する = lose power, 停電に備える = prepare for a blackout)." }
    ]
  },
  {
    id: "n2-0378", w: "東洋", r: "とうよう", m: "the East; the Orient; Asia", c: "noun", lv: 1,
    ex: [{ jp: "彼は東洋の文化に興味がある。", en: "He is interested in Eastern culture." }],
    qs: [
      { t: "fitb", s: "漢方は＿＿＿＿医学の代表的な例だ。", en: "Kampo is a representative example of Eastern medicine.", o: ["東洋", "西洋", "南極", "北極"], a: 0, e: "東洋 = the East/Orient (Asia). 西洋(せいよう) = the West/Occident (Europe & the Americas). 南極(なんきょく) = the South Pole/Antarctic. 北極(ほっきょく) = the North Pole/Arctic." },
      { t: "meaning", s: "「東洋」の意味は？", o: ["the East; the Orient; Asia", "the West; the Occident", "the South Pole; Antarctic", "the North Pole; Arctic"], a: 0, e: "東洋 refers to Eastern/Asian civilization (東洋人 = an Asian person, 東洋医学 = Eastern medicine). Opposite of 西洋 (the West)." }
    ]
  },
  {
    id: "n2-0379", w: "とっくに", r: "とっくに", m: "long ago; already; a long time ago", c: "adv", lv: 1,
    ex: [{ jp: "彼ならとっくに帰ったよ。", en: "He went home a long time ago." }],
    qs: [
      { t: "fitb", s: "急いで来たのに、電車は＿＿＿＿出てしまっていた。", en: "I rushed here, but the train had already left long ago.", o: ["とっくに", "間もなく", "そろそろ", "ようやく"], a: 0, e: "とっくに = long ago/already (well before now). 間もなく = soon/before long. そろそろ = soon/it's about time. ようやく = finally/at last." },
      { t: "meaning", s: "「とっくに」の意味は？", o: ["long ago; already; well before now", "soon; before long", "soon; it's about time", "finally; at last"], a: 0, e: "とっくに stresses that something happened much earlier than expected (とっくに終わった = finished ages ago). ≒ とうに." }
    ]
  },
  {
    id: "n2-0380", w: "残らず", r: "のこらず", m: "completely; all of it; without exception; every last one", c: "adv", lv: 1,
    ex: [{ jp: "皿の料理を残らず食べた。", en: "I ate everything on the plate, leaving nothing." }],
    qs: [
      { t: "fitb", s: "集めた資料に、＿＿＿＿目を通しておいた。", en: "I looked through every last one of the materials I had gathered.", o: ["残らず", "少しずつ", "せっかく", "めったに"], a: 0, e: "残らず = completely/every last one (leaving nothing behind). 少しずつ = little by little. せっかく = with effort/(a shame to waste). めったに = (with neg.) rarely." },
      { t: "meaning", s: "「残らず」の意味は？", o: ["completely; all of it; every last one", "little by little", "with effort; (a shame to waste)", "rarely; seldom (with neg.)"], a: 0, e: "残らず means leaving nothing behind — all without exception (一人残らず = every single person, 残らず平らげる = polish it all off)." }
    ]
  },
  {
    id: "n2-0381", w: "恨み", r: "うらみ", m: "resentment; grudge; ill will", c: "noun", lv: 1,
    ex: [{ jp: "彼に恨みを抱いている人は多い。", en: "Many people harbor a grudge against him." }],
    qs: [
      { t: "fitb", s: "過去のいさかいから、彼女に＿＿＿＿を持っていたらしい。", en: "He apparently held a grudge against her from a past quarrel.", o: ["恨み", "感謝", "憧れ", "親しみ"], a: 0, e: "恨み = resentment/a grudge (lingering ill will). 感謝 = gratitude. 憧れ(あこがれ) = longing/admiration. 親しみ = a sense of closeness/affinity." },
      { t: "meaning", s: "「恨み」の意味は？", o: ["resentment; a grudge; ill will", "gratitude; thankfulness", "longing; admiration", "a sense of closeness; affinity"], a: 0, e: "恨み is a held grudge (恨みを買う = incur someone's resentment, 恨みを晴らす = take one's revenge). The verb is 恨む (to resent)." }
    ]
  },
  {
    id: "n2-0382", w: "間隔", r: "かんかく", m: "interval; spacing; gap (between things in time or space)", c: "noun", lv: 1,
    ex: [{ jp: "電車は十分間隔で運行している。", en: "The trains run at ten-minute intervals." }],
    qs: [
      { t: "fitb", s: "木を植えるときは、十分な＿＿＿＿をあけたほうがいい。", en: "When planting trees, it's best to leave sufficient spacing.", o: ["間隔", "距離", "面積", "隙間"], a: 0, e: "間隔 = the interval/spacing between repeated things (regular gaps in time or space). 距離 = distance (length between two points). 面積 = area. 隙間 = a narrow gap/crack." },
      { t: "meaning", s: "「間隔」の意味は？", o: ["interval; spacing; gap between repeated things", "distance between two points", "area", "a narrow gap; crack"], a: 0, e: "間隔 is the regular spacing between things (間隔をあける = leave a gap, 等間隔 = at equal intervals). 距離 is point-to-point distance." }
    ]
  },
  {
    id: "n2-0383", w: "教養", r: "きょうよう", m: "culture; refinement; (broad) education; cultivation", c: "noun", lv: 1,
    ex: [{ jp: "幅広い読書は教養を深める。", en: "Wide reading deepens one's cultivation." }],
    qs: [
      { t: "fitb", s: "彼は専門知識だけでなく、豊かな＿＿＿＿の持ち主だ。", en: "He possesses not only expertise but also rich general culture.", o: ["教養", "学歴", "知能", "常識"], a: 0, e: "教養 = cultivation/refinement gained through broad learning. 学歴 = one's formal educational background. 知能 = intelligence (mental capacity). 常識 = common sense/general knowledge." },
      { t: "meaning", s: "「教養」の意味は？", o: ["culture; refinement; broad education; cultivation", "one's formal educational background", "intelligence; mental capacity", "common sense; general knowledge"], a: 0, e: "教養 is the breadth of knowledge and refinement a person has cultivated (教養がある = cultured, 一般教養 = general/liberal-arts education)." }
    ]
  },
  {
    id: "n2-0384", w: "くだらない", r: "くだらない", m: "worthless; trivial; silly; not worth bothering with", c: "iadj", lv: 1,
    ex: [{ jp: "くだらない冗談で笑ってしまった。", en: "I laughed at a silly joke." }],
    qs: [
      { t: "fitb", s: "そんな＿＿＿＿ことで、いちいち腹を立てるな。", en: "Don't get angry over every such trivial thing.", o: ["くだらない", "素晴らしい", "重大な", "真剣な"], a: 0, e: "くだらない = worthless/trivial/silly (not worth taking seriously). 素晴らしい = wonderful/splendid. 重大な = grave/serious/momentous. 真剣な = serious/earnest." },
      { t: "meaning", s: "「くだらない」の意味は？", o: ["worthless; trivial; silly", "wonderful; splendid", "grave; serious; momentous", "serious; earnest"], a: 0, e: "くだらない dismisses something as worthless or pointless (くだらない話 = a stupid/pointless story, くだらないことを気にするな = don't sweat the trivial stuff)." }
    ]
  },
  {
    id: "n2-0385", w: "肯定", r: "こうてい", m: "affirmation; answering in the affirmative; acknowledging as so", c: "noun", lv: 1,
    ex: [{ jp: "彼は質問に肯定も否定もしなかった。", en: "He neither affirmed nor denied the question." }],
    qs: [
      { t: "fitb", s: "上司は私の提案を＿＿＿＿的に受け止めてくれた。", en: "My boss received my proposal affirmatively (favorably).", o: ["肯定", "否定", "疑問", "拒否"], a: 0, e: "肯定 = affirming/acknowledging as true or acceptable. 否定(ひてい) = denial/negation (the opposite). 疑問 = a doubt/question. 拒否(きょひ) = refusal/rejection." },
      { t: "meaning", s: "「肯定」の意味は？", o: ["affirmation; acknowledging as so", "denial; negation", "a doubt; a question", "refusal; rejection"], a: 0, e: "肯定 means affirming or accepting something as valid (肯定的 = positive/affirmative, 自己肯定感 = self-affirmation/self-esteem). Opposite of 否定." }
    ]
  },
  {
    id: "n2-0386", w: "焦点", r: "しょうてん", m: "focus; focal point; the central issue", c: "noun", lv: 1,
    ex: [{ jp: "カメラの焦点を合わせる。", en: "To bring the camera into focus." }],
    qs: [
      { t: "fitb", s: "議論の＿＿＿＿は、費用を誰が負担するかにある。", en: "The focus of the debate lies in who bears the cost.", o: ["焦点", "頂点", "起点", "中継"], a: 0, e: "焦点 = the focus/focal point; the central issue. 頂点 = the peak/apex. 起点(きてん) = the starting point. 中継(ちゅうけい) = relay/live broadcast." },
      { t: "meaning", s: "「焦点」の意味は？", o: ["focus; focal point; the central issue", "the peak; apex", "the starting point", "relay; live broadcast"], a: 0, e: "焦点 is the focal point (焦点が合う = come into focus) and figuratively the crux (焦点を絞る = narrow the focus, 議論の焦点 = the main point at issue)." }
    ]
  },
  {
    id: "n2-0387", w: "名刺", r: "めいし", m: "business card; calling card", c: "noun", lv: 1,
    ex: [{ jp: "初対面では名刺を交換する。", en: "At a first meeting, we exchange business cards." }],
    qs: [
      { t: "fitb", s: "打ち合わせの前に、お互いの＿＿＿＿を渡し合った。", en: "Before the meeting, we exchanged business cards with each other.", o: ["名刺", "名簿", "名札", "署名"], a: 0, e: "名刺 = a business card (with one's name, title, contact). 名簿(めいぼ) = a name list/roster. 名札(なふだ) = a name tag/badge. 署名(しょめい) = a signature." },
      { t: "meaning", s: "「名刺」の意味は？", o: ["business card; calling card", "a name list; roster", "a name tag; badge", "a signature"], a: 0, e: "名刺 is a business card (名刺交換 = exchanging cards, 名刺入れ = a card holder)." }
    ]
  },
  {
    id: "n2-0388", w: "巡る", r: "めぐる", m: "to go around; to tour; to revolve around (a topic)", c: "verb", lv: 1,
    ex: [{ jp: "休みに各地の温泉を巡った。", en: "On my break, I toured hot springs in various places." }],
    qs: [
      { t: "fitb", s: "遺産の相続を＿＿＿＿、兄弟が争っている。", en: "The siblings are fighting over the inheritance.", o: ["巡って", "隔てて", "越えて", "兼ねて"], a: 0, e: "巡る = to go around/tour; (〜を巡って) to revolve around/concern an issue. 隔てる(へだてる) = to separate/divide. 越える = to cross over/exceed. 兼ねる(かねる) = to combine roles/serve as both." },
      { t: "meaning", s: "「巡る」の意味は？", o: ["to go around; to tour; to revolve around (a topic)", "to separate; to divide", "to cross over; to exceed", "to combine roles; to serve as both"], a: 0, e: "巡る means to go around (名所を巡る = tour the sights, 季節が巡る = the seasons come around) or, as 〜を巡って, to center on an issue (〜を巡る議論 = a debate over ~)." }
    ]
  },
  {
    id: "n2-0389", w: "気圧", r: "きあつ", m: "atmospheric pressure; air pressure", c: "noun", lv: 1,
    ex: [{ jp: "気圧が下がると頭痛がする人もいる。", en: "Some people get headaches when the air pressure drops." }],
    qs: [
      { t: "fitb", s: "低＿＿＿＿が近づいており、明日は天気が崩れるだろう。", en: "A low-pressure system is approaching, so the weather will likely turn bad tomorrow.", o: ["気圧", "気温", "湿度", "気候"], a: 0, e: "気圧 = atmospheric/air pressure. 気温 = air temperature. 湿度 = humidity. 気候 = climate (long-term pattern)." },
      { t: "meaning", s: "「気圧」の意味は？", o: ["atmospheric pressure; air pressure", "air temperature", "humidity", "climate; long-term weather pattern"], a: 0, e: "気圧 is air pressure (低気圧 = low-pressure system, 高気圧 = high-pressure system, 気圧が下がる = pressure drops)." }
    ]
  },
  {
    id: "n2-0390", w: "空中", r: "くうちゅう", m: "midair; in the air; aerial", c: "noun", lv: 1,
    ex: [{ jp: "鳥が空中を自由に飛び回る。", en: "Birds fly freely about in the air." }],
    qs: [
      { t: "fitb", s: "曲芸師が＿＿＿＿で見事に三回転した。", en: "The acrobat splendidly did three rotations in midair.", o: ["空中", "地中", "水中", "海底"], a: 0, e: "空中 = midair/in the air. 地中(ちちゅう) = underground/in the soil. 水中(すいちゅう) = underwater. 海底(かいてい) = the seabed/ocean floor." },
      { t: "meaning", s: "「空中」の意味は？", o: ["midair; in the air; aerial", "underground; in the soil", "underwater", "the seabed; ocean floor"], a: 0, e: "空中 means up in the air (空中分解 = breaking apart in midair, 空中ブランコ = trapeze)." }
    ]
  },
  {
    id: "n2-0391", w: "原料", r: "げんりょう", m: "raw material(s); base ingredient", c: "noun", lv: 1,
    ex: [{ jp: "紙の原料は木材だ。", en: "The raw material for paper is wood." }],
    qs: [
      { t: "fitb", s: "ワインは、ぶどうを＿＿＿＿として造られる。", en: "Wine is made using grapes as its raw material.", o: ["原料", "材料", "製品", "燃料"], a: 0, e: "原料 = raw material (the substance processed into a product, often unrecognizable in the result). 材料 = materials/ingredients (used in making; often still recognizable). 製品 = a finished product. 燃料 = fuel." },
      { t: "meaning", s: "「原料」の意味は？", o: ["raw material; base ingredient (processed into a product)", "materials; ingredients (still recognizable)", "a finished product", "fuel"], a: 0, e: "原料 is the raw substance transformed in production (原料費 = cost of raw materials). 材料 tends to stay recognizable in the result; 原料 is processed beyond recognition (e.g. crude oil → plastic)." }
    ]
  },
  {
    id: "n2-0392", w: "先祖", r: "せんぞ", m: "ancestor; forebear", c: "noun", lv: 1,
    ex: [{ jp: "お盆には先祖の墓参りをする。", en: "During Obon we visit our ancestors' graves." }],
    qs: [
      { t: "fitb", s: "我が家の＿＿＿＿は、代々この土地で農業を営んできた。", en: "My family's ancestors have farmed this land for generations.", o: ["先祖", "子孫", "親戚", "他人"], a: 0, e: "先祖(せんぞ) = ancestors/forebears. 子孫 = descendants/offspring (the opposite). 親戚 = relatives. 他人 = a stranger/unrelated person." },
      { t: "meaning", s: "「先祖」の意味は？", o: ["ancestor; forebear", "descendants; offspring", "relatives", "a stranger; an unrelated person"], a: 0, e: "先祖 are one's ancestors (先祖代々 = for generations, ご先祖様 = one's honored ancestors). ≒ 祖先. Opposite of 子孫." }
    ]
  },
  {
    id: "n2-0393", w: "通訳", r: "つうやく", m: "(oral) interpretation; an interpreter", c: "noun", lv: 1,
    ex: [{ jp: "会議では通訳を通して話した。", en: "At the meeting, we spoke through an interpreter." }],
    qs: [
      { t: "fitb", s: "外国人の患者のために、医療＿＿＿＿が同席した。", en: "A medical interpreter sat in for the foreign patient.", o: ["通訳", "翻訳", "会話", "通信"], a: 0, e: "通訳 = interpreting speech orally / an interpreter (real-time, spoken). 翻訳(ほんやく) = translation of written text. 会話 = conversation. 通信 = communication/correspondence (telecom)." },
      { t: "meaning", s: "「通訳」の意味は？", o: ["oral interpretation; an interpreter (spoken, real-time)", "translation of written text", "conversation", "communication; correspondence"], a: 0, e: "通訳 is oral interpreting between languages (同時通訳 = simultaneous interpreting, 通訳者 = an interpreter). 翻訳 is for written translation." }
    ]
  },
  {
    id: "n2-0394", w: "手帳", r: "てちょう", m: "pocket notebook; (personal) planner/datebook", c: "noun", lv: 1,
    ex: [{ jp: "予定を手帳に書き込んだ。", en: "I wrote my schedule in my planner." }],
    qs: [
      { t: "fitb", s: "忘れないように、約束を＿＿＿＿にメモしておく。", en: "So as not to forget, I jot down appointments in my planner.", o: ["手帳", "名簿", "書類", "封筒"], a: 0, e: "手帳 = a pocket notebook/planner (for schedules, notes). 名簿 = a name list/roster. 書類 = documents/paperwork. 封筒(ふうとう) = an envelope." },
      { t: "meaning", s: "「手帳」の意味は？", o: ["pocket notebook; personal planner/datebook", "a name list; roster", "documents; paperwork", "an envelope"], a: 0, e: "手帳 is a small notebook for personal scheduling and notes (手帳に書く = write in one's planner, システム手帳 = a ring-binder organizer)." }
    ]
  },
  {
    id: "n2-0395", w: "都心", r: "としん", m: "the city center; downtown (esp. central Tokyo)", c: "noun", lv: 1,
    ex: [{ jp: "都心は家賃が高い。", en: "Rent is high in the city center." }],
    qs: [
      { t: "fitb", s: "通勤に便利なので、＿＿＿＿に近い場所に住みたい。", en: "Since it's convenient for commuting, I want to live near the city center.", o: ["都心", "郊外", "田舎", "地方"], a: 0, e: "都心 = the central area of a big city (downtown). 郊外(こうがい) = the suburbs/outskirts. 田舎(いなか) = the countryside/rural area. 地方 = the provinces/regions (outside the capital)." },
      { t: "meaning", s: "「都心」の意味は？", o: ["the city center; downtown", "the suburbs; outskirts", "the countryside; rural area", "the provinces; regions outside the capital"], a: 0, e: "都心 is the heart of a metropolis (都心部 = the downtown area, 都心へ出る = go into the city center). Opposite leaning: 郊外 (suburbs)." }
    ]
  },
  {
    id: "n2-0396", w: "昼寝", r: "ひるね", m: "a nap; afternoon nap; siesta", c: "noun", lv: 1,
    ex: [{ jp: "日曜の午後は昼寝をするのが好きだ。", en: "I like taking a nap on Sunday afternoons." }],
    qs: [
      { t: "fitb", s: "赤ちゃんが＿＿＿＿している間に、家事を済ませた。", en: "While the baby was napping, I finished the housework.", o: ["昼寝", "夜更かし", "寝坊", "居眠り"], a: 0, e: "昼寝 = a (daytime/afternoon) nap. 夜更かし(よふかし) = staying up late. 寝坊(ねぼう) = oversleeping. 居眠り(いねむり) = dozing off (unintentionally, e.g. at a desk)." },
      { t: "meaning", s: "「昼寝」の意味は？", o: ["a nap; afternoon nap; siesta", "staying up late at night", "oversleeping", "dozing off unintentionally"], a: 0, e: "昼寝 is a deliberate daytime nap (昼寝をする = take a nap). 居眠り is nodding off when you shouldn't." }
    ]
  },
  {
    id: "n2-0397", w: "役目", r: "やくめ", m: "role; duty; one's part to play; function", c: "noun", lv: 1,
    ex: [{ jp: "親の役目は子どもを守ることだ。", en: "A parent's role is to protect their children." }],
    qs: [
      { t: "fitb", s: "会議の記録を取るのが、新人の私の＿＿＿＿だ。", en: "Taking minutes of the meeting is my duty as the new hire.", o: ["役目", "名目", "項目", "題目"], a: 0, e: "役目 = a role/duty one is responsible for. 名目(めいもく) = a nominal reason/pretext (in name). 項目 = an item/category in a list. 題目(だいもく) = a title/topic/subject heading." },
      { t: "meaning", s: "「役目」の意味は？", o: ["role; duty; one's part to play; function", "a nominal reason; pretext", "an item; category in a list", "a title; topic; subject heading"], a: 0, e: "役目 is the role or duty assigned to someone or something (役目を果たす = fulfill one's duty, 役目を終える = finish one's role). ≒ 役割." }
    ]
  },
  {
    id: "n2-0398", w: "思いっきり", r: "おもいっきり", m: "with all one's might; to one's heart's content; as hard as one can", c: "adv", lv: 1,
    ex: [{ jp: "休日は思いっきり遊んだ。", en: "On my day off, I played to my heart's content." }],
    qs: [
      { t: "fitb", s: "ストレス発散に、カラオケで＿＿＿＿歌った。", en: "To blow off stress, I sang my heart out at karaoke.", o: ["思いっきり", "こっそり", "しぶしぶ", "それとなく"], a: 0, e: "思いっきり = with all one's might/to the fullest (without holding back). こっそり = secretly/stealthily. しぶしぶ = reluctantly. それとなく = indirectly/casually (hinting)." },
      { t: "meaning", s: "「思いっきり」の意味は？", o: ["with all one's might; to one's heart's content", "secretly; stealthily", "reluctantly; grudgingly", "indirectly; casually (hinting)"], a: 0, e: "思いっきり means doing something fully without restraint (思いっきり泣く = cry one's eyes out, 思いっきり楽しむ = enjoy to the max). ≒ 思い切り." }
    ]
  },
  {
    id: "n2-0399", w: "稽古", r: "けいこ", m: "practice; training; lessons (esp. arts, sumo, traditional skills)", c: "noun", lv: 1,
    ex: [{ jp: "毎日、剣道の稽古に励んでいる。", en: "I devote myself to kendo practice every day." }],
    qs: [
      { t: "fitb", s: "力士は朝早くから厳しい＿＿＿＿に明け暮れる。", en: "Sumo wrestlers spend their days in hard training from early morning.", o: ["稽古", "試合", "休憩", "観戦"], a: 0, e: "稽古 = practice/training in an art or traditional discipline (martial arts, dance, sumo). 試合 = a match/bout. 休憩 = a break/rest. 観戦(かんせん) = watching a game/match (as a spectator)." },
      { t: "meaning", s: "「稽古」の意味は？", o: ["practice; training; lessons (esp. arts, sumo)", "a match; a bout", "a break; a rest", "watching a game as a spectator"], a: 0, e: "稽古 is practice in traditional arts and disciplines (お稽古 = (taking) lessons, 稽古をつける = to train/coach someone). ≒ 練習, but with a traditional/disciplinary flavor." }
    ]
  },
  {
    id: "n2-0400", w: "三角", r: "さんかく", m: "triangle; triangular shape", c: "noun", lv: 1,
    ex: [{ jp: "おにぎりを三角の形に握る。", en: "You shape the rice ball into a triangle." }],
    qs: [
      { t: "fitb", s: "折り紙を半分に折ると、＿＿＿＿の形になる。", en: "When you fold the origami in half, it becomes a triangle.", o: ["三角", "四角", "丸", "楕円"], a: 0, e: "三角(さんかく) = a triangle. 四角(しかく) = a square/quadrilateral. 丸(まる) = a circle/round shape. 楕円(だえん) = an oval/ellipse." },
      { t: "meaning", s: "「三角」の意味は？", o: ["triangle; triangular shape", "a square; quadrilateral", "a circle; round shape", "an oval; ellipse"], a: 0, e: "三角 is a triangle (三角形 = a triangle figure, 三角関係 = a love triangle). Contrast 四角 (square)." }
    ]
  },
  {
    id: "n2-0401", w: "水平", r: "すいへい", m: "horizontal; level", c: "naadj", lv: 1,
    ex: [{ jp: "棚を水平に取り付ける。", en: "To install the shelf level (horizontally)." }],
    qs: [
      { t: "fitb", s: "カメラを＿＿＿＿に構えないと、写真が傾いてしまう。", en: "If you don't hold the camera level, the photo comes out tilted.", o: ["水平", "垂直", "斜め", "平行"], a: 0, e: "水平 = horizontal/level (parallel to the ground). 垂直(すいちょく) = vertical/perpendicular. 斜め = diagonal/slanted. 平行(へいこう) = parallel." },
      { t: "meaning", s: "「水平」の意味は？", o: ["horizontal; level", "vertical; perpendicular", "diagonal; slanted", "parallel"], a: 0, e: "水平 means level/horizontal (水平線 = the horizon, 水平に保つ = keep level). Opposite of 垂直 (vertical)." }
    ]
  },
  {
    id: "n2-0402", w: "すっきり", r: "すっきり", m: "refreshed; clear; neat and tidy; uncluttered", c: "adv", lv: 1,
    ex: [{ jp: "部屋を片付けたら、気分がすっきりした。", en: "After tidying the room, I felt refreshed." }],
    qs: [
      { t: "fitb", s: "余計な装飾を取り除き、＿＿＿＿としたデザインに変えた。", en: "We removed the excess ornamentation and changed it to a clean, uncluttered design.", o: ["すっきり", "ぐったり", "うっかり", "がっかり"], a: 0, e: "すっきり = refreshed/clear/neat (free of clutter or discomfort). ぐったり = limp/worn out (exhausted). うっかり = carelessly/absent-mindedly. がっかり = disappointed." },
      { t: "meaning", s: "「すっきり」の意味は？", o: ["refreshed; clear; neat; uncluttered", "limp; worn out; exhausted", "carelessly; absent-mindedly", "disappointed"], a: 0, e: "すっきり conveys a clean, refreshed, unburdened feeling (頭がすっきりする = feel clear-headed, すっきりした部屋 = a tidy room)." }
    ]
  },
  {
    id: "n2-0403", w: "増大", r: "ぞうだい", m: "increase; growth; enlargement (in amount or degree)", c: "noun", lv: 1,
    ex: [{ jp: "利用者の増大に対応する。", en: "To cope with the increase in users." }],
    qs: [
      { t: "fitb", s: "高齢化に伴い、医療費の＿＿＿＿が続いている。", en: "With the aging population, the increase in medical costs continues.", o: ["増大", "減少", "縮小", "維持"], a: 0, e: "増大 = increase/growth (in scale, amount, or degree). 減少 = decrease/decline (the opposite). 縮小 = reduction/scaling down. 維持(いじ) = maintenance/keeping as is." },
      { t: "meaning", s: "「増大」の意味は？", o: ["increase; growth; enlargement", "decrease; decline", "reduction; scaling down", "maintenance; keeping as is"], a: 0, e: "増大 means growing larger in amount or degree (リスクの増大 = increased risk, 負担が増大する = the burden grows). Opposite of 減少/縮小." }
    ]
  },
  {
    id: "n2-0404", w: "潰す", r: "つぶす", m: "to crush; to squash; to kill (time); to ruin; to waste", c: "verb", lv: 1,
    ex: [{ jp: "空き缶を踏んで潰した。", en: "I stepped on the empty can and crushed it." }],
    qs: [
      { t: "fitb", s: "電車の待ち時間を、本を読んで＿＿＿＿。", en: "I killed the time waiting for the train by reading a book.", o: ["潰した", "隠した", "断った", "逃した"], a: 0, e: "潰す = to crush/squash; figuratively to kill (time), ruin (a plan), or waste. 隠す = to hide. 断る(ことわる) = to refuse/decline. 逃す(のがす) = to miss/let slip." },
      { t: "meaning", s: "「潰す」の意味は？", o: ["to crush; to squash; to kill (time); to ruin; to waste", "to hide; to conceal", "to refuse; to decline", "to miss; to let slip"], a: 0, e: "潰す literally means to crush (潰れる is the intransitive pair) and figuratively to kill time (時間を潰す), ruin (計画を潰す = wreck a plan), or waste (顔を潰す = make someone lose face)." }
    ]
  },
  {
    id: "n2-0405", w: "出入り", r: "でいり", m: "coming and going; going in and out; frequenting", c: "noun", lv: 1,
    ex: [{ jp: "このビルは人の出入りが激しい。", en: "There's heavy coming and going of people in this building." }],
    qs: [
      { t: "fitb", s: "工事関係者以外の＿＿＿＿は禁止されている。", en: "Entry and exit by anyone other than construction personnel is prohibited.", o: ["出入り", "出席", "出発", "出張"], a: 0, e: "出入り = going in and out/coming and going (also frequenting a place). 出席 = attendance (being present). 出発 = departure/setting off. 出張 = a business trip." },
      { t: "meaning", s: "「出入り」の意味は？", o: ["coming and going; going in and out; frequenting", "attendance; being present", "departure; setting off", "a business trip"], a: 0, e: "出入り means entering and leaving (出入り口 = an entrance/exit, 出入りが激しい = a lot of traffic in and out, 出入りの業者 = a regular vendor)." }
    ]
  },
  {
    id: "n2-0406", w: "評論", r: "ひょうろん", m: "criticism; critique; commentary; review", c: "noun", lv: 1,
    ex: [{ jp: "彼は映画評論を書いている。", en: "He writes film criticism." }],
    qs: [
      { t: "fitb", s: "その＿＿＿＿家は、社会問題について鋭い意見を述べる。", en: "That critic offers sharp opinions on social issues.", o: ["評論", "評判", "評価", "批判"], a: 0, e: "評論 = critical commentary/critique (analyzing and discussing a work or issue). 評判(ひょうばん) = reputation/public talk. 評価 = evaluation/appraisal (judging worth). 批判 = criticism (pointing out faults, often negative)." },
      { t: "meaning", s: "「評論」の意味は？", o: ["criticism; critique; commentary; review", "reputation; public talk", "evaluation; appraisal", "criticism; finding fault (often negative)"], a: 0, e: "評論 is reasoned critique/commentary (評論家 = a critic/commentator, 文芸評論 = literary criticism). 批判 leans negative (faultfinding); 評論 is balanced analysis." }
    ]
  },
  {
    id: "n2-0407", w: "名物", r: "めいぶつ", m: "a famous local product; specialty; (also) a well-known character", c: "noun", lv: 1,
    ex: [{ jp: "この町の名物はうなぎだ。", en: "This town's specialty is eel." }],
    qs: [
      { t: "fitb", s: "旅行先では、その土地の＿＿＿＿料理を必ず味わう。", en: "When traveling, I always sample the local specialty cuisine.", o: ["名物", "名作", "名所", "名人"], a: 0, e: "名物 = a famous local product/specialty (often food). 名作 = a masterpiece (a celebrated work). 名所(めいしょ) = a famous place/scenic spot. 名人(めいじん) = a master/expert." },
      { t: "meaning", s: "「名物」の意味は？", o: ["a famous local product; specialty", "a masterpiece; celebrated work", "a famous place; scenic spot", "a master; an expert"], a: 0, e: "名物 is something a place is famous for (名物料理 = a signature local dish); can also mean a well-known local figure (名物社長 = a famous/colorful boss)." }
    ]
  },
  {
    id: "n2-0408", w: "宴会", r: "えんかい", m: "banquet; (drinking) party; feast", c: "noun", lv: 1,
    ex: [{ jp: "忘年会の宴会で盛り上がった。", en: "The year-end banquet was lively." }],
    qs: [
      { t: "fitb", s: "取引先を招いて、ホテルで盛大な＿＿＿＿を開いた。", en: "We invited our business partners and held a grand banquet at the hotel.", o: ["宴会", "会議", "面会", "集会"], a: 0, e: "宴会 = a banquet/drinking party (social feast). 会議 = a (business) meeting. 面会 = visiting/meeting someone (e.g. a patient). 集会 = an organized assembly/rally." },
      { t: "meaning", s: "「宴会」の意味は？", o: ["banquet; drinking party; feast", "a business meeting", "visiting/meeting someone", "an organized assembly; rally"], a: 0, e: "宴会 is a celebratory party with food and drink (宴会場 = a banquet hall, 宴会芸 = party entertainment/tricks)." }
    ]
  },
  {
    id: "n2-0409", w: "香水", r: "こうすい", m: "perfume; fragrance", c: "noun", lv: 1,
    ex: [{ jp: "彼女はいい香りの香水をつけている。", en: "She is wearing a nice-smelling perfume." }],
    qs: [
      { t: "fitb", s: "つけすぎた＿＿＿＿の匂いが、部屋中に充満していた。", en: "The smell of too much perfume filled the whole room.", o: ["香水", "化粧", "石鹸", "洗剤"], a: 0, e: "香水(こうすい) = perfume/fragrance. 化粧(けしょう) = makeup/cosmetics. 石鹸(せっけん) = soap. 洗剤(せんざい) = detergent." },
      { t: "meaning", s: "「香水」の意味は？", o: ["perfume; fragrance", "makeup; cosmetics", "soap", "detergent"], a: 0, e: "香水 is perfume (香水をつける = put on perfume, 香水の香り = the scent of perfume)." }
    ]
  },
  {
    id: "n2-0410", w: "混合", r: "こんごう", m: "mixing; mixture; blending", c: "noun", lv: 1,
    ex: [{ jp: "二つの薬品を混合する。", en: "To mix the two chemicals." }],
    qs: [
      { t: "fitb", s: "この競技は、男女＿＿＿＿のチームで行われる。", en: "This event is played with mixed men's and women's teams.", o: ["混合", "分離", "単独", "純粋"], a: 0, e: "混合 = mixing/blending different things together. 分離(ぶんり) = separation (pulling apart). 単独(たんどく) = single/solo/alone. 純粋 = pure/unmixed." },
      { t: "meaning", s: "「混合」の意味は？", o: ["mixing; mixture; blending", "separation; pulling apart", "single; solo; alone", "pure; unmixed"], a: 0, e: "混合 means combining different elements into a mixture (混合物 = a mixture, 男女混合 = mixed-gender). Opposite of 分離." }
    ]
  },
  {
    id: "n2-0411", w: "妥当", r: "だとう", m: "valid; appropriate; reasonable; proper", c: "naadj", lv: 1,
    ex: [{ jp: "その判断は妥当だと思う。", en: "I think that judgment is reasonable." }],
    qs: [
      { t: "fitb", s: "提示された価格は、市場相場から見て＿＿＿＿だ。", en: "The price offered is reasonable in light of the market rate.", o: ["妥当", "不当", "過剰", "異常"], a: 0, e: "妥当 = valid/appropriate/reasonable (fitting and justified). 不当(ふとう) = unjust/unreasonable (the opposite). 過剰 = excessive. 異常 = abnormal/unusual." },
      { t: "meaning", s: "「妥当」の意味は？", o: ["valid; appropriate; reasonable; proper", "unjust; unreasonable", "excessive; too much", "abnormal; unusual"], a: 0, e: "妥当 means fitting and justified (妥当な judgment/price = a reasonable one, 妥当性 = validity/appropriateness). Opposite of 不当. Don't confuse with 妥協 (compromise)." }
    ]
  },
  {
    id: "n2-0412", w: "直線", r: "ちょくせん", m: "a straight line", c: "noun", lv: 1,
    ex: [{ jp: "二点を直線で結ぶ。", en: "To connect two points with a straight line." }],
    qs: [
      { t: "fitb", s: "定規を使って、ノートに＿＿＿＿を引いた。", en: "Using a ruler, I drew a straight line in my notebook.", o: ["直線", "曲線", "点線", "対角線"], a: 0, e: "直線 = a straight line. 曲線(きょくせん) = a curve/curved line. 点線(てんせん) = a dotted line. 対角線(たいかくせん) = a diagonal line." },
      { t: "meaning", s: "「直線」の意味は？", o: ["a straight line", "a curve; curved line", "a dotted line", "a diagonal line"], a: 0, e: "直線 is a straight line (直線距離 = straight-line distance, 直線的 = straightforward/linear). Opposite of 曲線 (curve)." }
    ]
  },
  {
    id: "n2-0413", w: "方言", r: "ほうげん", m: "dialect; regional speech", c: "noun", lv: 1,
    ex: [{ jp: "祖母は強い方言で話す。", en: "My grandmother speaks with a strong dialect." }],
    qs: [
      { t: "fitb", s: "同じ日本語でも、地域によって＿＿＿＿が大きく異なる。", en: "Even in the same Japanese, the dialect differs greatly by region.", o: ["方言", "標準語", "外来語", "流行語"], a: 0, e: "方言 = a regional dialect. 標準語(ひょうじゅんご) = the standard language. 外来語(がいらいご) = loanwords (from foreign languages). 流行語(りゅうこうご) = a buzzword/trendy expression." },
      { t: "meaning", s: "「方言」の意味は？", o: ["dialect; regional speech", "the standard language", "loanwords from foreign languages", "a buzzword; trendy expression"], a: 0, e: "方言 is regional speech that differs from the standard (関西方言 = the Kansai dialect, お国言葉 = local dialect). Opposite of 標準語." }
    ]
  },
  {
    id: "n2-0414", w: "膨大", r: "ぼうだい", m: "enormous; vast; huge (in quantity/scale)", c: "naadj", lv: 1,
    ex: [{ jp: "この調査には膨大な時間がかかった。", en: "This survey took an enormous amount of time." }],
    qs: [
      { t: "fitb", s: "インターネット上には、＿＿＿＿な量の情報があふれている。", en: "A vast amount of information overflows on the internet.", o: ["膨大", "僅か", "微量", "小規模"], a: 0, e: "膨大 = enormous/vast in quantity or scale. 僅か(わずか) = a mere/slight amount. 微量(びりょう) = a trace/tiny amount. 小規模(しょうきぼ) = small-scale." },
      { t: "meaning", s: "「膨大」の意味は？", o: ["enormous; vast; huge in quantity/scale", "a mere/slight amount", "a trace; tiny amount", "small-scale"], a: 0, e: "膨大 describes an overwhelming amount or scale (膨大なデータ = vast data, 膨大な費用 = enormous costs). Don't confuse with 莫大 (huge, esp. of money/figures)." }
    ]
  },
  {
    id: "n2-0415", w: "群れ", r: "むれ", m: "a flock; herd; crowd; swarm (a group of creatures)", c: "noun", lv: 1,
    ex: [{ jp: "羊の群れが草原を移動している。", en: "A flock of sheep is moving across the grassland." }],
    qs: [
      { t: "fitb", s: "渡り鳥が大きな＿＿＿＿をなして、南へ飛んでいった。", en: "The migratory birds formed a large flock and flew south.", o: ["群れ", "列", "束", "粒"], a: 0, e: "群れ = a flock/herd/swarm (a mass of animals or people moving together). 列(れつ) = a line/row/queue. 束(たば) = a bundle/bunch (tied together). 粒(つぶ) = a grain/small bit." },
      { t: "meaning", s: "「群れ」の意味は？", o: ["a flock; herd; crowd; swarm", "a line; row; queue", "a bundle; bunch", "a grain; small bit"], a: 0, e: "群れ is a group of creatures gathered or moving together (魚の群れ = a school of fish, 群れをなす = form a flock). The verb is 群れる." }
    ]
  },
  {
    id: "n2-0416", w: "王女", r: "おうじょ", m: "princess (a king's daughter)", c: "noun", lv: 1,
    ex: [{ jp: "物語の王女は美しく賢かった。", en: "The princess in the story was beautiful and wise." }],
    qs: [
      { t: "fitb", s: "その国の＿＿＿＿は、外国の王子と結婚した。", en: "The princess of that country married a foreign prince.", o: ["王女", "王子", "女王", "王様"], a: 0, e: "王女(おうじょ) = a princess (a king's daughter). 王子(おうじ) = a prince (a king's son). 女王(じょおう) = a queen (a reigning female monarch). 王様(おうさま) = the king." },
      { t: "meaning", s: "「王女」の意味は？", o: ["a princess (a king's daughter)", "a prince (a king's son)", "a queen (reigning female monarch)", "the king"], a: 0, e: "王女 is a princess by birth. Distinct from 女王 (a queen who reigns) and 王子 (prince)." }
    ]
  },
  {
    id: "n2-0417", w: "下旬", r: "げじゅん", m: "the last third of a month (roughly the 21st–end)", c: "noun", lv: 1,
    ex: [{ jp: "発売は来月の下旬の予定だ。", en: "The release is scheduled for late next month." }],
    qs: [
      { t: "fitb", s: "梅雨は六月＿＿＿＿から七月にかけて続く。", en: "The rainy season continues from late June into July.", o: ["下旬", "上旬", "中旬", "月末"], a: 0, e: "下旬(げじゅん) = the last third of a month (~21st onward). 上旬(じょうじゅん) = the first third (1st–10th). 中旬(ちゅうじゅん) = the middle third (11th–20th). 月末 = the very end of the month." },
      { t: "meaning", s: "「下旬」の意味は？", o: ["the last third of a month (~21st–end)", "the first third (1st–10th)", "the middle third (11th–20th)", "the very end of the month"], a: 0, e: "下旬 covers roughly the 21st to month's end. The trio: 上旬 (early), 中旬 (mid), 下旬 (late)." }
    ]
  },
  {
    id: "n2-0418", w: "心当たり", r: "こころあたり", m: "an idea/clue (of what's behind something); recollection", c: "noun", lv: 1,
    ex: [{ jp: "犯人について心当たりはありますか。", en: "Do you have any idea who the culprit might be?" }],
    qs: [
      { t: "fitb", s: "財布をどこで失くしたか、全く＿＿＿＿がない。", en: "I have no idea at all where I lost my wallet.", o: ["心当たり", "思いやり", "心構え", "気がかり"], a: 0, e: "心当たり = a clue/idea/recollection of what might be behind something. 思いやり = consideration/empathy. 心構え(こころがまえ) = mental preparedness/readiness. 気がかり = a worry/concern." },
      { t: "meaning", s: "「心当たり」の意味は？", o: ["an idea/clue of what's behind something; recollection", "consideration; empathy", "mental preparedness; readiness", "a worry; concern"], a: 0, e: "心当たり is having some notion of the cause or whereabouts of something (心当たりがある = to have an idea, 心当たりを探す = search where you think it might be)." }
    ]
  },
  {
    id: "n2-0419", w: "小遣い", r: "こづかい", m: "pocket money; spending money; allowance", c: "noun", lv: 1,
    ex: [{ jp: "子どもに毎月小遣いをあげている。", en: "I give my child an allowance every month." }],
    qs: [
      { t: "fitb", s: "お＿＿＿＿をためて、ずっと欲しかったゲームを買った。", en: "I saved up my allowance and bought the game I'd long wanted.", o: ["小遣い", "給料", "貯金", "借金"], a: 0, e: "小遣い = pocket money/spending allowance (often お小遣い). 給料(きゅうりょう) = salary/wages (pay for work). 貯金(ちょきん) = savings. 借金 = a debt/loan owed." },
      { t: "meaning", s: "「小遣い」の意味は？", o: ["pocket money; spending money; allowance", "salary; wages for work", "savings", "a debt; money owed"], a: 0, e: "小遣い is money for personal spending (お小遣い = an allowance, 小遣い稼ぎ = earning a bit of pocket money)." }
    ]
  },
  {
    id: "n2-0420", w: "実物", r: "じつぶつ", m: "the real thing; the actual object; (in) the flesh", c: "noun", lv: 1,
    ex: [{ jp: "写真より実物のほうがきれいだ。", en: "The real thing is prettier than the photo." }],
    qs: [
      { t: "fitb", s: "通販で買う前に、店で＿＿＿＿を確認したい。", en: "Before buying online, I want to check the actual item in the store.", o: ["実物", "模型", "写真", "見本"], a: 0, e: "実物 = the real/actual thing (as opposed to a copy or image). 模型(もけい) = a model/replica. 写真 = a photograph. 見本(みほん) = a sample/specimen (shown as an example)." },
      { t: "meaning", s: "「実物」の意味は？", o: ["the real thing; the actual object; in the flesh", "a model; replica", "a photograph", "a sample; specimen"], a: 0, e: "実物 is the genuine article itself (実物大 = life-size, 実物を見る = see the real thing). Contrast a model, photo, or sample." }
    ]
  },
  {
    id: "n2-0421", w: "体系", r: "たいけい", m: "system; organized structure (of knowledge/theory)", c: "noun", lv: 1,
    ex: [{ jp: "その学問は理論の体系がしっかりしている。", en: "That discipline has a well-organized system of theory." }],
    qs: [
      { t: "fitb", s: "複雑な税制を、分かりやすい＿＿＿＿に整理する必要がある。", en: "We need to organize the complex tax rules into an understandable system.", o: ["体系", "体制", "体格", "団体"], a: 0, e: "体系 = an organized system/structure of ideas or elements (a coherent whole). 体制 = an organizational/political system (how a group is set up to operate). 体格 = physique/build. 団体 = a group/organization." },
      { t: "meaning", s: "「体系」の意味は？", o: ["a system; organized structure of knowledge/theory", "an organizational/political system; setup", "physique; bodily build", "a group; organization"], a: 0, e: "体系 is a coherent organized system of related parts (体系的 = systematic, 賃金体系 = a wage structure, 文法体系 = a grammar system). 体制 is more about organizational/power structure." }
    ]
  },
  {
    id: "n2-0422", w: "防犯", r: "ぼうはん", m: "crime prevention; (anti-)crime security", c: "noun", lv: 1,
    ex: [{ jp: "店の入り口に防犯カメラを設置した。", en: "We installed a security camera at the shop entrance." }],
    qs: [
      { t: "fitb", s: "地域住民が協力して、＿＿＿＿パトロールを行っている。", en: "Local residents cooperate to carry out crime-prevention patrols.", o: ["防犯", "防災", "防止", "予防"], a: 0, e: "防犯 = preventing crime (security against criminals). 防災(ぼうさい) = disaster prevention/preparedness. 防止 = prevention (stopping something bad, general). 予防(よぼう) = prevention (esp. of illness, in advance)." },
      { t: "meaning", s: "「防犯」の意味は？", o: ["crime prevention; anti-crime security", "disaster prevention/preparedness", "prevention; stopping something bad (general)", "prevention (esp. of illness), in advance"], a: 0, e: "防犯 specifically means guarding against crime (防犯ブザー = a personal alarm, 防犯対策 = anti-crime measures). 防災 is for natural disasters." }
    ]
  },
  {
    id: "n2-0423", w: "育児", r: "いくじ", m: "childcare; child-rearing; raising children", c: "noun", lv: 1,
    ex: [{ jp: "夫婦で協力して育児をしている。", en: "The couple cooperates in raising their child." }],
    qs: [
      { t: "fitb", s: "父親も＿＿＿＿に積極的に参加する家庭が増えてきた。", en: "More households now have fathers actively taking part in childcare.", o: ["育児", "教育", "保育", "出産"], a: 0, e: "育児 = raising/caring for one's own children (at home). 教育 = education (teaching/schooling). 保育(ほいく) = (professional) day-care/nursing of children. 出産(しゅっさん) = childbirth/giving birth." },
      { t: "meaning", s: "「育児」の意味は？", o: ["childcare; child-rearing; raising children", "education; teaching; schooling", "professional day-care of children", "childbirth; giving birth"], a: 0, e: "育児 is rearing children (育児休暇 = childcare leave, 育児書 = a parenting book). 保育 is professional childcare; 教育 is education." }
    ]
  },
  {
    id: "n2-0424", w: "会館", r: "かいかん", m: "hall; assembly hall; meeting building", c: "noun", lv: 1,
    ex: [{ jp: "市民会館でコンサートが開かれる。", en: "A concert will be held at the citizens' hall." }],
    qs: [
      { t: "fitb", s: "地域の催しは、たいてい近くの市民＿＿＿＿で行われる。", en: "Community events are usually held at the nearby citizens' hall.", o: ["会館", "会議", "会場", "会費"], a: 0, e: "会館 = a hall/building for meetings and events (a facility). 会議 = a meeting (the gathering). 会場 = a venue (the place for a specific event). 会費 = a membership fee/dues." },
      { t: "meaning", s: "「会館」の意味は？", o: ["a hall; assembly hall; meeting building", "a meeting (the gathering itself)", "a venue for a specific event", "a membership fee; dues"], a: 0, e: "会館 is a building used for gatherings and events (市民会館 = civic hall, 同窓会館 = an alumni hall)." }
    ]
  },
  {
    id: "n2-0425", w: "水平線", r: "すいへいせん", m: "the horizon (where sea/sky meet)", c: "noun", lv: 1,
    ex: [{ jp: "水平線から太陽が昇ってきた。", en: "The sun rose from the horizon." }],
    qs: [
      { t: "fitb", s: "船が遠ざかり、やがて＿＿＿＿の彼方に消えた。", en: "The ship receded and eventually vanished beyond the horizon.", o: ["水平線", "地平線", "稜線", "境界線"], a: 0, e: "水平線 = the horizon over the sea (sea-and-sky line). 地平線(ちへいせん) = the horizon over land. 稜線(りょうせん) = a mountain ridgeline. 境界線(きょうかいせん) = a boundary line." },
      { t: "meaning", s: "「水平線」の意味は？", o: ["the horizon over the sea (sea-sky line)", "the horizon over land", "a mountain ridgeline", "a boundary line"], a: 0, e: "水平線 is the sea horizon; over land it's 地平線. Both mean where earth/sea meets sky." }
    ]
  },
  {
    id: "n2-0426", w: "清掃", r: "せいそう", m: "cleaning; sanitation (esp. of public/large spaces)", c: "noun", lv: 1,
    ex: [{ jp: "ボランティアで公園の清掃をした。", en: "We cleaned the park as volunteers." }],
    qs: [
      { t: "fitb", s: "駅の構内は、専門の業者によって毎晩＿＿＿＿される。", en: "The station premises are cleaned every night by a professional contractor.", o: ["清掃", "洗濯", "整理", "片付け"], a: 0, e: "清掃 = cleaning/sanitation (formal, often of public or large spaces). 洗濯 = doing laundry. 整理 = tidying/organizing/sorting. 片付け = clearing away/tidying up." },
      { t: "meaning", s: "「清掃」の意味は？", o: ["cleaning; sanitation (formal, of public spaces)", "doing laundry", "tidying; organizing; sorting", "clearing away; tidying up"], a: 0, e: "清掃 is formal cleaning, often of public areas (清掃車 = a garbage/cleaning truck, 清掃員 = a cleaner/janitor). 掃除 is the everyday word for cleaning." }
    ]
  },
  {
    id: "n2-0427", w: "手首", r: "てくび", m: "wrist", c: "noun", lv: 1,
    ex: [{ jp: "転んで手首を痛めた。", en: "I fell and hurt my wrist." }],
    qs: [
      { t: "fitb", s: "テニスのしすぎで、＿＿＿＿に負担がかかった。", en: "From playing too much tennis, my wrist got strained.", o: ["手首", "足首", "肘", "肩"], a: 0, e: "手首(てくび) = the wrist. 足首(あしくび) = the ankle. 肘(ひじ) = the elbow. 肩(かた) = the shoulder." },
      { t: "meaning", s: "「手首」の意味は？", o: ["the wrist", "the ankle", "the elbow", "the shoulder"], a: 0, e: "手首 is the wrist (手首を回す = rotate one's wrist). The parallel 足首 = ankle." }
    ]
  },
  {
    id: "n2-0428", w: "判事", r: "はんじ", m: "judge; justice (in a court)", c: "noun", lv: 1,
    ex: [{ jp: "判事が判決を言い渡した。", en: "The judge handed down the verdict." }],
    qs: [
      { t: "fitb", s: "裁判で、＿＿＿＿は双方の主張を慎重に検討した。", en: "In the trial, the judge carefully examined both sides' arguments.", o: ["判事", "弁護士", "検事", "被告"], a: 0, e: "判事(はんじ) = a judge (presides and rules; ≒ 裁判官). 弁護士(べんごし) = a lawyer/attorney (defends a client). 検事(けんじ) = a (public) prosecutor. 被告(ひこく) = the defendant." },
      { t: "meaning", s: "「判事」の意味は？", o: ["a judge; justice (presides over a court)", "a lawyer; attorney", "a public prosecutor", "the defendant"], a: 0, e: "判事 is a judge who decides cases (≒ 裁判官). Distinct from 検事 (prosecutor) and 弁護士 (lawyer)." }
    ]
  },
  {
    id: "n2-0429", w: "噴火", r: "ふんか", m: "(volcanic) eruption", c: "noun", lv: 1,
    ex: [{ jp: "その火山は百年前に噴火した。", en: "That volcano erupted a hundred years ago." }],
    qs: [
      { t: "fitb", s: "火山が＿＿＿＿し、大量の溶岩が流れ出した。", en: "The volcano erupted, and a large amount of lava flowed out.", o: ["噴火", "噴水", "爆発", "地震"], a: 0, e: "噴火 = a volcanic eruption (a volcano spewing lava/ash). 噴水(ふんすい) = a fountain (spouting water). 爆発(ばくはつ) = an explosion. 地震 = an earthquake." },
      { t: "meaning", s: "「噴火」の意味は？", o: ["a volcanic eruption", "a fountain (spouting water)", "an explosion", "an earthquake"], a: 0, e: "噴火 is a volcano erupting (噴火口 = a crater, 大噴火 = a major eruption). The volcano is 火山." }
    ]
  },
  {
    id: "n2-0430", w: "牧場", r: "ぼくじょう", m: "ranch; pasture; stock farm", c: "noun", lv: 1,
    ex: [{ jp: "牧場で牛が草を食べている。", en: "Cows are grazing on the ranch." }],
    qs: [
      { t: "fitb", s: "広々とした＿＿＿＿で、馬がのんびりと過ごしていた。", en: "On the wide-open ranch, the horses were relaxing.", o: ["牧場", "農場", "果樹園", "菜園"], a: 0, e: "牧場 = a ranch/pasture for raising livestock (cattle, horses, sheep). 農場(のうじょう) = a farm (general, crops or animals). 果樹園(かじゅえん) = an orchard (fruit trees). 菜園(さいえん) = a vegetable garden." },
      { t: "meaning", s: "「牧場」の意味は？", o: ["a ranch; pasture; stock farm (livestock)", "a farm (general, crops or animals)", "an orchard; fruit-tree garden", "a vegetable garden"], a: 0, e: "牧場 is land for grazing livestock (牧場主 = a rancher, also read まきば in casual/poetic use)." }
    ]
  },
  {
    id: "n2-0431", w: "英文", r: "えいぶん", m: "English text; a sentence/writing in English", c: "noun", lv: 1,
    ex: [{ jp: "この英文を日本語に訳してください。", en: "Please translate this English text into Japanese." }],
    qs: [
      { t: "fitb", s: "海外の取引先に送る＿＿＿＿のメールを、上司に確認してもらった。", en: "I had my boss check the English email I was sending to an overseas client.", o: ["英文", "和文", "作文", "本文"], a: 0, e: "英文 = text written in English. 和文(わぶん) = text written in Japanese. 作文(さくぶん) = a composition/essay one writes. 本文(ほんぶん) = the main body text." },
      { t: "meaning", s: "「英文」の意味は？", o: ["English text; writing in English", "text written in Japanese", "a composition; essay one writes", "the main body text"], a: 0, e: "英文 means English-language writing (英文法 = English grammar, 英文を読む = read English text). Its counterpart is 和文 (Japanese text)." }
    ]
  },
  {
    id: "n2-0432", w: "間接", r: "かんせつ", m: "indirect; secondhand (not direct)", c: "noun", lv: 1,
    ex: [{ jp: "その話は間接的に聞いた。", en: "I heard that story indirectly (secondhand)." }],
    qs: [
      { t: "fitb", s: "喫煙は、本人だけでなく＿＿＿＿喫煙で周囲にも害を与える。", en: "Smoking harms not only the smoker but also those around them through secondhand smoke.", o: ["間接", "直接", "間隔", "間違い"], a: 0, e: "間接 = indirect (through an intermediary, not direct). 直接(ちょくせつ) = direct (the opposite). 間隔 = an interval/spacing. 間違い = a mistake/error." },
      { t: "meaning", s: "「間接」の意味は？", o: ["indirect; secondhand; through an intermediary", "direct; firsthand", "an interval; spacing", "a mistake; error"], a: 0, e: "間接 means not direct — via something in between (間接的 = indirect, 間接照明 = indirect lighting, 間接喫煙 = secondhand smoke). Opposite of 直接." }
    ]
  },
  {
    id: "n2-0433", w: "器具", r: "きぐ", m: "apparatus; instrument; utensil; appliance (a tool/device)", c: "noun", lv: 1,
    ex: [{ jp: "実験には専用の器具が必要だ。", en: "The experiment requires special apparatus." }],
    qs: [
      { t: "fitb", s: "運動用の＿＿＿＿を使って、自宅で筋トレをしている。", en: "I do strength training at home using exercise equipment.", o: ["器具", "家具", "道具", "工具"], a: 0, e: "器具 = an apparatus/instrument/appliance (often specialized, for a function). 家具(かぐ) = furniture. 道具(どうぐ) = a tool/implement (general). 工具(こうぐ) = (work)tools (for building/repair, e.g. wrenches)." },
      { t: "meaning", s: "「器具」の意味は？", o: ["apparatus; instrument; utensil; appliance", "furniture", "a tool; implement (general)", "work tools (for building/repair)"], a: 0, e: "器具 refers to functional instruments and appliances (調理器具 = cooking utensils, 医療器具 = medical instruments, 照明器具 = lighting fixtures)." }
    ]
  },
  {
    id: "n2-0434", w: "彫刻", r: "ちょうこく", m: "sculpture; carving; engraving", c: "noun", lv: 1,
    ex: [{ jp: "公園に大きな彫刻が置かれている。", en: "A large sculpture is placed in the park." }],
    qs: [
      { t: "fitb", s: "その芸術家は、大理石から見事な＿＿＿＿を作り出した。", en: "That artist produced a magnificent sculpture out of marble.", o: ["彫刻", "絵画", "陶器", "版画"], a: 0, e: "彫刻 = sculpture/carving (3D, shaped by carving). 絵画(かいが) = paintings/pictures. 陶器(とうき) = pottery/ceramics. 版画(はんが) = a (woodblock) print." },
      { t: "meaning", s: "「彫刻」の意味は？", o: ["sculpture; carving; engraving", "paintings; pictures", "pottery; ceramics", "a (woodblock) print"], a: 0, e: "彫刻 is the art of carving/sculpting (彫刻家 = a sculptor, 木彫刻 = wood carving). The verb is 彫る (to carve)." }
    ]
  },
  {
    id: "n2-0435", w: "吐き気", r: "はきけ", m: "nausea; an urge to vomit; queasiness", c: "noun", lv: 1,
    ex: [{ jp: "乗り物酔いで吐き気がした。", en: "I felt nauseous from motion sickness." }],
    qs: [
      { t: "fitb", s: "ひどい臭いに、思わず＿＿＿＿を催した。", en: "The terrible smell made me feel nauseous in spite of myself.", o: ["吐き気", "眠気", "寒気", "食欲"], a: 0, e: "吐き気 = nausea/an urge to vomit. 眠気(ねむけ) = drowsiness/sleepiness. 寒気(さむけ) = a chill/the shivers. 食欲(しょくよく) = appetite." },
      { t: "meaning", s: "「吐き気」の意味は？", o: ["nausea; an urge to vomit; queasiness", "drowsiness; sleepiness", "a chill; the shivers", "appetite"], a: 0, e: "吐き気 is the feeling of wanting to throw up (吐き気がする = feel nauseous, 吐き気を催す = be overcome with nausea)." }
    ]
  },
  {
    id: "n2-0436", w: "もたれる", r: "もたれる", m: "to lean on/against; (of food) to sit heavy on the stomach", c: "verb", lv: 1,
    ex: [{ jp: "壁にもたれて立っていた。", en: "I was standing leaning against the wall." }],
    qs: [
      { t: "fitb", s: "疲れて、彼は椅子の背に深く＿＿＿＿。", en: "Tired, he leaned back deeply into the chair.", o: ["もたれた", "ぶつかった", "つまずいた", "しがみついた"], a: 0, e: "もたれる = to lean on/against (rest one's weight); also (food) to lie heavy. ぶつかる = to collide/bump into. つまずく = to trip/stumble. しがみつく = to cling/hold on tightly." },
      { t: "meaning", s: "「もたれる」の意味は？", o: ["to lean on/against; (of food) to sit heavy on the stomach", "to collide; to bump into", "to trip; to stumble", "to cling; to hold on tightly"], a: 0, e: "もたれる means to rest one's weight against something (壁にもたれる = lean on the wall) and, of food, to feel heavy (胃がもたれる = have an upset/heavy stomach)." }
    ]
  },
  {
    id: "n2-0437", w: "苦情", r: "くじょう", m: "a complaint; a grievance; a grumble", c: "noun", lv: 1,
    ex: [{ jp: "騒音について苦情が寄せられた。", en: "Complaints were submitted about the noise." }],
    qs: [
      { t: "fitb", s: "サービスの悪さに、客から＿＿＿＿が殺到した。", en: "Complaints flooded in from customers about the poor service.", o: ["苦情", "感謝", "要望", "賛成"], a: 0, e: "苦情 = a complaint/grievance (expressing dissatisfaction). 感謝 = gratitude. 要望(ようぼう) = a request/demand (asking for something). 賛成 = agreement/approval." },
      { t: "meaning", s: "「苦情」の意味は？", o: ["a complaint; grievance; grumble", "gratitude; thankfulness", "a request; demand", "agreement; approval"], a: 0, e: "苦情 is a complaint about dissatisfaction (苦情を言う = make a complaint, 苦情処理 = complaint handling). ≒ クレーム." }
    ]
  },
  {
    id: "n2-0438", w: "寺院", r: "じいん", m: "temple (Buddhist); a (formal) place of worship", c: "noun", lv: 1,
    ex: [{ jp: "京都には古い寺院が多い。", en: "There are many old temples in Kyoto." }],
    qs: [
      { t: "fitb", s: "その＿＿＿＿は、千年以上の歴史を持つ。", en: "That temple has a history of over a thousand years.", o: ["寺院", "神社", "教会", "城"], a: 0, e: "寺院(じいん) = a (Buddhist) temple (formal term; ≒ お寺). 神社(じんじゃ) = a Shinto shrine. 教会(きょうかい) = a (Christian) church. 城(しろ) = a castle." },
      { t: "meaning", s: "「寺院」の意味は？", o: ["a (Buddhist) temple", "a Shinto shrine", "a (Christian) church", "a castle"], a: 0, e: "寺院 is the formal word for a Buddhist temple (仏教寺院 = a Buddhist temple). Don't confuse with 神社 (Shinto shrine)." }
    ]
  },
  {
    id: "n2-0439", w: "消耗", r: "しょうもう", m: "exhaustion; consumption; wear (using up energy/supplies)", c: "noun", lv: 1,
    ex: [{ jp: "激しい運動で体力を消耗した。", en: "I used up my stamina with intense exercise." }],
    qs: [
      { t: "fitb", s: "長時間の交渉で、精神的に大きく＿＿＿＿した。", en: "The long negotiation left me greatly drained mentally.", o: ["消耗", "回復", "補充", "蓄積"], a: 0, e: "消耗 = using up/being worn down (energy, supplies, stamina). 回復 = recovery/restoration. 補充(ほじゅう) = replenishing/refilling. 蓄積(ちくせき) = accumulation/building up." },
      { t: "meaning", s: "「消耗」の意味は？", o: ["exhaustion; consumption; wearing down (using up)", "recovery; restoration", "replenishing; refilling", "accumulation; building up"], a: 0, e: "消耗 means using up or being drained (消耗品 = consumables/expendables, 体力を消耗 = deplete one's stamina). Also commonly read しょうこう in some contexts." }
    ]
  },
  {
    id: "n2-0440", w: "続々", r: "ぞくぞく", m: "one after another; in rapid succession; successively", c: "adv", lv: 1,
    ex: [{ jp: "新商品が続々と発売される。", en: "New products are released one after another." }],
    qs: [
      { t: "fitb", s: "開店と同時に、客が＿＿＿＿と店内に入ってきた。", en: "The moment it opened, customers came into the shop one after another.", o: ["続々", "めったに", "たまに", "次第に"], a: 0, e: "続々(と) = one after another/in rapid succession (many things coming in a stream). めったに = (with neg.) rarely. たまに = occasionally. 次第に = gradually." },
      { t: "meaning", s: "「続々」の意味は？", o: ["one after another; in rapid succession", "rarely; seldom (with neg.)", "occasionally; once in a while", "gradually; little by little"], a: 0, e: "続々 describes things arriving or happening in a continuous stream (続々と集まる = gather in droves, 続々入荷 = arriving in stock one after another)." }
    ]
  },
  {
    id: "n2-0441", w: "灰色", r: "はいいろ", m: "gray; ashen color", c: "noun", lv: 1,
    ex: [{ jp: "空が灰色の雲に覆われている。", en: "The sky is covered with gray clouds." }],
    qs: [
      { t: "fitb", s: "彼はいつも＿＿＿＿のスーツを着ている。", en: "He always wears a gray suit.", o: ["灰色", "金色", "水色", "茶色"], a: 0, e: "灰色(はいいろ) = gray/ashen. 金色(きんいろ) = gold(en). 水色(みずいろ) = light blue. 茶色(ちゃいろ) = brown." },
      { t: "meaning", s: "「灰色」の意味は？", o: ["gray; ashen color", "gold; golden", "light blue", "brown"], a: 0, e: "灰色 is gray, the color of ash (灰 = ash). Figuratively, 灰色の人生 = a bleak/dreary life. ≒ グレー." }
    ]
  },
  {
    id: "n2-0442", w: "海洋", r: "かいよう", m: "the ocean; the seas (large-scale, scientific)", c: "noun", lv: 1,
    ex: [{ jp: "海洋には未知の生物が多い。", en: "There are many unknown creatures in the ocean." }],
    qs: [
      { t: "fitb", s: "プラスチックごみによる＿＿＿＿汚染が深刻化している。", en: "Ocean pollution from plastic waste is worsening.", o: ["海洋", "海岸", "湖", "河川"], a: 0, e: "海洋 = the ocean/seas (large-scale, often scientific/policy contexts). 海岸 = the coast/shore. 湖(みずうみ) = a lake. 河川(かせん) = rivers (formal term)." },
      { t: "meaning", s: "「海洋」の意味は？", o: ["the ocean; the seas (large-scale)", "the coast; the shore", "a lake", "rivers (formal term)"], a: 0, e: "海洋 refers to the oceans at large (海洋資源 = marine resources, 海洋汚染 = ocean pollution). More scientific/grand than 海 (the everyday 'sea')." }
    ]
  },
  {
    id: "n2-0443", w: "乾杯", r: "かんぱい", m: "a toast; 'Cheers!'; drinking to someone/something", c: "noun", lv: 1,
    ex: [{ jp: "みんなで乾杯しよう。", en: "Let's make a toast, everyone." }],
    qs: [
      { t: "fitb", s: "新郎新婦の幸せを願って、グラスを上げて＿＿＿＿した。", en: "Wishing the newlyweds happiness, we raised our glasses and toasted.", o: ["乾杯", "拍手", "握手", "挨拶"], a: 0, e: "乾杯(かんぱい) = a toast/'Cheers!' (raising glasses). 拍手(はくしゅ) = applause/clapping. 握手(あくしゅ) = a handshake. 挨拶(あいさつ) = a greeting." },
      { t: "meaning", s: "「乾杯」の意味は？", o: ["a toast; 'Cheers!'; drinking to something", "applause; clapping", "a handshake", "a greeting"], a: 0, e: "乾杯 is a toast (乾杯の音頭 = leading a toast). Literally '(drink the cup) dry.'" }
    ]
  },
  {
    id: "n2-0444", w: "中旬", r: "ちゅうじゅん", m: "the middle third of a month (roughly the 11th–20th)", c: "noun", lv: 1,
    ex: [{ jp: "桜は四月の中旬に満開になる。", en: "The cherry blossoms reach full bloom in mid-April." }],
    qs: [
      { t: "fitb", s: "プロジェクトの締め切りは、来月の＿＿＿＿あたりだ。", en: "The project deadline is around the middle of next month.", o: ["中旬", "上旬", "下旬", "中間"], a: 0, e: "中旬(ちゅうじゅん) = the middle third of a month (~11th–20th). 上旬 = the first third (1st–10th). 下旬 = the last third (21st–end). 中間 = the middle (general, between two things)." },
      { t: "meaning", s: "「中旬」の意味は？", o: ["the middle third of a month (~11th–20th)", "the first third (1st–10th)", "the last third (21st–end)", "the middle (general, between two things)"], a: 0, e: "中旬 is the mid-month period. The set: 上旬 (early), 中旬 (mid), 下旬 (late)." }
    ]
  },
  {
    id: "n2-0445", w: "番地", r: "ばんち", m: "house/lot number; street address number", c: "noun", lv: 1,
    ex: [{ jp: "住所の番地を正確に書く。", en: "I write the address's lot number accurately." }],
    qs: [
      { t: "fitb", s: "地図を見ても、その＿＿＿＿の家がどこか分からなかった。", en: "Even looking at the map, I couldn't tell where the house with that lot number was.", o: ["番地", "番号", "住所", "地域"], a: 0, e: "番地 = the lot/house number within an address. 番号(ばんごう) = a number (general identifier, e.g. phone). 住所 = the full address. 地域 = a region/area." },
      { t: "meaning", s: "「番地」の意味は？", o: ["house/lot number in an address", "a number (general identifier)", "the full address", "a region; area"], a: 0, e: "番地 is the lot number part of a Japanese address (一丁目三番地 = block 1, lot 3). The whole address is 住所." }
    ]
  },
  {
    id: "n2-0446", w: "学術", r: "がくじゅつ", m: "science and learning; scholarship; academic study", c: "noun", lv: 1,
    ex: [{ jp: "その雑誌は学術的な記事を載せている。", en: "That journal carries academic articles." }],
    qs: [
      { t: "fitb", s: "研究成果は、権威ある＿＿＿＿雑誌に掲載された。", en: "The research findings were published in a prestigious academic journal.", o: ["学術", "芸術", "技術", "美術"], a: 0, e: "学術 = scholarship/academic study (scholarly research). 芸術(げいじゅつ) = (fine) art. 技術 = technology/technique. 美術(びじゅつ) = visual/fine arts." },
      { t: "meaning", s: "「学術」の意味は？", o: ["scholarship; academic study; science and learning", "(fine) art", "technology; technique", "visual/fine arts"], a: 0, e: "学術 pertains to academic scholarship (学術論文 = a scholarly paper, 学術用語 = academic terminology, 学術会議 = an academic conference)." }
    ]
  },
  {
    id: "n2-0447", w: "課税", r: "かぜい", m: "taxation; levying a tax", c: "noun", lv: 1,
    ex: [{ jp: "輸入品に課税される。", en: "A tax is levied on imported goods." }],
    qs: [
      { t: "fitb", s: "一定の収入を超えると、＿＿＿＿の対象になる。", en: "Once you exceed a certain income, you become subject to taxation.", o: ["課税", "減税", "免税", "納税"], a: 0, e: "課税 = imposing/levying a tax (on someone). 減税(げんぜい) = a tax cut/reduction. 免税(めんぜい) = tax exemption/duty-free. 納税(のうぜい) = paying tax (by the taxpayer)." },
      { t: "meaning", s: "「課税」の意味は？", o: ["taxation; levying a tax", "a tax cut; reduction", "tax exemption; duty-free", "paying tax (by the taxpayer)"], a: 0, e: "課税 is the act of imposing tax (課税対象 = taxable, 課税所得 = taxable income). 納税 is the citizen's side (paying); 免税 is exemption." }
    ]
  },
  {
    id: "n2-0448", w: "記号", r: "きごう", m: "a symbol; sign; mark (a meaningful notation)", c: "noun", lv: 1,
    ex: [{ jp: "地図の記号の意味を覚える。", en: "I memorize the meanings of the map symbols." }],
    qs: [
      { t: "fitb", s: "重要な箇所には、星の＿＿＿＿を付けておいた。", en: "I put a star symbol next to the important parts.", o: ["記号", "番号", "暗号", "符号"], a: 0, e: "記号 = a symbol/sign/mark (a notation with meaning, e.g. ＋, ♪). 番号 = a number (an identifier). 暗号(あんごう) = a code/cipher (secret). 符号(ふごう) = a sign/symbol/code (close to 記号; often in math/data as a 'sign')." },
      { t: "meaning", s: "「記号」の意味は？", o: ["a symbol; sign; mark (meaningful notation)", "a number (an identifier)", "a code; cipher (secret)", "a sign; code (esp. math/data)"], a: 0, e: "記号 is a symbol or mark standing for something (発音記号 = phonetic symbols, 記号で表す = represent with symbols)." }
    ]
  },
  {
    id: "n2-0449", w: "産地", r: "さんち", m: "a producing region; place of origin (of goods)", c: "noun", lv: 1,
    ex: [{ jp: "この野菜の産地は北海道だ。", en: "The production region of this vegetable is Hokkaido." }],
    qs: [
      { t: "fitb", s: "食品を買うときは、＿＿＿＿の表示を確認している。", en: "When buying food, I check the labeling of the place of origin.", o: ["産地", "現地", "各地", "土地"], a: 0, e: "産地 = the region where a product is grown/made (its origin). 現地 = the actual site/local area (where something happens). 各地 = various places/regions. 土地 = land/a plot of ground." },
      { t: "meaning", s: "「産地」の意味は？", o: ["a producing region; place of origin of goods", "the actual site; local area", "various places; regions", "land; a plot of ground"], a: 0, e: "産地 is where a product originates (産地直送 = shipped directly from the source, 名産地 = a region famous for a product)." }
    ]
  },
  {
    id: "n2-0450", w: "省略", r: "しょうりゃく", m: "omission; abbreviation; leaving out (for brevity)", c: "noun", lv: 1,
    ex: [{ jp: "詳しい説明は省略します。", en: "I'll omit the detailed explanation." }],
    qs: [
      { t: "fitb", s: "長い正式名称は、頭文字をとって＿＿＿＿される。", en: "The long official name is abbreviated using its initials.", o: ["省略", "削除", "追加", "強調"], a: 0, e: "省略 = omitting/abbreviating (leaving out for brevity, while implied). 削除 = deletion (removing entirely). 追加 = addition (adding on). 強調 = emphasis/stressing." },
      { t: "meaning", s: "「省略」の意味は？", o: ["omission; abbreviation; leaving out for brevity", "deletion; removing entirely", "addition; adding on", "emphasis; stressing"], a: 0, e: "省略 means leaving something out, often understood from context (以下省略 = the rest is omitted, 省略形 = an abbreviated form). 削除 is outright deletion." }
    ]
  },
  {
    id: "n2-0451", w: "線路", r: "せんろ", m: "railway track; railroad line", c: "noun", lv: 1,
    ex: [{ jp: "線路の近くに住んでいる。", en: "I live near the railway tracks." }],
    qs: [
      { t: "fitb", s: "動物が＿＿＿＿に立ち入り、電車が緊急停止した。", en: "An animal entered the tracks, and the train made an emergency stop.", o: ["線路", "道路", "通路", "回路"], a: 0, e: "線路 = railway tracks/the rail line. 道路 = a road/street (for vehicles). 通路 = a passage/aisle (for people). 回路 = an (electric) circuit." },
      { t: "meaning", s: "「線路」の意味は？", o: ["railway track; railroad line", "a road; street for vehicles", "a passage; aisle for people", "an electric circuit"], a: 0, e: "線路 is the railway track (線路沿い = along the tracks, 線路を渡る = cross the tracks)." }
    ]
  },
  {
    id: "n2-0452", w: "殴る", r: "なぐる", m: "to hit; to strike; to punch; to beat", c: "verb", lv: 1,
    ex: [{ jp: "暴力で人を殴ってはいけない。", en: "You must not hit people with violence." }],
    qs: [
      { t: "fitb", s: "カッとなって相手を＿＿＿＿しまい、後で深く反省した。", en: "He flew into a rage and ended up punching the other person, and deeply regretted it later.", o: ["殴って", "褒めて", "慰めて", "支えて"], a: 0, e: "殴る = to hit/punch/strike (with a fist). 褒める(ほめる) = to praise. 慰める(なぐさめる) = to comfort/console. 支える(ささえる) = to support/hold up." },
      { t: "meaning", s: "「殴る」の意味は？", o: ["to hit; to strike; to punch; to beat", "to praise", "to comfort; to console", "to support; to hold up"], a: 0, e: "殴る means to strike with a fist (殴り合い = a fistfight, 顔を殴る = punch in the face)." }
    ]
  },
  {
    id: "n2-0453", w: "包丁", r: "ほうちょう", m: "kitchen knife; carving knife", c: "noun", lv: 1,
    ex: [{ jp: "包丁で野菜を切る。", en: "I cut vegetables with a kitchen knife." }],
    qs: [
      { t: "fitb", s: "よく切れるように、＿＿＿＿を砥石で研いだ。", en: "I sharpened the kitchen knife on a whetstone so it would cut well.", o: ["包丁", "はさみ", "まな板", "フォーク"], a: 0, e: "包丁(ほうちょう) = a kitchen knife. はさみ = scissors. まな板(まないた) = a cutting board. フォーク = a fork." },
      { t: "meaning", s: "「包丁」の意味は？", o: ["a kitchen knife; carving knife", "scissors", "a cutting board", "a fork"], a: 0, e: "包丁 is a kitchen knife (包丁を研ぐ = sharpen a knife, 出刃包丁 = a fish-cleaving knife)." }
    ]
  },
  {
    id: "n2-0454", w: "役所", r: "やくしょ", m: "a government office; public office (city hall, etc.)", c: "noun", lv: 1,
    ex: [{ jp: "転入の手続きは役所で行う。", en: "You do the move-in procedures at the government office." }],
    qs: [
      { t: "fitb", s: "住民票を取りに、市の＿＿＿＿へ行った。", en: "I went to the city office to get a residence certificate.", o: ["役所", "役者", "役目", "役割"], a: 0, e: "役所(やくしょ) = a government/public office (where administrative business is done). 役者(やくしゃ) = an actor. 役目(やくめ) = a role/duty. 役割(やくわり) = a role/part one plays." },
      { t: "meaning", s: "「役所」の意味は？", o: ["a government office; public office (city hall)", "an actor", "a role; duty", "a role; part one plays"], a: 0, e: "役所 is a government office handling public administration (市役所 = city hall, 区役所 = ward office, 役所仕事 = bureaucratic/red-tape work)." }
    ]
  },
  {
    id: "n2-0455", w: "郵送", r: "ゆうそう", m: "mailing; sending by post", c: "noun", lv: 1,
    ex: [{ jp: "書類を郵送で送ってください。", en: "Please send the documents by mail." }],
    qs: [
      { t: "fitb", s: "申込書は、窓口提出のほか＿＿＿＿でも受け付けています。", en: "Application forms are accepted by mail as well as in-person submission.", o: ["郵送", "配達", "運送", "発送"], a: 0, e: "郵送 = sending via the postal service (by mail). 配達(はいたつ) = delivery (bringing to the recipient). 運送(うんそう) = transport/freight carriage. 発送(はっそう) = dispatching/shipping out (sending off, by any means)." },
      { t: "meaning", s: "「郵送」の意味は？", o: ["mailing; sending by post", "delivery; bringing to the recipient", "transport; freight carriage", "dispatching; shipping out"], a: 0, e: "郵送 specifically means sending through the post (郵送料 = postage, 郵送で届く = arrive by mail)." }
    ]
  },
  {
    id: "n2-0456", w: "加熱", r: "かねつ", m: "heating; applying heat; (figurative) overheating", c: "noun", lv: 1,
    ex: [{ jp: "牛乳を加熱して温める。", en: "I heat the milk to warm it." }],
    qs: [
      { t: "fitb", s: "この食品は、電子レンジで十分に＿＿＿＿してから食べる。", en: "This food is eaten after thoroughly heating it in the microwave.", o: ["加熱", "冷却", "加圧", "保温"], a: 0, e: "加熱 = heating/applying heat. 冷却(れいきゃく) = cooling. 加圧(かあつ) = applying pressure. 保温(ほおん) = keeping warm/retaining heat." },
      { t: "meaning", s: "「加熱」の意味は？", o: ["heating; applying heat", "cooling", "applying pressure", "keeping warm; retaining heat"], a: 0, e: "加熱 means heating something up (加熱処理 = heat treatment, 加熱調理 = cooking with heat). Figuratively 加熱する = to heat up/overheat (e.g. competition). Opposite: 冷却." }
    ]
  },
  {
    id: "n2-0457", w: "観念", r: "かんねん", m: "a concept; notion; idea; (also) resigning oneself", c: "noun", lv: 1,
    ex: [{ jp: "時間に対する観念は人によって違う。", en: "People's notion of time differs from person to person." }],
    qs: [
      { t: "fitb", s: "彼には罪の＿＿＿＿が薄く、悪びれる様子がなかった。", en: "He had little sense of guilt and showed no signs of remorse.", o: ["観念", "観察", "観客", "観光"], a: 0, e: "観念 = a concept/notion/idea (an abstract mental conception). 観察 = observation (watching closely). 観客 = the audience/spectators. 観光 = sightseeing/tourism." },
      { t: "meaning", s: "「観念」の意味は？", o: ["a concept; notion; idea (mental conception)", "observation; watching closely", "the audience; spectators", "sightseeing; tourism"], a: 0, e: "観念 is an abstract idea or sense (固定観念 = a fixed idea/stereotype, 時間の観念 = sense of time). As a verb, 観念する = to resign oneself/give up." }
    ]
  },
  {
    id: "n2-0458", w: "限度", r: "げんど", m: "a limit; bounds; the maximum extent", c: "noun", lv: 1,
    ex: [{ jp: "我慢にも限度がある。", en: "There's a limit even to one's patience." }],
    qs: [
      { t: "fitb", s: "カードの利用には、月ごとの＿＿＿＿が設定されている。", en: "A monthly limit is set on use of the card.", o: ["限度", "程度", "限界", "制限"], a: 0, e: "限度 = a set limit/bounds (the maximum allowed). 程度 = a degree/extent (how much). 限界(げんかい) = the absolute limit/breaking point (one's capacity). 制限(せいげん) = a restriction/limitation (imposed). 限度 and 限界 overlap; 限度 is a defined ceiling, 限界 the ultimate breaking point." },
      { t: "meaning", s: "「限度」の意味は？", o: ["a limit; bounds; the maximum extent", "a degree; extent; how much", "the absolute limit; breaking point", "a restriction; limitation (imposed)"], a: 0, e: "限度 is the set boundary or maximum (限度額 = a maximum amount, 限度を超える = exceed the limit). 限界 is the ultimate breaking point." }
    ]
  },
  {
    id: "n2-0459", w: "娯楽", r: "ごらく", m: "entertainment; amusement; recreation", c: "noun", lv: 1,
    ex: [{ jp: "映画は手軽な娯楽の一つだ。", en: "Movies are one form of easy entertainment." }],
    qs: [
      { t: "fitb", s: "テレビが、当時の人々にとって最大の＿＿＿＿だった。", en: "Television was the greatest form of entertainment for people back then.", o: ["娯楽", "労働", "学習", "運動"], a: 0, e: "娯楽 = entertainment/amusement/recreation (for enjoyment). 労働 = labor/work. 学習 = learning/study. 運動 = exercise; a movement." },
      { t: "meaning", s: "「娯楽」の意味は？", o: ["entertainment; amusement; recreation", "labor; work", "learning; study", "exercise; a movement"], a: 0, e: "娯楽 is leisure entertainment (娯楽施設 = entertainment facilities, 娯楽番組 = an entertainment program)." }
    ]
  },
  {
    id: "n2-0460", w: "住居", r: "じゅうきょ", m: "a dwelling; residence; one's home", c: "noun", lv: 1,
    ex: [{ jp: "新しい住居を探している。", en: "I'm looking for a new place to live." }],
    qs: [
      { t: "fitb", s: "この建物は、店舗と＿＿＿＿が一体となった構造だ。", en: "This building has a structure combining a shop and a residence.", o: ["住居", "住所", "近所", "別荘"], a: 0, e: "住居(じゅうきょ) = a dwelling/residence (the building/place one lives). 住所 = an address (the written location). 近所 = the neighborhood (nearby area). 別荘(べっそう) = a villa/vacation home." },
      { t: "meaning", s: "「住居」の意味は？", o: ["a dwelling; residence; one's home (the place)", "an address (written location)", "the neighborhood; nearby area", "a villa; vacation home"], a: 0, e: "住居 is a place of residence (住居費 = housing costs, 住居侵入 = trespassing into a dwelling). Distinct from 住所 (the address)." }
    ]
  },
  {
    id: "n2-0461", w: "調節", r: "ちょうせつ", m: "adjustment; regulation; control (fine-tuning a level)", c: "noun", lv: 1,
    ex: [{ jp: "エアコンの温度を調節する。", en: "I adjust the air conditioner's temperature." }],
    qs: [
      { t: "fitb", s: "カーテンで、部屋に入る光の量を＿＿＿＿する。", en: "I regulate the amount of light entering the room with the curtains.", o: ["調節", "調査", "調子", "強調"], a: 0, e: "調節 = adjusting/regulating to a desired level (fine-tuning, e.g. temperature, volume). 調査 = investigation/survey. 調子(ちょうし) = condition/tune/pace (how something is going). 強調 = emphasis/stressing." },
      { t: "meaning", s: "「調節」の意味は？", o: ["adjustment; regulation; fine-tuning a level", "investigation; a survey", "condition; tune; pace", "emphasis; stressing"], a: 0, e: "調節 means adjusting something to the right level (温度調節 = temperature control, 音量を調節 = adjust the volume). ≒ 調整, but 調節 leans toward fine-tuning levels." }
    ]
  },
  {
    id: "n2-0462", w: "満員", r: "まんいん", m: "full (of people); no vacancy; packed; sold out", c: "noun", lv: 1,
    ex: [{ jp: "朝の電車はいつも満員だ。", en: "The morning train is always packed." }],
    qs: [
      { t: "fitb", s: "コンサートは＿＿＿＿で、当日券は手に入らなかった。", en: "The concert was sold out, and same-day tickets weren't available.", o: ["満員", "空席", "定員", "満点"], a: 0, e: "満員 = full of people/no vacancy (packed to capacity). 空席(くうせき) = an empty/vacant seat. 定員(ていいん) = the capacity/fixed number of people allowed. 満点 = a perfect score." },
      { t: "meaning", s: "「満員」の意味は？", o: ["full of people; no vacancy; packed; sold out", "an empty/vacant seat", "the capacity; fixed number allowed", "a perfect score"], a: 0, e: "満員 means filled to capacity with people (満員電車 = a packed train, 満員御礼 = 'thank you, full house')." }
    ]
  },
  {
    id: "n2-0463", w: "薬局", r: "やっきょく", m: "pharmacy; drugstore; chemist's", c: "noun", lv: 1,
    ex: [{ jp: "薬局で風邪薬を買った。", en: "I bought cold medicine at the pharmacy." }],
    qs: [
      { t: "fitb", s: "処方箋を持って、病院前の＿＿＿＿で薬を受け取った。", en: "With my prescription, I picked up the medicine at the pharmacy in front of the hospital.", o: ["薬局", "病院", "診療所", "保健所"], a: 0, e: "薬局(やっきょく) = a pharmacy/drugstore (dispenses medicine). 病院 = a hospital. 診療所(しんりょうじょ) = a clinic (small medical practice). 保健所(ほけんじょ) = a public health center." },
      { t: "meaning", s: "「薬局」の意味は？", o: ["a pharmacy; drugstore; chemist's", "a hospital", "a clinic; small medical practice", "a public health center"], a: 0, e: "薬局 dispenses and sells medicine (調剤薬局 = a dispensing pharmacy, 薬剤師 = a pharmacist)." }
    ]
  },
  {
    id: "n2-0464", w: "友好", r: "ゆうこう", m: "friendship; amity (between groups/nations)", c: "noun", lv: 1,
    ex: [{ jp: "両国は友好関係を深めている。", en: "The two countries are deepening their friendly relations." }],
    qs: [
      { t: "fitb", s: "姉妹都市として、長年にわたり＿＿＿＿を築いてきた。", en: "As sister cities, they have built friendly ties over many years.", o: ["友好", "敵対", "対立", "競争"], a: 0, e: "友好 = friendship/amity (esp. between groups or nations). 敵対(てきたい) = hostility/antagonism (the opposite). 対立 = confrontation/opposition. 競争 = competition/rivalry." },
      { t: "meaning", s: "「友好」の意味は？", o: ["friendship; amity (between groups/nations)", "hostility; antagonism", "confrontation; opposition", "competition; rivalry"], a: 0, e: "友好 means friendly relations on a group/national level (友好的 = friendly/amicable, 友好条約 = a treaty of friendship). For personal friendship, 友情 is used." }
    ]
  },
  {
    id: "n2-0465", w: "架空", r: "かくう", m: "fictional; imaginary; made-up; fanciful", c: "naadj", lv: 1,
    ex: [{ jp: "この物語は架空の世界が舞台だ。", en: "This story is set in a fictional world." }],
    qs: [
      { t: "fitb", s: "登場人物はすべて＿＿＿＿で、実在の人物ではない。", en: "All the characters are fictional and not real people.", o: ["架空", "実在", "現実", "事実"], a: 0, e: "架空 = fictional/imaginary/made-up (not real). 実在(じつざい) = actually existing/real. 現実 = reality/the actual. 事実 = a fact/the truth." },
      { t: "meaning", s: "「架空」の意味は？", o: ["fictional; imaginary; made-up", "actually existing; real", "reality; the actual", "a fact; the truth"], a: 0, e: "架空 means made-up/not real (架空の人物 = a fictional character, 架空請求 = a bogus/phantom billing scam). Opposite of 実在." }
    ]
  },
  {
    id: "n2-0466", w: "功績", r: "こうせき", m: "achievement; (meritorious) contribution; distinguished service", c: "noun", lv: 1,
    ex: [{ jp: "彼の功績は高く評価されている。", en: "His achievements are highly regarded." }],
    qs: [
      { t: "fitb", s: "その科学者は、医学の発展に大きな＿＿＿＿を残した。", en: "That scientist left great contributions to the advancement of medicine.", o: ["功績", "失敗", "損害", "責任"], a: 0, e: "功績 = a meritorious achievement/contribution (praiseworthy deeds). 失敗 = a failure. 損害(そんがい) = damage/loss. 責任 = responsibility." },
      { t: "meaning", s: "「功績」の意味は？", o: ["achievement; meritorious contribution; distinguished service", "a failure", "damage; loss", "responsibility"], a: 0, e: "功績 refers to praiseworthy accomplishments (功績をたたえる = honor someone's achievements, 多大な功績 = great contributions)." }
    ]
  },
  {
    id: "n2-0467", w: "上品", r: "じょうひん", m: "refined; elegant; classy; in good taste", c: "naadj", lv: 1,
    ex: [{ jp: "彼女は上品な話し方をする。", en: "She speaks in a refined manner." }],
    qs: [
      { t: "fitb", s: "その店は、落ち着いた＿＿＿＿な雰囲気で人気がある。", en: "That shop is popular for its calm, refined atmosphere.", o: ["上品", "下品", "派手", "地味"], a: 0, e: "上品(じょうひん) = refined/elegant/in good taste. 下品(げひん) = vulgar/coarse/in poor taste (the opposite). 派手 = flashy/showy. 地味 = plain/subdued." },
      { t: "meaning", s: "「上品」の意味は？", o: ["refined; elegant; classy; in good taste", "vulgar; coarse; in poor taste", "flashy; showy", "plain; subdued"], a: 0, e: "上品 describes elegance and good taste (上品な味 = a delicate, refined flavor). Opposite of 下品 (vulgar)." }
    ]
  },
  {
    id: "n2-0468", w: "電流", r: "でんりゅう", m: "electric current", c: "noun", lv: 1,
    ex: [{ jp: "この線に電流が流れている。", en: "An electric current is flowing through this wire." }],
    qs: [
      { t: "fitb", s: "スイッチを入れると、回路に＿＿＿＿が流れる。", en: "When you flip the switch, current flows through the circuit.", o: ["電流", "電圧", "電波", "電池"], a: 0, e: "電流 = electric current (the flow of charge). 電圧(でんあつ) = voltage (electric pressure). 電波 = radio waves/signal. 電池 = a battery." },
      { t: "meaning", s: "「電流」の意味は？", o: ["electric current (flow of charge)", "voltage (electric pressure)", "radio waves; signal", "a battery"], a: 0, e: "電流 is the flow of electricity (電流が流れる = current flows, 電流計 = an ammeter). 電圧 is voltage." }
    ]
  },
  {
    id: "n2-0469", w: "内科", r: "ないか", m: "internal medicine; the internal medicine department", c: "noun", lv: 1,
    ex: [{ jp: "熱が出たので内科を受診した。", en: "I had a fever, so I saw the internal medicine department." }],
    qs: [
      { t: "fitb", s: "手術ではなく薬で治す病気なら、＿＿＿＿が専門だ。", en: "For illnesses treated with medicine rather than surgery, internal medicine is the specialty.", o: ["内科", "外科", "産婦人科", "歯科"], a: 0, e: "内科(ないか) = internal medicine (treats with medication, not surgery). 外科(げか) = surgery (operates). 産婦人科(さんふじんか) = obstetrics and gynecology. 歯科(しか) = dentistry." },
      { t: "meaning", s: "「内科」の意味は？", o: ["internal medicine (treats with medication)", "surgery (operates)", "obstetrics and gynecology", "dentistry"], a: 0, e: "内科 treats illnesses non-surgically with medicine (内科医 = a physician/internist). Contrast 外科 (surgery)." }
    ]
  },
  {
    id: "n2-0470", w: "卑怯", r: "ひきょう", m: "cowardly; unfair; mean; dirty (in conduct)", c: "naadj", lv: 1,
    ex: [{ jp: "嘘をついて逃げるなんて卑怯だ。", en: "Lying and running away is cowardly." }],
    qs: [
      { t: "fitb", s: "弱い者をいじめるなんて、＿＿＿＿なやり方だ。", en: "Bullying the weak is a cowardly, dirty way to behave.", o: ["卑怯", "勇敢", "正直", "公平"], a: 0, e: "卑怯(ひきょう) = cowardly/unfair/underhanded. 勇敢(ゆうかん) = brave/courageous (the opposite). 正直 = honest/truthful. 公平 = fair/impartial." },
      { t: "meaning", s: "「卑怯」の意味は？", o: ["cowardly; unfair; mean; underhanded", "brave; courageous", "honest; truthful", "fair; impartial"], a: 0, e: "卑怯 condemns cowardly or dishonorable conduct (卑怯者 = a coward, 卑怯な手 = a dirty trick). Opposite of 勇敢/正々堂々." }
    ]
  },
  {
    id: "n2-0471", w: "親指", r: "おやゆび", m: "thumb; big toe", c: "noun", lv: 1,
    ex: [{ jp: "親指を立てて合図した。", en: "I gave a thumbs-up as a signal." }],
    qs: [
      { t: "fitb", s: "スマホを片手で操作すると、＿＿＿＿が疲れる。", en: "Operating a smartphone with one hand tires out the thumb.", o: ["親指", "小指", "人差し指", "手首"], a: 0, e: "親指 = the thumb (also big toe). 小指(こゆび) = the little finger/pinky. 人差し指(ひとさしゆび) = the index finger. 手首 = the wrist." },
      { t: "meaning", s: "「親指」の意味は？", o: ["thumb; big toe", "the little finger; pinky", "the index finger", "the wrist"], a: 0, e: "親指 is the thumb (足の親指 = the big toe). The 'parent finger' — 親 (parent) + 指 (finger)." }
    ]
  },
  {
    id: "n2-0472", w: "毎度", r: "まいど", m: "each time; every time; (shop greeting) thanks for your patronage", c: "noun", lv: 1,
    ex: [{ jp: "毎度ありがとうございます。", en: "Thank you for your continued patronage." }],
    qs: [
      { t: "fitb", s: "＿＿＿＿同じ間違いを繰り返しては、信用を失うよ。", en: "If you repeat the same mistake every time, you'll lose trust.", o: ["毎度", "時々", "たまに", "めったに"], a: 0, e: "毎度 = every time/each time (also a shopkeeper's greeting). 時々(ときどき) = sometimes/now and then. たまに = occasionally. めったに = (with neg.) rarely." },
      { t: "meaning", s: "「毎度」の意味は？", o: ["each time; every time", "sometimes; now and then", "occasionally; once in a while", "rarely; seldom (with neg.)"], a: 0, e: "毎度 means every single time (毎度のことながら = as always). It's also a common shop greeting (毎度どうも = thanks as always)." }
    ]
  },
  {
    id: "n2-0473", w: "風船", r: "ふうせん", m: "balloon", c: "noun", lv: 1,
    ex: [{ jp: "子どもが風船を膨らませている。", en: "The child is blowing up a balloon." }],
    qs: [
      { t: "fitb", s: "パーティーの会場は、色とりどりの＿＿＿＿で飾られていた。", en: "The party venue was decorated with colorful balloons.", o: ["風船", "風車", "凧", "花火"], a: 0, e: "風船(ふうせん) = a balloon. 風車(かざぐるま) = a pinwheel/windmill. 凧(たこ) = a kite. 花火 = fireworks." },
      { t: "meaning", s: "「風船」の意味は？", o: ["a balloon", "a pinwheel; windmill", "a kite", "fireworks"], a: 0, e: "風船 is a balloon (風船が割れる = the balloon pops, ゴム風船 = a rubber balloon)." }
    ]
  },
  {
    id: "n2-0474", w: "武士", r: "ぶし", m: "warrior; samurai", c: "noun", lv: 1,
    ex: [{ jp: "武士は刀を大切にした。", en: "The samurai prized their swords." }],
    qs: [
      { t: "fitb", s: "江戸時代、＿＿＿＿は特別な身分として扱われた。", en: "In the Edo period, warriors were treated as a special class.", o: ["武士", "農民", "商人", "貴族"], a: 0, e: "武士(ぶし) = a warrior/samurai. 農民(のうみん) = a peasant/farmer. 商人(しょうにん) = a merchant. 貴族(きぞく) = the nobility/aristocrat." },
      { t: "meaning", s: "「武士」の意味は？", o: ["warrior; samurai", "peasant; farmer", "merchant", "the nobility; aristocrat"], a: 0, e: "武士 is a samurai/warrior (武士道 = bushido, the warrior code). ≒ 侍(さむらい)." }
    ]
  },
  {
    id: "n2-0475", w: "感激", r: "かんげき", m: "deep emotion; being deeply moved; thrill of gratitude", c: "noun", lv: 1,
    ex: [{ jp: "温かい励ましの言葉に感激した。", en: "I was deeply moved by the warm words of encouragement." }],
    qs: [
      { t: "fitb", s: "久しぶりの再会に、二人は涙を流して＿＿＿＿した。", en: "At their reunion after so long, the two were moved to tears.", o: ["感激", "感心", "失望", "後悔"], a: 0, e: "感激 = being deeply moved/overcome with emotion (often joy or gratitude). 感心 = admiration/being impressed (by someone's quality). 失望 = disappointment. 後悔 = regret." },
      { t: "meaning", s: "「感激」の意味は？", o: ["deep emotion; being deeply moved (with joy/gratitude)", "admiration; being impressed", "disappointment", "regret"], a: 0, e: "感激 is being powerfully moved emotionally (感激のあまり = out of sheer emotion, 感激屋 = someone easily moved). Stronger than 感動." }
    ]
  },
  {
    id: "n2-0476", w: "葬式", r: "そうしき", m: "funeral; funeral service", c: "noun", lv: 1,
    ex: [{ jp: "祖父の葬式に親族が集まった。", en: "Relatives gathered for my grandfather's funeral." }],
    qs: [
      { t: "fitb", s: "喪服を着て、知人の＿＿＿＿に参列した。", en: "Wearing mourning clothes, I attended an acquaintance's funeral.", o: ["葬式", "結婚式", "入学式", "卒業式"], a: 0, e: "葬式(そうしき) = a funeral. 結婚式 = a wedding ceremony. 入学式 = a school entrance ceremony. 卒業式 = a graduation ceremony." },
      { t: "meaning", s: "「葬式」の意味は？", o: ["a funeral; funeral service", "a wedding ceremony", "a school entrance ceremony", "a graduation ceremony"], a: 0, e: "葬式 is a funeral (お葬式 = a funeral, 葬式を出す = hold a funeral). Related: 葬儀(そうぎ) = funeral rites (more formal)." }
    ]
  },
  {
    id: "n2-0477", w: "手入れ", r: "ていれ", m: "upkeep; maintenance; care (grooming, tending)", c: "noun", lv: 1,
    ex: [{ jp: "庭の手入れを欠かさない。", en: "I never neglect the upkeep of the garden." }],
    qs: [
      { t: "fitb", s: "革靴は、こまめに＿＿＿＿をすれば長く使える。", en: "Leather shoes last a long time with frequent care.", o: ["手入れ", "手間", "手続き", "手伝い"], a: 0, e: "手入れ = upkeep/maintenance/grooming (tending to keep something in good condition). 手間 = trouble/labor required. 手続き = procedures/formalities. 手伝い = help/assistance." },
      { t: "meaning", s: "「手入れ」の意味は？", o: ["upkeep; maintenance; care (grooming, tending)", "trouble; labor required", "procedures; formalities", "help; assistance"], a: 0, e: "手入れ means tending something to keep it in good shape (肌の手入れ = skincare, 手入れが行き届く = well-maintained). (It can also mean a police raid.)" }
    ]
  },
  {
    id: "n2-0478", w: "役人", r: "やくにん", m: "government official; public servant; bureaucrat", c: "noun", lv: 1,
    ex: [{ jp: "彼は市の役人として働いている。", en: "He works as a city official." }],
    qs: [
      { t: "fitb", s: "手続きの件で、市役所の＿＿＿＿に相談した。", en: "I consulted a city hall official about the procedure.", o: ["役人", "商人", "職人", "芸人"], a: 0, e: "役人(やくにん) = a government official/bureaucrat. 商人(しょうにん) = a merchant. 職人 = a craftsman/artisan. 芸人(げいにん) = an entertainer/comedian." },
      { t: "meaning", s: "「役人」の意味は？", o: ["government official; public servant; bureaucrat", "a merchant", "a craftsman; artisan", "an entertainer; comedian"], a: 0, e: "役人 is someone who works for the government (お役人 = an official, 役人気質 = a bureaucratic temperament). Works at a 役所 (government office)." }
    ]
  },
  {
    id: "n2-0479", w: "埋める", r: "うめる", m: "to bury; to fill in/up; to fill (a gap, a seat)", c: "verb", lv: 1,
    ex: [{ jp: "庭に種を埋めた。", en: "I buried the seeds in the garden." }],
    qs: [
      { t: "fitb", s: "空欄を＿＿＿＿ように、適切な言葉を考えた。", en: "I thought of the right word to fill in the blank.", o: ["埋める", "空ける", "削る", "破る"], a: 0, e: "埋める = to bury; to fill in/up (a gap, blank, seat). 空ける(あける) = to empty/make a space. 削る(けずる) = to shave/scrape off; to cut (a budget). 破る(やぶる) = to tear/break." },
      { t: "meaning", s: "「埋める」の意味は？", o: ["to bury; to fill in/up (a gap, a seat)", "to empty; to make a space", "to shave/scrape off; to cut down", "to tear; to break"], a: 0, e: "埋める means to bury or fill (穴を埋める = fill a hole, 空白を埋める = fill the blank, 赤字を埋める = cover a deficit). Intransitive: 埋まる." }
    ]
  },
  {
    id: "n2-0480", w: "湿度", r: "しつど", m: "humidity; level of moisture in the air", c: "noun", lv: 1,
    ex: [{ jp: "梅雨の時期は湿度が高い。", en: "Humidity is high during the rainy season." }],
    qs: [
      { t: "fitb", s: "この部屋は＿＿＿＿が低く、肌が乾燥しやすい。", en: "This room has low humidity, so skin dries out easily.", o: ["湿度", "温度", "濃度", "角度"], a: 0, e: "湿度 = humidity (moisture in the air). 温度 = temperature. 濃度 = concentration/density (of a substance). 角度 = angle." },
      { t: "meaning", s: "「湿度」の意味は？", o: ["humidity; moisture in the air", "temperature", "concentration; density of a substance", "angle"], a: 0, e: "湿度 measures air moisture (湿度が高い = humid, 湿度計 = a hygrometer). Related: 湿気(しっけ) = dampness." }
    ]
  },
  {
    id: "n2-0481", w: "森林", r: "しんりん", m: "forest; woods (large wooded area)", c: "noun", lv: 1,
    ex: [{ jp: "森林は二酸化炭素を吸収する。", en: "Forests absorb carbon dioxide." }],
    qs: [
      { t: "fitb", s: "違法な伐採で、世界中の＿＿＿＿が減少している。", en: "Due to illegal logging, forests around the world are decreasing.", o: ["森林", "砂漠", "草原", "湿地"], a: 0, e: "森林(しんりん) = forest/woods (large-scale, often in environmental contexts). 砂漠(さばく) = a desert. 草原(そうげん) = grassland/prairie. 湿地(しっち) = wetlands/marsh." },
      { t: "meaning", s: "「森林」の意味は？", o: ["forest; woods (large wooded area)", "a desert", "grassland; prairie", "wetlands; marsh"], a: 0, e: "森林 is forest at scale (森林破壊 = deforestation, 森林浴 = forest bathing). 森(もり) is the everyday word for a wood." }
    ]
  },
  {
    id: "n2-0482", w: "短編", r: "たんぺん", m: "a short piece (story, film); short work", c: "noun", lv: 1,
    ex: [{ jp: "彼の短編小説が賞を取った。", en: "His short story won an award." }],
    qs: [
      { t: "fitb", s: "忙しいので、長編ではなく＿＿＿＿の作品を選んで読む。", en: "Being busy, I choose short works rather than long ones to read.", o: ["短編", "長編", "続編", "名編"], a: 0, e: "短編(たんぺん) = a short work (story/film). 長編(ちょうへん) = a long/full-length work (the opposite). 続編(ぞくへん) = a sequel. 名編 = (rare) a famous piece — not standard; a distractor." },
      { t: "meaning", s: "「短編」の意味は？", o: ["a short piece (story, film)", "a long/full-length work", "a sequel", "a famous piece (non-standard)"], a: 0, e: "短編 means a short literary or film work (短編集 = a short-story collection, 短編映画 = a short film). Opposite of 長編." }
    ]
  },
  {
    id: "n2-0483", w: "中年", r: "ちゅうねん", m: "middle age; middle-aged (person)", c: "noun", lv: 1,
    ex: [{ jp: "中年になって健康が気になり始めた。", en: "On reaching middle age, I started worrying about my health." }],
    qs: [
      { t: "fitb", s: "＿＿＿＿の男性が、公園でジョギングをしていた。", en: "A middle-aged man was jogging in the park.", o: ["中年", "青年", "少年", "老人"], a: 0, e: "中年(ちゅうねん) = middle age (roughly 40s–50s). 青年(せいねん) = a youth/young adult. 少年(しょうねん) = a boy/juvenile. 老人(ろうじん) = an elderly person." },
      { t: "meaning", s: "「中年」の意味は？", o: ["middle age; middle-aged person", "a youth; young adult", "a boy; juvenile", "an elderly person"], a: 0, e: "中年 is middle age (中年太り = middle-age spread). The rough sequence: 少年/青年 → 中年 → 老人." }
    ]
  },
  {
    id: "n2-0484", w: "長女", r: "ちょうじょ", m: "eldest daughter; first-born daughter", c: "noun", lv: 1,
    ex: [{ jp: "彼女は三人姉妹の長女だ。", en: "She is the eldest of three sisters." }],
    qs: [
      { t: "fitb", s: "＿＿＿＿として、彼女は幼い弟妹の面倒をよく見た。", en: "As the eldest daughter, she looked after her young siblings well.", o: ["長女", "次女", "長男", "末っ子"], a: 0, e: "長女(ちょうじょ) = the eldest daughter. 次女(じじょ) = the second daughter. 長男 = the eldest son. 末っ子(すえっこ) = the youngest child." },
      { t: "meaning", s: "「長女」の意味は？", o: ["eldest daughter; first-born daughter", "second daughter", "eldest son", "the youngest child"], a: 0, e: "長女 is the first-born daughter (長男・長女 = eldest son and daughter). 次女 = second daughter." }
    ]
  },
  {
    id: "n2-0485", w: "別荘", r: "べっそう", m: "villa; vacation home; summer cottage", c: "noun", lv: 1,
    ex: [{ jp: "夏は湖のそばの別荘で過ごす。", en: "In summer we stay at the villa by the lake." }],
    qs: [
      { t: "fitb", s: "その実業家は、避暑地に立派な＿＿＿＿を構えている。", en: "That businessman has a splendid villa in a summer resort.", o: ["別荘", "住居", "旅館", "団地"], a: 0, e: "別荘(べっそう) = a villa/second home (for vacations). 住居 = a dwelling/one's main residence. 旅館(りょかん) = a traditional Japanese inn. 団地(だんち) = a public housing complex." },
      { t: "meaning", s: "「別荘」の意味は？", o: ["villa; vacation home; summer cottage", "a dwelling; one's main residence", "a traditional Japanese inn", "a public housing complex"], a: 0, e: "別荘 is a secondary home for holidays (別荘地 = a resort/cottage area). Distinct from one's primary 住居." }
    ]
  },
  {
    id: "n2-0486", w: "屋外", r: "おくがい", m: "outdoors; outside (a building); open-air", c: "noun", lv: 1,
    ex: [{ jp: "コンサートは屋外で行われた。", en: "The concert was held outdoors." }],
    qs: [
      { t: "fitb", s: "雨天の場合、イベントは＿＿＿＿から屋内に変更される。", en: "In case of rain, the event is moved from outdoors to indoors.", o: ["屋外", "屋内", "室内", "車内"], a: 0, e: "屋外(おくがい) = outdoors/outside a building. 屋内(おくない) = indoors (the opposite). 室内(しつない) = inside a room/interior. 車内(しゃない) = inside a vehicle." },
      { t: "meaning", s: "「屋外」の意味は？", o: ["outdoors; outside a building; open-air", "indoors; inside a building", "inside a room; interior", "inside a vehicle"], a: 0, e: "屋外 means outdoors (屋外活動 = outdoor activities, 屋外駐車場 = an open-air parking lot). Opposite of 屋内." }
    ]
  },
  {
    id: "n2-0487", w: "改札", r: "かいさつ", m: "ticket gate; ticket inspection (at a station)", c: "noun", lv: 1,
    ex: [{ jp: "改札を通って電車に乗る。", en: "You pass through the ticket gate to board the train." }],
    qs: [
      { t: "fitb", s: "友達とは、駅の＿＿＿＿口で待ち合わせた。", en: "I met up with my friend at the station ticket gate.", o: ["改札", "窓口", "出口", "階段"], a: 0, e: "改札(かいさつ) = the ticket gate/ticket inspection. 窓口 = a service window/counter. 出口 = an exit. 階段 = stairs." },
      { t: "meaning", s: "「改札」の意味は？", o: ["ticket gate; ticket inspection at a station", "a service window; counter", "an exit", "stairs"], a: 0, e: "改札 is the station ticket gate (改札口 = the ticket gate, 自動改札 = an automatic ticket gate). You tap your pass there." }
    ]
  },
  {
    id: "n2-0488", w: "血圧", r: "けつあつ", m: "blood pressure", c: "noun", lv: 1,
    ex: [{ jp: "毎朝、血圧を測っている。", en: "I measure my blood pressure every morning." }],
    qs: [
      { t: "fitb", s: "塩分の取りすぎは、＿＿＿＿を上げる原因になる。", en: "Consuming too much salt is a cause of raised blood pressure.", o: ["血圧", "体温", "脈拍", "体重"], a: 0, e: "血圧(けつあつ) = blood pressure. 体温(たいおん) = body temperature. 脈拍(みゃくはく) = pulse (heart rate). 体重 = body weight." },
      { t: "meaning", s: "「血圧」の意味は？", o: ["blood pressure", "body temperature", "pulse; heart rate", "body weight"], a: 0, e: "血圧 is blood pressure (高血圧 = high blood pressure, 血圧計 = a blood-pressure monitor)." }
    ]
  },
  {
    id: "n2-0489", w: "国籍", r: "こくせき", m: "nationality; citizenship", c: "noun", lv: 1,
    ex: [{ jp: "彼は日本国籍を取得した。", en: "He acquired Japanese nationality." }],
    qs: [
      { t: "fitb", s: "このチームには、様々な＿＿＿＿の選手が在籍している。", en: "This team has players of various nationalities.", o: ["国籍", "出身", "国境", "民族"], a: 0, e: "国籍(こくせき) = nationality/citizenship (legal status). 出身(しゅっしん) = where one is from (origin). 国境(こっきょう) = a national border. 民族(みんぞく) = an ethnic group/people." },
      { t: "meaning", s: "「国籍」の意味は？", o: ["nationality; citizenship (legal status)", "where one is from; origin", "a national border", "an ethnic group; people"], a: 0, e: "国籍 is one's legal nationality (二重国籍 = dual nationality, 国籍を変える = change citizenship). 民族 is ethnicity; 出身 is one's place of origin." }
    ]
  },
  {
    id: "n2-0490", w: "相違", r: "そうい", m: "difference; discrepancy; disparity", c: "noun", lv: 1,
    ex: [{ jp: "両者の意見には大きな相違がある。", en: "There is a big difference between the two parties' opinions." }],
    qs: [
      { t: "fitb", s: "書類の内容と事実に＿＿＿＿があれば、申し出てください。", en: "If there is any discrepancy between the document and the facts, please report it.", o: ["相違", "一致", "共通", "同様"], a: 0, e: "相違(そうい) = a difference/discrepancy (a formal term). 一致 = agreement/matching up (the opposite). 共通 = something in common. 同様(どうよう) = the same/likewise." },
      { t: "meaning", s: "「相違」の意味は？", o: ["difference; discrepancy; disparity", "agreement; matching up", "something in common; shared", "the same; likewise"], a: 0, e: "相違 is a formal word for a difference/discrepancy (相違点 = points of difference, 〜に相違ない = there's no doubt that ~). Opposite of 一致." }
    ]
  },
  {
    id: "n2-0491", w: "頂点", r: "ちょうてん", m: "the top; summit; peak; apex; climax", c: "noun", lv: 1,
    ex: [{ jp: "彼はキャリアの頂点に達した。", en: "He reached the peak of his career." }],
    qs: [
      { t: "fitb", s: "優勝して、選手としての人気は＿＿＿＿に達した。", en: "After winning, his popularity as a player reached its peak.", o: ["頂点", "底辺", "中腹", "出発点"], a: 0, e: "頂点(ちょうてん) = the top/summit/apex (highest point). 底辺(ていへん) = the base/bottom (also the lowest social stratum). 中腹(ちゅうふく) = the mountainside/halfway up. 出発点 = the starting point." },
      { t: "meaning", s: "「頂点」の意味は？", o: ["the top; summit; peak; apex; climax", "the base; bottom; lowest stratum", "the mountainside; halfway up", "the starting point"], a: 0, e: "頂点 is the highest point (頂点に立つ = stand at the top, 怒りが頂点に達する = anger reaches its peak). Geometrically also a vertex." }
    ]
  },
  {
    id: "n2-0492", w: "定員", r: "ていいん", m: "capacity; the fixed/maximum number of people allowed", c: "noun", lv: 1,
    ex: [{ jp: "このエレベーターの定員は十名だ。", en: "This elevator's capacity is ten people." }],
    qs: [
      { t: "fitb", s: "講座は＿＿＿＿に達したため、申し込みを締め切った。", en: "The course reached capacity, so applications were closed.", o: ["定員", "満員", "人数", "定価"], a: 0, e: "定員(ていいん) = the set maximum number of people (capacity). 満員 = being full (no more room, the state). 人数 = the (actual) number of people. 定価 = the list price." },
      { t: "meaning", s: "「定員」の意味は？", o: ["capacity; the fixed maximum number of people", "being full; no more room (the state)", "the actual number of people", "the list price"], a: 0, e: "定員 is the allowed maximum headcount (定員オーバー = over capacity, 定員割れ = below the quota). When that capacity is reached, it's 満員." }
    ]
  },
  {
    id: "n2-0493", w: "木材", r: "もくざい", m: "wood; timber; lumber", c: "noun", lv: 1,
    ex: [{ jp: "この家具は天然の木材で作られている。", en: "This furniture is made of natural wood." }],
    qs: [
      { t: "fitb", s: "輸入＿＿＿＿の価格が高騰し、住宅の建設費が上がった。", en: "The price of imported timber soared, raising housing construction costs.", o: ["木材", "材木", "木製", "樹木"], a: 0, e: "木材(もくざい) = wood/timber as a material. 材木(ざいもく) = lumber/timber (≒ 木材, often cut for building). 木製(もくせい) = made of wood (an attribute). 樹木(じゅもく) = trees (living, standing)." },
      { t: "meaning", s: "「木材」の意味は？", o: ["wood; timber; lumber (as a material)", "lumber; cut timber (≒ 木材)", "made of wood (an attribute)", "trees (living, standing)"], a: 0, e: "木材 is wood as a raw material (木材加工 = woodworking). 樹木 are living trees; 木製 describes a wooden product." }
    ]
  },
  {
    id: "n2-0494", w: "あれこれ", r: "あれこれ", m: "this and that; one thing or another; various things", c: "adv", lv: 1,
    ex: [{ jp: "あれこれ考えすぎて眠れない。", en: "I overthink this and that and can't sleep." }],
    qs: [
      { t: "fitb", s: "他人の人生に、＿＿＿＿口出しするべきではない。", en: "You shouldn't meddle in this and that of other people's lives.", o: ["あれこれ", "めっきり", "うっかり", "きっぱり"], a: 0, e: "あれこれ = this and that/various things (a range of unspecified matters). めっきり = markedly/noticeably (a sharp change). うっかり = carelessly. きっぱり = flatly/decisively." },
      { t: "meaning", s: "「あれこれ」の意味は？", o: ["this and that; one thing or another; various things", "markedly; noticeably (a change)", "carelessly; absent-mindedly", "flatly; decisively"], a: 0, e: "あれこれ refers to various unspecified things (あれこれ悩む = fret over all sorts of things, あれこれ言う = say this and that)." }
    ]
  },
  {
    id: "n2-0495", w: "頭脳", r: "ずのう", m: "brains; intellect; mind (mental capacity)", c: "noun", lv: 1,
    ex: [{ jp: "彼は明晰な頭脳の持ち主だ。", en: "He has a sharp, clear mind." }],
    qs: [
      { t: "fitb", s: "この仕事は体力よりも＿＿＿＿が要求される。", en: "This job demands brains more than physical strength.", o: ["頭脳", "筋力", "体力", "気力"], a: 0, e: "頭脳(ずのう) = brains/intellect (mental ability). 筋力(きんりょく) = muscle strength. 体力 = physical strength/stamina. 気力 = willpower/mental energy." },
      { t: "meaning", s: "「頭脳」の意味は？", o: ["brains; intellect; mind (mental capacity)", "muscle strength", "physical strength; stamina", "willpower; mental energy"], a: 0, e: "頭脳 means intellectual capacity (頭脳明晰 = sharp-minded, 頭脳労働 = brain work, 頭脳流出 = brain drain)." }
    ]
  },
  {
    id: "n2-0496", w: "仲良し", r: "なかよし", m: "a close friend; being on good terms; good friends", c: "noun", lv: 1,
    ex: [{ jp: "二人は昔からの仲良しだ。", en: "The two have been close friends for a long time." }],
    qs: [
      { t: "fitb", s: "クラスの＿＿＿＿三人組は、いつも一緒に行動している。", en: "The class's close-knit trio always acts together.", o: ["仲良し", "知り合い", "ライバル", "他人"], a: 0, e: "仲良し(なかよし) = a close friend/being on good terms. 知り合い = an acquaintance (someone you know). ライバル = a rival. 他人 = a stranger/unrelated person." },
      { t: "meaning", s: "「仲良し」の意味は？", o: ["a close friend; being on good terms", "an acquaintance; someone one knows", "a rival", "a stranger; unrelated person"], a: 0, e: "仲良し means being close/friendly (仲良くする = get along, 仲良しグループ = a close group of friends)." }
    ]
  },
  {
    id: "n2-0497", w: "売り切れ", r: "うりきれ", m: "sold out; out of stock", c: "noun", lv: 1,
    ex: [{ jp: "人気の商品はすぐ売り切れになる。", en: "Popular items sell out quickly." }],
    qs: [
      { t: "fitb", s: "開演前にチケットは全て＿＿＿＿となった。", en: "All the tickets were sold out before the show started.", o: ["売り切れ", "品切れ", "在庫", "完売"], a: 0, e: "売り切れ = sold out (an item no longer available). 品切れ(しなぎれ) = out of stock (≒ 売り切れ, stock temporarily depleted). 在庫(ざいこ) = stock/inventory (the goods on hand). 完売(かんばい) = a complete sellout (everything sold)." },
      { t: "meaning", s: "「売り切れ」の意味は？", o: ["sold out; out of stock", "out of stock (≒ sold out)", "stock; inventory on hand", "a complete sellout"], a: 0, e: "売り切れ means an item has all been sold (売り切れ御免 = 'sold out, sorry'). The verb is 売り切れる." }
    ]
  },
  {
    id: "n2-0498", w: "無数", r: "むすう", m: "countless; innumerable; myriad", c: "naadj", lv: 1,
    ex: [{ jp: "夜空に無数の星が輝いている。", en: "Countless stars shine in the night sky." }],
    qs: [
      { t: "fitb", s: "砂浜には、＿＿＿＿の小さな貝殻が散らばっていた。", en: "Countless small seashells were scattered on the beach.", o: ["無数", "少数", "多少", "半数"], a: 0, e: "無数(むすう) = countless/innumerable. 少数(しょうすう) = a small number/minority. 多少(たしょう) = more or less/some. 半数(はんすう) = half the number." },
      { t: "meaning", s: "「無数」の意味は？", o: ["countless; innumerable; myriad", "a small number; minority", "more or less; some", "half the number"], a: 0, e: "無数 means too many to count (無数にある = there are countless ones, 無数の星 = countless stars)." }
    ]
  },
  {
    id: "n2-0499", w: "争う", r: "あらそう", m: "to compete; to contend; to dispute; to quarrel", c: "verb", lv: 1,
    ex: [{ jp: "二人は一位を争っている。", en: "The two are competing for first place." }],
    qs: [
      { t: "fitb", s: "わずかな遺産を巡って、親族が裁判で＿＿＿＿。", en: "The relatives fought in court over the small inheritance.", o: ["争った", "譲った", "支えた", "認めた"], a: 0, e: "争う = to compete/contend/dispute (struggle against). 譲る(ゆずる) = to yield/hand over/give way. 支える = to support. 認める = to acknowledge/approve." },
      { t: "meaning", s: "「争う」の意味は？", o: ["to compete; to contend; to dispute; to quarrel", "to yield; to give way; to hand over", "to support; to hold up", "to acknowledge; to approve"], a: 0, e: "争う means to struggle or compete against (優勝を争う = vie for the title, 一刻を争う = every second counts). The noun is 争い (a conflict)." }
    ]
  },
  {
    id: "n2-0500", w: "惜しい", r: "おしい", m: "regrettable; a pity; so close; too good to waste", c: "iadj", lv: 1,
    ex: [{ jp: "あと一点で勝てたのに、惜しい試合だった。", en: "We could have won by one more point — it was a regrettable game." }],
    qs: [
      { t: "fitb", s: "こんなに立派な物を捨てるなんて、＿＿＿＿。", en: "Throwing away such a fine thing is a waste / a pity.", o: ["惜しい", "めでたい", "厳しい", "怪しい"], a: 0, e: "惜しい = regrettable/a pity/so close (too valuable to lose). めでたい = joyous/auspicious. 厳しい = strict/severe. 怪しい = suspicious/doubtful." },
      { t: "meaning", s: "「惜しい」の意味は？", o: ["regrettable; a pity; so close; too good to waste", "joyous; auspicious", "strict; severe", "suspicious; doubtful"], a: 0, e: "惜しい expresses regret over a near-miss or waste (惜しい！= so close!, 時間が惜しい = time is too precious to waste, 名残惜しい = sad to part)." }
    ]
  },
  {
    id: "n2-0501", w: "恩恵", r: "おんけい", m: "benefit; blessing; boon; favor", c: "noun", lv: 1,
    ex: [{ jp: "私たちは自然の恩恵を受けている。", en: "We receive the blessings of nature." }],
    qs: [
      { t: "fitb", s: "技術の発展の＿＿＿＿で、生活は格段に便利になった。", en: "Thanks to the benefits of technological progress, life has become far more convenient.", o: ["恩恵", "負担", "被害", "犠牲"], a: 0, e: "恩恵(おんけい) = a benefit/blessing/boon (good one receives). 負担(ふたん) = a burden/load. 被害(ひがい) = damage/harm suffered. 犠牲(ぎせい) = a sacrifice/victim." },
      { t: "meaning", s: "「恩恵」の意味は？", o: ["benefit; blessing; boon; favor", "a burden; a load", "damage; harm suffered", "a sacrifice; a victim"], a: 0, e: "恩恵 is a benefit or blessing received (恩恵を受ける = receive benefits, 自然の恩恵 = nature's bounty)." }
    ]
  },
  {
    id: "n2-0502", w: "解答", r: "かいとう", m: "answer; solution (to a problem with a correct answer)", c: "noun", lv: 1,
    ex: [{ jp: "試験の解答を見直す。", en: "I review my answers to the exam." }],
    qs: [
      { t: "fitb", s: "この数学の問題の＿＿＿＿は、巻末に載っている。", en: "The solution to this math problem is at the back of the book.", o: ["解答", "回答", "質問", "課題"], a: 0, e: "解答(かいとう) = the answer/solution to a problem (with a correct answer). 回答 = a reply/response to a question or survey. 質問 = a question. 課題(かだい) = a task/assignment/issue to address." },
      { t: "meaning", s: "「解答」の意味は？", o: ["answer; solution to a problem (with a correct answer)", "a reply/response to a question or survey", "a question", "a task; assignment; issue"], a: 0, e: "解答 is solving a problem that has a correct answer (解答用紙 = an answer sheet, 模範解答 = a model answer). 回答 is replying to an inquiry." }
    ]
  },
  {
    id: "n2-0503", w: "学力", r: "がくりょく", m: "academic ability; scholastic proficiency", c: "noun", lv: 1,
    ex: [{ jp: "基礎的な学力を身につける。", en: "To acquire basic academic ability." }],
    qs: [
      { t: "fitb", s: "この試験は、生徒の＿＿＿＿を客観的に測るためのものだ。", en: "This test is meant to objectively measure students' academic ability.", o: ["学力", "体力", "視力", "権力"], a: 0, e: "学力(がくりょく) = academic/scholastic ability (knowledge and skill). 体力 = physical strength/stamina. 視力(しりょく) = eyesight/visual acuity. 権力 = (political) power/authority." },
      { t: "meaning", s: "「学力」の意味は？", o: ["academic ability; scholastic proficiency", "physical strength; stamina", "eyesight; visual acuity", "political power; authority"], a: 0, e: "学力 is one's command of academic content (学力テスト = an achievement test, 学力低下 = a decline in academic ability)." }
    ]
  },
  {
    id: "n2-0504", w: "工芸", r: "こうげい", m: "crafts; craftwork; applied/industrial arts", c: "noun", lv: 1,
    ex: [{ jp: "この地方は伝統工芸で有名だ。", en: "This region is famous for traditional crafts." }],
    qs: [
      { t: "fitb", s: "陶器や漆器などの伝統＿＿＿＿は、職人の手で作られる。", en: "Traditional crafts like pottery and lacquerware are made by artisans' hands.", o: ["工芸", "工業", "農業", "商業"], a: 0, e: "工芸(こうげい) = crafts/craftwork (artistic handmade objects). 工業 = (manufacturing) industry. 農業 = agriculture. 商業 = commerce/trade." },
      { t: "meaning", s: "「工芸」の意味は？", o: ["crafts; craftwork; applied/industrial arts", "manufacturing industry", "agriculture; farming", "commerce; trade"], a: 0, e: "工芸 refers to functional artistic crafts (工芸品 = a craft item, 伝統工芸 = traditional crafts)." }
    ]
  },
  {
    id: "n2-0505", w: "団地", r: "だんち", m: "a housing complex; apartment estate (often public)", c: "noun", lv: 1,
    ex: [{ jp: "私は大きな団地に住んでいる。", en: "I live in a large housing complex." }],
    qs: [
      { t: "fitb", s: "その＿＿＿＿には、何棟もの集合住宅が立ち並んでいる。", en: "In that housing complex, many apartment buildings stand in rows.", o: ["団地", "別荘", "住居", "屋敷"], a: 0, e: "団地(だんち) = a housing complex/apartment estate (multiple buildings, often public). 別荘 = a villa/vacation home. 住居 = a dwelling (general). 屋敷(やしき) = a (large) mansion/estate house." },
      { t: "meaning", s: "「団地」の意味は？", o: ["a housing complex; apartment estate", "a villa; vacation home", "a dwelling (general)", "a (large) mansion; estate house"], a: 0, e: "団地 is a planned cluster of apartment buildings (公団住宅) — common postwar public housing (団地住まい = living in a housing complex)." }
    ]
  },
  {
    id: "n2-0506", w: "安易", r: "あんい", m: "easy-going; facile; taking the easy way (often with negative nuance)", c: "naadj", lv: 1,
    ex: [{ jp: "安易な考えで決めてはいけない。", en: "You mustn't decide with facile thinking." }],
    qs: [
      { t: "fitb", s: "よく調べもせず、＿＿＿＿に結論を出すのは危険だ。", en: "It's dangerous to reach a conclusion too easily without proper investigation.", o: ["安易", "慎重", "困難", "真剣"], a: 0, e: "安易(あんい) = facile/taking the easy way (often criticized as careless). 慎重 = cautious/prudent. 困難(こんなん) = difficult/hardship. 真剣 = serious/earnest." },
      { t: "meaning", s: "「安易」の意味は？", o: ["facile; taking the easy way (often careless)", "cautious; prudent", "difficult; hardship", "serious; earnest"], a: 0, e: "安易 implies doing something too easily without enough thought (安易な発想 = facile thinking, 安易に妥協する = give in too readily). Note: not just 'easy' (易しい)." }
    ]
  },
  {
    id: "n2-0507", w: "休業", r: "きゅうぎょう", m: "closure (of business); suspension of operations; a business holiday", c: "noun", lv: 1,
    ex: [{ jp: "本日は臨時休業します。", en: "We are temporarily closed today." }],
    qs: [
      { t: "fitb", s: "改装工事のため、当店は一週間＿＿＿＿いたします。", en: "Due to renovation work, our store will be closed for one week.", o: ["休業", "開業", "営業", "休憩"], a: 0, e: "休業(きゅうぎょう) = a business closing/suspending operations. 開業(かいぎょう) = opening a business (starting up). 営業(えいぎょう) = doing business/being open. 休憩 = a (short) break/rest." },
      { t: "meaning", s: "「休業」の意味は？", o: ["closure of business; suspension of operations", "opening a business; starting up", "doing business; being open", "a short break; rest"], a: 0, e: "休業 means a business is closed/not operating (臨時休業 = temporary closure, 休業日 = a closed day). Opposite of 営業 (open for business)." }
    ]
  },
  {
    id: "n2-0508", w: "紙幣", r: "しへい", m: "paper money; banknotes; bills", c: "noun", lv: 1,
    ex: [{ jp: "財布に一万円の紙幣が入っている。", en: "There's a 10,000-yen bill in my wallet." }],
    qs: [
      { t: "fitb", s: "自動販売機は、古い＿＿＿＿を受け付けないことがある。", en: "Vending machines sometimes don't accept old banknotes.", o: ["紙幣", "硬貨", "金額", "通貨"], a: 0, e: "紙幣(しへい) = paper money/banknotes. 硬貨(こうか) = coins (metal money). 金額(きんがく) = a monetary amount/sum. 通貨(つうか) = currency (the monetary system, e.g. yen)." },
      { t: "meaning", s: "「紙幣」の意味は？", o: ["paper money; banknotes; bills", "coins; metal money", "a monetary amount; sum", "currency (the monetary system)"], a: 0, e: "紙幣 is paper currency (新紙幣 = new banknotes, 千円紙幣 = a 1,000-yen note). Coins are 硬貨; the currency system is 通貨." }
    ]
  },
  {
    id: "n2-0509", w: "消毒", r: "しょうどく", m: "disinfection; sterilization; sanitizing", c: "noun", lv: 1,
    ex: [{ jp: "傷口を消毒する。", en: "To disinfect a wound." }],
    qs: [
      { t: "fitb", s: "店の入り口で、アルコールで手を＿＿＿＿してから入る。", en: "At the shop entrance, you sanitize your hands with alcohol before entering.", o: ["消毒", "洗濯", "掃除", "清掃"], a: 0, e: "消毒(しょうどく) = disinfection/sterilization (killing germs). 洗濯 = doing laundry. 掃除 = cleaning (sweeping/wiping). 清掃 = cleaning/sanitation (formal, of public spaces)." },
      { t: "meaning", s: "「消毒」の意味は？", o: ["disinfection; sterilization; sanitizing (killing germs)", "doing laundry", "cleaning; sweeping and wiping", "cleaning; sanitation of public spaces"], a: 0, e: "消毒 means killing germs/disinfecting (消毒液 = disinfectant, 手指消毒 = hand sanitizing). Cleaning of dirt is 掃除/清掃." }
    ]
  },
  {
    id: "n2-0510", w: "停車", r: "ていしゃ", m: "stopping (a train/car); a stop", c: "noun", lv: 1,
    ex: [{ jp: "この電車は各駅に停車する。", en: "This train stops at every station." }],
    qs: [
      { t: "fitb", s: "急行は小さな駅には＿＿＿＿せず、通過する。", en: "The express doesn't stop at small stations; it passes through.", o: ["停車", "発車", "乗車", "下車"], a: 0, e: "停車(ていしゃ) = stopping (a vehicle coming to a halt). 発車(はっしゃ) = departure (a vehicle setting off). 乗車 = boarding/getting on. 下車(げしゃ) = getting off/alighting." },
      { t: "meaning", s: "「停車」の意味は？", o: ["stopping a train/car; a stop", "departure; a vehicle setting off", "boarding; getting on", "getting off; alighting"], a: 0, e: "停車 is a vehicle stopping (各駅停車 = a local train stopping at every station, 一時停車 = a brief stop). Opposite of 発車." }
    ]
  },
  {
    id: "n2-0511", w: "的確", r: "てきかく", m: "accurate; precise; to the point; apt", c: "naadj", lv: 1,
    ex: [{ jp: "彼の指示はいつも的確だ。", en: "His instructions are always to the point." }],
    qs: [
      { t: "fitb", s: "医師は症状から、病気を＿＿＿＿に判断した。", en: "From the symptoms, the doctor accurately diagnosed the illness.", o: ["的確", "曖昧", "適当", "余計"], a: 0, e: "的確(てきかく) = accurate/precise/to the point (hitting the mark). 曖昧(あいまい) = vague/ambiguous. 適当 = suitable; (also) half-hearted/random. 余計 = excessive/uncalled-for." },
      { t: "meaning", s: "「的確」の意味は？", o: ["accurate; precise; to the point; apt", "vague; ambiguous", "suitable; or half-hearted/random", "excessive; uncalled-for"], a: 0, e: "的確 means right on target (的確な判断 = a sound, accurate judgment, 的確に答える = answer precisely). Hits the 的 (target) exactly." }
    ]
  },
  {
    id: "n2-0512", w: "分布", r: "ぶんぷ", m: "distribution; how something is spread out", c: "noun", lv: 1,
    ex: [{ jp: "この植物は世界中に分布している。", en: "This plant is distributed all over the world." }],
    qs: [
      { t: "fitb", s: "人口の＿＿＿＿は、都市部に偏っている。", en: "The population distribution is skewed toward urban areas.", o: ["分布", "分類", "分解", "分割"], a: 0, e: "分布(ぶんぷ) = distribution (how things are spread across an area/range). 分類 = classification (sorting into categories). 分解 = disassembly/decomposition. 分割 = dividing into portions/installments." },
      { t: "meaning", s: "「分布」の意味は？", o: ["distribution; how something is spread out", "classification; sorting into categories", "disassembly; decomposition", "dividing into portions or installments"], a: 0, e: "分布 describes how things are spread over an area or range (分布図 = a distribution map, 人口分布 = population distribution)." }
    ]
  },
  {
    id: "n2-0513", w: "薬品", r: "やくひん", m: "chemicals; medicines; pharmaceuticals", c: "noun", lv: 1,
    ex: [{ jp: "実験室には危険な薬品がある。", en: "There are dangerous chemicals in the lab." }],
    qs: [
      { t: "fitb", s: "これらの＿＿＿＿は、混ぜると有毒なガスが発生する。", en: "When these chemicals are mixed, a toxic gas is produced.", o: ["薬品", "薬局", "食品", "製品"], a: 0, e: "薬品(やくひん) = chemicals/medicines (substances). 薬局 = a pharmacy (the shop). 食品(しょくひん) = food products/foodstuffs. 製品 = a finished product." },
      { t: "meaning", s: "「薬品」の意味は？", o: ["chemicals; medicines; pharmaceuticals", "a pharmacy (the shop)", "food products; foodstuffs", "a finished product"], a: 0, e: "薬品 means chemical substances or medicines (化学薬品 = chemicals, 医薬品 = pharmaceuticals). 薬局 is the pharmacy itself." }
    ]
  },
  {
    id: "n2-0514", w: "漁師", r: "りょうし", m: "fisherman", c: "noun", lv: 1,
    ex: [{ jp: "漁師が朝早く船を出した。", en: "The fishermen took their boats out early in the morning." }],
    qs: [
      { t: "fitb", s: "この港町には、代々続く＿＿＿＿の家が多い。", en: "In this port town there are many families of fishermen going back generations.", o: ["漁師", "農家", "猟師", "船長"], a: 0, e: "漁師(りょうし) = a fisherman (catches fish at sea). 農家(のうか) = a farmer/farming household. 猟師(りょうし) = a hunter (same reading りょうし, different kanji — hunts game). 船長(せんちょう) = a ship's captain." },
      { t: "meaning", s: "「漁師」の意味は？", o: ["a fisherman (catches fish)", "a farmer; farming household", "a hunter (of game; homophone 猟師)", "a ship's captain"], a: 0, e: "漁師 catches fish for a living (漁師町 = a fishing village). Beware the homophone 猟師 (りょうし) = a hunter of land game." }
    ]
  },
  {
    id: "n2-0515", w: "重ねる", r: "かさねる", m: "to pile up; to stack; to layer; to repeat (over and over)", c: "verb", lv: 1,
    ex: [{ jp: "皿を重ねて棚にしまう。", en: "I stack the plates and put them in the cupboard." }],
    qs: [
      { t: "fitb", s: "練習を＿＿＿＿ことで、彼は見事な技を身につけた。", en: "By repeating practice over and over, he mastered an impressive technique.", o: ["重ねた", "崩した", "離した", "分けた"], a: 0, e: "重ねる = to stack/layer; to repeat (do over and over). 崩す(くずす) = to break down/demolish. 離す(はなす) = to separate/move apart. 分ける = to divide/split." },
      { t: "meaning", s: "「重ねる」の意味は？", o: ["to pile up; to stack; to layer; to repeat over and over", "to break down; to demolish", "to separate; to move apart", "to divide; to split"], a: 0, e: "重ねる means to layer or repeat (年を重ねる = grow older, 努力を重ねる = make repeated efforts). Intransitive: 重なる (to overlap/pile up)." }
    ]
  },
  {
    id: "n2-0516", w: "高層", r: "こうそう", m: "high-rise; multistory; high-altitude (of layers)", c: "noun", lv: 1,
    ex: [{ jp: "都心には高層ビルが立ち並んでいる。", en: "High-rise buildings line the city center." }],
    qs: [
      { t: "fitb", s: "その＿＿＿＿マンションの最上階からは、街が一望できる。", en: "From the top floor of that high-rise apartment, you can see the whole city.", o: ["高層", "低層", "地下", "平屋"], a: 0, e: "高層(こうそう) = high-rise/multistory (many floors up). 低層(ていそう) = low-rise (few floors). 地下(ちか) = underground/basement. 平屋(ひらや) = a single-story house." },
      { t: "meaning", s: "「高層」の意味は？", o: ["high-rise; multistory; high-altitude (of layers)", "low-rise; few floors", "underground; basement", "a single-story house"], a: 0, e: "高層 describes tall, many-floored structures (高層ビル = a skyscraper, 高層階 = the upper floors). Also 高層雲 = high-altitude clouds." }
    ]
  },
  {
    id: "n2-0517", w: "持参", r: "じさん", m: "bringing (with oneself); bringing along", c: "noun", lv: 1,
    ex: [{ jp: "昼食は各自持参してください。", en: "Please bring your own lunch." }],
    qs: [
      { t: "fitb", s: "会場には筆記用具を＿＿＿＿の上、お越しください。", en: "Please come to the venue bringing your own writing materials.", o: ["持参", "持続", "参加", "参考"], a: 0, e: "持参(じさん) = bringing something with you. 持続(じぞく) = sustaining/lasting (maintaining a state). 参加 = participation/joining in. 参考(さんこう) = reference/consultation (for information)." },
      { t: "meaning", s: "「持参」の意味は？", o: ["bringing (something) with oneself", "sustaining; lasting (a state)", "participation; joining in", "reference; consultation for information"], a: 0, e: "持参 means to bring something along (お弁当を持参する = bring your own lunch, 持参金 = a dowry)." }
    ]
  },
  {
    id: "n2-0518", w: "接する", r: "せっする", m: "to come into contact with; to deal with (people); to border/adjoin", c: "verb", lv: 1,
    ex: [{ jp: "彼は誰にでも優しく接する。", en: "He treats everyone kindly." }],
    qs: [
      { t: "fitb", s: "看護師は、患者に思いやりを持って＿＿＿＿べきだ。", en: "Nurses should deal with patients with compassion.", o: ["接する", "逆らう", "逃げる", "隠れる"], a: 0, e: "接する = to come into contact with / deal with (people); also to border/adjoin. 逆らう(さからう) = to defy/go against. 逃げる = to flee/escape. 隠れる = to hide." },
      { t: "meaning", s: "「接する」の意味は？", o: ["to come into contact with; to deal with (people); to border", "to defy; to go against", "to flee; to escape", "to hide"], a: 0, e: "接する means to interact with or be in contact with (人に接する = deal with people, 海に接する町 = a town bordering the sea, 情報に接する = come across information)." }
    ]
  },
  {
    id: "n2-0519", w: "文献", r: "ぶんけん", m: "literature; references; documentary sources", c: "noun", lv: 1,
    ex: [{ jp: "論文を書くために多くの文献を読んだ。", en: "I read many references to write the paper." }],
    qs: [
      { t: "fitb", s: "主張の根拠として、信頼できる＿＿＿＿を引用する。", en: "As grounds for the argument, I cite reliable references.", o: ["文献", "文章", "文房具", "文字"], a: 0, e: "文献(ぶんけん) = (academic) references/literature/sources. 文章(ぶんしょう) = writing/a passage/sentences. 文房具(ぶんぼうぐ) = stationery (pens, etc.). 文字(もじ) = letters/characters." },
      { t: "meaning", s: "「文献」の意味は？", o: ["literature; references; documentary sources", "writing; a passage; sentences", "stationery; writing supplies", "letters; written characters"], a: 0, e: "文献 means scholarly sources/references (参考文献 = a bibliography/references, 文献調査 = a literature review)." }
    ]
  },
  {
    id: "n2-0520", w: "名所", r: "めいしょ", m: "a famous place; noted scenic/historic spot", c: "noun", lv: 1,
    ex: [{ jp: "京都には名所が多い。", en: "Kyoto has many famous spots." }],
    qs: [
      { t: "fitb", s: "観光バスで、市内の＿＿＿＿を一日で巡った。", en: "By tour bus, we visited the city's famous sights in one day.", o: ["名所", "名物", "名作", "名人"], a: 0, e: "名所(めいしょ) = a famous/scenic place (worth visiting). 名物 = a famous local product/specialty. 名作 = a masterpiece. 名人 = a master/expert." },
      { t: "meaning", s: "「名所」の意味は？", o: ["a famous place; noted scenic/historic spot", "a famous local product; specialty", "a masterpiece; celebrated work", "a master; an expert"], a: 0, e: "名所 is a well-known sightseeing spot (名所旧跡 = scenic spots and historic sites, 名所めぐり = visiting famous places)." }
    ]
  },
  {
    id: "n2-0521", w: "目標", r: "もくひょう", m: "goal; target; aim", c: "noun", lv: 1,
    ex: [{ jp: "今年の目標は日本語能力試験N2に合格することだ。", en: "My goal this year is to pass the JLPT N2." }],
    qs: [
      { t: "fitb", s: "来年の＿＿＿＿は、毎月一冊本を読むことです。", en: "My target for next year is to read one book a month.", o: ["目標", "目的", "目安", "手段"], a: 0, e: "目標(もくひょう) = a concrete goal or target to aim for. 目的(もくてき) = purpose/objective (broader). 目安(めやす) = a rough guide or benchmark. 手段(しゅだん) = means/method." },
      { t: "meaning", s: "「目標」の意味は？", o: ["goal; target; aim", "purpose; objective", "rough guide; benchmark", "means; method"], a: 0, e: "目標 is a specific goal or target (目標達成 = achieving a goal). Unlike 目的 (purpose), 目標 is more concrete and measurable." }
    ]
  },
  {
    id: "n2-0522", w: "達成", r: "たっせい", m: "achievement; accomplishment", c: "noun", lv: 1,
    ex: [{ jp: "長年の努力が実り、ついに目標を達成した。", en: "After years of effort, I finally achieved my goal." }],
    qs: [
      { t: "fitb", s: "プロジェクトの目標を＿＿＿＿するために、チーム全員が残業した。", en: "The whole team worked overtime to accomplish the project goal.", o: ["達成", "完成", "実現", "達する"], a: 0, e: "達成(たっせい)する = to achieve/accomplish a goal. 完成(かんせい) = completion of something (a building, a work). 実現(じつげん) = realization of a dream/plan. 達する = to reach/attain (intransitive)." },
      { t: "meaning", s: "「達成」の意味は？", o: ["achievement; accomplishment", "completion; finishing", "realization; coming true", "arrival; reaching"], a: 0, e: "達成 always pairs with a goal (目標達成, ノルマ達成). 完成 is for completing a product or work. 実現 is for making a dream or plan come true." }
    ]
  },
  {
    id: "n2-0523", w: "提案", r: "ていあん", m: "proposal; suggestion", c: "noun", lv: 1,
    ex: [{ jp: "会議で彼女が具体的な改善案を提案した。", en: "She proposed a concrete improvement plan at the meeting." }],
    qs: [
      { t: "fitb", s: "新しいシステムの導入を＿＿＿＿したが、コストの問題で却下された。", en: "I proposed introducing a new system, but it was rejected due to cost issues.", o: ["提案", "提出", "提供", "提示"], a: 0, e: "提案(ていあん)する = to propose or suggest an idea. 提出(ていしゅつ)する = to submit (a document). 提供(ていきょう)する = to provide/offer (services, food). 提示(ていじ)する = to present/show (evidence, a price)." },
      { t: "meaning", s: "「提案」の意味は？", o: ["proposal; suggestion", "submission; handing in", "provision; offering", "presentation; showing"], a: 0, e: "提案 is an idea or plan you put forward for others to consider. 提出 is submitting documents. 提供 is providing something. 提示 is displaying or showing something." }
    ]
  },
  {
    id: "n2-0524", w: "判断", r: "はんだん", m: "judgment; decision; assessment", c: "noun", lv: 1,
    ex: [{ jp: "状況をよく見て、自分で判断するべきだ。", en: "You should observe the situation carefully and make your own judgment." }],
    qs: [
      { t: "fitb", s: "緊急の場合は、自分の＿＿＿＿で行動することが求められる。", en: "In an emergency, you are expected to act on your own judgment.", o: ["判断", "判決", "判定", "決断"], a: 0, e: "判断(はんだん) = judgment/assessment based on information. 判決(はんけつ) = a court verdict. 判定(はんてい) = a ruling/determination (e.g. in sports). 決断(けつだん) = a decisive resolution, often involving courage." },
      { t: "meaning", s: "「判断」の意味は？", o: ["judgment; decision; assessment", "court verdict; ruling", "determination; referee's decision", "resolution; decisive choice"], a: 0, e: "判断 is the mental process of assessing a situation and reaching a conclusion. 判決 is specifically a court verdict. 決断 implies a bold, final choice." }
    ]
  },
  {
    id: "n2-0525", w: "意識", r: "いしき", m: "consciousness; awareness", c: "noun", lv: 1,
    ex: [{ jp: "彼は環境問題に対する意識が非常に高い。", en: "He has a very strong awareness of environmental issues." }],
    qs: [
      { t: "fitb", s: "事故の衝撃で＿＿＿＿を失い、救急車で運ばれた。", en: "I lost consciousness from the impact of the accident and was taken by ambulance.", o: ["意識", "記憶", "感覚", "意欲"], a: 0, e: "意識(いしき)を失う = to lose consciousness. 記憶(きおく)を失う = to lose memory. 感覚(かんかく)を失う = to lose sensation/feeling. 意欲(いよく) = motivation/drive (can't be 'lost' this way)." },
      { t: "meaning", s: "「意識」の意味は？", o: ["consciousness; awareness", "memory; recollection", "sensation; feeling", "motivation; drive"], a: 0, e: "意識 covers both physical consciousness (意識を失う = pass out) and mental awareness (環境意識 = environmental consciousness). 記憶 is memory. 感覚 is physical sensation." }
    ]
  },
  {
    id: "n2-0526", w: "影響", r: "えいきょう", m: "influence; effect; impact", c: "noun", lv: 1,
    ex: [{ jp: "親の生き方は子どもの価値観に大きな影響を与える。", en: "Parents' way of living has a great influence on children's values." }],
    qs: [
      { t: "fitb", s: "台風の＿＿＿＿で、多くの航空便が欠航した。", en: "Due to the impact of the typhoon, many flights were cancelled.", o: ["影響", "効果", "作用", "原因"], a: 0, e: "影響(えいきょう) = influence/impact (often negative or neutral). 効果(こうか) = effect/effectiveness (usually positive). 作用(さよう) = action/effect (often scientific). 原因(げんいん) = cause/reason." },
      { t: "meaning", s: "「影響」の意味は？", o: ["influence; effect; impact", "effect; effectiveness", "action; reaction", "cause; reason"], a: 0, e: "影響を与える = to exert influence; 影響を受ける = to be influenced. 効果 is a positive result/effectiveness. 原因 is the cause that produces an effect." }
    ]
  },
  {
    id: "n2-0527", w: "状況", r: "じょうきょう", m: "situation; circumstances; state of affairs", c: "noun", lv: 1,
    ex: [{ jp: "現在の状況では、すぐに決断するのは難しい。", en: "In the current situation, it is difficult to make an immediate decision." }],
    qs: [
      { t: "fitb", s: "被災地の＿＿＿＿をリアルタイムで報告するためにレポーターが現地に入った。", en: "A reporter entered the disaster area to report on the situation in real time.", o: ["状況", "状態", "状況証拠", "情報"], a: 0, e: "状況(じょうきょう) = the overall situation/circumstances (dynamic). 状態(じょうたい) = the state/condition of something (more static). 状況証拠 = circumstantial evidence. 情報(じょうほう) = information." },
      { t: "meaning", s: "「状況」の意味は？", o: ["situation; circumstances", "state; condition", "circumstantial evidence", "information; news"], a: 0, e: "状況 refers to the overall dynamic circumstances (戦況 = war situation, 経営状況 = business situation). 状態 is the condition of a specific thing (健康状態 = health condition)." }
    ]
  },
  {
    id: "n2-0528", w: "対応", r: "たいおう", m: "response; dealing with; correspondence", c: "noun", lv: 1,
    ex: [{ jp: "顧客からのクレームには迅速に対応することが大切だ。", en: "It is important to respond quickly to customer complaints." }],
    qs: [
      { t: "fitb", s: "緊急事態への＿＿＿＿が遅れたため、被害が拡大した。", en: "The damage expanded because the response to the emergency was delayed.", o: ["対応", "対策", "対処", "反応"], a: 0, e: "対応(たいおう) = responding to/handling a situation. 対策(たいさく) = a countermeasure/plan (already in earlier batches). 対処(たいしょ) = coping with/dealing with (more practical). 反応(はんのう) = reaction (often physical/automatic)." },
      { t: "meaning", s: "「対応」の意味は？", o: ["response; dealing with", "countermeasure; plan", "coping; practical handling", "reaction; response"], a: 0, e: "対応する = to respond to, handle, or correspond to something. 対策 is a prepared plan. 反応 is an instinctive or automatic reaction." }
    ]
  },
  {
    id: "n2-0529", w: "傾向", r: "けいこう", m: "tendency; trend; inclination", c: "noun", lv: 1,
    ex: [{ jp: "最近の若者は活字離れの傾向がある。", en: "Young people these days tend to be moving away from print media." }],
    qs: [
      { t: "fitb", s: "彼は物事を悲観的に考える＿＿＿＿がある。", en: "He has a tendency to think about things pessimistically.", o: ["傾向", "癖", "性質", "習慣"], a: 0, e: "傾向(けいこう) = a statistical or behavioral tendency (often ~がある). 癖(くせ) = a personal habit or quirk. 性質(せいしつ) = inherent nature/character. 習慣(しゅうかん) = an established habit or custom." },
      { t: "meaning", s: "「傾向」の意味は？", o: ["tendency; trend; inclination", "habit; quirk", "nature; character", "established custom; routine"], a: 0, e: "傾向 describes a pattern or trend (上昇傾向 = upward trend, 傾向がある = tends to). 癖 is a personal habit. 習慣 is a regular practice." }
    ]
  },
  {
    id: "n2-0530", w: "程度", r: "ていど", m: "degree; extent; level", c: "noun", lv: 1,
    ex: [{ jp: "どの程度の日本語力があれば、この仕事に応募できますか？", en: "What level of Japanese ability do you need to apply for this job?" }],
    qs: [
      { t: "fitb", s: "痛みの＿＿＿＿によって、治療法が変わります。", en: "The treatment method changes depending on the degree of pain.", o: ["程度", "程", "限度", "基準"], a: 0, e: "程度(ていど) = degree/extent/level (e.g. 軽い程度 = to a light degree). 程(ほど) = degree/about (more colloquial: この程 = this much). 限度(げんど) = limit/maximum. 基準(きじゅん) = standard/criterion." },
      { t: "meaning", s: "「程度」の意味は？", o: ["degree; extent; level", "about; roughly (colloquial)", "limit; maximum", "standard; criterion"], a: 0, e: "程度 measures how much or to what level (低程度 = low level, ある程度 = to some degree). 限度 is the upper limit. 基準 is a benchmark or standard for judgment." }
    ]
  },
  {
    id: "n2-0531", w: "基本", r: "きほん", m: "basics; fundamentals; foundation", c: "noun", lv: 1,
    ex: [{ jp: "料理の基本は包丁の使い方だと言われる。", en: "It is said that the basics of cooking come down to how to use a knife." }],
    qs: [
      { t: "fitb", s: "まず＿＿＿＿をしっかり身につけてから、応用問題に挑戦しよう。", en: "Let's firmly master the fundamentals first, then take on applied problems.", o: ["基本", "基礎", "原則", "要点"], a: 0, e: "基本(きほん) = the basics/fundamentals of a skill or field. 基礎(きそ) = foundation/base (often physical or structural, also used figuratively). 原則(げんそく) = a principle or rule. 要点(ようてん) = the main points/key points." },
      { t: "meaning", s: "「基本」の意味は？", o: ["basics; fundamentals; foundation", "physical foundation; base", "principle; rule", "main points; key points"], a: 0, e: "基本 and 基礎 overlap but 基本 is often used for skill basics (基本動作 = basic moves), while 基礎 emphasizes the underlying foundation (基礎工事 = foundation work)." }
    ]
  },
  {
    id: "n2-0532", w: "手段", r: "しゅだん", m: "means; method; way", c: "noun", lv: 1,
    ex: [{ jp: "目的のためなら手段を選ばないという考え方には同意できない。", en: "I cannot agree with the idea that the ends justify the means." }],
    qs: [
      { t: "fitb", s: "公共交通機関が発達していないこの地域では、車が唯一の移動＿＿＿＿だ。", en: "In this area where public transportation is underdeveloped, a car is the only means of transport.", o: ["手段", "方法", "方針", "道具"], a: 0, e: "手段(しゅだん) = a means or instrument to achieve a goal (移動手段 = means of transport). 方法(ほうほう) = method/way (more general). 方針(ほうしん) = a policy or direction. 道具(どうぐ) = a tool or utensil." },
      { t: "meaning", s: "「手段」の意味は？", o: ["means; method; way to achieve a goal", "general method; way of doing", "policy; course of action", "tool; utensil"], a: 0, e: "手段 is instrumental — a means used to achieve an end (手段を選ばない = by any means necessary). 方法 is more neutral (やり方 = how to do it). 道具 is a physical tool." }
    ]
  },
  {
    id: "n2-0533", w: "経済", r: "けいざい", m: "economy; economics", c: "noun", lv: 1,
    ex: [{ jp: "世界的な不況が日本の経済にも影響を与えている。", en: "The global recession is also affecting Japan's economy." }],
    qs: [
      { t: "fitb", s: "彼は大学で＿＿＿＿学を専攻し、卒業後は銀行に就職した。", en: "He majored in economics at university and got a job at a bank after graduation.", o: ["経済", "政治", "商業", "金融"], a: 0, e: "経済(けいざい) = economy/economics. 政治(せいじ) = politics. 商業(しょうぎょう) = commerce/trade. 金融(きんゆう) = finance/banking (more specific)." },
      { t: "meaning", s: "「経済」の意味は？", o: ["economy; economics", "politics; government", "commerce; trade", "finance; banking"], a: 0, e: "経済 covers the broad economy and the academic study of economics (経済成長 = economic growth, 経済学部 = faculty of economics). 金融 is the specific financial/monetary sector." }
    ]
  },
  {
    id: "n2-0534", w: "政治", r: "せいじ", m: "politics; government; governance", c: "noun", lv: 1,
    ex: [{ jp: "若者の政治への関心が年々低下していると言われる。", en: "It is said that young people's interest in politics is declining year by year." }],
    qs: [
      { t: "fitb", s: "彼女は＿＿＿＿家として活動するかたわら、地域のボランティアにも力を入れている。", en: "She is active as a politician while also putting energy into community volunteering.", o: ["政治", "政策", "行政", "外交"], a: 0, e: "政治(せいじ)家 = politician. 政策(せいさく) = policy (政治家が政策を作る). 行政(ぎょうせい) = administration/government operations. 外交(がいこう) = diplomacy." },
      { t: "meaning", s: "「政治」の意味は？", o: ["politics; government; governance", "policy; measure", "administration; government operations", "diplomacy; foreign relations"], a: 0, e: "政治 is the broad field of politics (政治家 = politician, 政治体制 = political system). 政策 is a specific policy. 行政 is the administration/bureaucracy that implements policy." }
    ]
  },
  {
    id: "n2-0535", w: "技術", r: "ぎじゅつ", m: "technology; technique; skill", c: "noun", lv: 1,
    ex: [{ jp: "日本の製造業は高い技術力で世界をリードしてきた。", en: "Japan's manufacturing industry has led the world with its high level of technology." }],
    qs: [
      { t: "fitb", s: "最新の医療＿＿＿＿のおかげで、以前は治せなかった病気が治るようになった。", en: "Thanks to the latest medical technology, diseases that could not be cured before can now be treated.", o: ["技術", "技能", "技法", "技巧"], a: 0, e: "技術(ぎじゅつ) = technology or technical skill (general, broad). 技能(ぎのう) = a practical skill or trade skill. 技法(ぎほう) = a technique or method (often artistic). 技巧(ぎこう) = artistry or clever technique." },
      { t: "meaning", s: "「技術」の意味は？", o: ["technology; technique; skill", "practical skill; trade skill", "artistic technique; method", "artistry; clever technique"], a: 0, e: "技術 is broad — covering technology (IT技術), engineering skill, and general technique. 技能 is more specific to hands-on trades. 技巧 implies refined, artistic skill." }
    ]
  },
  {
    id: "n2-0536", w: "研究", r: "けんきゅう", m: "research; study; investigation", c: "noun", lv: 1,
    ex: [{ jp: "彼女は癌の治療法について十年以上研究を続けている。", en: "She has been conducting research on cancer treatment for over ten years." }],
    qs: [
      { t: "fitb", s: "大学院では気候変動を専門に＿＿＿＿するつもりだ。", en: "I plan to specialize in climate change research at graduate school.", o: ["研究", "調査", "分析", "考察"], a: 0, e: "研究(けんきゅう)する = to research/study (long-term, systematic). 調査(ちょうさ)する = to investigate/survey (data gathering). 分析(ぶんせき)する = to analyze. 考察(こうさつ)する = to examine/contemplate (more philosophical)." },
      { t: "meaning", s: "「研究」の意味は？", o: ["research; study; investigation", "survey; fact-finding", "analysis; breakdown", "examination; contemplation"], a: 0, e: "研究 is systematic, long-term academic inquiry (研究者 = researcher, 研究室 = lab). 調査 is more about gathering information. 分析 is analyzing existing data." }
    ]
  },
  {
    id: "n2-0537", w: "教育", r: "きょういく", m: "education; upbringing", c: "noun", lv: 1,
    ex: [{ jp: "子どもへの教育に多くの費用をかける家庭が増えている。", en: "The number of families spending a lot on their children's education is increasing." }],
    qs: [
      { t: "fitb", s: "彼女は小学校で二十年間＿＿＿＿に携わってきたベテラン教師だ。", en: "She is a veteran teacher who has been involved in education at the elementary school for twenty years.", o: ["教育", "指導", "授業", "研修"], a: 0, e: "教育(きょういく) = education as a broad system or act. 指導(しどう) = guidance/instruction (more direct). 授業(じゅぎょう) = a class/lesson. 研修(けんしゅう) = training/a training program." },
      { t: "meaning", s: "「教育」の意味は？", o: ["education; upbringing", "guidance; instruction", "class; lesson", "training program"], a: 0, e: "教育 is the broad concept of education (教育制度 = education system, 教育現場 = educational setting). 指導 is direct, hands-on instruction. 授業 is a single class session." }
    ]
  },
  {
    id: "n2-0538", w: "環境", r: "かんきょう", m: "environment; surroundings; circumstances", c: "noun", lv: 1,
    ex: [{ jp: "工場の排水が川を汚染し、周辺の環境に深刻なダメージを与えた。", en: "Factory wastewater polluted the river and caused serious damage to the surrounding environment." }],
    qs: [
      { t: "fitb", s: "子どもは育つ＿＿＿＿によって大きく変わると言われる。", en: "It is said that children change greatly depending on the environment in which they grow up.", o: ["環境", "状況", "境遇", "条件"], a: 0, e: "環境(かんきょう) = environment/surroundings (broad: natural, living, work). 状況(じょうきょう) = situation/circumstances (temporary/dynamic). 境遇(きょうぐう) = personal circumstances/life situation. 条件(じょうけん) = conditions/requirements." },
      { t: "meaning", s: "「環境」の意味は？", o: ["environment; surroundings; circumstances", "situation; state of affairs", "personal circumstances; lot in life", "conditions; requirements"], a: 0, e: "環境 is both the natural environment (自然環境) and one's living/working surroundings (職場環境 = work environment). 境遇 is more about personal fate/life situation." }
    ]
  },
  {
    id: "n2-0539", w: "税金", r: "ぜいきん", m: "tax; taxation", c: "noun", lv: 1,
    ex: [{ jp: "収入が増えるにつれて、払う税金も多くなる。", en: "As income increases, the taxes you pay also increase." }],
    qs: [
      { t: "fitb", s: "消費税は買い物をするたびに払う＿＿＿＿の一種だ。", en: "Consumption tax is a type of tax paid every time you go shopping.", o: ["税金", "関税", "料金", "罰金"], a: 0, e: "税金(ぜいきん) = tax in general (income tax, consumption tax, etc.). 関税(かんぜい) = customs duty/tariff. 料金(りょうきん) = a fee/charge. 罰金(ばっきん) = a fine/penalty." },
      { t: "meaning", s: "「税金」の意味は？", o: ["tax; taxation", "customs duty; tariff", "fee; charge", "fine; penalty"], a: 0, e: "税金 is any government-levied tax (消費税 = consumption tax, 所得税 = income tax). 関税 is specifically for imported goods. 罰金 is a punishment-based payment." }
    ]
  },
  {
    id: "n2-0540", w: "収入", r: "しゅうにゅう", m: "income; revenue; earnings", c: "noun", lv: 1,
    ex: [{ jp: "副業を始めてから、月々の収入が大幅に増えた。", en: "Since starting a side job, my monthly income has increased significantly." }],
    qs: [
      { t: "fitb", s: "固定の＿＿＿＿がないと、ローンの審査が通りにくい。", en: "Without a fixed income, it is difficult to pass a loan screening.", o: ["収入", "所得", "給与", "報酬"], a: 0, e: "収入(しゅうにゅう) = income/earnings (total money received from all sources). 所得(しょとく) = income (formal term used for taxes). 給与(きゅうよ) = salary/wages (already in earlier batches). 報酬(ほうしゅう) = remuneration/reward/fee." },
      { t: "meaning", s: "「収入」の意味は？", o: ["income; revenue; earnings", "taxable income (formal)", "salary; wages", "remuneration; reward"], a: 0, e: "収入 is total income from all sources. 所得 is the formal term used in tax contexts (所得税 = income tax). 給与 is specifically a salary from employment. 報酬 is compensation for specific services." }
    ]
  },
  {
    id: "n2-0541", w: "消費", r: "しょうひ", m: "consumption; spending", c: "noun", lv: 1,
    ex: [{ jp: "電力の消費を抑えるために、省エネ家電に買い替えた。", en: "I replaced appliances with energy-efficient ones to reduce electricity consumption." }],
    qs: [
      { t: "fitb", s: "若者の車離れが進み、自動車の国内＿＿＿＿が落ち込んでいる。", en: "As young people move away from cars, domestic automobile consumption is declining.", o: ["消費", "需要", "購入", "販売"], a: 0, e: "消費(しょうひ) = consumption (using up a product/resource). 需要(じゅよう) = demand (economic desire to buy). 購入(こうにゅう) = purchasing/buying (the act). 販売(はんばい) = sales/selling (from the seller's side)." },
      { t: "meaning", s: "「消費」の意味は？", o: ["consumption; spending; using up", "demand; desire to purchase", "purchasing; buying", "sales; selling"], a: 0, e: "消費 is the act of using up resources or spending (消費者 = consumer, 消費税 = consumption tax). 需要 is the economic concept of demand. 購入 is the act of buying." }
    ]
  },
  {
    id: "n2-0542", w: "需要", r: "じゅよう", m: "demand (economic)", c: "noun", lv: 1,
    ex: [{ jp: "観光シーズンにはホテルの需要が急増する。", en: "During the tourist season, demand for hotels increases sharply." }],
    qs: [
      { t: "fitb", s: "その商品は品質が高く、国内外で高い＿＿＿＿がある。", en: "The product is high quality and has high demand both domestically and abroad.", o: ["需要", "人気", "供給", "評判"], a: 0, e: "需要(じゅよう) = demand (economic term: the amount people want to buy). 人気(にんき) = popularity. 供給(きょうきゅう) = supply (the counterpart of 需要). 評判(ひょうばん) = reputation/word of mouth." },
      { t: "meaning", s: "「需要」の意味は？", o: ["demand (economic)", "popularity", "supply (economic)", "reputation; word of mouth"], a: 0, e: "需要 is the economic concept of demand (需給バランス = supply-demand balance, 需要が高まる = demand rises). Its counterpart is 供給(きょうきゅう) = supply." }
    ]
  },
  {
    id: "n2-0543", w: "企業", r: "きぎょう", m: "company; corporation; enterprise", c: "noun", lv: 1,
    ex: [{ jp: "この企業は創業百年を超える老舗で、国内外に多くの拠点を持つ。", en: "This company is a long-established firm with over 100 years of history, with many bases at home and abroad." }],
    qs: [
      { t: "fitb", s: "大手＿＿＿＿に就職することが、必ずしも幸せにつながるとは限らない。", en: "Getting a job at a large corporation does not necessarily lead to happiness.", o: ["企業", "会社", "会社員", "法人"], a: 0, e: "企業(きぎょう) = a company/enterprise (formal term, especially for listed or large companies). 会社(かいしゃ) = company (general/everyday). 会社員(かいしゃいん) = a company employee. 法人(ほうじん) = a legal entity/corporation (legal term)." },
      { t: "meaning", s: "「企業」の意味は？", o: ["company; corporation; enterprise", "company (general term)", "company employee", "legal entity; corporation"], a: 0, e: "企業 is a more formal term for a business organization (大企業 = large corporation, 中小企業 = small and medium enterprises). 会社 is the everyday word. 法人 is the legal category." }
    ]
  },
  {
    id: "n2-0544", w: "労働", r: "ろうどう", m: "labor; work; toil", c: "noun", lv: 1,
    ex: [{ jp: "過重労働が原因で倒れる社員が後を絶たない。", en: "There is no end to the number of employees collapsing due to overwork." }],
    qs: [
      { t: "fitb", s: "日本では＿＿＿＿時間が長く、ワークライフバランスが問題になっている。", en: "In Japan, working hours are long and work-life balance has become an issue.", o: ["労働", "勤務", "作業", "仕事"], a: 0, e: "労働(ろうどう)時間 = working hours (legal/economic term). 勤務(きんむ)時間 = hours of service/work (company/official term). 作業(さぎょう)時間 = work/task time (focused on a specific task). 仕事(しごと)時間 = work hours (colloquial)." },
      { t: "meaning", s: "「労働」の意味は？", o: ["labor; work; toil", "service; duty (official)", "task work; operation", "job; work (everyday)"], a: 0, e: "労働 is the formal/economic term for labor (労働者 = worker/laborer, 労働組合 = labor union, 労働基準法 = Labor Standards Act). 仕事 is the everyday word for work." }
    ]
  },
  {
    id: "n2-0545", w: "専門", r: "せんもん", m: "specialty; field of expertise; major", c: "noun", lv: 1,
    ex: [{ jp: "彼女の専門は神経科学で、大学で講義も持っている。", en: "Her specialty is neuroscience, and she also teaches lectures at a university." }],
    qs: [
      { t: "fitb", s: "この病気は一般の内科ではなく、＿＿＿＿医に診てもらうべきだ。", en: "For this illness, you should see a specialist rather than a general physician.", o: ["専門", "担当", "主治", "外来"], a: 0, e: "専門(せんもん)医 = specialist (doctor). 担当(たんとう)医 = attending doctor (your assigned doctor). 主治(しゅじ)医 = primary/treating physician. 外来(がいらい)は 'outpatient' (外来診療 = outpatient care)." },
      { t: "meaning", s: "「専門」の意味は？", o: ["specialty; field of expertise", "person in charge; assigned role", "treating; primary (medical)", "outpatient; external"], a: 0, e: "専門 means a specific field of expertise (専門家 = specialist/expert, 専門学校 = vocational school, 専門用語 = technical term)." }
    ]
  },
  {
    id: "n2-0546", w: "計画", r: "けいかく", m: "plan; project; scheme", c: "noun", lv: 1,
    ex: [{ jp: "旅行の計画を立てるのに一週間かかった。", en: "It took a week to make the travel plan." }],
    qs: [
      { t: "fitb", s: "来年の春に新工場を建設する＿＿＿＿が発表された。", en: "A plan to build a new factory next spring has been announced.", o: ["計画", "予定", "企画", "方針"], a: 0, e: "計画(けいかく) = a plan with concrete steps (計画を立てる = to draw up a plan). 予定(よてい) = a scheduled plan/appointment (more tentative). 企画(きかく) = a project or creative proposal. 方針(ほうしん) = a policy or direction." },
      { t: "meaning", s: "「計画」の意味は？", o: ["plan; project; scheme", "schedule; appointment", "creative project; proposal", "policy; direction"], a: 0, e: "計画 is a structured plan with steps to achieve a goal (五か年計画 = five-year plan). 予定 is a less formal schedule. 企画 emphasizes creativity (イベント企画 = event planning)." }
    ]
  },
  {
    id: "n2-0547", w: "目的", r: "もくてき", m: "purpose; objective; aim", c: "noun", lv: 1,
    ex: [{ jp: "この旅の目的は仕事ではなく、完全にリフレッシュすることだ。", en: "The purpose of this trip is not work but to completely refresh myself." }],
    qs: [
      { t: "fitb", s: "何の＿＿＿＿でここに来たのか、正直に話してほしい。", en: "I want you to honestly tell me what purpose you came here for.", o: ["目的", "目標", "用件", "意図"], a: 0, e: "目的(もくてき) = purpose/aim (why you are doing something). 目標(もくひょう) = a specific target/goal (what you aim to achieve). 用件(ようけん) = business/matter to attend to. 意図(いと) = intent/intention." },
      { t: "meaning", s: "「目的」の意味は？", o: ["purpose; objective; aim", "specific target; goal", "business to attend to", "intent; intention"], a: 0, e: "目的 is the reason or purpose behind an action (目的地 = destination, 目的語 = object (grammar)). 目標 is a concrete target. 意図 implies deliberate planning." }
    ]
  },
  {
    id: "n2-0548", w: "費用", r: "ひよう", m: "cost; expense; expenditure", c: "noun", lv: 1,
    ex: [{ jp: "修理に予想以上の費用がかかり、困ってしまった。", en: "The repair cost more than expected, and I was at a loss." }],
    qs: [
      { t: "fitb", s: "留学にかかる＿＿＿＿を節約するため、アルバイトを掛け持ちしている。", en: "I am holding multiple part-time jobs to save on the expenses for studying abroad.", o: ["費用", "料金", "代金", "出費"], a: 0, e: "費用(ひよう) = costs/expenses (general term, often for projects or services). 料金(りょうきん) = a fee/charge (for utilities, transport). 代金(だいきん) = the price/payment for goods. 出費(しゅっぴ) = an outgoing expense." },
      { t: "meaning", s: "「費用」の意味は？", o: ["cost; expense; expenditure", "fee; charge", "price; payment for goods", "outgoing expense; outlay"], a: 0, e: "費用 is a broad term for the money required (医療費用 = medical costs, 費用対効果 = cost-effectiveness). 料金 is a set fee. 代金 is the price of a product." }
    ]
  },
  {
    id: "n2-0549", w: "価値", r: "かち", m: "value; worth", c: "noun", lv: 1,
    ex: [{ jp: "この絵画の本当の価値に気づいた時、それはすでに売れていた。", en: "By the time I realized the true value of this painting, it had already been sold." }],
    qs: [
      { t: "fitb", s: "長く使えるものを選ぶことが、本当の意味での＿＿＿＿のある買い物だと思う。", en: "I think choosing something that can be used for a long time is truly a worthwhile purchase.", o: ["価値", "意義", "意味", "値段"], a: 0, e: "価値(かち) = value/worth (intrinsic or monetary). 意義(いぎ) = significance/meaningfulness. 意味(いみ) = meaning/sense. 値段(ねだん) = price/cost." },
      { t: "meaning", s: "「価値」の意味は？", o: ["value; worth", "significance; meaningfulness", "meaning; sense", "price; cost"], a: 0, e: "価値 is intrinsic worth (価値観 = values/value system, 価値がある = to have worth). 意義 is the significance of an action. 値段 is the monetary price." }
    ]
  },
  {
    id: "n2-0550", w: "能力", r: "のうりょく", m: "ability; capability; capacity", c: "noun", lv: 1,
    ex: [{ jp: "言語学習の能力には個人差があるが、努力で補えることも多い。", en: "There are individual differences in language learning ability, but much can be compensated for by effort." }],
    qs: [
      { t: "fitb", s: "彼は高い分析＿＿＿＿を持ち、複雑なデータも素早く整理できる。", en: "He has high analytical ability and can quickly organize even complex data.", o: ["能力", "実力", "技能", "素質"], a: 0, e: "能力(のうりょく) = general ability/capacity (思考能力 = thinking ability). 実力(じつりょく) = actual/demonstrated ability. 技能(ぎのう) = practical skill. 素質(そしつ) = natural aptitude/talent." },
      { t: "meaning", s: "「能力」の意味は？", o: ["ability; capability; capacity", "actual demonstrated ability", "practical skill; trade skill", "natural aptitude; talent"], a: 0, e: "能力 is general capacity or faculty (能力開発 = capability development, 支払い能力 = ability to pay). 実力 is proven, current ability. 素質 is innate talent." }
    ]
  },
  {
    id: "n2-0551", w: "個性", r: "こせい", m: "individuality; unique character; personality", c: "noun", lv: 1,
    ex: [{ jp: "この学校は生徒一人一人の個性を大切にした教育を行っている。", en: "This school provides education that values the individuality of each student." }],
    qs: [
      { t: "fitb", s: "彼のデザインはいつも独特の＿＿＿＿があり、一目でわかる。", en: "His designs always have a distinctive individuality and are recognizable at a glance.", o: ["個性", "特徴", "性格", "雰囲気"], a: 0, e: "個性(こせい) = individuality/uniqueness of a person. 特徴(とくちょう) = a distinctive feature/characteristic. 性格(せいかく) = character/personality (temperament). 雰囲気(ふんいき) = atmosphere/vibe." },
      { t: "meaning", s: "「個性」の意味は？", o: ["individuality; unique character", "distinctive feature; characteristic", "personality; temperament", "atmosphere; vibe"], a: 0, e: "個性 is what makes a person uniquely themselves (個性的 = individualistic, 個性を活かす = to make use of one's individuality). 特徴 is a specific observable trait." }
    ]
  },
  {
    id: "n2-0552", w: "態度", r: "たいど", m: "attitude; manner; stance", c: "noun", lv: 1,
    ex: [{ jp: "面接では、知識だけでなく態度も重要な評価基準になる。", en: "In interviews, attitude as well as knowledge is an important evaluation criterion." }],
    qs: [
      { t: "fitb", s: "上司への生意気な＿＿＿＿が問題になり、注意を受けた。", en: "His impudent attitude toward his boss became a problem, and he was reprimanded.", o: ["態度", "言動", "行動", "振る舞い"], a: 0, e: "態度(たいど) = attitude/manner (how one carries oneself). 言動(げんどう) = words and actions. 行動(こうどう) = behavior/action. 振る舞い(ふるまい) = behavior/conduct (more formal/literary)." },
      { t: "meaning", s: "「態度」の意味は？", o: ["attitude; manner; stance", "words and actions", "behavior; action", "conduct; comportment"], a: 0, e: "態度 is one's outward manner or bearing (態度が悪い = bad attitude, はっきりした態度をとる = to take a clear stance). 言動 includes both speech and action." }
    ]
  },
  {
    id: "n2-0553", w: "習慣", r: "しゅうかん", m: "habit; custom; practice", c: "noun", lv: 1,
    ex: [{ jp: "毎朝ジョギングする習慣がついてから、体調がよくなった。", en: "Since I developed the habit of jogging every morning, my health has improved." }],
    qs: [
      { t: "fitb", s: "海外に行くと、日本とは異なる文化や生活＿＿＿＿に驚くことがある。", en: "When going abroad, you are sometimes surprised by the cultural and lifestyle customs that differ from Japan.", o: ["習慣", "慣習", "癖", "風俗"], a: 0, e: "習慣(しゅうかん) = a habit or regular practice (personal or cultural). 慣習(かんしゅう) = established custom/convention (more institutional). 癖(くせ) = a personal quirk/habit. 風俗(ふうぞく) = customs/morals (often refers to traditional practices or the adult entertainment industry)." },
      { t: "meaning", s: "「習慣」の意味は？", o: ["habit; custom; regular practice", "established custom; convention", "personal quirk; mannerism", "traditional custom; morals"], a: 0, e: "習慣 covers both personal habits (食事の習慣 = eating habits) and cultural customs (日本の習慣 = Japanese customs). 慣習 is more set and institutional." }
    ]
  },
  {
    id: "n2-0554", w: "常識", r: "じょうしき", m: "common sense; general knowledge", c: "noun", lv: 1,
    ex: [{ jp: "社会人としての常識を身につけることは、就職活動の前に大切だ。", en: "It is important to acquire common sense as a working adult before job hunting." }],
    qs: [
      { t: "fitb", s: "その発言は社会の＿＿＿＿から外れており、批判を浴びた。", en: "That statement deviated from social common sense and drew criticism.", o: ["常識", "良識", "道徳", "規範"], a: 0, e: "常識(じょうしき) = common sense / what is generally accepted. 良識(りょうしき) = good sense/sound judgment (higher standard). 道徳(どうとく) = morality/ethics. 規範(きはん) = a norm/standard." },
      { t: "meaning", s: "「常識」の意味は？", o: ["common sense; general knowledge", "sound judgment; good sense", "morality; ethics", "norm; standard"], a: 0, e: "常識 is what any reasonable person knows or follows (常識的 = sensible/normal, 常識外れ = out of the ordinary). 道徳 is moral principles. 良識 is a higher form of common sense." }
    ]
  },
  {
    id: "n2-0555", w: "責任", r: "せきにん", m: "responsibility; duty; liability", c: "noun", lv: 1,
    ex: [{ jp: "自分の行動には自分で責任を持たなければならない。", en: "You must take responsibility for your own actions." }],
    qs: [
      { t: "fitb", s: "このプロジェクトの失敗は全面的に私の＿＿＿＿です。", en: "The failure of this project is entirely my responsibility.", o: ["責任", "義務", "負担", "過失"], a: 0, e: "責任(せきにん) = responsibility/accountability. 義務(ぎむ) = duty/obligation (required by rules or law). 負担(ふたん) = burden/load. 過失(かしつ) = fault/negligence (legal term)." },
      { t: "meaning", s: "「責任」の意味は？", o: ["responsibility; accountability", "duty; obligation", "burden; load", "fault; negligence"], a: 0, e: "責任をとる = to take responsibility; 責任感 = sense of responsibility. 義務 is more rule-based. 過失 is a specific legal/moral fault." }
    ]
  },
  {
    id: "n2-0556", w: "権利", r: "けんり", m: "right; privilege; entitlement", c: "noun", lv: 1,
    ex: [{ jp: "すべての人は教育を受ける権利を持っている。", en: "Every person has the right to receive an education." }],
    qs: [
      { t: "fitb", s: "この土地の所有＿＿＿＿は私にあります。", en: "I have the ownership rights to this land.", o: ["権利", "権限", "資格", "特権"], a: 0, e: "権利(けんり) = a right or entitlement. 権限(けんげん) = authority/power. 資格(しかく) = qualification/credential. 特権(とっけん) = a special privilege." },
      { t: "meaning", s: "「権利」の意味は？", o: ["right; entitlement", "authority; power", "qualification; credential", "special privilege"], a: 0, e: "権利 is a recognized right (人権 = human rights, 著作権 = copyright). 権限 is granted authority. 資格 is an earned qualification." }
    ]
  },
  {
    id: "n2-0557", w: "義務", r: "ぎむ", m: "duty; obligation", c: "noun", lv: 1,
    ex: [{ jp: "日本では納税は国民の義務の一つとされている。", en: "In Japan, paying taxes is considered one of the obligations of citizens." }],
    qs: [
      { t: "fitb", s: "教育は権利であると同時に、保護者には子どもに教育を受けさせる＿＿＿＿がある。", en: "Education is a right, but at the same time guardians have an obligation to ensure children receive education.", o: ["義務", "責任", "役割", "使命"], a: 0, e: "義務(ぎむ) = a legal or social obligation (義務教育 = compulsory education). 責任(せきにん) = responsibility (moral/personal). 役割(やくわり) = a role/function. 使命(しめい) = a mission/calling." },
      { t: "meaning", s: "「義務」の意味は？", o: ["duty; obligation (legal/social)", "responsibility (moral)", "role; function", "mission; calling"], a: 0, e: "義務 is what you are legally or socially required to do (義務を果たす = to fulfill one's duty). 責任 is more personal accountability. 使命 is a higher calling." }
    ]
  },
  {
    id: "n2-0558", w: "平和", r: "へいわ", m: "peace; harmony", c: "noun", lv: 1,
    ex: [{ jp: "世界の平和を守るために、各国が協力して取り組む必要がある。", en: "In order to maintain world peace, every country needs to work together." }],
    qs: [
      { t: "fitb", s: "戦争のない＿＿＿＿な世界を次の世代に残したい。", en: "I want to leave a peaceful world without war to the next generation.", o: ["平和", "安全", "安定", "静穏"], a: 0, e: "平和(へいわ) = peace (absence of war/conflict, harmony). 安全(あんぜん) = safety/security. 安定(あんてい) = stability. 静穏(せいおん) = calm/tranquility (more literary)." },
      { t: "meaning", s: "「平和」の意味は？", o: ["peace; harmony", "safety; security", "stability", "calm; tranquility"], a: 0, e: "平和 is peace in a broad sense (平和主義 = pacifism, 平和条約 = peace treaty). 安全 is about being free from danger. 安定 is about being stable and not changing." }
    ]
  },
  {
    id: "n2-0559", w: "事故", r: "じこ", m: "accident; incident; mishap", c: "noun", lv: 1,
    ex: [{ jp: "交差点で車の事故が起き、周辺が大渋滞になった。", en: "A car accident occurred at the intersection, causing heavy traffic congestion in the area." }],
    qs: [
      { t: "fitb", s: "工場で機械の＿＿＿＿が起き、作業員二名が軽傷を負った。", en: "A machinery accident occurred at the factory and two workers suffered minor injuries.", o: ["事故", "事件", "災害", "トラブル"], a: 0, e: "事故(じこ) = an accident (unintentional). 事件(じけん) = an incident or crime (often intentional or noteworthy). 災害(さいがい) = a disaster (large-scale). トラブル = trouble/a problem." },
      { t: "meaning", s: "「事故」の意味は？", o: ["accident; mishap (unintentional)", "incident; crime", "disaster; calamity", "trouble; problem"], a: 0, e: "事故 is an unintentional accident (交通事故 = traffic accident, 事故死 = accidental death). 事件 implies something more serious, often criminal. 災害 is large-scale." }
    ]
  },
  {
    id: "n2-0560", w: "災害", r: "さいがい", m: "disaster; calamity; natural disaster", c: "noun", lv: 1,
    ex: [{ jp: "日本は自然災害が多い国なので、日頃から備えることが重要だ。", en: "Japan is a country with many natural disasters, so it is important to be prepared on a daily basis." }],
    qs: [
      { t: "fitb", s: "大規模な自然＿＿＿＿に備えて、非常用持ち出し袋を用意しておくべきだ。", en: "You should prepare an emergency bag in readiness for a large-scale natural disaster.", o: ["災害", "被害", "事故", "危機"], a: 0, e: "災害(さいがい) = a disaster/calamity (the event itself). 被害(ひがい) = damage/harm (the result of disaster). 事故(じこ) = an accident (smaller scale). 危機(きき) = a crisis." },
      { t: "meaning", s: "「災害」の意味は？", o: ["disaster; calamity; natural disaster", "damage; harm (result)", "accident; mishap", "crisis; emergency"], a: 0, e: "災害 is the disastrous event itself (地震災害 = earthquake disaster, 災害対策 = disaster countermeasures). 被害 is the damage resulting from a disaster." }
    ]
  },
  {
    id: "n2-0561", w: "被害", r: "ひがい", m: "damage; harm; injury (from disaster or crime)", c: "noun", lv: 1,
    ex: [{ jp: "台風による被害は予想より大きく、復旧に数ヶ月かかった。", en: "The damage from the typhoon was greater than expected, and recovery took several months." }],
    qs: [
      { t: "fitb", s: "今回の地震で＿＿＿＿を受けた住民には、補助金が支給される。", en: "Residents who suffered damage in this earthquake will receive subsidies.", o: ["被害", "損害", "損失", "損傷"], a: 0, e: "被害(ひがい) = harm suffered (by a person, community, or property). 損害(そんがい) = loss/damage (especially financial). 損失(そんしつ) = a loss (financial, abstract). 損傷(そんしょう) = physical damage/injury (to objects)." },
      { t: "meaning", s: "「被害」の意味は？", o: ["damage; harm; injury suffered", "financial loss; damage", "loss (financial, abstract)", "physical damage; structural damage"], a: 0, e: "被害 emphasizes being the victim of something (被害者 = victim, 被害届 = crime report). 損害 is more about financial loss. 損傷 is damage to a physical object." }
    ]
  },
  {
    id: "n2-0562", w: "法律", r: "ほうりつ", m: "law; legislation", c: "noun", lv: 1,
    ex: [{ jp: "その行為は法律に違反しているので、すぐにやめるべきだ。", en: "That act violates the law, so you should stop it immediately." }],
    qs: [
      { t: "fitb", s: "新しい個人情報保護＿＿＿＿が施行され、企業のデータ管理が厳しくなった。", en: "A new personal information protection law came into effect, making corporate data management stricter.", o: ["法律", "条例", "規則", "法令"], a: 0, e: "法律(ほうりつ) = a law (enacted by the national legislature). 条例(じょうれい) = a local ordinance. 規則(きそく) = a rule/regulation. 法令(ほうれい) = laws and ordinances collectively." },
      { t: "meaning", s: "「法律」の意味は？", o: ["law; legislation (national)", "local ordinance", "rule; regulation", "laws and ordinances (collectively)"], a: 0, e: "法律 is a law passed by the national parliament (法律違反 = violation of the law). 条例 is a rule set by a local government. 法令 is the broader term covering all laws and regulations." }
    ]
  },
  {
    id: "n2-0563", w: "制度", r: "せいど", m: "system; institution; setup", c: "noun", lv: 1,
    ex: [{ jp: "日本の医療制度は国民皆保険を基本としている。", en: "Japan's healthcare system is based on universal health insurance." }],
    qs: [
      { t: "fitb", s: "育児休業＿＿＿＿を利用して、一年間育児に専念した。", en: "I took advantage of the childcare leave system and devoted myself to childcare for one year.", o: ["制度", "仕組み", "体制", "システム"], a: 0, e: "制度(せいど) = an established system/institution (official). 仕組み(しくみ) = a mechanism/structure (how something works). 体制(たいせい) = a system/regime (organizational or governmental). システム = a system (often technical)." },
      { t: "meaning", s: "「制度」の意味は？", o: ["system; institution (official)", "mechanism; how it works", "organizational system; regime", "technical system"], a: 0, e: "制度 is an established social or legal institution (年金制度 = pension system, 選挙制度 = electoral system). 仕組み explains the mechanism. 体制 is about organizational structure." }
    ]
  },
  {
    id: "n2-0564", w: "組織", r: "そしき", m: "organization; structure; body", c: "noun", lv: 1,
    ex: [{ jp: "この非政府組織は世界中で貧困問題に取り組んでいる。", en: "This non-governmental organization works on poverty issues around the world." }],
    qs: [
      { t: "fitb", s: "大きな＿＿＿＿の中では、個人の意見が通りにくいことがある。", en: "In a large organization, it can be difficult for individual opinions to be heard.", o: ["組織", "集団", "団体", "機関"], a: 0, e: "組織(そしき) = an organization with roles and hierarchy (犯罪組織 = criminal organization). 集団(しゅうだん) = a group (less formal structure). 団体(だんたい) = an association/body. 機関(きかん) = an institution/organ (governmental, medical)." },
      { t: "meaning", s: "「組織」の意味は？", o: ["organization; structured body", "group (informal)", "association; group body", "institution; organ"], a: 0, e: "組織 is a structured organization with defined roles (組織的 = organized/systematic). 集団 is simply a collection of people. 機関 is an official institution like a government body or newspaper." }
    ]
  },
  {
    id: "n2-0565", w: "議論", r: "ぎろん", m: "debate; discussion; argument", c: "noun", lv: 1,
    ex: [{ jp: "この問題については、さらに深く議論する必要がある。", en: "This issue needs to be discussed more deeply." }],
    qs: [
      { t: "fitb", s: "新しい政策をめぐって国会で激しい＿＿＿＿が交わされた。", en: "Fierce debate took place in parliament over the new policy.", o: ["議論", "討論", "口論", "協議"], a: 0, e: "議論(ぎろん) = debate/discussion (exploring different views). 討論(とうろん) = debate (more formal, structured). 口論(こうろん) = a quarrel/argument. 協議(きょうぎ) = consultation/conference (to reach an agreement)." },
      { t: "meaning", s: "「議論」の意味は？", o: ["debate; discussion", "formal debate; panel discussion", "quarrel; argument", "consultation; conference"], a: 0, e: "議論 involves examining an issue from multiple angles (議論を深める = to deepen discussion). 討論 is more structured. 口論 is a heated argument or quarrel. 協議 aims at reaching a consensus." }
    ]
  },
  {
    id: "n2-0566", w: "意見", r: "いけん", m: "opinion; view", c: "noun", lv: 1,
    ex: [{ jp: "会議では積極的に意見を述べることが評価される。", en: "At meetings, actively expressing your opinions is valued." }],
    qs: [
      { t: "fitb", s: "この件についてはさまざまな＿＿＿＿があり、一概には言えない。", en: "There are various opinions on this matter and it cannot be said categorically.", o: ["意見", "主張", "見解", "立場"], a: 0, e: "意見(いけん) = an opinion (general term). 主張(しゅちょう) = a claim/assertion (strongly held position). 見解(けんかい) = a view/standpoint (more formal/official). 立場(たちば) = a position/standpoint." },
      { t: "meaning", s: "「意見」の意味は？", o: ["opinion; view (general)", "claim; assertion (strong)", "view; standpoint (formal)", "position; standpoint"], a: 0, e: "意見 is a neutral term for one's opinion or view. 主張 is stronger — something you argue for. 見解 is an official or formal position. 立場 is a social or argumentative position." }
    ]
  },
  {
    id: "n2-0567", w: "批判", r: "ひはん", m: "criticism; critique", c: "noun", lv: 1,
    ex: [{ jp: "政府の対応が遅いと各方面から批判が相次いだ。", en: "Criticism came one after another from various quarters that the government's response was too slow." }],
    qs: [
      { t: "fitb", s: "その映画は脚本が弱いと専門家から厳しい＿＿＿＿を受けた。", en: "The film received harsh criticism from experts that the screenplay was weak.", o: ["批判", "非難", "批評", "反論"], a: 0, e: "批判(ひはん) = criticism (pointing out faults, can be constructive). 非難(ひなん) = blame/condemnation (more emotional/moral). 批評(ひひょう) = critique/review (artistic/analytical). 反論(はんろん) = a counterargument." },
      { t: "meaning", s: "「批判」の意味は？", o: ["criticism; critique", "blame; condemnation", "review; artistic critique", "counterargument; rebuttal"], a: 0, e: "批判 identifies problems or faults (批判的思考 = critical thinking). 非難 is more accusatory. 批評 is formal literary or artistic criticism. 反論 is arguing back." }
    ]
  },
  {
    id: "n2-0568", w: "評価", r: "ひょうか", m: "evaluation; assessment; rating", c: "noun", lv: 1,
    ex: [{ jp: "今年の業績評価では高い点数をもらい、昇給が決まった。", en: "I received a high score in this year's performance evaluation, and my salary increase was decided." }],
    qs: [
      { t: "fitb", s: "その作品は世界中で高く＿＿＿＿されており、多くの賞を受賞している。", en: "The work is highly regarded around the world and has won many awards.", o: ["評価", "評判", "評論", "人気"], a: 0, e: "評価(ひょうか)する = to evaluate/assess (formal judgment of merit). 評判(ひょうばん) = reputation (what people say). 評論(ひょうろん)する = to critique/comment on (written analysis). 人気(にんき) = popularity." },
      { t: "meaning", s: "「評価」の意味は？", o: ["evaluation; assessment; rating", "reputation; word of mouth", "critique; commentary", "popularity"], a: 0, e: "評価 is a formal assessment of value (自己評価 = self-assessment, 費用対効果の評価 = cost-benefit evaluation). 評判 is informal reputation. 評論 is critical analysis." }
    ]
  },
  {
    id: "n2-0569", w: "調査", r: "ちょうさ", m: "investigation; survey; inquiry", c: "noun", lv: 1,
    ex: [{ jp: "市民の意識を把握するためにアンケート調査が実施された。", en: "A questionnaire survey was conducted to understand citizens' awareness." }],
    qs: [
      { t: "fitb", s: "警察が事件の原因を＿＿＿＿したところ、内部関係者が関与していた。", en: "When the police investigated the cause of the incident, an insider was found to be involved.", o: ["調査", "捜査", "検査", "審査"], a: 0, e: "調査(ちょうさ) = investigation/survey (general). 捜査(そうさ) = criminal investigation (police). 検査(けんさ) = inspection/examination (medical, quality). 審査(しんさ) = screening/judging (applications, competitions)." },
      { t: "meaning", s: "「調査」の意味は？", o: ["investigation; survey (general)", "criminal investigation (police)", "inspection; examination", "screening; judging"], a: 0, e: "調査 is the broadest term for finding out facts (市場調査 = market research). 捜査 is specifically police investigation. 検査 is physical testing/checking. 審査 is evaluating candidates or applications." }
    ]
  },
  {
    id: "n2-0570", w: "管理", r: "かんり", m: "management; administration; control", c: "noun", lv: 1,
    ex: [{ jp: "マンションの管理組合が共用部分の清掃を担当している。", en: "The condominium management association is responsible for cleaning the common areas." }],
    qs: [
      { t: "fitb", s: "個人情報の適切な＿＿＿＿は企業にとって重要な責務だ。", en: "Appropriate management of personal information is an important responsibility for companies.", o: ["管理", "運営", "経営", "制御"], a: 0, e: "管理(かんり) = management/control of something (data, property, health). 運営(うんえい) = operation/running (of an organization/event). 経営(けいえい) = business management. 制御(せいぎょ) = control (often technical, mechanical)." },
      { t: "meaning", s: "「管理」の意味は？", o: ["management; administration; control", "operation; running (of org/event)", "business management", "technical control; regulation"], a: 0, e: "管理 is maintaining control or oversight (ファイル管理 = file management, 健康管理 = health management). 経営 is running a business. 制御 is technical control." }
    ]
  },
  {
    id: "n2-0571", w: "材料", r: "ざいりょう", m: "material; ingredient; data", c: "noun", lv: 1,
    ex: [{ jp: "この料理は新鮮な材料を使っているのでとても美味しい。", en: "This dish is very delicious because it uses fresh ingredients." }],
    qs: [
      { t: "fitb", s: "このテーブルは天然木を＿＿＿＿に作られた手作り品だ。", en: "This table is a handmade item made from natural wood as its material.", o: ["材料", "素材", "資材", "原料"], a: 0, e: "材料(ざいりょう) = material/ingredient (for cooking or making something). 素材(そざい) = raw material/element (artistic, fabric). 資材(しざい) = supplies/materials (construction). 原料(げんりょう) = raw material/ingredient (industrial)." },
      { t: "meaning", s: "「材料」の意味は？", o: ["material; ingredient; component", "raw material; element (artistic)", "supplies; building materials", "raw material (industrial)"], a: 0, e: "材料 is both cooking ingredients (材料をそろえる = to gather ingredients) and construction/craft materials. 原料 is specifically industrial raw material. 素材 often relates to texture or artistic quality." }
    ]
  },
  {
    id: "n2-0572", w: "増加", r: "ぞうか", m: "increase; rise; growth", c: "noun", lv: 1,
    ex: [{ jp: "外国人観光客の増加にともない、観光地の混雑が問題になっている。", en: "As the number of foreign tourists increases, congestion at tourist spots is becoming a problem." }],
    qs: [
      { t: "fitb", s: "物価の＿＿＿＿が続き、家計への影響が懸念されている。", en: "As prices continue to rise, concerns are growing about the impact on household budgets.", o: ["増加", "上昇", "増大", "高騰"], a: 0, e: "増加(ぞうか) = an increase in number or amount (統計的). 上昇(じょうしょう) = a rise (temperature, price). 増大(ぞうだい) = growth/expansion (size or scale). 高騰(こうとう) = a sharp price surge." },
      { t: "meaning", s: "「増加」の意味は？", o: ["increase; rise (in count/amount)", "rise (temperature, value)", "growth; expansion (in scale)", "sharp surge (in price)"], a: 0, e: "増加 is a quantitative increase (増加率 = growth rate, 増加傾向 = upward trend). 上昇 implies going upward. 高騰 is a sudden, sharp price spike." }
    ]
  },
  {
    id: "n2-0573", w: "減少", r: "げんしょう", m: "decrease; decline; reduction", c: "noun", lv: 1,
    ex: [{ jp: "少子化の影響で、学校の生徒数が年々減少している。", en: "Due to the declining birthrate, the number of students at schools is decreasing year by year." }],
    qs: [
      { t: "fitb", s: "森林の＿＿＿＿が進み、生物多様性が失われつつある。", en: "The decline of forests is progressing, and biodiversity is being lost.", o: ["減少", "低下", "縮小", "消滅"], a: 0, e: "減少(げんしょう) = decrease in quantity/number. 低下(ていか) = decline in level/quality. 縮小(しゅくしょう) = reduction in size/scale. 消滅(しょうめつ) = disappearance/extinction." },
      { t: "meaning", s: "「減少」の意味は？", o: ["decrease; decline (in quantity)", "decline (in level/quality)", "reduction (in size/scale)", "disappearance; extinction"], a: 0, e: "減少 is a quantitative drop (人口減少 = population decline, 減少傾向 = downward trend). 低下 is about quality or level going down. 消滅 means completely disappearing." }
    ]
  },
  {
    id: "n2-0574", w: "現状", r: "げんじょう", m: "current situation; status quo", c: "noun", lv: 1,
    ex: [{ jp: "まず現状をしっかり把握してから、改善策を考えよう。", en: "Let's first get a firm grasp of the current situation before thinking about improvement measures." }],
    qs: [
      { t: "fitb", s: "会社の＿＿＿＿に満足せず、もっとよい働き方を模索している。", en: "Not satisfied with the company's current situation, I am searching for a better way of working.", o: ["現状", "現況", "実態", "状況"], a: 0, e: "現状(げんじょう) = the current state of affairs (often implying resistance to change: 現状維持 = maintaining the status quo). 現況(げんきょう) = the current condition (formal/official). 実態(じったい) = the actual/real state (often hidden truth). 状況(じょうきょう) = the situation (more dynamic)." },
      { t: "meaning", s: "「現状」の意味は？", o: ["current situation; status quo", "current condition (formal/official)", "actual state; real situation", "situation; circumstances (dynamic)"], a: 0, e: "現状 refers to how things currently are, often with implications of whether to change it (現状打破 = breaking the status quo). 実態 reveals what's really happening behind the surface." }
    ]
  },
  {
    id: "n2-0575", w: "問題", r: "もんだい", m: "problem; issue; question", c: "noun", lv: 1,
    ex: [{ jp: "この社会問題を解決するには、個人の努力だけでは足りない。", en: "Solving this social problem requires more than individual effort alone." }],
    qs: [
      { t: "fitb", s: "テストに合格するには、過去の＿＿＿＿をたくさん解くことが効果的だ。", en: "To pass the test, it is effective to solve many past questions.", o: ["問題", "課題", "設問", "試問"], a: 0, e: "問題(もんだい) = a problem or question (broad: social issue, test question). 課題(かだい) = an assignment/challenge (task to be done). 設問(せつもん) = a question/item on a test (formal). 試問(しもん) = an oral examination question." },
      { t: "meaning", s: "「問題」の意味は？", o: ["problem; issue; question (broad)", "assignment; challenge; task", "test question; examination item", "oral examination question"], a: 0, e: "問題 is the most general term: a problem to solve or a question to answer (問題点 = a problematic point, 問題集 = exercise book). 課題 is more about a challenge or assignment." }
    ]
  },
  {
    id: "n2-0576", w: "解決", r: "かいけつ", m: "solution; resolution; settlement", c: "noun", lv: 1,
    ex: [{ jp: "両者が話し合いの場を設け、ようやく問題が解決した。", en: "Both parties set up a place for discussion, and the problem was finally resolved." }],
    qs: [
      { t: "fitb", s: "この技術的な問題を＿＿＿＿するには、専門家のサポートが必要だ。", en: "Expert support is needed to resolve this technical problem.", o: ["解決", "解消", "克服", "処理"], a: 0, e: "解決(かいけつ)する = to solve/resolve a problem. 解消(かいしょう)する = to eliminate/dissolve something (e.g. stress, a contract). 克服(こくふく)する = to overcome (a difficulty, weakness). 処理(しょり)する = to process/deal with (data, a task)." },
      { t: "meaning", s: "「解決」の意味は？", o: ["solution; resolution of a problem", "elimination; dissolution", "overcoming (a difficulty)", "processing; dealing with"], a: 0, e: "解決 is the complete resolution of a problem (問題解決 = problem-solving). 克服 implies overcoming with effort. 処理 is more mechanical/administrative handling." }
    ]
  },
  {
    id: "n2-0577", w: "困難", r: "こんなん", m: "difficulty; hardship; trouble", c: "noun", lv: 1,
    ex: [{ jp: "どんな困難に直面しても、諦めずに挑戦し続けたい。", en: "No matter what difficulties I face, I want to keep challenging myself without giving up." }],
    qs: [
      { t: "fitb", s: "異文化の中での生活は多くの＿＿＿＿を伴うが、大きな成長につながる。", en: "Living in a different culture involves many difficulties, but leads to great personal growth.", o: ["困難", "苦難", "苦労", "障害"], a: 0, e: "困難(こんなん) = difficulty/hardship (obstacles or challenging situations). 苦難(くなん) = suffering/adversity (more severe, emotional). 苦労(くろう) = hard work/trouble (endured through effort). 障害(しょうがい) = obstacle/barrier/disability." },
      { t: "meaning", s: "「困難」の意味は？", o: ["difficulty; hardship; trouble", "suffering; adversity (severe)", "hard work; trouble (endured)", "obstacle; barrier; disability"], a: 0, e: "困難 is the standard word for difficulty or a challenging obstacle (困難な状況 = a difficult situation, 困難を乗り越える = to overcome difficulties). 障害 can also mean a disability." }
    ]
  },
  {
    id: "n2-0578", w: "必要", r: "ひつよう", m: "necessary; essential; needed", c: "naadj", lv: 1,
    ex: [{ jp: "ビザを取得するためには、いくつかの書類が必要だ。", en: "Several documents are necessary to obtain a visa." }],
    qs: [
      { t: "fitb", s: "今の状況を変えるためには、皆の協力が＿＿＿＿だ。", en: "Everyone's cooperation is necessary to change the current situation.", o: ["必要", "不可欠", "必須", "重要"], a: 0, e: "必要(ひつよう) = necessary (general). 不可欠(ふかけつ) = indispensable/essential (cannot do without). 必須(ひっす) = mandatory/required (必須条件 = prerequisite). 重要(じゅうよう) = important." },
      { t: "meaning", s: "「必要」の意味は？", o: ["necessary; needed", "indispensable; cannot do without", "mandatory; required", "important; significant"], a: 0, e: "必要 is the general word for something being needed (必要以上 = more than necessary). 不可欠 is stronger — you absolutely cannot do without it. 必須 is formally required." }
    ]
  },
  {
    id: "n2-0579", w: "重要", r: "じゅうよう", m: "important; significant; crucial", c: "naadj", lv: 1,
    ex: [{ jp: "この会議は非常に重要なので、全員出席するように。", en: "This meeting is very important, so everyone should attend." }],
    qs: [
      { t: "fitb", s: "健康は人生において最も＿＿＿＿なことの一つだ。", en: "Health is one of the most important things in life.", o: ["重要", "大切", "大事", "必要"], a: 0, e: "重要(じゅうよう) = important (formal, significant in scale or consequence). 大切(たいせつ) = important/precious (personal, emotionally valued). 大事(だいじ) = important (similar to 大切, slightly more practical). 必要(ひつよう) = necessary." },
      { t: "meaning", s: "「重要」の意味は？", o: ["important; significant (formal)", "important; precious (personal)", "important (practical/colloquial)", "necessary; needed"], a: 0, e: "重要 is the formal term used in documents, media, and official contexts (重要事項 = important matters, 重要人物 = VIP). 大切 is more personal/emotional. 大事 is broadly used in daily life." }
    ]
  },
  {
    id: "n2-0580", w: "十分", r: "じゅうぶん", m: "sufficient; enough; adequate", c: "naadj", lv: 1,
    ex: [{ jp: "準備が十分でないまま試験に臨んだが、なんとか合格した。", en: "I faced the exam without being fully prepared, but somehow passed." }],
    qs: [
      { t: "fitb", s: "この問題を解決するには、現在の予算では＿＿＿＿ではない。", en: "The current budget is not sufficient to solve this problem.", o: ["十分", "適切", "満足", "十全"], a: 0, e: "十分(じゅうぶん) = enough/sufficient (quantity or degree). 適切(てきせつ) = appropriate/suitable (quality of fit). 満足(まんぞく) = satisfactory/satisfied. 十全(じゅうぜん) = perfect/complete (more formal/literary)." },
      { t: "meaning", s: "「十分」の意味は？", o: ["sufficient; enough; adequate", "appropriate; suitable", "satisfactory; satisfied", "perfect; complete (literary)"], a: 0, e: "十分 = sufficient in quantity or extent (十分な睡眠 = sufficient sleep, 十分に考える = to think thoroughly). 適切 is about being the right fit or approach. 満足 expresses a feeling of contentment." }
    ]
  },
  {
    id: "n2-0581", w: "可能", r: "かのう", m: "possible; feasible", c: "naadj", lv: 1,
    ex: [{ jp: "努力さえすれば、どんな目標も達成可能だと信じている。", en: "I believe that with enough effort, any goal is achievable." }],
    qs: [
      { t: "fitb", s: "この条件であれば、期限内に完成させることは＿＿＿＿です。", en: "Under these conditions, it is possible to complete it within the deadline.", o: ["可能", "容易", "確実", "十分"], a: 0, e: "可能(かのう) = possible/feasible. 容易(ようい) = easy. 確実(かくじつ) = certain/reliable. 十分(じゅうぶん) = sufficient." },
      { t: "meaning", s: "「可能」の意味は？", o: ["possible; feasible", "easy; simple", "certain; reliable", "sufficient; enough"], a: 0, e: "可能 means something can be done (可能性 = possibility, 不可能 = impossible). 容易 means it is easy. 確実 means it will definitely happen." }
    ]
  },
  {
    id: "n2-0582", w: "適切", r: "てきせつ", m: "appropriate; suitable; proper", c: "naadj", lv: 1,
    ex: [{ jp: "場の雰囲気に合わせた適切な言葉を選ぶことが大切だ。", en: "It is important to choose appropriate words that match the atmosphere of the occasion." }],
    qs: [
      { t: "fitb", s: "この状況に対して＿＿＿＿な措置をとらなければならない。", en: "Appropriate measures must be taken for this situation.", o: ["適切", "的確", "正確", "妥当"], a: 0, e: "適切(てきせつ) = appropriate/suitable (fits the situation well). 的確(てきかく) = accurate/precise (hits the mark). 正確(せいかく) = accurate/correct (no errors). 妥当(だとう) = reasonable/valid (already in earlier batches)." },
      { t: "meaning", s: "「適切」の意味は？", o: ["appropriate; suitable; proper", "accurate; hitting the mark", "correct; error-free", "reasonable; valid"], a: 0, e: "適切 is about fitting the context (適切な表現 = appropriate expression). 的確 means precisely on target. 正確 means factually correct with no errors." }
    ]
  },
  {
    id: "n2-0583", w: "正確", r: "せいかく", m: "accurate; precise; exact", c: "naadj", lv: 1,
    ex: [{ jp: "通訳者は話者の意図を正確に伝える責任がある。", en: "An interpreter has the responsibility to accurately convey the speaker's intent." }],
    qs: [
      { t: "fitb", s: "この時計は非常に＿＿＿＿で、一日に一秒もずれない。", en: "This watch is extremely accurate and does not deviate even one second per day.", o: ["正確", "精密", "確実", "厳密"], a: 0, e: "正確(せいかく) = accurate (no errors). 精密(せいみつ) = precise/fine (detailed precision, e.g. 精密機器 = precision equipment). 確実(かくじつ) = certain/reliable. 厳密(げんみつ) = strict/rigorous." },
      { t: "meaning", s: "「正確」の意味は？", o: ["accurate; precise; exact", "fine; highly detailed precision", "certain; reliable", "strict; rigorous"], a: 0, e: "正確 means free from errors (正確な情報 = accurate information, 正確に言うと = to be precise). 精密 emphasizes fine detail. 厳密 means strict and rigorous (厳密に言えば = strictly speaking)." }
    ]
  },
  {
    id: "n2-0584", w: "豊富", r: "ほうふ", m: "abundant; plentiful; rich (in quantity)", c: "naadj", lv: 1,
    ex: [{ jp: "このレストランはメニューが豊富で、どれを選ぶか迷ってしまう。", en: "This restaurant has an abundant menu, and I always have trouble deciding what to choose." }],
    qs: [
      { t: "fitb", s: "彼は海外生活が長く、国際感覚が＿＿＿＿だ。", en: "He has lived abroad for a long time and has a rich international perspective.", o: ["豊富", "豊か", "充実", "十分"], a: 0, e: "豊富(ほうふ) = abundant/plentiful (in quantity or variety). 豊か(ゆたか) = rich/prosperous (quality, e.g. nature, life). 充実(じゅうじつ) = fulfilling/substantial. 十分(じゅうぶん) = sufficient." },
      { t: "meaning", s: "「豊富」の意味は？", o: ["abundant; plentiful (in quantity/variety)", "rich; prosperous (in quality)", "fulfilling; substantial", "sufficient; adequate"], a: 0, e: "豊富 emphasizes having a lot or a wide variety (豊富な経験 = rich experience, 豊富な資源 = abundant resources). 豊か is about quality of richness. 充実 is about being full and satisfying." }
    ]
  },
  {
    id: "n2-0585", w: "複雑", r: "ふくざつ", m: "complex; complicated; intricate", c: "naadj", lv: 1,
    ex: [{ jp: "この問題は複雑な背景があり、簡単には解決できない。", en: "This problem has a complex background and cannot be easily resolved." }],
    qs: [
      { t: "fitb", s: "日本語の敬語体系は外国人学習者にとって非常に＿＿＿＿だ。", en: "The honorific system of Japanese is very complex for foreign learners.", o: ["複雑", "困難", "難解", "多様"], a: 0, e: "複雑(ふくざつ) = complex (many interrelated parts). 困難(こんなん) = difficult/hard. 難解(なんかい) = hard to understand (abstract, obscure). 多様(たよう) = diverse/varied." },
      { t: "meaning", s: "「複雑」の意味は？", o: ["complex; complicated; intricate", "difficult; hard (challenging)", "hard to understand; obscure", "diverse; varied"], a: 0, e: "複雑 describes something with many interwoven elements (複雑な感情 = complex emotions, 複雑系 = complex systems). 難解 means intellectually difficult to grasp. 多様 means varied, not complex." }
    ]
  },
  {
    id: "n2-0586", w: "単純", r: "たんじゅん", m: "simple; straightforward; naive", c: "naadj", lv: 1,
    ex: [{ jp: "見た目は単純そうに見えるが、実はかなり難しい問題だ。", en: "It looks simple at first glance, but it is actually quite a difficult problem." }],
    qs: [
      { t: "fitb", s: "彼は＿＿＿＿な性格で、策略などを考えることができない。", en: "He has a simple, straightforward personality and cannot think up schemes.", o: ["単純", "素直", "純粋", "無邪気"], a: 0, e: "単純(たんじゅん) = simple/straightforward (can imply naive). 素直(すなお) = obedient/honest (already in earlier batches). 純粋(じゅんすい) = pure/innocent (already in earlier batches). 無邪気(むじゃき) = innocent/childlike." },
      { t: "meaning", s: "「単純」の意味は？", o: ["simple; straightforward; naive", "honest; obedient", "pure; innocent", "innocent; childlike"], a: 0, e: "単純 means lacking complexity (単純作業 = simple/repetitive work, 単純な考え = a simplistic idea). Used of people it can mean simple-minded or naive. 純粋 emphasizes purity." }
    ]
  },
  {
    id: "n2-0587", w: "慎重", r: "しんちょう", m: "careful; cautious; prudent", c: "naadj", lv: 1,
    ex: [{ jp: "大きな投資をする前には慎重に検討する必要がある。", en: "It is necessary to consider carefully before making a large investment." }],
    qs: [
      { t: "fitb", s: "彼女は新しいことを始める際はいつも＿＿＿＿で、リスクを最小限に抑える。", en: "She is always cautious when starting something new and minimizes risks.", o: ["慎重", "慎み深い", "消極的", "用心深い"], a: 0, e: "慎重(しんちょう) = careful/prudent (thinking through risks). 慎み深い(つつしみぶかい) = modest/reserved (behavior). 消極的(しょうきょくてき) = passive/negative. 用心深い(ようじんぶかい) = wary/vigilant (against danger)." },
      { t: "meaning", s: "「慎重」の意味は？", o: ["careful; cautious; prudent", "modest; reserved (behavior)", "passive; unenthusiastic", "wary; vigilant (against danger)"], a: 0, e: "慎重 means taking care not to make mistakes (慎重に行動する = to act carefully, 慎重な姿勢 = a cautious stance). 用心深い is more about being on guard against external threats." }
    ]
  },
  {
    id: "n2-0588", w: "積極的", r: "せっきょくてき", m: "positive; proactive; assertive", c: "naadj", lv: 1,
    ex: [{ jp: "授業中に積極的に発言することで、理解が深まる。", en: "By actively speaking up in class, you deepen your understanding." }],
    qs: [
      { t: "fitb", s: "この会社は新しいことに＿＿＿＿に取り組む社風がある。", en: "This company has a corporate culture of tackling new things proactively.", o: ["積極的", "能動的", "自発的", "主体的"], a: 0, e: "積極的(せっきょくてき) = proactive/positive (willingly engaging). 能動的(のうどうてき) = active (vs. passive, more technical). 自発的(じはつてき) = voluntary/spontaneous. 主体的(しゅたいてき) = autonomous/self-directed." },
      { t: "meaning", s: "「積極的」の意味は？", o: ["positive; proactive; assertive", "active (vs. passive, technical)", "voluntary; spontaneous", "autonomous; self-directed"], a: 0, e: "積極的 is the opposite of 消極的 (passive). It means willingly and energetically engaging (積極的に参加する = to participate actively). 主体的 emphasizes self-initiative and ownership." }
    ]
  },
  {
    id: "n2-0589", w: "認める", r: "みとめる", m: "to recognize; to acknowledge; to approve", c: "verb", lv: 1,
    ex: [{ jp: "自分の間違いを素直に認めることが、成長の第一歩だ。", en: "Honestly acknowledging your own mistakes is the first step to growth." }],
    qs: [
      { t: "fitb", s: "上司は彼の実力を＿＿＿＿、重要なプロジェクトを任せた。", en: "The boss recognized his ability and entrusted him with an important project.", o: ["認め", "認識し", "承認し", "評価し"], a: 0, e: "認める(みとめる) = to recognize/acknowledge (someone's merit or a fact). 認識する(にんしきする) = to become aware of/understand (more cognitive). 承認する(しょうにんする) = to officially approve. 評価する(ひょうかする) = to evaluate/assess." },
      { t: "meaning", s: "「認める」の意味は？", o: ["to recognize; to acknowledge; to approve", "to become aware of; to understand", "to officially approve; to authorize", "to evaluate; to assess"], a: 0, e: "認める covers recognizing facts (失敗を認める = to admit failure) and approving of people or actions (才能を認める = to recognize talent). 承認する is more formal/official." }
    ]
  },
  {
    id: "n2-0590", w: "求める", r: "もとめる", m: "to seek; to demand; to request", c: "verb", lv: 1,
    ex: [{ jp: "彼女は自分の可能性を信じ、より高い目標を求めて努力した。", en: "Believing in her own potential, she worked hard seeking a higher goal." }],
    qs: [
      { t: "fitb", s: "市民が行政に透明性を＿＿＿＿声が高まっている。", en: "There is a growing chorus of citizens demanding transparency from the government.", o: ["求める", "要求する", "請求する", "要望する"], a: 0, e: "求める(もとめる) = to seek/demand (general purpose, written/formal). 要求する(ようきゅうする) = to demand (strongly, assertively). 請求する(せいきゅうする) = to claim/invoice (money, compensation). 要望する(ようぼうする) = to request/wish for (politely)." },
      { t: "meaning", s: "「求める」の意味は？", o: ["to seek; to demand; to request", "to demand strongly; to claim", "to invoice; to bill; to claim payment", "to request; to wish for (polite)"], a: 0, e: "求める is literary/formal and covers seeking (真実を求める = to seek truth) and demanding (説明を求める = to demand an explanation). 要求する is stronger/more assertive." }
    ]
  },
  {
    id: "n2-0591", w: "支える", r: "ささえる", m: "to support; to prop up; to sustain", c: "verb", lv: 1,
    ex: [{ jp: "家族の存在が彼を精神的に支えてくれた。", en: "The presence of his family supported him emotionally." }],
    qs: [
      { t: "fitb", s: "この柱が建物全体を＿＿＿＿いる重要な構造材だ。", en: "This pillar is an important structural material that supports the entire building.", o: ["支えて", "支持して", "維持して", "保持して"], a: 0, e: "支える(ささえる) = to support/prop up (physically or emotionally). 支持する(しじする) = to support/back (a cause, person politically). 維持する(いじする) = to maintain/preserve (a state). 保持する(ほじする) = to hold/retain (a record, position)." },
      { t: "meaning", s: "「支える」の意味は？", o: ["to support; to prop up; to sustain", "to support; to back (a cause)", "to maintain; to preserve (a state)", "to hold; to retain (a record)"], a: 0, e: "支える is physical or emotional support (社会を支える = to support society). 支持する is giving backing or endorsement. 維持する is about keeping something in a certain state." }
    ]
  },
  {
    id: "n2-0592", w: "含む", r: "ふくむ", m: "to include; to contain; to hold in the mouth", c: "verb", lv: 1,
    ex: [{ jp: "この値段には税金と送料が含まれています。", en: "This price includes tax and shipping." }],
    qs: [
      { t: "fitb", s: "この食品は人工添加物を一切＿＿＿＿いない。", en: "This food product contains no artificial additives whatsoever.", o: ["含んで", "含めて", "混じって", "入れて"], a: 0, e: "含む(ふくむ) = to contain/include (naturally part of something). 含める(ふくめる) = to include (intentionally adding in: AにBを含める = to include B in A). 混じる(まじる) = to be mixed in (not necessarily intended). 入れる(いれる) = to put in." },
      { t: "meaning", s: "「含む」の意味は？", o: ["to contain; to include", "to include (intentionally adding)", "to be mixed in", "to put in; to insert"], a: 0, e: "含む = something is naturally included (税込み = tax included, 含む成分 = contained ingredients). 含める = to actively include something in a group or calculation." }
    ]
  },
  {
    id: "n2-0593", w: "断る", r: "ことわる", m: "to refuse; to decline; to turn down", c: "verb", lv: 1,
    ex: [{ jp: "誘いを断るのは申し訳ないが、今日は先約がある。", en: "I am sorry to decline the invitation, but I have a prior engagement today." }],
    qs: [
      { t: "fitb", s: "上司の無理な要求を丁重に＿＿＿＿のは難しい。", en: "It is difficult to politely refuse an unreasonable demand from your boss.", o: ["断る", "拒否する", "拒絶する", "辞退する"], a: 0, e: "断る(ことわる) = to decline/refuse (general, relatively polite). 拒否する(きょひする) = to refuse/reject (firm, often official). 拒絶する(きょぜつする) = to reject outright (stronger). 辞退する(じたいする) = to decline politely (awards, positions)." },
      { t: "meaning", s: "「断る」の意味は？", o: ["to refuse; to decline (general)", "to refuse; to reject (firm, official)", "to reject outright (strong)", "to decline politely (award/position)"], a: 0, e: "断る is the everyday word for declining or refusing (申し出を断る = to refuse an offer). 辞退する is more formal/polite (award, opportunity). 拒否する is stronger and more official." }
    ]
  },
  {
    id: "n2-0594", w: "招く", r: "まねく", m: "to invite; to beckon; to cause; to bring about", c: "verb", lv: 1,
    ex: [{ jp: "部長は取引先の担当者を食事に招いた。", en: "The department manager invited the person in charge at the business partner to dinner." }],
    qs: [
      { t: "fitb", s: "不用意な発言が誤解を＿＿＿＿ことがある。", en: "A careless remark can sometimes invite misunderstanding.", o: ["招く", "引き起こす", "もたらす", "生む"], a: 0, e: "招く(まねく) = to invite (a person) or to bring about (a result, often unintended). 引き起こす(ひきおこす) = to cause/trigger (an event). もたらす = to bring/produce (a result). 生む(うむ) = to give birth to/generate." },
      { t: "meaning", s: "「招く」の意味は？", o: ["to invite; to cause; to bring about", "to trigger; to cause (an event)", "to bring; to produce (a result)", "to generate; to give birth to"], a: 0, e: "招く has two main meanings: inviting a person (ゲストを招く = to invite a guest) and causing an undesired result (混乱を招く = to cause confusion)." }
    ]
  },
  {
    id: "n2-0595", w: "妨げる", r: "さまたげる", m: "to hinder; to obstruct; to interfere with", c: "verb", lv: 1,
    ex: [{ jp: "工事の騒音が集中を妨げて、仕事がはかどらなかった。", en: "The construction noise hindered my concentration and I could not make progress with work." }],
    qs: [
      { t: "fitb", s: "彼の反対意見がプロジェクトの進行を＿＿＿＿いる。", en: "His opposition is obstructing the progress of the project.", o: ["妨げて", "邪魔して", "阻んで", "遮って"], a: 0, e: "妨げる(さまたげる) = to hinder/impede (formal, written). 邪魔する(じゃまする) = to disturb/get in the way (colloquial). 阻む(はばむ) = to block/stand in the way (formal). 遮る(さえぎる) = to block/cut off (light, view, sound)." },
      { t: "meaning", s: "「妨げる」の意味は？", o: ["to hinder; to obstruct; to impede", "to disturb; to get in the way (colloquial)", "to block; to stand in the way (formal)", "to block; to cut off (light, sound)"], a: 0, e: "妨げる is formal and used in writing (成長を妨げる = to hinder growth, 通行を妨げる = to obstruct passage). 邪魔する is the everyday colloquial equivalent." }
    ]
  },
  {
    id: "n2-0596", w: "促す", r: "うながす", m: "to urge; to prompt; to encourage; to facilitate", c: "verb", lv: 1,
    ex: [{ jp: "先生は生徒たちに積極的な発言を促した。", en: "The teacher urged students to speak up actively." }],
    qs: [
      { t: "fitb", s: "適度な運動は食欲を＿＿＿＿効果がある。", en: "Moderate exercise has the effect of stimulating appetite.", o: ["促す", "高める", "増進する", "誘発する"], a: 0, e: "促す(うながす) = to urge/prompt/stimulate (action or a process). 高める(たかめる) = to raise/enhance (level). 増進する(ぞうしんする) = to promote/increase (health, appetite). 誘発する(ゆうはつする) = to induce/trigger (unintended)." },
      { t: "meaning", s: "「促す」の意味は？", o: ["to urge; to prompt; to facilitate", "to raise; to enhance", "to promote; to increase", "to induce; to trigger"], a: 0, e: "促す = to get someone or a process moving (行動を促す = to prompt action, 回復を促す = to facilitate recovery). 促進する(そくしんする) is the noun form meaning to promote/accelerate." }
    ]
  },
  {
    id: "n2-0597", w: "補う", r: "おぎなう", m: "to supplement; to make up for; to compensate for", c: "verb", lv: 1,
    ex: [{ jp: "食事で不足した栄養素をサプリメントで補っている。", en: "I supplement the nutrients lacking in my diet with supplements." }],
    qs: [
      { t: "fitb", s: "経験の不足を知識と情熱で＿＿＿＿ことができる。", en: "A lack of experience can be compensated for with knowledge and passion.", o: ["補う", "埋める", "カバーする", "代わる"], a: 0, e: "補う(おぎなう) = to supplement/make up for a shortfall. 埋める(うめる) = to fill in/bury a gap. カバーする = to cover/make up for. 代わる(かわる) = to substitute for/replace." },
      { t: "meaning", s: "「補う」の意味は？", o: ["to supplement; to make up for", "to fill in; to bury (a gap)", "to cover; to substitute", "to replace; to take over from"], a: 0, e: "補う is used when something is insufficient and you add more to make it complete (欠点を補う = to compensate for a weakness). 埋める is filling a physical or metaphorical gap." }
    ]
  },
  {
    id: "n2-0598", w: "優れる", r: "すぐれる", m: "to excel; to be superior; to be outstanding", c: "verb", lv: 1,
    ex: [{ jp: "彼女は音楽の才能に優れており、幼い頃からピアノを弾いている。", en: "She excels in musical talent and has been playing piano since she was young." }],
    qs: [
      { t: "fitb", s: "このスマートフォンは処理速度に＿＿＿＿いるが、バッテリーの持ちが悪い。", en: "This smartphone excels in processing speed but has poor battery life.", o: ["優れて", "勝って", "上回って", "優って"], a: 0, e: "優れる(すぐれる) = to excel/be outstanding in (a quality). 勝る(まさる) = to surpass/be superior (comparative). 上回る(うわまわる) = to exceed/surpass (a number or threshold). 優る = same as 勝る (archaic variant)." },
      { t: "meaning", s: "「優れる」の意味は？", o: ["to excel; to be outstanding", "to surpass; to be superior (comparative)", "to exceed; to surpass (a number)", "to be gifted; to be endowed (archaic)"], a: 0, e: "優れる is used in the て-form (優れている = is excellent/outstanding). 優れた = excellent (adjective use: 優れた作品 = an outstanding work). 勝る is comparative." }
    ]
  },
  {
    id: "n2-0599", w: "疑う", r: "うたがう", m: "to doubt; to suspect; to question", c: "verb", lv: 1,
    ex: [{ jp: "友人の誠実さを疑ったことを、今も後悔している。", en: "I still regret having doubted my friend's sincerity." }],
    qs: [
      { t: "fitb", s: "その目撃者の証言の信憑性を＿＿＿＿余地はない。", en: "There is no room to doubt the credibility of that witness's testimony.", o: ["疑う", "否定する", "反論する", "批判する"], a: 0, e: "疑う(うたがう) = to doubt/suspect (the truth of something). 否定する(ひていする) = to deny/negate. 反論する(はんろんする) = to argue back/counter. 批判する(ひはんする) = to criticize." },
      { t: "meaning", s: "「疑う」の意味は？", o: ["to doubt; to suspect; to question", "to deny; to negate", "to argue back; to counter", "to criticize; to find fault"], a: 0, e: "疑う is having doubt about whether something is true or trustworthy (事実を疑う = to question the facts, 犯人と疑われる = to be suspected as the culprit)." }
    ]
  },
  {
    id: "n2-0600", w: "諦める", r: "あきらめる", m: "to give up; to abandon; to resign oneself to", c: "verb", lv: 1,
    ex: [{ jp: "夢を諦めるのはいつだって簡単だが、挑戦し続けることに価値がある。", en: "Giving up on your dream is always easy, but there is value in continuing to challenge yourself." }],
    qs: [
      { t: "fitb", s: "最後まで＿＿＿＿ずに頑張ったが、試合には負けてしまった。", en: "I fought hard without giving up until the end, but lost the match.", o: ["諦め", "投げ出さ", "断念し", "放棄し"], a: 0, e: "諦める(あきらめる) = to give up/resign oneself. 投げ出す(なげだす) = to abandon/walk away from (suddenly, irresponsibly). 断念する(だんねんする) = to abandon a plan (formal). 放棄する(ほうきする) = to abandon/renounce (a right, responsibility)." },
      { t: "meaning", s: "「諦める」の意味は？", o: ["to give up; to resign oneself to", "to abandon; to walk away from", "to abandon a plan (formal)", "to renounce; to forfeit (a right)"], a: 0, e: "諦める implies accepting a loss and letting go (夢を諦める = to give up a dream). 放棄する has legal/formal overtones. 投げ出す suggests walking away irresponsibly mid-way." }
    ]
  },
  {
    id: "n2-0601", w: "取り組む", r: "とりくむ", m: "to tackle; to work on; to take on", c: "verb", lv: 1,
    ex: [{ jp: "この会社は環境問題に積極的に取り組んでいる。", en: "This company is actively working on environmental issues." }],
    qs: [
      { t: "fitb", s: "難しい問題にも前向きに＿＿＿＿姿勢が評価された。", en: "His attitude of positively tackling even difficult problems was highly valued.", o: ["取り組む", "向き合う", "挑む", "対処する"], a: 0, e: "取り組む(とりくむ) = to work on/tackle something seriously (ongoing effort). 向き合う(むきあう) = to face up to/confront. 挑む(いどむ) = to challenge/take on (implies opposition). 対処する(たいしょする) = to deal with/handle (a specific situation)." },
      { t: "meaning", s: "「取り組む」の意味は？", o: ["to tackle; to work on seriously", "to face up to; to confront", "to challenge; to take on (with opposition)", "to handle; to deal with (a situation)"], a: 0, e: "取り組む implies sustained, earnest effort on a task or issue (問題に取り組む = to tackle a problem, 取り組み = efforts/initiatives). 挑む has a combative nuance." }
    ]
  },
  {
    id: "n2-0602", w: "見直す", r: "みなおす", m: "to review; to reconsider; to revise; to reassess", c: "verb", lv: 1,
    ex: [{ jp: "一度書いたレポートを提出前に必ず見直すようにしている。", en: "I always make sure to review the report I have written before submitting it." }],
    qs: [
      { t: "fitb", s: "既存のシステムの問題点を洗い出し、全面的に＿＿＿＿必要がある。", en: "It is necessary to identify the problems with the existing system and completely revise it.", o: ["見直す", "改める", "修正する", "再検討する"], a: 0, e: "見直す(みなおす) = to review and potentially change one's assessment or a plan. 改める(あらためる) = to reform/correct (already in earlier batches). 修正する(しゅうせいする) = to correct/revise (a document, plan). 再検討する(さいけんとうする) = to reconsider (formally)." },
      { t: "meaning", s: "「見直す」の意味は？", o: ["to review; to revise; to reassess", "to reform; to correct (behavior)", "to correct; to revise (a document)", "to reconsider (formally)"], a: 0, e: "見直す covers proofreading (テストの答えを見直す = to check over test answers) and reassessing something (制度を見直す = to review a system). It can also mean to change one's opinion of someone." }
    ]
  },
  {
    id: "n2-0603", w: "背景", r: "はいけい", m: "background; backdrop; context", c: "noun", lv: 1,
    ex: [{ jp: "この事件の背景には複雑な政治問題がある。", en: "There is a complex political issue in the background of this incident." }],
    qs: [
      { t: "fitb", s: "彼がなぜそのような行動をとったのか、その＿＿＿＿を理解することが重要だ。", en: "It is important to understand the background as to why he took such action.", o: ["背景", "経緯", "原因", "動機"], a: 0, e: "背景(はいけい) = background/context (broader circumstances). 経緯(いきさつ/けいい) = circumstances/the course of events. 原因(げんいん) = cause. 動機(どうき) = motive." },
      { t: "meaning", s: "「背景」の意味は？", o: ["background; backdrop; context", "circumstances; course of events", "cause; reason", "motive; incentive"], a: 0, e: "背景 is the backdrop or context (社会的背景 = social background, 背景知識 = background knowledge). 動機 is the specific reason someone acted. 経緯 is the sequence of events leading up to something." }
    ]
  },
  {
    id: "n2-0604", w: "課題", r: "かだい", m: "task; issue; challenge; assignment", c: "noun", lv: 1,
    ex: [{ jp: "少子高齢化は日本社会が抱える最大の課題の一つだ。", en: "The declining birthrate and aging population is one of the biggest challenges facing Japanese society." }],
    qs: [
      { t: "fitb", s: "今学期の＿＿＿＿は研究発表で、来月末が締め切りだ。", en: "This semester's assignment is a research presentation, and the deadline is at the end of next month.", o: ["課題", "宿題", "任務", "使命"], a: 0, e: "課題(かだい) = an assigned task or social challenge (wide scope). 宿題(しゅくだい) = homework (school assignment to do at home). 任務(にんむ) = a mission/duty. 使命(しめい) = a higher calling/mission." },
      { t: "meaning", s: "「課題」の意味は？", o: ["task; issue; challenge; assignment", "homework; schoolwork", "mission; assigned duty", "higher calling; life mission"], a: 0, e: "課題 is both academic (提出課題 = submitted assignment) and social (社会課題 = social challenge). 宿題 is specifically homework. 使命 is a grand sense of purpose." }
    ]
  },
  {
    id: "n2-0605", w: "現象", r: "げんしょう", m: "phenomenon; occurrence", c: "noun", lv: 1,
    ex: [{ jp: "オーロラは高緯度地域で見られる自然現象だ。", en: "The aurora is a natural phenomenon seen in high-latitude regions." }],
    qs: [
      { t: "fitb", s: "気温が上がるにつれて氷が解けるのは自然の＿＿＿＿だ。", en: "Ice melting as the temperature rises is a natural phenomenon.", o: ["現象", "事象", "事態", "出来事"], a: 0, e: "現象(げんしょう) = a phenomenon (natural or social occurrence). 事象(じしょう) = a phenomenon/event (more formal/scientific). 事態(じたい) = a situation/state of affairs (often serious). 出来事(できごと) = an event/happening (everyday)." },
      { t: "meaning", s: "「現象」の意味は？", o: ["phenomenon; occurrence", "phenomenon; event (scientific)", "situation; state of affairs (serious)", "event; happening (everyday)"], a: 0, e: "現象 describes observable occurrences (社会現象 = social phenomenon, 自然現象 = natural phenomenon). 事態 implies a serious or problematic situation. 出来事 is a neutral everyday event." }
    ]
  },
  {
    id: "n2-0606", w: "要因", r: "よういん", m: "factor; cause; element", c: "noun", lv: 1,
    ex: [{ jp: "経済成長の主な要因として、技術革新が挙げられる。", en: "Technological innovation can be cited as a major factor in economic growth." }],
    qs: [
      { t: "fitb", s: "事故の＿＿＿＿を詳しく調べたところ、人的ミスが主な原因だとわかった。", en: "When the factors of the accident were investigated in detail, it became clear that human error was the main cause.", o: ["要因", "原因", "理由", "根拠"], a: 0, e: "要因(よういん) = a contributing factor (often one of several). 原因(げんいん) = the cause (can be the main one). 理由(りゆう) = a reason (subjective, given by a person). 根拠(こんきょ) = a basis/grounds." },
      { t: "meaning", s: "「要因」の意味は？", o: ["factor; contributing cause", "cause; main cause", "reason (given by a person)", "basis; grounds"], a: 0, e: "要因 is one of multiple contributing factors (成功の要因 = factors for success). 原因 is the cause (複数の原因 = multiple causes). 理由 is a personal explanation. 根拠 is the evidence or basis for a claim." }
    ]
  },
  {
    id: "n2-0607", w: "維持", r: "いじ", m: "maintenance; preservation; keeping up", c: "noun", lv: 1,
    ex: [{ jp: "体重を維持するために、食事と運動に気をつけている。", en: "I watch my diet and exercise to maintain my weight." }],
    qs: [
      { t: "fitb", s: "この美しい景観を後世に伝えるため、地域住民が協力して＿＿＿＿している。", en: "Local residents are cooperating to preserve this beautiful landscape for future generations.", o: ["維持", "保存", "保護", "保全"], a: 0, e: "維持(いじ) = maintaining a current state. 保存(ほぞん) = preservation/saving (food, files, heritage). 保護(ほご) = protection (of rights, species). 保全(ほぜん) = conservation/preservation (of nature, safety)." },
      { t: "meaning", s: "「維持」の意味は？", o: ["maintenance; keeping up (a state)", "preservation; saving (food, files)", "protection (of rights, species)", "conservation (of nature, safety)"], a: 0, e: "維持 is actively keeping something in its current condition (品質維持 = quality maintenance, 現状維持 = maintaining the status quo). 保存 is saving something from change or loss." }
    ]
  },
  {
    id: "n2-0608", w: "拡大", r: "かくだい", m: "expansion; enlargement; magnification", c: "noun", lv: 1,
    ex: [{ jp: "この企業は海外市場への拡大を積極的に進めている。", en: "This company is actively expanding into overseas markets." }],
    qs: [
      { t: "fitb", s: "地図を＿＿＿＿して、細かい道もはっきり見えるようにした。", en: "I magnified the map so that even small roads could be clearly seen.", o: ["拡大", "拡張", "拡充", "増大"], a: 0, e: "拡大(かくだい) = enlargement/expansion (images, scope). 拡張(かくちょう) = extension/expansion (of facilities, capacity). 拡充(かくじゅう) = reinforcement/expansion (by improving content). 増大(ぞうだい) = growth in size or number." },
      { t: "meaning", s: "「拡大」の意味は？", o: ["expansion; enlargement; magnification", "extension; expansion (capacity)", "reinforcement; expansion (by improving)", "growth; increase (in size or number)"], a: 0, e: "拡大 covers both physical magnification (拡大鏡 = magnifying glass) and scope expansion (規模を拡大する = to expand the scale). 拡張 is more about extending what already exists." }
    ]
  },
  {
    id: "n2-0609", w: "促進", r: "そくしん", m: "promotion; facilitation; acceleration", c: "noun", lv: 1,
    ex: [{ jp: "政府は再生可能エネルギーの普及促進に向けた政策を導入した。", en: "The government introduced policies aimed at promoting the spread of renewable energy." }],
    qs: [
      { t: "fitb", s: "適度な有酸素運動は脂肪燃焼を＿＿＿＿する効果がある。", en: "Moderate aerobic exercise has the effect of promoting fat burning.", o: ["促進", "促す", "加速", "推進"], a: 0, e: "促進(そくしん)する = to promote/facilitate/accelerate (a process). 促す(うながす) = to urge/prompt (a person). 加速(かそく)する = to speed up/accelerate. 推進(すいしん)する = to drive forward/promote (a project)." },
      { t: "meaning", s: "「促進」の意味は？", o: ["promotion; facilitation; acceleration", "urging; prompting (a person)", "speeding up; acceleration", "driving forward; promotion (of a project)"], a: 0, e: "促進 is used for promoting or facilitating a process (血行促進 = improving blood circulation, 経済促進 = economic promotion). 推進 is about moving a plan or project forward actively." }
    ]
  },
  {
    id: "n2-0610", w: "支援", r: "しえん", m: "support; aid; assistance; backing", c: "noun", lv: 1,
    ex: [{ jp: "被災地への支援として、食料や医薬品が届けられた。", en: "Food and medicine were delivered as support for the disaster-stricken area." }],
    qs: [
      { t: "fitb", s: "留学生が安心して学べるよう、大学が生活面での＿＿＿＿を充実させている。", en: "The university is enhancing its daily-life support so that international students can study with peace of mind.", o: ["支援", "援助", "サポート", "補助"], a: 0, e: "支援(しえん) = support/backing (broad, often organizational). 援助(えんじょ) = aid/assistance (often international or emergency). サポート = support (general, English loanword). 補助(ほじょ) = subsidy/supplement (financial or functional)." },
      { t: "meaning", s: "「支援」の意味は？", o: ["support; aid; backing (broad)", "aid; assistance (international/emergency)", "support (general loanword)", "subsidy; supplement (financial)"], a: 0, e: "支援 is broad support from an organization or group (支援活動 = support activities, 子育て支援 = childcare support). 援助 is often humanitarian aid. 補助 is financial supplementation." }
    ]
  },
  {
    id: "n2-0611", w: "効果", r: "こうか", m: "effect; effectiveness; result", c: "noun", lv: 1,
    ex: [{ jp: "この薬の効果が出るまで、数日かかる場合がある。", en: "It may take several days for this medicine to take effect." }],
    qs: [
      { t: "fitb", s: "新しいダイエット方法を試したが、期待していたほどの＿＿＿＿はなかった。", en: "I tried a new dieting method, but it didn't have as much effect as I had hoped.", o: ["効果", "効能", "効力", "作用"], a: 0, e: "効果(こうか) = effect/effectiveness (general term). 効能(こうのう) = efficacy (medical/health effect, often on product labels). 効力(こうりょく) = effectiveness/validity (legal, contractual). 作用(さよう) = action/effect (scientific/mechanical)." },
      { t: "meaning", s: "「効果」の意味は？", o: ["effect; effectiveness (general)", "efficacy (medical/health benefit)", "effectiveness; validity (legal)", "action; effect (scientific)"], a: 0, e: "効果 is the most general word (効果がある = to be effective, 費用対効果 = cost-effectiveness). 効能 appears on medicine labels. 効力 refers to legal validity." }
    ]
  },
  {
    id: "n2-0612", w: "一致", r: "いっち", m: "agreement; coincidence; match; unanimity", c: "noun", lv: 1,
    ex: [{ jp: "二人の意見が完全に一致したので、すぐに話が進んだ。", en: "The two of them were in complete agreement, so the discussion proceeded quickly." }],
    qs: [
      { t: "fitb", s: "記録に残っているデータと実際の数値が＿＿＿＿しない。", en: "The data on record does not match the actual figures.", o: ["一致", "合致", "合う", "対応"], a: 0, e: "一致(いっち)する = to match/agree (opinions, data, facts). 合致(がっち)する = to match/conform (more formal/literary). 合う(あう) = to fit/match (general). 対応(たいおう)する = to correspond to." },
      { t: "meaning", s: "「一致」の意味は？", o: ["agreement; match; unanimity", "conformity; agreement (formal/literary)", "fitting; matching (general)", "correspondence; dealing with"], a: 0, e: "一致 describes things that match up (意見の一致 = agreement of opinions, 全員一致 = unanimity). 合致 is more formal. 一致団結(いっちだんけつ) = unity." }
    ]
  },
  {
    id: "n2-0613", w: "転換", r: "てんかん", m: "conversion; shift; switch; change", c: "noun", lv: 1,
    ex: [{ jp: "会社は石炭から再生可能エネルギーへの転換を進めている。", en: "The company is advancing its shift from coal to renewable energy." }],
    qs: [
      { t: "fitb", s: "気分＿＿＿＿に散歩に出かけたら、素晴らしい景色に出会えた。", en: "When I went for a walk to change my mood, I came across a wonderful view.", o: ["転換", "転換点", "切り替え", "転機"], a: 0, e: "転換(てんかん) = a conversion/shift (気分転換 = a change of mood/scenery, エネルギー転換 = energy transition). 転換点(てんかんてん) = a turning point. 切り替え(きりかえ) = switching/changeover (more operational). 転機(てんき) = a turning point (in life or career)." },
      { t: "meaning", s: "「転換」の意味は？", o: ["conversion; shift; change", "turning point (on a graph/timeline)", "switching; changeover (operational)", "turning point (in life/career)"], a: 0, e: "転換 is a broad shift or change (方向転換 = change of direction, 価値観の転換 = a shift in values, 気分転換 = refreshing break). 転機 is a life-changing moment." }
    ]
  },
  {
    id: "n2-0614", w: "向上", r: "こうじょう", m: "improvement; advancement; progress", c: "noun", lv: 1,
    ex: [{ jp: "継続的な学習が語学力の向上につながる。", en: "Continuous learning leads to improvement in language ability." }],
    qs: [
      { t: "fitb", s: "社員の技術＿＿＿＿のため、毎月研修プログラムを実施している。", en: "We conduct a training program every month to improve employees' skills.", o: ["向上", "上達", "進歩", "向上心"], a: 0, e: "向上(こうじょう) = improvement/advancement (quality, ability). 上達(じょうたつ) = improvement (in skill: sport, language). 進歩(しんぽ) = progress/advance (knowledge, technology). 向上心(こうじょうしん) = ambition/drive to improve." },
      { t: "meaning", s: "「向上」の意味は？", o: ["improvement; advancement (quality)", "improvement (in skill: sport, language)", "progress; advance (knowledge, tech)", "drive to improve; ambition"], a: 0, e: "向上 is broad upward improvement (生活水準の向上 = improvement of living standards, 向上させる = to improve something). 上達 is specifically skill improvement. 向上心 is the motivation to improve oneself." }
    ]
  },
  {
    id: "n2-0615", w: "成果", r: "せいか", m: "result; outcome; achievement; fruit of effort", c: "noun", lv: 1,
    ex: [{ jp: "長年の研究の成果がついに論文として発表された。", en: "The results of years of research were finally published as a paper." }],
    qs: [
      { t: "fitb", s: "努力が実を結び、プロジェクトは大きな＿＿＿＿を上げた。", en: "The efforts bore fruit and the project achieved great results.", o: ["成果", "成績", "実績", "結果"], a: 0, e: "成果(せいか) = the fruits of effort (positive outcome from hard work). 成績(せいせき) = grades/results (academic or performance records). 実績(じっせき) = track record/past achievements. 結果(けっか) = result/outcome (neutral, could be positive or negative)." },
      { t: "meaning", s: "「成果」の意味は？", o: ["fruit of effort; achievement", "grades; performance record", "track record; past achievements", "result; outcome (neutral)"], a: 0, e: "成果 implies a positive, tangible result from effort (成果を上げる = to achieve results). 実績 is an established track record. 結果 is neutral — it can be good or bad." }
    ]
  },
  {
    id: "n2-0616", w: "適応", r: "てきおう", m: "adaptation; adjustment; conformity", c: "noun", lv: 1,
    ex: [{ jp: "異文化への適応には時間がかかるが、それ自体が大切な経験だ。", en: "Adapting to a different culture takes time, but the process itself is a valuable experience." }],
    qs: [
      { t: "fitb", s: "新しい環境への＿＿＿＿が早い人は、どこに行っても活躍できる。", en: "A person who adapts quickly to a new environment can be active wherever they go.", o: ["適応", "順応", "対応", "慣れ"], a: 0, e: "適応(てきおう) = adaptation (to a new environment, biology). 順応(じゅんのう) = adaptation/acclimatization (more gradual, biological). 対応(たいおう) = response/handling. 慣れ(なれ) = getting used to something (familiarity)." },
      { t: "meaning", s: "「適応」の意味は？", o: ["adaptation; adjustment to environment", "gradual acclimatization", "response; dealing with", "getting used to; familiarity"], a: 0, e: "適応 is used for active adaptation to an environment (社会適応 = social adaptation, 適応障害 = adjustment disorder). 順応 is more passive, gradual acclimatization." }
    ]
  },
  {
    id: "n2-0617", w: "主張", r: "しゅちょう", m: "claim; assertion; argument; contention", c: "noun", lv: 1,
    ex: [{ jp: "彼は自分の主張を証拠を示しながら丁寧に説明した。", en: "He carefully explained his argument while presenting evidence." }],
    qs: [
      { t: "fitb", s: "どんな反論が来ても、自分の＿＿＿＿を曲げなかった。", en: "No matter what counterarguments came, he did not change his stance.", o: ["主張", "意見", "立場", "信念"], a: 0, e: "主張(しゅちょう) = a claim/assertion (strongly held and argued). 意見(いけん) = opinion (general). 立場(たちば) = position/stance (situational). 信念(しんねん) = conviction/belief (deeply held)." },
      { t: "meaning", s: "「主張」の意味は？", o: ["claim; assertion (strongly argued)", "opinion; view (general)", "position; stance (situational)", "conviction; belief (deeply held)"], a: 0, e: "主張 is an opinion you actively argue for (権利を主張する = to assert one's rights, 主張が通る = for one's argument to be accepted). 信念 is a core belief that guides you." }
    ]
  },
  {
    id: "n2-0618", w: "認識", r: "にんしき", m: "recognition; understanding; awareness; perception", c: "noun", lv: 1,
    ex: [{ jp: "問題の深刻さについての認識が、担当者の間で共有されていなかった。", en: "There was no shared recognition of the seriousness of the problem among those in charge." }],
    qs: [
      { t: "fitb", s: "私たちはこの問題に対する＿＿＿＿をあらためる必要がある。", en: "We need to revise our perception of this issue.", o: ["認識", "理解", "見方", "考え方"], a: 0, e: "認識(にんしき) = cognitive recognition/awareness (abstract understanding). 理解(りかい) = comprehension/understanding (grasping meaning). 見方(みかた) = a way of seeing/perspective. 考え方(かんがえかた) = a way of thinking." },
      { t: "meaning", s: "「認識」の意味は？", o: ["recognition; awareness; perception", "comprehension; understanding", "perspective; way of seeing", "way of thinking; approach"], a: 0, e: "認識 is cognitive awareness or perception (誤認識 = misperception, 認識を共有する = to share an understanding). 理解 is about grasping the meaning of something." }
    ]
  },
  {
    id: "n2-0619", w: "実態", r: "じったい", m: "actual state; real situation; true nature", c: "noun", lv: 1,
    ex: [{ jp: "長時間労働の実態を明らかにするため、調査が行われた。", en: "A survey was conducted to reveal the actual state of long working hours." }],
    qs: [
      { t: "fitb", s: "その企業の財務の＿＿＿＿を調べると、見かけ上の数字とは大きく異なっていた。", en: "When the actual financial state of the company was examined, it was very different from the surface numbers.", o: ["実態", "実情", "現状", "実績"], a: 0, e: "実態(じったい) = the true/actual state (often revealing hidden reality). 実情(じつじょう) = the real situation/circumstances (with nuance of difficulties). 現状(げんじょう) = the current state. 実績(じっせき) = track record/actual achievements." },
      { t: "meaning", s: "「実態」の意味は？", o: ["true state; real nature (hidden)", "real situation; circumstances (with difficulties)", "current state; status quo", "track record; actual achievements"], a: 0, e: "実態 often has a nuance of uncovering what is really going on beneath appearances (実態調査 = fact-finding survey, 実態を明らかにする = to reveal the true state). 実情 implies difficult circumstances." }
    ]
  },
  {
    id: "n2-0620", w: "概念", r: "がいねん", m: "concept; notion; idea", c: "noun", lv: 1,
    ex: [{ jp: "「マインドフルネス」という概念は、近年日本でも広まっている。", en: "The concept of 'mindfulness' has been spreading in Japan in recent years." }],
    qs: [
      { t: "fitb", s: "従来の＿＿＿＿を覆す新しい技術が登場し、業界に衝撃を与えた。", en: "A new technology that overturned conventional concepts appeared and shocked the industry.", o: ["概念", "観念", "通念", "発想"], a: 0, e: "概念(がいねん) = a concept/notion (general, abstract). 観念(かんねん) = an idea/notion (often with moral/metaphysical overtone; already in earlier batches). 通念(つうねん) = a common/prevailing belief. 発想(はっそう) = an idea/inspiration (already in earlier batches)." },
      { t: "meaning", s: "「概念」の意味は？", o: ["concept; notion (general/abstract)", "idea; notion (moral/metaphysical)", "common belief; prevailing notion", "idea; inspiration; thinking approach"], a: 0, e: "概念 is the intellectual concept of something (抽象的概念 = abstract concept, 概念を理解する = to understand a concept). 通念 is what most people conventionally believe." }
    ]
  },
];
