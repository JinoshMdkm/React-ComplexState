import React, { useState } from "react";

function App() {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  function setText() {}
  function getFirstName(event) {
    setFirst(event.target.value);
  }
  function getSecond(event) {
    setSecond(event.target.value);
  }
  return (
    <div className="container">
      <h1>
        Hello {first} {second}
      </h1>
      <form>
        <input name="fName" placeholder="First Name" onChange={getFirstName} />
        <input name="lName" placeholder="Last Name" onChange={getSecond} />
        <button onClick={setText}>Submit</button>
      </form>
    </div>
  );
}

export default App;
