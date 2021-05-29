import React,{useContext} from 'react';
import { Switch, Route } from "react-router-dom";
import { ServiceComp } from '../../../App';
import Profile from "./Profile";

function Routers(props) {
    const ServiceC = useContext(ServiceComp);
    return (
        <div>
            <Switch>
                {/* <Route exact path='/service_provider_main' />  */}
                
            </Switch>
        </div>
    )
}

export default Routers
