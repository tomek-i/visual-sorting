import React from "react";

import { Bar } from "../../components/atoms/Bar";

export default {
  component: Bar,
  title: "Atoms/Bar",
};

const Template = (args) => <Bar {...args} />;

export const Default = Template.bind({});
export const WithValue = Template.bind({});

Default.args = {
  value: 1,
  width: 60,
  height: 150,
  unit: "px",
};
WithValue.args = {
  value: 2,
  width: 60,
  height: 90,
  unit: "px",
  showValue: true,
};
