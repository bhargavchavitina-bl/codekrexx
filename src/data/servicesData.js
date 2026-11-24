export const servicesData = [
  {
    id: "ai-agents",
    slug: "ai-agents",
    title: "Autonomous AI Agents",
    shortDescription: "Self-directed AI agents that reason, plan, use digital tools, and complete multi-step complex business tasks independently.",
    iconName: "Bot",
    badge: "Flagship",
    color: "from-brand-primary to-brand-accent",
    glowColor: "rgba(124, 58, 237, 0.35)",
    deliverables: [
      "Custom multi-agent orchestration architecture (Supervisor + Workers)",
      "Automated tool-calling (REST APIs, SQL databases, email, internal software)",
      "Persistent memory store (short-term conversational + long-term episodic)",
      "Human-in-the-loop review dashboards & emergency kill-switches"
    ],
    useCases: [
      "Autonomous supply chain re-ordering & vendor communications",
      "Financial risk anomaly detection and automated report generation",
      "Executive triage & proactive calendar / task orchestration"
    ],
    outcomes: "Reduce human manual touchpoints by up to 85% on structured multi-step tasks."
  },
  {
    id: "process-automation",
    slug: "process-automation",
    title: "Business Process Automation",
    shortDescription: "End-to-end operational automation connecting legacy software, modern SaaS tools, databases, and generative models.",
    iconName: "Cpu",
    badge: "High ROI",
    color: "from-brand-secondary to-brand-accent",
    glowColor: "rgba(6, 182, 212, 0.35)",
    deliverables: [
      "Full workflow audit and automation roadmap",
      "Custom webhook, n8n, and Python microservice pipelines",
      "Automated PDF document parsing and OCR data extraction",
      "Real-time sync between CRM, ERP, and accounting engines"
    ],
    useCases: [
      "Instant invoice reconciliation against purchase orders",
      "Automated employee onboarding across 12 SaaS accounts in 90 seconds",
      "Cross-departmental status reporting compiled automatically every week"
    ],
    outcomes: "Average payback period of under 45 days with 20-30 hours saved per employee each week."
  },
  {
    id: "ai-chatbots",
    slug: "ai-chatbots",
    title: "AI Chatbots & Intelligent Support",
    shortDescription: "Context-aware conversational agents powered by Retrieval-Augmented Generation (RAG) that resolve support tickets 24/7.",
    iconName: "MessagesSquare",
    badge: "24/7 Support",
    color: "from-brand-accent to-brand-primary",
    glowColor: "rgba(59, 130, 246, 0.35)",
    deliverables: [
      "Vector database embeddings of all documentation, knowledge bases, and tickets",
      "Omnichannel deployment: Web widget, Slack, WhatsApp, Zendesk, Intercom",
      "Accurate tone matching and strict guardrails preventing hallucination",
      "Automated escalation protocols with sentiment analysis"
    ],
    useCases: [
      "Tier-1 and Tier-2 customer inquiry resolution with zero queue time",
      "Internal IT helpdesk for password resets and software provisioning",
      "E-commerce order tracking, returns processing, and upsell suggestions"
    ],
    outcomes: "70%+ instantaneous deflection rate for incoming tickets with 94%+ CSAT scores."
  },
  {
    id: "lead-generation",
    slug: "lead-generation",
    title: "Lead Generation & Sales Automation",
    shortDescription: "Algorithmic lead qualification, intelligent web scraping, enriched CRM records, and hyper-personalized outbound sequences.",
    iconName: "Zap",
    badge: "Growth",
    color: "from-brand-primary via-brand-accent to-brand-secondary",
    glowColor: "rgba(124, 58, 237, 0.35)",
    deliverables: [
      "Target account intelligence scraping & verification engines",
      "Deep personalization algorithms analyzing target news, podcasts, & hiring trends",
      "Multi-channel automated sequencing across Email, LinkedIn, and CRM",
      "Dynamic response handler that books discovery calls directly to your calendar"
    ],
    useCases: [
      "B2B SaaS outbound targeting qualified tech leaders with relevant messaging",
      "Real estate broker lead qualification and instant SMS follow-ups",
      "Recruiting candidate sourcing and automated screening questionnaires"
    ],
    outcomes: "3.8x increase in qualified outbound meeting rates and 80% reduction in prospecting hours."
  },
  {
    id: "ai-webapp-dev",
    slug: "ai-webapp-dev",
    title: "AI Web & App Development",
    shortDescription: "Bespoke, blazing-fast web and mobile applications with native AI features, generative UI, and intuitive modern interfaces.",
    iconName: "Layers",
    badge: "Full-Stack",
    color: "from-brand-secondary to-brand-accent",
    glowColor: "rgba(6, 182, 212, 0.35)",
    deliverables: [
      "Production-ready React / Next.js / React Native architectures",
      "Sub-second AI streaming interfaces with optimistic UI updates",
      "Role-based access control (RBAC), multi-tenancy, and Stripe billing",
      "Scalable cloud deployment on Vercel, Supabase, or AWS"
    ],
    useCases: [
      "AI-powered SaaS platforms and vertical AI industry copilot software",
      "Interactive analytics dashboards with natural language query capabilities",
      "Customer-facing portals with personalized generative content"
    ],
    outcomes: "Launch 4x faster with modern, maintainable codebases built to scale to millions of users."
  },
  {
    id: "data-integrations",
    slug: "data-integrations",
    title: "Data & Enterprise AI Integrations",
    shortDescription: "Connect frontier LLMs (OpenAI, Gemini, Claude) directly to your proprietary data lakes, APIs, and enterprise systems.",
    iconName: "Database",
    badge: "Enterprise",
    color: "from-brand-accent to-brand-primary",
    glowColor: "rgba(59, 130, 246, 0.35)",
    deliverables: [
      "Enterprise RAG pipeline design with hybrid keyword & semantic search",
      "Fine-tuned lightweight open-source models for on-premise execution",
      "Zero-data retention agreements and SOC2-compliant architectures",
      "Real-time streaming telemetry and LLM cost optimization caching"
    ],
    useCases: [
      "Legal and compliance document audit across 100,000+ contracts",
      "Unified internal enterprise knowledge search across Notion, Drive, & Jira",
      "Custom predictive analytics and churn forecasting algorithms"
    ],
    outcomes: "Unlock institutional knowledge trapped in silos while cutting API inference costs by up to 60%."
  }
];
