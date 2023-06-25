import React from "react";
const Stackoverflowbodycards = (props) => {
    const bodycard = [
        { id: 0, firsttitle: "100+millions", secondtitle: "monthly visitors to stack overflow & stack Exchange" },
        { id: 1, firsttitle: "100+millions", secondtitle: "monthly visitors to stack overflow & stack Exchange" },
        { id: 2, firsttitle: "100+millions", secondtitle: "monthly visitors to stack overflow & stack Exchange" },
        { id: 3, firsttitle: "100+millions", secondtitle: "monthly visitors to stack overflow & stack Exchange" },
    ];

    return (


        <div className="stackoverflow-categories content-wrapper">
            {bodycard?.map((item, index) => {
                return <div className="categories1">
                    <div className="div1">{item.firsttitle}</div>
                    <div className="div2">{item.secondtitle}</div>
                </div>
            }
            )}

        </div>
    )
}


export default Stackoverflowbodycards;