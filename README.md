# :ghost: boo-templates
a very lightweight (_and spoooooky_) templating tool (that is also your boo :heart:)

## a Template

```javascript
var template = new BooTemplate("This is {{foo}}ey.");
template.compile({foo: "barn"});
// => "This is barney."
```

```javascript
var template = new BooTemplate("This is <%foo%>ey.", "<%", "%>");
template.compile({foo: "barkl"});
// => "This is barkley."
```

## a Compiler(open, close)
the Compiler is what powers a template. It implements a global search on a given template string and evalutes anything between `open` and `close` delimiters.

`open` and `close` default to `"{{"` and `"}}"`

```javascript
var compiler = new BooTemplate.Compiler();
compiler.compile("{{foo}}{{bar}}", {foo: "Boo", bar: "Template"});
// => "BooTemplate"

```

```javascript
var compiler = new BooTemplate.Compiler("<%", "%>");
compiler.compile("{{foo}} {{bar}}", {foo: "Your", bar: "Boo"});
// => "Your Boo"
```