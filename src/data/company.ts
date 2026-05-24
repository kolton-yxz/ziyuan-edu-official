// ============================================
// 子远教育 (ZEVEDU) 全部网站内容
// 来源：公司介绍 PPT 解析
// ============================================

// ---------- 品牌信息 ----------
export const brand = {
  name: "子远教育",
  nameEn: "ZEVEDU",
  slogan: "与子同行，行稳致远",
  description:
    "一家致力于提供专业化、多元化的综合升学与出国服务平台，通过系统化的升学战略规划与精细化的服务流程，帮助学生科学定位、精准申请、全面提升竞争力，成功踏入理想学府。",
  logoSrc: "/images/zevedu-logo.png", // Logo 图片路径
  faviconSrc: "/favicon.ico",
};

// ---------- 核心理念 ----------
export const coreValues = {
  philosophy: "与子同行，行稳致远",
  core: "学生为本、质量为先",
  positioning: "提供高品质、全流程、一站式的教育规划与升学咨询服务",
  values: ["学生为本", "质量为先", "专业高效", "全程陪伴"],
};

// ---------- 发展历程 ----------
export const timeline = [
  {
    year: "2018",
    title: "工作室成立",
    desc: "一择留学工作室成立（子远教育前身），聚焦名校规划、硕博升学、个性化文书服务及面试培训等核心业务",
  },
  {
    year: "2019",
    title: "客户突破100人",
    desc: "单个申请季客户数量首次突破100人，斩获多所世界顶尖名校录取，树立高成功率、高满意度的业内口碑",
  },
  {
    year: "2020",
    title: "拓展本科升学",
    desc: "拓展本科升学服务及课业辅导业务，当季客户规模突破200人，申请成功率高达96%，形成从本科到硕博的全阶段升学体系",
  },
  {
    year: "2021",
    title: "启动中外合作办学",
    desc: '启动"中外合作办学4+0"申学业务，满足不出国即可获国外学历的多元需求，帮助数百名学生实现本、硕、博升学目标',
  },
  {
    year: "2023",
    title: "子远教育正式成立",
    desc: '确立"学生为本、质量为先"的核心理念，打造"一站式国际升学与教育规划服务平台"',
  },
  {
    year: "2025",
    title: "多地域经营",
    desc: "Offer库突破10000份，在北京、厦门设立办事处，开启多地经营",
  },
];

// ---------- 核心数据 ----------
export const stats = [
  { label: "累计 Offer 数", value: "10,000+", icon: "" },
  { label: "申请成功率", value: "96%", icon: "✅" },
  { label: "服务学生", value: "数千名", icon: "👩‍🎓" },
  { label: "合作院校", value: "全球 Top 100", icon: "" },
];

// ---------- Offer 国家分布 ----------
export const offerDistribution = [
  { country: "英国", count: 2520, flag: "🇧" },
  { country: "澳大利亚", count: 2110, flag: "🇦🇺" },
  { country: "中国香港", count: 1698, flag: "🇭🇰" },
  { country: "美国", count: 1130, flag: "🇺🇸" },
  { country: "新加坡", count: 1113, flag: "🇸🇬" },
  { country: "加拿大", count: 887, flag: "🇨🇦" },
  { country: "中国澳门", count: 979, flag: "🇲🇴" },
];

// ---------- 服务中心 ----------
export const serviceCenters = [
  {
    city: "深圳",
    type: "服务中心（总部）",
    address: "广东省深圳市南山区迅雷大厦1411室",
    isMain: true,
  },
  { city: "北京", type: "业务办事处", address: "" },
  { city: "厦门", type: "业务办事处", address: "" },
];

// ---------- 联系人 ----------
export const contacts = [
  {
    name: "Mora老师",
    phone: "13242899885",
    wechatQr: "/images/contact/wechat-mora.png",
  },
  {
    name: "May老师",
    phone: "19020614408",
    wechatQr: "/images/contact/wechat-may.png",
  },
];

