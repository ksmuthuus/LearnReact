import {combineReducers} from 'redux'

const songsReducer = () => {
  return ([{
    title : "song#1",
    duration: "3:45"
  }, {
    title : "song#2",
    duration: "2:45"
  }, {
    title : "song#3",
    duration: "4:45"
  }, {
    title : "song#4",
    duration: "5:45"
  }, {
    title : "song#5",
    duration: "1:45"
  }])
}

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SELECT_SONG") {
    return action.payload
  }
  return selectedSong
}

const reducers = () => {
  return combineReducers({
    songs: songsReducer, selectedSong:selectedSongReducer
  })
}

export default reducers