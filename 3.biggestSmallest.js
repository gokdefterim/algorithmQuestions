function biggestSmallest(array){
    var theBiggest;
    var theSmallest;
    var checkBiggest = [];
    var checkSmallest = [];

    for (x=0; x<array.length; x++){
        for (y=0; y<array.length; y++){
            if(array[x]<array[y]){
                checkBiggest.push("Sorry, not the biggest.");
            }
            if(array[x]>array[y]){
                checkSmallest.push("Sorry, not the smallest.");
            }
        }
        if(checkBiggest.length==0){
            theBiggest = array[x];
        }
        if(checkSmallest.length==0){
            theSmallest = array[x];
        }
        checkBiggest = [];
        checkSmallest = [];
    }

    console.log(`The biggest number is ${theBiggest} and the smallest number is ${theSmallest} and the difference between these numbers is ${theBiggest-theSmallest}.`);
}

