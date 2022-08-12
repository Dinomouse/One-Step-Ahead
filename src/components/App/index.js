import "./index.css";
import Axios from "axios";
import { Line } from "react-chartjs-2";
import { useEffect, useState } from "react";
import Input from "../Input";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getSteps() {
      const response = await fetch("http://localhost:3000/steps");
      const data = await response.json();
      console.log(data.payload);
      setData(
        data.payload.sort(function (a, b) {
          return new Date(a.day) - new Date(b.day);
        })
      );
    }
    getSteps();
  }, []);

  useEffect(() => {
    setUserData({
      labels: data?.map((e) => e.day),
      datasets: [
        {
          label: "Steps",
          backgroundColor: "rgba(75,192,192,1)",
          borderColor: "rgba(0,0,0,1)",
          borderWidth: 2,
          data: data?.map((e) => e.steps),
        },
      ],
    });
  }, [data]);

  const [userData, setUserData] = useState({
    labels: data?.map((e) => e.day),
    datasets: [
      {
        label: "Steps",
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: data?.map((e) => e.steps),
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

    if (data.some((e) => e.day === dateInput)) {
      const newIndex = data.findIndex((e) => e.day === dateInput);
      Axios({
        method: "put",
        url: `http://localhost:3000/steps/${dateInput}`,
        data: {
          day: dateInput,
          steps: stepsInput,
        },
      });
      setData(
        [
          ...data.slice(0, newIndex),
          { ...data[newIndex], steps: stepsInput },
          ...data.slice(newIndex + 1),
        ].sort(function (a, b) {
          return new Date(a.day) - new Date(b.day);
        })
      );
      setStepsInput("");
      return;
    }
    Axios({
      method: "post",
      url: "http://localhost:3000/steps",
      data: {
        day: dateInput,
        steps: stepsInput,
      },
    });
    setData(
      [...data, { day: dateInput, steps: stepsInput }].sort(function (a, b) {
        return new Date(a.day) - new Date(b.day);
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
      labels: data.map((e) => e.day),
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
    // console.log(userData)
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
