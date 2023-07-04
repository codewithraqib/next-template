import React from "react";
import classes from './event-description.module.less'
const EventDescription = (props) => {
    const event = [
        { id: 0, name: "quantum computing", capacity: 3, time: "am", venue: "docs/lab1", motivation: "jdfljdifjdlfjdl", cordinator: "dr tanzil sir", awards: "laptop" },
        { id: 1, name: "quantum computing", capacity: 3, time: "am", venue: "docs/lab1", motivation: "jdfljdifjdlfjdl", cordinator: "dr tanzil sir", awards: "laptop" }
    ]
    return (
        event?.map((item) => {
            return <div className={classes.event_description_main}>
                <div>{item.name}</div>
                <div>{item.capacity}</div>
                <div>{item.time}</div>
                <div>{item.venue}</div>
                <div>{item.motivation}</div>
                <div>{item.cordinator}</div>
                <div>{item.awards}</div>
            </div>
        })
    )
}
export default EventDescription ;