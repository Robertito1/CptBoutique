import React, { useState, useEffect } from 'react'
import { Switch, Route } from "react-router-dom";
import Login from '../../../components/login/LoginForm'
import loginService from '../../../services/login'
import SalesAdmin from "../sales/sales_admin";



const AdminHome = () => {
 
    const [user, setUser] = useState(null)

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
        if (loggedUserJSON) {
          const user = JSON.parse(loggedUserJSON)
          setUser(user)
          console.log(user.token)
        }
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



  

    return ( <div>
        <h1>Admin HomePage</h1>
       <Login handleLogin={handleLogin} />
       <Switch>
        {/* <Route exact path="/" render={() => <Homepage />} />
        <Route path="/admin" component={() => <AdminHome />} />  */}
        <Route path="/admin/sales" component={() => <SalesAdmin />} /> 
        {/* <Route path="/bags" component={() => <Bags />} />
        <Route path="/shoes" component={() => <ShoesPage />} />
        <Route path="/wears" component={() => <WearsPage />} /> */}
        {/* <Route path="/accessories" component={() => <AccessoriesPage />} /> */}
      </Switch>
    </div> );
}
 
export default AdminHome;