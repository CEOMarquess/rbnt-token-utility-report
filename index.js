// ============================================================================
// Redbelly Network (RBNT) — DeFiLlama TVL Adapter
// Author: @ceomarquess
// Chain: Redbelly Mainnet | Chain ID: 151
// RPC: https://governors.mainnet.redbelly.network
// Explorer: https://redbelly.routescan.io
// ============================================================================
//
// STAKING CONTRACT: 0x818c3c113Ce240Ac92508f52F3DdDA675E6b6B9A
// Name: StakingEscrowUpgradable on Redbelly Mainnet
// Source: vine.redbelly.network/nds-staking
// Function: deposit(address payee) public payable
// Requirement: Each node stakes exactly 100,000 RBNT to participate.
//
// TVL METHODOLOGY:
// Reads the native RBNT balance held in the StakingEscrowUpgradable
// contract. This represents RBNT bonded by all active Governor and
// Candidate nodes. Nodes that misbehave are slashed, reducing this
// balance automatically. Source: vine.redbelly.network/nds-staking
// ============================================================================

const sdk = require("@defillama/sdk");

const STAKING_CONTRACT = "0x818c3c113Ce240Ac92508f52F3DdDA675E6b6B9A";
const RBNT_COINGECKO_ID = "redbelly-network";

async function tvl(api) {
  const balance = await api.eth.getBalance({
    target: STAKING_CONTRACT,
    chain: "redbelly",
  });
  api.add(RBNT_COINGECKO_ID, balance);
}

module.exports = {
  methodology:
    "Sums RBNT natively staked in Redbelly Network node operator " +
    "escrow contract (StakingEscrowUpgradable at " +
    "0x818c3c113Ce240Ac92508f52F3DdDA675E6b6B9A on Mainnet, Chain ID 151). " +
    "Each node stakes 100,000 RBNT as a participation bond. " +
    "Nodes that misbehave are slashed. " +
    "Source: vine.redbelly.network/nds-staking.",
  redbelly: { tvl },
};
