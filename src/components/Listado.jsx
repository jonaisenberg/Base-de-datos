/* eslint-disable react/prop-types */
import Table from "react-bootstrap/Table";

const Listado = ({ listadoColaboradores, eliminarColaborador }) => {
    return (
        <>
            <Table className="listado" striped bordered hover>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Edad</th>
                        <th>Cargo</th>
                        <th>Telefono</th>
                    </tr>
                </thead>
                <tbody>
                    {listadoColaboradores.map((index) => (
                        <tr key={index.id}>
                            <td>{index.nombre}</td>
                            <td>{index.correo}</td>
                            <td>{index.edad}</td>
                            <td>{index.cargo}</td>
                            <td>{index.telefono}</td>
                            <td>
                                <button
                                    onClick={() =>
                                        eliminarColaborador(index.id)
                                    }
                                >
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
};

export default Listado;