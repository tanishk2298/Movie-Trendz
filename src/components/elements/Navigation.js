import React from 'react'
import {Link} from '@reach/router'
import {StyledNavigation} from '../styles/StyledNavigation';
import FontAwesome from 'react-fontawesome'

const Navigation = ({movie}) => (
    <StyledNavigation>
        <div className="navigation-content">
            <Link to="/">
                <p><FontAwesome className="fa-home" name ="search"/>&nbsp; Home</p>
            </Link>
            <p className="nav"> / </p>
            <p>{movie}</p>
        </div>
    </StyledNavigation>
)

export default Navigation
