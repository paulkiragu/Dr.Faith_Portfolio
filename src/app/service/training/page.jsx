import Link from 'next/link';
import { trainingIntro, trainingAreas } from '@/data/serviceData';
import { Award } from 'lucide-react';

export const metadata = {
  title: 'Dr. Faith Mueni | Training & Certifications',
  description: 'Training and certifications of Dr. Faith Mueni.',
};

export default function TrainingPage() {
  return (
    <div style={{ backgroundColor: '#E8F3EA' }} className="min-h-screen">

      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-6 py-3">
        <p className="text-sm" style={{ fontFamily: "'Lora', serif", color: '#1b2a38' }}>
          <Link href="/" style={{ color: '#1b2a38' }} className="hover:underline">Home</Link>
          <span className="mx-1">/</span>
          <Link href="/service" style={{ color: '#1b2a38' }} className="hover:underline">Service</Link>
          <span className="mx-1">/</span>
          <span>Training & Certifications</span>
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-12">

        <h2 className="text-2xl font-bold uppercase tracking-wide mb-2"
          style={{ fontFamily: "'Lora', serif", color: '#12355B' }}>
          Training & Certifications
        </h2>

        <p className="text-sm leading-relaxed mb-2 max-w-3xl"
          style={{ fontFamily: "'Lora', serif", color: '#1b2a38' }}>
          {trainingIntro.description}
        </p>
        <p className="text-sm leading-relaxed mb-8 max-w-3xl"
          style={{ fontFamily: "'Lora', serif", color: '#1b2a38' }}>
          {trainingIntro.closing}
        </p>

        <h3 className="text-xl font-medium mb-5"
          style={{ fontFamily: "'Playfair Display', serif", color: '#1b2a38' }}>
          Training Areas
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {trainingAreas.map((area) => (
            <div
              key={area}
              className="flex items-center gap-3 rounded-lg p-4"
              style={{ backgroundColor: '#ffffff' }}
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: '#E8F3EA' }}
              >
                <Award size={15} style={{ color: '#2a9d8f' }} />
              </div>
              <p
                className="text-sm font-medium"
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