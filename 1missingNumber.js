function missingNumber(array){
    var newArray = [];

    for (let x=1; x<11; x++){
        if (array.indexOf(x) === -1){
            newArray.push(x);
        }
    }

    if(newArray.length === 0){
        console.log("There is no missing number.");
    }else if(newArray.length === 1){
        console.log("Missing number is: " + newArray);
    }else{
        console.log("Missing numbers are: " + newArray);
    }   
}