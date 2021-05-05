// https://programmers.co.kr/learn/courses/30/lessons/12981
// 영어 끝말잇기

// 1차시, 통과 성공
const solution = (n, words) => {
    const useWords = [];
    let personNum = 1;
    let startChar, endChar;

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        startChar = word[0];

        const dupFlag = useWords.findIndex((v) => v.word === word) > -1;
        useWords.push({ personNum, word });

        if ((startChar && endChar && startChar !== endChar) || dupFlag) {
            const turn = useWords.filter((v) => v.personNum === personNum)
                .length;
            return [personNum, turn];
        }

        if (personNum === n) personNum = 1;
        else personNum++;

        endChar = word[word.length - 1];
    }

    return [0, 0];
};

solution(3, [
    'tank', 'kick', 'know',
    'wheel', 'land', 'dream',
    'mother', 'robot', 'tank',
]);
solution(5, [
    'hello', 'observe', 'effect',
    'take', 'either', 'recognize',
    'encourage', 'ensure', 'establish',
    'hang', 'gather', 'refer',
    'reference', 'estimate', 'executive',
]);
solution(2, ['hello', 'one', 'even', 'never', 'now', 'world', 'draw']);
