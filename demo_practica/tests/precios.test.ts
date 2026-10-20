//archivo que define el comportamiento esperado de las func con ppruebas unitarias con la libreria de Vitest

import { describe, expect, it } from 'vitest';
import { calcularPrecioFinal } from '../src/services/precios.ts';

describe('calcularPrecioFinal', () => {
  it('aplica un descuento del 10 %', () => {
    expect(calcularPrecioFinal(1000, 10)).toBe(900);
  });

  it('conserva el precio si el descuento es cero', () => {
    expect(calcularPrecioFinal(1000, 0)).toBe(1000);
  });

  it('rechaza descuentos superiores al 100 %', () => {
    expect(() => calcularPrecioFinal(1000, 150)).toThrow(RangeError); //esta prueba solo se considera aprobada si es q falla
    //al pasar un descuento mayor a 100% la func lanza un error
  });
});

//exige q si pasa el monto definido de 100 porciento lance un error, en la prueba le adjunta
//150 y por eso lanza el error inicial