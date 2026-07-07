import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = {
  Explore: [
    { label: 'Research Profile', href: '/research/profile' },
    { label: 'Publications', href: '/research/publications' },
    { label: 'Grants & Projects', href: '/research/grants' },
    { label: 'Teaching Portfolio', href: '/teaching/portfolio' },
    { label: 'Conference & Talks', href: '/service/conferences' },
  ],
  Navigate: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Research', href: '/research' },
    { label: 'Teaching', href: '/teaching' },
    { label: 'Contact', href: '/contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-footer-bg text-white">
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h3 className="font-playfair text-xl font-semibold mb-3 text-white">
            Dr. Faith Mueni Musyoka
          </h3>
          <p className="font-lora text-white/60 text-xs leading-relaxed mb-5">
            Senior Lecturer | Researcher | Grant-Funded Project Leader | AI and Digital Innovation Advocate
          </p>
          <div className="flex gap-3">
            <a
              href="Linkedin: https://www.linkedin.com/in/dr-faith-m-4ab5b133/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Link Columns */}
        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading}>
            <h4 className="font-lora text-xs tracking-widest uppercase text-accent mb-4">
              {heading}
            </h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-lora text-xs text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact */}
        <div>
          <h4 className="font-lora text-xs tracking-widest uppercase text-accent mb-4">
            Contact
          </h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-white/60">
              <Mail size={13} className="mt-0.5 flex-shrink-0 text-accent" />
              <a
                href="mailto:faith.mueni@university.ac.ke"
                className="font-lora text-xs hover:text-white transition-colors"
              >
                mueni.faith@embuni.ac.ke
                or
                faithmueni24@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-2 text-white/60">
              <Phone size={13} className="mt-0.5 flex-shrink-0 text-accent" />
              <span className="font-lora text-xs">+254 737766052</span>
            </li>
            <li className="flex items-start gap-2 text-white/60">
              <MapPin size={13} className="mt-0.5 flex-shrink-0 text-accent" />
              <span className="font-lora text-xs">University of Embu, Kenya.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="font-lora text-white/40 text-xs">
            © {new Date().getFullYear()} Dr. Faith Mueni Musyoka. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}