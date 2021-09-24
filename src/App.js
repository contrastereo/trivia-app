import "./styles.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const baseURL = "https://opentdb.com/api.php?amount=10";
  const [items, setItems] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setItems(response.data);
    });
  }, []);

  if (!items) return null;

  return (
    <div className="App">
      <h1>{items.results[0].question}</h1>

      <ul>
        <li>{items.results[0].correct_answer}</li>
        <li>{items.results[0].incorrect_answers[0]}</li>
        <li>{items.results[0].incorrect_answers[1]}</li>
        <li>{items.results[0].incorrect_answers[2]}</li>
      </ul>
    </div>
  );
}
