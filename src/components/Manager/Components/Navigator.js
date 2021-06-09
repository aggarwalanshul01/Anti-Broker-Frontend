import React,{useState,useEffect} from 'react';
import {NavLink,Route} from 'react-router-dom';

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
                if(ind==0){
                    return (
                        <>
                        <div>
                        <NavLink exact className='NavLinkService' activeClassName='ActiveNavLinkService' to={"/manager_main/"}>
                            <div className='head_serve_man'><b>{providers[ind]}</b></div>
                            </NavLink>
                            
                        </div>
                        <hr className="hori_line"/>
                        </>
                )
                }
                return (
                        <>
                        <div>
                        <NavLink exact className='NavLinkService' activeClassName='ActiveNavLinkService' to={"/manager_main/"+providers[ind]+"/"}>
                            <div className='head_serve_man'><b>{providers[ind]}</b></div>
                            </NavLink>
                            
                        </div>
                        <hr className="hori_line"/>
                        </>
                )
            })}
        </div>
    )
}

export default Navigator

