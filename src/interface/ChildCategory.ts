import Category from "./Category";

/**
 * Category 인터페이스를 상속하며, parentKey 값을 갖는 자식 카테고리.
 */
export default interface ChildCategory extends Category {
  parentKey: string
}