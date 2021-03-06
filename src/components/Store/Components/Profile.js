import React,{useState,useContext} from 'react';
import { SpecializationTypes } from "../../SpecializationTypes";
import axios from 'axios';
import { IsG } from "../../../App";
import Button from '@material-ui/core/Button';
import ClearIcon from '@material-ui/icons/Clear';
import { NavLink } from "react-router-dom";

function Profile(props) {
    const isga = useContext(IsG);
    //console.log('aaaa '+ isga[0]);
    //console.log('aaa',props.data);
    let data=props.data;
    const [details, setdetails] = useState({email:`${data.email==null?'':data.email}`,username:`${data.username}`,name:`${data.name}`,phone:`${data.Phone==null?'':data.Phone}`,description:`${data.Address==null?'':data.Address}`});
    const isNull=()=>{
        if(data.email==null){
            return false;
        }
        if(data.username==null){
            return false;
        }if(data.Address==null){
            return false;
        }if(data.Phone==null){
            return false;
        }return true;
    }
    const formUpdation=(e)=>{
        e.preventDefault();
        if(details.username==''){
            alert('Please fill the Username field');
            return ;
        }
        if(details.email==''){
            alert('Please fill the Email field');
            return ;
        }
        if(details.description==''){
            alert('Please fill the Address field');
            return ;
        }if(details.phone==''){
            alert('Please fill the Phone field');
            return ;
        }
        //console.log('kkkkkkkkkkkkkkkkkkkk');
        let update='update';
        if(isga[0]==1){
            update='updateG';
        }
        console.log(details);
        axios.post(`http://localhost:3001/store/${update}`,details)
        .then(async(response)=>{
            if(response.data=='Email is not valid'){
                alert('Email is not valid');
                return;
            }
            let newD=response.data;
            console.log(newD);
            setdetails({...details,password:data.password});
            props.setdata({...data,Phone:details.phone,email:details.email,
                name:details.name,Address:details.description});
        })
        .catch((err)=>{
            alert(err);
            console.log(err);
        })
    }
    const signingform=()=>{
        return (
            <div>
                <div style={{alignItems:'center',textAlign:'center'}} className="card-body">
                    
                     <div className="formData" onSubmit={formUpdation}>
                        <form> 
                            <div className="input-group input-group-sm mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-sm">Username</span>
                                </div>
                                <input type="text" disabled val name="username" value={details.username} onChange={(e)=>setdetails({...details,username:e.target.value})} className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
                            </div>
                            <div className="input-group input-group-sm mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-sm">Email</span>
                                </div>
                                <input type="text" val name="email" value={details.email} onChange={(e)=>setdetails({...details,email:e.target.value})} className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
                            </div>
                            <div className="input-group input-group-sm mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-sm">Name</span>
                                </div>
                                <input type="text" val name="name" value={details.name} onChange={(e)=>setdetails({...details,name:e.target.value})} className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
                            </div>
                            
                            
                            <div className="input-group input-group-sm mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-sm">Contact No</span>
                            </div>
                            <input type="text" name="phone" value={details.phone} onChange={(e)=>setdetails({...details,phone:e.target.value})} className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
                            </div>
                            
                            
                            <div className="form-group">
                            
                            <textarea className="form-control" rows="3" value={details.description} onChange={(e)=>setdetails({...details,description:e.target.value})} id="comment" name="description" placeholder="Address (short)"></textarea>
                            </div>
                            <br/>
                            
                            {isNull()==true?<button type="submit" className="btn btn-primary">Edit Your Information</button>:<button type="submit" className="btn btn-primary">Complete Your Information</button>}
                    </form> 
                    <hr/>
                    </div>

                    </div>
                </div>
        )
    }
    return (
        <div className='service_profile_main'>
            <div style={{position:'fixed',right:'20px'}}>
            <NavLink exact  to='/store_main/'>
            <Button color="secondary" onClick={
                ()=>{
                    props.setprofile(0);
                }
            }>
                <ClearIcon/>
            </Button>
            </NavLink>
            </div>
            <div style={{fontSize:'30px'}}>HELLO, <span style={{color:'blue'}}>{data.name}</span></div>
            {signingform()}
            {/* <div>Name : {data.name==null?}</div> */}
        </div>
    )
}

export default Profile
