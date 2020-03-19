import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Todo from './components/Todo';

const App = () => {
    return (
        <div>
            <Todo/>
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById("root"));