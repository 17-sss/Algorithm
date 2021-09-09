// https://programmers.co.kr/learn/courses/30/lessons/42583
// 다리를 지나는 트럭

// 나중에 다시 풀어보기

function solution(bridge_length, weight, truck_weights) {
    let result = 0,
        nCurrWeight = 0;
    let nTruck = truck_weights.shift();

    const queue = [];
    for (let i = 0; i < bridge_length; i++) queue.push(0);

    queue.unshift(nTruck);
    nCurrWeight += nTruck;
    queue.pop();
    result++;

    while (nCurrWeight !== 0) {
        nCurrWeight -= queue.pop();
        nTruck = truck_weights.shift();

        // 다리의 용량에 초과하지 않는다면 (안전한지 체크)
        const bCheckWeight = nTruck + nCurrWeight <= weight;

        if (bCheckWeight) {
            queue.unshift(nTruck);
            nCurrWeight += nTruck;
        } else {
            queue.unshift(0);
            truck_weights.unshift(nTruck);
        }

        result++;
    }

    return result;
}
