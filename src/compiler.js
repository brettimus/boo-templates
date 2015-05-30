var B = require("boots-utils");

module.exports = Compiler;

/**
 * @constructor
 * @param {string} [open] - margs beginning of template string that's to be evaluated
 * @param {string} [close] - marks end of template string that's to be evaluated
 */
function Compiler(open, close) {
    this.open  = open  || "{{";
    this.close = close || "}}";
}

/**
 * Compiles a string in the given object's context 
 * @method
 */
Compiler.prototype.compile = function(string, object) {
    for (var prop in object) {
        if (object.hasOwnProperty(prop)) {
            string = B.replaceAll(string, this.open+prop+this.close, object[prop]);
        }
    }
    return string;
};