function oddEvenChecker(number) {
  if (typeof number === 'number') {
    if (number % 2 === 0) {
      console.log("The number is even.");
    } else {
      console.log("The number is odd.");
    }
  } else {
    console.log("Invalid Input.");
  }
}
oddEvenChecker(2)
oddEvenChecker(5)
oddEvenChecker(14)


// Function to check if a budget is over or under the recommended limit
function budgetChecker(budget) {
  if (typeof budget === 'number') {
    if (budget > 40000) {
      console.log("You are over the budget.");
    } else {
      console.log("You have resources left.");
    }
  } else {
    console.log("Invalid Input.");
  }
}
budgetChecker(40000)
budgetChecker(400001)