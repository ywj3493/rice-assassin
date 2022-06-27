import { act, renderHook } from "@testing-library/react"
import useCascadingCategory, {CategoryLevel, useMockCascadingCategory} from "./useCascadingCategory"

describe("useMockCascadingCategory", () => {
  it("category initialization", () => {
    const {result} = renderHook(() => useMockCascadingCategory())
    const [currentLevel, currentCategory] = result.current
    expect(currentLevel).toEqual(CategoryLevel.NOTHING)
    expect(currentCategory).toBeNull()
  })

  it("selection", () => {
    const {result} = renderHook(() => useMockCascadingCategory())
    const [currentLevel, currentCategory, getChildren, chooseChild] = result.current
    const children = getChildren()
    act(() => chooseChild(children[0].key))
    expect(result.current[1]?.key).toEqual(children[0].key)
    expect(result.current[0]).toBe(1)
  })

  it("random selection", () => {
    const {result} = renderHook(() => useMockCascadingCategory())
    const [currentLevel, currentCategory, getChildren, chooseChild, chooseRandom] = result.current
    const children = getChildren()
    act(() => chooseRandom())
    expect(result.current[0]).toBe(CategoryLevel.THEME)
    act(() => result.current[4]())
    expect(result.current[0]).toBe(CategoryLevel.LARGE_CATEGORY)
    act(() => result.current[4]())
    expect(result.current[0]).toBe(CategoryLevel.MEDIUM_CATEGORY)
  })
})

describe("useCascadingCategory", () => {
  it("initialization", () => {
    const {result} = renderHook(() => useCascadingCategory())
    const [currentLevel, currentCategory, getChildren, chooseChild, chooseRandom] = result.current
    expect(currentLevel).toEqual(CategoryLevel.NOTHING)
    expect(currentCategory).toBeNull()
  })

  it("theme read", () => {
    const {result} = renderHook(() => useCascadingCategory())
    const [currentLevel, currentCategory, getChildren, chooseChild, chooseRandom] = result.current
    const child = getChildren()[0]
    act(() => chooseChild(child.key))
    expect(result.current[0]).toBe(CategoryLevel.THEME)
    expect(result.current[1]?.key).toEqual(child.key)
  })
})


