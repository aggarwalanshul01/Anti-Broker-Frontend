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
function OurRouters() {
    return (
        <div>
            <Switch>
                <Route exact path='/service_provider_main' component={MainPageService}/> 
                <Route exact path='/store_main' component={MainPageStore}/> 
                <Route exact path='/manager_main' component={MainPageManager}/> 
                <Route exact path='/signup_service_provider' component={SignupService}/>
                <Route exact path='/signup_store' component={SignupStore}/>
                <Route exact path='/signup_manager' component={SignupManager}/>
                <Route exact path='/login_service_provider' component={LoginService}/>
                <Route exact path='/login_store' component={LoginStore}/>
                <Route exact path='/login_manager' component={LoginManager}/>
                <Route component={MainPage}/>
            </Switch>
        </div>
    )
}

export default OurRouters
