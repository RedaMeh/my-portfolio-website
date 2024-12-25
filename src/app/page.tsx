"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      className="flex h-screen flex-col items-center justify-center space-y-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl font-bold">Welcome to My Portfolio!</h1>
      
      <div className="p-8 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg">
        Tailwind CSS is set up and ready to use!
      </div>
    </motion.div>
  );
}
