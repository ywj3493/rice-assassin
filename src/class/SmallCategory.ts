import Category from "./Category";

/**
 * 소분류.
 */
export default interface SmallCategory extends Category {
  mediumCategory: string;
  name: string;
}