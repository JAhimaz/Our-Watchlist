import { Container, Grid, FormControl, InputLabel, Input, FormGroup, TextField, Button } from '@material-ui/core';
import { useEffect, useState } from 'react';
import '../css/App.css';
import '../css/root.css';
import { darkTheme, lightTheme } from '../Themes';

import HeaderBar from './HeaderBar';
import MovieList from './MovieList';
import InsertMovie from './InsertMovie';

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
        <div className="top">
        <HeaderBar />
        <MovieList />
        </div>
        <InsertMovie />
      </header>
    </div>
  );
}

export default App;
