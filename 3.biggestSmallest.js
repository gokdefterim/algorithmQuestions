function biggestSmallest(array){
    var newArray;
    var theBiggest;
    var theSmallest;
    
    array.forEach((element) => {
        newArray = array;
        newArray.splice(array.indexOf(element),1);
        
        // Finding the biggest number
    
        if(newArray.every(function isBiggest(current){
            return current < element;
        }) === true){
            theBiggest = element;
        }
    
        // Finding the smallest number
    
        if(newArray.every(function isSmallest(current){
            return current > element;
        }) === true){
            theSmallest = element;
        }
    });
    
    console.log(`The biggest number is ${theBiggest} and the smallest number is ${theSmallest} and the difference between these numbers is ${theBiggest-theSmallest}.`)
}