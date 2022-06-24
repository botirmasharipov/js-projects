// You will use this .js file to write your four coding challenges
​
​
​
​
// "Coding Challenge #1: Basketball Score"
function totalBasketballScore(freeThrows, midRange, threePointers) {
  if (isNaN(freeThrows) || isNaN(midRange) || isNaN(threePointers)) {
    console.log('You should write nummbers only.');
​
  }
  console.log(freeThrows + midRange * 2 + threePointers * 3);
}
totalBasketballScore(2, 3, 4)  // 20
// totalBasketballScore( 8, 3, 'hn');
// "Coding Challenge #2: Computer Store"
function itemPrice(item) {
  if (typeof item !== 'string') {
    console.log("You must type a string")
  }
  switch (item) {
    case 'computer':
      console.log('$500')
      break;
    case 'mouse':
      console.log('$10')
      break;
    case 'tablet':
      console.log('$250')
      return '$250'
      break;
    case 'case':
      console.log('$25')
      break;
    case 'router':
      console.log('$100')
      break;
    default:
      console.log("We do not have this item in the store")
      break;
  }
}
​
itemPrice('case')
itemPrice('iphone')
itemPrice(3546)
​
​
​
​
​
​
​
​
// "Coding Challenge #3: What’s for dinner?"
const restaurants = ["Applebees", "Panera Bread", "Popeyes", "Chopt", "Chick-fil-A", "Cheesecake Factory", "Five Guys"]
​
function randomRestaurants(numOfRestaurants) {
  // Shuffle array
  const shuffled = restaurants.sort(() => 0.5 - Math.random());
​
  // Get sub-array of first n elements after shuffled
  let selected = shuffled.slice(0, numOfRestaurants);
  console.log(selected)
  return selected;
​
}
​
randomRestaurants(5)
​
​
// "Coding Challenge #4: Leap Year"
function isLeapYear(year) {
​
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        console.log(true);
      } else {
        console.log(false);
      }
    } else {
      console.log(true);
    }
  } else {
    console.log(false);
  }
​
}
isLeapYear(2000);
//isLeapYear(1997);
//isLeapYear(2052);
//isLeapYear(1808);