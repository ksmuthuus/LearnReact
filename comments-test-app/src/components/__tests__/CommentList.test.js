import {mount} from 'enzyme'
import React from 'react'
import CommentList from 'components/CommentList'
import Root from 'Root'


let wrapped
beforeEach(() => {
  const comments = {
    comments:[{id:100, text:'comment1'},{id:101, text:'comment2'}]
  }
  wrapped = mount(<Root initialState={comments}><CommentList/></Root>)
})

it('Should render li for each comment', () => {
  expect(wrapped.find('li').length).toEqual(2)
})

it('Should render expected text in li',() => {
  expect(wrapped.render().text()).toContain('comment1')
  expect(wrapped.render().text()).toContain('comment2')
})

afterEach(() => {
  wrapped.unmount()
})