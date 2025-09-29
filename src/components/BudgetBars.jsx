import { useEffect, useRef } from "react";
import * as d3 from "d3";
import api from "../api/client";

export default function BudgetBars() {
  const ref = useRef(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await api.get("/budget");
        const data = res.data;

        const el = ref.current;
        el.innerHTML = ""; // clear before re-render

        const width = 500;
        const height = 300;
        const margin = { top: 20, right: 20, bottom: 40, left: 60 };

        const svg = d3.select(el)
          .append("svg")
          .attr("width", width)
          .attr("height", height);

        const x = d3.scaleBand()
          .domain(data.map(d => d.title))
          .range([margin.left, width - margin.right])
          .padding(0.2);

        const y = d3.scaleLinear()
          .domain([0, d3.max(data, d => d.budget) || 0])
          .nice()
          .range([height - margin.bottom, margin.top]);

        svg.append("g")
          .attr("transform", `translate(0,${height - margin.bottom})`)
          .call(d3.axisBottom(x));

        svg.append("g")
          .attr("transform", `translate(${margin.left},0)`)
          .call(d3.axisLeft(y));

        svg.append("g")
          .selectAll("rect")
          .data(data)
          .join("rect")
          .attr("x", d => x(d.title))
          .attr("y", d => y(d.budget))
          .attr("width", x.bandwidth())
          .attr("height", d => y(0) - y(d.budget))
          .attr("fill", "steelblue");
      } catch (err) {
        console.error("❌ D3 fetch error:", err.message);
      }
    }

    fetchData();
  }, []);

  return <div ref={ref} />;
}
