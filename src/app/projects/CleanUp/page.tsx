"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import './CleanUp.css';

const CleanUpPage: React.FC = () => {
    const [overview, setOverview] = useState<string>('');
    const router = useRouter();

    useEffect(() => {
            const audio = new Audio('/audio/Radiohead.mp3');
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
        fetch('/text/CleanUp_Overview.txt')
            .then(response => response.text())
            .then(text => setOverview(text))
            .catch(error => console.error('Error fetching description:', error));
    }, []);

    return (
        <div className="containerCleanUp">
            <h1 className="titleCleanUp">Clean Up Give Back App (Typescript)</h1>
            <div>
                <h2 className="subtitleCleanUp">Overview</h2>
                <p className="textCleanUp">{overview}</p>
            </div>            
            <div className="sectionCleanUp">
                <h2 className="subtitleCleanUp">Libraries used:</h2>
                <ul className="listCleanUp">
                    <li><strong>React Native</strong>: for building the cross-platform mobile application</li>
                    <li><strong>Stripe</strong>: for handling payments and transactions securely</li>
                    <li><strong>FastAPI</strong>: for backend development, particularly in managing payments</li>
                    <li><strong>Expo</strong>: for quick setup and development in React Native</li>
                    <li><strong>Google Maps API</strong>: for location tracking and mapping</li>
                    <li><strong>Firebase</strong>: for user authentication and cloud-based data storage</li> 
                </ul>
            </div>
            <p className="textCleanUp">My demonstration will focus mainly on my contribution to this app (which is all of the session logging functionality, from geolocation to image upload to admin validation). </p>
            <p className="textCleanUp">The app has two sides:</p>
            <p className="textCleanUp">         1. User side: Users can sign up, log in and start/complete sessions. Once a session is completed, all the data surrounding it is stored on Firebase, and is shown in the &quot;logs&quot; tab as pending session (until an admin validates it). The following is how a typical user experience would go:</p>
            <div className="video-containerCleanUp">
                <video
                    className="videoCleanUp"
                    src="/video/UserVideoCleanUp.mp4"
                    muted
                    controls
                />
            </div>
            <p className="textCleanUp">There is a mechanism (removed in the above demo but shown below) which blocks a user&apos;s access to the home (Session) page as long as a payment of a cleaning kit wasn&apos;t completed</p>
            <div className="video-containerCleanUp">
                <video
                    className="videoCleanUp"
                    src="/video/BlockingPageCU.mp4"
                    muted
                    controls
                />
            </div>
            <p className="textCleanUp">For the admin, a separate table in our database was added (called &quot;admins&quot;, the other for storing all users data being called &quot;users&quot;), which simply contained the name of the admin to be entered in the legal Name box when signing up (using the same system as universities to avoid impersonations, e.g. Mohamed Reda Mehdaoui turning into &quot;mrm30&quot;). This choice was made to enable the client to add/remove admin usernames simply by going to the database on Firebase instead of needing access to the code:</p>
            <div className="video-containerCleanUp">
                <video
                    className="videoCleanUp"
                    src="/video/AdminVideoCleanUp.mp4"
                    muted
                    controls
                />
            </div>            
            <p className="music-creditCleanUp">Music: Radiohead-Weird Fishes/Arpeggi instrumental</p>
            <div className="button-containerCleanUp">
                <button 
                    onClick={() => router.push('/projects/ImgFS')}
                    className="buttonCleanUp"
                >
                    ← Previous Project (Javions)
                </button>
                <button 
                    onClick={() => router.push('/projects')}
                    className="buttonCleanUp"
                >
                    Back to Projects 
                </button>
                <p className="buttonTextCleanUp">
                    Next Project: coming soon :)
                </p>
            </div>
        </div>
    );
};

export default CleanUpPage;