import React from "react";
import "./Navbar.css"

const Navbar =() =>{

    return(
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Way Li</div>
                <span>toggle</span>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul>
                        <li>Home</li>
                        <li>Menu</li>
                        <li>Delivery</li>
                        <li>Reservation</li>
                        <li>About us</li>
                    </ul>
                </div>
                <button className="button n-button">
                    Contact Us
                </button>
            </div>
        </div>
    )
}

export default Navbar