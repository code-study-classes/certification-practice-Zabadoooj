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

const checkBrackets = (str) => {
  const components = str.split('');

  const open_sk = components.filter((char) => char === '(');
  const zakr_sk = components.filter((char) => char === ')');

  if(open_sk.length > zakr_sk.length) return -1;
  if(open_sk.length == zakr_sk.length) return 0;

  
  
};

console.log(checkBrackets('((a + b) * (c - d))')); // 0
console.log(checkBrackets(')a + b) * (c - d)(')); // 1
console.log(checkBrackets('(a + b) * (c - d))')); // 18
console.log(checkBrackets('((a + b) * (c - d)')); // -1
