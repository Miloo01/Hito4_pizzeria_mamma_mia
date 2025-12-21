import React from 'react'
import { useState, useEffect } from "react";

const Pizza = () => {
    // 3 - pizza guardará los valores traídos desde la API
    const [pizza, setPizza] = useState({});

    // 2 - Llamamos a la función consultarApi al momento de montar el componente
    useEffect(() => {
        consultarApi();
    }, []);

    // 1 - Función que consulta la API
    const consultarApi = async () => {
        const url = "http://localhost:5000/api/pizzas/p001"; // Endpoint de la API
        const response = await fetch(url);
        const data = await response.json();
        setPizza(data); // se guarda la pizza completa en el estado
    };

    return (

        <div className="container my-5 d-flex justify-content-center">
            <div className="card text-center shadow" style={{ maxWidth: "500px" }}>
                <img
                    src={pizza.img}
                    alt={pizza.name}
                    className="card-img-top"
                    style={{ objectFit: "cover", height: "250px" }}
                />
                <div className="card-body">
                    <h3 className="card-title">{pizza.name}</h3>
                    <p className="card-text"><strong>Precio:</strong> ${pizza.price}</p>
                    <p className="card-text">{pizza.desc}</p>
                    <h5>Ingredientes:</h5>
                    <ul className="list-unstyled">
                        {pizza.ingredients?.map((ing, i) => (
                            <li key={i}>🍕 {ing}</li>
                        ))}
                    </ul>
                    <button className="btn btn-primary mt-3">Añadir al carrito</button>
                </div>
            </div>
        </div>
    );
}

export default Pizza
