import Link from 'next/link';
import { professionalIntro, professionalContributions } from '@/data/serviceData';
import { Star } from 'lucide-react';

export const metadata = {
  title: 'Dr. Faith Mueni | Professional Service',
  description: 'Professional service contributions of Dr. Faith Mueni.',
};

export default function ProfessionalServicePage() {
  return (
    <div style={{ backgroundColor: '#E8F3EA' }} className="min-h-screen">

      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-6 py-3">
        <p className="text-sm" style={{ fontFamily: "'Lora', serif", color: '#1b2a38' }}>
          <Link href="/" style={{ color: '#1b2a38' }} className="hover:underline">Home</Link>
          <span className="mx-1">/</span>
          <Link href="/service" style={{ color: '#1b2a38' }} className="hover:underline">Service</Link>
          <span className="mx-1">/</span>
          <span>Professional Service</span>
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-12">

        <h2 className="text-2xl font-bold uppercase tracking-wide mb-2"
          style={{ fontFamily: "'Lora', serif", color: '#12355B' }}>
          Professional Service
        </h2>

        <p className="text-sm leading-relaxed mb-2 max-w-3xl"
          style={{ fontFamily: "'Lora', serif", color: '#1b2a38' }}>
          {professionalIntro.description}
        </p>
        <p className="text-sm leading-relaxed mb-8 max-w-3xl"
          style={{ fontFamily: "'Lora', serif", color: '#1b2a38' }}>
          {professionalIntro.closing}
        </p>

        <h3 className="text-xl font-medium mb-5"
          style={{ fontFamily: "'Lora', serif", color: '#1b2a38' }}>
          My Contributions
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {professionalContributions.map((item) => (
            <div key={item.id} className="rounded-lg p-5" style={{ backgroundColor: '#ffffff' }}>
              <div className="w-9 h-9 rounded-full flex items-center justify-center mb-3"
                style={{ backgroundColor: '#E8F3EA' }}>
                <Star size={17} style={{ color: '#2a9d8f' }} />
              </div>
              <h4 className="text-sm font-semibold mb-2"
                style={{ fontFamily: "'Lora', serif", color: '#1b2a38' }}>
                {item.title}
              </h4>
              <p className="text-xs leading-relaxed"
                style={{ fontFamily: "'Lora', serif", color: '#1b2a38' }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}