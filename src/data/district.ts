export type NavChild = {
  label: string;
  href: string;
  children?: NavChild[];
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

export type DistrictStat = {
  label: string;
  value: string;
  detail: string;
  icon: string;
  accent: string;
};

export type Service = {
  title: string;
  description: string;
  icon: string;
  href: string;
  tag: string;
};

export type NewsItem = {
  category: string;
  date: string;
  title: string;
  summary: string;
  readTime: string;
  href: string;
};

export type Scheme = {
  id: string;
  title: string;
  category: string;
  department: string;
  description: string;
  details: string;
  icon: string;
  accent: string;
};

export type LivelihoodProgram = {
  title: string;
  description: string;
  progress: number;
  target: string;
  achieved: string;
  icon: string;
  accent: string;
  beneficiaries: string;
};

export type SuccessStory = {
  id: string;
  category: string;
  person: string;
  location: string;
  story: string;
  result: string;
  resultLabel: string;
  initial: string;
  accent: string;
  tags: string[];
  beforeIncome?: string;
  afterIncome?: string;
  loan?: string;
  program?: string;
};

export type TourismPlace = {
  name: string;
  area: string;
  description: string;
  icon: string;
  accent: string;
  tag: string;
  image?: string;
};

export type Department = {
  name: string;
  description: string;
  services: string;
  icon: string;
};

export type Officer = {
  name: string;
  designation: string;
  department: string;
  phone: string;
  email: string;
  initials: string;
};

export type Hospital = {
  name: string;
  type: string;
  location: string;
  phone: string;
  services: string;
  icon: string;
};

export type MediaItem = {
  type: "News" | "Photo" | "Video" | "Event" | "Development" | "Awareness";
  title: string;
  description: string;
  date: string;
  location: string;
  icon: string;
  accent: string;
};

export const siteConfig = {
  title: "VIZIANAGARAM DISTRICT",
  subtitle: "Citizen Services & District Development Portal",
  government: "Government of Andhra Pradesh",
  description:
    "A citizen-first digital gateway to Vizianagaram district services, welfare schemes, livelihoods, tourism and development updates.",
  address: "Collectorate, Vizianagaram, Andhra Pradesh",
  email: "collectorate.vzm@ap.gov.in",
  phone: "08992-222000",
  ivrs: "1902",
  updated: "September 2026",
};

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "District Profile", href: "/about/district" },
      { label: "About DRDA", href: "/about/drda" },
      { label: "Org Structure", href: "/about/structure" },
      { label: "Who's Who", href: "/about/whos-who" },
    ],
  },
  {
    label: "Citizen Services",
    href: "/services",
    children: [
      { label: "All Citizen Services", href: "/services" },
      {
        label: "Schemes & Learning",
        href: "/schemes",
        children: [
          { label: "Explore Schemes", href: "/schemes" },
          { label: "Knowledge Center", href: "/knowledge-center" },
          { label: "Events & Training", href: "/events" },
        ],
      },
      {
        label: "Grievance & Support",
        href: "/pgrs",
        children: [
          { label: "Share Your Concern (PGRS)", href: "/pgrs" },
          { label: "IVRS Services (1902)", href: "/ivrs" },
          { label: "Feedback", href: "/feedback" },
        ],
      },
      {
        label: "Information & Transparency",
        href: "/services#transparency",
        children: [
          { label: "Announcements & Latest Updates", href: "/announcements" },
          { label: "Tenders", href: "/tenders" },
          { label: "RTI", href: "/rti" },
        ],
      },
      { label: "Contact Directory", href: "/directory" },
    ],
  },
  {
    label: "Schemes",
    href: "/schemes",
    children: [
      { label: "All Schemes", href: "/schemes" },
      { label: "Women & SHG", href: "/schemes/women" },
      { label: "Farmers", href: "/schemes/farmers" },
      { label: "Youth & Skills", href: "/schemes/youth" },
      { label: "Entrepreneurs", href: "/schemes/entrepreneurs" },
      { label: "Tribal Welfare", href: "/schemes/tribal" },
      { label: "Senior Citizens", href: "/schemes/social" },
    ],
  },
  {
    label: "Livelihoods",
    href: "/livelihoods",
    children: [
      { label: "FPOs", href: "/fpos" },
      { label: "Women Entrepreneurship", href: "/women-entrepreneurship" },
      { label: "One Family One Entrepreneur", href: "/one-family-one-entrepreneur" },
      { label: "Livelihood Projects", href: "/livelihoods" },
      { label: "Community Tourism", href: "/community-tourism" },
      { label: "SERP Corner", href: "/serp-corner" },
    ],
  },

  {
    label: "Media",
    href: "/press-releases#media-coverage",
    children: [
      { label: "Media Coverage (Newspaper Clippings)", href: "/press-releases#media-coverage" },
      { label: "Press Releases", href: "/press-releases" },
      { label: "Media Gallery & News", href: "/media" },
    ],
  },
  { label: "Success Stories", href: "/success-stories" },
  { label: "Dashboard", href: "/dashboard" },
];

