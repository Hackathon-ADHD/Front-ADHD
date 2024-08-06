import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const EmotionChart = ({ data }) => {
    const chartData = {
        labels: data.map((entry) => entry.date),
        datasets: [
            {
                label: "행복 수치",
                data: data.map((entry) => entry.score),
                fill: false,
                backgroundColor: "#87CEEB",
                borderColor: "#87CEEB",
                pointRadius: 5,
            },
        ],
    };

    const options = {
        scales: {
            x: {
                title: {
                    display: true,
                    text: "날짜",
                },
                ticks: {
                    maxTicksLimit: 7,
                },
            },
            y: {
                title: {
                    display: true,
                    text: "행복 수치",
                },
                beginAtZero: true,
            },
        },
    };

    return (
        <div style={{ width: "80%", margin: "0 auto" }}>
            <Line data={chartData} options={options} />
        </div>
    );
};

export default EmotionChart;
