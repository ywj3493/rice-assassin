import FakeCategoryRepository from "./FakeCategoryRepository"

describe("fake category repository generation", () => {
  it("initallization", () => {
    const repo = new FakeCategoryRepository(0, 0, 0, 0)
    expect(repo).toBeInstanceOf(FakeCategoryRepository)
    expect(repo.themeList).toEqual([])
  })

  it("only one theme", () => {
    const repo = new FakeCategoryRepository(1, 0, 0, 0)
    expect(repo.themeList.length).toBe(1)
    expect(repo.themeList[0]).toHaveProperty("key")
    expect(repo.themeList[0]).toHaveProperty("name")
  })

  it("two themes", () => {
    const repo = new FakeCategoryRepository(2, 0, 0, 0)
    expect(repo.themeList.length).toBe(2)
  })

  it("with subcategory", () => {
    const repo = new FakeCategoryRepository(2, 2, 1, 1)
    expect(repo.themeList.length).toBe(2)
    expect(repo.largeCategoryList.length).toBe(4)
    expect(repo.mediumCategoryList.length).toBe(4)
    expect(repo.smallCategoryList.length).toBe(4)
  })

  it("with many subcategory", () => {
    const repo = new FakeCategoryRepository(10, 10, 10, 10)
    expect(repo.themeList.length).toBe(10)
    expect(repo.largeCategoryList.length).toBe(100)
    expect(repo.mediumCategoryList.length).toBe(1000)
    expect(repo.smallCategoryList.length).toBe(10000)
  })

  it("get theme child", () => {
    const repo = new FakeCategoryRepository(10, 10, 0, 0)
    const parent = repo.getRandomTheme()
    if (parent === null) {
      throw Error()
    }
    const children = repo.getThemeChildren(parent.key)
    expect(repo.largeCategoryList.length).toBe(100)
    expect(children.length).toBe(10)
    expect(children.every((largeCategory) => largeCategory.parentKey === parent.key))
  })
})

