"use client";
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import { useState } from 'react';

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: 'Starter',
      price: isYearly ? '$9' : '$12',
      period: isYearly ? '/month' : '/month',
      description: 'Perfect for individuals and small teams getting started',
      featured: false,
      features: [
        'Up to 5 team members',
        '10GB storage',
        'Basic analytics',
        'Email support',
        'Mobile apps',
        'API access'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Pro',
      price: isYearly ? '$29' : '$39',
      period: isYearly ? '/month' : '/month',
      description: 'For growing teams that need more power',
      featured: true,
      popular: true,
      features: [
        'Up to 25 team members',
        '100GB storage',
        'Advanced analytics',
        'Priority support',
        'Mobile apps',
        'API access',
        'Custom integrations',
        'Advanced security'
      ],
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations with custom needs',
      featured: false,
      features: [
        'Unlimited team members',
        'Unlimited storage',
        'Custom analytics',
        '24/7 dedicated support',
        'Mobile apps',
        'API access',
        'Custom integrations',
        'Advanced security',
        'SLA guarantee',
        'Custom onboarding'
      ],
      cta: 'Contact Sales'
    }
  ];

  const togglePricing = () => {
    setIsYearly(!isYearly);
  };

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Simple, Transparent Pricing
            <span className="block text-purple-400 mt-2">Choose the plan that's right for you</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            All plans include our core features. Upgrade or downgrade anytime.
          </p>
        </motion.div>

        {/* Pricing Toggle */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center bg-slate-800/30 backdrop-blur-sm border border-white/10 rounded-full p-1">
            <span className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              !isYearly 
                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg' 
                : 'text-slate-400'
            }`}>
              Monthly
            </span>
            <button
              onClick={togglePricing}
              className="relative p-1 rounded-full transition-all duration-200"
              aria-label="Toggle pricing"
            >
              <div 
                className={`absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full transition-transform duration-200 ${
                  isYearly ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
              <div className="relative z-10 w-12 h-6 bg-slate-800 rounded-full" />
            </button>
            <span className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              isYearly 
                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg' 
                : 'text-slate-400'
            }`}>
              Yearly <span className="text-green-400 text-xs font-bold">(Save 20%)</span>
            </span>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative bg-slate-800/30 backdrop-blur-sm border rounded-2xl p-8 ${
                plan.featured 
                  ? 'border-purple-500/30 shadow-2xl shadow-purple-500/10' 
                  : 'border-white/10'
              } ${plan.popular ? 'ring-2 ring-purple-500/50' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className={`text-center ${plan.popular ? 'mt-8' : ''}`}>
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-slate-400 mb-6">{plan.description}</p>
                
                <div className="mb-8">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-slate-400">{plan.period}</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      className="flex items-center gap-3 text-left"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                    >
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.button
                  className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-200 ${
                    plan.featured
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700 shadow-lg hover:shadow-xl'
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {plan.cta}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-slate-400">
            Not sure which plan to choose?{' '}
            <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
              Contact our sales team
            </a>{' '}
            for personalized recommendations.
          </p>
        </motion.div>
      </div>
    </section>
  );
}