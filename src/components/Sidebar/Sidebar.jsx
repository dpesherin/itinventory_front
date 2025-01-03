import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Sidebar.css";
import Burger from "../../assets/burger.svg";
import Close from "../../assets/close.svg";
import { useDispatch } from 'react-redux';
import { logout } from '../../auth/actions/AuthAction';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState("56px");
  const [icon, setIcon] = useState(Burger);
  const [linksVisible, setLinksVisible] = useState(false);
  const [circleVisible, setCircleVisible] = useState(false); // новое состояние для управления видимостью круга
  const dispatch = useDispatch();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    setWidth(isOpen ? "closed" : "open");
    setIcon(isOpen ? Burger : Close);
    
    // Показываем круг только когда открываем слайдер
    if (!isOpen) {
      setCircleVisible(true);
    } else {
      setCircleVisible(false); // Скрываем круг сразу при закрытии
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setLinksVisible(true);
      }, 300);
    } else {
      setLinksVisible(false);
    }
  }, [isOpen]);

  return (
    <div id='sidebar' className={width}>
      <div className={`circle ${circleVisible ? 'visible' : ''}`}></div>
      <div className="row">
        <div className={`ico ${isOpen && 'transparent'}`} onClick={toggleSidebar}>
          <img src={icon} alt="ico"/>
        </div>
      </div>
      <div className={`block col-center link-area ${!isOpen && 'hidden'}`}>
        {linksVisible && (
          <>
            <Link className='link' to="/" onClick={toggleSidebar}>Home</Link>
            <Link className='link' to="/profile" onClick={toggleSidebar}>Profile</Link>
            <Link className='link' to="/users" onClick={toggleSidebar}>Users</Link>
            <Link className='link' to="/items" onClickSidebar={toggleSidebar}>Items</Link>
            <Link className='link' to="/creditials" onClick={toggleSidebar}>Creditials</Link>
            <Link className='link' to="/settings" onClick={toggleSidebar}>Settings</Link>
            <button className='link' onClick={handleLogout}>Sign Out</button>
          </>
        )}
      </div>
      <div className="row">
        <div className="ico transparent">

        </div>
      </div>
    </div>
  );
}