import {combineReducers} from 'redux'

const songReducer = () => {
    return [
        {title: 'No Scrubs', duration: '4:06'},
        {title: 'Macarena', duration: '3:36'},
        {title: 'Hey hey', duration: '2:56'},
        {title: 'All Star', duration: '3:00'}
    ]
}

const selectedSongReducer = (selectedSong=null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload
    }
    return selectedSong
}

export default combineReducers({
    songs: songReducer,
    selectedSong: selectedSongReducer
})
