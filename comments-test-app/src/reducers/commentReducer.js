import {CREATE_COMMENT, FETCH_COMMENT} from 'actions/types'

export default function(state = [], action) {
  switch(action.type){
    case CREATE_COMMENT:
      return [...state,action.payload]
    case FETCH_COMMENT:
      const comments = action.payload.map(comment => {return {id:comment.id, text:comment.name}})
      return [...state, ...comments]
    default:
      return state;
  }
}