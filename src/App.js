import React from 'react';
import './App.css';
import DrumMachine from './components/DrumMachine'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  app: {
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
      height: '100vh'
  },
  
}));

function App() {
  const classes = useStyles();


  return (
    <div id="app" className={classes.app}>
      
      <DrumMachine />
    </div>
    
  );
}

export default App;

