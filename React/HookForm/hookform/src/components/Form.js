import React , {useState} from 'react';
const MyForm =(props)=>{
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("password");
    const [confirmPassword,setConfirmPassword]=useState("password");
   
    const createUser=(e)=>{
        e.preventDefault();
        const newUser = { firstName, lastName, email,password,confirmPassword };
        setEmail("");
        setFirstName("");
        setLastName("");
        setPassword("");
        setConfirmPassword("");
    }
    return(
        <>
        <form onSubmit={createUser}>
            <div>
                <label>First Name :</label>
                <input type="text" onChange={(e)=>setFirstName( e.target.value)}></input>
                <br></br>
            </div>
            <div>
                <label>Last Name :</label>
                <input type="text"  onChange={(e)=>setLastName(e.target.value)}></input>
                <br></br>
            </div>
                <div>
                <label>Email :</label>
                <input type="text"  onChange={(e)=>setEmail( e.target.value)}></input>
                <br></br>
            </div>
            <div>
                <label>Password :</label>
                <input type="password" onChange={ (e)=>setPassword( e.target.value)}></input>
                <br></br>
            </div>
            <div>
                <label>Confirm Password :</label>
                <input type="password" onChange={ (e)=>setConfirmPassword( e.target.value)}></input>
                <br></br>
            </div>
            <input type='submit' value=""></input>
        </form>
            <label>First Name :     </label>
            <label>{firstName}</label>
            <br>
            </br>
            <label>Last Name :      </label>
            <label>{lastName}</label>
            <br>
            </br>
            <label>Email :      </label>
            <label>{email}</label>
            <br>
            </br>
            <label>Password :       </label>
            <label>password</label>
            <br>
            </br>
            <label>Confirm password :       </label>
            <label>password</label>
            <br>
            </br>
            </>

    );


};
export default MyForm;