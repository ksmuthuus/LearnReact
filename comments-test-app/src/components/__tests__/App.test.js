import React from 'react'
import ReactDOM from 'react-dom'
import {shallow} from 'enzyme'

import App from 'components/App'
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'

let wrapped

beforeEach(() => {
  wrapped = shallow(<App/>)
})

it('Should render comment box',() => {
  expect(wrapped.find(CommentBox).length).toEqual(1)
})

it('Should render comment list',() => {
  expect(wrapped.find(CommentList).length).toEqual(1)
})
