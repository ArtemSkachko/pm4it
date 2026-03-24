export interface Language {
    name: string;
    level: string;
}
export interface Interest {
    name: string;
    description: string;
}
export interface SkillItem {
    name: string;
    experience: number;
}
export interface SkillSection {
    section: string;
    items: SkillItem[];
}
export interface Education {
    name: string;
    specialization: string | null;
    qualification: string;
    startDate: number;
    endDate: number;
    additional: boolean;
    description: string[];
    link: string | null;
}
export interface Experience {
    startDate: number | string;
    endDate: number | string | null;
    companyName: string;
    country: string;
    position: string;
    description: {
        summary: string[];
        responsibilities: string[];
        goals: string[];
        atsSummary?: string;
        atsResponsibilities?: string[];
    };
}

export const languages: Language[] = [
    {
        name: 'Ukrainian',
        level: 'C2'
    },
    {
        name: 'English',
        level: 'B2'
    },
    {
        name: 'Russian',
        level: 'C2'
    },
];
export const interests: Interest[] = [
    {
        name: 'Endurance & Discipline (Running)',
        description: 'Consistent long-distance runner with a 15km baseline. For me, running is a moving meditation and a rigorous test of discipline that translates directly into high-pressure project management and long-term professional stamina.'
    },
    {
        name: 'Technological Archeology',
        description: 'I don’t just use technology; I study its evolution. I enjoy deconstructing the "why" and "how" behind transformative innovations, seeking the elegant logic that allows complex systems to benefit humanity.'
    },
    {
        name: 'Growth Systems (Plant Cultivation)',
        description: 'A third-generation cultivator. Growing plants—from family gardens to my current Batumi-based avocado project—teaches me the value of patience, environmental optimization, and the meticulous care required for long-term "organic" growth.'
    },
    {
        name: 'Systemic Design',
        description: 'Obsessed with the four pillars of creation: Optimization, Speed, Simplicity, and Reliability. Whether I am architecting a digital interface or assembling a physical CNC machine, my goal is to strip away the redundant and fortify the essential.'
    },
    {
        name: 'Behavioral Psychology',
        description: 'I study human habits and behavioral patterns to engineer better workflows and user experiences. Applying psychological insights allows me to lead teams of 50+ with empathy and build products that resonate with deep-seated human needs.'
    },
    {
        name: 'Global Perspectives (Travel)',
        description: 'A keen observer of diverse cultures and social structures. While current geopolitical challenges in my home country temporarily limit my movement, I remain a lifelong student of global connectivity and resilient social systems.'
    },
];
export const skills: SkillSection[] = [
    {
        section: 'Management & Operations',
        items: [
            { name: 'Project/Product Management', experience: 13 },
            { name: 'Crisis & Change Management', experience: 9 }, // Объединил с банкротством
            { name: 'Team Leadership (50+ reports)', experience: 10 },
            { name: 'Strategic Planning & ROI', experience: 9 },
            { name: 'Budgeting & P&L Control', experience: 8 },
            { name: 'Stakeholder Management', experience: 7 },
            { name: 'Unit Economics (LTV, ARPU)', experience: 4 },
            { name: 'Business Analysis', experience: 6 },
            { name: 'Negotiation & Conflict Resolution', experience: 10 },
        ]
    },
    {
        section: 'Software Engineering',
        items: [
            { name: 'WordPress & Elementor (Expert)', experience: 8 },
            { name: 'HTML5 / CSS3 / SASS', experience: 9 },
            { name: 'JavaScript (ES6+) & React', experience: 4 },
            { name: 'Next.js 15/16', experience: 2 },
            { name: 'Git (Advanced)', experience: 4 },
            { name: 'REST APIs & AJAX', experience: 7 },
            { name: 'Web Performance (WPO)', experience: 5 },
            { name: 'PHP & MySQL (Basics)', experience: 3 },
            { name: 'Deployment & VPS (Linux/CLI)', experience: 5 },
            { name: 'Shopify & E-commerce O2O', experience: 3 },
        ]
    },
    {
        section: 'Product Design & R&D',
        items: [
            { name: 'Technical Product Design', experience: 10 }, // Мебель + Сувениры
            { name: 'UX/UI Research & Prototyping', experience: 7 },
            { name: 'Photoshop (Expert)', experience: 10 },
            { name: 'Figma', experience: 5 },
            { name: 'Illustrator & CorelDRAW', experience: 7 },
            { name: 'Responsive & Material Design', experience: 7 },
            { name: 'Market & Competitor Analysis', experience: 10 },
            { name: 'Pre-print & Wide-format Prep', experience: 6 },
        ]
    },
    {
        section: 'Industrial & Hardware',
        items: [
            { name: 'CNC Systems Commissioning', experience: 2 }, // Новый "жирный" скилл
            { name: 'G-Code & Laser Cutting/Engraving', experience: 3 },
            { name: '3D Printing (FDM) & Post-processing', experience: 2 },
            { name: 'CAD/CAM Parametric Modeling', experience: 5 },
            { name: 'Hardware Troubleshooting', experience: 10 },
            { name: 'Network Infrastructure (LAN)', experience: 5 },
            { name: 'Asset Recovery Operations', experience: 5 },
        ]
    },
    {
        section: 'Specialized Analysis',
        items: [
            { name: 'Property & Asset Valuation', experience: 13 },
            { name: 'Financial Forensic Analysis', experience: 10 },
            { name: 'Legal Document Automation', experience: 7 },
            { name: 'Excel Financial Modeling', experience: 13 },
            { name: 'Audit & Compliance', experience: 10 },
            { name: 'Risk Assessment', experience: 13 },
        ]
    },
    {
        section: 'Tools & Methodologies',
        items: [
            { name: 'Agile (Scrum, Kanban)', experience: 11 },
            { name: 'SDLC Implementation', experience: 5 },
            { name: 'Jira / Confluence / Monday', experience: 6 },
            { name: 'Google Workspace (Admin)', experience: 10 },
            { name: 'Notion / Miro / Asana', experience: 5 },
            { name: 'SEO Strategy', experience: 3 },
            { name: 'AI Prompt Engineering', experience: 2 },
        ]
    },
    {
        section: 'Soft Skills & Leadership',
        items: [
            { name: 'Problem Solving (Crisis focus)', experience: 10 },
            { name: 'Adaptability & Self-Study', experience: 10 },
            { name: 'Mentoring & Coaching', experience: 5 },
            { name: 'Cross-functional Collaboration', experience: 10 },
            { name: 'Customer Service Excellence', experience: 8 },
            { name: 'Public Speaking', experience: 5 },
        ]
    }
];
export const education: Education[] = [
    {
        name: `Mykhailo Tuhan-Baranovskyi Donetsk National University of Economics and Trade`,
        specialization: `Accounting and Auditing`,
        qualification: `Accounting and Auditing Professional`,
        startDate: 2006,
        endDate: 2009,
        additional: false,
        link: null,
        description: [
            'Deep academic foundation in financial engineering, forensic accounting, and audit-grade documentation. This training formed the basis for my precision-oriented approach to data integrity in both financial and technical systems.',
            'Mastered complex reporting structures and regulatory compliance, which later enabled me to manage high-stakes financial auditing and asset valuation for multi-million dollar portfolios.'
        ]
    },
    {
        name: `Donetsk Polytechnic College`,
        specialization: `Finance and credit`,
        qualification: `Junior Specialist`,
        startDate: 2003,
        endDate: 2006,
        additional: false,
        link: null,
        description: [
            'Analytical training focused on credit risk assessment, resource optimization, and corporate financial operations. Developed the core mathematical models used for creditworthiness evaluation during my banking tenure.'
        ]
    },
    {
        name: `State Property Fund of Ukraine`,
        specialization: `International Valuation Standards (IVS)`,
        qualification: `Accredited Property & Property Rights Appraiser`,
        startDate: 2012,
        endDate: 2012,
        additional: true,
        link: null,
        description: [
            'Professional state certification for the valuation of tangible and intangible assets, including intellectual property and business goodwill. Trained to provide bulletproof expert opinions for legal disputes, M&A, and high-level financial planning.'
        ]
    },
    {
        name: `Ministry of Justice of Ukraine`,
        specialization: `Crisis Management & Restructuring`,
        qualification: `Arbitration Manager (Liquidator, Restructuring Lead)`,
        startDate: 2014,
        endDate: 2017,
        additional: true,
        link: null,
        description: [
            'Advanced legal and operational training for managing distressed enterprises and terminal-stage corporate liquidations. Specialized in asset recovery, labor dispute resolution, and navigating high-pressure regulatory environments under court mandates.'
        ]
    },
    {
        name: `GoIT Ukraine`,
        specialization: 'Frontend Engineering',
        qualification: `Frontend Developer`,
        startDate: 2016,
        endDate: 2016,
        additional: true,
        link: null,
        description: [
            'Intensive immersive program focused on modern JavaScript ecosystems, responsive web architecture, and UI/UX best practices. This was the pivotal transition point from financial management to full-stack engineering.'
        ]
    },
    {
        name: `FreeCodeCamp`,
        specialization: 'Algorithmic Thinking',
        qualification: 'JavaScript Algorithms and Data Structures',
        startDate: 2022,
        endDate: 2022,
        additional: true,
        link: 'https://www.freecodecamp.org/certification/artem.skachko/javascript-algorithms-and-data-structures',
        description: [
            'Comprehensive validation of algorithmic logic and data structure implementation. Completed 600+ hours of advanced challenges to benchmark technical skills against global industry standards.',
        ]
    },
    {
        name: `FreeCodeCamp`,
        specialization: 'Modern UI Architecture',
        qualification: 'Legacy Responsive Web Design V8',
        startDate: 2022,
        endDate: 2022,
        additional: true,
        link: 'https://www.freecodecamp.org/certification/artem.skachko/responsive-web-design',
        description: [
            `In-depth study of accessible, mobile-first design systems and cross-browser compatibility. Focused on optimizing user experiences for diverse device ecosystems.`,
        ]
    },
    {
        name: `GeekBrains`,
        specialization: 'Engineering Fundamentals',
        qualification: 'Programming & Web Design Foundations',
        startDate: 2020,
        endDate: 2020,
        additional: true,
        link: 'https://gb.ru/certificates/775568.en',
        description: [
            `Systematic knowledge audit and training methodology research. Used to standardize internal educational programs for the Remote Helpers engineering department.`,
        ]
    },
    {
        name: `Google`,
        specialization: 'Project Management',
        qualification: 'Google Project Management Professional Certificate',
        startDate: 2025,
        endDate: 2025,
        additional: true,
        link: 'https://www.coursera.org/account/accomplishments/professional-cert/certificate/EYCQ4WGAX0PJ',
        description: [
            `Professional-grade certification covering Agile, Waterfall, and Lean methodologies. Validated expertise in managing complex project lifecycles, stakeholder relations, and high-impact business deliverables in a global environment.`,
        ]
    },

];
export const experience: Experience[] = [
    {
        startDate: 2019,
        endDate: 2025,
        companyName: `'Remote Helpers'`,
        country: 'Ukraine',
        position: `Administrative & Project Manager`,
        description: {
            summary: [
                'Joined as the first dedicated manager when the company lacked even a basic web presence. Over 6 years, transformed a chaotic startup into a structured outstaffing powerhouse, scaling the team from 70 to 300+ employees.',
                'Built the entire digital infrastructure from scratch, including branding, corporate websites, and a custom internal CRM/ERP system. Acted as a "Bridge Expert," combining roles of Lead Designer, Full-stack Developer, and Delivery Manager to ensure project success for international clients in E-commerce, FinTech, and SMB sectors.',
                'Strategically optimized the talent-to-market pipeline, significantly reducing the bench time and increasing the company’s overall profitability.'
            ],
            responsibilities: [
                'Directly managed Design and Development departments (40-50 subordinates), overseeing delivery for mobile and web projects.',
                'Conceptualized and led the development of a proprietary web application for talent auditing, automated interviewing, and outstaffing management.',
                'Scaled organizational headcount by 320% (from 70 to 300 employees) through optimized HR policies and operational workflows.',
                'Acted as a Technical Consultant for high-ticket external projects, ensuring seamless integration of our outstaffed specialists into client teams.',
                'Successfully managed "Shadow Leadership" initiatives, mentoring junior developers while maintaining high-level stakeholder relations as the primary point of contact.',
                'Orchestrated internal SEO and Content strategies, establishing the company’s authority in the global outstaffing market.'            ],
            goals: [
                'Reduce talent onboarding time by 75%',
                'Implement full-cycle internal audit system',
                'Automate 50% of routine administrative tasks via custom CRM'
            ],
            // ATS-ОПТИМИЗИРОВАННЫЙ БЛОК
            atsSummary: 'Strategic Project & Operations Manager with a proven track record of scaling an outstaffing firm from 70 to 300+ staff. Expert in SDLC management, internal CRM development, and cross-functional leadership of Dev & Design teams (50+ reports). Reduced talent-to-market cycle from 30 days to 10 days.',
            atsResponsibilities: [
                'Scaled company headcount by 300%+ and optimized resource allocation, reducing talent onboarding and "time-to-sell" by 75% (from 4 weeks to 1-2 weeks).',
                'Led the design and engineering of a custom Web App for recruitment and talent auditing, resulting in zero-cost internal HR management.',
                'Managed 50+ direct reports across Design and Engineering departments, ensuring 95%+ client satisfaction rate on outstaffed projects.',
                'Saved approximately 2-3 weeks of billable time per new specialist by streamlining technical training and pre-sale preparation processes.',
                'Provided expert-level consultancy in UI/UX and Frontend architecture for external clients, bridging the gap between business requirements and technical execution.'
            ]
        }
    },
    {
        startDate: 2017,
        endDate: 2024,
        companyName: `Independent Professional Activity`,
        country: 'Ukraine',
        position: `Strategic Crisis Manager (Bankruptcy & Restructuring)`,
        description: {
            summary: [
                'Court-appointed expert for high-stakes bankruptcy proceedings of state-owned and municipal enterprises. Managed a portfolio of 6 distressed entities (3 directly, 3 as a strategic mentor) with total assets valued at ~40M UAH ($1.9M at the time).',
                'Operated as a "Final Stage" Crisis Manager, entering companies in terminal financial states to ensure orderly liquidation, asset protection, and legal compliance. Navigated extremely high-pressure environments involving state tax authorities, pension funds, and hundreds of employees with unpaid wages.',
                'Successfully bridged the gap between rigid legal requirements and operational efficiency by designing custom automation tools for large-scale legal documentation and asset tracking.'
            ],
            responsibilities: [
                'Orchestrated full-cycle liquidation processes for municipal enterprises, ensuring 100% compliance with Ministry of Justice regulations and court mandates.',
                'Managed complex asset disposal workflows: from expert valuation and public auction organization to selecting exchanges and managing competitive bidding.',
                'Mediated high-conflict stakeholder relations, representing the bankruptcy estate in negotiations with state authorities and labor unions.',
                'Conducted comprehensive audits of "seized and distressed" assets, preventing further dissipation and ensuring maximum recovery for creditors.',
                'Acted as a Mentor and Lead Assistant for junior administrators, overseeing the strategic direction of 3 additional liquidation cases.'
            ],
            goals: [
                'Ensure 100% procedural integrity in high-scrutiny state audits',
                'Automate 80% of routine legal document generation',
                'Optimize administrative costs through DIY operational solutions'
            ],
            atsSummary: 'Strategic Operations & Crisis Manager with 7 years of experience managing the restructuring and liquidation of distressed state-owned enterprises. Expert in navigating high-conflict stakeholder environments, regulatory compliance (Ministry of Justice), and asset valuation (~40M UAH portfolio). Proven ability to automate complex legal reporting using technical tools.',
            atsResponsibilities: [
                'Directly managed the liquidation and asset recovery of 6 corporate entities, overseeing high-value municipal asset portfolios (approx. 40M UAH).',
                'Negotiated debt settlements and navigated complex regulatory landscapes with State Tax Authorities, Pension Funds, and municipal stakeholders.',
                'Managed end-to-end asset disposal: from court-ordered valuation to organizing public auctions and investor competitions under strict Ministry of Justice rules.',
                'Developed custom automated systems (Excel/Scripts) for variable-based legal template generation, reducing administrative overhead and ensuring 100% data accuracy.',
                'Resolved large-scale labor disputes and managed payroll settlements for hundreds of employees in distressed municipal environments.'
            ]
        }
    },
    {
        companyName: `'MIS' LLC`,
        startDate: 2012,
        endDate: 2025,
        country: 'Ukraine',
        position: `Lead Strategic Consultant (Valuation & Finance)`,
        description: {
            summary: [
                '13-year tenure as a Lead Strategic Consultant for high-stakes asset valuation and financial forensic analysis. Engaged on a project basis to manage portfolios valued at hundreds of millions (book value), specializing in complex, distressed, and restricted assets (seized property, state-owned entities, and collateral).',
                'Expert in evaluating intangible assets, including patents, rights of claim, and goodwill. Bridged the gap between raw economic data and legal certainty, ensuring that every valuation model survived intense scrutiny from courts, prosecutors, and state authorities.',
                'Acted as a recurring Strategic Advisor and Peer Reviewer, providing expert opinions on "valuation-at-risk" scenarios and auditing the work of other appraisers to ensure industry-leading quality standards.'
            ],
            responsibilities: [
                'Engineered sophisticated "kilometer-long" financial models in Excel to calculate physical, functional, and economic obsolescence with 100% data traceability for diverse projects.',
                'Developed custom web crawlers to automate the collection and verification of market data, ensuring real-time relevance for high-stakes legal reports and consultations.',
                'Led the project-based valuation of diverse asset classes: from heavy machinery and real estate to complex financial instruments and intellectual property.',
                'Provided forensic-level documentation and expert testimony for court proceedings, insurance claims, and multi-million dollar loan collateralization.',
                'Conducted peer reviews and strategic consultations, optimizing valuation methodologies for fellow liquidators and government stakeholders.'
            ],
            goals: [
                'Maintain zero-rejection rate in court and prosecutor audits',
                'Automate 70% of market data collection via custom scrapers',
                'Develop a standardized framework for intangible asset valuation'
            ],
            // ATS-ОПТИМИЗИРОВАННЫЙ БЛОК
            atsSummary: 'Strategic Valuation Consultant & Financial Engineer with 13 years of project-based experience in asset appraisal and forensic analysis. Expert in Intangible Assets (Patents, Goodwill) and Distressed Asset Recovery. Proven track record in building complex automated valuation models and ensuring 100% data integrity for legal and government audits.',
            atsResponsibilities: [
                'Orchestrated project-based valuation processes for asset portfolios worth hundreds of millions, specializing in complex distressed properties and state-owned enterprises.',
                'Engineered automated multi-factor depreciation models (Physical, Functional, Economic), leveraging advanced Excel functions and custom scripts for individual cases.',
                'Developed automated data-gathering tools (crawlers) to source verified market benchmarks, ensuring bulletproof evidence for judicial and regulatory scrutiny.',
                'Evaluated intangible assets including Intellectual Property, Goodwills, and Rights of Claim for M&A and restructuring purposes as an external expert.',
                'Performed professional peer reviews (Recensing) for high-profile valuation reports, acting as a Quality Assurance lead for the regional valuation market.'
            ]
        }
    },
    {
        companyName: `NEVVON CARE INC`,
        startDate: '2021',
        endDate: '2021',
        country: 'Canada / Remote',
        position: `Web Developer & UI Designer`,
        description: {
            summary: [
                'Revitalized the digital presence for a Canadian healthcare service provider by migrating a legacy informational resource to a modern, high-performance CMS infrastructure. Focused on creating a "Medical Minimalism" visual style to establish trust and professional authority.',
                'Implemented a client-centric development approach: instead of creating a rigid system, I built a flexible web platform using a visual engine that empowered the client’s team to manage complex content independently, eliminating the need for constant technical intervention.',
                'Managed the end-to-end deployment lifecycle, from domain and hosting orchestration to automated security and backup protocols.'
            ],
            responsibilities: [
                'Architected the complete web infrastructure from scratch, including hosting setup, DNS configuration, and CMS deployment.',
                'Designed a "Medical Minimalism" UI kit and implemented it into a responsive web platform, ensuring cross-device compatibility and high user trust.',
                'Developed a modular content system that reduced the time-to-publish for medical articles and resources by 100% through a visual-builder interface.',
                'Configured automated backup and security systems, ensuring 99.9% uptime and data integrity for the corporate resource.',
                'Provided comprehensive training and documentation to the client’s staff, enabling autonomous platform management.'            ],
            goals: [
                'Modernize a legacy medical information portal',
                'Eliminate client dependency on developers for daily content updates',
                'Establish a clean, modern brand identity'
            ],
            atsSummary: 'Web Systems Developer & Designer specialized in building autonomous corporate platforms for the Healthcare sector. Expert in WordPress architecture, UI/UX design, and operational workflow optimization. Proven ability to deliver end-to-end web solutions that reduce maintenance costs and empower non-technical teams.',
            atsResponsibilities: [
                'Led the full-cycle migration and redevelopment of a corporate web platform, optimizing performance and server response times.',
                'Streamlined content operations by implementing a modular visual editing system, saving the client hundreds of billable hours in long-term maintenance.',
                'Designed and executed a modern "Medical Minimalist" UI, enhancing brand perception and user engagement metrics.',
                'Established automated DevOps-lite workflows, including server-side backups, security hardening, and performance caching.',
                'Consulted on digital infrastructure strategy, managing domain migration, SSL implementation, and hosting architecture.'
            ]
        }
    },
    {
        companyName: `'Dino - tech solutions'`,
        startDate: 2020,
        endDate: 2021,
        country: 'Canada / Israel / Remote',
        position: `Web Systems Engineer & Frontend developer`,
        description: {
            summary: [
                'Architected and managed high-traffic web ecosystems for premier international clients, including the official Israeli tourism portal (israel.travel). Engineered bespoke WordPress solutions using clean, native PHP following the WordPress Codex standards for maximum performance and security.',
                'Executed a large-scale infrastructure migration involving 80+ unique WordPress instances. Successfully managed the transition of legacy systems to modern server environments, resolving complex compatibility issues and ensuring data integrity for media libraries exceeding 60GB.',
                'Strategically transitioned the tech stack toward modern frontend frameworks, integrating React and Vue into production workflows while maintaining a lean, high-velocity development team of 10+ professionals.'            ],
            responsibilities: [
                'Directed the migration and infrastructure overhaul of 80+ diverse web projects, managing full-cycle updates, debugging, and performance tuning.',
                'Developed high-performance, custom-coded WordPress themes and plugins using native PHP and the WordPress Codex, ensuring zero reliance on heavy page builders.',
                'Collaborated with a cross-functional team of 10 to deliver digital products for the Israeli and Canadian markets, bridging the gap between sales requirements and technical execution.',
                'Optimized large-scale media assets and database structures for enterprise sites, significantly improving server response times and storage efficiency.',
                'Pioneered the adoption of React and Vue within the agency’s development pipeline, enhancing the interactivity and scalability of client web applications.'            ],
            goals: [
                'Execute 80+ site migrations with zero downtime',
                'Modernize legacy codebases to the latest PHP/WP standards',
                'Streamline media management for 60GB+ databases'
            ],
            atsSummary: 'Web Systems Engineer with expertise in Enterprise-level WordPress migrations and performance optimization. Proven track record in managing 80+ unique web instances and supporting high-traffic portals like israel.travel. Expert in Clean PHP (Wordpress Codex), React, and large-scale data integrity management.',
            atsResponsibilities: [
                'Orchestrated the successful migration of 80+ WordPress websites to new server infrastructures, ensuring 100% uptime and resolving critical version-update conflicts.',
                'Managed high-traffic web assets for the official Israel Tourism portal (israel.travel), focusing on scalability and security hardening.',
                'Developed bespoke, performance-optimized themes using native PHP (Wordpress Codex), reducing technical debt and improving Core Web Vitals.',
                'Optimized large-scale media storage systems (60GB+ per instance), implementing efficient asset-loading strategies and database cleanup protocols.',
                'Led the technical transition from legacy jQuery/PHP environments to modern React/Vue frontend architectures.'
            ]
        }
    },
    {
        companyName: `SyncSpider`,
        startDate: '2023',
        endDate: '2023',
        country: 'Austria / Remote',
        position: `Web Systems Developer & Design Consultant`,
        description: {
            summary: [
                'Architected and developed the public web ecosystem for a leading European iPaaS platform, including the central marketing site, comprehensive Knowledge Base, and technical documentation portal.',
                'Acted as a Technical Consultant for the design team, conducting feasibility audits to ensure that UI/UX concepts remained performant and alignable with web standards. Bridged the gap between high-level Product Owner visions and practical frontend execution.',
                'Engineered a scalable information architecture for a data-heavy SaaS environment, focusing on content discoverability and seamless user onboarding through well-structured documentation interfaces.'],
            responsibilities: [
                'Developed a high-performance documentation and Knowledge Base platform from scratch, optimizing it for SEO and technical content accessibility.',
                'Collaborated directly with the Product Owner to translate roadmap objectives into functional, user-centric web interfaces.',
                'Provided expert-level feedback on the corporate Design System, identifying and resolving technical constraints early in the design phase.',
                'Built a library of modular, reusable UI components that accelerated content production for 500+ integration and documentation pages.',
                'Managed end-to-end web deployment and performance tuning, ensuring 90+ scores on Google PageSpeed Insights for critical landing pages.'            ],
            goals: [
                'Launch an enterprise-grade Knowledge Base for iPaaS users',
                'Establish a technical bridge between Design and Development teams',
                'Maximize SEO visibility for the integration directory'
            ],
            atsSummary: 'Web Systems Developer & Technical Design Consultant for the SaaS/iPaaS sector. Expert in building Knowledge Bases, technical documentation portals, and high-performance marketing sites. Proven track record in collaborating with Product Owners and optimizing Design Systems for technical feasibility and scalability.',
            atsResponsibilities: [
                'Architected and developed the primary Knowledge Base and technical documentation portal for a leading European iPaaS platform, improving user self-service capabilities.',
                'Consulted the design team on technical feasibility (Design Feasibility Audit), ensuring UI components were optimized for web performance and cross-browser compatibility.',
                'Streamlined the product-to-market workflow by collaborating directly with the Product Owner to implement high-impact frontend features.',
                'Developed a modular frontend framework for massive content scaling, enabling the efficient management of hundreds of integration-specific web pages.',
                'Optimized Core Web Vitals and site architecture, resulting in enhanced search engine rankings and improved user onboarding experiences.'
            ]
        }
    },
    {
        companyName: `Logoletta GmbH`,
        startDate: '2023',
        endDate: '2023',
        country: 'UK / Germany / Remote',
        position: `Digital Solutions Lead & Frontend Developer`,
        description: {
            summary: [
                'Brought in as a "Crisis Turnaround" specialist to rescue a high-stakes landing page project after a previous developer failure. Successfully met aggressive deadlines, transforming a legacy "2000s-style" web presence into a cutting-edge, pixel-perfect digital experience.',
                'Engineered a complex multi-directional scrolling architecture (Vertical-Horizontal-Vertical), ensuring seamless alignment and high-performance animations. Focused on bridging advanced design requirements with technical stability under extreme time pressure.',
                'Established a long-term operational framework for the client by authoring comprehensive technical documentation and video-based training modules, ensuring autonomous platform management for the business owner.'            ],
            responsibilities: [
                'Rescued and delivered a mission-critical web project under a "burning deadline," replacing failed legacy code with a robust, custom-built WordPress architecture.',
                'Developed a high-complexity user interface featuring pixel-perfect horizontal scrolling, flipping cards, and dynamic custom fields.',
                'Designed and implemented a modern visual identity, replacing an outdated web structure with a clean, high-conversion minimalist aesthetic.',
                'Authored a bespoke "Digital Handover" package, including video tutorials and written guides for the business owner and their assistant.',
                'Managed end-to-end technical execution: from DNS and server orchestration to final performance optimization and cross-browser testing.'            ],
            goals: [
                'Deliver a high-fidelity landing page within a critical 1-week window',
                'Implement a flawless multi-directional scroll UI',
                'Eliminate client downtime through rapid deployment'
            ],
            atsSummary: 'Digital Solutions Lead with a focus on Frontend Engineering and Crisis Management. Proven ability to deliver complex, high-performance web projects under extreme deadlines. Expert in bespoke WordPress development, pixel-perfect UI implementation (Horizontal Scroll/Animations), and stakeholder technical onboarding.',
            atsResponsibilities: [
                'Rescued a high-priority web development project with burning deadlines, delivering a complete pixel-perfect rebuild that exceeded client expectations.',
                'Engineered advanced scrolling mechanics (Multi-directional scroll) and interactive UI components (Flipping cards/Custom logic) using clean, optimized code.',
                'Automated the client onboarding process by creating a suite of technical video instructions and manuals, reducing post-launch support needs.',
                'Optimized digital infrastructure, including server configuration and performance hardening, resulting in a 100% stable and fast web experience.',
                'Acted as a Strategic Technical Consultant, advising the business owner on technical feasibility and long-term digital growth strategies.'
            ]
        }
    },
    {
        companyName: `Displayed Web`,
        startDate: '2022',
        endDate: '2022',
        country: 'Sweden / Remote',
        position: `Rapid Deployment Specialist & Frontend Developer`,
        description: {
            summary: [
                'Architected a high-velocity web production workflow for a Swedish digital agency, specializing in the rapid delivery of high-conversion business websites. Established a record-breaking delivery standard of up to 3 production-ready sites per day.',
                'Bridged the gap between aggressive business timelines and technical execution by leveraging the WordPress ecosystem and modular design components. Focused on "speed-to-market" as a primary value proposition for Small and Medium-sized Businesses (SMBs).',
                'Implemented a minimalist, results-driven UI/UX strategy, ensuring that rapid deployment never compromised professional aesthetics or cross-device performance.'            ],
            responsibilities: [
                'Executed end-to-end web deployment for multiple SMB clients within 24-48 hour windows, managing everything from initial setup to final launch.',
                'Optimized and customized advanced WordPress architectures (Elementor/Theme Forest), ensuring peak performance and SEO-readiness under tight deadlines.',
                'Integrated various third-party services and lightweight APIs, including search modules, review widgets, and custom data-tracking forms.',
                'Developed an internal "Rapid Component Library" to streamline the assembly of custom calculators and interactive elements, significantly reducing development time.',
                'Managed 100% of the technical lifecycle for each project, including domain configuration, hosting orchestration, and automated backup protocols.'
            ],
            goals: [
                'Achieve a consistent 24-hour delivery cycle for core web products',
                'Maintain a 3-sites-per-day production capacity',
                'Ensure 100% mobile responsiveness for all rapid-launch projects'
            ],
            atsSummary: 'High-Velocity Web Developer & Rapid Deployment Specialist with a focus on the SMB sector. Expert in WordPress (Elementor) ecosystem and modular UI/UX design. Proven track record of delivering 3+ production-ready sites per day while maintaining high standards of performance and SEO.',
            atsResponsibilities: [
                'Streamlined web production workflows to achieve a delivery rate of 3 high-fidelity sites per day, significantly increasing agency throughput.',
                'Delivered end-to-end web solutions for SMB clients within 24-48 hours, including custom integrations (Search APIs, Review Widgets, Gov-data modules).',
                'Architected responsive, minimalist web interfaces focused on high conversion and optimal user journeys.',
                'Optimized large-scale template architectures for maximum speed and performance, ensuring sub-2s load times across the portfolio.',
                'Directed technical project execution, managing domain migrations, server security hardening, and automated data integrity protocols.'
            ]
        }

    },
    {
        startDate: 2010,
        endDate: 2011,
        companyName: `'Foxtrot' OJSC`,
        country: 'Ukraine',
        position: `Technical Sales & Product Consultant (Computers & Digital)`,
        description: {
            summary: [
                'Launched professional career at Ukraine’s premier electronics retailer, quickly ascending to a top-tier performer rank by focusing on operational velocity and process innovation. Managed high-volume sales for computing hardware, mobile devices, and digital imaging technology.',
                'Expertly translated complex technical specifications into consumer value, consistently exceeding revenue targets for high-margin service agreements (warranties, insurance) and custom post-sale technical support. Acted as a bridge between technical hardware capabilities and diverse user requirements.',
                'Optimized local inventory and visual merchandising strategies, identifying accounting discrepancies and strategically positioning promotional assets to maximize department sell-through rates.'
            ],
            responsibilities: [
                'Ranked in the top tier of the sales department for high-velocity transaction handling and innovative approach to customer engagement.',
                'Executed advanced hardware and software deployments, including OS installation, disk partitioning, and custom software provisioning tailored to specific client professional needs.',
                'Negotiated high-margin service contracts and extended warranties, leveraging deep psychological insights and product knowledge to drive department profitability.',
                'Optimized warehouse accounting and inventory visibility, identifying critical data errors and redesigning product displays to boost sales of promotional items.',
                'Mentored and onboarded junior staff on corporate standards, technical troubleshooting protocols, and effective sales methodologies.'            ],
            goals: [
                'Consistently exceed monthly sales KPIs for high-ticket digital goods',
                'Achieve 100% accuracy in inventory registration and stock audits',
                'Maintain top-rank status in customer satisfaction and technical support quality'
            ],
            atsSummary: 'Top-performing Technical Sales Consultant with a foundation in high-volume retail operations (Foxtrot). Expert in hardware/software configuration, customer psychology, and inventory optimization. Proven track record in exceeding sales targets for complex digital goods and managing inventory integrity.',
            atsResponsibilities: [
                'Ranked as a top-performing consultant for sales volume and operational speed in the computing and digital assets department.',
                'Performed advanced software provisioning and OS deployments for a wide range of devices, ensuring high post-sale customer satisfaction.',
                'Negotiated complex service agreements and high-margin insurance packages, consistently driving incremental department revenue.',
                'Optimized visual merchandising and inventory logistics, identifying accounting errors and enhancing product visibility for strategic assets.',
                'Facilitated technical training and onboarding for new employees, ensuring adherence to corporate service and operational standards.'
            ]
        }

    },
    {
        companyName: `Eurostandart - furniture factory`,
        startDate: '2016',
        endDate: '2017',
        country: 'Ukraine',
        position: `Digital Product Manager & Lead Technical Designer`,
        description: {
            summary: [
                'Architected and single-handedly executed the digital transformation of a furniture manufacturing facility. Developed a full-cycle E-commerce ecosystem on OpenCart, acting as the sole Project Manager, Designer, and Developer, which directly catalyzed the opening of two new physical retail locations and a production expansion.',
                'Bridged the gap between industrial engineering and aesthetics by providing R&D consultancy on ergonomics, material selection, and structural integrity for serial production (100+ SKUs). Managed the end-to-end technical production pipeline, from vector-based CNC/Plotter preparation to final assembly handover.',
                'Spearheaded the branding and visual identity for a successful commercial furniture subsidiary, managing the entire suite of POS, outdoor advertising, and corporate marketing assets.'            ],
            responsibilities: [
                'Directly engineered and launched an OpenCart-based e-commerce platform, managing the entire SDLC, database architecture, and UI/UX design.',
                'Consulted the engineering department on furniture R&D, influencing the ergonomic and structural design of upholstered and case furniture collections.',
                'Managed high-precision industrial plotter operations and technical file preparation for sandblasting and wide-format facade printing.',
                'Orchestrated the visual launch of a subsidiary brand for commercial furniture, delivering comprehensive brand guidelines and multi-channel marketing materials.',
                'Streamlined the production-to-sales workflow by creating an interactive digital catalog that reduced time-to-conversion for B2B and B2C clients.',
                'Produced high-fidelity marketing collateral, including physical catalogs, outdoor banners, and point-of-sale displays to unify the brand voice.'
            ],
            goals: [
                'Scale digital sales to support the expansion of physical retail chains',
                'Integrate industrial design standards into the digital product presentation',
                'Establish 100% brand consistency for the parent company and its commercial subsidiary'
            ],
            atsSummary: 'Digital Product Manager & Industrial Designer with a proven record of scaling manufacturing businesses through E-commerce (OpenCart). Expert in bridging industrial R&D with digital sales channels. Proven ability to manage full-cycle product launches, from UI/UX and brand identity to CNC-ready technical documentation.',
            atsResponsibilities: [
                'Architected and deployed a full-cycle OpenCart E-commerce platform, resulting in the expansion of production capacity and the opening of 2 new retail stores.',
                'Collaborated with the engineering team on Product R&D, optimizing ergonomics and material specifications for a catalog of 100+ furniture items.',
                'Managed industrial production workflows, including plotter cutting and technical vector preparation for complex decorative processes.',
                'Led the visual and strategic branding for a commercial furniture spinoff company, managing all corporate identity and POS materials.',
                'Optimized B2B sales cycles by implementing a centralized digital catalog and automated product documentation systems.',
                'Directed large-format print production and outdoor advertising campaigns to support regional business growth.'
            ]
        }
    },
    {
        startDate: 2008,
        endDate: 2009,
        companyName: `'Privat Bank' OJSC`,
        country: 'Ukraine',
        position: `Credit Risk & Loan Operations Expert`,
        description: {
            summary: [
                'Managed high-volume automotive lending operations during the 2008 economic transition, overseeing dozens of credit deals per branch monthly. Specialized in deep-level financial verification and collateral risk assessment during the onset of the global financial crisis.',
                'Excelled in fraud detection, identifying sophisticated attempts at identity theft and falsified financial documentation (income statements, expired passports). Operated within early, complex Linux-based banking infrastructures, maintaining data integrity across raw software environments.',
                'Executed "high-stakes" field operations in collaboration with the Bank Security Department to verify collateral status and negotiate debt recovery for non-performing loans.'
            ],
            responsibilities: [
                'Directly managed the end-to-end loan lifecycle for a high-volume "Car on Credit" portfolio, ensuring rapid processing without compromising risk standards.',
                'Performed rigorous KYC (Know Your Customer) and anti-fraud audits, successfully neutralizing attempts to use invalid or falsified legal documents.',
                'Collaborated with the Security Department on field inspections and collateral recovery missions, managing high-conflict negotiations with delinquent borrowers.',
                'Operated and troubleshot early-stage Linux-based banking CRM systems, managing complex registries and financial ledgers with 100% accuracy.',
                'Analyzed applicant solvency and credit histories to determine risk categories, adjusting loan terms to align with tightening 2008-2009 lending regulations.'
            ],
            goals: [
                'Maintain zero-loss rate on audited high-risk applications',
                'Achieve 100% accuracy in manual registry management under Linux',
                'Optimize collateral verification cycle through proactive field monitoring'
            ],
            atsSummary: 'Credit Risk & Financial Operations Expert with a background in high-volume lending and asset recovery. Expert in fraud detection (KYC/AML), collateral auditing, and debt negotiation. Proven ability to operate complex financial systems and manage field-level risk mitigation in high-pressure economic environments.',
            atsResponsibilities: [
                'Evaluated financial risk and creditworthiness for a high-volume automotive loan portfolio, managing dozens of complex transactions monthly.',
                'Identified and prevented fraud attempts involving falsified income data and identity documents through meticulous verification protocols.',
                'Managed field-level asset recovery and collateral audits in high-conflict scenarios, collaborating with internal security and legal teams.',
                'Utilized early Linux-based banking software to maintain precise financial records and transaction registries during the 2008 crisis.',
                'Negotiated debt restructuring and repayment terms for distressed accounts, successfully minimizing bank losses and stabilizing portfolio NPL ratios.'
            ]
        }
    },
    {
        startDate: 2011,
        endDate: 2012,
        companyName: `'Delta Bank' OJSC`,
        country: 'Ukraine',
        position: `loan officer`,
        description: {
            summary: [
                'Managed high-traffic Point of Sale (POS) lending operations across major retail networks (electronics, furniture, specialized equipment). Optimized the customer journey in fast-paced environments, processing 10-15 complex credit applications daily.',
                'Acted as a "Single-Point" Operations Lead for remote retail branches, combining financial advisory with autonomous hardware infrastructure maintenance. Consistently met aggressive KPIs for high-margin cross-sales, including credit insurance and secondary banking products.',
                'Proactively mitigated credit risk through "Soft Collection" initiatives, maintaining detailed communication registries and identifying potential delinquencies before they reached the legal recovery stage.'            ],
            responsibilities: [
                'Executed the full lifecycle of consumer lending at high-traffic retail hubs, ensuring rapid data verification and contract finalization under strict deadlines.',
                'Exceeded mandatory KPIs for cross-selling financial protection packages and secondary credit instruments, driving branch profitability.',
                'Directed "Soft Collection" workflows: conducted proactive risk-mitigation calls, maintained detailed interaction logs, and prepared analytical reports for the Security Department.',
                'Managed the technical and operational uptime of remote sales points, including autonomous hardware maintenance (scanners, printers, supplies) and inventory logistics.',
                'Analyzed individual credit profiles using proprietary Windows-based banking systems to provide tailored financial solutions while maintaining 100% regulatory compliance (KYC).'
            ],
            goals: [
                'Maintain peak operational uptime for remote POS hardware',
                'Achieve 100% conversion on mandatory cross-sales targets',
                'Ensure zero-error rate in high-volume document registries'
            ],
            atsSummary: 'Consumer Finance Specialist with a focus on High-Volume POS Operations and Risk Mitigation. Expert in retail lending, cross-selling, and autonomous technical support for remote sales points. Proven track record in early-stage debt management and high-velocity credit processing.',
            atsResponsibilities: [
                'Processed 10-15+ credit applications daily in high-traffic retail environments, balancing speed with rigorous risk assessment and KYC protocols.',
                'Consistently achieved high-margin KPIs for secondary financial products, including credit cards and insurance packages.',
                'Managed early-stage debt recovery (Soft Collection), maintaining comprehensive communication logs and mitigating Non-Performing Loan (NPL) risks.',
                'Provided autonomous technical support and infrastructure management for remote sales terminals, ensuring constant system availability.',
                'Optimized document workflows and data entry in proprietary banking software, maintaining strict confidentiality and data integrity standards.'
            ]
        }
    },
    {
        companyName: `DonShina - Online store `,
        startDate: '2008',
        endDate: '2011',
        country: 'Ukraine',
        position: `Owner`,
        description: {
            summary: [
                'Founded and scaled a niche automotive e-commerce platform during the early stages of regional digital retail. Achieved a peak monthly turnover of $7,000 by transforming a legacy PHP engine into a robust, high-traffic sales channel with over 3,000 active SKUs.',
                'Pioneered a DIY data-aggregation pipeline, utilizing advanced Excel models and relational databases to standardize heterogeneous price lists from multiple suppliers. This system enabled real-time inventory updates and a competitive pricing strategy in a volatile post-crisis market.',
                'Managed end-to-end business operations while simultaneously pursuing professional growth in the banking sector. Built a full-suite brand identity from scratch, including custom-designed financial documents, B2B contracts, and offline marketing assets.'            ],
            responsibilities: [
                'Architected a custom "Multi-Tier Supply Chain" model, using Excel-based automation to aggregate and normalize large-scale supplier datasets for web import.',
                'Executed full-cycle frontend and backend customizations (PHP, HTML, CSS), optimizing product filters and UI/UX for a data-heavy automotive catalog.',
                'Directed strategic marketing and brand development, designing all proprietary assets: from branded invoices and contracts to high-conversion print media (leaflets, flyers).',
                'Managed financial planning, cash flow optimization, and regulatory reporting, ensuring business sustainability through the 2008-2010 economic recovery.',
                'Negotiated with regional wholesale distributors to secure exclusive supply terms, maintaining a 99% order fulfillment rate for a growing B2C client base.'            ],
            goals: [
                'Automate 90% of supplier data normalization processes',
                'Scale monthly revenue to $7,000+ during an economic downturn',
                'Establish the brand as a top-3 regional niche player in automotive retail'
            ],
            atsSummary: 'Founder & CEO with a background in E-commerce scaling and Data Operations. Expert in building custom sales platforms, automating supply chain data (Excel/DB), and multi-channel brand management. Proven ability to drive profitability ($7k/mo turnover) and technical self-sufficiency in high-pressure environments.',
            atsResponsibilities: [
                'Founded and scaled a profitable automotive e-commerce venture, managing a database of 3,000+ SKUs and achieving $7k+ monthly revenue.',
                'Engineered a custom data-processing pipeline using Excel and databases to normalize and aggregate diverse supplier price lists for web integration.',
                'Self-taught and implemented full-stack web modifications (PHP/CSS), enhancing platform functionality and search engine visibility.',
                'Directed end-to-end business operations, including strategic B2B negotiations, financial auditing, and brand asset design.',
                'Developed and optimized a proprietary logistics and order fulfillment system, significantly reducing overhead and improving customer retention.'
            ]
        }
    },
    {
        startDate: 2003,
        endDate: 2006,
        companyName: `Commodity Exchange "Donetsk Universal Commodity Exchange"`,
        country: 'Ukraine',
        position: `IT Support & Network Technician`,
        description: {
            summary: [
                'Architected and maintained the foundational IT infrastructure for a regional commodity exchange, managing a 20-node local network and central server environment. Ensured 100% operational uptime during high-stakes trading sessions through rapid hardware diagnostics and software troubleshooting.',
                'Led a large-scale data digitization initiative, migrating legacy paper registries (up to 3,000 records per dataset) into digital formats. Focused on establishing a reliable LAN environment to facilitate seamless data exchange, storage, and real-time processing across the enterprise.',
                'Managed the full lifecycle of workstation and network maintenance, from physical cabling and router configuration to emergency technical support in high-pressure "trading floor" scenarios.'            ],
            responsibilities: [
                'Designed and deployed a robust Local Area Network (LAN) infrastructure, including physical cabling, crimping, and router configuration to ensure seamless server-client connectivity.',
                'Orchestrated the digitization and structural processing of extensive employee and inventory registries (1,500–3,000 entries per project), improving data accessibility and reporting accuracy.',
                'Executed "emergency response" technical support for hardware and software during active trading hours, minimizing downtime and ensuring transaction continuity.',
                'Administered the central exchange server, managing user permissions, data backups, and workstation synchronization across 20+ points of sale.',
                'Performed routine hardware maintenance and preventive software audits to extend equipment lifecycle and optimize system performance.'            ],
            goals: [
                'Establish 100% network connectivity across all 20+ workstations',
                'Digitize and archive all legacy paper-based employee registries',
                'Ensure zero-downtime during critical commodity trading windows'
            ],
            atsSummary: 'IT Support & Network Technician with 3 years of experience in regional financial infrastructure. Expert in LAN deployment, hardware troubleshooting, and large-scale data digitization. Proven ability to maintain system uptime in high-pressure trading environments and manage end-to-end IT operations for small-to-medium networks.',
            atsResponsibilities: [
                'Engineered and maintained a 20-node LAN infrastructure, overseeing physical cabling, router setup, and server-client synchronization.',
                'Led data digitization efforts for massive corporate registries (3,000+ records), ensuring accurate transition from paper to digital databases.',
                'Provided mission-critical technical support for hardware and software systems during active trading sessions, resolving issues in high-velocity environments.',
                'Managed server-side operations and workstation security, implementing regular maintenance and software updates to ensure operational reliability.',
                'Optimized IT infrastructure performance through proactive hardware diagnostics and network troubleshooting.'
            ]
        }
    },
    {
        companyName: `Podkova`,
        startDate: '2018',
        endDate: '2019',
        country: 'Ukraine',
        position: `Chief Technical Designer & Operations Architect`,
        description: {
            summary: [
                'Spearheaded the technical design and production infrastructure for a high-end souvenir and industrial engraving workshop. Engineered a diverse product ecosystem (500+ SKUs) utilizing CO2 laser-cutting technology and parametric vector design with sub-millimeter precision.',
                'Architected a proprietary order management and pricing system using Google Workspace, streamlining task delegation, cross-functional quality control, and real-time project tracking. This transformation enabled the facility to scale operations and handle extreme production loads during peak seasonal demands.',
                'Pioneered advanced wood-engineering techniques, including "living hinges," complex mortise-and-tenon joints, and magnetic interlocking systems. Led intensive R&D efforts across diverse materials, including leather, acrylics, rubber, and industrial textiles.'            ],
            responsibilities: [
                'Developed high-fidelity, parametric blueprints in CorelDRAW and Illustrator, optimizing complex 2D layouts for 3D assembly and CNC laser processing.',
                'Engineered intricate functional joinery (living hinges, press-fit joints, magnetic connectors) for high-end wooden mechanics and lifestyle products.',
                'Architected and implemented a cloud-based operational system (Google Workspace) for order registration, automated pricing, and cross-departmental QA workflows.',
                'Directed full-scale production cycles for a wide array of materials: from industrial plastics and rubber to premium leather and textiles, ensuring optimal laser power-frequency calibration for each.',
                'Managed high-intensity production schedules, optimizing CNC machine loading to ensure 100% equipment utilization and meeting tight turnaround deadlines.',
                'Collaborated with artisans to translate technical CAD drawings into handcrafted masterpieces, maintaining rigorous quality standards at every stage of the assembly.'            ],
            goals: [
                'Scale the product catalog through innovative wood-bending and joinery techniques',
                'Automate production management and cost calculation using shared cloud environments',
                'Achieve 100% design accuracy for self-assembling mechanical kits'
            ],
            atsSummary: 'Chief Technical Designer & Operations Manager specialized in CNC-driven manufacturing and industrial product design. Expert in CO2 laser-cutting, parametric vector engineering (CorelDRAW/Illustrator), and cloud-based operations management. Proven ability to architect complex technical joinery and manage high-volume production cycles across diverse materials.',
            atsResponsibilities: [
                'Engineered parametric technical blueprints for CO2 laser-cutting equipment, ensuring precision to 0.1mm for complex assembly kits.',
                'Developed and deployed a centralized order tracking and cost calculation system using Google Workspace, increasing operational transparency and team velocity.',
                'Innovated production techniques for functional wooden products, implementing living hinges, magnetic joints, and mortise-and-tenon assembly systems.',
                'Optimized production workflows for multi-material manufacturing, including laser engraving and cutting for wood, acrylic, leather, and textiles.',
                'Led quality assurance and technical feasibility audits, reducing production waste through optimized nesting and vector pathing.'
            ]
        }
    },
    {
        companyName: 'Magic Forest / MatterIQ',
        startDate: '2024',
        endDate: '2025',
        country: 'Georgia (Batumi)',
        position: 'Operations & Technical Lead (O2O Transformation)',
        description: {
            summary: [
                'Directed the end-to-end digital and physical transformation of a retail venture, shifting from a legacy offline model to a high-performance O2O (Offline-to-Online) ecosystem. Achieved a measurable 40–60% revenue increase within 12 months.',
                'Architected a unified retail infrastructure using Shopify, integrating inventory management, POS terminals, and digital storefronts. Managed the full-cycle digitization of 1,000+ SKUs, including SEO-optimized content and technical photography.',
                'Founded "MatterIQ" as a technical R&D branch focused on additive manufacturing (3D printing). Managed the technical commissioning of a 3D printing farm, conducting material science experiments with diverse filaments and post-processing techniques.'
            ],
            responsibilities: [
                'Executed a complete Shopify migration, automating inventory tracking, financial reporting, and multi-channel sales (Online + In-store POS).',
                'Redesigned the physical retail environment (UX/UI for physical space), optimizing product placement, lighting, and customer flow to enhance engagement.',
                'Developed unconventional "Street-to-Store" marketing assets, integrating audio-visual engagement and interactive outdoor installations (classic games, length-jump scales) to increase foot traffic.',
                'Managed the technical setup and maintenance of high-precision 3D printers, optimizing slicing parameters and material post-processing (painting/finishing).',
                'Conducted full-scale inventory audits and digitized the entire product catalog, establishing data integrity across all sales platforms.'
            ],
            goals: [
                'Increase overall revenue by 50% through O2O integration',
                'Automate 100% of retail inventory management via Shopify',
                'Establish a functional 3D printing R&D pipeline for custom souvenirs'
            ],
            // ATS-ОПТИМИЗИРОВАННЫЙ БЛОК
            atsSummary: 'Operations & Technical Lead specialized in O2O (Offline-to-Online) business transformation and additive manufacturing. Expert in Shopify ecosystem, retail automation, and 3D printing R&D. Proven track record in increasing revenue by 40–60% through digital integration and strategic physical space optimization.',
            atsResponsibilities: [
                'Led the digital transformation of a retail business, implementing a Shopify-based POS and E-commerce system that drove a 60% revenue boost.',
                'Digitized and managed a complex product catalog of 1,000+ SKUs, optimizing inventory turnover and data accuracy.',
                'Managed the technical commissioning and R&D for a 3D printing operation (MatterIQ), optimizing print techniques and material durability.',
                'Optimized physical store layouts and outdoor marketing strategies, significantly increasing customer retention and foot traffic metrics.',
                'Directed technical infrastructure maintenance, including POS hardware, networking, and high-precision 3D printing equipment.'
            ]
        }
    },
    {
        companyName: 'Summer 365',
        startDate: '2025',
        endDate: '2025',
        country: 'Georgia',
        position: 'Lead Technical Engineer (CNC Systems)',
        description: {
            summary: [
                'Spearheaded the international procurement, logistics, and commissioning of a large-format CNC system (3000*1500mm) for high-precision HPL panel processing on a construction site.',
                'Executed the full technical assembly and calibration of the CNC machinery, including gantry alignment, spindle synchronization, and stepper motor configuration. Built a dedicated industrial workstation and integrated CAM software for optimized facade-milling workflows.'
            ],
            responsibilities: [
                'Managed the end-to-end logistics and customs clearance for industrial CNC equipment imported from China to Georgia.',
                'Assembled and calibrated a 3-axis CNC router (3000*1500mm), ensuring sub-millimeter precision for internal and external HPL panel cutting.',
                'Architected the industrial control workstation, selecting and configuring specialized CAD/CAM software for optimized milling paths.',
                'Conducted rigorous stress-testing and technical handover, training the onsite team on safety protocols and G-code execution.'
            ],
            goals: [
                'Deploy a production-ready CNC system within a construction site environment',
                'Achieve 100% precision in HPL panel milling for architectural facades',
                'Establish autonomous onsite technical operations through staff training'
            ],
            // ATS-ОПТИМИЗИРОВАННЫЙ БЛОК
            atsSummary: 'Lead Technical Engineer specialized in the procurement, assembly, and commissioning of industrial CNC machinery. Expert in systems integration, hardware calibration (Gantry/Spindle/Stepper), and CAD/CAM software architecture. Proven ability to manage complex international logistics and technical handovers for large-scale manufacturing projects.',
            atsResponsibilities: [
                'Engineered the end-to-end assembly and technical commissioning of a large-format industrial CNC router, ensuring high-precision structural alignment.',
                'Orchestrated international supply chain and customs operations for heavy industrial equipment, managing risk and delivery timelines.',
                'Developed and optimized industrial milling workflows using specialized CAM software, significantly increasing production efficiency on-site.',
                'Executed comprehensive hardware calibration and performance stress-testing to meet rigorous architectural standards for HPL processing.',
                'Provided expert-level technical training on CNC operations, G-code execution, and industrial safety protocols for construction personnel.'
            ]
        }
    },
    // ... остальные записи об опыте работы ...
];


