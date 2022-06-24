import { act, renderHook } from "@testing-library/react"
import useCascadingCategory from "./useCascadingCategory"

describe("useCascadingCategory init", () => {
  it("category initialization", () => {
    const {result} = renderHook(() => useCascadingCategory())
    const [currentLevel, currentCategory] = result.current
    expect(currentLevel).toEqual(0)
    expect(currentCategory).toBeNull()
  })

  it("selection", () => {
    const {result} = renderHook(() => useCascadingCategory())
    const [currentLevel, currentCategory, getChildren, chooseChild] = result.current
    const children = getChildren()
    act(() => chooseChild(children[0].key))
    expect(result.current[1]?.key).toEqual(children[0].key)
    expect(result.current[0]).toBe(1)
  })


  it("random selection", () => {
    const {result} = renderHook(() => useCascadingCategory())
    const [currentLevel, currentCategory, getChildren, chooseChild, chooseRandom] = result.current
    const children = getChildren()
    act(() => chooseRandom())
    expect(result.current[0]).toBe(1)
    act(() => result.current[4]())
    expect(result.current[0]).toBe(2)
    act(() => result.current[4]())
    expect(result.current[0]).toBe(3)
  })
})

