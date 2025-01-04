"use client";

import { motion } from "framer-motion";
import Link from 'next/link';
import './Curtain.css';

export default function Home() {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <div className="curtain left"></div>
      <div className="curtain right"></div>
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/videos/ServePrep.mp4" // Use the public path
        autoPlay
        muted
      />
      <motion.div
        className="relative flex h-screen flex-col items-start space-y-8 pl-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 5 }}
      >
        <h1 className="mt-8 text-4xl font-bold text-black">Welcome to My Portfolio!</h1>
        
        <div className="p-8 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg">
          Tailwind CSS is up and ready to use!
        </div>

        <Link href="/contact" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-300">
          Contact Me
        </Link>
      </motion.div>
    </div>
  );
}
