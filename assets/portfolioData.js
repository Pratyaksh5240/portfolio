/**
 * Centralized Portfolio Data
 * Pratyaksh Soni | AI/ML Engineer
 */
window.portfolioData = {
    personalInfo: {
        name: "Pratyaksh Soni",
        role: "AI/ML Engineer",
        subtitle: "Python • Machine Learning • Generative AI • Data Science",
        tagline: "Building intelligent, practical AI systems for real-world problems across healthcare, misinformation detection, cybersecurity, predictive analytics, and intelligent automation.",
        aboutBio: "I'm Pratyaksh Soni, a B.Tech Computer Science (AI & Data Science) student at CGC University Mohali focused on engineering real-world AI/ML systems. From predictive modeling and NLP to generative AI workflows and MLOps deployment, I specialize in turning complex algorithms into robust, production-style applications.",
        location: "Mohali / Chandigarh, India",
        email: "sonipratyaksh29@gmail.com",
        phone: "+91 6230700675",
        github: "https://github.com/Pratyaksh5240",
        linkedin: "https://linkedin.com/in/pratyaksh-soni-614b8a348",
        leetcode: "https://leetcode.com/u/pratyaksh_soni00/",
        resumePdf: "assets/pratyaksh-soni-resume.pdf",
        liveSite: "https://pratyaksh-portfolio-eight.vercel.app/"
    },

    stats: [
        { label: "AI/ML Projects Built", value: "5+", icon: "fa-brain" },
        { label: "DSA / LeetCode Solved", value: "200+", icon: "fa-code" },
        { label: "Hackathons Participated", value: "3+", icon: "fa-trophy" },
        { label: "B.Tech CGPA", value: "8.21", icon: "fa-graduation-cap" }
    ],

    whatIBuild: [
        {
            title: "AI/ML Systems",
            description: "Predictive models, multi-class risk screening classifiers, and intelligent healthcare applications built for high reliability.",
            icon: "fa-brain",
            color: "#00d4ff"
        },
        {
            title: "Generative AI",
            description: "Multimodal AI workflows, LLM-powered conversational assistants, and prompt engineering pipelines.",
            icon: "fa-wand-magic-sparkles",
            color: "#a855f7"
        },
        {
            title: "Data & Analytics",
            description: "Time-series forecasting with Prophet, exploratory data analysis (EDA), feature engineering, and capacity stress metrics.",
            icon: "fa-chart-line",
            color: "#ff6f61"
        },
        {
            title: "AI Deployment",
            description: "Transforming ML models and Python web applications into deployed, scalable products using Streamlit, Next.js, and Vercel.",
            icon: "fa-rocket",
            color: "#00ff88"
        }
    ],

    projects: [
        {
            id: "robodoctor",
            title: "RoboDoctor AI",
            flagship: true,
            badge: "Flagship AI System",
            purpose: "AI-Powered Multimodal Healthcare Assistant & Risk Screening Platform",
            description: "Engineered a production-style healthcare AI system featuring Vital Check ML (Gradient Boosting) trained on 2,000 records across 20 features. Integrates Gemini multimodal AI for skin screening, lab analysis, conversational guidance, and emergency intelligence.",
            tech: ["Next.js", "React", "Python", "FastAPI", "Scikit-learn", "Gemini API", "Firebase", "Vercel"],
            model: "Gradient Boosting Classifier & Cosine-Similarity Recommendation Engine",
            verifiedMetric: "91.50% Accuracy, 91.62% Precision, 91.46% F1-Score (3 Risk Classes)",
            features: [
                "Vital Risk Screening (ML)",
                "Multimodal Skin Analysis",
                "Smart Health Reports",
                "Emergency Intelligence"
            ],
            github: "https://github.com/Pratyaksh5240/robodoctor-ai",
            demo: "https://robodoctor-m2t5awmkx-akshu524s-projects.vercel.app/",
            image: "assets/robodoctor.jpg"
        },
        {
            id: "verilens",
            title: "VeriLens",
            flagship: false,
            badge: "AI Verification",
            purpose: "AI-Powered Misinformation Verification & Credibility Analysis System",
            description: "Developed an AI misinformation verification platform that evaluates news URLs and text claims using source-trust scoring, emotional-tone analysis (DistilRoBERTa), and cross-source verification via NewsAPI and web scraping.",
            tech: ["Python", "NLP", "Transformers", "DistilRoBERTa", "NewsAPI", "TF-IDF", "spaCy", "Streamlit"],
            model: "DistilRoBERTa Emotion Pipeline & Multi-Signal Credibility Scoring",
            verifiedMetric: "Metric available in project evaluation",
            features: [
                "Source Credibility Check",
                "Emotional Tone Analysis",
                "Cross-Source Fact Matching"
            ],
            github: "https://github.com/Pratyaksh5240/verilens-app",
            demo: "https://verilens-app-29.streamlit.app/",
            image: "assets/verilens.jpg"
        },
        {
            id: "fake-detector",
            title: "Fake Social Media Accounts Detector",
            flagship: false,
            badge: "ML Classification",
            purpose: "Machine Learning Binary Classification System for Bot & Fake Account Detection",
            description: "Engineered account-level behavioral features (followers ratio, engagement metrics, profile completeness) using Pandas & StandardScaler, training a Random Forest classifier to identify fake profiles.",
            tech: ["Python", "Scikit-learn", "Random Forest", "Pandas", "NumPy", "StandardScaler", "Streamlit"],
            model: "Random Forest Binary Classifier",
            verifiedMetric: "86.83% Test Accuracy (0.87 Precision, 0.87 Recall, 0.87 F1-Score on 600 samples)",
            features: [
                "Feature Standardization",
                "Real-time Profile Scoring",
                "Behavioral Pattern Analysis"
            ],
            github: "https://github.com/Pratyaksh5240/fake-accounts-detector-advanced-",
            demo: "https://akshu524-fake-accounts-detector-adv-srcaccounts-detector-gab6uk.streamlit.app/",
            image: "assets/fake-detector.jpg"
        },
        {
            id: "uac-analytics",
            title: "UAC Care Load Analytics",
            flagship: false,
            badge: "Healthcare Analytics",
            purpose: "Healthcare Capacity Analytics & Time-Series Load Forecasting Platform",
            description: "Built an end-to-end hospital analytics platform using Prophet and Streamlit to analyze care-load data, predict patient admission trends, and assess ICU capacity stress under peak demand scenarios.",
            tech: ["Python", "Streamlit", "Plotly", "Pandas", "NumPy", "Prophet"],
            model: "Prophet Time-Series Forecasting",
            verifiedMetric: "Metric available in project evaluation",
            features: [
                "Time-Series Forecasting",
                "Capacity Stress Assessment",
                "Scenario-Based Planning"
            ],
            github: "https://github.com/Pratyaksh5240",
            demo: "https://uac-care-load-analytics-webapp.streamlit.app/",
            image: "assets/uac-analytics.jpg"
        },
        {
            id: "churn-prediction",
            title: "Bank Customer Churn Prediction",
            flagship: false,
            badge: "FinTech Predictive ML",
            purpose: "FinTech Customer Retention & Churn Risk Prediction Web Application",
            description: "An interactive predictive analytics application that processes customer demographic and financial metrics to predict churn probability, flag high-risk accounts, and suggest retention strategies.",
            tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Streamlit"],
            model: "Supervised ML Classification",
            verifiedMetric: "Metric available in project evaluation",
            features: [
                "Churn Probability Scoring",
                "Demographic Segmentation",
                "Retention Risk Insights"
            ],
            github: "https://github.com/Pratyaksh5240",
            demo: "https://bankcustomerchurnprediction-webapp.streamlit.app/",
            image: "assets/churn-prediction.jpg"
        }
    ],

    skillCategories: [
        {
            name: "Languages",
            icon: "fa-code",
            skills: ["Python", "C", "SQL", "JavaScript", "HTML5 & CSS3"]
        },
        {
            name: "Machine Learning",
            icon: "fa-brain",
            skills: ["Scikit-learn", "Supervised Learning", "Random Forest", "Feature Engineering", "Model Evaluation & Optimization", "Gradient Boosting"]
        },
        {
            name: "AI & Generative AI",
            icon: "fa-wand-magic-sparkles",
            skills: ["NLP", "Transformers", "Generative AI & LLMs", "DistilRoBERTa", "Computer Vision (CV)", "OpenCV", "Gemini API"]
        },
        {
            name: "Data Science & Analytics",
            icon: "fa-chart-pie",
            skills: ["NumPy", "Pandas", "Matplotlib & Seaborn", "EDA", "Statistics", "Prophet (Time-Series)"]
        },
        {
            name: "Development & Deployment",
            icon: "fa-rocket",
            skills: ["Streamlit", "React", "Next.js", "Node.js", "FastAPI", "Firebase / Firestore", "Vercel"]
        },
        {
            name: "Tools & Platforms",
            icon: "fa-toolbox",
            skills: ["Git & GitHub", "VS Code", "Jupyter Notebook", "NotebookLM", "Canva"]
        }
    ],

    experience: [
        {
            role: "Google Student Ambassador",
            institution: "Google Student Ambassador Program",
            period: "2026",
            description: "Selected as a Google Student Ambassador to lead student-focused technology initiatives, AI workshops, hackathon events, and community engagement."
        },
        {
            role: "AI/ML Intern",
            institution: "Unified Mentor Pvt. Ltd., Haryana",
            period: "June – August 2026",
            description: "Completed a 3-month hands-on internship in AI/ML development, data preprocessing, machine learning model building, and real-world project implementation."
        }
    ],

    achievements: [
        {
            title: "Smart India Hackathon Participant 2025",
            issuer: "CGC University Mohali",
            icon: "fa-trophy",
            link: "assets/certificates/smart-india-hackathon.png"
        },
        {
            title: "Google Student Ambassador 2026",
            issuer: "Google Student Ambassador Program",
            icon: "fa-award",
            link: "assets/certificates/nano-banana-google.png"
        },
        {
            title: "Limca Book of Records Participation",
            issuer: "CGC University Mohali",
            icon: "fa-medal",
            link: "assets/certificates/limca-book-record.jpg"
        },
        {
            title: "Hack-N-Win 3.0 Hackathon Participant",
            issuer: "CGC University Mohali",
            icon: "fa-code-branch",
            link: "assets/certificates/hack-n-win.jpg"
        },
        {
            title: "Escape Da Vinci National Hackathon",
            issuer: "CGC University Mohali",
            icon: "fa-microchip",
            link: "assets/certificates/escape-da-vinci.jpg"
        },
        {
            title: "Infosys Python Fundamentals Certification",
            issuer: "Infosys",
            icon: "fa-certificate",
            link: "assets/certificates/python-certificate.jpg"
        },
        {
            title: "Automation Engineering Workshop",
            issuer: "CGC University Mohali",
            icon: "fa-gears",
            link: "assets/certificates/automation-engineering.png"
        },
        {
            title: "AI Tools & ChatGPT Workshop",
            issuer: "be10x",
            icon: "fa-robot",
            link: "assets/certificates/ai-tools-workshop.png"
        }
    ],

    education: [
        {
            degree: "Bachelor of Technology (B.Tech)",
            field: "Artificial Intelligence & Data Science (CSE)",
            institution: "CGC University Mohali",
            period: "2024 – 2028",
            cgpa: "8.21"
        },
        {
            degree: "Senior Secondary Education (12th Grade)",
            field: "HP Board",
            institution: "Govt (Boys) Sr. Sec. School Nadaun",
            period: "2023",
            percentage: "74.0%"
        },
        {
            degree: "Secondary School Education (10th Grade)",
            field: "HP Board",
            institution: "Govt (Boys) Sr. Sec. School Nadaun",
            period: "2021",
            percentage: "84.0%"
        }
    ],

    featuredRepos: [
        {
            name: "RoboDoctor AI",
            description: "Multimodal AI Healthcare Assistant platform with Vital Check ML risk screening & Gemini API.",
            url: "https://github.com/Pratyaksh5240/robodoctor-ai",
            language: "TypeScript / Python"
        },
        {
            name: "VeriLens",
            description: "AI-assisted misinformation verification system combining DistilRoBERTa emotion analysis & NewsAPI.",
            url: "https://github.com/Pratyaksh5240/verilens-app",
            language: "Python / Streamlit"
        },
        {
            name: "Fake Social Media Accounts Detector",
            description: "Machine learning classifier using Random Forest to detect suspicious social media profiles.",
            url: "https://github.com/Pratyaksh5240/fake-accounts-detector-advanced-",
            language: "Python / Scikit-learn"
        },
        {
            name: "AI & ML Portfolio",
            description: "Personal AI/ML Engineer portfolio showcasing real-world projects, datasets, and deployments.",
            url: "https://github.com/Pratyaksh5240/portfolio",
            language: "HTML5 / JavaScript / CSS3"
        }
    ],

    currentlyExploring: [
        "Advanced Machine Learning",
        "Deep Learning Architecture",
        "LLM Applications & Fine-Tuning",
        "Autonomous AI Agents",
        "MLOps & Production Model Serving"
    ]
};
