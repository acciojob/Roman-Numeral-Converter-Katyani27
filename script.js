function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  //your code here

    let romanNumeral = '';

    for (let i = 0; i < 7; i += 2) {
        let value = obj[i][1];
        let symbol = obj[i][0];

        let nextValue = obj[i + 2] ? obj[i + 2][1] : null;
        let nextSymbol = obj[i + 2] ? obj[i + 2][0] : null;

        // Check for subtractive combinations
        if (nextValue && num >= value - nextValue) {
            romanNumeral += nextSymbol + symbol;
            num -= (value - nextValue);
        } else {
            while (num >= value) {
                romanNumeral += symbol;
                num -= value;
            }
        }
    }

    return romanNumeral;
}



module.exports = convertToRoman
