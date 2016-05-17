import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import IndexView from './components/index-view';


export default (
    <Route path="/" component={App}>
        <IndexRoute component={IndexView}/>
    </Route>
);
//this.props.params.id
