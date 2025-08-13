"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }) {
  const pathname = usePathname();

  const variants = {
    hidden: { opacity: 0, y: 20, scale: 0.98, filter: "blur(8px)" },
    enter:  { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
    exit:   { opacity: 0, y: -10, scale: 0.98, filter: "blur(8px)" },
  };
  

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}               
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.30, ease: "easeOut" }}
        style={{ minHeight: "100%" }} 
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
