import React from 'react';

export default class Entry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }

    render() {
        return (
            <div>
                请输入：<input id="entry" autoFocus={true} onBlur={this.onBlur} value={this.state.value} onInput={this.onInput} />
            </div>
        );
    }

    onBlur = (event) => {
        const inputValue = event.nativeEvent.target.value;
        if (!inputValue) return;

        const { record } = this.props;
        record(inputValue);
        this.setState({
            value: ''
        });
    };

    onInput = (event) => {
        console.log(event.nativeEvent.target.value);
        this.setState({
            value: event.nativeEvent.target.value
        });
    };
}