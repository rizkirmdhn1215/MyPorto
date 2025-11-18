'use client'

import { useCallback } from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Github, ArrowLeft, ArrowRight } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'

export default function Projects() {
  const projects = [
    {
      title: 'SKCK Online Web Application',
      description: 'An Online Web Application that focusing for register and generate SKCK document, using Firebase Firestore for real-time data storage, and an intuitive user interface.',
      technologies: ['Next JS', 'Firebase', 'Firebase Auth', 'Firestore'],
      image: '/SKCK.png',
      links: {
        demo: 'https://skck.vercel.app',
        github: 'https://github.com/rizkirmdhn1215/skck',
      },
    },
    {
      title: 'Report Kehilangan Barang – POLRES Payakumbuh',
      description: 'A web-based application that allows citizens to report lost personal items online and submit verified loss statements directly to the Payakumbuh Police Department (POLRES Payakumbuh). The system digitalizes the traditional manual reporting process, enabling faster verification and document retrieval.',
      technologies: ['Next.js', 'Firebase Auth', 'FirebaseFirestore', 'React', 'TypeScript'],
      image: '/Polres.png',
      links: {
        demo: 'https://polres.vercel.app/login',
        github: 'https://github.com/rizkirmdhn1215/polres',
      },
    },
    {
      title: 'E-KRS Web Application',
      description: 'Web application that allows students to manage their academic records and view their academic progress.',
      technologies: ['Next.js', 'PostgreSQL', 'TypeScript', 'MinIO'],
      image: '/Ekrs.png',
      links: {
        demo: '#',
        github: '#',
      },
    },
    {
      title: 'JastipInAja - Proxy Purchase Service',
      description: 'Web application enabling users to list items they\'re willing to buy/bring for others. Built with responsive UI, modular components, and focus on user experience.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'ESLint'],
      image: '/JastipInAja.png',
      links: {
        demo: 'https://jastipinaja-blue.vercel.app/',
        github: 'https://github.com/rizkirmdhn1215/jastipinaja',
      },
    },
    {
      title: 'Absence App',
      description: 'Web application enabling users to manage their absence records and view their absence history.',
      technologies: ['React', 'PostgreSQL', 'TypeScript', 'MinIO'],
      image: '/Absence.png',
      links: {
        demo: '#',
        github: '#',
      },
    },
    {
      title: 'Data Extraction System Arutala Lab',
      description: 'Web application enabling users to extract data from Excel file and save it to the database an interactively display the data in dashboard.',
      technologies: ['Next.js','Golang','RabbitMQ', 'PostgreSQL', 'TypeScript','Docker'],
      image: '/ExtractionApp.jpeg',
      links: {
        demo: '#',
        github: '#',
      },
    },
  ]

  type ProjectType = (typeof projects)[number]

  const hasCarousel = projects.length > 4
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
    skipSnaps: false,
  })

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext()
  }, [emblaApi])

  const ProjectCard = ({ project }: { project: ProjectType }) => (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col h-full">
      <div className="relative w-full h-48 bg-foreground/5 overflow-hidden group">
        <img
          src={project.image || '/placeholder.svg'}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
        <p className="text-foreground/70 mb-4 flex-1">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech: string) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex gap-3 pt-4 border-t">
          <a
            href={project.links.demo}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors text-sm font-medium"
          >
            <ExternalLink size={16} /> View Project
          </a>
          <a
            href={project.links.github}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-foreground/20 text-foreground rounded hover:bg-foreground/5 transition-colors text-sm font-medium"
          >
            <Github size={16} /> Code
          </a>
        </div>
      </div>
    </Card>
  )

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-foreground">Featured Projects</h2>
        {hasCarousel ? (
          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-6">
                {projects.map((project: ProjectType, index) => (
                  <div
                    key={index}
                    className="min-w-0 flex-[0_0_100%] md:flex-[0_0_calc(50%-12px)]"
                  >
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>
            </div>
            <button
              type="button"
              onClick={scrollPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full bg-background p-2 shadow-md border hover:bg-muted transition-colors"
              aria-label="Previous project"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full bg-background p-2 shadow-md border hover:bg-muted transition-colors"
              aria-label="Next project"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project: ProjectType, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
