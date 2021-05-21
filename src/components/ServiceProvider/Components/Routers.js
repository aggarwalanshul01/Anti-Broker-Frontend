import React from 'react';
import { Route } from "react-router-dom";
import Profile from "./Profile";

function Routers(props) {
    
    return (
        <div>
            <Route exact path='/service_provider_main/profile' render={()=>{return <Profile data={props.data} setdata={props.setdata}/>}} />
        </div>
    )
}

export default Routers