export const districtStats: DistrictStat[] = [
  {
    label: "Population",
    value: "19.30 Lakh",
    detail: "Static district profile",
    icon: "people",
    accent: "charcoal",
  },
  {
    label: "Revenue Divisions",
    value: "3",
    detail: "Administrative divisions",
    icon: "accountTree",
    accent: "gold",
  },
  {
    label: "Mandals",
    value: "27",
    detail: "Revenue mandals",
    icon: "map",
    accent: "charcoal",
  },
  {
    label: "Villages",
    value: "982",
    detail: "Revenue villages",
    icon: "village",
    accent: "gold",
  },
  {
    label: "Gram Panchayats",
    value: "777",
    detail: "Local self-government units",
    icon: "accountBalance",
    accent: "charcoal",
  },
  {
    label: "Literacy Rate",
    value: "53.21%",
    detail: "Static profile indicator",
    icon: "school",
    accent: "gold",
  },
];

export const services: Service[] = [
  {
    title: "Public Grievance",
    description: "Submit and track a citizen grievance or request.",
    icon: "support",
    href: "/services",
    tag: "Voice & redress",
  },
  {
    title: "Government Schemes",
    description: "Explore welfare and development schemes by category.",
    icon: "schemes",
    href: "/schemes",
    tag: "Find support",
  },
  {
    title: "Hospitals",
    description: "Locate public health facilities and emergency services.",
    icon: "health",
    href: "/directory?tab=hospitals",
    tag: "Care nearby",
  },
  {
    title: "Schools & Colleges",
    description: "Education notices, institutions and learning resources.",
    icon: "education",
    href: "/directory?tab=departments",
    tag: "Learn & grow",
  },
  {
    title: "Tourism",
    description: "Discover heritage, culture and destinations across the district.",
    icon: "tourism",
    href: "/tourism",
    tag: "Explore Vizianagaram",
  },
  {
    title: "District Directory",
    description: "Find officers, departments and public service contacts.",
    icon: "directory",
    href: "/directory",
    tag: "Connect locally",
  },
  {
    title: "Forms & Documents",
    description: "Access commonly requested forms and reference documents.",
    icon: "documents",
    href: "/services#forms",
    tag: "Ready reference",
  },
  {
    title: "RTI & Transparency",
    description: "Understand information requests and public accountability.",
    icon: "transparency",
    href: "/services#transparency",
    tag: "Open information",
  },
];

