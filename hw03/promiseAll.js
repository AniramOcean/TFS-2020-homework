/**
 * Напишите функцию promiseAll(promises), поведение
 * которой аналогично поведению Promise.all(promises).
 *
 * @param  {Promise[]} promises массив с исходными промисами
 * @return {Promise}
 */
export const promiseAll = promises => {
  const results = [];

  return new Promise((resolve, reject) => {
    const reducer = (acc, currentVal) => acc.then(() => currentVal)
      .then(result => results.push(result), reject);

    promises.reduce(reducer, Promise.resolve()).then(() => resolve(results));
  });
};
