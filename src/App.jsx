import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import "./app.css";
import { useState } from "react";
import data from "./data";
import Profile from "./Profile";

const App = () => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    if (index === 0) {
      setIndex(data.length - 1);
    }
    setIndex((prev) => prev - 1);
  };
  const handleNext = () => {
    if (index === data.length - 1) {
      setIndex(0);
    }
    setIndex((prev) => prev + 1);
  };

  const getRandomIndex = () => {
    const randomIndex = Math.floor(Math.random() * data.length);
    setIndex(randomIndex);
  };
  const { name, image, job, text, id } = data[index];
  return (
    <main>
      <div className="card">
        <Profile key={id} name={name} image={image} job={job} text={text} />

        <div className="btn-controls">
          <div className="controls">
            <button onClick={handlePrev}>
              <FaAngleLeft className="f-icon" />
            </button>
            <button onClick={handleNext}>
              <FaAngleRight className="f-icon" />
            </button>
          </div>
          <button className="btn btn-info" onClick={getRandomIndex}>
            Surprise Me
          </button>
        </div>
      </div>
    </main>
  );
};
export default App;
