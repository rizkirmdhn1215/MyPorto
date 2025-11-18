export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-foreground">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-foreground/80 leading-relaxed">
              I'm a recent graduate in Computer Science from Sekolah Tinggi Teknologi Payakumbuh with a strong passion for web development and data analysis. My journey spans from foundational programming to full-stack development across multiple frameworks.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Currently, I'm focused on building scalable web applications with modern technologies. I've worked on diverse projects ranging from Android applications to AI chatbots, each contributing to my growth as a developer.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Beyond coding, I'm interested in problem-solving, system design, and mentoring junior developers. I believe in continuous learning and staying updated with industry trends.
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
