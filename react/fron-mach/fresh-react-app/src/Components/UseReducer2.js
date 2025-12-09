import React, {useReducer} from "react"

const initialState = {value:"neither",age:0}

const reducer = (state,action)=>{
    if(action.function==="makeFalse"){
        return {...state,value:"false"}
    }else if(action.function==="makeTrue"){
        return {...state,value:"true"}
    }

    if(action.age<=69){
        return {...state,age:"minor"}
    }else if(action.age>69){
        return {...state,age:"adult"}
    }else{
        return {...state}
    }
}

const UseReducer2 = ()=>{
const [state,dispatch] = useReducer(reducer,initialState)
return(
    <>      
        <p>Value: {state.value}</p>
        <p>Age: {state.age}</p>
        <button onClick={()=>dispatch({function:"makeTrue"})}>make true</button>
        <button onClick={()=>dispatch({function:"makeFalse"})}>make false</button>
        <button onClick={()=>dispatch({age:"minor"})}>make minor</button>
        <button onClick={()=>dispatch({age:"adult"})}>make adult</button>
    </>
)
}

export default UseReducer2