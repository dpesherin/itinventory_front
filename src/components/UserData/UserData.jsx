import React from 'react'
import UserDataSkeleton from './UserDataSkeleton';

export default function UserData(props) {
    if(!props.data){
        return(
            <UserDataSkeleton/>
        )
    }
  return (
    <div className="profile-data">
        <div className="row-data">
            <div className="item-block half">
            <label htmlFor="email" className="label">Email</label>
            <input type="email" id="email" name='email' value={props.data.email} disabled/>
            </div>
            <div className="item-block half">
            <label htmlFor="login" className="label">Login</label>
            <input type="text" id="login" name='login' value={props.data.login} disabled/>
            </div>
        </div>
        <div className="row-data">
        <div className="item-block full">
            <label htmlFor="office" className="label">Office</label>
            <input type="text" id="office" name='office' value={props.data.office} disabled/>
            </div>
        </div>
        <div className="row-data">
            <div className="item-block half">
            <label htmlFor="reg" className="label">Date register</label>
            <input type="date" id="reg" name='reg' value={props.data.reg} disabled/>
            </div>
            <div className="item-block half">
            <label htmlFor="last" className="label">Last login</label>
            <input type="date" id="last" name='last' value={props.data.last} disabled/>
            </div>
        </div>
    </div>
  )
}
