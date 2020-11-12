import React, { useState, useEffect } from 'react';
import VolumeSlider from './VolumeSlider'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ToggleButton from '@material-ui/lab/ToggleButton';
import { useSelector } from 'react-redux';



const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        height: '100%',
        marginTop: '10px',
        backgroundColor: '',
        maxWidth: '400px',
        maxHeight: '500px'
    },
    mp3Playiing: {
        textAlign: 'center',
        backgroundColor: '',
    },
    button: {
        backgroundColor: '#5d99c6',
        color: "#000000",
        height: '100%',
        width: '100%',
    }
}));

// Listens for keypress then clicks drum button based on key id
document.addEventListener('keydown', (event) => {
    const id = event.key.toUpperCase();

    if (soundKeys.includes(id)) {
        const buttonClick = document.getElementById(id)
        buttonClick.classList.add('Mui-selected')
        buttonClick.click()
        setTimeout(() => buttonClick.classList.remove('Mui-selected'), 150);
    }
})

const sounds = [{
    key: 'Q',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
    name: 'Heater 1'
},
{
    key: 'W',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
    name: 'Heater 2'
},
{
    key: 'E',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
    name: 'Heater 3'
},
{
    key: 'A',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
    name: 'Heater 4'
},
{
    key: 'S',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
    name: 'Heater 5'
},
{
    key: 'D',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
    name: 'Oh'
},
{
    key: 'Z',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
    name: 'Kick-hat'
},
{
    key: 'X',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    name: 'Kick'
},
{
    key: 'C',
    mp3: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
    name: 'Cev'
},
]

// Maps the Keyboard keys used to a key list, used by keydown eventListener
const soundKeys = []
sounds.map((sound) => (
    soundKeys.push(sound.key)
))

export default function DrumMachine() {
    const classes = useStyles();
    // Imports in the volumeReducer state
    const volume = useSelector((state) => state.audioVolume)
    const [playAudio, setAudio] = useState('')
    const [mp3Selected, setMp3Selected] = useState('Drum Machine')

    // Everytime audio button is clicked this will play audio then reset the state also volume controll is here
    useEffect(() => {
        const audio = new Audio(playAudio)
        console.log(playAudio)
        audio.volume = volume
        audio.play()
        setAudio('')
    }, [playAudio])


    return (
      <Grid container className={classes.container} xs={10} spacing={1}>
        <Grid item className={classes.mp3Playiing} xs={12}>
          <h1> {mp3Selected} </h1>{" "}
        </Grid>{" "}
        <Grid item xs={12}>
          <VolumeSlider />
        </Grid>{" "}
        {sounds.map((sound) => (
          <Grid item className={classes.item} xs={4}>
            <ToggleButton
              id={sound.key}
              type="button"
              className={classes.button}
              onClick={() => {
                setAudio(sound.mp3);
                setMp3Selected(sound.name);
              }}
            >
              {" "}
              {sound.key}{" "}
            </ToggleButton>
          </Grid>
        ))}{" "}
      </Grid>
    );

}