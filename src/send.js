const Iota = require('@iota/core');
const Converter = require('@iota/converter');
const TransactionConverter = require('@iota/transaction-converter');

const iota = Iota.composeAPI({
    // provider: 'https://nodes.devnet.iota.org:443'
    provider: 'https://nodes.devnet.thetangle.org:443'
    
});

const seed = 'LKCZPHLLDIYRRJGKLM99ZOP9UICYDPMXROFZQXFHNSLR9JM9ZEUEGZSDMDJ9VJTFKIHIIGFJDNMFQOWPN';
const outputAddress = 'IXOGDENZIWASTKQSNPMQUDCFQXRMYTWNBVLOFMKFWEZNNBPYHSFGPVIMCRNIUBQQLVBQEEZIQ9XUADGHCHNTBISOV9';

const depth = 3;                // With depth=3 we define that we start the Random Walk, three milestones deep in the tangle
const minWeightMagnitude = 9;   // minWeightMagnitude=9 defines the difficulty of the PoW
const tag = 'IOTACADEMY9TUTORIAL9MESSAGE';
const message = Converter.asciiToTrytes('Hello IOTA!');

// Define the transaction
const transfers = [
    {
        value: 0,
        address: outputAddress,
        tag: tag,
        message: message
    }
 ];

// Create the transaction
iota.prepareTransfers(seed, transfers)
    .then(trytes => trytes.map(hash => 
        console.log(TransactionConverter.asTransactionObject(hash)))
    );

