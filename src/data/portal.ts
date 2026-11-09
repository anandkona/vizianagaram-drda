export type FeatureStat = {
  label: string;
  value: string;
  detail: string;
};

export type FeatureItem = {
  title: string;
  description: string;
  icon?: string;
  tag?: string;
  meta?: string;
  href?: string;
};

export type FeatureLink = {
  label: string;
  description: string;
  href: string;
  icon?: string;
};

export type FeatureSection = {
  eyebrow: string;
  title: string;
  description?: string;
  items?: FeatureItem[];
  links?: FeatureLink[];
  tone?: "cream" | "white" | "gold";
};

export type PortalFeature = {
  eyebrow: string;
  title: string;
  description: string;
  icon: string;
  crumb: string;
  stats?: FeatureStat[];
  sections: FeatureSection[];
  notice?: string;
  cta?: FeatureLink;
};

const staticNotice =
  "This portal is a local demonstration built with illustrative district information. Confirm current eligibility, contacts, deadlines and programme figures with the relevant official office.";

export const fpoNetwork: PortalFeature = {
  eyebrow: "Farmer producer organisations",
  title: "FPO Network",
  description:
    "A practical guide to farmer producer organisations (FPOs): what they are, how local collectives can work together and where to begin when you want to strengthen a farmer group.",
  icon: "agriculture",
  crumb: "FPO Network",
  stats: [
    { label: "Collective model", value: "Farmer-led", detail: "Groups build their own agenda" },
    { label: "Priority focus", value: "Value chains", detail: "From production to market" },
    { label: "Local connectors", value: "4", detail: "Illustrative support desks" },
  ],
  sections: [
    {
      eyebrow: "What is an FPO?",
      title: "Many hands can make a stronger value chain",
      description:
        "An FPO is a farmer-owned collective that can help members plan production, share knowledge, improve quality and negotiate with buyers. The exact legal structure and support available depend on the current state and central guidelines.",
      items: [
        { title: "Plan together", description: "Align seasonal crops, quality checks, storage needs and market opportunities around a shared plan.", icon: "agriculture", tag: "Collective planning" },
        { title: "Learn together", description: "Use demonstrations, peer learning and local extension contacts to build practical skills.", icon: "education", tag: "Knowledge sharing" },
        { title: "Sell with confidence", description: "Organise grading, traceability and buyer conversations so value reaches the people who produce it.", icon: "enterprise", tag: "Market linkage" },
      ],
    },
    {
      eyebrow: "A simple pathway",
      title: "From a group of growers to a resilient network",
      description: "Use these questions as a starting point for a conversation with your Gram Panchayat, agriculture office or producer group.",
      items: [
        { title: "01 · Start with participation", description: "Map who grows what, who is willing to participate and which local strengths can become a shared service.", icon: "people" },
        { title: "02 · Choose one value chain", description: "A focused first step makes quality, finance, training and buyer conversations easier to coordinate.", icon: "timeline" },
        { title: "03 · Build the basics", description: "Put in place simple records, transparent decisions, a bank account and a clear service agreement before scaling.", icon: "accountBalance" },
        { title: "04 · Connect to support", description: "Approach the District Agriculture Office, DRDA, DIC or the relevant tribal welfare contact for guidance.", icon: "support" },
      ],
      links: [
        { label: "Agriculture Department", description: "Crop guidance, farmer support and local extension contacts.", href: "/directory?tab=departments", icon: "agriculture" },
        { label: "DRDA and rural livelihoods", description: "Community mobilisation, inclusion and livelihood support.", href: "/directory?tab=departments", icon: "community" },
        { label: "District Industries Centre", description: "Enterprise planning, value addition and market linkages.", href: "/directory?tab=departments", icon: "industry" },
      ],
    },
    {
      eyebrow: "Keep it accountable",
      title: "Healthy groups are transparent groups",
      description: "An FPO works best when members understand its decisions, its finances and its next milestone.",
      items: [
        { title: "Member-owned decisions", description: "Document who can participate, how decisions are made and how benefits are shared." },
        { title: "Simple records", description: "Keep a reliable record of membership, procurement, sales, dues and important meetings." },
        { title: "No guaranteed results", description: "Market prices, weather, eligibility and registration requirements vary. Treat this page as orientation, not an approval." },
      ],
    },
  ],
  notice: "FPO registrations, financial support and current procurement opportunities should be verified with the relevant government or authorised agency. No live FPO register is connected to this demonstration portal.",
  cta: { label: "Explore livelihood schemes", description: "Find agriculture and enterprise support in the schemes catalogue.", href: "/schemes" },
};

