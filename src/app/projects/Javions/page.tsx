"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import javionsPic from '@/assets/images/JavionsPic.png';
import './Javions.css';

const ProjectDescription: React.FC = () => {
    const [overview, setOverview] = useState<string>('');
    const router = useRouter();
    
    useEffect(() => {
        const audio = new Audio('/audio/blackbird.mp3');
        audio.volume = 0.1; 
        const playPromise = audio.play();
        audio.loop = true;

        playPromise.catch(error => {
            console.error('Error playing audio:', error);
        });

        return () => {
            audio.pause();
            audio.currentTime = 0;
        };
    }, []);

    useEffect(() => {
        fetch('/text/Javions_Overview.txt')
            .then(response => response.text())
            .then(text => setOverview(text))
            .catch(error => console.error('Error fetching description:', error));
        
    }, []);

    return (
        <div className="container">
            <h1 className="title">Javions (Java)</h1>
            <div>
            <h2 className="subtitle">Overview</h2>
            <p className="text">{overview}</p>
            </div>            
            <div className="text">
            <h2 className="subtitle">Of note:</h2>
            <ul className="list">
                <li><strong>Map</strong>: coded from scratch using openStreetMap tiles for each level of zoom, with caching for optimization</li>
                <li><strong>JavaFX</strong>: for the Graphical User Interface (from buttons to the window to the table)</li>
            </ul>
            </div>
            <p className="text">In the following image, you can see that the path of the aircraft is colored depending on its altitude:</p>
            <div className="image-container">
            <Image
                src={javionsPic}
                alt="Project Image"
                className="image"
            />
            </div>
            <p className="text">Here is a demo video of the project in action:</p>
            <div className="video-container">
            <video
                className="video"
                src="/videos/JavionsDemo.mp4"
                muted
                controls
            />
            </div>
            <p className="music-credit">Music: Beatles-Blackbird instrumental</p>
            <div className="button-container">
            <button 
                onClick={() => router.push('/projects')}
                className="button"
            >
                ← Back to Projects
            </button>
            <button 
                onClick={() => router.push('/projects/ImgFS')}
                className="button"
            >
                Next Project (ImgFS) →
            </button>
            </div>
        </div>
    );
};

export default ProjectDescription;