import React,{useState} from 'react'
import {Link} from "react-router-dom"


const NavBar = ()=>{


    return (
        <>
            <div>
                <Link to="/home">Home</Link>
                <Link to="/users">Users</Link>
                <Link to="about">About</Link>
            </div>
        </>
    )
}

export default Navbar