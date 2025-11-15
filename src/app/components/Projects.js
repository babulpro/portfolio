'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Star, Eye, Sparkles, Zap } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Shopping Platform",
      description: "Full-featured e-commerce platform with product listings, shopping cart, and payment integration",
      tech: ["Next.js", "MongoDB", "Mongoose", "Tailwind"],
      github: "#",
      live: "https://chic-tartufo-f9dd14.netlify.app/",
      image: "/project1.jpg",
      featured: false
    },
    {
      title: "Task Management App",
      description: "Collaborative task management with real-time updates and team features",
      tech: ["NextJs", "Prisma", "MongoDB","CI/CD","GitHub Actions","Docker"],
      github: "#",
      live: "https://house-rent-gamma.vercel.app/",
      image: "/project9.jpg",
      featured: true
    },
    {
      title: "Blog CMS",
      description: "Content management system with markdown support and SEO optimization",
      tech: ["Next.js", "Prisma", "MySQL", "Auth.js"],
      github: "#",
      live: "#",
      image: "/project2.jpg",
      featured: true
    },
    {
      title: "Distance learning Platform",
      description: "Interactive online learning platform with video lectures and quizzes",
      tech: ["Next.js", "API Integration", "Chart.js"],
      github: "#",
      live: "https://distancelearning.vercel.app",
      image: "/project4.jpg",
      featured: false
    },
    {
      title: "Portfolio Website",
      description: "Modern portfolio website with smooth animations and responsive design",
      tech: ["Next.js", "Framer Motion", "Tailwind", "Vercel"],
      github: "#",
      live: "#",
      image: "/project6.jpg",
      featured: true
    },
    {
      title: "Tesla Car Marketplace",
      description: "A marketplace for buying and selling Tesla cars with user authentication",
      tech: ["MERN Stack", "Tailwind css", ],
      github: "https://rococo-croissant-497f22.netlify.app",
      live: "https://rococo-croissant-497f22.netlify.app",
      image: "/project5.jpg",
      featured: false
    }
  ]

  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-emerald-50 via-cyan-50 to-teal-100">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
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
              <span className="text-emerald-600 text-sm font-medium">Featured Projects</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Creative Work</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Here are some of the projects I've built to solve real-world problems and showcase my skills
            </p>
          </motion.div>

          {/* Featured Projects */}
          <div className="mb-16">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3"
            >
              <Star className="text-amber-500" size={24} />
              Featured Projects
            </motion.h3>

            <div className="grid lg:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/80 backdrop-blur-md border border-emerald-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  {/* Project Image/Placeholder */}
                  <div className="h-48 bg-gradient-to-br from-emerald-100 to-teal-200 flex items-center justify-center relative overflow-hidden">
                    <div className="text-6xl opacity-75 group-hover:scale-110 transition-transform duration-500">
                        <img src={project.image} alt="Featured Badge" className="w-full h-full" />

                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                        <Star size={20} />
                        Featured
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-200">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium border border-emerald-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex space-x-4">
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-200 font-medium"
                      >
                        <Github size={18} />
                        Code
                      </motion.a>
                      <motion.a
                        href={project.live}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-200 font-medium shadow-lg shadow-emerald-500/25"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Other Projects */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3"
            >
              <Eye className="text-emerald-600" size={24} />
              Other Projects
            </motion.h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/80 backdrop-blur-sm border border-emerald-100 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  {/* Project Image/Placeholder */}
                  <div className="h-44 bg-gradient-to-br from-cyan-100 to-blue-200 flex items-center justify-center">
                    <div className="text-4xl opacity-75 group-hover:scale-110 transition-transform duration-500">
                        <img src={project.image} alt="Project Image" className="w-full h-2/3" />
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors duration-200">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-700 text-sm mb-3 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-emerald-50 text-emerald-600 rounded text-xs font-medium border border-emerald-100"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex space-x-3">
                      <a
                        href={project.github}
                        className="text-gray-600 hover:text-emerald-600 transition-colors duration-200"
                      >
                        <Github size={18} />
                      </a>
                      <a
                        href={project.live}
                        className="text-gray-600 hover:text-emerald-600 transition-colors duration-200"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-white/80 backdrop-blur-sm border border-emerald-100 rounded-2xl p-8 max-w-2xl mx-auto shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
                <Zap className="text-amber-500" size={24} />
                Have a Project in Mind?
              </h3>
              <p className="text-gray-700 mb-6">
                Let's work together to bring your ideas to life with modern technology and creative solutions.
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