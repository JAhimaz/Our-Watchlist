import { Grid } from '@material-ui/core';
import { useEffect, useState } from 'react';
import '../css/App.css';
import '../css/root.css';
import { darkTheme, lightTheme } from '../Themes';

import HeaderBar from './HeaderBar';
import MovieList from './MovieList';

function App() {

  const [theme, setTheme] = useState(true);

  useEffect(() => {
    theme ? applyStyling(theme) : applyStyling(theme);
  }, [theme]);

  const applyStyling = (theme) => {
    var root = document.querySelector(':root');

    root.style.setProperty('--background', theme ? darkTheme.background : lightTheme.background);
    root.style.setProperty('--foreground', theme ? darkTheme.foreground : lightTheme.foreground );
    root.style.setProperty('--subject', theme ? darkTheme.subject : lightTheme.subject );
    root.style.setProperty('--subjectText', theme ? darkTheme.subjectText : lightTheme.subjectText );
    root.style.setProperty('--unselected', theme ? darkTheme.unselected : lightTheme.unselected );
    root.style.setProperty('--unselectedText', theme ? darkTheme.unselectedText : lightTheme.unselectedText );
    root.style.setProperty('--highlight', theme ? darkTheme.highlight : lightTheme.highlight );
    root.style.setProperty('--subHighlight', theme ? darkTheme.subHighlight : lightTheme.subHighlight );
    root.style.setProperty('--plainText', theme ? darkTheme.plainText : lightTheme.plainText );
  }

  return (
    <div className="App">
      <header className="App-header">
        <Grid container direction={'row'}>
          <Grid item xs={12}>
            <HeaderBar />
          </Grid>
          <Grid item xs={12}>
            <MovieList />
          </Grid>
          <Grid item xs={12} className="InputFieldGrid">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1b2939" fill-opacity="1" d="M0,224L60,234.7C120,245,240,267,360,256C480,245,600,203,720,170.7C840,139,960,117,1080,112C1200,107,1320,117,1380,122.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
            
          </Grid>
        </Grid>

      </header>
    </div>
  );
}

export default App;
