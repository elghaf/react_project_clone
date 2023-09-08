// components/Sidebar.js
import React, { useState } from 'react';
import { FaHome, FaHashtag, FaBell, FaEnvelope, FaBookmark, FaListAlt, FaUser, FaEllipsisH, FaBars } from 'react-icons/fa';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`w-64 bg-blue-500 p-4 h-screen ${isSidebarOpen ? 'block' : 'hidden'} md:block`}>
      <div className="text-white text-center mb-4">
        <h2 className="text-xl font-semibold">Twitter Clone</h2>
      </div>
      <div className="space-y-4">
        <SidebarItem icon={<FaHome />} text="Home" />
        <SidebarItem icon={<FaHashtag />} text="Explore" />
        <SidebarItem icon={<FaBell />} text="Notifications" />
        <SidebarItem icon={<FaEnvelope />} text="Messages" />
        <SidebarItem icon={<FaBookmark />} text="Bookmarks" />
        <SidebarItem icon={<FaListAlt />} text="Lists" />
        <SidebarItem icon={<FaUser />} text="Profile" />
        <SidebarItem icon={<FaEllipsisH />} text="More" />
      </div>
      <button className="bg-blue-700 text-white hover:bg-blue-600 rounded-full px-4 py-2 mt-6 w-full">
        Tweet
      </button>
    </div>
  );
};

const SidebarItem = ({ icon, text }) => {
  return (
    <a href="#" className="block text-white hover:text-blue-200 flex items-center space-x-2">
      <span className="text-xl">{icon}</span>
      <span>{text}</span>
    </a>
  );
};

export default Sidebar;
