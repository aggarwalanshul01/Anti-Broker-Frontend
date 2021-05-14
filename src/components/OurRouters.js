import React from 'react'
import { Switch, Route } from "react-router-dom";
import SignupService from "./startingPage/signup/signupService";
import LoginService from "./startingPage/login/LoginService";
import MainPage from "./startingPage/MainPage";
function OurRouters() {
    return (
        <div>
            <Switch>
                <Route exact path='/signup_service_provider' component={SignupService}/>
                <Route exact path='/signup_store' component={SignupService}/>
                <Route exact path='/signup_manager' component={SignupService}/>
                <Route exact path='/login_service_provider' component={LoginService}/>
                <Route exact path='/login_store' component={LoginService}/>
                <Route exact path='/login_manager' component={LoginService}/>
                <Route component={MainPage}/>
            </Switch>
        </div>
    )
}

export default OurRouters
