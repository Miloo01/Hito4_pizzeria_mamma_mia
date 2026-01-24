import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';


const CardPizza = ({ id = 'P000', name = 'Pizza', price = 0, ingredients = [], img, desc = '' }) => {
    const { addToCart } = useContext(CartContext);
    const priceFormatted = typeof price === 'number' ? new Intl.NumberFormat('es-CL').format(price) : price

    const handleAddToCart = () => {
        addToCart({ id, name, price, img, desc, ingredients });
    }

    return (
        <div className="container-cards">
            <div className="card bg-light  shadow-sd  h-100">
                <img src={img || 'https://via.placeholder.com/400x250?text=Pizza'} className="card-img-top" alt={name} />
                <div className="card-body d-flex flex-column" >
                    <h5 className="card-title text-start "> Pizza {name}</h5>
                    <hr/>
                    <h5 className="text-start"> 🍕 Ingredientes:</h5>
                    <ul className="card-text-ingredients text-start">
                        {ingredients.map((ingredient, idx) => (
                            <li key={idx}>{ingredient}</li>
                        ))}
                    </ul>
                    <p className="fw-bold text-success text-center">${priceFormatted}</p>
                    <div className="mt-auto">
                        <Link to={`/pizza/${id}`}  style={{ textDecoration: 'none' }} >
                        <button className="btn btn-success text-white m-2 " >Ver Más 👀</button>
                        </Link>
                        <button className="btn btn-danger text-black" style={{background: "linear-gradient(to right, #FF8800, #FFD300)"}} onClick={handleAddToCart}>Añadir al carro 🛒</button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default CardPizza
