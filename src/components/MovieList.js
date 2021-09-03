import { Container } from '@material-ui/core';
import '../css/MovieList.css';
import MovieItem from './MovieItem';
import MovieItemViewed from './MovieItemViewed';

function MovieList() {
    return(
        <Container maxWidth="sm" className="movieContainer">
            <MovieItem />
            <MovieItem />
            <MovieItem />
            <MovieItemViewed />
            <MovieItemViewed />
            <MovieItemViewed />
        </Container>
    );
}

export default MovieList;