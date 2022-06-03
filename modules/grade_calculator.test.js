const gradeCalculator = require('./grade_calculator');

test('grade average of 1 and 1 is 1', () => {
    expect(gradeCalculator.calc(1, 1)).toBe(1);
});

test('grade average of 1 and 1.3 is 1.3', () => {
    expect(gradeCalculator.calc(1, 1.3)).toBe(1.3);
});

test('grade average 2.3 and 1.3 is 1.7', () => {
    expect(gradeCalculator.calc(2.3, 1.3)).toBe(1.7);
});