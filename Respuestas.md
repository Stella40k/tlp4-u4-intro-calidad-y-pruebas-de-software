**Preguntas:** ¿qué archivo contiene la regla de cálculo? ¿Qué archivo define la ruta HTTP? ¿En qué se diferencian sus responsabilidades?

- src/services/precios.ts contiene la regla de cálculo
- src/app.ts define la ruta HTTP

**Leé la prueba que contiene `calcularPrecioFinal(1000, 150)`. ¿Qué comportamiento exige? ¿Qué hace realmente el código? **Todavía no modifiques la implementación.**

- Salen errores a proposito para enseñarnos como el test detecta defectos o errores antes de modificar el codigo.
- Sale un error intencional rehazando el descuento superior a 100% pero el codigo no lo rechaza (primer error antes de modificar codigo)