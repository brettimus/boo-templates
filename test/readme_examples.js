var BooTemplate = require("../");
var assert = require("./assert");

var template,
    compiler;

template = new BooTemplate("This is {{foo}}ey.");
assert(template.compile({foo: "barn"}) === "This is barney.",
    "Default template failed.");

template = new BooTemplate("This is <%foo%>ey.", "<%", "%>");
assert(template.compile({foo: "barkl"}) === "This is barkley.",
    "Custom template failed.");

compiler = new BooTemplate.Compiler();
assert(compiler.compile("{{foo}}{{bar}}", {foo: "Boo", bar: "Template"}) === "BooTemplate",
    "Default compiler failed.");

compiler = new BooTemplate.Compiler("<%", "%>");
assert(compiler.compile("<%foo%> <%bar%>", {foo: "Your", bar: "Boo"}) === "Your Boo",
    "Custom compiler failed.");