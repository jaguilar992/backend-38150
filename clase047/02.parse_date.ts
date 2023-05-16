import * as datetime from "https://deno.land/std@0.187.0/datetime/mod.ts";

const stringDate = "2023-05-15";
const date = datetime.parse(stringDate, "yyyy-MM-dd");

const date1 = new Date(stringDate);

console.log(date); // Localizada
console.log(date1); // UTC

const isBisiesto = datetime.isLeap(2020);
console.log(isBisiesto);