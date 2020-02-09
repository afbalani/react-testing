import React from 'react'
import { mount } from 'enzyme'
import Root from 'Root'
import CommentList from 'components/CommetList'

let wrapped
let comment1 = 'Comment 1'
let comment2 = 'Comment 2'

beforeEach(() => {
    const initialState = {
        comments: [comment1, comment2]
    }
    wrapped = mount(
        <Root initialState={initialState}>
            <CommentList></CommentList>
        </Root>
    )
})

it('create um LI per comment', () => {
    expect(wrapped.find('li').length).toEqual(2)
    const wrappedText = wrapped.render().text()
    expect(wrappedText).toContain(comment1)
    expect(wrappedText).toContain(comment2)
})
