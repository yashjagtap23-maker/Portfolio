import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  title: string;
}

const SectionHeading = ({ icon: Icon, title }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="flex items-center gap-3 mb-10"
  >
    <div className="p-2 rounded-lg bg-primary/10 text-primary">
      <Icon size={20} />
    </div>
    <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
    <div className="flex-1 h-px bg-border ml-4" />
  </motion.div>
);

export default SectionHeading;
