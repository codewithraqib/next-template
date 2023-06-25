import React from "react";
const CreateStackoverflowCard = (props) => {
    const createcardsstack = [
        { id: 0, dis: "jdljfldiio<", cardbutton: "join the community", searchcontent: "search content", iconPos: 1 },
        { id: 1, dis: "jdljfldiio<", cardbutton: "join the community", searchcontent: "search content" , iconPos: 0}
    ];
    return (
        <div className="stackoverflow-cards" onClick={() => props.onClickButton()}>
            {createcardsstack?.map((item, index) => {
                return <div className="stackoverflow-card1">
                    <div>
                        <div><img src="fjkl.png" /></div>
                        <div className="card-discription">{item.dis}</div>
                        <div className="card-button">{props.cardbutton}</div>
                        <div className="search-content">{item.searchcontent}</div>
                    </div>
                    {<div className={  item.iconPos == 1 ? "overlay-div overlay-div-right" : "overlay-div overlay-div-left"}/> }
                </div>
            }
           ) }
        </div>
    )



}

export default CreateStackoverflowCard;