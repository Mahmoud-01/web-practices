import React from "react";

import "./Intro.css"
import FACEBOOK from "../../img/Facebook.png"
import INSTAGRAM from "../../img/instagram.png"
// import Vector1 from "../../img/Vector1.png"
// import Vector2 from "../../img/Vector2.png"
// import Boy from "../../img/boy.png"
import Hero from "../../img/heroS.png"
import Food1 from "../../img/food1.png"
import Drink22 from "../../img/drink22.png"
import Food2 from "../../img/food22.png"
import FloatingDiv from "../FloatingDiv/FloatingDiv";


const Intro = () =>{

    return(
        <div className="Intro">
            <div className="i-left">
                <div className="i-intro">
                <span>Hey! Welcome to</span>
                <span>Way Li</span>
                <span>We make highly delicious foods that are 100% HALAL</span>
                </div>

                <button className="button i-button">Make an Order</button>
                <div className="i-icons">
                    <img src={FACEBOOK} alt="Facebook Icon" />
                    <img src={INSTAGRAM} alt="Instagram Icon" />
                </div>
            </div>

            <div className="i-right i-bg">
                {/* <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={Boy} alt="" /> */}
                <img src={Food1} alt="" />
                <div style={{top: '-10%', left: '66%'}}>
                    <FloatingDiv image= {Drink22} text1='Refreshing' text2="Drinks"/>
                </div>

                <div style={{top: "18rem", left: "0rem"}}>
                    <FloatingDiv image={Food2} text1="Yummy" text2="Sandwiches"/>
                </div>

            </div>
        </div>
    )
}

export default Intro