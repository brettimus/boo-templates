var Compiler = require("./compiler");
var Template = require("./template");
var BooTemplate = Template;
BooTemplate.Compiler = Compiler;
module.exports = Template;