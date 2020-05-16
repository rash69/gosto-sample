import React, { useState } from 'react';
import './Services.css';
import Chef from '../../images/Image/chef-cook-food-33614.png';
import Adult from '../../images/Image/adult-blur-blurred-background-687824.png';
import Architecture from '../../images/Image/architecture-building-city-2047397.png';
import car from '../../images/Others/car.png';
import chef from '../../images/Others/notification.png';
import bus from '../../images/Others/bus.png';
import { Link } from 'react-router-dom';

const Services = () => {
    const [service] = useState([
        {
            'id': '1',
            'title': "Fast Delivery",
            'img': Adult,
            'info': "Keep Your Systems in sync with automated web hook based notifications",
            'label': "The first dish known to have been deep fried was fritters, which were popular in the European Mi...",
            'description': "The first dish known to have been deep fried was fritters, which were popular in the European Middle Ages. However, it was the Scottish who were the first Europeans to deep fry their chicken in fat (though without seasoning). Meanwhile, a number of West African peoples had traditions of seasoned fried chicken (though battering and cooking the chicken in palm oil). Scottish frying techniques and West African seasoning techniques were combined by enslaved Africans and African-Americans in the American South.",
            'size': "medium",
            'icon': car,
            'route': "/service-delivery"
        },
        {
            'id': '2',
            'title': "A Good auto responder",
            'img': Chef,
            'info': "Keep Your Systems in sync with automated web hook based notifications",
            'label': "The first dish known to have been deep fried was fritters, which were...",
            'description': "The first dish known to have been deep fried was fritters, which were popular in the European Middle Ages. However, it was the Scottish who were the first Europeans to deep fry their chicken in fat (though without seasoning). Meanwhile, a number of West African peoples had traditions of seasoned fried chicken (though battering and cooking the chicken in palm oil). Scottish frying techniques and West African seasoning techniques were combined by enslaved Africans and African-Americans in the American South.",
            'size': "large",
            'icon': chef,
            'route': "/service-support"
        },
        {
            'id': '3',
            'title': "Home Delivery",
            'img': Architecture,
            'info': "Keep Your Systems in sync with automated web hook based notifications",
            'label': "The first dish known to have been deep fried was fritters, which were popular in the European Mi...",
            'description': "The first dish known to have been deep fried was fritters, which were popular in the European Middle Ages. However, it was the Scottish who were the first Europeans to deep fry their chicken in fat (though without seasoning). Meanwhile, a number of West African peoples had traditions of seasoned fried chicken (though battering and cooking the chicken in palm oil). Scottish frying techniques and West African seasoning techniques were combined by enslaved Africans and African-Americans in the American South.",
            'size': "medium",
            'icon': bus,
            'route': "/service-delivery-policy"
        }
    ])
    return (
        <section className='services'>
            <h1 className='bg-success'>Services</h1>
            <div className="services-center">
                {
                    service.map((item, index)=> {
                        return <article key={index} className='service'>
                                    <div className="col-md-4">
                                        <Link to={`/services`}  style={{ textDecoration: 'none', color: 'black'}}>
                                            <div className="m-4">
                                                <div className="card p-4">
                                                    <img className="card-img-top" src={item.img} alt=""/>
                                                    <div className="card-body">
                                                        <h5 className="card-title">{item.title}</h5>
                                                        <p className="card-text text-muted">{item.info}</p>                               
                                                    </div>
                                                </div>
                                            </div>
                                        </Link> 
                                    </div>
                                </article>
                    })
                }
            </div>
        </section>
    );
};

export default Services;