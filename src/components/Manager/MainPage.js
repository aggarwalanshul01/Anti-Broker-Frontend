import React,{useState,useEffect} from 'react'
import Header from "./Components/Header";

import { Route,Switch,Redirect } from "react-router-dom";
import Profile from "./Components/Profile";
import ManagerMain from "./Components/ManagerMain";

function MainPage(props) {
    const [profile, setprofile] = useState(1);
    const [SpecificData, setSpecificData] = useState(null);

    
    
    let data=props.data;
    if(data==null){
        return (
            <div>
                <Redirect to='/login_manager'/>
            </div>
        )
    }
    //console.log(data);
    return (
        <div>
            <Header data={data} setprofile={setprofile} profile={profile}/>
            {profile==1?
                <Profile data={props.data} setdata={props.setdata} setprofile={setprofile} profile={profile} profileComplete={setSpecificData}/>:
                <ManagerMain data={props.data} setdata={props.setdata} setprofile={setprofile} profile={profile} profileComplete={setSpecificData}/>
            }
        </div>
    )
}

export default MainPage

