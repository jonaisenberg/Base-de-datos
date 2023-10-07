/* eslint-disable react/prop-types */
import Alert from "react-bootstrap/Alert";

function Alerta({ colorEstado, mensajeEstado }) {
    return (
        <Alert variant={colorEstado}>
            <p className="mb-0">{mensajeEstado}</p>
        </Alert>
    );
}

export default Alerta;