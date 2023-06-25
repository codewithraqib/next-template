import { Component, PureComponent, useEffect, useState } from "react";
import CreateSectionCard from '../create-plan/cards/index';
const CreatePlan=()=>{
     const createCards=[
        {id:0, icon:"/images/icons/home/airport-icon.png", title:"Postpaid"},
        {id:1, icon:"/images/icons/home/airport-icon.png", title:"Postpaid"},
        {id:2, icon:"/images/icons/home/airport-icon.png", title:"Postpaid"},
     ];
    return(
        <div className="create-your-own-plan-container">

        <div className=" create-your-own-plan-discription content-wrapper">
            <div className="create-your-own-discription">
                <div className="create-your-own-discription1"> Create your own plan</div>
                <div className="create-your-own-discription2">30 Days Free* for a new service</div>
                <div  className="create-your-own-discription3">Combine any new service with your existing service and enjoy first 30 days free*</div>

           
            <div className="create-your-own-image-dis-container">
              { createCards?.map((card,index) => <CreateSectionCard cardData={card} index={index}/>)}  
            </div>
            <div className="create-plan">CREATE PLAN</div>
        </div>
            <div className="create-your-own-image"> <img src="https://assets.airtel.in/static-assets/homes/img/carousal1_new.jpg" alt=""/></div>
        </div>
    </div>
    )}
export default CreatePlan;

    