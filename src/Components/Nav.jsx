/* eslint-disable */ 
import React, { useState } from "react"
import todoicon from '../images/icon-todo.svg'
import calendericon from '../images/icon-calendar.svg'
import remindericon from '../images/icon-reminders.svg'
import planningicon from '../images/icon-planning.svg'
import logo from '../images/logo.svg'
import { DownOutlined, UpOutlined } from '@ant-design/icons';


const Nav = () => {
    const [feature, setfeature] = useState(true);
    const [company, setcompany] = useState(true);

   const toggle = (idx, desk) => {
        if(desk){
            if(idx==0){
                setfeature(!feature);
                document.getElementsByClassName("drop-body0")[0].classList.toggle("dropshow");
            }else if(idx==1){
                setcompany(!company);
                document.getElementsByClassName("drop-body1")[0].classList.toggle("dropshow");
            }
        }else{
            document.querySelectorAll('.expandable-item')[idx].classList.toggle('active');
            document.getElementsByClassName('toggleicon')[idx].classList.toggle('fa-angle-up');
        }
    };
    
  return (
      <nav className="navmenu ">
            
            <div className="mainnavbar d-flex align-items-center justify-content-between">
                <div className="navlinkmain">
                    <img src={logo} alt="img" className="nav-img" height={30}/>
                    <span className="navlink ms-5 ">
                        <span className="mx-3" onClick={()=>toggle(0, true)}>Features {feature?<DownOutlined className="ms-1"/>: <UpOutlined className="ms-1"/>}</span>
                        <div className="drop-body0">
                            <li><img src={todoicon} alt="img" height={21} className="me-2 my-2"/>Todo List</li>
                            <li><img src={calendericon} alt="img" height={21} className="me-2 my-2"/>Calendar</li>
                            <li><img src={remindericon} alt="img" height={21} className="me-2 my-2"/>Reminders</li>
                            <li><img src={planningicon} alt="img" height={21} className="me-2 my-2"/>Planning</li>
                        </div>
                        <span className="mx-3" onClick={()=>toggle(1, true)}>Company {company?<DownOutlined className="ms-1"/>: <UpOutlined className="ms-1"/>}</span>
                        <div className="drop-body1">
                            <li className="my-2">History</li>
                            <li className="my-2">Our Team</li>
                            <li className="my-2">Blog</li>
                        </div>
                        <span className="mx-4">Carrers</span>
                        <span>About</span>
                    </span>
                </div>
                <div className="login">
                    <h6 className="m-0 p-0 mx-3">Login</h6>
                    <button className="register-button">Register</button>
                </div>  
            </div>
            
            {/* Mobile Navtoggle */}
            <div className="menuToggle">
                <input type="checkbox"/>
                <span></span>
                <span></span>
                <span></span>
                <ul className="menuItem">
                    <div className="expandable-item" onClick={()=>toggle(0)}>
                        <div className="expandable-header">
                            Features
                            <i className="ms-2 toggleicon fa-solid fa-angle-down"></i>
                        </div>
                        <div className="expandable-body">
                            <li><img src={todoicon} alt="img" height={21} className="me-2"/>Todo List</li>
                            <li><img src={calendericon} alt="img" height={21} className="me-2"/>Calendar</li>
                            <li><img src={remindericon} alt="img" height={21} className="me-2"/>Reminders</li>
                            <li><img src={planningicon} alt="img" height={21} className="me-2"/>Planning</li>
                        </div>
                    </div>
                    <div className="expandable-item" onClick={()=>toggle(1)}>
                    <div className="expandable-header">
                        Company
                        <i className="ms-2 toggleicon fa-solid fa-angle-down"></i>
                    </div>
                    <div className="expandable-body">
                        <li>History</li>
                        <li>Our Team</li>
                        <li>Blog</li>
                    </div>
                    </div>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">About</a></li>
                    <div className="text-center mt-4">
                        <h6 className="my-3">Login</h6>
                        <button className="register-button">Register</button>
                    </div>
                </ul>
            </div>
        </nav>

  )
};

export default Nav;
