import React,{useEffect,useState} from 'react';
import axios from "axios";
import ParticularHistory from "./ParticularHistory";

function History(props) {
    let data=props.data;
    const [comp, setcomp] = useState([]);
    //console.log(props.data);
    useEffect(() => {
        axios.post('/store/comp_store',data)
        .then((response)=>{
            //console.log(response.data);
            let comm=[]
            for(let i=response.data.length-1;i>=0;i--){
                if(response.data[i].IsDone==0){
                    comm.push(response.data[i]);
                    //setcomp(...comp,response.data[i]);
                }
            }for(let i=response.data.length-1;i>=0;i--){
                if(response.data[i].IsDone==1){
                    comm.push(response.data[i]);
                    //setcomp(...comp,response.data[i]);
                }
            }
            (setcomp(comm));
            //console.log(comp);
        }).catch((err)=>{
            console.log(err);
        })
    }, [])
    return (
        <div className='history_main'>
            {comp.map((val,ind)=>{
                return <ParticularHistory key={ind} val={val} />
            })}
        </div>
    )
}

export default History
