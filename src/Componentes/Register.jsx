import React from 'react'
import { useState } from 'react'

const Register = () => {

     //Estados del formulario
    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [confirmarcontraseña, setConfirmarContraseña] = useState('');

    //Estado para los errores
    const [error, setError] = useState(false);

    const validarDatos = (e) => {
        e.preventDefault();

        //Validación;
        if (!email.trim() || !contraseña.trim() || !confirmarcontraseña.trim())
            {
            setError(true);
            return;
        }

        // Si el formulario se envía correctamente devolvemos todos nuestros estados al inicial y reseteamos el formulario
        setError(false);
        setEmail('');
        setContraseña('');
        setConfirmarContraseña('');
    };




    return (
        <>
            <form className="formulario" onSubmit={validarDatos}>
                {error ? <p>Todos los campos son obligatorios</p> : null}

                
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="text"
                        name="email"
                        className="form-control"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>

                <div className="form-group">
                    <label>Contraseña</label>
                    <input
                        type="text"
                        name="contraseña"
                        className="form-control"
                        onChange={(e) => setContraseña(e.target.value)}
                        value={contraseña}
                    />
                </div>

                <div className="form-group">
                    <label>Confirmar Contraseña</label>
                    <input
                        type="text"
                        name="confirmarcontraseña"
                        className="form-control"
                        onChange={(e) => setConfirmarContraseña(e.target.value)}
                        value={confirmarcontraseña}
                    />
                </div>

                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>

            <hr />
            <h1> Datos ingresados</h1>
            {email} {contraseña} {confirmarcontraseña} 
        </>


    )
}

export default Register