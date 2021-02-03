// https://programmers.co.kr/learn/courses/30/lessons/17682
// 카카오 2018 코딩테스트 - 다트게임
const { log } = console;

// 1차시, 통과성공. 난 역시 숫자가 들어가면 어렵다..
function solution(dartResult) {
    let answer = 0;
    let numArr = [];
    for (let i = 0; i < dartResult.length; i = i + 2) {
        // 포인트
        let point;        
        if (i + 1 < dartResult.length && dartResult[i + 1] === '0') {
            point = 10;
            i++;
        } else {
            point = parseInt(dartResult[i]);
        }
        
        // 보너스
        let bonus = dartResult[i + 1];
                
        if (bonus === 'D') {
            point **= 2;
        } else if (bonus === 'T') {
            point **= 3;
        }
        
        // 옵션
        if (i + 2 < dartResult.length && dartResult[i + 2] === '*') {
            point *= 2;
            if (numArr.length !== 0) {
                numArr[numArr.length - 1] *= 2;
            }
            i++;
        } else if (i + 2 < dartResult.length && dartResult[i + 2] === '#') {
            point *= -1;
            i++;
        }
        numArr.push(point);
    }

    // 다 더하기
    for (let i = 0; i < numArr.length; i++) {
        answer += numArr[i];
    }
    return answer;
}

solution('1S2D*3T');
solution('1D2S#10S');
solution('1D2S0T');
solution('1S*2T*3S');
solution('1D#2S*3S');
solution('1T2D3D#');
solution('1D2S3T*');

/*
// 연구용 2
function solution(dartResult) {
    const arrAnswer = [];
    const arrDartResult = dartResult.split('');

    let tmp = '';
    for (let i = 0; i < arrDartResult.length; i++) {        
        const curr = arrDartResult[i];
        
        if (/[0-9]/.test(curr)) {
            if(curr === "1" && arrDartResult[i+1] === "0") {
                tmp += (curr + arrDartResult[i+1]);
                i++;
                continue;              
            } else {
                tmp += (curr);
            }
        } else if (/[SDT]/.test(curr)) {
            if ( !(/[\*\#]/.test(arrDartResult[i+1])) ) {
                tmp += (curr);                
            } else {
                tmp += (curr + arrDartResult[i+1]);
                i++;
            }
            arrAnswer.push(tmp.split(''));
            tmp = '';            
        }       
    }

    for(let i = 0; i < arrAnswer.length; i++) {
        
    }
    

    const calcArr = [];
    for (let i = 0; i < arrAnswer.length; i++) {
        const num = parseInt(arrAnswer[i][0]);
        const bonusTmp = arrAnswer[i][1];
        
        let bonus = 0;        
        if (bonusTmp === "S") 
            bonus = 1
        else if (bonusTmp === "D") 
            bonus = 2
        else if (bonusTmp === "T") 
            bonus = 3;

        const opt = arrAnswer[i][2];

        calcArr.push((num ** bonus))
    }

    log(calcArr)
    // return answer;
};

// 연구용 1.
function solution(dartResult) {
    let answer = 0;
    
    const arrDartResult = dartResult.split('');
    
    const createNumArr = (arrNum) => {
        const result = []
        for (let i = 0; i < arrNum.length; i++) {            
            const strCurr = arrNum[i];
            if (strCurr === "1") {
                const strTmp = arrNum[i+1];
                if (strTmp === "0") {
                    result.push(strCurr+strTmp);
                    i++;
                } else {
                    result.push(strCurr);
                }
            } else {
                result.push(strCurr);
            }
        }
        return result;
    };
    
    const arrNum = createNumArr(dartResult.match(/[0-9]/gi));    
     
    return answer;
}
*/
