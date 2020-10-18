import React from 'react'
import Logo from '../images/logo2.png'
import github from '../images/github.png'
import {StyledHeader, StyledLogo, StyledGithub} from '../styles/StyledHeader'
import {Link} from '@reach/router'


const Header = () => (
    <StyledHeader>
        <div className="header-content">
            <Link to="/">
            <StyledLogo src={Logo} alt="logo" target="_blank" className="logo"/>
            </Link>
            <a href="https://github.com/tanishk2298" target="_blank" rel="noopener noreferrer">
                <StyledGithub src={github} alt="github" className="logo"/>
            </a>
        </div>
     </StyledHeader>
)

export default Header

//