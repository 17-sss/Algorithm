// https://programmers.co.kr/learn/courses/30/lessons/17683
// 2018 KAKAO BLIND RECRUITMENT : [3차] 방금그곡

// (2021.09.09) ---------------------

// 2차시 (통과실패 / 86.7)
class Music {
  constructor(start, end, name, info) {
    this.start = start;
    this.end = end;
    this.name = name;
    this.info = this.initInfo(info);
    this.playTime = this.initPlayTime();
    this.playInfo = this.initPlayInfo();
    this.playInfoStrings = this.playInfo.reduce((result, info) => (result.push(info.join('')), result), []);
  }

  initInfo(strInfo) {
    const REG_EX = /[CDFGA]\#?|[BE]/g;
    const arrMatch = strInfo.match(REG_EX);

    if (!arrMatch || arrMatch.length <= 0) return [];
    return arrMatch;
  }

  initPlayTime() {
    const { start, end } = this;

    const [startHour, startMin] = start.split(':');
    const [endHour, endMin] = end.split(':');
    const today = new Date();

    const startDate = new Date(today.getFullYear(), today.getMonth(), today.getDay(), startHour, startMin);
    const endDate = new Date(today.getFullYear(), today.getMonth(), today.getDay(), endHour, endMin);

    const playms = endDate.getTime() - startDate.getTime();
    const playMin = playms / 1000 / 60;
    return playMin;
  }

  get flatPlayInfo() {
    if (this.playInfo.length <= 0) return [];
    return this.playInfo.reduce((result, info) => (result.push(...info), result), []);
  }

  initPlayInfo() {
    const { playTime, info } = this;
    if (!playTime || info.length <= 0) return [];
    const infoUnit = info.length;

    const result = [];
    let arrTmp = [];
    for (let i = 0; i < playTime; i++) {
      if (!info[i % infoUnit]) continue;

      arrTmp.push(info[i % infoUnit]);
      if (arrTmp.length === infoUnit) {
        result.push(arrTmp);
        arrTmp = [];
      }
    }
    arrTmp.length > 0 && result.push(arrTmp);

    return result;
  }
}

function solution(m, musicinfos) {
  const createInfo = (strInfo) => {
    const REG_EX = /[CDFGA]\#?|[BE]/g;
    const arrMatch = strInfo.match(REG_EX);

    if (!arrMatch || arrMatch.length <= 0) return [];
    return arrMatch;
  };

  const arrMusicInfo = musicinfos.reduce((result, curr) => {
    const music = new Music(...curr.split(','));
    result.push(music);
    return result;
  }, []);

  const checks = [];
  for (let i = 0; i < arrMusicInfo.length; i++) {
    const music = arrMusicInfo[i];
    if (!music) continue;

    const arrMInfo = createInfo(m);
    const flatPlayInfo = music.flatPlayInfo;

    let bInfoCheck = false;
    if (flatPlayInfo.length >= arrMInfo.length) {
      let nStart = 0;
      let nEnd = arrMInfo.length;
      while (nEnd <= flatPlayInfo.length) {
        const flatSlice = flatPlayInfo.slice(nStart, nEnd);
        const isSame = flatSlice.every((v, idx) => v === arrMInfo[idx]);
        if (isSame) {
          bInfoCheck = true
          break;
        }
        nStart++;
        nEnd++;
      }
    }

    // const bInfoCheck = arrMInfo.length > 0 ? false : true;
    const bInfoStringCheck = music.playInfoStrings.join('').indexOf(m) > -1;

    checks.push(bInfoStringCheck && bInfoCheck);
  }

  // 조건이 일치하는 음악이 여러 개일 때에는 라디오에서 재생된 시간이 제일 긴 음악 제목을 반환한다.
  // 재생된 시간도 같을 경우 먼저 입력된 음악 제목을 반환
  if (checks.length <= 0) return '(None)';

  if (checks.length > 1 && checks.every((v) => v)) {
    let playTimeTmp = Number.MIN_SAFE_INTEGER;
    const findMusic = arrMusicInfo.reduce((result, curr) => {
      if (curr.playTime > playTimeTmp) {
        playTimeTmp = curr.playTime;
        result = curr;
      }
      return result;
    }, null);

    const allSamePlayTime = arrMusicInfo.every(({ playTime }) => arrMusicInfo[0].playTime === playTime);
    if (allSamePlayTime) return arrMusicInfo[0].name;
    return findMusic ? findMusic.name : '(None)';
  } else {
    const findMusic = arrMusicInfo[checks.findIndex((v) => v)];
    return findMusic ? findMusic.name : '(None)';
  }
}

