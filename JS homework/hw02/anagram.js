/**
 * Напишите функцию anagram(first, second), определяющую,
 * являются ли переданные строки first и second анаграммами.
 *
 * Пример:
 * anagram('просветитель', 'терпеливость') === true
 *
 * Больше примеров в тестах.
 *
 * @param  {string} first первая строка
 * @param  {string} second вторая строка
 * @return {boolean}
 */
export function anagram(first, second) {
  const check = phrase => phrase.toLowerCase().split('').sort().join('');
  const firstCheck = check(first);
  const secondCheck = check(second);

  return firstCheck === secondCheck;
}
