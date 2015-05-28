var romanNumerals = function(number){
  var allNumerals = [];
  var numbers = number.split("");
  numbers.reverse()
  var numbersArrayLength = numbers.length

  if (numbersArrayLength === 4){
    var numForThousands = parseInt(numbers[3])
    if (numForThousands <= 4) {
      for (var i = numForThousands; i > 0; i--){
        allNumerals.push("M")
      }
    } numbersArrayLength -= 1;
  }

  if (numbersArrayLength === 3){
    var numForHundreds = parseInt(numbers[2])
    if (numForHundreds === 4){
      allNumerals.push("CD");
    } else if (numForHundreds === 9) {
      allNumerals.push("CM");
    } else if (numForHundreds >= 5) {
      var remainder5 = numForHundreds % 5
        allNumerals.push("D");
      for (var i = remainder5; i > 0; i--){
        allNumerals.push("C")
      }
    } else {
      for (var i = numForHundreds; i > 0; i--){
        allNumerals.push("C")
      }
    } numbersArrayLength -= 1;
  }

  if (numbersArrayLength === 2){
    var numForTens = parseInt(numbers[1])
    if (numForTens === 4){
      allNumerals.push("XL");
    } else if (numForTens === 9) {
      allNumerals.push("XC");
    } else if (numForTens >= 5) {
      var remainder5 = numForTens % 5
        allNumerals.push("L");
      for (var i = remainder5; i > 0; i--){
        allNumerals.push("X")
      }
    } else {
      for (var i = numForTens; i > 0; i--){
        allNumerals.push("X")
      }
    } numbersArrayLength -= 1;
  }

  if (numbersArrayLength === 1){
    var numForOnes = parseInt(numbers[0])
    if (numForOnes === 4){
      allNumerals.push("IV");
    } else if (numForOnes === 9) {
      allNumerals.push("IX");
    } else if (numForOnes >= 5) {
      var remainder5 = numForOnes % 5
        allNumerals.push("V");
      for (var i = remainder5; i > 0; i--){
        allNumerals.push("I")
      }
    } else {
      for (var i = numForOnes; i > 0; i--){
        allNumerals.push("I")
      }
    } return allNumerals.join("")
  }
};

// var allNumerals = [];
// if (number > )
//
// if (number > 3) {
//   var remainder1 = number % 3
//   for (var i = remainder1; i > 0; i--) {
//     allNumerals.push("I");
//   }
//   allNumerals.push("V");
// } else {
//   for (var i = number; i > 0; i--) {
//     allNumerals.push("I");
//   }
// } return allNumerals.join("")
// };
