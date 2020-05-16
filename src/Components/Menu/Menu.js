import React, { useState } from 'react';
import './Menu.css';
import data from '../Data/Data';
import Items from '../Items/Items';

const Menu = () => {
    const [currentCategory, setCurrentCategory] = useState('Lunch');
    const [currentMenu, setCurrentMenu] = useState(data.filter(item => {
        return item.category === currentCategory;
    }))
    const selectHandle = menu => {
        setCurrentCategory(menu);
        setCurrentMenu(data.filter(item => {
            return item.category === menu;
        })) 
    }
    return (
        <div className='menu-container'>
            <div className='d-flex justify-content-center bg-success'>              
                <button className={`category-btn ${currentCategory === 'Breakfast' ? 'active-btn' : ''}`} onClick={() => selectHandle('Breakfast')}>Breakfast</button>
                <button className={`category-btn ${currentCategory === 'Lunch' ? 'active-btn' : ''}`} onClick={() => selectHandle('Lunch')}>Lunch</button>
                <button className={` category-btn ${currentCategory === 'Dinner' ? 'active-btn' : ''}`} onClick={() => selectHandle('Dinner')}>Dinner</button>   
                <button className={` category-btn ${currentCategory === 'Special' ? 'active-btn' : ''}`} onClick={() => selectHandle('Special')}>Special</button> 
                <button className={` category-btn ${currentCategory === 'Offer' ? 'active-btn' : ''}`} onClick={() => selectHandle('Offer')}>Offer</button>  
            </div>
            <div className='row'>
                {    
                    currentMenu.map( items =>
                        <Items
                            key = {items.key} 
                            item = {items} />)       
                }
            </div>
        </div>
    );
};

export default Menu;