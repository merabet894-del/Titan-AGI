'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export function CTA() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-indigo-900/20 to-slate-900" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Sparkles className="w-5 h-5" />
            <span className="text-lg font-medium">READY TO GET STARTED?</span>
          </motion.div>

          {/* Main heading */}
          <motion.h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Start Your Free Trial Today
          </motion.h2>

          {/* Subtext */}
          <motion.p 
            className="text-xl sm:text-2xl text-slate-400 max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Join thousands of teams already using FlowAI to streamline their workflows and boost productivity. No credit card required.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.button
              className="relative px-10 py-5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-2xl overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center gap-3 text-lg">
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              <div className="absolute inset-0 bg-white/10 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </motion.button>

            <motion.button
              className="px-10 py-5 border border-white/10 text-slate-300 font-semibold rounded-2xl hover:bg-white/5 transition-all duration-200 flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Sparkles className="w-5 h-5" />
              Schedule a Demo
            </motion.button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div 
            className="mt-16 flex flex-col sm:flex-row justify-center items-center gap-8 text-sm text-slate-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span>Cancel anytime</span>
            </div>
          </motion.div>

          {/* Additional features */}
          <motion.div 
            className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className="bg-slate-800/30 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">Instant Setup</h3>
              <p className="text-slate-400 text-sm">Get started in minutes with our intuitive interface</p>
            </div>
            <div className="bg-slate-800/30 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">24/7 Support</h3>
              <p className="text-slate-400 text-sm">Our team is always here to help you succeed</p>
            </div>
            <div className="bg-slate-800/30 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">No Risk</h3>
              <p className="text-slate-400 text-sm">Full money-back guarantee within 30 days</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}