import React from "react";

import { Menu, MenuList } from "../components/molecules/Menu";

export default {
  component: Menu,
  title: "Menu",
};

const Template = (args) => <Menu {...args} />;

export const Default = Template.bind({});

Default.args = {
  open: true,
  placeholder: "Sort Algorithm",
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
  onSelect: (item) => {
    Default.args["selected"] = item;
    console.log(Default.args);
  },
};
