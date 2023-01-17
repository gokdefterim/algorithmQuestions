function duplicatedNumber(array){

    var secondArray = array;
    var newArray = [];
    
    for (let x=1; x<11; x++){
        if (array.indexOf(x) !== -1){
            secondArray.splice(secondArray.indexOf(x), 1);
            if (secondArray.indexOf(x) !== -1){
                newArray.push(x);
            }
        }
    }
    
    if(newArray.length === 0){
        console.log("There is no duplicated number.");
    }else if(newArray.length === 1){
        console.log("Duplicated number is: " + newArray);
    }else{
        console.log("Duplicated numbers are: " + newArray.join());
    } 
}