export const news: NewsItem[] = [
  {
    category: "Administration",
    date: "24 Sep 2026",
    title: "District administration reviews summer drinking water preparedness",
    summary:
      "A review meeting focused on storage, distribution and remote-village readiness ahead of the warmer season.",
    readTime: "3 min read",
    href: "/media#latest-news",
  },
  {
    category: "Infrastructure",
    date: "21 Sep 2026",
    title: "Preparations reviewed for Bhogapuram international airport",
    summary:
      "Stakeholders discussed the district coordination required for connectivity, livelihoods and regional growth.",
    readTime: "4 min read",
    href: "/media#latest-news",
  },
  {
    category: "Awareness",
    date: "18 Sep 2026",
    title: "District-level cyber safety awareness programme conducted",
    summary:
      "Residents, students and self-help group members participated in a practical digital-safety session.",
    readTime: "2 min read",
    href: "/media#awareness",
  },
  {
    category: "Education",
    date: "14 Sep 2026",
    title: "Education recruitment and public notices published",
    summary:
      "A consolidated notice area keeps applicants informed about district education updates and key dates.",
    readTime: "2 min read",
    href: "/media#latest-news",
  },
  {
    category: "Public Health",
    date: "10 Sep 2026",
    title: "District health preparedness updates shared with communities",
    summary:
      "Local health teams continue awareness, referral and preventive care coordination across the mandals.",
    readTime: "3 min read",
    href: "/media#development-activities",
  },
];

export const districtProfile = {
  area: "4,321 sq km",
  population: "19.30 lakh",
  literacyRate: "53.21%",
  revenueDivisions: "3",
  mandals: "27",
  revenueVillages: "982",
  gramPanchayats: "777",
  municipalities: "Vizianagaram, Bobbili, Sathavasa, Salur, Vizianagaram and Yelamanchili",
  note: "Figures on this demonstration portal are presented as static profile information. Verify time-bound administrative data with the district administration before publishing it as an official record.",
};

export const districtPriorities = [
  { title: "Citizen-centric service delivery", description: "Simple access to information, requests and accountable grievance redress.", icon: "support" },
  { title: "Public health and education", description: "Healthy communities, strong learning foundations and inclusive institutions.", icon: "health" },
  { title: "Agriculture and rural livelihoods", description: "Better value chains, farmer support and dignified local enterprise.", icon: "agriculture" },
  { title: "Skill development and employment", description: "Market-linked skills that open sustainable opportunities for youth.", icon: "skill" },
  { title: "Tourism and cultural heritage", description: "Responsible tourism that protects Vizianagaram’s living heritage.", icon: "tourism" },
  { title: "Village infrastructure", description: "Roads, drainage, safe water and resilient public facilities.", icon: "infrastructure" },
  { title: "Basic amenities", description: "Reliable everyday services for every household, including remote areas.", icon: "home" },
];

export const mandals = [
  "Bobbili",
  "Bondapalli",
  "Burja",
  "Dwaraka Nandiwada",
  "Gajapati",
  "Gantyada",
  "Gara",
  "Jamiyadippa",
  "Komaripeta",
  "Konatharayapalem",
  "Kotukur",
  "Mandur",
  "Mentrapalli",
  "Merakam",
  "Munchangi",
  "Nandapuram",
  "Palasa",
  "Vizianagaram",
  "Pustharam",
  "Ravulapalem",
  "Salur",
  "Sathavasa",
  "Srungararajupeta",
  "Thatharampatnam",
  "Veeraghattam",
  "Vizianagaram",
  "Yelamanchili",
];

export const schemeCategories = [
  "All schemes",
  "Agriculture",
  "Welfare",
  "Employment",
  "Health",
  "Infrastructure",
  "Education",
  "Enterprise",
  "Women & Child Development",
] as const;

