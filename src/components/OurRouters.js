import React from 'react'
import { Switch, Route } from "react-router-dom";
import SignupService from "./startingPage/signup/signupService";
import SignupStore from "./startingPage/signup/signupStore";
import SignupManager from "./startingPage/signup/signupManager";
import LoginService from "./startingPage/login/LoginService";
import LoginStore from "./startingPage/login/LoginStore";
import LoginManager from "./startingPage/login/LoginManager";
import MainPage from "./startingPage/MainPage";
import MainPageService from "./ServiceProvider/MainPage";
import MainPageStore from "./Store/MainPage";
import MainPageManager from "./Manager/MainPage";
import Profile from "./ServiceProvider/Components/Profile";
import Routers_Service from "./ServiceProvider/Components/Routers";

function OurRouters(props) {
    //console.log("helloll"+props.data);
    return (
        <div>   
            <Routers_Service data={props.data} setdata={props.setdata}/>
            <Route path='/service_provider_main' render={()=>{return <MainPageService data={props.data} setdata={props.setdata}/>}}/>
            <Switch>
                {/* <Route path='/service_provider_main' render={()=>{return <MainPageService data={props.data} setdata={props.setdata}/>}}/>  */}
                <Route exact path='/store_main' render={()=>{return <MainPageStore data={props.data} setdata={props.setdata}/>}}/> 
                <Route exact path='/manager_main' render={()=>{return <MainPageManager data={props.data} setdata={props.setdata}/>}}/> 
                <Route exact path='/signup_service_provider' render={()=>{return <SignupService data={props.data} setdata={props.setdata}/>}} />
                <Route exact path='/signup_store' render={()=>{return <SignupStore data={props.data} setdata={props.setdata}/>}} />
                <Route exact path='/signup_manager' render={()=>{return <SignupManager data={props.data} setdata={props.setdata}/>}} />
                <Route exact path='/login_service_provider' render={()=>{return <LoginService data={props.data} setdata={props.setdata}/>}}/>
                <Route exact path='/login_store' render={()=>{return <LoginStore data={props.data} setdata={props.setdata}/>}}/>
                <Route exact path='/login_manager' render={()=>{return <LoginManager data={props.data} setdata={props.setdata}/>}} />
                <Route exact path='/' render={()=>{return <MainPage data={props.data} setdata={props.setdata}/>}} />
            </Switch>
        </div>
    )
}

export default OurRouters
