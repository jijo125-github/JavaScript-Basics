// example of closure..

function doMath(c){
    var a = 4;
    var b = 5;

    function Multiply(){
        var answer = a * b * c;
        return answer;
    }

    return Multiply;
}
var cex = 3;
var answer = doMath(cex);
console.log(answer); //this will only return in a function format contents
console.log("Answer is", answer()); // an example of closure. it returns executed function answer after aacessing to variables outside the function.