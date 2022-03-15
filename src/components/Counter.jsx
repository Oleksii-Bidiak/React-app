import React, { useState } from "react";

const Counter = () => {
   const [count, setCount] = useState(0);

   function increment() {
      setCount(count + 1);
   }

   function decrement() {
      setCount(count - 1);
   }

   return (
      <div>
         <h1>{count}</h1>

         <button type="button" className="class" onClick={decrement}>Decrement</button>
         <button type="button" className="class" onClick={increment}>Increment</button>
      </div>
   )
}

export default Counter;