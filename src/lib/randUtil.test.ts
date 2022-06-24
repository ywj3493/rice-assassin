import { randomInt } from "crypto"

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


