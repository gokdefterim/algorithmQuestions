function reverseWords(element){
    var letters = [];
    var reverse = "";
    var words = [];
    var reverseWords = [];
    var lastVersion = "";

    for (x=0; x<element.length; x++){
        letters.push(element.charAt(x));
    }

    for (x=element.length-1; x>-1; x--){
        reverse = reverse + letters[x];
    }

    words = reverse.split(" ");
    for (x=words.length-1; x>-1; x--){
        reverseWords.push(words[x]);
    }

    for (x=0; x<reverseWords.length; x++){
        lastVersion = lastVersion + reverseWords[x] + " ";
    }

    console.log(lastVersion);
    letters = [];
    reverse = "";
}