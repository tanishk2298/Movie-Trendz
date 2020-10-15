import React, {Fragment} from 'react'
import Navigation from './elements/Navigation'
import MovieInfoBar from './elements/MovieInfoBar'
import MovieInfo from './elements/MovieInfo'
import Actor from './elements/Actor'
import Grid from './elements/Grid'
import Spinner from './elements/Spinner'

const Movie = ({movie}) => {
    return (
        <Fragment>
            <Navigation/>
            <MovieInfo/>
            <MovieInfoBar/>
            <Grid>
                <Actor/>
            </Grid>
            <Spinner/>
        </Fragment>
    )
}

export default Movie
