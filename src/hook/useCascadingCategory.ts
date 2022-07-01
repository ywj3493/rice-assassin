import { useRef, useState } from "react";
import FakeCategoryRepository from "../class/FakeCategoryRepository";
import Category from "../interface/Category";
import { getCategoryChildren, getThemeList } from "../lib/categoryGetters";
import { randomPick } from "../lib/randUtil";

/**
 * 해당 카테고리의 레벨. number 형태로 저장
 */
export const CategoryLevel = {
  NOTHING: 0,
  THEME: 1,
  LARGE_CATEGORY: 2,
  MEDIUM_CATEGORY: 3,
  SMALL_CATEGORY: 4,
} as const;

export type CategoryLevelType =
  typeof CategoryLevel[keyof typeof CategoryLevel];

function levelIntToOut(levelInt: number): CategoryLevelType {
  switch (levelInt) {
    case 0:
      return CategoryLevel.NOTHING;
    case 1:
      return CategoryLevel.THEME;
    case 2:
      return CategoryLevel.LARGE_CATEGORY;
    case 3:
      return CategoryLevel.MEDIUM_CATEGORY;
    case 4:
      return CategoryLevel.SMALL_CATEGORY;
    default:
      return CategoryLevel.NOTHING;
  }
}

/**
 * `useCascadingCategory` 의 목업 버전. 실제 데이터를 사용하지 않고 `faker` 모듈에서 생성된 가짜 데이터 사용.
 * `useCascadingCategory` 가 문제를 일으킬 때 이 함수로 대체하여 테스트 가능.
 * @returns [
 * `currentLevel` 현재 선택된 카테고리의 레벨,
 * `currentCategory` 현재 선택된 카테고리 객체 (없으면 null 반환),
 * `getChildren` 현재 카테고리 하위의 카테고리를 반환하는 함수,
 * `chooseChild` 하위 카테고리의 키를 인자로 받아 현재 카테고리로 선택하는 함수,
 * `chooseRandom` 하위 카테고리 중 하나를 랜덤으로 선택하는 함수
 * ]
 */
export function useMockCascadingCategory(): [
  currentLevel: CategoryLevelType,
  currentCategory: Category | null,
  getChildren: () => Category[],
  chooseChild: (childKey: string) => void,
  chooseRandom: () => void
] {
  const repo = useRef(new FakeCategoryRepository(4, 8, 8, 8));
  const [levelInt, setLevelInt] = useState(0);
  const [currentCategory, setCurrentCategory] = useState<Category | null>(null);
  const getChildren = () => {
    if (levelInt === 4) {
      return [];
    }
    if (currentCategory === null) {
      return repo.current.themeList;
    }
    return repo.current.getCategoryChildren(levelInt, currentCategory.key);
  };
  const chooseChild = (childKey: string) => {
    const children = getChildren();
    const choice = children.find((category) => category.key === childKey);
    if (choice === undefined) {
      return;
    }
    setCurrentCategory(choice);
    setLevelInt(levelInt + 1);
  };
  const chooseRandom = () => {
    const children = getChildren();
    if (children.length === 0) {
      return;
    }
    const choice = randomPick(children);
    setCurrentCategory(choice);
    setLevelInt(levelInt + 1);
  };
  return [
    levelIntToOut(levelInt),
    currentCategory,
    getChildren,
    chooseChild,
    chooseRandom,
  ];
}

/**
 * 테마 카테고리부터 시작해서 하위 카테고리를 순차 선택하는 서비스를 위한 훅.
 * @returns [
 * `currentLevel` 현재 선택된 카테고리의 레벨,
 * `currentCategory` 현재 선택된 카테고리 객체 (없으면 null 반환),
 * `getChildren` 현재 카테고리 하위의 카테고리를 반환하는 함수,
 * `chooseChild` 하위 카테고리의 키를 인자로 받아 현재 카테고리로 선택하는 함수,
 * `chooseRandom` 하위 카테고리 중 하나를 랜덤으로 선택하는 함수
 * ]
 */
export default function useCascadingCategory(): [
  currentLevel: CategoryLevelType,
  currentCategory: Category | null,
  getChildren: () => Category[],
  chooseChild: (childKey: string | null) => void,
  chooseRandom: () => void
] {
  const [levelInt, setLevelInt] = useState(0);
  const [currentCategory, setCurrentCategory] = useState<Category | null>(null);
  const getChildren = () => {
    if (levelInt === 4) {
      return [];
    }
    if (currentCategory === null) {
      return getThemeList();
    }
    return getCategoryChildren(levelInt, currentCategory.key);
  };
  const chooseChild = (childKey: string | null) => {
    const children = getChildren();
    const choice = children.find((category) => category.key === childKey);
    if (choice === undefined) {
      return;
    }
    setCurrentCategory(choice);
    setLevelInt(levelInt + 1);
  };
  const chooseRandom = () => {
    const children = getChildren();
    if (children.length === 0) {
      return;
    }
    const choice = randomPick(children);
    setCurrentCategory(choice);
    setLevelInt(levelInt + 1);
  };
  return [
    levelIntToOut(levelInt),
    currentCategory,
    getChildren,
    chooseChild,
    chooseRandom,
  ];
}
