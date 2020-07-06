var message = "heelo.\nmy name is abhay. Hello there. happy to meet you\ni am currently am doing\nAngular am training";
var slitOnSpace = null;
var splitOnDot = null;
function convertStringToStatement(message) {
    var message1 = message;
    message = message.replace(/(^\s*)|(\s*$)/gi, "");
    message = message.replace(/[ ]{2,}/gi, " ");
    message = message.replace(/\n/g, " ");
    splitOnDot = message.split('.');
    slitOnSpace = message.split(' ');
    return message.split(' ').length;
}
function wordWithLettera() {
    var stringWitha = [];
    for (var i = 0; i < slitOnSpace.length; i++) {
        if (slitOnSpace[i].indexOf('a') != -1) {
            stringWitha.push(slitOnSpace[i]);
        }
    }
    return stringWitha;
}
function matchingWord(wordToMatch) {
    var matchingCount = 0;
    for (var i = 0; i < slitOnSpace.length; i++) {
        if (slitOnSpace[i] === wordToMatch) {
            matchingCount++;
        }
    }
    return matchingCount;
}
function stringInStatementCase() {
    for (var i = 0; i < splitOnDot.length; i++) {
        if (i == 0) {
            splitOnDot[i] = splitOnDot[i].charAt(0).toUpperCase() + splitOnDot[i].slice(1);
        }
        else {
            splitOnDot[i] = splitOnDot[i].charAt(1).toUpperCase() + splitOnDot[i].slice(2);
        }
    }
    return splitOnDot;
}
console.log("No. of words in given string is " + convertStringToStatement(message));
console.log("String to Statement Case " + stringInStatementCase());
console.log("Words containing 'a' in them are " + wordWithLettera());
console.log("No. of word with matching word is " + matchingWord("am"));
