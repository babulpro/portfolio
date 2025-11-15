'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, MessageCircle, Sparkles, Zap } from 'lucide-react'

export default function Contact() {
  const [data, setData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const InputChange = (name, value) => {
    setData(pre => ({
      ...pre,
      [name]: value
    }))
  }

  const FormSubmitHandler = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (data.email.trim() === "") {
      alert("Please enter a valid email.");
      setIsSubmitting(false);
      return;
    }

    try {
      const config = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
      const response = await fetch("/api/message", config, { cache: "no-cache" });

      if (!response.ok) {
        alert("Failed to send message. Please try again.");
        setIsSubmitting(false);
        return;
      }

      const json = await response.json();

      if (json.status === "success") {
        alert('🎉 Message sent successfully!');
        setData({ name: '', email: '', message: '' })
      }
      else {
        alert("Failed to send message. Please try again.");
      }

    }
    catch (error) {
      alert("Network error. Please try again.");
      console.error("Message sending error:", error);
    }
    finally {
      setIsSubmitting(false);
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'babul1946@gmail.com',
      color: 'from-emerald-500 to-teal-600',
      description: 'Send me an email anytime'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+880 1920987588',
      color: 'from-cyan-500 to-blue-600',
      description: 'Available for calls'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Open to Remote Roles',
      color: 'from-green-500 to-emerald-600',
      description: 'Worldwide remote work'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-emerald-50 via-cyan-50 to-teal-100">
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
              <MessageCircle size={16} className="text-emerald-600" />
              <span className="text-emerald-600 text-sm font-medium">Get In Touch</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Work Together</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              I'm currently open to new opportunities and interesting projects. Let's create something amazing!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-white/80 backdrop-blur-sm border border-emerald-100 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
                  <Zap className="text-amber-500" size={24} />
                  Contact Information
                </h3>

                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-4 group cursor-pointer"
                    >
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${item.color} shadow-lg`}>
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-600 text-sm">{item.label}</p>
                        <p className="text-gray-900 font-semibold group-hover:text-emerald-600 transition-colors duration-200">
                          {item.value}
                        </p>
                        <p className="text-gray-500 text-xs mt-1">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Availability Status */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  viewport={{ once: true }}
                  className="mt-8 p-4 bg-gradient-to-r from-emerald-500/10 to-teal-600/10 border border-emerald-200 rounded-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                    <div>
                      <p className="text-emerald-700 font-semibold">Available for work</p>
                      <p className="text-emerald-600 text-sm">Quick response guaranteed</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Fun Fact */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-6 text-white text-center shadow-lg shadow-emerald-500/25"
              >
                <Sparkles size={32} className="mx-auto mb-3" />
                <h4 className="font-bold text-lg mb-2">Ready to Start?</h4>
                <p className="text-emerald-100 text-sm">
                  I typically respond within 24 hours. Let's discuss your project!
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/80 backdrop-blur-sm border border-emerald-100 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Send Me a Message
                </h3>

                <form onSubmit={FormSubmitHandler} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={data.name}
                      onChange={(e) => InputChange("name", e.target.value)}
                      required
                      className="w-full px-4 py-3 border border-emerald-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 bg-white/50"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={data.email}
                      onChange={(e) => InputChange("email", e.target.value)}
                      required
                      className="w-full px-4 py-3 border border-emerald-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 bg-white/50"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={data.message}
                      onChange={(e) => InputChange("message", e.target.value)}
                      required
                      rows="5"
                      className="w-full px-4 py-3 border border-emerald-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 bg-white/50 resize-none"
                      placeholder="Tell me about your project or opportunity..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all duration-200 flex items-center justify-center gap-3 shadow-lg shadow-emerald-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>

                {/* Form Note */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  viewport={{ once: true }}
                  className="text-center text-gray-600 text-sm mt-6"
                >
                  Your information is safe with me. I respect your privacy.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}