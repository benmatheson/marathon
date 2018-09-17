const width = window.innerWidth;
const height = window.innerHeight;

const margin = {
	top: 10,
	bottom: 10,
	left: 10,
	right: 10
};

function executeVis1() {
	// d3.select("#vis1 svg").remove();

	const vis1svg = d3
		.select("#vis1")
		.append("svg")
		.attr("width", width - margin.top - margin.bottom)
		.attr("height", height - margin.top - margin.bottom);

	// height-margin.top-margin.bottom

	//37.04
	//18.52
	//way too fast at 29
	let step = 1;
	// console.log("EDTUETINGINETEN VIS @!1");

	var start = setInterval(cycleTime, 30);

	function myStopFunction() {
		clearInterval(start);
	}

	function cycleTime() {
		// var hr =1;

		// while (step < 480)

		{
			// console.log("step"+step)

			var m1 = moment([2007, 0, 1]);
			// var m2 = moment([2007, 0, 20]);
			// var m3= m1.add(step, 'h');

			var duration = moment.duration({ minutes: step });
			var added = moment([2007, 0, 1]).add(duration); // February 1
			var diff = moment.preciseDiff(m1, added);

			var doc = document.querySelector("#time");
			doc.innerHTML = diff;
			if (step < 175.3) {
				// console.log(step);
				step++;
			} else {
				myStopFunction();
			}
		}
	}

	d3.csv("data/records_edit.csv", function(dat) {
		console.log(dat);

		var adjust = -20;

		// vis1svg.append('text')
		// .attr("x", 100)
		// .attr("y", 190)
		// .style("font-family", "Nunito Sans")

		// const vis1group = vis1svg.append('g');

		var vis1g = vis1svg.selectAll("g").data(dat);
		// .enter()

		var vis1gEnter = vis1g.enter().append("g");

		// 	console.log("MMYG GRUP");
		// console.log(vis1gEnter);

		var circ = vis1gEnter
			.append("circle")
			.attr("cx", 190)
			.attr("cy", (d, i) => i * 10 - adjust)
			.attr("cy", (d, i) => i * 10 - adjust)
			// .attr("stroke", "black")
			.attr("fill", "white")
			// .attr("fill", function(d){if(d.Year == 2017 || d.Year ==2011 || d.Year ==2014 || d.Year ==2002|| d.Year ==1995|| d.Year ==1975|| d.Year ==1980 || d.Year ==1981) {return "red"}})
			.attr("fill", "white")
			.attr("r", 3)
			.attr("T", 0);

		// .attr("cy", 300)
		// console.log(two);

		circ.transition()
			.duration((d, i) => d.TimeSec / 2)
			.attr("cx", width - 100)
			// .attr("T", 481)

			// .attr("r",4)
			.ease(d3.easeLinear)
			.delay((d, i) => 100);

		// var m1t = moment([2007, 0, 1]);;
		// // var m2 = moment([2007, 0, 20]);
		//   // var m3= m1.add(step, 'h');

		//  var durationt = moment.duration({'hours' : circ.T});
		// var addedt  = moment([2007, 0, 1]).add(durationt); // February 1

		// var difft = moment.preciseDiff(m1t, addedt);

		//   console.log("difft");
		//   console.log(difft);
		//     // console.log("diff"+diff)

		//  var doc = document.querySelector('#time3')
		//  doc.innerHTML=difft;

		vis1gEnter
			// .selectAll('text')
			// .data(dat)
			// .enter()
			.append("text")
			.text(d => d.Name)
			.attr("x", 180)
			.style("font-family", "sans-serif")
			.style("font-size", "10")
			.style("text-anchor", "end")
			.style("font-weight", 500)
			// .style("font-color", "red")

			.attr("y", (d, i) => i * 10 - adjust + 2);

		vis1gEnter
			//   .selectAll("text")
			//   .data(dat)
			// .enter()
			.append("text")
			.text(d => d.Year)
			.attr("x", 50)
			.style("font-family", "sans-serif")
			.style("font-size", "9")
			.style("font-style", "italic")
			// .style("text-align", "right")
			.style("text-anchor", "end")
			.style("font-weight", 100)
			.attr("y", (d, i) => i * 10 - adjust + 3);

		vis1gEnter
			.append("line")
			.attr("x1", 190)
			.attr("y1", (d, i) => i * 10 - adjust)
			.attr("x2", 190)
			// .style("stroke", "salmon")
			.style("stroke", "#93c0ef")
			.style("stroke-width", 10)
			// .style(
			// 	"stroke-dasharray",
			// 	width -
			// 		margin.left -
			// 		margin.right +
			// 		" " +
			// 		(width - margin.left - margin.right)
			// )
			// .style("stroke-dashoffset", width - margin.left - margin.right)
			.attr("y2", (d, i) => i * 10 - adjust)

			.style("stroke-dasharray", width - margin.left - margin.right)
			.style("stroke-dashoffset", width - margin.left - margin.right)

			.transition()
			.style("stroke", "salmon")

			.duration((d, i) => d.TimeSec / 2)
			.attr("x2", width - 100)
			.attr("y2", (d, i) => i * 10 - adjust)
			.style("stroke-width", 4)

			.ease(d3.easeLinear)
			// .style("stroke-dashoffset", 0)
			// .style("stroke-dasharray", 0);
			.style("stroke-dashoffset", 0);

		vis1svg
			.append("text")
			.attr("x", width - 100)
			.style("font-family", "Nunito Sans")
			.style("font-size", "9")
			.style("text-align", "right")
			.style("font-weight", 600)
			.attr("y", 8)
			.attr("opacity", 0)
			.transition()
			.delay(3522)

			.attr("opacity", 1);

		var text1 = vis1svg
			.append("text")
			.attr("x", width - 130)
			.style("font-family", "Nunito Sans")
			.style("font-size", "11")
			.style("text-align", "right")
			.style("font-weight", 600)
			.attr("y", 10)
			.style("opacity", 0)

			// .text("Winning Race Time")

			.transition()
			.delay(7010)
			.duration(100)
			.style("opacity", 1);

		// var i = d3.interpolate(0, 8910);

		text1
			.selectAll("text")
			.text(0)
			.transition()
			.duration(8910)
			.delay(0);

		//   vis1g.append("text")
		// .text("Nome")
		// .attr("x", )
		// .style("font-family", "Nunito Sans")
		// .style("font-size", "12")
		// .style("text-align", "right")
		// .style("font-weight", 600)
		//   .attr("y", (d,i) => i*11+60);

		// vis1.selectAll("text")
		// .data(dat)
		// .enter()
		// .append("text")
		// .text("FAT")
		// .attr("x", 300)
		// .style("font-family", "Nunito Sans")
		// .style("font-size", "11")
		//   .attr("y", 300)

		var select1 = vis1svg.data(dat).enter();

		// vis1svg.selectAll("text")
		// .data(dat)
		// .enter()

		vis1gEnter
			.append("text")
			.attr("y", (d, i) => i * 10 - adjust + 3)
			.attr("x", width - 95)
			.text(d => d.Time)
			.style("font-family", "sans-serif")
			.style("font-size", "10")
			.style("text-align", "right")
			.attr("opacity", 0)
			.transition()
			.delay((d, i) => d.TimeSec / 2)

			.attr("opacity", 1)
			.ease(d3.easeLinear);

		var circ2 = vis1g
			.append("circle")
			.attr("cx", 100)
			.attr("cy", 500)
			.attr("opacity", 0.2)
			// .attr("stroke", "black")
			// .attr("fill", function(d){if (d.Year>1970 && d.Year <1980) {return "green"} else if (d.Year>1980 && d.Year <=1990)  {return "pink"} else if (d.Year>1990 && d.Year <=2000)  {return "yellow"} else if (d.Year>2000 && d.Year <=2010)  {return "orange"} else if (d.Year>2010 && d.Year <=2018)  {return "blue"}  })
			.attr("r", 20);

		circ2
			.transition()
			.duration((d, i) => d.TimeSec / 50)
			.attr("cx", width - 100);
		transition()
			// .attr("r",4)
			.ease(d3.easeLinear)
			.delay((d, i) => 100)

			.duration((d, i) => i * 3)
			.attr("cy", (d, i) => i * 3 + 450)

			// .attr("r",4)
			.ease(d3.easeLinear)
			.delay((d, i) => 100);
	});
}

executeVis1();
//the time for the last one

// 1782067/200
