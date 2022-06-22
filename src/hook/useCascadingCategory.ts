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

/**
 * @returns [  
 * `currentLevel` 현재 카테고리의 레벨,  
 * `currentKey` 현재 카테고리의 키,  
 * `getChildren` 현재 카테고리 하위의 카테고리를 반환하는 함수,  
 * `chooseChild` 하위 카테고리의 키를 인자로 받아 현재 카테고리로 선택하는 함수, 
 * `chooseRandom` 하위 카테고리 중 하나를 랜덤으로 선택하는 함수  
 * ] 
 */
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
