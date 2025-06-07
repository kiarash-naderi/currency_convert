import { CurrencyRatesData } from "./types";

export class CurrencyConverter {
    constructor(
        public rates: CurrencyRatesData) {

    }

    convert(from: string, to: string, amount: number): number {
        const fromRate = this.rates[from]; 
        const toRate = this.rates[to];

        if (!fromRate || !toRate) {
            throw new Error("Invalid currency symbol");
        }
        const amountInBase = amount / fromRate;
        const convertedAmount = amountInBase * toRate;

        return convertedAmount
    }

}