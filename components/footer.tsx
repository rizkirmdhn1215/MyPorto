export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground/5 border-t py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Rizki Ramadhan</h3>
            <p className="text-foreground/70 text-sm">Full-Stack Developer passionate about building modern web applications.</p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="text-foreground/70 hover:text-foreground transition-colors">About</a></li>
              <li><a href="#skills" className="text-foreground/70 hover:text-foreground transition-colors">Skills</a></li>
              <li><a href="#projects" className="text-foreground/70 hover:text-foreground transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-foreground/70 hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Skills</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>React & Next.js</li>
              <li>Laravel & Spring Boot</li>
              <li>Full-Stack Development</li>
              <li>Database Design</li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/70">
          <p>&copy; {currentYear} Rizki Ramadhan. All rights reserved.</p>
          <p>Built with Next.js, React, and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
