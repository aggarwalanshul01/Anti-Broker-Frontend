import React from 'react';
import {NavLink,Route,Switch} from 'react-router-dom';
import ApplianceCards from "./ApplianceCards";
import { SpecializationTypes } from "../../SpecializationTypes";

function InstructionMain(props) {
    //console.log(props.Providers);
    let providers=props.Providers;
    return (
        <div>
            
            {
                
                SpecializationTypes.map((val,ind)=>{
                    //console.log(val);
                    if(ind==0){
                        return <Route exact path={'/store_main/'} render={()=>{return <ApplianceCards val={val} Providers={props.Providers} setCardOpen={props.setCardOpen} setCardOpenedD={props.setCardOpenedD} CardOpen={props.CardOpen} CardOpenedD={props.CardOpenedD}/>}}/>
                    }else{
                        return <Route exact path={'/store_main/'+val} render={()=>{return <ApplianceCards val={val} Providers={props.Providers} setCardOpen={props.setCardOpen} setCardOpenedD={props.setCardOpenedD} CardOpen={props.CardOpen} CardOpenedD={props.CardOpenedD}/>}}/>
                    }
                })

            }
            
        </div>
    )
}

export default InstructionMain
