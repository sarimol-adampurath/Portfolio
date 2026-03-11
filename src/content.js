export const content = {
  en: {
    nav: {
      brand: 'SARIS.DEV',
      links: [
        { label: 'Projects', href: '#projects' },
        { label: 'Stack', href: '#stack' },
      ],
      githubLabel: 'GitHub',
      linkedinLabel: 'LinkedIn',
      resume: 'Resume',
      resumeHref: '/resume-en.pdf',
      languageToggle: 'DE',
      languageToggleAria: 'Switch portfolio language to German',
    },
    hero: {
      eyebrow: 'Portfolio',
      title: 'I build scalable digital systems',
      description: 'Developing high-performance interfaces and resilient frontend architectures for ambitious products.',
      terminalLabel: 'Code Terminal',
      terminalSkillObject: `{
    "role": "Frontend Engineer",
    "focus": ["Performance", "Scalability", "Accessibility"],
    "ux_philosophy": {
        "priority": "User-Centric Design",
        "principles": ["Heuristic Evaluation", 
                       "Atomic Design"],
        "tools": ["Figma", "Framer Motion"]
    },
    "metrics_driven": true
}`,
    },
    stack: {
      title: 'Tech Stack',
      description: 'Production-focused tooling for building scalable, maintainable, and high-performance digital systems.',
      groups: [
        {
          title: 'Frontend',
          items: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Bootstrap', 'Vite'],
        },
        {
          title: 'Design',
          items: ['Figma', 'Wireframing', 'Prototyping'],
        },
        {
          title: 'Backend',
          items: ['Django', 'Python', 'REST APIs', 'PostgreSQL'],
        },
        {
          title: 'DevOps & Quality',
          items: ['Docker', 'GitHub Actions', 'Jest', 'Vitest'],
        },
        {
          title: 'AI & Tooling',
          items: ['GitHub Copilot', 'Prompt Engineering', 'AI-Assisted Development'],
        },
      ],
    },
    projects: {
      title: 'Projects',
      cta: 'Core Stack',
      items: [
        {
          name: 'Nachhaltigkeits Manager',
          summary: 'Built a React and DRF platform for tracking sustainability data, monitoring environmental impact, and supporting better reporting workflows.',
          tags: ['React', 'DRF API', 'PostgreSQL'],
          link: 'https://nachhaltigkeits-manager.onrender.com',
        },
        {
          name: 'Paws and Snaps',
          summary: 'Developed a social web app for pet owners to share posts, connect with the community, and manage content through a DRF-backed API.',
          tags: ['React', 'DRF API', 'PostgreSQL'],
          link: 'https://paws-and-snaps-clh3-e70gcplq7-sarimol-adampuraths-projects.vercel.app/',
        },
        {
          name: 'Bite Buzz',
          summary: 'Created a React-based food discovery interface focused on restaurant browsing, user reviews, and a smoother search experience for diners.',
          tags: ['React', 'Node.js', 'Netlify'],
          link: 'https://main--bite-buzz.netlify.app/',
        },
        {
          name: 'Swarna Jewellery',
          summary: 'Designed and built a branded landing page for a jewellery business to showcase collections, strengthen online presence, and support client enquiries.',
          tags: ['React', 'Node.js', 'Netlify'],
          link: 'https://swarna-jewellery.netlify.app/',
        },
      ],
    },
    contact: {
      title: 'Contact',
      description: "Let's discuss your project. Share a few details and I'll get back to you.",
      labels: {
        name: 'Name',
        email: 'Email Address',
        message: 'Message',
      },
      placeholders: {
        name: 'Your name',
        email: 'you@example.com',
        message: 'Tell me about your idea...',
      },
      send: 'Send Message',
      sending: 'Sending...',
      success: 'Message sent successfully.',
      error: 'Failed to send your message.',
    },
  },
  de: {
    nav: {
      brand: 'SARIS.DEV',
      links: [
        { label: 'Projekte', href: '#projects' },
        { label: 'Tech Stack', href: '#stack' },
      ],
      githubLabel: 'GitHub',
      linkedinLabel: 'LinkedIn',
      resume: 'Lebenslauf',
      resumeHref: '/resume-de.pdf',
      languageToggle: 'EN',
      languageToggleAria: 'Switch portfolio language to English',
    },
    hero: {
      eyebrow: 'Portfolio',
      title: 'Ich entwickle skalierbare digitale Systeme',
      description: 'Ich entwickle leistungsstarke Benutzeroberflächen und robuste Frontend-Architekturen für ambitionierte Produkte.',
      terminalLabel: 'Code Terminal',
      terminalSkillObject: 
    `{
    "rolle": "Frontend-Entwicklerin",
    "fokus": ["Performance", "Skalierbarkeit", 
              "Barrierefreiheit"],
    "ux_philosophie": {
        "priorität": "Nutzerzentriertes Design",
        "prinzipien": ["Heuristische Evaluation",
                        "Atomic Design"],
        "tools": ["Figma", "Framer Motion"]},
    "datengetrieben": true
}`,
    },
    stack: {
      title: 'Tech Stack',
      description: 'Produktionsorientierte Tools für skalierbare, wartbare und leistungsstarke digitale Systeme.',
      groups: [
        {
          title: 'Frontend',
          items: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Bootstrap', 'Vite'],
        },
        {
          title: 'Design',
          items: ['Figma', 'Wireframing', 'Prototyping'],
        },
        {
          title: 'Backend',
          items: ['Django', 'Python', 'REST APIs', 'PostgreSQL'],
        },
        {
          title: 'DevOps & Qualitaet',
          items: ['Docker', 'GitHub Actions', 'Jest', 'Vitest'],
        },
        {
          title: 'KI & Tooling',
          items: ['GitHub Copilot', 'Prompt Engineering', 'AI-Assisted Development'],
        },
      ],
    },
    projects: {
      title: 'Projekte',
      cta: 'Tech Stack',
      items: [
        {
          name: 'Nachhaltigkeits Manager',
          summary: 'Entwickelt mit React und DRF, um Nachhaltigkeitsdaten zu erfassen, Umweltauswirkungen zu überwachen und Reporting-Prozesse zu verbessern.',
          tags: ['React', 'DRF API', 'PostgreSQL'],
          link: 'https://nachhaltigkeits-manager.onrender.com',
        },
        {
          name: 'Paws and Snaps',
          summary: 'Eine Social-Web-App für Tierhalter entwickelt, um Inhalte zu teilen, Community-Interaktionen zu fördern und Inhalte über eine DRF-API zu verwalten.',
          tags: ['React', 'DRF API', 'PostgreSQL'],
          link: 'https://paws-and-snaps-clh3-e70gcplq7-sarimol-adampuraths-projects.vercel.app/',
        },
        {
          name: 'Bite Buzz',
          summary: 'Eine React-basierte Food-Discovery-Oberfläche entwickelt, mit Fokus auf Restaurantsuche, Bewertungen und eine reibungslosere Nutzererfahrung.',
          tags: ['React', 'Node.js', 'Netlify'],
          link: 'https://main--bite-buzz.netlify.app/',
        },
        {
          name: 'Swarna Jewellery',
          summary: 'Eine gebrandete Landingpage für ein Schmuckunternehmen gestaltet und umgesetzt, um Kollektionen zu präsentieren und Kundenanfragen zu unterstützen.',
          tags: ['React', 'Node.js', 'Netlify'],
          link: 'https://swarna-jewellery.netlify.app/',
        },
      ],
    },
    contact: {
      title: 'Kontakt',
      description: 'Lassen Sie uns über Ihr Projekt sprechen. Teilen Sie mir ein paar Details mit und ich melde mich bei Ihnen.',
      labels: {
        name: 'Name',
        email: 'E-Mail-Adresse',
        message: 'Nachricht',
      },
      placeholders: {
        name: 'Ihr Name',
        email: 'sie@example.com',
        message: 'Erzählen Sie mir von Ihrer Idee...',
      },
      send: 'Nachricht senden',
      sending: 'Wird gesendet...',
      success: 'Nachricht erfolgreich gesendet.',
      error: 'Ihre Nachricht konnte nicht gesendet werden.',
    },
  },
}