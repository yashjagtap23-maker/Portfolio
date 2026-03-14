import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import SectionHeading from "./SectionHeading";

const contactItems = [
  { icon: Phone, label: "7756887852", href: "tel:7756887852" },
  { icon: Mail, label: "yash.jagtap23@spit.ac.in", href: "mailto:yash.jagtap23@spit.ac.in" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/" },
  { icon: Github, label: "GitHub", href: "https://github.com/" },
];

const Contact = () => (
  <section id="contact" className="py-24 px-6">
    <div className="container mx-auto max-w-4xl">
      <SectionHeading icon={Mail} title="Contact" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="card-glass rounded-xl p-8"
      >
        <p className="text-muted-foreground mb-6">
          Feel free to reach out — I'm always open to new opportunities and collaborations.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {contactItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-lg bg-muted/50 hover:bg-primary/10 hover:border-primary/30 border border-transparent transition-all duration-200 group"
            >
              <item.icon size={18} className="text-primary" />
              <span className="text-sm text-foreground group-hover:text-primary transition-colors">
                {item.label}
              </span>
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default Contact;
