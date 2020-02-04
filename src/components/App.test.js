import React from 'react'
import { shallow} from 'enzyme'
import App from 'components/App'
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommetList'

let wrapped

beforeEach(() => {
    wrapped = shallow(<App />)  
})

afterEach(() => {
  wrapped.unmount()
})

it('Shows comment box and comment list', () => {
  
  expect(wrapped.find(CommentBox).length).toEqual(1)
  expect(wrapped.find(CommentList).length).toEqual(1)
})