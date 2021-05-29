import React from 'react';
import {NavLink} from 'react-router-dom';

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
        <div>
            {complaints.map((val)=>{
                return (
                    <div key={val._id}>
                    <NavLink className='NavLinkService' activeClassName='ActiveNavLinkService' to={'/service_provider_main/'+val._id}>
                        {val.StoreName}
                    </NavLink>
                    </div>
                )
            })}
        </div>
    )
}

export default Navigator
