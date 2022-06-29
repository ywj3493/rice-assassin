import { faker } from "@faker-js/faker"
import { randomUUID } from "crypto"
import { makeFakeLargeCategory, makeFakeThemeCategory } from "./makeFakeCategory"

describe("fake theme test", () => {
  beforeAll(() => {
    faker.setLocale("ko")
  })
  it("single instance generation", () => {
    const theme = makeFakeThemeCategory()
    expect(theme).toHaveProperty("key")
    expect(theme).toHaveProperty("name")
  })
  it("locale is korean", () => {
    expect(faker.locale).toEqual("ko")
  })
})

describe("fake largeCategory test", () => {
  it("single instance", () => {
    const themeid = randomUUID()
    const largeCategory = makeFakeLargeCategory(themeid)
    expect(largeCategory).toHaveProperty("key")
    expect(largeCategory).toHaveProperty("name")
    expect(largeCategory.parentKey).toEqual(themeid)
  })
})
