import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SLIDER_IMAGES } from '../data';

const Hero = () => {
    const [currentImage, setCurrentImage] = useState(0);

    // Background Image Slider Logic
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % SLIDER_IMAGES.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="home" style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            overflow: 'hidden',
            position: 'relative',
        }}>

            {/* Background Slider */}
            <div style={{ position: 'absolute', inset: 0, zIndex: -1 }}>
                <AnimatePresence mode="wait">
                    <motion.img
                        key={currentImage}
                        src={SLIDER_IMAGES[currentImage]}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 0.4, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5 }}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(50%) contrast(1.2)' }}
                    />
                </AnimatePresence>
                <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, transparent 0%, var(--bg-primary) 100%)' }}></div>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, var(--bg-primary) 0%, transparent 20%, transparent 80%, var(--bg-primary) 100%)' }}></div>
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                        color: 'var(--neon-blue)',
                        letterSpacing: '0.2rem',
                        marginBottom: '1rem',
                        fontWeight: 600,
                        textShadow: '0 0 10px rgba(0, 234, 255, 0.5)'
                    }}
                >
                    WELCOME TO THE FUTURE
                </motion.p>
            </div>

            {/* Massive Horizontal Marquee */}
            <div style={{ transform: 'rotate(-2deg)', margin: '2rem 0' }}>
                <div className="marquee-container">
                    <motion.div
                        className="marquee-content"
                        animate={{ x: [0, -1000] }}
                        transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
                        style={{ display: 'flex', gap: '2rem' }}
                    >
                        {Array(6).fill("DATA SCIENTIST • CREATIVE DEV • ").map((text, i) => (
                            <span key={i} style={{
                                fontSize: 'clamp(4rem, 12vw, 10rem)',
                                fontWeight: 800,
                                color: 'transparent',
                                WebkitTextStroke: '2px rgba(255,255,255,0.8)',
                                whiteSpace: 'nowrap'
                            }}>
                                {text}
                            </span>
                        ))}
                    </motion.div>
                </div>
                <div className="marquee-container" style={{ marginTop: '-2rem' }}>
                    <motion.div
                        className="marquee-content"
                        animate={{ x: [-1000, 0] }}
                        transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
                        style={{ display: 'flex', gap: '2rem' }}
                    >
                        {Array(6).fill("VISUAL STORYTELLER • ANALYST • ").map((text, i) => (
                            <span key={i} style={{
                                fontSize: 'clamp(4rem, 12vw, 10rem)',
                                fontWeight: 800,
                                color: 'white',
                                opacity: 0.9,
                                whiteSpace: 'nowrap',
                                textShadow: '0 0 30px rgba(176, 38, 255, 0.4)'
                            }}>
                                {text}
                            </span>
                        ))}
                    </motion.div>
                </div>
            </div>

        </section>
    );
};

export default Hero;
