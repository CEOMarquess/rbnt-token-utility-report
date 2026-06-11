// Redbelly Network (RBNT) — DeFiLlama TVL Adapter
// Author: @ceomarquess
// Chain: Redbelly Mainnet | Chain ID: 151
// RPC: https://governors.mainnet.redbelly.network
// Block Explorer: https://redbelly.routescan.io
// Bootstrap Registry: 0xDAFEA492D9c6733ae3d56b7Ed1ADB60692c98Bc5
// Source: vine.redbelly.network/environments

const sdk = require("@defillama/sdk");

const STAKING_CONTRACT = "0xTOBE_RESOLVED_VIA_BOOTSTRAP_REGISTRY";
const RBNT_COINGECKO_ID = "redbelly-network";

async function tvl(timestamp, block, chainBlocks) {
  const balances = {};

  const stakedBalance = await sdk.api.eth.getBalance({
    target: STAKING_CONTRACT,
    block: chainBlocks["redbelly"],
    chain: "redbelly",
  });

  sdk.util.sumSingleBalance(
    balances,
    RBNT_COINGECKO_ID,
    stakedBalance.output
  );

  return balances;
}

module.exports = {
  redbelly: {
    tvl,
  },
  methodology:
    "Counts RBNT staked in Redbelly Network node operator contracts on Mainnet " +
    "(Chain ID 151). Each node must stake 100,000 RBNT to participate " +
    "(source: vine.redbelly.network/nodes/staking). " +
    "Contract address resolved from Bootstrap Registry " +
    "0xDAFEA492D9c6733ae3d56b7Ed1ADB60692c98Bc5 " +
    "(source: vine.redbelly.network/environments).",
};
