import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { createEchartOptions } from "../shared/create-echart-options";
import { px } from "../shared/px";

export const Chart12 = () => {
  const divRef = useRef(null);
  const data = [
    { value: 0.08, name: "武侯大道" },
    { value: 0.06, name: "人民南路" },
    { value: 0.11, name: "天府大道" },
    { value: 0.09, name: "城北快速通道" },
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
        xAxis: { show: false },
        yAxis: { show: false },
        grid: { x: 0, x2: 0, y: 0, y2: 0, containLabel: true },
        legend: {
          orient: "vertical",
          left: "left",
          top: "center",
          textStyle: { color: "white" },
          itemWidth: px(10),
          itemHeight: px(10),
          formatter(name) {
            const value = data.find((i) => i.name === name)?.value * 100 + "%";
            return name + "" + value;
          },
        },
        series: [
          {
            center: ["60%", "50%"],
            type: "pie",
            radius: "80%",
            label: { show: false },
            labelLine: { show: false },
            data: data,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      })
    );
  }, []);
  return (
    <div className="年龄段-图1">
      <div className="chart">
        <div className="main" ref={divRef}></div>
      </div>
    </div>
  );
};
