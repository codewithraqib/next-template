import classes from './event-item.module.less'
const EventItem = ({ event, index }) => {
    return (
        <div className={classes.event_single_item} key={index}>
            <div className={classes.title}>{event.title}</div>
            <div className={classes.desc}>{event.body}</div>
            <div className={classes.date_action_container}>
                <div className={classes.date}>{event.date}</div>
                <img className={classes.action_button} src='/images/icons/chevron-right.png' />
            </div>
        </div>
    )
}

export default EventItem;