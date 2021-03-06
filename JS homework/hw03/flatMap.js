/**
 * Напишите функцию, добавляющую полифил метода flatMap
 * к прототипу Array. Полифил должен полностью реализовывать
 * метод (обратите внимание на передачу контекста, индексы и так далее).
 *
 * Описание метода:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap
 *
 * @param  {*} ArrayConstructor конструктор Array
 * @return {Array} Тот же конструктор с добавленным методом flatMap
 */
export const flatMapPolyfill = (ArrayConstructor = Array) => {
  if (!ArrayConstructor.prototype.flat) {
    Object.defineProperty(ArrayConstructor.prototype, 'flat', {
      value(depth = 1) {
        return this.reduce((flat, toFlatten) => {
          return flat.concat((ArrayConstructor.isArray(toFlatten) && (depth > 1)) ? toFlatten.flat(depth - 1) : toFlatten);
        }, new ArrayConstructor());
      }
    });
  }

  Object.defineProperty(ArrayConstructor.prototype, 'flatMap', {
    value: function flatMap(...theArgs) {
      return ArrayConstructor.prototype.map
        .apply(this, theArgs).flat();
    },
    writable: true,
    enumerable: false,
    configurable: true
  });
};
