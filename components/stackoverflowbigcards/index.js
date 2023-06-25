import React from "react";
const Stackoverflowbigcards = (props) => {

    const bigcards = [
        { id: 0, bigcardheading: "stackoverflow", image: "https://cdn.sstatic.net/Img/home/illo-public.svg?v=14bd5a506009", descone: "A public platform", desctwo: "A community-based", cardbutton: "join the community", link: "search content" },
        { id: 1, bigcardheading: "stackoverflow", image: "https://cdn.sstatic.net/Img/home/illo-public.svg?v=14bd5a506009", descone: "A private platform", desctwo: "A virtual-based", cardbutton: "join the group", link: "search item" }

    ];
    return (
        <div>


            <div className="stack-overflow-bigcards content-wrapper">

                {bigcards?.map((item, index) => {
                    return <div className="big-card1">
                        <div className="bigcard-heading">{item.bigcardheading}</div>
                        <div className="big-card-image"><img src={item.image} /></div>
                        <div className="big-card-dis1">{item.descone}</div>
                        <div className="big-card-dis2">{item.desctwo}</div>
                        <div className="big-card-button">{props.cardbutton}</div>
                        <div className="big-card-link">item.link</div>
                    </div>
                }
                )}


            </div>
        </div>
    )
}
export default Stackoverflowbigcards;