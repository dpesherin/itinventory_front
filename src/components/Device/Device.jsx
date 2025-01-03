import React from 'react'
import "./Device.css"
import DeviceIco from "../../assets/device.svg"

export default function Device(props) {
  return (
    <div className="full device d-item">
        <img src={DeviceIco} alt='' />
        <div className="block-info">
            <p>{props.platform}</p>
            <p>{props.ip}</p>
        </div>
        <div className="block-info">
            <p>{props.location}</p>
            <p>{props.date}</p>
        </div>
    </div>
  )
}
