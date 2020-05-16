import React from 'react';
import './Footer.css';
import logo from '../../images/logo.jpg';

const Footer = () => {
    return (
        <footer className="footer">
			<div className='footer-area'>
				<div className='img-container col-md-3'>
				<a href="/"><img src={logo} className='w-25' alt=""/></a>
				</div>	
				<div className="col-md-9">
					<div className='icon text-center'>
						<a href="/"><i className="fab fa-facebook"></i></a>
						<a href="/"><i className="fab fa-instagram"></i></a>
						<a href="/"><i className="fab fa-twitter"></i></a>
						<a href="/"><i className="fab fa-google"></i></a>
					</div>
					<div className='footer-menu-area'>
						<ul>
							<li><a href="/">home</a></li>
							<li><a href="/">about us</a></li>
							<li><a href="/">services</a></li>
							<li><a href="/">foods</a></li>
							<li><a href="/">contact us</a></li>
						</ul>
					</div>
					<div className='footer-menu-area'>
						<ul>
							<li><a href="/">blog</a></li>
							<li><a href="/">news</a></li>
							<li><a href="/">gallery</a></li>
							<li><a href="/">media</a></li>
						</ul>
					</div>
				</div>
			</div>
			<div className='footer-bottom bg-success'>
				<p>Copyright &copy; <a href="/">Mr. Gosto</a></p>
			</div>
		</footer>
	
    );
};

export default Footer;