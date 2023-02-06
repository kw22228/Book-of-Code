// 인사말을 생성합니다. 결과는 보기 좋게 꾸며집니다. (그냥 주석)
function greet(name: string, title: string) {
  return `Hello ${title} ${name}`;
}

/** 인사말을 생성합니다. 결과는 보기 좋게 꾸며집니다. (JSDoc) */
function greetJSDoc(name: string, title: string) {
  return `Hello ${title} ${name}`;
}

/**
 * 인사말을 생성합니다. (TSDoc)
 * @param name 인사할 사람의 이름
 * @param title 그 사람의 칭호
 * @returns 사람이 보기 좋은 형태의 인사말
 */
function greetFullTSDoc(name: string, title: string) {
  return `Hello ${title} ${name}`;
}

greet('John Doe', 'Sir'); // 표기x
greetJSDoc('John Doe', 'Sir'); // 표기o
greetFullTSDoc('John Doe', 'Sir'); // 표기o

//////////////////////////////////////////// 타입 정의 TSdoc
/** 특정 시간과 장소에서 수행된 측정 */
interface Measurement {
  /** 어디에서 측정되었나? */
  position: Vector3D;

  /** 언제 측정되었나? epoch에서부터 초 단위로 */
  time: number;

  /** 측정한 운동량 */
  momentum: Vector3D;
}

/**
 * 이 _interface_는 **세 가지** 속성을 가집니다.
 * 1. x
 * 2. y
 * 3. z
 *
 * - TSDoc는 마크다운 형식으로 꾸며짐
 */
interface Vector3DTSDoc {
  x: number;
  y: number;
  z: number;
}

/*
    - export된 함수, 클래스, 타입에 주석을 달대는 JSDoc/TSDoc 형태를 사용하자.
    - @param, @returns 구문과 문서 서식을 위해 마크다운을 사용할 수 있다.
*/
