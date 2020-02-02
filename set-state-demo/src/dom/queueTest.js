import * as React from 'react';

export default class QueueTest extends React.Component {
    constructor(props) {
        super(props);
        this.refresh = 0;
        this.state = {
            queueCount: 0,
            anotherCount: 0,
            funcCount: 0
        };
    }

    componentDidMount() {
        // 多次对同一个值setState，每次this.state.queueCount值都是一样的，看起来只应用了一次
        this.setState({ queueCount: this.state.queueCount + 1 });
        this.setState({ queueCount: this.state.queueCount + 1 });
        this.setState({ queueCount: this.state.queueCount + 1 });

        // 使用callback对setState，state值更新完后才执行下一个，因此都能更新
        this.setState((state) => ({ funcCount: state.funcCount + 1 }));
        this.setState((state) => ({ funcCount: state.funcCount + 1 }));
        this.setState((state) => ({ funcCount: state.funcCount + 1 }));

        // 同时对不同的值setState则不受影响
        this.setState({ anotherCount: this.state.anotherCount + 1 });

    }

    render() {
        console.log(`refresh count: ${++this.refresh}`);
        console.log(JSON.stringify(this.state));
        return (
            <div id={'sync'} style={{ width: 400, height: 100, background: '#0193' }}>
                queue test
            </div>
        );
    }
}