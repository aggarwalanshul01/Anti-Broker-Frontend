import React from 'react';
import {NavLink,Route,Switch} from 'react-router-dom';
import Complaint from "./Complaint";

function InstructionMain(props) {
    const comp =(props.complaints);
    //let comp=props.complaints;
    //console.log(comp);
    const complaints=[];
    for(let i=comp.length-1;i>=0;i--){
        if(comp[i].IsDone==0){
            complaints.push(comp[i]);
        }
    }for(let i=comp.length-1;i>=0;i--){
        if(comp[i].IsDone==1){
            complaints.push(comp[i]);
        }
    }
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
               //     console.log(val);
                    if(ind==0){
                        return <Route exact path={'/service_provider_main/'} render={()=>{return <Complaint val={val} func={props.func}/>}}/>
                    }else{
                    return <Route exact path={'/service_provider_main/'+val.ComplaintNo} render={()=>{return <Complaint val={val} func={props.func}/>}}/>
                    }
                })

            }
            
        </div>
    )
}

export default InstructionMain
