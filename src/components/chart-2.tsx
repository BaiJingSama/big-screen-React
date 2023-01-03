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
        },
        yAxis: {
          type: "category",
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
        },
        series: [
          {
            name: "上月破案排名",
            type: "bar",
            data: [42, 41, 36, 65, 35, 18, 24, 36, 40],
          },
          {
            name: "本月破案排名",
            type: "bar",
            data: [49, 57, 36, 55, 30, 12, 20, 39, 48],
          },
        ],
      })
    );
  }, []);
  return (
    <div className="bordered 管辖统计">
      <h2>案件破获排名</h2>
      <div ref={divRef} className="chart"></div>
    </div>
  );
};
