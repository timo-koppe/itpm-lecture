exports.calc = (itpmGrade, itpGrade) => {
    var weighted_average = 0.75 * itpGrade + 0.25 * itpmGrade;

    var integer = Math.floor(weighted_average);
    var decimal = weighted_average % 1;

    if (decimal < 0.15) {
        decimal = 0.0;
    } else if (decimal < 0.5) {
        decimal = 0.3;
    } else if (decimal < 0.85) {
        decimal = 0.7;
    } else {
        decimal = 1.0;
    }
        
    var result = integer + decimal;

    return parseFloat(result.toFixed(1));
}