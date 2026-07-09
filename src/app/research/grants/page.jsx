import Link from 'next/link';
import { DollarSign, Briefcase } from 'lucide-react';
import { areasSupported, ongoingProjects } from '@/data/researchData';

export const metadata = {
  title: 'Dr. Faith Mueni | Grants & Projects',
  description: 'Research grants and ongoing projects by Dr. Faith Mueni.',
};

export default function GrantsPage() {
  return (
    <div style={{ backgroundColor: '#E8F3EA' }} className="min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-3">
        <p className="text-sm" style={{ fontFamily: "'Lora', serif", color: '#1b2a38' }}>
          <Link href="/" style={{ color: '#1b2a38' }} className="hover:underline">Home</Link>
          <span className="mx-1">/</span>
          <Link href="/research" style={{ color: '#1b2a38' }} className="hover:underline">Research</Link>
          <span className="mx-1">/</span>
          <span>Grants & Projects</span>
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-12">

        <h2 className="text-2xl font-bold uppercase tracking-wide mb-2"
          style={{ fontFamily: "'Lora', serif", color: '#12355B' }}>
          Grants & Projects
        </h2>
        <p className="text-sm leading-relaxed mb-8 max-w-2xl"
          style={{ fontFamily: "'Lora', serif", color: '#1b2a38' }}>
          My research activities are supported through competitive grants and collaborative
          initiatives aimed at advancing innovation, education, and societal impact.
        </p>

        {/* ── RESEARCH GRANTS ── */}
        <h3 className="text-xl font-medium mb-5"
          style={{ fontFamily: "'Lora', serif", color: '#1b2a38' }}>
          Research Grants
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {areasSupported.map((grant) => (
            <div key={grant.id} className="rounded-lg p-5" style={{ backgroundColor: '#ffffff' }}>
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#E8F3EA' }}>
                  <DollarSign size={16} style={{ color: '#2a9d8f' }} />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-semibold mb-1"
                    style={{ fontFamily: "'Lora', serif", color: '#1b2a38' }}>
                    {grant.title}
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="text-xs px-2 py-0.5 rounded-full"
                      style={{ backgroundColor: '#E8F3EA', color: '#2a9d8f', fontFamily: "'Lora', serif" }}>
                      {grant.funder}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded-full"
                      style={{ backgroundColor: '#12355B11', color: '#12355B', fontFamily: "'Lora', serif" }}>
                      {grant.year}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded-full font-semibold"
                      style={{ backgroundColor: '#2a9d8f11', color: '#2a9d8f', fontFamily: "'Lora', serif" }}>
                      {grant.amount}
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed"
                    style={{ fontFamily: "'Lora', serif", color: '#1b2a38' }}>
                    {grant.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── ONGOING PROJECTS ── */}
        <h3 className="text-xl font-medium mb-5"
          style={{ fontFamily: "'Lora', serif", color: '#1b2a38' }}>
          Ongoing Projects
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {ongoingProjects.map((project) => (
            <div key={project.id} className="rounded-lg p-5" style={{ backgroundColor: '#ffffff' }}>
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#E8F3EA' }}>
                  <Briefcase size={16} style={{ color: '#2a9d8f' }} />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-semibold mb-1"
                    style={{ fontFamily: "'Lora', serif", color: '#1b2a38' }}>
                    {project.title}
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="text-xs px-2 py-0.5 rounded-full"
                      style={{ backgroundColor: '#E8F3EA', color: '#2a9d8f', fontFamily: "'Lora', serif" }}>
                      {project.role}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded-full"
                      style={{ backgroundColor: '#12355B11', color: '#12355B', fontFamily: "'Lora', serif" }}>
                      {project.year}
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed"
                    style={{ fontFamily: "'Lora', serif", color: '#1b2a38' }}>
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}