import {combineReducers} from 'redux';
import audioVolumeReducer from './audioVolumeReducer';

const rootReducer = combineReducers({
    audioVolume: audioVolumeReducer
})

export default rootReducer;