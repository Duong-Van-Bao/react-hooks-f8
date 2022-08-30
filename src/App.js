import { useState } from "react";

const orders = [100, 200, 300];

function App() {
  // const [counter, setCounter] = useState(() => {
  //   const total = orders.reduce((total, cur) => total + cur);
  //   return total;
  // });
  // // tuân theo quy hướng camplecase để code dể đọc(setCounter)
  // const handleIncrease = () => {
  //   setCounter((prevState) => prevState + 1);
  // };

  const [info, setInfo] = useState({
    name: "Nguyen Van A",
    age: 18,
    address: "Ha Noi, VN",
  });

  const handleUpdate = () => {
    // setInfo((prev) => {
    //   //logic...

    //   return {
    //     ...info,
    //     bio: "Yêu màu hồng ^^",
    //   };
    // });
    setInfo({
      ...info,
      bio: "Yêu màu hồng ^^",
    });
  };

  return (
    <div className="App" style={{ padding: 20 }}>
      <h1>{JSON.stringify(info)}</h1>
      <button onClick={handleUpdate}>Increase</button>
    </div>
  );
}

export default App;
