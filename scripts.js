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
    .attr("height", height + margin.top + margin.bottom)
    ;

var zoom = d3.zoom()
	.scaleExtent([0.3,2])
  .on("zoom", zoomed);

var zoomer = svg.append("rect")
  .attr("width", width)
  .attr("height", height)
  .style("fill", "none")
  .style("pointer-events", "all")
  .call(zoom)
  .on("click", deselect)
  ;

var g = svg
	.append("g")
  .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

var simulation, links;

d3.json("data.json").then(function (data) {

  // Initialize the links
  links = g
    .selectAll("path")
    .data(data.links)
    .enter()
    .append("path")
    	.classed("connection", true)
    	// .attr("d", d => `M${d.source.y},${d.source.x}C${(d.source.y + d.target.y) / 2},${d.source.x} ${(d.source.y + d.target.y) / 2},${d.target.x} ${d.target.y},${d.target.x}`)
      .attr("stroke", "#aaa")
      .attr("fill", "none")
      // .attr("marker-end", d => `url(${new URL(`#arrow-${d.target.nodeType}`, location)})`);

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
      .call(d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended))

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
	  .force("charge", d3.forceManyBody().strength(-2000))         // This adds repulsion between nodes. Play with the -400 for the repulsion strength
	  .force("center", d3.forceCenter(width / 2, height / 2).strength(0.4))     // This force attracts nodes to the center of the svg area
	  // .velocityDecay(0.4)
	  .on("tick", ticked);

  // This function is run at each iteration of the force algorithm, updating the nodes position.
  function ticked() {
    links
	  	.attr("d", d => {
      //   // diagonal
		    // return `M${d.source.x},${d.source.y}
		    // 	C${(d.source.x + d.target.x) / 2},${d.target.y}
      //     ${(d.source.x + d.target.x) / 2},${d.source.y}
      //     ${d.target.x},${d.target.y}`; // https://github.com/d3/d3-shape/issues/27
        // straight
        return `M${d.source.x},${d.source.y} ${d.target.x},${d.target.y}`;
        // // arc
        // const r = Math.hypot(d.target.x - d.source.x, d.target.y - d.source.y);
        // return `
        //   M${d.source.x},${d.source.y}
        //   A${r},${r} 0 0,1 ${d.target.x},${d.target.y}
        // `; // https://observablehq.com/@d3/mobile-patent-suits
	  	});

    node
      .attr("transform", function(d) {
         var x = d.x;
         var y = d.y;
         return "translate(" + x + "," + y + ")";
       });
  }

});

function dragstarted(event) {
  if (!event.active) simulation.alphaTarget(0.3).restart();
  event.subject.fx = event.x;
  event.subject.fy = event.y;
}

function dragged(event) {
  event.subject.fx = event.x;
  event.subject.fy = event.y;
}

function dragended(event) {
  if (!event.active) simulation.alphaTarget(0);
  event.subject.fx = null;
  event.subject.fy = null;
}

function expand(event, node) {

  d3.select(this).raise();
  centerNode(node.x, node.y);

  if (d3.select(this).classed("node_project") &&
      !d3.select(this).classed("expanded")) {

    // remove class from others
    d3.selectAll(".expanded").classed("expanded", false);
    // assign class to this
    d3.select(this).classed("expanded", true);

    let fo = d3.select(this).append("xhtml:foreignObject")
      .attr("xhtml:width", d3.select(this).attr("width"))
      .attr("xhtml:height", 500)
      .classed("project_details", true)
      ;

    let p = fo.append("xhtml:p");
    p.html(node.description);

    // fo.attr("xhtml:height", p.clientHeight);

    // let date = d3.select(this)
    //   .append("text")
    //     .text(d => d.date)
    //     .attr("dominant-baseline", "middle")
    //     .attr("text-anchor", "middle")
    //     .attr("y", 30)

    // let url = d3.select(this)
    //   .append("text")
    //     .text(d => d.url)
    //     .attr("dominant-baseline", "middle")
    //     .attr("text-anchor", "middle")
    //     .attr("y", 60)

    // d3.select(this)
    //   .transition()
    //   .attr("height", 30 * 3)

    // d3.select(this)
    //   .select("rect")
    //   .transition()
    //   .attr("height", 30 * 3)

    // simulation.alphaTarget(0.5).restart();

    // highlight connected links
    d3.selectAll(".highlighted").classed("highlighted", false);
    links.filter(d => d.target == node)
      .classed("highlighted", true)
  }
}

function deselect() {
  d3.selectAll(".expanded").classed("expanded", false);
  d3.selectAll(".highlighted").classed("highlighted", false);
}

function zoomed(event) {
  g.attr("transform", event.transform);
}

// zoom centering code from
// https://stackoverflow.com/questions/46015179/d3-click-to-center-content-at-position-of-element-or-click
function centerNode(xx, yy) {
	g.transition()
		.duration(500)
		.attr("transform", "translate(" + (width/2 - xx) + "," + (height/2 - yy) + ")")
    .on("end", function () {
      zoomer.call(
        zoom.transform,
        d3.zoomIdentity
          .translate((width / 2 - xx), (height / 2 - yy))
          .scale(1)
      )
    });
}