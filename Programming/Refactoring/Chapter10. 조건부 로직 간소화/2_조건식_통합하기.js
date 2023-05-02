/*
  조건식 통합하기

  [배경]
  결과가 같은 조건식을 하나로 통합한다.

  [절차]
  1. 해당 조건식들 모두에 부수효과가 없는지 확인한다.
  2. 조건문 두 개를 선택하여 두 조건문의 조건식들을 논리 연산자로 결합한다.
  3. 하나로 합쳐진 조건식을 함수로 추출할지 고려해본다.
*/

function disabilityAmount(anEmployee) {
  if (anEmployee.seniority < 2) return 0;
  if (anEmployee.monthsDisabled > 12) return 0;
  if (anEmployee.isPartTime) return 0;

  //장애 수단 계산
}

function disabilityAmountRefactor(anEmployee) {
  if (isNotEligibleForDisability()) return 0;

  // 장애 수단 계산

  /** 조건식 함수로 추출 */
  function isNotEligibleForDisability() {
    return anEmployee.seniority < 2 || anEmployee.monthsDisabled > 12 || anEmployee.isPartTime;
  }
}

///////////// and 사용하기 /////////////////
if (anEmployee.onVacation) {
  if (anEmployee.seniority > 10) {
    return 1;
  }
}
return 0.5;

/** 리팩터링 (and 연산자로 결합) */
if (anEmployee.onVacation && anEmployee.seniority > 10) return 1;
return 0.5;
