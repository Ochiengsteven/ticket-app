"use client";

import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const DailyTicketsBarGraph = ({ tickets }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    if (tickets && tickets.length) {
      // Helper to format and parse dates
      const formatDate = d3.timeFormat("%Y-%m-%d");
      const parseDate = d3.timeParse("%Y-%m-%d");

      // Extract dates and count tickets per day
      const ticketCountByDate = d3
        .rollups(
          tickets,
          (v) => v.length, // count tickets per date
          (d) => formatDate(new Date(d.createdAt)) // parse and format the date to ignore time
        )
        .map(([date, count]) => ({
          date: parseDate(date), // parse the date string into a date object
          ticketCount: count,
        }));

      // Ensure data is sorted by date
      ticketCountByDate.sort((a, b) => a.date - b.date);

      // Clean up previous SVG content
      d3.select(svgRef.current).selectAll("*").remove();

      // Dimensions and margins
      const margin = { top: 20, right: 20, bottom: 60, left: 20 };
      const numDataPoints = ticketCountByDate.length;
      const parentWidth = Math.max(numDataPoints * 50, 300); // Ensure a minimum width
      const parentHeight = 300;
      const width = parentWidth - margin.left - margin.right;
      const height = parentHeight - margin.top - margin.bottom;

      // Calculate maximum height of the bars
      const maxBarHeight = d3.max(ticketCountByDate, (d) => d.ticketCount);

      // Create SVG element
      const svg = d3
        .select(svgRef.current)
        .attr("width", parentWidth)
        .attr("height", parentHeight)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

      // Scales
      const xScale = d3
        .scaleBand()
        .range([0, width])
        .domain(ticketCountByDate.map((d) => d.date))
        .padding(0.02);

      const yScale = d3
        .scaleLinear()
        .domain([0, maxBarHeight])
        .range([height, 0]);

      // Bars
      svg
        .selectAll(".bar")
        .data(ticketCountByDate)
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("x", (d) => xScale(d.date))
        .attr("y", (d) => yScale(d.ticketCount))
        .attr("width", xScale.bandwidth() / 2)
        .attr("height", (d) => Math.max(height - yScale(d.ticketCount), 5)) // Minimum height of 5 pixels
        .attr("fill", "#69b3a2")
        .on("mouseover", function (event, d) {
          d3.select(this).attr("fill", "#2C00D3"); // Change color on hover
          svg
            .append("text")
            .attr("class", "ticket-count")
            .attr("x", xScale(d.date) + xScale.bandwidth() / 4)
            .attr(
              "y",
              yScale(d.ticketCount) + (height - yScale(d.ticketCount)) / 2
            )
            .text(d.ticketCount)
            .attr("text-anchor", "middle")
            .attr("fill", "white");
        })
        .on("mouseout", function () {
          d3.select(this).attr("fill", "#69b3a2"); // Revert color on mouseout
          svg.select(".ticket-count").remove(); // Remove ticket count text
        });

      // X-axis
      svg
        .append("g")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(xScale).tickFormat(d3.timeFormat("%d\n%b"))) // Format for two-line display
        .selectAll("text")
        .attr("font-size", "10px")
        .style("text-anchor", "end")
        .attr("dx", "-0.5em")
        .attr("dy", "-0.5em")
        .attr("transform", "rotate(-45)");
    }
  }, [tickets]); // Dependency on tickets to re-render when ticket data changes

  return <svg ref={svgRef} style={{ width: "100%", height: "100%" }}></svg>;
};

export default DailyTicketsBarGraph;
