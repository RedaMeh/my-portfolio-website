"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import './Projects.css';
import Link from 'next/link';

const ProjectsPage: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<string | null>(null);
    const router = useRouter();

    const handleOptionClick = (project: string) => {
        setSelectedProject(project);
        router.prefetch(`/projects/${project}`);
    };

    const handleVideoEnd = () => {
        if (selectedProject) {
            router.push(`/projects/${selectedProject}`);
        }
    };

    const handleGoBackHome = () => {
        router.push('/');
    };

    return (
        <div className="projects-page">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="/videos/Guitar.mp4"
                autoPlay={!!selectedProject}
                muted
                onEnded={handleVideoEnd}
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
        </div>
        
    );
};

export default ProjectsPage;