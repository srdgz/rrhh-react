import { Link } from "react-router-dom";

export default function ErrorScreen() {
  return (
    <section className="py-3 py-md-5 min-vh-100 d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="text-center">
              <h2 className="d-flex justify-content-center align-items-center gap-2 mb-4">
                <span className="display-1 fw-bold">4</span>
                <i className="fa-solid fa-circle-exclamation text-danger display-4"></i>
                <span className="display-1 fw-bold bsb-flip-h">4</span>
              </h2>
              <h3 className="h2 mb-2">Oops! Algo no ha ido bien.</h3>
              <p className="mb-5">
                No hemos encontrado la página que estás buscando
              </p>
              <Link
                className="btn bsb-btn-5xl btn-warning rounded-pill px-5 fs-6 m-0"
                to={"/"}
                role="button"
              >
                Ir a inicio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
