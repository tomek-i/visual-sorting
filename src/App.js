import logo from "./logo.svg";
import "./App.css";
import { NavigationBar } from "./components/molecules/NavigationBar";
import { ChartController } from "./components/atoms/ChartController";

import BubbleSort, {
  BubbleSortActions,
  BubbleSortDesc,
} from "./algorithms/bubblesort";

import { useEffect, useState } from "react";

export const App = (props) => {
  const ALGORITHM = ["Bubble Sort"];

  const [algorithm, setAlgorithm] = useState(null);
  const [arraySize, setArraySize] = useState(10);
  const [steps, setSteps] = useState([]);
  const [numbers, setNumbers] = useState([]);

  //RUN ON START
  useEffect(() => {
    generateRandomArray();
  }, []);

  //RUN WHEN ARRAY SIZE CHANGES
  useEffect(() => {
    generateRandomArray();
  }, [arraySize]);

  useEffect(() => {
    createNewStepHistory();
  }, [algorithm]);

  const generateRandomArray = () => {
    // Generate pseudo-random number between 1 and max
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max)) + 1;
    }
    const randomNumbers = Array(arraySize)
      .fill(0)
      .map(() => getRandomInt(350 - 5));

    setNumbers(randomNumbers);
    setSteps([]);
  };

  const handleAlgorithmChange = (algorithmName) => {
    setAlgorithm(algorithmName);
    setSteps([]);
  };

  //TODO: should be configurable what max array size is
  const handleArraySizeChange = (size) => {
    size = Number(size);
    size = size > 100 ? 100 : size;
    size = size < 0 ? 0 : size;
    setArraySize(size);
  };

  const createNewStepHistory = () => {
    const sort = BubbleSort;
    if (sort && numbers.length > 0) {
      const allSteps = sort([...numbers]); //copy numbers, otherwise will sort right away
      setSteps(allSteps);
    }
  };
  return (
    <div className="App container-col container-items-center">
      <NavigationBar
        items={ALGORITHM}
        logo={logo}
        arraySizes={[5, 10, 25, 50, 100]}
        onArrayChange={handleArraySizeChange}
        onAlgorithmChange={handleAlgorithmChange}
        onRandom={() => {}}
      />

      <ChartController numbers={numbers} steps={steps} />
    </div>
  );
};

export default App;
