import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') return 'dark';
    return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    const observer = new MutationObserver(() => {
      setTheme(root.classList.contains('dark') ? 'dark' : 'light');
    });
    observer.observe(root, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  return (
    <footer className="bg-dark-bg border-t border-black/10 dark:border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <Link to="/" className="inline-flex items-center gap-2 group">
            <img
              src={theme === 'dark' ? '/assets/logo-dark.png' : '/assets/logo-light.png'}
              alt="MetaBuf Solutions logo"
              className="h-12 w-auto object-contain group-hover:scale-[1.02] transition-transform"
            />
            <span className="text-xl font-display font-bold tracking-tight text-[color:var(--text-primary)]">
              MetaBuf <span className="gradient-text">Sol.</span>
            </span>
          </Link>
          <p className="text-[color:var(--text-faint)] text-sm leading-relaxed">
            Crafting premium digital experiences through innovation and execution.
            Your partner in digital transformation.
          </p>
          <div className="flex gap-4">
            {[
              { Icon: Twitter, href: 'https://twitter.com/', label: 'Twitter' },
              { Icon: Linkedin, href: 'https://www.linkedin.com/', label: 'LinkedIn' },
              { Icon: Instagram, href: 'https://www.instagram.com/', label: 'Instagram' },
              { Icon: Github, href: 'https://github.com/', label: 'GitHub' },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-[color:var(--text-faint)] hover:bg-brand-purple hover:text-[color:var(--text-inverse)] transition-all"
              >
                <Icon size={18} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4">
            {['Home', 'Services', 'Projects', 'About', 'Contact'].map((item) => (
              <li key={item}>
                <Link
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="text-[color:var(--text-faint)] text-sm hover:text-brand-purple transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Services</h4>
          <ul className="space-y-4">
            {[
              'AI Marketing',
              'Mobile Apps',
              'Web Development',
              'Branding',
              'E-Commerce'
            ].map((item) => (
              <li key={item}>
                <Link to="/#services" className="text-[color:var(--text-faint)] text-sm hover:text-brand-purple transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Contact Info</h4>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-[color:var(--text-faint)] text-sm">
              <Mail size={18} className="text-brand-purple" />
              <a
                href="mailto:dev@metabufsol.com"
                className="hover:text-[color:var(--text-primary)] transition-colors"
              >
                dev@metabufsol.com
              </a>
            </li>
            <li className="flex items-center gap-3 text-[color:var(--text-faint)] text-sm">
              <Phone size={18} className="text-brand-purple" />
              <a
                href="tel:+14254940912"
                className="hover:text-[color:var(--text-primary)] transition-colors"
              >
                +1 (425) 494-0912
              </a>
            </li>
            <li className="flex items-start gap-3 text-[color:var(--text-faint)] text-sm">
              <MapPin size={18} className="text-brand-purple shrink-0" />
              123 Innovation Way, <br />Tech City, TC 12345
            </li>
          </ul>

          <div className="mt-8">
            <h4 className="font-bold mb-4">Backlinks</h4>
            <ul className="space-y-3">
              {[
                { label: 'React', href: 'https://react.dev/' },
                { label: 'Vite', href: 'https://vite.dev/' },
                { label: 'Tailwind CSS', href: 'https://tailwindcss.com/' },
                { label: 'EmailJS', href: 'https://www.emailjs.com/' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[color:var(--text-faint)] text-sm hover:text-brand-purple transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[color:var(--text-disabled)] text-xs">
          © {new Date().getFullYear()} MetaBuf Sol. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a
            href="https://metabufsol.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[color:var(--text-disabled)] text-xs hover:text-[color:var(--text-primary)] transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="https://metabufsol.com/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[color:var(--text-disabled)] text-xs hover:text-[color:var(--text-primary)] transition-colors"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
