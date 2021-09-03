import { Grid } from '@material-ui/core';
import { Delete, Visibility } from '@material-ui/icons';
import '../css/MovieItem.css';

function MovieItem() {
    return(
        <Grid container className="movieItemContainer">
            <Grid item xs={8}>
                <p className="movieItemTitle">The Jungle Cruise</p>
                <p className="movieItemYear">(2021)</p>
            </Grid>
            <Grid item xs={2}>
                <a href="#"><Visibility className="viewedIcon"/></a>
            </Grid>
            <Grid item xs={2}>
            <a href="#"><Delete className="deleteIcon"/></a>
            </Grid>
        </Grid>
    );
}

export default MovieItem;