'use client'

import { motion } from 'framer-motion'
import { Code2, Server, Database, Cloud, Zap, Sparkles } from 'lucide-react'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code2,
      skills: [
        { name: 'Next.js', level: 80 },
        { name: 'React.js', level: 85 },
        { name: 'JavaScript (ES6+)', level: 86 },
        { name: 'Tailwind CSS', level: 75 },
        { name: 'HTML/CSS', level: 78 },
      ],
      color: 'from-emerald-500 to-teal-600'
    },
    {
      title: 'Backend',
      icon: Server,
      skills: [
        { name: 'Node.js', level: 70 },
        { name: 'NextJs', level: 80 },
        { name: 'Express.js', level: 75 },
        { name: 'REST APIs', level: 80 },
        { name: 'Authentication', level: 75 },
        { name: 'Middleware', level: 70 },
      ],
      color: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'Database',
      icon: Database,
      skills: [
        { name: 'MongoDB', level: 70 },
        { name: 'MySql', level: 75 },
        { name: 'Mongoose', level: 70 },
        { name: 'Prisma', level: 89 },
        { name: 'Database Design', level: 70 },
        { name: 'Query Optimization', level: 77 },
      ],
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'DevOps & Tools',
      icon: Cloud,
      skills: [
        { name: 'Docker', level: 65 },
        { name: 'CI/CD', level: 70 },
        { name: 'Git & GitHub', level: 80 },
        { name: 'GitHub Actions', level: 65 },
        { name: 'Linux', level: 50 },
        { name: 'K8s', level: 15 },
      ],
      color: 'from-teal-500 to-cyan-600'
    }
  ]

  const featuredSkills = [
    { name: 'Next.js', level: 90 },
    { name: 'React', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'MongoDB', level: 70 },
    { name: 'Tailwind', level: 80 },
    { name: 'Docker', level: 80 },
  ]

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-emerald-50 via-cyan-50 to-teal-100">
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
              <Zap size={16} className="text-emerald-600" />
              <span className="text-emerald-600 text-sm font-medium">Technical Skills</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Technologies I <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Work With</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Here are the technologies and tools I use to build scalable and efficient applications
            </p>
          </motion.div>

          {/* Featured Skills Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="bg-white/80 backdrop-blur-sm border border-emerald-100 rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center flex items-center justify-center gap-2">
                <Sparkles size={20} className="text-emerald-600" />
                Core Technologies
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {featuredSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative group"
                  >
                    <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-2 rounded-lg font-semibold shadow-lg shadow-emerald-500/25">
                      {skill.name}
                    </div>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                      {skill.level}% Proficiency
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-sm border border-emerald-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg">
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, index) => (
                    <div key={skill.name} className="group">
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700 font-medium group-hover:text-emerald-600 transition-colors duration-200">
                          {skill.name}
                        </span>
                        <span className="text-emerald-600 font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-emerald-100 rounded-full h-3">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                          viewport={{ once: true }}
                          className={`h-3 rounded-full bg-gradient-to-r ${category.color} shadow-md shadow-emerald-500/25`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <div className="bg-white/80 backdrop-blur-sm border border-emerald-100 rounded-2xl p-8 text-center shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Always Learning & Growing
              </h3>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                I'm constantly exploring new technologies and improving my skills to stay at the forefront of web development.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">20+</div>
                  <div className="text-gray-600">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">4</div>
                  <div className="text-gray-600">Categories</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">72%</div>
                  <div className="text-gray-600">Average Skill</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}