//task1
// function alphabet_position(str){
//     var arr =[]
// alphabets="abcdefghijklmnopqrstuvwxyz".split('');
// for(var i = 0 ;i < str.length ; i++ ){
//     char = str.charAt(i).toLowerCase();
//     if(alphabets.indexOf(char)>-1)
//     arr.push(alphabets.indexOf(char)+1);   
// }

// for (var j = 0; j < arr.length; j++) {
//     console.log(alphabets[arr[j] - 1]); 
// }
// return arr;
// }
// var res = alphabet_position("The sunset sets at twelve o' clock");
// console.log(res);




////////////////////////////////////////////////////////////////////////

//task2
// var str = "is2 Thi1s T4est 3a" ;
// var arr =str.split(" ");
// var reg = /\d/;
// var nums=[];
// var sortedArr=[];
// for(var i = 0 ; i < arr.length ; i++){
//     var digit = arr[i].match(reg);
//     if (digit) {
//         nums.push(parseInt(digit[0])); 
//     }
// }
// console.log(nums);
// for (var i = 0; i < nums.length; i++) {
//     sortedArr[nums[i] - 1] = arr[i]; 
// }
// console.log(sortedArr);



////////////////////////////////////////////////////////////////////////


//task3
// function specialMultiply(x , y){
//     if(arguments.length==2){
//         return x * y ;
//     }
//     return function(num){
//        return x*num;

//     }
// }
// var pro= specialMultiply(4);
// console.log(pro(4));




/////////////////////////////////////////////////////////////////////////

//task4

function guessingGame(amount){
    var rand=Math.floor(Math.random()*11);
    console.log(rand);
    
    var num = 0;

    return function (guess) {
        num++;
        if(num<= amount){
        if (guess === rand) {
            return "You got it!"; 
        } else if (guess > rand) {
        return "Your guess is too high!"; 
        } else {
        return "Your guess is too low!";
        } }else{
            return "Game over! You've used all your guesses."; 
        }
    }
}
var game = guessingGame(3); 
console.log(game(1)); 
console.log(game(8)); 
console.log(game(5)); 
console.log(game(7));




