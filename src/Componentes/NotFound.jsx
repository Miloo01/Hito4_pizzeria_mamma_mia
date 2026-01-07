import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import fondoError from '../assets/images/fondoError.png'




const NotFound = () => {
    return (
        <Container
            fluid
            className="pt-5 text-center position-relative"
            style={{
                backgroundImage: `url(${fondoError})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "150vh",
                color: "white",

            }}
        >

            <Link
                to="/"
                className="text-black ms-3 text-decoration-none bg-light p-2 rounded position-absolute"
                style={{
                    bottom: "250px",
                    left: "50%",
                    transform: "translateX(-50%)",

                }}
            >
                <button
                    className="btn btn-light"
                    style={{
                        background: "linear-gradient(to right, #FF8800, #F15A24)", // Degradado naranja
                        color: "white",
                        padding: "12px 30px",
                        borderRadius: "50px", // Bordes muy redondeados
                        fontWeight: "bold",
                        fontSize: "1.1rem",
                        textDecoration: "none",
                        display: "inline-block",
                        boxShadow: "0 4px 15px rgba(241, 90, 36, 0.4)", // Sombra naranja suave
                        transition: "transform 0.2s ease",
                    }}>
                    🏠 Volver al inicio
                </button>
            </Link>


        </Container>

    );
};

export default NotFound;