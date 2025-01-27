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
        <div className="containerJavions">
            <h1 className="titleJavions">Javions (Java)</h1>
            <div>
            <h2 className="subtitleJavions">Overview</h2>
            <p className="textJavions">{overview}</p>
            </div>            
            <div className="textJavions">
            <h2 className="subtitleJavions">Of note:</h2>
            <ul className="listJavions">
                <li><strong>Map</strong>: coded from scratch using openStreetMap tiles for each level of zoom, with caching for optimization</li>
                <li><strong>JavaFX</strong>: for the Graphical User Interface (from buttons to the window to the table)</li>
            </ul>
            </div>
            <p className="textJavions">In the following image, you can see that the path of the aircraft is colored depending on its altitude:</p>
            <div className="image-containerJavions">
            <Image
                src={javionsPic}
                alt="Project Image"
                className="imageJavions"
            />
            </div>
            <p className="textJavions">Here is a demo video of the project in action:</p>
            <div className="video-containerJavions">
            <video
                className="videoJavions"
                src="/video/JavionsDemo.mp4"
                muted
                controls
            />
            </div>
            <p className="music-creditJavions">Music: Beatles-Blackbird instrumental</p>
            <div className="button-containerJavions">
            <button 
                onClick={() => router.push('/projects')}
                className="buttonJavions"
            >
                ← Back to Projects
            </button>
            <button 
                onClick={() => router.push('/projects/ImgFS')}
                className="buttonJavions"
            >
                Next Project (ImgFS) →
            </button>
            </div>
        </div>
    );
};

export default ProjectDescription;