function averageThreeNumbers(a, b, c) {
    let sum = a + b + c;
    let mean = sum / 3;
    return Math.floor(mean);
}

function createSentence(num, noun) {
    return `On average, a Berkeley student has ${num} ${noun}s.`;
}

function getRandomNum(max) {
    return Math.floor(Math.random() * max);
}