module.exports = assert;
function assert(bool, message) {
    if (!bool) console.log(message);
}