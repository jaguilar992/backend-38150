import { colors } from "./deps.ts";

console.log(
  colors.bgBrightRed(
    colors.bold(colors.red("Hello world!"))
  )
);