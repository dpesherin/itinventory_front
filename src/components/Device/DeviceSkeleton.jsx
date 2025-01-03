import React from 'react'
import PlaceholderLoader from 'react-placeholder-loader';

export default function DeviceSkeleton() {
  return (
    <div className="full device d-item">
        <PlaceholderLoader
            className="icon-placeholder"
            shape="circle"
            width={50}
            height={50}
        />
        <div className="block-info">
            <PlaceholderLoader
                className="text-placeholder"
                width={100}
                height={20}
            />
            <PlaceholderLoader
                className="text-placeholder"
                width={100}
                height={20}
            />
        </div>
        <div className="block-info">
            <PlaceholderLoader
                className="text-placeholder"
                width={100}
                height={20}
            />
            <PlaceholderLoader
                className="text-placeholder"
                width={100}
                height={20}
            />
        </div>
    </div>
  )
}
