function greatestCommonDivisor(num1, num2){

    var iList = [];
    var jList = [];
    var divisors = [];

    for (let i=num1; i>0; i--){
        num1%i == 0 ? iList.push(i) : false;
    }

    for (let j=num2; j>0; j--){
        num2%j == 0 ? jList.push(j) : false;
    }

    iList.forEach((greatest) =>{
        jList.includes(greatest) == true ? divisors.push(greatest) : false;
    })
    
    console.log(`The greatest common divisor is ${divisors[0]}.`);
    
    divisors[0] == 1 ? console.log(`These numbers are co-prime.`) : false;

}