'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, ExternalLink, CheckCircle2, AlertCircle, X } from 'lucide-react';


const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

const initialForm = { name: '', email: '', subject: '', message: '' };

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState(null); // { type: 'success' | 'error', message: string } | null
  const toastTimerRef = useRef(null);

  function showToast(type, message) {
    setToast({ type, message });
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    toastTimerRef.current = setTimeout(() => setToast(null), 4000);
  }

  useEffect(() => {
    return () => {
      if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    };
  }, []);

  function validate(values) {
    const next = {};
    if (!values.name.trim()) next.name = 'Please enter your name.';
    if (!values.email.trim()) {
      next.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = 'Please enter a valid email address.';
    }
    if (!values.message.trim()) next.message = 'Please enter a message.';
    return next;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!FORMSPREE_ENDPOINT) {
      setStatus('error');
      showToast('error', 'Contact form is not configured. Please email me directly.');
      return;
    }

    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('submitting');
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
      setForm(initialForm);
      showToast('success', "Message sent. I'll get back to you soon.");
    } catch (err) {
      setStatus('error');
      showToast('error', 'Something went wrong. Please try again or email me directly.');
    }
  }

  const inputStyle = {
    fontFamily: "'Lora', serif",
    color: '#1b2a38',
    backgroundColor: '#E8F3EA',
    border: '1px solid #12355B22',
  };

  return (
    <div style={{ backgroundColor: '#E8F3EA' }} className="min-h-screen">

      {/* Toast */}
      <div
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-md px-4 pointer-events-none"
        aria-live="polite"
      >
        {toast && (
          <div
            className="flex items-start gap-2 rounded-lg p-4 shadow-lg pointer-events-auto animate-[toast-in_0.25s_ease-out]"
            style={{
              backgroundColor: toast.type === 'success' ? '#12355B' : '#8c1d18',
              color: '#ffffff',
              fontFamily: "'Lora', serif",
            }}
            role={toast.type === 'success' ? 'status' : 'alert'}
          >
            {toast.type === 'success' ? (
              <CheckCircle2 size={18} style={{ color: '#2a9d8f' }} className="flex-shrink-0 mt-0.5" />
            ) : (
              <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />
            )}
            <p className="text-xs leading-relaxed flex-1">{toast.message}</p>
            <button
              type="button"
              onClick={() => setToast(null)}
              aria-label="Dismiss notification"
              className="flex-shrink-0 opacity-80 hover:opacity-100"
            >
              <X size={15} />
            </button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes toast-in {
          from { opacity: 0; transform: translateY(-12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-6 py-3">
        <p className="text-sm" style={{ fontFamily: "'Lora', serif", color: '#1b2a38' }}>
          <Link href="/" style={{ color: '#1b2a38' }} className="hover:underline">Home</Link>
          <span className="mx-1">/</span>
          <span>Contact</span>
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-12">

        <h2
          className="text-2xl font-bold uppercase tracking-wide mb-2"
          style={{ fontFamily: "'Lora', serif", color: '#12355B' }}
        >
          Contact
        </h2>
        <p
          className="text-sm leading-relaxed mb-8 max-w-2xl"
          style={{ fontFamily: "'Lora', serif", color: '#1b2a38' }}
        >
          Reach out about research collaboration, postgraduate supervision, speaking
          engagements, or consulting on AI, data governance, and digital innovation. I
          respond to every message personally.
        </p>

        <div className="flex flex-col lg:flex-row gap-6">

          {/* Contact Form */}
          <div className="flex-1 rounded-lg p-6" style={{ backgroundColor: '#ffffff' }}>
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-semibold mb-1.5"
                    style={{ fontFamily: "'Lora', serif", color: '#12355B' }}
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full rounded px-3 py-2 text-sm focus:outline-none focus:ring-2"
                    style={{ ...inputStyle, '--tw-ring-color': '#2a9d8f' }}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="text-xs mt-1" style={{ color: '#b3261e', fontFamily: "'Lora', serif" }}>
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold mb-1.5"
                    style={{ fontFamily: "'Lora', serif", color: '#12355B' }}
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@gmail.com"
                    className="w-full rounded px-3 py-2 text-sm focus:outline-none focus:ring-2"
                    style={{ ...inputStyle, '--tw-ring-color': '#2a9d8f' }}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-xs mt-1" style={{ color: '#b3261e', fontFamily: "'Lora', serif" }}>
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="subject"
                  className="block text-xs font-semibold mb-1.5"
                  style={{ fontFamily: "'Lora', serif", color: '#12355B' }}
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className="w-full rounded px-3 py-2 text-sm focus:outline-none focus:ring-2"
                  style={{ ...inputStyle, '--tw-ring-color': '#2a9d8f' }}
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold mb-1.5"
                  style={{ fontFamily: "'Lora', serif", color: '#12355B' }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className="w-full rounded px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2"
                  style={{ ...inputStyle, '--tw-ring-color': '#2a9d8f' }}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="text-xs mt-1" style={{ color: '#b3261e', fontFamily: "'Lora', serif" }}>
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="text-xs px-6 py-2.5 rounded transition-all duration-200 disabled:opacity-60"
                style={{ backgroundColor: '#12355B', color: '#ffffff', fontFamily: "'Lora', serif" }}
              >
                {status === 'submitting' ? 'Sending…' : 'Send message'}
              </button>
            </form>
          </div>

          {/* Contact Info Sidebar */}
          <div className="lg:w-72 flex-shrink-0">
            <div className="rounded-lg p-5 sticky top-20" style={{ backgroundColor: '#ffffff' }}>
              <h4
                className="text-sm font-semibold mb-4"
                style={{ fontFamily: "'Lora', serif", color: '#12355B' }}
              >
                Get in Touch
              </h4>

              <div className="space-y-4 mb-5">
                <div className="flex items-start gap-3">
                  <Mail size={16} style={{ color: '#2a9d8f' }} className="flex-shrink-0 mt-0.5" />
                  <div className="text-xs" style={{ fontFamily: "'Lora', serif", color: '#1b2a38' }}>
                    <a href="mailto:faithmueni24@gmail.com" className="hover:underline block">
                      faithmueni24@gmail.com
                    </a>
                    <a href="mailto:mueni.faith@embuni.ac.ke" className="hover:underline block">
                      mueni.faith@embuni.ac.ke
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone size={16} style={{ color: '#2a9d8f' }} className="flex-shrink-0 mt-0.5" />
                  <div className="text-xs" style={{ fontFamily: "'Lora', serif", color: '#1b2a38' }}>
                    <p>+254 713 793 373</p>
                    <p>+254 737 766 052</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin size={16} style={{ color: '#2a9d8f' }} className="flex-shrink-0 mt-0.5" />
                  <p className="text-xs" style={{ fontFamily: "'Lora', serif", color: '#1b2a38' }}>
                    P.O. Box 450–90200, Kitui, Kenya
                  </p>
                </div>
              </div>

              <a
                href="https://www.linkedin.com/in/dr-faith-m-4ab5b133/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-center text-xs py-2 rounded w-full hover:opacity-90"
                style={{ backgroundColor: '#12355B', color: '#ffffff', fontFamily: "'Lora', serif" }}
              >
                <ExternalLink size={14} />
                Connect on LinkedIn
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}