import {combineReducers} from 'redux'
import getPost from './postReducer'
import getUser from './getUserReducer'

export default combineReducers({
  posts:getPost,
  users:getUser
})