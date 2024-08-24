const esBisiesto = require('./bisiesto');

test('El año 2000 es bisiesto', () => {
  expect(esBisiesto(2000)).toBe(true);
});

test('El año 1700 no es bisiesto', () => {
    expect(esBisiesto(1700)).toBe(false);
  });