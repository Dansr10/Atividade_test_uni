const soma = require('./soma');

test('add 4 + 6 to equal 10', () =>{
    expect (soma(4,6)).toBe(10);
});