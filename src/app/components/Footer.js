import { Code2, Github, Linkedin, Mail, Heart, Sparkles, ArrowUp } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-900 text-white py-12 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-8">
          {/* Brand Section */}
          <div className="flex items-center space-x-3 mb-6 lg:mb-0 group">
            <div className="p-2 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg shadow-lg shadow-emerald-500/25">
              <Code2 className="h-6 w-6 text-white" />
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Babul.dev
              </span>
              <p className="text-emerald-300 text-sm">Full Stack Developer</p>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-4 mb-6 lg:mb-0">
            <a
              href="https://github.com/babulPro"
              className="p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-gray-300 hover:text-white hover:bg-emerald-500/20 hover:border-emerald-500/30 transition-all duration-200 hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/babul-hossain-917472332/"
              className="p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-gray-300 hover:text-white hover:bg-emerald-500/20 hover:border-emerald-500/30 transition-all duration-200 hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:babulhossain@gmail.com"
              className="p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-gray-300 hover:text-white hover:bg-emerald-500/20 hover:border-emerald-500/30 transition-all duration-200 hover:scale-110"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 font-medium hover:scale-105"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8 text-center relative">
          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white p-3 rounded-full shadow-lg shadow-emerald-500/25 hover:from-emerald-600 hover:to-teal-700 transition-all duration-200 hover:scale-110"
          >
            <ArrowUp size={20} />
          </button>

          <p className="text-gray-300 mb-2 flex items-center justify-center gap-2">
            © {currentYear} Md Babul Hossain. All rights reserved.
            <Sparkles size={16} className="text-emerald-400" />
          </p>
          <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
            Built with 
            <span className="text-emerald-400 font-semibold">Next.js</span>, 
            <span className="text-emerald-400 font-semibold">Tailwind CSS</span>, 
            and <Heart size={14} className="text-red-400 inline" />
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center gap-6 mt-4 text-xs text-gray-400">
            <span>🚀 MERN Stack</span>
            <span>⚡ Next.js Expert</span>
            <span>🎯 Open for Remote</span>
          </div>
        </div>
      </div>
    </footer>
  )
}