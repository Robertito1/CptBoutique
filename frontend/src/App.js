import React, {useState, useEffect} from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Header from "./components/header/Header";
// import Navbar from './components/Navbar/Navbar';
// import SideDrawer from './components/SideDrawer/SideDrawer';
// import BackDrop from './components/BackDrop/BackDrop';
import Bags from "./pages/bags/Bags";
import ShoesPage from "./pages/shoes/ShoesPage";
import WearsPage from "./pages/wears/WearsPage";
import AccessoriesPage from "./pages/accessories/AccessoriesPage";
import Footer from "./components/footer/footer";
import AdminHome from "./pages/admin/admin";
import BagProductPage from './pages/product/bagProduct';
import SalesProductPage from './pages/product/saleProduct';
import WearProductPage from './pages/product/wearProduct'
import ShoeProductPage from './pages/product/shoeProduct'
import AccessoryProductPage from './pages/product/accessoryProduct'
import Cart from './pages/cart/cart'
import {isEqual, omit, sumBy} from 'lodash'
import SalesAdmin from './pages/admin/sales_admin'
import AccessoriesAdmin from './pages/admin/accessories_admin'
import BagsAdmin from './pages/admin/bags_admin'
import ShoesAdmin from './pages/admin/shoes_admin'
import WearsAdmin from './pages/admin/wears_admin'
import "./App.css";
// import Logo from "./components/Logo/Logo";

//chrisdon95.github.io/NazaKingEvents/

function App() {

     const [cartItems, setCartItems] = useState([])
     const [cartSize, setCartSize] = useState(0)
    //  const [sideDrawerOpen, setSideDrawerOpen] = useState(false)


     useEffect(() => {
      const cartInStorage = window.localStorage.getItem('productsInCart')
      if (cartInStorage) {
        const savedCartArray = JSON.parse(cartInStorage)
        setCartItems(savedCartArray)
        console.log(cartItems)
      }
      // eslint-disable-next-line
    }, [])

    useEffect(() => {
      if (cartItems !==0 ) {
        const value = sumBy(cartItems, function(o) { return o.quantity; })
        setCartSize(value)
      }
    }, [cartItems])
  

    useEffect(() => {
       window.localStorage.setItem('productsInCart', JSON.stringify(cartItems))
    }, [cartItems])


     const updateCart = async (obj) =>{
     let duplicate =  cartItems.find(e =>  isEqual(omit(obj, ['quantity']), omit(e, ['quantity'])))
      if(duplicate){
        duplicate = {...duplicate, quantity: duplicate.quantity + obj.quantity }
        setCartItems(prevCart => prevCart.map(e => isEqual(omit(duplicate, ['quantity']), omit(e, ['quantity'])) ? duplicate : e ))
      }
     else{
       setCartItems(cartItems => [...cartItems, obj])
      }
    }

    // const toggleClickHandler = () =>{
    //   setSideDrawerOpen( prevState => !prevState)
    // }
  
    const deleteFromCart = (id) =>{
      let newCartItems = cartItems.filter(e => e.id !== id)
      setCartItems(cartItems => [...newCartItems])
      window.localStorage.setItem('productsInCart', JSON.stringify(newCartItems))
    }
  
   const increaseFromCart =(id) =>{
     let newCartItems = cartItems.map(e => e.id !== id ? e : {...e, quantity: e.quantity + 1})
     setCartItems(cartItems => [...newCartItems])
     window.localStorage.setItem('productsInCart', JSON.stringify(newCartItems))
   }

   const quantityReduce =(q) =>{
     if(q !== 1){
       return q-1
     }else{
       return 1
     }
   }
   const decreaseFromCart =(id) =>{
    let newCartItems = cartItems.map(e => e.id !== id ? e : {...e, quantity: quantityReduce(e.quantity)})
    setCartItems(cartItems => [...newCartItems])
    window.localStorage.setItem('productsInCart', JSON.stringify(newCartItems))
  }

  return (
    <div className="App">
       {/* <div className='navSegment'>
          <Navbar />
          </div> */}
          {/* <SideDrawer show={sideDrawerOpen} click={toggleClickHandler}/>  
          {sideDrawerOpen? <BackDrop click={toggleClickHandler}/>: null} */}
        <div>
          {/* <Logo cartSize={cartSize} toggleClickHandler={toggleClickHandler}/>    */}
          <Header cartSize={cartSize} />
          <Switch>
        <Route exact path="/" render={() => <Homepage/>} />
        <Route exact path="/admin" component={() => <AdminHome />} />  
        <Route exact path="/bags" component={() => <Bags />} />
        <Route exact path="/shoes" component={() => <ShoesPage />} />
        <Route exact path="/wears" component={() => <WearsPage />} />
        <Route exact path="/accessories" component={() => <AccessoriesPage />} />
        <Route path='/cart' component={() =><Cart 
        cartItems={cartItems} 
        deleteItem={deleteFromCart} 
        decrease={decreaseFromCart}
        increase={increaseFromCart}/>} />

        <Route path ="/admin/sales" component={() => <SalesAdmin />} /> 
        <Route path ="/admin/accessories" component={() => <AccessoriesAdmin />} />
        <Route path ="/admin/bags" component={() => <BagsAdmin />} />
        <Route path ="/admin/shoes" component={() => <ShoesAdmin />} />
        <Route path ="/admin/wears" component={() => <WearsAdmin />} />
        <Route path='/bags/:product' component={() =><BagProductPage updateCart={updateCart} />} />
        <Route path='/shoes/:product' component={() =><ShoeProductPage updateCart={updateCart}/>} />
        <Route path='/wears/:product' component={() =><WearProductPage updateCart={updateCart}/>} />
        <Route path='/accessories/:product' component={() =><AccessoryProductPage updateCart={updateCart}/>} />
        <Route path='/:product' component={() =><SalesProductPage updateCart={updateCart}/>} />
      </Switch>
      <Footer />
        </div>  
    </div>
  );
}

export default App;
