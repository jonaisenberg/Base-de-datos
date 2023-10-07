/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

const Buscador = ({ filtrar }) => {
    const handleBuscar = (terminoBusqueda) => {
        const terminoBusquedaLowerCase = terminoBusqueda.toLowerCase();
        filtrar(terminoBusquedaLowerCase);
    };

    return (
        <div>
            <input
                className="form-control mt-3"
                type="text"
                placeholder="Buscar colaborador"
                onChange={(e) => handleBuscar(e.target.value)}
            />
        </div>
    );
};

export default Buscador;