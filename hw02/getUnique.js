/**
 * Напишите функцию getUnique(input), возвращающую новый массив,
 * состоящий из уникальных значений массива input. Результирующий
 * массив должен быть отсортирован по возрастанию.
 *
 * Не использовать Set().
 *
 * Пример:
 * getUnique([1, 1, 2, 6, 3, 6, 2]); // [1, 2, 3, 6]
 *
 * @param  {number[]} input исходный массив
 * @return {number[]} массив уникальных значений, отсортированный по возрастанию
 */
export function getUnique(input) {
  return input.filter((num, index, array) => array.indexOf(num) === index).sort();
}
