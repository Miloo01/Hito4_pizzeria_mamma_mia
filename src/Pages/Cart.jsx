import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { formatNumber } from "../utils/format";


const Cart = () => {
  const { cart, incrementCart, decrementCart, removeFromCart, getTotal } = useContext(CartContext);

  return (
    <div className="cart-container d-flex flex-column justify-content-around align-items-center p-4 mt-4 p-5 bg-light">
      <h4 className="mb-3">Detalles del pedido:</h4>

      {cart.length === 0 ? (
        <p className="text-muted">El carrito está vacío</p>
      ) : (
        <>
          <ul className='list-group w-100'>
            {cart.map((pizza) => (
              <li key={pizza.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <img src={pizza.img} alt={pizza.name} width="70" className="me-3 rounded" />
                  <div>
                    <strong className="text-capitalize">{pizza.name}</strong>
                    <p className="text-muted mb-0">${formatNumber(pizza.price)}</p>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-2">
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => decrementCart(pizza.id)}
                  >
                    −
                  </button>
                  <span className="badge bg-primary">{pizza.count}</span>
                  <button
                    className="btn btn-sm btn-success"
                    onClick={() => incrementCart(pizza.id)}
                  >
                    +
                  </button>
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => removeFromCart(pizza.id)}
                  >
                    🗑️
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <h5 className="mt-4 mb-4">Total: $ {formatNumber(getTotal())}</h5>
          <button className="btn btn-primary mb-4 px-5">Pagar</button>
        </>
      )}
    </div>
  )
}

export default Cart