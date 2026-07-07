'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Research',
    href: '/research',
    children: [
      { label: 'Research Profile', href: '/research/profile' },
      { label: 'Publications', href: '/research/publications' },
      { label: 'Grants & Projects', href: '/research/grants' },
    ],
  },
  {
    label: 'Teaching',
    href: '/teaching',
    children: [
      { label: 'Teaching Portfolio', href: '/teaching/portfolio' },
      { label: 'Postgrad Supervision', href: '/teaching/supervision' },
    ],
  },
  {
  label: 'Service',
  href: '/service',
  children: [
    { label: 'Leadership & Administration', href: '/service/leadership' },
    { label: 'Curriculum Development', href: '/service/curriculum' },
    { label: 'Professional Service', href: '/service/professional' },
    { label: 'Conferences & Talks', href: '/service/conferences' },
    { label: 'Training & Certifications', href: '/service/training' },
  ],
},
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const isActive = (href) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <nav style={{ backgroundColor: '#e8f3ea' }} className="sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="font-playfair text-[#1b2a38] text-xl font-semibold tracking-wide">
          Dr.Faith Mueni Musyoka
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <li key={link.label} className="relative group">
              {link.children ? (
                <>
                  <button
                    className={`flex items-center gap-1 font-lora text-[15px] font-semibold transition-colors duration-200 ${
                      isActive(link.href) ? 'text-[#2a9d8f]' : 'text-[#1b2a38] hover:text-[#2a9d8f]'
                    }`}
                    onMouseEnter={() => setOpenDropdown(link.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {link.label}
                    <ChevronDown size={13} />
                  </button>

                  {/* Dropdown */}
                  <ul
                    className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                    onMouseEnter={() => setOpenDropdown(link.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {link.children.map((child) => (
                      <li key={child.label}>
                        <Link
                          href={child.href}
                          className="block px-4 py-2 text-sm font-lora text-[#1b2a38] hover:bg-[#e8f0eb] hover:text-[#2a9d8f] transition-colors"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link
                  href={link.href}
                  className={`font-lora text-[15px] font-semibold transition-colors duration-200 ${
                    isActive(link.href) ? 'text-[#2a9d8f]' : 'text-[#1b2a38] hover:text-[#2a9d8f]'
                  }`}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#1b2a38]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div style={{ backgroundColor: '#e8f3ea' }} className="md:hidden border-t border-[#1b2a38]/10 px-6 pb-4">
          {navLinks.map((link) => (
            <div key={link.label}>
              <Link
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block py-2.5 font-lora text-sm hover:text-[#2a9d8f] transition-colors ${
                  isActive(link.href) ? 'text-[#2a9d8f]' : 'text-[#1b2a38]'
                }`}
              >
                {link.label}
              </Link>
              {link.children && (
                <div className="pl-4 border-l border-white/20">
                  {link.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-1.5 text-xs font-lora text-[#1b2a38]/60 hover:text-[#2a9d8f] transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}