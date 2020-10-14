import React, {Fragment} from 'react';
import Home from './Home'
import Header from './elements/Header'
import {GlobalStyle} from './styles/GlobalStyle.js'
import {Router} from '@reach/router'
import Movie from './Movie'
import NotFound from './NotFound'
const App = () => {
    return (
    <Fragment>
        <Header />
        <Router>
            <Home path="/"/>
            <Movie path="/:movieID"/>
            <NotFound default/>
        </Router>
        <GlobalStyle/>
    </Fragment>
    )
}

export default App;
