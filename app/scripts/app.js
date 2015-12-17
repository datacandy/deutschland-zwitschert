// d3


var height = 600;
var width = 900;

var projection = d3.geo.albers()
		.center([10.6, 51])
		.rotate([-4.4, 0])    
		.scale(4000)    
		.translate([width / 2 , height / 2]);   

// var projection = d3.geo.mercator()
//     .scale((width + 1) / 2 / Math.PI)
//     .translate([width / 2, height / 2])
//     .precision(.1);

var svg = d3.select("#map")
				 .append("svg")
				 .attr("width", width)
				 .attr("height", height);

var color = d3.scale.linear().domain([0,15])
            .range(['red', 'green', 'blue', 'magenta']);

var path = d3.geo.path()
			 .projection(projection)

 var g = svg.append("g");

 d3.json("json/deutschland.json", function (error, topology) {
    g.selectAll("path")
    .data(topojson.feature(topology, topology.objects.DEU_adm2).features)
    .enter()
    .append("path")
    .attr('d', path);
 });


 // g.selectAll('path')
	// 		.data(topojson.feature(topology, topology.objects.usStates).features)
	// 		.enter()
	// 		.append('path')
	// 		.attr('class', function(d){ return 'states ' + d.properties.STATE_ABBR;} )
	// 		.attr('d', path)
	// 		.attr('fill', function(d, i) { return color(i); });