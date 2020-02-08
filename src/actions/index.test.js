import { saveComment } from 'actions'
import { SAVE_COMMENT } from 'actions/types'

it('load type save comment', () => {
    const newComment = 'new comment'
    const action = saveComment(newComment)
    expect(action).toEqual({
        type: SAVE_COMMENT,
        payload: newComment
    })
})