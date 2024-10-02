import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { urlBase } from "../constants/constants";

export default function AgregarEmpleado() {
  const navigation = useNavigate();
  const [empleado, setEmpleado] = useState({
    nombre: "",
    apellido1: "",
    apellido2: "",
    departamento: "",
    sueldo: "",
  });
  const { nombre, apellido1, apellido2, departamento, sueldo } = empleado;

  const onInputChange = (e) => {
    setEmpleado({ ...empleado, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      await axios.post(urlBase, empleado);
      navigation("/");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="container">
      <div className="container text-center my-5">
        <h3>Agregar nuevo empleado</h3>
      </div>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="mb-2">
          <label htmlFor="nombre" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            name="nombre"
            required={true}
            value={nombre}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="apellido1" className="form-label">
            Primer Apellido
          </label>
          <input
            type="text"
            className="form-control"
            id="apellido1"
            name="apellido1"
            required={true}
            value={apellido1}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="apellido2" className="form-label">
            Segundo Apellido
          </label>
          <input
            type="text"
            className="form-control"
            id="apellido2"
            name="apellido2"
            required={true}
            value={apellido2}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="departamento" className="form-label">
            Departamento
          </label>
          <input
            type="text"
            className="form-control"
            id="departamento"
            name="departamento"
            required={true}
            value={departamento}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="sueldo" className="form-label">
            Sueldo
          </label>
          <input
            type="text"
            className="form-control"
            id="sueldo"
            name="sueldo"
            required={true}
            value={sueldo}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-warning btn-md me-2">
            Agregar
          </button>
          <Link to="/" className="btn btn-danger btn-md ms-2">
            Regresar
          </Link>
        </div>
      </form>
    </div>
  );
}
