export default function Contact() {
  const links = [
    {
      name: 'Instagram',
      icon: 'bi-instagram',
      url: 'https://www.instagram.com/sinoeruizoficial/',
      color: 'text-danger',
    },
    {
      name: 'GitHub',
      icon: 'bi-github',
      url: 'https://github.com/CristianSinoe',
      color: 'text-dark',
    },
    {
      name: 'Threads',
      icon: 'bi-threads',
      url: 'https://www.threads.com/@sinoeruizoficial',
      color: 'text-dark',
    },
    {
      name: 'Facebook',
      icon: 'bi-facebook',
      url: 'https://www.facebook.com/share/16MwQSMt8F/',
      color: 'text-primary',
    },
    {
      name: 'X (Twitter)',
      icon: 'bi-twitter-x',
      url: 'https://x.com/sinoe_ruiz',
      color: 'text-dark',
    },
    {
      name: 'VK',
      icon: 'bi-vimeo',
      url: 'https://m.vk.com/sinoeruiz',
      color: 'text-info',
    },
    {
      name: 'TikTok',
      icon: 'bi-tiktok',
      url: 'https://www.tiktok.com/@sinoe_ruiz?_r=1&_t=ZS-91A4dlxPrIO',
      color: 'text-dark',
    },
  ];

  return (
    <section id="contact" className="my-5 text-center reveal">
      <h2 className="fw-bold mb-4">Contacto</h2>

      <p className="lead mb-4">
        Puedes encontrarme y seguir mi trabajo en mis redes oficiales, o escribirme directamente:
      </p>

      <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
        {links.map((link, idx) => (
          <a
            key={idx}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-success d-flex align-items-center gap-2 px-3 py-2"
            title={`Visitar ${link.name}`}
          >
            <i className={`bi ${link.icon} fs-5 ${link.color}`}></i>
            <span>{link.name}</span>
          </a>
        ))}
      </div>

      <div className="mt-4">
        <a
          href="mailto:sinoeruizoficial@gmail.com"
          className="btn btn-success btn-lg px-4 py-2"
        >
          <i className="bi bi-envelope-fill me-2"></i>
          sinoeruizoficial@gmail.com
        </a>
      </div>
    </section>
  );
}
