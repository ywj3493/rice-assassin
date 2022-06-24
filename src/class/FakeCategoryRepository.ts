import Category from "../interface/Category";
import ChildCategory from "../interface/ChildCategory";
import LargeCategory from "../interface/LargeCategory";
import MediumCategory from "../interface/MediumCategory";
import SmallCategory from "../interface/SmallCategory";
import ThemeCategory from "../interface/ThemeCategory";
import { makeFakeLargeCategory, makeFakeMediumCategory, makeFakeSmallCategory, makeFakeThemeCategory } from "../lib/makeFakeCategory";
import { randomPick } from "../lib/randUtil";

// 이 모듈은 개발 모드에서만 사용해야 함

export default class FakeCategoryRepository {
  themeList: ThemeCategory[] = [];
  largeCategoryList: LargeCategory[] = [];
  mediumCategoryList: MediumCategory[] = [];
  smallCategoryList: SmallCategory[] = [];

  constructor(themeLen: number, largeCategoryLen: number, mediumCategoryLen: number, smallCategoryLen: number) {
    Array.from({length: themeLen}).forEach(() => this.themeList.push(makeFakeThemeCategory()));
    this.themeList.forEach((theme) => Array.from({length: largeCategoryLen}).forEach(() => 
      this.largeCategoryList.push(makeFakeLargeCategory(theme.key))
    ))
    this.largeCategoryList.forEach((largeCategory) => Array.from({length: mediumCategoryLen}).forEach(() => 
      this.mediumCategoryList.push(makeFakeMediumCategory(largeCategory.key))
    ))
    this.mediumCategoryList.forEach((mediumCategory) => Array.from({length: smallCategoryLen}).forEach(() => {
      this.smallCategoryList.push(makeFakeSmallCategory(mediumCategory.key))
    }))
  }

  getRandomTheme(): ThemeCategory| null {
    return randomPick(this.themeList)
  }

  getCategoryChildren(level: number, parentKey: string): ChildCategory[] {
    if (level > 3) {
      throw new Error("invalid level")
    }
    const lists: ChildCategory[][] = [[], this.largeCategoryList, this.mediumCategoryList, this.smallCategoryList]
    return lists[level].filter((category) => category.parentKey === parentKey)
  }

  getThemeChildren(themeCategoryKey: string): LargeCategory[] {
    return this.largeCategoryList.filter((largeCategory) => largeCategory.parentKey === themeCategoryKey)
  }

  getLargeCategoryChildren(largeCategoryKey: string): MediumCategory[] {
    return this.mediumCategoryList.filter((mediumCategory) => mediumCategory.parentKey === largeCategoryKey)
  }

  getMediumCategoryChildren(mediumCategoryKey: string): SmallCategory[] {
    return this.smallCategoryList.filter((smallCategory) => smallCategory.parentKey === mediumCategoryKey)
  }
}