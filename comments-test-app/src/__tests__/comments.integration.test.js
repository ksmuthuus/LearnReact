import {mount} from 'enzyme'
import React from 'react'
import Root from 'Root'
import App from 'components/App'
import moxios from 'moxios'

describe('Fetch comments',() => {
  beforeEach(() => {
    moxios.install()
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments',{
      status:200,
      response:[{id:100, name:'Fetched#1'},{id:200, name:'Fetched#2'}]
    })
  })

  it('Should return countable comment texts',(done) => {
    const wrapped = mount(<Root><App/></Root>)

    wrapped.find('.fetchComments').simulate('click')

    moxios.wait(() => {
      wrapped.update()
      expect(wrapped.find('li').length).toBeGreaterThan(0)
      done()
      wrapped.unmount()
    })

    
  })

  afterEach(() => {
    moxios.uninstall()
  })
})