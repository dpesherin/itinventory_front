import React from 'react';
import PlaceholderLoader from 'react-placeholder-loader';

export default function OwnedSkeleton() {
  return (
    <div className='owned half'>
      <PlaceholderLoader
        className="icon-placeholder"
        shape="circle"
        width={50}
        height={50}
      />
      <div className="device-data">
        <PlaceholderLoader
          className="text-placeholder"
          width={75}
          height={20}
        />
        <PlaceholderLoader
          className="text-placeholder"
          width={75}
          height={20}
        />
      </div>
    </div>
  );
}