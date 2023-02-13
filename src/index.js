module.exports = function toReadable (number) {
    const single = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const duo = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    const except = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]
    let data = String(number);
    let firstSym = data[0];
    let secondSym = data[1];
    let thirdSym = data[2];

    if (number < 10) {
        return single[data];
    } else 
    if (number > 9 && number < 20) {
        return except[data - 10];
    } else
    if (number > 19 && number < 100) {
        if (secondSym == 0) {
            return duo[firstSym - 2];
        } else
        return duo[firstSym - 2] + " " + single[secondSym];
    } else 
    if (number > 99) {
        if (secondSym == 0 && thirdSym == 0) {
            return single[firstSym] + " hundred";
        }
        if (secondSym == 0) {
            return single[firstSym] + " hundred " + single[thirdSym];
        } else
        if (secondSym + thirdSym > 9 && secondSym + thirdSym < 20) {
            return single[firstSym] + " hundred " + except[thirdSym];
        } else
        if (thirdSym == 0) {
            return single[firstSym] + " hundred " + duo[secondSym - 2];
        } else
        return single[firstSym] + " hundred " + duo[secondSym - 2] + " " + single[thirdSym];
    }
}
