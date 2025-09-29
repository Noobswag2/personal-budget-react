import React, { useEffect } from "react";
import axios from "axios";
import BudgetPie from "../components/BudgetPie";

function HomePage() {
  useEffect(() => {
    console.log("Axios is loaded:", typeof axios);
  }, []);

  return (
    <main className="center" id="main">
      <div className="page-area">
        <article>
          <h1>Chart</h1>
          <p>Here is a sample pie chart using ChartJS:</p>
          <BudgetPie />
        </article>
      </div>
    </main>
  );
}

export default HomePage;
