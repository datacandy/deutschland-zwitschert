// d3

console.log("ello")

// var height = 500;
// var width = 900;

// var projection = d3.geo.stereographic()    
//     .center([3.9,43.0])    
//     .scale(1000)    
//     .translate([width / 4 , height / 2]);   

//  var svg = d3.select("#map")
// 					 .append("svg")
// 					 .attr("width", w)
// 					 .attr("height", h);

// var color = d3.scale.linear().domain([0,15])
//             .range(['red', 'green', 'blue', 'magenta']);

// var path = d3.geo.path()
// 			 .projection(projection)

//  var g = svg.append("g");

//  d3.json("geo.json", function (error, data) {
//     g.selectAll("path")
//     .data(topojson.feature(topology, topology.objects.usStates).features)
//     .enter()
//     .append("path")
//     .attr('d', path);
//  });


 // g.selectAll('path')
	// 		.data(topojson.feature(topology, topology.objects.usStates).features)
	// 		.enter()
	// 		.append('path')
	// 		.attr('class', function(d){ return 'states ' + d.properties.STATE_ABBR;} )
	// 		.attr('d', path)
	// 		.attr('fill', function(d, i) { return color(i); });