import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  // PieChart,
} from "recharts";
import PieChart from "./PieChart";
import CustomPieChart from "./PieChart";
// import ReactECharts from "echarts-for-react";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page H",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page I",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page J",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page K",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
];

const Mid = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="mid-main">
      <div className="mid-main1">
        <div className="center-div">
          <div className="center-div1">
            <div
              className="overview"
              // border: "1px solid yellow",
            >
              <b>Overview</b>
            </div>
            <div className="overview">
              <p>Monthly Earning</p>
            </div>
          </div>

          <div className="graph-div">
            <Box sx={{ minWidth: 120, border: "none" }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Quaterly</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Quaterly"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
        </div>

        <div className="bar-chart">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart width={90} height={40} data={data}>
              <Bar
                dataKey="uv"
                fill="#8884d8"
                style={{ borderRadius: "2vh" }}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="graph-div1">
          <div className="month">Jan</div>
          <div className="month">Feb</div>
          <div className="month">Mar</div>
          <div className="month">Apr</div>
          <div className="month">Aug</div>
          <div className="month">Jun</div>
          <div className="month">Jul</div>
          <div className="month">Aug</div>
          <div className="month">Sep</div>
          <div className="month">Oct</div>
          <div className="month">Nov</div>
          <div className="month">Dec</div>
        </div>
      </div>

      <div className="mid-main2">
        <div
          style={{
            height: "4vh",
            width: "12em",
            // border: "1px solid black",
            marginTop: "1vh",
            // marginRight: "6vh",
          }}
        >
          <b>Customers</b>
        </div>
        <div
          style={{
            height: "4vh",
            width: "16em",
            // border: "1px solid black",
            marginTop: "1vh",
          }}
        >
          <p>Customers that buy products</p>
        </div>
        <div
          style={{
            height: "28vh",
            width: "12em",
            marginTop: "1vh",
            marginLeft: "2vh",
          }}
        >
          <PieChart />
        </div>
      </div>
    </div>
  );
};

export default Mid;
