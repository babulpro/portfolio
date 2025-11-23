'use client'

import { motion } from 'framer-motion'
import { Code2, Server, Database, Cloud, Cpu, Zap, Sparkles, Target, Rocket } from 'lucide-react'

export default function About() {
  const stats = [
    { icon: Code2, label: 'Frontend Projects', value: '20+', color: 'from-emerald-500 to-teal-600' },
    { icon: Server, label: 'Backend APIs', value: '15+', color: 'from-cyan-500 to-blue-600' },
    { icon: Database, label: 'Database Systems', value: '17+', color: 'from-green-500 to-emerald-600' },
    { icon: Cloud, label: 'Cloud Deployments', value: '5+', color: 'from-teal-500 to-cyan-600' },
  ]

  const skills = [
    { name: 'Frontend', tech: 'React, Next.js, TypeScript', icon: Code2, level: 75 },
    { name: 'Backend', tech: 'Node.js, Express, MongoDB', icon: Server, level: 80 },
    { name: 'DevOps', tech: 'Docker, AWS, CI/CD', icon: Cloud, level: 30 },
    { name: 'Database', tech: 'MongoDB, MySQL, Redis', icon: Database, level: 70 },
  ]

  const features = [
    { icon: Target, text: 'Problem Solver', desc: 'Creative solutions for complex challenges' },
    { icon: Zap, text: 'Fast Learner', desc: 'Quickly adapt to new technologies' },
    { icon: Rocket, text: 'Performance Focused', desc: 'Optimized and efficient code' },
    { icon: Sparkles, text: 'Clean Code', desc: 'Maintainable and scalable architecture' },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-emerald-50 via-cyan-50 to-teal-100">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-emerald-200 rounded-full px-4 py-2 mb-4">
              <Sparkles size={16} className="text-emerald-600" />
              <span className="text-emerald-600 text-sm font-medium">About Me</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Passionate <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Developer</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Crafting digital experiences with modern technologies and best practices
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Content - Text & Features */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Main Text */}
              <div className="bg-white/80 backdrop-blur-sm border border-emerald-100 rounded-2xl p-8 shadow-lg">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  I am a dedicated <strong className="text-emerald-600">MERN Stack & Next.js Developer</strong> with strong 
                  experience in full-stack JavaScript development and a growing background in 
                  DevOps, Docker, CI/CD, and modern deployment workflows.
                </p>
                
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  I enjoy building <strong className="text-emerald-600">high-performing, secure, and scalable web applications</strong> 
                  that deliver seamless user experiences and clean, maintainable codebases.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Currently, I'm focused on mastering <strong className="text-emerald-600">cloud technologies and DevOps practices</strong> 
                  to build even more robust and efficient systems.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.text}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/80 backdrop-blur-sm border border-emerald-100 rounded-xl p-4 text-center group hover:bg-white transition-all duration-300 hover:shadow-lg"
                  >
                    <feature.icon className="h-8 w-8 text-emerald-600 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <div className="font-semibold text-gray-900 text-sm mb-1">{feature.text}</div>
                    <div className="text-xs text-gray-600">{feature.desc}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Content - Stats & Skills */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative group"
                  >
                    <div className="bg-white/80 backdrop-blur-sm border border-emerald-100 rounded-2xl p-6 text-center group-hover:bg-white transition-all duration-300 h-full shadow-lg">
                      {/* Gradient Background Effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                      
                      <stat.icon className="h-10 w-10 text-emerald-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                      <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                      <div className="text-sm text-gray-700 font-medium">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Skills Progress */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-sm border border-emerald-100 rounded-2xl p-6 shadow-lg"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Cpu className="h-6 w-6 text-emerald-600" />
                  <h3 className="text-xl font-semibold text-gray-900">Technical Skills</h3>
                </div>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                        <span className="text-xs text-emerald-600 font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-emerald-100 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 1 + index * 0.1 }}
                          viewport={{ once: true }}
                          className="bg-gradient-to-r from-emerald-500 to-teal-600 h-2 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-white/80 backdrop-blur-sm border border-emerald-100 rounded-2xl p-8 max-w-2xl mx-auto shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Build Something Amazing?
              </h3>
              <p className="text-gray-700 mb-6">
                Let's collaborate to turn your ideas into reality with modern technology and best practices.
              </p>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all duration-200 shadow-lg shadow-emerald-500/25"
              >
                <Sparkles size={20} />
                Start a Project
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}