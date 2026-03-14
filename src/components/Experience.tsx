import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import SectionHeading from "./SectionHeading";

const Experience = () => (
  <section id="experience" className="py-24 px-6">
    <div className="container mx-auto max-w-4xl">
      <SectionHeading icon={Briefcase} title="Experience" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="card-glass rounded-xl p-8"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-bold text-foreground">Business Development Intern</h3>
            <p className="text-primary font-mono text-sm">Younity</p>
          </div>
          <span className="text-xs font-mono text-muted-foreground mt-1 sm:mt-0">2 Weeks</span>
        </div>
        <ul className="space-y-2">
          {[
            "Assisted in business growth strategy planning",
            "Promoted and sold online courses",
            "Communicated with clients to increase product awareness",
            "Participated in professional development sessions",
          ].map((item) => (
            <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
              <span className="text-primary mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-primary" />
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  </section>
);

export default Experience;
