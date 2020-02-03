import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

it('Shows comment box and comment list', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);

    expect(div.innerHTML).toContain('comment box')
    expect(div.innerHTML).toContain('comment list')

    ReactDOM.unmountComponentAtNode(div);
})