// export const skills: SkillSection[] = [
//     {
//         section: 'Frontend',
//         items: [
//             { name: 'HTML', experience: 9 },
//             { name: 'javaScript', experience: 4 },
//             { name: 'CSS', experience: 9 },
//             { name: 'SASS/LESS', experience: 5 },
//             { name: 'Git', experience: 4 },
//             { name: 'AJAX', experience: 3 },
//             { name: 'React', experience: 3 },
//             { name: 'Redux/toolkit', experience: 3 },
//             { name: 'Wordpress', experience: 8 },
//             { name: 'Elementor', experience: 7 },
//             { name: 'JSON', experience: 7 },
//             { name: 'APIs', experience: 4 },
//             { name: 'WPO', experience: 5 },
//             { name: 'Webflow', experience: 2 },
//             { name: 'Bootstrap', experience: 3 },
//             { name: 'NextJS', experience: 2 },
//             { name: 'Material UI', experience: 2 },
//             { name: 'Ant Design', experience: 1 },
//         ]
//     },
//     {
//         section: 'Backend',
//         items: [
//             { name: 'PHP (basics)', experience: 2 },
//             { name: 'Postman', experience: 3 },
//             { name: 'mySQL', experience: 3 },
//             { name: 'GraphQL', experience: 1 },
//             { name: 'phpMyAdmin', experience: 4 },
//             { name: 'Webmin/Virtualmin', experience: 3 },
//             { name: 'HeidiSQL', experience: 2 },
//             { name: 'CLI', experience: 2 },
//             { name: 'Node.js', experience: 2 },
//             { name: 'Deployment and Hosting Services', experience: 5 },
//         ]
//     },
//     {
//         section: 'Design',
//         items: [
//             { name: 'Illustrator (Ai)', experience: 7 },
//             { name: 'Figma', experience: 5 },
//             { name: 'Photoshop (Ps)', experience: 10 },
//             { name: 'UX/UI research', experience: 7 },
//             { name: 'inDesign (Id)', experience: 4 },
//             { name: 'Google material', experience: 5 },
//             { name: 'Tilda', experience: 4 },
//             { name: 'Responsive design', experience: 7 },
//             { name: 'WIX', experience: 3 },
//             { name: 'Prototyping', experience: 7 },
//             { name: 'Modeling', experience: 10 },
//             { name: 'Adobe XD', experience: 2 },
//             { name: 'Lightroom', experience: 7 },
//             { name: 'Corel Draw', experience: 5 },
//         ]
//     },
//     {
//         section: 'Management',
//         items: [
//             { name: 'Agile', experience: 3 },
//             { name: 'Team management', experience: 4 },
//             { name: 'Planning', experience: 4 },
//             { name: 'Risk management', experience: 8 },
//             { name: 'SDLC', experience: 5 },
//             { name: 'Project planing', experience: 5 },
//             { name: 'Problem solving', experience: 8 },
//             { name: 'Negotiation', experience: 8 },
//             { name: 'Technical writing', experience: 8 },
//             { name: 'Conflict management', experience: 8 },
//             { name: 'Budgeting', experience: 8 },
//             { name: 'Google DS', experience: 3 },
//             { name: 'HacknPlan', experience: 2 },
//             { name: 'Monday', experience: 3 },
//         ]
//     },
//     {
//         section: 'Other',
//         items: [
//             { name: 'Property evaluation', experience: 10 },
//             { name: 'Research skills', experience: 10 },
//             { name: 'System administration', experience: 2 },
//             { name: 'Hardware management', experience: 2 },
//             { name: 'Miro', experience: 4 },
//             { name: 'Trello', experience: 5 },
//             { name: 'Asana', experience: 5 },
//             { name: 'SEO', experience: 2 },
//             { name: 'Competitors Analysis', experience: 10 },
//             { name: 'Notion', experience: 5 },
//             { name: 'AI prompts', experience: 1 },
//             { name: 'Computer Troubleshooting and Repair', experience: 10 },
//         ]
//     },
//     {
//         section: 'Soft skills',
//         items: [
//             { name: 'Self-Study', experience: 10 },
//             { name: 'Creativity', experience: 10 },
//             { name: 'Adaptability', experience: 10 },
//             { name: 'Teamwork', experience: 10 },
//             { name: 'Leadership', experience: 10 },
//             { name: 'Customer Service', experience: 8 },
//             { name: 'Ability to Multitask', experience: 8 },
//             { name: 'Effective Time Management', experience: 8 },
//             { name: 'Mentoring', experience: 4 },
//         ]
//     },
// ];
