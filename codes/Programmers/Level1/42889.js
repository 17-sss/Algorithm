// https://programmers.co.kr/learn/courses/30/lessons/42889
// 카카오 2019 코딩테스트 - 실패율

// 1차시, 통과 성공 (2021.04.22) ---------------------
function solution(N, stages) {
    const answer = [];
    /* 
        [1]   1 / 8 = 0.125
        [2]   3 / 7 = 0.428...
        [3]   2 / 4 = 0.5
        [4]   1 / 2 = 0.5
        [5]   0 / 1 = 0
    */
    [...Array(N)].forEach((_, idx) => {
        const currStagesCnt = stages.length;
        const notClearCnt = stages.filter((v) => v === idx + 1).length;
        stages = stages.filter((v) => v > idx + 1);

        const failureRate = notClearCnt / currStagesCnt;
        answer.push([idx + 1, failureRate]);
    });

    return answer.sort((a, b) => b[1] - a[1]).map((v) => v[0]);
}

solution(5, [2, 1, 2, 6, 2, 4, 3, 3]); // [3, 4, 2, 1, 5]
solution(4, [4, 4, 4, 4, 4]);          // [4, 1, 2, 3]


// 1차시, 통과 성공 (2021.02.03) ---------------------
/*
const { log } = console;


function solution(N, stages) {
    const tmp = [];
    for(let i = 0; i < N; i++){
        const notClear = stages.filter((v) => (v === i+1)).length;
        const okChallengerCnt = stages.filter((v) => v >= i+1).length;
        log(notClear, okChallengerCnt)
        tmp.push((notClear / okChallengerCnt));              
    }
    
    const arrResult = tmp.map((v, i) => [i+1, v]).sort((a, b) => b[1] - a[1]).map((v) => v[0]);    
    return arrResult;
}
*/

/*
    ** 메모 **
        - N이 지금까지 만들어진 스테이지 수였고, Stages는 총 도전자수 & 각 도전자의 현재 스테이지 위치 였음.
        
        - 각 스테이지별 도전하고 넘어갔거나 지금 도전하고있는 도전자수를 구하려면, 
            그 스테이지에 머물러있는 도전자나 그 스테이지를 깬 사람의 수를 구하면 됨.

        - 만약 Stages에서 N을 넘어가는 값이 있을 경우, 그 값은 지금까지 만들어진 스테이지를 다 깬거임.        
        
        ---------------
        이렇게 수를 구할때 filter를 적극 활용하자! 
        노가다하다가 시간 다갔다..
        그리고 객체 관련이랑 배열 함수에 대해 좀 더 연습해야할듯.

        ** 아직도 문제에 대해 이해가 안가지만, 더 봐보기 ** 
*/

/*
// 연구용 1
const { log } = console;

function solution(N, stages) {
    const answer = [];    
    const arrStageSort = stages.sort((a, b) => a-b);
    const arrStageCnt = arrStageSort.reduce((accu, curr) => { 
        accu[curr] = (accu[curr] || 0) + 1; 
        return accu;
    }, {});
    
    const arrTrash = [];
    const arrCnt = arrStageSort.reduce((arr, currValue, currIndex) => {    
        if (arrTrash.indexOf(currValue) > -1) return arr;
        arrTrash.push(currValue);
        
        let cnt = 1;
        arrStageSort.forEach((v, i) => {
            if(currIndex === i) return;
            if (currValue <= v) cnt++;            
        });        

        arr && arr.push(cnt);
        return arr;
    }, []);
    
    const arrResult = arrStageSort.reduce((accu, curr) => { 
        
        
    }, []);
    
    
    return answer;
}
*/
