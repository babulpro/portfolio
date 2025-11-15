'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Download } from 'lucide-react'
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen pt-20 flex items-center bg-gradient-to-br from-emerald-50 via-cyan-50 to-teal-100">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Text Content - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 text-center lg:text-left"
            >
              <h1 className="text-3xl md:text-6xl lg:text-5xl font-bold text-gray-900 mb-6">
                Md Babul Hossain
              </h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-xl md:text-2xl lg:text-3xl text-emerald-600 mb-6 font-semibold">
                  MERN & Next.js Developer
                </h2>
                
                <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl leading-relaxed">
                  I build scalable, efficient web applications using Next.js, Node.js, MongoDB, 
                  and modern DevOps practices. Currently open to remote opportunities.
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start"
              >
                <a
                  href="#contact"
                  className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all duration-200 flex items-center gap-2 justify-center shadow-lg shadow-emerald-500/25"
                >
                  <Mail size={20} />
                  Get In Touch
                </a>
                
                <a
                  href="/resume"
                  className="border-2 border-emerald-500 text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-500 hover:text-white transition-all duration-200 flex items-center gap-2 justify-center hover:shadow-lg hover:shadow-emerald-500/20"
                >
                  <Download size={20} />
                  Download Resume
                </a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex justify-center lg:justify-start space-x-6"
              >
                <Link
                  href="https://github.com/babulPro"
                  className="text-gray-600 hover:text-emerald-600 transition-colors duration-200 p-2 rounded-lg hover:bg-white/50"
                  aria-label="GitHub" target='_blank'
                >
                  <Github size={24} />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/babul-hossain-917472332/"
                  className="text-gray-600 hover:text-emerald-600 transition-colors duration-200 p-2 rounded-lg hover:bg-white/50" target='_blank'
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </Link>
                <Link
                  href="#contact"
                  className="text-gray-600 hover:text-emerald-600 transition-colors duration-200 p-2 rounded-lg hover:bg-white/50"
                  aria-label="Email"
                >
                  <Mail size={24} />
                </Link>
              </motion.div>
            </motion.div>

            {/* Profile Image - Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex-1 flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Background decoration */}
                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full blur-lg opacity-20 animate-pulse"></div>
                
                {/* Main image container */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                  <img 
                    src="/profile.jpg" 
                    alt="Md Babul Hossain - MERN & Next.js Developer"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback if image fails to load
                      e.target.style.display = 'none';
                      const fallback = document.createElement('div');
                      fallback.className = 'w-full h-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white text-lg font-semibold';
                      fallback.textContent = 'MBH';
                      e.target.parentNode.appendChild(fallback);
                    }}
                  />
                </div>

                {/* Floating elements */}
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-4 -right-4 bg-white p-3 rounded-full shadow-lg"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ 
                    y: [0, 10, 0],
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute -bottom-4 -left-4 bg-white p-3 rounded-full shadow-lg"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">⚡</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}