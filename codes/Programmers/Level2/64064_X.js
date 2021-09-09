// https://programmers.co.kr/learn/courses/30/lessons/64064
// 2019 카카오 개발자 겨울 인턴십 : 불량 사용자

// 2차시, 개노답
function solution(user_id, banned_id) {
  // [1] banned_id를 기준으로 해당 하는 아이디들 가져오고..
  const tmpUsers = banned_id.reduce((result, strBanId) => {
    const filterUsers = user_id.filter((strUserId) => {
      if (strBanId.length !== strUserId.length) return false;

      let bCondition = true;
      for (let i = 0; i < strBanId.length; i++) {
        const currChar = strBanId[i];
        if (currChar === '*') continue;
        else if (currChar !== strUserId[i]) {
          bCondition = false;
          break;
        }
      }
      return bCondition;
    });
    result.push(filterUsers);
    return result;
  }, []);

  // [2] 모든 순열을 만들어주는 DFS
  const answer = [];
  const selCnt = tmpUsers.length;
  const tmp = [];

  const tmpList = tmpUsers.reduce((resultArr, arr) => {
    arr.forEach((id) => resultArr.includes(id) || resultArr.push(id));
    return resultArr;
  }, []);

  const checks = Array.from({ length: tmpList.length }, () => -1);
  function DFS(L) {
    if (L === selCnt) {
      const currTmp = [...tmp].sort();

      let isDup = false;
      for (let i = 0; i < answer.length; i++) {
        const answerArrItem = answer[i].sort();
        isDup = answerArrItem.every((v) => currTmp.includes(v));
        if (isDup) break;
      }

      return isDup || answer.push(currTmp);
    }
    for (let idx = 0; idx < tmpList.length; idx++) {
      if (checks[idx] !== -1) continue;
      checks[idx] = 0;
      tmp[L] = tmpList[idx];
      DFS(L + 1);
      checks[idx] = -1;
    }
  }
  DFS(0);

  return answer;
}

const userList = ['frodo', 'fradi', 'crodo', 'abc123', 'frodoc'];
console.log(
  solution(userList, ['fr*d*', 'abc1**']),
  //   solution(userList, ['*rodo', '*rodo', '******']),
  //   solution(userList, ['fr*d*', '*rodo', '******', '******']),
);

// 1차시, 모르겠다.. ㅠ
/* 
function solution(user_id, banned_id) {
  // [1] banned_id를 기준으로 해당 하는 아이디들 가져오고..
  const tmpUsers = banned_id.reduce((result, strBanId) => {
    const filterUsers = user_id.filter((strUserId) => {
      if (strBanId.length !== strUserId.length) return false;

      let bCondition = true;
      for (let i = 0; i < strBanId.length; i++) {
        const currChar = strBanId[i];
        if (currChar === '*') continue;
        else if (currChar !== strUserId[i]) {
          bCondition = false;
          break;
        }
      }
      return bCondition;
    });
    result.push(filterUsers);
    return result;
  }, []);

  // [2] 모든 조합을 만들어주는 DFS 선언 (내부적으로 answer, tmpUsers 활용)
  const answer = [];
  function DFS(L, combiArr) {
    if (L >= tmpUsers.length) return answer.push([...combiArr]);

    tmpUsers[L].forEach((id) => {
      combiArr.includes(id) || combiArr.push(id);
      DFS(L + 1, combiArr);
    });
  }

  DFS(0, []); // 이 함수에서 answer 수정
  return answer;
}

*/
