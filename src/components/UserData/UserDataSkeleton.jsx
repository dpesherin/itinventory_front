import React from 'react'
import PlaceholderLoader from 'react-placeholder-loader'

export default function UserDataSkeleton() {
  return (
    <div className="profile-data">
        <div className="row-data">
            <div className="item-block half">
            <label htmlFor="email" className="label">Email</label>
            <PlaceholderLoader
                className="input-placeholder"
            />
            </div>
            <div className="item-block half">
            <label htmlFor="login" className="label">Login</label>
            <PlaceholderLoader
                className="input-placeholder"
            />
            </div>
        </div>
        <div className="row-data">
        <div className="item-block full">
            <label htmlFor="office" className="label">Office</label>
            <PlaceholderLoader
                className="input-placeholder"
            />
            </div>
        </div>
        <div className="row-data">
            <div className="item-block half">
            <label htmlFor="reg" className="label">Date register</label>
            <PlaceholderLoader
                className="input-placeholder"
            />
            </div>
            <div className="item-block half">
            <label htmlFor="last" className="label">Last login</label>
            <PlaceholderLoader
                className="input-placeholder"
            />
            </div>
        </div>
    </div>
  )
}
