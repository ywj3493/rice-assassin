import { faker } from "@faker-js/faker";
import { randomUUID } from "crypto";
import LargeCategory from "../interface/LargeCategory";
import ThemeCategory from "../interface/ThemeCategory";
import MediumCategory from "../interface/MediumCategory";
import SmallCategory from "../interface/SmallCategory";
import Category from "../interface/Category";

// 이 모듈은 개발 모드에서만 사용해야 함

export function makeFakeCategory(): Category {
  return {
    key: randomUUID(),
    name: faker.animal.type()
  }
}

export function makeFakeThemeCategory(): ThemeCategory {
  return makeFakeCategory()
}

export function makeFakeLargeCategory(themeCategory: string): LargeCategory {
  return {
    ...makeFakeCategory(),
    parentKey: themeCategory
  }
}

export function makeFakeMediumCategory(largeCategory: string): MediumCategory {
  return {
    ...makeFakeCategory(),
    parentKey: largeCategory
  }
}

export function makeFakeSmallCategory(mediumCategory: string): SmallCategory {
  return {
    ...makeFakeCategory(),
    parentKey: mediumCategory
  }
}
