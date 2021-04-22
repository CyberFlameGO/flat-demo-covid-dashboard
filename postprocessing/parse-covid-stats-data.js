import {
  readCSV,
  writeJSON,
  removeFile,
} from "https://deno.land/x/flat@0.0.8/mod.ts";
import { parse, format } from "https://deno.land/std@0.69.0/datetime/mod.ts";

const inputFilename = Deno.args[0];
const outputFilename = inputFilename.replace(".csv", ".json");

const contents = await readCSV(inputFilename, { skipFirstRow: true });
Date.parse("20210304");
const parsedContents = contents.map((d) => ({
  ...d,
  Date: format(parse(d["Date"], "yyyyMMdd"), "MM/dd/yyyy"),
}));

// await removeFile(inputFilename);

await writeJSON(outputFilename, parsedContents);
