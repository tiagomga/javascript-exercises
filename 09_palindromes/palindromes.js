const palindromes = function (string) {
    let continuousString = string
                            .replaceAll(', ', '')
                            .replaceAll(' ', '')
                            .replaceAll('.', '')
                            .replaceAll('!', '')
                            .toLowerCase();
    let stringLength = continuousString.length;
    for (let i = 0; i < (stringLength / 2); i++) {
        if (continuousString.charAt(i) !== continuousString.charAt(stringLength-1-i)) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
