import { Banners, Categories, LatestProducts } from "../services/apis/apisHome";
import { categoryListState, productListState } from "../recoil/atoms/home";
import { useEffect, useState } from "react";

import Brands from "../components/home/brands";
import CategorySlider from "../components/ui/category-slider-list";
import ContentContainer from "../components/ui/content-container/content-container";
import DemoCarousel from "../components/ui/image-slider/index";
import ExploreProducts from "../components/home/explore-products";
import FamilyOffers from "../components/home/family-offers";
import Head from "next/head";
import Image from "next/image";
import MainWrapper from "../components/ui/wrapper/wrapper";
import ProductList from "../components/home/product-list";
import QuickLaunch from "../components/ui/quick-launch";
import TopDealsSlider from "../components/ui/top-deals-slider";
import classes from "./index.module.less";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import styles from "../styles/Home.module.less";
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

const initSlides = [
  "/images/slides/slide1.jpg",
  "/images/slides/slide2.jpg",
  "/images/slides/slide3.jpg",
];

function Home() {
  const router = useRouter();
  const { t } = useTranslation("common");

  //API CALLS
  const latestProductsFunc = LatestProducts();
  const getCategories = Categories();
  // const getBrands = Brands();
  const getBanners = Banners();

  //local states
  const [slides, setSlides] = useState(initSlides);
  const [brands, setBrands] = useState(null);

  //recoil states
  const [categories, setCategories] = useRecoilState(categoryListState);
  const [products, setProducts] = useRecoilState(productListState);
  useEffect(() => {
    getLatestProducts();
  }, []);

  const getLatestProducts = () => {
    let data = { vendor_id: 0, category_id: 0, limit: 10, offset: 1 };
    latestProductsFunc({
      callback: (res) => {
        if (res && res?.data && res.data?.products) {
          console.log("response from latest products---", res);
          setProducts(res.data.products);
        }
      },
      urlParams: data,
    });
  };

  useEffect(() => {
    // Banners({});
    getBanners({
      callback: (res) => {
        console.log("BANNERS ARE---", res);
      },
    });
  }, []);

  return (
    <MainWrapper t={t}>
      <div className={styles.container}>
        <Head>
          <title>E-Commerce</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossOrigin="anonymous"
          />
        </Head>
        {/* <DemoCarousel
        autoPlay={true}
        infiniteLoop={true}
        slideWidth={1200}
        slideHeight={400}
        slides={slides}
      /> */}

        <ContentContainer>
          {/* <div className={classes.hero_container}>
            <Image
              src="/images/home/wallpaper/hero.webp"
              alt="hero image"
              width={2000}
              height={400}
            />
          </div> */}
          <ExploreProducts />
          <QuickLaunch />
          <CategorySlider />
          <TopDealsSlider />
          <FamilyOffers />
          <Brands />
          {products?.length ? <ProductList list={products} /> : null}
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