import React from "react";
import logo from "../logo.svg";
import { NavigationBar } from "../components/molecules/NavigationBar";
//import useSticky from "../hooks/useSticky.js";

export default {
  component: NavigationBar,
  title: "NavigationBar",
};

const Template = (args) => <NavigationBar {...args} />;

export const Default = Template.bind({});
//const { isSticky, element } = useSticky();
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
