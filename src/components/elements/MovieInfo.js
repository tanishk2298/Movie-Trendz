import React from 'react'
import NoImage from '../images/not_found.jpg'
import { IMAGE_BASE_URL, POSTER_SIZE} from '../../config'
import MovieThumb from './MovieThumb'
import {StyledMovieInfo} from '../styles/StyledMovieInfo'
import FontAwesome from 'react-fontawesome'

const MovieInfo = ({movie}) => {
    console.log(movie)
    return (
        <StyledMovieInfo backdrop={movie.backdrop_path}>
            <div className="movieinfo-content">
                <div className="movieinfo-thumb">
                    <MovieThumb
                        image = {movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` : NoImage }
                        clickable = {false}
                    />
                </div>
                <div className="movieinfo-text">
                    <h1>{movie.title}</h1>
                    <h3>Overview</h3>
                    <p>{movie.overview}</p>
                    <div className="rating-director">
                        <div>
                            <h3><span className="rating">IMDB</span> Rating</h3>
                            <div className="score"><span className="rating">&nbsp;&nbsp;&nbsp;</span>{movie.vote_average}&nbsp;<FontAwesome className="fa-star" name="star" style={{color: '#16d47b'}}/>
                            </div> 
                        </div>
                        <div className="director">
                            <h3>Director{movie.directors.length > 1 ? 's' : ''}</h3>
                            {movie.directors.map(director => (
                                <p key={director.credit_id}>
                                    {director.name}
                                </p>
                            ))}
                        </div>
                        <div className="date">
                            <h3><span className="rating">Release</span> Date</h3>
                            <p>{movie.release_date}</p>
                        </div>
                        <div className="date rating">
                            <h3>Language</h3>
                            <p>{movie.original_language.toUpperCase()}</p>
                        </div>
                    </div>
                </div>
            </div>
        </StyledMovieInfo>
    )
}

export default MovieInfo
