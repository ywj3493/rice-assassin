import { getCategoryChildren, getLargeCategoryList, getMediumCategoryList, getSmallCategoryList, getThemeList } from "./categoryGetters"

describe("list getter test", () => {
  it("getThemeList", () => {
    const themeList = getThemeList()
    expect(themeList).toBeInstanceOf(Array)
    expect(themeList.length).toBeGreaterThanOrEqual(1)
    expect(themeList[0]).toHaveProperty("key")
    expect(themeList[0]).toHaveProperty("name")
  })
  
  it("getLargeCategoryList", () => {
    const themeList = getThemeList()
    const largeCategory = getLargeCategoryList(themeList[0].key)
    expect(largeCategory).toBeInstanceOf(Array)
    expect(largeCategory.length).toBeGreaterThanOrEqual(1)
    expect(largeCategory[0]).toHaveProperty("key")
    expect(largeCategory[0]).toHaveProperty("name")
  })
  
  it("getMediumCategoryList", () => {
    const themeList = getThemeList()
    const largeCategory = getLargeCategoryList(themeList[0].key)
    const mediumCategory = getMediumCategoryList(largeCategory[0].key)
    expect(mediumCategory).toBeInstanceOf(Array)
    expect(mediumCategory.length).toBeGreaterThanOrEqual(1)
    expect(mediumCategory[0]).toHaveProperty("key")
    expect(mediumCategory[0]).toHaveProperty("name")
    expect(mediumCategory[0].parentKey).toBe(largeCategory[0].key)
  })
  
  it.skip("getSmallCategoryList", () => {
    const themeList = getThemeList()
    const largeCategory = getLargeCategoryList(themeList[0].key)
    const mediumCategory = getMediumCategoryList(largeCategory[0].key)
    const smallCategory = getSmallCategoryList(mediumCategory[0].key)
    expect(smallCategory).toBeInstanceOf(Array)
    expect(smallCategory.length).toBeGreaterThanOrEqual(1)
    expect(smallCategory[0]).toHaveProperty("key")
    expect(smallCategory[0]).toHaveProperty("name")
    expect(smallCategory[0].parentKey).toBe(mediumCategory[0].key)
  })

  it("getCategoryChildren level 0", () => {
    const themeList = getThemeList()
    const firstChild = getCategoryChildren(0, themeList[0].key)
    expect(firstChild).toBeInstanceOf(Array)
    expect(firstChild.length).toBeGreaterThanOrEqual(1)
    expect(firstChild[0].parentKey).toBe(themeList[0].key)
  })

  it("getCategoryChildren level 1", () => {
    const themeList = getThemeList()
    const firstChild = getCategoryChildren(0, themeList[0].key)
    const secondChild = getCategoryChildren(1, firstChild[0].key)
    expect(secondChild).toBeInstanceOf(Array)
    expect(secondChild.length).toBeGreaterThanOrEqual(1)
    expect(secondChild[0].parentKey).toBe(firstChild[0].key)
  })
})