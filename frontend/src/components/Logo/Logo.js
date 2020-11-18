import React from 'react'
import logoImg from '../../assets/freeLogo.jpeg'
import DrawerToggleButton from '../../components/SideDrawer/DrawerToggleButton'
import './Logo.css'



const Logo = ({cartSize , toggleClickHandler}) => {
  
    return ( 
        <div className='logoComponent'>
        <DrawerToggleButton  click={toggleClickHandler}/>
            <img src={logoImg} alt='logo' />
            <div>
            cart
            <span className='badge badge-pill badge-secondary'>{cartSize}</span>
          </div>
        </div>
     );
}
 
export default Logo;