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

    const [{state : 
            {movies, currentPage, totalPages, heroImage}, 
            loading,
            error}, 
            fetchMovies
        ] = useHomeFetch()
    const [searchTerm, setSearchTerm] = useState('');

    const loadMoreMovies = () => {
        const searchEndpoint = `${API_URL}search/movie?api_key=${API_KEY}&query=${searchTerm}&page=${currentPage + 1}`
        const popularEndpoint = `${API_URL}movie/popular?api_key=${API_KEY}&page=${currentPage + 1}`

        const endpoint = searchTerm ? searchEndpoint : popularEndpoint

        fetchMovies(endpoint)
    }

    if(error) return<div>Something went wrong.....</div>;
    if(!movies[0]) return <Spinner/>;

    return (
        <Fragment>
            <HeroImage 
                image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
                title={heroImage.original_title}
               text={heroImage.overview}
            />
            <SearchBar/>
            <Grid header={searchTerm ? 'Search Result' : 'Trending Today'}>
                {movies.map(movie => (
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
            <LoadMoreBtn text="Load More" callback={loadMoreMovies}/>
        </Fragment>
    )
}

export default Home
