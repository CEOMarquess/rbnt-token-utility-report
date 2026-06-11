# RBNT Token Utility and Ecosystem Visibility Report

**Author:** [@ceomarquess](https://x.com/ceomarquess) on X  
**Compiled:** June 2026  
**Reward Task:** RBNT Token Utility and Ecosystem Visibility Report  
**Contributor Reward:** 26,400 RBNT (~$100)

---

## What This Repository Contains

This repository is the GitHub deliverable for the Redbelly Network community reward task. It contains the DeFiLlama TVL adapter for the Redbelly Network protocol.

The full submission package (Token Utility Report, Explainer Article, DeFiLlama Kit, RWA.xyz Kit) is submitted separately as a file upload on the task platform.

---

## File: index.js

This is the DeFiLlama TVL adapter for Redbelly Network (RBNT).

**What it does:** Reads RBNT staked in Redbelly Network node operator contracts on Mainnet (Chain ID 151). Every node on the network must stake exactly 100,000 RBNT to participate. Nodes that misbehave are slashed. This staked RBNT represents the protocol's security capital and is the primary on-chain TVL source for the network.

**Chain:** Redbelly Mainnet  
**Chain ID:** 151  
**RPC:** https://governors.mainnet.redbelly.network  
**Block Explorer:** https://redbelly.routescan.io  
**Bootstrap Registry Contract:** `0xDAFEA492D9c6733ae3d56b7Ed1ADB60692c98Bc5`

### Before Deploying

Resolve the live staking contract address from the Bootstrap Registry before submitting the Pull Request to DefiLlama/DefiLlama-Adapters. Instructions are in the adapter comments inside `index.js`.

```js
const { ethers } = require("ethers");
const provider = new ethers.JsonRpcProvider(
  "https://governors.mainnet.redbelly.network"
);
const registry = new ethers.Contract(
  "0xDAFEA492D9c6733ae3d56b7Ed1ADB60692c98Bc5",
  ["function getContractAddress(string) view returns (address)"],
  provider
);
const stakingAddr = await registry.getContractAddress("staking");
console.log("Staking contract:", stakingAddr);
```

---

## TVL Methodology

Counts RBNT staked in Redbelly Network node operator contracts on Mainnet (Chain ID 151). Each node must stake 100,000 RBNT to participate. Contract address resolved from the Bootstrap Registry at `0xDAFEA492D9c6733ae3d56b7Ed1ADB60692c98Bc5`.

**Sources:**
- vine.redbelly.network/nodes/staking
- vine.redbelly.network/nodes/rewards-and-incentives
- vine.redbelly.network/environments

---

## All Sources Used in This Submission

All tokenomics claims in the full report cite official Redbelly documentation only. No speculative price targets are included anywhere in the submission.

| Resource | URL |
|---|---|
| Official Website | https://redbelly.network |
| Whitepaper (Nov 2024) | https://redbelly.network/redbelly-network-whitepaper.pdf |
| Developer Portal | https://vine.redbelly.network |
| Technical Docs | https://docs.redbelly.network |
| Network Fees | https://vine.redbelly.network/network-fees |
| Fee Distribution | https://vine.redbelly.network/network-fees/distribution |
| Node Staking | https://vine.redbelly.network/nodes/staking |
| Node Rewards | https://vine.redbelly.network/nodes/rewards-and-incentives |
| Node Governance | https://vine.redbelly.network/nodes/governance |
| Environments | https://vine.redbelly.network/environments |
| Receptor (Identity) | https://docs.redbelly.network/pages/receptor |
| Block Explorer | https://redbelly.routescan.io |
| DeFiLlama Listing Docs | https://docs.llama.fi/list-your-project/submit-a-project |
| RWA.xyz Listing Docs | https://docs.rwa.xyz/get-listed-on-rwa.xyz/for-tokenized-asset-protocols-issuers-and-originators |

---

## License

MIT — see LICENSE file.
