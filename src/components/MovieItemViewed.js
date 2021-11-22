import { Box, Button, Grid, Modal } from '@material-ui/core';
import { Delete, StarRate, Visibility } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import '../css/MovieItemViewed.css';

import MovieDataService from "../service";

function MovieItemViewed(props) {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // const updateRatingValue = e => {
    //     MovieDataService.update(props.props.key, {movieRating: newValue, noOfRatings: newNumberOfRatings}).then(() => {

    //     })

    //     handleClose();
    // }

    return(
        <React.Fragment>
            {/* <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box>
            <div class="rate">
                <input type="radio" id="star5" name="rate" value="5" onClick={updateRatingValue}/>
                <label for="star5" title="text">5 stars</label>
                <input type="radio" id="star4" name="rate" value="4" onClick={updateRatingValue}/>
                <label for="star4" title="text">4 stars</label>
                <input type="radio" id="star3" name="rate" value="3" onClick={updateRatingValue}/>
                <label for="star3" title="text">3 stars</label>
                <input type="radio" id="star2" name="rate" value="2" onClick={updateRatingValue}/>
                <label for="star2" title="text">2 stars</label>
                <input type="radio" id="star1" name="rate" value="1" onClick={updateRatingValue}/>
                <label for="star1" title="text">1 star</label>
            </div>
            </Box>
            </Modal> */}

            <Grid container className="movieItemViewedContainer">
                <Grid item xs={9}>
                    <p className="movieItemViewedTitle">{props.props.movieName}</p>
                    <p className="movieItemViewedYear">{props.props.movieYear}</p>
                </Grid>
                <Grid item xs={1} className="rating">
                    <a>{props.props.movieRating}</a>
                </Grid>
                <Grid item xs={2}>
                    {/* <a href="#"  onClick={() => handleOpen()}> */}
                        <StarRate className="ratingIcon"/>
                    {/* </a> */}
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default MovieItemViewed;