import React from 'react'
import LoginPage from "./login/LoginPage";
import SignupPage from "./signup/SignupPage";

function ClickFunctionalities(props) {
    return (
        <div>
            {(props.loginPage==1)?<LoginPage setlogin={props.setlogin} setsignup={props.setsignup}/>:null}
            {(props.signupPage==1)?<SignupPage setlogin={props.setlogin} setsignup={props.setsignup}/>:null}
        </div>
    )
}

export default ClickFunctionalities
