import React, {Fragment} from 'react'
import {Link} from '@reach/router'
import {StyledNavigation} from './styles/StyledNavigation';
import FontAwesome from 'react-fontawesome'

const NotFound = () => {
    return (
        <Fragment>
                <StyledNavigation>
                    <div className="navigation-content">
                        <Link to="/" onClick="window.location.reload();return false;">
                            <p><FontAwesome className="fa-home" name ="search"/>&nbsp; Home</p>
                        </Link>
                    </div>
                </StyledNavigation>
            <div>
                <center style={{color:'#eee', fontFamily:'Montserrat', marginTop: '14%'}}>
                    <h1>Nothing Found Here</h1>
                    <p>[check entered movie name once]</p>
                </center>
            </div>
        </Fragment>
    )
}

export default NotFound