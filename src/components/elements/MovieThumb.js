import React from 'react'
import {StyledMovieThumb} from '../styles/StyledMovieThumb'

const MovieThumb = ({image, movieId, clickable}) => (
    <StyledMovieThumb>
        {clickable ? (
            <img className="clickable" src={image} alt="movie_thumbnail"/>
        ) : (
            <img src={image} alt="movie_thumbnail"/>
        )}
    </StyledMovieThumb>
)

export default MovieThumb
