import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../data';

const Projects = () => {
    const [hoveredProject, setHoveredProject] = useState(null);

    return (
        <section id="projects" className="section container" style={{ position: 'relative', minHeight: '80vh', paddingBottom: '10rem' }}>

            <div style={{ marginBottom: '4rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '1rem' }}>
                <h2 style={{ fontSize: '1rem', color: 'var(--neon-blue)', letterSpacing: '2px' }}>SELECTED WORKS (0{PROJECTS.length})</h2>
            </div>

            <div style={{ position: 'relative', zIndex: 10 }}>
                {PROJECTS.map((project, index) => (
                    <motion.a
                        href={project.link}
                        key={index}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        onMouseEnter={() => setHoveredProject(index)}
                        onMouseLeave={() => setHoveredProject(null)}
                        className="glass-panel"
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '2fr 1fr 1fr',
                            alignItems: 'center',
                            padding: '2rem',
                            marginBottom: '2rem',
                            borderRadius: '16px',
                            cursor: 'pointer',
                            textDecoration: 'none',
                            transition: 'all 0.3s ease',
                            border: hoveredProject === index ? '1px solid var(--neon-purple)' : '1px solid var(--glass-border)',
                            background: hoveredProject === index ? 'rgba(176, 38, 255, 0.1)' : 'var(--glass-surface)'
                        }}
                    >
                        <h3 style={{
                            fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                            color: 'white',
                            textShadow: hoveredProject === index ? '0 0 10px var(--neon-purple)' : 'none'
                        }}>
                            {project.title}
                        </h3>
                        <span style={{
                            textTransform: 'uppercase',
                            fontSize: '0.9rem',
                            letterSpacing: '1px',
                            color: 'var(--neon-blue)',
                            background: 'rgba(0, 234, 255, 0.1)',
                            padding: '0.5rem 1rem',
                            borderRadius: '50px',
                            justifySelf: 'start'
                        }}>
                            {project.role}
                        </span>
                        <span style={{ color: 'var(--text-secondary)', justifySelf: 'end' }}>{project.year}</span>
                    </motion.a>
                ))}
            </div>

            {/* Neon Hover Reveal Image */}
            <AnimatePresence>
                {hoveredProject !== null && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        animate={{ opacity: 1, scale: 1, rotate: Math.random() * 6 - 3 }}
                        exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        style={{
                            position: 'fixed',
                            top: '20vh',
                            right: '10vw',
                            width: '450px',
                            height: '600px',
                            zIndex: 5,
                            pointerEvents: 'none',
                            overflow: 'hidden',
                            borderRadius: '20px',
                            border: '2px solid var(--neon-blue)',
                            boxShadow: '0 0 50px rgba(0, 234, 255, 0.2)'
                        }}
                    >
                        <img
                            src={PROJECTS[hoveredProject].image}
                            alt="Project Preview"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
