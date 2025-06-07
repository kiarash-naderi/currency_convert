
export interface CurrencyRatesData {
    [key: string]: number;
}


export interface LatestRateResponse {
    data: CurrencyRatesData;
}


export interface SupportedSymbolsResponse {
    symbols: Record<string, string>;
}

