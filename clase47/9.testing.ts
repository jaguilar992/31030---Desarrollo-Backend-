import * as asserts from "https://deno.land/std@0.170.0/testing/asserts.ts";


Deno.test("Compara el resultado de la suma de dos numeros", () => {
  asserts.assertEquals(2 + 2, 4);
})