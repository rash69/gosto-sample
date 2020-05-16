import React, { useContext, useState, useEffect } from 'react';
import './Header.css';
import logo from '../../images/logo.jpg'
import { Link, withRouter } from 'react-router-dom';
import { UserContext } from '../Auth';

const LoginUser = ({route}) => {
    const {logout} = useContext(UserContext)
    const logOutHandler = () => {
        logout()
        route.history.push('/login')        
    }
    return (
        <div>
            <Link to="/user/profile"><button className="btn items signup-btn primary-btn">Profile</button></Link>
            <button className="btn items" onClick={logOutHandler}>Logout</button>
        </div>
    )
}
const LogoutUser = () => {
    return (
        <div>
            <Link to="/login"><button className="btn items">Login</button></Link>
            <Link to="/signup"><button className="btn items signup-btn primary-btn">Sign up</button></Link>
           
        </div>
    )
}

const Header = (props) => {
    const {user, cart} = useContext(UserContext)
    const [cartItem, setCartItem] = useState('')
    useEffect(()=>{
        if(cart.length > 0 ) {
            setCartItem(cart.length)
        } else {
            setCartItem('')
        }

        
    }, [cart])

    return (
        <header>
            <div className="container">
                <div className="row d-flex fixed-top bg-dark align-items-center justify-content-between">
                    <div className="col">
                        <div className="logo-aria">
                            <Link to="/"><img src={logo} className='w-25 rounded-circle' alt="mr. gosto" /></Link>
                        </div>
                    </div>
                    <div className="col">
                        <div className="header-right">
                            <div className="d-flex items">
                                {user ? <LoginUser route={props} name={user.displayName} /> : <LogoutUser/> }
                            <Link to="/cart">
                                <button className="btn items"> 
                                        <i className="fa fa-cart-plus" aria-hidden="true">
                                            </i> <span style={{color:'greenYellow'}}> {cart && cartItem}</span>
                                    </button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default withRouter(Header);
