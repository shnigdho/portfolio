import { motion } from 'framer-motion';
import { PROCESS_STEPS } from '../data';

const Process = () => {
    return (
        <section id="process" className="section container" style={{ padding: '8rem 0' }}>
            <div style={{ marginBottom: '6rem', textAlign: 'center' }}>
                <h2 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', color: 'white', textShadow: '0 0 20px rgba(255, 0, 127, 0.5)' }}>THE PROCESS</h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--neon-blue)' }}
                >
                    LOGIC MEETS MAGIC
                </motion.p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8rem' }}>
                {PROCESS_STEPS.map((step, index) => (
                    <div
                        key={step.id}
                        style={{
                            display: 'grid',
                            gridTemplateColumns: index % 2 === 0 ? '1fr 1fr' : '1fr 1fr',
                            gap: '4rem',
                            alignItems: 'center',
                            direction: index % 2 === 0 ? 'ltr' : 'rtl'
                        }}
                    >
                        <motion.div
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="glass-panel"
                            style={{
                                direction: 'ltr',
                                padding: '3rem',
                                borderRadius: '24px',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            <div style={{
                                position: 'absolute',
                                top: '-20px',
                                right: '-20px',
                                fontSize: '8rem',
                                fontWeight: 900,
                                color: 'var(--neon-pink)',
                                opacity: 0.1,
                                zIndex: 0
                            }}>
                                0{step.id}
                            </div>

                            <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', position: 'relative', zIndex: 1 }}>{step.title}</h3>
                            <p style={{ fontSize: '1.1rem', marginBottom: '2rem', position: 'relative', zIndex: 1 }}>{step.description}</p>

                            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', position: 'relative', zIndex: 1 }}>
                                {step.tags.map(tag => (
                                    <span key={tag} style={{
                                        border: '1px solid var(--neon-blue)',
                                        color: 'var(--neon-blue)',
                                        padding: '0.5rem 1rem',
                                        borderRadius: '50px',
                                        fontSize: '0.8rem',
                                        textTransform: 'uppercase',
                                        boxShadow: '0 0 10px rgba(0, 234, 255, 0.2)'
                                    }}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotate: index % 2 === 0 ? 3 : -3 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 0.8 }}
                            style={{
                                height: '400px',
                                borderRadius: '24px',
                                overflow: 'hidden',
                                position: 'relative',
                                border: '2px solid var(--glass-border)'
                            }}
                        >
                            <img
                                src={step.image}
                                alt={step.title}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(45deg, rgba(176, 38, 255, 0.4), transparent)' }}></div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Process;
