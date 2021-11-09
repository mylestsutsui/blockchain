const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('29a7bd995265b6e80513daf12f5b6893eff43d3144fbbb763f6e193f3e1793e7');
const myWalletAddress = myKey.getPublic('hex');

let tsunamiCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1. signTransaction(myKey);
tsunamiCoin.addTransaction(tx1);

console.log('\nStarting the miner...');
tsunamiCoin.minePendingTransactions(myWalletAddress);

console.log('\nBalance of Myles is ', tsunamiCoin.getBalanceOfAddress(myWalletAddress));
tsunamiCoin.chain[1].transactions[0].amount = 1;
console.log('Is chain valid?', tsunamiCoin.isChainValid());

