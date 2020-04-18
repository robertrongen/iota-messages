const Iota = require('iota/core');
const Converter = require('@iota/converter');
const TransactionConverter = require('@iota/transaction-converter');

const iota = Iota.composeAPI({
    provider: 'https://nodes.devnet.iota.org:443'
})

const seed = 'LKCZPHLLDIYRRJGKLM99ZOP9UICYDPMXROFZQXFHNSLR9JM9ZEUEGZSDMDJ9VJTFKIHIIGFJDNMFQOWPN';
const outputAddress = 'IXOGDENZIWASTKQSNPMQUDCFQXRMYTWNBVLOFMKFWEZNNBPYHSFGPVIMCRNIUBQQLVBQEEZIQ9XUADGHCHNTBISOV9';

const depth = 3;                // With depth=3 we define that we start the Random Walk, three milestones deep in the tangle
const minWeightMagnitude = 9;   // minWeightMagnitude=9 defines the difficulty of the PoW



