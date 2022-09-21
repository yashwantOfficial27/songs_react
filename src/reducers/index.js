import { combineReducers } from 'redux';

const songsReducer = () =>{
    return [
        {title : 'Raatan lambiyan', duration : '4:05' },
        {title : 'Taaron ka sehar', duration : '3.30' },
        {title : 'Baarish ki jaaye', duration : '4.30'},
        {title : 'kaise hua', duration : '5.06'},
        {title : 'Raanjha', duration : '3.30'}
        
    ];
};

const selectedSongReducer = (selectedSong = null, action) =>{
    if (action.type === 'SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers ({
    songs : songsReducer,
    selectedSong : selectedSongReducer

})