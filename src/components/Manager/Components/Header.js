import React,{useState,useEffect} from 'react';
import Button from '@material-ui/core/Button';
import PersonIcon from '@material-ui/icons/Person';
import { NavLink } from 'react-router-dom';

function Header(props) {
    const data=props.data;

    // useEffect(() => {
    //     if(profile==1){
    //         console.log(props);
    //         //console.log(props.history);
    //         //props.history.replace('/service_provider_main/profile',data);
    //     }
        
    // });

    return (
        <div className='header_service'>
            
            <div className='comp_logo'>
                <object data='/images/logo.svg' type="image/svg+xml" width='180px'></object>
            </div>
            <div className='header_heading'>
                MANAGER
            </div>
            <div className='header_profile'>
                    <Button variant="" color="primary" style={{color:'green'}} onClick={()=>{
                        props.setprofile(props.profile^1);
                    }}>
                        <span style={{marginRight:'8px'}}>{data.name}</span>
                        <PersonIcon/>
                    </Button>
            </div>
        </div>
    )
}

export default Header

