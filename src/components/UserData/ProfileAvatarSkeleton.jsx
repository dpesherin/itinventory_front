import React from 'react'
import PlaceholderLoader from 'react-placeholder-loader'

export default function ProfileAvatarSkeleton() {
  return (
    <div className="profile-info">
        <PlaceholderLoader width={280} height={280} className="avatar-big-skeleton" />
        <PlaceholderLoader width={150} height={24} className='profile-fio-skeleton' />
        <PlaceholderLoader width={75} height={24} className="status-user-skeleton" />
    </div>
  )
}
