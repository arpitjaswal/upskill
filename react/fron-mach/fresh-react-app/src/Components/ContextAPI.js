import React,{useState,useContext,createContext} from "react";

const themeContext = createContext(null);
export const ThemeProvider=({children})=>{
    const [theme,setTheme] = useState("light")
    const toggleTheme =()=>{
        setTheme(prev=>prev==="dark"?"light":"dark")
    }
    return(
        <>  
            <themeContext.Provider value={{theme, toggleTheme}}>
                {children}
            </themeContext.Provider>
        </>
    )
}

export const useTheme=()=>useContext(themeContext)