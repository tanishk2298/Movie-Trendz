import React, {Fragment, useState, useEffect} from 'react'
import Grid from './elements/Grid'
import HeroImage from './elements/HeroImage'
import SearchBar from './elements/SearchBar'
import MovieThumb from './elements/MovieThumb'
import LoadMoreBtn from './elements/LoadMoreBtn'
import Spinner from './elements/Spinner'
import {
    API_URL,
    API_KEY,
    API_BASE_URL,
    POSTER_SIZE,
    BACKDROP_SIZE
} from '../config'

const Home = () => {

    const [state, setState] = useState({movies:[]})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const fetchMovies = async endpoint => {

        setError(false)
        setLoading(true)

        try{
            const result = await (await fetch(endpoint)).json()
            console.log(result)
            setState(prev => ({
                ...prev,
                movies : [...result.results],
                heroImage : prev.heroImage || result.results[0],
                currentPage : result.page,
                totalPages : result.total_Pages
            }))
        }
        catch(error){
            setError(true)
            console.log(error);
        }
        setLoading(false);
    }    
    
    useEffect(() => {
        fetchMovies(`${API_URL}movie/popular?api_key=${API_KEY}`);
    }, [])

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
