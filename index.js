function isPalindrome(word) {
  // Write your algorithm here
  if (word.length < 2) {
    return true;
  }

  let first = 0;
  let last = word.length - 1;

  while (first <= last) {
    if (word[first] != word[last]) {
      return false;
    }
    first++;
    last--;
  }
  return true;
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
