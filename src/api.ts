import { LatestRateResponse } from "./types";
import dotenv from "dotenv";

dotenv.config();

const API_KEY = process.env.API_KEY!;
const BASE_URL = process.env.BASE_URL!;

export async function fetchLatesRates(): Promise<LatestRateResponse> {
    const url = `${BASE_URL}?apikey=${API_KEY}`;

    const response = await fetch(url);
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "API Error");
    }


    const data: LatestRateResponse = await response.json();
    return data;
}


