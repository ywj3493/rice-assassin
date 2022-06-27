import LargeCategory from "../interface/LargeCategory";
import MediumCategory from "../interface/MediumCategory";
import SmallCategory from "../interface/SmallCategory";
import ThemeCategory from "../interface/ThemeCategory";
// json
import themeCategoryList from "../data/json/themeCategory.json";
import largeGategoryList from "../data/json/largeCategory.json";
import mediumCategoryList from "../data/json/mediumCategory.json";
import smallCategoryList from "../data/json/smallCategory.json";
import { randomPick } from "./randUtil";
import ChildCategory from "../interface/ChildCategory";

/**
 * 
 * @returns 전체 주제 리스트
 */
export function getThemeList(): ThemeCategory[] {
  return themeCategoryList
}


/**
 * 
 * @param themeKey 상위 주제의 키
 * @returns 해당 테마를 부모로 가지는 대분류의 리스트. 대분류의 키가 유효하지 않으면 빈 리스트 반환.
 */
export function getLargeCategoryList(themeKey: string): LargeCategory[] {
  return largeGategoryList.filter((item) => item.parentKey === themeKey)
}

/**
 * 
 * @param largetCategoryKey 상위 대분류의 키
 * @returns 해당 대분류를 부모로 가지는 중분류의 리스트. 대분류의 키가 유효하지 않으면 빈 리스트 반환.
 */
export function getMediumCategoryList(largetCategoryKey: string): MediumCategory[] {
  return mediumCategoryList.filter((item) => item.parentKey === largetCategoryKey)
}

/**
 * 
 * @param mediumCategory 상위 중분류의 키
 * @returns 해당 중분류를 부모로 가지는 소분류의 리스트. 중분류의 키가 유효하지 않으면 빈 리스트 반환.
 */
export function getSmallCategoryList(mediumCategory: string): SmallCategory[] {
  return (smallCategoryList as SmallCategory[]).filter((item) => item.parentKey === mediumCategory)
}

/**
 * 
 * @returns 임의의 테마 카테고리를 선택하여 반환.
 */
export function getRandomTheme(): ThemeCategory | null {
  return randomPick(themeCategoryList)
}


/**
 * 
 * @param level 현재 카테고리의 레벨.
 * @param key 상위 카테고리의 키.
 * @returns 키가 `key`인 카테고리의 자식 카테고리 리스트.
 */
export function getCategoryChildren(level: number, key: string): ChildCategory[] {
  switch (level) {
    case 0:
      return getLargeCategoryList(key)
    case 1:
      return getMediumCategoryList(key)
    case 2:
      return getSmallCategoryList(key)
    default:
      return []
  }
}
