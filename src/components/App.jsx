import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({ fName: "", lName: "" });

  function setText(event) {
    const { value, name } = event.target;

    setFullName((prevValue) => {
      if (name === "fName")
        return {
          fName: value,
          lName: prevValue.lName
        };
      else if (name === "lName") {
        return {
          lName: value,
          fName: prevValue.fName
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          onChange={setText}
          value={fullName.fName}
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={setText}
          value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
