export interface FxRates {
    date: string;
    rates: Array<Rates>
}

export interface Rates {
    currency: string,
    rate: string
}

