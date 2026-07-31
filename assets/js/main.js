/* ============================================================
   北大燕姐 · 个人品牌站 v6 — 交互逻辑 + 中英双语 i18n
   ============================================================ */
(function () {
  'use strict';

  var WECHAT = 'cheny2806';
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ============================================================
     中英双语翻译字典
     ============================================================ */
  var I18N = {
  "zh": {
    "brand.name": "北大燕姐",
    "nav.about": "我是谁",
    "nav.services": "我的服务",
    "nav.trust": "信任背书",
    "nav.radar": "IP定位",
    "nav.geo": "GEO增长",
    "nav.articles": "文章",
    "nav.contact": "联系我",
    "nav.wechat": "加微信",
    "hero.eyebrow": "北大燕姐 · AI定位与GEO增长",
    "hero.title": "放大企业<span class=\"accent\">锋芒</span>，<br>看见个人<span class=\"accent\">光芒</span>",
    "hero.facts": "用AI定位与GEO增长，帮企业讲清优势、被搜索理解、被客户选择；也帮个人从经历里萃取定位，让价值被看见、被信任、被持续记住。",
    "hero.cta1": "开始 IP 定位雷达",
    "hero.cta2": "加微信做深度诊断",
    "about.eyebrow": "01 — About",
    "about.title": "我亲历过品牌从第一批产品入库，到破亿增长的全过程",
    "about.p1": "那不是一个写在方案里的项目。它有真实的产品、真实的渠道、真实的用户、真实的终端，也有每一天都要解决的市场问题。",
    "about.p2": "产品刚进入市场时，没有现成的认知，没有成熟的打法，也没有一套可以直接复制的增长路径。从产品入库、新品上市、渠道构建、经销商谈判，到终端动销、消费者互动、会员服务、数据复盘和重点区域打造，每一步都要在真实市场里验证。",
    "about.p3": "我参与的不是某一个单点动作，而是品牌从0到1、从1到规模化过程中，那些最具体、最琐碎、也最决定成败的环节。",
    "about.p4": "当然，我不会把一个品牌的破亿增长简单归功于个人。真正的结果，一定来自企业平台、品牌历史、产品能力、团队配合、渠道势能和时代窗口的共同作用。但这段经历给了我一个非常重要的底层判断：一个品牌能不能长出来，不只看它有没有好产品，更看它能不能被渠道理解、被用户信任、被市场记住、被持续选择。<br><br>这也是为什么我今天做AI定位与GEO增长时，不会只盯着“内容怎么写”。我会从定位、表达、搜索、推荐、信任、成交这条完整链路，看一个企业或个人到底卡在哪里。",
    "about.p5": "真正的品牌增长，不是把优势说得更响，而是让市场在每一个真实触点里，一次次确认你值得选择。",
    "stat1.num": "15<small>年</small>",
    "stat1.label": "世界500强品牌运营与管理",
    "stat1.sub": "长期扎根品牌运营与品牌管理一线",
    "stat2.num": "10<small>年+</small>",
    "stat2.label": "企业培训与职业培训师",
    "stat2.sub": "练就能把实战讲清楚的能力",
    "stat3.num": "0<small>→亿</small>",
    "stat3.label": "从零做到品牌过亿",
    "stat3.sub": "跑通产品从0到破亿的完整成长路径",
    "dual.eyebrow": "先看见自己",
    "dual.title": "你不是缺内容，而是价值还没有被准确看见",
    "dual.sub": "企业的增长卡点，往往不是产品不够好，而是优势没有被客户和系统读懂；个人的定位卡点，也往往不是经历不够多，而是价值还没有被重新萃取。",
    "dual.b.title": "让企业优势，变成可搜索、可理解、可转化的增长资产",
    "dual.b.who": "适合企业老板、品牌操盘手、营销总监、部门负责人、股东合伙人。",
    "dual.b.desc": "你不缺产品，不缺团队，也不缺行业经验。但客户看到你，还是觉得“和别人差不多”；内容发了很多，却没有稳定线索；销售讲了很多，客户还是迟迟不决策。<br><br>真正的问题，可能不是你不够好，而是你的优势没有被翻译成客户听得懂、平台识别得出、AI搜索愿意引用的表达系统。<br><br>我帮企业做的，不是简单写文案、做账号、追热点，而是重新梳理你的品牌差异、客户痛点、内容结构和GEO增长路径，让你的品牌在用户搜索、平台推荐、AI问答和销售转化中，被更准确地理解和选择。",
    "dual.b.btn": "免费诊断企业定位",
    "dual.b.quote": "企业真正的锋芒，不在自己说了多少优势，而在客户能不能一眼看懂你凭什么值得选择。",
    "dual.c.title": "让个人经历，变成可表达、可信任、可成交的 IP 主线",
    "dual.c.who": "适合个人IP、自媒体创作者、专家型个体、职业转型者、宝妈、自由职业者。",
    "dual.c.desc": "你可能有过专业工作，有过人生转折，有过行业经验，也有别人没有的观察和判断。但一到做账号、写简介、定方向、发内容，你就开始卡住：我到底适合讲什么？我的经历还有价值吗？和我相似的人那么多，我凭什么被看见？我身上那些习以为常的东西，真的有人需要吗？<br><br>个人IP定位，不是给你套一个人设，也不是逼你变成另一个人。它是从你的经历、能力、性格、资源、表达方式和未来生活路径里，找到那条最能承载信任、内容和商业转化的主线。",
    "dual.c.btn": "免费诊断我的定位",
    "dual.c.quote": "很多人不是没有光，而是站得太近，看不见自己身上的亮处。",
    "dual.bottom": "企业的锋芒，藏在没被讲清的优势里；个人的光芒，藏在被自己忽略的经历里。",
    "geo.eyebrow": "GEO · 内容资产",
    "geo.title": "未来不是只抢流量，而是让你被 AI 搜到、读懂、引用和推荐",
    "geo.main": "过去，很多企业和个人做内容，只关心有没有播放量、有没有点赞、有没有涨粉。但今天，流量入口正在变化。用户不再只靠刷到你，也会通过搜索、问答引擎、AI助手和平台推荐来判断：谁更专业？谁更可信？谁更适合解决我的问题？<br><br>如果你的品牌表达不清，平台不知道该把你推荐给谁；如果你的内容结构混乱，AI不知道该如何理解你；如果你的关键词、案例、观点和服务说明没有形成体系，用户即使有需求，也很难在搜索路径里遇见你。<br><br>所以GEO要解决的，不是“再多发几篇内容”，而是建立一套能被人和AI同时识别的内容资产。",
    "geo.biz": "对企业来说，GEO帮你把产品优势、品牌差异、客户痛点、服务场景和成交理由，整理成可搜索、可理解、可引用的内容系统。",
    "geo.ip": "对个人IP来说，GEO帮你把经历、能力、标签、观点、服务和案例，沉淀成平台能识别、用户能记住、AI能理解的个人品牌资产。",
    "geo.btn": "诊断我的 GEO 识别度",
    "geo.quote": "流量是被看见，GEO是被理解；真正值钱的内容，不只是让人刷到你，而是让系统知道你值得被推荐。",
    "svc.eyebrow": "02 — Services",
    "svc.title": "从看见问题，到看清定位，再到开始被选择",
    "svc.sub": "定位不是一句口号，内容也不是随便发布。真正有效的增长，是先看见卡点，再萃取优势，最后把价值变成可发布、可搜索、可转化的内容资产。",
    "svc1.tag": "Step 1 · 先看清卡点",
    "svc1.title": "AI + IP 定位工具包",
    "svc1.sub": "先用 10 分钟，看清你的定位卡点",
    "svc1.desc": "适合还不确定自己该不该做IP，或者企业还不确定品牌表达卡在哪里的人。你可以先通过工具包，快速梳理自己的经历、优势、客户对象、内容方向和当前卡点。这不是一个简单模板，而是一套帮你打开思路的自测入口。如果它帮你看见了问题，欢迎把这份自测分享给同样需要的人。",
    "svc1.btn": "免费开始自测",
    "svc2.tag": "Step 2 · 深度诊断",
    "svc2.title": "AI + IP 定位雷达深度诊断",
    "svc2.sub": "用一次低门槛深度诊断，把你的经历、优势和商业方向讲清楚",
    "svc2.desc": "你把自己讲不清的地方交给我，我帮你萃取出最值得被看见的定位主线。这不是模板测试，也不是纯AI报告，而是结合AI结构化分析和燕姐人工判断，为你输出一份轻量但有判断力的深度诊断。",
    "svc2.deliver": "你将拿到：<br>1. 一份3页核心诊断报告<br>2. 一页7天行动清单<br>3. 一段5-8分钟专属语音解读<br>4. 一个下一步建议：自执行 / 内容起势舱 / 深度陪跑",
    "svc2.btn": "加微信预约诊断",
    "svc2.note": "先付费后启动。付费后发送诊断采集卡，支持文档填写、微信语音转文字或陪填引导。",
    "svc2.quote": "你不是没有定位，而是还没有人把你的经历、优势和未来，放在同一张地图上看。",
    "svc3.tag": "Step 3 · 内容起势",
    "svc3.title": "低粉高转化内容起势舱",
    "svc3.sub": "定位确定后，10-15 天搭好第一批能引流、能建立信任、能带来咨询的内容资产",
    "svc3.desc": "粉丝少，不代表没有机会。真正的问题是：你的账号有没有清晰标签，内容有没有精准人群，主页有没有信任入口，用户看完以后有没有理由继续咨询。完成定位诊断后，我会根据你的个人优势、目标用户和商业方向，帮你搭建第一批可发布内容，让你不用再卡在“第一条发什么、简介怎么写、账号怎么立住”这些问题上。",
    "svc3.deliver": "包括账号简介优化、内容栏目设计、首批选题、可发布文案、标题方向、发布顺序建议和私信转化话术。",
    "svc3.btn": "先完成定位诊断",
    "svc3.quote": "定位让你知道自己是谁，内容让别人开始记住你是谁。",
    "svc4.tag": "Offline",
    "svc4.title": "线下半天·行业资源碰撞",
    "svc4.desc": "面对面深度互动，深入了解你的真实需求。更难得的，是这里汇聚了品牌操盘手、企业决策者之间的资源链接与深度对接——一场真正稀缺的资源碰撞。",
    "svc4.btn": "预约咨询",
    "svc5.tag": "Custom",
    "svc5.title": "深度合作",
    "svc5.desc": "基于深度信任与渠道深耕，我们以共创共荣的方式，一起开发属于你的新生态。",
    "svc5.gold": "以信任立本，以结果立锋。",
    "svc5.btn": "加微信聊",
    "trust.eyebrow": "03 — Trust",
    "trust.title": "信任背书<em>。</em>",
    "trust.q1": "燕姐只讲真话，只讲自己做过的事情。走过的每一步，都算数。",
    "trust.q2": "在AI领域学习与成长的每一步，做给你看、告诉你怎么做。",
    "trust1.num": "0 → 亿",
    "trust1.title": "从零到品牌破亿",
    "trust1.desc": "从零起步，把一个品牌做到年营业额破亿。规划、构建、推动、落地——品牌从萌芽到爆发的每一个关键节点，我全程参与。这条路，实打实从头走到了尾。",
    "trust2.num": "300<small>万</small>",
    "trust2.title": "一场活动拉爆一座城",
    "trust2.desc": "瞄准一个战略重点城市，从策划到客户意向、活动细节、反复协同业务团队调研市场与竞品、深挖用户需求与消费路径、跟渠道经销商团队一轮轮复盘脑暴——最终一次活动拉爆市场，<strong>单场完成300万实际销售</strong>。合作方从头到尾赞不绝口：活动前的召集令培训、过程中的细致对接复盘、快速的执行力，给他们留下了极深的印象和极好的口碑。",
    "contact.eyebrow": "04 — Let's Talk",
    "contact.title": "不知道自己卡在哪里，<br>先进入<em>定位雷达</em>看一看",
    "contact.sub": "如果你已经很清楚自己需要专属判断，也可以直接加微信预约深度诊断。",
    "contact.copy": "复制微信号",
    "contact.cta1": "开始 IP 定位雷达",
    "contact.cta2": "加微信做深度诊断",
    "contact.quote": "好的转化路径不是给用户更多选择，而是让他在最少犹豫里，走向最适合自己的下一步。",
    "footer.brand": "北大燕姐 · AI定位与GEO增长",
    "footer.copy": "© 2026 北大燕姐 · 个人品牌站",
    "mcta.services": "定位雷达",
    "mcta.wechat": "加微信深度诊断",
    "copytip": "已复制微信号 cheny2806",
    "modal.toolkit.title": "AI + IP 定位工具包",
    "modal.toolkit.desc": "10分钟，三步挖出你的核心竞争力。<br>品牌操盘手的方法，跟AI生成的不一样。做完觉得值，再来找我聊。",
    "modal.toolkit.btn": "打开免费自测 →",
    "modal.toolkit.href": "radar.html",
    "modal.toolkit.note": "觉得有用，分享给需要的人",
    "modal.consult.title": "服务咨询",
    "modal.consult.desc": "添加微信，详细沟通你的需求，我给你具体的建议和方案。",
    "modal.consult.btn": "复制微信号",
    "modal.radar.title": "AI + IP 定位雷达",
    "modal.radar.desc": "扫描下方二维码，进入智能体页面，直接开始你的IP定位诊断。",
    "modal.radar.placeholder": "定位雷达智能体<br>二维码待提供<br><br><small style=\"font-size:11px;\">智能体开发完成后<br>替换此二维码即可</small>",
    "modal.radar.note": "¥500 · 报告+批注+语音解读",
    "_title": "北大燕姐 · AI定位与GEO增长｜IP定位雷达与低粉高转化内容起势",
    "_desc": "北大燕姐专注AI定位、IP定位雷达与GEO内容增长，帮助企业讲清品牌优势、提升精准引流与转化，也帮助个人从经历中萃取可表达、可信任、可成交的个人IP主线。"
  },
  "zh-tw": {
    "svc.sub": "定位不是一句口號，內容也不是隨便發布。真正有效的增長，是先看見卡點，再萃取優勢，最後把價值變成可發布、可搜索、可轉化的內容資產。",
    "svc1.sub": "先用 10 分鐘，看清你的定位卡點",
    "svc2.sub": "用一次低門檻深度診斷，把你的經歷、優勢和商業方向講清楚",
    "svc2.deliver": "你將拿到：<br>1. 一份3頁核心診斷報告<br>2. 一頁7天行動清單<br>3. 一段5-8分鐘專屬語音解讀<br>4. 一個下一步建議：自執行 / 內容起勢艙 / 深度陪跑",
    "svc2.note": "先付費後啟動。付費後發送診斷採集卡，支持文檔填寫、微信語音轉文字或陪填引導。",
    "svc2.quote": "你不是沒有定位，而是還沒有人把你的經歷、優勢和未來，放在同一張地圖上看。",
    "svc3.sub": "定位確定後，10-15 天搭好第一批能引流、能建立信任、能帶來諮詢的內容資產",
    "svc3.deliver": "包括帳號簡介優化、內容欄目設計、首批選題、可發布文案、標題方向、發布順序建議和私信轉化話術。",
    "svc3.quote": "定位讓你知道自己是誰，內容讓別人開始記住你是誰。",
    "dual.eyebrow": "先看見自己",
    "dual.title": "你不是缺內容，而是價值還沒有被準確看見",
    "dual.sub": "企業的增長卡點，往往不是產品不夠好，而是優勢沒有被客戶和系統讀懂；個人的定位卡點，也往往不是經歷不夠多，而是價值還沒有被重新萃取。",
    "dual.b.title": "讓企業優勢，變成可搜索、可理解、可轉化的增長資產",
    "dual.b.who": "適合企業老闆、品牌操盤手、營銷總監、部門負責人、股東合伙人。",
    "dual.b.desc": "你不缺產品，不缺團隊，也不缺行業經驗。但客戶看到你，還是覺得「和別人差不多」；內容發了很多，卻沒有穩定線索；銷售講了很多，客戶還是遲遲不決策。<br><br>真正的問題，可能不是你不夠好，而是你的優勢沒有被翻譯成客戶聽得懂、平臺識別得出、AI搜索願意引用的表達系統。<br><br>我幫企業做的，不是簡單寫文案、做帳號、追熱點，而是重新梳理你的品牌差異、客戶痛點、內容結構和GEO增長路徑，讓你的品牌在用戶搜索、平臺推薦、AI問答和銷售轉化中，被更準確地理解和選擇。",
    "dual.b.btn": "免費診斷企業定位",
    "dual.b.quote": "企業真正的鋒芒，不在自己說了多少優勢，而在客戶能不能一眼看懂你憑什麼值得選擇。",
    "dual.c.title": "讓個人經歷，變成可表達、可信任、可成交的 IP 主線",
    "dual.c.who": "適合個人IP、自媒體創作者、專家型個體、職業轉型者、寶媽、自由職業者。",
    "dual.c.desc": "你可能有過專業工作，有過人生轉折，有過行業經驗，也有別人沒有的觀察和判斷。但一到做帳號、寫簡介、定方向、發內容，你就開始卡住：我到底適合講什麼？我的經歷還有價值嗎？和我相似的人那麼多，我憑什麼被看見？我身上那些習以為常的東西，真的有人需要嗎？<br><br>個人IP定位，不是給你套一個人設，也不是逼你變成另一個人。它是從你的經歷、能力、性格、資源、表達方式和未來生活路徑裡，找到那條最能承載信任、內容和商業轉化的主線。",
    "dual.c.btn": "免費診斷我的定位",
    "dual.c.quote": "很多人不是沒有光，而是站得太近，看不見自己身上的亮處。",
    "dual.bottom": "企業的鋒芒，藏在沒被講清的優勢裡；個人的光芒，藏在被自己忽略的經歷裡。",
    "geo.eyebrow": "GEO · 內容資產",
    "geo.title": "未來不是只搶流量，而是讓你被 AI 搜到、讀懂、引用和推薦",
    "geo.main": "過去，很多企業和個人做內容，只關心有沒有播放量、有沒有點讚、有沒有漲粉。但今天，流量入口正在變化。用戶不再只靠刷到你，也會通過搜索、問答引擎、AI助手和平臺推薦來判斷：誰更專業？誰更可信？誰更適合解決我的問題？<br><br>如果你的品牌表達不清，平臺不知道該把你推薦給誰；如果你的內容結構混亂，AI不知道該如何理解你；如果你的關鍵詞、案例、觀點和服務說明沒有形成體系，用戶即使有需求，也很難在搜索路徑裡遇見你。<br><br>所以GEO要解決的，不是「再多發幾篇內容」，而是建立一套能被人和AI同時識別的內容資產。",
    "geo.biz": "對企業來說，GEO幫你把產品優勢、品牌差異、客戶痛點、服務場景和成交理由，整理成可搜索、可理解、可引用的內容系統。",
    "geo.ip": "對個人IP來說，GEO幫你把經歷、能力、標籤、觀點、服務和案例，沉澱成平臺能識別、用戶能記住、AI能理解的個人品牌資產。",
    "geo.btn": "診斷我的 GEO 識別度",
    "geo.quote": "流量是被看見，GEO是被理解；真正值錢的內容，不只是讓人刷到你，而是讓系統知道你值得被推薦。",
    "contact.quote": "好的轉化路徑不是給用戶更多選擇，而是讓他在最少猶豫裡，走向最適合自己的下一步。",
    "brand.name": "北大燕姐",
    "nav.about": "我是誰",
    "nav.services": "我的服務",
    "nav.trust": "信任背書",
    "nav.radar": "IP定位",
    "nav.geo": "GEO增長",
    "nav.articles": "文章",
    "nav.contact": "聯繫我",
    "nav.wechat": "加微信",
    "hero.eyebrow": "北大燕姐 · AI定位與GEO增長",
    "hero.title": "放大企業<span class=\"accent\">鋒芒</span>，<br>看見個人<span class=\"accent\">光芒</span>",
    "hero.facts": "用AI定位與GEO增長，幫企業講清優勢、被搜索理解、被客戶選擇；也幫個人從經歷裡萃取定位，讓價值被看見、被信任、被持續記住。",
    "hero.cta1": "開始 IP 定位雷達",
    "hero.cta2": "加微信做深度診斷",
    "about.eyebrow": "01 — About",
    "about.title": "我親歷過品牌從第一批產品入庫，到破億增長的全過程",
    "about.p1": "那不是一個寫在方案裡的項目。它有真實的產品、真實的渠道、真實的用戶、真實的終端，也有每一天都要解決的市場問題。",
    "about.p2": "產品剛進入市場時，沒有現成的認知，沒有成熟的打法，也沒有一套可以直接複製的增長路徑。從產品入庫、新品上市、渠道構建、經銷商談判，到終端動銷、消費者互動、會員服務、數據復盤和重點區域打造，每一步都要在真實市場裡驗證。",
    "about.p3": "我參與的不是某一個單點動作，而是品牌從0到1、從1到規模化過程中，那些最具體、最瑣碎、也最決定成敗的環節。",
    "about.p4": "當然，我不會把一個品牌的破億增長簡單歸功於個人。真正的結果，一定來自企業平臺、品牌歷史、產品能力、團隊配合、渠道勢能和時代窗口的共同作用。但這段經歷給了我一個非常重要的底層判斷：一個品牌能不能長出來，不只看它有沒有好產品，更看它能不能被渠道理解、被用戶信任、被市場記住、被持續選擇。<br><br>這也是為什麼我今天做AI定位與GEO增長時，不會只盯著「內容怎麼寫」。我會從定位、表達、搜索、推薦、信任、成交這條完整鏈路，看一個企業或個人到底卡在哪裡。",
    "about.p5": "真正的品牌增長，不是把優勢說得更響，而是讓市場在每一個真實觸點裡，一次次確認你值得選擇。",
    "stat1.num": "15<small>年</small>",
    "stat1.label": "世界500強品牌運營與管理",
    "stat1.sub": "長期紮根品牌運營與品牌管理一線",
    "stat2.num": "10<small>年+</small>",
    "stat2.label": "企業培訓與職業培訓師",
    "stat2.sub": "練就能把實戰講清楚的能力",
    "stat3.num": "0<small>→億</small>",
    "stat3.label": "從零做到品牌過億",
    "stat3.sub": "跑通產品從0到破億的完整成長路徑",
    "svc.eyebrow": "02 — Services",
    "svc.title": "從看見問題，到看清定位，再到開始被選擇",
    "svc1.tag": "Step 1 · 先看清卡點",
    "svc1.title": "AI + IP 定位工具包",
    "svc1.desc": "適合還不確定自己該不該做IP，或者企業還不確定品牌表達卡在哪裡的人。你可以先通過工具包，快速梳理自己的經歷、優勢、客戶對象、內容方向和當前卡點。這不是一個簡單模板，而是一套幫你打開思路的自測入口。如果它幫你看見了問題，歡迎把這份自測分享給同樣需要的人。",
    "svc1.btn": "免費開始自測",
    "svc2.tag": "Step 2 · 深度診斷",
    "svc2.title": "AI + IP 定位雷達深度診斷",
    "svc2.desc": "你把自己講不清的地方交給我，我幫你萃取出最值得被看見的定位主線。這不是模板測試，也不是純AI報告，而是結合AI結構化分析和燕姐人工判斷，為你輸出一份輕量但有判斷力的深度診斷。",
    "svc2.btn": "加微信預約診斷",
    "svc3.tag": "Step 3 · 內容起勢",
    "svc3.title": "低粉高轉化內容起勢艙",
    "svc3.desc": "粉絲少，不代表沒有機會。真正的問題是：你的帳號有沒有清晰標籤，內容有沒有精準人群，主頁有沒有信任入口，用戶看完以後有沒有理由繼續諮詢。完成定位診斷後，我會根據你的個人優勢、目標用戶和商業方向，幫你搭建第一批可發布內容，讓你不用再卡在「第一條發什麼、簡介怎麼寫、帳號怎麼立住」這些問題上。",
    "svc3.btn": "先完成定位診斷",
    "svc4.tag": "Offline",
    "svc4.title": "線下半天·行業資源碰撞",
    "svc4.desc": "面對面深度互動，深入了解你的真實需求。更難得的，是這裡匯聚了品牌操盤手、企業決策者之間的資源連結與深度對接——一場真正稀缺的資源碰撞。",
    "svc4.btn": "預約諮詢",
    "svc5.tag": "Custom",
    "svc5.title": "深度合作",
    "svc5.desc": "基於深度信任與渠道深耕，我們以共創共榮的方式，一起開發屬於你的新生態。",
    "svc5.gold": "以信任立本，以結果立鋒。",
    "svc5.btn": "加微信聊",
    "trust.eyebrow": "03 — Trust",
    "trust.title": "信任的底氣<em>。</em>",
    "trust.q1": "燕姐只講真話，只講自己做過的事情。走過的每一步，都算數。",
    "trust.q2": "在AI領域學習與成長的每一步，做給你看、告訴你怎麼做。",
    "trust1.num": "0 → 億",
    "trust1.title": "從零到品牌破億",
    "trust1.desc": "從零起步，把一個品牌做到年營業額破億。規劃、構建、推動、落地——品牌從萌芽到爆發的每一個關鍵節點，我全程參與。這條路，實打實從頭走到了尾。",
    "trust2.num": "300<small>萬</small>",
    "trust2.title": "一場活動拉爆一座城",
    "trust2.desc": "瞄準一個戰略重點城市，從策劃到客戶意向、活動細節、反覆協同業務團隊調研市場與競品、深挖用戶需求與消費路徑、跟渠道經銷商團隊一輪輪復盤腦暴——最終一次活動拉爆市場，<strong>單場完成300萬實際銷售</strong>。合作方從頭到尾讚不絕口：活動前的召集令培訓、過程中的細緻對接復盤、快速的執行力，給他們留下了極深的印象和極好的口碑。",
    "contact.title": "不知道自己卡在哪裡，<br>先進入<em>定位雷達</em>看一看",
    "contact.sub": "如果你已經很清楚自己需要專屬判斷，也可以直接加微信預約深度診斷。",
    "contact.copy": "複製微信號",
    "contact.cta1": "開始 IP 定位雷達",
    "contact.cta2": "加微信做深度診斷",
    "footer.brand": "北大燕姐 · AI定位與GEO增長",
    "footer.copy": "© 2026 北大燕姐 · 個人品牌站",
    "mcta.services": "定位雷達",
    "mcta.wechat": "加微信深度診斷",
    "copytip": "已複製微信號 cheny2806",
    "modal.toolkit.title": "AI + IP 定位工具包",
    "modal.toolkit.desc": "10分鐘，三步挖出你的核心競爭力。<br>品牌操盤手的方法，跟AI生成的不一樣。做完覺得值，再來找我聊。",
    "modal.toolkit.btn": "打開免費自測 →",
    "modal.toolkit.href": "radar-zh-tw.html",
    "modal.toolkit.note": "覺得有用，分享給需要的人",
    "modal.consult.title": "服務諮詢",
    "modal.consult.desc": "添加微信，詳細溝通你的需求，我給你具體的建議和方案。",
    "modal.consult.btn": "複製微信號",
    "modal.radar.title": "AI + IP 定位雷達",
    "modal.radar.desc": "掃描下方二維碼，進入智能體頁面，直接開始你的IP定位診斷。",
    "modal.radar.placeholder": "定位雷達智能體<br>二維碼待提供<br><br><small style=\"font-size:11px;\">智能體開發完成後<br>替換此二維碼即可</small>",
    "modal.radar.note": "¥500 · 報告+批註+語音解讀",
    "_title": "北大燕姐 · AI定位與GEO增長｜IP定位雷達與低粉高轉化內容起勢",
    "_desc": "北大燕姐專注AI定位、IP定位雷達與GEO內容增長，幫助企業講清品牌優勢、提升精準引流與轉化，也幫助個人從經歷中萃取可表達、可信任、可成交的個人IP主線。"
  },
  "en": {
    "brand.name": "BeiDa Yan",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.trust": "Trust",
    "nav.radar": "IP Radar",
    "nav.geo": "GEO Growth",
    "nav.articles": "Articles",
    "nav.contact": "Contact",
    "nav.wechat": "WeChat",
    "hero.eyebrow": "BeiDa Yan · AI Positioning & GEO Growth",
    "hero.title": "Amplify your business<em> edge</em>,<br>illuminate your personal<em> light</em>",
    "hero.facts": "AI positioning & GEO growth: help businesses articulate advantages, get understood by search, and chosen by clients; help individuals extract positioning from their stories, so value gets seen, trusted, and remembered.",
    "hero.cta1": "Start IP Positioning Radar",
    "hero.cta2": "WeChat Deep Diagnosis",
    "about.eyebrow": "01 — About",
    "about.title": "I lived through a brand journey from first inventory to 100M+ growth",
    "about.p1": "That was not a project written in a proposal. It had real products, real channels, real users, real terminals, and real market problems to solve every single day.",
    "about.p2": "When the product entered the market, there was no ready-made awareness, no proven playbook, no copyable growth path. From product stocking, launches, channel building, distributor negotiations, to terminal sales, consumer engagement, membership services, data reviews and key region development, every step had to be validated in the real market.",
    "about.p3": "I was part of every single link of the journey from 0 to 1, and from 1 to scale, the most concrete, most trivial, and most decisive details.",
    "about.p4": "Of course, I would never attribute a brand’s 100M+ growth to one person alone. Real results come from the enterprise platform, brand history, product strength, team collaboration, channel momentum and market windows together. But this experience gave me a fundamental judgment: whether a brand can grow does not only depend on whether it has a good product, but whether it can be understood by channels, trusted by users, remembered by the market, and chosen again and again.<br><br>That is why, when I do AI positioning and GEO growth today, I never just look at “how to write content”. I look at the whole chain: positioning, expression, search, recommendation, trust and conversion, to see where an enterprise or an individual is really stuck.",
    "about.p5": "Real brand growth is not about claiming advantages louder, but letting the market confirm, at every real touchpoint, that you are worth choosing.",
    "stat1.num": "15<small>yrs</small>",
    "stat1.label": "Fortune 500 Brand Operations",
    "stat1.sub": "Deeply rooted in frontline brand management",
    "stat2.num": "10<small>+</small>",
    "stat2.label": "Years Corporate Training & Coaching",
    "stat2.sub": "Turning real practice into clear teaching",
    "stat3.num": "0<small>→100M</small>",
    "stat3.label": "Built a Brand from Zero to 100M+",
    "stat3.sub": "Ran the full path from 0 to breakthrough revenue",
    "svc.eyebrow": "02 — Services",
    "svc.title": "From seeing the problem, to seeing the positioning, to being chosen",
    "svc1.tag": "Step 1 · See Your Bottleneck",
    "svc1.title": "AI + IP Positioning Toolkit",
    "svc1.desc": "For those unsure whether to build a personal IP, or enterprises unsure where their brand expression is stuck. Start with the toolkit to quickly map your experience, strengths, target audience, content direction and current bottlenecks. This is not a simple template, but a self-assessment entry that opens your thinking. If it helps you see the problem, feel free to share this self-assessment with someone who needs it.",
    "svc1.btn": "Start Free Self-Assessment",
    "svc2.tag": "Step 2 · Deep Diagnosis",
    "svc2.title": "AI + IP Positioning Radar Deep Diagnosis",
    "svc2.desc": "Hand me what you cannot explain clearly about yourself, and I will extract the positioning line most worth being seen. This is not a template test or a pure AI report; it combines AI structured analysis with Yan’s human judgment, delivering a light but insightful deep diagnosis.",
    "svc2.btn": "WeChat to Book Diagnosis",
    "svc3.tag": "Step 3 · Content Boost",
    "svc3.title": "Low-Follower High-Conversion Content Boost Cabin",
    "svc3.desc": "Few followers does not mean no opportunity. The real questions: does your account have clear labels, precise audiences, a trustworthy homepage, and a reason for users to keep consulting you? After the positioning diagnosis, I will help you build the first batch of publishable content based on your strengths, target users and business direction, so you no longer get stuck on “what to post first, how to write the bio, how to stand up the account”.",
    "svc3.btn": "Complete Positioning Diagnosis First",
    "svc4.tag": "Offline",
    "svc4.title": "Half-Day Offline · Industry Networking",
    "svc4.desc": "Face-to-face deep interaction to understand your real needs. What's rarer is the resource connections and deep matchmaking among brand operators and business decision-makers — a truly scarce collision of resources.",
    "svc4.btn": "Book a Session",
    "svc5.tag": "Custom",
    "svc5.title": "Deep Collaboration",
    "svc5.desc": "Built on deep trust and channel cultivation, we co-create and co-prosper — developing your new ecosystem together.",
    "svc5.gold": "Trust as foundation. Results as edge.",
    "svc5.btn": "Let's Talk",
    "trust.eyebrow": "03 — Trust",
    "trust.title": "Trust<em>.</em>",
    "trust.q1": "I only speak the truth, only about things I've actually done. Every step counts.",
    "trust.q2": "Every step of learning and growing in AI — I show you, then tell you how.",
    "trust1.num": "0 → 100M",
    "trust1.title": "From Zero to 100M Brand",
    "trust1.desc": "Starting from scratch, I grew a brand to over 100M in annual revenue. Strategy, construction, execution, landing — every critical node from inception to breakthrough, I was there. This path, walked end to end for real.",
    "trust2.num": "3M<small>+</small>",
    "trust2.title": "One Event Ignited a City",
    "trust2.desc": "Targeting a strategic city, from planning to customer intent, event details, repeatedly coordinating with business teams to research the market and competitors, digging into user needs and consumption paths, brainstorming with channel distributor teams round after round — ultimately one event ignited the market, <strong>achieving 3M in actual sales in a single event</strong>. Partners praised it throughout: the pre-event mobilization training, meticulous coordination and reviews during the process, and rapid execution left a deep impression and excellent word-of-mouth.",
    "contact.eyebrow": "04 — Let's Talk",
    "contact.title": "Don’t know where you are stuck?<br>Start with the <em>Positioning Radar</em>",
    "contact.sub": "If you already know you need a tailored judgment, you can directly add WeChat to book a deep diagnosis.",
    "contact.copy": "Copy WeChat ID",
    "contact.cta1": "Start IP Positioning Radar",
    "contact.cta2": "WeChat Deep Diagnosis",
    "footer.brand": "BeiDa Yan · AI Positioning & GEO Growth",
    "footer.copy": "© 2026 BeiDa Yan · Personal Brand",
    "mcta.services": "Radar",
    "mcta.wechat": "WeChat Diagnosis",
    "copytip": "WeChat ID cheny2806 copied",
    "modal.toolkit.title": "AI + IP Positioning Toolkit",
    "modal.toolkit.desc": "10 minutes. Three steps to uncover your core competitive edge.<br>A brand strategist's method — not the same as AI-generated. Find it useful? Come talk to me.",
    "modal.toolkit.btn": "Start Free Self-Assessment →",
    "modal.toolkit.href": "radar-en.html",
    "modal.toolkit.note": "Found it useful? Share it with someone who needs it.",
    "modal.consult.title": "Service Consultation",
    "modal.consult.desc": "Add WeChat to discuss your needs in detail. I'll give you specific advice and solutions.",
    "modal.consult.btn": "Copy WeChat ID",
    "modal.radar.title": "AI + IP Positioning Radar",
    "modal.radar.desc": "Scan the QR code below to enter the AI agent page and start your IP positioning diagnosis.",
    "modal.radar.placeholder": "Positioning Radar Agent<br>QR code pending<br><br><small style=\"font-size:11px;\">Replace this QR code<br>once the agent is ready</small>",
    "modal.radar.note": "¥500 · Report + annotations + voice interpretation",
    "_title": "BeiDa Yan · AI Positioning & GEO Growth | IP Positioning Radar & Low-Follower High-Conversion Content",
    "_desc": "BeiDa Yan focuses on AI positioning, IP Positioning Radar and GEO content growth, helping businesses articulate brand advantages and improve precise traffic and conversion, and helping individuals extract expressible, trustworthy, convertible personal IP lines from experience.",
    "svc.sub": "Positioning is not a slogan, and content is not random posting. Real growth starts with seeing the bottleneck, extracting advantages, then turning value into publishable, searchable, convertible content assets.",
    "svc1.sub": "Spend 10 minutes to see your positioning bottleneck",
    "svc2.sub": "A low-threshold deep diagnosis that clarifies your experience, strengths and business direction",
    "svc2.deliver": "You will receive:<br>1. A 3-page core diagnosis report<br>2. A 7-day action checklist<br>3. A 5-8 min personal voice interpretation<br>4. A next-step recommendation: self-execute / content boost cabin / deep coaching",
    "svc2.note": "Pay first, then start. After payment you receive a diagnosis collection card, supporting document filling, WeChat voice-to-text, or guided filling.",
    "svc2.quote": "You do not lack positioning; nobody has put your experience, strengths and future on the same map yet.",
    "svc3.sub": "After positioning, build your first batch of content assets in 10-15 days that attract traffic, build trust and generate inquiries",
    "svc3.deliver": "Including bio optimization, content column design, first batch of topics, publishable copy, title directions, publishing order suggestions and private-message conversion scripts.",
    "svc3.quote": "Positioning tells you who you are; content makes others start remembering who you are.",
    "dual.eyebrow": "See Yourself First",
    "dual.title": "You don’t lack content, your value just hasn’t been accurately seen",
    "dual.sub": "The growth bottleneck of an enterprise is often not a bad product, but advantages not understood by clients and systems; the positioning bottleneck of an individual is often not a lack of experience, but value not yet re-extracted.",
    "dual.b.title": "Turn business advantages into searchable, understandable, convertible growth assets",
    "dual.b.who": "For business owners, brand operators, marketing directors, department heads, and shareholders.",
    "dual.b.desc": "You have products, teams and industry experience. But clients still see you as “just like others”; you post content without stable leads; sales talk a lot, yet clients hesitate.<br><br>The real problem may not be that you are not good enough, but that your advantages have not been translated into an expression system clients understand, platforms recognize, and AI search is willing to cite.<br><br>What I do for enterprises is not just writing copy, managing accounts or chasing trends, but re-organizing your brand differentiation, client pain points, content structure and GEO growth path, so your brand gets understood and chosen in search, recommendations, AI answers and sales conversion.",
    "dual.b.btn": "Free Enterprise Diagnosis",
    "dual.b.quote": "The real edge of a business is not how many advantages you claim, but whether clients can see at a glance why you deserve to be chosen.",
    "dual.c.title": "Turn personal experience into an expressible, trustworthy, convertible IP line",
    "dual.c.who": "For personal IP, content creators, expert individuals, career changers, moms, freelancers.",
    "dual.c.desc": "You may have professional work, life turns, industry experience, and observations others don’t have. But when it comes to building an account, writing a bio, setting direction, posting content, you get stuck: What should I talk about? Is my experience still valuable? There are so many similar people, why would I be seen? Are the things I take for granted really needed?<br><br>Personal IP positioning is not putting on a persona, nor forcing you to become someone else. It finds, from your experience, ability, personality, resources, expression style and future life path, the main line that best carries trust, content and commercial conversion.",
    "dual.c.btn": "Free Diagnosis for Me",
    "dual.c.quote": "Many people are not without light; they stand too close to see the brightness on themselves.",
    "dual.bottom": "The edge of a business hides in advantages not yet told; the light of an individual hides in experience ignored by themselves.",
    "geo.eyebrow": "GEO · Content Assets",
    "geo.title": "The future is not just grabbing traffic, but being searched, understood, cited and recommended by AI",
    "geo.main": "In the past, enterprises and individuals only cared about views, likes and followers. But today, traffic entrances are changing. Users no longer only find you by scrolling; they also judge through search, Q&A engines, AI assistants and platform recommendations: who is more professional? who is more trustworthy? who is more suitable for my problem?<br><br>If your brand expression is unclear, platforms don’t know whom to recommend you to; if your content structure is messy, AI doesn’t know how to understand you; if your keywords, cases, opinions and service descriptions are not systematized, users with real needs can hardly meet you on the search path.<br><br>So GEO is not about “posting a few more pieces”, but building a content asset system recognized by both humans and AI.",
    "geo.biz": "For enterprises, GEO organizes product advantages, brand differences, client pain points, service scenarios and closing reasons into a searchable, understandable, citable content system.",
    "geo.ip": "For personal IP, GEO accumulates your experience, abilities, labels, opinions, services and cases into a personal brand asset that platforms recognize, users remember, and AI understands.",
    "geo.btn": "Diagnose My GEO Visibility",
    "geo.quote": "Traffic means being seen; GEO means being understood. Content that truly matters is not just making people scroll to you, but making the system know you deserve to be recommended.",
    "contact.quote": "A good conversion path does not give users more choices, but lets them move toward the best next step with minimal hesitation."
  }
};
  window.I18N = I18N;

  /* ============================================================
     语言切换
     ============================================================ */
  var currentLang = 'zh';
  try { currentLang = localStorage.getItem('lang') || 'zh'; } catch (e) {}
  window.currentLang = currentLang;

  function applyLang(lang) {
    if (!I18N[lang]) lang = 'zh';
    currentLang = lang;
    window.currentLang = lang;
    var dict = I18N[lang];

    // 更新 html lang 属性
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : (lang === 'zh-tw' ? 'zh-TW' : 'en');

    // 更新 title 和 meta description
    if (dict['_title']) document.title = dict['_title'];
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && dict['_desc']) metaDesc.setAttribute('content', dict['_desc']);

    // 更新所有带 data-i18n 的元素
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });

    // 更新带 data-i18n-href 的链接
    document.querySelectorAll('[data-i18n-href]').forEach(function (el) {
      var hrefKey = el.getAttribute('data-i18n-href');
      if (dict[hrefKey + '.href']) el.href = dict[hrefKey + '.href'];
    });

    // 更新导航链接指向对应语言版本
    var suffix = lang === 'en' ? '-en' : (lang === 'zh-tw' ? '-zh-tw' : '');
    var navMap = { 'IP定位': 'radar', 'GEO增长': 'geo', '文章': 'articles', 'GEO Growth': 'geo', 'Articles': 'articles', 'IP Positioning': 'radar', 'GEO增長': 'geo' };
    document.querySelectorAll('.nav-links a, [href*="radar.html"], [href*="geo.html"], [href*="articles.html"]').forEach(function (a) {
      var href = a.getAttribute('href') || '';
      Object.keys(navMap).forEach(function (label) {
        if (href.indexOf(navMap[label]) !== -1 && href.indexOf('.html') !== -1) {
          var base = navMap[label];
          a.href = base + suffix + '.html' + (href.split('.html')[1] || '');
        }
      });
    });

    // 更新语言按钮状态
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // 持久化
    try { localStorage.setItem('lang', lang); } catch (e) {}
  }

  // 绑定语言切换按钮
  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var lang = btn.getAttribute('data-lang');
      if (lang !== currentLang) switchLang(lang);
    });
  });

  // 语言切换 + 页面跳转
  function switchLang(lang) {
    // 首页用 i18n 动态切换，不跳转
    var isHome = location.pathname.endsWith('/') || location.pathname.endsWith('index.html') || location.pathname.endsWith('home.html');
    if (isHome) {
      applyLang(lang);
      return;
    }
    var path = location.pathname;
    // 去掉已有的语言后缀
    path = path.replace(/-zh-tw\.html/, '.html').replace(/-en\.html/, '.html');
    if (lang === 'zh-tw') {
      path = path.replace(/\.html$/, '-zh-tw.html');
    } else if (lang === 'en') {
      path = path.replace(/\.html$/, '-en.html');
    }
    location.href = path;
  }
  window.switchLang = switchLang;

  // 给没有语言按钮的页面加浮动切换器
  if (!document.getElementById('langSwitch')) {
    var floatLang = document.createElement('div');
    floatLang.id = 'floatLang';
    floatLang.style.cssText = 'position:fixed;top:90px;right:12px;z-index:999;display:flex;flex-direction:column;gap:6px;';
    var labels = {zh:'中', 'zh-tw':'繁', en:'EN'};
    Object.keys(labels).forEach(function(l) {
      var b = document.createElement('button');
      b.textContent = labels[l];
      b.setAttribute('data-lang', l);
      b.style.cssText = 'width:36px;height:36px;border-radius:50%;border:1px solid rgba(0,0,0,0.12);background:rgba(255,255,255,0.75);backdrop-filter:blur(8px);cursor:pointer;font-size:11px;font-weight:600;color:#333;';
      if (l === currentLang) b.style.background = '#6c5ce7'; b.style.color = '#fff';
      b.addEventListener('click', function() { switchLang(l); });
      floatLang.appendChild(b);
    });
    document.body.appendChild(floatLang);
  }

  // 初始化语言
  applyLang(currentLang);

  /* ============================================================
     导航滚动状态 + 滚动进度条 + 返回顶部
     ============================================================ */
  var nav = document.getElementById('nav');
  var scrollProgress = document.getElementById('scrollProgress');
  var backToTop = document.getElementById('backToTop');
  var mobileCta = document.getElementById('mobileCta');

  function onScroll() {
    var sy = window.scrollY;
    var docH = document.documentElement.scrollHeight - window.innerHeight;

    // 导航栏
    if (nav) {
      if (sy > 30) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
    }

    // 滚动进度条
    if (scrollProgress) {
      var pct = docH > 0 ? (sy / docH) * 100 : 0;
      scrollProgress.style.width = pct + '%';
    }

    // 移动端 CTA
    if (mobileCta) {
      if (sy > window.innerHeight * 0.6) mobileCta.classList.add('show');
      else mobileCta.classList.remove('show');
    }

    // 返回顶部按钮
    if (backToTop) {
      if (sy > window.innerHeight * 0.5) backToTop.classList.add('show');
      else backToTop.classList.remove('show');
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // 返回顶部点击
  if (backToTop) {
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
    });
  }

  /* ============================================================
     导航高亮当前章节
     ============================================================ */
  var sections = document.querySelectorAll('section[id]');
  var navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  if ('IntersectionObserver' in window && navLinks.length) {
    var navObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          var id = e.target.getAttribute('id');
          navLinks.forEach(function (link) {
            var href = link.getAttribute('href');
            link.classList.toggle('active', href === '#' + id);
          });
        }
      });
    }, { threshold: 0.25, rootMargin: '-20% 0px -50% 0px' });

    sections.forEach(function (s) { navObserver.observe(s); });
  }

  /* ============================================================
     入场动画
     ============================================================ */
  var reveals = document.querySelectorAll('.reveal');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    reveals.forEach(function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  }

  /* ============================================================
     复制微信号
     ============================================================ */
  var tip = document.getElementById('copyTip');
  var tipTimer = null;

  function showTip() {
    if (!tip) return;
    tip.classList.add('show');
    clearTimeout(tipTimer);
    tipTimer = setTimeout(function () { tip.classList.remove('show'); }, 2000);
  }

  function copyWechat(e) {
    if (e) e.preventDefault();
    var done = function () { showTip(); };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(WECHAT).then(done).catch(fallbackCopy);
    } else {
      fallbackCopy();
    }
    function fallbackCopy() {
      try {
        var t = document.createElement('textarea');
        t.value = WECHAT;
        t.style.position = 'fixed';
        t.style.opacity = '0';
        document.body.appendChild(t);
        t.select();
        document.execCommand('copy');
        document.body.removeChild(t);
        done();
      } catch (err) { done(); }
    }
  }

  document.querySelectorAll('[data-copy]').forEach(function (el) {
    el.addEventListener('click', copyWechat);
  });

  /* ============================================================
     平滑滚动锚点
     ============================================================ */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var href = a.getAttribute('href');
      if (href === '#' || href.length < 2) return;
      var target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      var top = target.getBoundingClientRect().top + window.scrollY - 10;
      window.scrollTo({ top: top, behavior: reduceMotion ? 'auto' : 'smooth' });
    });
  });

  /* ============================================================
     工具包弹窗
     ============================================================ */
  var modal = document.getElementById('toolkitModal');
  var modalClose = document.getElementById('modalClose');
  var toolkitBtn = document.getElementById('toolkitBtn');

  function openModal() {
    if (!modal) return;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  function closeModal() {
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (toolkitBtn) toolkitBtn.addEventListener('click', openModal);
  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modal) {
    modal.addEventListener('click', function (e) {
      if (e.target === modal) closeModal();
    });
  }

  /* ============================================================
     咨询弹窗
     ============================================================ */
  var consultModal = document.getElementById('consultModal');
  var consultTitle = document.getElementById('consultTitle');
  var consultClose = document.querySelector('.consult-close');

  function openConsult(serviceKey) {
    if (!consultModal) return;
    // 用 i18n key 查找翻译后的服务名
    if (consultTitle && serviceKey && I18N[currentLang][serviceKey]) {
      consultTitle.textContent = I18N[currentLang][serviceKey];
    }
    consultModal.classList.add('open');
    consultModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  function closeConsult() {
    if (!consultModal) return;
    consultModal.classList.remove('open');
    consultModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.consult-trigger').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var key = btn.getAttribute('data-service-key') || null;
      openConsult(key);
    });
  });

  if (consultClose) consultClose.addEventListener('click', closeConsult);
  if (consultModal) {
    consultModal.addEventListener('click', function (e) {
      if (e.target === consultModal) closeConsult();
    });
  }

  /* ============================================================
     定位雷达弹窗
     ============================================================ */
  var radarModal = document.getElementById('radarModal');
  var radarClose = document.querySelector('.radar-close');

  function openRadar() {
    if (!radarModal) return;
    radarModal.classList.add('open');
    radarModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  function closeRadar() {
    if (!radarModal) return;
    radarModal.classList.remove('open');
    radarModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.radar-trigger').forEach(function (btn) {
    btn.addEventListener('click', openRadar);
  });

  if (radarClose) radarClose.addEventListener('click', closeRadar);
  if (radarModal) {
    radarModal.addEventListener('click', function (e) {
      if (e.target === radarModal) closeRadar();
    });
  }

  /* ============================================================
     统一 ESC 关闭弹窗
     ============================================================ */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      if (modal && modal.classList.contains('open')) closeModal();
      if (consultModal && consultModal.classList.contains('open')) closeConsult();
      if (radarModal && radarModal.classList.contains('open')) closeRadar();
    }
  });

  /* ============================================================
     弹窗内复制按钮
     ============================================================ */
  document.querySelectorAll('.copy-in-modal').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      copyWechat(e);
      setTimeout(function () {
        if (consultModal && consultModal.classList.contains('open')) closeConsult();
      }, 1500);
    });
  });

  /* ============================================================
     文章朗读功能已移除
     ============================================================ */

})();