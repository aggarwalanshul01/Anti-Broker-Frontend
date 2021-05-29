import React from 'react';
import {NavLink,Route} from 'react-router-dom';

function InstructionMain(props) {
    let complaints=props.complaints;
    //console.log(complaints.length);
    if(complaints.length==0){
        return (
            <div>
                WOAH ! NO COMPLAINTS
            </div>
        )
    }
    return (
        <div>
            <Route path='/service_provider_main/60b0ad4dae7b634fa47cfc87' render={()=>{return 'hello'}}/>
        </div>
    )
}

export default InstructionMain
