// คำนวณค่าโดยสารรถ NGV
const calcFare = (distanceKm) => {
	if (!Number.isFinite(distanceKm) || distanceKm < 0) {
		return 0;
	}

	const roundedDistance = Math.ceil(distanceKm);
	return roundedDistance <= 2
		? 10
		: 10 + (roundedDistance - 2) * 2;
};

module.exports = { calcFare };

const assert = require('node:assert/strict');
const { calcFare } = require('./ai-dev.js');

const testCases = [
    { distance: 0, expected: 10 },
    { distance: 2, expected: 10 },
    { distance: 2.1, expected: 12 },
    { distance: 3, expected: 12 },
    { distance: -1, expected: 0 },
    { distance: '3', expected: 0 },
    { distance: NaN, expected: 0 },
];

for (const testCase of testCases) {
    assert.equal(
        calcFare(testCase.distance),
        testCase.expected
    );
}

console.log('calcFare tests passed');