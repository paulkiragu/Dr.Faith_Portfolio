import Image from 'next/image';
import Link from 'next/link';
import JourneySection from '@/components/about/JourneySection';
import { GraduationCap, Users, Lightbulb, Download } from 'lucide-react';
import { inspirations, journeyParagraphs, education, stats, expertiseTags, quote } from '@/data/aboutData';

export const metadata = {
  title: 'Dr. Faith Mueni | About',
  description: 'Learn about Dr. Faith Mueni — her journey, inspirations, and academic mission.',
};

const iconMap = {
  mentorship: Users,
  innovation: Lightbulb,
  community: GraduationCap,
};

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: '#E8F3EA' }} className="min-h-screen">

      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-6 py-3">
        <p className="text-sm" style={{ fontFamily: "'Lora', serif", color: '#1b2a38' }}>
          <Link href="/" className="hover:underline" style={{ color: '#1b2a38' }}>Home</Link>
          <span className="mx-1">/</span>
          <span>About</span>
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-12">

        {/* Heading + CV Button */}
        <div className="flex items-center justify-between mb-5">
          <h2
            className="text-2xl font-bold uppercase tracking-wide text-center md:text-left"
            style={{ fontFamily: "'Lora', serif", color: '#12355B' }}
          >
            About Me
          </h2>
          <a
            href="/Dr. Faith Mueni_cv.pdf"
            download
            style={{ backgroundColor: '#2a9d8f', color: '#ffffff', fontFamily: "'Lora', serif" }}
            className="flex items-center gap-2 text-sm px-4 py-2 rounded hover:opacity-90 transition-all"
          >
            <Download size={14} />
            Download CV
          </a>
        </div>

        {/* Two Column: Image + Journey & Education */}
        <div className="flex flex-col md:flex-row gap-8 mb-0">

          {/* Image */}
          <div className="flex-shrink-0 w-full md:w-auto">
            <div className="w-full md:w-[260px] overflow-hidden rounded-sm">
              <Image
                src="/images/profile.jpg"
                alt="Dr. Faith Mueni"
                width={260}
                height={340}
                className="object-cover object-top w-full h-[360px] md:h-auto"
                priority
              />
            </div>
          </div>

          {/* Right Column: Journey + Education */}
          <div className="flex-1">

            <JourneySection journeyParagraphs={journeyParagraphs} />

            {/* Education Background */}
            <h3
              className="text-xl font-medium mt-6 mb-4 text-center md:text-left"
              style={{ fontFamily: "'Playfair Display', serif", color: '#1b2a38' }}
            >
              Education Background
            </h3>
            <div className="space-y-3">
              {education.map((edu) => (
                <div
                  key={edu.id}
                  className="flex gap-4 items-start p-3 rounded-lg"
                  style={{ backgroundColor: '#ffffff' }}
                >
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: '#E8F3EA' }}
                  >
                    <GraduationCap size={16} style={{ color: '#2a9d8f' }} />
                  </div>
                  <div>
                    <p
                      className="text-sm font-semibold"
                      style={{ fontFamily: "'Lora', serif", color: '#12355B' }}
                    >
                      {edu.degree}
                    </p>
                    <p
                      className="text-xs"
                      style={{ fontFamily: "'Lora', serif", color: '#2a9d8f' }}
                    >
                      {edu.field}
                    </p>
                    <p
                      className="text-xs mt-0.5"
                      style={{ fontFamily: "'Lora', serif", color: '#1b2a38AA' }}
                    >
                      {edu.institution} · {edu.year}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Stats Bar */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 rounded-xl px-6 py-5 my-8"
          style={{ backgroundColor: '#12355B' }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p
                className="text-2xl font-bold"
                style={{ fontFamily: "'Playfair Display', serif", color: '#2a9d8f' }}
              >
                {stat.value}
              </p>
              <p
                className="text-xs mt-1"
                style={{ fontFamily: "'Lora', serif", color: '#ffffffBB' }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Expertise Tags */}
        <div className="mb-8">
          <h3
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ fontFamily: "'Lora', serif", color: '#12355B' }}
          >
            Areas of Expertise
          </h3>
          <div className="flex flex-wrap gap-2">
            {expertiseTags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1.5 rounded-full"
                style={{
                  backgroundColor: '#ffffff',
                  color: '#12355B',
                  fontFamily: "'Lora', serif",
                  border: '1px solid #12355B22',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* What Inspires Me */}
        <div className="text-center mb-6">
          <h3
            className="text-2xl font-medium"
            style={{ fontFamily: "'Playfair Display', serif", color: '#1b2a38' }}
          >
            What Inspires Me
          </h3>
          <p style={{ color: '#2a9d8f' }} className="text-lg mt-1">···</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {inspirations.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={item.id}
                className="rounded-lg p-5"
                style={{ backgroundColor: '#ffffff' }}
              >
                {Icon && (
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center mb-3"
                    style={{ backgroundColor: '#E8F3EA' }}
                  >
                    <Icon size={18} style={{ color: '#2a9d8f' }} />
                  </div>
                )}
                <h4
                  className="text-base font-semibold mb-2"
                  style={{ fontFamily: "'Playfair Display', serif", color: '#1b2a38' }}
                >
                  {item.title}
                </h4>
                <p
                  className="text-xs leading-relaxed"
                  style={{ fontFamily: "'Lora', serif", color: '#1b2a38AA' }}
                >
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}