export const schemes: Scheme[] = [
  {
    id: "pm-kisan",
    title: "PM-Kisan Samman Nidhi",
    category: "Agriculture",
    department: "Department of Agriculture",
    description: "Income support for eligible small and marginal farmer families.",
    details: "A central support programme for eligible landholding farmer families, with details available through the relevant agriculture office.",
    icon: "agriculture",
    accent: "charcoal",
  },
  {
    id: "rythi-credit",
    title: "Interest Subvention on Agriculture Credit",
    category: "Agriculture",
    department: "Department of Agriculture",
    description: "Supportive credit conditions for eligible agricultural borrowers.",
    details: "Explore short-term crop credit support and the documentation required by participating banks and local agriculture offices.",
    icon: "loan",
    accent: "gold",
  },
  {
    id: "chandra-birds",
    title: "YSR/Nestle Maya Scheme",
    category: "Welfare",
    department: "Women, Child Development & Social Welfare",
    description: "Monthly support and life-cycle services for eligible mothers and children.",
    details: "A state welfare programme supporting eligible families with maternity assistance, child nutrition and related services.",
    icon: "family",
    accent: "charcoal",
  },
  {
    id: "arogyasri",
    title: "Dr. YSR Aarogyasri Health Scheme",
    category: "Health",
    department: "Department of Health, Medical & Family Welfare",
    description: "Cashless treatment support for eligible families under notified conditions.",
    details: "Know the empanelled hospital network and eligibility guidance through the district health administration.",
    icon: "health",
    accent: "charcoal",
  },
  {
    id: "skill-india",
    title: "Skill India / PMKVY Pathways",
    category: "Employment",
    department: "District Skill Development Agency",
    description: "Short-term skill pathways linked to practical employment opportunities.",
    details: "A directory entry for local skill counselling, training and apprenticeship information. Registration details may vary by batch.",
    icon: "skill",
    accent: "gold",
  },
  {
    id: "pmegp",
    title: "PMEGP Enterprise Support",
    category: "Enterprise",
    department: "District Industries Centre",
    description: "Credit and support for small manufacturing and service enterprises.",
    details: "A central self-employment programme for eligible entrepreneurs seeking a new unit or expansion.",
    icon: "enterprise",
    accent: "charcoal",
  },
  {
    id: "mgnregs",
    title: "MGNREGS Rural Works",
    category: "Employment",
    department: "Panchayat Raj Engineering & Rural Development",
    description: "Local wage employment and durable rural assets for eligible households.",
    details: "A reference entry for rural works, wage employment and asset creation. Contact the Gram Panchayat for local work availability.",
    icon: "village",
    accent: "charcoal",
  },
  {
    id: "pm-awas",
    title: "PMAY-G Affordable Housing",
    category: "Infrastructure",
    department: "Department of Housing",
    description: "Housing support for eligible urban and rural households.",
    details: "A housing support programme with different components for rural and urban applicants.",
    icon: "housing",
    accent: "gold",
  },
  {
    id: "samagra-shiksha",
    title: "Samagra Shiksha Education Support",
    category: "Education",
    department: "Department of Education",
    description: "School-level support for learning, inclusion and school infrastructure.",
    details: "A consolidated education programme guide for parents and institutions, with local notices shared by the education office.",
    icon: "education",
    accent: "charcoal",
  },
  {
    id: "missionshakti",
    title: "Mission Shakti Women’s Groups",
    category: "Women & Child Development",
    department: "Women, Child Development & Social Welfare",
    description: "Women’s collectives, convergence and enterprise support.",
    details: "A convergence platform for women’s groups to access training, finance, enterprise networks and community support.",
    icon: "women",
    accent: "charcoal",
  },
  {
    id: "nutrition",
    title: "POSHAN Abhiyaan Nutrition Support",
    category: "Health",
    department: "Department of Women, Child Development & Social Welfare",
    description: "Nutrition awareness and child growth support in communities.",
    details: "Community-level nutrition and growth monitoring support for children, mothers and anganwadi centres.",
    icon: "nutrition",
    accent: "gold",
  },
  {
    id: "road-safety",
    title: "Road Safety & Mobilisation Support",
    category: "Infrastructure",
    department: "Transport & Road Safety Cell",
    description: "Awareness and support for safer, connected rural roads.",
    details: "A public information entry connecting citizens with road safety, transport and grievance channels at the district level.",
    icon: "transport",
    accent: "charcoal",
  },
];

