// TODO
// add arrowheads
// timeline
// click to explore

// LINKS
// https://app.diagrams.net/#G14yOZKXzR3gkUwxLYpMCg464-tFERWpJM
// http://getspringy.com/
// https://github.com/vasturiano/3d-force-graph
// https://www.d3-graph-gallery.com/network

// ATTRIBUTION
// code adapted from https://www.d3-graph-gallery.com/graph/network_basic.html

// set the dimensions and margins of the graph
var margin = {top: 10, right: 30, bottom: 30, left: 40},
  width = window.innerWidth - margin.left - margin.right,
  height = window.innerHeight - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#diagram")
.append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom);

var zoom = d3.zoom()
	.scaleExtent([0.3,2]);

var zoomer = svg.append("rect")
  .attr("width", width)
  .attr("height", height)
  .style("fill", "none")
  .style("pointer-events", "all")
  .call(zoom);

var g = svg
	.append("g")
  .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

var simulation;

d3.json("data.json").then(function (data) {

  // Initialize the links
  var link = g
    // .selectAll("line")
    .selectAll("path")
    .data(data.links)
    .enter()
    // .append("line")
    .append("path")
    	.classed("connection", true)
    	// .attr("d", d => `M${d.source.y},${d.source.x}C${(d.source.y + d.target.y) / 2},${d.source.x} ${(d.source.y + d.target.y) / 2},${d.target.x} ${d.target.y},${d.target.x}`)
      .attr("stroke", "#aaa")
      .attr("fill", "none")
      .attr("marker-end", d => `url(${new URL(`#arrow-${d.type}`, location)})`);

  // Initialize the nodes
  var node = g
    .selectAll("g")
    .data(data.nodes)
    .enter()
    .append("g")
      .attr("width", d => d.name.length * 8 )
      .attr("height", 30)
      .classed("node", true)
      .classed("node_project", d => (d.nodeType == "project") )
      .classed("node_tag", d => (d.nodeType == "tag") )
      .on("click", expand)

  // var nodeCircle = node
  var nodeBox = node
  	.append("rect")
  		.attr("width", d => d.name.length * 8 )
  		.attr("height", 30)
  		.attr("x", d => -d.name.length * 8 * 0.5 )
  		.attr("y", -15);

  var nodeText = node
  	.append("text")
  		.text( d => d.name )
  		.attr("dominant-baseline", "middle")
  		.attr("text-anchor", "middle");

  // Let's list the force we wanna apply on the network
  simulation = d3.forceSimulation(data.nodes)                 // Force algorithm is applied to data.nodes
	  .force("link", d3.forceLink()                               // This force provides links between nodes
	    .id( d => d.id )                     // This provide the id of a node
	    .links(data.links))                                    // and this the list of links
	  .force("charge", d3.forceManyBody().strength(-1500))         // This adds repulsion between nodes. Play with the -400 for the repulsion strength
	  .force("center", d3.forceCenter(width / 2, height / 2).strength(0.4))     // This force attracts nodes to the center of the svg area
	  // .velocityDecay(0.4)
	  .on("tick", ticked);

  // This function is run at each iteration of the force algorithm, updating the nodes position.
  function ticked() {
    link
	    // .attr("x1", d => d.source.x )
	    // .attr("y1", d => d.source.y )
	    // .attr("x2", d => d.target.x )
	    // .attr("y2", d => d.target.y );
	  	.attr("d", d => {
		    return `M${d.source.x},${d.source.y}
		    	C${(d.source.x + d.target.x) / 2},
		    	${d.target.y} ${(d.source.x + d.target.x) / 2},
		    	${d.source.y} ${d.target.x},
		    	${d.target.y}`; // https://github.com/d3/d3-shape/issues/27
	  	});

    node
         // .attr("cx", function (d) { return d.x+6; })
         // .attr("cy", function(d) { return d.y-6; });
      .attr("transform", function(d) {
         var x = d.x;
         var y = d.y;
         return "translate(" + x + "," + y + ")";
       });
  }

});

function expand(event, d) {
	console.log(d);

	if (!d3.select(this).classed("expanded")) {

		d3.select(this).classed("expanded", true);

		let date = d3.select(this)
			.append("text")
				.text(d => d.date)
				.attr("dominant-baseline", "middle")
				.attr("text-anchor", "middle")
				.attr("y", 30)

		let link = d3.select(this)
			.append("text")
				.text(d => d.link)
				.attr("dominant-baseline", "middle")
				.attr("text-anchor", "middle")
				.attr("y", 60)

		d3.select(this)
			.transition()
			.attr("height", 30 * 3)

		d3.select(this)
			.select("rect")
			.transition()
			.attr("height", 30 * 3)

		simulation.alphaTarget(0.5).restart();

		centerNode(d.x, d.y);

	}

}

// zoom centering code from
// https://stackoverflow.com/questions/46015179/d3-click-to-center-content-at-position-of-element-or-click
function centerNode(xx, yy) {
	g.transition()
		.duration(500)
		.attr("transform", "translate(" + (width/2 - xx) + "," + (height/2 - yy) + ")")
		.on("end", function() {
			zoomer.call(zoom.transform,
				d3.zoomIdentity.translate((width / 2 - xx), (height / 2 - yy)).scale(1))
		});
}