export const serpFeature: PortalFeature = {
  eyebrow: "Society for Elimination of Rural Poverty",
  title: "SERP & rural livelihoods",
  description:
    "Understand the role of the Society for Elimination of Rural Poverty (SERP) and the wider rural livelihoods ecosystem in helping communities plan, learn and build resilient livelihoods.",
  icon: "community",
  crumb: "SERP",
  stats: [
    { label: "Focus", value: "Rural poor", detail: "Community-led planning" },
    { label: "Approach", value: "Convergence", detail: "Services, skills and livelihoods" },
    { label: "Entry point", value: "SHGs", detail: "Self-help groups" },
  ],
  sections: [
    {
      eyebrow: "A support ecosystem",
      title: "SERP connects community effort with public services",
      description:
        "SERP is associated with the Society for Elimination of Rural Poverty, a rural development approach focused on enabling poor and vulnerable households to improve their livelihoods through community institutions, skills, finance and convergence of services.",
      items: [
        { title: "Community institutions", description: "Self-help groups and other local institutions can be the first point for collective planning and support.", icon: "groups" },
        { title: "Livelihood planning", description: "Household and group plans can connect aspirations with training, enterprise and market pathways.", icon: "timeline" },
        { title: "Convergence", description: "A stronger plan brings together departments, banks, training providers and local institutions.", icon: "engineering" },
      ],
    },
    {
      eyebrow: "For an SHG or household",
      title: "A useful first conversation",
      description: "This sequence is a helpful preparation guide, not an official eligibility or enrolment process.",
      items: [
        { title: "01 · Know the group", description: "Collect basic household and enterprise details with consent, following the guidance of the facilitating organisation." },
        { title: "02 · Identify the pathway", description: "Discuss skills, assets, market distance, finance and the kind of support that can be sustained." },
        { title: "03 · Make a plan", description: "Write down a small number of measurable actions, responsibilities and review dates." },
        { title: "04 · Refer and review", description: "Connect members to the right department or authorised service and review progress without creating a parallel record of personal data." },
      ],
    },
    {
      eyebrow: "Find the right local route",
      title: "Use verified contacts for current guidance",
      description: "The following directory entry points can help a community find an appropriate conversation. The links are local to this portal and the contact details shown there are static references.",
      links: [
        { label: "District directory", description: "Browse departments, officers and public facilities.", href: "/directory", icon: "directory" },
        { label: "Women Entrepreneurship", description: "Explore a focused pathway for women-led enterprise.", href: "/women-entrepreneurship", icon: "women" },
        { label: "One Family One Entrepreneur", description: "Understand the household enterprise approach.", href: "/one-family-one-entrepreneur", icon: "family" },
        { label: "Mandal references", description: "Start with the mandal closest to the community you are working with.", href: "/about#mandals", icon: "map" },
      ],
    },
  ],
  notice: "SERP and SHG programmes change over time. This page is an illustrative explainer and does not provide live beneficiary data, enrolment, payments or approval services.",
};

export const knowledgeCenter: PortalFeature = {
  eyebrow: "Clear information for everyday decisions",
  title: "Knowledge Center",
  description:
    "Plain-language guides, checklists and reference pages for finding services, preparing a request, supporting a livelihood or visiting a public office.",
  icon: "menuBook",
  crumb: "Knowledge Center",
  sections: [
    {
      eyebrow: "Start here",
      title: "Useful answers, organised by the next step",
      description: "These guides are deliberately short and practical. They point you toward local pages and official contacts rather than presenting unverified instructions as government policy.",
      items: [
        { title: "How to approach a district office", description: "Prepare identity, location, a short description and the outcome you need in a calm, trackable way.", icon: "accountBalance", tag: "Citizen guide", href: "/contact" },
        { title: "How to check a scheme", description: "Review the purpose and owning department, then confirm current eligibility and documents with that office.", icon: "schemes", tag: "Schemes", href: "/schemes" },
        { title: "How to prepare a community request", description: "Name the place, affected people, urgency, evidence and the department that can respond.", icon: "campaign", tag: "PGRS", href: "/pgrs" },
        { title: "How to find a service", description: "Use the directory to identify a department, public facility or officer reference before travelling.", icon: "directory", tag: "Directory", href: "/directory" },
      ],
    },
    {
      eyebrow: "Learning paths",
      title: "Build confidence step by step",
      description: "Mix local knowledge with verified official guidance and keep a record of the contacts you make.",
      items: [
        { title: "Public services and documents", description: "Understand forms, references, RTI and the value of a written acknowledgement.", icon: "documents" },
        { title: "Livelihoods and enterprise", description: "Explore FPO, SERP, skills, women-led enterprise and market readiness.", icon: "enterprise" },
        { title: "Health and wellbeing", description: "Find public health facility references and emergency routes in the district directory.", icon: "health" },
        { title: "Culture and place", description: "Learn about heritage, community tourism and responsible travel.", icon: "tourism" },
      ],
    },
    {
      eyebrow: "Have something to share?",
      title: "Help improve the next version",
      description: "The portal team welcomes suggestions about missing topics, plain-language improvements and links that are difficult to use.",
      links: [
        { label: "Send feedback", description: "Tell us what was clear, what was missing or what needs correction.", href: "/feedback", icon: "campaign" },
        { label: "Contact the portal team", description: "Find the static district and website contact references.", href: "/contact", icon: "email" },
        { label: "View accessibility guidance", description: "Read about keyboard access, plain language and alternative routes to information.", href: "/accessibility", icon: "accessibility" },
      ],
    },
  ],
  notice: staticNotice,
};

