import ContentContainer from "../components/ui/content-container/content-container";
import MainWrapper from "../components/ui/wrapper/wrapper";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import styles from "../styles/Home.module.less";
import { useTranslation } from "next-i18next";


function Home() {
  const { t } = useTranslation("common");


  return (
    <MainWrapper t={t}>
      <div className={styles.container}>

        <ContentContainer>

          hello

        </ContentContainer>
      </div>
    </MainWrapper>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "es", ["common"])),
  },
});

export default Home;
