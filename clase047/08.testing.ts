import * as asserts from "https://deno.land/std@0.170.0/testing/asserts.ts";

function suma(a: number, b: number): number {
  return a + b;
}

Deno.test("Probando asserts", () => {
  asserts.assertEquals(suma(1, 2), 3);
});


Deno.test("Probando asserts (Falla)", () => {
  asserts.assertEquals(suma(1, 9), 4);
});