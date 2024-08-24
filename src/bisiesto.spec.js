const esBisiesto = require('./bisiesto');

test('El año 2000 es bisiesto', () => {
  expect(esBisiesto(2000)).toBe(true);
});

test('El año 1700 no es bisiesto', () => {
    expect(esBisiesto(1700)).toBe(false);
  });

  test('El año 2008 es bisiesto', () => {
    expect(esBisiesto(2008)).toBe(true);
  });

  test('El año 2017 no es bisiesto', () => {
    expect(esBisiesto(2017)).toBe(false);
  });
  