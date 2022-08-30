import { useState } from "react";

// const gifts = ["CPU i9", "RAM 32GB RGB", "RGB Keyboard"];
const courses = [
  { id: 1, name: "HTML, CSS" },
  { id: 2, name: "Javascript" },
  { id: 3, name: "ReactJS" },
];

function App() {
  const [checked, setChecked] = useState();

  // const [gift, setGift] = useState();

  // const randomGift = () => {
  //   const index = Math.floor(Math.random() * gifts.length);

  //   setGift(gifts[index]);
  // };

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");

  const handleSubmit = () => {
    // CALL API
    // console.log({
    //   name,
    //   email,
    // });
    console.log({ id: checked });
  };

  return (
    <div className="App" style={{ padding: 32 }}>
      {courses.map((course) => (
        <div key={course.id}>
          {/* <input
            type="radio"
            checked={checked === course.id}
            onChange={() => setChecked(course.id)}
          /> */}
          <input
            type="checkbox"
            checked={checked === course.id}
            onChange={() => setChecked(course.id)}
          />
          {course.name}
        </div>
      ))}
      <button onClick={handleSubmit}>Register</button>
      {/* <input value={name} onChange={(e) => setName(e.target.value)} />
      <input value={email} onChange={(e) => setEmail(e.target.value)} /> */}
      {/* <button onClick={() => setName("Nguyen van B")}></button> */}
      {/* <h1>{ gift || 'Chưa có phần thưởng'}</h1> */}
      {/* <button onclick={randomGift}></button> */}
    </div>
  );
}

export default App;
