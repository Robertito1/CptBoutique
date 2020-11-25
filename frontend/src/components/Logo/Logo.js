import React from 'react'
import logoImg from '../../assets/freeLogo.jpeg'
import {Link} from 'react-router-dom'
import DrawerToggleButton from '../../components/SideDrawer/DrawerToggleButton'
import './Logo.css'



const Logo = ({cartSize , toggleClickHandler}) => {
  
    return ( 
        <div className='logoComponent'>
        <div className='toggler ml-4'>
          <DrawerToggleButton  click={toggleClickHandler}/>
        </div>
            <div >
            <Link to='/'>
            <img src={logoImg} alt='logo' />
            </Link>
            </div>
            <div className='mr-4 cartContainer'>
            <Link to='/cart'><i className="fas fa-shopping-cart fa-2x cartIcon"></i>
            <span className='badge badge-pill badge-warning'>{cartSize}</span></Link>
          </div>
        </div>
     );
}
 
export default Logo;