import MainHeader from "./MainHeader";
import React,{useState} from 'react';
import '../../css/startingPage/MainPage.css';
import ClickFunctionalities from './ClickFunctionalities';
import OurRouters from "../OurRouters";
import Carousel from "./Carousel";
import AboutMe from "./AboutMe";

function MainPage() {
    const [Login, setLogin] = useState(0);
    const [Signup, setSignup] = useState(0);
    return (
        <div className='main_page'>
            <div className="main_header">
                <MainHeader setlogin={setLogin} setsignup={setSignup}/>
            </div>
            <div className="carousel">
                <Carousel/>
            </div>
            <div className="AboutMe">
                <AboutMe/>
            </div>
            <ClickFunctionalities loginPage={Login} signupPage={Signup} setlogin={setLogin} setsignup={setSignup}/>
        </div>
    )
}

export default MainPage
