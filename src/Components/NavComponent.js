import React from 'react'
import "./Nav.css"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { BiSearch } from "react-icons/bi"
import { Link } from "react-router-dom"
const NavComponent = () => {
    return (
        <>

            <div className="nav-Container">
                <div className="logo">
                    <h3>A-Cart</h3>
                </div>
                <div className="Search-bar">
                    <input type="text" placeholder='Search Your Items ' />
                    {<BiSearch style={{ position: "relative", right: "4rem", fontSize: "2rem" }} />}
                </div>
                <div className="Logout">
                    <button>LogOut</button>
                </div>
                <div className="nav-Body">
                    <Link to={"/Home"} className='Link'>Home</Link>
                    <Link to={"./About"} className='Link'>About</Link>
                    <Link to={"./Contact"} className='Link'>Contact</Link>

                </div>

                <div className="cart">
                    <Link to={"./Cart"}>

                        {<AiOutlineShoppingCart style={{ width: "10vw", height: "5vh", color: "wheat" }} />}
                    </Link>

                </div>

            </div>

        </>
    )
}

export default NavComponent