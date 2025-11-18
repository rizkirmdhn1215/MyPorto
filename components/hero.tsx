'use client'

import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-background to-background/50">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground tracking-tight">
            Rizki Ramadhan
          </h1>
          <p className="text-xl md:text-2xl text-foreground/70">
            Full-Stack Developer & Problem Solver
          </p>
          <p className="text-base md:text-lg text-foreground/60 max-w-2xl mx-auto">
            Building responsive web applications with modern technologies. Experienced in Laravel, React, Spring Boot, and Next.js with a passion for clean code and user experience.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium gap-2"
          >
            View My Work <ArrowRight size={18} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary hover:bg-primary/10 rounded-lg transition-colors font-medium"
          >
            Get In Touch
          </a>
        </div>

        <div className="flex gap-6 justify-center pt-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-foreground/10 hover:bg-foreground/20 rounded-full transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-foreground/10 hover:bg-foreground/20 rounded-full transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:rizkirmdhn1215@gmail.com"
            className="p-3 bg-foreground/10 hover:bg-foreground/20 rounded-full transition-colors"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </section>
  )
}
