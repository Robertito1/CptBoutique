import React from 'react';

import './DrawerButton.css'

const DrawerToggleButton = ({click}) => {
    return ( 
    <button className='togglerButton' onClick={()=>click()}>
      <div className='hamburgerLine'/>
      <div className='hamburgerLine'/>
      <div className='hamburgerLine'/>
    </button> 
    );
}
 
export default DrawerToggleButton;