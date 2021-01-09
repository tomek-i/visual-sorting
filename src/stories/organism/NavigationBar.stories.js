import React from "react";
import logo from "../../logo.svg";
import { NavigationBar } from "../../components/molecules/NavigationBar";

export default {
  component: NavigationBar,
  title: "Organism/NavigationBar",
};

const Template = (args) => <NavigationBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  sticky: true,
  open: true,
  items: [
    "Bubble Sort",
    "Selection Sort",
    "Insertion Sort",
    "Merge Sort",
    "Quick Sort",
    "Quick Sort 3",
    "Heap Sort",
    "Shell Sort",
  ],
  logo: logo,
};
