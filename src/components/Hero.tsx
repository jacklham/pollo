'use client'

import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-8">
          <div className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-500 dark:border-blue-400 shadow-lg">
            <Image
              src="/profile.jpg"
              alt="Profile"
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 768px) 160px, 160px"
            />
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Hi, I&apos;m{' '}
            <span className="text-blue-600 dark:text-blue-400">Jack Lham</span>
          </h1>
          
          <h2 className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-6">
            Software Developer
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            Passionate about creating innovative solutions and building scalable applications.
            I specialize in full-stack development with expertise in modern technologies.
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://github.com/jacklham"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/jacklham"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:jacklhamz@gmail.com"
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            >
              Get In Touch
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white font-medium rounded-lg transition-colors"
            >
              Download Resume
            </a>
          </div>
        </div>
        
        <div className="animate-bounce">
          <a href="#about">
            <ArrowDown className="mx-auto text-gray-400 dark:text-gray-500" size={24} />
          </a>
        </div>
      </div>
    </section>
  )
}
