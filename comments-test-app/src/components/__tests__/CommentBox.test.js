import {mount} from 'enzyme'
import React from 'react'
import CommentBox from 'components/CommentBox'
import Root from 'Root'

let wrapped
beforeEach(() => {
  wrapped = mount(<Root><CommentBox/></Root>)
})

it('Should render textarea and button',() => {
  expect(wrapped.find('textarea').length).toEqual(1)
  expect(wrapped.find('button').length).toEqual(2)
})

describe('The text area',() => {

  beforeEach(() => {
    wrapped.find('textarea').simulate('change',{target:{value:'hello'}})
    wrapped.update()
  })

  it('Should get text in textarea', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual('hello')
  })

  it('Should empty textarea on submit',() => {
    wrapped.find('form').simulate('submit')
    wrapped.update()
    expect(wrapped.find('textarea').prop('value')).toEqual('')
  })
})
afterEach(() => {
  wrapped.unmount()
})