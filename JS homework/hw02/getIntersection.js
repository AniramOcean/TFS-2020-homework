/**
 * Напишите функцию getIntersection(first, second), возвращающую
 * массив из общих значений массивов first и second.
 *
 * Результирующий массив должен быть отсортирован по возрастанию.
 *
 * Пример:
 * getIntersection([1, 3, 5, 7, 9], [1, 2, 3, 4]); //  [1, 3]
 * getIntersection([1, 1, 2], [2, 1, 1, 1]); // [1, 1, 2]
 *
 * @param  {number[]} first исходные массивы
 * @param  {number[]} second исходные массивы
 * @return {number[]} массив значений, отсортированный по возрастанию
 */
export function getIntersection(first, second) {
  const duplicates = [];
  const getDuplicates = (arr1, arr2) => {
    arr1.forEach(i => {
      if (arr2.indexOf(i) !== -1) {
        duplicates.push(i);
      }
    });
    return duplicates.sort((x, y) => x - y);
  };

  return (first.length <= second.length) ? getDuplicates(first, second) : getDuplicates(second, first);
}
