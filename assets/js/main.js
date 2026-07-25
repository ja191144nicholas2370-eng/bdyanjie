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
    zh: {
      'brand.name': '北大燕姐',
      'nav.about': '我是谁',
      'nav.services': '我的服务',
      'nav.trust': '信任背书',
      'nav.radar': 'IP定位',
      'nav.geo': 'GEO增长',
      'nav.articles': '文章',
      'nav.contact': '联系我',
      'nav.wechat': '加微信',

      'hero.eyebrow': '北大燕姐 · AI定位与GEO增长',
      'hero.title': '放大企业<span class="accent">锋芒</span>，<br>擦亮个人<span class="accent">光芒</span>',
      'hero.facts': '用AI帮IP精准定位，以GEO驱动增长。帮你被搜到，被信任，被选择。',
      'hero.cta1': '加微信 · cheny2806',
      'hero.cta2': '看服务',

      'about.eyebrow': '01 — About',
      'about.title': '我是谁<em>。</em>',
      'about.p1': '15 年世界 500 强品牌操盘手。从零起步，把一款产品做到年销破亿，跑通了品牌从萌芽到爆发的每一道坎。有段时间，白天泡经销商仓库对库存，晚上回酒店改方案到凌晨三点，早上七点又站在培训讲台上。就这么死磕过来的。',
      'about.p2': '2026 年，一位创业者坐在我对面，花 30 万做了一套品牌定位，打开就是一堆 PPT。他说："燕姐，看完我还是不知道我的 IP 在哪里。"',
      'about.p3': '那一刻我确认了一件事：品牌这盘棋，规则已经翻篇了。不是谁有钱谁说了算，是 AI 把信息差抹平了，流量路口换了方向。老地图找不到新大陆。',
      'about.p4': '于是我转身创业。把 15 年品牌经验、10 年培训表达功力，和 AI 这个新引擎熔在一起 —— 帮企业和个人做 IP 精准定位，做 GEO 内容增长。被搜到，被选择，被信任。',
      'about.p5': '不讲虚的。我走过的每一步，都算数。',

      'stat1.num': '15<small>年</small>',
      'stat1.label': '世界500强品牌运营与管理',
      'stat1.sub': '长期扎根品牌运营与品牌管理一线',
      'stat2.num': '10<small>年+</small>',
      'stat2.label': '企业培训与职业培训师',
      'stat2.sub': '练就能把实战讲清楚的能力',
      'stat3.num': '0<small>→亿</small>',
      'stat3.label': '从零做到品牌过亿',
      'stat3.sub': '跑通产品从0到破亿的完整成长路径',

      'svc.eyebrow': '02 — Services',
      'svc.title': '我的服务<em>。</em>',
      'svc1.tag': 'Free · 随喜打赏',
      'svc1.title': 'AI + IP 定位工具包',
      'svc1.desc': '我整理的AI+IP定位工具，拿去直接用。觉得有用就打个赏。',
      'svc1.btn': '获取工具包',
      'svc2.tag': '￥500 – 600',
      'svc2.title': 'AI + IP 定位雷达',
      'svc2.desc': '三步走：帮你理清过往优势 → 发现你自己都没意识到的亮点 → 萃取别人越不过去的核心竞争力。',
      'svc2.btn': '立即使用',
      'svc3.tag': '￥1,500 – 3,000',
      'svc3.title': '10–15天内容交付',
      'svc3.desc': '基于你的品牌定位，帮你产出10到15天的账号内容。定位帮你定，内容帮你出。',
      'svc3.btn': '立即咨询',
      'svc4.tag': 'Offline',
      'svc4.title': '线下半天·行业资源碰撞',
      'svc4.desc': '面对面深度互动，深入了解你的真实需求。更难得的，是这里汇聚了品牌操盘手、企业决策者之间的资源链接与深度对接——一场真正稀缺的资源碰撞。',
      'svc4.btn': '预约咨询',
      'svc5.tag': 'Custom',
      'svc5.title': '深度合作',
      'svc5.desc': '基于深度信任与渠道深耕，我们以共创共荣的方式，一起开发属于你的新生态。',
      'svc5.gold': '以信任立本，以结果立锋。',
      'svc5.btn': '加微信聊',

      'trust.eyebrow': '03 — Trust',
      'trust.title': '信任背书<em>。</em>',
      'trust.q1': '燕姐只讲真话，只讲自己做过的事情。走过的每一步，都算数。',
      'trust.q2': '在AI领域学习与成长的每一步，做给你看、告诉你怎么做。',
      'trust1.num': '0 → 亿',
      'trust1.title': '从零到品牌破亿',
      'trust1.desc': '从零起步，把一个品牌做到年营业额破亿。规划、构建、推动、落地——品牌从萌芽到爆发的每一个关键节点，我全程参与。这条路，实打实从头走到了尾。',
      'trust2.num': '300<small>万</small>',
      'trust2.title': '一场活动拉爆一座城',
      'trust2.desc': '瞄准一个战略重点城市，从策划到客户意向、活动细节、反复协同业务团队调研市场与竞品、深挖用户需求与消费路径、跟渠道经销商团队一轮轮复盘脑暴——最终一次活动拉爆市场，<strong>单场完成300万实际销售</strong>。合作方从头到尾赞不绝口：活动前的召集令培训、过程中的细致对接复盘、快速的执行力，给他们留下了极深的印象和极好的口碑。',

      'contact.eyebrow': "04 — Let's Talk",
      'contact.title': '把你的品牌，<br>交给<em>真正操盘过</em>的人。',
      'contact.sub': '加微信，聊聊你的品牌。基于信任，我们一起找到答案。',
      'contact.copy': '复制微信号',
      'contact.cta1': '加微信 · cheny2806',
      'contact.cta2': '了解服务',

      'footer.brand': '北大燕姐 · AI定位与GEO增长',
      'footer.copy': '© 2026 北大燕姐 · 个人品牌站',

      'mcta.services': '服务',
      'mcta.wechat': '加微信 cheny2806',

      'copytip': '已复制微信号 cheny2806',

      'modal.toolkit.title': 'AI + IP 定位工具包',
      'modal.toolkit.desc': '10分钟，三步挖出你的核心竞争力。<br>品牌操盘手的方法，跟AI生成的不一样。做完觉得值，页面底部可以打赏。',
      'modal.toolkit.btn': '打开免费自测 →',
      'modal.toolkit.href': 'radar.html',
      'modal.toolkit.note': '觉得有用，随心打赏',
      'modal.consult.title': '服务咨询',
      'modal.consult.desc': '添加微信，详细沟通你的需求，我给你具体的建议和方案。',
      'modal.consult.btn': '复制微信号',
      'modal.radar.title': 'AI + IP 定位雷达',
      'modal.radar.desc': '扫描下方二维码，进入智能体页面，直接开始你的IP定位诊断。',
      'modal.radar.placeholder': '定位雷达智能体<br>二维码待提供<br><br><small style="font-size:11px;">智能体开发完成后<br>替换此二维码即可</small>',
      'modal.radar.note': '¥500 – 600 · 扫码后直接使用',

      '_title': '北大燕姐 · AI定位与GEO增长 | 放大企业锋芒，擦亮个人光芒',
      '_desc': '用AI定位与GEO增长，帮你被搜到、被选择、被信任。15年世界500强品牌运营与管理，10年+企业培训与职业培训师，从0做到品牌过亿。'
    },

    'zh-tw': {
      'brand.name': '北大燕姐',
      'nav.about': '我是誰',
      'nav.services': '我的服務',
      'nav.trust': '信任背書',
      'nav.radar': 'IP定位',
      'nav.geo': 'GEO增長',
      'nav.articles': '文章',
      'nav.contact': '聯繫我',
      'nav.wechat': '加微信',
      'hero.eyebrow': '北大燕姐 · AI定位與GEO增長',
      'hero.title': '放大企業<span class="accent">鋒芒</span>，<br>擦亮個人<span class="accent">光芒</span>',
      'hero.facts': '用AI幫IP精準定位，以GEO驅動增長。幫你被搜到，被信任，被選擇。',
      'hero.cta1': '加微信 · cheny2806',
      'hero.cta2': '看服務',
      'about.eyebrow': '01 — About',
      'about.title': '我是誰<em>。</em>',
      'about.p1': '15 年世界 500 強品牌操盤手。從零起步，把一款產品做到年銷破億，跑通了品牌從萌芽到爆發的每一道坎。有段時間，白天泡經銷商倉庫對庫存，晚上回酒店改方案到凌晨三點，早上七點又站在培訓講臺上。就這麼死磕過來的。',
      'about.p2': '2026 年，一位創業者坐在我對面，花 30 萬做了一套品牌定位，打開就是一堆 PPT。他說："燕姐，看完我還是不知道我的 IP 在哪裡。"',
      'about.p3': '那一刻我確認了一件事：品牌這盤棋，規則已經翻篇了。不是誰有錢誰說了算，是 AI 把信息差抹平了，流量路口換了方向。老地圖找不到新大陸。',
      'about.p4': '於是我轉身創業。把 15 年品牌經驗、10 年培訓表達功力，和 AI 這個新引擎熔在一起 —— 幫企業和個人做 IP 精準定位，做 GEO 內容增長。被搜到，被選擇，被信任。',
      'about.p5': '不講虛的。我走過的每一步，都算數。',
      'stat1.num': '15<small>年</small>',
      'stat1.label': '世界500強品牌運營與管理',
      'stat1.sub': '長期紮根品牌運營與品牌管理一線',
      'stat2.num': '10<small>年+</small>',
      'stat2.label': '企業培訓與職業培訓師',
      'stat2.sub': '練就能把實戰講清楚的能力',
      'stat3.num': '0<small>→億</small>',
      'stat3.label': '從零做到品牌過億',
      'stat3.sub': '跑通產品從0到破億的完整成長路徑',
      'svc.eyebrow': '02 — Services',
      'svc.title': '我能給你什麼<em>。</em>',
      'svc1.tag': 'Free · 隨喜打賞',
      'svc1.title': 'AI + IP 定位工具包',
      'svc1.desc': '我整理的AI+IP定位工具，拿去直接用。覺得有用就打個賞。',
      'svc1.btn': '獲取工具包',
      'svc2.tag': '￥500 – 600',
      'svc2.title': 'AI + IP 定位雷達',
      'svc2.desc': '三步走：幫你理清過往優勢 → 發現你自己都沒意識到的亮點 → 萃取別人越不過去的核心競爭力。',
      'svc2.btn': '立即使用',
      'svc3.tag': '￥1,500 – 3,000',
      'svc3.title': '10–15天內容交付',
      'svc3.desc': '基於你的品牌定位，幫你產出10到15天的帳號內容。定位幫你定，內容幫你出。',
      'svc3.btn': '立即諮詢',
      'svc4.tag': 'Offline',
      'svc4.title': '線下半天·行業資源碰撞',
      'svc4.desc': '面對面深度互動，深入了解你的真實需求。更難得的，是這裡匯聚了品牌操盤手、企業決策者之間的資源連結與深度對接——一場真正稀缺的資源碰撞。',
      'svc4.btn': '預約諮詢',
      'svc5.tag': 'Custom',
      'svc5.title': '深度合作',
      'svc5.desc': '基於深度信任與渠道深耕，我們以共創共榮的方式，一起開發屬於你的新生態。',
      'svc5.gold': '以信任立本，以結果立鋒。',
      'svc5.btn': '加微信聊',
      'trust.eyebrow': '03 — Trust',
      'trust.title': '信任的底氣<em>。</em>',
      'trust.q1': '燕姐只講真話，只講自己做過的事情。走過的每一步，都算數。',
      'trust.q2': '在AI領域學習與成長的每一步，做給你看、告訴你怎麼做。',
      'trust1.num': '0 → 億',
      'trust1.title': '從零到品牌破億',
      'trust1.desc': '從零起步，把一個品牌做到年營業額破億。規劃、構建、推動、落地——品牌從萌芽到爆發的每一個關鍵節點，我全程參與。這條路，實打實從頭走到了尾。',
      'trust2.num': '300<small>萬</small>',
      'trust2.title': '一場活動拉爆一座城',
      'trust2.desc': '瞄準一個戰略重點城市，從策劃到客戶意向、活動細節、反覆協同業務團隊調研市場與競品、深挖用戶需求與消費路徑、跟渠道經銷商團隊一輪輪復盤腦暴——最終一次活動拉爆市場，<strong>單場完成300萬實際銷售</strong>。合作方從頭到尾讚不絕口：活動前的召集令培訓、過程中的細緻對接復盤、快速的執行力，給他們留下了極深的印象和極好的口碑。',
      'contact.title': '把你的品牌，<br>交給<em>真正操盤過</em>的人。',
      'contact.sub': '加微信，聊聊你的品牌。基於信任，我們一起找到答案。',
      'contact.copy': '複製微信號',
      'contact.cta1': '加微信 · cheny2806',
      'contact.cta2': '了解服務',
      'footer.brand': '北大燕姐 · AI定位與GEO增長',
      'footer.copy': '© 2026 北大燕姐 · 個人品牌站',
      'mcta.services': '服務',
      'mcta.wechat': '加微信 cheny2806',
      'copytip': '已複製微信號 cheny2806',
      'modal.toolkit.title': 'AI + IP 定位工具包',
      'modal.toolkit.desc': '10分鐘，三步挖出你的核心競爭力。<br>品牌操盤手的方法，跟AI生成的不一樣。做完覺得值，頁面底部可以打賞。',
      'modal.toolkit.btn': '打開免費自測 →',
      'modal.toolkit.href': 'radar-zh-tw.html',
      'modal.toolkit.note': '覺得有用，隨心打賞',
      'modal.consult.title': '服務諮詢',
      'modal.consult.desc': '添加微信，詳細溝通你的需求，我給你具體的建議和方案。',
      'modal.consult.btn': '複製微信號',
      'modal.radar.title': 'AI + IP 定位雷達',
      'modal.radar.desc': '掃描下方二維碼，進入智能體頁面，直接開始你的IP定位診斷。',
      'modal.radar.placeholder': '定位雷達智能體<br>二維碼待提供<br><br><small style="font-size:11px;">智能體開發完成後<br>替換此二維碼即可</small>',
      'modal.radar.note': '¥500 – 600 · 掃碼後直接使用',
      '_title': '北大燕姐 · AI定位與GEO增長 | 放大企業鋒芒，擦亮個人光芒',
      '_desc': '用AI定位與GEO增長，幫你被搜到、被選擇、被信任。15年世界500強品牌運營與管理，10年+企業培訓與職業培訓師，從0做到品牌過億。',
    },
    en: {
      'brand.name': 'PKU Yan',
      'nav.about': 'About',
      'nav.services': 'Services',
      'nav.trust': 'Trust',
      'nav.radar': 'IP Radar',
      'nav.geo': 'GEO Growth',
      'nav.articles': 'Articles',
      'nav.contact': 'Contact',
      'nav.wechat': 'WeChat',

      'hero.eyebrow': 'PKU Yan · AI Positioning & GEO Growth',
      'hero.title': 'Amplify your brand <span class="accent">edge</span>.<br>Polish your personal <span class="accent">shine</span>.',
      'hero.facts': 'AI positioning and GEO growth — get found, get chosen, get trusted.',
      'hero.cta1': 'Add WeChat · cheny2806',
      'hero.cta2': 'View Services',

      'about.eyebrow': '01 — About',
      'about.title': 'Who I Am<em>.</em>',
      'about.p1': '15 years as a Fortune 500 brand operator. Started from zero, took a product to over 100M in annual sales, and cleared every hurdle from brand inception to breakthrough. There was a stretch where I\'d spend days in distributor warehouses counting inventory, nights back at the hotel rewriting plans until 3 AM, and by 7 AM I\'d be standing on a training podium. That\'s how I ground it out.',
      'about.p2': 'In 2026, a founder sat across from me. He\'d spent 300,000 RMB on a brand positioning exercise and got a pile of PPTs. He said, "Yan, after all that, I still don\'t know where my IP is."',
      'about.p3': 'That moment confirmed something for me: the rules of branding have been rewritten. It\'s no longer about who has the deepest pockets — AI has flattened the information gap, and the traffic intersections have shifted. Old maps don\'t find new continents.',
      'about.p4': 'So I pivoted. I fused 15 years of brand experience, 10 years of training and communication chops, with the new engine of AI — helping enterprises and individuals nail their IP positioning and drive GEO content growth. Get found, get chosen, get trusted.',
      'about.p5': 'No fluff. Every step I\'ve walked counts.',

      'stat1.num': '15<small>yrs</small>',
      'stat1.label': 'Fortune 500 Brand Operations',
      'stat1.sub': 'Deeply rooted in frontline brand management',
      'stat2.num': '10<small>+</small>',
      'stat2.label': 'Years Corporate Training & Coaching',
      'stat2.sub': 'Turning real practice into clear teaching',
      'stat3.num': '0<small>→100M</small>',
      'stat3.label': 'Built a Brand from Zero to 100M+',
      'stat3.sub': 'Ran the full path from 0 to breakthrough revenue',

      'svc.eyebrow': '02 — Services',
      'svc.title': 'Services<em>.</em>',
      'svc1.tag': 'Free · Pay What You Want',
      'svc1.title': 'AI + IP Positioning Toolkit',
      'svc1.desc': 'My curated AI + IP positioning tools — take them and use them directly. Tip if you find them helpful.',
      'svc1.btn': 'Get Toolkit',
      'svc2.tag': '¥500 – 600',
      'svc2.title': 'AI + IP Positioning Radar',
      'svc2.desc': "Three steps: clarify your past strengths → discover highlights you didn't even know you had → extract the core competitiveness others can't replicate.",
      'svc2.btn': 'Start Now',
      'svc3.tag': '¥1,500 – 3,000',
      'svc3.title': '10–15 Day Content Delivery',
      'svc3.desc': 'Based on your brand positioning, I produce 10–15 days of account content. Positioning sorted, content delivered.',
      'svc3.btn': 'Consult Now',
      'svc4.tag': 'Offline',
      'svc4.title': 'Half-Day Offline · Industry Networking',
      'svc4.desc': "Face-to-face deep interaction to understand your real needs. What's rarer is the resource connections and deep matchmaking among brand operators and business decision-makers — a truly scarce collision of resources.",
      'svc4.btn': 'Book a Session',
      'svc5.tag': 'Custom',
      'svc5.title': 'Deep Collaboration',
      'svc5.desc': 'Built on deep trust and channel cultivation, we co-create and co-prosper — developing your new ecosystem together.',
      'svc5.gold': 'Trust as foundation. Results as edge.',
      'svc5.btn': "Let's Talk",

      'trust.eyebrow': '03 — Trust',
      'trust.title': 'Trust'<em>.</em>',
      'trust.q1': "I only speak the truth, only about things I've actually done. Every step counts.",
      'trust.q2': 'Every step of learning and growing in AI — I show you, then tell you how.',
      'trust1.num': '0 → 100M',
      'trust1.title': 'From Zero to 100M Brand',
      'trust1.desc': 'Starting from scratch, I grew a brand to over 100M in annual revenue. Strategy, construction, execution, landing — every critical node from inception to breakthrough, I was there. This path, walked end to end for real.',
      'trust2.num': '3M<small>+</small>',
      'trust2.title': 'One Event Ignited a City',
      'trust2.desc': 'Targeting a strategic city, from planning to customer intent, event details, repeatedly coordinating with business teams to research the market and competitors, digging into user needs and consumption paths, brainstorming with channel distributor teams round after round — ultimately one event ignited the market, <strong>achieving 3M in actual sales in a single event</strong>. Partners praised it throughout: the pre-event mobilization training, meticulous coordination and reviews during the process, and rapid execution left a deep impression and excellent word-of-mouth.',

      'contact.eyebrow': "04 — Let's Talk",
      'contact.title': "Put your brand in the hands of<br>someone who's <em>actually done it</em>.",
      'contact.sub': "Add WeChat, let's talk about your brand. Built on trust, we'll find the answers together.",
      'contact.copy': 'Copy WeChat ID',
      'contact.cta1': 'Add WeChat · cheny2806',
      'contact.cta2': 'View Services',

      'footer.brand': 'PKU Yan · AI Positioning & GEO Growth',
      'footer.copy': '© 2026 PKU Yan · Personal Brand',

      'mcta.services': 'Services',
      'mcta.wechat': 'WeChat cheny2806',

      'copytip': 'WeChat ID cheny2806 copied',

      'modal.toolkit.title': 'AI + IP Positioning Toolkit',
      'modal.toolkit.desc': '10 minutes. Three steps to uncover your core competitive edge.<br>A brand strategist\'s method — not the same as AI-generated. Find it useful? Tip at the bottom of the page.',
      'modal.toolkit.btn': 'Start Free Self-Assessment →',
      'modal.toolkit.href': 'radar-en.html',
      'modal.toolkit.note': 'Found it useful? Tip any amount',
      'modal.consult.title': 'Service Consultation',
      'modal.consult.desc': "Add WeChat to discuss your needs in detail. I'll give you specific advice and solutions.",
      'modal.consult.btn': 'Copy WeChat ID',
      'modal.radar.title': 'AI + IP Positioning Radar',
      'modal.radar.desc': 'Scan the QR code below to enter the AI agent page and start your IP positioning diagnosis.',
      'modal.radar.placeholder': 'Positioning Radar Agent<br>QR code pending<br><br><small style="font-size:11px;">Replace this QR code<br>once the agent is ready</small>',
      'modal.radar.note': '¥500 – 600 · Scan to start',

      '_title': 'PKU Yan · AI Positioning & GEO Growth | Amplify Your Brand Edge',
      '_desc': 'AI positioning and GEO growth — get found, get chosen, get trusted. 15 years in Fortune 500 brand operations, 10+ years corporate training, built a brand from zero to 100M+.'
    }
  };

  /* ============================================================
     语言切换
     ============================================================ */
  var currentLang = 'zh';
  try { currentLang = localStorage.getItem('lang') || 'zh'; } catch (e) {}

  function applyLang(lang) {
    if (!I18N[lang]) lang = 'zh';
    currentLang = lang;
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
    // 子页面：跳转到对应语言文件
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
     工具包打赏弹窗
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