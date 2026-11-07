import {
  districtProfile,
  districtStats,
  livelihoodPrograms,
  news,
  services,
  successStories,
  type LivelihoodProgram,
  type NewsItem,
  type Service,
  type SuccessStory,
} from "./district";

export type HeroSlide = {
  id: string;
  image: string;
  eyebrow: string;
  title: string;
  description: string;
  location: string;
};

export type LeadershipProfile = {
  id: string;
  name: string;
  designation: string;
  organization: string;
  image: string;
  imagePosition?: string;
  vision: string;
  priorities: string[];
};

export type DistrictGlanceStat = {
  label: string;
  value: number;
  displayValue: string;
  detail: string;
  icon: string;
  accent: string;
  decimals?: number;
};

export type CitizenServiceCard = Service & {
  image: string;
  imagePosition?: string;
};

export type LivelihoodProjectCard = LivelihoodProgram & {
  image: string;
  imagePosition?: string;
};

export type TransparencyMetric = {
  label: string;
  value: number;
  result: string;
  target: string;
  note: string;
  color: string;
};

export type ProgramPortal = {
  title: string;
  description: string;
  meta: string;
  href: string;
  icon: string;
  image: string;
  imagePosition?: string;
};

const unsplash = (id: string, width = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=82`;

export const heroSlides: HeroSlide[] = [
  {
    id: "rural-enterprise",
    image: unsplash("photo-1609252285522-ed0ebdd43551"),
    eyebrow: "Vizianagaram district",
    title: "Opportunity close to home",
    description: "A district where enterprise, heritage and everyday services meet.",
    location: "Vizianagaram · Andhra Pradesh",
  },
  {
    id: "public-service",
    image: unsplash("photo-1521791136064-7986c2920216"),
    eyebrow: "Citizen first",
    title: "A clearer way to begin",
    description: "Find a service, understand a process and connect with the right office.",
    location: "Your district gateway",
  },
  {
    id: "connected-place",
    image: unsplash("photo-1470770841072-f978cf4d019e", 1800),
    eyebrow: "Connected district",
    title: "Many places, one home",
    description: "From coastal landscapes to heritage towns, local priorities stay connected.",
    location: "27 mandals · 982 villages",
  },
  {
    id: "learning-and-skills",
    image: unsplash("photo-1524178232363-1fb2b075b655"),
    eyebrow: "Learning for tomorrow",
    title: "Skills that open doors",
    description: "Explore practical pathways for youth, farmers and women-led enterprises.",
    location: "Livelihoods and skilling",
  },
  {
    id: "public-information",
    image: unsplash("photo-1450101499163-c8848c66ca85"),
    eyebrow: "Information for action",
    title: "Public information, made useful",
    description: "Schemes, notices and district context in one calm, searchable place.",
    location: "Vizianagaram District Portal",
  },
];

export const heroStats = [
  { value: "19.30 Lakh", label: "citizens", detail: "population profile" },
  { value: "27", label: "mandals", detail: "revenue divisions" },
  { value: "982", label: "villages", detail: "revenue villages" },
  { value: "53.21%", label: "literacy", detail: "profile indicator" },
];

export const districtFootprint = [
  { value: "4,321", label: "sq km area" },
  { value: districtProfile.revenueDivisions, label: "revenue divisions" },
  { value: districtProfile.mandals, label: "mandals" },
  { value: districtProfile.revenueVillages, label: "villages" },
];

export const leadershipProfiles: LeadershipProfile[] = [
  {
    id: "chief-minister",
    name: "Sri Nara Chandrababu Naidu",
    designation: "Hon'ble Chief Minister",
    organization: "Government of Andhra Pradesh",
    image: "/leaders/N-CHandra-babu.jpg",
    imagePosition: "top center",
    vision: "A general reference to leadership that places citizen opportunity, accountable governance and inclusive development at the centre of public service.",
    priorities: ["Citizen-centric governance", "Inclusive rural development", "Accountable institutions"],
  },
  {
    id: "minister",
    name: "Sri Kondapalli Srinivas",
    designation: "Hon'ble Minister for MSME & SERP",
    organization: "Government of Andhra Pradesh",
    image: "/leaders/kondapalli%20srinivas.jpg",
    vision: "A general reference to the role of rural development, enterprise support and coordinated services in helping communities build sustainable livelihoods.",
    priorities: ["Livelihood access", "Women-led enterprise", "Local skill pathways"],
  },
  {
    id: "ceo",
    name: "Chief Executive Officer",
    designation: "SERP leadership",
    organization: "Society for Elimination of Rural Poverty",
    image: "/leaders/ceo.webp",
    vision: "A general reference to community institutions, financial inclusion and women’s leadership as practical foundations for dignified local enterprise.",
    priorities: ["Community institutions", "Financial inclusion", "Women’s leadership"],
  },
  {
    id: "collector",
    name: "District Collector & Magistrate",
    designation: "District administration",
    organization: "Collectorate, Vizianagaram",
    image: "/leaders/collector.jpg",
    vision: "A general reference to coordinated district administration that connects departments, public services and the needs of every mandal.",
    priorities: ["Responsive services", "Department coordination", "Citizen-first access"],
  },
  {
    id: "project-director",
    name: "Project Director",
    designation: "DRDA leadership",
    organization: "DRDA, Vizianagaram",
    image: "/leaders/project-director.jpg",
    vision: "A general reference to rural development that helps communities access skills, enterprise support and resilient local livelihoods.",
    priorities: ["Community livelihoods", "Enterprise support", "Inclusive convergence"],
  },
];

export const districtGlanceStats: DistrictGlanceStat[] = [
  {
    label: "Population",
    value: 19.3,
    displayValue: "19.30 Lakh",
    detail: "district population profile",
    icon: "people",
    accent: "#FFD54F",
    decimals: 2,
  },
  {
    label: "Revenue divisions",
    value: 3,
    displayValue: "3",
    detail: "administrative divisions",
    icon: "accountTree",
    accent: "#FFD54F",
  },
  {
    label: "Mandals",
    value: 27,
    displayValue: "27",
    detail: "revenue mandals",
    icon: "map",
    accent: "#FFD54F",
  },
  {
    label: "Villages",
    value: 982,
    displayValue: "982",
    detail: "revenue villages",
    icon: "village",
    accent: "#FFD54F",
  },
  {
    label: "Gram Panchayats",
    value: 777,
    displayValue: "777",
    detail: "local self-government units",
    icon: "accountBalance",
    accent: "#FFD54F",
  },
  {
    label: "Literacy rate",
    value: 53.21,
    displayValue: "53.21%",
    detail: "static profile indicator",
    icon: "school",
    accent: "#FFD54F",
    decimals: 2,
  },
];

export const institutionNetwork = [
  { value: "3", label: "Revenue divisions", detail: "administrative coordination", icon: "accountTree" },
  { value: "27", label: "Mandals", detail: "local revenue units", icon: "map" },
  { value: "982", label: "Revenue villages", detail: "village network", icon: "village" },
  { value: "777", label: "Gram Panchayats", detail: "local self-government", icon: "accountBalance" },
];

export const transparencyMetrics: TransparencyMetric[] = [
  {
    label: "Women Entrepreneurship",
    value: 82,
    result: "2,050 units",
    target: "2,500 units target",
    note: "Illustrative annual target",
    color: "hsl(45, 96%, 45%)", // Darker for 82%
  },
  {
    label: "Skill Development",
    value: 74,
    result: "5,920 learners",
    target: "8,000 learners target",
    note: "Illustrative annual target",
    color: "hsl(45, 96%, 50%)", // Medium for 74%
  },
  {
    label: "Farmer Support",
    value: 69,
    result: "828 groups",
    target: "1,200 groups target",
    note: "Illustrative annual target",
    color: "hsl(45, 96%, 55%)", // Lighter for 69%
  },
  {
    label: "Health Services",
    value: 91,
    result: "91% coverage",
    target: "100% facilities target",
    note: "Illustrative coverage",
    color: "hsl(45, 96%, 40%)", // Darkest for 91%
  },
];

const serviceImages = [
  unsplash("photo-1521791136064-7986c2920216", 900),
  unsplash("photo-1450101499163-c8848c66ca85", 900),
  unsplash("photo-1576091160399-112ba8d25d1d", 900),
  unsplash("photo-1509062522246-3755977927d7", 900),
  unsplash("photo-1470770841072-f978cf4d019e", 900),
];

export const citizenServices: CitizenServiceCard[] = services.slice(0, 5).map((service, index) => ({
  ...service,
  image: serviceImages[index],
  imagePosition: index === 4 ? "center" : "center",
}));

export const livelihoodProjects: LivelihoodProjectCard[] = livelihoodPrograms.slice(0, 4).map((program, index) => ({
  ...program,
  image: [
    unsplash("photo-1609252285522-ed0ebdd43551", 1000),
    unsplash("photo-1524178232363-1fb2b075b655", 1000),
    unsplash("photo-1500937386664-56d1dfef3854", 1000),
    unsplash("photo-1576091160399-112ba8d25d1d", 1000),
  ][index],
  imagePosition: index === 2 ? "center" : "center",
}));

export const missionMetrics = [
  { value: "2,050", label: "units achieved", detail: "Women Entrepreneurship" },
  { value: "2,500", label: "unit target", detail: "Illustrative annual target" },
  { value: "82%", label: "progress", detail: "Current portal snapshot" },
];

export const programPortals: ProgramPortal[] = [
  {
    title: "Women Entrepreneurship",
    description: "Skills, planning and market connections for women-led enterprises.",
    meta: "2,050 units · 82% snapshot",
    href: "/livelihoods",
    icon: "women",
    image: unsplash("photo-1609252285522-ed0ebdd43551", 900),
  },
  {
    title: "Skill Development",
    description: "Practical, job-ready learning pathways for local opportunities.",
    meta: "5,920 learners · 74% snapshot",
    href: "/livelihoods",
    icon: "skill",
    image: unsplash("photo-1524178232363-1fb2b075b655", 900),
  },
  {
    title: "Farmer Support",
    description: "Quality checks, collective capability and better market visibility.",
    meta: "828 groups · 69% snapshot",
    href: "/livelihoods",
    icon: "agriculture",
    image: unsplash("photo-1500937386664-56d1dfef3854", 900),
  },
  {
    title: "Citizen Services",
    description: "Find a public service, request or local office in a few clicks.",
    meta: "Start with what you need",
    href: "/services",
    icon: "support",
    image: unsplash("photo-1521791136064-7986c2920216", 900),
  },
  {
    title: "Scheme Finder",
    description: "Explore welfare and development schemes by category.",
    meta: "Guides to the next step",
    href: "/schemes",
    icon: "schemes",
    image: unsplash("photo-1450101499163-c8848c66ca85", 900),
  },
  {
    title: "District Directory",
    description: "Connect with departments, officers and public service contacts.",
    meta: "Local contacts and offices",
    href: "/directory",
    icon: "directory",
    image: unsplash("photo-1497366811353-6870744d04b2", 900),
  },
  {
    title: "District Mart",
    description: "Authentic SHG handlooms, Bobbili veenas, and tribal forest products.",
    meta: "Direct Producer-to-Citizen",
    href: "/mart",
    icon: "schemes",
    image: unsplash("photo-1551288049-bebda4e38f71", 900),
  },
  {
    title: "Success Stories",
    description: "Local initiative, practical support and visible outcomes.",
    meta: "Stories from across the district",
    href: "/success-stories",
    icon: "star",
    image: unsplash("photo-1529156069898-49953e39b3ac", 900),
  },
];

export const latestNews: NewsItem[] = news;
export const featuredSuccessStories: SuccessStory[] = successStories.slice(0, 3);
export { districtStats };
