import { useState } from "react";

const App = () => {
  const [name, setName] = useState();

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      {name ? `O meu nome será ${name}.` : "Eu estou anónimo!"}
      <hr />
      <input type="text" value={name} onChange={handleChange} />
    </div>
  );
};

export default App;
