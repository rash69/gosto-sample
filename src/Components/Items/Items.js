import React from 'react';
import './Items.css';
import { Link } from 'react-router-dom';
const Items = (props) => {
    const {img, recipe_name, price, offer, label, key} = props.item;

    return (
            <div className="col-md-4">
                <Link to={`/menu/${key}`}  style={{ textDecoration: 'none', color: 'black'}}>
                    <div className="m-4">
                        <div className="card p-4">
                            <img className="card-img-top" src={img} alt=""/>
                            <div className="card-body">
                                <h5 className="card-title">{recipe_name}</h5>
                                <p className="card-text text-muted">{label}</p>                               
                                <h4 className='offer'>{offer}</h4>
                                <h6 className="price">${price}</h6>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
    );
};

export default Items;