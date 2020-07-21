const sum = require('./sum');

test('Testing 1+1 success',()=>{
    expect(sum(1,1)).toBe(2);
});