function fibo(element){
var fibonacci = [0,1];

    for (x=0; x<element-2; x++){
        fibonacci.push(fibonacci[fibonacci.length-1]+fibonacci[fibonacci.length-2]);
     }

    console.log(fibonacci.pop());
    fibonacci = [0,1]
}