'use client';

import { motion } from 'framer-motion';
import {
  Zap,
  Shield,
  BarChart3,
  Users,
  Clock,
  Rocket,
  Database,
  Code,
  Palette,
  Settings
} from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized for performance with sub-second response times and minimal latency.',
      size: 'col-span-1 row-span-1',
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade encryption and compliance with industry security standards.',
      size: 'col-span-2 row-span-1',
      gradient: 'from-indigo-500 to-blue-500'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Real-time insights and comprehensive reporting with customizable dashboards.',
      size: 'col-span-1 row-span-2',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Seamless teamwork with shared workspaces and real-time collaboration tools.',
      size: 'col-span-1 row-span-1',
      gradient: 'from-cyan-500 to-teal-500'
    },
    {
      icon: Clock,
      title: '24/7 Uptime',
      description: '99.9% guaranteed uptime with automatic failover and backup systems.',
      size: 'col-span-1 row-span-1',
      gradient: 'from-teal-500 to-green-500'
    },
    {
      icon: Rocket,
      title: 'Quick Setup',
      description: 'Get started in minutes with our intuitive onboarding process.',
      size: 'col-span-2 row-span-1',
      gradient: 'from-green-500 to-lime-500'
    },
    {
      icon: Database,
      title: 'Scalable Infrastructure',
      description: 'Easily scale from startup to enterprise with our flexible architecture.',
      size: 'col-span-1 row-span-1',
      gradient: 'from-lime-500 to-yellow-500'
    },
    {
      icon: Code,
      title: 'Developer Friendly',
      description: 'Comprehensive API documentation and SDKs for all major platforms.',
      size: 'col-span-1 row-span-1',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Palette,
      title: 'Customizable UI',
      description: 'Beautiful, customizable interface that adapts to your brand.',
      size: 'col-span-1 row-span-1',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Settings,
      title: 'Integrations',
      description: 'Connect with your favorite tools and services with 100+ integrations.',
      size: 'col-span-2 row-span-1',
      gradient: 'from-red-500 to-pink-500'
    }
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Powerful Features
            <span className="block text-purple-400 mt-2">Everything you need to succeed</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Our comprehensive platform provides all the tools and capabilities your team needs to streamline workflows and boost productivity.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className={`${feature.size} bg-slate-800/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300 group cursor-pointer relative overflow-hidden`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Gradient background accent */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
              </div>

              {/* Glow effect on hover */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-slate-800/30 backdrop-blur-sm border border-white/10 rounded-full">
            <span className="text-slate-300 text-sm">All features included in every plan</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}