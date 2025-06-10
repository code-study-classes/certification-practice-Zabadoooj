export const isPositive = (number) => number > 0 ? true : false;

export const isOdd = (number) => number % 2 == 0 ? false : true;

export const checkInequality = (numberA, numberB) => numberA > 2 && numberB <= 3 ? true : false;

export const checkInequality2 = (numberA, numberB) => numberA >= 0 || numberB < -2 ? true : false;

export const checkBetweenNumbers = (numberA, numberB, numberC) => numberB > numberA && numberB < numberC;

export const checkOddThreeDigitNumber = (number) => Math.abs(number) >= 100 
  && Math.abs(number) <= 999 && number % 2 !== 0;

export const checkUniqueDigits = (number) => {
  const duplicates = number.toString().split('')
  .filter((e, i, a) => a.indexOf(e) !==i);

  return duplicates.length > 0 || number.toString().length < 2 ? false : true;
};

export const isSecondQuadrant = (pointX, pointY) => pointX < 0 && pointY > 0 ? true : false;

export const isIsoscelesTriangle = (a, b, c) => a > 0 && b > 0 && c > 0 && (a == c || a == b) ?
  true : false;

export const areSameColorFields = (x1, y1, x2, y2) => {
  const firstDot_black = isOdd(x1) && isOdd(y1) || !isOdd(x1) && !isOdd(y1);
  const secondDot_black = isOdd(x2) && isOdd(y2) || !isOdd(x2) && !isOdd(y2);


  return firstDot_black === secondDot_black ? true : false;
};