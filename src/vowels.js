var exports = module.exports = {};
/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, and u as vowels.

*/

exports.getCount = function(str) {
  let string = str.toLowerCase()
  let vowels = ['a', 'e', 'i', 'o', 'u']
  counter = 0
  for (i=0; i<string.length; i++) {
    for (j=0; j<vowels.length; j++) {
      if (vowels[j]===string[i]) {
        counter += 1
      }
    }
  }
  console.log(counter)
  return counter
  // write your code here and test with Jasmine
}
