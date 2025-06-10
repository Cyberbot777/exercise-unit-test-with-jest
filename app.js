// Currency conversion rates based on 1 Euro
let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87
};

// Convert from Euro to Dollar
const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    return valueInDollar;
};

// Convert from Dollar to Yen (USD ➝ EUR ➝ JPY)
const fromDollarToYen = function(valueInDollar) {
    let valueInEuro = valueInDollar / oneEuroIs.USD;
    let valueInYen = valueInEuro * oneEuroIs.JPY;
    return valueInYen;
};

// Convert from Yen to Pound (JPY ➝ EUR ➝ GBP)
const fromYenToPound = function(valueInYen) {
    let valueInEuro = valueInYen / oneEuroIs.JPY;
    let valueInPound = valueInEuro * oneEuroIs.GBP;
    return valueInPound;
};

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };
