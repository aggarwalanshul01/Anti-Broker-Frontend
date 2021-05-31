import React from 'react';
import {NavLink} from 'react-router-dom';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Navigator(props) {
    let complaints=props.complaints;
    console.log(complaints);
    if(complaints.length==0){
        return (
            <div>
                WOAH ! NO COMPLAINTS
            </div>
        )
    }
    return (
        <div className='Navigator_Main_Service'>
            {/* <hr className="hori_line1"/> */}
            {complaints.map((val,ind)=>{
                if(ind==0){
                    return (
                        <>
                        <div >
                            
                        <NavLink exact className='NavLinkService' activeClassName='ActiveNavLinkService' to={'/service_provider_main/'}>
                            <div className='NavLinkServiceDiv' key={val._id}>
                                <div className="store_name">
                                {val.StoreName}
                                </div> 
                                <div className="store_data_comp">
                                {'( Pending From - ' + val.DateBooked.split("T")[0]+" )"}
                                </div>
                            </div>
                            <div className="is__done">

                             {val.IsDone==0?<FiberManualRecordIcon style={{color:'red'}}/>:<FiberManualRecordIcon style={{color:'green'}}/>}
                        </div>
                        </NavLink>
                        
                        
                        </div>
                        <hr className="hori_line"/>
                        </>
                    )
                }
                return (
                    <>
                    <div >
                        
                            
                    <NavLink exact className='NavLinkService' activeClassName='ActiveNavLinkService' to={'/service_provider_main/'+val.ComplaintNo}>
                    <div className='NavLinkServiceDiv' key={val._id}>
                                <div className="store_name">
                                {val.StoreName}
                                </div> 
                                <div className="store_data_comp">
                                {'( Pending From - ' + val.DateBooked.split("T")[0]+" )"}
                                </div>
                            </div>
                            <div className="is__done">

                             {val.IsDone==0?<FiberManualRecordIcon style={{color:'red'}}/>:<FiberManualRecordIcon style={{color:'green'}}/>}
                        </div>
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
