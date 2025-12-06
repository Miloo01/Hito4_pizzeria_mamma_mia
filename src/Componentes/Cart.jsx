import React from 'react'
import {pizzaCart} from '../pizzas.js'
import { useState } from 'react'
import {formatNumber} from "../utils/format";


const Cart = () => {
    const [cart, setCart] = useState(pizzaCart);

    
    const increase = (id) => {
        setCart(cart.map(pizza => pizza.id === id ? {...pizza, count: pizza.count + 1} : pizza));
    };
    
    const decrease = (id) => {
        setCart(cart.map(pizza => pizza.id === id && pizza.count > 0 ? {...pizza, count: pizza.count - 1} : pizza));
    };
    
    const total = cart.reduce((acc, pizza) => acc + pizza.price * pizza.count, 0);
  
    return (

    <div className="cart-container d-flex flex-column justify-content-around  align-items-center p-4 mt-4 p-5 bg-light">
        <h4 className="mb-3 ">Detalles del pedido:</h4>
        <ul className='list-group'>
          {cart.map((pizza) => (
           <li key={pizza.id} className="list-group-item d-flex justify-content-between ">
            <div>
              <img src={pizza.img} alt={pizza.name} width="70" className="me-3" />
              <strong className="text-capitalize me-5">{pizza.name}</strong>

            </div>

            
            <div className="d-flex align-items-center">
              <span className="me-2"> ${formatNumber(pizza.price)}</span> 
              <button className="btn btn-sm btn-success me-2" onClick={() => increase(pizza.id)}>+</button>
              <button className="btn btn-sm btn-danger me-2" onClick={() => decrease(pizza.id)}>-</button>
              Cantidad: {pizza.count}
            </div>
          </li>
          ))}
        </ul>
         <h5 className="mt-3 mb-3">Total: $ {formatNumber(total)}</h5>
         <button className="btn btn-primary mb-4">Pagar</button>
    
    </div>
    )
}

export default Cart