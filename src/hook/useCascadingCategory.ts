import Category from "../class/Category"

/**
 * 해당 카테고리의 레벨. string 형태로 저장
 */
export enum CategoryLevel {
  THEME = 'theme',
  LARGE_CATEGORY = 'large_category',
  MEDIUM_CATEGORY = 'medium_category',
  SMALL_CATEGORY = 'small_category'
}


export default function useCascadingCategory(): [
  currentLevel: CategoryLevel,
  currentKey: Category| null,
  getChildren: () => Category[],
  chooseChild: (childKey: string) => void,
  chooseRandom: () => void
] {
  const getChildren: () => Category[] = () => []
  const chooseChild: (childKey: string) => void = () => {}
  const chooseRandom: () => void = () => {}
  return [CategoryLevel.THEME, null, getChildren, chooseChild, chooseRandom]
}

useCascadingCategory()