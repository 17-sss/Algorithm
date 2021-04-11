// https://programmers.co.kr/learn/courses/30/lessons/42586
// 기능개발

// 1차시, 통과 성공
function solution(progresses, speeds) {
    let answer = [];
    const arrTemp = [];

    // 먼저 항목 1개당 몇일이 걸리는지 계산하여 arrTemp에 push
    progresses.forEach((progress, i) => {
        const currSpeed = speeds[i];
        let currProgress = progress;

        let day = 0;
        while (currProgress < 100) {
            currProgress += currSpeed;
            day++;
        }

        arrTemp.push(day);
    });

    // arrTemp를 순회하며 현재 값과 다음값을 비교. 같거나 현재값이 크면 completeCnt++ 후
    // 최종 return 값인 answer에 계산된 completeCnt를 push
    for (let i = 0; i < arrTemp.length; i++) {
        const currData = arrTemp[i];
        const nextData = arrTemp[i + 1];
        let completeCnt = 1;

        if (currData >= nextData) {
            let nLoop = i + 2;
            completeCnt++;
            i++;

            while (currData >= arrTemp[nLoop]) {
                completeCnt++;
                i++;
                nLoop++;
            }
        }
        answer.push(completeCnt);
    }

    return answer;
}