console.log(
  // solution('CCB', ['03:00,03:10,FOO,CCB#CCB', '04:00,04:08,BAR,ABC']), // "FOO"
  // solution('ABC', ['12:00,12:14,HELLO,CDEFGAB', '13:00,13:14,WORLD,ABCDEF']), // "HELLO"
  // solution('ABCDEFG', ['12:00,12:14,HELLO,CDEFGAB', '13:00,13:05,WORLD,ABCDEF']), // "HELLO"
  // solution('CC#BCC#BCC#BCC#B', ['03:00,03:30,FOO,CC#B', '04:00,04:08,BAR,CC#BCC#BCC#B']), // "FOO"
  // solution('ABC', ['12:00,12:14,HELLO,C#DEFGAB', '13:00,13:05,WORLD,ABCDEF']), // "WORLD"
  solution('ABC', ['13:50,14:00,HELLO,C#DEFGAB', '15:00,15:05,WORLD,ABCDEF']), // "WORLD"
);

// 1차시 (통과 실패 / 80점)
/* 
class Music {
  constructor(start, end, name, info) {
    this.start = start;
    this.end = end;
    this.name = name;
    this.info = this.initInfo(info);
    this.playTime = this.initPlayTime();
    this.playInfo = this.initPlayInfo();
  }

  initInfo(strInfo) {
    const REG_EX = /[CDFGA]\#?|[BE]/g;
    const arrMatch = strInfo.match(REG_EX);

    if (!arrMatch || arrMatch.length <= 0) return [];
    return arrMatch;
  }

  initPlayTime() {
    const { start, end } = this;

    const [startHour, startMin] = start.split(':');
    const [endHour, endMin] = end.split(':');
    const today = new Date();

    const startDate = new Date(today.getFullYear(), today.getMonth(), today.getDay(), startHour, startMin);
    const endDate = new Date(today.getFullYear(), today.getMonth(), today.getDay(), endHour, endMin);

    const playms = endDate.getTime() - startDate.getTime();
    const playMin = playms / 1000 / 60;
    return playMin;
  }

  initPlayInfo() {
    const { playTime, info } = this;
    if (!playTime || info.length <= 0) return [];
    const infoUnit = info.length;

    const result = [];
    let arrTmp = [];
    for (let i = 0; i < playTime; i++) {
      if (!info[i % infoUnit]) continue;

      arrTmp.push(info[i % infoUnit]);
      if (arrTmp.length === infoUnit) {
        result.push(arrTmp.join(''));
        arrTmp = [];
      }
    }
    arrTmp.length > 0 && result.push(arrTmp.join(''));

    return result;
  }
}

function solution(m, musicinfos) {
  const arrMusicInfo = musicinfos.reduce((result, curr) => {
    const music = new Music(...curr.split(','));
    result.push(music);
    return result;
  }, []);

  const checks = [];
  for (let i = 0; i < arrMusicInfo.length; i++) {
    const music = arrMusicInfo[i];
    if (!music) continue;
    checks.push(music.playInfo.join('').indexOf(m) > -1);
  }

  if (checks.length > 0) {
    if (checks.length > 1 && checks.every((v) => v)) {
      for (let i = 0; i < arrMusicInfo.length; i++) {
        const music = arrMusicInfo[i];
        if (!music) continue;
        const isOK = music.playInfo.find((v) => v.indexOf(m) > -1);
        if (isOK) return music.name;
      }
    } else {
      const findMusic = arrMusicInfo[checks.findIndex((v) => v)];
      return findMusic ? findMusic.name : '(None)';
    }
  }

  return '(None)';
}
 */
