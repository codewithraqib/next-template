import React, { useState } from "react";
import MyInput from "../ui/my-input";
import MyButton from "../ui/my-button";



const Loginpractice = ({logo}) => {
    const [inputValues, setInputValues] = useState({});

    const onInputsChange = (val, type) => {
        setInputValues({ ...inputValues, [type]: val.target.value })
    }

    const onSubmit = () => {
        console.log({ inputValues })
    }

    return (
        <div className="practice-login">
            <div className="input-img"><img src={logo} /></div>
            <div className="feedback-form">
                <MyInput placeholder="Enter your mobile" label="Mobile" onChange={text => onInputsChange(text, "mobile")} value={inputValues.mobile} />
                <MyInput placeholder="Enter your mobile" label="Password" onChange={text => onInputsChange(text, "password")} value={inputValues.password} />
                <MyButton onClick={onSubmit} label="Login" />
            </div>
        </div>

    )
}
export default Loginpractice;