export const eventsPage: PortalFeature = {
  eyebrow: "District calendar",
  title: "Events",
  description:
    "A clear, static calendar of conversations, awareness sessions, cultural moments and community programmes that residents can use as a starting point for local information.",
  icon: "event",
  crumb: "Events",
  sections: [
    {
      eyebrow: "What is listed",
      title: "A district calendar with context",
      description: "Event cards below are illustrative planning entries. Dates, venues and registration details must be confirmed with the organising department or local office.",
      items: [
        { title: "District development interaction", description: "A public conversation about services, infrastructure and community priorities.", icon: "campaign", tag: "Administration", meta: "Illustrative · Vizianagaram" },
        { title: "Women enterprise exchange", description: "A practical session on quality, pricing, market access and resilient incomes.", icon: "women", tag: "Livelihoods", meta: "Illustrative · Bobbili" },
        { title: "Health and nutrition awareness", description: "A community session on prevention, referral and family wellbeing.", icon: "health", tag: "Public health", meta: "Illustrative · Gajapati" },
        { title: "Cultural heritage walk", description: "A guided local conversation about place, craft, food and responsible visiting.", icon: "tourism", tag: "Culture", meta: "Illustrative · Vizianagaram" },
      ],
    },
    {
      eyebrow: "Before you attend",
      title: "Small checks make participation easier",
      items: [
        { title: "Confirm the organiser", description: "Check the notice with the relevant department, Gram Panchayat or venue." },
        { title: "Ask about access", description: "Confirm language, mobility, seating, transport and other access needs in advance where possible." },
        { title: "Keep a reference", description: "Save the verified contact and date rather than relying on an unverified forwarded message." },
      ],
    },
    {
      eyebrow: "More district stories",
      title: "Follow the conversation",
      links: [
        { label: "Press Releases", description: "Browse static release summaries and media references.", href: "/press-releases", icon: "campaign" },
        { label: "Media Centre", description: "Explore news, photos, videos and awareness entries.", href: "/media", icon: "photo" },
        { label: "District Tourism", description: "Discover heritage, culture and destinations.", href: "/tourism", icon: "tourism" },
      ],
    },
  ],
  notice: "This events page is a demonstration calendar, not a live event registration or notification service.",
};

export const feedbackPage: PortalFeature = {
  eyebrow: "Help us make this portal clearer",
  title: "Feedback",
  description:
    "Tell us what worked, what was difficult to find or what information would help your community. Your message helps shape a more useful district information experience.",
  icon: "campaign",
  crumb: "Feedback",
  sections: [
    {
      eyebrow: "A useful message",
      title: "Tell us about the experience, not only the outcome",
      description: "Please avoid including identity documents, banking details or other sensitive personal information in a feedback message.",
      items: [
        { title: "What did you visit?", description: "Mention the page, service or journey you tried to complete.", icon: "directory" },
        { title: "What happened?", description: "Share what was clear, confusing, missing or technically difficult.", icon: "campaign" },
        { title: "What would help?", description: "A small suggestion is enough to make the next step more accessible.", icon: "checkCircle" },
      ],
    },
  ],
  notice: "The form below calls a demonstration endpoint and returns a reference ID. It does not store feedback in a database or create an official government complaint.",
};

