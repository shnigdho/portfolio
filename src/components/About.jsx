import { motion } from 'framer-motion';
import { SKILLS } from '../data';

const About = () => {
    return (
        <section id="about" className="section container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'start', padding: '10rem 0' }}>

            <div style={{ position: 'sticky', top: '150px' }}>
                <h2 style={{ fontSize: '1rem', color: 'var(--neon-blue)', marginBottom: '2rem', letterSpacing: '2px' }}>WHO IS MASON?</h2>
                <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', lineHeight: 1.1, fontWeight: 700, color: 'white' }}
                >
                    <span style={{ color: 'var(--text-secondary)' }}>A DATA SCIENTIST</span><br />
                    WHO DREAMS IN <span style={{ color: 'var(--neon-purple)', textShadow: '0 0 20px var(--neon-purple)' }}>NEON.</span>
                </motion.h3>
            </div>

            <div className="glass-panel" style={{ padding: '3rem', borderRadius: '24px' }}>
                <div style={{ marginBottom: '4rem' }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: 'var(--neon-pink)' }}>TECHNICAL ARSENAL</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                        {SKILLS.map(skill => (
                            <span key={skill} style={{
                                background: 'rgba(255,255,255,0.05)',
                                padding: '0.8rem 1.5rem',
                                borderRadius: '50px',
                                color: 'white',
                                border: '1px solid rgba(255,255,255,0.1)'
                            }}>
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: 'var(--neon-pink)' }}>PHILOSOPHY</h3>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                        I don't just analyze data; I visualize its soul. Every model has a story, and every dashboard is a stage.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
