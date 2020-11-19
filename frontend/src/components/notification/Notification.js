import React from 'react'
import './notification.css'


const Notification = ({message}) => {


    return ( 
        message === ''? null : <div className='notificationDiv'>
            <h4 className='text-center'>{message}</h4>
        </div> 
     );
}
 
export default Notification;