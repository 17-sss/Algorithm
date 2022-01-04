// https://programmers.co.kr/learn/courses/30/lessons/43165
// 메뉴 리뉴얼 (2021 KAKAO BLIND RECRUITMENT)

// (2022.01.04) ---------------------
// 3차시, 보류. (어질하네)
/* 
function createAllMenu(orders) {
  const set = new Set();
  for (let i = 0; i < orders.length; i++) {
    const order = orders[i];
    for (let j = 0; j < order.length; j++) {
      const char = order[j];
      set.add(char);
    }
  }
  return [...set].sort();
}

function createAllCase(allMenu) {
  const set = new Set();
  for (let i = 0; i < allMenu.length; i++) {
    const v1 = allMenu[i];
    for (let j = i + 1; j < allMenu.length; j++) {
      const v2 = allMenu[j];
      set.add(v1 + v2);
    }
  }
  return [...set].sort();
}

function solution(orders, course) {
  const allCase = createAllCase(createAllMenu(orders));
  const map = new Map(allCase.map((v) => [v, 0]));
  orders.forEach((order) => {
    const currCase = createAllCase(order.split(''));
    currCase.forEach((v) => map.has(v) && map.set(v, map.get(v) + 1));
  });

  const result = [...map].filter(([_, value]) => course.includes(value))
  return result;
}

const pipeLog = (...funcs) => funcs.forEach((func) => console.log(func));
pipeLog(
  solution(['ABCFG', 'AC', 'CDE', 'ACDE', 'BCFG', 'ACDEH'], [2, 3, 4]), // ["AC", "ACDE", "BCFG", "CDE"]
  solution(['ABCDE', 'AB', 'CD', 'ADE', 'XYZ', 'XYZ', 'ACD'], [2, 3, 5]), // ["ACD", "AD", "ADE", "CD", "XYZ"]
  solution(['XYZ', 'XWY', 'WXA'], [2, 3, 4]), // ["WX", "XY"]
);
*/

// (2021.05.02) ---------------------

// 2차시, 또 실패. 모든 경우의 수를 찾는 법은?
/*
class Menu {
    createAllCase(orders, course) {
        // 모든 단품 메뉴
        const allMenu = orders
            .map((order) => order.split(''))
            .reduce((arrInit, arrCurr) => {
                arrInit.push(...arrCurr);
                return arrInit;
            }, [])
            .filter((str, idx, thisArr) => thisArr.indexOf(str) === idx)
            .sort();

        // 만들어질수 있는 세트메뉴의 모든 경우의 수를 구함 (모든 수를 다 찾진 못함.) [!!!!!!!!]
        const arrCase = [];
        course.forEach((c) => {
            for (let i = 0; i < allMenu.length; i++) {
                const val1 = allMenu[i];

                for (let j = i + 1; j < allMenu.length; j++) {
                    const val2 = [...Array(c - 1)].reduce((init, _, idx) => {
                        const currValue = allMenu[j + idx];

                        if (!currValue) return init;
                        return init + currValue;
                    }, '');
                    const pushItem = val1 + val2;
                    arrCase.indexOf(pushItem) <= -1 && arrCase.push(pushItem);
                }
            }
        });

        return arrCase;
    }

    createCourseObject(orders, course) {
        const answer = [];
        // 만들어질수 있는 세트메뉴의 모든 경우의 수를 구함
        const allCase = this.createAllCase(orders, course);
        // 만드려는 코스 요리를 담은 객체 초기화
        const courseObj = {};
        course.map((c) => (courseObj[c] = []));

        const arrSplitOrders = orders.map((v) => v.split(''));

        course.forEach((c) => {
            // 현재 코스 요리 길이 값(c) 기반으로 배열 allCase 필터링
            const arrCourseCase = allCase.filter((v) => v.length === c);
            const arrCourseCaseSplit = arrCourseCase.map((v) => v.split(''));

            arrCourseCaseSplit.forEach((courseCase) => {
                let courseCaseCnt = 0;
                arrSplitOrders.forEach((order) => {
                    const count = order.reduce((result, menu) => {
                        courseCase.indexOf(menu) > -1 && result++;
                        return result;
                    }, 0);
                    count === courseCase.length && courseCaseCnt++;
                });

                courseObj[c].push({
                    case: courseCase.join(''),
                    count: courseCaseCnt,
                });
            });
        });

        return courseObj;
    }
}

const solution = (orders, course) => {
    const menu = new Menu();
    const courseObject = menu.createCourseObject(orders, course);
    const result = [];

    course.forEach((c) => {
        const item = courseObject[c]
            .sort((a, b) => b.count - a.count)
            .filter((v, i, thisArr) => thisArr[0].count === v.count)
            .map((v) => v.case);
        result.push(...item);
    });
    return result;
};

solution(['ABCFG', 'AC', 'CDE', 'ACDE', 'BCFG', 'ACDEH'], [2, 3, 4]);
*/
// 1차시, 연구하다가 중단. (내 힘으로 풀 수 있길 바랬다)
/*
// [F] 모든 경우의 수를 계산하는 createAllCase
function createAllCase(orders, course) {
    // 모든 단품 메뉴
    const allMenu = orders
        .map((order) => order.split(''))
        .reduce((arrInit, arrCurr) => {
            arrInit.push(...arrCurr);
            return arrInit;
        }, [])
        .filter((str, idx, thisArr) => thisArr.indexOf(str) === idx)
        .sort();

    // 만들어질수 있는 세트메뉴의 모든 경우의 수를 구함
    const arrCase = [];
    course.forEach((c) => {
        for (let i = 0; i < allMenu.length; i++) {
            const val1 = allMenu[i];
            for (let j = i + 1; j < allMenu.length; j++) {
                const val2 = [...Array(c - 1)].reduce((init, _, idx) => {
                    const currValue = allMenu[j + idx];

                    if (!currValue) return init;
                    return init + currValue;
                }, '');
                const pushItem = val1 + val2;
                arrCase.indexOf(pushItem) <= -1 && arrCase.push(pushItem);
            }
        }
    });

    return arrCase;
}

function solution(orders, course) {
    const answer = [];
    // 만들어질수 있는 세트메뉴의 모든 경우의 수를 구함
    const allCase = createAllCase(orders, course);
    // 만드려는 코스 요리를 담은 객체 초기화
    const courseObj = {};
    course.map((c) => (courseObj[c] = []));
    course.forEach((c) => {
        // 현재 코스 요리 길이 값(c) 기반으로 배열 allCase 필터링
        const arrAllCaseFilter = allCase
            .filter((v) => v.length === c)
            .map((v) => v.split(''));
        //let cnt1 = 0;
        arrAllCaseFilter.forEach((arrCurrCase) => {
            let cnt2 = 0;
            orders.forEach((order) => {
                const arrOrder = order.split('');
                let cnt3 = 0;
                arrCurrCase.forEach(
                    (char) => arrOrder.indexOf(char) > -1 && cnt3++,
                );
                cnt3 && arrCurrCase.length && cnt2++;
                // 여기까지 왔지만 뭔가 이상함. 설명도 불가능.. 망작.. 다시풀기
            });
        });
    });

    return answer;
}
solution(['ABCFG', 'AC', 'CDE', 'ACDE', 'BCFG', 'ACDEH'], [2, 3, 4]); // ["AC", "ACDE", "BCFG", "CDE"]
*/
