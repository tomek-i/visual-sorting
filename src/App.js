import logo from "./logo.svg";
import "./App.css";
import { NavigationBar } from "./components/molecules/NavigationBar";
import { ChartController } from "./components/atoms/ChartController";
import * as Constants from "./constants";

import BubbleSort, {
  BubbleSortActions,
  BubbleSortDesc,
} from "./algorithms/bubblesort";

import { useEffect, useState } from "react";

export const App = (props) => {
  const ALGORITHM = ["Bubble Sort"];

  const [algorithm, setAlgorithm] = useState(null);
  const [arraySize, setArraySize] = useState(Constants.MIN_ARRAY_SIZE);
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

  //TODO: move to util functions
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

  //TODO: move to util function
  const handleArraySizeChange = (size) => {
    size = Number(size);
    size = size > Constants.MAX_ARRAY_SIZE ? Constants.MAX_ARRAY_SIZE : size;
    size = size < Constants.MIN_ARRAY_SIZE ? Constants.MIN_ARRAY_SIZE : size;
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
        arraySizes={Constants.ARRAY_SIZE_SELECTION}
        onArrayChange={handleArraySizeChange}
        onAlgorithmChange={handleAlgorithmChange}
        onRandom={() => {
          generateRandomArray();
        }}
      />

      <ChartController numbers={numbers} steps={steps} />
    </div>
  );
};

export default App;
