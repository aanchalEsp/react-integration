import { FullNode } from 'chia-client';

const fullNode = new FullNode({
    protocol: 'https',
    hostname: 'localhost',
    port: 8555
});

const blockchain = fullNode.getBlockchainState();

console.log(blockchain.blockchain_state.space);
