require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope clock bridge silver normal note soccer mixture gesture brave forget tell'; 
let testAccounts = [
"0x5fd72266f972c9dde7128b44b0ca3fa7c6f66a5c2de6e3cb8f9c7e1316ac5a48",
"0xc7789291ebd70cf53424f1bee1ece6c7e6185fff509cc0332ab2d5aa1ac87dd8",
"0x212934bb6c6856a277745446b589b48bbe15e17a6746b8f207af0447a83ab984",
"0x665de3c9cf63b8a574fcf92b36c47c2c0a6ea3105804e2f41ed0073dc7707af2",
"0x65a50bca44b2db45c41382327a24bd9f76bdf6fced8298721cac61e5aa750da1",
"0x68f7311efc860d1d64eac80abe7e6ea2a1f2cfba05c15bcbff589347d23f3079",
"0x5ad82c2c7b93cf687b9df86f357d0e1fb8574af1b12dc7d7e799f519ff48428a",
"0x989aa21542512c68371ca92f087994f880364f76cfd97d0b237d0b4d3afacd3e",
"0x9d5498f976d6ce88882b9850e65d21f93233a543c73d7140f4afadc4b9927e3e",
"0xb64f1e8bdcebd5d922ac48619e85af82feb74f5680ddf3893a631ef82ba2056b"
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

