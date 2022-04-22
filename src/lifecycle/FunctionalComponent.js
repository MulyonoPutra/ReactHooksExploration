import React, { useState, useEffect } from "react";

function FunctionalComponent() {
  console.log("FunctionalComponent init");
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount((prevState) => {
      return prevState + 1;
    });
  };

  /**
   * componentDidMount. Dijalankan hanya 1 kali ketika component dibuat.
   */
  useEffect(() => {
    console.log("FunctionalComponent useEffect: componentDidMount");
  }, []);

  /**
   * componentDidUpdate. Dijalankan ketika ada perubahan pada state atau props (count).
   */
  useEffect(() => {
    if (count > 0) {
      console.log("FunctionalComponent useEffect: componentDidUpdate");
    }
  }, [count]);

  /**
   * description: ketika component dihapus atau di destroy pada DOM
   */
  useEffect(() => {
    return () => {
      console.log("FunctionalComponent useEffect: componentWillUnmount");
    };
  }, []);

  console.log("FunctionalComponent render DOM");
  return (
    <div>
      <h1>Functional Component</h1>
      <p>
        <button onClick={handleCount}>Count</button>
        {count}
      </p>
    </div>
  );
}

export default FunctionalComponent;
