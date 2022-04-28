async function main() {
    const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
    const web3 = createAlchemyWeb3("https://eth-mainnet.alchemyapi.io/v2/W-CZ6_R0DdlE4vCcOfb6riD4X7Nivtvy");
    const blockNumber = await web3.eth.getBlockNumber();
    console.log("The latest block number is " + blockNumber);
   }
   main();             