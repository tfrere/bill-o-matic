import '../index.html';
import '../css/main.scss';

import React    			   from 'react';
import ReactDOM 			   from 'react-dom';
import Main 			       from 'component/Main';

import { Router, Route, Link, browserHistory } from 'react-router';

ReactDOM.render((
	<Router history={browserHistory}>
		<Route path="/" component={Main}/>
	</Router>
), document.getElementById( 'app-container' ))