import React,{useState,useEffect} from 'react'
import TinderCard from 'react-tinder-card'
import './Card.css'
 import axios from './axios.js'
function Card() {
    const [info,setInfo] = useState([]);
    useEffect(()=>{
        async function fetchData(){
            const req = await axios.get('/card');
            setInfo(req.data);
        }
        fetchData();
    },[])
    const swiped =(direction,nameDelete)=>{
        console.log('removing '+ nameDelete);
    }
    const outOfFrame=(name)=>{
        console.log(name +' removed');
    }
    return (
        <div className='tinderCards'>
            <div className='tinderContainer'>
            
                {info.map((info)=>(
                    <TinderCard 
                        className='swipe' 
                        key={info.id} 
                        preventSwipe={['up','down']} 
                        onSwipe={(dir)=>swiped(dir,info.name)}
                        onCardLeftScreen={()=>outOfFrame(info.name)}
                        >
                        <div 
                            style={{backgroundImage:`url(${info.url})`}} 
                            className="card"> 
                            <h3>{info.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default Card
