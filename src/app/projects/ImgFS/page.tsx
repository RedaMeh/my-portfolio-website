"use client";

import React, { useEffect, useState } from 'react';

const ProjectsPage: React.FC = () => {
    const [overview, setOverview] = useState<string>('');
    const [playbackRate, setPlaybackRate] = useState<number>(1);

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
        <div style={{ backgroundColor: '#333', color: '#fff', minHeight: '100vh', padding: '20px' }}>
            <h1 style={{ fontSize: '3em', color: 'black' }}>Image-oriented File System (C)</h1>

            <div>
                <h2 style={{ fontSize: '2em', color: 'darkgrey', textDecoration: 'underline' }}>Overview</h2>
                <p>{overview}</p>
            </div>
            <div>
                <h2 style={{ fontSize: '2em', color: 'darkgrey', textDecoration: 'underline' }}>Libraries used</h2>
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                    <li>Standard C libraries</li>
                    <li><strong>openssl/sha.h</strong>: for hashing and deduplication</li>
                    <li><strong>libvips</strong>: for image processing and resizing</li>
                    <li><strong>POSIX Sockets API (sys/socket.h)</strong>: for network communication (client-server)</li>
                    <li><strong>POSIX Threads (pthreads)</strong>: for multi-threading</li>
                </ul>

            </div>
            <div>
                <h2 style={{ fontSize: '2em', color: 'darkgrey', textDecoration: 'underline' }}>Project Demo</h2>
                <video
                    style={{ width: '50%', height: 'auto' }}
                    src="/videos/ImgFS_Demo.mp4"
                    muted
                    controls
                    ref={videoRef => {
                        if (videoRef) {
                            videoRef.playbackRate = playbackRate;
                        }
                    }}
                />
                <div>
                    <label htmlFor="playbackRate">Playback Speed: </label>
                    <select
                        id="playbackRate"
                        value={playbackRate}
                        onChange={handlePlaybackRateChange}
                        style={{ backgroundColor: '#333', color: '#fff' }}
                    >
                        <option value="0.5">0.5x</option>
                        <option value="1">1x</option>
                        <option value="1.5">1.5x</option>
                        <option value="2">2x</option>
                    </select>
                </div>
            </div>
            {/* Add your project components or details here */}
        </div>
    );
};

export default ProjectsPage;