export const contactPage: PortalFeature = {
  eyebrow: "Connect with the district",
  title: "Contact",
  description:
    "Find a clear starting point for district administration, public departments, emergency support and website information. Verify time-sensitive details before visiting an office.",
  icon: "email",
  crumb: "Contact",
  sections: [
    {
      eyebrow: "Start with a route",
      title: "The right office depends on your question",
      description: "Use this table as a navigation aid. The contact references are static demonstration values unless a linked page states otherwise.",
      links: [
        { label: "Citizen help and services", description: "Find a service, document, scheme or public request starting point.", href: "/services", icon: "support" },
        { label: "District directory", description: "Search departments, officers and hospitals by reference information.", href: "/directory", icon: "directory" },
        { label: "PGRS / concern form", description: "Send a structured concern through the demonstration endpoint.", href: "/pgrs", icon: "campaign" },
        { label: "Feedback", description: "Share a usability or information suggestion with a reference ID.", href: "/feedback", icon: "feedback" },
      ],
    },
    {
      eyebrow: "Helpful contacts",
      title: "Keep the right number handy",
      items: [
        { title: "District Collectorate", description: "Collectorate, Vizianagaram, Andhra Pradesh · 08992-222000 (static reference)", icon: "accountBalance", meta: "General administration" },
        { title: "IVRS / portal helpline", description: "1902 · Use the current official directory to verify the service and language options.", icon: "support", meta: "Portal assistance" },
        { title: "Women Helpline", description: "181 · Emergency and safety support information should be confirmed with the current official source.", icon: "women", meta: "Support" },
        { title: "Child Helpline", description: "1098 · For urgent child-protection concerns, use the current official helpline guidance.", icon: "family", meta: "Protection" },
      ],
    },
    {
      eyebrow: "Accessibility and language",
      title: "Ask for the support you need",
      description: "Tell the office if you need a larger print, a slower explanation, an accessible route, a local-language explanation or a different communication format.",
      links: [
        { label: "Accessibility", description: "Read the portal’s access commitments and contact routes.", href: "/accessibility", icon: "accessibility" },
        { label: "Knowledge Center", description: "Prepare a clear, plain-language question before contacting an office.", href: "/knowledge-center", icon: "menuBook" },
      ],
    },
  ],
  notice: "Do not send identity documents, passwords, banking information or medical records through a demonstration form. This portal does not replace an official complaint, emergency or legal channel.",
};

export const accessibilityPage: PortalFeature = {
  eyebrow: "Access for every resident",
  title: "Accessibility",
  description:
    "Our accessibility guidance explains the habits this portal uses to make information easier to perceive, understand and operate with a keyboard or assistive technology.",
  icon: "accessibility",
  crumb: "Accessibility",
  sections: [
    {
      eyebrow: "What we are building towards",
      title: "Clear structure is a public service",
      description: "Accessibility is an ongoing practice. The current portal uses semantic headings, visible focus states, responsive layouts, descriptive labels and plain-language reference notes.",
      items: [
        { title: "Keyboard first", description: "Use Tab, Shift+Tab, Enter and the visible skip link to move through the portal.", icon: "keyboard", tag: "Interaction" },
        { title: "Readable contrast", description: "Text, controls and cards use the Vizianagaram gold and charcoal identity with careful contrast.", icon: "star", tag: "Presentation" },
        { title: "Resilient zoom", description: "Layouts respond to narrow screens and browser zoom without requiring a special device.", icon: "devices", tag: "Responsive" },
        { title: "Meaningful labels", description: "Form fields, navigation regions, alerts and buttons are labelled for assistive technology.", icon: "support", tag: "Semantics" },
      ],
    },
    {
      eyebrow: "If something gets in the way",
      title: "Tell us what happened",
      description: "Accessibility feedback is welcome, especially when a page, form, image, link or keyboard flow is difficult to use.",
      items: [
        { title: "Describe the page", description: "Include the address or route and the kind of device or assistive technology you use, if you are comfortable sharing it." },
        { title: "Describe the barrier", description: "Tell us what you expected, what happened and whether you were able to finish the task." },
        { title: "Use another route", description: "If a digital route is not accessible, contact the relevant office through the directory or an official phone channel." },
      ],
    },
    {
      eyebrow: "Language and inclusion",
      title: "Information should be understandable",
      description: "Use the portal’s English reference pages alongside an appropriate local-language or verbal explanation from a verified official source. Do not rely on an unverified translation for a legal, medical or financial decision.",
      links: [
        { label: "Feedback form", description: "Report an accessibility barrier and receive a demonstration reference ID.", href: "/feedback", icon: "campaign" },
        { label: "District directory", description: "Find a public contact when a digital route is not suitable.", href: "/directory", icon: "directory" },
        { label: "IVRS information", description: "Understand the helpline reference and alternative contact route.", href: "/ivrs", icon: "support" },
      ],
    },
  ],
  notice: "If you face an immediate safety or health risk, use the relevant emergency or official helpline rather than this portal.",
};

