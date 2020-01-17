import {mount} from 'enzyme'
import React from 'react'
import CommentBox from 'components/CommentBox'

let wrapped
beforeEach(() => {
  wrapped = mount(<CommentBox/>)
})

it('Should render textarea and button',() => {
  expect(wrapped.find('textarea').length).toEqual(1)
  expect(wrapped.find('button').length).toEqual(1)
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