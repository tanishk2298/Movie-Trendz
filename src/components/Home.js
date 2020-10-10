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
    BACKDROP_SIZE
} from '../config'

const Home = () => {

    const [{state, loading, error}, fetchMovies] = useHomeFetch()
    console.log(state)

    return (
        <Fragment>
            <HeroImage/>
            <SearchBar/>
            <Grid/>
            <MovieThumb/>
            <Spinner/>
            <LoadMoreBtn/>
        </Fragment>
    )
}

export default Home
