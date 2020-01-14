import * as React from 'react';
import { na } from './require/normalRequire';
import { la } from './require/lazyRequire';

class Content extends React.Component {
    constructor() {
        super();
        this.state = {
            refreshNum: 1,
        };
        this.addState = this.addState.bind(this);
    }
    render() {
        return (
            <>
                <p>{na}</p>
                <p>{la}</p>
                <button style={{ color: '#FFF' }} onClick={this.addState}>
                    {this.state.refreshNum}
                </button>
            </>
        );
    }
    addState() {
        this.setState({
            refreshNum: this.state.refreshNum + 1,
        });
    }
}

export default Content;