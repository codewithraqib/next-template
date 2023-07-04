import React from "react";
import classes from './gallery-events.module.less'
const EventsGallery=(props)=>{
    const gallery=[
        {id:0,  image:<img src="/images/iustimages/img1.jpg"/>,desc:"abcdedff"},
        {id:1,  image:<img src="/images/iustimages/img2.jpg"/>,desc:"abcdedff"},
        {id:2, image:<img src="/images/iustimages/img3.jpg"/>,desc:"abcdedff"},
        {id:3, image:<img src="/images/iustimages/img2.jpg"/>,desc:"abcdedff"},
        {id:4, image:<img src="/images/iustimages/img3.jpg"/>,desc:"abcdedff"},
        {id:5, image:<img src="/images/iustimages/img1.jpg"/>,desc:"abcdedff"},
    ]

    return(
        gallery?.map((item)=>{
        return<div >
            <div className={classes.event_section}>
        <div className={classes.event_image}>{item.image}</div>
        <div className={classes.event_desc}>{item.desc}</div>
        </div>
      </div>
        })
    );
}
export default EventsGallery;