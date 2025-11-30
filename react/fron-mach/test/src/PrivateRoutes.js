import React from "react"
import {Outlet,Navigate,Link} from "react-router-dom"

const PrivateRoutes = ()=>{
    const loggedIn = localStorage.getItem("loggedIn")
    return(
        <>
        {
            (loggedIn==="true")?<Outlet/>:(<Navigate to="/login"/>)
        }
        </>
    )
}
export default PrivateRoutes;