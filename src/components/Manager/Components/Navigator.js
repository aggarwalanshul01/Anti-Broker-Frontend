import React,{useState,useEffect} from 'react';
import {NavLink,Route} from 'react-router-dom';
import ParticularProvider from "./ParticularProvider";

function Navigator(props) {
    const opened =(props.opened);
    const maincomp =(props.maincomp);
    const providers =(props.pro);
    const setopened=props.setopened;

    if(maincomp.length==0){
        return (
            <div>
                WOAH ! NO COMPLAINTS
            </div>
        )
    }

    return (
        <div className='Navigator_Main_Manager'>
            {/* <hr className="hori_line1"/> */}
            <div className='manager_navi_heading'> SERVICE PROVIDERS</div>
            {maincomp.map((val,ind)=>{
                return (
                        <>
                        <div>
                            <div className='head_serve_man' onClick={
                                ()=>{
                                    let o=[];
                                    for(let i=0;i<opened.length;i++){
                                        if(i==ind){
                                            o.push(opened[i]^1);
                                            continue;
                                        }
                                        o.push(opened[i]);
                                    }
                                    setopened(o);
                                }
                            }><b>{providers[ind]}</b></div>
                            {opened[ind]==1?<ParticularProvider val={val} pre={'/manager_main/'}/>:null}
                            {/* <Route path={'/manager_main/'} render={()=>{return <ParticularProvider val={val} pre={'/manager_main/'}/>}}/> */}
                        </div>
                        <hr className="hori_line"/>
                        </>
                )
            })}
        </div>
    )
}

export default Navigator

