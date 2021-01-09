import { Bar } from "../Bar";
import "./style.css";

const generateBars = (props) => {
  const numbers = props.numbers;
  if (!numbers || numbers.length === 0) return;
  console.log("NUMBERS ", numbers);
  const items = numbers;
  const max = Math.max(...items);
  console.log("MAX VALUE: ", max);
  const colA = props.colorGroup1;
  const colB = props.colorGroup2;
  const colC = props.colorGroup3;
  const colD = props.colorGroup4;
  const sortedIx = props.sortedIndices;

  const width = 100 / items.length; // in percent

  const result = items.map((item, index) => {
    const height = (item / max) * 100; //in percent

    let stateA = colA ? colA.includes(index) : false;
    let stateB = colB ? colB.includes(index) : false;
    let stateC = colC ? colC.includes(index) : false;
    let stateD = colD ? colD.includes(index) : false;
    let sorted = sortedIx ? sortedIx.includes(index) : false;

    return (
      <Bar
        value={item}
        width={width}
        height={height}
        key={`${index}_${item}`}
        colors={(stateA, stateB, stateC, stateD)}
        sorted={sorted}
      />
    );
  });
  return result;
};

export const Chart = ({
  numbers,
  colorGroup1,
  colorGroup2,
  colorGroup3,
  colorGroup4,
  sortedIndices,
}) => {
  console.log("CHART: ", numbers);
  return (
    <>
      {generateBars({
        numbers,
        colorGroup2,
        colorGroup3,
        colorGroup4,
        colorGroup1,
        sortedIndices,
      })}
    </>
  );
};
