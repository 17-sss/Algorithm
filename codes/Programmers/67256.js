// https://programmers.co.kr/learn/courses/30/lessons/67256
// 카카오 인턴 - 키패드 누르기
/* 
    [1] 내 풀이 메모
        1. 풀면서 생각한 것들
            1) 세로로 분류해서 시도했었는데 실패..
                - 가운데 부분 어떤 손이 누르는지 로직만들 때
                    왼손 (1, 4, 7, *) 가운데 (2, 5, 8, 0) 오른손 (3, 6, 9, #)
                    이렇게 분류해서 각 손의 위치의 indexOf 값과 가운데의 indexOf를 
                    마이너스 후 절대값을 구하는 식으로 했는데.. 
                        (ex. 왼Loc - 가운데 / 오Loc - 가운데)
                    이렇게하면 좌우의 거리값은 제대로 잴 수 있을진 몰라도
                    상하 + 대각의 거리 값은... 노답 ㅠ    
            2) 그래서 좌표를 만들어봄   (각 손의 위치를 가져온 뒤..)                
                - 1차 시도 (실패)
                    [절대값1] 손의 위치의 좌표(x) - 좌표(y)
                    [절대값2] 현재 누르려는 번호의 좌표(x) - 좌표(y)
                    [절대값 1-2] 해주면서 나온 값을 결과 값을 해줬는데 이상한 값이?
                - 2차 시도
                    [절대값1] 손의 위치의 좌표(x) - 현재 누르려는 번호의 좌표(x)
                    [절대값2] 손의 위치의 좌표(y) - 현재 누르려는 번호의 좌표(y)
                    [절대값 1+2] 해줬더니 현재 누르려는 번호와 손의 위치의 거리가 잘 나옴.                    
        2. 풀이
            1) 각 손이 누를 수 있는 범위를 처리해준다.
            2) 가운데 (2580)의 경우 왼손 위치, 오른손 위치 중 가운데와 
                더 가까운 손을 구하기 위해 좌표를 만들어준다.
                그 후 계산! (1. 풀면서 생각한 것들 참고)
            3) numbers를 forEach를 돌며 결과값을 위한 배열에 'L' or 'R'을 넣어준다!
            4) 마지막은 join!
    [2] 기억해두기!!
        1. 이런 문제 나올땐.. 먼저 좌표 구하고
            두 값의 x끼리, y끼리 뺀 뒤 더하면 원하는 값 나옴!
*/


const { log } = console;

// 2차시, 통과 성공
function solution(numbers, hand) {

    const getDistence = (prevValue, currValue) => {
        const coordinate = {
            1: [0, 0], 2: [0, 1], 3: [0, 2],
            4: [1, 0], 5: [1, 1], 6: [1, 2],
            7: [2, 0], 8: [2, 1], 9: [2, 2],
            '*': [3, 0], 0: [3, 1], '#': [3, 2]            
        };
        const prev = coordinate[prevValue];
        const curr = coordinate[currValue];                
        
        return Math.abs(prev[0] - curr[0]) + Math.abs(prev[1] - curr[1]);
    }
    
    let leftLoc = '*', rightLoc = '#';
    const resultArr = [];   let LR = '';

    numbers.forEach((v, i) => {
        if ([1, 4, 7, '*'].indexOf(v) > -1) {
            LR = 'L';
            leftLoc = v;            
        } else if ([3, 6, 9, '#'].indexOf(v) > -1) {
            LR = 'R';
            rightLoc = v;            
        } else { 
            const leftCenDistance = getDistence(leftLoc, v);
            const rightCenDistance = getDistence(rightLoc, v);

            if (leftCenDistance > rightCenDistance) {
                LR = 'R';
                rightLoc = v;
            } else if (leftCenDistance < rightCenDistance) {
                LR = 'L';
                leftLoc = v;  
            } else {
                if (hand === "left") {
                    LR = 'L';
                    leftLoc = v;
                } else {
                    LR = 'R';
                    rightLoc = v;
                }
            }
        }

        resultArr.push(LR);
    });
    return resultArr.join('');
}

solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right");
solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left")
solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right")

// -----------------------------------------------------------------------------------------
// 1차시, 통과 실패
/*
function solution(numbers, hand) {
    const objectList = {
        'leftArr': [1, 4, 7, '*'],   
        'centerArr': [2, 5, 8, 0], 
        'rightArr': [3, 6, 9, '#'],
    };
    
    let leftLoc = '*', rightLoc = '#';
    const resultArr = [];   let LR = '';
    
    const {leftArr, centerArr, rightArr, coordinate} = objectList;
    numbers.forEach((v, i) => {
        if (leftArr.indexOf(v) > -1) {
            LR = 'L';
            leftLoc = v;            
        } else if (rightArr.indexOf(v) > -1) {
            LR = 'R';
            rightLoc = v;            
        } else { 
            const cenIdx = centerArr.indexOf(v); 
            const leftIdx = leftArr.indexOf(leftLoc) < 0 
                ? centerArr.indexOf(leftLoc) 
                : leftArr.indexOf(leftLoc);
            const rightIdx = rightArr.indexOf(rightLoc) < 0 
                ? centerArr.indexOf(rightLoc) 
                : rightArr.indexOf(rightLoc);  

            const leftCenDistance = Math.abs(leftIdx - cenIdx);
            const rightCenDistance = Math.abs(rightIdx - cenIdx);


            if (leftCenDistance > rightCenDistance) {
                LR = 'R';
                rightLoc = v;
            } else if (leftCenDistance < rightCenDistance) {
                LR = 'L';
                leftLoc = v;  
            } else {
                if (hand === "left") {
                    LR = 'L';
                    leftLoc = v;
                } else {
                    LR = 'R';
                    rightLoc = v;
                }
            }

        }

        resultArr.push(LR);
    });
    
    
    return resultArr.join('');
}
*/