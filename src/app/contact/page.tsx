"use client";

import { motion } from "framer-motion";
import Image from 'next/image';
import backgroundImage from '@/assets/images/movietheater.png';
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
                <p className="text-lg projected-text">LinkedIn: <a href="https://www.linkedin.com/in/redamehdaoui/" className="underline">linkedin.com/in/redamehdaoui</a></p>
                <p className="text-lg projected-text">GitHub: <a href="https://github.com/RedaMeh" className="underline">github.com/RedaMeh</a></p>
            </div>

        </motion.div>
    );
}