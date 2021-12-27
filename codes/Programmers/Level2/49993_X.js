// https://programmers.co.kr/learn/courses/30/lessons/49993
// 스킬트리

// (2021.12.27) ---------------------

// 3차시, 통과 실패 (85.6 / 100)
const isPossibleSkillTree = (arrMain, arrTmp) => {
  let cnt = 0;
  for (let i = 0; i < arrMain.length; i++) {
    const v1 = arrMain[i];
    const v2 = arrTmp[i] ? arrTmp[i] : null;
    if (v1 === v2) cnt++;
  }

  // 주어진 선행스킬들(arrMain)의 값이 arrTmp에도 포함되어있는지 확인
  const arrIntersection = arrMain.filter((v) => arrTmp.includes(v));
  const isContain = !arrIntersection.length || (arrIntersection.length === 1 && arrIntersection[0] === arrMain[0]);

  return cnt > 1 || isContain;
};

function solution(skill, skill_trees) {
  const arrSkill = skill.split('');
  let cnt = 0;

  skill_trees.forEach((skillTree) => {
    const arrSkillTmp = [];
    for (let i = 0; i < skillTree.length; i++) {
      const currSkill = skillTree[i];
      if (arrSkill.includes(currSkill)) arrSkillTmp.push(currSkill);
    }

    const isOk = isPossibleSkillTree(arrSkill, arrSkillTmp);
    if (isOk) cnt++;
  });
  return cnt;
}

const pipeLog = (...funcs) => funcs.forEach((func) => console.log(func));
pipeLog(
  solution('CBD', ['BACDE', 'CBADF', 'AECB', 'BDA']), // 2
  solution('CBD', ['CED']), // 0
  solution('ABC', ['OPQ']), // 1
  solution('CBD', ['BACDE', 'CBADF', 'AECB', 'BDA', 'AQWER']), // 3
  solution('CBD', ['C']), // 1
);

// 2차시, 통과 실패 (50 / 100)
/* 
const isPossibleSkillTree = (arrMain, arrTmp) => {
  let cnt = 0;
  for (let i = 0; i < arrMain.length; i++) {
    const v1 = arrMain[i];
    const v2 = arrTmp[i] ? arrTmp[i] : null;
    if (v1 === v2) cnt++;
  }

  // 주어진 선행스킬들(arrMain)의 값이 arrTmp에도 포함되어있는지 확인
  const arrIntersection = arrMain.filter((v) => arrTmp.includes(v));

  return cnt > 1 || !Boolean(arrIntersection.length);
};

function solution(skill, skill_trees) {
  const arrSkill = skill.split('');
  let cnt = 0;

  skill_trees.forEach((skillTree) => {
    const arrSkillTmp = [];
    for (let i = 0; i < skillTree.length; i++) {
      const currSkill = skillTree[i];
      if (arrSkill.includes(currSkill)) arrSkillTmp.push(currSkill);
    }

    const isOk = isPossibleSkillTree(arrSkill, arrSkillTmp);
    if (isOk) cnt++;
  });
  return cnt;
}
*/

// 1차시, 통과 실패 (28 / 100)
/* 
const isPossibleSkillTree = (arrMain, arrTmp) => {
  let cnt = 0;
  for (let i = 0; i < arrMain.length; i++) {
    const v1 = arrMain[i];
    const v2 = arrTmp[i] ? arrTmp[i] : null;
    if (v1 === v2) cnt++;
  }
  return cnt > 1;
}

function solution(skill, skill_trees) {
  const arrSkill = skill.split('');
  let cnt = 0;

  skill_trees.forEach((skillTree) => {
    const arrSkillTmp = [];
    for (let i = 0; i < skillTree.length; i++) {
      const currSkill = skillTree[i];
      if (arrSkill.includes(currSkill)) arrSkillTmp.push(currSkill);
    }

    const isOk = isPossibleSkillTree(arrSkill, arrSkillTmp);
    if (isOk) cnt++;
  });
  return cnt;
}
*/
