require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow frown ski stomach deny oval coast hunt problem equal gesture'; 
let testAccounts = [
"0x2b9c6424e7172face400e4208db4cecd4632c494504b781eb65a1ddd661a74de",
"0x1db4265354d1e023e46710641fbec01ddcbe378a2e6dfee951f6aee16e86b224",
"0x4b47f188dbd004ad3e868310bf72676a785935f75f04c5d9c9f1ec220bbf4137",
"0x3d6884e749a9cdfd681a68d1f84832276a990a9c4f7017fd85fbb777a1b5af60",
"0xc5d088fed13f00f245533aa8e74276bb486cdce2e8d24d1a2960cf1f0c9ac315",
"0xacc2e807e403354d5f73b82a07aa8c898eafeb0a4760764e8d18a49d386436b1",
"0xbdba7902fc4ceafcf660cfbf02560868af7a96632befd102a71ac2d5edb1b45b",
"0xfc316363f54a2957a6c128e9d6b0c8601aba1a69bfad564a2c18ef183fa78b45",
"0xc778cb1e8292d5e127913448130021dfc580c87ff17107daf3f7dfad6558a4a2",
"0x242a4cad9c84b3ea8704edabe9f263a037e47334afca6bcc6fe743272229cb94"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

