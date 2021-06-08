import React from 'react'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import {NavLink} from 'react-router-dom';

function ParticularProvider(props) {
    let data=props.val;
    let pre=props.pre;
    console.log(data);
    return (
        <div>
            {data.map((val,ind)=>{
                if(ind==0){
                    return (
                        <>
                        <div >
                            
                        <NavLink exact className='NavLinkService' activeClassName='ActiveNavLinkService' to={pre+val.ComplaintNo}>
                            <div className='NavLinkServiceDiv' key={val._id}>
                                
                            <div className="store_name">
                                {val.ComplaintNo}<span className="is__done">

{val.IsDone==0?<FiberManualRecordIcon style={{color:'red'}}/>:<FiberManualRecordIcon style={{color:'green'}}/>}
</span>
                                </div></div>
                        </NavLink>
                        
                        
                        </div>
                        <hr className="hori_line"/>
                        </>
                    )
                }
                return (
                    <>
                    <div >
                        
                            
                    <NavLink exact className='NavLinkService' activeClassName='ActiveNavLinkService' to={pre+val.ComplaintNo}>
                    <div className='NavLinkServiceDiv' key={val._id}>
                            
                                <div className="store_name">
                                {val.ComplaintNo}<span className="is__done">

{val.IsDone==0?<FiberManualRecordIcon style={{color:'red'}}/>:<FiberManualRecordIcon style={{color:'green'}}/>}
</span>
                                </div> 
                                
                            </div>
                            
                    </NavLink>
                    
                    
                        </div>
                        <hr className="hori_line"/>
                        </>
                )
            })}
        </div>
    )
}

export default ParticularProvider
