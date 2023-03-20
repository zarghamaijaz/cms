import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

function Sidebar(){
    return(
        <div className="sidebar">
            <ul>
                <li>
                    <Link to="/">Some link</Link>
                    <Link to="/signin">Some link</Link>
                </li>
            </ul>
        </div>
    )
}
export default Sidebar;