export const livelihoodPrograms: LivelihoodProgram[] = [
  {
    title: "Women Entrepreneurship",
    description: "Supporting women-led enterprises with skills, planning and market connections.",
    progress: 82,
    target: "2,500 units",
    achieved: "2,050 units",
    icon: "women",
    accent: "charcoal",
    beneficiaries: "Illustrative annual target",
  },
  {
    title: "Skill Development",
    description: "Building practical, job-ready skills with local training partners.",
    progress: 74,
    target: "8,000 learners",
    achieved: "5,920 learners",
    icon: "skill",
    accent: "gold",
    beneficiaries: "Illustrative annual target",
  },
  {
    title: "Farmer Support",
    description: "Helping farmer groups improve production, quality and market value.",
    progress: 69,
    target: "1,200 groups",
    achieved: "828 groups",
    icon: "agriculture",
    accent: "charcoal",
    beneficiaries: "Illustrative annual target",
  },
  {
    title: "Health Services",
    description: "Strengthening preventive care, referral pathways and community access.",
    progress: 91,
    target: "100% facilities",
    achieved: "91% coverage",
    icon: "health",
    accent: "gold",
    beneficiaries: "Illustrative coverage",
  },
  {
    title: "Village Infrastructure",
    description: "Investing in safe, resilient public assets across rural communities.",
    progress: 64,
    target: "420 assets",
    achieved: "269 assets",
    icon: "infrastructure",
    accent: "charcoal",
    beneficiaries: "Illustrative annual target",
  },
];

export const successStories: SuccessStory[] = [
  {
    id: "santhi-millet",
    category: "Local Women Enterprise",
    person: "Santhi & Mahila Collective",
    location: "Bobbili mandal",
    story: "A women-led food enterprise turned local millets and seasonal produce into carefully packed staples for nearby households and small retailers.",
    result: "A repeatable local supply chain",
    resultLabel: "Outcome",
    initial: "S",
    accent: "charcoal",
    tags: ["Food processing", "Women-led"],
    beforeIncome: "₹3,500/month",
    afterIncome: "₹18,000/month",
    loan: "₹1.5 Lakhs (SHG Credit)",
    program: "NRLM Enterprise"
  },
  {
    id: "sai-farmer-group",
    category: "Farmer Producer Group",
    person: "Sai Farmer Producer Group",
    location: "Gajapati mandal",
    story: "A farmer group pooled quality checks and collective selling to improve the visibility of small plots and reduce intermediary dependence.",
    result: "Stronger bargaining power",
    resultLabel: "Outcome",
    initial: "F",
    accent: "gold",
    tags: ["Agriculture", "Collective"],
    beforeIncome: "₹5,000/month",
    afterIncome: "₹24,000/month",
    loan: "₹3 Lakhs (FPO Fund)",
    program: "Agriculture Infrastructure Fund"
  },
  {
    id: "naveen-skills",
    category: "Youth Skill Initiative",
    person: "Naveen & Youth Skills Cohort",
    location: "Vizianagaram town",
    story: "A practical training cohort combined electrical fundamentals, workplace safety and guided apprenticeship to make entry into work more practical.",
    result: "Skills matched to local work",
    resultLabel: "Outcome",
    initial: "Y",
    accent: "charcoal",
    tags: ["Skilling", "Employment"],
    beforeIncome: "Unemployed",
    afterIncome: "₹15,000/month",
    loan: "₹50,000 (Skill Kit)",
    program: "PMKVY"
  },
  {
    id: "ravi-tailoring",
    category: "Women Entrepreneurship",
    person: "Ravi’s Tailoring Unit",
    location: "Vizianagaram area",
    story: "A home-based tailoring enterprise expanded through a shared order system, quality checks and a direct relationship with community customers.",
    result: "A steady supplementary income",
    resultLabel: "Outcome",
    initial: "R",
    accent: "gold",
    tags: ["Enterprise", "Textiles"],
    beforeIncome: "₹2,500/month",
    afterIncome: "₹12,000/month",
    loan: "₹75,000 (Micro Credit)",
    program: "PMEGP"
  },
  {
    id: "village-kitchen",
    category: "Community Enterprise",
    person: "Mandal Kitchen Collective",
    location: "Salur mandal",
    story: "A community kitchen initiative focused on nutritious meals, hygienic preparation and affordable service for local families and events.",
    result: "Nutrition with local enterprise",
    resultLabel: "Outcome",
    initial: "M",
    accent: "charcoal",
    tags: ["Nutrition", "Community"],
    beforeIncome: "₹4,000/month",
    afterIncome: "₹20,000/month",
    loan: "₹2.5 Lakhs (Community Fund)",
    program: "NRLM + Mission Shakti"
  }
];

