import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-bg border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 mb-16">
        <div className="space-y-6">
          <Link to="/" className="inline-flex items-center gap-2 group">
            <img
              src="/assets/logo-dark.png"
              alt="MetaBuf Solutions logo"
              className="h-12 w-auto object-contain group-hover:scale-[1.02] transition-transform"
            />
            <span className="text-xl font-display font-bold tracking-tight text-[color:var(--text-primary)] mt-2">
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
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[color:var(--text-faint)] hover:bg-brand-purple hover:text-[color:var(--text-inverse)] transition-all"
              >
                <Icon size={18} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-6">Social</h4>
          <p className="text-[color:var(--text-faint)] text-sm leading-relaxed mb-6">
            Follow us for updates, releases, and product stories.
          </p>
          <div className="text-[color:var(--text-faint)] text-sm">
            Placeholder links for social channels.
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[color:var(--text-disabled)] text-xs">
          © {new Date().getFullYear()} MetaBuf Sol. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
