import React from 'react'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import {NavLink} from 'react-router-dom';
import ParticularMonth from "./ParticularMonth";

function ParticularProvider(props) {
    var d = new Date();
    var month = d.getMonth();
    let year=d.getFullYear();
    //console.log(month+" "+year);
    let provider=props.val;
    let maincomp=props.maincomp;
    //console.log(maincomp);
    let byMonth=[];
    let yrmon=[];
    let done=[];
    let mm=['JANUARY','FEBUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE' ,'JULY', 'AUGUST','SEPTEMBER','OCTOBER','NOVEMBER','DECEMBER'];
    for(let i=month;i>=0;i--){
        let curr=[];
        let dd=0;
        for(let j=0;j<maincomp.length;j++){
            //console.log(maincomp[i].DateBooked.substring(6,10)==year);
            if(maincomp[j].DateBooked.substring(6,10)==year && Number(maincomp[j].DateBooked.substring(3,5))==i+1){
                curr.push(maincomp[j]);
                if(maincomp[j].IsDone==1){
                    dd++;
                }
            }
            
        }done.push(dd);
        yrmon.push(year+" "+mm[i]);
        byMonth.push(curr);
    }year-=1;
    for(let i=11;i>=0;i--){
        let curr=[];let dd=0;
        for(let j=0;j<maincomp.length;j++){
            //console.log(maincomp[i].DateBooked.substring(6,10)==year);
            if(maincomp[j].DateBooked.substring(6,10)==year && Number(maincomp[j].DateBooked.substring(3,5))==i+1){
                curr.push(maincomp[j]);
                if(maincomp[j].IsDone==1){
                    dd++;
                }
            }
        }yrmon.push(year+" "+mm[i]);done.push(dd);
        byMonth.push(curr);
    }year-=1;
    console.log(byMonth);
    console.log(yrmon);
    return (
        <div>
            {
                yrmon.map((val,ind)=>{
                    return <div>
                        <ParticularMonth val={val} data={byMonth[ind]} yrmon={yrmon[ind]} done={done[ind]}/>
                            </div>
                })
            }
        </div>
    )
}

export default ParticularProvider
