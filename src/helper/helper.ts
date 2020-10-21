export const importImages = (r: any) => {    
    return r.keys().map(r);
}

export const getCurrency = () => {
    return [["USD", "US Dollar"], ["JPY", "Japanese Yen"], ["BGN", "Bulgarian Lev"], ["CZK", "Czech Koruna"], 
    ["DKK", "Danish Krone"], ["GBP", "Pound Sterling"], ["HUF", "Hungary Forint"], 
    ["PLN", "Poland Zloty"], ["RON", "Romanian Leu"], ["SEK", "Swedish Krona"], 
    ["CHF", "Swiss Franc"], ["ISK", "Iceland Krona"], ["NOK", "Norwegian Krone"],
    ["HRK", "Croatia Kuna"], ["RUB", "Russian Ruble"], ["TRY", "Turkish Lira"],
    ["AUD", "Australian Dollar"], ["BRL", "Brazilian Real"], ["CAD", "Canadian Dollar"],
    ["CNY", "Chinese Yuan Renminbi"], ["HKD", "Hong Kong Dollar"], ["IDR", "Indonesian Rupiah"], 
    ["ILS", "New Israeli Sheqel"], ["INR", "Indian Rupee"], ["KRW", "South Korean Won"],
    ["MXN", "Mexican Peso"], ["MYR", "Malaysian Ringgit"], ["NZD", "New Zealand Dollar"],
    ["PHP", "Philippine Peso"], ["SGD", "Singapore Dollar"], ["THB", "Thai Baht"],
    ["ZAR", "South African Rand"], ["EUR", "Euro"]]
}



export const getFlags = (currency: string) => {
    return currency ? `currency-flag currency-flag-xl currency-flag-${currency.toLowerCase()}` : ''
}