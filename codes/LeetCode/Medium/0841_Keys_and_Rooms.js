// https://leetcode.com/problems/keys-and-rooms/
// Keys and Rooms
// 모든 방을 방문할 수 있는지 체크 후 방문이 다 가능하다면 True, 아니라면 False

// 1차시, 통과 성공
/**
 * @param {number[][]} rooms
 * @return {boolean}
 */

class Room {
    constructor(idx, keys) {
        this.idx = idx;
        this.keys = keys;
        this.visited = false;
    }
}

const canVisitAllRooms = (rooms) => {
    // 1. 만들어준 Room이란 Class를 활용하여, index와 key들을 넣어줌
    const roomList = rooms.map((keys, idx) => new Room(idx, keys));

    // 2. stack으로 탐색, 시작은 0번째니까 미리 넣어줌
    const stack = [roomList[0]];

    while (stack.length > 0) {
        // 3. 처음부터 stack에서 pop 후. 방문한걸로 체크!
        // currRoom 변수는 위에 선언한 Room 이란 Class 구조를 가지고 있음
        const currRoom = stack.pop();
        currRoom.visited = true;

        // 4. currRoom의 keys 배열에 하나라도 있다면..
        if (currRoom.keys.length > 0)
            currRoom.keys.forEach((key) => {
                // 만약 key를 가지고 key에 써져있는 방으로 갔는데 이미 방문했네? 그럼 ㅃㅇ
                if (roomList[key].visited) return;
                // 아니라면 일단 stack에 key에 써져있는 방을 넣어줌.
                return stack.push(roomList[valueIdx]);
            });
    }

    return roomList.every((room) => room.visited);
};

// -----------------------------------------------------------------------

// 기타 - 1, 테스트는 안해봄, 했던 코드들 보존하려고 저장. (이거 미완성 코드임)
/*
class Room {
    constructor(idx, keys) {
        this.idx = idx;
        this.keys = keys;
        this.visited = false;
    }
}

const canVisitAllRooms = (rooms) => {
    // 1. 모든 방을 나열한 후,
    // Room이란 Class에 각 방이 가지고 있는 Keys들과 index 저장, 그리고 방문상태 false로 초기값 지정
    const allRooms = rooms.reduce((init, arr) => {
        init.push(...arr);
        return init;
    }, []);
    const roomsSet = new Set(allRooms);
    const roomList = [...roomsSet]
        .map((valueIdx) => new Room(valueIdx, rooms[valueIdx]))
        .sort((a, b) => a.idx - b.idx);

    // 2. stack으로 탐색, 시작은 0번째니까 미리 넣어줌
    const stack = [rooms[0]];
    roomList[0].visited = true; // 0번째는 방문한 거나 다름 없음

    let nLoop = 0;
    while (stack.length > 0) {
        const currRoom = stack.pop();
        if (currRoom && currRoom.length > 0) {
            currRoom.forEach((valueIdx) => {
                const findRoom = roomList.find((room) => room.idx === valueIdx);
                if (!findRoom || findRoom.visited) return;
                return stack.push(rooms[valueIdx]);
            });
        }
        nLoop++;
        if (nLoop === 10) break;
    }

    return roomList.every((room) => room.visited);
};
*/
