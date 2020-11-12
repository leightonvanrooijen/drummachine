import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    marginLeft: '20px',
    marginRight: '20px',
  },
});



export default function VolumeSlider(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [volume, setVolume] = useState(30);
  
  // Updates the redux reducer when ever volume slider is changed
  const changeVolume = (event, volume) => {
    setVolume(volume)
    dispatch({
      type: 'CHANGE_VOLUME',
      payload: {
        volume: volume / 100
      }
    })
  }

  return (
    <div className={classes.root}>

      <Grid container spacing={2}>
        <Grid item>
          <VolumeDown />
        </Grid>
        <Grid item xs>
          <Slider value={volume} onChange={changeVolume} aria-labelledby="continuous-slider" />
        </Grid>
        <Grid item>
          <VolumeUp />
        </Grid>
      </Grid>
    </div>
  );
}
