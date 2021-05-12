import MainHeader from "./MainHeader";
import React,{useState} from 'react';
import '../../css/startingPage/MainPage.css';
import ClickFunctionalities from './ClickFunctionalities'

function MainPage() {
    const [Login, setLogin] = useState(0);
    const [Signup, setSignup] = useState(0);
    return (
        <div className={`main_page`}>
            <div className="main_header">
                <MainHeader setlogin={setLogin} setsignup={setSignup}/>
            </div>
            <div className="main_login_signup">

            </div>
            <ClickFunctionalities loginPage={Login} signupPage={Signup} setlogin={setLogin} setsignup={setSignup}/>
        </div>
    )
}

export default MainPage
