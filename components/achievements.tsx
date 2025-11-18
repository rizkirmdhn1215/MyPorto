import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Trophy, Award } from 'lucide-react'

export default function Achievements() {
  const achievements = [
    {
      title: 'Top 5 - National Game Design Competition',
      organization: 'Indoneris',
      year: '2022',
      description: 'Achieved Top 5 placement in a competitive national game design competition, showcasing creativity and technical skills in game development.',
      icon: Trophy,
      link: 'https://drive.google.com/file/d/1SuzimZvYJ6EpcPuYeSC-08LMyXZ4lf9S/view?usp=sharing',
    },
  ]

  const certifications = [
    {
      title: 'Competency Certificate Programming Fundamentals',
      issuer: 'Arutala Lab',
      link: 'https://drive.google.com/file/d/1--0ErdoLypLiT_AcOhQMUgEKpqbK7gQn/view?usp=drive_link',
    },
    {
      title: 'Entry Level Fullstack Developer using Laravel',
      issuer: 'Arutala Lab',
      link: 'https://drive.google.com/file/d/1zzvsp7kbWBEALEQPMhxd9lgLI-TMxKE1/view?usp=drive_link',
    },
    {
      title: 'Front End using React JS',
      issuer: 'Arutala Lab',
      link: 'https://drive.google.com/file/d/1ZiLsAeqo1cUCqbmiOVKCFbH_atxY1_Io/view?usp=drive_link',
    },
    {
      title: 'AI Basic Overview Huawei Talent',
      issuer: 'Huawei Talent',
      link: 'https://drive.google.com/file/d/1Gz2Fk6sLgSQALTtv89k6A3cw42XUVADt/view?usp=sharing'
    },
    
  ]

  const leadership = [
    {
      role: 'Head of Education Division',
      organization: 'HIMA INFORMATIKA STTPAYAKUMBUH',
      period: '2023/2024',
      achievements: [
        'Oversaw development and implementation of educational programs',
        'Led increase in soft-skills among 50+ members',
        'Organized technical workshops on Microsoft Office suite',
      ],
    },
    {
      role: 'Scrum Master',
      organization: 'Absence App Development Project',
      period: 'Oct 2024 - Dec 2024',
      achievements: [
        'Led cross-functional team of 6 developers',
        'Facilitated Agile ceremonies and managed sprint goals',
        'Ensured timely project delivery and team efficiency',
      ],
    },
  ]

  return (
    <section className="py-20 px-4 bg-card/50">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Awards & Achievements */}
        <div>
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">Achievements & Recognition</h2>
          
          <div className="space-y-6">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon
              return (
                <a
                  key={index}
                  href={achievement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-transform hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:outline-none rounded-xl"
                  aria-label={`View more about ${achievement.title}`}
                >
                  <Card className="p-6 h-full">
                    <div className="flex gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg h-fit">
                        <IconComponent className="text-primary" size={24} />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                          <h3 className="text-lg font-semibold text-foreground">{achievement.title}</h3>
                          <Badge variant="outline">{achievement.year}</Badge>
                        </div>
                        <p className="text-foreground/70 mb-2">{achievement.organization}</p>
                        <p className="text-foreground/60">{achievement.description}</p>
                      </div>
                    </div>
                  </Card>
                </a>
              )
            })}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-foreground flex items-center gap-2">
            <Award size={28} className="text-primary" />
            Certifications
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">📜</div>
                <h4 className="font-semibold text-foreground mb-2">{cert.title}</h4>
                <p className="text-foreground/70 text-sm mb-4">{cert.issuer}</p>
                <a
                  href={cert.link}
                  className="text-primary hover:text-primary/80 text-sm font-medium transition-colors"
                >
                  View Certificate →
                </a>
              </Card>
            ))}
          </div>
        </div>

        {/* Leadership */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-foreground">Leadership Experience</h3>
          
          <div className="space-y-6">
            {leadership.map((lead, index) => (
              <Card key={index} className="p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">{lead.role}</h4>
                    <p className="text-foreground/70">{lead.organization}</p>
                  </div>
                  <Badge variant="outline" className="h-fit">{lead.period}</Badge>
                </div>
                
                <ul className="space-y-2">
                  {lead.achievements.map((item, i) => (
                    <li key={i} className="flex gap-3 text-foreground/80 text-sm">
                      <span className="text-primary">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
