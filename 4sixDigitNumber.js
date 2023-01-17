function sixDigitNumber(){
    var sixDigits = [];

    for (x=100000; x<10000000; x++){
        var digits = [];
    
        for (y=0; y<6; y++){
            digits.push(parseInt(x.toString()[y]));
        }
        
        if(digits[0]+digits[1]+digits[2]+digits[3]+digits[4]+digits[5]===digits[0]*digits[1]*digits[2]*digits[3]*digits[4]*digits[5]){
            sixDigits.push(parseInt(digits[0].toString()+digits[1].toString()+digits[2].toString()+digits[3].toString()+digits[4].toString()+digits[5].toString()));
        }
    }
    console.log(sixDigits.pop());
}