export const sitemapPage: PortalFeature = {
  eyebrow: "Find your way",
  title: "Site map",
  description:
    "A readable index of the Vizianagaram portal’s local pages. Use it to move from a broad topic to a specific service, reference or participation route.",
  icon: "map",
  crumb: "Sitemap",
  sections: [
    {
      eyebrow: "Explore the portal",
      title: "Routes organised by purpose",
      description: "The page-level route surface is grouped below for quick scanning. Search engines also receive the public XML sitemap.",
      links: [
        { label: "About and district information", description: "Profile, administration, mandals, dashboard and success stories.", href: "/about", icon: "map" },
        { label: "Citizen services", description: "Services, concerns, feedback, contact, IVRS, directory and hospitals.", href: "/services", icon: "support" },
        { label: "Schemes and livelihoods", description: "Scheme catalogue, deep links, FPO, SERP and enterprise pathways.", href: "/schemes", icon: "enterprise" },
        { label: "Tourism and media", description: "Destinations, community tourism, news, events and press releases.", href: "/tourism", icon: "tourism" },
        { label: "Knowledge and inclusion", description: "Knowledge Center, accessibility, sitemap and portal feedback.", href: "/knowledge-center", icon: "menuBook" },
        { label: "District Mart", description: "Browse illustrative local products, wishlist and checkout.", href: "/mart", icon: "shopping" },
      ],
    },
    {
      eyebrow: "Frequently used pages",
      title: "A short list for residents",
      items: [
        { title: "Government Schemes", description: "Search the local static scheme catalogue and open a category deep link.", href: "/schemes" },
        { title: "District Directory", description: "Find officers, departments and hospital references.", href: "/directory" },
        { title: "Public Grievance", description: "Use the accessible PGRS demonstration form.", href: "/pgrs" },
        { title: "Contact", description: "Find a route to the right office or support line.", href: "/contact" },
      ],
    },
  ],
  notice: "This visible site map covers local pages, not private API routes or query-string variants. The XML sitemap is available at /sitemap.xml.",
};

export const oneFamily: PortalFeature = {
  eyebrow: "Household enterprise",
  title: "One Family One Entrepreneur",
  description:
    "A practical, dignity-first guide to the One Family One Entrepreneur approach: helping households identify a suitable livelihood, build a plan and connect with the right support.",
  icon: "family",
  crumb: "One Family One Entrepreneur",
  sections: [
    {
      eyebrow: "The idea",
      title: "Start with what a family already knows",
      description: "The approach starts with household strengths, interests and local opportunities. It is not a promise of income and should be paired with current official eligibility, finance and training guidance.",
      items: [
        { title: "One household, one conversation", description: "Discuss skills, time available, assets, care responsibilities, market distance and preferred type of work.", icon: "people" },
        { title: "One realistic product or service", description: "Choose an activity that can be tested with local demand before taking on larger costs.", icon: "enterprise" },
        { title: "One learning loop", description: "Record what was tried, learn from customers and partners, and improve the next small step.", icon: "education" },
      ],
    },
    {
      eyebrow: "A six-step planning path",
      title: "From idea to an informed next step",
      items: [
        { title: "01 · Interests and strengths", description: "List activities the household enjoys or has experience in, including unpaid work and community knowledge." },
        { title: "02 · Market check", description: "Ask nearby customers, shops, institutions and producers what they need and what they currently pay." },
        { title: "03 · Skill gap", description: "Identify the smallest useful training or mentoring gap and a realistic date to address it." },
        { title: "04 · Simple costing", description: "Estimate inputs, time, transport, packaging and a fair price before committing money." },
        { title: "05 · Support conversation", description: "Check the current scheme, training or credit guidance with the relevant official office." },
        { title: "06 · Review and adapt", description: "Set a review point, keep learning and change the plan when the evidence says to do so." },
      ],
    },
    {
      eyebrow: "Keep support dignified",
      title: "A plan should expand choice, not create pressure",
      items: [
        { title: "Consent matters", description: "Adults should make their own choices. Guidance should respect privacy, safety and the family’s time." },
        { title: "Verify every promise", description: "Current selection, training, subsidy and loan details must come from authorised sources." },
        { title: "Include care responsibilities", description: "A viable plan accounts for the unpaid work, care and mobility needs that shape household time." },
      ],
      links: [
        { label: "Women Entrepreneurship", description: "Explore a focused women-led enterprise pathway.", href: "/women-entrepreneurship", icon: "women" },
        { label: "Enterprise schemes", description: "Read local scheme references before applying.", href: "/schemes/enterprise", icon: "schemes" },
        { label: "FPO Network", description: "Consider a collective route when several growers face the same market challenge.", href: "/fpo", icon: "agriculture" },
      ],
    },
  ],
  notice: "This is an illustrative explainer, not an official enrolment, registration or income guarantee. Current programme rules must be checked with the relevant authority.",
};

