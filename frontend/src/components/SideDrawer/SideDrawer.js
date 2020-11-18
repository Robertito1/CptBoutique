import React from 'react';
import { Link } from "react-router-dom";
import './SideDrawer.css'

const SideDrawer = ({show, click}) => {

    let drawerClasses = 'sideDrawer'

    if(show){
        drawerClasses = 'sideDrawer open'
    }
    return ( 
        <nav className={drawerClasses}>
        <button onClick={()=>click()}>
            close
        </button>
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
    </nav>
     );
}
 
export default SideDrawer;