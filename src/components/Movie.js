import React, {Fragment} from 'react'
import Navigation from './elements/Navigation'
import MovieInfoBar from './elements/MovieInfoBar'
import MovieInfo from './elements/MovieInfo'
import Actor from './elements/Actor'
import Grid from './elements/Grid'
import Spinner from './elements/Spinner'
import {useMovieFetch} from './hooks/useMovieFetch'
import NotFound from './NotFound'

const Movie = ({movieId}) => {

    const [info, loading, error] = useMovieFetch(movieId)
    if(error){
        return <NotFound/> 
    }
    if(loading){
        return <Spinner/>
    }
    return (
        <Fragment>
            <Navigation movie={info.original_title}/>
            <MovieInfo movie={info}/>
            <MovieInfoBar/>
            <Grid>
                <Actor/>
            </Grid>
        </Fragment>
    )
}

export default Movie
