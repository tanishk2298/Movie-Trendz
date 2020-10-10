import React, {Fragment, useState, useEffect} from 'react'
import Grid from './elements/Grid'
import HeroImage from './elements/HeroImage'
import SearchBar from './elements/SearchBar'
import MovieThumb from './elements/MovieThumb'
import LoadMoreBtn from './elements/LoadMoreBtn'
import Spinner from './elements/Spinner'
import {useHomeFetch} from './hooks/useHomeFetch'
import {
    API_URL,
    API_KEY,
    API_BASE_URL,
    POSTER_SIZE,
    BACKDROP_SIZE,
    IMAGE_BASE_URL
} from '../config'

const Home = () => {

    const [{state, loading, error}, fetchMovies] = useHomeFetch()
    console.log(state)

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
            <Grid/>
            <MovieThumb/>
            <Spinner/>
            <LoadMoreBtn/>
        </Fragment>
    )
}

export default Home
