"use client";
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: 'How long does it take to set up FlowAI?',
      answer: 'You can get started in minutes! Our intuitive onboarding process will guide you through setup in under 5 minutes. Most teams are fully operational within the first day.'
    },
    {
      question: 'Can I integrate FlowAI with my existing tools?',
      answer: 'Absolutely! FlowAI offers 100+ integrations with popular tools like Slack, Google Workspace, Microsoft Teams, Salesforce, and many more. We also provide a robust API for custom integrations.'
    },
    {
      question: 'Is my data secure with FlowAI?',
      answer: 'Security is our top priority. We use bank-grade encryption, regular security audits, and comply with GDPR, SOC 2, and other industry standards. Your data is always protected and never shared with third parties.'
    },
    {
      question: 'What kind of support do you offer?',
      answer: 'We offer 24/7 email support for all plans, with priority support for Pro and Enterprise customers. Enterprise customers also get a dedicated account manager and phone support.'
    },
    {
      question: 'Can I change my plan later?',
      answer: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle. We prorate any differences for annual plans.'
    },
    {
      question: 'Do you offer discounts for non-profits or educational institutions?',
      answer: 'Yes, we offer special pricing for non-profit organizations and educational institutions. Contact our sales team to learn more about our nonprofit and education programs.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Frequently Asked Questions
            <span className="block text-purple-400 mt-2">Everything you need to know</span>
          </h2>
          <p className="text-xl text-slate-400">
            Can't find what you're looking for?{' '}
            <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
              Contact our support team
            </a>
          </p>
        </motion.div>

        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
        >
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-slate-800/30 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between group hover:bg-slate-700/20 transition-colors duration-200"
                aria-expanded={openIndex === index}
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {item.question}
                </h3>
                <motion.div
                  className={`flex-shrink-0 w-6 h-6 flex items-center justify-center ${
                    openIndex === index ? 'text-purple-400' : 'text-slate-400 group-hover:text-purple-400'
                  }`}
                  animate={{ rotate: openIndex === index ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {openIndex === index ? (
                    <ChevronDown className="w-5 h-5" />
                  ) : (
                    <ChevronRight className="w-5 h-5" />
                  )}
                </motion.div>
              </button>

              <motion.div
                className="overflow-hidden"
                initial={{ height: 0 }}
                animate={{ 
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="px-6 pb-5">
                  <p className="text-slate-400 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800/30 backdrop-blur-sm border border-white/10 rounded-full">
            <span className="text-slate-300 text-sm">Still have questions?</span>
            <a 
              href="#" 
              className="text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium"
            >
              Get in touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}