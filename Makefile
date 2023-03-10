
# make configure-subgraph protocol=value1 network=value2
configure-subgraph:
	mustache deployments/$(protocol)/$(network)/configurations.json deployments/$(protocol)/template.yaml > subgraph.yaml && \
	graph codegen && \
	graph build