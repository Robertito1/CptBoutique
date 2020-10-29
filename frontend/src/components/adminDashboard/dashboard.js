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
    // const gotoSales = () =>{
    //     history.push('/admin/sales')
    //     toggleBoard()
    // }
    // const gotoSales = () =>{
    //     history.push('/admin/sales')
    //     toggleBoard()
    // }
    // const gotoSales = () =>{
    //     history.push('/admin/sales')
    //     toggleBoard()
    // }
    return ( <div>
    <h1>Hello Admin, Whats your main focus today</h1>
    <button onClick={() => gotoSales()}>Manage Sales</button>
    <button onClick={() => gotoAccessories()}>Manage Accessories</button>
    <button>Manage Bags</button>
    <button>Manage Shoes</button>
    <button>Manage Wears</button>
          </div> );
}
 
export default withRouter(DashBoard);