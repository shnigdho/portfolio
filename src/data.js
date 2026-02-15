import { Home, User, Briefcase, Mail, Camera, Code, Cpu, Globe } from 'lucide-react';

export const NAV_ITEMS = [
    { name: 'Home', icon: Home, href: '#home' },
    { name: 'About', icon: User, href: '#about' },
    { name: 'Work', icon: Briefcase, href: '#projects' },
    { name: 'Process', icon: Cpu, href: '#process' },
    { name: 'Gallery', icon: Camera, href: '#gallery' },
    { name: 'Contact', icon: Mail, href: '#contact' },
];

export const SKILLS = [
    "Python (Scientific Stack)", "TensorFlow / PyTorch", "SQL & NoSQL",
    "Data Visualization (D3.js)", "Cloud Architecture (AWS)", "React & Frontend"
];

export const PROJECTS = [
    {
        title: "Eco-Classifier",
        role: "Computer Vision",
        year: "2024",
        link: "#",
        image: "https://images.unsplash.com/photo-1542601906990-24d4c16419d9?q=80&w=1000&auto=format&fit=crop",
        description: "Real-time waste classification using CNNs deployed on edge devices for smart recycling bins."
    },
    {
        title: "Market Prophet",
        role: "Predictive Analytics",
        year: "2023",
        link: "#",
        image: "https://images.unsplash.com/photo-1611974765270-ca1258634369?q=80&w=1000&auto=format&fit=crop",
        description: "LSTM-based stock price forecasting model with 85% directional accuracy on test data."
    },
    {
        title: "Churn Dash",
        role: "Data Viz",
        year: "2023",
        link: "#",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
        description: "Interactive dashboard for telecom customer retention analysis using Tableau and SQL."
    }
];

export const PROCESS_STEPS = [
    {
        id: 1,
        title: "Discovery & Data Mining",
        description: "Every great insight starts with a question. I dig deep into raw datasets, cleaning and structuring chaos into clarity.",
        tags: ["ETL Pipelines", "Data Cleaning", "Hypothesis Testing"],
        image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "Modeling & Simulation",
        description: "Applying advanced algorithms to find patterns. Whether it's predictive modeling or natural language processing, this is where the magic happens.",
        tags: ["Machine Learning", "Neural Networks", "Statistical Analysis"],
        image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Deployment & Visualization",
        description: "Models are useless in a vacuum. I build interactive dashboards and deploy scalable APIs to put insights into the hands of decision-makers.",
        tags: ["React Dashboards", "FastAPI", "Docker"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
    }
];

export const SLIDER_IMAGES = [
    "https://images.unsplash.com/photo-1492691557740-9d0e0b309d51?q=80&w=1000&auto=format&fit=crop", // Mountains
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1000&auto=format&fit=crop", // Nature
    "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=1000&auto=format&fit=crop", // Forest
    "https://images.unsplash.com/photo-1501854140884-074bf86ed91c?q=80&w=1000&auto=format&fit=crop", // Sky
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1000&auto=format&fit=crop"  // Stars
];
