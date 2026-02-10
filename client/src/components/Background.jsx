import React from 'react';
import { motion } from 'framer-motion';

export default function Background() {
    return (
        <div className="background-container">
            <motion.div
                className="blob blob-1"
                animate={{
                    x: [0, 100, -50, 0],
                    y: [0, -50, 100, 0],
                    scale: [1, 1.1, 0.9, 1]
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />
            <motion.div
                className="blob blob-2"
                animate={{
                    x: [0, -70, 50, 0],
                    y: [0, 80, -60, 0],
                    scale: [1, 0.9, 1.1, 1]
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />
            <motion.div
                className="blob blob-3"
                animate={{
                    x: [0, 50, -80, 0],
                    y: [0, -40, 60, 0],
                    rotate: [0, 180, 360]
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />
            <div className="grid-overlay"></div>
        </div>
    );
}
