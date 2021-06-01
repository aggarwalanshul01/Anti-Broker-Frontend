import React,{useState} from 'react';
import ParticularCard from "./ParticularCard";

function ApplianceCards(props) {
    
    let val=props.val;
    let Providers=props.Providers;
    let curr=[];
    //console.log(Providers+" "+val);
    for(let i=0;i<Providers.length;i++){
        if(Providers[i].profession==val){
            curr.push(Providers[i]);
        }
    }//console.log(curr);
    return (
        <div className='store_cards_main'>
            {curr.map((val,ind)=>{
                return (
                    <div style={{display:'inline-block',width:'33%',padding:'20px'}}>
                        <ParticularCard val={val} setCardOpen={props.setCardOpen} setCardOpenedD={props.setCardOpenedD} CardOpen={props.CardOpen} CardOpenedD={props.CardOpenedD}/>
                    </div>
                )
            })}
        </div>
    )
}

export default ApplianceCards
