import React from 'react'
import ProfileAvatarSkeleton from './ProfileAvatarSkeleton'

export default function ProfileAvatar(props) {
    if(!props.data){
        return(
            <ProfileAvatarSkeleton />
        )
    }
  return (
    <div className="profile-info">
            <div className="avatar-big">
            <img src={props.data.avatar} alt="" />
            </div>
            <h4 className='profile-fio'>{props.data.fio}</h4>
            <p className="status-user">{props.data.status}</p>
    </div>
  )
}
