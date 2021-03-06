import React from 'react'
import { mount} from 'enzyme'
import Root from 'Root'
import CommentBox from 'components/CommentBox'

let wrapped

beforeEach(() => {
    wrapped = mount(
      <Root>
        <CommentBox />
      </Root>
    )  
})

afterEach(() => {
  wrapped.unmount()
})

it('Shows text area and a button', () => {  
  expect(wrapped.find('textarea').length).toEqual(1)
  expect(wrapped.find('button').length).toEqual(1)
})

describe('functionalities ', () => {
  const texto = 'teste texto'

  beforeEach(() => {
    wrapped.find('textarea').simulate('change', {target: { value: texto}})
    wrapped.update()
  })

  it('Value from text area stored in comment status and shows in text area', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual(texto)
  })
  
  it('OnSubmit text area and comment status is cleaned', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual(texto)
    wrapped.find('form').simulate('submit', { preventDefault:  () => {}})
    wrapped.update()
    expect(wrapped.find('textarea').prop('value')).toEqual('')
  })

})