export const womenEntrepreneurship: PortalFeature = {
  eyebrow: "Women-led enterprise",
  title: "Women Entrepreneurship",
  description:
    "A supportive pathway for women exploring enterprise, from confidence and skills to a viable product, a fair price and a resilient local market.",
  icon: "women",
  crumb: "Women Entrepreneurship",
  sections: [
    {
      eyebrow: "Build from strength",
      title: "Enterprise can be personal, collective and local",
      description: "Women entrepreneurs in a district may work through home-based units, self-help groups, cooperatives, producer groups or independent services. The right model depends on the person, the market and the support available.",
      items: [
        { title: "Use local knowledge", description: "Food processing, tailoring, crafts, services, nursery work, digital support and value addition can all build on existing strengths.", icon: "enterprise" },
        { title: "Plan for care and time", description: "A practical plan makes space for care, travel, safety, energy and the other responsibilities that shape a woman’s working day.", icon: "family" },
        { title: "Share the work", description: "Collective buying, mentoring and quality checks can reduce isolation and make small units more resilient.", icon: "groups" },
      ],
    },
    {
      eyebrow: "A practical pathway",
      title: "Five questions before the first investment",
      items: [
        { title: "01 · What do customers want?", description: "Test demand with a small sample before making a large stock or equipment decision." },
        { title: "02 · What is the fair cost?", description: "Price materials, time, wastage, transport, packaging and a margin for risk—not only the material cost." },
        { title: "03 · Where will the skill come from?", description: "Identify a trainer, mentor or peer group and ask for a demonstration of the final product quality." },
        { title: "04 · How will orders be managed?", description: "Keep a simple record of orders, payments, delivery dates and customer feedback." },
        { title: "05 · What support is verified?", description: "Confirm current training, credit, insurance, market and scheme details with authorised offices." },
      ],
    },
    {
      eyebrow: "Connect with the ecosystem",
      title: "Find a useful next step",
      links: [
        { label: "One Family One Entrepreneur", description: "A household-level starting point for a livelihood conversation.", href: "/one-family-one-entrepreneur", icon: "family" },
        { label: "SERP & rural livelihoods", description: "Learn about community institutions and convergence support.", href: "/serp", icon: "community" },
        { label: "District Mart", description: "Browse illustrative local products and craft categories.", href: "/mart", icon: "shopping" },
        { label: "Women & Child Development", description: "Find a department reference for support and inclusion questions.", href: "/directory?tab=departments", icon: "women" },
      ],
    },
  ],
  notice: "Support, eligibility and market conditions differ. This page does not promise funding, jobs, income or an official registration.",
};

export const communityTourism: PortalFeature = {
  eyebrow: "Visit with purpose",
  title: "Community Tourism",
  description:
    "Plan a respectful visit that connects Vizianagaram’s heritage, food, craft, nature and people with local livelihoods and community stewardship.",
  icon: "tourism",
  crumb: "Community Tourism",
  sections: [
    {
      eyebrow: "Travel that gives back",
      title: "A visitor can be a partner in preservation",
      description: "Community tourism is about more than seeing a place. It asks visitors to follow local guidance, support local livelihoods and respect the people and spaces that make the experience meaningful.",
      items: [
        { title: "Choose local value", description: "Where practical, use local guides, food, transport, crafts and small accommodation providers.", icon: "groups" },
        { title: "Ask before capturing", description: "Seek permission before photographing people, homes, ceremonies, work or places of worship.", icon: "accessibility" },
        { title: "Leave places well", description: "Carry back waste, protect water bodies and follow route, season and safety guidance.", icon: "nature" },
        { title: "Learn the story", description: "Prefer explanations from verified local guides and official heritage information over assumptions.", icon: "menuBook" },
      ],
    },
    {
      eyebrow: "Route ideas",
      title: "Build a day around place and people",
      items: [
        { title: "Vizianagaram heritage walk", description: "Explore the fort precinct, town landmarks and cultural institutions with a local guide.", icon: "castle", tag: "Heritage" },
        { title: "Bobbili craft and history", description: "Connect fort history, the Bobbili veena tradition and respectful artisan visits.", icon: "music", tag: "Culture" },
        { title: "Thatipudi countryside", description: "Plan a nature visit with local guidance around the reservoir and rural landscapes.", icon: "water", tag: "Nature" },
        { title: "Food and village enterprise", description: "Meet local producers where visits and purchases are arranged transparently.", icon: "agriculture", tag: "Local livelihoods" },
      ],
    },
    {
      eyebrow: "Plan responsibly",
      title: "A few questions before you go",
      items: [
        { title: "Is the place open and accessible?", description: "Confirm hours, access routes, transport, weather and local permissions before travel." },
        { title: "Who will host the experience?", description: "Use a verified guide or community contact and agree on a fair, transparent visit." },
        { title: "What should I carry back?", description: "Carry back memories, not objects or images that belong to the community." },
      ],
      links: [
        { label: "Tourism overview", description: "Browse the district’s static place reference.", href: "/tourism", icon: "tourism" },
        { label: "Knowledge Center", description: "Prepare practical questions before contacting a local office.", href: "/knowledge-center", icon: "menuBook" },
      ],
    },
  ],
  notice: "Opening hours, access conditions, local rules and operator credentials can change. Confirm them with a verified local or official source before travel.",
};

