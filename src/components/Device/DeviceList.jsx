import React, { useEffect, useState } from 'react'
import Device from "./Device"
import fake from "./fake.json"
import DeviceSkeleton from './DeviceSkeleton'

export default function DeviceList() {
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
            <div className="last col g-16 half">
              <div className="items-header">
              <h3 className='items-title'>Last Login Devices</h3>
              <div className="action"></div>
              </div>
              <DeviceSkeleton/>
              <DeviceSkeleton/>
          </div>
          )
      }
  return (
    <div className="last col g-16 half">
        <div className="items-header">
        <h3 className='items-title'>Last Login Devices</h3>
        <div className="action"></div>
        </div>
        {data.map((el, index) => {
          return <Device key={index} location={el.location} ip={el.ip} date={el.date} platform={el.platform}/>
        })}
    </div>
  )
}
