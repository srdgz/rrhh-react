import springboot from "../assets/springboot.png";

export default function Footer() {
  return (
    <footer
      className="footer bg-light text-center text-lg-start"
      style={{
        position: "sticky",
        bottom: 0,
        left: 0,
        right: 0,
        marginTop: "220px",
      }}
    >
      <div className="text-center p-3">
        <p className="mb-0">
          Aplicación realizada por <strong>Sandra Rodríguez</strong> con React{" "}
          <i className="fa-brands fa-react text-primary"></i> y SpringBoot{" "}
          <img src={springboot} alt="SpringBoot Icon" width="15" />
        </p>
        <div className="mt-2">
          <a
            href="https://github.com/srdgz"
            target="_blank"
            rel="noopener noreferrer"
            className="me-3"
          >
            <i className="fa-brands fa-square-github fs-4"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/sandra-rodriguez-reyes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin fs-4"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
