"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import './Projects.css';

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
            <div className="overlay-text">
                <div className={`optionJavions ${selectedProject ? 'selected' : ''}`} onClick={() => handleOptionClick('Javions')}>Javions</div>
                <div className={`optionImgFS ${selectedProject ? 'selected' : ''}`} onClick={() => handleOptionClick('ImgFS')}>ImgFS</div>
                <div className={`optionClean ${selectedProject ? 'selected' : ''}`} onClick={() => handleOptionClick('Clean Up App')}>Clean Up App</div>
            </div>
        </div>
    );
};

export default ProjectsPage;