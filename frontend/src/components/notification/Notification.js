import React from 'react'


const Notification = ({message}) => {


    return ( 
        message === ''? null : <div>
            <h4 className='text-center'>{message}</h4>
        </div> 
     );
}
 
export default Notification;