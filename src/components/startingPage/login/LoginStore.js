import React,{useState,useEffect,useContext} from 'react'
import GoogleLogin from 'react-google-login';
import "../../../css/startingPage/signup/Signup_login_Page.css";
import axios from 'axios';
import { Redirect } from "react-router-dom";
import MainPage from "../../Store/MainPage";
import { IsG } from "../../../App";


function LoginStore(props) {
    const isga = useContext(IsG);
    const [details, setdetails] = useState({username:'',password:''});
    const [Signed, setSigned] = useState(0);
    const [data, setdata] = useState(null);
    
    const formOnSubmit=(e)=>{
        e.preventDefault();
        if(details.username=='' || details.password==''){
            alert('Please Fill All The Fields');
            return;
        }
        axios.post('http://localhost:3001/login_store/',details)
        .then(async(response)=>{
            if(response.data=='Wrong Password'){
                alert("WRONG PASSWORD");
                return;
            }if(response.data=='No UserName Exist'){
                alert("No UserName Exist");
                return;
            }
            
            props.setdata(response.data);
            setSigned(1);
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    const signingform=()=>{
        return (
            <div className="card block" >
                <div style={{alignItems:'center',textAlign:'center'}} className="card-body">
                    <a style={{position: 'absolute', left: '0px', top: '0px'}} href="/">Back</a>
                    <h4 className="title">SignIn into your Account</h4>
                    
                    <h7 className="subtitle">Welcome! Good to see you back! Please provide your information for SignIn</h7>
                    <br/>
                    <h7 style={{color: 'blue'}}>Haven't Registered Yet:  <a href="/signup_store"> SignUp</a></h7>
                    <br/>
                    <br/>
                     <div className="formData">
                        <form onSubmit={formOnSubmit}> 
                            <div className="input-group input-group-sm mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-sm">Username</span>
                                </div>
                                <input type="text" val name="username" value={details.username} onChange={(e)=>setdetails({...details,username:e.target.value})} className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
                            </div>
                            <div className="input-group input-group-sm mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-sm">Password</span>
                            </div>
                            <input type="password" name="password" value={details.password} onChange={(e)=>setdetails({...details,password:e.target.value})} className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
                            </div>
                            
                            <br/>
                            
                            <button type="submit" className="btn btn-primary">LOGIN</button>
                    </form> 
                    <hr/>
                    <GoogleLogin
                        clientId="399925514877-as290pe2r7i9uurnbdheofap76a9jjn6.apps.googleusercontent.com"
                        buttonText="LogIn Via Google"
                        onSuccess={responseGoogle}
                        
                        cookiePolicy={'single_host_origin'}
                    />
                    </div>

                    </div>
                </div>
        )
    }
    const responseGoogle = (event) => {
        console.log(event);
        axios.post('http://localhost:3001/login_store/google/',event.profileObj)
        .then((response)=>{
            if(response.data=='Please Register Yourself Via Signup'){
                alert('Please Register Yourself Via Signup');
                return;
            }
            isga[1](1);
            props.setdata(response.data);
            setSigned(1);
        })
        .catch((err)=>{
            console.log(err);
        })
    }


    return (
        <>
            {Signed==0?signingform():<Redirect to='/store_main'/>}
        </>
           )  
}

export default LoginStore
