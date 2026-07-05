export const languages = {
  es: "Español",
  en: "English",
};

export const defaultLang = "es";

export const ui = {
  es: {
    "nav.home": "Home",
    "nav.formacion": "Formación",
    "nav.habilidades": "Habilidades",
    "nav.proyectos": "Proyectos",
    "nav.experiencia": "Experiencia",
    "nav.contacto": "Contacto",
    "nav.blog": "Blog",
    "hero.greeting": "Hola, soy",
    "hero.contact": "Contactar",
    "hero.download_cv": "Descargar CV",
    "hero.cv_link": "/CV_Pablo_Aranda_Ingeniero_Informatica.pdf",
    "hero.cv_name": "CV_Pablo_Aranda_Ingeniero_Informatica.pdf",
    "hero.degree": "Ingeniería Informática en Sistemas de Información",
    "hero.description1": "Estudiante de último año de ",
    "hero.description2":
      ", enfocado en el desarrollo de software y la optimización de procesos tecnológicos. Con sólidos conocimientos en algoritmia, Machine Learning y gestión de proyectos entre otros, busco aportar soluciones técnicas innovadoras que promuevan el crecimiento de la organización. Comprometido con la excelencia y el aprendizaje continuo, busco integrar mis competencias en el sector de la ingeniería para generar un impacto positivo y medible en los resultados del equipo.",

    "education.title": "Formación",
    "education.degree": "Ingeniería Informática en Sistemas de Información",
    "education.degree_date": "Universidad Pablo de Olavide • 2022 - Actualidad",
    "education.degree_desc":
      "Diseño de Software, APIs, Algoritmia, Machine Learning, Análisis de Datos y Gestión de Sistemas y BBDD.",
    "education.ml_title": "Formación sobre ML & DL",
    "education.ml_date": "Kaggle y Coursera • 2026",

    "experience.title": "Experiencia",
    "experience.job1_title": "Socorrista",
    "experience.job1_desc1":
      "Desarrollo de habilidades de atención al detalle, responsabilidad individual y resolución rápida de problemas.",
    "experience.job1_desc2":
      "Cumplimiento de estrictos protocolos de seguridad y prevención en instalaciones de alta concurrencia.",

    "projects.title": "Proyectos Destacados",

    "skills.title": "Habilidades",
    "skills.web": "Desarrollo Web",
    "skills.db": "Bases de Datos y Software",
    "skills.arch": "Arquitecturas",
    "skills.tools": "Herramientas",
    "skills.methodologies": "Metodologías",

    "others.title": "Más sobre mí",
    "others.languages_title": "Idiomas",
    "others.spanish": "Español",
    "others.native": "Nativo",
    "others.english": "Inglés",
    "others.interests_title": "Intereses",
    "others.interests_desc":
      "Fuera del código, me encanta la fotografía de calle, el diseño gráfico minimalista en 3D y aprender sobre arquitectura.",
    "others.photography": "Fotografía",
    "others.3d": "Diseño 3D",
    "others.architecture": "Arquitectura",

    "contact.title": "Contacto",
    "contact.subtitle": "Contacta conmigo a través de Gmail",
    "contact.name_label": "Nombre",
    "contact.name_placeholder": "Tu nombre",
    "contact.email_placeholder": "tu@email.com",
    "contact.msg_label": "Mensaje",
    "contact.msg_placeholder": "Motivo de contacto",
    "contact.submit": "Enviar mensaje",
    "footer.rights": "Todos los derechos reservados.",
  },
  en: {
    "nav.home": "Home",
    "nav.formacion": "Education",
    "nav.habilidades": "Skills",
    "nav.proyectos": "Projects",
    "nav.experiencia": "Experience",
    "nav.contacto": "Contact",
    "nav.blog": "Blog",
    "hero.greeting": "Hi, I am",
    "hero.contact": "Contact me",
    "hero.download_cv": "Download Resume",
    "hero.cv_link": "/Resume_Pablo_Aranda_Computer_Engineer.pdf",
    "hero.cv_name": "Resume_Pablo_Aranda_Computer_Engineer.pdf",
    "hero.degree": "Computer Engineering & Information Systems",
    "hero.description1": "Senior student in ",
    "hero.description2":
      ", focused on software development and the optimization of technological processes. With solid knowledge in algorithms, Machine Learning, and project management among others, I seek to provide innovative technical solutions that drive organizational growth. Committed to excellence and continuous learning, I aim to integrate my skills in the engineering sector to generate a positive and measurable impact on team results.",

    "education.title": "Education",
    "education.degree": "B.S. in Computer Engineering & Information Systems",
    "education.degree_date": "Universidad Pablo de Olavide • 2022 - Present",
    "education.degree_desc":
      "Software Design, APIs, Algorithms, Machine Learning, Data Analysis, and Systems & Database Management.",
    "education.ml_title": "Machine & Deep Learning Training",
    "education.ml_date": "Kaggle and Coursera • 2026",

    "experience.title": "Experience",
    "experience.job1_title": "Lifeguard",
    "experience.job1_desc1":
      "Developed strong attention to detail, individual responsibility, and quick problem-solving skills.",
    "experience.job1_desc2":
      "Ensured compliance with strict safety and prevention protocols in high-traffic facilities.",

    "projects.title": "Featured Projects",

    "skills.title": "Skills",
    "skills.web": "Web Development",
    "skills.db": "Databases & Software",
    "skills.arch": "Architectures",
    "skills.tools": "Tools",
    "skills.methodologies": "Methodologies",

    "others.title": "More about me",
    "others.languages_title": "Languages",
    "others.spanish": "Spanish",
    "others.native": "Native",
    "others.english": "English",
    "others.interests_title": "Interests",
    "others.interests_desc":
      "Outside of code, I love street photography, minimalist 3D graphic design, and learning about architecture.",
    "others.photography": "Photography",
    "others.3d": "3D Design",
    "others.architecture": "Architecture",

    "contact.title": "Contact",
    "contact.subtitle": "Get in touch with me via Gmail",
    "contact.name_label": "Name",
    "contact.name_placeholder": "Your name",
    "contact.email_placeholder": "you@email.com",
    "contact.msg_label": "Message",
    "contact.msg_placeholder": "Reason for contact",
    "contact.submit": "Send message",
    "footer.rights": "All rights reserved.",
  },
} as const;

// Utilidad para extraer el idioma de la URL actual
export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

// Utilidad para traducir
export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}