export const pressReleases: PortalFeature = {
  eyebrow: "Media corner",
  title: "Press Releases",
  description:
    "A concise, readable index of release summaries and media references for residents who want to understand what was announced and where to verify it.",
  icon: "campaign",
  crumb: "Press Releases",
  sections: [
    {
      eyebrow: "Latest summaries",
      title: "Announcements with a place to verify",
      description: "These summaries are static editorial examples. They are not live government releases and should not be used as a substitute for an official notification.",
      items: [
        { title: "District administration coordination update", description: "A meeting focused on citizen services, public readiness and coordination across departments.", icon: "campaign", tag: "Administration", meta: "24 Sep 2026 · Summary" },
        { title: "Regional connectivity preparation reference", description: "A district-level reference to coordination, livelihoods and connectivity planning.", icon: "infrastructure", tag: "Infrastructure", meta: "21 Sep 2026 · Summary" },
        { title: "Community cyber-safety awareness", description: "A practical awareness session on passwords, payments, reporting and safer digital habits.", icon: "security", tag: "Awareness", meta: "18 Sep 2026 · Summary" },
        { title: "Public health preparedness update", description: "A community-facing reference on prevention, referral and local health coordination.", icon: "health", tag: "Health", meta: "10 Sep 2026 · Summary" },
      ],
    },
    {
      eyebrow: "Read with context",
      title: "A release is a starting point",
      items: [
        { title: "Check the source", description: "Look for the original department, order, notification or official website before relying on a summary." },
        { title: "Check the date", description: "Deadlines, contacts and programme details can change after a release is published." },
        { title: "Check the scope", description: "A district summary may not describe every mandal, village or beneficiary." },
      ],
    },
    {
      eyebrow: "More media references",
      title: "Continue exploring the district",
      links: [
        { label: "Media Centre", description: "Browse news, photos, videos and awareness entries.", href: "/media", icon: "photo" },
        { label: "Events", description: "See illustrative district calendar entries.", href: "/events", icon: "event" },
        { label: "Knowledge Center", description: "Learn how to verify a public announcement.", href: "/knowledge-center", icon: "menuBook" },
      ],
    },
  ],
  notice: "This page contains illustrative summaries only. It does not claim to publish live government press releases.",
};

export const pgrsPage: PortalFeature = {
  eyebrow: "Citizen voice",
  title: "Public Grievance Redressal System",
  description:
    "Use this structured concern form to create a clear reference for a service issue or request. The form is a functional demonstration and does not submit to an official government redressal system.",
  icon: "support",
  crumb: "PGRS",
  sections: [
    {
      eyebrow: "A clear request",
      title: "Tell us what happened and what would help",
      description: "For an official grievance, use the current official PGRS channel after verifying the department and process. This local form validates your input and returns a generated reference ID without storing a record.",
      items: [
        { title: "Describe the issue", description: "Include what service was needed, what happened and any date, place or department involved.", icon: "campaign" },
        { title: "State the outcome", description: "Explain whether you need a reply, repair, referral, information or another action.", icon: "checkCircle" },
        { title: "Protect privacy", description: "Do not add identity documents, banking details, passwords or medical records to this form.", icon: "security" },
      ],
    },
  ],
  notice: "The API response is a generated demonstration reference only. No database persistence or official grievance registration is claimed.",
};

export const ivrsPage: PortalFeature = {
  eyebrow: "Voice and assisted access",
  title: "IVRS",
  description:
    "Understand the role of Interactive Voice Response Services (IVRS) as a possible phone-based route for information, and learn what to keep ready before calling.",
  icon: "support",
  crumb: "IVRS",
  sections: [
    {
      eyebrow: "Before you call",
      title: "Have the essentials ready",
      description: "IVRS menus and language options can change. The number below is a static district portal reference; verify it in the current directory or official notice before relying on it.",
      items: [
        { title: "District portal reference", description: "1902 · Keep a pen or notes ready to record the menu path and any reference number offered.", icon: "support", meta: "Static reference" },
        { title: "Speak clearly", description: "Use your name, mandal or village and the service you need, then follow the prompts carefully.", icon: "campaign" },
        { title: "Ask for a reference", description: "If the service supports a request, ask for the next step and a reference before ending the call.", icon: "receipt" },
      ],
    },
    {
      eyebrow: "If IVRS is not suitable",
      title: "Choose another accessible route",
      items: [
        { title: "Visit or call an office", description: "Use the district directory for a department or public facility reference.", icon: "directory" },
        { title: "Use PGRS", description: "Send a structured concern through the local demonstration form and receive a generated reference ID.", icon: "campaign" },
        { title: "Ask for accessibility support", description: "Request a suitable language, format, pace or communication route when contacting an office.", icon: "accessibility" },
      ],
    },
    {
      eyebrow: "Important safety note",
      title: "Use the right channel for urgent help",
      description: "For immediate danger or a time-critical health or safety concern, use the relevant emergency or official helpline. This page is information only and does not place a call.",
      links: [
        { label: "District directory", description: "Find current public office and facility references.", href: "/directory", icon: "directory" },
        { label: "Contact", description: "See routes to district and support contacts.", href: "/contact", icon: "email" },
        { label: "Accessibility", description: "Request an alternative way to access information.", href: "/accessibility", icon: "accessibility" },
      ],
    },
  ],
  notice: "IVRS menus, numbers and service availability must be verified through the current official source. The page does not initiate a phone call.",
};

