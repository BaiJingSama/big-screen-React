import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { px } from "../shared/px";
import { baseEchartOptions } from "../shared/base-echart-options";
import { createEchartOptions } from "../shared/create-echart-options";

export const Chart1 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption(
      createEchartOptions({
        ...baseEchartOptions,
        xAxis: {
          data: [
            "武侯区",
            "金牛区",
            "高新区",
            "成华区",
            "锦江区",
            "双流区",
            "龙泉驿区",
            "温江区",
            "郫都区",
          ],
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
            data: [100, 57, 36, 150, 30, 12, 24, 36, 48],
          },
        ],
      })
    );
  }, []);
  return (
    <div className="bordered 管辖统计">
      <h2>案发派出所管辖统计</h2>
      <div ref={divRef} className="chart"></div>
    </div>
  );
};
