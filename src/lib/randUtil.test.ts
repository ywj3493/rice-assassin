import { randomInt } from "crypto"
import { fillUpToLen, randomPick, randomSlice, randomString, shuffle, shuffleMutate } from "./randUtil"

describe("randomInt", () => {
  it("randomInt", () => {
    expect(randomInt(0, 1)).toBe(0)
  }, 100)

  it("randomInt 3-4", () => {
    expect(randomInt(3, 4)).toBe(3)
  }, 100)

  it("range iteration", () => {
      expect(randomInt(0, 2)).toBeLessThan(2)
  }, 100)
})

describe("randomString", () => {
  it("init", () => {
    const str = randomString()
    expect(str.length).toBeGreaterThanOrEqual(5)
  }, 100)
})

describe("shuffleMutate", () => {
  it("shuffleMutate", () => {
    const arr = [1, 2, 3, 4, 5]
    shuffleMutate(arr)
    expect(arr).toBeInstanceOf(Array)
    expect(arr.length).toBe(arr.length)
  }, 100)
})

describe("shuffle", () => {
  it("shuffle", () => {
    const arr = [1, 2, 3, 4, 5]
    const shuffled = shuffle(arr)
    expect(shuffled).toBeInstanceOf(Array)
    expect(shuffled.length).toBe(arr.length)
  }, 100)
})

describe("randomPick", () => {
  it("zero length", () => {
    const arr: number[] = []
    const picked = randomPick(arr)
    expect(picked).toBeNull()
  })

  it("one length", () => {
    const arr: number[] = [1]
    const picked = randomPick(arr)
    expect(picked).toBe(1)
  })
})

describe("randomSlice", () => {
  it("zero length array", () => {
    const arr: number[] = []
    const picked = randomSlice(arr, 0)
    expect(picked).toBeInstanceOf(Array)
    expect(picked.length).toBe(0)
  }, 100)

  it("one length array", () => {
    const arr: number[] = [1]
    const picked = randomSlice(arr, 1)
    expect(picked).toBeInstanceOf(Array)
    expect(picked.length).toBe(1)
  }, 100)

  it("slice to one", () => {
    const arr: number[] = [1, 2, 3, 4, 5]
    const picked = randomSlice(arr, 1)
    expect(picked).toBeInstanceOf(Array)
    expect(picked.length).toBe(1)
  })
})

describe("fillUpToLen", () => {
  it ("one length", () => {
    expect(fillUpToLen([0], 3)).toEqual([0, 0, 0])
  }, 100)

  it ("two length", () => {
    expect(fillUpToLen([0, 1], 2)).toEqual([0, 1])
  }, 100)

  it("three length", () => {
    expect(fillUpToLen([0, 1, 2], 3)).toEqual([0, 1, 2])
  })
   
  it("themeCategory", () => {
    expect(fillUpToLen([{key: 0, name: "0"}, {key: 1, name: "1"}], 2)).toEqual([{key: 0, name: "0"}, {key: 1, name: "1"}])
  })
})
