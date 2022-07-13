import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Card from "./Card";

function App() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [result, setResult] = useState([]);
  //API串接
  useEffect(() => {
    fetch("https://hihl.herokuapp.com/message", { method: "GET" })
      .then((res) => res.json())
      .then((ans) => {
        setResult(ans["data"]);
      })
      .catch((e) => {
        console.log(e);
      });
  });

  return (
    <div>
      {result.map((item, index) => {
        return (
          <Stack direction="row" spacing={2}>
            <Card key={index} title={item.title} date={item.date} />
          </Stack>
        );
      })}
    </div>
    // const navigate = useNavigate();
    // const handle = () => {
    //   navigate("/");
  );
}

export default App;
