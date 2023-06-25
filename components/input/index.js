import React from "react";
import classes from'./input.module.css'
const Input = (props) => {
    return (
        <div className="input-wrapper">

            <div> {props.label}</div>
<div className={classes.aaa}>
            <input
            type={props.type}
            placeholder={props.placeholder}
            style={props.style}
            className={classes.bbb}
            onchange={props.onchange}
            />
            </div>
        </div>

    )
}
export default Input;