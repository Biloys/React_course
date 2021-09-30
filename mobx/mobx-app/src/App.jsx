import { observer } from "mobx-react-lite";
import "./App.css";
import Counter from "./stores/Counter";

export const App = observer(() => {
  return (
    <div>
      <h2>Counter: {Counter.count} </h2>
      <button onClick={() => Counter.inc()}>+</button>
      <button onClick={() => Counter.dec()}>-</button>
    </div>
  );
});
