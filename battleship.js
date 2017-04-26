var currentGuess;
var isSunk = false;
var totalGuesses = 0;
var randomLocation = Math.floor(Math.random() * 5);
var shipLocation1 = randomLocation;
var shipLocation2 = shipLocation1 + 1;
var shipLocation3 = shipLocation2 + 1;
var hits = 0;



while (isSunk == false) {
  // continue playing
  // ask the user
  currentGuess = prompt("Enter a location");

  if (currentGuess > 6 || currentGuess < 0) {
    alert('You need to enter a number between 0 and 6');
  } else {
    totalGuesses = totalGuesses + 1;
    // evaluate the currentGuess
    if (currentGuess == shipLocation1 || currentGuess == shipLocation2 || currentGuess == shipLocation3) {
      alert("HIT");
      hits = hits + 1;
      if (hits == 3) {
        isSunk = true;
      }
    } else {
      alert('MISS');
    }
  }
}
alert("Well done you have sunk the ship!");
var stats = "You took " + totalGuesses + " guesses to sink the ship. You accuracy was " + (3/totalGuesses);
alert(stats);





// if (isSunk == true) {
//
// }
