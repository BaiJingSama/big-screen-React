import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { createEchartOptions } from "../shared/create-echart-options";
import { px } from "../shared/px";
import { getRandom } from "../shared/getRandom";

export const Chart3 = () => {
  const divRef = useRef(null);
  const myChart = useRef(null);
  const data = [
    { name: 2014 },
    { name: 2015 },
    { name: 2016 },
    { name: 2017 },
    { name: 2018 },
    { name: 2019 },
    { name: 2020 },
    { name: 2021 },
    { name: 2022 },
  ];
  useEffect(() => {
    setInterval(() => {
      const newData = [
        { name: 2014 },
        { name: 2015 },
        { name: 2016 },
        { name: 2017 },
        { name: 2018 },
        { name: 2019 },
        { name: 2020 },
        { name: 2021 },
        { name: 2022 },
      ];
      setChart(newData);
    }, 2000);
  }, []);
  const setChart = (data) => {
    myChart.current.setOption(
      createEchartOptions({
        legend: {
          bottom: px(10),
          textStyle: { color: "white" },
          itemWidth: px(30),
          itemHeight: px(16),
        },
        grid: {
          x: px(20),
          x2: px(20),
          y: px(20),
          y2: px(70),
          containLabel: true,
        },
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
            name: "抢劫",
            type: "line",
            data: data
              .map((i) => {
                i.抢劫 = Math.random() - 0.3;
                return i.抢劫;
              })
              .reverse(),
          },
          {
            name: "醉驾",
            type: "line",
            data: data
              .map((i) => {
                i.醉驾 = Math.random() - 0.25;
                return i.醉驾;
              })
              .reverse(),
          },
          {
            name: "盗窃",
            type: "line",
            data: data
              .map((i) => {
                i.盗窃 = Math.random() - 0.2;
                return i.盗窃;
              })
              .reverse(),
          },
          {
            name: "故意杀人",
            type: "line",
            data: data
              .map((i) => {
                i.故意杀人 = Math.random() - 0.15;
                return i.故意杀人;
              })
              .reverse(),
          },
          {
            name: "故意伤人",
            type: "line",
            data: data
              .map((i) => {
                i.故意伤人 = Math.random() - 0.35;
                return i.故意伤人;
              })
              .reverse(),
          },
        ].map((obj) => ({
          ...obj,
          symbol: "circle",
          symbolSize: px(12),
          lineStyle: { width: px(2) },
        })),
      })
    );
  };
  useEffect(() => {
    myChart.current = echarts.init(divRef.current);
    setChart(data);
  }, []);

  return (
    <div className="bordered 案发趋势">
      <h2>案发趋势分析</h2>
      <div ref={divRef} className="chart" />
    </div>
  );
};
