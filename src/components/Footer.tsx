import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-8 px-6">
    <div className="container mx-auto max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground font-mono">
        © 2025 Yash Jagtap. Built with React & Tailwind.
      </p>
      <div className="flex items-center gap-4">
        {[
          { icon: Github, href: "https://github.com/" },
          { icon: Linkedin, href: "https://linkedin.com/in/" },
          { icon: Mail, href: "mailto:yash.jagtap23@spit.ac.in" },
        ].map((item, i) => (
          <a
            key={i}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <item.icon size={18} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
