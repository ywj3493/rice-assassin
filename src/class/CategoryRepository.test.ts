import { CategoryRepository } from "./CategoryRepository"


const repo = new CategoryRepository()
it("init", async () => {
  await repo.init()
})