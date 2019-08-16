import * as React from 'react';
import GContext from './ContextSetter';

// class ContextChild extends React.Component {
//     static contextType = GContext;
//     render() {
//         let value = this.context;
//         return (
//             <div>
//                 {value}
//             </div>
//         );
//     }
// }

function ContextChild(props) {
    return (
        <GContext.Consumer>
            {
                context => (
                    <div>
                        {context}
                    </div>
                )
            }
        </GContext.Consumer>
    );
}

export default ContextChild;
