/* eslint-disable no-console */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */

const characters = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'маг', health: 0 },
  { name: 'лучник', health: 0 },
];

const alive = characters.filter((item) => item.health > 0);

// TODO: write your code here
import sum from './basic';

console.log('app worked');

console.log(sum([1, 2]));