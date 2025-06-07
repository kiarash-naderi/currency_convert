
// sakhtar nerkhe arz ha
export interface CurrencyRatesData {
    [key: string]: number; // index signature
}

// const rates: CurrencyRatesData = {
//   USD: 1,
//   EUR: 0.87,
//   JPY: 144.81,
// };

// khoroji api nerkh arz 
export interface LatestRateResponse {
    data: CurrencyRatesData;
}

// const response: LatestRateResponse = {
//   data: {
//     USD: 1,
//     EUR: 0.87,
//     GBP: 0.74,
//   }
// };



// khoroji api list nam arz ha 
export interface SupportedSymbolsResponse {
    symbols: Record<string, string>;
}

// const symbols: SupportedSymbolsResponse = {
//   symbols: {
//     USD: "United States Dollar",
//     EUR: "Euro",
//     JPY: "Japanese Yen"
//   }
// };