export const tourismPlaces: TourismPlace[] = [
  {
    name: "Vizianagaram Fort",
    area: "Vizianagaram",
    description: "A historic fort precinct that reflects the district’s layered regional history and civic heritage.",
    icon: "castle",
    accent: "charcoal",
    tag: "Heritage",
    image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=700&q=80&auto=format&fit=crop",
  },
  {
    name: "Ganta Stambham",
    area: "Vizianagaram",
    description: "A distinctive clock-tower landmark and an instantly recognisable part of the district town skyline.",
    icon: "clock",
    accent: "gold",
    tag: "Landmark",
    image: "https://images.unsplash.com/photo-1508873696983-2df57046475a?w=700&q=80&auto=format&fit=crop",
  },
  {
    name: "Moti Mahal",
    area: "Vizianagaram",
    description: "A memorable heritage-inspired landmark associated with local history and architectural character.",
    icon: "museum",
    accent: "charcoal",
    tag: "Culture",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=700&q=80&auto=format&fit=crop",
  },
  {
    name: "Bobbili Fort",
    area: "Bobbili",
    description: "A historic fort complex offering a window into the region’s royal and architectural traditions.",
    icon: "fort",
    accent: "gold",
    tag: "Heritage",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=700&q=80&auto=format&fit=crop",
  },
  {
    name: "Bobbili Durbar Mahal",
    area: "Bobbili",
    description: "A palace landmark where local history, craft and community memory come together.",
    icon: "palace",
    accent: "charcoal",
    tag: "Architecture",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=700&q=80&auto=format&fit=crop",
  },
  {
    name: "Thatipudi Reservoir",
    area: "Gantyada",
    description: "A scenic water landscape associated with irrigation, ecology and countryside travel.",
    icon: "water",
    accent: "gold",
    tag: "Nature",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=700&q=80&auto=format&fit=crop",
  },
  {
    name: "Pydithalli Ammavari Temple",
    area: "Vizianagaram",
    description: "A devotional destination connected with local faith, festivals and community life.",
    icon: "temple",
    accent: "charcoal",
    tag: "Pilgrimage",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=700&q=80&auto=format&fit=crop",
  },
  {
    name: "Maharaja’s Music College",
    area: "Vizianagaram",
    description: "An institution with a strong association with Carnatic music and cultural learning.",
    icon: "music",
    accent: "gold",
    tag: "Culture",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=700&q=80&auto=format&fit=crop",
  },
  {
    name: "Maharaja’s Sanskrit College",
    area: "Vizianagaram",
    description: "A centre of learning representing the district’s deep connection to Sanskrit learning.",
    icon: "book",
    accent: "charcoal",
    tag: "Education",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=700&q=80&auto=format&fit=crop",
  },
  {
    name: "Thatipudi Nature Escape",
    area: "Gantyada",
    description: "A visual destination for quiet time, local craft and responsible countryside experiences.",
    icon: "forest",
    accent: "gold",
    tag: "Nature",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=700&q=80&auto=format&fit=crop",
  },
];

