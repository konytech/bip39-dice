import * as bip39 from 'bip39';
import * as readline from 'readline';

export function waitForInput(query: string) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise<string>(resolve => rl.question(query, ans => {
        rl.close();
        resolve(ans);
    }));
}

export function generateMatchingTable() {
    const matchingTable: Map<string, string> = new Map();
    let coin: "heads" | "tails" = "heads";
    let dice = 1111;

    bip39.wordlists.english.forEach(word => {

        const d2 = coin[0]; // "h" or "t"
        const d6 = dice;    // 1111 to 6666
        matchingTable.set(`${d2}${d6}`, word);

        do {
            if (++dice === 6667) {
                coin = "tails";
                dice = 1111;
            }
        } while (dice.toString().match(/[07-9]/g));
    });

    return matchingTable;
}