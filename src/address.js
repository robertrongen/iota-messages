const Iota = require('@iota/core')

const seed =
'LKCZPHLLDIYRRJGKLM99ZOP9UICYDPMXROFZQXFHNSLR9JM9ZEUEGZSDMDJ9VJTFKIHIIGFJDNMFQOWPN'
const security = 2      // With security=2 (security level 2) we need two transactions for the signature in a value transaction
const checksum = true   // with checksum=true that we want to generate addresses with checksums

// create the addresses
for (let i=0; i<10; i++) {
    console.log(Iota.generateAddress(seed, i, security, checksum))
}

