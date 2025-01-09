import React from "react";
import { Chart } from "react-google-charts";

const Analytics = ({ completedCount, notCompletedCount }) => {
  const options = {
    title: "My Todos Status",
  };
  const data = [
    ["Task Status", "Tasks Count"],
    ["Completed", completedCount],
    ["Not Completed", notCompletedCount],
  ];

  return (
    <>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      />
    </>
  );
};
export default Analytics;
