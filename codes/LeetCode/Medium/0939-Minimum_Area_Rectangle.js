// https://leetcode.com/problems/minimum-area-rectangle/
// 939. Minimum Area Rectangle
// 주어진 point들로 만들수 있는 직사각형중 최소 size는 몇?

// 1차시, 통과 성공 (참고함..ㅠ)
/**
 * @param {number[][]} points
 * @return {number}
 */
const minAreaRect = (points) => {
    if (!points || points.length <= 0) return 0;
    const map = new Map();
    let result = Number.MAX_VALUE; // result는 Math.min을 계속 거쳐야함.. 그러니까 제일 큰 숫자로!

    // 1. HashMap에 x값은 key로, 계속해서 나오는 y 값들은 value에 넣되, HashSet으로
    for (let i = 0; i < points.length; i++) {
        const [x, y] = points[i];

        let valuesSet;
        if (!map.has(x)) valuesSet = new Set().add(y);
        else valuesSet = map.get(x).add(y);
        map.set(x, valuesSet);
    }

    // 2. Points 배열 순회 (이중 for 문)
    // Map에서 Point 3 & Point 4의 좌표 값 존재 여부 확인 후 Size 비교
    for (let i = 0; i < points.length; i++) {
        const [x1, y1] = points[i]; // Point 1

        for (let j = i + 1; j < points.length; j++) {
            const [x2, y2] = points[j]; // Point 2

            const [x3, y3] = [x1, y2]; // Point 3
            const [x4, y4] = [x2, y1]; // Point 4

            const currSize = Math.abs(x3 - x4) * Math.abs(y4 - y3); // 현재 좌표들을 조합한 사각형의 Size
            if (currSize === 0) continue; // 0 이라면 update되면 안대!

            // Point 3 & Point 4의 좌표 값 존재 여부 확인. 만약 없다면 continue
            pt3Set = map.get(x3);
            if (!pt3Set.has(y3)) continue;

            pt4Set = map.get(x4);
            if (!pt4Set.has(y4)) continue;
            // --

            result = Math.min(result, currSize);
        }
    }

    return result === Number.MAX_VALUE ? 0 : result;
};

minAreaRect([[1,1],[1,3],[3,1],[3,3],[2,2]]); // 4
