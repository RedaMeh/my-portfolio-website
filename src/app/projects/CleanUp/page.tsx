"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import './CleanUp.css';

const CleanUpPage: React.FC = () => {
    const [overview, setOverview] = useState<string>('');
    const router = useRouter();

    useEffect(() => {
        fetch('/text/CleanUp_Overview.txt')
            .then(response => response.text())
            .then(text => setOverview(text))
            .catch(error => console.error('Error fetching description:', error));
    }, []);

    return (
        <div className="container">
            <h1 className="title">Clean Up Give Back App (Typescript)</h1>
            <div>
                <h2 className="subtitle">Overview</h2>
                <p className="text">{overview}</p>
            </div>            
            <div className="section">
                <h2 className="subtitle">Libraries used:</h2>
                <ul className="list">
                    <li><strong>React Native</strong>: for building the cross-platform mobile application</li>
                    <li><strong>Stripe</strong>: for handling payments and transactions securely</li>
                    <li><strong>FastAPI</strong>: for backend development, particularly in managing payments</li>
                    <li><strong>Expo</strong>: for quick setup and development in React Native</li>
                    <li><strong>Google Maps API</strong>: for location tracking and mapping</li>
                    <li><strong>Firebase</strong>: for user authentication and cloud-based data storage</li> 
                </ul>
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
            <div className="button-container">
                <button 
                    onClick={() => router.push('/projects/ImgFS')}
                    className="button"
                >
                    ← Previous Project (Javions)
                </button>
                <button 
                    onClick={() => router.push('/projects')}
                    className="button"
                >
                    Back to Projects 
                </button>
                <p className="buttonText">
                    Next Project: coming soon :)
                </p>
            </div>
        </div>
    );
};

export default CleanUpPage;