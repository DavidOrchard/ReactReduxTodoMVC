/*eslint-disable import/default*/

import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore';
import '../node_modules/todomvc-common/base.css'; //Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
import '../node_modules/todomvc-app-css/index.css';
const store = configureStore();

render(
	<Provider store={store}>
     <Router history={browserHistory} routes={routes} />
	</Provider>, document.getElementById('app')
);
