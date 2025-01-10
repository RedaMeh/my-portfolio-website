"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import javionsPic from '@/assets/images/JavionsPic.png';

const ProjectDescription: React.FC = () => {
    useEffect(() => {
        const audio = new Audio('/path/to/your/background-music.mp3');
        audio.play();
        audio.loop = true;

        return () => {
            audio.pause();
            audio.currentTime = 0;
        };
    }, []);

    return (
        <div style={{ backgroundColor: 'beige', padding: '20px' }}>
            <h1 style={{ color: 'black', fontFamily: 'Eurostile' }}>Project Title</h1>
            <p style={{ color: 'black', fontFamily: 'Eurostile' }}>This is a description of the project. It explains what the project is about, the technologies used, and any other relevant information.</p>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                <Image
                    src={javionsPic}
                    alt="Project Image"
                    style={{ width: '50%', height: 'auto' }}
                />
            </div>
            <p style={{ color: 'black', fontFamily: 'Eurostile' }}>Here is a demo video of the project in action:</p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <video
                    style={{ width: '50%', height: 'auto' }}
                    src="/videos/JavionsDemo.mp4"
                    muted
                    controls
                />
            </div>
            
            
        </div>
    );
};

export default ProjectDescription;
