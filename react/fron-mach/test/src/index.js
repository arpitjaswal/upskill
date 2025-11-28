import React from 'react';
import ReactDOM from 'react-dom/client'
import App from "./App"
import Counter from "./Counter"
import Input from "./Input"
import TestingUseEffect from "./testingUseEffect"
import ToggleText from './ToggleText'
import ToDoList from './ToDoList';
import UserList from './UserList';


function Main(){

    return(
        <>
        <h1>use State</h1>
        <h3>example 1: counter</h3>
        <Counter/>

        <p>--------------------------------</p>

        <h3>example 2: typing</h3>
        <Input/>

        <h2>useEffect</h2>
        <TestingUseEffect/>

        <h2>react problems</h2>
        <h3>toggle text</h3>
        <ToggleText/>

        <p>-------------------------------</p>

        <h2>To do list</h2>
        <ToDoList/>

        <p>---------------------------------</p>
        <h2>Users List</h2>
        <UserList/>
        </>
    )
}

const rootReact = ReactDOM.createRoot(document.getElementById('root'));
rootReact.render(<Main/>)