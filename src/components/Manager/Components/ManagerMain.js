import React,{useState,useEffect,useContext} from 'react';
import '../../../css/Service_Provider.css';
import '../../../css/Mangar.css';
import Navigator from "./Navigator";
import InstructionMain from "./InstructionMain";
import axios from "axios";
import { ServiceComp } from '../../../App';

function ManagerMain(props) {
    const ServiceM = useContext(ServiceComp);
    let data=props.data;
    let setdata=props.data;
    const [a, seta] = useState(0);
    const [comp, setcomplaints] = useState([]);
    const [opened, setopened] = useState([]);
    const [maincomp, setmaincomp] = useState([]);
    const [pro, setproviders] = useState([]);

    useEffect(() => {
        console.log('hoo');
        axios.get('http://localhost:3001/manager/allComp')
        .then(async(response)=>{
            //console.log(Date.now());
            console.log(response.data);
            ServiceM[1](response.data);
            await setcomplaints(response.data);
            console.log(response.data);
            let op=[];
            const complaints=[];
            let providers=[];
            for(let i=response.data.length-1;i>=0;i--){
            if(response.data[i].IsDone==0){
                complaints.push(response.data[i]);
            }let c=0;
            for(let j=0;j<providers.length;j++){
                if(providers[j]==response.data[i].username){
                    c=1;
                    break;
                }
            }if(c==0){
                providers.push(response.data[i].username);
            }
        }for(let i=response.data.length-1;i>=0;i--){
            if(response.data[i].IsDone==1){
                complaints.push(response.data[i]);
            }   let c=0;
            for(let j=0;j<providers.length;j++){
                if(providers[j]==response.data[i].username){
                    c=1;
                    break;
                }
            }if(c==0){
                providers.push(response.data[i].username);
            }
        }
        let ppp=[];
        for(let i=0;i<providers.length;i++){
            let curr=[];
            op.push(0);
            for(let j=0;j<complaints.length;j++){
                if(complaints[j].username==providers[i]){
                    curr.push(complaints[j]);
                }
            }
            ppp.push(curr);
        }//console.log(ppp);
        //console.log(providers);
        //console.log(op);
         setopened(op);
    // // console.log(op);
      //   console.log(ppp);
         setmaincomp(ppp);
         setproviders(providers);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[]);
    
    return (
        <div className='servicepro_main'>
            <div className='manager_navigate'>
                <Navigator complaints={comp} opened={opened} setopened={setopened} maincomp={maincomp} pro={pro}/>
            </div>
            <div className='service_right_main'>
                <InstructionMain  complaints={comp}/>
            </div>
        </div>
    )
}

export default ManagerMain

