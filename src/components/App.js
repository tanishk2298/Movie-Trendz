import React, {Fragment} from 'react';
import Home from './Home'
import Header from './elements/Header'
import {GlobalStyle} from './styles/GlobalStyle.js'
const App = () => {
    return (
    <Fragment>
        <Header />
        <Home />
        <GlobalStyle/>
    </Fragment>
    )
}

export default App;
