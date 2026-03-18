import React from 'react';
import { motion } from 'motion/react';
import ContactForm from '../components/ContactForm';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                Let's <span className="gradient-text">Connect</span>
              </h1>
              <p className="text-white/60 text-lg mb-12 leading-relaxed max-w-lg">
                Have a project in mind? We'd love to hear from you. 
                Fill out the form and our team will get back to you within 24 hours.
              </p>
            </motion.div>

            <div className="grid gap-8">
              {[
                { 
                  icon: Mail, 
                  title: 'Email Us', 
                  value: 'dev@metabufsol.com',
                  desc: 'Our friendly team is here to help.'
                },
                { 
                  icon: Phone, 
                  title: 'Call Us', 
                  value: '+1 (425) 494-0912',
                  desc: 'Mon-Fri from 9am to 6pm.'
                },
                { 
                  icon: MapPin, 
                  title: 'Visit Us', 
                  value: '123 Innovation Way, Tech City',
                  desc: 'Come say hello at our office.'
                }
              ].map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="flex gap-6 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-purple/20 group-hover:border-brand-purple/50 transition-all">
                    <item.icon className="text-brand-purple" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-white/80 font-medium mb-1">{item.value}</p>
                    <p className="text-sm text-white/40">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Proof / Trust Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-16 p-6 glass-card border-brand-purple/20 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-brand-purple/20 flex items-center justify-center">
                <MessageSquare className="text-brand-purple" size={24} />
              </div>
              <div>
                <p className="text-sm font-medium">Average response time</p>
                <p className="text-xl font-bold gradient-text">&lt; 2 Hours</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
