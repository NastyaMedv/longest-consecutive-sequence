module.exports = function longestConsecutiveLength(array) {
  // your solution here
  var counter = [];

  for (var i = 0; i < array.length; i++) {
    counter[array[i]] = true;
  }

  var now = 0, max = 0;

  for (var i = 0; i < counter.length; i++) {
    if (counter[i]) {
      now++;
      if (now > max) {
        max = now;
      }
    } else {
      now = 0;
    }
  }

  return max;
}
