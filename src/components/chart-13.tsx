import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { createEchartOptions } from "../shared/create-echart-options";
import { px } from "../shared/px";

export const Chart13 = () => {
  const divRef = useRef(null);
  const data = [
    { value: 0.08, name: "武侯大道" },
    { value: 0.06, name: "人民南路" },
    { value: 0.11, name: "天府大道" },
    { value: 0.09, name: "货运大道" },
    { value: 0.12, name: "金沙路" },
    { value: 0.06, name: "人民北路" },
    { value: 0.08, name: "科华路" },
    { value: 0.08, name: "交大路" },
    { value: 0.08, name: "成洛大道" },
  ];
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption(
      createEchartOptions({
        xAxis: {
          data: data.map((i) => i.name),
          axisTick: { show: false },
          axisLine: {
            lineStyle: { color: "#083B70" },
          },
          axisLabel: {
            textStyle: { fontSize: px(12) },
            formatter(val) {
              if (val.length > 2) {
                const array = val.split("");
                array.splice(2, 0, "\n");
                return array.join("");
              } else {
                return val;
              }
            },
          },
        },

        yAxis: {
          splitLine: { show: false },
          axisLine: {
            show: true,
            lineStyle: { color: "#083B70" },
          },

          axisLabel: {
            formatter(value) {
              return (value * 100).toFixed(0) + "%";
            },
          },
        },
        series: [
          {
            type: "bar",
            data: data.map((i) => i.value),
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "#0A97FB",
              },
              {
                offset: 1,
                color: "#1E34FA",
              },
            ]),
          },
        ],
      })
    );
  }, []);

  return <div ref={divRef} className="chart"></div>;
};
