// src/components/Projects.jsx

// Mapa de clases por tecnología (coincide con las CSS .badge-tech--*)
const TAG_CLASS_MAP = {
  python: 'badge-tech--python',
  java: 'badge-tech--java',
  primeng: 'badge-tech--primeng',
  'prime ng': 'badge-tech--primeng',
  recaptcha: 'badge-tech--recaptcha',
  'spring boot': 'badge-tech--spring',
  spring: 'badge-tech--spring',
  angular: 'badge-tech--angular',
  react: 'badge-tech--react',
  node: 'badge-tech--node',
  'node.js': 'badge-tech--node',
  express: 'badge-tech--express',
  'express.js': 'badge-tech--express',
  postgresql: 'badge-tech--postgresql',
  prisma: 'badge-tech--prisma',
  'socket.io': 'badge-tech--node',
  docker: 'badge-tech--docker',
  fastapi: 'badge-tech--fastapi',
  jwt: 'badge-tech--jwt',
  otp: 'badge-tech--otp',
  seguridad: 'badge-tech--seguridad',
  ia: 'badge-tech--ia',
  hopfield: 'badge-tech--ia',
  mvc: 'text-bg-secondary',
  swing: 'text-bg-secondary',
  spa: 'text-bg-secondary',
  'ci/cd': 'text-bg-secondary',
};

function tagToClass(tag) {
  const key = String(tag || '').toLowerCase().trim();
  return TAG_CLASS_MAP[key] || 'text-bg-secondary';
}

export default function Projects() {
  const projects = [
    {
      title: 'REPRODUCTOR_MUSIC',
      img: 'project6.jpg',
      desc:
        'Reproductor de música de escritorio en Java (Swing). Biblioteca, playlists, metadatos y control de reproducción. Arquitectura MVC/Observer.',
      url: 'https://github.com/CristianSinoe/reproductor_music',
      tags: ['Java', 'Swing', 'MVC'],
    },
    {
      title: 'PROYECTO_AVICOLA',
      img: 'project2.jpg',
      desc:
        'SPA en Angular para gestión de operaciones avícolas: roles, dashboards, zonas/kazetas y métricas. Usa datos mock (data.json).',
      url: 'https://github.com/CristianSinoe/PROYECTO_AVICOLA',
      tags: ['Angular', 'PrimeNG', 'SPA'],
    },
    {
      title: 'auth-mfa-spring-react',
      img: 'project4.jpg',
      desc:
        'Autenticación MFA: Spring Boot + React, JWT HS384, OTP por email (expira en 5 min), límite de intentos y cooldown de reenvío.',
      url: 'https://github.com/CristianSinoe/auth-mfa-spring-react',
      tags: ['Spring Boot', 'React', 'JWT', 'OTP'],
    },
    {
      title: 'MovieBook (backend)',
      img: 'project5.jpg',
      desc:
        'API REST para red social de cine: auth con JWT, CRUD de posts, comentarios, reacciones y subida de imágenes.',
      url: 'https://github.com/CristianSinoe/springboot_moviebook',
      secondary: {
        label: 'Frontend',
        href: 'https://github.com/CristianSinoe/moviebook_frontend',
      },
      tags: ['Spring Boot', 'PostgreSQL', 'Angular'],
    },
    {
      title: 'MLOps Stroke Prediction',
      img: 'project1.jpg',
      desc:
        'Pipeline MLOps: entrenamiento (RandomForest), API de inferencia con FastAPI, Docker y CI/CD con GitHub Actions.',
      url: 'https://github.com/CristianSinoe/-deploy_ml_sinoe_ruiz',
      tags: ['Python', 'FastAPI', 'Docker', 'CI/CD'],
    },
    {
      title: 'Hopfield Talacha',
      img: 'project7.jpg',
      desc:
        'Red de Hopfield hecha “a mano” en Python puro: sin NumPy, lógica de memoria asociativa y energía implementadas con listas.',
      url: 'https://github.com/CristianSinoe/pyton_excel_sinoe_ruiz',
      tags: ['Python', 'IA', 'Hopfield'],
    },
    {
      title: 'Audio Store API',
      img: 'project8.jpg',
      desc:
        'API REST con Node + Express + PostgreSQL para catálogo de audio. Seguridad con API Key, helmet, rate-limit, CORS y validación.',
      url: 'https://github.com/CristianSinoe/api_as_isw',
      tags: ['Node', 'Express', 'PostgreSQL', 'Seguridad'],
    },
    {
      title: 'Noti-Tasks (Tiempo real)',
      img: 'project11.jpg',
      desc:
        'Gestor de tareas en tiempo real (monorepo): Angular standalone, API con Express + Prisma, Socket.IO y notificaciones programadas.',
      url: 'https://github.com/CristianSinoe/noti-tasks-01',
      tags: ['Angular', 'Express', 'Prisma', 'Socket.IO'],
    },
    {
      title: 'Formulario sobre Uso de Redes Sociales (reCAPTCHA)',
      img: 'project10.jpg',
      desc:
        'App full-stack con React + Express + PostgreSQL para recolectar datos de uso de redes sociales. Protegido con Google reCAPTCHA v2, rate limiting, validación en cliente y servidor, y cabeceras seguras con helmet.',
      url: 'https://github.com/CristianSinoe/formulario_redes_recapcha',
      tags: ['React', 'Express', 'PostgreSQL', 'reCAPTCHA', 'Seguridad'],
    },
  ];

  return (
    <section id="projects" className="my-5 reveal">
      <h2 className="fw-bold mb-4 text-center">Proyectos</h2>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {projects.map((p, idx) => (
          <div className="col" key={idx}>
            <div
              className="card h-100 shadow-sm card-hover reveal"
              style={{ transitionDelay: `${(idx % 6) * 60}ms` }}
            >
              <img
                src={`${import.meta.env.BASE_URL}${p.img}`}
                className="card-img-top"
                alt={p.title}
                loading="lazy"
                width="1170"
                height="780"
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{p.title}</h5>
                <p className="card-text">{p.desc}</p>

                <div className="mb-3">
                  {p.tags?.map((t) => (
                    <span
                      key={t}
                      className={`badge badge-tech me-1 ${tagToClass(t)}`}
                      aria-label={`Tecnología: ${t}`}
                      title={t}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-auto d-flex gap-2">
                  <a
                    className="btn btn-success btn-sm"
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    title="Abrir en GitHub"
                  >
                    Ver más <i className="bi bi-box-arrow-up-right ms-1"></i>
                  </a>

                  {p.secondary && (
                    <a
                      className="btn btn-outline-success btn-sm"
                      href={p.secondary.href}
                      target="_blank"
                      rel="noreferrer"
                      title={`Abrir ${p.secondary.label}`}
                    >
                      {p.secondary.label}{' '}
                      <i className="bi bi-box-arrow-up-right ms-1"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
