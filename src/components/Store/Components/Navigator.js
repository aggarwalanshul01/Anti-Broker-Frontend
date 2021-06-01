import React from 'react';
import {SpecializationTypes} from '../../SpecializationTypes';
import {NavLink} from 'react-router-dom';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Navigator() {
    return (
        <div>
            <div className='store_nav_head'>
                Appliances
            </div>
            <div className='store_nav_appliances'>
            {SpecializationTypes.map((val,ind)=>{
                if(ind==0){
                    return (
                        <>
                        <div>  
                        <NavLink exact className='NavLinkService' activeClassName='ActiveNavLinkService' to={'/store_main/'}>
                        <div className='NavLinkServiceDiv' key={ind}>
                                    <div className="store_name">
                                    {val}
                                    </div> 
                                </div>
                                
                        </NavLink>
                        
                        
                            </div>
                            <hr className="hori_line"/>
                            </>
                    )
                }
                return (
                    <>
                    <div>  
                    <NavLink exact className='NavLinkService' activeClassName='ActiveNavLinkService' to={'/store_main/'+val}>
                    <div className='NavLinkServiceDiv' key={ind}>
                                <div className="store_name">
                                {val}
                                </div> 
                            </div>
                            
                    </NavLink>
                    
                    
                        </div>
                        <hr className="hori_line"/>
                        </>
                )
            })}
            </div>
        </div>
    )
}

export default Navigator