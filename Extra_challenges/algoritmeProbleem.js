let palindrome1 = "abba";
let palindrome2 = "1redder2";
let palindrome3 = "redderrotavatorabba";
let palindrome4 = "redderrotavatorabbadeleveledreleveler";
let palindrome5 = "liveontimeemitnoevilsexesredderrotavatorpullupifipullupabbadeleveledrelevelerdetartratedamanaplanacanalpanamasumsarenotsetasatestonerasmus";
function checkForPalindrome(newString) {
    // put characters into array
    let palinArray = newString.split('');
    // reverse them
    let reversedPalinArray = palinArray.reverse();
    // put back together
    let reversePalin = reversedPalinArray.join('')
    // do the check   eg: abba = abba even when reversed => canal =/= lanac
    // and give it back
    return reversePalin === newString

}
function checkForBiggestPalindrome(string) {
    // AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
    //  how do you find substrings? :(

    // grootste is momenteel 0 en een lege string!
    let length = 0;
    let biggestPalin = "";
    // SUBSTR IS EEN FUNCTIE WAUWWWWW
    let i =0
    for (i;i< string.length;i++){
        let subString = string.substr(i,string.length);

        for (let j=subString.length; j>=0; j--){
            let subVanSubString = subString.substr(0,j);

            if (subVanSubString.length <= 1) continue;

                if (checkForPalindrome(subVanSubString)){

                    //weg met nummers! en ondertussen ook wel grootste bijhouden
                    if(subVanSubString.length > length){
                        length = subVanSubString.length;
                        biggestPalin = subVanSubString.replace(/[0-9]/g, '');

                    }
                }
            }
        }
    return biggestPalin;
}

console.log(checkForBiggestPalindrome(palindrome1));
console.log(checkForBiggestPalindrome(palindrome2));
console.log(checkForBiggestPalindrome(palindrome3));
console.log(checkForBiggestPalindrome(palindrome4));
console.log(checkForBiggestPalindrome(palindrome5));
