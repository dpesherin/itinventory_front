import React from 'react'
import { useLocation } from 'react-router-dom';
import Sidebar from "../Sidebar/Sidebar"

export default function ConditionalSidebar() {
    const location = useLocation();
    const showSidebar = location.pathname !== '/login';
  
    return showSidebar ? <Sidebar /> : null;
}
