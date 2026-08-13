export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  clientIndustry: string;
  description: string;
  impactMetric: string;
  technologies: string[];
  imageUrl: string;
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'project-1',
    title: 'AegisMind — Autonomous Financial Audit Agent Swarm',
    category: 'Agentic AI',
    clientIndustry: 'FinTech & Banking',
    description: 'An autonomous multi-agent system that ingests unstructured quarterly earnings, cross-references transaction ledgers, and highlights compliance anomalies.',
    impactMetric: '78% reduction in audit review cycles with 99.4% audit precision',
    technologies: ['LangGraph', 'Python', 'FastAPI', 'Qdrant', 'Claude 3.5 Sonnet'],
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'project-2',
    title: 'OmniKnowledge RAG — Enterprise Medical Knowledge Engine',
    category: 'RAG Systems',
    clientIndustry: 'Healthcare & Life Sciences',
    description: 'Zero-hallucination Retrieval Augmented Generation system connecting 500,000+ clinical trial documents and medical journal articles with dense vector search and reranking.',
    impactMetric: 'Instant clinical evidence retrieval for 12,000+ medical staff',
    technologies: ['Pinecone', 'Gemini 1.5 Pro', 'Cohere Rerank', 'TypeScript', 'Next.js'],
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'project-3',
    title: 'VisionPulse — Edge Optical Inspection for Industrial Assembly',
    category: 'Computer Vision',
    clientIndustry: 'Manufacturing',
    description: 'High-speed camera vision inspection pipeline deployed on NVIDIA TensorRT edge hardware to detect sub-millimeter surface flaws at 120 FPS.',
    impactMetric: 'Zero defective units shipped over 1.2M manufactured parts',
    technologies: ['YOLOv11', 'TensorRT', 'OpenCV', 'PyTorch', 'C++'],
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'project-4',
    title: 'LogiFlow AI — Autonomous Freight Ingestion & Routing Agent',
    category: 'AI Automation',
    clientIndustry: 'Logistics',
    description: 'End-to-end bill-of-lading document OCR, customs manifest auto-classification, and predictive carrier route assignment microservice.',
    impactMetric: 'Automated 92% of daily manual entry across 45 logistics hubs',
    technologies: ['Playwright', 'Python', 'FastAPI', 'Llama-3', 'PostgreSQL'],
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'project-5',
    title: 'EduSocrates — Multimodal AI Socratic Tutor Platform',
    category: 'Generative AI',
    clientIndustry: 'Education & EdTech',
    description: 'An interactive voice and text learning assistant that guides students through math and science concepts using step-by-step Socratic dialogue.',
    impactMetric: 'Over 250,000 active tutoring sessions completed with 4.9/5 satisfaction',
    technologies: ['React', 'Node.js', 'Gemini 1.5 Flash', 'WebSockets', 'Tailwind CSS'],
    imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'project-6',
    title: 'PropYield — Predictive Real Estate Valuation & Lead Engine',
    category: 'Machine Learning',
    clientIndustry: 'Real Estate',
    description: 'Gradient boosted ensemble pricing models combined with automated lead scoring and tour booking workflows for multi-family residential funds.',
    impactMetric: 'Achieved 97.8% valuation accuracy across $1.4B in property assets',
    technologies: ['XGBoost', 'Scikit-Learn', 'Python', 'React', 'Prisma'],
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
  },
];
