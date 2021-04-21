import React, {useState, useEffect, Fragment} from 'react';
import { render } from 'react-dom';

// class Test extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 0            
//         };
//     }
//     render() {
//         return (
//             <div>
//                 <p>You clicked {this.state.count} times</p>
//                 <button onClick ={() => this.setState({count: this.state.count + 1})}>
//                     Click me
//                 </button>
//             </div>
//         );
//     }
// }

function Example() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>You Clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    )
}

function Test() {
    const [age, setAge] = useState(42);
    const [fruit, setFruit] = useState('banana');
    const [todo, setTodo] = useState([{title: 'First',text: 'Learn Hooks'}])
    const friendList = [
        {id: 1, name: 'jisu'},
        {id: 2, name: 'sujin'},
        {id: 3, name: 'jinsu'},
    ];
    
    return (
        <Fragment>
        <p>age: {age}</p>,
        <p>fruit: {fruit}</p>
        <h1>Todo</h1>
        <h3>Title: {todo[0].title}</h3>
        <h3>Text: {todo[0].text}</h3>

        <h1>FriendList</h1>
        <select>
        {friendList.map(friend => (
            <option key={friend.id} value={friend.id}>
                {friend.name}
            </option>
        ))}
        </select>
        </Fragment>
    );
}


export default Test;