const BusinessSectionCard = ({cardData, index}) => {
    return (
        <div class="business-card1" key={index}>
            <div class="business-card-img">
                <img src={cardData.icon} alt="" />
            </div>
            <div class="business-card-discription">
                <span class="business-card-discription1">{cardData.title}</span>
                <span class="business-card-discription2">-</span>
            </div>
            <div class="business-card-link">{cardData.desc}</div>
        </div>
    )
}

export default BusinessSectionCard;