export const featurePages: Record<string, PortalFeature> = {
  fpo: fpoNetwork,
  serp: serpFeature,
  "knowledge-center": knowledgeCenter,
  events: eventsPage,
  feedback: feedbackPage,
  contact: contactPage,
  accessibility: accessibilityPage,
  sitemap: sitemapPage,
  "one-family-one-entrepreneur": oneFamily,
  "women-entrepreneurship": womenEntrepreneurship,
  "community-tourism": communityTourism,
  "press-releases": pressReleases,
  pgrs: pgrsPage,
  ivrs: ivrsPage,
};

export type SitemapLink = {
  label: string;
  href: string;
  description: string;
  group: string;
};

export const sitemapLinks: SitemapLink[] = [
  { label: "Home", href: "/", description: "Citizen services and district development portal.", group: "Start here" },
  { label: "About Vizianagaram", href: "/about", description: "Profile, administration, mandals and district priorities.", group: "District" },
  { label: "Citizen Services", href: "/services", description: "Find a service, request or public information starting point.", group: "Services" },
  { label: "Government Schemes", href: "/schemes", description: "Search the local static scheme catalogue.", group: "Services" },
  { label: "Livelihoods", href: "/livelihoods", description: "Explore illustrative livelihood pathways and stories.", group: "Livelihoods" },
  { label: "FPO Network", href: "/fpo", description: "Understand farmer producer organisation pathways.", group: "Livelihoods" },
  { label: "SERP & rural livelihoods", href: "/serp", description: "Learn about SERP and rural livelihood support.", group: "Livelihoods" },
  { label: "One Family One Entrepreneur", href: "/one-family-one-entrepreneur", description: "A household enterprise planning guide.", group: "Livelihoods" },
  { label: "Women Entrepreneurship", href: "/women-entrepreneurship", description: "A women-led enterprise pathway.", group: "Livelihoods" },
  { label: "Tourism", href: "/tourism", description: "Discover heritage, culture and destinations.", group: "Discover" },
  { label: "Media Centre", href: "/media", description: "News, photos, videos and awareness entries.", group: "Discover" },
  { label: "Events", href: "/events", description: "Illustrative district calendar and event guidance.", group: "Discover" },
  { label: "Press Releases", href: "/press-releases", description: "Static release summaries and verification guidance.", group: "Discover" },
  { label: "Success Stories", href: "/success-stories", description: "Illustrative local action stories.", group: "Discover" },
  { label: "District Directory", href: "/directory", description: "Search departments, officers and hospitals.", group: "Find help" },
  { label: "PGRS", href: "/pgrs", description: "Structured concern demonstration form.", group: "Find help" },
  { label: "Feedback", href: "/feedback", description: "Share a portal or accessibility suggestion.", group: "Find help" },
  { label: "Contact", href: "/contact", description: "Find a route to the right office.", group: "Find help" },
  { label: "IVRS", href: "/ivrs", description: "Phone-based information and alternative routes.", group: "Find help" },
  { label: "Knowledge Center", href: "/knowledge-center", description: "Plain-language guides and checklists.", group: "About this portal" },
  { label: "Accessibility", href: "/accessibility", description: "Inclusive access information and support.", group: "About this portal" },
  { label: "Sitemap", href: "/sitemap", description: "A readable index of local pages.", group: "About this portal" },
  { label: "Dashboard", href: "/dashboard", description: "Illustrative development indicators.", group: "About this portal" },
  { label: "District Mart", href: "/mart", description: "Illustrative local products and commerce actions.", group: "District Mart" },
  { label: "Mart wishlist", href: "/mart/wishlist", description: "Your locally saved Mart wishlist.", group: "District Mart" },
  { label: "Mart checkout", href: "/mart/checkout", description: "Demonstration checkout for Mart items.", group: "District Mart" },
];

export const portalRouteGroups = Array.from(new Set(sitemapLinks.map((link) => link.group)));
