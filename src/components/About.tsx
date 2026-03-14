import { motion } from "framer-motion";
import { User } from "lucide-react";
import SectionHeading from "./SectionHeading";

const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading icon={User} title="About Me" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card-glass rounded-xl p-8 md:p-10"
        >
          <p className="text-secondary-foreground leading-relaxed text-lg">
            I am a Computer Science student at{" "}
            <span className="text-primary font-medium">Sardar Patel Institute of Technology</span>, Mumbai,
            pursuing a B.Tech in Computer Science and Engineering with a minor in UI/UX from Pearl Academy.
            I enjoy building full-stack applications, exploring machine learning, and designing intuitive user experiences.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
