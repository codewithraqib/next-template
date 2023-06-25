import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { useTranslation } from "next-i18next";

 function cards(){
    const {t}= useTranslation("common");
 }
 


export const getStaticProps = async ({ locale }) => ({
    props: {
      ...(await serverSideTranslations(locale ?? "es", ["common"])),
    },
  });
  
  export default Home;