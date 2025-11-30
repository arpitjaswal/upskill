import React, { act } from 'react';
import ReactDOM from 'react-dom/client'
import { BrowserRouter,Link } from 'react-router-dom';
import App from "./App"
import Counter from "./Counter"
import Input from "./Input"
import TestingUseEffect from "./testingUseEffect"
import ToggleText from './ToggleText'
import ToDoList from './ToDoList';
import UserList from './UserList';
import ParentComponent from './ParentComponent'
import ContextPractice from './ContextPractice';
import useFetch from './useFetch';
import ParentMemo from './ParentMemo';
import Debounce from './Debounce';
import ToDoApp from './ToDoApp';
import UserListNew from './UserListNew';
import CounterWithHistory from './CounterWithHistory';
import SearchAndPagination from './SearchAndPagination';
import Promises from './Promises';
import FormValidation from './FormValidation';

function Main(){
    const data =  useFetch("https://jsonplaceholder.typicode.com/posts");
    const actualData = data.sendData

    return(

        <>
        <p>--------------------------------------</p>
        <FormValidation/>
        <p>---------------------------------------</p>
        <Promises/>
        <p>----------------------------------------</p>
         <SearchAndPagination/>
        <p>-----------------------------------------</p>
        <CounterWithHistory/>
        <p>----------------------------------------</p>
            <UserListNew/>
        <p>-----------------------------------------</p>
            <ToDoApp/>
        <p>------------------------------------------</p>
            <Debounce/>

        <p>----------------------------------</p>
           <BrowserRouter>
           <App/>
           </BrowserRouter>
            
        

        <p>---------------------------------</p>
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

        <p>---------------------------------</p>
        <ParentComponent/>

        <p>-----------------------------------</p>

        <ContextPractice/>

        <p>----------------------------------</p>
{/* 
        <div style={{height:"10px"}}>
                {
                    actualData.map(x=>(
                        x.title
                    ))
                }
        </div> */}

        <p>usecallback and react.memo</p>
        <ParentMemo/>

        <p>----------------------------------------</p>
       
        </>

        
    )
}

const rootReact = ReactDOM.createRoot(document.getElementById('root'));
rootReact.render(<Main/>)