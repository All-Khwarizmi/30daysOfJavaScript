/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
module.exports.createCounter = function (init) {
  let initial = init;

  function Obj() {
    this.increment = () => (initial += 1);
    this.decrement = () => (initial -= 1);
    this.reset = () => (initial = init);
  }
  return new Obj();
};
