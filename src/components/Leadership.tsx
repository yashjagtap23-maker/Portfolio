import { motion } from "framer-motion";
import { Users } from "lucide-react";
import SectionHeading from "./SectionHeading";

const Leadership = () => (
  <section id="leadership" className="py-24 px-6">
    <div className="container mx-auto max-w-4xl">
      <SectionHeading icon={Users} title="Leadership" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="card-glass rounded-xl p-8"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-bold text-foreground">Head of Creatives</h3>
            <p className="text-primary font-mono text-sm">SPARK Committee</p>
          </div>
          <span className="text-xs font-mono text-muted-foreground mt-1 sm:mt-0">Aug 2024 – Apr 2025</span>
        </div>
        <ul className="space-y-2">
          {[
            "Led creative team for event promotions",
            "Organized events like Movie Night and Open Mic",
            "Managed social media promotions",
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

export default Leadership;
