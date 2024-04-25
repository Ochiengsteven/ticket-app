"use client";

import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const StatusGraph = ({ tickets }) => {
  const svgRef = useRef();

  useEffect(() => {
    if (tickets && tickets.length > 0) {
      const filteredTickets = tickets.filter((ticket) =>
        ["Open", "In Progress", "Closed"].includes(ticket.status)
      );

      const statusCounts = d3.rollup(
        filteredTickets,
        (v) => v.length,
        (d) => d.status
      );

      const data = Array.from(statusCounts, ([status, count]) => ({
        status,
        count,
      }));

      const colorScale = d3
        .scaleOrdinal()
        .domain(["Open", "In Progress", "Closed"])
        .range(["#68D391", "#FC8181", "#63B3ED"]);

      const margin = { top: 20, right: 30, bottom: 30, left: 40 };
      const width = 250 - margin.left - margin.right;
      const height = 150 - margin.top - margin.bottom;

      const svg = d3
        .select(svgRef.current)
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

      const y = d3
        .scaleBand()
        .domain(data.map((d) => d.status))
        .range([0, height])
        .padding(0.1);

      const x = d3
        .scaleLinear()
        .domain([0, d3.max(data, (d) => d.count)])
        .nice()
        .range([0, width]);

      svg.append("g").call(d3.axisLeft(y).tickSize(0).tickFormat("")); // Hide y-axis ticks and labels

      svg
        .append("g")
        .attr("transform", `translate(0,${height})`)
        .call(
          d3
            .axisBottom(x)
            .ticks(Math.min(5, data.length))
            .tickFormat(d3.format(".0f"))
        );

      svg
        .selectAll(".bar")
        .data(data)
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("x", 0)
        .attr("y", (d) => y(d.status))
        .attr("width", (d) => x(d.count))
        .attr("height", y.bandwidth())
        .attr("fill", (d) => colorScale(d.status));
    }
  }, [tickets]);

  return (
    <div>
      <svg ref={svgRef}></svg>
      <div className="flex justify-center mt-4">
        <div className="flex items-center mr-4">
          <div className="w-4 h-4 bg-green-400 mr-2"></div>
          <p className="text-sm">Open</p>
        </div>
        <div className="flex items-center mr-4">
          <div className="w-4 h-4 bg-red-400 mr-2"></div>
          <p className="text-sm">In Progress</p>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-blue-400 mr-2"></div>
          <p className="text-sm">Closed</p>
        </div>
      </div>
    </div>
  );
};

export default StatusGraph;
