import React from 'react'
import {withRouter} from 'react-router-dom'


const DashBoard = ({history , toggleBoard}) => {

    const gotoSales = () =>{
        history.push('/admin/sales')
        toggleBoard()
    }
    const gotoAccessories = () =>{
        history.push('/admin/accessories')
        toggleBoard()
    }
    const gotoBags = () =>{
        history.push('/admin/bags')
        toggleBoard()
    }
    const gotoShoes = () =>{
        history.push('/admin/shoes')
        toggleBoard()
    }
    const gotoWears = () =>{
        history.push('/admin/wears')
        toggleBoard()
    }
    return ( <div>
                <h1>Hello Admin, Whats your main focus today</h1>
                <button className='btn btn-primary m-3' onClick={() => gotoSales()}>Manage Sales</button>
                <button className='btn btn-primary m-3' onClick={() => gotoAccessories()}>Manage Accessories</button>
                <button className='btn btn-primary m-3' onClick={() => gotoBags()}>Manage Bags</button>
                <button className='btn btn-primary m-3' onClick={() => gotoShoes()}>Manage Shoes</button>
                <button className='btn btn-primary m-3' onClick={() => gotoWears()}>Manage Wears</button>
          </div> );
}
 
export default withRouter(DashBoard);