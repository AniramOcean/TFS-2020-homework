/**
 * Напишите функцию meanMode(numbers), принимающую массив чисел numbers
 * и возвращающую true, если среднее значение числового ряда равно
 * числу (или любому из чисел), встречающемуся чаще остальных. Иначе
 * вернуть false.
 *
 * Если есть несколько чисел, встречающихся одинаковое количество раз,
 * и чаще всех остальных, считать входящий массив невалидным и
 * возвращать false.
 *
 * Пример:
 * meanMode([1]) === true
 * meanMode([4, 4, 4, 6, 2]) === true
 * meanMode([1, 2, 3]) === false
 * meanMode([1, 1, 1, 2, 5]) === false
 * meanMode([]) === false
 *
 * Больше примеров в тестах.
 *
 * @param  {number[]} numbers массив целых положительных чисел.
 * @return {boolean}
 */
export function meanMode(numbers) {
  const average = numbers.reduce((acc, i) => acc + i, 0) / numbers.length;
  const count = {};

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] in count) {
      count[numbers[i]]++;
    } else {
      count[numbers[i]] = 1;
    }
  }

  const keysSorted = Object.keys(count)
    .sort((a, b) => count[b] - count[a]);

  // eslint-disable-next-line eqeqeq
  return average == keysSorted[0];
}
