// Your code here...


// Code Challenge 1 - JavaScript - Palindromes

//check palindrome
  //keep it simple and just use string reverse to verify
var is_palindrome = function ( number ) {
  //convert to string
  var s = String(number);
  //reverse the string and convert to a num
  var reverse = Number( s.split("").reverse("").join("") );
  return number == reverse;
}

//check possibilities
var find_large_palindrome = function( num1, num2){
  var palindromes = [];

  //really suboptimal algorithm to brute force this
  //find all palindromes
  for ( var i = num1; i > 0; i-- ){
    for ( var j = num2; j > 0; j--) {
      var product = i * j;
      if (is_palindrome ( product ) ){
        palindromes.push( product );
      }
    }
  }
  var ascending = function( a, b) {
    return b - a;
  }
  return palindromes.sort( ascending )[0];
}

console.log(find_large_palindrome( 999, 999));
