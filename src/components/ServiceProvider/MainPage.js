import React,{useState} from 'react'
import Header from "./Components/Header";
import "../../css/Service_Provider.css";
import { Route,Switch,Redirect } from "react-router-dom";
import Profile from "./Components/Profile";

function MainPage(props) {
    const [profile, setprofile] = useState(1);
    let data=props.data;
    if(data==null){
        return (
            <div>
                <Redirect to='/login_service_provider'/>
            </div>
        )
    }
    //console.log(data);
    return (
        <div>
            <Header data={data} setprofile={setprofile} profile={profile}/>
            {profile==1?
                <Profile data={props.data} setdata={props.setdata} setprofile={setprofile} profile={setprofile}/>:
                null
            }
        </div>
    )
}

export default MainPage
