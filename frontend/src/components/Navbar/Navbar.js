import React from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
    return ( 
        <div className='navbar'>
            <nav className='navigation'>
                <div className='navigationItems'>
                    <ul className='linksList'>
                        <li>
                          <Link className="toHome" to="/">
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link className="toAccessories" to="/accessories">
                            Accessories
                          </Link>
                        </li>
                        <li>
                          <Link className="toBags" to="/bags">
                            Bags
                          </Link>
                        </li>
                        <li>
                          <Link className="toShoes" to="/shoes">
                            Shoes
                          </Link>
                        </li>
                        <li>
                          <Link className="toWears" to="/wears">
                            Wears
                          </Link>
                        </li>
                        <li>
                          <Link className="toCart" to="/cart">
                            Cart
                          </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
     );
}
 
export default Navbar;