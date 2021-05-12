import React from 'react';
import Button from '@material-ui/core/Button';

function MainHeader(props) {
    // const [login_button, set_login_button] = useState()
    return (
        <div className='main_header_top'>
            <div className="main_logo">
                <object data='/images/logo.svg' type="image/svg+xml" width='180px'></object>
            </div>
            <div className="main_search">
                
            </div>
            <div className='main_log_sign'>
                <span className='main_login'>
                <Button variant="contained" color="primary" onClick={()=>{ 
                    props.setsignup(0);
                    props.setlogin(1);
                }}>
                    LOG IN
                </Button>
                </span>
                <span className='main_signup'>
                <Button variant="contained" color="secondary" onClick={()=>{
                    
                    props.setlogin(0);
                    props.setsignup(1);
                }}>
                    SIGN UP
                </Button>
                </span>
            </div>
        </div>
    )
}

export default MainHeader
