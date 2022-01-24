import React from "react";
import ReactEcharts from "echarts-for-react";

export default function PieChart() {
  function getOption() {
    let option = {
      title: {
        text: "User Composition",
        x: "center",
        show: false,
      },
      tooltip: {
        trigger: "item",
        textStyle: {
          fontSize: 16,
        },
        formatter: "{b} : {d}%",
      },
      color: ["#de6e6a", "#f2ce63", "#9eca7f", "#5a6fc0", " #8A2BE2"],
      legend: {
        orient: "vertical",
        top: 20,
        right: 5,
        data: [
          "Dog owner",
          "Cat owner",
          "Fish owner",
          "Bird owner",
          "Small animals owner",
        ],
      },
      series: [
        {
          name: "feed",
          type: "pie",
          radius: ["30%", "80%"],
          data: [
            { value: 4, name: "Dog owner" },
            { value: 4, name: "Cat owner" },
            { value: 1, name: "Fish owner" },
            { value: 1, name: "Bird owner" },
            { value: 2, name: "Small animals owner" },
          ],
        },
      ],
    };
    return option;
  }

  return (
    <ReactEcharts
      style={{
        height: 400,
        width: 1000,
        margin: "50px auto",
        backgroundColor: "#F4F4F4",
      }}
      option={getOption()}
    />
  );
}
