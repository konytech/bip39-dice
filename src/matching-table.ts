import { generateMatchingTable } from "./utils";

// Generates and prints the D2(coin) D6(dice) matching table to the console
// Table saved at: matching-table-d2-d6-bip39.txt
const matchingTable = [...generateMatchingTable()];
matchingTable.forEach(x => {
    console.log(`${x[0]} ${x[1]}`);
});