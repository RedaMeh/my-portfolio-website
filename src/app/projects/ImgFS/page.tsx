"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import './ImgFS.css';

const ProjectsPage: React.FC = () => {
    const [overview, setOverview] = useState<string>('');
    const [playbackRate, setPlaybackRate] = useState<number>(1);
    const router = useRouter();
    
    useEffect(() => {
        const audio = new Audio('/audio/Weezer.mp3');
        audio.volume = 0.05; 
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
        fetch('/text/ImgFS_Overview.txt')
            .then(response => response.text())
            .then(text => setOverview(text))
            .catch(error => console.error('Error fetching description:', error));
        
    }, []);

    const handlePlaybackRateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const rate = parseFloat(event.target.value);
        setPlaybackRate(rate);
    };

    return (
        <div className="containerImgFS">
            <h1 className="titleImgFS">Image-oriented File System (C)</h1>

            <div>
                <h2 className="subtitleImgFS">Overview</h2>
                <p>{overview}</p>
            </div>
            <div>
                <h2 className="subtitleImgFS">Libraries used</h2>
                <ul className="listImgFS">
                    <li>Standard C libraries</li>
                    <li><strong>openssl/sha.h</strong>: for hashing and deduplication</li>
                    <li><strong>libvips</strong>: for image processing and resizing</li>
                    <li><strong>POSIX Sockets API (sys/socket.h)</strong>: for network communication (client-server)</li>
                    <li><strong>POSIX Threads (pthreads)</strong>: for multi-threading</li>
                </ul>
            </div>
            <div>
                <h2 className="subtitleImgFS centeredImgFS">Project Demo</h2>
                <div className="video-containerImgFS">
                    <video
                        className="videoImgFS"
                        src="https://reda-website-portfolio.s3.us-east-2.amazonaws.com/ImgFS_Demo.mp4"
                        muted
                        controls
                        ref={videoRef => {
                            if (videoRef) {
                                videoRef.playbackRate = playbackRate;
                            }
                        }}
                    />
                </div>
                <p className="music-creditImgFS">Music: Weezer-My Name Is Jonas instrumental</p>
                <div className="select-containerImgFS">
                    <label htmlFor="playbackRate">Playback Speed: </label>
                    <select
                        id="playbackRate"
                        value={playbackRate}
                        onChange={handlePlaybackRateChange}
                        className="selectImgFS"
                    >
                        <option value="0.5">0.5x</option>
                        <option value="1">1x</option>
                        <option value="1.5">1.5x</option>
                        <option value="2">2x</option>
                    </select>
                </div>
            </div>
            <div className="button-containerImgFS">
                <button 
                    onClick={() => router.push('/projects/Javions')}
                    className="buttonImgFS"
                >
                    ← Previous Project (Javions)
                </button>
                <button 
                    onClick={() => router.push('/projects')}
                    className="buttonImgFS"
                >
                    Back to Projects 
                </button>
                <button 
                    onClick={() => router.push('/projects/CleanUp')}
                    className="buttonImgFS"
                >
                    Next Project (CleanUp) →
                </button>
            </div>
        </div>
    );
};

export default ProjectsPage;