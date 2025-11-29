import React, {useContext, useState} from 'react';
import { ThemeContext } from './ThemeContext';




const Toolbar = ()=>{

    const [theme,onToggleTheme] = useContext(ThemeContext)

    return (
        <>
            <div style={{backgroundColor:theme==="dark"?"black":"yellow"}}>
                <h3>Current Theme is:{theme}</h3>
                <button onClick={onToggleTheme}>Toggle</button>
            </div>
        </>
    )
}


export default Toolbar;