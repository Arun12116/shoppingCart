import React from 'react'
import "./Card.css"
import {Link} from "react-router-dom"
import { useSelector } from 'react-redux'
const Card = () => {
  const product=useSelector((state)=>state.allproduct.Products)

  return (
    <>
      <div className="Container">
        <div className="box-container">
           {product.length > 0 ? null : <h1>no Data Found</h1>}
          {

            product.map((items ,id) => {
              return <div className="card" key={id}>
                <img src={items.image} alt="img" style={{ width: "50%", height: "40%" }} />
                <h2>Category:{items.category}</h2>
                <h3>Price:{items.price}</h3>
                <div className="btn">
                <button style={{backgroundColor:"green", color:"white", }}>Buy-Now</button>
                <Link  to={`/Cart/${items.id}`}>
                <button style={{backgroundColor:"orange", color:"white", }}>Add To-Cart</button>
                
                </Link>
                </div>
               
              </div>
            })
          }

        </div>


      </div>



    </>
  )
}

export default Card;