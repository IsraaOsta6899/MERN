import React , {useState} from 'react';
const MyForm =(props)=>{
    const [firstName,setFirstName]=useState("");
    const [errorMessage,setErrorMessage]=useState("");

    const [lastName,setLastName]=useState("");
    const [errorMessagel,setErrorMessagel]=useState("");

    const [email,setEmail]=useState("");
    const [errorMessagee,setErrorMessagee]=useState("");

    const [password,setPassword]=useState("password");
    const [errorMessagep,setErrorMessagep]=useState("");

    const [confirmPassword,setConfirmPassword]=useState("password");
    const [errorMessagepc,setErrorMessagepc]=useState("");

   
    const createUser=(e)=>{
        e.preventDefault();
        const newUser = { firstName, lastName, email,password,confirmPassword };
        setEmail("");
        setFirstName("");
        setLastName("");
        setPassword("");
        setConfirmPassword("");
    }
    const handelFirstName=(myEvent)=>{
        setFirstName(myEvent.target.value)
        if(firstName.length===0){
            setErrorMessage("")

        }
         if(firstName.length<2){
            setErrorMessage("first name must be more than 2 letters")
        }
        else{
            setErrorMessage("")
        }

    }
    const handelLasstName=(myEvent)=>{
        setLastName(myEvent.target.value)
        if(lastName.length===0){
            setErrorMessagel("")

        }
         if(lastName.length<2){
            setErrorMessagel("last name must be more than 2 letters")
        }
        else{
            setErrorMessagel("")
        }

    }
    const handelEmail=(myEvent)=>{
        setEmail(myEvent.target.value)
        if(email.length===0){
            setErrorMessagee("")

        }
         if(email.length<20){
            setErrorMessagee("email must be more than 20 letters")
        }
        else{
            setErrorMessagee("")
        }

    }
    const handelPassword=(myEvent)=>{
        setPassword(myEvent.target.value)
        if(password.length===0){
            setErrorMessagep("")

        }
         if(password.length<8){
            setErrorMessagep("password must be more than 8 letters")
        }
        else{
            setErrorMessagep("")
        }

    }
    const handelConfirmPassword=(myEvent)=>{
        setConfirmPassword(myEvent.target.value)
        if(confirmPassword.length===0){
            setErrorMessagepc("")

        }
         if(confirmPassword!=password){
            setErrorMessagepc("passwords don't match")
            if(confirmPassword==password){
                setErrorMessagepc("")
            }
        }
        else if(confirmPassword==password){
            setErrorMessagepc("")
        }

    }
    return(
        <>
        <form onSubmit={createUser}>
            <div>
                <label>First Name :</label>
                <input type="text" onChange={handelFirstName}></input>
                {
                    errorMessage ?
                    <p style={{color:'red'}}>{ errorMessage }</p> :
                    ''
                }
                <br></br>
            </div>
            <div>
                <label>Last Name :</label>
                <input type="text"  onChange={handelLasstName}></input>
                {
                    errorMessagel ?
                    <p style={{color:'red'}}>{ errorMessagel }</p> :
                    ''
                }
                <br></br>
            </div>
                <div>
                <label>Email :</label>
                <input type="text"  onChange={handelEmail}></input>
                {
                    errorMessagee ?
                    <p style={{color:'red'}}>{ errorMessagee }</p> :
                    ''
                }
                <br></br>
            </div>
            <div>
                <label>Password :</label>
                <input type="password" onChange={ handelPassword}></input>
                {
                    errorMessagep ?
                    <p style={{color:'red'}}>{ errorMessagep }</p> :
                    ''
                }
                <br></br>
            </div>
            <div>
                <label>Confirm Password :</label>
                <input type="password" onChange={ handelConfirmPassword}></input>
                {
                    errorMessagepc ?
                    <p style={{color:'red'}}>{ errorMessagepc }</p> :
                    ''
                }
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
            <label>{password}</label>
            <br>
            </br>
            <label>Confirm password :       </label>
            <label>{confirmPassword}</label>
            <br>
            </br>
            </>

    );


};
export default MyForm;