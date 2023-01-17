function isPrime(number){

    var iList = [];

    for (let i=2; i<number; i++){
        number%i == 0 ? iList.push(i) : false;
    }

    if(iList.length>0){
        console.log(false);
        console.log('This is not a prime number because of divisibility by '+ iList[0]);
    }
    else{
        console.log(true);
    }
}