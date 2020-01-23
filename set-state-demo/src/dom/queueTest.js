import * as React from 'react';

export default class QueueTest extends React.Component {
    constructor(props) {
        super(props);
        this.refresh = 0;
        this.state = {
            queueCount: 0,
            anotherCount: 0
        };
    }

    componentDidMount() {
        // 多次对同一个值setState会只应用最后一个
        this.setState({ queueCount: this.state.queueCount + 1 });
        this.setState({ queueCount: this.state.queueCount + 1 });
        this.setState({ queueCount: this.state.queueCount + 1 });

        // 同时对不同的值setState则不受影响
        this.setState({ anotherCount: this.state.anotherCount + 1 });
    }

    render() {
        console.log(`refresh count: ${++this.refresh}`);
        console.log(`queueCount: ${this.state.queueCount}, anotherCount: ${this.state.anotherCount}`);
        return (
            <div id={'sync'} style={{ width: 400, height: 100, background: '#0193' }}>
                queue test
            </div>
        );
    }
}