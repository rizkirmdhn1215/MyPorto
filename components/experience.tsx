import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function Experience() {
  const experiences = [
    {
      role: 'Scrum Master',
      company: 'Padepokan Tujuh Sembilan',
      location: 'Bandung, West Java',
      period: 'Oct 2024 - Dec 2024',
      type: 'Internship',
      achievements: [
        'Led a cross-functional team of 6 developers in building an absence management app',
        'Facilitated all Agile ceremonies and ensured smooth sprint cycles',
        'Acted as key liaison between stakeholders and development team',
      ],
    },
    {
      role: 'Full-stack Developer',
      company: 'Padepokan Tujuh Sembilan',
      location: 'Bandung, West Java',
      period: 'Aug 2024 - Oct 2024',
      type: 'Internship',
      achievements: [
        'Developed comprehensive web applications using Spring Boot, React, Laravel, and Next.js',
        'Proficient in building RESTful APIs and user-friendly interfaces',
        'Explored new tools and techniques to optimize performance',
      ],
    },
    {
      role: 'Full-stack Developer',
      company: 'Arutala Lab',
      location: 'Bandung, West Java',
      period: 'Jul 2024',
      type: 'Apprenticeship',
      achievements: [
        'Developed web applications using Laravel framework with MVC architecture',
        'Created responsive user interfaces using CSS and Bootstrap',
        'Managed databases efficiently for seamless integration',
      ],
    },
    {
      role: 'Programmer',
      company: 'Arutala Lab',
      location: 'Payakumbuh, West Sumatra',
      period: 'Mar 2024',
      type: 'Apprenticeship',
      achievements: [
        'Developed foundation in programming principles and problem-solving',
        'Applied programming concepts in Java',
        'Designed algorithms and implemented efficient applications',
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-foreground">Experience</h2>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                  <p className="text-foreground/70">{exp.company} • {exp.location}</p>
                </div>
                <div className="flex flex-col md:text-right gap-2 md:min-w-[140px]">
                  <Badge variant="outline" className="w-fit md:ml-auto">{exp.type}</Badge>
                  <p className="text-sm text-foreground/60">{exp.period}</p>
                </div>
              </div>
              
              <ul className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex gap-3 text-foreground/80">
                    <span className="text-primary mt-1.5">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
