import React from 'react/addons';

export default class HelloWorld extends React.Component {
    static init(ele) {
        React.render(<HelloWorld />, ele);
    }

    static unload(ele) {
        React.unmountComponentAtNode(ele);
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h1>Hello World - I am a React Component</h1>
        )
    }
}