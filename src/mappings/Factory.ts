

// Liquidity pool is created from the Factory contract.
import { PoolCreated } from "../../generated/Factory/Factory";
import { LiquidityPool } from "../../generated/schema";

// Create a pool entity and start monitoring events from the newly deployed pool contract specified in the subgraph.yaml.
export function handlePoolCreated(event: PoolCreated): void {
  const pool = new LiquidityPool(event.address.toHexString());
  pool.save();
}
