export const quickPromptChips = [
  "Automate my inbound lead follow-ups",
  "Build customer support AI with Zendesk",
  "Parse messy PDF invoices into QuickBooks",
  "Extract competitor intelligence automatically",
  "Automate employee onboarding workflows"
];

export const mockAiResponses = {
  "automate my inbound lead follow-ups": {
    agentName: "Codekrexx SalesPilot AI",
    summary: "Here is the recommended autonomous sales pipeline for your business:",
    steps: [
      { title: "Lead Ingestion & Enrichment", detail: "Listens to website form submission webhooks, queries Clearbit & LinkedIn API to enrich firmographic data within 4 seconds." },
      { title: "Dynamic Lead Scoring", detail: "Evaluates ICP match, employee size, tech stack, and intent score. Automatically routes high-tier accounts to AE calendars." },
      { title: "Hyper-Personalized Outreach", detail: "Drafts and sends personalized cold outreach referencing the prospect's recent company achievements and pain points." },
      { title: "CRM Sync & Calendar Booking", detail: "Logs conversation into HubSpot/Salesforce, provides direct Calendly booking link, and schedules multi-day follow-ups." }
    ],
    toolsUsed: ["HubSpot API", "LinkedIn Scraper", "GPT-4o Mini", "SendGrid", "Calendly"],
    metrics: { timeSaved: "18 hrs/week", expectedRoi: "3.4x higher reply rate", deliveryTimeline: "10-14 days" }
  },
  "build customer support ai with zendesk": {
    agentName: "Codekrexx SupportGenie AI",
    summary: "Here is the architectural blueprint for your 24/7 Zendesk AI agent:",
    steps: [
      { title: "Knowledge Base Vectorization", detail: "Ingests Zendesk Help Center, PDF manuals, and 6 months of historical resolved tickets into Pinecone vector storage." },
      { title: "Real-time Ticket Interception", detail: "Intercepts newly submitted tickets, identifies customer sentiment, category, urgency, and customer tier." },
      { title: "Autonomous Action Execution", detail: "Queries internal order database via REST API to verify shipment statuses, issue return labels, or update billing plans." },
      { title: "Safe Escalation Protocol", detail: "If confidence score < 88% or negative sentiment is high, transfers ticket to human agent with drafted response summary." }
    ],
    toolsUsed: ["Zendesk API", "Pinecone Vector DB", "Claude 3.5 Sonnet", "Postgres DB", "Slack Alerts"],
    metrics: { timeSaved: "32 hrs/week", expectedRoi: "72% ticket deflection", deliveryTimeline: "14-18 days" }
  },
  "parse messy pdf invoices into quickbooks": {
    agentName: "Codekrexx DocFlow AI",
    summary: "Here is how we automate your unstructured invoice data entry:",
    steps: [
      { title: "Automated Email & Drive Listener", detail: "Monitors AP inbox and Google Drive folder for new PDF, JPG, and scanned documents." },
      { title: "Multimodal Vision Extraction", detail: "Uses vision-language models to extract line items, vendor tax IDs, subtotals, currencies, and payment terms." },
      { title: "3-Way Matching & Anomaly Check", detail: "Compares invoice lines against active Purchase Orders in your ERP. Flags discrepancies > 2%." },
      { title: "Direct ERP Ingestion", detail: "Creates draft bills in QuickBooks / Xero with attached source document and triggers manager approval in Slack." }
    ],
    toolsUsed: ["Google Drive Webhooks", "GPT-4o Vision", "QuickBooks Online API", "Slack Bot"],
    metrics: { timeSaved: "22 hrs/week", expectedRoi: "99.2% extraction accuracy", deliveryTimeline: "7-10 days" }
  },
  "extract competitor intelligence automatically": {
    agentName: "Codekrexx MarketScout AI",
    summary: "Autonomous competitor monitoring and executive briefings:",
    steps: [
      { title: "Multi-Source Web Crawling", detail: "Monitors 15 competitor domains, pricing pages, changelogs, G2 reviews, and job boards daily." },
      { title: "Delta & Semantic Comparison", detail: "Detects feature releases, pricing tier alterations, executive hires, and negative customer complaints." },
      { title: "Synthesis & Strategy Scoring", detail: "Synthesizes raw diffs into an actionable product & marketing brief with strategic counter-moves." },
      { title: "Executive Slack & Email Digest", detail: "Pushes a formatted Monday morning briefing to your Slack #leadership channel and executive inboxes." }
    ],
    toolsUsed: ["Playwright / Headless Crawler", "Gemini 1.5 Pro", "Diff Engine", "Slack Webhook"],
    metrics: { timeSaved: "14 hrs/week", expectedRoi: "First-to-market advantage", deliveryTimeline: "10-12 days" }
  },
  "automate employee onboarding workflows": {
    agentName: "Codekrexx PeopleOps AI",
    summary: "End-to-end autonomous employee provisioning and onboarding copilot:",
    steps: [
      { title: "Contract Signing Trigger", detail: "Receives DocuSign webhook on candidate contract signature and initiates new-hire pipeline." },
      { title: "Automated SaaS Account Provisioning", detail: "Generates corporate Google Workspace, Slack, GitHub, 1Password, and Notion accounts with appropriate RBAC roles." },
      { title: "Personalized Welcome Concierge", detail: "Pairs new hire with an interactive Slack assistant answering questions about team rituals, hardware setup, and benefits." },
      { title: "30-60-90 Day Check-in Engine", detail: "Schedules automated check-in pulses with the manager and new employee to track ramp velocity." }
    ],
    toolsUsed: ["DocuSign API", "Google Admin SDK", "Slack Bot", "Notion API", "GitHub Org API"],
    metrics: { timeSaved: "8 hrs per new hire", expectedRoi: "Ramp time cut by 40%", deliveryTimeline: "12-16 days" }
  }
};

