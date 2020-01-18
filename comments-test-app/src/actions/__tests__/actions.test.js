import {postCommentAction, getCommentAction} from 'actions'
import {CREATE_COMMENT, FETCH_COMMENT} from 'actions/types'

describe('Post Comment', () => {
  it('Should return valid type', () => {
    const response = postCommentAction()

    expect(response.type).toEqual(CREATE_COMMENT)
  })

  it('Should return valid payload', () => {
    const response = postCommentAction('hello')

    expect(response.payload).toHaveProperty('text','hello')
    expect(response.payload).toHaveProperty('id')
  })
})