export const mediaItems: MediaItem[] = [
  { type: "News", title: "District administration coordination meeting", description: "A visual update from a coordination meeting focused on citizen services and district readiness.", date: "24 Sep 2026", location: "Collectorate, Vizianagaram", icon: "campaign", accent: "charcoal" },
  { type: "Photo", title: "Community health awareness session", description: "Residents and health workers participated in a session on prevention, referral and well-being.", date: "18 Sep 2026", location: "Gajapati", icon: "photo", accent: "gold" },
  { type: "Video", title: "District priorities in perspective", description: "A short district communication featuring public spaces, livelihoods and citizen support.", date: "12 Sep 2026", location: "Vizianagaram district", icon: "video", accent: "charcoal" },
  { type: "Event", title: "Women entrepreneurship interaction", description: "An interaction with women-led enterprises focused on market access, quality and resilient incomes.", date: "08 Sep 2026", location: "Bobbili", icon: "event", accent: "gold" },
  { type: "Development", title: "Village infrastructure review", description: "Officials reviewed public assets and community priorities for the next development cycle.", date: "03 Sep 2026", location: "Salur", icon: "development", accent: "charcoal" },
  { type: "Awareness", title: "Cyber safety for every household", description: "A practical awareness session on safe digital payments, passwords and reporting concerns.", date: "28 Aug 2026", location: "Vizianagaram town", icon: "awareness", accent: "gold" },
  { type: "Photo", title: "Young people at a skills camp", description: "Participants at a district skills engagement explored practical pathways into work.", date: "24 Aug 2026", location: "Yelamanchili", icon: "photo", accent: "charcoal" },
  { type: "Video", title: "A district shaped by heritage", description: "A visual journey through forts, learning institutions, reservoirs and local traditions.", date: "19 Aug 2026", location: "Vizianagaram district", icon: "video", accent: "gold" },
  { type: "Event", title: "Farmer producer group meeting", description: "Farmer representatives discussed quality, collective procurement and local market opportunities.", date: "14 Aug 2026", location: "Gantyada", icon: "event", accent: "charcoal" },
];

export const departments: Department[] = [
  { name: "Agriculture Department", description: "Farmer support, seasonal advisories and agricultural services.", services: "Crop guidance · farm records", icon: "agriculture" },
  { name: "Animal Husbandry", description: "Livestock health, dairy support and animal husbandry services.", services: "Veterinary care · dairy", icon: "paw" },
  { name: "Civil Supplies", description: "Ration, public distribution and fair-price shop information.", services: "PDS · ration services", icon: "shopping" },
  { name: "Education", description: "School education, notices, institutions and learning resources.", services: "Schools · notices", icon: "education" },
  { name: "Election Cell", description: "Electoral information, rolls and citizen election services.", services: "Voter information · rolls", icon: "vote" },
  { name: "Women & Child Development", description: "Women, children, nutrition and family support services.", services: "Anganwadi · nutrition", icon: "women" },
  { name: "DRDA", description: "Rural development, livelihoods and inclusive community programmes.", services: "Livelihoods · inclusion", icon: "community" },
  { name: "Health", description: "Public health facilities, prevention and citizen care pathways.", services: "Care · prevention", icon: "health" },
  { name: "Housing", description: "Housing schemes, applications and public housing information.", services: "Housing · applications", icon: "housing" },
  { name: "Social Welfare", description: "Social protection, vulnerable groups and inclusion services.", services: "Support · inclusion", icon: "social" },
  { name: "Backward Classes Welfare", description: "Welfare and educational support for eligible communities.", services: "Education · support", icon: "people" },
  { name: "Tribal Welfare", description: "Culture, livelihoods and support for tribal communities.", services: "Culture · support", icon: "tribal" },
  { name: "Minorities Welfare", description: "Welfare, education and community support information.", services: "Welfare · community", icon: "diversity" },
  { name: "Differently Abled Welfare", description: "Inclusion, accessibility and assistive support services.", services: "Inclusion · accessibility", icon: "accessibility" },
  { name: "Panchayat Raj Engineering", description: "Rural roads, water supply and local infrastructure.", services: "Roads · water", icon: "engineering" },
  { name: "District Industries Centre", description: "Enterprise guidance, industrial support and local livelihoods.", services: "Enterprise · industry", icon: "industry" },
  { name: "Tourism & Culture", description: "Destination information, heritage and cultural programmes.", services: "Heritage · tourism", icon: "tourism" },
  { name: "Transport", description: "Transport information, permits and road safety services.", services: "Travel · safety", icon: "transport" },
  { name: "Water Resources", description: "Water security, irrigation and resource management.", services: "Water · irrigation", icon: "water" },
];

