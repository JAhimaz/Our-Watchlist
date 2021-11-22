import React, { useState } from 'react';

import { Container, Grid, FormControl, InputLabel, Input, FormGroup, TextField, Button } from '@material-ui/core';
import MovieDataService from '../service';

function InsertMovie() {

    const movieFields = {
        movieName: '',
        movieYear: '',
        movieWatched: false,
        movieRating: '',
        noOfRatings: '',
    }

    const [values, setValues] = useState(movieFields);

    const handleInputChange = e => {
        e.preventDefault();
        var {name, value} = e.target;

        setValues({
            ...values,
            [name]: value,
        });
    }
    
    const handleMovieSubmit = e => {
        e.preventDefault();

        MovieDataService.create(values)
        .then(() => {
            console.log("Added Movie Successfully!");
        }).catch((e) => {
            console.log(e);
        });

        setValues(movieFields);
    }

    return(
        <Container className="bottom">
            <form className="InputFieldDiv" onSubmit={handleMovieSubmit}>
                <Grid container className="gridInput" spacing={1}>
                    <Grid item xs={12}>
                        <TextField name="movieName" placeholder="Enter Movie Name" value={values.movieName} onChange={handleInputChange}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField name="movieYear" placeholder="Movie Year" value={values.movieYear} onChange={handleInputChange}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Button variant="contained" type="submit" block disableElevation>Add Movie</Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
}

export default InsertMovie;