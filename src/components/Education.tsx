import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import SectionHeading from "./SectionHeading";

const educationData = [
  {
    institution: "Sardar Patel Institute of Technology",
    degree: "B.Tech Computer Science and Engineering",
    period: "2023 – 2027",
  },
  {
    institution: "Pearl Academy",
    degree: "Minor in UI/UX Design",
    period: "2024 – 2027",
  },
  {
    institution: "Vidya Vikas Vidyalay",
    degree: "Class X: 90.60% · Class XII: 81%",
    period: "",
  },
];

const achievements = ["MHT-CET: 99.06%", "JEE Mains: 95.2%"];

const Education = () => (
  <section className="py-24 px-6">
    <div className="container mx-auto max-w-4xl">
      <SectionHeading icon={GraduationCap} title="Education" />

      <div className="space-y-4">
        {educationData.map((item, i) => (
          <motion.div
            key={item.institution}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="card-glass rounded-xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
          >
            <div>
              <h3 className="font-semibold text-foreground">{item.institution}</h3>
              <p className="text-muted-foreground text-sm">{item.degree}</p>
            </div>
            {item.period && (
              <span className="text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-full whitespace-nowrap self-start sm:self-center">
                {item.period}
              </span>
            )}
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="mt-6 flex flex-wrap gap-3"
      >
        {achievements.map((a) => (
          <div key={a} className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-lg text-sm font-mono">
            <Award size={14} />
            {a}
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Education;
