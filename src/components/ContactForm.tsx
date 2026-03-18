import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('loading');

    // NOTE: Replace these with your actual EmailJS keys
    // SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setStatus('success');
      formRef.current?.reset();
    })
    .catch((error) => {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again later.');
    });
  };

  return (
    <div className="glass-card p-8 md:p-12">
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={40} className="text-green-500" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
            <p className="text-white/60 mb-8">
              Thank you for reaching out. We'll get back to you as soon as possible.
            </p>
            <button 
              onClick={() => setStatus('idle')}
              className="btn-secondary"
            >
              Send Another Message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            ref={formRef}
            onSubmit={sendEmail}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="user_name" className="text-sm font-medium text-white/60 ml-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  id="user_name"
                  required
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-purple transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="user_phone" className="text-sm font-medium text-white/60 ml-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="user_phone"
                  required
                  placeholder="+1 (555) 000-0000"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-purple transition-colors"
                />
              </div>
            </div>
            
            <div className="space-y-2">
                <label htmlFor="user_email" className="text-sm font-medium text-white/60 ml-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="from_email"
                  id="user_email"
                  required
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-purple transition-colors"
                />
              </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-white/60 ml-1">
                Your Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                rows={5}
                placeholder="Tell us about your project..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-purple transition-colors resize-none"
              />
            </div>

            {status === 'error' && (
              <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 p-4 rounded-xl">
                <AlertCircle size={18} />
                {errorMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={20} />
                  Send Message
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactForm;
