import { motion } from "framer-motion";

interface Props {
  title: string;
  subtitle?: string;
  prefixText?: string;
  subtitleClassName?: string;
}

const SectionHeading = ({ title, subtitle, prefixText, subtitleClassName }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="text-center mb-12"
  >
    <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-3">
      {title}
    </h2>
    {prefixText && (
      <p className="font-body font-bold text-foreground max-w-3xl mx-auto whitespace-pre-line mb-2">
        {prefixText}
      </p>
    )}
    {subtitle && (
      <p className={`font-body text-muted-foreground max-w-lg mx-auto ${subtitleClassName ?? ""}`}>
        {subtitle}
      </p>
    )}
    <div className="divider-ornament max-w-xs mx-auto mt-4">
      <span className="text-gold text-xl">✦</span>
    </div>
  </motion.div>
);

export default SectionHeading;
