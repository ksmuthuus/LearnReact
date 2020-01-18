import commentReducer from 'reducers/commentReducer'
import {CREATE_COMMENT} from 'actions/types'

it('Should return new state for valid type', () => {
  const response = commentReducer([],{
    type:CREATE_COMMENT,
    payload:{comment:'hello'}
  })

  expect(response).toMatchObject([{comment:'hello'}])
})


it('Should return current state for invalid type', () => {
  const response = commentReducer([],{
    type: 'POST_COMMENT_INVALID',
    payload: {comment:'hello'}
  })

  expect(response).toMatchObject([])
})