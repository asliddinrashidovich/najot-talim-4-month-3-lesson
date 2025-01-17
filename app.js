// masala 1

function sleepIn(weekday, vacation){
    if(weekday == true && vacation == false) {
      return false
    } else {
      return true
    }
}
sleepIn(true, true)

// masala 2

function monkeyTrouble(aSmile, bSmile){
    if (aSmile == true && bSmile == true) {
          return true
      } else if (aSmile == false && bSmile == false) {
          return true
      } else {
          return false
      }
}
monkeyTrouble(true, false)

// masala 3

function sumDouble(a, b){
    if(a != b) {
      return a + b
    } else {
      return (a + b) * 2
    }
}
sumDouble(3, 4);

// masala 4

function diff21(n){
    if(n < 21) {
      return Math.abs(21 - n) 
    } else {
      return Math.abs((21-n)*2)
    }    
}
diff21(4)

// masala 5

function parrotTrouble(talking, hour){
    if(talking && hour < 7 || talking && hour > 20) {
      return true
    } else {
      return false 
    }
}
parrotTrouble(true, 6)

// masala 6

function makes10(a, b){
    if(a == 10 || b == 10 || a + b == 10) {
      return true
    } else {
      return false
    }
}
makes10(3, 10)

// masala 7

function nearHundred(n){
    if((n > 89 && n < 111) || (n > 189 && n < 211) ) {
       return true
    } else {
      return false
    }
}
nearHundred(98);

// masala 8

function posNeg(a, b, negative){
    if((a < 0 && b > 0) && !negative) {
      return true
    } else if((a > 0 && b < 0) && !negative) {
      return true
    } else if ((a < 0 && b < 0) && !negative){
      return false
    } else if ((a < 0 && b < 0) && negative){
      return true
    } else {
      return false
    }
}
posNeg(3, -5, true);

// masala 9

function nottString(str){
    if(str.slice(0, 3) == 'not') {
         return str
    } else {
      return 'not ' + str
    }
}
nottString('Javascript');

// masala 10

function missingChar(str, n){
    return str.slice(0, n) + str.slice(n + 1);
}
missingChar('Javascript', 3)

// masala 11

function frontBack(str){
    if(str.length != 1) {
      return str.slice(str.length - 1) + str.slice(1, str.length - 1) + str.slice(0, 1) 
    } else {
      return str
    }
}
frontBack("Javascript");

// masala 12

function front3(str){
    if(str.length <= 3) {
      return str + str + str
    } else {
      return str.slice(0, 3) + str.slice(0, 3) + str.slice(0, 3)
    }
}
front3("Javascript")

// masala 13

function backAround(str){
    return str.charAt(str.length - 1) + str + str.charAt(str.length - 1)
}
backAround("Javascript")

// masala 14

function or35(n){
    if(n % 3 == 0 || n % 5 == 0) {
      return true
    } else {
      return false
    }
}
or35(15)

// masala 15

function front22(str){
    return str.slice(0, 2) + str + str.slice(0, 2)
}
front22('Javascript')