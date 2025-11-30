import React, {useState,useEffect} from 'react';

const FormValidation = ()=>{
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [error, setError] = useState(null)
        function validateEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }
    return(
        <>
            <form onSubmit={(e)=>{
                e.preventDefault()
                if(!name.trim()){
                    setError("no name provided.")
                    return;
                }
                 if(!email.trim()){
                    setError("no email provided.")
                    return;
                }
                if(!validateEmail(email)){
                    setError("email format is not correcly provided.")
                    return;
                }
                setEmail("")
                setName("")
                setError(null)
                console.log("User submitted: ",{
                    name:name,
                    email:email
                })
            }}>
                          <label htmlFor='name' >Name</label>{" "}
            <input id="name" placeholder='enter name here' value={name} onChange={(event)=>{
                setName(event.target.value)
                setError(null)
            }
            }></input>
            <br/>
            <br/>
             <label htmlFor='email'>Email</label>{" "}
             <input id="email" placeholder='enter email here' value={email} onChange={(event)=>{
                setEmail(event.target.value)
                setError(null)
            }
            }></input>
            {
                error && (
                    <h6 style={{color:"red"}}>error:{error}</h6>
                )
            }
            <br/>
            <br/>
            <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default FormValidation