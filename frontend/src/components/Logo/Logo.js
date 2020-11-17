import React from 'react'
import logoImg from '../../assets/freeLogo.jpeg'
import './Logo.css'

const Logo = ({cartItems}) => {
    return ( 
        <div className='logoComponent'>
            <img src={logoImg} alt='logo' />
            <div>
            cart
            <span className='badge badge-pill badge-secondary'>{cartItems.length}</span>
          </div>
        </div>
     );
}
 
export default Logo;