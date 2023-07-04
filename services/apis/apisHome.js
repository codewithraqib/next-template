import {
  BANNERS,
  BRANDS,
  CATEGORIES,
  CATEGORY_PRODUCTS,
  EVENTS,
  LATEST_PRODUCTS,
  PRODUCTS_FROM_CATEGORY,
  WISHLIST,
} from "../constants/apiEndPointsHome";

import { GetApi } from "./crudApis";

export const LatestProducts = () => GetApi(LATEST_PRODUCTS);
export const ProductsOfCategory = (category_id) =>
  GetApi(CATEGORY_PRODUCTS + category_id);
export const Categories = () => GetApi(CATEGORIES);
export const Brands = () => GetApi(BRANDS);
export const Banners = () => GetApi(BANNERS);
export const GetEvents = () => GetApi(EVENTS)
