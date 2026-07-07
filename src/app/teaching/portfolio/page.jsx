import Link from 'next/link';
import { teachingPhilosophy, teachingAreas } from '@/data/teachingData';
import { BookOpen } from 'lucide-react';

export const metadata = {
  title: 'Dr. Faith Mueni | Teaching Portfolio',
  description: 'Teaching philosophy, areas, and approach of Dr. Faith Mueni.',
};

export default function TeachingPortfolioPage() {
  return (
    <div style={{ backgroundColor: '#E8F3EA' }} className="min-h-screen">

      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-6 py-3">
        <p className="text-sm" style={{ fontFamily: "'Lora', serif", color: '#1b2a38' }}>
          <Link href="/" style={{ color: '#1b2a38' }} className="hover:underline">Home</Link>
          <span className="mx-1">/</span>
          <Link href="/teaching" style={{ color: '#1b2a38' }} className="hover:underline">Teaching</Link>
          <span className="mx-1">/</span>
          <span>Teaching Portfolio</span>
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-12">

        {/* Heading */}
        <h2
          className="text-2xl font-bold uppercase tracking-wide mb-2"
          style={{ fontFamily: "'Lora', serif", color: '#12355B' }}
        >
          Teaching Portfolio
        </h2>

        {/* Philosophy Block */}
<div className="mb-8">
  <p
    className="text-sm leading-relaxed mb-3"
    style={{ fontFamily: "'Playfair Display', serif", color: '#1b2a38' }}
  >
    {teachingPhilosophy.belief}
  </p>
  <p
    className="text-sm leading-relaxed mb-3"
    style={{ fontFamily: "'Lora', serif", color: '#1b2a38' }}
  >
    {teachingPhilosophy.approach}
  </p>
  <p
    className="text-sm"
    style={{ fontFamily: "'Lora', serif", color: '#1b2a38' }}
  >
    {teachingPhilosophy.closing}
  </p>
</div>

        {/* Teaching Areas */}
        <h3
          className="text-xl font-medium mb-5"
          style={{ fontFamily: "'Playfair Display', serif", color: '#1b2a38' }}
        >
          Teaching Areas
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {teachingAreas.map((area) => (
            <div
              key={area}
              className="flex items-start gap-3 rounded-lg p-4"
              style={{ backgroundColor: '#ffffff' }}
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: '#E8F3EA' }}
              >
                <BookOpen size={15} style={{ color: '#2a9d8f' }} />
              </div>
              <p
                className="text-sm leading-snug mt-1"
                style={{ fontFamily: "'Lora', serif", color: '#12355B' }}
              >
                {area}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}