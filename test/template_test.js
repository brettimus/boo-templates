var assert = require("./assert");
var Template = require("../src/template");

var o = {foo: 'bar'};
var result = "This is barey.";

assert((new Template("This is {{foo}}ey.")).compile(o) === result , "Template incorrectly compiled default.");
assert((new Template("This is <%foo%>ey.", "<%", "%>")).compile(o) === result, "Template incorrectly compiled template with custom tags.");