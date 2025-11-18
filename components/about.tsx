export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-foreground">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-foreground/80 leading-relaxed">
              I'm Rizki Ramadhani, a fresh Computer Science graduate from Sekolah Tinggi Teknologi Payakumbuh. Although I'm just starting my professional journey, I've built a strong foundation in full-stack development through coursework, internships, and personal projects.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              I enjoy translating real-world problems into practical web solutions. My focus is on modern technologies such as Next.js, React, and Tailwind CSS, and I'm actively strengthening my backend skills in Node.js, Go, and database design.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              I'm eager to take on entry-level opportunities where I can learn from experienced engineers, contribute to agile teams, and continue growing both my technical and soft skills. Collaboration, curiosity, and resilience are the values I bring to every project.
            </p>
            
            <div className="pt-4">
              <h3 className="font-semibold text-foreground mb-3">Quick Facts:</h3>
              <ul className="space-y-2 text-foreground/80">
                <li>📍 Location: Payakumbuh, West Sumatra, Indonesia</li>
                <li>📚 Education: Bachelor's in Computer Science (GPA: 3.59/4.00)</li>
                <li>🎯 Experience: Fresh Graduate with no experience</li>
                <li>📞 Phone: +6287872483110</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg p-8 border border-primary/10 h-96 flex items-start justify-center overflow-hidden">
            <img src="/Profil.jpeg" alt="Profile" className="w-full h-full object-cover object-[center_30%] rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}
