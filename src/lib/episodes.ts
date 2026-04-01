export interface Episode {
  id: string;
  number: number;
  title: string;
  titleCn: string;
  guest: string;
  guestTitle: string;
  description: string;
  descriptionCn: string;
  duration: string;
  date: string;
  tags: string[];
  audioUrl: string;
  featured: boolean;
}

export const episodes: Episode[] = [
  {
    id: "ep-01-redefining-longevity",
    number: 1,
    title: "Redefining Longevity: From Lab Bench to Boardroom",
    titleCn: "重新定义长寿：从实验台到董事会",
    guest: "Dr. Serena Patel",
    guestTitle: "CEO & Co-Founder, Meridian Longevity",
    description:
      "Dr. Serena Patel left a tenured position in molecular biology at Stanford to build Meridian Longevity, a biotech startup developing epigenetic therapies that could extend healthy human lifespan by decades. In this debut episode, Jodi explores how Serena raised a $120M Series B in a skeptical market, why she believes longevity science is the most undervalued asset class, and the personal health crisis that catalyzed everything. They also discuss what it means to build a company where your product is literally more life.",
    descriptionCn:
      "Serena Patel博士离开斯坦福大学分子生物学的终身教授职位，创建了Meridian Longevity，一家开发表观遗传疗法的生物技术初创公司，这些疗法可能将健康人类寿命延长数十年。在这期首播节目中，Jodi探讨了Serena如何在充满怀疑的市场中筹集了1.2亿美元的B轮融资，她为何认为长寿科学是最被低估的资产类别，以及催化一切的个人健康危机。她们还讨论了当你的产品就是生命本身时，创建公司意味着什么。",
    duration: "58:42",
    date: "2026-03-15",
    tags: ["Longevity", "Biotech", "Venture Capital", "Science"],
    audioUrl: "/audio/episode-01.m4a",
    featured: true,
  },
  {
    id: "ep-02-sound-body-sound-portfolio",
    number: 2,
    title: "Sound Body, Sound Portfolio",
    titleCn: "健康的身体，健康的投资组合",
    guest: "Marcus Chen-Williams",
    guestTitle: "Managing Partner, Elevate Health Ventures",
    description:
      "Marcus Chen-Williams manages a $400M fund exclusively focused on the convergence of mental health and financial wellness. A former jazz pianist who pivoted to Wall Street before finding his calling in health-focused investing, Marcus shares his framework for evaluating startups at the intersection of wellbeing and wealth creation. He and Jodi dive deep into why the best founders he's backed all have some form of creative practice, and how music training rewires the brain for better risk assessment.",
    descriptionCn:
      "Marcus Chen-Williams管理着一只4亿美元的基金，专门聚焦于心理健康和财务健康的交汇。他曾是爵士钢琴家，后转向华尔街，最终在专注健康的投资领域找到了使命。Marcus分享了他评估健康与财富创造交叉领域初创公司的框架。他和Jodi深入探讨了为什么他投资的最优秀创始人都有某种形式的创意实践，以及音乐训练如何重新编程大脑以实现更好的风险评估。",
    duration: "1:04:18",
    date: "2026-03-22",
    tags: ["Investing", "Mental Health", "Music", "Finance"],
    audioUrl: "/audio/episode-02.m4a",
    featured: false,
  },
  {
    id: "ep-03-designing-calm",
    number: 3,
    title: "Designing Calm: The Art Director Who Built a Wellness Empire",
    titleCn: "设计宁静：建立健康帝国的艺术总监",
    guest: "Yuki Tanaka",
    guestTitle: "Founder & Creative Director, Stillpoint Studio",
    description:
      "Yuki Tanaka spent a decade as art director at Apple before burning out spectacularly. What followed was a two-year sabbatical in Kyoto studying traditional Japanese ceramics, which led to the creation of Stillpoint Studio — now a $50M wellness brand that blends minimalist design, guided meditation, and tactile products. Yuki and Jodi talk about the economics of beauty, why good design is a health intervention, and how she bootstrapped to profitability without a single VC dollar by choice.",
    descriptionCn:
      "Yuki Tanaka在苹果担任了十年艺术总监后严重倦怠。随后是在京都学习日本传统陶艺的两年休假，这催生了Stillpoint Studio——现在是一个价值5000万美元的健康品牌，融合了极简设计、冥想指导和触感产品。Yuki和Jodi谈论了美的经济学、为什么好的设计是一种健康干预，以及她如何有意识地在没有任何风投资金的情况下自力更生实现盈利。",
    duration: "52:09",
    date: "2026-03-29",
    tags: ["Design", "Wellness", "Entrepreneurship", "Creativity"],
    audioUrl: "/audio/episode-03.m4a",
    featured: true,
  },
  {
    id: "ep-04-gut-feeling",
    number: 4,
    title: "Gut Feeling: A Cellist's Journey to Microbiome Startups",
    titleCn: "直觉：一位大提琴家的微生物组创业之旅",
    guest: "Alejandro Reyes",
    guestTitle: "Co-Founder & CSO, Flora Genomics",
    description:
      "Alejandro Reyes performed with the Berlin Philharmonic for seven years before chronic digestive issues led him down a rabbit hole of microbiome research. He co-founded Flora Genomics, which uses AI to create personalized gut health protocols, and recently closed a $35M Series A led by Andreessen Horowitz. In a wide-ranging conversation, Jodi and Alejandro explore the unexpected parallels between orchestral discipline and startup execution, the science of the gut-brain axis, and why musicians make unusually resilient founders.",
    descriptionCn:
      "Alejandro Reyes在柏林爱乐乐团演奏了七年，慢性消化问题引领他深入微生物组研究。他联合创立了Flora Genomics，利用人工智能创建个性化肠道健康方案，最近完成了由Andreessen Horowitz领投的3500万美元A轮融资。在一次广泛的对话中，Jodi和Alejandro探讨了管弦乐团纪律与创业执行之间出人意料的相似之处、肠脑轴的科学，以及为什么音乐家能成为异常坚韧的创始人。",
    duration: "1:11:33",
    date: "2026-04-05",
    tags: ["Microbiome", "Music", "AI", "Health Tech"],
    audioUrl: "/audio/episode-04.m4a",
    featured: false,
  },
  {
    id: "ep-05-wealth-of-breath",
    number: 5,
    title: "The Wealth of Breath: Breathwork, Billions, and Balance",
    titleCn: "呼吸的财富：呼吸法、亿万财富与平衡",
    guest: "Priya Sharma",
    guestTitle: "General Partner, Soma Capital & Breathwork Practitioner",
    description:
      "Priya Sharma is a paradox: a hard-charging GP at Soma Capital who has deployed $200M across 30 health-tech deals, and a certified breathwork practitioner who starts every partner meeting with a two-minute breathing exercise. Jodi and Priya unpack the neuroscience behind why controlled breathing improves decision-making under pressure, how Priya's fund outperformed benchmarks during the 2025 downturn by investing in founder wellness, and the cultural shift happening inside Silicon Valley's most elite firms.",
    descriptionCn:
      "Priya Sharma是一个矛盾体：她是Soma Capital的强势普通合伙人，在30个健康科技交易中部署了2亿美元，同时也是一名认证呼吸法练习者，每次合伙人会议都以两分钟的呼吸练习开始。Jodi和Priya解析了控制呼吸为何能改善压力下决策的神经科学，Priya的基金如何通过投资创始人健康在2025年低迷期跑赢基准，以及硅谷最精英公司内部正在发生的文化转变。",
    duration: "47:56",
    date: "2026-04-12",
    tags: ["Breathwork", "Venture Capital", "Neuroscience", "Wellness"],
    audioUrl: "/audio/episode-05.m4a",
    featured: false,
  },
  {
    id: "ep-06-visual-medicine",
    number: 6,
    title: "Visual Medicine: How a Street Artist Disrupted Digital Therapeutics",
    titleCn: "视觉医学：一位街头艺术家如何颠覆数字疗法",
    guest: "Nneka Okafor",
    guestTitle: "CEO, Chromatherapy & Visual Artist",
    description:
      "Nneka Okafor grew up painting murals in Lagos before winning a scholarship to the Royal College of Art in London. After witnessing art therapy transform her mother's recovery from stroke, she built Chromatherapy — a digital therapeutics platform that uses generative art and color science to treat anxiety and PTSD, now prescribed by over 2,000 clinicians. Jodi and Nneka discuss the FDA approval process for software as medicine, raising $60M as a Black woman founder in Europe, and why the art world and health-tech have more in common than anyone thinks.",
    descriptionCn:
      "Nneka Okafor在拉各斯画壁画长大，后获得伦敦皇家艺术学院奖学金。在见证艺术疗法改变了母亲中风康复过程后，她创建了Chromatherapy——一个利用生成艺术和色彩科学治疗焦虑和创伤后应激障碍的数字疗法平台，现已被超过2000名临床医生开具处方。Jodi和Nneka讨论了软件作为药物的FDA审批流程、作为欧洲黑人女性创始人筹集6000万美元，以及为什么艺术界和健康科技比任何人想象的都有更多共同点。",
    duration: "1:02:15",
    date: "2026-04-19",
    tags: ["Digital Health", "Art", "Therapeutics", "Fundraising"],
    audioUrl: "/audio/episode-06.m4a",
    featured: true,
  },
];

export function getEpisodeById(id: string): Episode | undefined {
  return episodes.find((ep) => ep.id === id);
}

export function getFeaturedEpisodes(): Episode[] {
  return episodes.filter((ep) => ep.featured);
}

export function getLatestEpisode(): Episode {
  return episodes[0];
}
