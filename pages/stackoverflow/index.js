import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRecoilState, useRecoilValue } from "recoil";
import { currentBlogState } from "../../recoil/atoms/test";


function Home() {
  const { t } = useTranslation("common");


  // const [currentBlog, setCurrentBlog] = useRecoilState(currentBlogState);
  const currentBlog = useRecoilValue(currentBlogState);

  console.log({currentBlog})
  

  return (
   <div className="stackoverflow-container">
    <div>i am someone who cares abot state manag {currentBlog?.name}</div>
    <div className="some-name">i am someone who dont care about your state manang</div>
   </div>
  );
  
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "es", ["common"])),
  },
});

export default Home;
