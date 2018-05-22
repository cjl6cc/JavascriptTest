function fizzbuzz(numbers) {
  // assume numbers is an array of integers.  fizzbuzz should return a new
  // array where multiples of 3s and 5s become "Fizz" "Buzz" or "FizzBuzz"
  // using numbers.map()
  // YOUR CODE HERE
  var newArray = []
  numbers.map(function(num) {
    if ((num%3 === 0) && (num%5 === 0)) {
      newArray.push('FizzBuzz')
    } else if (num%5 === 0) {
      newArray.push('Buzz')
    } else if (num%3 === 0) {
      newArray.push('Fizz')
    } else {
      newArray.push(num)
    }
  });
  return newArray
}

// here's a test case to see if you got it right
// DON'T CHANGE THIS
function test() {
  let arr = [];
  for (let i = 1; i < 101; i++) {
    arr.push(i);
  }
  let updatedArray = fizzbuzz(arr);
  updatedArray.forEach(element => {
    console.log(element);
  });
}

test();
