import React from 'react'
import logoImg from '../../assets/freeLogo.jpeg'
import './Logo.css'

const Logo = () => {
    return ( 
        <div className='logoComponent'>
            <img src={logoImg} alt='logo' />
        </div>
     );
}
 
export default Logo;