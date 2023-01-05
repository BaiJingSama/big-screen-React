import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { px } from "../shared/px";
import { baseEchartOptions } from "../shared/base-echart-options";
import { createEchartOptions } from "../shared/create-echart-options";

export const Chart2 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption(
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
          data: [
            "武侯区公安局",
            "金牛区公安局",
            "高新区公安局",
            "成华区公安局",
            "锦江区公安局",
            "双流区公安局",
            "龙泉驿区公安局",
            "温江区公安局",
            "郫都区公安局",
          ],
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
            data: [42, 41, 36, 65, 35, 18, 24, 36, 40],
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
            data: [49, 57, 36, 55, 30, 12, 20, 39, 48],
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
