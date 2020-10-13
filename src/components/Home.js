import React, {Fragment, useState} from 'react'
import Grid from './elements/Grid'
import HeroImage from './elements/HeroImage'
import SearchBar from './elements/SearchBar'
import MovieThumb from './elements/MovieThumb'
import LoadMoreBtn from './elements/LoadMoreBtn'
import Spinner from './elements/Spinner'
import {useHomeFetch} from './hooks/useHomeFetch'
import NoImage from './images/not_found.jpg'
import {
    API_URL,
    API_KEY, 
    POSTER_SIZE,
    BACKDROP_SIZE,
    IMAGE_BASE_URL
} from '../config'

const Home = () => {

    const [{state, loading, error}, fetchMovies] = useHomeFetch()
    const [searchTerm, setSearchTerm] = useState('');

    console.log(state)

    const loadMoreMovies = () => {
        
    }

    if(error) return<div>Something went wrong.....</div>;
    if(!state.movies[0]) return <Spinner/>;

    return (
        <Fragment>
            <HeroImage 
                image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.heroImage.backdrop_path}`}
                title={state.heroImage.original_title}
               text={state.heroImage.overview}
            />
            <SearchBar/>
            <Grid header={searchTerm ? 'Search Result' : 'Trending Today'}>
                {state.movies.map(movie => (
                    <MovieThumb
                        key={movie.id}
                        clickable
                        image={
                            movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` : NoImage
                        }
                        movieId={movie.id}
                        movieName={movie.original_title}
                    />
                ))}
            </Grid>
            { loading && <Spinner/>}
            <LoadMoreBtn text="&#709;" callback={loadMoreMovies}/>
        </Fragment>
    )
}

export default Home
