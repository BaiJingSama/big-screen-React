import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { px } from "../shared/px";
import { baseEchartOptions } from "../shared/base-echart-options";
import { createEchartOptions } from "../shared/create-echart-options";
import { getRandom } from "../shared/getRandom";

export const Chart2 = () => {
  const divRef = useRef(null);
  const myChart = useRef(null);
  const data = [
    { name: "武侯区公安局" },
    { name: "金牛区公安局" },
    { name: "高新区公安局" },
    { name: "成华区公安局" },
    { name: "锦江区公安局" },
    { name: "双流区公安局" },
    { name: "新都区公安局" },
    { name: "郫都区公安局" },
  ];
  useEffect(() => {
    setInterval(() => {
      const newData = [
        { name: "武侯区公安局" },
        { name: "金牛区公安局" },
        { name: "高新区公安局" },
        { name: "成华区公安局" },
        { name: "锦江区公安局" },
        { name: "双流区公安局" },
        { name: "新都区公安局" },
        { name: "郫都区公安局" },
      ];
      setChart(newData);
    }, 2000);
  }, []);
  const setChart = (data) => {
    myChart.current.setOption(
      createEchartOptions({
        ...baseEchartOptions,
        grid: {
          x: px(20),
          y: px(20),
          x2: px(20),
          y2: px(10),
          containLabel: true,
        },
        xAxis: {
          type: "value",
          boundaryGap: [0, 0.01],
          splitLine: { show: false },
          axisLabel: { show: false },
        },
        yAxis: {
          axisTick: { show: false },
          type: "category",
          data: data.map((i) => i.name),
          axisLabel: {
            formatter(val) {
              return val.replace("公安局", "\n公安局");
            },
          },
        },
        series: [
          {
            name: "2021年",
            type: "bar",
            data: data.map((i) => {
              i[2021] = getRandom(3, 10);
              return i[2021];
            }),
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  {
                    offset: 0,
                    color: "#2034f9",
                  },
                  {
                    offset: 1,
                    color: "#04a1ff",
                  },
                ]),
              },
            },
          },
          {
            name: "2022年",
            type: "bar",
            data: data.map((i) => {
              i[2022] = getRandom(3, 10);
              return i[2022];
            }),
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  {
                    offset: 0,
                    color: "#b92ae8",
                  },
                  {
                    offset: 1,
                    color: "#6773e7",
                  },
                ]),
              },
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
    <div className="bordered 破获排名">
      <h2>案件破获排名</h2>
      <div ref={divRef} className="chart" />
      <div className="legend">
        <span className="first" /> 破案排名1
        <span className="second" /> 破案排名2
      </div>
    </div>
  );
};
