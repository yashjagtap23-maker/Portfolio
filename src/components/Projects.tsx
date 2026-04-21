import { motion } from "framer-motion";
import { FolderOpen, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/data/projects";

const Projects = () => {
  const navigate = useNavigate();

  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading icon={FolderOpen} title="Projects" />

        <div className="grid gap-6">
          {projectsData.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              onClick={() => navigate(`/project/${project.id}`)}
              className="card-glass rounded-xl p-8 group hover:border-primary/30 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{project.subtitle}</p>
                </div>
                <motion.div
                  whileHover={{ x: 4, y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <ExternalLink size={18} className="text-muted-foreground group-hover:text-primary transition-colors mt-1" />
                </motion.div>
              </div>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs font-mono bg-primary/10 text-primary px-2.5 py-1 rounded-md">
                    {t}
                  </span>
                ))}
              </div>

              <ul className="grid sm:grid-cols-2 gap-2">
                {project.features.map((f) => (
                  <li key={f} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-primary" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
