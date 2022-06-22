import LargeCategory from "../class/LargeCategory";
import MediumCategory from "../class/MediumCategory";
import SmallCategory from "../class/SmallCategory";
import Theme from "../class/Theme";

/**
 * 
 * @returns 전체 주제 리스트
 */
export function getThemeList(): Theme[] {
  return []
}

/**
 * 
 * @param themeKey 상위 주제의 키
 * @returns 해당 테마를 부모로 가지는 대분류의 리스트. 대분류의 키가 유효하지 않으면 빈 리스트 반환.
 */
export function getLargeCategoryList(themeKey: string): LargeCategory[] {
  return []
}

/**
 * 
 * @param largetCategoryKey 상위 대분류의 키
 * @returns 해당 대분류를 부모로 가지는 중분류의 리스트. 대분류의 키가 유효하지 않으면 빈 리스트 반환.
 */
export function getMediumCategoryList(largetCategoryKey: string): MediumCategory[] {
  return []
}

/**
 * 
 * @param mediumCategory 상위 중분류의 키
 * @returns 해당 중분류를 부모로 가지는 소분류의 리스트. 중분류의 키가 유효하지 않으면 빈 리스트 반환.
 */
export function getSmallCategoryList(mediumCategory: string): SmallCategory[] {
  return []
}