// ---------- 服务项目 ----------
export const services = [
  {
    id: "planning",
    title: "升学评估与规划",
    subtitle: "科学的背景评估，制定个性化升学规划方案",
    description:
      "以科学的背景评估为起点，制定个性化升学规划方案。团队提供从学业定位、背景提升、选校决策到申请准备、材料审核、录取跟进等全过程服务。每一环节均由专业老师把关，以系统化的操作流程确保高效安全。",
    features: [
      "学术硬实力评估",
      "语言能力评估",
      "实践经验评估",
      "科研背景评估",
      "其他软实力评估",
    ],
    icon: "",
  },
  {
    id: "application",
    title: "院校申请服务",
    subtitle: "本科、硕士、博士全方位申请",
    description:
      "提供本科、硕士、博士全阶段申请服务，覆盖香港、澳门、英国、美国、澳洲、新加坡、加拿大、马来西亚等国家和地区。从选校方案、绩点提升方案、语言要求分析到申请时间规划，全程专业指导。",
    features: [
      "选校方案制定",
      "绩点提升方案",
      "语言要求分析",
      "申请时间规划",
      "网申材料提交",
    ],
    icon: "",
  },
  {
    id: "documents",
    title: "文书服务",
    subtitle: "独特的个性文书，由资深英专老师领衔",
    description:
      "由具有专业背景的资深英专老师领衔（文案老师从业超10年），依据学生特点与院校要求撰写高质量文书。服务过程可实时跟踪，修改无限制直到满意，支持个性化定制与审稿指导。",
    features: [
      "资深文书老师执笔",
      "个性文书定制",
      "逐层审核机制",
      "无限制次数修改",
      "基本情况收集→实践→软实力全方位挖掘",
    ],
    icon: "✍️",
  },
  {
    id: "interview",
    title: "面试培训",
    subtitle: "10年经验资深导师亲自指导",
    description:
      "由拥有逾10年面试培训经验的资深导师亲自指导，课程涵盖最新、权威的国际名校面试真题题库，结合一对一模拟面试及专业化真题训练，帮助学生快速提升应答技巧。",
    features: [
      "一对一模拟面试",
      "名校面试真题训练",
      "沟通与表达能力强化",
      "Strength/Weakness 类问题",
      "Case/Teamwork/Leadership 类问题",
    ],
    icon: "",
  },
  {
    id: "background",
    title: "背景提升",
    subtitle: "多维度背景提升项目",
    description:
      "多维度提升，包括国内外科研项目、名企实习、国际竞赛等。背景提升项目均可查证，可直接用于学校申请、求职或学术成果汇报。通过系统化指导，学生不仅在学术上得到提升，同时也在职业发展上获得优势。",
    features: [
      "国内外科研项目",
      "名企实习推荐",
      "国际竞赛指导",
      "可查证项目经历",
      "系统化背景提升指导",
    ],
    icon: "📈",
  },
  {
    id: "tutoring",
    title: "学术辅导服务",
    subtitle: "学生就读后学术辅导",
    description:
      "针对学生入学后的学术挑战与学习难点，提供系统化课程与学业辅导。由具备国际顶尖院校背景或多年教学经验的资深导师全程带领，采用一对一定制化授课模式，深入覆盖课程解析、作业与项目答疑、核心学科能力强化、专业技能训练以及科研论文全流程指导。",
    features: [
      "课程讲解",
      "作业答疑",
      "能力培养",
      "技能提升",
      "科研指导",
      "论文写作",
    ],
    icon: "📖",
  },
];

// ---------- PACD 服务体系 ----------
export const pacdSystem = {
  title: "PACD 独创服务体系",
  subtitle: "从传统模式到全周期闭环服务的革新",
  items: [
    {
      letter: "P",
      name: "Personalized",
      title: "个性化",
      desc: "每个学生都是独特的，通过性格测试、学术背景分析、职业规划访谈，为每位学生提供差异化的升学定位与规划。",
    },
    {
      letter: "A",
      name: "All-cycle",
      title: "全周期",
      desc: "打破传统只关注申请环节的模式，从申请前的背景提升规划到申请后的海外生活适应指导，提供真正的全周期服务。",
    },
    {
      letter: "C",
      name: "Customized",
      title: "定制化",
      desc: "拒绝模板化文书，结合学生独特经历和申请目标，量身定制申请方案。在背景提升阶段灵活调整选校列表，抓住每一个机会。",
    },
    {
      letter: "D",
      name: "Data-driven",
      title: "数据化",
      desc: "基于近3年录取案例数据库，结合GPA基准线和专业要求，为学生提供数据驱动的选校建议。实时跟踪申请进度，分析行业趋势。",
    },
  ],
};

// ---------- 留学项目类型 ----------
export const programTypes = [
  { name: "本科升学", desc: "全球名校本科申请" },
  { name: "硕士升学", desc: "硕士项目申请指导" },
  { name: "博士升学", desc: "博士申请全服务" },
  { name: "香港副学士", desc: "香港副学士课程" },
  { name: "中外合作办学", desc: '4+0 申学项目' },
];

