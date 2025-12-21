import React from 'react'


const CardPizza = ({ name = 'Pizza', price = 0, ingredients = [], img }) => {
    const priceFormatted = typeof price === 'number' ? new Intl.NumberFormat('es-CL').format(price) : price

    return (
        <div className="container-cards ">
            <div className="card shadow-sd  h-100 ">
                <img src={img || 'https://via.placeholder.com/400x250?text=Pizza'} className="card-img-top" alt={name} />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title text-start "> Pizza {name}</h5>
                    <hr/>
                    <h5 className="text-start"> 🍕 Ingredientes:</h5>
                    <ul className="card-text-ingredients text-start">
                        {ingredients.map((ingredient, id) => (
                            <li key={id}>{ingredient}</li>
                        ))}
                    </ul>
                    <p className="fw-bold text-success text-center">${priceFormatted}</p>
                    <div className="mt-auto">
                        <button className="btn btn-info text-white  mb-2" >Ver Más 👀</button>
                        <button className="btn btn-danger">Añadir al carro 🛒</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardPizza
