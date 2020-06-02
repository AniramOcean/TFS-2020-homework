/**
 * Напишите функцию rle(input), реализующую примитивное RLE-сжатие входящей строки input.
 * Подробнее об RLE: https://ru.wikipedia.org/wiki/Кодирование_длин_серий
 *
 * Входящая строка сооттветствует regex паттерну /^[A-Z]+$/
 *
 * Пример:
 * rle('AAAB') === 'A3B'
 * rle('BCCDDDEEEE') === 'BC2D3E4'
 *
 * Больше примеров в тестах.
 *
 * @param  {string} input
 * @return {string}
 */
export default function rle(input) {
  const array = input.split('');

  let result = '';

  let count = 1;

  array.forEach((values, times) => {
    if (values !== array[times + 1]) {
      result = `${result}${values}${count > 1 ? count : ''}`;
      count = 1;
    } else {
      count++;
    }
  });
  return result;
  // return input.replace(/(.)(\1+)/g, (a, b) => b + a.length);
}
