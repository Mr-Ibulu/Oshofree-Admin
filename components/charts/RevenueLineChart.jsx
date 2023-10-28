"use client";

import React from "react";
import { useTheme } from "next-themes";
import numeral from "numeral";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Text, Tooltip, XAxis, YAxis } from "recharts";

const RevenueLineChart = ({ data }) => {
  const { resolvedTheme: theme } = useTheme();

  const formatDate = ({ x, y, payload }) => {
    const date = new Date(payload.value);
    const monthYear = date.toLocaleString("default", { month: "short", year: "numeric" });
    return (
      <Text x={x} y={y} dy={16} textAnchor="middle" fill={theme === "dark" ? "#fff" : "#000"} className="text-xs font-semibold">
        {monthYear}
      </Text>
    );
  };

  const formatRevenue = ({ x, y, payload }) => {
    const revenueValue = payload.value;
    const formattedValue = numeral(revenueValue).format("0.00 a");
    return (
      <Text x={x} y={y} textAnchor="end" verticalAnchor="middle" fill={theme === "dark" ? "#fff" : "#000"} className="text-xs font-semibold">
        {`\u20A6 ${formattedValue}`}
      </Text>
    );
  };

  const renderTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      const revenue = `\u20A6 ${numeral(data.revenue).format("0.00 a")}`;
      const date = new Date(data.month).toLocaleString("default", { month: "long", year: "numeric" });
      return (
        <div className="rounded-lg bg-zinc-900 p-3 text-white dark:bg-zinc-950">
          <div className="text-lg font-semibold">{revenue}</div>
          <div className="text-sm font-extralight">{date}</div>
        </div>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer width={"99%"} height={"100%"}>
      <LineChart data={data}>
        <CartesianGrid vertical={false} strokeDasharray={"3 3"} {...(theme === "dark" && { stroke: "#52525b" })} />
        <XAxis dataKey={"month"} tick={formatDate} axisLine={false} tickLine={false} />
        <YAxis axisLine={false} tickLine={false} tick={formatRevenue} />
        <Tooltip offset={20} content={renderTooltip} cursor={{ strokeWidth: 1, strokeDasharray: "5 3" }} />
        <Line type={"monotone"} dataKey={"revenue"} stroke="#8884d8" strokeWidth={3} dot={false} activeDot={{ r: 6 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default RevenueLineChart;
