// https://school.programmers.co.kr/learn/courses/30/lessons/133499
// 옹알이 (2)

// 2차시, 통과 성공
function solution(babbling) {
  const POSSIBLE_TEXTS = ['aya', 'ye', 'woo', 'ma'];

  const createDeletedTextInfo = (speak) => {
    const result = [];
    POSSIBLE_TEXTS.forEach((curr) => {
      const idx = speak.indexOf(curr);
      if (idx === -1) {
        return;
      }
      result.push([curr, idx]);
    });
    if (result.length === 0) {
      return;
    }
    return result.sort((a, b) => a[1] - b[1])[0];
  };

  let result = 0;
  for (let i = 0; i < babbling.length; i++) {
    let speak = babbling[i];

    if (POSSIBLE_TEXTS.every((v) => speak.indexOf(v) === -1)) {
      continue;
    }

    const REGEX_OK = /^(\-*)$/;

    while (!REGEX_OK.test(speak)) {
      // 제일 먼저 발음할 옹알이 가져옴
      const deletedTextInfo = createDeletedTextInfo(speak);
      if (!deletedTextInfo) {
        break;
      }
      const [deletedText, startIdx] = deletedTextInfo;
      const nextStartIdx = startIdx + deletedText.length;

      // 같은 옹알이가 이어지는지 체크
      const isDupText = speak.slice(nextStartIdx, nextStartIdx + deletedText.length) === deletedText;
      if (isDupText) {
        break;
      }

      // 지울 때, 공백으로 치환하면 안됨!! ("myea" -> 'm[ye]a' -> [m[ya]a]가 되어 읽을 수 있는 걸로 판단해버림..)
      speak = speak.replace(new RegExp(`${deletedText}`), (v) => ''.padEnd(v.length, '-'));
    }

    if (REGEX_OK.test(speak)) {
      result++;
    }
  }

  return result;
}

const pipeLog = (...funcs) => funcs.forEach((func) => console.log(func));
pipeLog(
  solution(['aya', 'yee', 'u']), // 1
  solution(['ayaye', 'uuu', 'yeye', 'yemawoo', 'ayaayaa']), // 2
  solution(['maayama', 'mama', 'myea']), // 1
);

// 1차시, 통과 실패
/*
function solution(babbling) {
  const createDeletedText = (speak, prevDeletedText = '') => {
    const createPossibleTexts = (prevDeletedText) => {
      const result = ['aya', 'ye', 'woo', 'ma'];
      if (prevDeletedText) {
        return result.filter((v) => prevDeletedText !== v);
      }
      return result;
    };
    const result = [];
    const POSSIBLE_TEXTS = createPossibleTexts(prevDeletedText);
    POSSIBLE_TEXTS.forEach((curr) => {
      const idx = speak.indexOf(curr);
      if (idx === -1) {
        return;
      }
      result.push([curr, idx]);
    });

    return result.sort((a, b) => a[1] - b[1]).map((v) => v[0])[0];
  };
  // ----

  // 제일 빠른 index찾고. 앞에 있는 텍스트 위치는 냅둠 (즉 제거 ㄴㄴ)
  // 지워진 텍스트는 저장.

  let result = 0;
  for (let i = 0; i < babbling.length; i++) {
    let speak = babbling[i];

    let prevDeletedText = '';
    while (speak !== '') {
      const deletedText = createDeletedText(speak, prevDeletedText);
      if (!deletedText) {
        break;
      }
      prevDeletedText = deletedText;
      speak = speak.replace(new RegExp(`${deletedText}`), '');
    }

    if (!speak) {
      result++;
    }
  }

  return result;
}

const pipeLog = (...funcs) => funcs.forEach((func) => console.log(func));
pipeLog(
  solution(['aya', 'yee', 'u']), // 1
  solution(['ayaye', 'uuu', 'yeye', 'yemawoo', 'ayaayaa']), // 2
);
*/
