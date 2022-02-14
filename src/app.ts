import * as bip39 from 'bip39';
import { generateMatchingTable } from './utils';
import { waitForInput } from "./utils";

const matchingTable = generateMatchingTable();
const result: Array<string> = [];

async function run() {
    let wordsCount = 0;

    while (wordsCount < 23) {

        const ans = await waitForInput(`[Word ${++wordsCount}] Waiting for randomness (e.g. t1234, h5411): `);

        if (matchingTable.has(ans)) {
            result.push(matchingTable.get(ans) as string);
        } else {
            console.log(`Entry "${ans}" doesn't match anything. Roll again!`)
            --wordsCount;
        }
    }

    console.log("[Word 24] Choose one of the following checksum:");

    bip39.wordlists.english.forEach(word => {
        if (bip39.validateMnemonic(`${result.join(" ")} ${word}`)) {
            console.log(`[Word 24] ${word}`);
        }
    });
}

run();