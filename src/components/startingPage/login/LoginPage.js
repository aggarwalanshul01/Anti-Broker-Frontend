import React from 'react';
import "../../../css/startingPage/signup/Signup_login_choose.css";
import BuildIcon from '@material-ui/icons/Build';
import Button from '@material-ui/core/Button';
import StorefrontIcon from '@material-ui/icons/Storefront';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
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
        <Button variant="outlined" color="primary" style={{color:'green'}}>
            <span style={{marginRight:'8px'}}>Service Provider</span><BuildIcon/> 
        </Button>
    </div>
    <div className='SignupPage_button_store' >
    <Button variant="outlined" color="primary" style={{color:'green'}}>
    <span style={{marginRight:'8px'}}>Store</span><StorefrontIcon/>
        </Button>
    </div>
    <div className='SignupPage_button_incharge'>
        <Button variant="outlined" color="primary" style={{color:'green'}}>
            <span style={{marginRight:'8px'}}>Incharge</span><AccountCircleIcon/>
        </Button>
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