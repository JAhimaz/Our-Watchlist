import '../css/HeaderBar.css';

import { Container, Grid } from '@material-ui/core';
import { Videocam } from '@material-ui/icons';

function HeaderBar() {
    return(
        <Container>
            <Grid container className="header">
                <Grid item xs={8}>
                    <p className="title">Our MovieList</p>
                    <p className="subTitle">Add, Rate and Recommend</p>
                </Grid>
                <Grid item xs={4}>
                    <Videocam className="icon"/>
                </Grid>
            </Grid>
        </Container>
    );
}

export default HeaderBar;