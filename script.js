'use strict';

// const x = '21';

// const calcAge = birthYear => 2037 - birthYear;

// console.log(x);

//  Problem 1
/*
const tempreature = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitutde = function (arr) {
  let max = arr[0],
    min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') {
      continue;
    }
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
  }

  return max - min;
  console.log(max, min);
};

const amplitude = calcTempAmplitutde(tempreature);
console.log(amplitude);

// Problem 2

const tempreatureNew = [3, -2, -6, -1, 'error', 9, 343, 217, 135, 33, 99, 55];

const calcTempAmplitutdeNew = function (b, c) {
  const a = b.concat(c);
  console.log(a);
  let max = a[0],
    min = a[0];
  for (let i = 0; i < a.length; i++) {
    if (typeof a[i] !== 'number') {
      continue;
    }
    if (a[i] > max) {
      max = a[i];
    } else if (a[i] < min) {
      min = a[i];
    }
  }

  console.log(max, min);
  // return max - min;
};

const amplitudeNew = calcTempAmplitutdeNew(tempreature, tempreatureNew);
console.log(amplitudeNew);
*/
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';
console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
let score = 20;
const number = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.check').addEventListener('click', function () {
  console.log(document.querySelector('.guess').value);
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent = ' No Number !';
  } else if (guess == number) {
    document.querySelector('.message').textContent = 'Correct Number 🎉';
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost 💥';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost 💥';
      document.querySelector('.score').textContent = score;
    }
  }
});
