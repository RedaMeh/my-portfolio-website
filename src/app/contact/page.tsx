"use client";

import { motion } from "framer-motion";
import './Contact.css';

export default function Contact() {
    return (
        <motion.div
            className="flex h-screen flex-col items-center justify-center space-y-4 animated-background"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0 }}
        >
            <h1 className="text-4xl font-bold text-white">Contact Me</h1>
            
            <div className="p-8 bg-white shadow-md rounded-lg text-center">
                <p className="text-lg text-gray-700">Email: mohamed.mehdaoui@epfl.ch</p>
                <p className="text-lg text-gray-700">LinkedIn: <a href="https://www.linkedin.com/in/redamehdaoui/" className="text-blue-500">linkedin.com/in/redamehdaoui</a></p>
            </div>
        </motion.div>
    );
}