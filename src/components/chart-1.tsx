import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { px } from "../shared/px";
import { baseEchartOptions } from "../shared/base-echart-options";
import { createEchartOptions } from "../shared/create-echart-options";
import { getRandom } from "../shared/getRandom";

export const Chart1 = () => {
  const divRef = useRef(null);
  const myChart = useRef(null);
  const data = [
    { name: "武侯区" },
    { name: "金牛区" },
    { name: "高新区" },
    { name: "成华区" },
    { name: "锦江区" },
    { name: "双流区" },
    { name: "新都区" },
    { name: "温江区" },
    { name: "郫都区" },
  ];
  useEffect(() => {
    setInterval(() => {
      const newData = [
        { name: "武侯区" },
        { name: "金牛区" },
        { name: "高新区" },
        { name: "成华区" },
        { name: "锦江区" },
        { name: "双流区" },
        { name: "新都区" },
        { name: "温江区" },
        { name: "郫都区" },
      ];
      setChart(newData);
    }, 2000);
  }, []);
  const setChart = (data) => {
    myChart.current.setOption(
      createEchartOptions({
        ...baseEchartOptions,
        xAxis: {
          data: data.map((i) => i.name),
          axisTick: { show: false },
          axisLine: {
            lineStyle: {
              lineStyle: { color: "#083B70" },
            },
          },
          axisLabel: {
            fontSize: px(12),
            formatter(val) {
              if (val.length > 2) {
                const array = val.split("");
                array.splice(2, 0, "\n");
                return array.join("");
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
        },
        series: [
          {
            type: "bar",
            data: data.map((i) => {
              i.value = getRandom(20, 100);
              return i.value;
            }),
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
    <div className="bordered 管辖统计">
      <h2>案发派出所管辖统计</h2>
      <div ref={divRef} className="chart"></div>
    </div>
  );
};
