import React, { useState, useEffect } from 'react'
import Login from '../../components/login/LoginForm'
import loginService from '../../services/login'
import DashBoard from '../../components/adminDashboard/dashboard'
import { withRouter } from 'react-router-dom'



const AdminHome = ({history}) => {
 
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

   const handleLogout = async () => {
    await window.localStorage.removeItem('loggedBlogappUser')
    // setNotificationStatus(true)
    // setNotificationMessage(`${user.name} Logged out`)
     await setUser(null)
     await history.push('/admin')
    // setTimeout(() => {
    //   setNotificationMessage(null)
    // }, 5000)
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
          <span>
              <button onClick={handleLogout}>logout</button>
          </span>
        {displayAdminHomePage()}
       </div> );
}
 
export default withRouter(AdminHome);