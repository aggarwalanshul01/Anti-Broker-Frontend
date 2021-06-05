import React,{useState,useEffect} from 'react';
import Button from '@material-ui/core/Button';
import PersonIcon from '@material-ui/icons/Person';
import { NavLink,Switch } from 'react-router-dom';
import HistoryIcon from '@material-ui/icons/History';
import HomeIcon from '@material-ui/icons/Home';

function Header(props) {
    const data=props.data;
    const [profile, setprofile] = useState(0);

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
                STORE
            </div>
            <div className='header_profile'>
                <NavLink exact className='store_history' activeClassName='store_history_avtice' to='/store_main/'>
                        <HomeIcon/>
                </NavLink>
                <NavLink exact className='store_history' activeClassName='store_history_avtice' to='/store_main/history'>
                        <HistoryIcon/>
                </NavLink>
                <NavLink exact className='store_history' activeClassName='store_history_avtice' to='/store_main/profile'>
                    <Button variant="" color="primary" style={{color:'green'}} onClick={()=>{
                        props.setprofile(props.profile^1);
                    }}>
                        <span style={{marginRight:'8px'}}>{data.name}</span>
                        <PersonIcon/>
                    </Button>
                    </NavLink>
            </div>
        </div>
    )
}

export default Header
