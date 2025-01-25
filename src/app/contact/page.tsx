"use client";

import { motion } from "framer-motion";
import Image from 'next/image';
import backgroundImage from '@/assets/images/movietheater.png';
import githubLogo from '@/assets/images/github_logo.png';
import linkedInLogo from '@/assets/images/linkedInLogo.png';

import './Contact.css';

export default function Contact() {
    

    return (
        <motion.div
            className="relative flex h-screen flex-col items-center justify-center space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0 }}
        >
            <Image
                src={backgroundImage}
                alt="Background"
                layout="fill"
                objectFit="cover"
                quality={100}
                className="z-[-1]"
            />
            <div className="absolute top-1/4 flex flex-col items-center space-y-4">
                <h1 className="text-4xl font-bold projected-text">Contact Me</h1>
                <p className="text-lg projected-text">Email: mohamed.mehdaoui@epfl.ch</p>
                <p className="text-lg projected-text flex items-center">
                    <a href="https://www.linkedin.com/in/redamehdaoui/" className="underline flex items-center ml-2">
                        <Image
                            src={linkedInLogo}
                            alt="GitHub Logo"
                            width={20}
                            height={20}
                            className="mr-2"
                        />
                        LinkedIn: linkedin.com/in/redamehdaoui
                    </a>
                </p>
                <p className="text-lg projected-text flex items-center">
                    <a href="https://github.com/RedaMeh" className="underline flex items-center ml-2">
                        <Image
                            src={githubLogo}
                            alt="GitHub Logo"
                            width={20}
                            height={20}
                            className="mr-2"
                        />
                        GitHub: github.com/RedaMeh
                    </a>
                </p>
            
            </div>
            <div className="absolute bottom-4 right-4">
                <button
                    onClick={() => window.location.href = '/'}
                    className="projector-button"
                >
                    <div className="projector-icon" />
                    <span className="ml-2">Go Back Home</span>
                </button>
            </div>
        </motion.div>
    );
}