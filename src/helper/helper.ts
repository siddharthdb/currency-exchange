export const importImages = (r: any) => {    
    return r.keys().map(r);
}

export const getCurrency = () => {
    return ["USD", "JPY", "BGN", "CZK", "DKK", "GBP", "HUF", "PLN", "RON", "SEK", "CHF", "ISK", "NOK", "HRK", "RUB", "TRY",
        "AUD", "BRL", "CAD", "CNY", "HKD", "IDR", "ILS", "INR", "KRW", "MXN", "MYR", "NZD", "PHP", "SGD", "THB", "ZAR", "EUR"]
}

export const getFlags = (currency: string) => {
    return `currency-flag currency-flag-xl currency-flag-${currency.toLowerCase()}`
}