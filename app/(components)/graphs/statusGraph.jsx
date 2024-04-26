"use client";

import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

const StatusGraph = ({ tickets }) => {
  const svgRef = useRef();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (tickets && tickets.length > 0 && !initialized) {
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

      const totalTickets = data.reduce((total, d) => total + d.count, 0);

      const colorScale = d3
        .scaleOrdinal()
        .domain(["Open", "In Progress", "Closed"])
        .range(["#68D391", "#FC8181", "#63B3ED"]);

      const margin = { top: 10, right: 30, bottom: 10, left: 40 };
      const width = 250 - margin.left - margin.right;
      const height = 150 - margin.top - margin.bottom;

      const svg = d3
        .select(svgRef.current)
        .attr("width", width)
        .attr("height", height)
        .style("overflow", "visible");

      const x = d3
        .scaleLinear()
        .domain([0, d3.max(data, (d) => (d.count / totalTickets) * 100)])
        .nice()
        .range([0, width]);

      svg
        .selectAll(".bar")
        .data(data)
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("x", 0)
        .attr("y", (d, i) => i * 28)
        .attr("width", 0)
        .attr("height", 15)
        .attr("rx", 10)
        .attr("ry", 10)
        .attr("fill", (d) => colorScale(d.status))
        .transition()
        .duration(750)
        .delay((d, i) => i * 100)
        .attr("width", (d) => x((d.count / totalTickets) * 100));

      svg
        .selectAll(".percentage")
        .data(data)
        .enter()
        .append("text")
        .attr("class", "percentage")
        .attr("x", (d) => x((d.count / totalTickets) * 100) + 5)
        .attr("y", (d, i) => i * 28 + 15)
        .text((d) => `${Math.round((d.count / totalTickets) * 100)}%`)
        .attr("font-size", "12px")
        .attr("fill", "white");

      // Legend
      const legendContainer = d3
        .select(svgRef.current.parentElement)
        .append("div")
        .attr("class", "flex justify-center mt-4");

      const legendData = ["Open", "In Progress", "Closed"];
      legendData.forEach((status) => {
        const legendEntry = legendContainer
          .append("div")
          .attr("class", "flex items-center mr-4");

        legendEntry
          .append("div")
          .attr("class", "w-4 h-4")
          .style("background-color", colorScale(status))
          .style("margin-right", "4px");

        legendEntry.append("p").attr("class", "text-sm").text(status);
      });

      setInitialized(true);
    }
  }, [tickets, initialized]);

  return <svg ref={svgRef}></svg>;
};

export default StatusGraph;
