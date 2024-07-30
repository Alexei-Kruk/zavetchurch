import React from 'react';
import './Logo.css';

import logo from './logo.png';

export default function Logo() {
	return (
		<div>
			<img className='img-logo' src={logo} alt='logo' />
		</div>
	);
}
