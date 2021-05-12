import React,{useState,useEffect} from 'react'
import GoogleLogin from 'react-google-login';
import "../../../css/startingPage/signup/Signup_login_Page.css";
import axios from 'axios';


function SignupService() {
    const [details, setdetails] = useState({name:'',age:'',phone:'',gender:'',password:'',description:''});
    const formOnSubmit=(e)=>{
        e.preventDefault();
        // if(isNaN (details.age) ){
        //     alert('Age is not valid');
        // }else if(isNaN (details.phone) ||details.phone.length!=10){
        //     alert('Phone Number is not valid');
        // }
        axios.get('http://localhost:3001/abc')
        .then((response)=>{
            console.log(response);
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    const responseGoogle = (response) => {
        console.log(response.profileObj);
    }
    return (
            <div className="card block" >
                <div style={{alignItems:'center',textAlign:'center'}} className="card-body">
                    <a style={{position: 'absolute', left: '0px', top: '0px'}} href="/">Back</a>
                    <h4 className="title">Create a New Account</h4>
                    
                    <h7 className="subtitle">Come join the community now! Let's set up your Account</h7>
                    <br/>
                    <h7 style={{color: 'blue'}}>Already Have One: <a href="./login.html"> SignIn</a></h7>
                    <br/>
                    <br/>
                     <div className="formData">
                        <form onSubmit={formOnSubmit}> 
                            <div className="input-group input-group-sm mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-sm">Name or UserName</span>
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
                        buttonText="Login Via Google"
                        onSuccess={responseGoogle}
                        
                        cookiePolicy={'single_host_origin'}
                    />
                    </div>

                    </div>
                </div>
           )  
}
{/*  */}
export default SignupService
