import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { projectsData } from "@/data/projects";
import { Button } from "@/components/ui/button";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
          <Button onClick={() => navigate("/#projects")}>
            Back to Projects
          </Button>
        </motion.div>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border"
      >
        <div className="container mx-auto max-w-4xl px-6 py-4">
          <button
            onClick={() => navigate("/#projects")}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </button>
        </div>
      </motion.div>

      <div className="container mx-auto max-w-4xl px-6 py-12 space-y-16">
        {/* Hero Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <motion.div variants={itemVariants} className="space-y-3">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground">{project.subtitle}</p>
          </motion.div>

          {/* Overview Cards */}
          <motion.div
            variants={itemVariants}
            className="grid sm:grid-cols-3 gap-4 mt-8"
          >
            {project.type && (
              <motion.div
                whileHover={{ y: -5 }}
                className="card-glass p-4 rounded-lg border border-primary/20"
              >
                <p className="text-xs font-semibold text-primary uppercase tracking-wide">
                  Project Type
                </p>
                <p className="text-lg font-semibold text-foreground mt-2">
                  {project.type}
                </p>
              </motion.div>
            )}
            {project.duration && (
              <motion.div
                whileHover={{ y: -5 }}
                className="card-glass p-4 rounded-lg border border-primary/20"
              >
                <p className="text-xs font-semibold text-primary uppercase tracking-wide">
                  Duration
                </p>
                <p className="text-lg font-semibold text-foreground mt-2">
                  {project.duration}
                </p>
              </motion.div>
            )}
            {project.role && (
              <motion.div
                whileHover={{ y: -5 }}
                className="card-glass p-4 rounded-lg border border-primary/20"
              >
                <p className="text-xs font-semibold text-primary uppercase tracking-wide">
                  Role
                </p>
                <p className="text-lg font-semibold text-foreground mt-2">
                  {project.role}
                </p>
              </motion.div>
            )}
          </motion.div>
        </motion.section>

        {/* Overview */}
        {project.overview && (
          <motion.section
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <motion.h2 variants={itemVariants} className="text-3xl font-bold">
              Overview
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              {project.overview}
            </motion.p>
          </motion.section>
        )}

        {/* Problem Statement */}
        {project.problemStatement && (
          <motion.section
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <motion.h2 variants={itemVariants} className="text-3xl font-bold">
              🎯 Problem Statement
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground leading-relaxed bg-destructive/5 p-6 rounded-lg border border-destructive/20"
            >
              {project.problemStatement}
            </motion.p>
          </motion.section>
        )}

        {/* Target Users */}
        {project.targetUsers && project.targetUsers.length > 0 && (
          <motion.section
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <motion.h2 variants={itemVariants} className="text-3xl font-bold">
              👥 Target Users
            </motion.h2>
            <motion.div
              variants={itemVariants}
              className="grid sm:grid-cols-2 gap-3"
            >
              {project.targetUsers.map((user, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-3 bg-primary/5 p-4 rounded-lg border border-primary/20"
                >
                  <span className="text-primary text-xl">•</span>
                  <span className="text-muted-foreground">{user}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>
        )}

        {/* Research Insights */}
        {project.researchInsights && project.researchInsights.length > 0 && (
          <motion.section
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <motion.h2 variants={itemVariants} className="text-3xl font-bold">
              🔍 Research Insights
            </motion.h2>
            <motion.div
              variants={itemVariants}
              className="grid sm:grid-cols-2 gap-3"
            >
              {project.researchInsights.map((insight, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-3 bg-blue/5 p-4 rounded-lg border border-blue-200/20"
                >
                  <span className="text-blue-500 text-xl">✓</span>
                  <span className="text-muted-foreground">{insight}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>
        )}

        {/* Solution */}
        {project.solution && project.solution.length > 0 && (
          <motion.section
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <motion.h2 variants={itemVariants} className="text-3xl font-bold">
              💡 Solution
            </motion.h2>
            <motion.div variants={itemVariants} className="space-y-2">
              {project.solution.map((sol, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-muted-foreground"
                >
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  {sol}
                </motion.div>
              ))}
            </motion.div>
          </motion.section>
        )}

        {/* Design System */}
        {project.designSystem && (
          <motion.section
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.h2 variants={itemVariants} className="text-3xl font-bold">
              🎨 Design System
            </motion.h2>

            {/* Colors */}
            {project.designSystem.colors && (
              <motion.div variants={itemVariants} className="space-y-4">
                <h3 className="text-xl font-semibold">Colors</h3>
                <div className="grid sm:grid-cols-3 gap-4">
                  {project.designSystem.colors.map((color, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className="rounded-lg overflow-hidden border border-border"
                    >
                      <div
                        className="w-full h-24"
                        style={{ backgroundColor: color.hex }}
                      />
                      <div className="p-3 bg-card">
                        <p className="font-semibold text-sm">{color.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {color.hex}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {color.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Typography */}
            {project.designSystem.typography && (
              <motion.div variants={itemVariants} className="space-y-3">
                <h3 className="text-xl font-semibold">Typography</h3>
                {project.designSystem.typography.map((typo, i) => (
                  <p key={i} className="text-muted-foreground flex items-start gap-2">
                    <span className="text-primary">•</span> {typo}
                  </p>
                ))}
              </motion.div>
            )}
          </motion.section>
        )}

        {/* Features */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold">
            🧩 Key Features
          </motion.h2>
          <motion.div variants={itemVariants} className="grid sm:grid-cols-2 gap-3">
            {project.features.map((feature, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                className="card-glass p-4 rounded-lg border border-primary/20 hover:border-primary/40 transition-colors"
              >
                <p className="text-muted-foreground text-sm flex items-start gap-2">
                  <span className="text-primary mt-1">→</span>
                  {feature}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Tech Stack */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold">
            Tech Stack
          </motion.h2>
          <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
            {project.tech.map((tech, i) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.05 }}
                className="text-xs font-mono bg-primary/10 text-primary px-3 py-1.5 rounded-md border border-primary/20 hover:border-primary/50 transition-colors"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.section>

        {/* Screens */}
        {project.screens && project.screens.length > 0 && (
          <motion.section
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <motion.h2 variants={itemVariants} className="text-3xl font-bold">
              🖼️ Screens
            </motion.h2>
            <motion.div variants={itemVariants} className="grid sm:grid-cols-2 gap-4">
              {project.screens.map((screen, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="rounded-lg overflow-hidden border border-border bg-card"
                >
                  <div className="w-full h-40 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <span className="text-muted-foreground text-sm">
                      [Screen Preview]
                    </span>
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold">{screen.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {screen.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>
        )}

        {/* Before vs After */}
        {project.beforeVsAfter && project.beforeVsAfter.length > 0 && (
          <motion.section
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <motion.h2 variants={itemVariants} className="text-3xl font-bold">
              🔄 Before vs After
            </motion.h2>
            <motion.div
              variants={itemVariants}
              className="overflow-x-auto rounded-lg border border-border"
            >
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-primary/5">
                    <th className="p-4 text-left font-semibold text-destructive">
                      Before
                    </th>
                    <th className="p-4 text-left font-semibold text-primary">
                      After
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {project.beforeVsAfter.map((item, i) => (
                    <tr key={i} className="border-b border-border hover:bg-primary/5 transition-colors">
                      <td className="p-4 text-muted-foreground">{item.before}</td>
                      <td className="p-4 text-muted-foreground">{item.after}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </motion.section>
        )}

        {/* Outcome */}
        {project.outcome && project.outcome.length > 0 && (
          <motion.section
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <motion.h2 variants={itemVariants} className="text-3xl font-bold">
              📈 Outcome
            </motion.h2>
            <motion.div variants={itemVariants} className="space-y-2">
              {project.outcome.map((out, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-muted-foreground bg-primary/5 p-3 rounded-lg border border-primary/20"
                >
                  <span className="text-primary text-lg">✓</span>
                  {out}
                </motion.div>
              ))}
            </motion.div>
          </motion.section>
        )}

        {/* Learnings */}
        {project.learnings && project.learnings.length > 0 && (
          <motion.section
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4 pb-12"
          >
            <motion.h2 variants={itemVariants} className="text-3xl font-bold">
              🚀 Learnings
            </motion.h2>
            <motion.div variants={itemVariants} className="grid sm:grid-cols-2 gap-3">
              {project.learnings.map((learning, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -4 }}
                  className="bg-gradient-to-br from-primary/10 to-primary/5 p-4 rounded-lg border border-primary/20 hover:border-primary/40 transition-colors"
                >
                  <p className="text-muted-foreground text-sm">{learning}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectDetail;
