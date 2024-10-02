import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold ps-3 ps-lg-5" href="/">
          Sistema de RRHH
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <Link
              className="nav-link text-white ps-3 pe-lg-4"
              aria-current="page"
              to="/"
            >
              Inicio
            </Link>
            <Link className="nav-link text-white ps-3 pe-lg-5" to="/agregar">
              Agregar empleado
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
