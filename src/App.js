// const gifts = ["CPU i9", "RAM 32GB RGB", "RGB Keyboard"];
// const courses = [
//   { id: 1, name: "HTML, CSS" },
//   { id: 2, name: "Javascript" },
//   { id: 3, name: "ReactJS" },
// ];

import { useState } from "react";
import Content from "./Content";

function App() {
  // const [checked, setChecked] = useState([]);

  // const [gift, setGift] = useState();

  // const randomGift = () => {
  //   const index = Math.floor(Math.random() * gifts.length);

  //   setGift(gifts[index]);
  // };

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");

  // const handleCheck = (id) => {
  //   setChecked((prev) => {
  //     const isChecked = checked.includes(id);
  //     if (isChecked) {
  //       return checked.filter((item) => item !== id);
  //     } else {
  //       return [...prev, id];
  //     }
  //   });
  // };

  // const handleSubmit = () => {
  // CALL API
  // console.log({
  //   name,
  //   email,
  // });
  //   console.log({ ids: checked });
  // };

  const [show, setShow] = useState(false);

  return (
    //   {courses.map((course) => (
    //     <div key={course.id}>
    /* <input
            type="radio"
            checked={checked === course.id}
            onChange={() => setChecked(course.id)}
          /> */
    /* <input
            type="checkbox"
            checked={checked.includes(course.id)}
            onChange={() => handleCheck(course.id)}
          />
          {course.name}
        </div>
      ))}
      <button onClick={handleSubmit}>Register</button> */
    /* <input value={name} onChange={(e) => setName(e.target.value)} />
      <input value={email} onChange={(e) => setEmail(e.target.value)} /> */
    /* <button onClick={() => setName("Nguyen van B")}></button> */
    /* <h1>{ gift || 'Chưa có phần thưởng'}</h1> */
    /* <button onclick={randomGift}></button> */
    <div style={{ padding: 32 }}>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <Content />}
    </div>
  );
}

export default App;
