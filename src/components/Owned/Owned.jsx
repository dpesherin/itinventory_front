import React from 'react'
import "./Owned.css"
import MobileIco from "../../assets/mobile.svg"
import DeviceIco from "../../assets/device.svg"

export default function Owned(props) {
    let ico = null
    switch (props.type){
        case "mobile":
            ico = MobileIco
            break
        case "device":
            ico = DeviceIco
            break
        default:
            ico = DeviceIco
    }
  return (
    <div className='owned half'>
        <img src={ico} alt="" />
        <div className="device-data">
            <p>{props.prod}</p>
            <p>{props.model}</p>
        </div>
    </div>
  )
}
