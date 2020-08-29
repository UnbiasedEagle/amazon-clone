import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AmazonState from './context/AmazonState';

ReactDOM.render(
	<AmazonState>
		<App />
	</AmazonState>,
	document.getElementById('root')
);
