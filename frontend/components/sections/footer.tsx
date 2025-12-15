import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { footerContent } from "@/data/landing-page"
import { ArrowRight, Twitter, Github } from "lucide-react"

const socialIconMap = {
  twitter: Twitter,
  github: Github,
}

export function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Tagline */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <Image 
                src="/logo.jpeg" 
                alt="Agency.io Logo" 
                width={32} 
                height={32} 
                className="rounded-lg object-cover"
              />
              <span className="text-lg font-bold text-slate-900">{footerContent.logo}</span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">{footerContent.tagline}</p>
          </div>

          {/* Navigation Sections */}
          {footerContent.sections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="font-semibold text-slate-900">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-slate-900">{footerContent.newsletter.title}</h3>
            <p className="text-sm text-slate-600">{footerContent.newsletter.description}</p>
            <div className="flex gap-2">
              <Input type="email" placeholder={footerContent.newsletter.placeholder} className="flex-1" />
              <Button size="icon" className="bg-slate-900 hover:bg-slate-800 text-white rounded-lg flex-shrink-0">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-600">{footerContent.copyright}</p>
          <div className="flex items-center gap-4">
            {footerContent.socialLinks.map((social) => {
              const Icon = socialIconMap[social.platform as keyof typeof socialIconMap]
              return (
                <a
                  key={social.platform}
                  href={social.href}
                  className="text-slate-400 hover:text-slate-900 transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
