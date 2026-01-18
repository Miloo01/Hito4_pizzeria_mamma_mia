import {createContext, useState} from "react";

export const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    // Agregar pizza al carrito
    const addToCart = (pizza) => {
        const existingPizza = cart.find(item => item.id === pizza.id);
        
        if (existingPizza) {
            // Si ya existe, incrementar la cantidad
            setCart(cart.map(item =>
                item.id === pizza.id
                    ? { ...item, count: item.count + 1 }
                    : item
            ));
        } else {
            // Si no existe, agregar nueva pizza con count = 1
            setCart([...cart, { ...pizza, count: 1 }]);
        }
    };

    // Eliminar pizza del carrito
    const removeFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    // Aumentar cantidad de una pizza
    const incrementCart = (id) => {
        setCart(cart.map(item =>
            item.id === id
                ? { ...item, count: item.count + 1 }
                : item
        ));
    };

    // Disminuir cantidad de una pizza
    const decrementCart = (id) => {
        setCart(cart.map(item =>
            item.id === id && item.count > 1
                ? { ...item, count: item.count - 1 }
                : item
        ).filter(item => item.count > 0));
    };

    // Calcular total del carrito
    const getTotal = () => {
        return cart.reduce((total, item) => total + (item.price * item.count), 0);
    };

    // Obtener cantidad total de items en el carrito
    const getCartCount = () => {
        return cart.reduce((count, item) => count + item.count, 0);
    };

    // Vaciar el carrito
    const clearCart = () => {
        setCart([]);
    };

    const value = {
        cart,
        setCart,
        addToCart,
        removeFromCart,
        incrementCart,
        decrementCart,
        getTotal,
        getCartCount,
        clearCart
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider