import React,{useState} from 'react'
import TinderCard from 'react-tinder-card'
import './Card.css'

function Card() {
    const [info,setInfo] = useState(
    [
        {
            name: 'Most Beautiful',
            url: 'https://tipsforwomens.org/wp-content/uploads/2019/11/1572733720_Jare-Ijalana-is-Nigerian-quotthe-most-beautiful-girl-in-the-1024x584.jpg'
        },
        {
            name: 'Ariana Grande',
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRln1TRVIBKRa8H-RtKPZ5IdbdkKiCW68Hh9Q&usqp=CAU'
        },
        {
            name: 'Omotola jalade ekeinde',
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmAVLUhbX37WSWVQT_ikHZo2byyNYdLelc1g&usqp=CAU'
        }
    ]);

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
                        key={info.name} 
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
