import { Grid } from '@material-ui/core';
import { Delete, StarRate, Visibility } from '@material-ui/icons';
import '../css/MovieItemViewed.css';

function MovieItemViewed() {
    return(
        <Grid container className="movieItemViewedContainer">
            <Grid item xs={9}>
                <p className="movieItemViewedTitle">The Sixth Sense</p>
                <p className="movieItemViewedYear">(1999)</p>
            </Grid>
            <Grid item xs={1} className="rating">
                <a>5.0</a>
            </Grid>
            <Grid item xs={2}>
                <StarRate className="ratingIcon"/>
            </Grid>
        </Grid>
    );
}

export default MovieItemViewed;