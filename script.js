function add(){
    var firstNumber = Number(numberOne.value)
    var secondNumber = Number(numberTwo.value)
    var thirdNumber = Number(numberThree.value)
    var Addition = firstNumber + secondNumber + thirdNumber
    console.log(firstNumber + '+' + secondNumber + '+' + thirdNumber);
    console.log(Addition);
    showResult.innerHTML = `<h5> ${firstNumber}+${secondNumber}+${thirdNumber}= ${Addition}</h5>`
}
function subtract(){
    var firstNumber = numberOne.value
    var secondNumber = numberTwo.value
    var thirdNumber = numberThree.value
    var Subtraction = firstNumber - secondNumber - thirdNumber
    console.log(firstNumber + '-' + secondNumber + '-' + thirdNumber);
    console.log(Subtraction);
    showResult.innerHTML = `<h5> ${firstNumber}-${secondNumber}-${thirdNumber}= ${Subtraction}</h5>`
}
function Multiply(){
    var firstNumber = numberOne.value
    var secondNumber = numberTwo.value
    var thirdNumber = numberThree.value
    var Multiplication = firstNumber * secondNumber * thirdNumber
    console.log(firstNumber + '*' + secondNumber + '*' + thirdNumber);
    console.log(Multiplication);
    showResult.innerHTML = `<h5> ${firstNumber}*${secondNumber}*${thirdNumber}= ${Multiplication}</h5>`
}
function divide(){
    var firstNumber = numberOne.value
    var secondNumber = numberTwo.value
    var thirdNumber = numberThree.value
    var Division = firstNumber / secondNumber / thirdNumber
    console.log(firstNumber + '/' + secondNumber + '/' + thirdNumber);
    console.log(Division);
    showResult.innerHTML = `<h5> ${firstNumber}/${secondNumber}/${thirdNumber}= ${Division}</h5>`
}
function module(){
    var firstNumber = numberOne.value
    var secondNumber = numberTwo.value
    var thirdNumber = numberThree.value
    var Module = firstNumber % secondNumber % thirdNumber
    console.log(firstNumber + '%' + secondNumber + '%' + thirdNumber);
    console.log(Module);
    showResult.innerHTML = `<h5> ${firstNumber}%${secondNumber}%${thirdNumber}= ${Module}</h5>`
}