import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SLIDER_IMAGES } from '../data';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

const ImageSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);

    const nextSlide = () => setActiveIndex((prev) => (prev + 1) % SLIDER_IMAGES.length);
    const prevSlide = () => setActiveIndex((prev) => (prev - 1 + SLIDER_IMAGES.length) % SLIDER_IMAGES.length);

    return (
        <section id="gallery" className="section" style={{
            padding: '12rem 0',
            background: 'linear-gradient(to bottom, transparent, rgba(0, 234, 255, 0.03), transparent)',
            position: 'relative'
        }}>
            <div className="container">
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        style={{
                            fontSize: 'clamp(3rem, 6vw, 5rem)',
                            marginBottom: '1rem',
                            background: 'linear-gradient(to right, var(--neon-blue), var(--neon-pink))',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}
                    >
                        VISUAL GALLERY
                    </motion.h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', letterSpacing: '2px' }}>
                        MOMENTS CAPTURED IN TIME
                    </p>
                </div>

                {/* Main Feature Image */}
                <motion.div
                    className="glass-panel"
                    style={{
                        position: 'relative',
                        height: '600px',
                        borderRadius: '30px',
                        overflow: 'hidden',
                        marginBottom: '3rem',
                        border: '2px solid var(--neon-blue)',
                        boxShadow: '0 0 60px rgba(0, 234, 255, 0.3)'
                    }}
                >
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={activeIndex}
                            src={SLIDER_IMAGES[activeIndex]}
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.7 }}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </AnimatePresence>

                    {/* Overlay Gradient */}
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to bottom, transparent 60%, rgba(5, 5, 17, 0.9))'
                    }}></div>

                    {/* Image Counter */}
                    <div style={{
                        position: 'absolute',
                        bottom: '2rem',
                        left: '2rem',
                        fontSize: '5rem',
                        fontWeight: 900,
                        color: 'transparent',
                        WebkitTextStroke: '2px var(--neon-pink)'
                    }}>
                        0{activeIndex + 1}
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        style={{
                            position: 'absolute',
                            left: '2rem',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            background: 'rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid var(--neon-blue)',
                            borderRadius: '50%',
                            width: '60px',
                            height: '60px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            transition: 'all 0.3s'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'var(--neon-blue)';
                            e.currentTarget.style.boxShadow = '0 0 20px var(--neon-blue)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        <ChevronLeft size={30} color="white" />
                    </button>

                    <button
                        onClick={nextSlide}
                        style={{
                            position: 'absolute',
                            right: '2rem',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            background: 'rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid var(--neon-blue)',
                            borderRadius: '50%',
                            width: '60px',
                            height: '60px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            transition: 'all 0.3s'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'var(--neon-blue)';
                            e.currentTarget.style.boxShadow = '0 0 20px var(--neon-blue)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        <ChevronRight size={30} color="white" />
                    </button>
                </motion.div>

                {/* Thumbnail Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(5, 1fr)',
                    gap: '1rem'
                }}>
                    {SLIDER_IMAGES.map((img, index) => (
                        <motion.div
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            whileHover={{ scale: 1.05 }}
                            style={{
                                height: '120px',
                                borderRadius: '15px',
                                overflow: 'hidden',
                                cursor: 'pointer',
                                border: activeIndex === index ? '2px solid var(--neon-pink)' : '2px solid transparent',
                                opacity: activeIndex === index ? 1 : 0.5,
                                transition: 'all 0.3s',
                                boxShadow: activeIndex === index ? '0 0 20px rgba(255, 0, 127, 0.4)' : 'none'
                            }}
                        >
                            <img src={img} alt={`Thumbnail ${index}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImageSlider;
