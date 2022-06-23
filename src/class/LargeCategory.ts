import Category from "./Category";

/**
 * 대분류.
 */
export default interface LargeCategory extends Category {
  theme: string;
  name: string;
}