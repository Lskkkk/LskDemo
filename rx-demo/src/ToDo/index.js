import React from 'react';
import Entry from './Entry';
import Item from './Item';
import ToDoStore from './Store';

export default class ToDo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemList: []
        };
        this.setItemList = this.setItemList.bind(this);
        ToDoStore.subscribe(this.setItemList);
    }

    render() {
        return (
            <div>
                <Entry record={this.record} />
                {
                    this.state.itemList.map((item, index) => <Item
                        key={index}
                        content={item.content}
                        isFinished={item.isFinished}
                        onClick={this.toggleFinish}
                    />)
                }
            </div>
        );
    }

    setItemList = (itemList) => {
        this.setState({
            itemList
        });
    };

    record = content => {
        ToDoStore.add(content);
    };

    toggleFinish = content => {
        ToDoStore.toggleFinish(content);
    }
};