import React, { useState, useEffect } from 'react';
import Header from './Header'
import CardPizza from './CardPizza'



const Home = () => {
  const [pizzas, setPizzas] = useState([])

  
  useEffect(() => {
    const obtenerPizzas = async () => {
      const response = await fetch('http://localhost:5000/api/pizzas')
      const data = await response.json()
      setPizzas(data) //almacenamos en el estado las pizzas obtenidas
    }

    obtenerPizzas()
  }, [])

  return (
    <div >
      <Header />
        
      <section className="container my-5">
        <div className="row g-4">
          {pizzas.map((pizza) => (
            <div className="col-12 col-md-4" key={pizza.id}>
              <CardPizza
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={pizza.img}
               />
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}

export default Home