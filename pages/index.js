import MainWrapper from "../components/ui/wrapper/wrapper";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import ContentContainer from "../components/ui/content-container/content-container";
import AllBenifits from "../components/home/all-benifits";
import BusinessSection from "../components/home/business-section";
import Input from "../components/input";
import CreatePlan from "../components/create-plan";
import Login from "../components/login";
import MyInput from "../components/ui/my-input";
import { useEffect, useState } from "react";
import MyButton from "../components/ui/my-button";
import Loginpractice from "../components/loginpractice";
import { useRecoilState, useSetRecoilState } from "recoil";
import { currentBlogState } from "../recoil/atoms/test";
import { useRouter } from "next/router";
import CreateStackoverflowCard from "../components/overflowstack";
import Stackoverflowbodycards from "../components/100+stackoverflow";
import Stackoverflowbigcards from "../components/stackoverflowbigcards";


function Home() {

  const initialLabel ="I was clicked";
  const { t } = useTranslation("common");
  const router = useRouter();
  const [inputValues, setInputValues] = useState({});
  const [buttonLabel, setButtonLabel] = useState(initialLabel)
  const [clicked, setClicked] = useState(false)

  const [currentBlog, setCurrentBlog] = useRecoilState(currentBlogState)
  // const  setCurrentBlog  = useSetRecoilState(currentBlogState)


  useEffect(() => {
    setButtonLabel( buttonLabel === initialLabel? "Click me" : initialLabel)

  }, [clicked])



  // const onSubmit = () => {
  //   console.log({inputValues})

  //   let body = {mobile:inputValues.mobile, password:inputValues.password}

  //   apiCall({callback:res => {
  //     console.log("Response fvrom login api---", res)

  //     if(res && res.success){
  //       alert("Logged in successfully!")
  //     }

  //   }, data: body})
  // }


  const saveMyName = () => {

    setCurrentBlog({ ...currentBlog, name: "wasil" })

    router.push("/stackoverflow")





  }

  return (

    // <MainWrapper t={t}>
    //   <Login />
    //   <AllBenifits />
    //   <BusinessSection />
    //   <CreatePlan />
    //   <Loginpractice  logo={"/images/icons/home/airport-icon.png"}/>
    // </MainWrapper>

    <div className="stackoverflow-container">
      <div className="stackoverflow-wrapper content-wrapper">




        {/* <CreateStackoverflowCard dis="agjdfdsjfd" cardbutton={buttonLabel} searchcontent="abc" onClickButton={() => console.log("Hello")} /> */}
        <CreateStackoverflowCard dis="agjdfdsjfd" cardbutton={buttonLabel} searchcontent="abc" onClickButton={() => setClicked(!clicked)} />



        {/* <div className="stackoverflow-card1">
        <div>
        <div><img src="fjkl.png"/></div>
        <div className="card-discription">jdljfldiio</div>
        <div className="card-button">join the community</div>
        <div className="search-content">search content</div>
        </div>
        <div className="overlay-div"></div>
      </div> */}

        {/* <div className="stackoverflow-card1">
        <div>
         <div><img src="fjkl.png"/> </div>
        <div className="card-discription">jdljfldiio</div>
        <div className="card-button">join the community</div>
        <div  className="search-content">search content</div>
        </div>
        <div className="overlay-div"></div>
        </div> */}


        <div className="stackoverflow-message">Every  developer has a
          tab open to Stack Overflow</div>

        <div className="line-separater"></div>
        <Stackoverflowbodycards  />
        {/* <div className="stackoverflow-categories content-wrapper"> */}


        {/* <div className="categories1">
    <div className="div1">100+ million</div>
    <div className="div2">monthly visitors to Stack Overflow & Stack Exchange</div>
  </div>

    
  <div className="categories1">
  <div className="div1">100+ million</div>
    <div className="div2">monthly visitors to Stack Overflow & Stack Exchange</div>
  </div>

    
  <div className="categories1">
  <div className="div1">100+ million</div>
    <div className="div2">monthly visitors to Stack Overflow & Stack Exchange</div>
  </div>

    
  <div className="categories1">
    <div className="div1">100+ million</div>
    <div className="div2">monthly visitors to Stack Overflow & Stack Exchange</div>
  </div> */}

        {/* </div> */}
      </div>
      <div className="overlay-circle "></div>
      <Stackoverflowbigcards />

      {/* <div className="stack-overflow-bigcards content-wrapper">
        <div className="big-card1">
          <div className="bigcard-heading">stack overflow</div>
          <div className="big-card-image"><img src="https://cdn.sstatic.net/Img/home/illo-public.svg?v=14bd5a506009" /></div>
          <div className="big-card-dis1">A public platform building the definitive collection of coding questions & answers
            A community-based space to find and contribu</div>
          <div className="big-card-dis2">A community-based space to find and contribute answers to technical challenges, and one of the most popular websites in the world.</div>
          <div className="big-card-button">join the community</div>
          <div className="big-card-link">search content</div>
        </div>



        <div className="big-card1">
          <div className="bigcard-heading">stack overflow</div>
          <div className="big-card-image"><img src="https://cdn.sstatic.net/Img/home/illo-public.svg?v=14bd5a506009" /></div>
          <div className="big-card-dis1">A public platform building the definitive collection of coding questions & answers
            A community-based space to find and contribu</div>
          <div className="big-card-dis2">A community-based space to find and contribute answers to technical challenges, and one of the most popular websites in the world.</div>
          <div className="big-card-button">join the community</div>
          <div className="big-card-link">search content</div>
        </div>
      </div>

      <div onClick={saveMyName}>Click me</div>
   
    */}
     </div>

  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "es", ["common"])),
  },
});

export default Home;
