import React,{useState,useEffect} from 'react'
import GoogleLogin from 'react-google-login';
import "../../../css/startingPage/signup/Signup_login_Page.css";
import axios from 'axios';

function LoginService() {
    const [details, setdetails] = useState({username:'',password:''});

    const formOnSubmit=(e)=>{
        // e.preventDefault();
        // if(isNaN (details.age) ){
        //     alert('Age is not valid');
        //     return;
        // }else if(isNaN (details.phone) ||details.phone.length!=10){
        //     alert('Phone Number is not valid');
        //     return;
        // }if(details.username==''||details.name==''||details.age==''||details.gender=='Choose...'||details.password==''||details.description==''){
        //     alert('Please Fill All The Fields');
        //     return;
        // }
        // axios.post('http://localhost:4444/signup_service/',details)
        // .then((response)=>{
        //     console.log(response);
        // })
        // .catch((err)=>{
        //     console.log(err);
        // })
    }

    const responseGoogle = (event) => {
        //console.log(event);
        // axios.post('http://localhost:4444/signup_service/google',event.profileObj)
        // .then((response)=>{
        //     console.log(response);
        // })
        // .catch((err)=>{
        //     console.log(err);
        // })
    }

    return (
        <div className="card block" >
                <div style={{alignItems:'center',textAlign:'center'}} className="card-body">
                    <a style={{position: 'absolute', left: '0px', top: '0px'}} href="/">Back</a>
                    <h4 className="title">SignIn into your Account</h4>
                    
                    <h7 className="subtitle">Welcome! Good to see you back! Please provide your information for SignIn</h7>
                    <br/>
                    <h7 style={{color: 'blue'}}>Haven't Registered Yet:  <a href="/signup_service_provider"> SignUp</a></h7>
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

export default LoginService
