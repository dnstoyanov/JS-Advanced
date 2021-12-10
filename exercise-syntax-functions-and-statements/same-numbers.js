function sameNumbers(input){
    let str = input.toString();
    let result = parseInt(str[0]); 
    let isSame = true;
    
    for (let i = 1; i < str.length; i++) {
        result += parseInt(str[i]);

        if (str[i] != str[i-1]) {
            isSame = false;
        }
    }

    console.log(isSame);
    console.log(result)
}

sameNumbers(2222222);