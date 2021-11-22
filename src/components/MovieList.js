import React from 'react';

import { Container } from '@material-ui/core';
import '../css/MovieList.css';
import MovieItem from './MovieItem';
import MovieItemViewed from './MovieItemViewed';

import MovieDataService from "../service";


class MovieList extends React.Component {
    constructor(props){
        super(props);

        this.onDataChange = this.onDataChange.bind(this);

        this.state = {
            movies: [],
        }
    }

    componentDidMount() {
        MovieDataService.getAll().on("value", this.onDataChange);
    }

    componentWillUnmount() {
        MovieDataService.getAll().off("value", this.onDataChange);
    }

    onDataChange(items) {
        let movies = [];
    
        items.forEach((item) => {
          let key = item.key;
          let data = item.val();
          movies.push({
            key: key,
            movieName: data.movieName,
            movieYear: data.movieYear,
            movieWatched: data.movieWatched,
            movieRating: data.movieRating,
            noOfRatings: data.noOfRatings,
          });
        });
    
        this.setState({
          movies: movies,
        });
    }


    render(){

        const {movies} = this.state;

        return(
            <Container maxWidth="sm" className="movieContainer">
                {movies && movies.map((movie) => (
                    <React.Fragment>
                        {movie.movieWatched && <MovieItemViewed props={movie} />}
                        {!movie.movieWatched && <MovieItem props={movie} />}
                    </React.Fragment>
                ))}
                {/* <MovieItem />
                <MovieItem />
                <MovieItem />
                <MovieItemViewed />
                <MovieItemViewed />
                <MovieItemViewed /> */}
            </Container>
        )
    };
}

export default MovieList;