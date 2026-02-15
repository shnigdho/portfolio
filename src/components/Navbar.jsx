import { motion } from 'framer-motion';
import { NAV_ITEMS } from '../data';

const Navbar = () => {
    return (
        <motion.nav
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            style={{
                position: 'fixed',
                bottom: '2rem',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 100,
                display: 'flex',
                gap: '1rem',
                padding: '0.8rem 1.5rem',
                borderRadius: '50px',
                background: 'rgba(5, 5, 17, 0.6)',
                backdropFilter: 'blur(15px)',
                border: '1px solid var(--neon-purple)',
                boxShadow: '0 0 20px rgba(176, 38, 255, 0.3)'
            }}
        >
            {NAV_ITEMS.map((item) => (
                <a
                    key={item.name}
                    href={item.href}
                    style={{
                        color: 'var(--text-primary)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '0.5rem',
                        borderRadius: '50%',
                        transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'var(--neon-blue)';
                        e.currentTarget.style.transform = 'scale(1.1)';
                        e.currentTarget.style.boxShadow = '0 0 10px var(--neon-blue)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'var(--text-primary)';
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.boxShadow = 'none';
                    }}
                >
                    <item.icon size={20} />
                </a>
            ))}
        </motion.nav>
    );
};

export default Navbar;
