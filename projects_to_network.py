import json

with open("projects.json") as file:
	projects = json.load(file)

network = {"nodes": [], "links": []}

tagIDs = {}

for project in projects:
	projectTags = project["tags"]
	for tagName in projectTags:
		if tagName not in tagIDs:
			tagID = len(network["nodes"]) + 1
			tagIDs[tagName] = tagID
			node = {"name": tagName, "nodeType": "tag", "id": tagID}
			network["nodes"].append(node)

for index, project in enumerate(projects, start=len(network["nodes"])+1):
	projectID = index
	project["nodeType"] = "project"
	project["id"] = projectID
	network["nodes"].append(project)
	tags = project["tags"]
	for tagName in tags:
		tagID = tagIDs[tagName]
		link = {"source": tagID, "target": projectID}
		network["links"].append(link)

with open("data.json", "w") as file:
	json.dump(network, file, indent=2)