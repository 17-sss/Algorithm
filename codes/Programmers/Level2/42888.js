// https://programmers.co.kr/learn/courses/30/lessons/42888
// 카카오 블라인드 - 오픈채팅방

// (2021.05.06) ---------------------

// 2차시, 통과 성공 (참고함, Map 사용)
function solution(record) {
    const mapTmp = new Map();
    const answer = [];

    for (let i = 0; i < record.length; i++) {
        const [state, uid, name] = record[i].split(' ');

        if (state === 'Enter') answer.push([uid, '님이 들어왔습니다.']);
        else if (state === 'Leave') {
            answer.push([uid, '님이 나갔습니다.']);
            continue; // Leave일때 map에 넣을 name이 없긴한데.. 에러가 될 상황인가?
        }

        mapTmp.set(uid, name);
    }
    console.log(mapTmp);

    return answer.map((v) => mapTmp.get(v[0]) + v[1]);
}

// 1차시, 통과 실패 (이게 무슨 짓일까..?)
/*
class Log {
    constructor(id) {
        this.id = id;
        this.arrState = [];
        this.arrNames = [];
    }
}

class User {
    constructor(state, id, name) {
        this.state = state;
        this.id = id;
        this.name = name;
    }
}

function solution(record) {
    const logs = record.reduce((arr, value) => {
        const [state, id, name] = value.split(' ');
        let log;
        const findLog = arr.find((v) => v.id === id);
        if (findLog) {
            findLog.arrState.push(state);
            findLog.arrNames.push(name || null);
        } else {
            log = new Log(id);
            log.arrState.push(state);
            log.arrNames.push(name || null);
            arr.push(log);
        }
        return arr;
    }, []);

    const idOrder = record.map((v) => {
        const [state, id, name] = v.split(' ');
        return new User(state, id, name);
    });

    const answer = [];
    idOrder.forEach((v) => {
        const log = logs.find((v2) => v2.id === v.id);
        const lastName = log.arrNames[log.arrNames.length - 1];

        const currState = v.state;
        let msg = '';
        if (currState === 'Enter') {
            msg = lastName + '님이 들어왔습니다.';
        } else if (currState === 'Leave') {
            msg = lastName + '님이 나갔습니다.';
            return;
        } else return;
        return answer.push(msg);
    });

    return answer;
}
*/