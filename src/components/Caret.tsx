import { motion } from "framer-motion";

export default function Caret() {
      return (
            <motion.div
                  aria-hidden={true}
                  className="inline-block w-1 h-5 ml-1 bg-primary-400"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 0 }}
                  exit={{ opacity: 1 }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            />
      );
}