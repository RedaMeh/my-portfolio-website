"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import './Projects.css';
import Link from 'next/link';
import Image from 'next/image';
import backgroundImage from '@/assets/images/Guitar.png';
import { motion } from 'framer-motion';


const ProjectsPage: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<string | null>(null);
    const router = useRouter();

    const handleOptionClick = (project: string) => {
        setSelectedProject(project);
        router.prefetch(`/projects/${project}`);
        playTransitionVideo(`/projects/${project}`);
    };

    function playTransitionVideo(href: string) {
        const videoElement = document.createElement('video');
        videoElement.src = '/video/Guitar.mp4';
        videoElement.className = 'absolute top-0 left-0 w-full h-full object-cover z-[-1]';
        videoElement.autoplay = true;
        videoElement.muted = true;
        videoElement.onended = () => {
          window.location.href = href;
        };
        document.body.appendChild(videoElement);
      }



    const handleGoBackHome = () => {
        router.push('/');
    };

    return (
        <motion.div className="projects-page">
            
            <Image
                src={backgroundImage}
                alt="Background"
                layout="fill"
                objectFit="cover"
                quality={100}
                className="z-[-1]"
            />
            <div className="top-left-text">Choose a project</div>
            <div>
                <div className={`optionJavions ${selectedProject ? 'selected' : ''}`} onClick={() => handleOptionClick('Javions')}>Javions</div>
                <div className={`optionImgFS ${selectedProject ? 'selected' : ''}`} onClick={() => handleOptionClick('ImgFS')}>ImgFS</div>
                <div className={`optionClean ${selectedProject ? 'selected' : ''}`} onClick={() => handleOptionClick('CleanUp')}>Clean Up App</div>
            </div>
            <Link 
                href="https://www.vecteezy.com/free-videos/guitar" 
                className="credit" 
                >
                Guitar Stock Videos by Vecteezy
            </Link>
            <button className="go-back-home" onClick={handleGoBackHome}>Back Home</button>
        </motion.div>
        
    );
};

export default ProjectsPage;