// const normalizeSpaces = (str) => {
  // return str.trim().replace(/\s+/g, ' ');
// };
// 
// console.log(normalizeSpaces('  Hello   world! '));



// const extractFileName = (catalog) => {
//   const catalog_arr = catalog.split(['/'])
//   const result = catalog_arr[catalog_arr.length - 1].split('.')
//   return result[0]
// };

// console.log(extractFileName('C:/Users/username/Documents/example.txt'));
// console.log(extractFileName('../index.html'));
// console.log(extractFileName('/home/user/images/photo.jpg'));


// const encryptSentence = (setnence) => {
  
// };

// const checkBrackets = (str) => {
//   const components = str.split('');

//   const open_sk = components.filter((char) => char === '(');
//   const zakr_sk = components.filter((char) => char === ')');

//   if(open_sk.length > zakr_sk.length) return -1;
//   if(open_sk.length == zakr_sk.length) return 0;
// };


// Qweq

const isPositive = (number) => number > 0 ? true : false;

const isOdd = (number) => number % 2 == 0 ? false : true;

const checkInequality = (numberA, numberB) => numberA > 2 && numberB <= 3 ? true : false;

const checkInequality2 = (numberA, numberB) => numberA >= 0 || numberB < -2 ? true : false;

const checkBetweenNumbers = (numberA, numberB, numberC) => numberB > numberA && numberB < numberC;

const checkOddThreeDigitNumber = (number) => Math.abs(number) >= 100 
  && Math.abs(number) <= 999 && number % 2 !== 0;

// const checkUniqueDigits = (number) => {
// };

console.log();
console.log();
console.log();
console.log();
