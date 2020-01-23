import * as React from 'react';

/**
 * 异步场景：
 * 1. 合成事件
 * 2. 生命周期中
 */

export default class AsyncTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            eventCount: 0,
            hookCount: 0
        };
    }

    componentDidMount() {
        this.setState({
            hookCount: this.state.hookCount + 1
        });
        console.log(`async hook count: initial 0, now ${this.state.hookCount}`);
    }

    render() {
        return (
            <div style={{ width: 100, height: 100, background: '#4373' }} onClick={this.onClick}>
                async click
            </div>
        );
    }

    onClick = () => {
        this.setState({
            eventCount: this.state.eventCount + 1
        });
        console.log(`async event count: initial 0, now ${this.state.eventCount}`);
    }
}