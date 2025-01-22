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
        animate={{ color: ['#B22222', '#1C0000'] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
        style={{ fontFamily: 'Century gothic' }}
      >
        Welcome to my portfolio!
      </motion.h1>
        <button
          className="mt-8 px-8 py-4 text-4xl font-bold text-[#1C0000] rounded-lg transition duration-300 transform hover:scale-105 hover:bg-gradient-to-r hover:from-[#E37222] hover:to-[#B22222] hover:text-[#FF9999] hover:shadow-lg hover:shadow-red-500"
          onClick={() => {
            const modal = document.createElement('div');
            modal.className = 'fixed inset-0 flex items-center justify-center bg-black bg-opacity-50';
            modal.innerHTML = `
              <div class="bg-[#1C0000] rounded-lg p-8 max-w-lg mx-auto text-center">
                <h2 class="text-2xl text-[#FF9999] font-bold mb-4" style="font-family: 'Century gothic';">Welcome!</h2>
                <p class="text-lg mb-4 text-[#FF9999]" style="font-family: 'Century gothic';">Hello there, thanks for visiting! This website is a little glimpse of me and my hobbies. You already saw tennis back there, and I have more in store in the other pages. That includes my enjoyment of playing the guitar (the songs you will be hearing in the background are my favorite ones to play) and my love for movies. </p>
                <button class="mt-4 px-4 py-2 text-lg font-bold text-[#1C0000] bg-[#B22222] rounded-lg transition duration-300 transform hover:scale-105" style="font-family: 'Century gothic';">Close</button>
              </div>
            `;
            modal.querySelector('button')?.addEventListener('click', () => {
              document.body.removeChild(modal);
            });
            document.body.appendChild(modal);
          }}
          style={{ fontFamily: 'Century gothic' }}
        >
          Introduction
        </button>
        <Link 
          href="/projects" 
          className="mt-8 px-8 py-4 text-4xl font-bold text-[#1C0000] rounded-lg transition duration-300 transform hover:scale-105 hover:bg-gradient-to-r hover:from-[#E37222] hover:to-[#B22222] hover:text-[#FF9999] hover:shadow-lg hover:shadow-red-500" 
          onClick={(e) => handleLinkClick(e, '/projects')}
          style={{ fontFamily: 'Century gothic' }}
        >
          Projects
        </Link>
        <Link 
          href="/contact" 
          className="mt-8 px-8 py-4 text-4xl font-bold text-[#1C0000] rounded-lg transition duration-300 transform hover:scale-105 hover:bg-gradient-to-r hover:from-[#E37222] hover:to-[#B22222] hover:text-[#FF9999] hover:shadow-lg hover:shadow-red-500" 
          onClick={(e) => handleLinkClick(e, '/contact')}
          style={{ fontFamily: 'Century gothic' }}
        >
          Contact Me
        </Link>
        <Link 
          href="/about" 
          className="mt-8 px-8 py-4 text-4xl font-bold text-[#1C0000] rounded-lg transition duration-300 transform hover:scale-105 hover:bg-gradient-to-r hover:from-[#E37222] hover:to-[#B22222] hover:text-[#FF9999] hover:shadow-lg hover:shadow-red-500" 
          onClick={(e) => handleLinkClick(e, '/about')}
          style={{ fontFamily: 'Century gothic' }}
        >
          About Me
        </Link>
        <Link 
          href="https://www.pexels.com/@cottonbro/" 
          className="absolute bottom-4 left-4 px-4 py-2 text-xl font-bold text-[#1C0000] rounded-lg transition duration-300 transform hover:scale-105 hover:bg-gradient-to-r hover:from-[#E37222] hover:to-[#B22222] hover:text-[#FF9999] hover:shadow-lg hover:shadow-red-500" 
          style={{ fontFamily: 'Century gothic' }}
        >
          Video Credit: Cottonbro
        </Link>
      </motion.div>
      
    </div>
  );
}
