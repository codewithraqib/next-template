import { useState } from "react"
import Benifits from "../benifits"
import ContentContainer from "../../ui/content-container/content-container";

const AllBenifits = () => {

    const [benifits, setBenifits] = useState([
        { id: 0, title: "One Bill & One call center", img: "", link: "", active: false },
        { id: 1, title: "Fast Internet", img: "", link: "", active: false },
        { id: 2, title: "No Call drops", img: "", link: "", active: false },
        { id: 3, title: "Family Plans", img: "", link: "", active: false },
        { id: 4, title: "Lesser conjustion in calls", img: "", link: "", active: false },
        { id: 5, title: "Unlimited messages", img: "", link: "https://bracecodes.in", active: false },
    ]);


    const setActive = (res) => {

        console.log("log place 1")

        // const findItem = benifits.find(val => val.id === res.id) 

        let index = null;
        benifits.forEach((val, i) => {
            if (val.id === res.id) {
                index = i;
            }
        })

        let benifitsLocal = benifits;

        let resLocal = { ...res, active: true };

        benifitsLocal.splice(index, 1, resLocal);

        console.log({ benifitsLocal })

        setBenifits(benifitsLocal);

    }


    return (
        <>
        <div class="airtel-black-benifits">

            <ContentContainer>
            <div class="airtel-black-benifits-heading">
                Airtel Black benefits
            </div>
            <div class="airtel-black-benifits-buttons">
                {benifits.map((benifit, index) => <Benifits benifit={benifit} index={index} beaten={(res) => setActive(res)} />)}

            </div>
            </ContentContainer>

        </div>
            
        </>

    )
}


export default AllBenifits;