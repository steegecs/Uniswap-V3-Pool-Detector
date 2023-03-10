# Uniswap V3 Subgraph
This subgraph creates liquidity pool entities for Uniswap v3 and saves them. You can configure, build and deploy the subgraph using the following steps:

## Configuration and Build
To configure the subgraph, run the following command:

```
*make configure-subgraph protocol=$val1 network=$val2*
```

Replace $val1 with the desired protocol (e.g., ethereum) and $val2 with the desired network (e.g., mainnet). This command will generate a subgraph.yaml file based on the provided configuration.
 

## Deploy
To deploy the subgraph, run the following command:
```
graph deploy <subgraph-name>
```

Replace <subgraph-name> with the desired name for the subgraph. This command will deploy the subgraph to the Graph Node.
