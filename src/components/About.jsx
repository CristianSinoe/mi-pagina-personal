// src/components/About.jsx
export default function About() {
  return (
    <section id="about" className="text-center my-5 reveal">
      <h2 className="fw-bold mb-3">Sobre mí</h2>
      <img
        src={`${import.meta.env.BASE_URL}profile.jpg`}
        alt="Foto de perfil"
        className="rounded-circle mb-3 shadow-sm"
        width="150"
        height="150"
        loading="lazy"
      />
      <p className="lead mx-auto" style={{ maxWidth: '720px', lineHeight: 1.6 }}>
        Soy <strong>Cristian Sinoe Hernández Ruiz</strong>, estudiante de Ingeniería en Software en la
        Universidad Veracruzana (Facultad de Negocios y Tecnologías). Me apasiona el desarrollo de software,
        la organización de proyectos y el aprendizaje constante. Busco crear soluciones tecnológicas
        funcionales y bien diseñadas, que reflejen compromiso, disciplina y atención al detalle, aplicando
        siempre una mentalidad analítica y orientada a la mejora continua.
      </p>
    </section>
  );
}
