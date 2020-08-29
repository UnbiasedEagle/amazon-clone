import React from 'react';
import './Footer.css';

const Footer = (props) => {
	return (
		<div className={`footer ${props.position ? 'bottom' : ''}`}>
			<p>Made by Saurabh Singh &copy; 2020</p>
		</div>
	);
};

export default Footer;
