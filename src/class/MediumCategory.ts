import Category from "./Category";

/**
 * 중분류.
 */
export default interface MediumCategory extends Category{
  largeCategory: string;
  name: string;
}