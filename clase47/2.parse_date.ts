import { parse } from "https://deno.land/std@0.170.0/datetime/mod.ts";

const date = parse("2020-01-01", "yyyy-MM-dd");
const date1 = new Date("2020/01/01");
console.log(date);
console.log(date1);