import React from 'react'
import { Switch, Route } from "react-router-dom";
import SignupService from "./startingPage/signup/signupService";
import MainPage from "./startingPage/MainPage";
function OurRouters() {
    return (
        <div>
            <Switch>
                <Route exact path='/signup_service_provider' component={SignupService}/>
                <Route exact path='/signup_store' component={SignupService}/>
                <Route exact path='/signup_manager' component={SignupService}/>
                <Route component={MainPage}/>
            </Switch>
        </div>
    )
}

export default OurRouters
