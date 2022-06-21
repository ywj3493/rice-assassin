import Category from "../class/Category"

export default function useCascadingCategory() {
  const getChildren: () => Category[] = () => []
  const chooseChild: (childKey: string) => void = () => {}
  const chooseRandom: () => void = () => {}
  return ["theme", null, getChildren, chooseChild, chooseRandom]
}
