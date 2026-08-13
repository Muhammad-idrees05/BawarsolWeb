import React from 'react';
import { PORTFOLIO_PROJECTS } from '../data/portfolioData';
import { ExternalLink, ArrowRight, Sparkles, Layers, ShieldCheck } from 'lucide-react';
import { GlobalCTA } from '../components/GlobalCTA';

interface PortfolioPageProps {
  onNavigate: (path: string) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ onNavigate }) => {
  const portfolioUrl = process.env.NEXT_PUBLIC_PORTFOLIO_URL || 'https://portfolio.bawarsol.ai';

  const handleExternalPortfolio = () => {
    window.open(portfolioUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#F0F0F0] pt-24 pb-12">
      {/* Hero Header */}
      <section className="relative py-16 bg-[#050505] border-b border-white/10 hero-radial-bg text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/30 text-[#00F0FF] text-xs font-semibold uppercase tracking-wider">
            <span>Portfolio Gateway</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Our Work & <br />
            <span className="font-serif italic font-normal text-[#00F0FF] accent-glow">
              Deployed AI Systems
            </span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Explore the AI systems, software products, and intelligent solutions built by BawarSol.
          </p>

          {/* Prominent External Gateway CTA Button */}
          <div className="pt-6">
            <button
              onClick={handleExternalPortfolio}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-extrabold text-base text-black bg-[#00F0FF] hover:bg-[#33F3FF] transition-all shadow-xl shadow-[#00F0FF]/25 hover:shadow-[#00F0FF]/40 hover:-translate-y-0.5"
            >
              <span>Explore Full Portfolio Website</span>
              <ExternalLink className="w-5 h-5 text-black" />
            </button>
            <p className="text-xs text-slate-400 mt-2">
              Opens our dedicated interactive portfolio platform ({portfolioUrl})
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl font-bold text-white">Featured Production Case Studies</h2>
              <p className="text-slate-400 text-sm">Highlights from our recent engineering deliveries</p>
            </div>
            <button
              onClick={handleExternalPortfolio}
              className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-[#00F0FF] hover:underline"
            >
              <span>View All Projects →</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PORTFOLIO_PROJECTS.map((project) => (
              <div
                key={project.id}
                className="rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 overflow-hidden flex flex-col justify-between group hover:border-[#00F0FF]/50 transition-all shadow-xl"
              >
                <div>
                  <div className="h-52 overflow-hidden relative">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent" />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-[#00F0FF] text-black backdrop-blur shadow-md">
                      {project.category}
                    </span>
                    <span className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-[10px] font-mono bg-black/80 text-slate-300 border border-white/10">
                      {project.clientIndustry}
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-[#00F0FF] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      {project.description}
                    </p>

                    <div className="p-3 rounded-xl bg-[#00F0FF]/10 border border-[#00F0FF]/20 text-[#00F0FF] text-xs font-medium flex items-center gap-2">
                      <Sparkles className="w-4 h-4 shrink-0 text-[#00F0FF]" />
                      <span>{project.impactMetric}</span>
                    </div>

                    <div className="pt-2">
                      <span className="text-[11px] text-slate-400 font-mono block mb-1.5">Tech Stack:</span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-[10px] bg-black/60 text-[#00F0FF] px-2 py-0.5 rounded border border-white/10 font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={handleExternalPortfolio}
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-semibold text-xs text-[#00F0FF] bg-white/[0.04] border border-white/10 hover:border-[#00F0FF]/50 hover:text-white transition-all"
                  >
                    <span>View Project Case Study</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 text-center space-y-4">
            <h3 className="text-2xl font-bold text-white">Need a Specialized Enterprise AI Solution?</h3>
            <p className="text-slate-300 text-sm max-w-xl mx-auto">
              Our engineering team builds custom confidential systems under strict NDA for Fortune 500 enterprises and hyper-growth startups.
            </p>
            <button
              onClick={handleExternalPortfolio}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-black bg-[#00F0FF] hover:bg-[#33F3FF] transition-colors"
            >
              <span>Explore Full Portfolio →</span>
            </button>
          </div>
        </div>
      </section>

      <GlobalCTA onNavigate={onNavigate} />
    </div>
  );
};
