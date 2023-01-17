function reverseString(element){
    var letters = [];
    var reverse = "";

    for (x=0; x<element.length; x++){
        letters.push(element.charAt(x));
    }

    for (x=element.length-1; x>-1; x--){
        reverse = reverse + letters[x];
    }

    console.log(reverse);
    letters = [];
    reverse = "";
}