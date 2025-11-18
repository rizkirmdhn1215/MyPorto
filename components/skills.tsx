import { Card } from '@/components/ui/card'

export default function Skills() {
  const technicalSkills = [
    'React.js',
    'Next.js',
    'Laravel',
    'Spring Boot',
    'JavaScript',
    'TypeScript',
    'Golang',
    'Database Design',
    'RESTful APIs',
    'Spring Framework',
    'Bootstrap',
    'Tailwind CSS',
  ]

  const softSkills = [
    'Problem Solving',
    'Analytical Thinking',
    'Critical Thinking',
    'Decision Making',
    'Team Leadership',
    'Communication',
    'Project Management',
    'Agile/Scrum',
    'Teamwork & Collaboration',
    'Adaptability',
    'Attention to Detail',
  ]

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-foreground">Skills & Expertise</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Technical Skills</h3>
            <div className="flex flex-wrap gap-3">
              {technicalSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Soft Skills</h3>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
