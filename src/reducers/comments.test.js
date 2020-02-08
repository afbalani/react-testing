import commentsReducer from 'reducers/comments'
import { SAVE_COMMENT } from 'actions/types'

it('handles actions of type SAVE_COMMENTS', () => {
    const newComment = 'New Comment'
    const orignComment = 'Old Comment'
    const action = {
        type: SAVE_COMMENT,
        payload: newComment
    }

    const newState = commentsReducer([orignComment], action)

    expect(newState).toEqual([orignComment, newComment])
})

it('handles actions distinct SAVE_COMMENTS', () => {
    const newComment = 'New Comment'
    const orignComment = 'Old Comment'
    const action = {
        type: 'XXXXX',
        payload: newComment
    }

    const newState = commentsReducer([orignComment], action)

    expect(newState).toEqual([orignComment])
})