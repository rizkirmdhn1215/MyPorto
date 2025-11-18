import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center text-foreground">Let's Connect</h2>
        <p className="text-center text-foreground/70 mb-12 text-lg">
          I'm always interested in hearing about new opportunities and collaborations. Feel free to reach out!
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <a
            href="mailto:rizkirmdhn1215@gmail.com"
            className="flex flex-col items-center p-6 bg-card rounded-lg hover:shadow-lg transition-shadow border hover:border-primary/50"
          >
            <div className="p-3 bg-primary/10 rounded-full mb-4">
              <Mail className="text-primary" size={28} />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Email</h3>
            <p className="text-foreground/70 text-sm text-center break-all">rizkirmdhn1215@gmail.com</p>
          </a>

          <a
            href="tel:+6287872483110"
            className="flex flex-col items-center p-6 bg-card rounded-lg hover:shadow-lg transition-shadow border hover:border-primary/50"
          >
            <div className="p-3 bg-primary/10 rounded-full mb-4">
              <Phone className="text-primary" size={28} />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Phone</h3>
            <p className="text-foreground/70 text-sm">+62 878 724 83110</p>
          </a>

          <div className="flex flex-col items-center p-6 bg-card rounded-lg border hover:border-primary/50">
            <div className="p-3 bg-primary/10 rounded-full mb-4">
              <MapPin className="text-primary" size={28} />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Location</h3>
            <p className="text-foreground/70 text-sm text-center">Payakumbuh, West Sumatra</p>
          </div>
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">Get in Touch</h3>
          <p className="text-foreground/70 mb-6">
            Whether you have a question or just want to say hello, feel free to contact me. I'm always ready to discuss new opportunities!
          </p>
          <a
            href="mailto:rizkirmdhn1215@gmail.com"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold gap-2"
          >
            <Mail size={20} />
            Send me an Email
          </a>
        </div>

        <div className="flex justify-center gap-6 mt-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-foreground/10 hover:bg-foreground/20 rounded-full transition-colors"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-foreground/10 hover:bg-foreground/20 rounded-full transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </section>
  )
}
