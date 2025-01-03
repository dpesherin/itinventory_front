import React from 'react'
import "./Profile.css"
import ProfileImage from "../../assets/p_fill.svg"
import Device from '../../components/Device/Device'
import Owned from '../../components/Owned/Owned'

export default function Profile() {
  return (
      <div className="w-100">
        <div className="banner">
        </div>
        <div className="profile-info">
          <div className="avatar-big">
            <img src={ProfileImage} alt="" />
          </div>
          <h4 className='profile-fio'>Иванов Иван</h4>
          <p className="status-user">Admin</p>
        </div>
        <button id="upd-btn">Update</button>
        <div className="container-profile w-100">
          <div className="profile-data">
            <div className="row-data">
              <div className="item-block half">
                <label htmlFor="email" className="label">Email</label>
                <input type="email" id="email" name='email' value="admin@local.domain" disabled/>
              </div>
              <div className="item-block half">
                <label htmlFor="login" className="label">Login</label>
                <input type="text" id="login" name='login' value="admin@local.domain" disabled/>
              </div>
            </div>
            <div className="row-data">
            <div className="item-block full">
                <label htmlFor="office" className="label">Office</label>
                <input type="text" id="office" name='office' value="MOSCOW, GNEZDIKOVSKIY 2 ST 1" disabled/>
              </div>
            </div>
            <div className="row-data">
              <div className="item-block half">
                <label htmlFor="reg" className="label">Date register</label>
                <input type="date" id="reg" name='reg' value="2024-01-01" disabled/>
              </div>
              <div className="item-block half">
              <label htmlFor="last" className="label">Last login</label>
              <input type="date" id="last" name='last' value="2024-01-01" disabled/>
              </div>
            </div>
          </div>
          <div className="items w-100">
            <div className="last col g-16 half">
              <div className="items-header">
                <h3 className='items-title'>Last Login Devices</h3>
                <div className="action">
                  <button className='action-btn'>more</button>
                </div>
              </div>
              <Device location={"MOSKOW"} ip={"192.168.1.1"} date={"01.01.2025"} platform={"Windows"}/>
              <Device location={"MOSKOW"} ip={"192.168.1.1"} date={"01.01.2025"} platform={"Windows"}/>
              <Device location={"MOSKOW"} ip={"192.168.1.1"} date={"01.01.2025"} platform={"Windows"}/>
              <Device location={"MOSKOW"} ip={"192.168.1.1"} date={"01.01.2025"} platform={"Windows"}/>
            </div>
            <div className="ordered col g-16 half">
              <div className="items-header">
                <h3 className='items-title'>Owned Items</h3>
                <div className="action">
                  <button className='action-btn'>more</button>
                </div>
              </div>
              <div className="w-100 wrapped">
                <Owned type={"device"} prod={"Toshiba"} model={"T14 i5-8420"}/>
                <Owned type={"device"} prod={"Toshiba"} model={"T14 i5-8420"}/>
                <Owned type={"device"} prod={"Toshiba"} model={"T14 i5-8420"}/>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
