import { 
  colors,
  parse
} from "./deps.ts";

const date = parse("2023-01-01", "yyyy-MM-dd");
console.log(colors.red(`Hello world! We are in ${date}`));