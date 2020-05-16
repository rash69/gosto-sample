import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import { Switch, Route } from "react-router-dom";
import Login from './Components/Login/Login';
import Home from './Components/Pages/Home';
import Signup from './Components/Signup/Signup';
import ItemDetails from './Components/Items/ItemDetails';
import Cart from './Components/Cart/Cart';
import Menu from './Components/Menu/Menu';
import PrivateRoute from './Components/Pages/PrivateRoute';
import { UserProvider } from './Components/Auth';
import Error from './Components/Pages/Error/Error';
import Checkout from './Components/Pages/Checkout';
import UserProfile from './Components/Pages/UserProfile';


function App() {
  return (
    <UserProvider>
    <Header/>
    <Switch>
      <Route exact path="/" component={Home} />

      <Route exact path="/signup" component={Signup} />  
      <Route exact path="/login" component={Login} />
      <PrivateRoute exact path="/cart">
            <Cart />
      </PrivateRoute>
      <PrivateRoute exact path='/checkout'>
          <Checkout/> 
      </PrivateRoute>
      <PrivateRoute exact path="/user/profile">
        <UserProfile/>
      </PrivateRoute>
      <Route exact path="/menu/" component={Menu} />
      <Route exact path="/menu/:key" component={ItemDetails} />
      <Route path='*' component={Error}/>
    </Switch>
   </UserProvider>
  );
}

export default App;
