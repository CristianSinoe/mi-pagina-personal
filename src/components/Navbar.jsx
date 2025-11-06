export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">Sinoe Ruiz</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="nav" className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a href="#about" className="nav-link">Sobre mí</a></li>
            <li className="nav-item"><a href="#projects" className="nav-link">Proyectos</a></li>
            <li className="nav-item"><a href="#contact" className="nav-link">Contacto</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
