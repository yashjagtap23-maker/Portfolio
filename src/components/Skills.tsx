import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import SectionHeading from "./SectionHeading";

const skillCategories = [
  {
    category: "Programming",
    skills: [
      { name: "Java", level: 85 },
      { name: "Python", level: 80 },
      { name: "JavaScript", level: 90 },
      { name: "SQL", level: 75 },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React.js", level: 90 },
      { name: "HTML/CSS", level: 95 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Responsive Design", level: 85 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 80 },
      { name: "JWT Auth", level: 75 },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MongoDB", level: 80 },
      { name: "MySQL", level: 75 },
    ],
  },
  {
    category: "Machine Learning",
    skills: [
      { name: "Scikit-learn", level: 70 },
      { name: "NumPy/Pandas", level: 75 },
      { name: "Matplotlib/Seaborn", level: 70 },
    ],
  },
  {
    category: "Tools & Design",
    skills: [
      { name: "Git/GitHub", level: 85 },
      { name: "Docker", level: 60 },
      { name: "Figma", level: 70 },
    ],
  },
];

const Skills = () => (
  <section id="skills" className="py-24 px-6">
    <div className="container mx-auto max-w-4xl">
      <SectionHeading icon={Code2} title="Skills" />

      <div className="grid md:grid-cols-2 gap-6">
        {skillCategories.map((cat, catIdx) => (
          <motion.div
            key={cat.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: catIdx * 0.08 }}
            className="card-glass rounded-xl p-6"
          >
            <h3 className="text-sm font-mono text-primary mb-4 uppercase tracking-wider">
              {cat.category}
            </h3>
            <div className="space-y-3">
              {cat.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-foreground">{skill.name}</span>
                    <span className="text-muted-foreground font-mono text-xs">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="h-full rounded-full bg-primary/80"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
