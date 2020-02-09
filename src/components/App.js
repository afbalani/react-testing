import React, { Component } from 'react'
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommetList'

class App extends Component {
    render() {
        return (
            <div>
                I am app component
                <CommentBox />
                <CommentList />
            </div>
        )
    }
}
export default App