import { randomInt } from "crypto"
import { fillUpToLen } from "./randUtil"

describe("randomInt", () => {
  it("randomInt", () => {
    expect(randomInt(0, 1)).toBe(0)
  })

  it("randomInt 3-4", () => {
    expect(randomInt(3, 4)).toBe(3)
  })

  Array.from({length: 30}).forEach(() => {
    it("range iteration", () => {
      expect(randomInt(0, 2)).toBeLessThan(2)
    })
  })
})

describe("fillUpToLen", () => {
  it("number", () => {
    expect(fillUpToLen([0, 1], 2)).toEqual([0, 1])
    expect(fillUpToLen([0], 3)).toEqual([0, 0, 0])
    expect(fillUpToLen([0, 1, 2], 3)).toEqual([0, 1, 2])
  })
   
  it("themeCategory", () => {
    expect(fillUpToLen([{key: 0, name: "0"}, {key: 1, name: "1"}], 2)).toEqual([{key: 0, name: "0"}, {key: 1, name: "1"}])
  })
})
