import { Bar } from "../Bar";
import "./style.css";

const generateBars = (props) => {
  const numbers = props.numbers;
  if (!numbers || numbers.length === 0) return;
  const items = numbers;
  const max = Math.max(...items);
  const colA = props.currentStep ? props.currentStep.colorGroup1 : null;
  const colB = props.currentStep ? props.currentStep.colorGroup2 : null;
  const colC = props.currentStep ? props.currentStep.colorGroup3 : null;
  const colD = props.currentStep ? props.currentStep.colorGroup4 : null;
  const sortedIx = props.currentStep ? props.currentStep.sortedIndicies : null;

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
        colors={{ stateA, stateB, stateC, stateD }}
        sorted={sorted}
      />
    );
  });
  return result;
};

export const Chart = ({ numbers, currentStep }) => {
  return (
    <>
      {generateBars({
        numbers,
        currentStep,
      })}
    </>
  );
};
