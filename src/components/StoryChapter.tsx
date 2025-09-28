import { motion } from "motion/react";
import { ReactNode } from "react";

interface StoryChapterProps {
  chapter: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export function StoryChapter({ chapter, title, subtitle, children, className = "" }: StoryChapterProps) {
  return (
    <section className={`py-20 relative ${className}`}>
      {/* Chapter Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6 mb-16"
      >
        <div className="max-w-4xl mx-auto">
          {/* Chapter Number */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <div className="code-block p-3 inline-block">
              <span className="text-muted-foreground font-mono text-sm">
                // Chapter {chapter}
              </span>
            </div>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-4"
          >
            <h2 className="glitch neon-glow">{title}</h2>
          </motion.div>

          {/* Subtitle */}
          {subtitle && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="max-w-2xl"
            >
              <p className="text-muted-foreground">{subtitle}</p>
            </motion.div>
          )}

          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-8 h-px bg-gradient-to-r from-primary via-accent to-primary origin-left"
          />
        </div>
      </motion.div>

      {/* Chapter Content */}
      <div className="container mx-auto px-6">
        {children}
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-repeat opacity-20"
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='15' text-anchor='middle' fill='%2300ff41' font-size='10' font-family='monospace'%3E${chapter}%3C/text%3E%3C/svg%3E")`,
               backgroundSize: '40px 40px'
             }}
        />
      </div>
    </section>
  );
}