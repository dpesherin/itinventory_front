import React, {useState, useEffect} from 'react'
import "./Profile.css"
import fake from "../../components/UserData/fake.json"
import DeviceList from '../../components/Device/DeviceList'
import OwnedList from '../../components/Owned/OwnedList'
import UserData from '../../components/UserData/UserData'
import ProfileAvatar from '../../components/UserData/ProfileAvatar'

export default function Profile() {
  const [data, setData] = useState(false)
  useEffect(()=>{
      const getFakeData = () =>
          new Promise(resolve => setTimeout(() => resolve(fake.data), 3000));
      
      getFakeData()
          .then((fakeData) => {
              setData(fakeData);
          });
  }, [])
  return (
      <div className="w-100">
        <div className="banner">
        </div>
        <ProfileAvatar data={data}/>
        <button id="upd-btn">Update</button>
        <div className="container-profile w-100">
          <UserData data={data}/>
          <div className="items w-100">
            <DeviceList />
            <OwnedList />
          </div>
        </div>
    </div>
  )
}
