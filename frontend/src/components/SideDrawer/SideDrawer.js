import React from 'react';
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
            <ul>
                <li><a href='/'>Wears</a></li>
                <li><a href='/'>Bags</a></li>
                <li><a href='/'>Fouul</a></li>
                <li><a href='/'>Treas</a></li>
            </ul>
    </nav>
     );
}
 
export default SideDrawer;