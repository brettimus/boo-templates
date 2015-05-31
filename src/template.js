var Compiler = require("./compiler");

module.exports = Template;

/**
 * @constructor
 * @param {string} template - The template string
 * @param {string} [open] - margs beginning of a template value that's to be evaluated
 * @param {string} [close] - marks end of a template value that's to be evaluated
 */
 function Template(template, open, close) {
    this.template = template;
    this.compiler = new Compiler(open, close);
 }

/**
 * Wraps Compiler~compile with the target string scoped to Template~string
 * @method
 * @param {object} o - Ojbect whose values are inserted into the string.
 * @return {string}
 */
 Template.prototype.compile = function(o) {
     return this.compiler.compile(this.template, o);
 };

