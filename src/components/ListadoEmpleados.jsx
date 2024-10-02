import { useEffect, useState } from "react";
import axios from "axios";
import TablaEmpleados from "./TablaEmpleados";
import { urlBase } from "../constants/constants";

export default function ListadoEmpleados() {
  const [empleados, setEmpleados] = useState([]);
  const [ordenAscendente, setOrdenAscendente] = useState(false);
  const [departamentos, setDepartamentos] = useState([]);
  const [departamentoFiltro, setDepartamentoFiltro] = useState("");

  const cargarEmpleados = async () => {
    try {
      const resultado = await axios.get(urlBase);
      setEmpleados(resultado.data);
      const departamentosUnicos = Array.from(
        new Set(resultado.data.map((empleado) => empleado.departamento))
      );
      setDepartamentos(departamentosUnicos);
    } catch (error) {
      console.error(error.message);
    }
  };

  const eliminarEmpleado = async (id) => {
    try {
      await axios.delete(`${urlBase}/${id}`);
      cargarEmpleados();
    } catch (error) {
      console.error(error.message);
    }
  };

  const ordenarEmpleadosPorSueldo = () => {
    const nuevosEmpleados = [...empleados];
    nuevosEmpleados.sort((a, b) => {
      return ordenAscendente ? a.sueldo - b.sueldo : b.sueldo - a.sueldo;
    });
    setEmpleados(nuevosEmpleados);
    setOrdenAscendente(!ordenAscendente);
  };

  const handleDepartamento = (e) => {
    setDepartamentoFiltro(e.target.value);
  };

  const empleadosFiltrados = departamentoFiltro
    ? empleados.filter(
        (empleado) => empleado.departamento === departamentoFiltro
      )
    : empleados;

  useEffect(() => {
    cargarEmpleados();
  }, []);

  return (
    <div className="container">
      <div className="container text-center my-5">
        <h1>Listado general de empleados</h1>
      </div>
      <div className="mb-3">
        <label htmlFor="departamentoFiltro" className="form-label">
          Filtrar por departamento:
        </label>
        <select
          id="departamentoFiltro"
          className="form-select mb-4"
          value={departamentoFiltro}
          onChange={handleDepartamento}
        >
          <option value="">Todos</option>
          {departamentos.map((departamento, index) => (
            <option key={index} value={departamento}>
              {departamento}
            </option>
          ))}
        </select>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-hover align-middle">
          <thead className="table-primary align-middle">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Nombre</th>
              <th scope="col">Primer Apellido</th>
              <th scope="col">Segundo Apellido</th>
              <th scope="col">Departamento</th>
              <th scope="col">
                Sueldo
                <button
                  onClick={ordenarEmpleadosPorSueldo}
                  className="btn btn-link align-items-center"
                >
                  {ordenAscendente ? (
                    <i className="fa-solid fa-arrow-down-wide-short"></i>
                  ) : (
                    <i className="fa-solid fa-arrow-up-short-wide"></i>
                  )}
                </button>
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {empleadosFiltrados.map((empleado) => (
              <TablaEmpleados
                key={empleado.idEmpleado}
                empleado={empleado}
                onDelete={eliminarEmpleado}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
