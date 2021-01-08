import logo from "./logo.svg";
import "./App.css";

import { NavigationBar } from "./components/molecules/NavigationBar";
import { Bar } from "./components/atoms/Bar";

import BubbleSort, {
  BubbleSortActions,
  BubbleSortDesc,
} from "./algorithms/bubblesort";
import { useEffect, useState } from "react";

export const App = (props) => {
  const ALGORITHM = ["Bubble Sort"];

  const [algorithm, setAlgorithm] = useState(null);
  const [arraySize, setArraySize] = useState(10);
  const [array, setArray] = useState([]);
  const [steps, setSteps] = useState([]);

  //RUN ON START
  useEffect(() => {
    generateRandomArray();
  }, []);

  //RUN WHEN ARRAY SIZE CHANGES
  useEffect(() => {
    generateRandomArray();
  }, [arraySize]);

  useEffect(() => {
    console.log(array);
  }, [array]);

  const generateRandomArray = () => {
    // Generate pseudo-random number between 1 and max
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max)) + 1;
    }

    // Generate an array of length max
    setArray(
      Array(arraySize)
        .fill(0)
        .map(() => getRandomInt(350 - 5))
    );
  };

  const handleArraySizeChange = (size) => {
    size = Number(size);
    size = size > 100 ? 100 : size;
    size = size < 0 ? 0 : size;
    setArraySize(size);
  };

  const createTrace = () => {
    const numbers = [...array];
    const sort = ALGORITHM[algorithm];
    if (sort) {
      const trace = sort(numbers);
      setSteps(trace);
    }
  };

  return (
    <div className="App">
      <NavigationBar
        items={ALGORITHM}
        sticky={true}
        logo={logo}
        sticky={true}
        arraySizes={[5, 10, 25, 50, 100]}
        onArrayChange={handleArraySizeChange}
      />
      <div className="backdrop">
        <div className="drawing">
          {array.map((item, i) => (
            <Bar value={item} width={100 / arraySize} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
