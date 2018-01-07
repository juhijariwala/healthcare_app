import React from 'react';
import ReactDOM from 'react-dom';
import ProviderBox from './ProviderBox';

ReactDOM.render(
	<ProviderBox  url='http://localhost:3001/providers'
 pollInterval={2000} />,
	document.getElementById('root')
);
