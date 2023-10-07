/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";

const Formulario = ({ mensajeAlerta, agregarColaborador }) => {
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [edad, setEdad] = useState("");
    const [cargo, setCargo] = useState("");
    const [telefono, setTelefono] = useState("");
    const formatoCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const validarInput = (e) => {
        e.preventDefault();
        if (
            nombre === "" ||
            correo === "" ||
            edad === "" ||
            cargo === "" ||
            telefono === ""
        ) {
            mensajeAlerta({
                colorEstado: "danger mt-3",
                mensajeEstado: "Completa todos los campos!",
            });
            return;
        }
        if (!formatoCorreo.test(correo)) {
            mensajeAlerta({
                colorEstado: "danger mt-3",
                mensajeEstado: "El formato del correo no es el apropiado!",
            });
            return;
        }
        const nuevoColaborador = {
            id: Date.now().toString(),
            nombre,
            correo,
            edad,
            cargo,
            telefono,
        };
        agregarColaborador(nuevoColaborador);
        setNombre("");
        setCorreo("");
        setEdad("");
        setCargo("");
        setTelefono("");
        mensajeAlerta({
            colorEstado: "success mt-3",
            mensajeEstado: "Colaborador agregado!",
        });
    };

    return (
        <>
            <form onSubmit={validarInput} noValidate>
                <h1>Agregar colaborador</h1>
                <div className="form-group">
                    <input
                        className="form-control mt-3"
                        type="text"
                        placeholder="Nombre del colaborador"
                        onChange={(e) => setNombre(e.target.value)}
                        value={nombre}
                    />
                    <input
                        className="form-control mt-3"
                        type="email"
                        placeholder="Email del colaborador"
                        onChange={(e) => setCorreo(e.target.value)}
                        value={correo}
                    />
                    <input
                        className="form-control mt-3"
                        type="number"
                        placeholder="Edad del colaborador"
                        onChange={(e) => setEdad(e.target.value)}
                        value={edad}
                    />
                    <input
                        className="form-control mt-3"
                        type="text"
                        placeholder="Cargo del colaborador"
                        onChange={(e) => setCargo(e.target.value)}
                        value={cargo}
                    />
                    <input
                        className="form-control mt-3"
                        type="number"
                        placeholder="Telefono del colaborador"
                        onChange={(e) => setTelefono(e.target.value)}
                        value={telefono}
                    />
                    <button
                        className="btn btn-success form-control mt-3"
                        type="submit"
                    >
                        Agregar colaborador
                    </button>
                </div>
            </form>
        </>
    );
};

export default Formulario;