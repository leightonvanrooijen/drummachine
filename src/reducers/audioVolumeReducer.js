const initialState = 0.3;

const audioVolumeReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case "CHANGE_VOLUME":
            return payload.volume

        default:
            return state;
    }
}

export default audioVolumeReducer;