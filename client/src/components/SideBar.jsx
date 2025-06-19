import { NavLink } from 'react-router-dom';
import '../stylesheets/sideBar.css';

const Sidebar = () => {
  return (
    <div>
      <h2 className="logo">.LOGO</h2>
      <div className="sidebar">
        <div className="top-section">
          <nav>
            <ul>
              <li><NavLink to="/" end className="nav-link">Dashboard</NavLink></li>
              <li><NavLink to="/entities" className="nav-link">My Entities</NavLink></li>
              <li><NavLink to="/market-place" className="nav-link">Marketplace</NavLink></li>
              <li><NavLink to="/notification" className="nav-link">Notifications</NavLink></li>
              <li><NavLink to="/calender" className="nav-link">Calendar</NavLink></li>
            </ul>
          </nav>
        </div>  

        <div className="bottom-section">
          <ul>
            <li><NavLink to="/profile" className="nav-link">Profile</NavLink></li>
            <li><NavLink to="/settings" className="nav-link">Settings</NavLink></li>
            <li><NavLink to="/logout" className="nav-link">Logout</NavLink></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
