import React from "react";
import Counter from "./Counter";
import Password from "./Password";
import Api from "./Api";
import Api2 from "./Api2";

function App() {
  return (
    <div>
      <div>
        <Counter />
      </div>
      <div>
        <Password />
      </div>
      <div><Api /></div>
      <div>
        <Api2 />
      </div>
    </div>
  );
}

export default App;
