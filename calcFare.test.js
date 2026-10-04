const assert = require('node:assert/strict');
const { calcFare } = require('./ai-dev.js');

// ทดสอบการคำนวณค่าโดยสาร
const testCases = [
    { distance: 0, expected: 10 },
    { distance: 1, expected: 10 },
    { distance: 2, expected: 10 },
    { distance: 2.1, expected: 12 },
    { distance: 3, expected: 12 },
    { distance: 4.9, expected: 16 },
    { distance: -1, expected: 0 },
    { distance: '3', expected: 0 },
    { distance: NaN, expected: 0 },
    { distance: Infinity, expected: 0 },
];

for (const { distance, expected } of testCases) {
    assert.equal(
        calcFare(distance),
        expected,
        `calcFare(${String(distance)}) ควรได้ ${expected}`
    );
}

console.log('calcFare tests passed');
