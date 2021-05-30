import React from 'react';
import {NavLink,Route,Switch} from 'react-router-dom';
import Complaint from "./Complaint";

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
            
            {
                
                complaints.map((val,ind)=>{
                    console.log(val);
                    if(ind==0){
                        return <Route exact path={'/service_provider_main/'} render={()=>{return <Complaint val={val}/>}}/>
                    }else{
                    return <Route exact path={'/service_provider_main/'+val._id} render={()=>{return <Complaint val={val}/>}}/>
                    }
                })

            }
            
        </div>
    )
}

export default InstructionMain
