import capitalize from './capitalize.js';
import getMinMax from './getMinMax.js';
import sum from './sum.js';
import limitCalls from './limitCalls.js';
import rle from './rle.js';
import passwordCheck from './passwordCheck.js';
import multiple from './multiple.js';

window.capitalize = () => {
  const toUp = document.getElementById('input').value;

  document.getElementById('answer').textContent = capitalize(toUp);
};

window.getMinMax = () => {
  const values = document.querySelector('#input-2').value;
  const result = getMinMax(values);
  const string = `min: ${result.min}, max: ${result.max}`;

  document.querySelector('#value').textContent = string;
};

window.sum = () => {
  const numbers = document.querySelector('#input-3').value;
  const numbersArray = numbers.split(' ');

  let val = null;

  numbersArray.forEach((value, key) => {
    if (key === 0) {
      val = sum(+value);
    } else {
      val = val(+value);
    }
  });
  const result = val();

  document.querySelector('#sumCalc').textContent = result;
};

window.limitCalls = () => {
  const calls = document.querySelector('#input-4').value;
  const limitedLog = limitCalls(() => { alert('Hello, this is my first JavaScript homework! :)'); }, calls);

  for (let i = +calls + 1; i > 0; i--) {
    limitedLog();
  }
  document.querySelector('#calls').textContent = limitedLog(calls);
};

window.rle = () => {
  const encod = document.querySelector('#input-5').value;

  document.querySelector('#getRle').textContent = rle(encod);
};

window.passwordCheck = () => {
  const pass = document.querySelector('#input-6').value;

  document.querySelector('#pass').textContent = passwordCheck(pass);
};

window.multiple = () => {
  const values = (document.querySelector('#input-7').value).split(' ');
  const a = values[0];
  const b = values[1];

  multiple.a = a;
  multiple.b = b;

  document.querySelector('#multiCalc').textContent = multiple(a, b);
};
