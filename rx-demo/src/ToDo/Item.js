import React from 'react';

const Item = (props) => {
    const { content = '', isFinished = false, onClick } = props;
    return (
        <div>
            <p><input type="checkbox" checked={isFinished} onClick={() => onClick(content)} />{content}</p>
        </div>
    );
};

export default Item;