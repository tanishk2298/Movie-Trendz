import React from 'react'
import {StyledMovieThumb} from '../styles/StyledMovieThumb'
import {Link} from '@reach/router'

const MovieThumb = ({image, movieId, clickable, movieName}) => (
    <StyledMovieThumb>
        {clickable ? (
            <Link to={`/${movieId}`}>
                <img className="clickable" src={image} alt="movie_thumbnail"/>
            </Link>
        ) : (
            <img src={image} alt="movie_thumbnail"/>
        )}
        <span className="movie-name">{movieName}</span>
    </StyledMovieThumb>
)

export default MovieThumb
