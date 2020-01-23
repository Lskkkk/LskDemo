import * as React from 'react';

/**
 * 同步场景：
 * 1. 原生事件
 * 2. setTimeout
 */

export default class SyncTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            eventCount: 0,
            timeOutCount: 0
        };
    }

    componentDidMount() {
        document.querySelector('#sync').addEventListener('click', this.onClick);
        setTimeout(() => {
            this.setState({
                timeOutCount: this.state.timeOutCount + 1
            });
            console.log(`sync timeOut count: initial 0, now ${this.state.timeOutCount}`);
        }, 0);
    }

    render() {
        return (
            <div id={'sync'} style={{ width: 100, height: 100, background: '#9383' }}>
                sync click
            </div>
        );
    }

    onClick = () => {
        this.setState({
            eventCount: this.state.eventCount + 1
        });
        console.log(`sync event count: initial 0, now ${this.state.eventCount}`);
    }
}