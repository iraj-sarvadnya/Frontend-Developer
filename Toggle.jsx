import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCalculator, faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <div className='sidebar-menu'>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <FontAwesomeIcon icon={faBars} />
              <i class="fa-sharp fa-solid fa-bars"></i>
            </li>
            <li className='slide-nav'>
              <ul>
                <li><a href='#'><FontAwesomeIcon icon={faCaretRight} /> Mission</a></li>
                <li><a href='#'><FontAwesomeIcon icon={faCaretRight} /> Launches</a></li>
                <li><a href='#'><FontAwesomeIcon icon={faCaretRight} /> Careers</a></li>
                <li><a href='#'><FontAwesomeIcon icon={faCaretRight} /> Updates</a></li>
                <li><a href='#'><FontAwesomeIcon icon={faCaretRight} /> Shop</a></li>
                <li><a href='#'><FontAwesomeIcon icon={faCaretRight} /> Blogs</a></li>
                <li><a href='#'><FontAwesomeIcon icon={faCaretRight} /> Contact</a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
