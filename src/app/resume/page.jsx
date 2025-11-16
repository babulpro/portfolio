"use client";

import { useState } from "react";
import { ArrowLeft, Printer } from "lucide-react";
import Link from "next/link";

export default function Resume() {
  const [isPrinting, setIsPrinting] = useState(false);

  const handlePrint = () => {
    setIsPrinting(true);
    
    // Open print dialog
    window.print();
    
    setTimeout(() => {
      setIsPrinting(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Header */}
        <div className="print:hidden flex items-center justify-between mb-6">
          <Link
            href="/"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
          >
            <ArrowLeft size={20} />
            Back to Portfolio
          </Link>

          <button
            onClick={handlePrint}
            disabled={isPrinting}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2 disabled:opacity-50"
          >
            {isPrinting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                Opening Print...
              </>
            ) : (
              <>
                <Printer size={20} />
                Print Resume
              </>
            )}
          </button>
        </div>

        Instructions
        <div className="print:hidden mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h4 className="font-semibold text-blue-800 mb-2">How to Save as PDF:</h4>
          <p className="text-blue-700 text-sm">
            Click "Print Resume" → In print dialog, select <strong>"Save as PDF"</strong> → Click <strong>"Save"</strong>
          </p>
        </div>

        {/* Resume Content */}
        <div className="bg-white p-8 shadow-lg rounded-lg print:shadow-none print:p-0 print:bg-white">
          
          {/* Header with Profile Image - FIXED LAYOUT */}
          <div className="flex items-start justify-between mb-8 print:flex print:items-start print:justify-between print:mb-6">
            {/* Text Content */}
            <div className="flex-1 print:flex-1">
              <h1 className="text-4xl font-bold text-gray-900 mb-2 print:text-3xl print:mb-1">
                Md Babul Hossain
              </h1>
              <h2 className="text-xl text-blue-600 mb-3 print:text-lg print:mb-2">
                MERN & Next.js Developer
              </h2>
              <div className="flex flex-col gap-1 text-gray-600 print:text-sm">
                <span>📧 babul1946@gmail.com</span>
                <span>📞 +880 01920987588</span>
                <span>🌐 Open to Remote Roles</span>
              </div>
            </div>
            
            {/* Profile Image - FIXED POSITIONING */}
            <div className="ml-6 print:ml-4 print:flex-shrink-0">
              <div className="w-32 h-32 print:w-28 print:h-28 bg-gray-200 rounded-full border-2 border-gray-300 overflow-hidden">
                <img 
                  src="/profile.jpg"
                  alt="Md Babul Hossain"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="flex flex-col md:flex-row gap-8 print:flex-row print:gap-6">
            {/* Left Column - Main Content */}
            <div className="flex-1 print:flex-1">
              {/* Professional Summary */}
              <section className="mb-6 print:mb-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 border-b-2 border-gray-300 pb-2 print:text-lg print:mb-2">
                  Professional Summary
                </h3>
                <p className="text-gray-700 text-base leading-relaxed print:text-sm">
                  MERN Stack & Next.js Developer experienced in building scalable web applications. 
                  Proficient in Next.js, Node.js, MongoDB, and modern DevOps practices. 
                  Passionate about clean architecture and performance optimization.
                </p>
              </section>

              {/* Experience */}
              <section className="mb-6 print:mb-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 border-b-2 border-gray-300 pb-2 print:text-lg print:mb-2">
                  Experience
                </h3>
                <div className="space-y-4 print:space-y-3">
                  <div>
                    <div className="flex justify-between items-start mb-2 print:mb-1">
                      <h4 className="font-semibold text-gray-800 text-lg print:text-base">Full-Stack Developer</h4>
                      <span className="text-gray-600 text-base print:text-sm">2022 - Present</span>
                    </div>
                    <p className="text-gray-600 text-base mb-2 print:text-sm print:mb-1">Freelance & Personal Projects</p>
                    <ul className="text-gray-700 text-base list-disc list-inside space-y-1 print:text-sm">
                      <li>Developed 15+ full-stack applications using MERN stack</li>
                      <li>Implemented responsive designs and performance optimization</li>
                      <li>Built REST APIs and integrated payment systems</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Projects */}
              <section className="mb-6 print:mb-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 border-b-2 border-gray-300 pb-2 print:text-lg print:mb-2">
                  Projects
                </h3>
                <div className="space-y-4 print:space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-800 text-lg mb-1 print:text-base">E-Commerce Platform</h4>
                    <p className="text-gray-600 text-base mb-2 print:text-sm print:mb-1">Next.js • MongoDB • Prisma • Tailwind</p>
                    <p className="text-gray-700 text-base print:text-sm">
                      Full e-commerce system with admin dashboard and payment integration.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-lg mb-1 print:text-base">Task Manager App</h4>
                    <p className="text-gray-600 text-base mb-2 print:text-sm print:mb-1">React • Node.js • Docker • Nginx  • MongoDB</p>
                    <p className="text-gray-700 text-base print:text-sm">
                      Real-time collaborative task management platform.
                    </p>
                  </div>
                </div>
              </section>
            </div>

            {/* Right Column - Skills & Contact */}
            <div className="md:w-2/5 print:w-2/5 space-y-6 print:space-y-4">
              {/* Technical Skills */}
              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 border-b-2 border-gray-300 pb-2 print:text-lg print:mb-2">
                  Skills
                </h3>
                <div className="space-y-4 print:space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-800 text-lg mb-2 print:text-base print:mb-1">Frontend</h4>
                    <ul className="text-gray-700 text-base list-disc list-inside space-y-1 print:text-sm">
                      <li>Html, Css</li>
                      <li>Next.js, React.js</li>
                      <li>JavaScript</li>
                      <li>Tailwind CSS</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-lg mb-2 print:text-base print:mb-1">Backend</h4>
                    <ul className="text-gray-700 text-base list-disc list-inside space-y-1 print:text-sm">
                      <li>NextJs, Api Route</li>
                      <li>Node.js, Express.js</li>
                      <li>REST APIs</li>
                      <li>Authentication</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-lg mb-2 print:text-base print:mb-1">Database</h4>
                    <ul className="text-gray-700 text-base list-disc list-inside space-y-1 print:text-sm">
                      <li>MongoDB, Mongoose</li>
                      <li>Prisma,Mongoose</li>
                      <li>Data Modeling</li>
                      <li>ERD Diagram</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-lg mb-2 print:text-base print:mb-1">DevOps Learning</h4>
                    <ul className="text-gray-700 text-base list-disc list-inside space-y-1 print:text-sm">
                      <li>Docker, CI/CD</li>
                      <li>GitHub Actions</li>
                      <li>Git, Linux</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Contact */}
              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 border-b-2 border-gray-300 pb-2 print:text-lg print:mb-2">
                  Contact
                </h3>
                <div className="space-y-3 text-base print:text-sm print:space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-blue-600">📧</span>
                    <span className="text-gray-700">babul1946@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">📞</span>
                    <span className="text-gray-700">+880 1920987588</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-purple-600">💼</span>
                    <span className="text-gray-700">Open to Remote</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-600">🔗</span>
                    <span className="text-gray-700">github.com/babulpro</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-500">🔗</span>
                    <span className="text-gray-700">https://www.linkedin.com/in/babul-hossain-917472332/</span>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          /* Hide everything except resume */
          body * {
            visibility: hidden;
          }
          
          .print\\:hidden {
            display: none !important;
          }

          /* Show only resume content */
          .bg-white.p-8,
          .bg-white.p-8 * {
            visibility: visible;
          }

          /* Resume container positioning */
          .bg-white.p-8 {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            background: white !important;
            box-shadow: none !important;
            padding: 0 !important;
            margin: 0 !important;
          }

          /* Remove all shadows and backgrounds */
          .print\\:shadow-none {
            box-shadow: none !important;
          }
          .print\\:p-0 {
            padding: 0 !important;
          }
          .print\\:bg-white {
            background: white !important;
          }

          /* Font sizes for print */
          .print\\:text-3xl {
            font-size: 24px !important;
            line-height: 1.2 !important;
          }
          .print\\:text-lg {
            font-size: 18px !important;
            line-height: 1.3 !important;
          }
          .print\\:text-base {
            font-size: 14px !important;
            line-height: 1.4 !important;
          }
          .print\\:text-sm {
            font-size: 12px !important;
            line-height: 1.4 !important;
          }

          /* Margins and spacing */
          .print\\:mb-6 {
            margin-bottom: 24px !important;
          }
          .print\\:mb-4 {
            margin-bottom: 16px !important;
          }
          .print\\:mb-2 {
            margin-bottom: 8px !important;
          }
          .print\\:mb-1 {
            margin-bottom: 4px !important;
          }

          /* Image sizing */
          .print\\:w-28 {
            width: 112px !important;
          }
          .print\\:h-28 {
            height: 112px !important;
          }
          .print\\:ml-4 {
            margin-left: 16px !important;
          }

          /* Layout widths */
          .print\\:w-2\\/5 {
            width: 40% !important;
          }

          /* Flex layout for print */
          .print\\:flex-row {
            flex-direction: row !important;
          }
          .print\\:flex-shrink-0 {
            flex-shrink: 0 !important;
          }

          /* Page setup */
          @page {
            margin: 0.5in;
            size: letter;
          }

          body {
            background: white !important;
            color: black !important;
            font-family: Arial, sans-serif !important;
          }

          /* Ensure good contrast */
          .text-gray-700 {
            color: #374151 !important;
          }
          .text-gray-800 {
            color: #1f2937 !important;
          }
          .text-gray-900 {
            color: #111827 !important;
          }
          .text-blue-600 {
            color: #2563eb !important;
          }
        }
      `}</style>
    </div>
  );
}