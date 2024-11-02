import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './SideBar.css';

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="sidebar-container">
            <button className="burger-button" onClick={toggleSidebar}>
                {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
            </button>
            <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
                <ul>
                    <li>
                        <a href="https://opportunity.org" target="_blank" rel="noopener noreferrer">
                            Home Website
                        </a>
                    </li>
                    <li>
                        <a href="https://opportunity.org/who-we-are/careers-internships/" target="_blank" rel="noopener noreferrer">
                            Careers
                        </a>
                    </li>
                    {/* Add more links as needed */}
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;