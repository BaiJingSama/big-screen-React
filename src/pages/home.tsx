import React, { useEffect, useRef } from "react";
import "./home.scss";
import headerBg from "../images/header.png";
import * as echarts from "echarts";

const px = (n) => (n / 2420) * (window as any).pageWidth;
export const Home = () => {
  const divRef = useRef(null);
  useEffect(() => {
    console.log(divRef.current);
    var myChart = echarts.init(divRef.current);
    myChart.setOption({
      textStyle: {
        fontSize: px(12),
        color: "white",
      },
      title: { show: false },
      legend: { show: false },

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
      grid: {
        x: 0,
        y: px(20),
        x2: 0,
        y2: px(10),
        containLabel: true,
      },
      yAxis: {
        splitLine: { show: false },
        axisLabel: {
          fontSize: px(12),
        },
      },
      series: [
        {
          type: "bar",
          data: [100, 57, 36, 150, 30, 12, 24, 36, 48],
        },
      ],
    });
  }, []);
  return (
    <div className="home">
      <header style={{ backgroundImage: `url(${headerBg})` }}></header>
      <main>
        <section className="section1">
          <div className="bordered 管辖统计">
            <h2>案发派出所管辖统计</h2>
            <div ref={divRef} className="chart"></div>
          </div>
        </section>
        <section className="bordered section2"></section>
        <section className="bordered section3"></section>
        <section className="bordered section4"></section>
        <section className="bordered section5"></section>
      </main>
    </div>
  );
};
