var assert = require("./assert");
var Compiler = require("../src/compiler");

assert((new Compiler()).open === "{{", "Incorrect default open bracket.");
assert((new Compiler()).close === "}}", "Incorrect default close bracket.");

assert((new Compiler()).compile("{{foo}}", {foo: "bar"}), "Incorrectly compiled one-property template.");