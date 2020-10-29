import React, { useState, useEffect } from 'react'
import Login from '../../components/login/LoginForm'
import loginService from '../../services/login'
import DashBoard from '../../components/adminDashboard/dashboard'
import { Route, Switch } from 'react-router-dom'
import SalesAdmin from './sales_admin'
import AccessoriesAdmin from './accessories_admin'
import BagsAdmin from './bags_admin'
import ShoesAdmin from './shoes_admin'
import WearsAdmin from './wears_admin'


const AdminHome = () => {
 
    const [user, setUser] = useState(null)
    const [showBoard, setShowBoard] = useState(true)

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
        if (loggedUserJSON) {
          const user = JSON.parse(loggedUserJSON)
          setUser(user)
          console.log(user.token)
        }
        setShowBoard(true)
      }, [])

      const handleLogin = async (username, password) => {
        try {
          const user = await loginService.login({
            username,
            password,
          })
          window.localStorage.setItem('loggedBlogappUser', JSON.stringify(user))
          setUser(user)
          console.log("logged in")
        //   setNotificationStatus(true)
        //   setNotificationMessage(`${user.name} Logged in`)
        //   setTimeout(() => {
        //     setNotificationMessage(null)
        //   }, 5000)
    
        } catch (exception) {
    
        //   setNotificationStatus(false)
        //   setNotificationMessage('Wrong Username or password')
        //   setTimeout(() => {
        //     setNotificationMessage(null)
        //   }, 5000)
        console.log(exception)
        }
    
      }

   const toggleBoard = () =>{
     setShowBoard(false)
   }

   const displayAdminHomePage = () =>{
     if(!showBoard){
       return null
     }
     if(user){
       return <DashBoard toggleBoard={toggleBoard}/>
     }else{
    return  <Login handleLogin={handleLogin} />
    }
   }
  

    return ( <div>
        <h1>Admin HomePage</h1>
        {displayAdminHomePage()}
        <Switch>
          <Route path ="/admin/sales" component={() => <SalesAdmin />} /> 
          <Route path ="/admin/accessories" component={() => <AccessoriesAdmin />} />
          <Route path ="/admin/bags" component={() => <BagsAdmin />} />
          <Route path ="/admin/shoes" component={() => <ShoesAdmin />} />
          <Route path ="/admin/wears" component={() => <WearsAdmin />} />
        </Switch>
       </div> );
}
 
export default AdminHome;