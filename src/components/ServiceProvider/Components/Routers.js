import React from 'react';
import { Route } from "react-router-dom";
import Profile from "./Profile";

function Routers(props) {
    
    return (
        <div>
            
            <Route exact path='/service_provider_main/profile' component={Profile}/>
        </div>
    )
}

export default Routers
