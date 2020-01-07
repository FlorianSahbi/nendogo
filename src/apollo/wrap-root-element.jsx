import React, {useState} from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { client } from "./client";

import { createContainer } from "unstated-next";

function useCounter(initialState = 0) {
  let [count, setCount] = useState(initialState);
  let decrement = () => setCount(count - 1);
  let increment = () => setCount(count + 1);
  return { count, decrement, increment };
}

let Counter = createContainer(useCounter);

export function CounterDisplay() {
  let counter = Counter.useContainer();
  return (
    <div>
      <button onClick={counter.decrement}>-</button>
      <span>{counter.count}</span>
      <button onClick={counter.increment}>+</button>
    </div>
  );
}

export const wrapRootElement = ({ element }) => (
  <Counter.Provider>
   
    <ApolloProvider client={client}>{element}</ApolloProvider>
  </Counter.Provider>
);
