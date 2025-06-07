import { fetchLatesRates } from "./api";
import { CurrencyConverter } from "./converter";
import promptSync from "prompt-sync";
import dotenv from "dotenv";
dotenv.config();


const prompt = promptSync();

async function main() {
    try {
        const response = await fetchLatesRates();
        const converter = new CurrencyConverter(response.data);

        console.log("Currency Converter is ready.");
        console.log("Type 'exit' at any time to quit.\n");

        console.log("Available currency codes:");
        console.log(Object.keys(response.data).join(", "));
        console.log("\n");

        while (true) {
            const from = prompt("Base currency (e.g., USD): ").toUpperCase();
            if (from === "EXIT") break;

            const to = prompt("Target currency (e.g., EUR): ").toUpperCase();
            if (to === "EXIT") break;

            const amountInput = prompt("Amount to convert: ");
            if (amountInput.toLowerCase() === "exit") break;

            const amount = parseFloat(amountInput);
            if (isNaN(amount)) {
                console.log("Invalid number. Please try again.\n");
                continue;
            }

            try {
                const result = converter.convert(from, to, amount);
                console.log(`${amount} ${from} = ${result.toFixed(2)} ${to}\n`);
            } catch (err) {
                console.log(`Conversion failed: ${(err as Error).message}\n`);
            }
        }

        console.log("Exiting currency converter. Goodbye!");
    } catch (error) {
        console.error("Startup Error:", (error as Error).message);
    }
}

main();
