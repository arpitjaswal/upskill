import logo from './logo.svg';
import './App.css';
import { useContext } from 'react';
import Counter from './components/Counter';
import { CounterContextMain } from './context/CounterContext';

function App() {

  const counterState = useContext(CounterContextMain)
  return (
  <>  
   <h1>Count: {counterState.count}</h1>
    <Counter setCount={counterState.setCount}/>
    <Counter setCount={counterState.setCount}/>
    <Counter setCount={counterState.setCount}/>
    <Counter setCount={counterState.setCount}/>
  </>
  );
}

export default App;
