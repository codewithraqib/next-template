import React from "react";
const CreateSectionCard = ({cardData, index}) => {
    return (
        <div class="create-your-own">
            <div class="create-your-own-sub-image"> <img src={cardData.icon} alt="" /></div>
            <div class="create-your-own-image-dis">{cardData.title}</div>
        </div>
    )
}
export default CreateSectionCard;