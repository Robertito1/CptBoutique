import React, {useState, useEffect} from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Header from "./components/header/Header";
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
import {isEqual} from 'lodash'
import SalesAdmin from './pages/admin/sales_admin'
import AccessoriesAdmin from './pages/admin/accessories_admin'
import BagsAdmin from './pages/admin/bags_admin'
import ShoesAdmin from './pages/admin/shoes_admin'
import WearsAdmin from './pages/admin/wears_admin'
import "./App.css";

//chrisdon95.github.io/NazaKingEvents/

function App() {

     const [cartItems, setCartItems] = useState([])

     useEffect(() => {
      const cartInStorage = window.localStorage.getItem('productsInCart')
      if (cartInStorage) {
        const savedCartArray = JSON.parse(cartInStorage)
        setCartItems(savedCartArray)
        console.log(cartItems)
      }
    }, [])

    useEffect(() => {
       window.localStorage.setItem('productsInCart', JSON.stringify(cartItems))
    }, [cartItems])

     const updateCart = async (obj) =>{
     let duplicate =  cartItems.find(e =>  isEqual(obj, e))
      if(duplicate){
        setCartItems(cartItems.concat(obj))
      }
     else{
       setCartItems(cartItems => [...cartItems, obj])
      }
     console.log(cartItems)
    }

  return (
    <div className="App">
      <Header />
      <div>
        cart
        <span className='badge badge-pill badge-secondary'>{cartItems.length}</span>
      </div>
      <Switch>
        <Route exact path="/" render={() => <Homepage/>} />
        <Route exact path="/admin" component={() => <AdminHome />} />  
        <Route exact path="/bags" component={() => <Bags />} />
        <Route exact path="/shoes" component={() => <ShoesPage />} />
        <Route exact path="/wears" component={() => <WearsPage />} />
        <Route exact path="/accessories" component={() => <AccessoriesPage />} />
        <Route path='/cart' component={() =><Cart cartItems={cartItems}/>} />
        <Route path ="/admin/sales" component={() => <SalesAdmin />} /> 
        <Route path ="/admin/accessories" component={() => <AccessoriesAdmin />} />
        <Route path ="/admin/bags" component={() => <BagsAdmin />} />
        <Route path ="/admin/shoes" component={() => <ShoesAdmin />} />
        <Route path ="/admin/wears" component={() => <WearsAdmin />} />
        <Route path='/bags/:product' component={() =><BagProductPage updateCart={updateCart}/>} />
        <Route path='/shoes/:product' component={() =><ShoeProductPage updateCart={updateCart}/>} />
        <Route path='/wears/:product' component={() =><WearProductPage updateCart={updateCart}/>} />
        <Route path='/accessories/:product' component={() =><AccessoryProductPage updateCart={updateCart}/>} />
        <Route path='/:product' component={() =><SalesProductPage updateCart={updateCart}/>} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
