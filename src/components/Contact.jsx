import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

const Contact = () => {
    return (
        <footer id="contact" style={{
            padding: '0',
            background: 'linear-gradient(to top, var(--neon-purple), transparent)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Animated Background Elements */}
            <div style={{ position: 'absolute', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, var(--neon-blue), transparent)', top: '10%', right: '5%', opacity: 0.1, filter: 'blur(100px)' }}></div>
            <div style={{ position: 'absolute', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, var(--neon-pink), transparent)', bottom: '5%', left: '10%', opacity: 0.1, filter: 'blur(120px)' }}></div>

            <div className="container" style={{ padding: '10rem 0 4rem' }}>
                {/* Split Layout */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', marginBottom: '6rem' }}>

                    {/* Left: Big Statement */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 style={{
                            fontSize: 'clamp(3rem, 7vw, 6rem)',
                            lineHeight: 1,
                            fontWeight: 900,
                            marginBottom: '2rem',
                            background: 'linear-gradient(135deg, white, var(--neon-blue))',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}>
                            LET'S BUILD SOMETHING LEGENDARY
                        </h2>
                        <p style={{ fontSize: '1.3rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                            Whether you're launching a startup or scaling an enterprise, I bring data-driven insights and visual storytelling to every project.
                        </p>
                    </motion.div>

                    {/* Right: Contact Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="glass-panel"
                        style={{
                            padding: '3rem',
                            borderRadius: '30px',
                            background: 'rgba(176, 38, 255, 0.05)',
                            border: '1px solid var(--neon-purple)',
                            boxShadow: '0 0 40px rgba(176, 38, 255, 0.2)'
                        }}
                    >
                        <h3 style={{ fontSize: '1.2rem', color: 'var(--neon-pink)', marginBottom: '2rem', letterSpacing: '3px' }}>
                            GET IN TOUCH
                        </h3>

                        <a
                            href="mailto:mason@example.com"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                fontSize: '1.5rem',
                                fontWeight: 600,
                                color: 'white',
                                marginBottom: '2rem',
                                padding: '1rem',
                                borderRadius: '15px',
                                background: 'rgba(255,255,255,0.03)',
                                transition: 'all 0.3s'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'rgba(0, 234, 255, 0.1)';
                                e.currentTarget.style.transform = 'translateX(10px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                                e.currentTarget.style.transform = 'translateX(0)';
                            }}
                        >
                            <Mail size={30} color="var(--neon-blue)" />
                            <span>ah.sabbir108677@gmail.com</span>
                        </a>

                        <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '2rem' }}>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                                FIND ME ONLINE
                            </p>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                {[
                                    { icon: Linkedin, label: 'LinkedIn', color: 'var(--neon-blue)' },
                                    { icon: Github, label: 'GitHub', color: 'var(--neon-purple)' },
                                    { icon: Twitter, label: 'Twitter', color: 'var(--neon-pink)' }
                                ].map((social) => (
                                    <a
                                        key={social.label}
                                        href="https://www.linkedin.com/in/ahmmedsabbir/"
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            width: '60px',
                                            height: '60px',
                                            borderRadius: '15px',
                                            background: 'rgba(255,255,255,0.03)',
                                            border: `1px solid ${social.color}`,
                                            transition: 'all 0.3s'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.background = social.color;
                                            e.currentTarget.style.transform = 'translateY(-5px)';
                                            e.currentTarget.style.boxShadow = `0 10px 30px ${social.color}40`;
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.boxShadow = 'none';
                                        }}
                                    >
                                        <social.icon size={24} />
                                    </a>

                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingTop: '3rem',
                    borderTop: '1px solid var(--glass-border)',
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)'
                }}>
                    <span>SABBIR AHMMED • All Rights Reserved</span>
                    <span style={{ color: 'var(--neon-blue)' }}>DESIGNED WITH SABBIR AHMMED</span>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
