import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { createEchartOptions } from "../shared/create-echart-options";
import { px } from "../shared/px";

export const Chart4 = () => {
  const divRef = useRef(null);
  const data = [
    { name: 0 },
    { name: 2 },
    { name: 4 },
    { name: 6 },
    { name: 8 },
    { name: 10 },
    { name: 12 },
    { name: 14 },
    { name: 16 },
    { name: 18 },
    { name: 20 },
    { name: 22 },
    { name: 24 },
  ];
  const myChart = useRef(null);
  useEffect(() => {
    setInterval(() => {
      const newData = [
        { name: 0 },
        { name: 2 },
        { name: 4 },
        { name: 6 },
        { name: 8 },
        { name: 10 },
        { name: 12 },
        { name: 14 },
        { name: 16 },
        { name: 18 },
        { name: 20 },
        { name: 22 },
        { name: 24 },
      ];
      setChart(newData);
    }, 2000);
  }, []);
  const setChart = (data) => {
    myChart.current.setOption(
      createEchartOptions({
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: data.map((i) => i.name),
          splitLine: { show: true, lineStyle: { color: "#073E78" } },
          axisTick: { show: false },
          axisLine: { show: false },
        },
        yAxis: {
          type: "value",
          splitLine: { lineStyle: { color: "#073E78" } },
          axisLabel: {
            formatter(val) {
              return val * 100 + "%";
            },
          },
        },
        series: [
          {
            type: "line",
            data: data.map((i) => {
              i.value = Math.random();
              if (i.value > 0.8) {
                i.value -= 0.2;
                return i.value;
              } else {
                return i.value;
              }
            }),
            symbol: "circle",
            symbolSize: px(12),
            lineStyle: { width: px(2) },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "#414a9f",
                },
                {
                  offset: 1,
                  color: "#1b1d52",
                },
              ]),
            },
          },
        ],
      })
    );
  };
  useEffect(() => {
    myChart.current = echarts.init(divRef.current);
    setChart(data);
  }, []);

  return (
    <div className="bordered ????????????">
      <h2>??????????????????</h2>
      <div ref={divRef} className="chart" />
    </div>
  );
};
