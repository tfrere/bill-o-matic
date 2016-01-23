import '../index.html';
import '../css/main.scss';

import React    	from 'react';
import ReactDOM 	from 'react-dom';
import Reader   	from 'core/Reader';
import Vitrine  	from 'core/Vitrine';
import Main     	from 'core/Main';
import Portfolio    from 'core/Portfolio';
import Blog         from 'core/Blog';
import Demo         from 'core/Demo';
import KeyPress     from 'component/KeyPress';

import { Router, Route, Link, browserHistory } from 'react-router';

ReactDOM.render((
  <Router history={browserHistory}>
  	<Router component={KeyPress}/>
	<Route path="/" component={Main}/>
	<Route path="reader" component={Reader}/>
	<Route path="vitrine" component={Vitrine}/>
	<Route path="demo" component={Demo}/>
	<Route path="portfolio" component={Portfolio}/>
  </Router>
), document.getElementById( 'app-container' ))