export const officers: Officer[] = [
  { name: "District Collector & Magistrate", designation: "Head of District Administration", department: "Collectorate", phone: "08992-222000", email: "collectorate.vzm@ap.gov.in", initials: "DC" },
  { name: "District Planning Officer", designation: "Planning & Programme Coordination", department: "Collectorate", phone: "08992-222110", email: "planning.vzm@ap.gov.in", initials: "DP" },
  { name: "District Programme Officer", designation: "Livelihoods & Rural Development", department: "DRDA", phone: "08992-222240", email: "drda.vzm@ap.gov.in", initials: "DR" },
  { name: "District Medical & Health Officer", designation: "Public Health Coordination", department: "Health", phone: "08992-222360", email: "dmho.vzm@ap.gov.in", initials: "MH" },
  { name: "District Education Officer", designation: "School Education Services", department: "Education", phone: "08992-222480", email: "deo.vzm@ap.gov.in", initials: "ED" },
  { name: "District Agriculture Officer", designation: "Farmer & Agriculture Services", department: "Agriculture", phone: "08992-222590", email: "dao.vzm@ap.gov.in", initials: "AG" },
  { name: "District Industries Officer", designation: "Enterprise & MSME Support", department: "DIC", phone: "08992-222640", email: "dic.vzm@ap.gov.in", initials: "DI" },
  { name: "Tourism & Culture Officer", designation: "Heritage & Destination Support", department: "Tourism", phone: "08992-222710", email: "tourism.vzm@ap.gov.in", initials: "TC" },
];

export const hospitals: Hospital[] = [
  { name: "District Government Hospital", type: "General hospital", location: "Vizianagaram town", phone: "08992-222901", services: "General medicine · emergency care", icon: "health" },
  { name: "Area Hospital", type: "Secondary care", location: "Bobbili", phone: "08992-222902", services: "Outpatient · inpatient care", icon: "health" },
  { name: "Community Health Centre", type: "Primary care", location: "Gajapati", phone: "08992-222903", services: "Primary health · maternal care", icon: "health" },
  { name: "Community Health Centre", type: "Primary care", location: "Salur", phone: "08992-222904", services: "Primary health · child care", icon: "health" },
  { name: "Primary Health Centre", type: "Primary care", location: "Yelamanchili", phone: "08992-222905", services: "Outpatient · vaccination", icon: "health" },
  { name: "Primary Health Centre", type: "Primary care", location: "Vizianagaram", phone: "08992-222906", services: "Outpatient · referral support", icon: "health" },
];

export const helplines = [
  { label: "Helpline", value: "1902 (Free)", detail: "Free Helpline", href: "tel:1902" },
  { label: "Contact", value: "08954-220123", detail: "Contact Number", href: "tel:08954220123" },
  { label: "Toll Free", value: "1800-425-0808", detail: "Toll Free", href: "tel:18004250808" },
];

export const quickLinks = [
  { label: "About District", href: "/about" },
  { label: "Citizen Services", href: "/services" },
  { label: "Schemes", href: "/schemes" },
  { label: "Directory", href: "/directory" },
  { label: "FPO Network", href: "/fpo" },
  { label: "Mart", href: "/mart" },
  { label: "Knowledge Center", href: "/knowledge-center" },
  { label: "Dashboard", href: "/dashboard" },
];

export const footerServices = [
  { label: "Public Grievance (PGRS)", href: "/pgrs" },
  { label: "Government Schemes", href: "/schemes" },
  { label: "FPO Network", href: "/fpo" },
  { label: "Hospitals", href: "/directory?tab=hospitals" },
  { label: "Feedback", href: "/feedback" },
  { label: "Contact", href: "/contact" },
  { label: "District Mart", href: "/mart" },
];

export const forms = [
  { name: "Citizen request note", description: "A printable checklist for writing a clear request or grievance.", type: "Reference sheet" },
  { name: "Scheme enquiry checklist", description: "Questions to ask the relevant department before applying.", type: "Reference sheet" },
  { name: "RTI information guide", description: "A plain-language guide to understanding information requests.", type: "Information guide" },
];

export const directoryTabs = ["Officers", "Departments", "Hospitals"] as const;
export type DirectoryTab = (typeof directoryTabs)[number];
