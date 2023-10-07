/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./App.css";
import { BaseColaboradores } from "./datos/BaseColaboradores";
import Listado from "./components/Listado";
import Formulario from "./components/Formulario";
import Alerta from "./components/Alert";
import Buscador from "./components/Buscador";

function App() {
    const [estado, setEstado] = useState({
        error: false,
        mensajeEstado: "",
        colorEstado: "",
    });
    const [todosColaboradores, setTodosColaboradores] =
        useState(BaseColaboradores);
    const [colaboradoresFiltrados, setColaboradoresFiltrados] =
        useState(BaseColaboradores);

    const agregarColaborador = (nuevoColaborador) => {
        setTodosColaboradores([...todosColaboradores, nuevoColaborador]);
        setColaboradoresFiltrados([
            ...colaboradoresFiltrados,
            nuevoColaborador,
        ]);
    };

    const filtrarColaboradores = (terminoBusqueda) => {
        const terminoBusquedaLowerCase = terminoBusqueda.toLowerCase();
        const colaboradoresFiltrados = todosColaboradores.filter(
            (colaborador) =>
                colaborador.nombre
                    .toLowerCase()
                    .includes(terminoBusquedaLowerCase) ||
                colaborador.correo
                    .toLowerCase()
                    .includes(terminoBusquedaLowerCase) ||
                colaborador.telefono
                    .toLowerCase()
                    .includes(terminoBusquedaLowerCase) ||
                colaborador.edad
                    .toLowerCase()
                    .includes(terminoBusquedaLowerCase) ||
                colaborador.cargo
                    .toLowerCase()
                    .includes(terminoBusquedaLowerCase)
        );
        setColaboradoresFiltrados(colaboradoresFiltrados);
    };

    useEffect(() => {
        setColaboradoresFiltrados(todosColaboradores);
    }, [todosColaboradores]);
    const eliminarColaborador = (id) => {
        const colaboradoresActualizados = todosColaboradores.filter(
            (colaborador) => colaborador.id !== id
        );
        setTodosColaboradores(colaboradoresActualizados);
    };
    const mensajeAlerta = (alerta) => {
        setEstado(alerta);
    };

    return (
        <>
            <h1>Lista de colaboradores</h1>
            <Buscador
                filtrar={filtrarColaboradores}
                todosColaboradores={todosColaboradores}
            />
            <div className="formulario">
                <Listado
                    listadoColaboradores={colaboradoresFiltrados}
                    eliminarColaborador={eliminarColaborador}
                />
                <div>
                    <Formulario
                        mensajeAlerta={mensajeAlerta}
                        agregarColaborador={agregarColaborador}
                    />
                    <Alerta
                        colorEstado={estado.colorEstado}
                        mensajeEstado={estado.mensajeEstado}
                    />
                </div>
            </div>
        </>
    );
}

export default App;