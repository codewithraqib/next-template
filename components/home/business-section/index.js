import { Component, PureComponent, useEffect, useState } from "react";
import BusinessSectionCard from "./card";


const BusinessSection = () => {


    const businessCards = [
        { id: 0, icon: "/images/icons/home/airport-icon.png", title: "Airtel Office Internet", desc: "Power your business with broadband that comes with every thing you need" },
        { id: 1, icon: "/images/icons/home/airport-icon.png", title: "Airtel Office Internet", desc: "Power your business with broadband that comes with every thing you need" },
        { id: 2, icon: "/images/icons/home/airport-icon.png", title: "Airtel Office Internet", desc: "Power your business with broadband that comes with every thing you need" },
        { id: 3, icon: "/images/icons/home/airport-icon.png", title: "Airtel Office Internet", desc: "Power your business with broadband that comes with every thing you need" },

    ]
    return (
        <>
            <div class="business-container">
                <div class="business-discription">
                    <div class="business-title">For your business</div>
                    <div class="business-sub-title">Solutions for medium to large scale enterprises </div>
                    <div class="business-link">Explore Airtel Business</div>
                </div>
                <div class="business-cards">

                </div>
            </div>
            <div class="business-cards-container">
                {businessCards?.map((card, index) => <BusinessSectionCard cardData={card} index={index} abc={1}/>)}
            </div>
        </>
    )
}


export default BusinessSection;