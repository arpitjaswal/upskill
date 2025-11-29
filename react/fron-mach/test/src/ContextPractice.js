import React,{useState} from 'react';
import { ThemeContext } from './ThemeContext';
import Toolbar from './Toolbar';
const ContextPractice = ()=>{
    const [theme,setTheme] = useState('light');
        
    function onToggle(){
        setTheme(theme==='light'?'dark':'light');
    }

    return(
        <>
            <ThemeContext.Provider value={[theme,onToggle]}>
                <Toolbar/>
            </ThemeContext.Provider>
        </>
    )
}


export default ContextPractice;

