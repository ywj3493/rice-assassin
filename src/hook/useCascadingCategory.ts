import Category from "../class/Category"

/**
 * 해당 카테고리의 레벨. string 형태로 저장
 */
export const CategoryLevel = {
  THEME: 'theme',
  LARGE_CATEGORY: 'large_category',
  MEDIUM_CATEGORY: 'medium_category',
  SMALL_CATEGORY: 'small_category'
} as const



/**
 * @returns [  
 * `currentLevel` 현재 선택된 카테고리의 레벨,  
 * `currentCategory` 현재 선택된 카테고리 객체 (없으면 null 반환),  
 * `getChildren` 현재 카테고리 하위의 카테고리를 반환하는 함수,  
 * `chooseChild` 하위 카테고리의 키를 인자로 받아 현재 카테고리로 선택하는 함수, 
 * `chooseRandom` 하위 카테고리 중 하나를 랜덤으로 선택하는 함수  
 * ] 
 */
export default function useCascadingCategory(): [
  currentLevel: typeof CategoryLevel[keyof typeof CategoryLevel],
  currentCategory: Category | null,
  getChildren: () => Category[],
  chooseChild: (childKey: string) => void,
  chooseRandom: () => void
] {
  const getChildren: () => Category[] = () => []
  const chooseChild: (childKey: string) => void = () => {}
  const chooseRandom: () => void = () => {}
  return ["theme", null, getChildren, chooseChild, chooseRandom]
}
