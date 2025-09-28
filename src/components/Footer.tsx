import { motion } from "motion/react";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 py-12">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="mb-8">
            <h3 className="mb-4">Let&apos;s Build Something Amazing Together</h3>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Ready to bring your ideas to life? I&apos;m always excited to work on new projects 
              and collaborate with talented people.
            </p>
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
              <Button onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}>
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
            </motion.div>
          </div>

          <div className="flex items-center justify-center gap-6 mb-8">
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
              <Button variant="ghost" size="sm">
                <Github className="w-5 h-5" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
              <Button variant="ghost" size="sm">
                <Linkedin className="w-5 h-5" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
              <Button variant="ghost" size="sm">
                <Mail className="w-5 h-5" />
              </Button>
            </motion.div>
          </div>

          <div className="pt-8 border-t border-border">
            <p className="text-muted-foreground flex items-center justify-center gap-1">
              © {currentYear} Alex Johnson. Made with{' '}
              <Heart className="w-4 h-4 text-red-500 fill-current" />{' '}
              and lots of coffee.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}