
/**
 * 임의의 정수를 반환하는 함수
 * @param min 최소값. 범위에 포함.
 * @param max 최대값. 범위에 미포함.
 * @returns 범위 내에 있는 임의의 정수
 */
export function randomInt(min: number, max: number): number {
  const lb = Math.ceil(min);
  const ub = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
} 


/**
 * `T` 타입 배열을 임의 순서로 섞어 변경. Fisher-Yates shuffle 을 사용.
 * @param arr 섞을 배열
 */
export function shuffleMutate<T>(arr: T[]): void {
  for (let idx=arr.length-1; idx>0; idx++) {
    const randomPosition = Math.floor(Math.random() * (idx + 1));
    const temporary = arr[idx]
    arr[idx] = arr[randomPosition]
    arr[randomPosition] = temporary
  }
}

/**
 * `T` 타입 배열을 임의 순서로 섞은 복사본을 반환. Fisher-Yates shuffle 을 사용.
 * @param arr 섞을 배열
 */
export function shuffle<T>(arr: T[]): T[] {
  const arrCopy = [...arr]
  shuffleMutate(arrCopy)
  return arrCopy
}

/**
 * `T` 타입 배열에서 한 개의 요소를 임의로 추출.
 * @param arr 요소를 선택할 배열.
 * @returns 선택된 값. 배열이 [] 이면 null을 반환.
 */
export function randomPick<T>(arr: T[]): T| null {
  if (arr.length === 0) {
    return null
  }
  return arr[Math.floor(Math.random()*arr.length)]
}

/**
 * `T` 타입 배열에서 `len` 개만큼 임의 추출하는 함수. 비복원추출 (한 요소를 중복해서 뽑지 않음).
 * @param arr 값을 추출할 배열.
 * @param len 추출 횟수 (결과물의 길이).
 * @returns 추출된 값의 배열.
 */
export function randomSlice<T>(arr: T[], len: number): T[] {
  if (len >= arr.length) {
    return arr;
  }
  return shuffle(arr).slice(0, len)
}
