import "./App.css";
import useTime from "./hooks/useTime";

function App() {
  const day = useTime<string>("day");
  const hour = useTime<string>("hour");
  const year = useTime<string>("year");
  const month = useTime<string>("month");
  const date = useTime<string>("date");
  const minute = useTime<string>("min");

  return (
    <div>
      <h2>
        {year} {month}, {date} {day}
      </h2>
      <h2>
        {hour} : {minute}
      </h2>
      <h3>Year: {year}</h3>
      <h3>Day: {day}</h3>
      <h3>Hour: {hour}</h3>
    </div>
  );
}

export default App;
