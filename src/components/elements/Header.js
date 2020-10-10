import React from 'react'
import Logo from '../images/reactMovie_logo.png'
import github from '../images/github.png'
import {StyledHeader, StyledLogo, StyledGithub} from '../styles/StyledHeader'


const Header = () => (
    <StyledHeader>
        <div className="header-content">
            <StyledLogo src={Logo} alt="logo" target="_blank" className="logo"/>
            <a href="https://github.com/tanishk2298">
                <StyledGithub src={github} alt="github" className="logo"/>
            </a>
        </div>
     </StyledHeader>
)

export default Header
