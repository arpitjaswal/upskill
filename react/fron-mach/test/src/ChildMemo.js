import React from 'react';



const ChildMemo = ({incrementMe})=>{

    return (
        <>
        <p>Child Component Rendered!</p>

        <button onClick={incrementMe}>Increase from Child</button>
        </>
    )


}


export default React.memo(ChildMemo);