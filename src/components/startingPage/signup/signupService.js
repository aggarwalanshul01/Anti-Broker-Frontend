import React,{useState,useEffect} from 'react';
import GoogleLogin from 'react-google-login';
import "../../../css/startingPage/signup/Signup_login_Page.css";
import axios from 'axios';
import { Redirect } from "react-router-dom";
import MainPage from "../../ServiceProvider/MainPage";

function SignupService(props) {
    const [details, setdetails] = useState({username:'',name:'',age:'',phone:'',gender:'',password:'',description:''});
    const [Signed, setSigned] = useState(0);
    const formOnSubmit=(e)=>{
        e.preventDefault();
        if(isNaN (details.age) ){
            alert('Age is not valid');
            return;
        }else if(isNaN (details.phone) ||details.phone.length!=10){
            alert('Phone Number is not valid');
            return;
        }if(details.username==''||details.name==''||details.age==''||details.gender=='Choose...'||details.password==''||details.description==''){
            alert('Please Fill All The Fields');
            return;
        }
        axios.post('http://localhost:3001/signup_service/',details)
        .then((response)=>{
            if(response.data=='Username Already Exists'){
                alert('Username Already Exists');
                return;
            }
            props.history.replace('/service_provider_main',response.data);
        //s    console.log(response);
        })
        .catch((err)=>{
            alert(err);
            console.log(err);
        })
    }
    const signingform=()=>{
        return (
            <div className="card block" >
                <div style={{alignItems:'center',textAlign:'center'}} className="card-body">
                    <a style={{position: 'absolute', left: '0px', top: '0px'}} href="/">Back</a>
                    <h4 className="title">Create a New Account</h4>
                    
                    <h7 className="subtitle">Come join the community now! Let's set up your Account</h7>
                    <br/>
                    <h7 style={{color: 'blue'}}>Already Have One: <a href="/login_service_provider"> SignIn</a></h7>
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
                                    <span className="input-group-text" id="inputGroup-sizing-sm">Name</span>
                                </div>
                                <input type="text" val name="name" value={details.name} onChange={(e)=>setdetails({...details,name:e.target.value})} className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
                            </div>
                            <div className="input-group input-group-sm mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-sm">Age</span>
                            </div>
                            <input type="text" name="age" value={details.age} onChange={(e)=>setdetails({...details,age:e.target.value})} className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
                            </div>
                            <div className="input-group input-group-sm mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-sm">Contact No</span>
                            </div>
                            <input type="text" name="phone" value={details.phone} onChange={(e)=>setdetails({...details,phone:e.target.value})} className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
                            </div>
                            <div className="input-group input-group-sm mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-sm">Gender</span>
                            </div>
                            <select name="gender" value={details.gender} onChange={(e)=>setdetails({...details,gender:e.target.value})}  style={{width: '70%'}} className="custom-select" id="inputGroupSelect02">
                                <option selected>Choose...</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                            
                            </div>
                            <div className="input-group input-group-sm mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-sm">Password</span>
                            </div>
                            <input type="password" name="password" value={details.password} onChange={(e)=>setdetails({...details,password:e.target.value})} className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
                            </div>
                            <div className="form-group">
                            
                            <textarea className="form-control" rows="3" value={details.description} onChange={(e)=>setdetails({...details,description:e.target.value})} id="comment" name="description" placeholder="Address (short)"></textarea>
                            </div>
                            <br/>
                            
                            <button type="submit" className="btn btn-primary">Create New Account</button>
                    </form> 
                    <hr/>
                    <GoogleLogin
                        clientId="399925514877-as290pe2r7i9uurnbdheofap76a9jjn6.apps.googleusercontent.com"
                        buttonText="SignUp Via Google"
                        onSuccess={responseGoogle}
                        
                        cookiePolicy={'single_host_origin'}
                    />
                    </div>

                    </div>
                </div>
        )
    }
    const responseGoogle = (event) => {
        //console.log(event);
        axios.post('http://localhost:3001/signup_service/google',event.profileObj)
        .then((response)=>{
            if(response.data=='You Are Already Registered'){
                alert('You Are Already Registered');
                return;
            }
            props.history.replace('/service_provider_main',response.data);
          //  console.log(response);
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    return (
        <>
            {signingform()}
        </>
           )  
}
{/*  */}
export default SignupService
