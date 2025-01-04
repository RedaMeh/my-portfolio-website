"use client";

import { motion } from "framer-motion";
import Link from 'next/link';
import tennisImage from '../assets/images/yanBerthemy.jpg';

export default function Home() {
  return (
    <motion.div
      className="flex h-screen flex-col items-center space-y-4 bg-cover bg-center"
      style={{ backgroundImage: `url(${tennisImage.src})` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3 }}
    >
      <h1 className="text-4xl font-bold text-black">Welcome to My Portfolio!</h1>
      
      <div className="p-8 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg">
        Tailwind CSS is up and ready to use!
      </div>

      <Link href="/contact" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-300">
        Contact Me
      </Link>
    </motion.div>
  );
}