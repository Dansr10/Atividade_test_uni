const {soma, subtracao, multiplicacao, divisao } = require('./calculadora')

test('somar dos fatores' , () => {
    expect(soma(4, 6)).toBe(10);
});

test('subtrair dos fatores' , () => {
    expect(subtracao(6, 4)).toBe(2);
});

test('multiplicar dos fatores' , () => {
    expect(multiplicacao(4, 6)).toBe(24);
});

test('dividir dos fatores' , () => {
    expect(divisao(6, 3)).toBe(2);
});