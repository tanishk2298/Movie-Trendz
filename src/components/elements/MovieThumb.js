import React from 'react'
import {StyledMovieThumb} from '../styles/StyledMovieThumb'
import {Link} from '@reach/router'

const MovieThumb = ({image, movieId, clickable, movieName}) => (
    <StyledMovieThumb>
        <Link to={`/${movieId}`}>
            {clickable ? (     
                <img className="clickable" src={image} alt="movie_thumbnail"/>     
            ) : (
                <img src={image} alt="movie_thumbnail"/>
            )}
        </Link>
        <span className="movie-name">{movieName}</span>
    </StyledMovieThumb>
)

export default MovieThumb
