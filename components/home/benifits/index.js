const Benifits = ({benifit, index, beaten}) =>{

    return(
        <div class="benifits-button" key={index} onClick={() => beaten(benifit)} style={benifit.active ? {background:"white"}:{}}>
                  <div class="benifits-button-image"> <img src="/images/icons/home/airport-icon.png" alt="" />
                  </div>
                  <div class="benifit-buttons-discription">{benifit.title}</div>
                  {benifit?.link !== "" ? <div class="know-more">Know More</div> : null}
                </div>
    )
}


export default Benifits;