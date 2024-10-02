import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function TablaEmpleados({ empleado, onDelete }) {
  return (
    <tr>
      <th scope="row">{empleado.idEmpleado}</th>
      <td>{empleado.nombre}</td>
      <td>{empleado.apellido1}</td>
      <td>{empleado.apellido2}</td>
      <td>{empleado.departamento}</td>
      <td>
        {new Intl.NumberFormat("es-ES", {
          style: "currency",
          currency: "EUR",
        }).format(empleado.sueldo)}
      </td>
      <td className="text-center">
        <div>
          <Link
            to={`/editar/${empleado.idEmpleado}`}
            className="btn btn-warning btn-sm me-2 my-2 my-lg-0"
          >
            Editar
          </Link>
          <button
            onClick={() => onDelete(empleado.idEmpleado)}
            className="btn btn-danger btn-sm"
          >
            Eliminar
          </button>
        </div>
      </td>
    </tr>
  );
}

TablaEmpleados.propTypes = {
  empleado: PropTypes.shape({
    idEmpleado: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired,
    apellido1: PropTypes.string.isRequired,
    apellido2: PropTypes.string,
    departamento: PropTypes.string.isRequired,
    sueldo: PropTypes.number.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};
