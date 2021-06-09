import React from 'react';
import ParticularProvider from "./ParticularProvider";
import {NavLink,Route} from 'react-router-dom';

function InstructionMain(props) {
    const opened =(props.opened);
    const maincomp =(props.maincomp);
    const providers =(props.pro);
    const setopened=props.setopened;
    return (
        <div>
            {
                
                providers.map((val,ind)=>{
               //     console.log(val);
                    if(ind==0){
                        return <Route exact path={'/manager_main/'} render={()=>{return <ParticularProvider val={val} maincomp={maincomp[ind]}/>}}/>
                    }else{
                    return <Route exact path={'/manager_main/'+val} render={()=>{return <ParticularProvider val={val} maincomp={maincomp[ind]}/>}}/>
                    }
                })

            }
        </div>
    )
}

export default InstructionMain
