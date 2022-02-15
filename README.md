# Generate a BIP39 mnemonic with a coin and a dice

## Introduction
BIP39 mnemonics are made of 24 words (23 words + 1 checksum). \
This program guides you to pick the first 23 words, then generates a valid checksum to use as the 24th word.

It is recommended to generate the mnemonic from an offline computer.

## Step 1
Install dependencies:
```
yarn
```

## Step 2 (optional)
Disconnect from the internet.

## Step 3
Run the program:
```
yarn start
```

For each word to randomly pick, do the following:
1. Flip a coin
2. Roll a dice 4 times
   
Translate the results to the following encoding: **XYYYY** \
Where:
* X is either "h" for heads or "t" for tails
* Y is a number between 1 and 6

### Example
For **h5642** the coin flipped on **heads**, then the 4 dice rolls were **5, 6, 4, 2** respectively.

### Write down each word
After each new encoding, write the matching word on a piece of paper. \
To find the word that corresponds to the encoding, use the matching table at `./matching-table-D2-D6-bip39.txt`

### Privacy
To increase privacy, none of the 23 words will be printed to the console.