import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Sidebar.css";
import Burger from "../../assets/burger.svg";
import Close from "../../assets/close.svg";
import Exit from "../../assets/exit.svg";
import { useDispatch } from 'react-redux';
import { logout } from '../../auth/actions/AuthAction';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState("56px");
  const [icon, setIcon] = useState(Burger);
  const [linksVisible, setLinksVisible] = useState(false);
  const dispatch = useDispatch()

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    setWidth(isOpen ? "56px" : "80vw");
    setIcon(isOpen ? Burger : Close);
  };

  const handleLogout = () => {
      dispatch(logout())
  }

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
    <div id='sidebar' style={{ width: width }}>
      <div className="row">
        <img src={icon} alt="ico" onClick={toggleSidebar} />
      </div>
      <div className={`block col-center link-area ${!isOpen && 'hidden'}`}>
        {linksVisible && (
          <>
            <Link className='link' to="/" onClick={toggleSidebar}>Home</Link>
            <Link className='link' to="/user" onClick={toggleSidebar}>Users</Link>
            <Link className='link' to="/inventory" onClick={toggleSidebar}>Items</Link>
            <Link className='link' to="/inventory" onClick={toggleSidebar}>Creditials</Link>
            <Link className='link' to="/inventory" onClick={toggleSidebar}>Settings</Link>
            <button className='link' onClick={handleLogout}>Sign Out</button>
          </>
        )}
      </div>
      <div className="row">
        <img className={`block ${isOpen && 'hidden'}`} onClick={handleLogout} src={Exit} alt="ico" />
      </div>
    </div>
  );
}
