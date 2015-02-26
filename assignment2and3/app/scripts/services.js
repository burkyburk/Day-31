angular.module('app.services', [])
  .factory('randomArray', function() {
    //Create a function that takes an array of values and returns one randomly selected value from that array.

    return function(array) {

      if (array.constructor !== Array) {
        throw 'You did not enter an array.';
      }

      var randomNum = Math.floor(Math.random() * array.length);
      return array[randomNum];
    }
  })
  .factory('ROT13', function() {
    //Create a function that takes a ROT-13 encrypted string and returns the decrypted version of that string.
    return function(undecodedString) {

      var storeVal = 0;
      var decodedName = '';
      var lowerMin = 'a'.charCodeAt();
      var lowerMiddle = 'm'.charCodeAt();
      var lowerMax = 'z'.charCodeAt();
      var upperMin = 'A'.charCodeAt();
      var upperMiddle = 'M'.charCodeAt();
      var upperMax = 'Z'.charCodeAt();


      if (typeof(undecodedString) != 'string') {
        throw 'You did not enter a string.';
      }

      for (var y = 0; y < undecodedString.length; y++) {

        if ((undecodedString[y].charCodeAt() > lowerMax) || (undecodedString[y].charCodeAt() < upperMin)) {
          throw 'You can only encode letters from a to z (or uppercase A to Z)';
        }
      }


      for (var i = 0; i < undecodedString.length; i++) {

        storeVal = undecodedString.charCodeAt(i);

        if (storeVal >= lowerMin && storeVal <= lowerMax) {

          if (storeVal <= lowerMiddle) {
            storeVal += 13;
            decodedName = decodedName + String.fromCharCode(storeVal);
          } else {
            storeVal -= 13;
            decodedName = decodedName + String.fromCharCode(storeVal);
          }
        } else if (storeVal >= upperMin && storeVal <= upperMax) {

          if (storeVal <= upperMiddle) {
            storeVal += 13;
            decodedName = decodedName + String.fromCharCode(storeVal);
          } else {
            storeVal -= 13;
            decodedName = decodedName + String.fromCharCode(storeVal);
          }
        }

      }
      return decodedName;
    }
  })
  .factory('dashString', function() {
    //Create a function that takes a string and returns a string with a dash (-) in between each character without using .split or .join.
    return function(string) {

      var newString = '';

      if (typeof string != 'string') {
        throw 'You did not enter an string.';
      }

      for (var i = 0; i < string.length; i++) {
        newString += string.slice(i, i + 1) + "-";
      }
      newString = newString.slice(0, -1);
      return newString;
    }
  });
