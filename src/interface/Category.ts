/**
 * 카테고리성 데이터의 상위 클래스.
 * key: 해당 카테고리의 고유 식별자. 같은 레벨의 카테고리 안에서 유일해야 함.
 */
export default interface Category {
  key: string;
  name: string;
}