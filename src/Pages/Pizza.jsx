import React from 'react'
import { useState, useEffect } from "react";
import {useParams } from 'react-router-dom';

const Pizza = () => {
    // 3 - pizza guardará los valores traídos desde la API
    const [pizza, setPizza] = useState({});

    const { id } = useParams(); // obtengo el id desde los parámetros de la URL

    // 2 - Se llama a la función consultarApi al momento de montar el componente
    useEffect(() => {
        consultarApi();
    }, [id]); // Se agrega el [id] al array de dependencias para que si el id cambia, se vuelva a ejecutar

    // 1 - Función que consulta la API
    const consultarApi = async () => {
        const url = `http://localhost:5000/api/pizzas/${id}`; // Endpoint de la API se concatena con el id para que el contenido sea dinámico
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
