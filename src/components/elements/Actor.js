import React from 'react'
import NoImage from '../images/person.png'
import { IMAGE_BASE_URL, POSTER_SIZE} from '../../config'
import {StyledActor} from '../styles/StyledActor'

const Actor = ({actor}) => {
    return (
        <StyledActor>
            <img
                src = {actor.profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}` : NoImage}
                alt = "actor"
            />
            <span className="actor-name">{actor.name}</span>
            <span className="actor-character">{actor.character && `as ${actor.character}`}</span>
        </StyledActor>
    )
}

export default Actor
