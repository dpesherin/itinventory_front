import React from 'react'
import "./Profile.css"
import ProfileImage from "../../assets/p_fill.svg"
import DeviceList from '../../components/Device/DeviceList'
import OwnedList from '../../components/Owned/OwnedList'

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
            <DeviceList />
            <OwnedList />
          </div>
        </div>
    </div>
  )
}
