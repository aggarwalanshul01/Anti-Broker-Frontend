import React,{useState} from 'react';
import axios from "axios";

function ComplaintForm(props) {
    
    let currentTimestamp = Date.now()
     
    let date = new Intl.DateTimeFormat('hi-IN', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(currentTimestamp)
    //console.log(date);    
    let DataProvider=props.CardOpenedD;
    let DataStore=props.data;
    //console.log(DataProvider);
    //console.log(DataStore);
    const [Problem, setProblem] = useState('');
    const [Err, setErr] = useState('');
    const [Comp, setComp] = useState('');
    const [MSR, setMSR] = useState('');
    //console.log(props.data);
    //console.log(DataProvider);
    const formOnSubmit=(e)=>{
        e.preventDefault();
        if(Problem==''){
            setErr('Please Fill The Problem Field');
            return;
        }else{
            setErr('Successfully Done');
        }
        let details={username:DataProvider.username,usernameStore:DataStore.username,DateBooked:date,StoreName:DataStore.name,MachineName:DataProvider.profession,PhoneStore:DataStore.Phone,Address:DataStore.Address,Problem:Problem,}
        axios.post('http://localhost:3001/store/makeComplaint',details)
        .then((response)=>{
            console.log(response.data);
            setComp(response.data.CompNo);
            setMSR(response.data.MSRNo);
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    return (
        <div>
            
            <div >
                <div style={{alignItems:'center',textAlign:'center'}} className="card-body">
                    {/* <a style={{position: 'absolute', left: '0px', top: '0px'}} href="/">Back</a> */}
                    <h4 className="title">Store Complaint Form</h4>
                    
                    <h7 className="subtitle">Welcome! Please provide your information for the Complaint, We will be happy to solve it.</h7>
                    {/* <br/>
                    <h7 style={{color: 'blue'}}>No Complaints?  <a href="/signup_store"> SignUp</a></h7> */}
                    <br/>
                    {Err!=''?"** "+Err+" **":null}
                    
                    <br/>
                    <br/>
                     <div className="formData">
                        <form onSubmit={formOnSubmit}> 
                            <div className="input-group input-group-sm mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-sm">Provider Username</span>
                                </div>
                                <input disabled type="text" val name="username" value={DataProvider.username} className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
                            </div>
                            <div className="input-group input-group-sm mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-sm">Provider Name</span>
                                </div>
                                <input disabled type="text" val name="name" value={DataProvider.name} className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
                            </div>
                            <div className="input-group input-group-sm mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-sm">Date And Time</span>
                                </div>
                                <input disabled type="text" val name="date" value={date} className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
                            </div>
                            <div className="form-group">
                            
                            <textarea className="form-control" rows="3" value={Problem} onChange={(e)=>setProblem(e.target.value)} id="comment" name="problem" placeholder={`Please Describe the problem you are facing in ` + DataProvider.profession}></textarea>
                            </div>
                            {/* <div className="input-group input-group-sm mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-sm">Password</span>
                            </div>
                            <input type="password" name="password" value={details.password} onChange={(e)=>setdetails({...details,password:e.target.value})} className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
                            </div> */}
                            
                            <br/>
                            
                            <button type="submit" className="btn btn-primary">Make Complaint</button>
                    </form> 
                    <br/>
                    
                    <div className="input-group input-group-sm mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-sm">Complaint Number</span>
                                </div>
                                <input disabled type="text" val name="ComplaintNo" value={Comp} className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
                            </div>
                            <div className="input-group input-group-sm mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-sm">Service Protected Number</span>
                                </div>
                                <input disabled type="text" val name="MSRNo" value={MSR} className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
                            </div>
                    </div>

                    </div>
                </div>
        
        </div>
    )
}

export default ComplaintForm
