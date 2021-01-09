import React from "react";

import { Backdrop } from "../../components/atoms/Backdrop";
import { Bar } from "../../components/atoms/Bar";
export default {
  component: Backdrop,
  title: "Atoms/Backdrop",
};

const generateBars = (numbers, showValue) => {
  const width = 100 / numbers.length;
  const max = Math.max(...numbers);
  return numbers.map((number, index) => {
    const height = (number / max) * 100;
    return (
      <Bar value={number} width={width} height={height} showValue={showValue} />
    );
  });
};

const Template = (args) => <Backdrop {...args} />;

export const Default = Template.bind({});
export const WithBars = Template.bind({});
export const WithBarsAndValues = Template.bind({});

Default.args = {};
WithBars.args = {
  children: generateBars([10, 30, 100, 55, 44, 70, 80], false),
};
WithBarsAndValues.args = {
  children: generateBars([10, 30, 100, 55, 44, 70, 80], true),
};
