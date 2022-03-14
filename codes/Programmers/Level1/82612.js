// https://programmers.co.kr/learn/courses/30/lessons/82612
// 위클리 챌린지 : 부족한 금액 계산하기

// 2차시, 통과 성공
/* 
  [!] 마지막 리턴 조건 잘 생각하기..
    - 놀이기구 "총 이용 예상금액"보다 "가지고 있는 돈"이 더 많으면 0을 리턴하면 됨
      (그게 아니라면, "총 이용 예상금액"을 "가지고 있는 돈"에서 빼면 됨.)
*/
function solution(price, money, count) {
  const initPrice = price;
  const updatePrice = (tmpPrice, currentCnt = 1) => {
    if (currentCnt >= count) return tmpPrice;
    price += initPrice;
    return updatePrice(tmpPrice + price, currentCnt + 1);
  };
  const totalPrice = updatePrice(initPrice); // 여기서 price의 최종값도 업데이트 됨

  return money > totalPrice ? 0 : totalPrice - money;
}

console.log(solution(3, 20, 4)); // 10

// 1차시, 통과 실패
/* 
function solution(price, money, count) {
  const initPrice = price;
  const updatePrice = (tmpPrice, currentCnt = 1) => {
    if (currentCnt >= count) return tmpPrice;
    price += initPrice;
    return updatePrice(tmpPrice + price, currentCnt + 1);
  };
  const totalPrice = updatePrice(initPrice); // 여기서 price의 최종값도 업데이트 됨.
  const remainPrice = (totalPrice % money)

  return price > remainPrice ? remainPrice : 0;
}

console.log(solution(3, 20, 4)); // 10
*/
