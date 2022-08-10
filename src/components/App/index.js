import "./index.css";

import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { useEffect, useState } from "react";
import Input from "../Input";

function App() {
  const [data, setData] = useState([
    { date: "2022-01-01", steps: 6234 },
    { date: "2022-01-02", steps: 10001 },
    { date: "2022-01-03", steps: 8309 },
    { date: "2022-01-04", steps: 4000 },
    { date: "2022-01-05", steps: 6501 },
  ]);

  const [userData, setUserData] = useState({
    labels: data.map((e) => e.date),
    datasets: [
      {
        label: "Steps",
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: data.map((e) => e.steps),
      },
    ],
  });

  const [stepsInput, setStepsInput] = useState("");
  const [dateInput, setDateInput] = useState("");

  function addSteps() {
    if (stepsInput % 1 !== 0 || stepsInput === "" || dateInput === "") {
      alert("Please enter a correct number of steps!");
      setStepsInput("");
      return;
    }

    if (data.some((e) => e.date === dateInput)) {
      const newIndex = data.findIndex((e) => e.date === dateInput);
      console.log(newIndex);
      setData([
        ...data.slice(0, newIndex),
        { ...data[newIndex], steps: stepsInput },
        ...data.slice(newIndex + 1),
      ]);
      setStepsInput("");
      return;
    }

    setData(
      [...data, { date: dateInput, steps: stepsInput }].sort(function (a, b) {
        return new Date(a.date) - new Date(b.date);
      })
    );
    setStepsInput("");
  }

  function handleSteps(e) {
    setStepsInput(e.target.value);
  }

  function handleDate(e) {
    setDateInput(e.target.value);
  }

  useEffect(() => {
    setUserData({
      ...userData,
      labels: data.map((e) => e.date),
      datasets: [
        {
          label: "Steps",
          backgroundColor: "rgba(185, 137, 241)",
          borderColor: "rgba(0,0,0,1)",
          borderWidth: 2,
          data: data.map((e) => e.steps),
        },
      ],
    });
    console.log(userData);
  }, [data]);

  return (
    <div className="App">
      <h1>One Step Ahead...</h1>
      <Input
        addSteps={addSteps}
        handleDate={handleDate}
        handleSteps={handleSteps}
        stepsInput={stepsInput}
      ></Input>
      <div id="chart-container">
        <Line
          data={userData}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Steps",
                fontSize: 20,
              },
              legend: {
                display: true,
                position: "bottom",
              },
            },
            elements: { point: { pointStyle: "circle", radius: 5 } },
          }}
        />
      </div>
      <div id="shadow"></div>
    </div>
  );
}

export default App;
