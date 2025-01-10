"use client";

import { motion } from "framer-motion";
import Link from 'next/link';
import './Home.css';
import { MouseEvent } from "react";

export default function Home() {
  
  function playTransitionVideo(href: string) {
    const videoElement = document.createElement('video');
    videoElement.src = '/videos/CompletedServe.mp4'; // Path to your transition video
    videoElement.className = 'absolute top-0 left-0 w-full h-full object-cover';
    videoElement.autoplay = true;
    videoElement.muted = true;
    videoElement.onended = () => {
      window.location.href = href;
    };
    document.body.appendChild(videoElement);
  }

  function handleLinkClick(e: MouseEvent<HTMLAnchorElement>, href: string): void {
    e.preventDefault();
    playTransitionVideo(href);
  }

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
        transition={{ duration: 10 }}
      >
      <motion.h1
        className="text-6xl font-bold mt-8"
        initial={{ color: '#B22222' }}
        animate={{ color: ['#B22222', '#E37222'] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
        style={{ fontFamily: 'Roland Garros' }}
      >
        Welcome to my portfolio!
      </motion.h1>
        
        <Link 
          href="/projects" 
          className="mt-8 px-8 py-4 text-4xl font-bold text-black rounded-lg transition duration-300 transform hover:scale-105 hover:bg-gradient-to-r hover:from-[#E37222] hover:to-[#B22222] hover:text-[#FF9999] hover:shadow-lg hover:shadow-red-500" 
          onClick={(e) => handleLinkClick(e, '/projects')}
          style={{ fontFamily: 'Roland Garros' }}
        >
          Projects
        </Link>
        <Link 
          href="/contact" 
          className="mt-8 px-8 py-4 text-4xl font-bold text-black rounded-lg transition duration-300 transform hover:scale-105 hover:bg-gradient-to-r hover:from-[#E37222] hover:to-[#B22222] hover:text-[#FF9999] hover:shadow-lg hover:shadow-red-500" 
          onClick={(e) => handleLinkClick(e, '/contact')}
          style={{ fontFamily: 'Roland Garros' }}
        >
          Contact Me
        </Link>
      </motion.div>
    </div>
  );
}
