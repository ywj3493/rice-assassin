import ChildCategory from "../interface/ChildCategory";
import LargeCategory from "../interface/LargeCategory";
import MediumCategory from "../interface/MediumCategory";
import SmallCategory from "../interface/SmallCategory";
import ThemeCategory from "../interface/ThemeCategory";
import { randomPick } from "../lib/randUtil";

export class CategoryRepository {
  themeList: ThemeCategory[] = [];
  largeCategoryList: LargeCategory[] = [];
  mediumCategoryList: MediumCategory[] = [];
  smallCategoryList: SmallCategory[] = [];

  constructor() {

  }

  async init() {
    const response = await fetch('../data/json/largeCategory.json')
    console.log(response)
    const json = await response.json()
    console.log(json)
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
}