/**
 * Placeholder function for real LLM API call integration.
 * In production, you can replace this with a call to OpenAI, Anthropic, Gemini, or a backend API endpoint.
 *
 * Example:
 * export async function generateRealAiSolution(prompt, apiKey) {
 *    const response = await fetch('/api/chat', { method: 'POST', body: JSON.stringify({ prompt }) });
 *    return await response.json();
 * }
 */
export async function simulateAiResponse(userInput) {
  // Normalize prompt to check against predefined keys
  const query = (userInput || "").toLowerCase().trim();
  
  // Find closest match or provide a bespoke generic breakdown
  for (const [key, val] of Object.entries(mockAiResponses)) {
    if (query.includes(key) || key.includes(query) || (query.length > 5 && key.split(" ").some(w => w.length > 4 && query.includes(w)))) {
      return val;
    }
  }

  // Fallback intelligent agent template for any custom prompt
  return {
    agentName: "Codekrexx Custom AI Architect",
    summary: `Analysis of your goal: "${userInput}". Here is the recommended custom AI agent solution:`,
    steps: [
      { 
        title: "Workflow Analysis & Ingestion", 
        detail: "Ingest your custom business data sources and trigger points through secure webhooks and event listeners." 
      },
      { 
        title: "Intelligent Reasoning & Tool Execution", 
        detail: "Deploy a dedicated agent workflow using LLM reasoning (GPT-4o / Claude 3.5) with strict tool calling schemas." 
      },
      { 
        title: "Automated Output & Cross-App Sync", 
        detail: "Push verified outputs to your CRM, database, team Slack, or customer-facing portals without human intervention." 
      },
      { 
        title: "Continuous Observability & Guardrails", 
        detail: "Apply automated evaluation metrics, cost tracking, and fallback escalation for edge cases." 
      }
    ],
    toolsUsed: ["Custom REST APIs", "Frontier LLM API", "Vector Database", "Automated Webhooks", "Admin Console"],
    metrics: { 
      timeSaved: "20+ hrs/week", 
      expectedRoi: "Up to 80% operational cost cut", 
      deliveryTimeline: "2-3 weeks" 
    }
  };
}
