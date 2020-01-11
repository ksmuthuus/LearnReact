//import _ from 'lodash'
import jsonPlaceHolder from '../apis/jsonPlaceHolder'

export const fetchPosts = () => 
  async dispatch => {
  const response = await jsonPlaceHolder.get('/posts')
  dispatch({
    type:"FETCH_POSTS",
    payload:response.data
  })
}

//Approach#1
export const getUser = id =>  async dispatch => {
  const response = await jsonPlaceHolder.get(`/users/${id}`)
  dispatch({
    type:"FETCH_USER",
    payload:response.data
  })
}

//Approach#2 using Memoize
// export const getUser = id =>  dispatch => _getUser(id,dispatch)
// const _getUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceHolder.get(`/users/${id}`)
//   dispatch({
//     type:"FETCH_USER",
//     payload:response.data
//   })
// })