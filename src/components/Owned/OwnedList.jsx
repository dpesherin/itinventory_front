import React, { useState, useEffect } from 'react'
import "./Owned.css"
import Owned from './Owned'
import fake from "./fake.json"
import OwnedSkeleton from './OwnedSkeleton'

export default function OwnedList() {
    
    const [data, setData] = useState([])
    useEffect(()=>{
        const getFakeData = () =>
            new Promise(resolve => setTimeout(() => resolve(fake.items), 3000));
        
        getFakeData()
            .then((fakeItems) => {
                setData(fakeItems);
            });
    }, [])
    if (data.length === 0) {
        return (
            <div className="ordered col g-16 half">
                <div className="items-header">
                <h3 className='items-title'>Owned Items</h3>
                <div className="action">
                    <button className='action-btn'>more</button>
                </div>
                </div>
                <div className="w-100 wrapped">
                    <OwnedSkeleton/>
                    <OwnedSkeleton/>
                </div>
            </div>
        )
    }
    return (
        <div className="ordered col g-16 half">
            <div className="items-header">
            <h3 className='items-title'>Owned Items</h3>
            <div className="action">
                <button className='action-btn'>more</button>
            </div>
            </div>
            <div className="w-100 wrapped">
                {
                    data.map((el, index)=>{
                        return <Owned key={index} type={el.type} prod={el.prod} model={el.model}/>
                    })
                }
            </div>
        </div>
    )
}
