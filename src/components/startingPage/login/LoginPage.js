import React from 'react';
import "../../../css/startingPage/signup/Signup_login_choose.css";
import BuildIcon from '@material-ui/icons/Build';
import Button from '@material-ui/core/Button';
import StorefrontIcon from '@material-ui/icons/Storefront';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {NavLink} from 'react-router-dom';

const part=()=>{
    return(<div className='SignupPage_block'>
    <div className='SignupPage_head'>
        CHOOSE YOUR LOG IN FOR <div style={{color:'red'}}>SERVICE</div>
    </div>
    <hr/><hr/>
    <div className='SignupPage_text'>
        You will be required to fill up your details for logging in.
    </div>
    
    <div className='SignupPage_button_service'>
    <NavLink exact to='/login_service_provider' style={{textDecoration:'none'}}>
        <Button variant="outlined" color="primary" style={{color:'green'}}>
            <span style={{marginRight:'8px'}}>Service Provider</span><BuildIcon/>
        </Button>
        </NavLink> 
    </div>
    <div className='SignupPage_button_store' >
    <NavLink exact to='/login_store' style={{textDecoration:'none'}}>
    <Button variant="outlined" color="primary" style={{color:'green'}}>
    <span style={{marginRight:'8px'}}>Store</span><StorefrontIcon/>
        </Button>
        </NavLink> 
    </div>
    <div className='SignupPage_button_incharge'>
    <NavLink exact to='/login_manager' style={{textDecoration:'none'}}>
        <Button variant="outlined" color="primary" style={{color:'green'}}>
            <span style={{marginRight:'8px'}}>Incharge</span><AccountCircleIcon/>
        </Button>
        </NavLink> 
    </div>
</div>)
}
function LoginPage(props) {
    return (
        <div className='SignupPage_main' onClick={(e)=>{
            if(e.target.className=='SignupPage_main'){
                props.setlogin(0);
                props.setsignup(0);
            }
        }}>
            {part()}
        </div>
    )
}
export default LoginPage