// ---------- 留学国家/地区 ----------
export const destinations = [
  { name: "香港", flag: "🇰" },
  { name: "澳门", flag: "🇲🇴" },
  { name: "英国", flag: "🇧" },
  { name: "美国", flag: "🇺🇸" },
  { name: "澳洲", flag: "🇦🇺" },
  { name: "新加坡", flag: "🇬" },
  { name: "加拿大", flag: "🇨🇦" },
  { name: "马来西亚", flag: "🇲🇾" },
];

// ---------- 背景提升合作资源 ----------
export const backgroundResources = {
  research: [
    "Oxford",
    "Harvard",
    "MIT",
    "Stanford",
    "Cornell",
    "Cambridge",
    "CMU",
    "NUS",
  ],
  internships: [
    "Alibaba",
    "Tencent",
    "字节跳动",
    "Amazon",
    "Apple",
    "P&G",
    "Starbucks",
    "小米",
    "OPPO",
    "强生",
    "Chanel",
    "ANTA",
    "荣耀",
    "LV",
  ],
  competitions: ["AMC", "MCM", "SKT Investment Challenge", "USACO"],
};

// ---------- 生态合作高校 ----------
export const partnerUniversities = [
  "CityU (香港城市大学)",
  "CUHK (香港中文大学)",
  "岭南大学",
  "澳大 (澳门大学)",
  "澳门科大",
  "UCL (伦敦大学学院)",
  "Warwick (华威大学)",
  "Oxford",
  "Cambridge",
  "Harvard",
  "MIT",
  "Stanford",
  "Cornell",
  "CMU",
  "NUS",
];

// ---------- 成功案例 ----------
export const successCases = [
  {
    student: "张同学",
    university: "哥伦比亚大学",
    major: "金融工程",
    country: "美国",
    background: "985高校，GPA 3.8/4.0",
    quote:
      "子远教育的顾问非常专业，从选校到文书写作都给了我很多帮助，最终成功拿到了心仪学校的offer！",
  },
  {
    student: "李同学",
    university: "哈佛大学",
    major: "教育学",
    country: "美国",
    background: "211高校，GPA 3.7/4.0",
    quote:
      "感谢子远教育的全程指导，从文书到面试都提供了细致的帮助，让孩子顺利进入理想学校。",
  },
  {
    student: "王同学",
    university: "斯坦福大学",
    major: "计算机科学",
    country: "美国",
    background: "海外本科，GPA 3.9/4.0",
    quote:
      "签证办理非常顺利，在子远教育的帮助下，整个流程都很高效，很放心。",
  },
];

// ---------- 录取捷报图片 ----------
export const offerImages = [
  { school: "香港大学", major: "人工智能与数据科学", background: "AL A*A*A*AA / 雅思7.0", image: "/images/offers/2025/offer-hku-aids-2025.png" },
  { school: "剑桥大学", major: "MPhil 硕士", background: "985高校 / 均分91.68 / 雅思8.0", image: "/images/offers/2025/offer-cambridge-mphil-2025.png" },
  { school: "伦敦政治经济学院", major: "人力资源与组织硕士", background: "985高校 / 均分87.57 / 雅思6.5", image: "/images/offers/2025/offer-lse-hr-2025.png" },
  { school: "多伦多大学", major: "商科 Studies in Commerce", background: "AL A*A*AB / 雅思6.5", image: "/images/offers/2025/offer-uoft-commerce-2025.png" },
  { school: "UBC 英属哥伦比亚大学", major: "本科", background: "AL A*A*AB / 雅思6.5", image: "/images/offers/2025/offer-ubc-2025.png" },
  { school: "东北大学", major: "计算机科学硕士", background: "双非一本 / 均分87.88 / 托福107", image: "/images/offers/2025/offer-neu-cs-2025.png" },
  { school: "澳洲国立大学", major: "市场营销管理硕士", background: "海外本科 / GPA 5.33 / 免语言", image: "/images/offers/2025/offer-anu-marketing-2025.png" },
  { school: "悉尼大学", major: "商学学士", background: "普高转ACT 33 / 雅思6.0", image: "/images/offers/2025/offer-usyd-commerce-2025.png" },
  { school: "新南威尔士大学", major: "本科", background: "普高转ACT 34 / 雅思7.0", image: "/images/offers/2025/offer-unsw-2025.png" },
  { school: "曼彻斯特大学", major: "国际发展公共政策硕士", background: "双非一本 / 均分87 / 雅思6.5", image: "/images/offers/2025/offer-manchester-id-2025.png" },
  { school: "待定", major: "待定", background: "待补充", image: "/images/offers/2025/offer-unknown-1-2025.png" },
  { school: "待定", major: "待定", background: "待补充", image: "/images/offers/2025/offer-unknown-2-2025.png" },
];
